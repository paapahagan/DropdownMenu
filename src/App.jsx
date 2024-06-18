import { useState } from "react";
import Arrow from "./icon/Arrow";
import MenuList from "./MenuList";

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const items = ["Loki", "Moka", "Kip"];

  return (
    <div className=" bg-fuchsia-300 h-screen grid justify-items-center content-center ">
      <div
        className={` ${
          activeMenu ? "rounded-b-none" : "rounded-b-md"
        } w-full max-w-[300px] h-[50px] rounded-md bg-white p-3
       flex justify-between items-center relative`}
      >
        {activeItem === null ? <p>Drop Down</p> : <p>{activeItem}</p>}

        {/* icons */}
        <button
          onClick={() => {
            setActiveMenu(!activeMenu);
          }}
          className=" bg-blue-500 rounded-full cursor-pointer "
        >
          <Arrow />
        </button>

        {/* menu */}
        <div
          className={`${
            activeMenu ? "top-full" : "top-9 opacity-0"
          } bg-white min-h-[100px] w-full absolute
           left-0 rounded-b-md duration-300 ease-linear `}
        >
          {items.map((item, index) => {
            return (
              <MenuList
                key={index}
                items={item}
                setActiveItem={setActiveItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
