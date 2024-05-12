// import React, { useState } from 'react';

// const ClientOrderCard = ({customStyles, img}) => {
//   const [count, setCount] = useState(1);
//   const replyArr = [
//     {
//       text: 'Дизайн пользовательского интерфейса',
//     },
//     {
//       text: 'Отзывчивый дизайнер',
//     },
//     {
//       text: 'Figma',
//     },
//     {
//       text: 'Веб-дизайн',
//     },
//   ];
//   return (
//     <div className={customStyles}>
//       <div className="flex flex-col items-start w-[96%] gap-[20px]">
//         <div className="w-full">
//           <h1 className="text-[#232323] font-montserrat text-[18px] ml-3 leading-9 ">
//             Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma
//           </h1>
//           <div className="flex flex-col ml-3 w-full">
//             <h2 className="text-[#232323] font-montserrat text-[16px] leading-[30px] ">
//               Оклад: 20 000
//             </h2>
//             <p className="text-[#232323] font-montserrat text-[12px] leading-[20px]">
//               Опубликовано: 3 часа назад
//             </p>
//           </div>
//         </div>
//         <p className="text-[#232323] font-montserrat ml-3 text-[14px] tracking-wid leading-[17px] relative bottom-2 w-full">
//           Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и
//           поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный кандидат
//           должен иметь четкое представление о принципах дизайна, ориентированного на пользователя, и
//           уметь использовать Figma в качестве основного инструмента проектирования
//         </p>
//       </div>
//       <div className="flex justify-between items-center gap-[20px] ml-2 ">
//         {replyArr.map((el, index) => (
//           <div
//             key={index}
//             className="bg-[#E3E3E3] rounded-[20px] items-center tracking-tight mt-2 text-center py-[6px] px-3 h-[30px] w-auto inline-block">
//             <p className="text-[12px] font-montserrat">{el.text}</p>
//           </div>
//         ))}
//       </div>
//       <div
//         className={`${
//           count > 0
//             ? 'flex items-center justify-center ml-2 p-2 h-[38px] border border-y border-x border-[#E3E3E3]  bg-[#619F56] rounded-[10px]'
//             : 'flex items-center justify-center ml-2 p-2 h-[38px] border border-y border-x border-[#E3E3E3]  bg-transparent rounded-[10px]'
//         } `}>
//         <p className="text-[#E8e8e8] font-montserrat text-base font-light">
//           Откликов на вакансию: {count}
//         </p>
//       </div>

//       <button>
//         <img
//           src={img}
//           className="absolute top-4 w-[21px] right-5"
//           alt="trash"
//         />
//       </button>
//     </div>
//     // <>
//     //   {
//     //     <div className="border-0 border-solid border-y border-x bg-transparent bottom-[10px]  border-[#6E4B84] rounded-[5px] p-[8px] w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[88px]">
//     //       <div className="flex flex-col items-start w-[96%] gap-[20px]">
//     //         <div className="w-full">
//     //           <h1 className="text-[#232323] font-montserrat text-[18px] ml-3 leading-9 ">
//     //             Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma
//     //           </h1>
//     //           <div className="flex flex-col ml-3 w-full">
//     //             <h2 className="text-[#232323] font-montserrat text-[16px] leading-[30px] ">
//     //               Оклад: 20 000
//     //             </h2>
//     //             <p className="text-[#232323] font-montserrat text-[12px] leading-[20px]">
//     //               Опубликовано: 3 часа назад
//     //             </p>
//     //           </div>
//     //         </div>
//     //         <p className="text-[#232323] font-montserrat ml-3 text-[14px] tracking-wid leading-[17px] relative bottom-2 w-full">
//     //           Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде
//     //           и поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный
//     //           кандидат должен иметь четкое представление о принципах дизайна, ориентированного на
//     //           пользователя, и уметь использовать Figma в качестве основного инструмента
//     //           проектирования
//     //         </p>
//     //       </div>
//     //       <div className="flex items-center justify-center ml-2 p-3 h-[38px]  bg-[#619F56] rounded-[10px]">
//     //         <p className="text-[#E8e8e8] font-montserrat text-base font-light">
//     //           Откликов на вакансию: 14 человек
//     //         </p>
//     //       </div>
//     //       <div className="flex justify-between items-center gap-[20px] ml-2 ">
//     //         {replyArr.map((el, index) => (
//     //           <div
//     //             key={index}
//     //             className="bg-[#E3E3E3] rounded-[20px] items-center tracking-tight mt-2 text-center py-[6px] px-3 h-[30px] w-auto inline-block">
//     //             <p className="text-[12px] font-montserrat">{el.text}</p>
//     //           </div>
//     //         ))}
//     //       </div>
//     //       <button>
//     //         <img
//     //           src="/src/assets/img/ClientProfilePage/trash.svg"
//     //           className="absolute top-4 w-[21px] right-5"
//     //           alt="trash"
//     //         />
//     //       </button>
//     //     </div>
//     //   }
//     //   {

