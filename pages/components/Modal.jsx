import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const Modal = ({ open, onClose }) => {
 
  // const [image, setImage] = useState(null);
  const [imageInput, setImageInput] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [agent, setAgent] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImageInput(file);
    const fileReader = new FileReader();
    // fileReader.onload = function (e) {
    //   console.log(e.target.result);
    //   setImage(e.target.result);
    //  this function is usefull only when you want to preview the image on the browser};
    fileReader.readAsDataURL(file);
    console.log(file);
  };

  const handleFormData = async (e) => {
    e.preventDefault();
    const upload = new FormData();
    upload.append("title", title);
    upload.append("price", price);
    upload.append("category", category);
    upload.append("location", location);
    upload.append("agent", agent);
    upload.append("slug", slug);
    upload.append("desc", desc);
    upload.append("image", imageInput);

    try {
      const result = await axios({
        method: "post",
        url: "/api/test/upload",
        data: upload,
        Headers: { "Content-Type": "multipart/form-data" },
      });
      if (result) {
       
        Swal.fire("Good job!", "Uploaded Succesfully", "success");
       
      }
      console.log({ result });
    } catch (error) {
      Swal.fire("Error!", "Failed to Upload", "question");
      console.log(error);
    }
  };
  if (!open) return null;

  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[800px] mx-auto flex flex-col justify-center text-center h-full mt-20">
        <div
          onClick={onClose}
          className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="lg:p-4 h-full"
          >
            <button
              onClick={onClose}
              className=" bg-red-700 w-full p-4 text-gray-100 mt-0 mb-8"
            >
              Close
            </button>
            <form onSubmit={handleFormData}>
              <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-3 h-full">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Title"
                  className=" mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100"
                />

                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="Price"
                  className=" mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100"
                />

                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  type="text"
                  placeholder="Category"
                  className=" mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100"
                />

                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Location"
                  className=" mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100"
                />

                <input
                  value={agent}
                  onChange={(e) => setAgent(e.target.value)}
                  type="text"
                  placeholder="Agent"
                  className=" mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100"
                />

                <input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  type="text"
                  placeholder="Slug"
                  className=" mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100"
                />

                <input
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  type="textarea"
                  placeholder="Message"
                  className=" text-sm py-2 mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100"
                />

                <input
                  onChange={handleImage}
                  type="file"
                  name="image"
                  placeholder="upload image"
                  accept="image*/"
                  className=" mb-6  float-right border-2 rounded-lg p-3 flex border-gray-100"
                />
              </div>
              <button
                type="submit"
                className=" bg-green-700 w-full p-4 text-gray-100 mt-4"
              >
               Upload 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
