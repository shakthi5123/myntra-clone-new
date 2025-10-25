import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // true = login mode
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin
      ? "http://localhost:3000/api/auth/login"
      : "http://localhost:3000/api/auth/register";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        if (isLogin) {
          alert("Login successful!");
          // You can save token in AuthContext here if needed
          localStorage.setItem("token", data.token);
          navigate("/");
        } else {
          alert("Signup successful! Please login.");
          setIsLogin(true);
        }
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          {isLogin ? "Welcome Back 👋" : "Create Your Account"}
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {isLogin
            ? "Login to access your account and manage your orders."
            : "Sign up to create a new account and start shopping."}
        </p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border p-3 w-full mb-3 rounded focus:ring-2 focus:ring-pink-400 outline-none"
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-3 w-full mb-3 rounded focus:ring-2 focus:ring-pink-400 outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-3 w-full mb-4 rounded focus:ring-2 focus:ring-pink-400 outline-none"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-pink-500 text-white py-2 w-full rounded font-semibold hover:bg-pink-600 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle section */}
        <p className="text-center text-gray-600 mt-5">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-500 font-semibold cursor-pointer hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}