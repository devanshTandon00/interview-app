import { Button } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tree from "../TreeMenu";

const UserDetails = (props) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { name } = props.match.params;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        json.map((object) => {
          if (object.name === name) {
            setItem({
              id: object.id,
              name: object.name,
              username: object.username,
              email: object.email,
              street: object.address.street,
              suite: object.address.suite,
              city: object.address.city,
              zip: object.address.zipcode,
              phone: object.phone,
              website: object.website,
              companyName: object.company.name,
              catchPhrase: object.company.catchPhrase,
            });
          }
          return null;
        });
      })
      .then(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <h1 style={{ color: "rgb(34, 17, 17)" }}> Loading .... </h1>
      ) : (
        <div>
          <h1> User Details for {name}</h1>

          <Tree
            id={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
            street={item.street}
            suite={item.suite}
            city={item.city}
            zipcode={item.zip}
            phone={item.phone}
            website={item.website}
            companyName={item.companyName}
            catchPhrase={item.catchPhrase}
          />
          <Link
            to={{
              pathname: "/",
            }}
          >
            <Button className="btn">Home</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default UserDetails;
