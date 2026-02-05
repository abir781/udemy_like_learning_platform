import React, { useEffect, useState } from 'react';

const Approval = () => {

     const [applications, setApplications] = useState([]);

    //  const [ndata, setndata] = useState([]);

     const fetchpending=()=>{

         fetch("http://localhost:5000/allteachers")
      .then(res => res.json())
      .then(data => {

      const filtereddata = data.filter(seed => seed.status === "pending");

        setApplications(filtereddata)

   
    
  }, []);

     }

     useEffect(()=>{
         fetchpending();
     },[])



  const givestatus =async(stats,id)=>{

    console.log(stats);

    //     setApplications(prev =>
    //   prev.map(app => (app._id === id ? { ...app, status: stats } : app))
    // );

        try {
    const res = await fetch(`http://localhost:5000/admin/teacher/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: stats })
    });

    const data = await res.json();
    if (data.success) {
      alert(`Status updated to ${stats}`);
      fetchpending();

      // Optionally, refresh the applications list
    } else {
      alert(data.message || "Update failed");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }

  }
    return (
        <div>
      <h2 className="text-2xl font-bold mb-4">Pending Teacher Applications</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app._id}>
              <td className="border p-2">{app.name}</td>
              <td className="border p-2">{app.email}</td>
              <td className="border p-2">{app.status}</td>
              <td className="border p-2 space-x-2">
                <button onClick={()=>givestatus("Approved", app._id)} className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
                <button onClick={()=>givestatus("Rejected", app._id)} className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default Approval;