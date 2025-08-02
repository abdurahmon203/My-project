import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [des, setDes] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  async function getData() {
    try {
      const { data } = await axios.get(
        "https://68500eabe7c42cfd179731c9.mockapi.io/users/users"
      );
      setData(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(t("fetch_error"));
    }
  }

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError(t("email_error"));
      return false;
    }
    setError("");
    return true;
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      setPasswordError(t("password_error"));
      return false;
    }
    setPasswordError("");
    return true;
  };

  async function registerUser(userData) {
    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "https://68500eabe7c42cfd179731c9.mockapi.io/users/users",
        userData
      );

      localStorage.setItem("currentUser", JSON.stringify(response.data));

      window.location.href = "/";
    } catch (error) {
      console.error("Registration error:", error);
      setError(t("registration_error"));
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !validatePassword(password)) {
      return;
    }

    const existingUser = data.find(
      (user) => user.name === name || user.email === email
    );
    if (existingUser) {
      setError(t("user_exists"));
      return;
    }

    const newUser = {
      name,
      password,
      email,
      des,
      phone,
    };

    await registerUser(newUser);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex pt-[200px] mb-[120px] bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md mx-auto my-8">
        <h2 className="text-gray-800 dark:text-white text-2xl font-bold mb-6 text-center">
          {t("signup")}
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="text-gray-700 dark:text-gray-300 block text-sm font-medium mb-2"
              htmlFor="username"
            >
              {t("username")}
            </label>
            <input
              type="text"
              id="username"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-gray-800 dark:text-white dark:bg-gray-700 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("entername")}
            />
          </div>

          <div className="mb-4">
            <label
              className="text-gray-700 dark:text-gray-300 block text-sm font-medium mb-2"
              htmlFor="email"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => validateEmail(e.target.value)}
              required
              className={`text-gray-800 dark:text-white dark:bg-gray-700 w-full px-3 py-2 border rounded focus:outline-none ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              placeholder={t("enteremail")}
            />
          </div>

          <div className="mb-4">
            <label
              className="text-gray-700 dark:text-gray-300 block text-sm font-medium mb-2"
              htmlFor="phone"
            >
              {t("phone")}
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="text-gray-800 dark:text-white dark:bg-gray-700 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("enterphone")}
            />
          </div>

          <div className="mb-4">
            <label
              className="text-gray-700 dark:text-gray-300 block text-sm font-medium mb-2"
              htmlFor="des"
            >
              {t("work")}
            </label>
            <input
              type="text"
              id="des"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              required
              className="text-gray-800 dark:text-white dark:bg-gray-700 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("enterwork")}
            />
          </div>

          <div className="mb-6 relative">
            <label
              className="text-gray-700 dark:text-gray-300 block text-sm font-medium mb-2"
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
                const value = e.target.value;
                setPassword(value);
                validatePassword(value);
              }}
              className={`text-gray-800 dark:text-white dark:bg-gray-700 w-full px-3 py-2 border rounded focus:outline-none pr-10 ${
                passwordError
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              placeholder={t("enterpassword")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? t("registering") : t("signup")}
          </button>
        </form>

        <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
          {t("already_have_account")}{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            {t("login")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;