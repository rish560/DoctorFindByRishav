import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Error({ statusCode }) {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: '60vh', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#e74c3c' }}>
            {statusCode || 'Client-side'} Error
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#6c757d', marginBottom: '2rem' }}>
            {statusCode
              ? `A ${statusCode} error occurred on server`
              : 'An error occurred on client'}
          </p>
          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: '600'
            }}
          >
            Go Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
