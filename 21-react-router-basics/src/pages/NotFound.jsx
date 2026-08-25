/*

import { Navigate, useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/",{state:"Redirected from 404 page"}); // Redirect to home page after 3 seconds  
    }, 3000); // Redirect to home page after 3 seconds 
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Navigate to="/" />
        </div>
    );
}

*/


import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { state: "Redirected from 404 page" });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist. Redirecting to home in 3 seconds...</p>
    </div>
  );
}