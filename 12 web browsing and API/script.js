function curSucces(pos){

    const coords=pos.coords;
    console.log(`coords:${coords.longitude}`)
    console.log(`coords:${coords.latitude}`)
    console.log(`coords:${coords.longitude}`)


    
  
    console.log(pos)
}

function curError(err){
    console.log(`error:${err.code}-${err.message}`)
}

const Option ={

enable
};
navigator.geolocation.getCurrentPosition(curSucces,curError, Option);