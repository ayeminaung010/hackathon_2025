import { useEffect, useState } from "react";
import liff from "@line/liff";
import { LINE_LIFF_ID } from "../constant/constant";

export default function Profile() {
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
    <div className="container-fluid">
      {/* User Profile Section */}
      {profile && (
        <div className="d-flex align-items-center gap-3 p-3 bg-light rounded mb-3">
          <img
            src={profile.pictureUrl}
            alt="Profile"
            style={{ width: 60, height: 60, borderRadius: "50%" }}
          />
          <div>
              {/* <strong>Display Name:</strong> {profile.displayName} */}
              {/* <strong>User ID:</strong> {profile.userId}
              <strong>Status:</strong> {profile.statusMessage || "No status"} */}
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
