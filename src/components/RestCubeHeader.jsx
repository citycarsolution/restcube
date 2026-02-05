import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/restcube-logo.png";

export default function RestCubeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setProductOpen(false);
    setCompanyOpen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" onClick={closeAll}>
            <img src={logo} alt="RestCube" className="h-9" />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-800">
            <Link to="/" className="hover:text-red-600">HOME</Link>
            <Link to="/about" className="hover:text-red-600">ABOUT</Link>

            {/* PRODUCTS */}
            <div className="relative">
              <button
                onClick={() => {
                  setProductOpen(!productOpen);
                  setCompanyOpen(false);
                }}
                className="flex items-center gap-1 hover:text-red-600"
              >
                PRODUCTS <span className="text-xs">▼</span>
              </button>

              {productOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-white border rounded-xl shadow-xl">
                  <Link to="/products/toilet-cubicles" onClick={closeAll}
                    className="block px-4 py-3 hover:bg-gray-100">
                    Toilet Cubicles
                  </Link>
                  <Link to="/services/urinal-partition-systems" onClick={closeAll}
                    className="block px-4 py-3 hover:bg-gray-100">
                    Urinal Partition
                  </Link>
                </div>
              )}
            </div>

            {/* COMPANY */}
            <div className="relative">
              <button
                onClick={() => {
                  setCompanyOpen(!companyOpen);
                  setProductOpen(false);
                }}
                className="flex items-center gap-1 hover:text-red-600"
              >
                COMPANY WORK <span className="text-xs">▼</span>
              </button>

              {companyOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border rounded-xl shadow-xl">
                  <Link to="/privacy-policy" onClick={closeAll}
                    className="block px-4 py-3 hover:bg-gray-100">
                    Privacy Policy
                  </Link>
                  <Link to="/terms-conditions" onClick={closeAll}
                    className="block px-4 py-3 hover:bg-gray-100">
                    Terms & Conditions
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => {
              setMenuOpen(true);
              setProductOpen(false);
              setCompanyOpen(false);
            }}
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl
        transform transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <span className="font-bold text-red-600 text-lg">MENU</span>
          <button onClick={closeAll} className="text-xl">✕</button>
        </div>

        {/* MENU ITEMS */}
        <div className="px-6 py-6 space-y-6 font-semibold text-gray-800">

          <Link
            to="/"
            onClick={closeAll}
            className="block border-b pb-3"
          >
            HOME
          </Link>

          <Link
            to="/about"
            onClick={closeAll}
            className="block border-b pb-3"
          >
            ABOUT
          </Link>

          {/* PRODUCTS */}
          <div>
            <button
              className="w-full flex justify-between items-center py-3 border-b"
              onClick={() => setProductOpen(!productOpen)}
            >
              PRODUCTS
              <span className="text-xl">{productOpen ? "−" : "+"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300
              ${productOpen ? "max-h-40 mt-3" : "max-h-0"}`}
            >
              <Link
                to="/products/toilet-cubicles"
                onClick={closeAll}
                className="block py-2 pl-4 text-sm"
              >
                Toilet Cubicles
              </Link>
              <Link
                to="/services/urinal-partition-systems"
                onClick={closeAll}
                className="block py-2 pl-4 text-sm"
              >
                Urinal Partition
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <button
              className="w-full flex justify-between items-center py-3 border-b"
              onClick={() => setCompanyOpen(!companyOpen)}
            >
              COMPANY WORK
              <span className="text-xl">{companyOpen ? "−" : "+"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300
              ${companyOpen ? "max-h-32 mt-3" : "max-h-0"}`}
            >
              <Link
                to="/privacy-policy"
                onClick={closeAll}
                className="block py-2 pl-4 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                onClick={closeAll}
                className="block py-2 pl-4 text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeAll}
        />
      )}
    </>
  );
}
