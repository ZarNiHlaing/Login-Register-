import React from 'react'

const ButtonsComponents = ({style, children , ...rest}) => {
  return (

       <div>
        <button  {...rest} className={`px-2 py-3 text-white w-full bg-blue-400 active:ring-2 active:ring-blue-700 duration-200 ${style}`}>{children}</button>
        </div>
  )
};

export default ButtonsComponents