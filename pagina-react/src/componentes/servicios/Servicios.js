import React from 'react';

import Footer from '../footer/Footer';
import Menu from '../menu/Menu';
import Card from './cartas/Cartas';

import producto from './producto.png';


import './collapse.css';
 
class Servicios extends React.Component {

	render() {

		return(

			<React.Fragment>

			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">

				<section className="text-center">
				    <div className="container">
						<img className="img-fluid pt-5"  src={producto} width="400"/>
				      <p className="lead text-muted font-italic">
				      	Seleccione una categoría para mostrar los productos correspondientes
				      </p>				      
				    </div>
				</section>


        <div class="accordion mb-5 ml-2 mr-2" id="accordionExample">

          <div class="card" id="carta-uno">
            <div class="card-header btn" id="headingOne" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <h2 class="mb-0" id="font">
                  Juguetería
              </h2>
            </div>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                

              


                
              </div>
            </div>
          </div>



          <div class="card" id="carta-dos">
            <div class="card-header btn" id="headingTwo" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h2 class="mb-0" id="font">
                  Papelería
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                
                


              </div>
            </div>
          </div>


          <div class="card" id="carta-tres">
            <div class="card-header btn" id="headingThree" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h2 class="mb-0" id="font">
                  Ferretería
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">




              </div>
            </div>
          </div>


          <div class="card" id="carta-cuatro">
            <div class="card-header btn" id="headingFour" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <h2 class="mb-0" id="font">
                  Joyería
              </h2>
            </div>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div class="card-body">




              </div>
            </div>
          </div>


          <div class="card" id="carta-cinco">
            <div class="card-header btn" id="headingFive" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <h2 class="mb-0" id="font">
                  Mucho más
              </h2>
            </div>
            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
              <div class="card-body">



              </div>
            </div>
          </div>




        </div>

	  		</main>

	  		<Footer />

	  		</React.Fragment>

		)

	}

}


export default Servicios;
