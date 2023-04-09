import React from "react";

import db0 from "../data/sample_db_0km.json";
import db5 from "../data/sample_db_5km.json";
import db10 from "../data/sample_db_10km.json";
import db15 from "../data/sample_db_15km.json";
import db20 from "../data/sample_db_20km.json";
import db25 from "../data/sample_db_25km.json";
import { FaBus, FaBusAlt, FaTaxi, FaCar } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  MdAirlineSeatReclineNormal,
  MdAirlineSeatReclineExtra,
  MdPeopleAlt,
  MdEmojiPeople,
} from "react-icons/md";

const Page2 = () => {
  const q1 = localStorage.getItem("travel1");
  const q2 = localStorage.getItem("travel2");

  const servtype_json = { 1: "Ordinary", 2: "Express Non-AC", 3: "Express AC" };
  const crowd_json = {
    1: "Many seats available",
    2: "Some seats available",
    3: "All seats occupied; standing space available",
    4: "Fully crowded or packed",
  };
  const crowdicon_json = {
    1: <MdPeopleAlt />,
    2: (
      <>
        <MdPeopleAlt />
        <MdEmojiPeople />
      </>
    ),
    3: (
      <>
        <MdPeopleAlt />
        <MdEmojiPeople />
        <MdEmojiPeople />
      </>
    ),
    4: (
      <>
        <MdPeopleAlt />
        <MdEmojiPeople />
        <MdEmojiPeople />
        <MdEmojiPeople />
      </>
    ),
  };

  let Data;
  if (q2 == 1) Data = db0.Data;
  else if (q2 == 2) Data = db5.Data;
  else if (q2 == 3) Data = db10.Data;
  else if (q2 == 4) Data = db15.Data;
  else if (q2 == 5) Data = db20.Data;
  else if (q2 == 6) Data = db25.Data;

  return (
    <div className="flex justify-center grid content-center pt-10">
      <table className="border-collapse border-2 border-gray-500 text-center">
        <thead>
          <tr>
            <th className="border border-gray-500 text-center p-2 bg-red-600 italic">
              {Data[0].mode_1}
              <div className="text-center items-center flex justify-center">
                <input
                  id="radio-1"
                  type="radio"
                  value="1"
                  checked={q1 === 1}
                  name="question"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
            </th>
            <th className="border border-gray-500 text-center p-2 bg-blue-600 italic">
              {Data[0].mode_2}
              <div className="text-center items-center flex justify-center">
                <input
                  id="radio-2"
                  type="radio"
                  value="2"
                  checked={q1 === 2}
                  name="question"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
            </th>
            <th className="border border-gray-500 text-center p-2 bg-yellow-600 italic">
              {Data[0].mode_4}
              <div className="text-center items-center flex justify-center">
                <input
                  id="radio-3"
                  type="radio"
                  value="3"
                  name="question"
                  checked={q1 === 3}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
            </th>
            <th className="border border-gray-500 text-center p-2 bg-purple-600 italic">
              {q1 === 3 ? Data[0].mode_8 : Data[0].mode_9}
              <div className="text-center items-center flex justify-center">
                <input
                  id="radio-4"
                  type="radio"
                  value="4"
                  name="question"
                  checked={q1 === 4}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
            </th>
            <th className="border border-gray-500 text-center p-2 bg-green-600 italic">
              {q1 === 5 ? Data[0].mode_7 : Data[0].mode_5}
              <div className="text-center items-center flex justify-center">
                <input
                  id="radio-5"
                  type="radio"
                  value="5"
                  name="question"
                  checked={q1 === 5}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>Total travel time spent while inside vehicle(s)</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="border border-gray-500 text-center p-2 bg-red-300">
              <p>{Data[0]["mode_1.trans"] == 1 ? "Transfer 1" : ""}</p>
              <div className="text-center items-center flex justify-center">
                <FaBus />
                {Data[0]["mode_1.trans"] == 1 ? (
                  <>
                    {" "}
                    <AiOutlineArrowRight /> <FaBus />
                  </>
                ) : (
                  ""
                )}
              </div>
              <p>{Data[0]["mode_1.ivtt"]} min</p>
            </td>
            <td className="border border-gray-500 text-center p-2 bg-blue-300">
              <p>{Data[0]["mode_2.trans"] == 1 ? "Transfer 1" : ""}</p>
              <div className="text-center items-center flex justify-center">
                <FaBus />
                {Data[0]["mode_1.trans"] == 1 ? (
                  <>
                    {" "}
                    <AiOutlineArrowRight /> <FaBus />
                  </>
                ) : (
                  ""
                )}
              </div>
              <p>{Data[0]["mode_2.ivtt"]} min</p>
            </td>
            <td className="border border-gray-500 text-center p-2 bg-yellow-500">
              <div className="text-center items-center flex justify-center">
                <FaBusAlt />
              </div>
              {Data[0]["mode_4.ivtt"]} min
            </td>
            <td className="border border-gray-500 text-center p-2 bg-purple-500">
              <div className="text-center items-center flex justify-center">
                <FaCar />
              </div>
              {q1 === 3 ? Data[0]["mode_8.ivtt"] : Data[0]["mode_9.ivtt"]} min
            </td>
            <td className="border border-gray-500 text-center p-2 bg-green-500">
              <div className="text-center items-center flex justify-center">
                <FaTaxi />
              </div>
              {q1 === 5 ? Data[0]["mode_7.ivtt"] : Data[0]["mode_5.ivtt"]} min
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Total Travel Time Spent outside Vehicle(s)</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border border-gray-500 text-center p-2 bg-red-300">
              {Data[0]["mode_1.walktime"] + Data[0]["mode_1.waittime"]} min
            </td>
            <td className="border border-gray-500 text-center p-2 bg-blue-300">
              {Data[0]["mode_2.walktime"] + Data[0]["mode_2.waittime"]} min
            </td>
            <td className="border border-gray-500 text-center p-2 bg-yellow-500">
              {Data[0]["mode_4.walktime"] + Data[0]["mode_4.waittime"]} min
            </td>
            <td className="border border-gray-500 text-center p-2 bg-purple-500">
              {q1 === 3
                ? Data[0]["mode_8.walktime"] + Data[0]["mode_8.waittime"]
                : Data[0]["mode_9.walktime"] + Data[0]["mode_9.waittime"]}{" "}
              min
            </td>
            <td className="border border-gray-500 text-center p-2 bg-green-500">
              {q1 === 5
                ? Data[0]["mode_7.walktime"] + Data[0]["mode_7.waittime"]
                : Data[0]["mode_5.walktime"] + Data[0]["mode_5.waittime"]}{" "}
              min
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Total one-way cost of Travel</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="border border-gray-500 text-center p-2 bg-red-300">
              ~ upto {Data[0]["mode_1.tvariab"]} min more
            </td>
            <td className="border border-gray-500 text-center p-2 bg-blue-300">
              ~ upto {Data[0]["mode_2.tvariab"]} min more
            </td>
            <td className="border border-gray-500 text-center p-2 bg-yellow-500">
              ~ upto {Data[0]["mode_4.tvariab"]} min more
            </td>
            <td className="border border-gray-500 text-center p-2 bg-purple-500">
              ~ upto{" "}
              {q1 === 3 ? Data[0]["mode_8.tvariab"] : Data[0]["mode_9.tvariab"]}{" "}
              min more
            </td>
            <td className="border border-gray-500 text-center p-2 bg-green-500">
              ~ upto{" "}
              {q1 === 5 ? Data[0]["mode_7.tvariab"] : Data[0]["mode_5.tvariab"]}{" "}
              min more
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Possible Delay Due To Traffic</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border border-gray-500 text-center p-2 bg-red-300">
              Rs. {Data[0]["mode_1.tcost"]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-blue-300">
              Rs. {Data[0]["mode_2.tcost"]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-yellow-500">
              Rs. {Data[0]["mode_4.tcost"]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-purple-500">
              Rs. {q1 === 3 ? Data[0]["mode_8.tcost"] : Data[0]["mode_9.tcost"]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-green-500">
              Rs. {q1 === 5 ? Data[0]["mode_7.tcost"] : Data[0]["mode_5.tcost"]}
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Extent of Crowding in Vehicle</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border border-gray-500 text-center p-2 bg-red-300">
              <div className="text-center items-center flex justify-center">
                {crowdicon_json[Data[0]["mode_1.crowd"]]}
              </div>
              {crowd_json[Data[0]["mode_1.crowd"]]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-blue-300">
              <div className="text-center items-center flex justify-center">
                {crowdicon_json[Data[0]["mode_2.crowd"]]}
              </div>
              {crowd_json[Data[0]["mode_2.crowd"]]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-yellow-500">
              <div className="text-center items-center flex justify-center">
                {crowdicon_json[Data[0]["mode_4.crowd"]]}
              </div>
              {crowd_json[Data[0]["mode_4.crowd"]]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-purple-500">
              <div className="text-center items-center flex justify-center">
                {q1 === 3
                  ? crowdicon_json[Data[0]["mode_8.crowd"]]
                  : crowdicon_json[Data[0]["mode_9.crowd"]]}
              </div>
              {q1 === 3
                ? crowd_json[Data[0]["mode_8.crowd"]]
                : crowd_json[Data[0]["mode_9.crowd"]]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-green-500">
              <div className="text-center items-center flex justify-center">
                {q1 === 5
                  ? crowdicon_json[Data[0]["mode_7.crowd"]]
                  : crowdicon_json[Data[0]["mode_5.crowd"]]}
              </div>
              {q1 === 5
                ? crowdicon_json[Data[0]["mode_7.crowd"]]
                : crowdicon_json[Data[0]["mode_5.crowd"]]}
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Service Type</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border border-gray-500 text-center p-2 bg-red-300">
              <div className="text-center items-center flex justify-center">
                <MdAirlineSeatReclineNormal />
              </div>
              {servtype_json[Data[0]["mode_1.serv"]]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-blue-300">
              <div className="text-center items-center flex justify-center">
                <MdAirlineSeatReclineExtra />
              </div>
              {servtype_json[Data[0]["mode_2.serv"]]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-yellow-500">
              {servtype_json[Data[0]["mode_4.serv"]]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-purple-500">
              {q1 === 3
                ? servtype_json[Data[0]["mode_8.serv"]]
                : servtype_json[Data[0]["mode_9.serv"]]}
            </td>
            <td className="border border-gray-500 text-center p-2 bg-green-500">
              {q1 === 5
                ? servtype_json[Data[0]["mode_7.serv"]]
                : servtype_json[Data[0]["mode_5.serv"]]}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Page2;
