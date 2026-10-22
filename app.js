let age = 16
let hasTicket=true
let withAdult=true

if(age >=15 && hasTicket==true) {
    console.log ("Välkommen in till BIO")
} else{
    console.log ("gå köp ticket din snåle fan")
}
if (isLoggedIn==true) {
    // Hit kommer vi bara om isLoggedIn är true
    if(userRole === "admin") {
        console.log("Välkommen till adminpanelen");
    } else {
        console.log("Välkommen vanlig användare!)
        }
    } else {console.log("Du måste logga in först!")

    }

const trafficlight = "gul"
switch (trafficLight) {
  case "grön": console.log("kör")
    break;
 case "gul": 
    console.log("gör dig redo")
    break;
 case "röd":
        console.log("stanna")
        break;
    
default:console.log("okänd signal")




//=--> tilldela nytt värde
//==--> kolla om(värdet)är truthy
// === --> kollar om (värdet) och (datatypen) är truthy