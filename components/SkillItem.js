import React from "react";
import Image from "next/image";

const SkillItem = ({ name, icon }) => {
  return (
    <div className=" p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-100  ">
      <div className=" flex flex-col justify-around items-center lg:flex-row">
        <div>
          <Image src={icon} alt="" width={100} height={100} />
        </div>
        <div>
          <h3 className=" text-md md:text-lg lg:text-2xl tracking-wider ">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
