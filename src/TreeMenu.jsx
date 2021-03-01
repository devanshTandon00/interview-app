import React from "react";
import TreeMenu from "react-simple-tree-menu";
import "./TreeMenuStyles.css";

const Tree = ({
  name,
  email,
  username,
  street,
  suite,
  city,
  zipcode,
  phone,
  website,
  companyName,
  catchPhrase,
}) => {
  const treeData = [
    {
      key: "first-level-node-1",
      label: `Name: ${name}`,
    },
    {
      key: "second",
      label: `Email: ${email}`,
    },
    {
      key: "third",
      label: `Username: ${username}`,
    },
    {
      key: "fourth",
      label: `Address:`,
      nodes: [
        {
          key: "fourthv1",
          label: `Line 1: ${street}, ${suite}`,
        },
        {
          key: "fourthv2",
          label: `Line 2: ${city}, ${zipcode}`,
        },
      ],
    },
    {
      key: "fifth",
      label: `Phone: ${phone}`,
    },
    {
      key: "sixth",
      label: `Website: ${website}`,
    },
    {
      key: "seventh",
      label: `Company: `,
      nodes: [
        {
          key: "name",
          label: `Name: ${companyName}`,
        },
        {
          key: "phrase",
          label: `CatchPhrase: ${catchPhrase}`,
        },
      ],
    },
  ];

  return <TreeMenu hasSearch={false} activeKey={false} data={treeData} />;
};

export default Tree;
