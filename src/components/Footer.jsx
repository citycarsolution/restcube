import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaHome,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* ================= DESKTOP FOOTER ================= */}
      <footer className="bg-[#f5f6f8] border-t border-gray-200 pt-10 pb-6">
        <div className="max-w-6xl mx-auto px-4 text-center">

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://www.facebook.com/restcube2022"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF4D4D] text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="http://www.instagram.com/restcube_cubicles"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF4D4D] text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919664551771"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF4D4D] text-white"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.youtube.com/@restcubecubicle"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF4D4D] text-white"
            >
              <FaYoutube />
            </a>
          </div>

          {/* FOOTER LINKS */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 mb-4">
            <Link to="/" className="hover:text-[#FF4D4D]">Home</Link>
            <Link to="/about" className="hover:text-[#FF4D4D]">About</Link>
            <Link to="/privacy-policy" className="hover:text-[#FF4D4D]">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-[#FF4D4D]">
              Terms & Conditions
            </Link>
          </nav>

          {/* COPYRIGHT */}
          <p className="text-xs text-gray-500">
            © 2026 All rights reserved – RestCube Cubicle
          </p>
        </div>
      </footer>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex md:hidden">

        <a
          href="/"
          className="flex-1 py-3 flex flex-col items-center text-xs text-gray-700"
        >
          <FaHome className="text-lg text-[#FF4D4D]" />
          Home
        </a>

        <a
          href="https://wa.me/919664551771"
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-3 flex flex-col items-center text-xs text-gray-700"
        >
          <FaWhatsapp className="text-lg text-green-500" />
          WhatsApp
        </a>

        <a
          href="tel:+919664551771"
          className="flex-1 py-3 flex flex-col items-center text-xs text-gray-700"
        >
          <FaPhoneAlt className="text-lg text-[#FF4D4D]" />
          Call
        </a>
      </div>
    </>
  );
}
