import React from "react";
import WidgetsContainer from "./WidgetsContainer";

function CategoriesContainer({
  categories,
  setSelectedCategory,
  setToggleModal,
  removeWidget,
}) {
  // no match found if categories.length===0
  if (categories?.length === 0) {
    return <h2>No match found!</h2>;
  }

  return (
    <div>
      {categories?.map((category, index) => {
        const { categoryName, categoryId, widgets } = category;

        return (
          <div className="mt-5 mb-10" key={index}>
            {/* CATEGORY NAME */}
            <h2 className="font-bold capitalize mb-1">{categoryName}</h2>

            <WidgetsContainer
              widgets={widgets}
              categoryId={categoryId}
              categoryName={categoryName}
              setSelectedCategory={setSelectedCategory}
              setToggleModal={setToggleModal}
              removeWidget={removeWidget}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesContainer;
