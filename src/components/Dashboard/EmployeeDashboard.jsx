import React from 'react'
import Header from '../others/Header.jsx'
import taskNumber from '../others/taskNumber.jsx' 


function EmployeeDashboard() {
  return (
    <>
    
    <div>
      <div className="p-10 bg-[#1c1c1c] h-screen ">
        <Header />
        <taskNumber/>
      </div>
    </div>
    </>
  )
}


export default EmployeeDashboard
