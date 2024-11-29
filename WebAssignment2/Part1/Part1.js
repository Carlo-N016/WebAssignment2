function calculateArea(){ 
    let width,height;



   for(;;){
    let width = parseFloat(prompt('Please enter the width'))
    let height = parseFloat(prompt("Enter the height"))      
    

    if(width > 0 && height > 0){
        let area = width * height;
        console.log("The area is " + (width * height))
        alert("The Area is " + area)
        break;
       }else{
        alert("Cannot be a negative number, please enter a positive number")
        console.log("Cannot be a negative number, please enter a positive number")

       }
     
   }
  

}

calculateArea();