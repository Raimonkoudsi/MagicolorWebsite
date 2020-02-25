import React from 'react';
import '../../../App.css';
 
class Formulario extends React.Component {
 
  render() {
 
    return (
 
        <form className="mb-5 pt-2">
 
          <div className="form-group">
            <label htmlFor="nya" className="negrita font-weight-bold">Nombres y Apellidos</label>
            <input type="text" className="form-control" id="nya" title="Coloque el nombre y apellido del titular del mensaje" required />            
          </div>
 
          <div className="form-group">
            <label htmlFor="email" className="negrita font-weight-bold">Email</label>
            <input type="email" className="form-control" id="email" title="Coloque el email del titular del mensaje" required />
          </div>
 
          <div className="form-group">
            <label htmlFor="asunto" className="negrita font-weight-bold">Asunto</label>
            <input type="text" className="form-control" id="asunto" title="Coloque el asunto en el que se enviará" required />
          </div>
 
          <div className="form-group">
            <label htmlFor="mensaje" className="negrita font-weight-bold">Mensaje</label>
            <textarea className="form-control" id="mensaje" title="Coloque el mensaje a enviar" required></textarea>
          </div>
 
          <button type="submit" className="btn btn-primary">Enviar</button>
 
        </form>
 
    )
    
  }
 
}
 
export default Formulario;