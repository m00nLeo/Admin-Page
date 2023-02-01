import React from "react";
import Container from "../../components/common/Container";

const Overview = () => {
  return (
    <div>
      <div className="">
        <Container>
          <div className="flex gap-20 p-4  items-center justify-between text-center">
            <div className=" border hover:border-indigo-500 w-40 py-4  hover:text-blue-600 items-center justify-center">
              <h5 className=" md:items-center md:justify-center text-gray-500 md:pl-3 hover:text-blue-600 text-md">
                Current Rooms
              </h5>
              <strong className="text-3xl">60</strong>
            </div>
            <div className=" border  hover:border-indigo-500  w-40 py-4  hover:text-blue-600 items-center justify-center ">
              <h5 className=" hover:text-blue-600 text-gray-500 text-md">
                Oders
              </h5>
              <strong className="text-3xl">16</strong>
            </div>
            <div className=" border  hover:border-indigo-500 w-40 py-4  hover:text-blue-600 items-center justify-center">
              <h5 className="text-gray-500  hover:text-blue-600 text-md">
                Room in-use
              </h5>
              <strong className="text-3xl">43</strong>
            </div>
            <div className=" border  hover:border-indigo-500 w-40 py-4  hover:text-blue-600 items-center justify-center">
              <h5 className="text-gray-500  hover:text-blue-600 text-md">
                Weekly profit
              </h5>
              <strong className="text-3xl">$6400</strong>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Overview;
