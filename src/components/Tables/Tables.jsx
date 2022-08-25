import React from "react";
import CrudTabledata from "./CrudTabledata";

const Tables = ({ data}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTabledata
                key={el.id}
                el={el}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;