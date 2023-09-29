"use client";

import { motion } from "framer-motion";
import { FC, useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

interface pageProps {}

function Page({}: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast.error("Something went wrong with your login");
      // display error message to user
    } finally {
      setIsLoading(false);
    }
  }

  async function loginWithGithub() {
    setIsLoading(true);
    try {
      await signIn("github");
    } catch (err) {
      toast.error("Somthing went wrong with your login github");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col bg-slate-100 min-h-[100vh] min-w-[100vw] text-white overflow-hidden">
        <div className="flex flex-col justify-around align-middle items-center mx-auto w-[550px] h-[650px] bg-slate-800 rounded-md drop-shadow-md	p-10 overflow-hidden">
          <motion.div
            initial={{ y: 200, x: 210, opacity: 0, rotate: -90 }}
            animate={{ y: 215, x: 210, opacity: 100 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1.5 }}
          >
            <motion.h2 className="font text-2xl font-bold  tracking-[3px] opacity-30 ">
              Sign in to your account
            </motion.h2>
          </motion.div>
          <motion.div className="flex flex-col justify-center items-center min-w-full relative ">
            <h2 className="font text-9xl font-bold">
              {" "}
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.0 }}
                className="inline-block"
              >
                Real
              </motion.span>{" "}
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 10, opacity: 100 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
                className="inline-block"
              >
                Time
              </motion.span>{" "}
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 20, opacity: 100 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
                className="inline-block"
              >
                Chat
              </motion.span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            className="flex flex-col gap-3 align-middle items-center justify-center min-w-full h-48 mt-6"
          >
            <Button
              isLoading={isLoading}
              type="button"
              className="max-w-sm mx-auto min-w-full hover:bg-slate-200 transition-all duration-300 hover:text-red-800"
              onClick={loginWithGoogle}
            >
              <Image
                src="/google.svg"
                alt="google logo"
                height={35}
                width={35}
              />{" "}
              <p className="font-bold">Google</p>
            </Button>
            <Button
              isLoading={isLoading}
              type="button"
              className="max-w-sm mx-auto min-w-full hover:bg-slate-200 transition-all duration-300 hover:text-red-800"
              onClick={loginWithGithub}
            >
              <Image
                src="/github.svg"
                alt="google logo"
                height={25}
                width={25}
                className="mr-[0.35rem]"
              />{" "}
              <p className="font-bold">GitHub</p>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Page;
