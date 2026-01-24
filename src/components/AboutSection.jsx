export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold">
            About <span className="text-red-600">RestCube</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Trusted toilet cubicle manufacturer in India delivering premium
            commercial restroom solutions across major cities.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Leading Toilet Cubicle Manufacturer in India
            </h3>

            <p className="text-gray-700 leading-relaxed mb-5">
              <strong>RestCube</strong> is a leading toilet cubicle manufacturer
              and supplier in India, specializing in high-quality commercial
              restroom cubicle solutions. We design, manufacture and install
              durable toilet cubicles and urinal partition systems for offices,
              malls, hospitals, airports, schools and public facilities.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              Our restroom cubicle systems are engineered using premium materials
              such as stainless steel, HPL compact boards, nylon and aluminum
              fittings, ensuring long-term performance, hygiene and modern
              aesthetics.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With projects executed across{" "}
              <strong>
                Mumbai, Thane, Pune, Nashik, Bangalore, Hyderabad and Delhi
              </strong>
              , RestCube is trusted by architects, contractors and commercial
              project managers nationwide.
            </p>
          </div>

          {/* RIGHT POINTS */}
          <div className="bg-[#f9fafb] rounded-2xl p-8 shadow-sm">
            <h4 className="text-xl font-bold mb-6">
              Why Choose <span className="text-red-600">RestCube?</span>
            </h4>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Premium toilet cubicle materials & fittings</li>
              <li>✔ Custom-designed restroom cubicle solutions</li>
              <li>✔ Hygienic, moisture & corrosion resistant systems</li>
              <li>✔ Experienced installation & project execution team</li>
              <li>✔ Pan-India service & reliable after-sales support</li>
            </ul>
          </div>
        </div>

        {/* COMMITMENT */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold mb-4">
            Our Commitment to Quality
          </h4>

          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At RestCube, we are committed to delivering reliable, hygienic and
            visually appealing toilet cubicle systems that meet modern
            commercial washroom standards. From consultation and design to
            installation and maintenance, we ensure excellence at every stage
            of your restroom project.
          </p>
        </div>

      </div>
    </section>
  );
}
