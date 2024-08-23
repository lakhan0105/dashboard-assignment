import React from "react";

function AddWidgetBtn({
  setSelectedCategory,
  setToggleModal,
  categoryName,
  extraStyles,
}) {
  // console.log(categoryName);
  return (
    <button
      className={`border px-2 py-1 rounded capitalize text-xs text-slate-400 ${extraStyles}`}
      onClick={() => {
        setSelectedCategory(categoryName);
        setToggleModal((prev) => !prev);
      }}
    >
      + add widget
    </button>
  );
}

export default AddWidgetBtn;
