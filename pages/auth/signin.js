import {signIn} from "next-auth/react"
import { useState } from "react";
import Router, {useRouter} from 'next/router'

const Signin = (props) => {
    const[userInfo,setUserInfo] = useState({email:'',password:''})
    const handleSubmit = async (e) => {
      e.preventDefault()  
      const res = await signIn('credentials',{
        email: userInfo.email,
        password: userInfo.password,
        redirect: false
      });

      console.log(res);
      Router.push('/estates/Dashboard')

    }
return(
    <div id="skills" className="w-full lg:h-screen p-5">
      <div className="max-w-[800px] max-h-[400] mx-auto flex flex-col justify-center text-center h-full mt-10">
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4 mt-20">
          <div className="lg:p-4 h-full mt-20">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-3 h-full">
                <input
                  value={userInfo.email}
                  onChange={({target}) =>setUserInfo({...userInfo,email:target.value})
                
                }
                  type="email"
                  placeholder="Enter email"
                  className=" mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100"
                />
                
                <input
                  value={userInfo.password}
                  onChange={({target}) =>setUserInfo({...userInfo,password:target.value})
                
                }
                  type="password"
                  placeholder="Enter password"
                  className=" mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100"
                />
                </div>
                <button
                type="submit"
                className=" bg-green-700 w-full p-4 text-gray-100 mt-10"
              >
                Log-In
              </button>
                </form>
                </div>
                </div>
                </div>
                </div>
            

);

};
export default Signin;