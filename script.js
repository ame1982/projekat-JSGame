 var brojevi = [];
 var numbers = [];
 var nizp = [];
 var brojac = 1;
 function klikniLopticu(x){
 //bojenje loptica koje izvlacimo 
  var loptica = document.getElementsByClassName("loptica");
  for (let i = 0; i < loptica.length; i++) {
  loptica[x-1].style.backgroundColor = "#ffffff";
  loptica[x-1].style.color = "#ff0000";
  }
  if(!(brojevi.includes(x)))
         brojevi.push(x);
    brojevi.sort(function(a,b) {
        return a-b;
    });
    document.getElementById("kombinacijax").innerHTML=brojevi;
    brojac++;
    console.log(brojac);
            
            if(brojac>5){
                
                generisi();
                //add numbers to result
    var result = [];
    var resultDiv = document.getElementById("rezultat");
    var para = document.createElement("p");
    result.push(numbers.join(", "));
    for (var k in result) {
        var node = document.createTextNode(result[k]);
        para.appendChild(node);
        resultDiv.appendChild(para);
    }
    var dobitni = [];
    dobitni.push(nizp.join(", "));
    var counter = nizp.length;
    console.log(counter);
    console.log(dobitni);
    if (counter==0){
    var tekst2 = "Nemate ostvarenih pogodaka";
    }else {
    var tekst2 = "Broj ostvarenih pogodaka je "+ counter + " a to su slijedeći brojevi:<br>" + dobitni;
    }
    document.getElementById("dobitak").innerHTML = tekst2;
    obnovi();
    }            
                
            }           
          
function obnovi(){
    var text = "";
    for (let i = 1; i <= 45; i++) {
    text += "<button class=\"loptica\" id=\""+i+"\" onclick='klikniLopticu(" + i + ")'\">" + i + "</button>";
    document.getElementById("kombinacija").innerHTML = text;
    
    }
}
function ponovo(){
    var ball = document.getElementsByClassName("ball");
    for(let i = 0;i<ball.length;i++){
        for (var j = 0; j < numbers.length; j++) {
            if (numbers[j] == parseInt(ball[i].innerHTML)) {
                ball[i].style.backgroundColor = "#ff0000";
                ball[i].style.color = "white";
            }
        } 
        } 
    nizp = [];
    dobitni = [];
    brojevi = [];
    numbers = [];
    obnovi();
    document.getElementById("kombinacijax").innerHTML = "";
    document.getElementById("rezultat").innerHTML = "";
    document.getElementById("dobitak").innerHTML = "";
}

function generisi() {
    //get random numbers
    
    var ball = document.getElementsByClassName("ball");
    while (numbers.length < 5) {
    var random = Math.floor(Math.random() * (45-1)+1);
        if (numbers.indexOf(random) == -1) {
        numbers.push(random);
        }
    }
    //sortiranje brjoeva u nizu
    numbers.sort(function (a, b) {
        return a - b;
    });
    //bojenje loptica 
    for(let i = 0;i<ball.length;i++){
    for (var j = 0; j < numbers.length; j++) {
        if (numbers[j] == parseInt(ball[i].innerHTML)) {
            ball[i].style.backgroundColor = "white";
            ball[i].style.color = "#ff0000";
        }
    } 
    }   
    //provjera pogodaka
    numbers.forEach(function(x)
    {
        
      if (brojevi.includes(x)){
        nizp.push(x);
        
      }
    });
    return nizp;
}