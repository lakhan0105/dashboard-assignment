import React, { useEffect, useState } from "react";
import { AddWidgetBtn, CategoriesContainer } from "./index";
import { nanoid } from "nanoid";
import Modal from "./Modal";

const data = {
  categories: [
    {
      categoryName: "CSPM executive dashboard",
      categoryId: nanoid(),
      widgets: [
        {
          widgetName: "cloud accounts",
          widgetId: nanoid(),
          widgetValues: ["$120,00", "type: currency"],
          widgetContent:
            "Total number of cloud accounts that are currently connected to the platform.",
        },
        {
          widgetName: "cloud account risk Assessment",
          widgetId: nanoid(),
          widgetValues: ["$40,00", "type: currency"],
          widgetContent:
            "Comprehensive risk assessment for all cloud accounts connected to the platform.",
        },
      ],
    },
    {
      categoryName: "CWPP Dashboard:",
      categoryId: nanoid(),
      widgets: [
        {
          widgetName: "top 5 namespace specific alerts",
          widgetId: nanoid(),
          widgetValues: ["$700"],
          widgetContent:
            "A list of the top five namespaces that have triggered the most alerts within the specified timeframe.",
        },
      ],
    },
    {
      categoryName: "Registry scan",
      categoryId: nanoid(),
      widgets: [
        {
          widgetName: "image risk assessment",
          widgetId: nanoid(),
          widgetContent:
            "A list of the top five namespaces that have triggered the most alerts within the specified timeframe.",
        },
      ],
    },
  ],
};

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : data;
  });

  const [selectedCategory, setSelectedCategory] = useState(
    "CSPM executive dashboard"
  );
  const [toggleModal, setToggleModal] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // update the local storage when the dashboardData changes
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(dashboardData));
  }, [dashboardData]);

  // removeWidget
  function removeWidget(categoryId, widgetId) {
    setDashboardData((prev) => {
      return {
        categories: prev?.categories?.map((category) => {
          if (category.categoryId === categoryId) {
            return {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.widgetId !== widgetId
              ),
            };
          }
          return category;
        }),
      };
    });
  }

  // form state
  const [values, setValues] = useState({
    categoryName: selectedCategory,
    widgetName: "",
    widgetContent: "",
  });

  // handleChange in the form
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setValues((prev) => {
      return { ...prev, [key]: value };
    });
  }

  // handle submit (add widget)
  function handleSubmit(e) {
    e.preventDefault();

    const updatedCat = dashboardData.categories.map((category) => {
      console.log(category.categoryName);
      console.log(values.categoryName);

      if (category.categoryName === selectedCategory) {
        return {
          ...category,
          widgets: [...category.widgets, { ...values, widgetId: nanoid() }],
        };
      }
      return category;
    });

    setDashboardData({ categories: updatedCat });
    toggleModal((prev) => !prev);
  }

  // handleSearch
  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  // filteredCategories which is passed to categoriesContainer
  const filteredCategories = dashboardData?.categories?.filter((category) => {
    const catMatch = category.categoryName
      ?.toLowerCase()
      ?.includes(searchQuery.toLowerCase());

    const widNameMatch = category?.widgets?.find((item) => {
      return item?.widgetName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return catMatch || widNameMatch;
  });

  return (
    <>
      <div
        data={dashboardData?.categories}
        className="p-5 max-w-[1200px] m-auto"
      >
        {/* dashboard nav */}
        <div className="w-full flex items-center gap-4 h-[35px] mb-6 mt-5">
          <h2 className="font-bold text-2xl w-[30%]">CNAPP Dashboard</h2>

          <div className="w-full flex justify-end h-full gap-3">
            <input
              type="text"
              className="h-full w-[40%] border border-black px-2 rounded"
              placeholder="search here"
              onChange={handleSearch}
            />

            <AddWidgetBtn
              categoryName="CSPM executive dashboard"
              setSelectedCategory={setSelectedCategory}
              setToggleModal={setToggleModal}
              extraStyles={
                "bg-white font-semibold text-black border-black py-2 h-full"
              }
            />
          </div>
        </div>

        <CategoriesContainer
          categories={filteredCategories}
          setSelectedCategory={setSelectedCategory}
          setToggleModal={setToggleModal}
          removeWidget={removeWidget}
        />
      </div>

      {/* MODAL */}
      <Modal
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={dashboardData?.categories}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Dashboard;
