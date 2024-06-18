import React from "react";

function MenuList(props) {
  const { items, setActiveItem } = props;
  return (
    <li
      onClick={() => setActiveItem(items)}
      className=" px-3 py-1 hover:bg-gray-200 duration-200 list-none border-b-2 cursor-pointer "
    >
      {items}
    </li>
  );
}

export default MenuList;
