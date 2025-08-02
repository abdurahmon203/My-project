import axios from "axios";
import { Api } from "../config/Api";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [data, setData] = useState([]);

  async function GetData() {
    try {
      let { data } = await axios.get(Api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="pt-[150px] ">
      {
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {data.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow">
              <img src={user.avatar} className="w-full rounded-4xl " alt="" />
              <h2 className="mt-[10px] text-xl font-bold mb-2">{user.job}</h2>
              <p className="text-gray-600 mb-4">Place: {user.job}</p>
              <span className="text-green-600 font-semibold">
                ${user.cost} in a month
              </span>
              <Link to={`/jobs/${user.id}`}>
                <button className="flex mt-[10px] items-center gap-2 px-5 py-2 rounded-2xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
                  <Mail className="w-4 h-4" />
                  Contact
                </button>
              </Link>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default Product;
