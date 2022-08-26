import React from "react";

const CrudTabledata = ({ el }) => {
  let { id,name,alive,image,hogwartsStudent,hogwartsStaff,house,dateOfBirth,gender,eyeColour,hairColour} = el;

  return (
    <div key={id} className='cont'>
      <section className='inicioper_cont'>
              <div className="inicioper_card">
                  <div className="inicioper_body">
                      <div className="inicioper_image">
                          <div className={house}>
                              <img src={image} alt={name} title={name} />
                          </div>
                      </div>
                      <div className="inicioper_data">
                      <div className="inicioper_if">
                          {(() => {
                                  if (hogwartsStudent === true && alive === true && hogwartsStaff === false) {
                                      return <span className='inicioper_span'> Vivo / Estudiante </span>;
                                  } else if (hogwartsStudent === true && alive === false) {
                                      return <span className='inicioper_span'> Finado / Estudiante </span>  ;
                                  } else if (hogwartsStudent === false && alive === true) {
                                      return <span className='inicioper_span'> Vivo / Staff </span>  ;
                                  } else if (hogwartsStudent === false && alive === false && hogwartsStaff === true) {
                                      return <span className='inicioper_span'> Finado / Staff </span>  ;
                                  } else if (hogwartsStudent === false && alive === false && hogwartsStaff === false) {
                                      return <span className='inicioper_span'> Finado / Persona </span>  ;
                                  }
                                  else if (hogwartsStudent === "true" && hogwartsStaff === "") {
                                    return <span className='inicioper_span'> Estudiante / Hogwarts</span>  ;
                                  }
                                  else if (hogwartsStudent === "" && hogwartsStaff === "true") {
                                    return <span className='inicioper_span'> Staff / Hogwarts</span>  ;
                                  }
                                  else {
                                      return <span className='inicioper_span'> Guerrero </span>  ;
                                  }
                          })()}
                      </div>
                      <div className="inicioper_mobile">
                          {(() => {
                                  if (hogwartsStudent === true && alive === true && hogwartsStaff === false) {
                                      return <span className='inicioper_spane'> Vivo <br /> Estudiante </span>;
                                  } else if (hogwartsStudent === true && alive === false) {
                                      return <span className='inicioper_spane'> Finado <br /> Estudiante </span>  ;
                                  } else if (hogwartsStudent === false && alive === true) {
                                      return <span className='inicioper_spane'> Vivo <br /> Staff </span>  ;
                                  } else if (hogwartsStudent === false && alive === false && hogwartsStaff === true) {
                                      return <span className='inicioper_spane'> Finado <br /> Staff </span>  ;
                                  } else if (hogwartsStudent === false && alive === false && hogwartsStaff === false) {
                                      return <span className='inicioper_spane'> Finado <br /> Persona </span>  ;
                                  }
                                  else {
                                      return <span className='inicioper_spane'> No Existe </span>  ;
                                  }
                          })()}
                      </div>
                          
                      
                          <h2 className='incioper_name'>{name}</h2>
                          <div className="inicioper_minidata">
                              <p className='inicioper_datas'><strong>Cumpleaños: </strong>{dateOfBirth}</p>
                              <p className='inicioper_datas'><strong>Género: </strong>{gender}</p>
                              <p className='inicioper_datas'><strong>Color de ojos: </strong>{eyeColour}</p>
                              <p className='inicioper_datas'><strong>Color de Pelo: </strong>{hairColour}</p>
                          </div>
                      </div>
                  </div>
              </div>
      </section>
      <section className='inicioper_cont'>
              <div className="inicioper_card">
                  <div className="inicioper_body">
                      <div className="inicioper_image">
                          <div className={house}>
                              <img src={image} alt={name} title={name} />
                          </div>
                      </div>
                      <div className="inicioper_data">
                      <div className="inicioper_if">
                          {(() => {
                                  if (hogwartsStudent === true && alive === true && hogwartsStaff === false) {
                                      return <span className='inicioper_span'> Vivo / Estudiante </span>;
                                  } else if (hogwartsStudent === true && alive === false) {
                                      return <span className='inicioper_span'> Finado / Estudiante </span>  ;
                                  } else if (hogwartsStudent === false && alive === true) {
                                      return <span className='inicioper_span'> Vivo / Staff </span>  ;
                                  } else if (hogwartsStudent === false && alive === false && hogwartsStaff === true) {
                                      return <span className='inicioper_span'> Finado / Staff </span>  ;
                                  } else if (hogwartsStudent === false && alive === false && hogwartsStaff === false) {
                                      return <span className='inicioper_span'> Finado / Persona </span>  ;
                                  }
                                  else if (hogwartsStudent === "true" && hogwartsStaff === "") {
                                    return <span className='inicioper_span'> Estudiante / Hogwarts</span>  ;
                                  }
                                  else if (hogwartsStudent === "" && hogwartsStaff === "true") {
                                    return <span className='inicioper_span'> Staff / Hogwarts</span>  ;
                                  }
                                  else {
                                      return <span className='inicioper_span'> Guerrero </span>  ;
                                  }
                          })()}
                      </div>
                      <div className="inicioper_mobile">
                          {(() => {
                                  if (hogwartsStudent === true && alive === true && hogwartsStaff === false) {
                                      return <span className='inicioper_spane'> Vivo <br /> Estudiante </span>;
                                  } else if (hogwartsStudent === true && alive === false) {
                                      return <span className='inicioper_spane'> Finado <br /> Estudiante </span>  ;
                                  } else if (hogwartsStudent === false && alive === true) {
                                      return <span className='inicioper_spane'> Vivo <br /> Staff </span>  ;
                                  } else if (hogwartsStudent === false && alive === false && hogwartsStaff === true) {
                                      return <span className='inicioper_spane'> Finado <br /> Staff </span>  ;
                                  } else if (hogwartsStudent === false && alive === false && hogwartsStaff === false) {
                                      return <span className='inicioper_spane'> Finado <br /> Persona </span>  ;
                                  }
                                  else {
                                      return <span className='inicioper_spane'> No Existe </span>  ;
                                  }
                          })()}
                      </div>
                          
                      
                          <h2 className='incioper_name'>{name}</h2>
                          <div className="inicioper_minidata">
                              <p className='inicioper_datas'><strong>Cumpleaños: </strong>{dateOfBirth}</p>
                              <p className='inicioper_datas'><strong>Género: </strong>{gender}</p>
                              <p className='inicioper_datas'><strong>Color de ojos: </strong>{eyeColour}</p>
                              <p className='inicioper_datas'><strong>Color de Pelo: </strong>{hairColour}</p>
                          </div>
                      </div>
                  </div>
              </div>
      </section>
</div>
  );
};

export default CrudTabledata;