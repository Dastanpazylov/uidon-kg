import React from 'react'
import { useNavigate } from 'react-router'
import logo from '../assets/icons/logo.svg'
import tg from '../assets/mediaicons/telegram.svg'
import vk from '../assets/mediaicons/vk.svg'
import inst from '../assets/mediaicons/instagramm.svg'
import uidon from '../assets/mediaicons/uidone.svg'
const Footer = () => {
    const navigate = useNavigate();

    const navigationHendler = (type) => {
        if (type === 'vacancies') {
            navigate('/freelance')
        } else if (type == 'hired') {
            navigate('/main/hired')
        }
    }

    return (
        <div className='h-[200px] border-t-[1px] border-[#6E4B84] w-[100%] justify-around flex pt-[2%] '>
            <div className="icon pt-[30px]" onClick={() => navigate('/')}>
                <img src={logo} alt="" />
            </div>
            <div className="navigate">
                <h1 className='font-[600] text-[24px] leaning-[29.26px] mb-[20px] cursor-pointer ' onClick={() => navigate('/')} >Главная </h1>
                <ul className='font-[400] text-[20px] leaning-[24.38px] text-[#6E4B84] cursor-pointer ' >
                    <li onClick={() => navigationHendler('vacancies')} >Вакансии</li>
                    <li>Профиль</li>
                    <li>Поиск</li>
                </ul>
            </div>
            <div></div>
            <div className="flex flex-col gap-[30px] ">
                <div className="icons">
                    <ul className='flex gap-[20px] '>
                        <li><img src={tg} alt="" /></li>
                        <li><img src={vk} alt="" /></li>
                        <li><img src={inst} alt="" /></li>
                    </ul>
                </div>
                <div className="uidon">
                    <img src={uidon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer