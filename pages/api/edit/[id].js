import { connectMongo } from "../../../utils/connectMongo";
import { errorHandler,responseHandler } from "../../../utils/connectMongo";
import Insert from "../../../models/upload";

export default async function handler(req, res) {

    
  try {
    const id = req.query.id;
    
    await connectMongo();

    console.log("connecting to document.....");

    const inserts = await Insert.findByIdAndUpdate(id,...req.body,{new:true,
    runValidators:true
});
    if (inserts) {
      responseHandler(inserts, res);

      console.log("Document updated succesfully....");
    } else {
      errorHandler("something went wrong", res);
    }
   
    console.log(inserts);
  } catch (error) {
    errorHandler(error, res);
  }
}
