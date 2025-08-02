
export default function ProductCard({ title, price, isRecommended = false }) {
const cardStyle = {
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    minWidth: isRecommended ? '160px' : '130px',
    backgroundColor: 'white'
  };

  const imageStyle = {
    background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
    padding: '16px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
    fontSize: '14px'
  };

  const contentStyle = {
    padding: '12px'
  };

  const titleStyle = {
    fontWeight: '600',
    fontSize: '14px',
    color: '#1f2937',
    marginBottom: '4px'
  };

  const priceStyle = {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0'
  };
  
  return (
    <div style={cardStyle}>
      <div style={imageStyle}>Shoe Image</div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={priceStyle}>{price}</p>
      </div>
    </div>
  );
}
