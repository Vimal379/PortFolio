import React from 'react'

const Experience = () => {
    const items = [
        {
            id: '1',
            sr: 'https://th.bing.com/th/id/OIP.QQUTcBAmVvxoiZ0CRJy5rwHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title : "HTML"
        },
        {
            id: '2',
            sr: 'https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title : "CSS"
        },
        {
            id: '3',
            sr: 'https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png',
            title : "Javascript"
        },
        {
            id: '4',
            sr: 'https://th.bing.com/th/id/OIP.QnPyTr06behjD0t6ymwcLQHaHE?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title : "HTML"
        },
        {
            id: '5',
            sr: 'https://th.bing.com/th/id/OIP.FH2Sq5c4b0fgaE-sGQEqqwHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title: 'Java'
        },
        {
            id: '6',
            sr: 'https://th.bing.com/th/id/OIP.iLQBvPqO4W-1npNJOcQoygHaIV?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title: 'C++'
        },
        {
            id: '7',
            sr: 'https://th.bing.com/th?id=OIP.BFV8Gwt5BILa-xv04IK2ngAAAA&w=232&h=269&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
            title: 'React js'
        }
    ]
  return (
    <div name="experience" className='max-w-screen-2xl container mx-auto  px-4 md:px-20 mt-10'>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <span className='underline font-semibold'>learning and working with new languages</span>
        <div className='grid grid-cols-2  md:grid-cols-5 gap-3 my-5 '>
            {
                items.map((item,id)=>(
                    <div className="md:w-[200px] md:h-[200px]  flex flex-col items-center justify-center border-[2px] rounded-full p-1 cursor-pointer hover:scale-110 my-3 overflow-hidden" key={id}>
                        <img src={item.sr} alt="img" className='w-[130px]  rounded-full'/>
                        <div>
                            <div className="px-2 font-bold text-xl mb-2">{item.title}</div>
                        </div>
                    </div>
                    
                ))
            }
        </div>
        <hr className='border-[1px] mt-16'/>
    </div>
  )
}

export default Experience