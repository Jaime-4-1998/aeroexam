import React, { useState, useEffect } from "react";

var initailForm = {};
  initailForm.id= null;
  initailForm.name= "";
  initailForm.dateOfBirth= "";
  initailForm.eyeColour="";
  initailForm.hairColour="";
  initailForm.gender= "";
  initailForm.hogwartsStudent="";
  initailForm.hogwartsStaff="";
  initailForm.image="";
  const CrudForm = ({ createData, dataToEdit }) => {
  const [form, setForm] = useState(initailForm);
  
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.dateOfBirth) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } 
  };

  return (
    
      <form onSubmit={handleSubmit}>
        <div className="form_gropu">
          <div className="form_input">
            <label className="form_label">Nombre</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={form.name}
              className='form_desinput'
            />
          </div>
          <div className="form_input">
            <label className="form_label">Cumpleaños</label>
              <input
                type="date"
                name="dateOfBirth"
                onChange={handleChange}
                value={form.dateOfBirth}
                className='form_desinput'
              />
          </div>
        </div>
        <div className="form_gropu">
          <div className="form_input">
            <label className="form_label">Color de Ojos</label>
            <input
              type="text"
              name="eyeColour"
              onChange={handleChange}
              value={form.eyeColour}
              className='form_desinput'
            />
          </div>
          <div className="form_input">
            <label className="form_label">Color de Pelo</label>
              <input
                type="text"
                name="hairColour"
                onChange={handleChange}
                value={form.hairColour}
                className='form_desinput'
              />
          </div>
        </div>
        <div className="form_radio">
          <div className="row radio">
            <input id="fe" type="radio" name="gender" onChange={handleChange} value="female" checked="checked"  />
            <label htmlFor="fe" className="form_lb">Mujer</label>
          </div>
          <div className="row radio">
            <input id="ma" type="radio" name="gender" onChange={handleChange} value="male"  />
            <label htmlFor="ma" className="form_lb">Hombre</label>
          </div>
          <div className="row radio">
            <input id="hw" type="radio" name="hogwartsStudent" onChange={handleChange}  value={true} />
            <label htmlFor="hw" className="form_lb">Estudiante</label>
          </div>
          <div className="row radio">
            <input id="hq" type="radio" name="hogwartsStaff" onChange={handleChange} value={true}  />
            <label htmlFor="hq" className="form_lb">Staff</label>
          </div>
        </div>
        <div className="form_gropu">
          <div className="form_input form_esp">
            <label className="form_label">Inserta una URL de la Imagen</label>
            <input
              type="url"
              name="image"
              onChange={handleChange}
              value={form.image}
              className='form_desinput'
            />
          </div>
        </div>
        <input type="submit" value="Enviar" />
      </form>
  );
};

export default CrudForm;