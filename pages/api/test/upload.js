import { connectMongo } from "../../../utils/connectMongo";
import Insert from "../../../models/upload";
import multer from "multer";
import nc from "next-connect";
import cloudinary from "cloudinary"
import path from "path"



export const config = { 
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage: multer.diskStorage({}),
  limits : {fileSize:9 * 1024 * 1024},
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    if (ext !==".jpg" && ext!==".jpeg"){

    cb( new Error("file type is not supported"),false);
    return;
    }
   cb(null, true);
  },
});


cloudinary.config({ 
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});


const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(
    upload.single("image")
     
  )
  .post(async (req, res) => {
   
    // res.status(201)
    //   .json({ body: req.body, files: req.file, insert: req.body });
     
    await connectMongo();
 
    console.log("connecting  to mongodb");

    console.log("connected to mongodb !!!!");

    const result = await cloudinary.uploader?.upload(req.file.path)
    res.json (result);
  
    const insert = Insert({
      ...req?.body,
      image: result?.secure_url,
      cloudinary_id: result?.public_id,  
    });
    await insert?.save();
    console.log({ insert });
    console.log("saved succesfully!!!!!");
  });

export default handler;






