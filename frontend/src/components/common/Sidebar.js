import React, { useContext } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { FiHome, FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import BrandLogo from "../../assets/images/brandLogo.png";
import { UserContext } from "../../context/UserContext";
import { RxDashboard } from "react-icons/rx";

const Sidebar = ({ activeTab, handleTabClick }) => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div className="fixed z-20 bg-white dark:bg-black bottom-0 w-full md-2:bg-black md-2:w-[280px] md-2:min-h-[100vh] md-2:flex md-2:flex-col md-2:justify-between md-2:py-5">
      <div className="md-2:flex md-2:flex-col md-2:gap-10">
        <div className="hidden md-2:block md-2:px-8">
          <img src={BrandLogo} alt="" className="w-44" />
        </div>

        <nav className="w-full md-2:px-4">
          <p className="hidden text-white opacity-75 mb-2 md-2:block md-2:ml-4">
            Navigation
          </p>

          <ul className="flex items-center justify-between px-6 py-4 border-t md-2:flex-col md-2:gap-2 md-2:items-start md-2:border-none md-2:p-0">
            <li
              className={`relative hover:text-purple-lighter hover:dark:text-purple-lighter cursor-pointer transition duration-200 ease-linear md-2:text-white md-2:flex md-2:items-center md-2:gap-3 md-2:w-full md-2:px-4 md-2:py-2.5 md-2:rounded-md-2 md-2:hover:bg-dark-bg ${
                activeTab === "home"
                  ? "text-purple-lighter dark:text-purple-lighter md-2:text-pale-yellow md-2:bg-dark-bg !impo"
                  : "text-black dark:text-white"
              }`}
              onClick={() => handleTabClick("home")}
            >
              <FiHome className="w-5 h-5" />
              <p className="hidden font-semibold md-2:block">Homepage</p>

              {activeTab === "home" && (
                <div className="md-2:bg-purple-lighter h-full w-[2px] absolute left-0"></div>
              )}
            </li>

            <li
              className={`relative hover:text-purple-lighter hover:dark:text-purple-lighter cursor-pointer transition duration-200 ease-linear md-2:text-white md-2:flex md-2:items-center md-2:gap-3 md-2:w-full md-2:px-4 md-2:py-2.5 md-2:rounded-md-2 md-2:hover:bg-dark-bg ${
                activeTab === "search"
                  ? "text-purple-lighter dark:text-purple-lighter md-2:text-purple-lighter md-2:bg-dark-bg"
                  : "text-black dark:text-white"
              }`}
              onClick={() => handleTabClick("search")}
            >
              <FiSearch className="w-5 h-5" />
              <p className="hidden font-semibold md-2:block">Search Books</p>

              {activeTab === "search" && (
                <div className="md-2:bg-purple-lighter h-full w-[2px] absolute left-0"></div>
              )}
            </li>

            {user?.data[0].userType === "admin" && (
              <li
                className={`relative hover:text-purple-lighter hover:dark:text-purple-lighter cursor-pointer transition duration-200 ease-linear md-2:text-white md-2:flex md-2:items-center md-2:gap-3 md-2:w-full md-2:px-4 md-2:py-2.5 md-2:rounded-md-2 md-2:hover:bg-dark-bg ${
                  activeTab === "dashboard"
                    ? "text-purple-lighter dark:text-purple-lighter md-2:text-purple-lighter md-2:bg-dark-bg"
                    : "text-black dark:text-white"
                }`}
                onClick={() => {
                  handleTabClick("dashboard");
                  localStorage.setItem("activeTab", "dashboard");
                }}
              >
                <RxDashboard className="w-5 h-5" />
                <p className="hidden font-semibold md-2:block">Dashoard</p>

                {activeTab === "dashboard" && (
                  <div className="md-2:bg-purple-lighter h-full w-[2px] absolute left-0"></div>
                )}
              </li>
            )}

            {user?.data[0].userType !== "admin" && (
              <>
                <li
                  className={`relative hover:text-purple-lighter hover:dark:text-purple-lighter cursor-pointer transition duration-200 ease-linear md-2:text-white md-2:flex md-2:items-center md-2:gap-3 md-2:w-full md-2:px-4 md-2:py-2.5 md-2:rounded-md-2 md-2:hover:bg-dark-bg ${
                    activeTab === "exchange"
                      ? "text-purple-lighter dark:text-purple-lighter md-2:text-purple-lighter md-2:bg-dark-bg"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => {
                    handleTabClick("exchange");
                    localStorage.setItem("activeTab", "exchange");
                  }}
                >
                  <FaExchangeAlt className="w-5 h-5" />
                  <p className="hidden font-semibold md-2:block">
                    Exchange Requests
                  </p>

                  {activeTab === "exchange" && (
                    <div className="md-2:bg-purple-lighter h-full w-[2px] absolute left-0"></div>
                  )}
                </li>

                <li
                  className={`relative hover:text-purple-lighter hover:dark:text-purple-lighter cursor-pointer transition duration-200 ease-linear md-2:text-white md-2:flex md-2:items-center md-2:gap-3 md-2:w-full md-2:px-4 md-2:py-2.5 md-2:rounded-md-2 md-2:hover:bg-dark-bg ${
                    activeTab === "acceptedRequests"
                      ? "text-purple-lighter dark:text-purple-lighter md-2:text-purple-lighter md-2:bg-dark-bg"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => {
                    handleTabClick("acceptedRequests");
                    localStorage.setItem("activeTab", "acceptedRequests");
                  }}
                >
                  <BsCheck2Circle className="w-5 h-5" />
                  <p className="hidden font-semibold md-2:block">
                    Accepted Requests
                  </p>

                  {activeTab === "acceptedRequests" && (
                    <div className="md-2:bg-purple-lighter h-full w-[2px] absolute left-0"></div>
                  )}
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      <div
        className="hidden cursor-pointer md-2:flex justify-between items-center md-2:px-4 md-2:py-2 rounded-lg mx-4 transition duration-300 hover:bg-black-75"
        onClick={() => {
          if (user) {
            handleTabClick("profile");
          } else {
            navigate("/please-login");
          }
        }}
      >
        <div className="flex items-center gap-2 text-black dark:text-white md-2:text-white">
          <img
            src={
              user?.data[0].image
                ? `http://localhost:3001/uploads/${user?.data[0].image}`
                : "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg"
            }
            alt=""
            className="w-[35px] h-[35px] rounded-full object-fill"
          />
          <p className="font-medium">
            {user ? user?.data[0].fullname : "Guest User"}
          </p>
        </div>

        <div>
          <FiMoreHorizontal className="relative cursor-pointer z-20 text-black dark:text-white md-2:w-6 md-2:h-6 md-2:text-white transition duration-300 hover:text-purple-lighter dark:hover:text-purple-lighter" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
