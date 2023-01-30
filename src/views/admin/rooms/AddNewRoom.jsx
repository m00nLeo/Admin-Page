import React from "react";
import { BsCameraFill } from "react-icons/bs";
import { FaImage } from "react-icons/fa";

const AddNewRoom = () => {
  return (
    <div><div>
    <div>
      <div className="px-4 py-12">
        <input
          className="border border-b-4 w-full"
          type="text"
          placeholder="d New Product"
        />
      </div>
      <div className="grid grid-cols-3">
        <div className=" border rounded-full bg-gray-50 text-3xl w-16 h-16 flex items-center justify-center lg:ml-32 ml-16   text-gray-300 ">
          <BsCameraFill />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 ">
            <p>image:</p>
            <span>
              <FaImage />
            </span>
          </div>
          <div className="pl-24">
            <p>Type</p>
            <input className="border-b text-sm " type="text" placeholder="hotel" />
          </div>
          <div>
            <p>Address</p>
            <input
              type="text"
              className="border-b text-sm "
              placeholder="elton st, 216"
            />
          </div>
          <div className="pl-24">
            <p>Title</p>
            <input
              type="text"
              className="border-b text-sm "
              placeholder="The best Hotel"
            />
          </div>
          <div>
            <p>Price</p>
            <input type="text" placeholder="100" className="border-b text-sm " />
          </div>
          <div className="pl-24">
            <p>Name</p>
            <input type="text" placeholder="My Hotel" className="border-b text-sm " />
          </div>
          <div>
            <p>City</p>
            <input type="text" className="border-b text-sm " placeholder="New York" />
          </div>
          <div className="pl-24">
            <p className="flex">Distance </p>
            <input type="text" className="border-b text-sm " placeholder="500" />
          </div>
          <div>
            <p>Description</p>
            <input
              type="text"
              className="border-b text-sm "
              placeholder="description"
            />
          </div>
          <div className="pl-24">
            <p>Featured</p>
            <select className="border">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <p className="pl-48 mt-6">Rooms</p>
    <div className="pl-48">
      <div className=" overflow-y-scroll h-32 text-pl-2 border-b-2 border-l border-t-2 py-6">
        <p className="pl-4">2 Bed Room</p>
        <p className="pl-4">1 Bed Room</p>
        <p className="pl-4">Superior basement room</p>
        <p className="pl-4">Deluxe Room</p>
        <p className="pl-4">Deluxe Window</p>
        <p className="pl-4">BreakFast Room</p>
        <p className="pl-4">collective Room</p>
        <p className="pl-4">5 combo Room</p>
        <p className="pl-4">Classic Room</p>
        <p className="pl-4">modern Room</p>
        
      </div>
    </div>
    <div className="py-6 flex justify-center">
    <button className=" border  bg-teal-500 text-white  w-24 h-12 flex items-center justify-center">
      Send
    </button>
    
    </div>
    <hr className="py-4 " />

    
  </div>
  </div>
  )
}

export default AddNewRoom