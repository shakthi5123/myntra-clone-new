import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signup() {
    const [form , setForm] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json()

            if(res.ok){
                alert("Signup successful! Please login.")
                navigate("/login")
            } else {
                alert(data.message || "Signup failed")
            }
        } catch (err) {
            console.log(err)
            alert("Error signing up")
        }
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
            <h2 className="text-xl font-bold mb-4 text-center">Create Account</h2>
            <input type="text" name="name" placeholder="Full Name" className="border p-2 w-full mb-3 rounded" onChange={handleChange} required/>
            <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-3 rounded" onChange={handleChange} required/>
            <input type="password" name="password" placeholder="Password" className="border p-2 w-full mb-3 rounded" onChange={handleChange} required/>

            <button type="submit" className="bg-pink-500 text-white py-2 w-full rounded hover:bg-pink-600">Sign Up</button>
        </form>
      
    </div>
  )
}
