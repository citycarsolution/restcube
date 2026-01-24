import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RestCubeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all
        ${scrolled ? "bg-white shadow-lg" : "bg-[#f2f2f2]"}`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="font-bold text-xl text-red-700">
            RestCube
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-800">

            <Link
              to="/"
              className="bg-red-700 text-white px-4 py-2 rounded-full"
            >
              HOME
            </Link>

            <Link to="/about" className="hover:text-red-600">
              ABOUT
            </Link>

            {/* COMPANY WORK */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCompanyOpen(!companyOpen)}
                className="hover:text-red-600 flex items-center gap-1"
              >
                COMPANY WORK <span className="text-xs">▼</span>
              </button>

              {companyOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border shadow-xl rounded-lg overflow-hidden">
                  <Link
                    to="/privacy-policy"
                    className="block px-4 py-3 hover:bg-gray-100"
                    onClick={() => setCompanyOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms-conditions"
                    className="block px-4 py-3 hover:bg-gray-100"
                    onClick={() => setCompanyOpen(false)}
                  >
                    Terms & Conditions
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* HEADER SPACER */}
      <div className="h-16" />

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="font-bold text-red-600">MENU</span>
          <button
            className="text-xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="px-5 py-6 space-y-5 text-base font-semibold text-gray-800">

          <Link
            to="/"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>

          <Link
            to="/about"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>

          {/* MOBILE COMPANY WORK */}
          <div>
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="w-full flex justify-between items-center"
            >
              <span>COMPANY WORK</span>
              <span>{mobileCompanyOpen ? "−" : "+"}</span>
            </button>

            {mobileCompanyOpen && (
              <div className="mt-3 ml-3 space-y-3 text-sm text-gray-700">
                <Link
                  to="/privacy-policy"
                  className="block"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileCompanyOpen(false);
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-conditions"
                  className="block"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileCompanyOpen(false);
                  }}
                >
                  Terms & Conditions
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
