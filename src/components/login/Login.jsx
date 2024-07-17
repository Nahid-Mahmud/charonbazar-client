import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router-dom";
import SigninWithGoogle from "../shared/SigninWithGoogle";
import { useAuth } from "../../hooks";
import { toast } from "react-toastify";
import Spinner from "../shared/spinner/Spinner";

const Login = () => {
  // state for showing password
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { signinUser, userLoading, setUserLoading } = useAuth();

  //   state for handeling input fields

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = inputFields;

    // check for empty fields
    if (!email || !password) {
      toast?.warn("Please fill all fields", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Add login logic here
    signinUser(email, password)
      .then((currentUser) => {
        if (currentUser) {
          navigate("/");
          toast?.success("User logged in successfully", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      })
      .catch((err) => {
        setUserLoading(false);
        toast?.error(err.message, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="h-screen items-center pt-20 flex flex-wrap flex-row-reverse justify-center gap-10">
      <div className="hidden lg:inline-flex">
        <Player
          autoplay
          className="h-full w-full"
          loop
          src="https://lottie.host/aaeaf1c7-521a-43bc-9a71-744b7f9fd4f6/VP7YbbnUQO.json"
          // style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
      <div className="w-full  border  max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        {/* <h1 className="text-2xl font-bold text-center">Login</h1> */}
        <p className="text-2xl font-light">Welcome to Charon Bazar!</p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="Email" className="block">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-md border focus:border-2 border-[#3e3e3e]"
              value={inputFields.email}
              onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border focus:border-2 border-[#3e3e3e] "
              value={inputFields.password}
              onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
            />
            <div className="flex justify-end text-xs ">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
            {
              // Show and hide password
              !showPassword ? (
                <span>
                  <IoMdEye
                    onClick={handleShowHidePassword}
                    className="text-2xl absolute right-3 top-9 cursor-pointer"
                  />
                </span>
              ) : (
                <span>
                  <IoEyeOff
                    onClick={handleShowHidePassword}
                    className="text-2xl absolute right-3 top-9 cursor-pointer"
                  />
                </span>
              )
            }
          </div>
          <button
            disabled={userLoading}
            className="bg-white disabled:text-slate-400 relative  w-full mx-auto text-xl border-2 border-[#3e3e3e] transition-all duration-200 hover:scale-95  rounded-lg text-black px-6 py-3  hover:border-[#3d8ec7] cursor-pointer "
          >
            {userLoading ? (
              <div className="absolute left-32 top-[0.95rem]">
                <Spinner />
              </div>
            ) : null}
            Login
          </button>
        </form>
        {/* google sign in */}

        <SigninWithGoogle toastMessage={"Login successfull"}>Signin With Google</SigninWithGoogle>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account?
          <Link rel="noopener noreferrer" to={"/signup"} className="underline dark:text-gray-800">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
