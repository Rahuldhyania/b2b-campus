import React from "react";
import bublebg from "../../../../public/images/bublebg.webp"
import learnboys from "../../../../public/images/learnboys.webp"
import girllearn from "../../../../public/images/girllearn.webp"
import man1 from "../../../../public/images/man1.webp"
import man2 from "../../../../public/images/man2.webp"
import man3 from "../../../../public/images/man3.webp"
import man4 from "../../../../public/images/man4.webp"
import man5 from "../../../../public/images/man5.webp"
import girl1 from "../../../../public/images/girl1.webp"
import ratingstar from "../../../../public/images/ratingstar.webp"
import Image from "next/image";
import SearchBar from "../Page-Components/SearchBar";
import Title from "./Title";
import Buttons from "./Buttons";
import Header from "./Header";
import Globaltitle from "./Globaltitle";


const Banner = () => {
  return (
    <div className="">
      <Header />
      <Globaltitle
        titleStart={"Bored of "}
        highlightText={"“average”?"}
        titleEnd={"Build skills that actually pay"}
        description={"Learn real-world B2B skills that help you earn faster, grow smarter, and stand out louder"} />

      <div className="banner-wrap flex justify-evenly">
        <div className="boy  ">

          {/* Left Image */}
          <Image
            src={learnboys}
            width={1000}
            height={500}
            alt="boy"
            className="max-w-[480px]"
          />
        </div>

        <div className="div">
          <div className="w-full  py-10">
            <div className=" w-full  m-auto flex gap-15  justify-center items-center ">

              {/* Left: Tutors */}
              <div className="items-center">
                {/* Overlapping images */}
                <div className="flex -space-x-4">
                  <Image
                    src={man1}
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-white shadow"
                    alt="tutor"
                  />
                  <Image
                    src={man2}
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-white shadow"
                    alt="tutor"
                  />
                  <Image
                    src={girl1}
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-white shadow"
                    alt="tutor"
                  />
                </div>

                {/* Text */}
                <div className="text-center">
                  <p className="text-purple-600 text-xl font-semibold">10+</p>
                  <p className="text-gray-700 text-sm">Experienced Tutors</p>
                </div>
              </div>

              {/* Right: Reviews */}
              <div className="items-center">
                {/* Review images */}
                <div className="flex -space-x-4">
                  <Image
                    src={man3}
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-white shadow"
                    alt="reviewer"
                  />
                  <Image
                    src={man4}
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-white shadow"
                    alt="reviewer"
                  />
                  <Image
                    src={man5}
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-white shadow"
                    alt="reviewer"
                  />
                </div>

                {/* Stars + Text */}
                <div className="text-center">
                  <div className="flex justify-center text-yellow-400 text-xl">
                    <Image
                      src={ratingstar}
                      width={106}
                      height={36}
                      className=" rounded-full border-4 border-white shadow"
                      alt="reviewer"
                    />
                  </div>
                  <p className="text-purple-600 text-lg font-semibold">4.5K</p>
                  <p className="text-gray-700 text-sm">Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="baner-btn flex gap-5">
            <div className="buttons text-[25px] flex justify-center m-auto">
              <Buttons btnname='Explore All Courses' text_color={'text-white'} />
            </div>

            <div className="buttons text-[25px] flex justify-center m-auto">
              <Buttons btnname='Start Learning Today' text_color={'text-black'} btn_primary={false} btn_bg={"bg-[#E4DFFF]"} />
            </div>
          </div>
          <SearchBar />
        </div>

        <div className="girl">

          {/* Left Image */}
          <Image
            src={girllearn}
            width={1000}
            height={500}
            alt="girl"
            className="max-w-[532px]  "
          />
        </div>
      </div>




    </div>
  );
};

export default Banner;
