import React from "react";
import { FaXmark } from "react-icons/fa6";
import AddWidgetBtn from "./AddWidgetBtn";

function WidgetsContainer({
  widgets,
  categoryId,
  categoryName,
  selectedCategory,
  setSelectedCategory,
  setToggleModal,
  removeWidget,
}) {
  return (
    <div className="flex justify-start gap-4">
      {/* map over the widgets array */}
      {widgets.map((item, index) => {
        const { widgetName, widgetId, widgetContent, widgetValues } = item;

        return (
          <article
            key={index}
            className="w-[400px] min-h-[200px] bg-white rounded-lg shadow-sm p-3"
          >
            {/* widget top */}
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm capitalize">{widgetName}</h4>
              <button
                className="text-xl"
                onClick={() => {
                  removeWidget(categoryId, widgetId);
                }}
              >
                <FaXmark />
              </button>
            </div>

            {/* widget bottom */}
            <div className="mt-2 text-sm">
              {/* TODO: change index to nanoid */}
              {widgetValues?.map((item, index) => {
                return (
                  <ul key={index} className="leading-6">
                    <li className="capitalize">{item}</li>
                  </ul>
                );
              })}

              <p className="mt-3 text-xs leading-5 text-gray-600">
                {widgetContent}
              </p>
            </div>
          </article>
        );
      })}

      {/* ADD WIDGET CARD */}
      <article className="min-w-[350px] min-h-[200px] bg-white rounded-lg shadow-sm flex items-center justify-center">
        <AddWidgetBtn
          setSelectedCategory={setSelectedCategory}
          setToggleModal={setToggleModal}
          categoryName={categoryName}
        />
      </article>
    </div>
  );
}

export default WidgetsContainer;
