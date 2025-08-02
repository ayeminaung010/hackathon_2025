import { useEffect, useState } from "react";
// import "./App.css";
import liff from "@line/liff";
import { LINE_LIFF_ID } from "./constant/constant";

function App() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // This function will run when the component mounts
    const initializeLiff = async () => {
      try {
        await liff.init({
          liffId: LINE_LIFF_ID, // Replace with your own LIFF ID
        });

        if (!liff.isLoggedIn()) {
          liff.login(); // Redirects to LINE login screen
        } else {
          const userProfile = await liff.getProfile();
          setProfile(userProfile);
        }
      } catch (e) {
        setError(`LIFF initialization failed: ${e.message}`);
      }
    };

    initializeLiff();
  }, []);

  return (
    <>
      <div> home </div>
      <h1>React with LIFF</h1>
      {profile && (
        <div class=" d-flex ">
          <img
            src={profile.pictureUrl}
            alt="Profile"
            style={{ width: 100, borderRadius: "50%" }}
          />
          <p>Display Name: {profile.displayName}</p>
          <p>User ID: {profile.userId}</p>
          <p>Status Message: {profile.statusMessage}</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default App;
