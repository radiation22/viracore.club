import React from "react";
import Login from "../Login/Login";
import HomeFooter from "../Footer/HomeFooter";
import pic1 from "../../assets/register.jpg";
import About from "../About/About";
import Points from "../Points/Points";
import Touch from "../Touch/Touch";

const StartPage = () => {
  return (
    <div>
      <div className="flex bg-[#2F0B0C] flex-col-reverse md:flex lg:flex-row items-center py-5 px-2 w-full">
        {/* Content section */}
        <div className="w-[100%] p-2 lg:p-8 lg:w-[50%]">
          <h1 className="text-white text-4xl font-bold">
            Connect with friends!
          </h1>
          <p className="text-white text-xl py-5">
            Share what's new and life moments with your friends.
          </p>

          <img
            className="rounded-xl  border-2 mt-3 mx-auto"
            src={pic1}
            alt=""
          />
        </div>

        {/* Login section */}
        <div className="w-[100%] lg:w-[50%] p-2 lg:p-10">
          <Login></Login>
        </div>
      </div>

      <About></About>

      <HomeFooter></HomeFooter>
    </div>
  );
};

export default StartPage;
