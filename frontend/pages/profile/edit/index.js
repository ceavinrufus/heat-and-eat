import Head from "next/head";
import Header from "../../../components/Header";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import Button from "../../../components/Button";

export default function EditProfile() {
  return (
    <div className="">
      <Head>
        <title>Heat & Eat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="flex justify-center">
          <div className="w-[360px] bg-white h-screen">
            <Header
              leftIcon={<IoChevronBackOutline className="text-[#991E23]" />}
              title={"Edit Profile"}
            />
            <div className="mx-6">
              <form className="mb-6">
                <div className="w-full">
                  <h1>Name</h1>
                  <input
                    className="w-full rounded-md px-2 py-1 border-[#991E23] border-2"
                    type="text"
                  />
                  <h1>Email</h1>
                  <input
                    className="w-full rounded-md px-2 py-1 border-[#991E23] border-2"
                    type="text"
                  />
                  <h1>Password</h1>
                  <input
                    className="w-full rounded-md px-2 py-1 border-[#991E23] border-2"
                    type="password"
                  />
                  <h1>Confirm Password</h1>
                  <input
                    className="w-full rounded-md px-2 py-1 border-[#991E23] border-2"
                    type="password"
                  />
                </div>
              </form>
              <div className="flex gap-2">
                <Button>Save</Button>
                <Button variant={"secondary"}>Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}