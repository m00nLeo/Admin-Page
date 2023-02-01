import React from "react";
import { TfiPencil } from "react-icons/tfi";
import { FiTrash } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import Container from "../../../components/common/Container";

const RoomsList = () => {
  return (
    <div className="">
      <Container>
        <div className="flex justify-between">
          <button className="relative border-2 w-32 h-10 mt-6 ml-6 mb-6">
            <span className="absolute text-gray-400 bottom-0.5 left-3  flex justify-content  gap-3 text-3xl ">
              <AiOutlineSearch className="mt-4" />
              .......
            </span>
          </button>

          <button className="text-white bg-cyan-300 border w-32 h-10 mt-6 mr-6">
            Add New
          </button>
        </div>

        <div className="relative px-6 overflow-x-auto mb-6">
          <table className="w-full text-sm  text-left">
            <thead className="text-xs text-gray-400 uppercase">
              <tr className="px-6 py-3 border  ">
                <th className="px-6 py-3 ">name</th>
                <th className=" px-14 py-3 ">Room infomation</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border">
                <td className="px-6 py-4">
                  <div>Name</div>
                </td>
                <td className="px-6 py-4">
                  <div>1 King Bed / 2 Single Beds</div>
                </td>
                <td className="px-6 py-4">
                  <div>$20</div>
                </td>
                <td className="px-6 py-4 ">
                  <div className="border text-center text-red-600 bg-red-200">
                    Booked
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <TfiPencil />
                    <FiTrash />
                  </div>
                </td>
              </tr>

              <tr className="bg-white border">
                <td className="px-6 py-4">
                  <div>Name</div>
                </td>
                <td className="px-6 py-4">
                  <div>1 King Bed / 2 Single Beds</div>
                </td>
                <td className="px-6 py-4">
                  <div>$20</div>
                </td>
                <td className="px-6 py-4">
                  <div className=" border text-center text-lime-600 bg-lime-200">
                    Checkin
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <TfiPencil />
                    <FiTrash />
                  </div>
                </td>
              </tr>

              <tr className="bg-white border">
                <td className="px-6 py-4">
                  <div>Name</div>
                </td>
                <td className="px-6 py-4">
                  <div>1 King Bed / 3 Single Beds</div>
                </td>
                <td className="px-6 py-4">
                  <div>$20</div>
                </td>
                <td className="px-6 py-4">
                  <div className="border text-center text-red-600 bg-red-200">
                    Booked
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <TfiPencil />
                    <FiTrash />
                  </div>
                </td>
              </tr>

              <tr className="bg-white border">
                <td className="px-6 py-4">
                  <div>Name</div>
                </td>
                <td className="px-6 py-4">
                  <div>2 King Bed / 3 Single Beds</div>
                </td>
                <td className="px-6 py-4">
                  <div>$20</div>
                </td>
                <td className="px-6 py-4">
                  <div className="border text-center text-orange-300 bg-orange-100 ">
                    Booked
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <TfiPencil />
                    <FiTrash />
                  </div>
                </td>
              </tr>

              <tr className="bg-white border">
                <td className="px-6 py-4">
                  <div>Name</div>
                </td>
                <td className="px-6 py-4">
                  <div>2 King Bed / 1 Single Beds</div>
                </td>
                <td className="px-6 py-4">
                  <div>$20</div>
                </td>
                <td className="px-6 py-4">
                  <div className="border text-center text-red-600 bg-red-200">
                    Checkout
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <TfiPencil />
                    <FiTrash />
                  </div>
                </td>
              </tr>

              <tr className="bg-white border">
                <td className="px-6 py-4">
                  <div>Name</div>
                </td>
                <td className="px-6 py-4">
                  <div>2 King Bed / 1 Single Beds</div>
                </td>
                <td className="px-6 py-4">
                  <div>$20</div>
                </td>
                <td className="px-6 py-4">
                  <div className=" border text-center text-lime-600 bg-lime-200">
                    Booked
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <TfiPencil />
                    <FiTrash />
                  </div>
                </td>
              </tr>

              <tr className="bg-white border">
                <td className="px-6 py-4">
                  <div>Name</div>
                </td>
                <td className="px-6 py-4">
                  <div>1 King Bed / 2 Single Beds</div>
                </td>
                <td className="px-6 py-4">
                  <div>$20</div>
                </td>
                <td className="px-6 py-4">
                  <div className="border text-center text-orange-300 bg-orange-100 ">
                    Checkin
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <TfiPencil />
                    <FiTrash />
                  </div>
                </td>
              </tr>

              <tr className="bg-white border">
                <td className="px-6 py-4">
                  <div></div>
                </td>
                <td className="px-6 py-4">
                  <div></div>
                </td>
                <td className="px-6 py-4">
                  <div></div>
                </td>
                <td className="px-6 py-4">
                  <div className="">1-9 of 11</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex text-xl text-gray-500 gap-4 hover:text-black">
                    <HiOutlineChevronLeft /> <HiOutlineChevronRight />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default RoomsList;
