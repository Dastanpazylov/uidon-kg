import React from 'react';
import favoritepur from '../../assets/icons/favoritepur.svg';
import arroright from '../../assets/image/rightarrow.svg'

import { useNavigate } from 'react-router';





const SavedJobs = () => {
 
  const navigate = useNavigate();
 
  const navigationHendler = (type) => {
    if (type == 'saved') {
      navigate('/mainFreelancer');
    }
  };

  const FreelancersTasks = [
    {
      id: 1,
      title: 'Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma',
      conditions:
        'Оклад: 20 000',
      publicTime: 'Опубликовано: 3 часа назад',
      moreInfo:
        'Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный кандидат должен иметь четкое представление о принципах дизайна, ориентированного на пользователя, и уметь использовать Figma в качестве основного инструмента проектирования',
      skills: [
        { name: 'Дизайн пользовательского интерфейса' },
        { name: 'Отзывчивый дизайнер' },
        { name: 'Figma' },
        { name: 'Веб-дизайн' },
      ],
    },
    {
      id: 2,
      title: 'Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma',
      conditions:
        'Оклад: 20 000',
      publicTime: 'Опубликовано: 3 часа назад',
      moreInfo:
        'Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный кандидат должен иметь четкое представление о принципах дизайна, ориентированного на пользователя, и уметь использовать Figma в качестве основного инструмента проектирования',
      skills: [
        { name: 'Дизайн пользовательского интерфейса' },
        { name: 'Отзывчивый дизайнер' },
        { name: 'Figma' },
        { name: 'Веб-дизайн' },
      ],
    },
    {
      id: 3,
      title: 'Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma',
      conditions:
        'Оклад: 20 000',
      publicTime: 'Опубликовано: 3 часа назад',
      moreInfo:
        'Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный кандидат должен иметь четкое представление о принципах дизайна, ориентированного на пользователя, и уметь использовать Figma в качестве основного инструмента проектирования',
      skills: [
        { name: 'Дизайн пользовательского интерфейса' },
        { name: 'Отзывчивый дизайнер' },
        { name: 'Figma' },
        { name: 'Веб-дизайн' },
      ],
    },
  ];
  return (
    <div>
      <div className="flex flex-col">
      <div className='flex'>
            <div className='mt-[2em] ml-[6.7em]'>
              <h5 className='font-[Montserrat] font-normal text-lg text-[#000000]'>Главная страница</h5>
              <button onClick={() => navigate(-1)}>
                  <img className='mt-[-2.5em] pl-[11em]' src={arroright} alt="" />
              </button>
            </div>
            <div className='mt-[2.1em] ml-[0.5em]'>
              <h5 className='font-[Montserrat] font-normal text-lg text-[#000000]'>Избранные</h5>
            </div>
          </div> 
        <div className="flex gap-[34px] p-[50px] ml-[3.8em] mt-[-3em]" onClick={() => navigationHendler('saved')}>
          <h1 className="font-[500] text-[30px] leaning-[36.57px] ">Сохраненные вакансии</h1>
        </div>
        <div className="flex flex-col gap-[30px] pl-[80px]">
          {FreelancersTasks.map((task) => {
            return (
              <div
                className="flex flex-col gap-[20px] w-[972px]  bg-[#FFFFFF] rounded-[10px]  pt-[20px] pr-[37px] pb-[20px] pl-[20px] ml-[2em] mt-[-1em]"
                key={task.id}>
                <div className="">
                  <div className="flex justify-between mb-[20px]">
                    <h3 className="mb-[10px] font-[600] text-[20px] leaning-[24.38px] font-[Montserrat]">
                      {task.title}
                    </h3>
                     
                      <img src={favoritepur} alt="" />
                     
                  </div>
                  <p className='font-[Montserrat] font-medium text-lg text-[#232323] mt-[-1.3em]'>{task.conditions}</p>
                  <p className='font-[Montserrat] font-medium text-sm text-[#A1A1A1] mt-[0.5em]'>{task.publicTime}</p>
                </div>
                <div className="sections">
                  <p className='font-[Montserrat] font-normal text-base text-[#232323] mt-[-0.8em]'>{task.moreInfo}</p>
                </div>
                <div className="flex gap-[50px]">
                  {task.skills.map((skill, index) => {
                    return (
                      <div key={index} className="rounded-[40px] p-[13px] bg-[#E3E3E3] ">
                        <p>{skill.name}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="w-[313px] p-[10px]  rounded-[10px] bg-[#619F56] ">
                  <h1 className="font-[500] text-[16px] leaning-[19.5px] text-[#E8E8E8] font-[Montserrat]">
                    Откликов на вакансию: 14 человек
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SavedJobs;
