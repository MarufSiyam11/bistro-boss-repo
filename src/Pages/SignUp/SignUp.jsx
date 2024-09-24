// import { Link, useNavigate } from "react-router-dom";

// import loginImg from "../../assets/others/authentication1.png";
// import { useForm } from "react-hook-form";
// import { Helmet } from "react-helmet-async";
// import { useContext } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../Providers/AuthPeovider";

// const SignUp = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const { createUser, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log(data);
//     createUser(data.email, data.password).then((result) => {
//       const loggedUser = result.user;
//       console.log(loggedUser);
//       updateUserProfile(data.name, data.photoURL)
//         .then(() => {
//           console.log("user porfile info updated");
//           reset();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "User Created Successfully",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           navigate("/");
//         })
//         .catch((error) => console.log(error));
//     });
//     // console.log(data)
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Besto Boss | SignUp</title>
//       </Helmet>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content  flex-col lg:flex-row-reverse">
//           <div className="text-center md:w-1/2 lg:text-left">
//             <img className="rounded-full" src={loginImg} alt="" />
//           </div>
//           <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register("name", { required: true })}
//                   name="name"
//                   placeholder="name"
//                   className="input input-bordered"
//                   required
//                 />
//                 {errors.name && (
//                   <span className="text-red-600">Name is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register("photoURL", { required: true })}
//                   placeholder="Photo URL"
//                   className="input input-bordered"
//                   required
//                 />
//                 {errors.name && (
//                   <span className="text-red-600">Photo URL is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   {...register("email", { required: true })}
//                   name="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//                 {errors.email && (
//                   <span className="text-red-600">Email is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   {...register("password", {
//                     required: true,
//                     minLength: 6,
//                     maxLength: 20,
//                     // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
//                   })}
//                   name="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />
//                 {errors.password?.type === "required" && (
//                   <span className="text-red-600">Password is required</span>
//                 )}
//                 {errors.password?.type === "minLength" && (
//                   <span className="text-red-600">
//                     Password must be 6 character
//                   </span>
//                 )}
//                 {errors.password?.type === "maxLength" && (
//                   <span className="text-red-600">
//                     Password must be less then 20 character
//                   </span>
//                 )}
//                 {errors.password?.type === "pattern" && (
//                   <span className="text-red-600">
//                     Password must have one upper case one lower case, one number
//                     and one special character
//                   </span>
//                 )}
//               </div>

//               <div className="form-control mt-6">
//                 <input
//                   className="btn btn-primary"
//                   type="Submit"
//                   name=""
//                   value="Sign Up"
//                 />
//               </div>
//             </form>
//             <p className="text-center p-3">
//               <small>
//                 Already have an account{" "}
//                 <Link to="/login">
//                   Please <i className="text-green-600 font-bold">LogIn</i>
//                 </Link>
//               </small>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;
