import { useMsal } from "@azure/msal-react";

export const useAuth = () => {
  const { instance, accounts } = useMsal();
  const signupRequest = {
    scopes: ["openid", "profile", "https://login.microsoftonline.com/6eb207c9-b859-45fa-8497-a892dc94f36c"]
  };
  const login = async () => {
    await instance.loginPopup();
  };
  const signup = async () => {
    await instance.loginPopup(signupRequest);
  };
  const logout = () => {
    instance.logoutPopup();
  };

  return { login, logout,signup, isAuthenticated: accounts.length > 0, user: accounts[0] || null };
};
