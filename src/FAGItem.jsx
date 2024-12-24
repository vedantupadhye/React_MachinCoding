import React, { useState } from 'react'

const FAGItem = ({faq,index}) => {

const [isOpen,setisOpen] = useState(false)

function ShowAns(){
    setisOpen(!isOpen)
}

  return (
    <div className='bg-gray-300 m-6 p-8 text-left'>
        <div className='flex gap-4'>
            <button onClick={ShowAns} className='bg-white p-1 '> ^ </button>
            <div className=''>{faq.question}</div>
        </div>
        <div className=''>
            {
                isOpen  && <div className='text-yellow-600 font-semibold text-xl m-2 p-4'>{faq.answer}</div>
            }
            
        </div>
    </div>
  )
}

export default FAGItem