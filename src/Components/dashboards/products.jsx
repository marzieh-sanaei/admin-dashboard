import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import iconImgProduct from "./../../image/no-image-icon-0.jpg";
import "./../../index.css";

import { useRef, useState } from "react";

export default function Products() {
  let x = "";
  let y = "";
  const [inp, setInp] = useState({
    name: "",
    id: "",
    brand: "",
    price: "",
    Category: "",
  });
  const name = useRef();
  const id = useRef();
  const brand = useRef();
  const price = useRef();
  const Category = useRef();

  const par = useRef();

  const [test10, set1Test10] = useState("");

  const [test2, setTest2] = useState(3);
  const [mainUser, setMainUser] = useState([
    {
      name: "Galaxy Z Fold5",
      id: "1111",
      brand: "samsung",
      price: "1800",
      Category: "mobile",
    },
    {
      name: "MacBook Pro",
      id: "2222",
      brand: "apple",
      price: "1600",
      Category: "laptop",
    },
    {
      name: "Galaxy Watch6",
      id: "3333",
      brand: "samsung",
      price: "300",
      Category: "smartwatch",
    },
  ]);
  const addProduct = (e) => {
    switch (e.target.getAttribute("data-statuse")) {
      case "name":
        setInp({ ...inp, name: e.target.value });
        break;
      case "id":
        setInp({ ...inp, id: e.target.value });
        break;
      case "brand":
        setInp({ ...inp, brand: e.target.value });
        break;
      case "price":
        setInp({ ...inp, price: e.target.value });
        break;
      case "Category":
        setInp({ ...inp, Category: e.target.value });
        break;
    }
  };
  function para(e) {
    const temp = {
      name: inp.name,
      id: inp.id,
      brand: inp.brand,
      price: inp.price,
      Category: inp.Category,
    };
    if (
      temp.name == "" &&
      temp.id == "" &&
      temp.brand == "" &&
      temp.price == "" &&
      temp.Category == ""
    ) {
      console.log("nooooo");
    } else {
      setMainUser(() => {
        return mainUser.concat(temp);
      });
    }
    setTest2(par.current.children.length);
    console.log(test2);
    setInp({
      ...inp,
      name: "",
      id: "",
      brand: "",
      price: "",
      Category: "",
    });
    document.getElementById("imgss").setAttribute("src", iconImgProduct);
  }
  function delet(e) {
    e.target.parentElement.parentElement.remove();
  }

  function getImg(e) {
    e.target.parentElement.previousElementSibling.src = URL.createObjectURL(
      e.target.files[0]
    );
  }

  return (
    <>
      <div className="w-full flex flex-col h-[75%] mb-5">
        <div className="w-[80%] bg-[#454b5c] mb-5 rounded-md">
          <h3 className="text-gray-100 text-[25px] fonts px-[22px] py-[8px] rounded-md">
            Add New Product
          </h3>
        </div>
        <div className="w-[80%] flex justify-center rounded-md bg-[#454b5c] h-[100%] mb-5">
          <div className="w-[40%] flex justify-center">
            <div className="flex flex-col items-center">
              <h3 className="h-[15%] text-gray-200 justify-center flex items-center mb-5">
                Product Image
              </h3>
              <img
                id="imgss"
                className="w-[180px] h-[180px] mx-20 object-cover rounded-[50%] flex justify-center items-center"
                src={iconImgProduct}
                alt="icon image"
              />
              <label className="w-[150px] h-[40px] relative justify-center items-center text-white inline-block text-center pt-[6px] cursor-pointer rounded-md hover:bg-blue-700 my-4 duration-300 bg-[#1976d3]">
                <input
                  className="absolute z-[-1]"
                  type="file"
                  accept="image/jpeg, image.ppng, image.jpg , image.webp"
                  onChange={getImg}
                />
                Upload Image
              </label>
            </div>
          </div>
          <div className="w-[60%] flex justify-center flex-wrap">
            <div className="w-[50%] flex justify-start items-center py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex justify-start items-center mb-1">
                Product Name
              </div>
              <input
                type="text"
                data-statuse="name"
                className="userFocus w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 outline-none text-left"
                placeholder="Example: Galaxy Z Fold5"
                ref={name}
                value={inp.name}
                onChange={addProduct}
              />
            </div>
            <div className="userFocus w-[50%] flex justify-start items-center py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex justify-start items-center mb-1">
                Product ID
              </div>
              <input
                type="text"
                data-statuse="id"
                className="userFocus w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 outline-none text-left"
                placeholder="Example: 1111"
                ref={id}
                value={inp.id}
                onChange={addProduct}
              />
            </div>
            <div className="w-[50%] flex justify-start items-center py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex justify-start items-center mb-1">
                Brand
              </div>
              <input
                type="text"
                data-statuse="brand"
                className="userFocus w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 outline-none text-left"
                placeholder="Example: Samsung"
                ref={brand}
                value={inp.brand}
                onChange={addProduct}
              />
            </div>
            <div className="w-[50%] flex justify-start items-center py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex justify-start items-center mb-1">
                Price
              </div>
              <input
                type="text"
                data-statuse="price"
                className="userFocus w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 outline-none text-left"
                placeholder="Example: 1800$"
                ref={price}
                value={inp.price}
                onChange={addProduct}
              />
            </div>
            <div className="w-[50%] flex justify-start items-center py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex justify-start items-center mb-1">
                Category
              </div>
              <input
                type="text"
                data-statuse="Category"
                className="userFocus w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 outline-none text-left"
                placeholder="Example: Mobile"
                ref={Category}
                value={inp.Category}
                onChange={addProduct}
              />
            </div>
            <div className="mb-3 w-[50%] flex justify-start items-end pl-8 ">
              <IconLabelButtons para={para} />
            </div>
            <div className="w-[50%] flex justify-start items-center py-3 my-4 pl-2"></div>
          </div>
        </div>
        <div className="w-[80%] bg-[#454b5c] mb-5 rounded-md">
          <h3 className="text-gray-100 text-[25px] fonts px-[22px] py-[8px] rounded-md">
            Products
          </h3>
        </div>
        <div className="w-[80%] flex justify-center items-center bg-[#454b5c] mb-1 rounded-lg flex-wrap">
          <ul className="w-full flex justify-center content-center flex-wrap">
            <li className="w-full h-[60px] py-2 text-gray-400 flex justify-center items-center text-[14px]">
              <div className="w-[15%] h-[40%] flex justify-center items-center text-white">
                <span className="w-[10%] h-full md:bdr">ID</span>
              </div>
              <div className="w-[15%] h-[40%] flex justify-center items-center text-white">
                <span className="w-[10%] h-full md:bdr">Category</span>
              </div>
              <div className="w-[15%] h-[40%] flex justify-center items-center text-white">
                <span className="w-[10%] h-full md:bdr">Product</span>
              </div>
              <div className="w-[15%] h-[40%] flex justify-center items-center text-white">
                <span className="w-[10%] h-full md:bdr">Brand</span>
              </div>
              <div className="w-[15%] h-[40%] flex justify-center items-center text-white">
                <span className="w-[10%] h-full md:bdr">Price</span>
              </div>
              <div className="w-[15%] h-[40%] flex justify-center items-center text-white">
                <span className="w-[10%] h-full md:bdr">Action</span>
              </div>
            </li>
            {mainUser.map((val, index) => {
              return (
                <li
                  key={index}
                  className="w-full h-[60px] py-2 text-gray-400 flex justify-center items-center bd"
                >
                  <span className="w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[12px]">
                    {"#" + val.id}
                  </span>
                  <span className="w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[12px]">
                    {val.Category}
                  </span>
                  <span className="w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[12px]">
                    {val.name}
                  </span>
                  <span className="w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[12px]">
                    {val.brand}
                  </span>
                  <span className="w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[12px]">
                    {val.price + "$"}
                  </span>
                  <div className="w-[25%] h-[40%] flex justify-center items-center">
                    <div
                      onClick={delet}
                      className="w-[120px] px-3 py-1 text-[14px] border border-red-400 flex justify-center items-center rounded-[3px] text-red-400 cursor-pointer delet duration-300"
                    >
                      Delete
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full flex  justify-between items-center pl-4 md:pl-0 py-3">
          <h4 className="w-[60%] md:w-[50%] text-white text-[12px] md:text-[16px] flex text-center md:justify-start items-center font-light">
            © 2023- made by Marzieh Sanaei
          </h4>
          <h4 className="w-[40%] md:w-[50%] text-blue-300 text-[12px] md:text-[16px] text-center flex md:justify-end items-center pl-6">
            <Link target="_blank" to={"https://github.com/marzieh-sanaei"}>
              See More roject
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}
function IconLabelButtons({ para }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<SendIcon />} onClick={para}>
        Send
      </Button>
    </Stack>
  );
}
