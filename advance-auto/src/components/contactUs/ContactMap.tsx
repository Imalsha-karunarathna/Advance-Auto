export default function ContactMap() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005f70] mb-4">Locate Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re conveniently located in Dandenong. Visit us today!
          </p>
        </div>
      </div>

      <div className="relative w-full h-[500px] overflow-hidden flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-12 z-10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.0753625306406!2d145.2246284!3d-37.9987026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad613fe0cdd50dd%3A0x489c7bba01c2ac6d!2s1%2F5%20Plunkett%20Rd%2C%20Dandenong%20VIC%203175%2C%20Australia!5e0!3m2!1sen!2slk!4v1748946075728!5m2!1sen!2slk"
          width="100%"
          height="450"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Advance Auto Location"
          className="filter transition-all duration-500"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none border-t-8 border-[#005f70]"></div>
      </div>
    </section>
  );
}
