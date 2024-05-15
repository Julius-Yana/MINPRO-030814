import Footer from "@/components/Footer/Footer";
import LoginForm from "@/components/login/loginform";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup'


export default function Login() {
  return (
    <div>
      <LoginForm/>
      <Footer/>
    </div>
    
  );
}
