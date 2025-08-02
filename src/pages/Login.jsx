import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Login() {
  const [data, Setdata] = useState([]);
  const [name, Setname] = useState("");
  const [password, Setpassword] = useState("");
  const [email, Setemail] = useState("");
  const [des, Setdes] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation();

  async function GetData() {
    try {
      const { data } = await axios.get(
        "https://68500eabe7c42cfd179731c9.mockapi.io/users/users"
      );
      Setdata(data);
    } catch (error) {
      console.error(error);
    }
  }

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError("Неверный email address");
    } else {
      setError("");
    }
  };

  async function addData(obj) {
    try {
      await axios.post(
        "https://68500eabe7c42cfd179731c9.mockapi.io/users/users",
        obj
      );
      GetData();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="flex pt-[80px] bg-gray-100 dark:bg-gray-900 items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-[black] text-2xl font-bold mb-6 text-center">{t("signup")}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let newObj = {
              name: name,
              password: password,
              email: email,
              des: des,
            };
            addData(newObj);
            window.location.href = "http://localhost:5173"
          }}
        >
          <div className="mb-4">
            <label
            
              className="text-[black] block text-sm font-medium mb-2"
              htmlFor="username"
            >
              {t("username")}
            </label>
            <input
              type="text"
              id="username"
              required
              value={name}
              onChange={(e) => {
                Setname(e.target.value);
              }}
              className="text-[black] w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("entername")}
            />
          </div>
          <div className="mb-4">
            <label className="text-[black] block text-sm font-medium mb-2" htmlFor="email">
              {t("email")}
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => Setemail(e.target.value)}
              onBlur={(e) => validateEmail(e.target.value)}
              required
              className={`text-[black] w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              placeholder={t("enteremail")}
            />
            {error && <p className="text-red-500 text-sm mt-1">{t('errorr')}</p>}
          </div>
          <div className="mb-4">
            <label className="text-[black] block text-sm font-medium mb-2" htmlFor="des">
              {t("work")}
            </label>
            <input
              type="text"
              id="des"
              value={des}
              onChange={(e) => {
                Setdes(e.target.value);
              }}
              required
              className="text-[black] w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("enterwork")}
            />
          </div>
          <div className="mb-6 relative">
            <label
              className="text-[black] block text-sm font-medium mb-2"
              htmlFor="password"
            >
              {t("password")}
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={(e) => {
                Setpassword(e.target.value);
              }}
              className="text-[black] w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder={t("enterpassword")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            {t("signup")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
