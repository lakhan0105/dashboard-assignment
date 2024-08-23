import React from "react";
import { FaXmark } from "react-icons/fa6";

function Modal({
  selectedCategory,
  setSelectedCategory,
  categories,
  toggleModal,
  setToggleModal,
  handleChange,
  handleSubmit,
}) {
  return (
    <div
      className={`fixed bg-[#000000ad] left-0 right-0 bottom-0 top-0 flex justify-center items-center ${
        toggleModal && "hidden"
      } `}
    >
      <div className="relative bg-white rounded w-[350px] min-h-[250px] px-4 py-6">
        {/* close button */}
        <button
          className="absolute right-1 top-1 text-2xl"
          onClick={() => {
            setToggleModal((prev) => !prev);
          }}
        >
          <FaXmark />
        </button>

        <h2 className="font-bold capitalize text-2xl text-center mb-5 mt-3">
          {selectedCategory || "category name"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Select category</label>
            <select
              name="categoryName"
              className="border rounded text-sm block w-full"
              onChange={(e) => {
                setSelectedCategory(e?.target?.value);
                handleChange(e);
              }}
              value={selectedCategory}
            >
              {/* TODO: change the key from index to nanoid */}
              {categories?.map((category, index) => {
                return <option key={index}>{category.categoryName}</option>;
              })}
            </select>
          </div>

          {/* widget name */}
          <div className="mb-3">
            <label htmlFor="widget-name" className="">
              Widget name
            </label>
            <input
              type="text"
              name="widgetName"
              onChange={handleChange}
              className="border block w-full rounded"
            />
          </div>

          {/* widget content */}
          <div className="mb-3">
            <label htmlFor="">Widget content</label>
            <textarea
              name="widgetContent"
              id=""
              rows="5"
              onChange={handleChange}
              className="block w-full h-full border"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-sm px-3 py-2 w-full bg-[#000] hover:bg-[#000000e0] text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
