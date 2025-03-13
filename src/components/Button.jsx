import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ text, isCallToAction }) => {
  const navigate = useNavigate()
  return (
    <div>
      <button className={`${isCallToAction ?
        'bg-[#F4A261] rounded-full px-7 text-white font-bold border-none shadow-md py-2' :
        'rounded-md border-[#0D3B66]'} text-xl md:px-5 border-1 mt-2 mb-7 md:mb-2 px-2 py-4   text-[#0D3B66] md:rounded-full cursor-pointer`} onClick={isCallToAction ? ()=>navigate('/events'): ""}>{text}</button>
    </div>
  )
}

export default Button