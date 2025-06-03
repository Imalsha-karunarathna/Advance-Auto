import { Award, Star, PenToolIcon as Tool, Users } from "lucide-react";

export default function AboutOwner() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#005f70] to-[#f79406] rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/assets/samantha.jpg"
                alt="Samantha, Owner of Advance Auto"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#005f70]/90 to-transparent p-6">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#f79406] fill-current"
                    />
                  ))}
                </div>
                <div className="text-white font-bold">
                  Toyota&apos;s Best Automobile Technician of the Year (2019)
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-[#005f70]">20+</div>
              <div className="text-[#f79406] font-semibold">
                Years Experience
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-2 bg-[#005f70] text-white rounded-full text-sm font-semibold mb-6">
              MEET THE OWNER
            </div>
            <h2 className="text-4xl font-bold text-[#005f70] mb-6">Samantha</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                I&apos;m a qualified automobile technician with over 20 years of
                experience in the industry. I have worked in large, reputed
                companies such as Toyota Australia, Nissan Australia and
                Mitsubishi Australia.
              </p>

              <p className="text-lg leading-relaxed">
                I was awarded &lsquo;Toyota&apos;s Best Automobile Technician of
                the Year&lsquo; in 2019 in appreciation of my comprehensive
                knowledge in vehicle maintenance and repairs.
              </p>

              <p className="text-lg leading-relaxed">
                My experience expands further in European car brands such as
                Mercedes, BMW, Land Rover, and many more.
              </p>

              <p className="text-lg leading-relaxed">
                After many years of working for major companies, I thought 2023
                is the year to start my own automobile service business Advance
                Auto Pvt. Ltd. Our primary goal is to provide high quality,
                reliable and comprehensive automobile service and repair at an
                affordable price, and most importantly to deliver services with
                100% customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#005f70]/10 rounded-full flex items-center justify-center">
                  <Tool className="w-6 h-6 text-[#005f70]" />
                </div>
                <div>
                  <div className="font-semibold text-[#005f70]">
                    Expert Technician
                  </div>
                  <div className="text-sm text-gray-600">
                    Certified Professional
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#f79406]/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#f79406]" />
                </div>
                <div>
                  <div className="font-semibold text-[#005f70]">
                    Award Winner
                  </div>
                  <div className="text-sm text-gray-600">
                    Industry Recognized
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#005f70]/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#005f70]" />
                </div>
                <div>
                  <div className="font-semibold text-[#005f70]">
                    Customer Focused
                  </div>
                  <div className="text-sm text-gray-600">100% Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
