  
    function añobiciesto(año){
        if (año % 4 ===0 ) {
        if (año % 100 === 0) {
            if (año % 400 ===0) {
                return true;
            }else{
                 return false;
            }
}            
        }

    }

    const año = parseInt(prompt("ingresa el año"));
    if (añobiciesto(año)) {
        alert(`${año} es un año biciesto`)
    } else {
        alert(`${año} no  es un año biciesto`)

    }

     

