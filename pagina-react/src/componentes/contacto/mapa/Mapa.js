import React from 'react';
 
class Mapa extends React.Component {
 
  render() {
 
    return (
 
        <div className="embed-responsive embed-responsive-4by3 border bg-secondary">
            <iframe className="embed-responsive-item" src="https://maps.google.com/?ll=10.264470,-67.623600&z=19&t=m&output=embed"></iframe>
        </div>
 
    )
    
  }
 
}
 
export default Mapa;