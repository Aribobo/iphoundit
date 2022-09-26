import React, { useEffect, useState } from "react";
import Dashnav from '../components/Dashnav';
import Modal from '../components/Modal';
import{useSession} from "next-auth/react"
import Router from 'next/router';

 export const getStaticProps = async(ctx) =>{
        const res = await fetch('http://localhost:3000/api/test/get');
        const data = await res.json();
   
     return{
         props:{
             inserts:data},
      }
};


const Rent = ({ inserts}) => {
    const [openModal,setOpenModal] = useState(false);

    const session = useSession();
    const {status,data} = useSession();
    useEffect(() => {
    if(status==="unauthenticated") Router.replace("/auth/signin");
    },[status]);
  
    //console.log(session)
    if (status==="authenticated")
    
    return ( 
        
        <div id="skills"  className= 'w-full h-full lg:h-screen p-2 py-20  '>
     
      <div className="max-w-[1240px] mx-auto px-2 py-16 justify-center table-auto overflow-y-auto h-screen mt-4">

      {/* {JSON.stringify(inserts)} */}
      <button onClick={() => setOpenModal(true)} className='bg-green-700 text-white font-bold py-2 px-4 rounded mb-3'>+ADD</button>
     <div className='flex flex-col float-right'>
         <form>       
             
             <input  placeholder='Search' className=' mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100'></input>
         </form>
     </div>
<table className='w-full  shadow-xl rounded-2xl pt-20'>
    <thead className='bg-orange-400 border-b-2 border-gray-200 p-3'>
        <tr>
            {/* <th className='p-3 text-sm font-semibold tracking-wide text-left'>S/N </th> */}
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>TITLE { inserts.title}</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>PRICE </th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>LOCATION </th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>AGENT </th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>SLUG</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>PICTURE</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>TIME</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>EDIT</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>DELETE</th>
        </tr>
     </thead>
     <tbody>
     {inserts.map(insert=>(
         <tr className='bg-white' key={insert._id}>
             
             {/* <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'>  1  </td> */}
             <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'> {insert.title}  </td>
             <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'>  {insert.price} </td>
             <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'> {insert.location} </td>
             <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'> {insert.agent}</td>
             <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'> {insert.slug} </td>
             <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'> 
             < img src ={`/assets/${insert.image}` }  width={125} height={50} /></td>
             <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'>  24/3/2022 </td>
             <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'> <button className='bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button></td>
             <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'> <button className='bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button>  </td>  
         </tr>
     ))}
     </tbody>

</table>


<Modal open={openModal}/>


            
            </div>
        </div>
     );
}
 
export default Rent;
 

Rent.getLayout= function pageLayout(page){
    return(
        <>
        <Dashnav/> 
        {page}
        </>
    )
}