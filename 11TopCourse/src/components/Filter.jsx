import React from "react";

function Filter({ filterData, category, setCategory }) {

  function filterHandler(title) {
    setCategory(title)
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => {
        return <button onClick={() => filterHandler(data.title)}
          className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 `}
          key={data.id}>{data.title}

        </button>;
      })}
    </div>
  );
}

export default Filter;
