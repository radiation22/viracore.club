import React from "react";
import about from "../../assets/about_us.jpg";
import pic1 from "../../assets/lgbtq1.jpg";
import pic2 from "../../assets/lgbtq2.jpg";
import pic3 from "../../assets/lgbtq3.jpg";
import pic4 from "../../assets/lgbtq4.jpg";
const About = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <div className="md:flex gap-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-red-700 text-4xl uppercase font-bold">
            About Us
          </h1>
          <p className="py-8 text-justify">
            Create authority and build trust through online communities with
            this list of the best online community platforms. If you have an
            online business, chances are your customers are spread far and wide
            – across different cities, countries, and even continents. In the
            past, the most popular way to bring customers together was to throw
            social events, including conferences, gatherings and more. But
            today, online communities are the most effective way to build strong
            bonds with your customers and prospective clients. Brands that can
            tap into their online audience and build genuine connections with
            their followers can gain loyal customers, repeat sales, and valuable
            brand advocates. The best part? You can monetize your community too
            with subscriptions, digital products, exclusive content, and more.
          </p>
          <p>
            Here are the best online community platforms in 2023 – to help
            engage your customers, monetize your following, and level up your
            business.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img className="mx-auto" src={about} alt="" />
        </div>
      </div>

      {/* <div className="text-center text-white my-16 px-5 md:px-10 py-10 bg-gradient-to-r from-[#FF5200] from-20% via-[#0FBA00] via-40% to-[#660191] to-80%">
        <h1 className="text-xl">CONNECTING FOR FUN</h1>
        <p className="text-xl mt-5">
          We believe connnecting should be fun ! with discussion cummunities and
          pride events , you can find your people without tiring out your thumbs
          .
        </p>
      </div> */}
    </div>
  );
};

export default About;
