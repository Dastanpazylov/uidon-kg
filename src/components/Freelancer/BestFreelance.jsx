import React from 'react'

const Freelancer = ({FreelancersTasks}) => {
  return (
    <div className="flex flex-col font-monserrat  gap-[20px]">
    {
      FreelancersTasks.map((task) =>{
      return (
        <div className="flex flex-col bg-white gap-[30px] w-[972px] h-[346px] border-[#6E4B84] rounded-[10px] border-[1px] pt-[20px] pr-[37px] pb-[20px] pl-[20px] " key={task.id}>
          <div >
            <h3 className='mb-[10px] font-[600] text-[20px] leaning-[24.38px] ' >{task.title}</h3>
            <p>{task.conditions}</p>
            <p>Опубликовано {task.publicTime} назад</p>
          </div>
          <div className="sections">
            <p>{task.moreInfo}</p>
          </div>
          <div className="flex gap-[19px]">
            {
              task.skills.map((skill, index) => {
                return (
                  <p key={index}>{skill.name}</p>
                )
              })
            }
          </div>
        </div>
      )})
    }
  </div>
  )
}

export default Freelancer