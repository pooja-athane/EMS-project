import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './newTask'
import CompleteTask from './CompleteTask'
import FailedTask from './failedTask'

const TaskList = ({data}) => {
    return (
        // <div id='tasklist' className='h-[45%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10'>
        //     <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl ">
        //         <div className="flex items-center justify-between">
        //             <h3 className='bg-red-600  text-sm py-1 px-3 rounded '>High</h3>
        //             <h4 className='text-sm'>20 feb 2024</h4>
        //         </div>
        //         <h2 className='mt-5 text-2xl font-semibold'>Make a Notes</h2>
        //         <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas iusto unde aspernatur dolorum facere.</p>
        //     </div>
        //     <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl ">
        //         <div className="flex items-center justify-between">
        //             <h3 className='bg-red-600  text-sm py-1 px-3 rounded '>High</h3>
        //             <h4 className='text-sm'>20 feb 2024</h4>
        //         </div>
        //         <h2 className='mt-5 text-2xl font-semibold'>Make a Notes</h2>
        //         <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas iusto unde aspernatur dolorum facere.</p>
        //     </div>
        //     <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl ">
        //         <div className="flex items-center justify-between">
        //             <h3 className='bg-red-600  text-sm py-1 px-3 rounded '>High</h3>
        //             <h4 className='text-sm'>20 feb 2024</h4>
        //         </div>
        //         <h2 className='mt-5 text-2xl font-semibold'>Make a Notes</h2>
        //         <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas iusto unde aspernatur dolorum facere.</p>
        //     </div>
        //     <div className="flex-shrink-0 h-full w-[300px] p-5 bg-orange-400 rounded-xl ">
        //         <div className="flex items-center justify-between">
        //             <h3 className='bg-red-600  text-sm py-1 px-3 rounded '>High</h3>
        //             <h4 className='text-sm'>20 feb 2024</h4>
        //         </div>
        //         <h2 className='mt-5 text-2xl font-semibold'>Make a Notes</h2>
        //         <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas iusto unde aspernatur dolorum facere.</p>
        //     </div>
        //     <div className="flex-shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-xl ">
        //         <div className="flex items-center justify-between">
        //             <h3 className='bg-red-600  text-sm py-1 px-3 rounded '>High</h3>
        //             <h4 className='text-sm'>20 feb 2024</h4>
        //         </div>
        //         <h2 className='mt-5 text-2xl font-semibold'>Make a NOTES</h2>
        //         <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas iusto unde aspernatur dolorum facere.</p>
        //     </div>

        // </div>

           
<div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
        </div>
    )
}

export default TaskList
