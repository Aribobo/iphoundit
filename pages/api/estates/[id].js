import { connectMongo } from "../../../utils/connectMongo";
import { errorHandler,responseHandler } from "../../../utils/connectMongo";
import Insert from "../../../models/upload";

export default async function handler(req, res) {

    
  try {
    const id = req.query.id;
    
    await connectMongo();

    console.log("connecting to document.....");

    const inserts = await Insert.find({category:id}).select(
      "_id title price image image2 image3 image4 location agent slug category createdAt"
    );
    if (inserts) {
      responseHandler(inserts, res);
    } else {
      errorHandler("something went wrong", res);
    }
    console.log("Document fetched succesfully....");
    
    console.log(inserts);
  } catch (error) {
    errorHandler(error, res);
  }
}
