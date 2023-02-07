"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.ir/users")
      .then((d) => setUsers(d.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-between items-start gap-2 container mx-auto">
      <main>{children}</main>
      <aside className="w-[20rem] bg-gray-100 rounded-xl flex flex-col gap-4 p-2">
        {users.map((user, i) => (
          <div
            key={i}
            className="bg-gray-300 rounded-lg p-4 hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            {user.name}
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Layout;
