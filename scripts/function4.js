
function redirect() {
    var input = document.getElementById("inputField").value;
    
    
    
        


if (input === "1") {



        document.getElementById("Input").innerHTML =  "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"+input+"ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" ;

        document.getElementById("Answer").innerHTML ="ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤMostrar contactoㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ";



        return false;
        


        
} 

if (input === "2") {

    document.getElementById("Input").innerHTML =  input ;

    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    document.getElementById("Answer").innerHTML ="ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤhttps://www.youtube.com/watch?v=dQw4w9WgXcQㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ";


    

    return false;
        
} 




if (input === "3") {

    document.getElementById("Input").innerHTML =  input ;


    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    return false;
        

                
} 

if (input === "4") {

    document.getElementById("Input").innerHTML =  input ;

    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    return false;
        

                    
} 
    

        
else {

    document.getElementById("Input").innerHTML =  input ;
    
    document.getElementById("Answer").innerHTML = " lo siento , no logro entenderte";
    return false;
    
}

}