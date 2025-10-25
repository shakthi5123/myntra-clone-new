import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";


export default function Login() {
    const [form , setForm] = useState({ email: "", password: "" })
    const { login } = useAuth()
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json()

            if(res.ok){
                login(data); // Store user in context + localStorage
                alert("Login successful!")
                setTimeout(() => navigate("/"), 300);
            } else {
                alert(data.message || "Invalid credentials")
            }
        } catch (err) {
            console.log(err)
            alert("Error logging in")
        }
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
            <h2 className="text-xl font-bold mb-4 text-center">Login To Your Account</h2>
            <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-3 rounded" onChange={handleChange} required/>
            <input type="password" name="password" placeholder="Password" className="border p-2 w-full mb-3 rounded" onChange={handleChange} required/>

            <button type="submit" className="bg-pink-500 text-white py-2 w-full rounded hover:bg-pink-600">Login</button>
        </form>
      
    </div>
  )
}
