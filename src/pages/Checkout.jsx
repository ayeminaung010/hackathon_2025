import BottomNavbar from '../components/BottomNavbar';
import Cart from '../components/checkout_component/Cart';
import Navbar from '../components/Navbar';
import image from '../assets/new-arrival/image.png';
import image1 from '../assets/new-arrival/image1.png';
import image2 from '../assets/new-arrival/image2.png';
import image3 from '../assets/new-arrival/image3.png';
import image4 from '../assets/new-arrival/image4.png';

// This is our main page component.
function Checkout() {
  const cartItems = [
    {
      id: 1,
      name: "Nike Air Force 1 '07",
      price: 4300,
      imageUrl: image
    },
    {
      id: 2,
      name: "Adidas Stan Smith",
      price: 3800,
      imageUrl: image1
    },
    {
      id: 3,
      name: "Converse Chuck 70",
      price: 3200,
      imageUrl: image2
    },
    {
      id: 4,
      name: "Air Jordan 1 Mid",
      price: 5000,
      imageUrl: image3
    },
    {
      id: 5,
      name: "New Balance 550",
      price: 4500,
      imageUrl: image4
    }
  ];

  return (
    <div style={{ background: '#e9edf2', minHeight: '100vh', paddingBottom: 70 }}>
      <Navbar />
      <div style={{ paddingTop: '20px' }}>
        <Cart items={cartItems} />
      </div>
      {/* checkcout btn  */}
      <div className="container text-center mt-4">
        <button onClick={() => alert('Checkout successfully')} className="btn btn-primary" style={{ width: '200px', height: '50px', borderRadius: '25px' }}>
          Proceed to Checkout
        </button>
      </div>
      <BottomNavbar />
    </div>
  );
}

export default Checkout;