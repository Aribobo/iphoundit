import { Schema, model, models } from "mongoose";

const insertSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },
    agent: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    
  },
  { timestamps: true }
);

const Insert = models.Insert || model("Insert", insertSchema);

export default Insert;
