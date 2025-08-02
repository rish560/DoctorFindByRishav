const DoctorCard = ({ doctor }) => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    
    return stars.join('');
  };

  return (
    <div className="doctor-card">
      <div className="doctor-image">
        {getInitials(doctor.name)}
      </div>
      
      <h3 className="doctor-name">{doctor.name}</h3>
      <p className="doctor-specialty">{doctor.specialty}</p>
      
      <div className="doctor-details">
        <div className="detail-row">
          <span className="detail-label">Rating:</span>
          <div className="rating">
            <span className="stars">{renderStars(doctor.rating)}</span>
            <span className="detail-value">({doctor.rating})</span>
          </div>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Location:</span>
          <span className="detail-value">{doctor.location}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Experience:</span>
          <span className="detail-value">{doctor.experience}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Hospital:</span>
          <span className="detail-value">{doctor.hospital}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Fee:</span>
          <span className="detail-value fee">${doctor.consultationFee}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Status:</span>
          <span className={`availability ${doctor.availability.toLowerCase()}`}>
            {doctor.availability}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
