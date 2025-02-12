import { useState } from 'react';
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/clerk-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Sales", path: "/pos" },
    { name: "Product", path: "/product" },
    { name: "Orders", path: "/order" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
  <svg 
    width="50" height="50"  // Adjusted size
    viewBox="0 0 200 200" 
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
  >
    {/* Shop Roof */}
    <rect x="30" y="40" width="140" height="20" fill="#007bff" />
    
    {/* Shop Base */}
    <rect x="40" y="60" width="120" height="80" fill="#3498db" />
    
    {/* Door */}
    <rect x="90" y="100" width="30" height="40" fill="#ffffff" stroke="#000" strokeWidth="2"/>
    
    {/* Awning */}
    <rect x="35" y="40" width="20" height="20" fill="#ffffff"/>
    <rect x="55" y="40" width="20" height="20" fill="#007bff"/>
    <rect x="75" y="40" width="20" height="20" fill="#ffffff"/>
    <rect x="95" y="40" width="20" height="20" fill="#007bff"/>
    <rect x="115" y="40" width="20" height="20" fill="#ffffff"/>
    <rect x="135" y="40" width="20" height="20" fill="#007bff"/>
    
    {/* Windows */}
    <rect x="50" y="80" width="30" height="20" fill="#ffffff" stroke="#000" strokeWidth="2"/>
    <rect x="120" y="80" width="30" height="20" fill="#ffffff" stroke="#000" strokeWidth="2"/>
  </svg>

  {/* Text next to the logo */}
  <span className="text-lg md:text-xl font-semibold text-gray-700">
    Dukaan
  </span>
</a>



          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md focus:ring-2 focus:ring-gray-300 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Toggle Menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            <SignedIn>
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-sm text-gray-700 hover:text-blue-600 font-medium transition duration-200"
                >
                  {link.name}
                </a>
              ))}
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-md mt-2 z-20">
            <SignedIn>
              {navLinks.map(link => (
                <a key={link.name} href={link.path} className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                  {link.name}
                </a>
              ))}
              <div className="border-t border-gray-200 py-3">
                <div className="pl-4">
                  <UserButton />
                </div>
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        )}
      </nav>
    </header>
  );
}
