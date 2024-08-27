"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const [jobsRes, usersRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/todos"),
          fetch("https://jsonplaceholder.typicode.com/users"),
        ]);
        const jobsData = await jobsRes.json();
        const usersData = await usersRes.json();
        setJobs(jobsData);
        setUsers(usersData);
      } catch (err: any) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h4>Tên người dùng: {user.username}</h4>
            <ul>
              {jobs
                .filter((job) => job.userId === user.id)
                .map((job) => (
                  <li key={job.id}>
                    <h4>Tên công việc: {job.title}</h4>
                    <h4>
                      Status: {job.completed ? "Hoàn thành" : "Chưa hoàn thành"}
                    </h4>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
