import React, { useEffect, useState } from "react";
import Dashnav from "../components/Dashnav";
import Modal from "../components/Modal";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import{useSession} from "next-auth/react"
import Router from 'next/router';

import { connectMongo } from "../../utils/connectMongo";
import Insert from "../../models/upload";

export async function getServerSideProps(context) {
  const { id } = context.params; // Use `context.params` to get dynamic params

  try {
    await connectMongo();

    console.log("connecting to document.....");

    const estates = await Insert.find({category: id }).select(
      "_id title price image location agent slug createdAt "
    );
    if (estates) {
      console.log(estates);
    } else {
      console.log("something went wrong");
    }
    console.log("Document fetched succesfully....");

    console.log(estates);
    return {
      props: { estates: JSON.parse(JSON.stringify(estates)) },
    };
  } catch (error) {
    //errorHandler(error, res);
  }
}

const Estates = ({ estates }) => {


  
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoader] = useState(false);

  const handleUpdate = async (updateId) => {
    const { value: formValues } = await Swal.fire({
      title: "Update....",
      html:
        "<input value='' id='swal-input1' class='swal2-input' placeholder='Title'>" +
        "<input value='' id='swal-input2' class='swal2-input' placeholder='Price'>" +
        "<input value='' id='swal-input4' class='swal2-input' placeholder='Location'>" +
        "<input value='' id='swal-input5' class='swal2-input' placeholder='Agent'>" +
        "<input value='' id='swal-input6' class='swal2-input' placeholder='Slug'>" +
        "<input value='' id='swal-input7' class='swal2-input' placeholder='Description'>",

      focusConfirm: false,
      preConfirm: () => {
        return [
          {
            title: document.getElementById("swal-input1").value,
            price: document.getElementById("swal-input2").value,
            location: document.getElementById("swal-input4").value,
            agent: document.getElementById("swal-input5").value,
            slug: document.getElementById("swal-input6").value,
            desc: document.getElementById("swal-input7").value,
          },
        ];
      },
    });
    if (formValues) {
      setLoader(true);
      // call backend code for deleting
      try {
        console.log(formValues);
        const res = await fetch(`/api/edit/${updateId}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        });

        const data = await res.json();

        if (res) {
          setLoader(false);
          Swal.fire("Good job!", "Updated Succesfully...", "success");
        }
      } catch (e) {
        setLoader(false);
        Swal.fire("Errorrr!", "Failed to Update!", "question");
      }
    }

    //   if (formValues) {
    //     Swal.fire(JSON.stringify(formValues))
    //   }
  };

  const handleDelete = async (deleteId) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoader(true);
        // call backend code for deleting

        try {
          const res = await fetch(
            `/api/delete/${deleteId}`,
            {
              method: "DELETE",
            }
          );

          const data = await res.json();

          console.log(data);

          if (res) {
            setLoader(false);
            Swal.fire("Good job!", "Deleted Succesfully", "success");
          }
        } catch (e) {
          setLoader(false);
          Swal.fire("Good job!", "You clicked the button!", "question");
        }
      }
    });
  };
  const session = useSession();
  const {status,data} = useSession();
  useEffect(() => {
  if(status==="unauthenticated") Router.replace("/auth/signin");
  },[status]);

  //console.log(session)
  if (status==="authenticated")

  return (
    <div id="skills" className="w-full h-full lg:h-screen p-2 py-20 ">
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className="max-w-[1240px] mx-auto px-2 py-16 justify-center table-auto overflow-y-auto h-screen mt-4">
        {/* {JSON.stringify(estates)} */}

        <button
          onClick={() => setOpenModal(true)}
          className="bg-green-700 text-white font-bold py-2 px-4 rounded mb-3"
        >
          +ADD
        </button>
        <div className="flex flex-col float-right">
          <form>
            {/* <input
              placeholder="Search"
              className=" mb-3  float-right border-2 rounded-lg p-3 flex border-gray-100"
            ></input> */}
          </form>
        </div>
        <table className="w-full  shadow-xl rounded-2xl pt-20">
          <thead className="bg-orange-400 border-b-2 border-gray-200 p-3">
            <tr>
              {/* <th className='p-3 text-sm font-semibold tracking-wide text-left'>S/N </th> */}
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                TITLE
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                PRICE
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                LOCATION
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                AGENT
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                SLUG
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                PICTURE
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                TIME
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                EDIT
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                DELETE
              </th>
            </tr>
          </thead>
          <tbody>
            {estates.map((estate) => (
              <tr className="bg-white" key={estate._id}>
                {/* <td className='p-3  py-6 text-sm text-gray-700 whitespace-nowrap'>  1  </td> */}
                <td className="p-3  py-6 text-sm text-gray-700 whitespace-nowrap">
                  {estate.title}
                </td>
                <td className="p-3  py-6 text-sm text-gray-700 whitespace-nowrap">
                  {estate.price}
                </td>
                <td className="p-3  py-6 text-sm text-gray-700 whitespace-nowrap">
                  {estate.location}
                </td>
                <td className="p-3  py-6 text-sm text-gray-700 whitespace-nowrap">
                  {estate.agent}
                </td>
                <td className="p-3  py-6 text-sm text-gray-700 whitespace-nowrap">
                  {estate.slug}
                </td>
                <td className="p-3  py-6 text-sm text-gray-700 whitespace-nowrap">
                <Link href={`/info/${estate._id}`}>
                <Image
              className="w-full shadow-xl
               group-hover:opacity-10 object-fill hover:scale-105 ease in duration-300 md:object-fill rounded"
              src={estate.image}
              width={200}
              height={100}
              alt=""
            />
                  </Link>
                </td>
                <td className="p-3  py-6 text-sm text-gray-700 whitespace-nowrap">
                  {estate.createdAt}
                </td>
                <td className="p-3  py-6 text-sm text-gray-700 whitespace-nowrap">
                  <button
                    onClick={() => handleUpdate(estate._id)}
                    className="bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {loading ? "Processing...." : "Edit"}
                  </button>
                </td>

                <td className="p-3  py-6 text-sm text-gray-700 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(estate._id)}
                    className="bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {loading ? "Processing..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estates;

Estates.getLayout = function pageLayout(page) {
  return (
    <>
      <Dashnav/>
      {page}
    
    </>
  );
};
