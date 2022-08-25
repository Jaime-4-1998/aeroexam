import React from "react";
import CrudTabledata from "./CrudTabledata";

const Tables = ({ data}) => {
  return (
    <div>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTabledata
                key={el.id}
                el={el}
              />
            ))
          ) : (
            <strong>Sin datos</strong>
          )}
    </div>
  );
};

export default Tables;