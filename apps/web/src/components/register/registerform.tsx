"use client"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const RegisterSchema = yup.object().shape({
  name: yup.string().required('Nama tidak boleh kosong'),
  email: yup.string().email('Email tidak valid').required('Email diperlukan'),
  password: yup
    .string()
    .min(6, 'Password harus terdiri dari minimal 6 karakter')
    .required('Password diperlukan'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password'), ''],
      'Password dan Konfirmasi Password harus sama',
    )
    .required('Konfirmasi Password diperlukan'),
  referralCode: yup.string().length(6, 'Referral code harus terdiri dari 6 karakter').nullable()
});

export default function RegisterForm() {
  const [error, setError] = useState('');
  const [isReferralExist, setIsReferralExist] = useState(false);
  const [referralMessage, setReferralMessage] = useState('');

  const handleCheckReferral = async (values:any) => {
    try {
      const response = await axios.post('http://localhost:8000/api/users/checkreferral', {
        referralCode: values.referralCode
      });
      setIsReferralExist(true);
      setReferralMessage(response.data.message);
    } catch (err) {
      setIsReferralExist(false);
      setReferralMessage('Referral Code does not exist, please check again!');
    }
  };

  const handleRegister = async (values:any, action:any) => {
    try {
      const { referralCodeCheckbox, ...data } = values;
      if (!referralCodeCheckbox) delete data.referralCode;
      
      const response = await axios.post('http://localhost:8000/api/users', data);
      console.log(response.data);
      setError(''); // Reset error jika berhasil
      window.location.href = '/verify'; // Arahkan ke halaman /verify setelah pendaftaran berhasil
    } catch (err) {
      console.error(err);
      setError('Failed to register. Please check your details.'); // Set error message
    }
  };

  return (
    <Formik
      initialValues={{
        name:'',
        email: '',
        password: '',
        confirmPassword: '',
        referralCode: '',
        referralCodeCheckbox: false
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, action) => {
        handleRegister(values, action);
      }}
    >
      {({ values }) => {
        return (
          <Form>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-2">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Buat akun untuk membeli tiket
                </h1>
                <div className="flex justify-center mb-0">
                  <p>Sudah punya akun?</p>
                  <Link className="text-info" href="/login">
                    Masuk
                  </Link>
                </div>
              </div>
              <div className="mt-10">
                <label className="block text-sm font-medium leading-6 text-black">
                  Nama
                </label>
                <div className="mt-2">
                  <Field
                    name="name"
                    type="text"
                    className="block w-full rounded-md border-0 p-8 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl sm:leading-6"
                  />
                  <ErrorMessage
                    name="name"
                    component={'div'}
                    className="text-sm text-red-500"
                  />
                </div>
              </div>

              <div className="mt-10">
                <label className="block text-sm font-medium leading-6 text-black">
                  Email
                </label>
                <div className="mt-2">
                  <Field
                    name="email"
                    type="text"
                    className="block w-full rounded-md border-0 p-8 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl sm:leading-6"
                  />
                  <ErrorMessage
                    name="email"
                    component={'div'}
                    className="text-sm text-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-black">
                  Password
                </label>
                <div className="mt-2">
                  <Field
                    name="password"
                    type="password"
                    className="block w-full rounded-md border-0 p-8 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl sm:leading-6"
                  />
                  <ErrorMessage
                    name="password"
                    component={'div'}
                    className="text-sm text-red-500"
                  />
                  <div
                    className="password-button"
                    data-password-field-btn
                  ></div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-black">
                  Konfirmasi Password
                </label>
                <div className="mt-2">
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="block w-full rounded-md border-0 p-8 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl sm:leading-6"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component={'div'}
                    className="text-sm text-red-500"
                  />
                  <div
                    className="password-button"
                    data-password-field-btn
                  ></div>
                </div>
              </div>
              <div className="mt-2 ">
                <label className="block text-sm font-medium leading-6 text-black">
                  Referral Code
                </label>
                <div className="mt-2 flex items-center justify-between">
                  <Field
                    name="referralCode"
                    type="text"
                    className="block w-full rounded-md border-0 p-8 max-w-[1000px] text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl sm:leading-6"
                  />
                  <button
                    type="button"
                    className="w-full text-center p-8 max-w-[200px] inline-flex gap-x-2 text-2xl font-semibold rounded-lg border border-black text-black hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={() => handleCheckReferral(values)}
                  >
                    {isReferralExist ? '✓' : 'Check'}
                  </button>
                </div>
                {referralMessage && (
                  <div className="text-sm text-red-500 mt-2">{referralMessage}</div>
                )}
              </div>
              {/* Form lainnya */}
              {/* Tombol submit */}
              <button
                type="submit"
                className="w-full mt-6 p-1.5 text-sm font-medium p-8 rounded-md bg-orange-500 text-black font-semibold"
              >
                Daftar
              </button>
              {/* Tampilkan pesan kesalahan jika gagal mendaftar */}
              {error && (
                <div className="text-sm text-red-500 text-center mt-2">{error}</div>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
