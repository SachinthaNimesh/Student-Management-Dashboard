import React from "react";
import Logo from "@/components/Logo";
import SignInButton from "@/components/SignInButton";
import Header from "@/components/Header";
const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl w-full mx-auto text-center flex flex-col items-center justify-center">
          <img
            src="/SJSF-LOGO.webp"
            alt="SJSF Logo"
            className="h-20 w-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-blue-600 mb-6">
            Employee Management Portal
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Shiranee Joseph De Seram Foundation
          </p>

          <div className="mt-8 flex justify-center">
            <SignInButton />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Shiranee Joseph De Seram
            Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
