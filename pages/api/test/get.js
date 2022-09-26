import { connectMongo } from "../../../utils/connectMongo";
import { errorHandler,responseHandler } from "../../../utils/connectMongo";
import Insert from "../../../models/upload";

export default async function handler(req, res) {

    
  try {
    await connectMongo();

    console.log("connecting to document.....");

    const inserts = await Insert.find({}).select(
      "_id title price image location agent slug image category"
    );
    if (inserts) {
      responseHandler(inserts,res);
    } else {
      errorHandler("something went wrong", res);
    }
    console.log("Document fetched succesfully....");
    
    console.log(inserts);
  } catch (error) {
    errorHandler(error, res);
  }
}
