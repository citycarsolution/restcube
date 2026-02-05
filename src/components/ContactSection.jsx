import { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCity,
} from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "Mumbai",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const text = `Hello RestCube 👋
Name: ${form.name}
Phone: ${form.phone}
City: ${form.city}
Requirement: ${form.message}`;

    window.open(
      `https://wa.me/919664551771?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 px-4 bg-[#0b0f1a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#C81E1E]">
              RestCube
            </span>
          </h2>

          <p className="text-gray-300 mb-6">
            Modular Toilet Partition & Cubicle Solutions across India.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex gap-3 items-center">
              <FaCity className="text-[#FF4D4D]" />
              Mumbai · Thane · Pune · Bangalore · Delhi · Hyderabad · Nashik
            </div>

            <div className="flex gap-3 items-center">
              <FaWhatsapp className="text-[#25D366]" />
              +91-9664551771 – Cubicle Inquiry
            </div>

            <div className="flex gap-3 items-center">
              <FaPhoneAlt className="text-[#FF4D4D]" />
              +91-7738877661 – RestCube
            </div>

            <div className="flex gap-3 items-center">
              <FaEnvelope className="text-[#FF4D4D]" />
              info@restcube.in
            </div>

            <div className="flex gap-3 items-center">
              <FaClock className="text-[#FF4D4D]" />
              Mon–Sat · 10:00 AM – 6:30 PM
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-8 text-lg">
            <a href="https://www.facebook.com/restcube2022" target="_blank" rel="noreferrer"
              className="bg-[#FF4D4D]/20 hover:bg-[#FF4D4D] p-3 rounded-full">
              <FaFacebookF />
            </a>
            <a href="http://www.instagram.com/restcube_cubicles" target="_blank" rel="noreferrer"
              className="bg-[#FF4D4D]/20 hover:bg-[#FF4D4D] p-3 rounded-full">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919664551771" target="_blank" rel="noreferrer"
              className="bg-[#25D366]/20 hover:bg-[#25D366] p-3 rounded-full">
              <FaWhatsapp />
            </a>
            <a href="https://www.youtube.com/@restcubecubicle" target="_blank" rel="noreferrer"
              className="bg-[#FF4D4D]/20 hover:bg-[#FF4D4D] p-3 rounded-full">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleWhatsAppSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl space-y-4"
        >
          <input
            name="name"
            required
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-3 rounded bg-black/40 text-white outline-none border border-white/10"
          />

          <input
            name="phone"
            required
            placeholder="Mobile Number"
            onChange={handleChange}
            className="w-full p-3 rounded bg-black/40 text-white outline-none border border-white/10"
          />

          <select
            name="city"
            onChange={handleChange}
            className="w-full p-3 rounded bg-black/40 text-white outline-none border border-white/10"
          >
           <option>Mumbai</option>
                  <option>Thane</option>
                  <option>Pune</option>
                  <option>Bangalore</option>
                  <option>Navi Mumbai</option>
                  <option>Hyderabad</option>
                  <option>Nashik</option>
                  <option>Ahmedabad</option>
                  <option>Surat</option>
                  <option>Vadodra</option>
                  <option>Rajkot</option>
          </select>

          <textarea
            name="message"
            placeholder="Requirement"
            onChange={handleChange}
            className="w-full p-3 rounded bg-black/40 text-white outline-none border border-white/10"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white
            bg-gradient-to-r from-[#FF4D4D] to-[#C81E1E] hover:opacity-90"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>

      {/* MAP */}
      <div className="max-w-6xl mx-auto mt-16 rounded-2xl overflow-hidden border border-white/10">
        <iframe
          title="RestCube Location"
          src="https://www.google.com/maps?q=Indira+Krupa+Siddharth+Nagar+Bandra+East+Mumbai&output=embed"
          width="100%"
          height="360"
          loading="lazy"
        />
      </div>
    </section>
  );
}
