'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Footer from '../Footer/Footer';

const LoginSchema = yup.object().shape({
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
});

export default function RegisterForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, action) => {
        console.log(values);
        // onLogin(values)
        action.resetForm();
      }}
    >
      {() => {
        return (
          <Form>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-2">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Buat akun untuk membeli tiket
                </h1>
                <div className="flex justify-center mb-0">
                  <p>Sudah punya akun?</p>
                  <a className="text-info" href="/login">
                    Masuk
                  </a>
                </div>
              </div>
              <div className="mt-10">
                <label className="block text-sm font-medium leading-6 text-white">
                  Nama
                </label>
                <div className="mt-2">
                  <Field
                    name="name"
                    type="text"
                    className="block w-full rounded-md border-0 p-8 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl sm:leading-6"
                  />
                  <ErrorMessage
                    name="name"
                    component={'div'}
                    className="text-sm text-red-500"
                  />
                </div>
              </div>

              <div className="mt-10">
                <label className="block text-sm font-medium leading-6 text-white">
                  Email
                </label>
                <div className="mt-2">
                  <Field
                    name="email"
                    type="text"
                    className="block w-full rounded-md border-0 p-8 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl sm:leading-6"
                  />
                  <ErrorMessage
                    name="email"
                    component={'div'}
                    className="text-sm text-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="mt-2">
                  <Field
                    name="password"
                    type="password"
                    className="block w-full rounded-md border-0 p-8 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl sm:leading-6"
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
                <label className="block text-sm font-medium leading-6 text-white">
                  Konfirmasi Password
                </label>
                <div className="mt-2">
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="block w-full rounded-md border-0 p-8 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl sm:leading-6"
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
                <label className="block text-sm font-medium leading-6 text-white">
                  Referral Code
                </label>
                <div className="mt-2 flex items-center justify-between">
                  <Field
                    name="referralCode"
                    type="text"
                    className="block w-full rounded-md border-0 p-8 max-w-[1000px] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-3xl sm:leading-6"
                  />
                  {/* Checkbox di samping form referral code */}
                  <label className="text-white">
                    <Field
                      type="checkbox"
                      name="referralCodeCheckbox"
                      className="form-checkbox h-5 w-5 text-indigo-600 ml-5"
                    />
                    <span className="ml-2">Saya memiliki kode referral</span>
                  </label>
                </div>
                <ErrorMessage
                  name="referralCode"
                  component={'div'}
                  className="text-sm text-red-500"
                />
              </div>
              {/* Form lainnya */}
              <div className="mt-10">{/* Form lainnya */}</div>
              <button
                type="submit"
                className="w-full mt-6 p-1.5 text-sm font-medium p-8 rounded-md bg-orange-500 text-black font-semibold"
              >
                Daftar
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
