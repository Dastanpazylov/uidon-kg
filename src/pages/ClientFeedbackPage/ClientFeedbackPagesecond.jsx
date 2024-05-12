import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import './ClientFeedbackPage.css'

const ClientFeedbackPagesecond = () => {


  const navigate = useNavigate();
  const footerLinks = [
    {
      title: 'Главная',
      links: ['Заказы', 'Профиль', 'Поиск'],
    },
    {
      title: 'Ресурсы',
      links: ['О нас', 'Помощь ', 'Настройки'],
    },
  ];
  const authworker = {
    favourite: 'Избранные',
    response: 'Отклики',
  };

  return (
    <>
        <Header auth={authworker} />

        <div className='flex'>
            <div className='mt-[2em] ml-[6.7em]'>
              <h5 className='font-[Montserrat] font-normal text-lg text-[#000000]'>Главная страница</h5>
              <button onClick={() => navigate(-1)}>
                <img src="src/assets/image/rightarrow.svg"className="mt-[-2.5em] pl-[11em]"alt="back" />
              </button>
            </div>
            <div className='mt-[2.1em] ml-[0.5em]'>
              <h5 className='font-[Montserrat] font-normal text-lg text-[#000000]'>Отклики</h5>
            </div>
          </div>   

        <div className='w-[859px] h-[100px] rounded-[10px] border-[1px] border-[#6E4B84] bg-[#FFFFFF] mt-[0.5em] ml-[6.7em]'>
          <p className='font-[Montserrat] font-medium text-2xl text-[#232323] mt-[0.7em]  ml-[0.6em]'>Требуется опытный Ux/UI дизайнер для разработки веб <br /> сайтов в  Figma</p>
        </div>

        <div className='w-[972px] h-[306px] rounded-[10px] border-[1px] border-[#6E4B84] bg-[#FFFFFF] mt-[3em] ml-[6.7em]'>
          <img className='mt-[1.2em] ml-[1.1em]' src="src/assets/image/avaGulchapchap.png" alt="" />
          <div className='mt-[-4.2em] ml-[6.1em]'>
            <h5 className='font-[Montserrat] font-normal text-base text-[#232323]'>Гульчапчап</h5>
            <h5 className='font-[Montserrat] font-normal text-base text-[#232323]'>UX/UI Designer</h5>
            <h5 className='font-[Montserrat] font-normal text-base text-[#232323] ml-[10em] mt-[-1.7em]'>700 сом/час</h5>
            <h5 className='font-[Montserrat] font-normal text-base text-[#A1A1A1]'>Кыргызстан</h5>
          </div>
          <img className='mt-[1em] ml-[1.3em]' src="src/assets/image/stars.svg" alt="" />
          <div className='mt-[1em] ml-[1.3em]'>
            <p className='font-[Montserrat] font-normal text-lg text-[#232323]'>Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам <br /> воплотить ваши творческие идеи в жизнь. Специализируюсь на построении <br /> конструкций и эффектах дизайнерских решений.</p>
          </div>
          <div className='flex mt-[1em] ml-[1.3em] gap-[1em]'>
            <div className='w-[359px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Дизайн пользовательского интерфейса</h1>
             </div>
             <div className='w-[78px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Figma</h1>
             </div>
             <div className='w-[71px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Ux/UI</h1>
             </div>
             <div className='w-[132px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Web designe</h1>
             </div>
          </div>
        </div>
        
        <div className='w-[972px] h-[306px] rounded-[10px] border-[1px] border-[#6E4B84] bg-[#FFFFFF] mt-[1.5em] ml-[6.7em]'>
          <img className='mt-[1.2em] ml-[1.1em]' src="src/assets/image/avaGulchapchap.png" alt="" />
          <div className='mt-[-4.2em] ml-[6.1em]'>
            <h5 className='font-[Montserrat] font-normal text-base text-[#232323]'>Гульчапчап</h5>
            <h5 className='font-[Montserrat] font-normal text-base text-[#232323]'>UX/UI Designer</h5>
            <h5 className='font-[Montserrat] font-normal text-base text-[#232323] ml-[10em] mt-[-1.7em]'>700 сом/час</h5>
            <h5 className='font-[Montserrat] font-normal text-base text-[#A1A1A1]'>Кыргызстан</h5>
          </div>
          <img className='mt-[1em] ml-[1.3em]' src="src/assets/image/stars.svg" alt="" />
          <div className='mt-[1em] ml-[1.3em]'>
            <p className='font-[Montserrat] font-normal text-lg text-[#232323]'>Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам <br /> воплотить ваши творческие идеи в жизнь. Специализируюсь на построении <br /> конструкций и эффектах дизайнерских решений.</p>
          </div>
          <div className='flex mt-[1em] ml-[1.3em] gap-[1em]'>
            <div className='w-[359px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Дизайн пользовательского интерфейса</h1>
             </div>
             <div className='w-[78px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Figma</h1>
             </div>
             <div className='w-[71px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Ux/UI</h1>
             </div>
             <div className='w-[132px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Web designe</h1>
             </div>
          </div>
        </div>

        <div className='w-[972px] h-[306px] rounded-[10px] border-[1px] border-[#6E4B84] bg-[#FFFFFF] mt-[1.5em] ml-[6.7em]'>
          <img className='mt-[1.2em] ml-[1.1em]' src="src/assets/image/avaGulchapchap.png" alt="" />
          <div className='mt-[-4.2em] ml-[6.1em]'>
            <h5 className='font-[Montserrat] font-normal text-base text-[#232323]'>Гульчапчап</h5>
            <h5 className='font-[Montserrat] font-normal text-base text-[#232323]'>UX/UI Designer</h5>
            <h5 className='font-[Montserrat] font-normal text-base text-[#232323] ml-[10em] mt-[-1.7em]'>700 сом/час</h5>
            <h5 className='font-[Montserrat] font-normal text-base text-[#A1A1A1]'>Кыргызстан</h5>
          </div>
          <img className='mt-[1em] ml-[1.3em]' src="src/assets/image/stars.svg" alt="" />
          <div className='mt-[1em] ml-[1.3em]'>
            <p className='font-[Montserrat] font-normal text-lg text-[#232323]'>Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам <br /> воплотить ваши творческие идеи в жизнь. Специализируюсь на построении <br /> конструкций и эффектах дизайнерских решений.</p>
          </div>
          <div className='flex mt-[1em] ml-[1.3em] gap-[1em]'>
            <div className='w-[359px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Дизайн пользовательского интерфейса</h1>
             </div>
             <div className='w-[78px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Figma</h1>
             </div>
             <div className='w-[71px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Ux/UI</h1>
             </div>
             <div className='w-[132px] h-[42px] rounded-[20px] bg-[#E3E3E3]'>
                <h1 className='text-center font-[Montserrat] font-normal text-base pt-[0.5em]'>Web designe</h1>
             </div>
          </div>
        </div>


        <Footer
        footerLinks={footerLinks}
        customStyles=" relative flex justify-evenly items-center h-[266px] gap-[100px] mt-[1.9em] bg-[#FFFFFF] border border-[#6E4B84]"
        customArrStyles="h-0 relative bottom-[70px] right-[10px] gap-2"
      />
    </>
  )
}

export default ClientFeedbackPagesecond