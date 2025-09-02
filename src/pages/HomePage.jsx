import { useState, useEffect } from "react";
import User from "../components/User.jsx";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();

    async function getUsers() {
      const data = localStorage.getItem("users");

      let usersData = [];

      if (data) {
        usersData = JSON.parse(data);
      } else {
        usersData = await fetchUsers();
      }

      setUsers(usersData);

      usersData.sort((user1, user2) => user1.name.localeCompare(user2.name));
    }
    // fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
    ); // fetch the data from the API
    const data = await response.json(); // parse the data from string to javascript array
    localStorage.setItem("users", JSON.stringify(data)); // set the data to the state}
    return data;
  }

  return (
    <main className="page">
      <section className="grid">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </section>
    </main>
  );
}
