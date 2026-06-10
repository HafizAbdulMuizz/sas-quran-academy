"use client";
import {
  FaUserGraduate,
  FaUser,
  FaPhone,
  FaGlobe,
  FaBookOpen,
  FaPenFancy
} from "react-icons/fa";
import FadeIn from "./FadeIn";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AdmissionForm() {
const [loading, setLoading] =
  useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    country: "",
    age: "",
    course: "Nazra Quran",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
setLoading(true);
  e.preventDefault();

  try {

    const response = await fetch(
      "/api/admission",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }
    );

    const data =
      await response.json();

    if (data.success) {

      toast.success(
        "Admission Submitted Successfully!"
      );

      setFormData({
        studentName: "",
        parentName: "",
        phone: "",
        country: "",
        age: "",
        course: "Nazra Quran",
        notes: "",
      });
      setLoading(false);

    } else {

      toast.error(
        data.message
      );
setLoading(false);
    }

  } catch (error) {

    toast.error(
      "Something went wrong"
    );

  }

};

  return (
    <FadeIn>
    <section
      id="admission"
      className="bg-green-50 py-24"
    >

<div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-900">
          Online Admission Form
        </h2>
        <div className="flex justify-center mt-6">
  <div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
</div>
<p className="text-center text-gray-600 mt-4">
  Begin your Quran learning journey today.
  Fill out the form below and our team will contact you shortly.
</p>
       <form
  onSubmit={handleSubmit}
  className="
  mt-12
  space-y-6
  bg-white
  p-10
  rounded-3xl
  shadow-2xl
  border
  border-green-100
  "
>

         <div className="relative">

  <FaUserGraduate
    className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-yellow-600
    "
  />

  <input
    type="text"
    name="studentName"
    placeholder="Student Name"
    value={formData.studentName}
    onChange={handleChange}
    className="
    w-full
    pl-12
    p-4
    rounded-xl
    border-2
    border-green-200
    bg-white
    text-black
    focus:outline-none
    focus:border-yellow-500
    "
  />

</div>

       <div className="relative">

  <FaUser
    className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-yellow-600
    "
  />

  <input
    type="text"
    name="parentName"
    placeholder="Parent Name"
    value={formData.parentName}
    onChange={handleChange}
    className="
    w-full
    pl-12
    p-4
    rounded-xl
    border-2
    border-green-200
    bg-white
    text-black
    focus:outline-none
    focus:border-yellow-500
    "
  />

</div>

         <div className="relative">

  <FaPhone
    className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-yellow-600
    "
  />

  <input
    type="text"
    name="phone"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={handleChange}
    className="
    w-full
    pl-12
    p-4
    rounded-xl
    border-2
    border-green-200
    bg-white
    text-black
    focus:outline-none
    focus:border-yellow-500
    "
  />

</div>

          <div className="relative">

  <FaGlobe
    className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-yellow-600
    "
  />

  <input
    type="text"
    name="country"
    placeholder="Country"
    value={formData.country}
    onChange={handleChange}
    className="
    w-full
    pl-12
    p-4
    rounded-xl
    border-2
    border-green-200
    bg-white
    text-black
    focus:outline-none
    focus:border-yellow-500
    "
  />

</div>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border-2 border-green-200 bg-white text-black focus:outline-none focus:border-yellow-500"
          />
<div className="relative">

  <FaBookOpen
    className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-yellow-600
    "
  />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="  w-full
    pl-12
    p-4
    rounded-xl
    border-2
    border-green-200
    bg-white
    text-black
    focus:outline-none
    focus:border-yellow-500"
          >
                        <option>Basic Norani Qaida</option>
            <option>Nazra Quran</option>
            <option>Tajweed Quran</option>
            <option>Hifz Quran</option>
          </select>
</div>
<div className="relative">

  <FaPenFancy
    className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-yellow-600
    "
  />
          <textarea
            rows="4"
            name="notes"
            placeholder="Additional Notes"
            value={formData.notes}
            onChange={handleChange}
            className=" w-full
    pl-12
    p-4
    rounded-xl
    border-2
    border-green-200
    bg-white
    text-black
    focus:outline-none
    focus:border-yellow-500"
          />
</div>
     <button
  type="submit"
  disabled={loading}
  className="
  w-full
  bg-yellow-500
  text-black
  py-4
  rounded-xl
  font-bold
  hover:bg-yellow-400
  disabled:opacity-50
  disabled:cursor-not-allowed
  "
>

  {loading
    ? "Submitting..."
    : "Submit Admission"}

</button>

        </form>

      </div>

    </section>
    </FadeIn>
  );
}