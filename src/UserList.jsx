import React, { useState, useEffect } from "react";
import Card from "./Components/Card";

const UserList = ({ searchItem }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        const newData = json.map((object) => ({
          id: object.id,
          email: object.email,
          website: object.website,
          phone: object.phone,
          name: object.name,
          username: object.username,
        }));

        // previousData is an empty array and the newData consists of all the users
        // using the spread operator, we copy the newData into the previousData
        setData((previousData) => [...previousData, ...newData]);
      });
  }, []);

  return (
    <>
      <div className="container">
        {data
          .filter(
            (o) =>
              o.name.includes(searchItem) ||
              o.email.includes(searchItem) ||
              o.username.includes(searchItem)
          )
          .map((info) => {
            return (
              <Card
                key={info.id}
                name={info.name}
                email={info.email}
                website={info.website}
                phone={info.phone}
              />
            );
          })}
      </div>
    </>
  );
};

export default UserList;
