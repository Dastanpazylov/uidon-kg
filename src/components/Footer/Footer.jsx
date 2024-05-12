import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ customStyles, footerLinks, customArrStyles }) => {
  const socialMediaIcons = [
    { src: '/src/assets/img/WelcomePage/tg.svg', alt: 'tg' },
    { src: '/src/assets/img/WelcomePage/vk.svg', alt: 'vk' },
    { src: '/src/assets/img/WelcomePage/inst.svg', alt: 'inst' },
  ];

  return (
    <footer className={`${customStyles} fixed`}>
      <Link to="/" className="w-[160px] h-[42px]">
        <h1 className="font-bold tracking-wider font-roboto text-3xl text-[#6F00B6]">UIDON.KG</h1>
      </Link>
      
      {footerLinks && footerLinks.map((section, index) => (
        <div key={index} className={`${customArrStyles} relative left-[1px]`}>
          <div className="text-[#232323] font-montserrat text-[20px] tracking-wider font-semibold mb-3">
            {section.title}
          </div>
          <div className="flex flex-col gap-2">
            {section.links.map((link, linkIndex) => (
              <Link
                to="/"
                key={linkIndex}
                className="text-[#6E4B84] tracking-wide  font-montserrat text-lg font-light">
                {link}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div className="flex flex-col items-center w-[190px] h-[105px] gap-[46px]">
        <div className="flex items-center ml-[15px] gap-[40px] relative top-4 justify-around">
          {socialMediaIcons.map((icon, index) => (
            <img key={index} src={icon.src} alt={icon.alt} className="w-[22px] h-[22px] " />
          ))}
        </div>
        <div>
          <h1 className="text-[#6E4B84] ml-4 font-roboto font-semibold tracking-wider text-xl">
            © Uidon.kg 2023
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
