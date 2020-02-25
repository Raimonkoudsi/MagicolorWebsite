import React from 'react';
 
import Menu from '../menu/Menu';
import Formulario from './formulario/Formulario';
import Mapa from './mapa/Mapa';
import Footer from '../footer/Footer';

import contacto from './contacto.png';
import mapa from './mapa.png';
 
 
class Contacto extends React.Component {
 
	render() {
 
		return(
 
			<React.Fragment>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5 font-weight-bold">
 
				<div className="container">

				<div className="row pt-2">
					<div className="col-md-6">

						<img className="img-fluid pt-5"  src={contacto} width="250"/>

					</div>
					<div className="col-md-6">

						<img className="img-fluid pt-5"  src={mapa} width="250"/>

					</div>
				</div>
 
            		<div className="row pt-2">

            			<div className="col-md-6 border">
								<Formulario />
						</div>

 
						<div className="col-md-6">
		        
							<Mapa />
 
						</div>
 
					</div>

				</div>	
 
	  		</main>
 
	  		<Footer />
 
	  		</React.Fragment>
 
		)
 
	}
 
}
 
export default Contacto;