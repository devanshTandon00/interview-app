import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, email, phone, website }) {
  return (
    <div className="card">
      <Link
        to={{
          pathname: "/" + name,
        }}
      >
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{phone}</h2>
        <h2>{website}</h2>
      </Link>
    </div>
  );
}
