


import Toolsservice from "@/components/tools"

export default function Home() {
  return (
    <> 
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">
      Star Web Maker AI Tools Usable In Your IT Next Generation Implementation.
      </h2>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Since its founding in 2009, Star Web Maker has been a trusted IT development and 
      consulting company dedicated to providing innovative solutions to our clients. 
      With a strong focus on customer satisfaction, we have successfully served over 
      5120 clients, helping them achieve their digital goals. We specialize in providing
      a comprehensive suite of digital solutions tailored to meet the needs of both 
      startups and enterprises.
      </p>
    </div>
    <Toolsservice />
  </div>
</section>
    </>
  );
}
