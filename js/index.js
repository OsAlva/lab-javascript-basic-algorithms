// Iteration 1: Names and Input
 console.log("I'm ready!");
 let hacker1 = "Camila";
 let hacker2 = "Jose";


 console.log(`The driver's name is ${hacker1}`);
 console.log(`The navigator's name is ${hacker2}`);
 
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both ${hacker1} and ${hacker2} have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
//MAYUSCULAS + ""
let auxiliar="";
for(let i=0;i<hacker1.length;i++){
    //mayusculas.push(hacker1[i]);
    
    auxiliar += hacker1[i].toUpperCase() + " ";

}
console.log(auxiliar + " ");
//console.log(mayusculas);


//NOMBRE AL REVES
//Con arrays 
let alreves = [];
for(let i = hacker1.length-1; i>=0;i--){
    alreves.push(hacker1[i]);
    console.log("");
}
console.log(alreves);

//Sin arrays - AL REVES
let auxiliar1 = "";
for(let i=hacker1.length-1;i>=0;i--){
    //auxiliar1 = hacker1[i] + " ";
    auxiliar1 += hacker1[i] + " ";
}
console.log(auxiliar1);

    



//ORDENAMIENTO LEXICOGRAFICO
if(hacker1.localeCompare(hacker2) == 0){
    console.log("Son iguales");
    console.log(`What?! You both have the same name? ${hacker1} === ${hacker2}` );
}
else if(hacker1.localeCompare(hacker2) == -1){
    //console.log(`hacker1 ${hacker1} antes`);
    console.log(`The driver's name ${hacker1} goes first.`)
}
else if(hacker1.localeCompare(hacker2) == 1){
    //console.log(`hacker1 ${hacker1} despues`);
    console.log(`Yo, the navigator ${hacker2}  goes first definitely.`)
}

/*
-1 if sorted antes
1 if sorted despues
0 if equal
*/

//BONUS 1
let words=1;
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae odio accumsan, efficitur dolor dignissim, venenatis est. Mauris feugiat erat sit amet enim tempor, vitae consequat quam iaculis. Suspendisse mauris diam, accumsan at velit ut, accumsan venenatis velit. Vivamus efficitur, lacus et varius lobortis, dolor sem consectetur purus, at dapibus urna nulla nec est. Nulla orci odio, pellentesque vitae finibus nec, consequat sit amet neque. Vestibulum placerat aliquet justo. Etiam accumsan molestie mi, quis cursus nibh porttitor eget. In faucibus pellentesque turpis, ut tincidunt quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis neque sit amet magna cursus accumsan et non sapien. Etiam ac accumsan dui. Phasellus ligula lorem, interdum nec lobortis nec, sagittis vitae metus. Integer dictum libero id urna vestibulum, vitae lacinia nulla tempor. Pellentesque volutpat condimentum elit, a efficitur lectus dignissim sit amet. Aliquam varius eros id quam maximus placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc varius urna ante, eget semper orci pulvinar sed. Proin eu vehicula augue. Maecenas eget mauris vel velit porta lobortis. Sed lacinia, ipsum et venenatis fermentum, dolor libero consectetur nisl, nec laoreet justo purus quis urna. Nunc viverra mattis enim vitae ultrices. Vivamus sit amet egestas ex. Nunc turpis leo, commodo eget consectetur a, imperdiet eget nulla. Quisque eu felis pulvinar, condimentum ante aliquet, aliquet risus. Nunc metus sapien, facilisis ut elit quis, malesuada luctus ligula. Vivamus mi ligula, consequat id eleifend non, porta non orci. Quisque vulputate ante in aliquam blandit.`

if(lorem.length == 0){
    console.log("Es un string vacio");
}
else if(lorem.length !=0){
    for (let i = 0; i < lorem.length; i++){
    if (lorem[i] == " "){
      words ++;
    }
    
  }
  console.log("Words: " + words);
}


  //OTRA SOLUCION
    const words1 = lorem.split(/\s+/g).length;
    console.log("Words: " + words1);

//ultimo bonus1

var str = "A,B,C,D,E";
var ch = ',';
 
let count = lorem.split(' et ').length - 1;
console.log(`La palabra et aparece ${count}`);
 

//BONUS 2
//Palindromo
let phraseToCheck = `phraseToCheck`;
//dividimos el string con split
//lo invertimos con reverse
//lo volvemos a unir con join
//posteriormente comparamos la strings el normal y el invertido con un operador ternario.

let palindromo = (frase) => {

    let auxiliar= frase.toUpperCase().split(" ").join("");
    auxiliar = auxiliar.split(",").join("");
    auxiliar = auxiliar.split("!").join("");
    auxiliar = auxiliar.split("?").join("");
    

    let fraseInvertida = frase.toUpperCase().split(" ").join("");
    fraseInvertida = fraseInvertida.split(",").join("");
    fraseInvertida = fraseInvertida.split("!").join("");
    fraseInvertida = fraseInvertida.split("?").reverse().join("");
    



   // fraseInvertida = fraseInvertida.split(`/[&\/\\#,+()$~%.'":*?<>{}]/g`).join("");
   
   /* console.log(`${fraseInvertida} frase invertida `);
    console.log(`${auxiliar} frase normal `); */
   
    return fraseInvertida === auxiliar ? "es palindromo" : "no es palindromo";
}

console.log(palindromo("A man, a plan, a canal, Panama!"));
console.log(palindromo("put it up"));
console.log(palindromo("Amor, Roma"));

/*"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/


