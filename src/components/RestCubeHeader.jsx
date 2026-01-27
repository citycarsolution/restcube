import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/restcube-logo.png";

export default function RestCubeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isProductActive = location.pathname.startsWith("/products");

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all
        ${scrolled ? "bg-white shadow-lg" : "bg-[#f2f2f2]"}`}
        style={{ height: "var(--header-height)" }}
      >
        <div
          className="max-w-7xl mx-auto px-4 flex items-center justify-between"
          style={{ height: "100%" }}
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="RestCube" className="h-9" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-800">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full ${
                isActive("/") ? "bg-red-700 text-white" : "hover:text-red-600"
              }`}
            >
              HOME
            </Link>

            <Link
              to="/about"
              className={isActive("/about") ? "text-red-600" : "hover:text-red-600"}
            >
              ABOUT
            </Link>

            {/* PRODUCTS */}
            <div className="relative">
              <button
                onClick={() => {
                  setProductOpen(!productOpen);
                  setCompanyOpen(false);
                }}
                className={`flex items-center gap-1 ${
                  isProductActive ? "text-red-600" : "hover:text-red-600"
                }`}
              >
                PRODUCTS <span className="text-xs">▼</span>
              </button>

              {productOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border shadow-xl rounded-lg z-50">
                  <ProductLink to="/products/toilet-cubicles" />
                  <ProductLink to="/products/shower-cubicles" />
                  <ProductLink to="/products/changing-room-cubicles" />
                  <ProductLink to="/products/school-toilet-cubicles" />
                  <ProductLink to="/products/mall-toilet-partitions" />
                  <ProductLink to="/products/ceiling-hung-cubicles" />
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border shadow-xl rounded-lg z-50">
                  <NavItem to="/privacy-policy" />
                  <NavItem to="/terms-conditions" />
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
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <span className="font-bold text-red-600">MENU</span>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="px-5 py-6 space-y-5 font-semibold">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>

          <div>
            <button
              className="w-full flex justify-between"
              onClick={() => setProductOpen(!productOpen)}
            >
              PRODUCTS <span>{productOpen ? "−" : "+"}</span>
            </button>

            {productOpen && (
              <div className="mt-3 ml-3 space-y-3 text-sm">
                <MobileProduct to="/products/toilet-cubicles" close={setMenuOpen} />
                <MobileProduct to="/products/shower-cubicles" close={setMenuOpen} />
                <MobileProduct to="/products/changing-room-cubicles" close={setMenuOpen} />
                <MobileProduct to="/products/school-toilet-cubicles" close={setMenuOpen} />
                <MobileProduct to="/products/mall-toilet-partitions" close={setMenuOpen} />
                <MobileProduct to="/products/ceiling-hung-cubicles" close={setMenuOpen} />
              </div>
            )}
          </div>

          <Link to="/privacy-policy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>
          <Link to="/terms-conditions" onClick={() => setMenuOpen(false)}>Terms & Conditions</Link>
        </div>
      </div>

      {/* OVERLAY */}
      {(menuOpen || productOpen || companyOpen) && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => {
            setMenuOpen(false);
            setProductOpen(false);
            setCompanyOpen(false);
          }}
        />
      )}
    </>
  );
}

/* ===== SMALL COMPONENTS ===== */

const NavItem = ({ to }) => (
  <Link to={to} className="block px-4 py-3 hover:bg-gray-100">
    {to.replace("/", "").replace("-", " ")}
  </Link>
);

const ProductLink = ({ to }) => (
  <Link to={to} className="block px-4 py-3 hover:bg-gray-100">
    {to.split("/").pop().replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
  </Link>
);

const MobileProduct = ({ to, close }) => (
  <Link to={to} onClick={() => close(false)} className="block">
    {to.split("/").pop().replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
  </Link>
);
