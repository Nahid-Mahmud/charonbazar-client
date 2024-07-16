import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
const Login = () => {
  // state for showing password
  const [showPassword, setShowPassword] = useState(false);

  //   state for handeling input fields

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  //   hanelde login

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen items-center pt-20 flex flex-col gap-5">
      <div className="w-full mx-auto border  max-w-lg p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        {/* <h1 className="text-2xl font-bold text-center">Login</h1> */}
        <p className="text-2xl font-light">Welcome to Charon Bazar! Please login.</p>
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
          <button className="bg-white  w-full mx-auto border-2 border-[#3e3e3e] transition-all duration-200 hover:scale-95  rounded-lg text-black px-6 py-3 text-base hover:border-[#3d8ec7] cursor-pointer ">
            Submit
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account?
          <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
