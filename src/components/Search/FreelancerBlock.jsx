import React from 'react';
import { useNavigate } from 'react-router';

const FreelancerBlock = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate('/freelancer/custprofile')} className="flex flex-col w-[94%] cursor-pointer h-[18%] ml-[1rem] mt-[1.2rem] border border-[#E3E3E3] rounded-[10px] bg-[#FFF] p-[20px]">
      <div className="flex w-[840px] h-[70px]">
        <div className="w-[336px] h-[70px] flex">
          <div className="rounded-[70px] w-[60px] h-[60px] ">
            <img src="/src/assets/image/Ellipse 16.svg" />
          </div>
          <div className="w-[124px] h-[62px] mt-[-6px] ml-2 p-[5px]">
            <p className="text-[#232323] text-[.9rem] font-normal">Гульчапчап</p>
            <p className="text-[#232323] text-[.9rem] font-normal leading-normal">UX/UI Designer</p>
            <p className="text-[#B3B3B3] text-[.9rem] font-normal leading-normal">Кыргызстан</p>
          </div>
          <p className="mt-[19px] ml-[15px] text-[#232323] font-normal text-[.9rem] leading-normal font-montserrat">
            700 сом/час
          </p>
        </div>
      </div>
      <div>
        <p className="mt-[0.4rem] w-[700px] text-[1.4rem] h-[60px] text-black text-base font-normal leading-5">
          Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить ваши
          творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах дизайнерских
          решений.
        </p>
      </div>
      <div className="mt-5 flex w-[700px] gap-5 h-[40px] text-black font-normal leading-normal">
        <p className="text-[#232323] text-[.9rem] font-normal flex items-center px-[.2rem] py-[.rem] rounded-[20px] border border-[#E3E3E3] bg-[#E3E3E3]">
          Дизайн пользовательского интерфейса
        </p>
        <p className="text-[#232323] text-base font-normal flex items-center px-[13px] py-[11px] gap-[10px] rounded-[20px] border border-[#E3E3E3] bg-[#E3E3E3]">
          Figma
        </p>
        <p className="text-[#232323] text-base font-normal flex items-center px-[13px] py-[11px] gap-[10px] rounded-[20px] border border-[#E3E3E3] bg-[#E3E3E3]">
          Ux/UI
        </p>
        <p className="text-[#232323] w-[130px] text-base font-normal flex items-center pl-[13px] py-[11px] gap-[10px] rounded-[20px] border border-[#E3E3E3] bg-[#E3E3E3]">
          Web designe
        </p>
      </div>
    </div>
  );
};

export default FreelancerBlock;
