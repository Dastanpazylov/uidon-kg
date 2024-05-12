import React from 'react'
import  image from '../../assets/icons/profileImageGirl.svg'
const BestClient = () => {
    const ClientVakancies = [
        {
            id: 1,
            image: image,
            username: 'Гулчапчап',
            profession: 'Ux/Ui Designer',
            country: 'Кыргызстан',
            price: 700,
            text: 'Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить ваши творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах дизайнерских решений.',
            skills: [{ name: 'Дизайн пользовательского интерфейса' }, { name: 'Figma' }, { name: 'Ux/UI' }, { name: 'Web Designe' }]
        },
        {
            id: 2,
            image: image,
            username: 'Гулчапчап',
            profession: 'Ux/Ui Designer',
            country: 'Кыргызстан',
            price: 700,
            text: 'Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить ваши творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах дизайнерских решений.',
            skills: [{ name: 'Дизайн пользовательского интерфейса' }, { name: 'Figma' }, { name: 'Ux/UI' }, { name: 'Web Designe' }]
        },
        {
            id: 3,
            image: image,
            username: 'Гулчапчап',
            profession: 'Ux/Ui Designer',
            country: 'Кыргызстан',
            price: 700,
            text: 'Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить ваши творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах дизайнерских решений.',
            skills: [{ name: 'Дизайн пользовательского интерфейса' }, { name: 'Figma' }, { name: 'Ux/UI' }, { name: 'Web Designe' }]
        },
        {
            id: 4,
            image: image,
            username: 'Гулчапчап',
            profession: 'Ux/Ui Designer',
            country: 'Кыргызстан',
            price: 700,
            text: 'Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить ваши творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах дизайнерских решений.',
            skills: [{ name: 'Дизайн пользовательского интерфейса' }, { name: 'Figma' }, { name: 'Ux/UI' }, { name: 'Web Designe' }]
        }
    ]
    return (
        <div className='flex flex-col gap-[20px] mb-[3rem]'>
            {
                ClientVakancies.map((vakancy) => {
                 return(
                    <div key={vakancy.id} className='w-[972px] bg-[#FFFFFF] rounded-[10px] border-[1px] border-[#6E4B84] p-[20px] flex flex-col gap-[20px] '>
                        <div className='flex gap-[20px]'>
                            <img src={vakancy.image} alt="frofile image" className="" />
                            <div className='info flex flex-col'>
                                <h3 className="name">{vakancy.username}</h3>
                                <p className="prifile">{vakancy.profession}</p>
                                <p className="font-[400] font-monserrat text-[#A1A1A1] text-[16px] leaning-[19.5px] ">{vakancy.country}</p>
                            </div>
                            <p className="price">{vakancy.price}сом/час</p>
                        </div>
                        <div className="w-[700px]">
                            <p className="font-[400] font-monserrat text-[18px] ">{vakancy.text}</p>
                        </div>
                            <div className="flex gap-[30px]">
                            {
                                vakancy.skills.map((skill, index) => (
                                    <div className='rounded-[20px] border-[1px] bg-[#E3E3E3] pl-[13px] pb-[11px] pr-[13px] pt-[11px]'  key={index} >{skill.name}</div>
                                ))
                            }
                        </div>
                    </div>
                )})
            }
        </div>
    )
}

export default BestClient