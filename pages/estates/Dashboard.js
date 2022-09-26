import React from 'react';
import Dashnav from '../components/Dashnav';
import{useSession} from "next-auth/react"
import { useEffect } from 'react';
import Router from 'next/router';



const Dashboard = () => {
    const session = useSession();
    const {status,data} = useSession();
    useEffect(() => {
    if(status==="unauthenticated") Router.replace("/auth/signin");
    },[status]);

    //console.log(session)
    if (status==="authenticated")
    return (    
        
        <div id="skills"  className='w-full lg:h-screen p-2 bg-gradient-to-r from-sky-200 to-orange-200'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center text-center h-full'>
        
        <p className='text-xl tracking-widest uppercase text-bold text-[#fd7e14] pt-20 pb-9 text-bold '><h2> Admin Dashboard</h2></p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-20  shadow-xl shadow-[#e6a16a] rounded-xl hover:scale-105 ease in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
        
            <img className=' ' src='/house.png' width='64px'
           height='64px' alt='/'/>
        
            </div>
           <div className='flex flex-col items-center justify-center'>
               <h3>HOUSE</h3>
               <h3>50</h3> 
        </div> 
        </div>
        </div>
        
        <div className="p-20  shadow-xl shadow-[#e6a16a] rounded-xl hover:scale-105 ease in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
        
            <img className=' ' src='/rent.png' width='64px'
           height='64px' alt='/'/>
        
            </div>
           <div className='flex flex-col items-center justify-center'>
               <h3>RENT</h3>
              <h3>100</h3>
        </div> 
        </div>
        </div>
        <div className="p-20  shadow-xl shadow-[#e6a16a] rounded-xl hover:scale-105 ease in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
        
            <img className=' ' src='/land.png' width='64px'
           height='64px' alt='/'/>
        
            </div>
           <div className='flex flex-col items-center justify-center'>
               <h3>LAND</h3>
               <h3>400</h3> 
        </div>
       
        </div>
        </div>
        <div className="p-20  shadow-xl shadow-[#e6a16a] rounded-xl hover:scale-105 ease in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
        
            <img className=' ' src='/shop.png' width='64px'
           height='64px' alt='/'/>
        
            </div>
           <div className='flex flex-col items-center justify-center'>
               <h3>SHOP</h3>
               <h3>150</h3> 
        </div>
        
        </div>
        </div>
        </div>
        </div>
        </div>

        );
        return <div> Loading...</div>
    }
 
export default Dashboard;

Dashboard.getLayout= function pageLayout(page){
    return(
        <>
        <Dashnav/> 
        {page}
        </>
    )
}