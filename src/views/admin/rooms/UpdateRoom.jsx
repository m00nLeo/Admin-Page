import React from 'react'

const UpdateRoom = () => {
  return (
    <div className="max-auto max-h-screen-xl">
    <div className="grid grid-cols-12">
      <div className="bg-teal-800 h-screen  col-span-2">
        <img
          className="w-full h-24"
          src="https://360.agencewebcom.com/web/uploads/api/site-413/42a9f5a2934936263e0ccf2d2799f5d2124cc206.svg"
          alt=""
        />
        <div className="grid gap-24">
          <button className="text-white hover:text-blue-600 mt-6">Overview</button>
          <button className="text-white  hover:text-blue-600">Room</button>
          <button className="text-white  hover:text-blue-600">Order</button>
          <button className="text-white  hover:text-blue-600">Logout</button>
        </div>
      </div>
      <div className="flex gap-8 p-4  items-center justify-between col-span-10 " >
        <div className="grid border hover:border-indigo-500 w-40 py-4  hover:text-blue-600 items-center justify-center">
          <h5 className="grid md:items-center md:justify-center text-gray-500 md:pl-3 hover:text-blue-600 text-md">
            Current Rooms
          </h5>
          <strong className="text-3xl pl-7">60</strong>
        </div>
        <div className="grid border  hover:border-indigo-500  w-40 py-4  hover:text-blue-600 items-center justify-center ">
          <h5 className=" hover:text-blue-600 text-gray-500 text-md">
            Oders
          </h5>
          <strong className="text-3xl">16</strong>
        </div>
        <div className="grid border  hover:border-indigo-500 w-40 py-4  hover:text-blue-600 items-center justify-center">
          <h5 className="text-gray-500  hover:text-blue-600 text-md">
            Room in-use
          </h5>
          <strong className="text-3xl pl-7">43</strong>
        </div>
        <div className="grid border  hover:border-indigo-500 w-40 py-4  hover:text-blue-600 items-center justify-center">
          <h5 className="text-gray-500  hover:text-blue-600 text-md">
            Weekly profit
          </h5>
          <strong className="text-3xl">$6400</strong>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateRoom