let nombreIngresado=prompt("Bienvenido! Ingresa tu usuario")
let contraseña=prompt("Ingresá tu contraseña")

if ((nombreIngresado === "Adrian")&&(contraseña === "Dominguez15" )){
    alert("Bienvenido a TECH912")
} else {
    alert("Lo siento, el usuario o contraseña son incorrectos. Intente nuevamente")
}

let resultadoBot = "51";
for (let i = 0; i < 10; i++) {
    preguntaBot = prompt("Si no eres un robot, completa el siguiente enunciado: 9+42");
    if (resultadoBot === preguntaBot) {
    alert("Es correcto")
    break;
} else {
    alert("Intenta nuevamente")
}
}

    let ComputadorasAmd= [
        {
            modelo: "AMD oficina",
            precio: "58000",
        },
        {
            modelo: "AMD Gamer",
            precio: "85000",
        }
    ]
    let ComputadorasIntel= [
    {
            modelo: "Intel oficina",
            precio: "63000",
        },
        {
            modelo: "INTEL gamer",
            precio: "95000",
        }
    ]

    function mostrarComputadorasAmd(){
        console.log("Computadoras disponibles");
        for (let i = 0; i < ComputadorasAmd.length; i++){
            console.log(`${i + 1}. ${ComputadorasAmd[i].modelo} - $${ComputadorasAmd[i].precio}`);
        }
    }

    function mostrarComputadorasIntel(){
        console.log("Computadoras disponibles");
        for (let i = 0; i < ComputadorasIntel.length; i++){
            console.log(`${i + 1}. ${ComputadorasIntel[i].modelo} - $${ComputadorasIntel[i].precio}`);
        }
    }

    let opcion =  prompt("Selecciona tu preferencia de PC. Escribe: ESC para salir \n1-AMD \n2-INTEL");
    switch (opcion) {
        case "1":
            console.log("Seleccionaste AMD");
            mostrarComputadorasAmd();
            break;
        case "2":
            console.log("Seleccionaste INTEL");
            mostrarComputadorasIntel();
            break;
        default:
            alert("Error");
            break;
    } 
    
