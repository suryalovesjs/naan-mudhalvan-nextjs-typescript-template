import React from "react";
import "./globals.css"; // Importing the global CSS file

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      {/* You can add a header or a footer here if needed */}
      {children}
    </div>
  );
};

export default Layout;