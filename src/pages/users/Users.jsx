import axios from "../../api";
import React, { useEffect, useState } from "react";
import "../users/Users.css";

const Users = () => {
  let [data, setData] = useState(null);
  let userData = JSON.parse(localStorage.getItem("user-data"));
  useEffect(() => {
    axios
      .get("/users/search", {
        params: { limit: 100 },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("x-auth-token")}`,
        },
      })

      // )
      .then((res) => {
        setData(res.data.data.users);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div className="container">
      <div className="user_items">
        <h2>Users</h2>
        <h3 style={{ paddingBottom: 32 }}>
          {userData.FirstName} : {userData.role}
        </h3>
        {userData?.role === "admin" ? (
          <div className="users">
            {data?.map((user) => (
              <div key={user.id} className="user">
                <div className="image"></div>
                <h3>
                  {user.FirstName} {user.LastName}
                </h3>
                <p>{user.phones}</p>
              </div>
            ))}
          </div>
        ) : (
          <h2 style={{ paddingTop: 20 }}>
            Foydalanuvchilar ro'yxatini faqat adminlar ko'ra olishi mumkin :)
          </h2>
        )}
      </div>
    </div>
  );
};

export default Users;
