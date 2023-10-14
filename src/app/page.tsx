"use client";
import { CityContext } from "@/context/city.context";
import SelectCity from "@/components/SelectCity";
import { useContext } from "react";

export default function Home() {
  const { handleSelected } = useContext(CityContext);

  return (
    <div className="bg-background-weather bg-cover bg-center bg-no-repeat flex min-h-screen flex-col items-center p-12 max-sm:px-8">
      <header className="mb-48">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="28"
          viewBox="0 0 128 28"
          fill="none"
        >
          <path
            d="M27.5002 26C26.2006 26 25.3999 25.4 24.0917 24.6934C22.7835 23.9867 18.9999 21.1416 18.9999 17.6C18.9999 15.1975 18.3806 13.2543 17.3259 11.7057C16.279 10.169 14.8608 9.10428 13.3855 8.35272C12.6745 7.99064 11.9347 7.69452 11.198 7.4498C10.7685 7.30724 10.5192 6.84608 10.7056 6.4338C11.8866 3.81916 14.5169 2 17.5724 2C21.7316 2 25.1034 5.37168 25.1034 9.53104C25.1034 10.4209 24.9491 11.2748 24.6657 12.0672C25.8662 11.2582 27.3126 10.7861 28.869 10.7861C33.0282 10.7861 36.3998 14.1578 36.3998 18.3172C36.3998 23.3244 31.9998 26 27.5002 26Z"
            fill="#8FB2F5"
          />
          <path
            d="M0 17.6896C0 21.6593 2.6172 24.967 6.08436 25.6978C6.61952 25.8933 7.19728 26 7.8 26H19.501C19.8934 26 20.0642 25.4752 19.7646 25.2217C17.7197 23.4914 16.2 21.0529 16.2 17.6C16.2 15.7027 15.7195 14.3209 15.0117 13.282C14.2959 12.2312 13.2891 11.4459 12.1146 10.8475C10.9293 10.2437 9.6424 9.85914 8.41348 9.5865C8.12404 9.54998 7.82948 9.53102 7.53104 9.53102C3.37168 9.53102 0 13.1838 0 17.6896Z"
            fill="#8FB2F5"
          />
          <path
            d="M53.0416 20.6241L49 6.80005H51.4288L54.184 16.784L56.9296 6.81925L59.3584 6.80005L62.1136 16.784L64.8592 6.80005H67.288L63.256 20.6241H60.9712L58.1392 10.7936L55.3264 20.6241H53.0416Z"
            fill="#FAFAFA"
          />
          <path
            d="M72.4243 20.912C71.3747 20.912 70.4531 20.6849 69.6595 20.2305C68.8659 19.7761 68.2451 19.1457 67.7971 18.3393C67.3555 17.5329 67.1347 16.6049 67.1347 15.5553C67.1347 14.4225 67.3523 13.44 67.7875 12.608C68.2227 11.7696 68.8275 11.12 69.6019 10.6592C70.3763 10.1984 71.2723 9.96805 72.2899 9.96805C73.3651 9.96805 74.2771 10.2208 75.0259 10.7264C75.7811 11.2256 76.3411 11.9328 76.7059 12.8481C77.0707 13.7633 77.2083 14.8416 77.1187 16.0832H74.8243V15.2384C74.8179 14.112 74.6195 13.2896 74.2291 12.7712C73.8387 12.2528 73.2243 11.9936 72.3859 11.9936C71.4387 11.9936 70.7347 12.288 70.2739 12.8768C69.8131 13.4592 69.5827 14.3137 69.5827 15.4401C69.5827 16.4896 69.8131 17.3024 70.2739 17.8784C70.7347 18.4544 71.4067 18.7424 72.2899 18.7424C72.8595 18.7424 73.3491 18.6176 73.7587 18.368C74.1747 18.112 74.4947 17.7441 74.7187 17.2641L77.0035 17.9552C76.6067 18.8896 75.9923 19.616 75.1603 20.1344C74.3347 20.6528 73.4227 20.912 72.4243 20.912ZM68.8531 16.0832V14.3361H75.9859V16.0832H68.8531Z"
            fill="#FAFAFA"
          />
          <path
            d="M81.9724 20.912C81.2236 20.912 80.59 20.7713 80.0716 20.4897C79.5532 20.2017 79.1596 19.8209 78.8908 19.3473C78.6284 18.8737 78.4972 18.352 78.4972 17.7824C78.4972 17.2832 78.5804 16.8352 78.7468 16.4384C78.9132 16.0352 79.1692 15.6896 79.5148 15.4016C79.8604 15.1072 80.3084 14.8673 80.8588 14.6817C81.2748 14.5472 81.7612 14.4256 82.318 14.3168C82.8812 14.208 83.4892 14.1089 84.142 14.0192C84.8012 13.9233 85.4892 13.8208 86.206 13.712L85.3804 14.1824C85.3868 13.4656 85.2268 12.9376 84.9004 12.5984C84.574 12.2592 84.0236 12.0897 83.2492 12.0897C82.782 12.0897 82.3308 12.1984 81.8956 12.416C81.4604 12.6336 81.1564 13.0081 80.9836 13.5393L78.8716 12.8768C79.1276 12 79.614 11.2961 80.3308 10.7648C81.054 10.2337 82.0268 9.96805 83.2492 9.96805C84.1708 9.96805 84.9804 10.1184 85.678 10.4192C86.382 10.72 86.9036 11.2129 87.2428 11.8977C87.4284 12.2625 87.5404 12.6368 87.5788 13.0208C87.6172 13.3984 87.6364 13.8112 87.6364 14.2592V20.6241H85.6108V18.3777L85.9468 18.7424C85.4796 19.4912 84.9324 20.0417 84.3052 20.3937C83.6844 20.7393 82.9068 20.912 81.9724 20.912ZM82.4332 19.0689C82.958 19.0689 83.406 18.9761 83.7772 18.7905C84.1484 18.6048 84.4428 18.3776 84.6604 18.1088C84.8844 17.84 85.0348 17.5872 85.1116 17.3504C85.2332 17.056 85.3004 16.72 85.3132 16.3424C85.3324 15.9584 85.342 15.6481 85.342 15.4113L86.0524 15.6225C85.3548 15.7313 84.7564 15.8273 84.2572 15.9104C83.758 15.9937 83.3292 16.0736 82.9708 16.1504C82.6124 16.2208 82.2956 16.3008 82.0204 16.3904C81.7516 16.4865 81.5244 16.5984 81.3388 16.7264C81.1532 16.8544 81.0092 17.0016 80.9068 17.168C80.8108 17.3344 80.7628 17.5296 80.7628 17.7536C80.7628 18.0096 80.8268 18.2369 80.9548 18.4353C81.0828 18.6273 81.2684 18.7808 81.5116 18.896C81.7612 19.0112 82.0684 19.0689 82.4332 19.0689Z"
            fill="#FAFAFA"
          />
          <path
            d="M96.2125 20.6241C95.5277 20.7521 94.8557 20.8064 94.1965 20.7872C93.5437 20.7744 92.9581 20.656 92.4397 20.432C91.9213 20.2016 91.5277 19.8401 91.2589 19.3473C91.0221 18.8993 90.8973 18.4416 90.8845 17.9744C90.8717 17.5072 90.8653 16.9792 90.8653 16.3904V7.37605H93.1693V16.2561C93.1693 16.6721 93.1725 17.0368 93.1789 17.3504C93.1917 17.664 93.2589 17.9201 93.3805 18.1185C93.6109 18.5025 93.9789 18.7168 94.4845 18.7617C94.9901 18.8064 95.5661 18.7809 96.2125 18.6849V20.6241ZM88.9837 12.0704V10.2561H96.2125V12.0704H88.9837Z"
            fill="#FAFAFA"
          />
          <path
            d="M105.613 20.6241V15.632C105.613 15.3056 105.591 14.9441 105.546 14.5473C105.501 14.1505 105.396 13.7696 105.229 13.4048C105.069 13.0336 104.826 12.7296 104.5 12.4928C104.18 12.256 103.744 12.1376 103.194 12.1376C102.9 12.1376 102.608 12.1856 102.32 12.2817C102.032 12.3776 101.77 12.5441 101.533 12.7809C101.303 13.0113 101.117 13.3312 100.976 13.7408C100.836 14.144 100.765 14.6624 100.765 15.296L99.3923 14.7104C99.3923 13.8272 99.5619 13.0272 99.9011 12.3104C100.247 11.5936 100.752 11.024 101.418 10.6016C102.084 10.1728 102.903 9.95845 103.876 9.95845C104.644 9.95845 105.277 10.0864 105.776 10.3424C106.276 10.5984 106.672 10.9248 106.967 11.3216C107.261 11.7184 107.479 12.1409 107.62 12.5889C107.76 13.0369 107.85 13.4625 107.888 13.8656C107.933 14.2624 107.956 14.5856 107.956 14.8352V20.6241H105.613ZM98.4227 20.6241V6.80005H100.487V14.0768H100.765V20.6241H98.4227Z"
            fill="#FAFAFA"
          />
          <path
            d="M115.174 20.912C114.125 20.912 113.203 20.6849 112.409 20.2305C111.616 19.7761 110.995 19.1457 110.547 18.3393C110.105 17.5329 109.885 16.6049 109.885 15.5553C109.885 14.4225 110.102 13.44 110.537 12.608C110.973 11.7696 111.577 11.12 112.352 10.6592C113.126 10.1984 114.022 9.96805 115.04 9.96805C116.115 9.96805 117.027 10.2208 117.776 10.7264C118.531 11.2256 119.091 11.9328 119.456 12.8481C119.821 13.7633 119.958 14.8416 119.869 16.0832H117.574V15.2384C117.568 14.112 117.369 13.2896 116.979 12.7712C116.589 12.2528 115.974 11.9936 115.136 11.9936C114.189 11.9936 113.485 12.288 113.024 12.8768C112.563 13.4592 112.333 14.3137 112.333 15.4401C112.333 16.4896 112.563 17.3024 113.024 17.8784C113.485 18.4544 114.157 18.7424 115.04 18.7424C115.609 18.7424 116.099 18.6176 116.509 18.368C116.925 18.112 117.245 17.7441 117.469 17.2641L119.753 17.9552C119.357 18.8896 118.742 19.616 117.91 20.1344C117.085 20.6528 116.173 20.912 115.174 20.912ZM111.603 16.0832V14.3361H118.736V16.0832H111.603Z"
            fill="#FAFAFA"
          />
          <path
            d="M122.011 20.6241V10.2561H124.055V12.7809L123.806 12.4544C123.934 12.1088 124.103 11.7952 124.315 11.5136C124.532 11.2256 124.791 10.9888 125.092 10.8032C125.348 10.6304 125.63 10.496 125.937 10.4C126.251 10.2976 126.571 10.2368 126.897 10.2176C127.223 10.192 127.54 10.2049 127.847 10.2561V12.416C127.54 12.3264 127.185 12.2976 126.782 12.3296C126.385 12.3616 126.027 12.4736 125.707 12.6656C125.387 12.8384 125.124 13.0592 124.919 13.328C124.721 13.5968 124.574 13.904 124.478 14.2496C124.382 14.5888 124.334 14.9569 124.334 15.3536V20.6241H122.011Z"
            fill="#FAFAFA"
          />
          <path
            d="M46.8867 10.4336V21H44.1426V10.4336H46.8867ZM44.0156 7.69922C44.0156 7.27604 44.1491 6.92773 44.416 6.6543C44.6895 6.37435 45.054 6.23438 45.5098 6.23438C45.972 6.23438 46.3366 6.37435 46.6035 6.6543C46.8704 6.92773 47.0039 7.27604 47.0039 7.69922C47.0039 8.11589 46.8672 8.46419 46.5938 8.74414C46.3268 9.01758 45.9688 9.1543 45.5195 9.1543C45.0573 9.1543 44.6895 9.01758 44.416 8.74414C44.1491 8.46419 44.0156 8.11589 44.0156 7.69922Z"
            fill="white"
          />
        </svg>
      </header>

      <main className="w-full max-w-412 flex flex-col items-center text-center mb-14 max-sm:mb-7">
        <h1 className="flex flex-row items-center flex-wrap justify-center font-bold text-heading-lg mb-1.5 max-sm:text-heading-md">
          Welcome to{" "}
          <p className="text-blueLight ml-2 max-sm:ml-1.5">iWeather</p>
        </h1>

        <p className="font-normal text-t-lg text-gray-200 max-sm:text-t-md">
          Choose a location to see the weather forecast
        </p>
      </main>

      <SelectCity onSelect={handleSelected} maxWidth="max-w-448" />
    </div>
  );
}
