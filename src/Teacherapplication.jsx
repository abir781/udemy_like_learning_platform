import React, { useState } from "react";
import { toast } from "sonner";

const TeacherApplication = () => {

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    experience: form.experience.value,
    skills: form.skills.value,
    motivation: form.motivation.value,
    portfolio: form.portfolio.value,
  };

  try {
    const res = await fetch("http://localhost:5000/teachercreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.insertedId) {
      toast.success("Application submitted successfully 🎉");
      form.reset();
    } else {
      toast.error(result.message || "Failed to submit application");
    }

  } catch (error) {
    toast.error("Server error! Please try again.");
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Apply as a Teacher
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            name="experience"
            type="text"
            placeholder="Years of Experience"
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            name="skills"
            type="text"
            placeholder="Your Skills (e.g., React, Node, Python)"
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <textarea
            name="motivation"
            placeholder="Why do you want to teach?"
            required
            className="w-full border p-3 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            name="portfolio"
            type="text"
            placeholder="Portfolio / LinkedIn (optional)"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
<button
  type="submit"
  disabled={loading}
  className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition disabled:bg-gray-400"
>
  {loading ? "Submitting..." : "Submit Application"}
</button>

        </form>
      </div>
    </div>
  );
};

export default TeacherApplication;
