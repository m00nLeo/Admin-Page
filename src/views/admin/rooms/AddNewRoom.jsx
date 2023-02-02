import React from "react";


const AddNewRoom = () => {
  return (
    <div>
      <div>
        <div className="px-4 py-12">
          <input
            className="border border-b-4 w-full"
            type="text"
            placeholder="Add New Room"
          />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="pl-24 mb-6">
              <p>Title</p>
              <input
                type="text"
                className="border-b text-sm lg:w-80"
                placeholder="The best Hotel"
              />
            </div>
            <div className="pl-72 mb-6">
              <p>Price</p>
              <input
                type="text"
                placeholder="100"
                className="border-b text-sm lg:w-80 "
              />
            </div>
            <div className="pl-24 mb-6">
              <p>bed</p>
              <input
                type="text"
                placeholder="1 king bed/ 2 Child beds"
                className="border-b text-sm  lg:w-80 "
              />
            </div>

            <div  className="pl-72 mb-6 ">
              <p>Description</p>
              <input
                type="text"
                className="border-b text-sm  lg:w-80"
                placeholder="Street view, Private Lock"
              />
            </div>
            <div className="pl-24 mb-6">
              <p className="flex">Room Size </p>
              <input
                type="text"
                className="border-b text-sm  lg:w-80"
                placeholder="35m2/75m2"
              />
            </div>
            <div  className="pl-72 mb-6">
              <p>ImageURL</p>
              <span>
                <button  className="text-gray-500 w-16 border-2 ring-offset-2 drop-shadow ">Click</button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 flex justify-center">
        <button className=" border  bg-teal-500 text-white  w-24 h-12 flex items-center justify-center">
          Send
        </button>
      </div>
    </div>
  );
};

export default AddNewRoom;
