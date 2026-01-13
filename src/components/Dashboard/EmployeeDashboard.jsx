import React from 'react'
import Header from '../others/Header.jsx'
import TaskNumber from '../others/TaskNumber.jsx' 
import TaskList from '../Task_list/TaskList.jsx'



const EmployeeDashboard = (props) => {
  return (
    <>
    
    <div>
      <div className="p-10 bg-[#1c1c1c] h-screen ">
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskNumber  data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
    </>
  )
}


export default EmployeeDashboard
