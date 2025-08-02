export default function MobileApp() {
  const appStyle = {
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    maxWidth: "400px",
    margin: "0 auto",
    position: "relative",
    fontFamily: "system-ui, -apple-system, sans-serif",
  };

  const mainContentStyle = {
    paddingBottom: "80px", // Space for fixed bottom nav
  };

  const sectionStyle = {
    padding: "0 16px",
    marginBottom: "24px",
  };

  const sectionTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "16px",
  };

  const scrollContainerStyle = {
    display: "flex",
    gap: "16px",
    overflowX: "auto",
    paddingBottom: "8px",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  return (
    <div style={appStyle}>
      {/* Top Navigation */}
      <TopNavBar />

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Hero Banner */}
        <HeroBanner />

        {/* Hot Sales Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Hot Sales</h2>
          <div style={scrollContainerStyle}>
            <ProductCard title="Nike Air Force" price="₿1999" />
            <ProductCard title="Nike Air Force" price="₿999" />
            <ProductCard title="Nike Air Force" price="₿999" />
          </div>
        </div>

        {/* Recommend For You Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Recommend For You</h2>
          <div style={scrollContainerStyle}>
            <ProductCard
              title="Nike Air Force"
              price="₿1999"
              isRecommended={true}
            />
            <ProductCard
              title="Nike Air Force"
              price="₿1999"
              isRecommended={true}
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />

      {/* Hide scrollbar for webkit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
