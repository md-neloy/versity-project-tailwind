import "./App.css";
import { MdPayment } from "react-icons/md";
import bkash from "./assets/bkashlogo.png";
import nagad from "./assets/nagadlogo.png";
import { useState } from "react";
function App() {
  const [img, setimg] = useState(<MdPayment />);
  const [istrue, setIstrue] = useState(true);
  const handleLogo = (e) => {
    console.log(e.target);
    if (e.target.id === "nagad") {
      setimg(nagad);
    } else if (e.target.id === "bkash") {
      setimg(bkash);
    }
    setIstrue(false);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-3xl font-bold my-4">payment Method</h1>
          <div className="text-3xl text-[#11c547] flex justify-center items-center">
            {istrue ? (
              <div>{img} </div>
            ) : (
              <div className="w-24  inline-block border-2 border-solid border-pink-500 rounded-md">
                <img src={img} alt="" id="bkash" />
              </div>
            )}
          </div>
          <label className="">
            <span className="text-2xl font-medium text-purple-700 mr-4">
              Address:
            </span>
            <input
              type="text"
              placeholder="Enter your address here: "
              className="border-2 border-solid border-black px-2 placeholder:text-purple-700 rounded-md"
            />
          </label>
          <br />
          <div className="flex gap-3 justify-center items-center my-4">
            <label
              className=" w-fit flex gap-0 justify-center items-center"
              onClick={handleLogo}
            >
              <div className="w-24  inline-block border-2 border-solid border-pink-500 rounded-md">
                <img src={bkash} alt="" />
              </div>
              <input
                type="radio"
                name="method"
                id="bkash"
                className="ml-2"
                onClick={handleLogo}
              />
            </label>
            <label
              className=" w-fit flex gap-0 justify-center items-center"
              onClick={handleLogo}
            >
              <div className="w-24  inline-block border-2 border-solid border-yellow-600 rounded-md">
                <img src={nagad} alt="" id="2" />
              </div>
              <input
                type="radio"
                name="method"
                id="nagad"
                className="ml-2"
                onClick={handleLogo}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
