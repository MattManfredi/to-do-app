/* eslint-disable react/prop-types */

const InputToDo = ({register,type="text",label,errors,name,textForm,max}) => {
    
  return (
    <div className="mb-6 w-full">
      <div className="relative text-white">
        <input type={type} placeholder="" {...register} id={name} max={max} className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-semibold text-darkBrown bg-lightBrown rounded-lg border border-white appearance-none focus:outline-none focus:ring-0 focus:border-brown peer"/>
        <label htmlFor={name} className="absolute text-sm text-darkBrown duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] font-semibold bg-lightBrown rounded-xl px-2 peer-focus:px-2 peer-focus:text-brown  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">{label} </label>
      </div>        
        <p className="text-darkBrown">{textForm}</p>
        {errors && errors[name]?.type==="required" &&<div className='text-danger'>El campo es obligatorio</div>}
    </div>
  )
}

export default InputToDo;

  