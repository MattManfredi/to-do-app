/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";


const AlertNavigation = ({text,path,duration,redirect}) => {
    const navigate = useNavigate();
    if(path){
        setTimeout(() => {
            navigate(path);
        }, duration);
    }
  return (
    <>
    {redirect && (
      <div className="flex items-center p-3 text-sm text-green-800 rounded-lg bg-darkBrown animate-pulse" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-green">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className="text-white">
          <span className="font-black text-green pr-3 pl-2 ">Succes!</span> {text}
        </div>
      </div>
      )}
    </>
  )
}

export default AlertNavigation



