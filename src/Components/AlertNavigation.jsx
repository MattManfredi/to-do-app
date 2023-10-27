/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";


const AlertNavigation = ({text,path,duration,redirect,errorAlert}) => {
    const navigate = useNavigate();
    if(path){
        setTimeout(() => {
          navigate(path)  
        }, duration);
    }
  return (
    <>
    {redirect ? (
      <div className="flex items-center p-3 text-sm rounded-lg bg-darkBrown animate-pulse" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-green">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className="text-white">
          <span className="font-black text-green pr-3 pl-2 ">Succes!</span> {text}
        </div>
      </div>)
      : errorAlert && (
        <div className="flex items-center p-3 text-sm">
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-7 h-7 text-danger">
            <path clipRule="evenodd" fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          </svg>
          <span className="font-black text-danger pr-3 pl-2 ">{text}</span>    
        </div>
      )
    }
    </>
  )
}

export default AlertNavigation



