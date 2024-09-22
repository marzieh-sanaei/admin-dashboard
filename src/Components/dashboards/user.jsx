import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import img1 from "./../../image/1.jpg";
import img2 from "./../../image/2.jpg";
import img3 from "./../../image/3.jpg";
import img4 from "./../../image/4.jpg";
import img5 from "./../../image/5.jpg";
import img6 from "./../../image/6.jpg";
import "./../../index.css";
import { useRef, useState } from "react";

export default function Users() {
  const [inp, setInp] = useState({
    name: "",
    lname: "",
    user: "",
    email: "",
    phone: "",
    pass: "",
    src: "",
  });
  const name = useRef();
  const lname = useRef();
  const user = useRef();
  const email = useRef();
  const phone = useRef();
  const pass = useRef();
  const [imgs, setImgs] = useState("");

  const par = useRef();
  const [Marzieh, setMarzieh] = useState("");

  const [test2, setTest2] = useState(3);
  const [mainUser, setMainUser] = useState([
    {
      name: "user1",
      lname: "user1",
      user: "user1",
      email: "user1@gmail.com",
      phone: "09121234567",
      pass: "12345678",
    },
    {
      name: "user2",
      lname: "user2",
      user: "user2",
      email: "user2@gmail.com",
      phone: "09121234567",
      pass: "12345678",
    },
    {
      name: "user3",
      lname: "user3",
      user: "user3",
      email: "user3@gmail.com",
      phone: "09121234567",
      pass: "12345678",
    },
  ]);

  const addUser = (e) => {
    switch (e.target.getAttribute("data-statuse")) {
      case "name":
        setInp({ ...inp, name: e.target.value });
        break;
      case "lname":
        setInp({ ...inp, lname: e.target.value });
        break;
      case "user":
        setInp({ ...inp, user: e.target.value });
        break;
      case "email":
        setInp({ ...inp, email: e.target.value });
        break;
      case "phone":
        setInp({ ...inp, phone: e.target.value });
        break;
      case "pass":
        setInp({ ...inp, pass: e.target.value });
        break;
    }
  };
  function para() {
    const temp = {
      name: inp.name,
      lname: inp.lname,
      user: inp.user,
      email: inp.email,
      phone: inp.phone,
      pass: inp.pass,
      src: imgs,
    };
    if (
      temp.name == "" &&
      temp.lname == "" &&
      temp.user == "" &&
      temp.email == "" &&
      temp.phone == "" &&
      temp.pass == ""
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
      lname: "",
      user: "",
      email: "",
      phone: "",
      pass: "",
    });

    Marzieh.style.background = "#fff";
  }
  function delet(e) {
    e.target.parentElement.parentElement.remove();
  }
  function selectImg(e) {
    setMarzieh(e.target);
    let _img = e.target.previousElementSibling.getAttribute("src");

    e.target.style.background = "#191c24";
    setImgs(_img);
    console.log(imgs);
  }
  return (
    <>
      <div className="w-full flex flex-col h-[71%] mb-5">
        <div className="w-[80%] bg-[#454b5c] mb-5">
          <h3 className="text-gray-100 text-[25px] fonts px-[22px] py-[8px] rounded-md">
            Add New User
          </h3>
        </div>
        <div className="w-[80%] flex justify-center rounded-md bg-[#454b5c] h-[100%]">
          <div className="w-[40%] justify-center">
            <h3 className="h-[15%] text-gray-200 justify-center flex items-center mb-5">
              Avatar
            </h3>
            <div className=" flex flex-wrap justify-center">
              <div className="w-full flex justify-center items-center mb-1">
                <div className="w-[33.33%] flex justify-center flex-wrap">
                  <figure className="w-[70px] flex justify-center flex-wrap">
                    <img
                      src={img1}
                      alt="image avatar"
                      className="w-[100%] object-cover mb-1"
                    />
                    <div className="w-4 h-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer"></div>
                  </figure>
                </div>
                <div className="w-[33.33%] flex justify-center flex-wrap">
                  <figure className="w-[70px] flex justify-center flex-wrap">
                    <img
                      src={img2}
                      alt="image avatar"
                      className="w-[100%] object-cover mb-1"
                    />
                    <div className="w-4 h-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer"></div>
                  </figure>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mb-1">
                <div className="w-[33.33%] flex justify-center flex-wrap">
                  <figure className="w-[70px] flex justify-center flex-wrap">
                    <img
                      src={img3}
                      alt="image avatar"
                      className="w-[100%] object-cover mb-1"
                    />
                    <div className="w-4 h-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer"></div>
                  </figure>
                </div>
                <div className="w-[33.33%] flex justify-center flex-wrap">
                  <figure className="w-[70px] flex justify-center flex-wrap">
                    <img
                      src={img4}
                      alt="image avatar"
                      className="w-[100%] object-cover mb-1"
                    />
                    <div className="w-4 h-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer"></div>
                  </figure>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mb-1">
                <div className="w-[33.33%] flex justify-center flex-wrap">
                  <figure className="w-[70px] flex justify-center flex-wrap">
                    <img
                      src={img5}
                      alt="image avatar"
                      className="w-[100%] object-cover mb-1"
                    />
                    <div className="w-4 h-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer"></div>
                  </figure>
                </div>
                <div className="w-[33.33%] flex justify-center flex-wrap">
                  <figure className="w-[70px] flex justify-center flex-wrap">
                    <img
                      src={img6}
                      alt="image avatar"
                      className="w-[100%] object-cover mb-1"
                    />
                    <div className="w-4 h-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer"></div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%] flex justify-center flex-wrap">
            <div className="w-[50%] flex py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex items-center mb-1">First Name</div>
              <input
                type="text"
                data-statuse="name"
                className="w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-left bg-transparent"
                placeholder="Example: Marzieh"
              />
            </div>
            <div className="w-[50%] flex py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex items-center mb-1">Last Name</div>
              <input
                type="text"
                data-statuse="name"
                className="w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-left bg-transparent"
                placeholder="Example: Sanaei"
              />
            </div>
            <div className="w-[50%] flex py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex items-center mb-1">Username</div>
              <input
                type="text"
                data-statuse="name"
                className="w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-left bg-transparent"
                placeholder="Example: marzieh-sanaei"
              />
            </div>
            <div className="w-[50%] flex py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex items-center mb-1">Email</div>
              <input
                type="text"
                data-statuse="name"
                className="w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-left bg-transparent"
                placeholder="Example: marzieh@gmail.com"
              />
            </div>
            <div className="w-[50%] flex py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex items-center mb-1">Phone Number</div>
              <input
                type="text"
                data-statuse="name"
                className="w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-left bg-transparent"
                placeholder="Example: 09121234567"
              />
            </div>
            <div className="w-[50%] flex py-3 my-4 pl-2 text-gray-200 flex-wrap">
              <div className="w-full flex items-center mb-1">Password</div>
              <input
                type="text"
                data-statuse="name"
                className="w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-left bg-transparent"
                placeholder="Example: 12345678"
              />
            </div>
            <div className="w-full flex items-center pl-1">
              <IconLabelButtons para={para} />
            </div>
          </div>
        </div>
      </div>
      {/* part 2 usres */}
      <div className="w-[80%] bg-[#454b5c] mb-5 flex rounded-md">
        <h3 className="text-gray-100 text-[25px] fonts px-[22px] py-[8px] rounded-md">
          Add New User
        </h3>
      </div>
      <div className="w-[80%] flex justify-center bg-[#454b5c] rounded-md flex-wrap items-center">
        <ul className="w-full flex justify-center flex-wrap">
          <li className="w-full h-[60px] py-2 text-gray-400 flex justify-start items-center text-[14px]">
            <div className="w-[15%] h-[40%] justify-center items-center text-white">
              <span className="w-[10%] h-full"></span>
              ID
            </div>
            <div className="w-[15%] h-[40%] justify-center items-center text-white">
              <span className="w-[10%] h-full"></span>
              Avatar
            </div>
            <div className="w-[15%] h-[40%] justify-center items-center text-white">
              <span className="w-[10%] h-full"></span>
              Username
            </div>
            <div className="w-[15%] h-[40%] justify-center items-center text-white">
              <span className="w-[10%] h-full"></span>
              Email
            </div>
            <div className="w-[15%] h-[40%] justify-center items-center text-white">
              <span className="w-[10%] h-full"></span>
              Password
            </div>
            <div className="w-[15%] h-[40%] justify-center items-center text-white">
              <span className="w-[10%] h-full"></span>
              Action
            </div>
          </li>
          {mainUser.map((val, index) => {
            return (
              <li
                key={index}
                className="w-full h-[60px] py-2 text-gray-400 flex justify-start items-center"
              >
                <span className="w-[15%] h-[40%] justify-center items-center text-gray-400 text-[12px]">
                  {"user-" + (index + 1)}
                </span>
                <span className="w-[15%] h-[40%] justify-center items-center text-gray-400 text-[12px]">
                  <img
                    className="w-[30px] h-[30px] rounded-[50%] object-cover"
                    src={val.src}
                    alt=""
                  />
                </span>
                <span className="w-[15%] h-[40%] justify-center items-center text-gray-400 text-[12px]">
                  {val.user}
                </span>
                <span className="w-[15%] h-[40%] justify-center items-center text-gray-400 text-[12px]">
                  {val.email}
                </span>
                <span className="w-[15%] h-[40%] justify-center items-center text-gray-400 text-[12px]">
                  {val.pass}
                </span>
                <div className="w-[25%] h-[40%] flex justify-center items-center">
                  {" "}
                  <div
                    onClick={delet}
                    className="w-[80px] md:w-[120px] px-1 md:px-3 py-1 text-[14px] border border-red-400 flex justify-center items-center rounded-[3px] text-red-400 cursor-pointer delet duration-300"
                  >
                    Delete
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
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
