// components/profile_components/ProfileUI.jsx
import React, { useEffect, useState } from 'react';
import { Container, Card, Image, ListGroup, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ProfileUI() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeLiff = async () => {
      try {
        await window.liff.init({ liffId: process.env.REACT_APP_LINE_LIFF_ID });
        if (!window.liff.isLoggedIn()) {
          window.liff.login(); // Redirect to LINE login if not logged in
        } else {
          const profile = await window.liff.getProfile();
          setProfile(profile);
        }
      } catch (error) {
        console.error('LIFF initialization failed', error);
      } finally {
        setLoading(false);
      }
    };

    initializeLiff();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading profile...</div>;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center py-5">
      <Card style={{
        width: '22rem',
        backgroundColor: '#ffffff',
        border: 'none',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }} className="text-center p-4">
        <Card.Body>
          {/* Profile Image */}
          <Image
            src={profile?.pictureUrl || "https://placehold.co/100x100/808b96/FFFFFF/png?text=User"}
            roundedCircle
            className="mb-3"
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#808b96',
            }}
          />

          {/* User's Name */}
          <Card.Title as="h1" className="fw-bold fs-4">
            {profile?.displayName || "JOHN DOE"}
          </Card.Title>

          {/* Address Box */}
          <ListGroup className="my-4" style={{ backgroundColor: '#e7f0f7', borderRadius: '15px' }}>
            <ListGroup.Item className="text-start fw-bold" style={{ backgroundColor: 'transparent', border: 'none' }}>
              Address
            </ListGroup.Item>
            <ListGroup.Item className="text-start" style={{ backgroundColor: 'transparent', border: 'none', paddingTop: 0, paddingBottom: 2 }}>
              <strong>Street:</strong> Bang Mod Chomthong
            </ListGroup.Item>
            <ListGroup.Item className="text-start" style={{ backgroundColor: 'transparent', border: 'none', paddingTop: 0, paddingBottom: 2 }}>
              <strong>City:</strong> Bangkok
            </ListGroup.Item>
            <ListGroup.Item className="text-start" style={{ backgroundColor: 'transparent', border: 'none', paddingTop: 0, paddingBottom: 2 }}>
              <strong>State/province/area:</strong> Bangkok
            </ListGroup.Item>
            <ListGroup.Item className="text-start" style={{ backgroundColor: 'transparent', border: 'none', paddingTop: 0, paddingBottom: 2 }}>
              <strong>Zip code:</strong> 10150
            </ListGroup.Item>
            <ListGroup.Item className="text-start" style={{ backgroundColor: 'transparent', border: 'none', paddingTop: 0 }}>
              <strong>Country:</strong> Thailand
            </ListGroup.Item>
          </ListGroup>

          {/* Status Buttons */}
          <div className="d-flex justify-content-between text-center mb-4">
            <Button
              variant="light"
              className="d-flex flex-column align-items-center p-2"
              style={{
                backgroundColor: '#e0eaf4',
                border: '1px solid #b0c4de',
                borderRadius: '10px',
                width: '80px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => navigate('/toship')}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d1e7dd';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#e0eaf4';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3b82f6" viewBox="0 0 24 24">
                <path d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4zm10 17H4V9h16v12z" />
              </svg>
              <span className="mt-1" style={{ fontSize: '0.8rem' }}>To Ship</span>
            </Button>

            <Button
              variant="light"
              className="d-flex flex-column align-items-center p-2"
              style={{
                backgroundColor: '#e0eaf4',
                border: '1px solid #b0c4de',
                borderRadius: '10px',
                width: '80px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => navigate('/toreceive')}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d1e7dd';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#e0eaf4';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3b82f6" viewBox="0 0 24 24">
                <path d="M19.5 9.5c-1.01 0-1.91.39-2.62.97L12 13.44l-4.88-2.97A3.484 3.484 0 0 0 4.5 9.5C2.57 9.5 1 11.07 1 13s1.57 3.5 3.5 3.5h15c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zM4.5 15c-.83 0-1.5-.67-1.5-1.5S3.67 12 4.5 12s1.5.67 1.5 1.5S5.33 15 4.5 15zm15-1.5h-10v-1h10v1z" />
              </svg>
              <span className="mt-1" style={{ fontSize: '0.8rem' }}>To Receive</span>
            </Button>

            <Button
              variant="light"
              className="d-flex flex-column align-items-center p-2"
              style={{
                backgroundColor: '#e0eaf4',
                border: '1px solid #b0c4de',
                borderRadius: '10px',
                width: '80px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => navigate('/arrived')}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d1e7dd';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#e0eaf4';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3b82f6" viewBox="0 0 24 24">
                <path d="M21.41 11.59l-7.99-8c-.78-.78-2.05-.78-2.83 0L3.41 11.59c-.78.78-.78 2.05 0 2.83l8 7.99c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04 0-2.82zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <span className="mt-1" style={{ fontSize: '0.8rem' }}>Arrived</span>
            </Button>
          </div>

          {/* Feedback Banner */}
          <Row>
            <Col>
              <div className="d-flex align-items-center p-3 text-white" style={{ backgroundColor: '#4a90e2', borderRadius: '15px' }}>
                <div className="flex-grow-1 text-start">
                  <h5 className="fw-bold m-0">Rate Our Services!!!!</h5>
                  <p className="m-0">Fill Our Survey!!!!</p>
                  <p className="m-0">Your Feedback Matters!!!!</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" opacity="0.5" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}