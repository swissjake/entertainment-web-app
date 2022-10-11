import Image from "next/image";
import React from "react";
import movie from "../../assets/navbar/movie.svg";
import movie2 from "../../assets/navbar/movie2.svg";
import tvSeries from "../../assets/navbar/tvSeries.svg";
import bookmark from "../../assets/navbar/bookmark.svg";
import menu from "../../assets/navbar/menu.svg";
import profile from "../../assets/navbar/profile.svg";

const navItems: { img: any; ref: string }[] = [
  { img: menu, ref: "/" },
  { img: movie2, ref: "/" },
  { img: tvSeries, ref: "/" },
  { img: bookmark, ref: "/" },
];

const Navbar = () => {
  return (
    <>
      <nav className="w-[96px] bg-[#161D2F] h-[960px] rounded-[20px] py-[32px] mt-[32px] hidden lg:block">
        <div className="flex flex-col items-center justify-between h-full w-full">
          <div className="flex flex-col items-center">
            <div className=" cursor-pointer">
              <Image alt="movie" src={movie} objectFit="contain" />
            </div>
            <div className="flex flex-col mt-[75px] gap-y-[40px] cursor-pointer">
              {navItems.map((item, index) => (
                <Image
                  alt="nav-images"
                  src={item.img}
                  objectFit="contain"
                  key={index}
                />
              ))}
            </div>
          </div>

          {/* profile image */}
          <div className=" cursor-pointer">
            <Image alt="profile-image" src={profile} />
          </div>
        </div>
      </nav>

      {/* MOBILE NAV AND TABLET NAV */}
      <nav className="w-full bg-[#161D2F] h-[72px] md:rounded-[10px] px-[24px] md:mt-[24px] md:mx-[32px] lg:hidden">
        <div className="flex justify-between items-center h-full w-full">
          <div className="flex w-[25px] md:w-[32px] h-[20px] md:h-[25px] cursor-pointer">
            <Image alt="movie" src={movie} objectFit="contain" />
          </div>

          <div className="flex items-center cursor-pointer gap-x-[24px] md:gap-x-[32px] h-full">
            {navItems.map((item, index) => (
              <div
                className="flex w-[16px] md:w-[20px] h-[16px] md:h-[20px]"
                key={index}
              >
                <Image alt="nav-images" src={item.img} objectFit="contain" />
              </div>
            ))}
          </div>

          {/* profile image */}
          <div className="flex w-[24px] md:w-[32px] h-[24px] md:h-[32px]  cursor-pointer">
            <Image alt="profile-image" src={profile} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