//     //   }
//     //   {
//     //     <div className="border-0 border-solid border-y border-x bg-transparent bottom-[10px]  border-[#6E4B84] rounded-[5px] p-[8px] w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[88px]">
//     //     <div className="flex flex-col items-start w-[96%] gap-[20px]">
//     //       <div className="w-full">
//     //         <h1 className="text-[#232323] font-montserrat text-[18px] ml-3 leading-9 ">
//     //           Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma
//     //         </h1>
//     //         <div className="flex flex-col ml-3 w-full">
//     //           <h2 className="text-[#232323] font-montserrat text-[16px] leading-[30px] ">
//     //             Оклад: 20 000
//     //           </h2>
//     //           <p className="text-[#232323] font-montserrat text-[12px] leading-[20px]">
//     //             Опубликовано: 3 часа назад
//     //           </p>
//     //         </div>
//     //       </div>
//     //       <p className="text-[#232323] font-montserrat ml-3 text-[14px] tracking-wid leading-[17px] relative bottom-2 w-full">
//     //         Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей
//     //         команде и поможет создать потрясающий и удобный дизайн для нашего веб-сайта.
//     //         Идеальный кандидат должен иметь четкое представление о принципах дизайна,
//     //         ориентированного на пользователя, и уметь использовать Figma в качестве основного
//     //         инструмента проектирования
//     //       </p>
//     //     </div>
//     //     <div className="flex items-center justify-center ml-2 p-2 h-[38px]  bg-[#FF3E3ED9] rounded-[10px]">
//     //       <p className="text-[#E8e8e8] font-montserrat text-base font-light">
//     //         Вакансия неактуальна
//     //       </p>
//     //     </div>
//     //     <div className="flex justify-between items-center gap-[20px] ml-2 ">
//     //       {replyArr.map((el, index) => (
//     //         <div
//     //           key={index}
//     //           className="bg-[#E8e8e8] rounded-[20px] items-center tracking-tight mt-2 text-center py-[6px] px-3 h-[30px] w-auto inline-block">
//     //           <p className="text-[12px] font-montserrat">{el.text}</p>
//     //         </div>
//     //       ))}
//     //     </div>
//     //     <button>
//     //       <img
//     //         src="/src/assets/img/ClientProfilePage/trash.svg"
//     //         className="absolute top-4 w-[21px] right-5"
//     //         alt="trash"
//     //       />
//     //     </button>
//     //   </div>
//     //   }
//   );
// };

// export default ClientOrderCard;

import React, { useState } from 'react';

const ClientOrderCard = ({ activeStatus, responseCount, img, customStyles }) => {
  const [count, setCount] = useState(responseCount);
  const replyArr = [
    {
      text: 'Дизайн пользовательского интерфейса',
    },
    {
      text: 'Отзывчивый дизайнер',
    },
    {
      text: 'Figma',
    },
    {
      text: 'Веб-дизайн',
    },
  ];
  return (
    <div className={customStyles}>
      <div className="flex flex-col items-start w-[96%] gap-[20px]">
        <div className="w-full">
          <h1 className="text-[#232323] font-montserrat text-[18px] ml-3 leading-9 ">
            Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma
          </h1>
          <div className="flex flex-col ml-3 w-full">
            <h2 className="text-[#232323] font-montserrat text-[16px] leading-[30px] ">
              Оклад: 20 000
            </h2>
            <p className="text-[#232323] font-montserrat text-[12px] leading-[20px]">
              Опубликовано: 3 часа назад
            </p>
          </div>
        </div>
        <p className="text-[#232323] font-montserrat ml-3 text-[14px] tracking-wid leading-[17px] relative bottom-2 w-full">
          Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и
          поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный кандидат
          должен иметь четкое представление о принципах дизайна, ориентированного на пользователя, и
          уметь использовать Figma в качестве основного инструмента проектирования
        </p>
      </div>
      <div
        className={
          activeStatus === true
            ? count > 0
              ? 'flex items-center justify-center ml-2 p-2 h-[38px] border border-y border-x border-[#E3E3E3]  bg-[#619F56] rounded-[10px]'
              : 'flex items-center justify-center ml-2 p-2 h-[38px] border border-y border-x border-[#E3E3E3]  bg-transparent rounded-[10px]'
            : 'flex items-center justify-center ml-2 p-2 h-[38px] border border-y border-x border-[#E3E3E3]  bg-[red] rounded-[10px]'
        }>
        <p className="text-[#E8e8e8] font-montserrat text-base font-light">
          {activeStatus === true
            ? `Откликов на вакансию: ${count} ${count > 0 ? 'человек' : ''}`
            : 'Вакансия неактуальна'}
        </p>
      </div>
      <div className="flex justify-between items-center gap-[20px] ml-2 ">
        {replyArr.map((el, index) => (
          <div
            key={index}
            className="bg-[#E3E3E3] rounded-[20px] items-center tracking-tight mt-2 text-center py-[6px] px-3 h-[30px] w-auto inline-block">
            <p className="text-[12px] font-montserrat">{el.text}</p>
          </div>
        ))}
      </div>
      <button>
        <img src={img} className="absolute top-4 w-[21px] right-5" alt="trash" />
      </button>
    </div>
  );
};

export default ClientOrderCard;
