import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="welcome-section">
      <h3>Welcome to the Shoppies!</h3>
      <p>
        This application allows you to nominate up to five of your favourite movies... for
        the sake of fun. Simply type into the search bar and press nominate.
      </p>
      <p>
        Thank you Shopify for giving me this awesome challenge to explore my capabilities.
      </p>

      <p>
        Made by
        <span style={{display: "block"}}>Anna Chowattanakul</span>
      </p>
    </div>
  );
};

export default WelcomeMessage;
