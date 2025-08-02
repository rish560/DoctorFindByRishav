import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const router = useRouter();

  const handleSearch = (query) => {
    if (query.trim()) {
      router.push(`/doctors?search=${encodeURIComponent(query)}`);
    } else {
      router.push('/doctors');
    }
  };

  return (
    <div>
      <Navbar />
      
      <main>
        <section className="hero">
          <div className="container">
            <h1>Find Your Perfect Doctor</h1>
            <p>Search from thousands of qualified doctors in your area</p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
                Why Choose DoctorFind by Rishav?
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                We connect you with the best healthcare professionals in your area
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem',
              marginTop: '3rem'
            }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  🔍
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
                  Easy Search
                </h3>
                <p style={{ color: '#6c757d' }}>
                  Find doctors by name, specialty, or location with our advanced search
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  ⭐
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
                  Verified Reviews
                </h3>
                <p style={{ color: '#6c757d' }}>
                  Read authentic reviews and ratings from real patients
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  📅
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
                  Quick Booking
                </h3>
                <p style={{ color: '#6c757d' }}>
                  Book appointments instantly with available doctors
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

// Force server-side rendering
export async function getServerSideProps() {
  return {
    props: {},
  };
}
