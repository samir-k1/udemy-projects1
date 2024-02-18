const form =document.querySelector('form')


form.addEventListener('click',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)


    const result=document.querySelector('#results')

    if (height===" "||height<0) {
        result.innerHTML=`${height} is not the correct value`;
        
    }
    else if (weight===" "||weight<0) {
        result.innerHTML=`${weight} is not the correct value`;
        
    }
    else{
        const BMI=(weight/((height *height)/10000)).toFixed(2);

        result.innerHTML=`${BMI}`
    }


})