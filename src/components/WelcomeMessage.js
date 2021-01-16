import React from "react";

const WelcomeMessage = () => {
    return(
        <div className="welcome-section">
            <h3>Welcome to the Shoppies!</h3>
            <p>This application allows you to nominate your top five favourite movies for the sake of fun.
                Simply type into the search bar and press nominate. Don't worry! No previous experience required!
            </p>
            <p>
                Thank you Shopify for giving me this awesome challenge to explore my capabilities.
            </p>

            <p>Made by
                <span style={{display:"block"}}>
                    Anna Chowattanakul
                </span>
            </p>
        </div>
    )

}

export default WelcomeMessage;