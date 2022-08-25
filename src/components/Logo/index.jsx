import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import CrudForm from '../CrudForm'
import Boton from '../Boton/Buton'
import Modale, { ModalBody, ModalFooter, ModalHeader } from '../Modal/Modale';

const Logo = ({ImgGan,ImgUser}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section>
        <Boton onClick={() => setShowModal(true)}>Agregar <img src={ImgUser} alt="" /></Boton>
              <Modale show={showModal} setShow={setShowModal} >
                <ModalHeader>
                    <h2>Agrega un personaje </h2>
                </ModalHeader>
                <ModalBody>
                    <CrudForm />
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