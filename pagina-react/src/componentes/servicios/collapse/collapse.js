var Jugueteria =false, Libreria=false, Joyeria=false, Ferreteria=false, Otro=false;

function JugueteriaClick()
{
    if (Jugueteria===true) {
        
    }
    else if(Jugueteria===false)
    {
        var jugueteria=document.getElementById("headingOne");
        jugueteria.style.backgroundColor= 'red';
        jugueteria.style.color='red';
    }

}

function LibreriaCLick()
{
    var libreria=document.getElementById("libreria");
    libreria.src= "/static/images/icons/youtube-blanco.png";   
}