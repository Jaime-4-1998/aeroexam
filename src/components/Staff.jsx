import React, { useEffect, useReducer, useState } from "react";
import { TYPES } from "../actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import { crudInitialState, crudReducer } from "../reducers/crudReducer";
import Tables from "./Tables/Tables";
import Loader from "./Loader";
import Message from "./Message";

const Staff = () => {
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let url = "http://localhost:5000/staff";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          dispatch({ type: TYPES.NO_DATA });
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);
  return (
    <div>
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <Tables
            data={db}
          />
        )}
    </div>
  );
};

export default Staff;