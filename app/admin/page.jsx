"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function AdminPage() {
const [search, setSearch] = useState("");

const [courseFilter, setCourseFilter] =
  useState("All");
  const [admissions, setAdmissions] =
    useState([]);
const router = useRouter();

  const [loading, setLoading] =
    useState(true);
useEffect(() => {

  const loggedIn =
    localStorage.getItem(
      "adminLoggedIn"
    );

  if (!loggedIn) {

    router.push("/login");
    return;

  }

  fetchAdmissions();

}, [router]);

  const fetchAdmissions = async () => {

    try {

      const response =
        await fetch("/api/admission");

      const data =
        await response.json();

      setAdmissions(data.admissions);

    } catch {

      toast.error(
        "Failed to load admissions"
      );

    } finally {

      setLoading(false);

    }

  };

  const deleteAdmission =
    async (id) => {

      const confirmed =
        confirm(
          "Delete this admission?"
        );

      if (!confirmed) return;

      const response =
        await fetch(
          "/api/admission",
          {
            method: "DELETE",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              id,
            }),
          }
        );

      const data =
        await response.json();

      if (data.success) {

        toast.success(
          "Admission Deleted"
        );

        fetchAdmissions();

      }

    };

  const approveAdmission =
    async (id) => {

      const response =
        await fetch(
          "/api/admission",
          {
            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              id,
              status: "Approved",
            }),
          }
        );

      const data =
        await response.json();

      if (data.success) {

        toast.success(
          "Admission Approved"
        );

        fetchAdmissions();

      }

    };

  if (loading) {

    return (
      <div className="text-center">

  <div
    className="
    w-16
    h-16
    border-4
    border-green-900
    border-t-transparent
    rounded-full
    animate-spin
    mx-auto
    "
  ></div>

  <p className="mt-4">

    Loading Admissions...

  </p>

</div>
    );

  }
  const exportCSV = () => {

  const headers = [
    "Student",
    "Parent",
    "Phone",
    "Country",
    "Age",
    "Course",
    "Status"
  ];

  const rows =
    admissions.map((a) => [

      a.studentName,

      a.parentName,

      a.phone,

      a.country,

      a.age,

      a.course,

      a.status

    ]);

  const csvContent =

    [headers, ...rows]

      .map((e) => e.join(","))

      .join("\n");

  const blob =

    new Blob([csvContent], {

      type: "text/csv"

    });

  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    "admissions.csv";

  link.click();

};

  return (
    

    <div className="min-h-screen bg-[#F8F5EE] p-8">

     <div className="max-w-7xl mx-auto">

        {/* Header */}

<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
  <div>

    <h1 className="text-4xl font-bold text-green-900">
🕌 SAS Quran Academy    </h1>

    <p className="text-gray-600 mt-2">
Admissions Management Dashboard    </p>

  </div>
<div className="flex gap-3">
  <button

    onClick={() => {

      localStorage.removeItem(
        "adminLoggedIn"
      );

      router.push("/login");

    }}

    className="
    bg-red-600
    text-white
    px-5
    py-3
    rounded-xl
    hover:bg-red-700
    "

  >

    Logout

  </button>
  <button

  onClick={exportCSV}

  className="
  bg-yellow-500
  text-black
  px-5
  py-3
  rounded-xl
  hover:bg-yellow-400
  "

>

  Export CSV

</button>
</div>
</div>

        {/* Counter */}

<div className="grid md:grid-cols-3 gap-6 mb-8">

  <div className="bg-green-900 text-white p-6 rounded-2xl">

    <h3 className="text-lg">
      Total Admissions
    </h3>

    <p className="text-4xl font-bold mt-2">
      {admissions.length}
    </p>

  </div>

  <div className="bg-yellow-500 text-black p-6 rounded-2xl">

    <h3 className="text-lg">
      Approved
    </h3>

    <p className="text-4xl font-bold mt-2">

      {
        admissions.filter(
          (a)=>
          a.status ===
          "Approved"
        ).length
      }

    </p>

  </div>

  <div className="bg-white shadow-lg p-6 rounded-2xl">

    <h3 className="text-lg text-green-900">
      Pending
    </h3>

    <p className="text-4xl font-bold mt-2 text-green-900">

      {
        admissions.filter(
          (a)=>
          a.status !==
          "Approved"
        ).length
      }

    </p>

  </div>

</div>
{
  admissions.length > 0 && (

    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

      <h3 className="text-xl font-bold text-green-900">

        Latest Admission

      </h3>

      <div className="mt-4">

        <p className="font-semibold text-black">

          {admissions[0].studentName}

        </p>

        <p className="text-gray-600">

          {admissions[0].course}

        </p>

      </div>

    </div>

  )
}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

  <div className="grid md:grid-cols-2 gap-4">

    <input
      type="text"
      placeholder="Search Student..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
      w-full
      p-4
      border-2
      border-green-200
      rounded-xl
      text-black
      "
    />

    <select
      value={courseFilter}
      onChange={(e) =>
        setCourseFilter(
          e.target.value
        )
      }
      className="
      w-full
      p-4
      border-2
      border-green-200
      rounded-xl
      text-black
      "
    >

      <option value="All">
        All Courses
      </option>

      <option value="Nazra Quran">
        Nazra Quran
      </option>

      <option value="Tajweed Quran">
        Tajweed Quran
      </option>

      <option value="Hifz Quran">
        Hifz Quran
      </option>

      <option value="Basic Noorani Qaida">
        Basic Noorani Qaida
      </option>

    </select>

  </div>

</div>
</div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

        <table className="w-full">

          <thead className="bg-green-900 text-white">

            <tr >

              <th className="p-4">
                Student
              </th>

              <th className="p-4">
                Parent
              </th>

              <th className="p-4">
                Phone
              </th>
              <th className="p-4">
  Country
</th>
              <th className="p-4">
  Age
</th>

              <th className="p-4">
                Course
              </th>
<th className="p-4 text-left">
  Notes
</th>
<th className="p-4">
  Date
</th>
              <th className="p-4">
                Status
              </th>

              <th className="p-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

         {
admissions.length === 0 ? (

<tr>

<td
colSpan="10"
className="
text-center
py-16
text-gray-500
text-xl
"
>

📖 No Admissions Yet

</td>

</tr>

) : (

admissions
.filter((admission)=>{

const matchesSearch =
admission.studentName
.toLowerCase()
.includes(
search.toLowerCase()
);

const matchesCourse =
courseFilter === "All"
? true
: admission.course === courseFilter;

return (
matchesSearch &&
matchesCourse
);

})

.map((admission)=>(

                <tr
                  key={admission._id}
                  className="border-b"
                >

<td className="p-4 text-gray-900 font-medium">
                    {admission.studentName}
                  </td>

<td className="p-4 text-gray-900 font-medium">
                    {admission.parentName}
                  </td>

<td className="p-4 text-gray-900 font-medium">
                    {admission.phone}
                  </td>
                  <td className="p-4 text-gray-900 font-medium">
  {admission.country}
</td>
<td className="p-4 text-gray-900 font-medium">
  {admission.age}
</td>
<td className="p-4 text-gray-900 font-medium">
                    {admission.course}
                  </td>
<td className="p-4 text-gray-900 max-w-xs whitespace-normal break-words">
  {admission.notes || "-"}
</td>
<td className="p-4 text-gray-900">

  {
    admission.submittedAt

      ? new Date(
          admission.submittedAt
        ).toLocaleDateString()

      : "N/A"
  }

</td>

<td className="p-4 text-gray-900 font-medium">

  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold

    ${
      admission.status === "Approved"

      ? "bg-green-100 text-green-700"

      : "bg-yellow-100 text-yellow-700"
    }`}
  >

    {admission.status}

  </span>

</td>

                  <td className="p-4 flex gap-2">

                  {
  admission.status !== "Approved" && (
    <button
      onClick={() =>
        approveAdmission(
          admission._id
        )
      }
      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
    >
      Approve
    </button>
  )
}

                    <button
                      onClick={() =>
                        deleteAdmission(
                          admission._id
                        )
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              )
            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}