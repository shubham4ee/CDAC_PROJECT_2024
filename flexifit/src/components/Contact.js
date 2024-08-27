import React from 'react';
import '../css/contact.css';

const Contact = () => {
    // Sample contact details data
    const contactDetails = {
        name: 'FlexiFit Gym',
        email: 'contact@flexifitgym.com',
        contactNo: '+91 234 567 890',
        location: '123 Fitness Avenue, Bandra West, Mumbai'
    };

    return (
        <div class="contactBody">
            <div className="contact-container" >



                <h2>Contact Details</h2>
                <div className="contact-card">
                    <div className="contact-item">
                        <strong>Name:</strong> {contactDetails.name}
                    </div>
                    <div className="contact-item">
                        <strong>Email ID:</strong> <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                    </div>
                    <div className="contact-item">
                        <strong>Contact No:</strong> <a href={`tel:${contactDetails.contactNo}`}>{contactDetails.contactNo}</a>
                    </div>
                    <div className="contact-item">
                        <strong>Location:</strong> {contactDetails.location}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
