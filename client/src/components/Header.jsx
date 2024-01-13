import { useState } from "react";
import { Link } from "react-router-dom";

import { Headerlinks } from "../constants";


export default function Header() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-row w-4/6 h-[90px] py-[10px]  px-[36px] justify-between">
      <ul className="list-none flex gap-1 justify-center">
        {Headerlinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title
                ? " text-blue-500  font-regular text-[14px] p-2"
                : "text-white  hover:text-blue- cursor-pointer text-[14px] font-regular flex flex-row ease-in p-2  w-[100%] nav-hover"
            }`}
            onClick={() => setActive(link.title)}
          >
            <Link to={`/${link.id}`} className="">
              <span
                className="text-xl px-[6px] mr-1 flex-row "
                dangerouslySetInnerHTML={{ __html: link.icon }}
              ></span>
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
      <div className="flex justify-center items-center gap-[6px] w-[65%] text-text-primary b-[1px] border-solid bg-slate-700 h-12 p-[10px] lg:mt-[1px] mt-2 rounded-md">
      <i class='bx bx-search'></i>
       <input type="text" placeholder="Type here to search" className="w-[100%] bg-transparent outline-none text-white " />
      </div>
    </div>
  );
}
