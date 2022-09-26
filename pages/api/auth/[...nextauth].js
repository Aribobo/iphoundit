 import NextAuth from "next-auth";
 import CredentialsProvider from 'next-auth/providers/credentials';

 export default NextAuth({
session:{
    strategy:"jwt",
},

providers:[
    CredentialsProvider({
        type:"credentials",
        credentials:{
            // email:{label:"Email",type:"email",placeholder:"john@gmail.com"},
            // password:{label:"Password",type:"password",placeholder:"********"},
        },
        async authorize(credentials,req) {
            const{email,password} = credentials;
            if(email!=="john@gmail.com"||password!=="johns-password")
                 throw new Error('invalid credentials');
            
            if( email=="john@gmail.com"&& password=="johns-password");

           return{id:"1234", name: "John Doe ", email:"john@gmail.com"} ; 
            
        }
    })
],
pages:{
    signIn:"/auth/signin"
},


 })
