import React from 'react';
import { Link } from 'react-router-dom';

const HeaderToReg = () => {
  return (
    <div className="border-solid bg-white border-0 border-b border-[#6E4B84] h-[80px] w-full">
      <div className=" flex items-center justify-between relative left-[75px] bottom-[-19px] w-11/12">
        <Link
          to="/"
          className="text-[#6F00B6] ml-[12px] font-roboto tracking-wider font-semibold text-3xl">
          UIDON.KG
        </Link>
      </div>
    </div>
  );
};

export default HeaderToReg;
