import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "4db50b64-0d53-4bd7-8658-08b14694c649", // Replace with your Azure AD B2C client ID
    authority: "https://login.microsoftonline.com/DemoADB2Ctesting.onmicrosoft.com", 
    redirectUri: "http://localhost:5173", // Your app's redirect URI
  },
  cache: {
    cacheLocation: "localStorage", // Can be "localStorage" or "sessionStorage"
    storeAuthStateInCookie: false, // For browser compatibility
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;