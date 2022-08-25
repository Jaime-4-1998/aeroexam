import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import { Link } from "react-router-dom";
import CrudForm from '../CrudForm'
import Boton from '../Boton/Buton'
import Modale, { ModalBody, ModalFooter, ModalHeader } from '../Modal/Modale';
import Message from "../Message";
const Logo = ({ImgGan,ImgUser}) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/characters";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          //setDb(res);
          
          setError(null);
        } else {
          //setDb(null);
         
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //setDb([...db, res]);
       
      } else {
        setError(res);
      }
    });
  };

 
  return (
    <>
      <section>
        <Boton onClick={() => setShowModal(true)}>Agregar <img src={ImgUser} alt="" /></Boton>
              <Modale show={showModal} setShow={setShowModal} >
                <ModalHeader>
                    <h2>Agrega un personaje </h2>
                </ModalHeader>
                <ModalBody>
                    <CrudForm createData={createData}/>  {loading && 'jimae'}
                    {error && (
                      <Message
                        msg={`Error ${error.status}: ${error.statusText}`}
                        bgColor="#dc3545"
                      />
                    )}
                </ModalBody>
                <ModalFooter>
                  <span className='logo_close' onClick={() => setShowModal(false)}>Close</span>
                </ModalFooter>
            </Modale>
        <div className="logo_cont">
            <img src={ImgGan} alt="Harry Potter" title="Harry Potter" width="20" height="20"/>
        </div>
        <span>Selecciona tu filtro</span>
        <div className="logo_btns">
                <Link to="/Jaime" className='logo_button'>Estudiantes</Link>
                <Link to="/Jaime" className='logo_button'>Staff</Link>
        </div>
    </section>
    </>
  )
}

export default Logo