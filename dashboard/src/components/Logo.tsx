import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img src="/SJSF-LOGO.webp" alt="SJSF Logo" className="h-12 w-auto" />
      <span className="ml-2 text-lg font-medium text-gray-700">
        Employee Management Portal
      </span>
    </div>
  );
};

export default Logo;
