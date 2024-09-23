import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export default function LogIn() {
  const [flag, setFlag] = useState(true);
  const myPopUp = useRef("");
  const myPopUp2 = useRef("");
  const myPopUp3 = useRef("");
  const [x, setX] = useState("#");
  const [inp, setInp] = useState({
    email: "",
    password: "",
  });
  const updateInp = (e) => {
    switch (e.target.getAttribute("data-value")) {
      case "email":
        setInp({ ...inp, email: e.target.value });
        break;
      case "password":
        setInp({ ...inp, password: e.target.value });
        break;
    }
  };
  function leftToRight(e) {
    if (flag) {
      document.getElementById("lr").style.left = "44px";
      document.getElementById("lr").style.borderColor = "#a2a5a8";
      e.target.style.background = "#6c6c6c";
    } else {
      document.getElementById("lr").style.left = "20px";
      document.getElementById("lr").style.borderColor = "#ced4da";
      e.target.style.background = "#ced4da";
    }
    setFlag(!flag);
  }
  function popUp() {
    myPopUp.current.style.transform = "translateY(25px) scale(1)";
    myPopUp.current.style.display = "flex";
    myPopUp2.current.style.transform = "scale(0)";
    myPopUp3.current.style.transform = "scale(0)";
    myPopUp.current.style.zIndex = "100";
    myPopUp2.current.style.zIndex = "0";
    myPopUp3.current.style.zIndex = "0";
  }
  function popUp2() {
    myPopUp2.current.style.transform = " scale(1)";
    myPopUp2.current.style.display = "flex";
    myPopUp.current.style.transform = "translateX(-50%) scale(0)";
    myPopUp3.current.style.transform = "translateX(-50%) scale(0)";
    myPopUp2.current.style.zIndex = "100";
    myPopUp.current.style.zIndex = "0";
    myPopUp3.current.style.zIndex = "0";
  }
  function popUp3() {
    myPopUp3.current.style.transform = "translateY(-20px) scale(1)";
    myPopUp3.current.style.display = "flex";
    myPopUp.current.style.transform = "translateX(-50%) scale(0)";
    myPopUp2.current.style.transform = "translateX(-50%) scale(0)";
    myPopUp3.current.style.zIndex = "100";
    myPopUp.current.style.zIndex = "0";
    myPopUp2.current.style.zIndex = "0";

    setTimeout(() => {
      myPopUp3.current.style.transform = "translateX(-50%) scale(0)";
      myPopUp3.current.style.zIndex = "0";
    }, 4000);
  }
  function logIn() {
    if (inp.email == "Admin" && inp.password == "Admin") {
      setX("dashboard");
    } else {
      popUp3();
    }
  }

  return (
    <>
      <main className="w-full h-[100%] justify-around flex flex-col justify-center items-center bg-[#303e62]">
        {/* pop up */}
        <div className="h-6">
        <div
          ref={myPopUp}
          className="bg-[#91999fcf] w-[300] h-[50] rounded-md justify-center items-center text-[#f0fbff] duration-500 hidden"
        >
          <span>Username is : Admin</span>
        </div>
        <div
          ref={myPopUp2}
          className="bg-[#91999fcf] w-[300] h-[50] rounded-md hidden justify-center items-center text-[#f0fbff] duration-500 absolute top-[56px]"
        >
          <span> Password is : Admin</span>
        </div>
        <div
          ref={myPopUp3}
          className="bg-[#6f8479cf] w-[300] h-[50] rounded-md hidden justify-center items-center text-[#e9b02c] duration-500"
        >
          <span>Username or Password id wrong!</span>
        </div>
        </div>
        <div className="translate-y-[70px]">
          <div className="bg-[#888888cf] w-[430px] mb-4 h-[440px] rounded-lg relative flex justify-center items-center">
            <div className="bg-[#3460c4] w-[90%] h-[160px] rounded-lg absolute top-[-60]">
              <div className="flex justify-center items-center">
                <h2 className="text-white text-[30px] font-[600] pt-5 pb-5">
                  Sign in
                </h2>
              </div>
              <div className="flex justify-center items-center pb-5 ">
                <div className="w-[30%] flex justify-center">
                  <Link
                    target="_blank"
                    className="text-white"
                    to={"https://github.com/marzieh-sanaei"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="white"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </Link>
                </div>
                <div className="w-[30%] flex justify-center">
                  <Link
                    target="_blank"
                    to={"https://www.linkedin.com/in/marzieh-sanaei99"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="white"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                    </svg>
                  </Link>
                </div>
                <div className="w-[30%] flex justify-center">
                  <Link target="_blank" to={"#"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="white"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* input part */}
            <div className="w-[90%] flex flex-col mt-16">
              <input
                onClick={popUp}
                type="text"
                data-value="email"
                value={inp.email}
                onChange={updateInp}
                placeholder="Username"
                className="mb-5 rounded-md bg-[transparent] border p-2 outline-none"
              />
              <input
                onClick={popUp2}
                data-value="password"
                onChange={updateInp}
                value={inp.password}
                type="text"
                placeholder="Password"
                className="rounded-md bg-[transparent] border p-2 outline-none"
              />
              <div className="flex mt-3 items-center">
                <div onClick={leftToRight} className="bg-[#94989d] w-[40px] h-[13px] rounded-2xl mr-3 flex items-center">
                  <div id="lr" className="w-5 h-5 bg-[#ced4da] rounded-[50%] cursor-pointer absolute transition duration-500"></div>
                </div>
                <div className="text-white">Remember me</div>
              </div>
              <div className="flex justify-center items-center w-full mt-5">
                <button onClick={logIn} className="bg-[#3460c4] w-full rounded-lg p-2 text-white">
                <Link to={x}>SIGN IN</Link>
                </button>
              </div>
              <div className="flex justify-center items-center mt-5">
                <span className="text-white text-[14px]">
                  Don't have an account?
                  <a className="text-[#77a0ff] pl-1" href="#">
                    Sign up
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="text-[#c0d9f1]">
            © 2024- made by Marzieh Sanaei .
          </span>
        </div>
      </main>
    </>
  );
}