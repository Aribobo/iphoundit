 import mongoose from 'mongoose';


export const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);

export const errorHandler = (data,res,code=400)=>{

    res.status(code).json(data)
    //keep in view
    // res.status(code).json({
    //     hasError:true,
    //     errorMessage:data
    // })
}
export const responseHandler = (data,res,code=200)=>{

    res.status(code).json(data)
    //keep in view
    // res.status(code).json({
    //     hasError:false,
    //     body:data
    // })
}









