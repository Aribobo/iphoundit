import { connectMongo } from "../../../utils/connectMongo";
import { errorHandler, responseHandler } from "../../../utils/connectMongo";
import Insert from "../../../models/upload";
import cloudinary from "cloudinary"


cloudinary.config({ 
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});


export default async function handler(req, res) {
  try {
    const id = req.query.id;

    await connectMongo();
    console.log("connecting to document.....");

    Insert.findById(id, (err, res) => {
      const cloudinary_id = res.cloudinary_id;
      console.log(cloudinary_id);
      
      cloudinary.uploader?.destroy(cloudinary_id)
      console.log("cloudinary image deleted successfully");
      
    });

    const inserts = await Insert.deleteOne({ _id: id });
    if (inserts) {
      responseHandler(inserts, res);

      console.log("Document deleted succesfully....");
    } else {
      errorHandler("something went wrong", res);
    }

    console.log(inserts);
  } catch (error) {
    errorHandler(error, res);
  }
}
