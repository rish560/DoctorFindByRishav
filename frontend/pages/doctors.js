import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DoctorCard from '../components/DoctorCard';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    fetchDoctors(search);
  }, [search]);

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
              {search ? `Search Results for "${search}"` : 'Find Your Doctor'}
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
              {doctors.length > 0 && !loading ? 
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
  );
}
