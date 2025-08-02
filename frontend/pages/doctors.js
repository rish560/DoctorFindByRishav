import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import dynamic from 'next/dynamic';
import ClientOnly from '../components/ClientOnly';

// Dynamic imports to prevent SSR issues
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
const SearchBar = dynamic(() => import('../components/SearchBar'), { ssr: false });
const DoctorCard = dynamic(() => import('../components/DoctorCard'), { ssr: false });

const API_BASE_URL = '/api';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { search } = router.query;

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      fetchDoctors(search);
    }
  }, [search, mounted]);

  const fetchDoctors = async (searchQuery = '') => {
    try {
      setLoading(true);
      setError(null);
      
      const url = searchQuery 
        ? `${API_BASE_URL}/doctors?search=${encodeURIComponent(searchQuery)}`
        : `${API_BASE_URL}/doctors`;
      
      const response = await axios.get(url);
      setDoctors(response.data);
    } catch (err) {
      setError('Failed to fetch doctors. Please try again later.');
      console.error('Error fetching doctors:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    if (query.trim()) {
      router.push(`/doctors?search=${encodeURIComponent(query)}`);
    } else {
      router.push('/doctors');
    }
  };

  const renderContent = () => {
    if (!mounted) {
      return (
        <div className="loading">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔄</div>
          Loading...
        </div>
      );
    }

    if (loading) {
      return (
        <div className="loading">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔄</div>
          Loading doctors...
        </div>
      );
    }

    if (error) {
      return (
        <div className="error">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>❌</div>
          {error}
        </div>
      );
    }

    if (doctors.length === 0) {
      return (
        <div className="no-results">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</div>
          {search ? `No doctors found for "${search}"` : 'No doctors found'}
          <p style={{ marginTop: '1rem', color: '#6c757d' }}>
            Try searching with different keywords or check back later.
          </p>
        </div>
      );
    }

    return (
      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    );
  };

  return (
    <ClientOnly>
      <div>
        <Navbar />
        
      <main>
        <section style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white',
          padding: '3rem 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              {search && mounted ? `Search Results for "${search}"` : 'Find Your Doctor'}
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
              {doctors.length > 0 && !loading && mounted ? 
                `Found ${doctors.length} doctor${doctors.length !== 1 ? 's' : ''}` :
                'Search for doctors by name, specialty, or location'
              }
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        <section style={{ padding: '3rem 0', minHeight: '400px' }}>
          <div className="container">
            {renderContent()}
          </div>
        </section>
      </main>
      
      <Footer />
      </div>
    </ClientOnly>
  );
}
