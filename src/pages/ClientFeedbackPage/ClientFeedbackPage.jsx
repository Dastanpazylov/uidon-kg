import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import './ClientFeedbackPage.css'


const ClientFeedbackPage = () => {

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

          <div className='w-[968px] h-[255px] bg-[#FFFFFF] rounded-[5px] float-right mr-[19em] mt-[0.5em]'>
            <div className='mt-[1.3em] ml-[1.3em]'>
                <p className='font-[Montserrat] font-medium text-xl text-[#232323]'>Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma</p>
            </div>
            <div className='mt-[0.5em] ml-[1.3em]'>
                <h1 className='font-[Montserrat] font-medium text-lg text-[#232323]'>Оклад: 20 000</h1>
            </div>
            <div className='mt-[0.125em] ml-[1.3em]'>
                <h3 className='font-[Montserrat] font-normal text-sm text-[#232323]'>Опубликовано: 3 часа назад</h3>
            </div>
            <div className='flex'>
                <div className='w-[212px] h-[60px] rounded-[10px] border-[2px] border-[#CCCCCC] mt-[2.9em] ml-[1.3em]'>
                    <img className='w-[50px] h-[50px] mt-[0.22em] ml-[0.45em]' src="src/assets/image/avaArtur.png" alt="avaArtur" />
                    <div className='mt-[-2.3em] ml-[4.3em]'>
                        <h1 className='text-base font-[Montserrat] font-medium text-[#6E4B84]'>Некрасов Артур</h1>
                </div>
                </div>
                <div className='w-[212px] h-[60px] rounded-[10px] border-[2px] border-[#CCCCCC] mt-[2.9em] ml-[1.3em]'>
                    <img className='w-[50px] h-[50px] mt-[0.22em] ml-[0.45em]' src="src/assets/image/avaArtur.png" alt="avaArtur" />
                    <div className='mt-[-2.3em] ml-[4.3em]'>
                        <h1 className='text-base font-[Montserrat] font-medium text-[#6E4B84]'>Некрасов Артур</h1>
                </div>
                </div>
                <div className='w-[212px] h-[60px] rounded-[10px] border-[2px] border-[#CCCCCC] mt-[2.9em] ml-[1.3em]'>
                    <img className='w-[50px] h-[50px] mt-[0.22em] ml-[0.45em]' src="src/assets/image/avaArtur.png" alt="avaArtur" />
                    <div className='mt-[-2.3em] ml-[4.3em]'>
                        <h1 className='text-base font-[Montserrat] font-medium text-[#6E4B84]'>Некрасов Артур</h1>
                </div>
                </div>
            </div>
            <div className='float-right mr-[1em] mt-[-12em]'>
                <button>
                    <img src="src/assets/image/basket.svg" alt="" />
                </button>
            </div>
          </div>


          <div className='w-[968px] h-[255px] bg-[#FFFFFF] rounded-[5px] float-right mr-[19em] mt-[1.7em]'>
            <div className='mt-[1.3em] ml-[1.3em]'>
                <p className='font-[Montserrat] font-medium text-xl text-[#232323]'>Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma</p>
            </div>
            <div className='mt-[0.5em] ml-[1.3em]'>
                <h1 className='font-[Montserrat] font-medium text-lg text-[#232323]'>Оклад: 20 000</h1>
            </div>
            <div className='mt-[0.125em] ml-[1.3em]'>
                <h3 className='font-[Montserrat] font-normal text-sm text-[#232323]'>Опубликовано: 3 часа назад</h3>
            </div>
            <div className='flex'>
                <div className='w-[212px] h-[60px] rounded-[10px] border-[2px] border-[#CCCCCC] mt-[2.9em] ml-[1.3em]'>
                    <img className='w-[50px] h-[50px] mt-[0.22em] ml-[0.45em]' src="src/assets/image/avaArtur.png" alt="avaArtur" />
                    <div className='mt-[-2.3em] ml-[4.3em]'>
                        <h1 className='text-base font-[Montserrat] font-medium text-[#6E4B84]'>Некрасов Артур</h1>
                </div>
                </div>
            </div>
            <div className='float-right mr-[1em] mt-[-12em]'>
                <button>
                    <img src="src/assets/image/basket.svg" alt="" />
                </button>
            </div>
          </div>



          <div className='w-[968px] h-[255px] bg-[#FFFFFF] rounded-[5px] float-right mr-[19em] mt-[1.7em]'>
            <div className='mt-[1.3em] ml-[1.3em]'>
                <p className='font-[Montserrat] font-medium text-xl text-[#232323]'>Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma</p>
            </div>
            <div className='mt-[0.5em] ml-[1.3em]'>
                <h1 className='font-[Montserrat] font-medium text-lg text-[#232323]'>Оклад: 20 000</h1>
            </div>
            <div className='mt-[0.125em] ml-[1.3em]'>
                <h3 className='font-[Montserrat] font-normal text-sm text-[#232323]'>Опубликовано: 3 часа назад</h3>
            </div>
            <div className='flex'>
                <div className='w-[212px] h-[60px] rounded-[10px] border-[2px] border-[#CCCCCC] mt-[2.9em] ml-[1.3em]'>
                    <img className='w-[50px] h-[50px] mt-[0.22em] ml-[0.45em]' src="src/assets/image/avaArtur.png" alt="avaArtur" />
                    <div className='mt-[-2.3em] ml-[4.3em]'>
                        <h1 className='text-base font-[Montserrat] font-medium text-[#6E4B84]'>Некрасов Артур</h1>
                </div>
                </div>
                <div className='w-[212px] h-[60px] rounded-[10px] border-[2px] border-[#CCCCCC] mt-[2.9em] ml-[1.3em]'>
                    <img className='w-[50px] h-[50px] mt-[0.22em] ml-[0.45em]' src="src/assets/image/avaArtur.png" alt="avaArtur" />
                    <div className='mt-[-2.3em] ml-[4.3em]'>
                        <h1 className='text-base font-[Montserrat] font-medium text-[#6E4B84]'>Некрасов Артур</h1>
                </div>
                </div>
            </div>
            <div className='float-right mr-[1em] mt-[-12em]'>
                <button>
                    <img src="src/assets/image/basket.svg" alt="" />
                </button>
            </div>
          </div>

          <div className='w-[968px] h-[157px] bg-[#FFFFFF] rounded-[5px] float-right mr-[19em] mt-[1.7em]'>
            <div className='mt-[1.3em] ml-[1.3em]'>
                <p className='font-[Montserrat] font-medium text-xl text-[#232323]'>Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma</p>
            </div>
            <div className='mt-[0.5em] ml-[1.3em]'>
                <h1 className='font-[Montserrat] font-medium text-lg text-[#232323]'>Оклад: 20 000</h1>
            </div>
            <div className='mt-[0.125em] ml-[1.3em]'>
                <h3 className='font-[Montserrat] font-normal text-sm text-[#232323]'>Опубликовано: 3 часа назад</h3>
            </div>
            <div className='float-right mr-[1em] mt-[-5.4em]'>
                <button>
                    <img src="src/assets/image/basket.svg" alt="" />
                </button>
            </div>
          </div>


        <Footer
        footerLinks={footerLinks}
        customStyles=" relative flex justify-evenly items-center h-[266px] gap-[100px] mt-[76.9em] bg-[#FFFFFF] border border-[#6E4B84]"
        customArrStyles="h-0 relative bottom-[70px] right-[10px] gap-2"
      />
    </>
  )
}

export default ClientFeedbackPage