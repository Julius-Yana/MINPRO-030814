import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';
import DateRangePicker from '@themesberg/tailwind-datepicker/DateRangePicker';

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
                    <p>Back to 90'</p>
                    <p>01 Juni 2024</p>
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
            <hr className="w-full mt-16" />
            <div className="h-70 ">
              <div className="flex items-start space-x-10 ">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img src="/98.webp" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">BackstreetBoys</h2>
                    <p>Back to 90'</p>
                    <p>01 September 2024</p>
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
          </div>
        </div>
        <div className="basis-1/4">
          <div className="container mx-auto p-10 ">
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
            <h2 className="text-4xl mt-7 mb-4 sm:text-3xl uppercase">
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

            <h2 className="text-4xl mt-7 mb-4 sm:text-3xl uppercase">
              Tanggal
            </h2>
            <h2 className="text-4xl mt-7 mb-4 sm:text-3xl uppercase">Price</h2>
            <input
              type="range"
              min="0"
              max="100"
              value="40"
              className="range range-primary"
            />
          </div>
          <div className='border bottom-1'>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-4xl mt-7 mb-4 sm:text-3xl uppercase ">Event Gratis</span>
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
              <span className="label-text text-4xl mt-7 mb-4 sm:text-3xl uppercase">Event Berbayar</span>
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
      </div>
      

      <Footer />
    </div>
  );
}
