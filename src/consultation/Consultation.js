import React from 'react';
import './consultation.css';
import Footer from '../main-interface/Footer';

function Consultation() {
  return (
    <>
    <section className="featured-consultants">
      <h2>استشارات طبية</h2>
      <div className="consultant-card">
        <img src= {require('../images/doc-robert.webp')} alt="Consultant" />
        <div className="consultant-info">
          <h3>Dr. John Doe</h3>
          <p>Specialty: Anxiety</p>
          <p>Years of Experience: 10</p>
          <p>Rating: ★★★★☆</p>
          <button>View Profile</button>
        </div>
      </div>
      <div className="consultant-card">
        <img src={require('../images/doc-shamano.webp')} alt="Consultant" />
        <div className="consultant-info">
          <h3>Dr. Jane Smith</h3>
          <p>Specialty: Depression</p>
          <p>Years of Experience: 8</p>
          <p>Rating: ★★★★☆</p>
          <button>View Profile</button>
        </div>
        
      </div>
      <div className="consultant-card">
        <img src={require('../images/doc-shamano.webp')} alt="Consultant" />
        <div className="consultant-info">
          <h3>Dr. Jane Smith</h3>
          <p>Specialty: Depression</p>
          <p>Years of Experience: 8</p>
          <p>Rating: ★★★★☆</p>
          <button>View Profile</button>
        </div>
        
      </div>
      <div className="consultant-card">
        <img src={require('../images/doc-shamano.webp')} alt="Consultant" />
        <div className="consultant-info">
          <h3>Dr. Jane Smith</h3>
          <p>Specialty: Depression</p>
          <p>Years of Experience: 8</p>
          <p>Rating: ★★★★☆</p>
          <button>View Profile</button>
        </div>
        
      </div>
      <div className="consultant-card">
        <img src={require('../images/doc-shamano.webp')} alt="Consultant" />
        <div className="consultant-info">
          <h3>Dr. Jane Smith</h3>
          <p>Specialty: Depression</p>
          <p>Years of Experience: 8</p>
          <p>Rating: ★★★★☆</p>
          <button>View Profile</button>
        </div>
        
      </div>
    </section>
    < Footer/>
    </>
  );
}

export default Consultation;
