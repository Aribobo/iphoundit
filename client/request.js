import axios from "axios";
import { baseUrl } from "./config";

//import{getValue} from "../utils/connectMongo"; 

export const getValue = (obj,path,defaultValue) => {
    try{
    
        if(!(obj instanceof Array)){
            let myValue = obj;
            for(let key of path ){
               if(!(key in myValue)) {
                   return defaultValue; 
    
               }else{ 
                   myValue = myValue[key];
               }
            }
            return myValue;
        }
    } catch(error){
        console.log({error});
        return defaulValue;
    
     }
        }


 export const getAllPost = async () => {
    try{
        const res = await fetch(baseUrl+`/api/test/get`);
        return res.data;
    
    }
    catch(error){
        return getValue(error,['response','data']);
    }
}
