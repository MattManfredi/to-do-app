/* eslint-disable react/prop-types */

import Icon from "./Icon";

const Input = ({register,type="text",label,placeholder,errors,name,textForm,color,className}) => {
    
  return (
    <div className="mb-6 w-full">
      <div className={className || "flex items-end"}>
        <Icon label={label} color={color} />
        <label htmlFor={name} className=" text-xl font-bold pl-5 text-darkBrown capitalize">{label} </label>
      </div>
        <input type={type} placeholder={placeholder} {...register} id={name} className=" bg-transparent placeholder:text-green border-b-2 border-b-darkBlue w-full text-darkBrown focus:outline-none focus:border-b-green transition"/>
        <p className="text-darkBrown">{textForm}</p>
        {errors && errors[name]?.type==="required" &&<div className='text-danger'>El campo es obligatorio</div>}
    </div>
  )
}

export default Input;


