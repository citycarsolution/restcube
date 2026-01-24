import { useEffect } from "react";

import hdfc from "../assets/customers/hdfc.png";
import icici from "../assets/customers/icici.png";
import lic from "../assets/customers/lic.png";
import gim from "../assets/customers/gim.png";
import dream11 from "../assets/customers/dream11.png";
import my11 from "../assets/customers/my11circle.png";
import podar from "../assets/customers/podar.png";
import hyderabadAirport from "../assets/customers/hyderabad-airport.png";
import bsnl from "../assets/customers/bsnl.png";
import pnb from "../assets/customers/pnb.png";

const customers = [
  { name: "HDFC Bank", img: hdfc },
  { name: "ICICI Bank", img: icici },
  { name: "LIC India", img: lic },
  { name: "Goa Institute of Management", img: gim },
  { name: "Dream11", img: dream11 },
  { name: "My11Circle", img: my11 },
  { name: "Podar International School", img: podar },
  { name: "Hyderabad International Airport", img: hyderabadAirport },
  { name: "BSNL", img: bsnl },
  { name: "Punjab National Bank", img: pnb },
];

export default function CustomersSection() {
  /* SEO SCHEMA */
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "RestCube",
      url: "https://www.restcube.in",
      brand: { "@type": "Brand", name: "RestCube" },
      client: customers.map((c) => ({
        "@type": "Organization",
        name: c.name,
      })),
    });
    document.head.appendChild(script);
  }, []);

  return (
    <section className="py-28 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Trusted by <span className="text-red-600">Leading Brands</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-5 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            RestCube is trusted by banks, airports, educational institutions
            and corporates across India for premium toilet cubicle solutions.
          </p>
        </div>
      </div>

      {/* AUTO SCROLL – GLASS CARDS */}
      <div className="relative">
        <div className="flex gap-12 animate-marquee px-10">
          {[...customers, ...customers].map((c, i) => (
            <div
              key={i}
              className="
                min-w-[220px] h-32
                rounded-3xl
                bg-white/80
                backdrop-blur-xl
                border border-white/60
                shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                flex items-center justify-center
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
              "
            >
              <img
                src={c.img}
                alt={`${c.name} client logo`}
                className="
                  max-h-16
                  object-contain
                  drop-shadow-sm
                  transition-all duration-300
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
