import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SavedJobs from '../../components/Freelancer/SavedJobs'
import SavedJobswaiting from '../../components/Freelancer/SavedJobswaiting'

const SavedFreelance = () => {
  const authworker = {
    favourite: 'Избранные',
    response: 'Отклики'
  }
  return (
    <div className='bg-[#F4F4F9] pb-[250px]'>
      <Header auth={authworker} />
      <SavedJobs />
      <SavedJobswaiting />
    </div>
  )
}

export default SavedFreelance