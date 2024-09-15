import { useContext, useEffect, useState } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthPeovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/others/authentication2.png'
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
const Login = () => {

  const [disabled, setDisabled] = useState(true)

  const { signIn } = useContext(AuthContext);
const navigate =useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        Swal.fire({
          title: "User Login Successful",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
          }
        });
        navigate(from, {replace:true});
      })
  }


  const handleValidateCaptcha = (e) => {
    const user_captchs_value = e.target.value;
    if (validateCaptcha(user_captchs_value)) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }
  return (
    <>
      <Helmet>
        <title>Besto Boss | LogIn</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={loginImg} alt="" /> </div>
          <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required />

              </div>
              <div className="form-control mt-6">

                <input disabled={disabled} className="btn btn-primary" type="Submit" name="" value="Login" />
              </div>
            </form>
            <p><small>New Here?? <Link to="/signup">Please <i className="text-green-600 font-bold">Register</i></Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;