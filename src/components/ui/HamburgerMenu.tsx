import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
    className="relative z-50">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#4CAF50] text-white focus:outline-none"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 pt-20">
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span className="ml-2 text-lg font-medium">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/documents"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span className="ml-2 text-lg font-medium">Documents</span>
              </a>
            </li>
            <li>
              <a
                href="/bills"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span className="ml-2 text-lg font-medium">Bills</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Semi-transparent blurred overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-20 backdrop-blur-sm transition-all duration-300 z-30"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default HamburgerMenu;
