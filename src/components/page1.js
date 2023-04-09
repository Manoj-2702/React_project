import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  const handleChange = () => {
    const travelOption1 = document.querySelector(
      'input[name="question-1"]:checked'
    ).value;
    const travelOption2 = document.querySelector(
      'input[name="question-2"]:checked'
    ).value;
    localStorage.setItem("travel1", travelOption1);
    localStorage.setItem("travel2", travelOption2);
  };

  return (
    <div className="flex flex-col h-4/5">
      <div>
        <div className="content-center  justify-center flex flex-col md:flex-row mt-20">
          <div class="m-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
              What is your most frequently used means of travel from your home
              to work location?
            </h5>

            <div>
              <div class="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="1"
                  name="question-1"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  Bus
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value="2"
                  name="question-1"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-2"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  Metro
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="default-radio-3"
                  type="radio"
                  value="3"
                  name="question-1"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-3"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  Own Two-Wheeler
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="default-radio-4"
                  type="radio"
                  value="4"
                  name="question-1"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-4"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  Walk/Bicycle
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="default-radio-5"
                  type="radio"
                  value="5"
                  name="question-1"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-5"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  Auto
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="default-radio-6"
                  type="radio"
                  value="6"
                  name="question-1"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-6"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  App Based (e.g Ola/Uber)
                </label>
              </div>
            </div>
          </div>
          <div class="m-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
                What is the total distance between your home to your work
                location?
              </h5>
            </a>
            <div>
              <div class="flex items-center">
                <input
                  id="radio-1"
                  type="radio"
                  value="1"
                  name="question-2"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  {"<"} 5 km
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="radio-2"
                  type="radio"
                  value="2"
                  name="question-2"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-2"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  5 - 10 km
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="radio-3"
                  type="radio"
                  value="3"
                  name="question-2"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-3"
                  class="ml-2 text-sm  text-gray-900 dark:text-gray-300"
                >
                  10 - 15 km
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="radio-4"
                  type="radio"
                  value="4"
                  name="question-2"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-4"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  15 - 20 km
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="radio-5"
                  type="radio"
                  value="5"
                  name="question-2"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-5"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  20 - 25 km
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="radio-6"
                  type="radio"
                  value="6"
                  name="question-2"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  for="default-radio-6"
                  class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  {">"} 25 km
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center text-center p-4 mt-8">
          <Link
            to="/mode-choice"
            onClick={handleChange}
            className="inline-flex items-center px-3 py-2 text-2xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page1;
