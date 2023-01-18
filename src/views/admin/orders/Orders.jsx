
import { HiSearch, HiTrash } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

const orderData = [
  {
    id: 1,
    guestName: "Cy Ganderton",
    email: "gander.cy@gmail.com",
    phone: "0726445762",
    room: "Executive Deluxed",
    checkinDay: "22 Jan 2023",
  },
  {
    id: 2,
    guestName: "Hart Hagerty",
    email: "hagertyhart@icloud.com",
    phone: "0918776342",
    room: "Balcony City View",
    checkinDay: "20 Jan 2023",
  },
  {
    id: 3,
    guestName: "Brice Swyre",
    email: "briceswyre@splash.com",
    phone: "0726448862",
    room: "Executive Deluxed",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 4,
    guestName: "Marjy Ferencz",
    email: "marjyf@hypermail.com.us",
    phone: "0918776248",
    room: "Balcony City View",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 5,
    guestName: "Yancy Tear",
    email: "yayatear@flomail.net",
    phone: "0973245723",
    room: "Deluxed Riverside",
    checkinDay: "20 Jan 2023",
  },
  {
    id: 6,
    guestName: "Irma Vasilik",
    email: "vanderrir@gmail.com",
    phone: "0251666783",
    room: "Queen Deluxed Room",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 7,
    guestName: "Meghann Durtnal",
    email: "meghannisme@icloud.com",
    phone: "0842665781",
    room: "Deluxed Riversided",
    checkinDay: "25 Jan 2023",
  },

  {
    id: 8,
    guestName: "Sammy Seston",
    email: "samsamseston@splash.net",
    phone: "0642665784",
    room: "Executive Deluxed",
    checkinDay: "25 Jan 2023",
  },
  {
    id: 9,
    guestName: "Lesya Tinham",
    email: "tlesya@gmail.com",
    phone: "0918776342",
    room: "Balcony City View",
    checkinDay: "20 Jan 2023",
  },
  {
    id: 10,
    guestName: "Zaneta Tewkesbury",
    email: "anett@hormail.com",
    phone: "0726448352",
    room: "Executive Deluxed",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 11,
    guestName: "Clyn Ganderton",
    email: "gander.cy@gmail.com",
    phone: "0726448762",
    room: "Executive Deluxed",
    checkinDay: "22 Jan 2023",
  },
  {
    id: 12,
    guestName: "Hart Hagerty",
    email: "hagertyhart@icloud.com",
    phone: "0918776542",
    room: "Balcony City View",
    checkinDay: "20 Jan 2023",
  },
  {
    id: 13,
    guestName: "Bride Swyre",
    email: "briceswyde@splash.com",
    phone: "0726458862",
    room: "Executive Deluxed",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 14,
    guestName: "Marjyn Ferencz",
    email: "marjyfn@hypermail.com.us",
    phone: "0918776238",
    room: "Balcony City View",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 15,
    guestName: "Yancy Tearn",
    email: "yayatearn@flomail.net",
    phone: "0973245733",
    room: "Deluxed Riverside",
    checkinDay: "20 Jan 2023",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const totalOrders = orderData.length;

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const totalPage = Math.ceil(totalOrders / ordersPerPage);

  const handleClick = (isBack) => {
    if (isBack) {
      if (currentPage >= 2) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      {
        if (currentPage < totalPage) {
          setCurrentPage(currentPage + 1);
        }
      }
    }
  };

  useEffect(() => {
    const crrPageIndex = currentPage - 1;
    const startIndex = crrPageIndex * ordersPerPage;

    setOrders(orderData.slice(startIndex, startIndex + ordersPerPage));
  }, [currentPage]);

  return (
    <div>
      {/* Container */}
      <div className=" max-w-screen-xl mx-auto px-4 py-8">
        {/* Layout */}
        <div>
          {/* Content */}
          {/* ACCOUNT INFO */}
          <div className="flex items-center justify-end">
            <span className=" text-sm font-bold text-teal-600 border-l-gray-200 border-l-2 px-4">
              Rosie P
            </span>
            <img
              src="https://i.pinimg.com/280x280_RS/e9/1d/06/e91d062f1c0708a9b1f0f1880a3d8f19.jpg"
              alt="profilepic"
              className=" aspect-square w-10 rounded-full"
            />
          </div>

          {/* SEARCH AREA */}
          <div className="my-6">
            <form class="flex items-center">
              <label for="search-area" class="sr-only">
                Search
              </label>
              <div class="relative max-w-screen-sm">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiSearch className="text-xl" />
                </div>
                <input
                  type="text"
                  id="search-area"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 "
                  placeholder="Search"
                  required
                />
              </div>
              <button
                type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-white bg-teal-600 rounded-lg border border-teal-600 hover:bg-teal-500/50 focus:ring-4 focus:outline-none focus:ring-teal-300"
              >
                <HiSearch className="text-xl" />
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>

          {/* TABLE */}
          <div>
            <div className="overflow-x-auto">
              <table className="table table-compact w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Room</th>
                    <th>Check-in</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => {
                    return (
                      <tr key={order.id}>
                        <th>{order.id}</th>
                        <td>{order.guestName}</td>
                        <td>{order.email}</td>
                        <td>{order.phone}</td>
                        <td>{order.room}</td>
                        <td>{order.checkinDay}</td>
                        <td className="">
                          <div className="flex gap-2 justify-center">
                            <div className=" aspect-square rounded-full bg-teal-400 h-4"></div>
                            <BsTrash className="text-xl" />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
          {/* PAGINATION */}
          <div className="flex justify-end gap-8 p-4 mt-2">
            <span className="text-sm text-zinc-500 pr-4">
              {(currentPage - 1) * ordersPerPage + 1} -{" "}
              {(currentPage - 1) * ordersPerPage + ordersPerPage} of{" "}
              {totalOrders}
            </span>
            <div className="flex gap-4">
              <IoIosArrowBack
                onClick={() => {
                  handleClick(true);
                }}
                className={`text-xl ${
                  currentPage === 1 ? "text-gray-400" : ""
                } `}
              />
              <IoIosArrowForward
                onClick={() => {
                  handleClick(false);
                }}
                className={`text-xl ${
                  currentPage === totalPage ? "text-gray-400" : ""
                } `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default Orders;
