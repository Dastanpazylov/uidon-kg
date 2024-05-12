import React from 'react'
import profileImage from '../../assets/icons/profileImage.svg'
import eyes from '../../assets/icons/eye.svg'
import heart from '../../assets/icons/heart.svg'
import Freelancer from '../../components/Freelancer/BestFreelance'
import { useNavigate } from 'react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer/Footer'


const Freelance = () => {

  const footerLinks = [
    {
      title: 'Главная',
      links: ['Вакансии', 'Профиль', 'Поиск'],
    },
    {
      title: 'Ресурсы',
      links: ['О нас', 'Помощь ', 'Настройки'],
    },
  ];

  const navigate = useNavigate()
  const navigationHendler = (type) => {
    if (type === 'vakancies') {
        navigate('/freelance')
    } else if (type == 'saved') {
        navigate('/saved')
    }
}

  const FreelancersTasks = [
    {
      id: 1,
      title: 'Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma',
      conditions: 'Почасовоя оплата: 30-50 долларов США - эксперт - рассчетное время. Время: от 1до 3 месяцев, менее 30 часов в неделю-',
      publicTime: '3',
      moreInfo: 'Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный кандидат должен иметь четкое представление о принципах дизайна, ориентированного на пользователя, и уметь использовать Figma в качестве основного инструмента проектирования',
      skills: [{ name: 'Дизайн пользовательского интерфейса' }, { name: 'Figma' }, { name: 'Ux/Ui' }, { name: 'Web Design' }]
    },
    {
      id: 2,
      title: 'Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma',
      conditions: 'Почасовоя оплата: 30-50 долларов США - эксперт - рассчетное время. Время: от 1до 3 месяцев, менее 30 часов в неделю-',
      publicTime: '3',
      moreInfo: 'Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный кандидат должен иметь четкое представление о принципах дизайна, ориентированного на пользователя, и уметь использовать Figma в качестве основного инструмента проектирования',
      skills: [{ name: 'Дизайн пользовательского интерфейса' }, { name: 'Figma' }, { name: 'Ux/Ui' }, { name: 'Web Design' }]
    },
    {
      id: 3,
      title: 'Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma',
      conditions: 'Почасовоя оплата: 30-50 долларов США - эксперт - рассчетное время. Время: от 1до 3 месяцев, менее 30 часов в неделю-',
      publicTime: '3',
      moreInfo: 'Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный кандидат должен иметь четкое представление о принципах дизайна, ориентированного на пользователя, и уметь использовать Figma в качестве основного инструмента проектирования',
      skills: [{ name: 'Дизайн пользовательского интерфейса' }, { name: 'Figma' }, { name: 'Ux/Ui' }, { name: 'Web Design' }]
    },
    {
      id: 4,
      title: 'Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma',
      conditions: 'Почасовоя оплата: 30-50 долларов США - эксперт - рассчетное время. Время: от 1до 3 месяцев, менее 30 часов в неделю-',
      publicTime: '3',
      moreInfo: 'Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный кандидат должен иметь четкое представление о принципах дизайна, ориентированного на пользователя, и уметь использовать Figma в качестве основного инструмента проектирования',
      skills: [{ name: 'Дизайн пользовательского интерфейса' }, { name: 'Figma' }, { name: 'Ux/Ui' }, { name: 'Web Design' }]
    }
  ]
  
  // const url = 'https://3d80-92-62-67-195.ngrok-free.app/api/orders/'
  // fetch(url)
  // .then((res) => res.json())
  // .then(res => console.log(res))
  // .catch(err => console.log(err))

  const authworker = {
    favourite: 'Избранные',
    response: 'Отклики'
  }


  return (
    <div>
      <Header auth={authworker}/>
      <div className="flex gap-[30px] pt-[3rem] pb-[5rem] bg-[#F4F4F9] overflow-x-hidden ">
        <div className=" pl-[4rem] flex flex-col gap-[30px]">
          <div className="naivigate flex flex-col bg-white gap-[30px] w-[972px] h-[120px] rounded-[10px] border-[1px] border-[#111111] pl-[25px] ">
            <h1 className='font-[600] text-[30px] leaning-[36.57px]' >Вакансии которые могут вам понравиться</h1>
            <nav>
              <ul className='flex gap-[31px] w-[691px] h-[24px] text-[20px] font-[600] leaning-[24.38px] '>
                <li className='cursor-pointer'>Лучшие совпадения</li>
                <li className='cursor-pointer text-[#A1A1A1]'>Самые последние</li>
                <li className='cursor-pointer text-[#A1A1A1]' onClick={() => navigationHendler('saved')} >Сохраненные задания</li>
              </ul>
            </nav>
          </div>
          <Freelancer 
          FreelancersTasks = {FreelancersTasks}
          />
        </div>
        <div >
          <div className="flex flex-col  gap-[20px] font-monserrat ">
            <div className="w-[248px] bg-white h-[218px] rounded-[10px] p-[40px] flex flex-col border-[1px] border-[#6E4B84] text-center ">
              <div className="flex justify-center ">
                <img className=' rounded-[50%] w-[70px] h-[70px]' src={profileImage} alt="" />
              </div>
              <div className="name-section">
                <h1 className='font-[600] leaning-[24.38px] text-[20px] '>Сыймык Н. у</h1>
              </div>
              <div className="profile-section">
                <h3 className=' font-[400] text-[16px] leaning-[19.5px] text-[#A1A1A1] '>Ux/Ui дизайнер</h3>
              </div>
            </div>
            <div className="w-[248px] h-[114px] bg-white rounded-[10px] border-[1px] border-[#6E4B84] pt-[15px] pr-[28px] pb-[20px] pl-[28px] flex flex-col gap-[10px]  " >
              <div className="statistic-section">
                <h1 className=' font-[600] text-[20px] leaning-[24.38px]'>Статистика</h1>
              </div>
              <div className=" font-[400] text-[12px] leaning-[14.63px] flex gap-[20px] justify-between ">
                <img src={eyes} alt="" />
                <h3>Просмотр аккаунта</h3>
                <span>5</span>
              </div>
              <div className="mb-[20px] font-[400] text-[12px] leaning-[14.63px] flex justify-between w-[192px] ">
                <img src={heart} alt="" />
                <h3>Избранные вакансии</h3>
                <span>9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        customStyles="relative flex justify-around items-center h-[263px] bg-[#FFFFFF] border border-[#6E4B84]"
        footerLinks={footerLinks}
        customArrStyles="h-0 relative bottom-[70px] right-3 gap-2 "
      />
    </div>
  )
}

export default Freelance