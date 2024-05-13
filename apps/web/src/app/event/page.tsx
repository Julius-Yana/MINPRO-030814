import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
// import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';
// import DateRangePicker from '@themesberg/tailwind-datepicker/DateRangePicker';

export default function event() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-3/4">
          <h1 className="text-4xl mt-7 mb-4 sm:text-3xl uppercase">
            List Event
          </h1>
          <div className="container mx-auto p-10 ">
            <div className="h-70 ">
              <div className="flex items-start space-x-10 ">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src="/98.webp" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">98 degress</h2>
                    {/* <p>Back to 90'</p> */}
                    <p>Back to 90'</p>
                    <p>01 Juni 2024</p>
                    <p>Jakarta</p>
                    <h2 className="card-title">GRATIS</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        <Link href="/beli">Beli Tiket</Link>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src="/98.webp" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">A1</h2>
                    <p>Back to 90'</p>
                    <p>01 Juli 2024</p>
                    <p>Bogor</p>
                    <h2 className="card-title">Rp. 100.000</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        <Link href="/beli">Beli Tiket</Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src="/98.webp" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">boyzone</h2>
                    <p>Back to 90'</p>
                    <p>01 Agustus 2024</p>
                    <p>Ciawi</p>
                    <h2 className="card-title">Rp. 200.000</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        <Link href="/beli">Beli Tiket</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <hr className="w-full mt-16 bg-transparent" /> */}
            <div className="h-70 mt-16 ">
              <div className="flex items-start space-x-10 ">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src="/98.webp" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">BackstreetBoys</h2>
                    <p>Back to 90'</p>
                    <p>01 September 2024</p>
                    <p>Cipularang</p>
                    <h2 className="card-title">Rp. 300.000</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        <Link href="/beli">Beli Tiket</Link>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src="/98.webp" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">NSYNC</h2>
                    <p>Back to 90'</p>
                    <p>01 Oktober 2024</p>
                    <p>Sumedang</p>
                    <h2 className="card-title">Rp. 400.000</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        <Link href="/beli">Beli Tiket</Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src="/98.webp" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">ULTRA</h2>
                    <p>Back to 90'</p>
                    <p>01 November 2024</p>
                    <p>Dawuan</p>
                    <h2 className="card-title">Rp. 500.000</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        <Link href="/beli">Beli Tiket</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <center>
              <br></br>
              <div className="join">
                <input
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label="1"
                  checked
                />
                <input
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label="2"
                />
                <input
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label="3"
                />
                <input
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label="4"
                />
              </div>
            </center>
          </div>
        </div>
        <div className="pt-32 basis-1/4">
          <div className="container mx-auto  ">
            <form>
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </label>
            </form>
            <h2 className=" text-4xl  mt-7 mb-4 sm:text-3xl uppercase">
              Kategori
            </h2>
            <select className="select select-info w-full max-w-xs scroll-mt-10">
              <option disabled selected>
                Kategori Event
              </option>
              <option>Kategori A</option>
              <option>Kategori B</option>
              <option>Kategori C</option>
            </select>

            {/* <!-- Datepicker --> */}
<div id="single-pre-set-ranges-tab-preview-datepicker" className="w-80 flex flex-col bg-white border shadow-lg rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
  <div className="p-3">
    {/* <!-- Calendar --> */}
    <div className="space-y-0.5">
      {/* <!-- Months --> */}
      <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
        {/* <!-- Prev Button --> */}
        <div className="col-span-1">
          <button type="button" className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
        </div>
        {/* <!-- End Prev Button --> */}

        {/* <!-- Month / Year --> */}
        <div className="col-span-3 flex justify-center items-center gap-x-1">
          <div className="relative">
            <select data-hs-select='{
                "placeholder": "Select month",
                "viewport": "#single-pre-set-ranges-tab-preview-datepicker",
                "toggleTag": "<button type=\"button\"></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
              }' className="hidden">
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6" selected={true}>July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select>
          </div>

          <span className="text-gray-800 dark:text-neutral-200">/</span>

          <div className="relative">
            <select data-hs-select='{
                "placeholder": "Select year",
                "viewport": "#single-pre-set-ranges-tab-preview-datepicker",
                "toggleTag": "<button type=\"button\"></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
              }' className="hidden">
              <option selected="">2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
            </select>
          </div>
        </div>
        {/* <!-- End Month / Year --> */}

        {/* <!-- Next Button --> */}
        <div className="col-span-1 flex justify-end">
          <button type="button" className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
            <svg className="flex-shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
        {/* <!-- End Next Button --> */}
      </div>
      {/* <!-- Months --> */}

      {/* <!-- Weeks --> */}
      <div className="flex pb-1.5">
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Mo
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Tu
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          We
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Th
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Fr
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Sa
        </span>
        <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
          Su
        </span>
      </div>
      {/* <!-- Weeks --> */}

      {/* <!-- Days --> */}
      <div className="flex">
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            26
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            27
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            28
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            29
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            30
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            1
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            2
          </button>
        </div>
      </div>
      {/* <!-- Days --> */}

      {/* <!-- Days --> */}
      <div className="flex">
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            3
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            4
          </button>
        </div>
        <div className="bg-gray-100 rounded-s-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full dark:bg-blue-500 disabled:text-gray-300 disabled:pointer-events-none dark:hover:border-blue-500">
            5
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            6
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            7
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            8
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            9
          </button>
        </div>
      </div>
      {/* <!-- Days --> */}

      {/* <!-- Days --> */}
      <div className="flex">
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            10
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            11
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            12
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            13
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            14
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            15
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            16
          </button>
        </div>
      </div>
      {/* <!-- Days --> */}

      {/* <!-- Days --> */}
      <div className="flex">
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            17
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            18
          </button>
        </div>
        <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            19
          </button>
        </div>
        <div className="bg-gray-100 rounded-e-full dark:bg-neutral-800">
          <button type="button" className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full dark:bg-blue-500 disabled:text-gray-300 disabled:pointer-events-none dark:hover:border-blue-500">
            20
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            21
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            22
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            23
          </button>
        </div>
      </div>
      {/* <!-- Days --> */}

      {/* <!-- Days --> */}
      <div className="flex">
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            24
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            25
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            26
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            27
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            28
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            29
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            30
          </button>
        </div>
      </div>
      {/* <!-- Days --> */}

      {/* <!-- Days --> */}
      <div className="flex">
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
            31
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            1
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            2
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            3
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            4
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            5
          </button>
        </div>
        <div>
          <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
            6
          </button>
        </div>
      </div>
      {/* <!-- Days --> */}
    </div>
    {/* <!-- End Calendar --> */}
  </div>

  {/* <!-- Footer --> */}
  <div className="flex justify-end items-center gap-x-2 p-3 border-t dark:border-neutral-700">
    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
      Cancel
    </button>
    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
      Apply
    </button>
  </div>
  {/* <-- End Footer --> */}
</div>
{/* <!-- End Datepicker --> */}
            <h2 className="text-4xl mt-7 mb-4 sm:text-3xl uppercase">Price</h2>
            <input
              type="range"
              min="0"
              max="100"
              value="40"
              className="range range-primary"
            />
          </div>

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="text-4xl mt-7 mb-4 sm:text-3xl uppercase ">
                Event Gratis
              </span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="text-4xl mt-7 mb-4 sm:text-3xl uppercase">
                Event Berbayar
              </span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked
              />
            </label>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
