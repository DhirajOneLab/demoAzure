import React from "react";
import { useAuth } from "./auth/Auth";

const LoginButton = () => {
  const { login, logout,signup, isAuthenticated, user } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
          
        </>
      ) : (<>
        <button onClick={login}>Login</button>
        <button onClick={signup}>singup</button>
      </>
       
      )}
    </div>
  );
};

export default LoginButton;
