"use client";
import { WeatherContext } from "@/context/weather.context";
import SelectCity from "./SelectCity";
import { useContext } from "react";
import Link from "next/link";
import Today from "./Today";

const Search = () => {
  const { isLoading, city } = useContext(WeatherContext);

  return (
    <div
      className={`w-full max-w-716 h-690 bg-gray-800 p-4 rounded-def ${
        isLoading ? "animate-pulse" : ""
      } max-lg:max-w-none max-lg:p-3 max-lg:h-396`}
    >
      {!isLoading ? (
        <>
          <div className="w-full flex flex-row justify-between items-center gap-x-3 mb-4 max-lg:gap-x-2 max-lg:mb-3">
            <Link
              href="/"
              className="w-full max-w-56 h-56 flex justify-center items-center bg-gray-600 p-1 rounded-def hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
              >
                <path
                  d="M22.665 19.7803C21.5939 19.7803 20.9341 19.2858 19.8559 18.7034C18.7777 18.121 15.6593 15.7761 15.6593 12.8572C15.6593 10.8771 15.1489 9.27555 14.2796 7.99922C13.4168 6.73269 12.248 5.8552 11.032 5.23578C10.446 4.93736 9.83628 4.69331 9.22909 4.49162C8.87512 4.37412 8.6697 3.99404 8.82329 3.65425C9.79668 1.49931 11.9645 0 14.4828 0C17.9107 0 20.6897 2.77887 20.6897 6.20693C20.6897 6.94032 20.5625 7.6441 20.3289 8.29718C21.3183 7.63042 22.5104 7.24134 23.7932 7.24134C27.2211 7.24134 29.9999 10.0202 29.9999 13.4483C29.9999 17.5751 26.3735 19.7803 22.665 19.7803Z"
                  fill="#8FB2F5"
                />
                <path
                  d="M0 12.9312C0 16.2029 2.15704 18.929 5.01461 19.5314C5.45568 19.6925 5.93185 19.7804 6.4286 19.7804H16.0723C16.3957 19.7804 16.5365 19.3479 16.2896 19.1389C14.6042 17.7129 13.3517 15.7031 13.3517 12.8573C13.3517 11.2936 12.9557 10.1547 12.3724 9.29851C11.7824 8.43247 10.9526 7.78519 9.98464 7.292C9.00769 6.79443 7.94707 6.47745 6.93422 6.25274C6.69567 6.22264 6.4529 6.20702 6.20693 6.20702C2.77887 6.20702 0 9.21755 0 12.9312Z"
                  fill="#8FB2F5"
                />
              </svg>
            </Link>

            <SelectCity />
          </div>

          <Today city={city} />
        </>
      ) : null}
    </div>
  );
};

export default Search;
