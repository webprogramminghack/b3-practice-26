import React from "react";
import { UserProvider } from "../../context/provider";
import { BrowserRouter } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </UserProvider>
  );
};

export default MainLayout;
