import { useState } from "react";
import useSignup from "hooks/useSignUp";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "component/VerComponent";

const SignupDefaultPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Sign-Up successfull. 😍");
    },
  });

  const[inputs, setInputs] = useState({
    industryName: " ",
    username: " ",
    password: " ",

  })

  const {loading, signup} = useSignup();

  const handelSubmit = async(e) => {
    e.preventDEfault();
    await signup(inputs);
  }


  return (
    <>
      <div className="bg-red-50 flex flex-col font-inter items-start justify-start mx-auto md:px-10 sm:px-5 px-[90px] py-[50px] w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start max-w-[1000px] max-h-[850px] mx-auto w-full">
          <div className="flex  flex-col md:gap-10 gap-[44px] items-center justify-start w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-bluegray-900 text-center w-full"
              size="txtInterBold28"
            >
              <>Let us handle the waste</>
            </Text>
            <Img
              className="h-[597px] w-[493px]"
              src="images/img_group7.svg"
              alt="groupSeven"
            />
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start md:px-10 sm:px-5 px-[74px] py-[66px] rounded-[20px] shadow-bs w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <Text
                  className="text-2xl  md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                  size="txtInterBold24"
                >
                  Sign up to Eco-Resolve
                </Text>
                <div className="flex flex-col gap-[49px] items-center justify-start w-[452px] md:w-full">
                  <Button
                    className="common-pointer bg-white-A700 border border-indigo-50 border-solid cursor-pointer flex items-center justify-center min-w-[452px] sm:min-w-full pl-[23px] pr-[34px] py-[18px] rounded"
                    onClick={() => googleSignIn()}
                    leftIcon={
                      <Img
                        className="h-[18px] mb-px mr-[35px]"
                        src="images/img_google.svg"
                        alt="google"
                      />
                    }
                  >
                    <div className="font-medium sm:px-5 text-bluegray-800 text-center text-sm">
                      Sign Up with Google
                    </div>
                  </Button>
                  <div className="flex sm:flex-col flex-row gap-[42px] items-center justify-start w-full">
                    <Line className="bg-indigo-50 h-px w-[39%]" />
                    <Text
                      className="text-bluegray-800 text-sm"
                      size="txtInterRegular14"
                    >
                      Or
                    </Text>
                    <Line className="bg-indigo-50 h-px w-[39%]" />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="frame"
                          placeholder="Full name"
                          className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pl-5 pr-[35px] py-[17px] rounded w-full"
                          type="text"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-5 mr-4"
                              src="images/img_mail_bluegray_800.svg"
                              alt="mail"
                            />
                          }
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="frame_One"
                          placeholder="Email"
                          className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pl-5 pr-[35px] py-[17px] rounded w-full"
                          type="email"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-5 mr-4"
                              src="images/img_mail_bluegray_800.svg"
                              alt="mail"
                            />
                          }
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="password"
                          placeholder="************"
                          className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pb-[18px] pt-[15px] px-5 rounded w-full"
                          prefix={
                            <Img
                              className="mt-0.5 mb-auto h-5 mr-4"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                          }
                          suffix={
                            <Img
                              className="mt-0.5 mb-auto h-5 ml-[35px]"
                              src="images/img_eye.svg"
                              alt="eye"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-1 mt-6">
                      <Text
                        className="leading-[22.00px] text-bluegray-800 text-center text-sm"
                        size="txtInterMedium14"
                      >
                        <span className="text-bluegray-400 font-inter font-medium">
                          <>
                            By clicking “SIGN UP&quot; button, I agree with your
                          </>
                        </span>
                      </Text>
                      <Text>
                        <a
                          href="javascript:"
                          className="text-bluegray-800 font-inter font-medium underline hover:text-red-500"
                        >
                          Term and Policy
                        </a>
                      </Text>
                     </div>

                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 items-center justify-start w-full">
              <Button
                   className="common-pointer cursor-pointer font-bold py-[19px] rounded-[28px] text-center text-m text-black border border-orange-300 bg-orange-100 hover:bg-orange-200 w-full"
                   onClick={() => navigate("/signup")}
                  >
                    Sign Up
                </Button>
                <div className="flex flex-row gap-1 items-start justify-center w-full">
                  <Text
                    className="text-bluegray-800 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    You have an account already?
                  </Text>
                  <Text
                    className="common-pointer text-deep_orange-300 text-sm underline w-11 hover:text-purple-600"
                    size="txtInterMedium14Deeporange300"
                    onClick={() => navigate("/signin")}
                  >
                    Sign in
                  </Text>
                </div>
                 
                <div className="flex mb-5">
                  <Text
                    className="common-pointer text-deep_orange-300 text-sm underline w-11 hover:text-purple-600"
                    size="txtInterMedium14Deeporange300"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Text>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupDefaultPage;
