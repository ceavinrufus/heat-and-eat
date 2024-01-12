import Head from "next/head";
import Header from "../../components/Header";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import Button from "../../components/Button";

export default function Profile() {
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
              title={"Profile"}
            />
            <div className="mx-6">
              <div className=" rounded-3xl border-2 border-black bg-[#F3F2F0] px-4 py-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-3">
                    <div className="rounded-full w-[50px] h-[50px] bg-[#B7B5B6]"></div>
                    {/* <img src="" alt="" /> */}
                    <div className="">
                      <h2 className="font-bold">Ceavin Rufus</h2>
                      <p className="text-xs">20 years old</p>
                    </div>
                  </div>
                  <button className="">
                    <IoPencil />
                  </button>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-bold">Current Weight</h4>
                  <p>68 kg</p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-bold">Goal</h4>
                  <p>Lose weight</p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-bold">BMI</h4>
                  <p>22.5</p>
                </div>
              </div>

              <h2 className="text-lg font-bold mb-2">Customization</h2>
              <div className="flex flex-col gap-2">
                <Button rightIcon={<IoChevronForwardCircleOutline />}>
                  Edit Account
                </Button>
                <Button rightIcon={<IoChevronForwardCircleOutline />}>
                  Wishlist
                </Button>
                <Button rightIcon={<IoChevronForwardCircleOutline />}>
                  Order History
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
