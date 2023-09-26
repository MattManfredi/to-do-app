/* eslint-disable react/prop-types */

const Input = ({register,type="text",label,placeholder,errors,name,textForm}) => {
    
  return (
    <div>
        <label htmlFor={name}>{label}: </label>
        <input type={type} placeholder={placeholder} {...register} id={name} className=" focus:bg-slate-200 rounded-md placeholder-gray-400 border border-green-400 focus:placeholder-green-500 focus:"/>
        <p className="text-green-500">{textForm}</p>
        {errors && errors[name]?.type==="required" &&<div className='text-orange-600'>El campo es obligatorio</div>}
    </div>
  )
}

export default Input;