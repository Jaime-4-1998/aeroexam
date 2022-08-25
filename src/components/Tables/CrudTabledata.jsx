import React from "react";

const CrudTabledata = ({ el }) => {
  let { name} = el;

  return (
    <tr>
      <td>{name}</td>
    </tr>
  );
};

export default CrudTabledata;