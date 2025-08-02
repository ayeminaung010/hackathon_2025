import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PageHeader({ title, showBackButton = true }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div
    >
      <div
        style={{
          background: "#4a90e2",
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          boxShadow: "0 2px 6px #0002",
        }}
      >
        {showBackButton && (
          <button
            onClick={handleBackClick}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '0',
              fontSize: '16px',
              fontWeight: '500',
              marginRight: '10px'
            }}
          >
            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
            Back
          </button>
        )}
        
        {title && (
          <span style={{ 
            color: "#fff", 
            fontWeight: 500, 
            fontSize: 18, 
            flex: 1 
          }}>
            {title}
          </span>
        )}
      </div>
    </div>
  );
}
