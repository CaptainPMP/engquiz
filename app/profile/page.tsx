import React from 'react';
import './profile.css';

const EditPro = () => {
    return (
        <div className="edit-pro">
            <header className="header">
                <h1>Home</h1>
                <div className="profile-icon">K</div>
            </header>
            <div className="profile-container">
                <h2>User Profile</h2>
                <div className="profile-section">
                    <div className="profile-info">
                        <div className="profile-picture">
                            <div className="circle"></div>
                        </div>
                        <div className="profile-name">
                            <p>Lorem Ipsum</p>
                            <span className="edit-icon">✏️</span>
                        </div>
                    </div>
                    <button className="change-photo">Change Photo</button>
                </div>
                <h3>Email</h3>
                <div className="email-section">
                    <div className="email-info">
                        <div className="email-icon">G</div>
                        <p>xxx.xxxxa@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPro;