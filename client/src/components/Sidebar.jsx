import { useState } from "react";
import { navLinks, navLibrary } from "../constants";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-screen min-w-1/6 bg-bg-second py-[20px] px-[36px]  flex flex-col justify-between z-50 transition-all ease-in font-custom ">
       <div className="flex items-center   ">
        <span className="text-2xl ease-in text-cyan-300"><i class="bx bx-pulse"></i></span> 
        <Link to="/">
          <h1 className="font-bold text-lg ease-in text-cyan-500">BlendBridge</h1>
        </Link>
        </div>
      <div className="">
       
       

        {/* navlinks */}
        <h1 className="text-text-primary text-sm font-bold  mb-[12px] ml-4 uppercase">Menu</h1>
        <ul className="list-none">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-blue-600 font-regular text-[14px] p-2"
                  : "text-white  hover:text-blue- cursor-pointer text-[14px] font-regular flex flex-row items-center p-2"
              }`}
              onClick={() => setActive(link.title)}
            >
              <Link to={`/${link.id}`} className="">
                <span
                  className="text-xl px-[6px]  gap-1 "
                  dangerouslySetInnerHTML={{ __html: link.icon }}
                >
                 
                </span>
                {link.title}
              </Link>
            </li>
          ))}

          {/* <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-slate-500 font-medium hover:text-blue- cursor-pointer text-[18px] ml-3">signin</li>
            )}
          </Link> */}
        </ul>
        </div>

        {/* second section */}
        <div>
          <h1 className="text-text-primary font-bold ml-4  mb-[12px] text-sm uppercase">Create</h1>
          <ul className="list-none">
            {navLibrary.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-blue-600 font-regular text-[14px] p-2"
                    : "text-white  hover:text-blue- cursor-pointer text-[14px] font-regular flex flex-row items-center p-2"
                }`}
                onClick={() => setActive(link.title)}
              >
                <Link to={`/${link.id}`} className="">
                  <span
                    className="text-xl px-[6px]  gap-1"
                    dangerouslySetInnerHTML={{ __html: link.icon }}
                  >
                    {}
                  </span>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}
