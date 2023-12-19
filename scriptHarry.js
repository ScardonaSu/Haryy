/* Paso 1
Eres estudiante de Hogwarts, tienes la edad suficiente para entrar a estudiar,
tienes padres, y un linaje de sangre, aun no sabes tu casa, ni tu animal patronus,
también tienes cualidades, que son muy importantes para que el sombrero
seleccionador te asigne una casa.
Crear un objeto, con Nombre, edad, familia, linaje, casa, animal patronus,
cualidades, debes tener en tus cualidades solo los 3 de alguna de las casas:
“Valor, fuerza, audacia"
"Justicia, Lealtad, Paciencia"
“Creatividad, Erudición, Inteligencia"
"Ambición, Determinación, Astucia"
Linajes: Mestizo, muggle, Sangre pura */


const estudiante = {
  nombre: "Eugenio",
  edad: 16,
  familia: "",
  casa: "",
  animalPatronus: "",
  cualidades: ["Creatividad", "Erudición", "Inteligencia"],
  linajes: ["Sangre pura", "mestizo", "muggle"],
};

const clases = {
  transformaciones: "Profesor Kevin Slughorn",
  herbologia: "Profesor Maria Umbridge",
  pociones: "Profesor Liliana McGonagall",
  encantamientos: "Profesora Jackie",
  defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
  animalesMagicos: "Profesor David Filch",
  historiaDeMagia: "Profesor Ronald Sprout",
};

function sombreroSeleccionador() {
  const cualidades = estudiante.cualidades.map((cualidad) => {
    return cualidad;
  });
  const linajes = estudiante.linajes.map((linaje) => {
    return linaje;
  });
}

sombreroSeleccionador();



let hogwarts = 0;
const nombre = document.getElementById("nombre").value
const edad = document.getElementById("edad").value
const familia = document.getElementById("familia").value
const linaje = document.getElementById("linaje").value
const cualidades = document.getElementById("cualidades").value
const solucionPaso1 = document.getElementById("paso1");

const informacionPrincipal = () => {
  const nombre = document.getElementById("nombre").value
  const edad = document.getElementById("edad").value
  const familia = document.getElementById("familia").value
  const linaje = document.getElementById("linaje").value
  const cualidades = document.getElementById("cualidades").value

  hogwarts = {
    nombre: nombre,
    edad: edad,
    familia: familia,
    linaje: linaje,
    casa: "",
    patronus: "",
    cualidades: cualidades,
  };

  solucionPaso1.innerText = "Tus datos han sido guardados"

};

/* Paso 2
Es una año difícil en Hogwarts, ya que corren rumores que el innombrable ha vuelto,
y el y el famoso Harry Potter también ha ingresado contigo ¡¡¡
Crear Objeto de clases:
tus clases y tus profesores:
transformaciones: "Profesor Kevin Slughorn",
herbologia: "Profesor Maria Umbridge",
pociones: "Profesor Liliana McGonagall",
encantamientos: "Profesora Jackie",
defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
animalesMagicos: "Profesor David Filch",
historiaDeMagia: "Profesor Ronald Sprout" */

const clasesProfesores = () => {
  let clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    encantamientos: "Profesora Jackie",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
  };

  const solucionPaso2 = document.getElementById("paso2");
  solucionPaso2.innerText = `Transformaciones: ${clases.transformaciones}
  Herbologia: ${clases.herbologia}
  Encantamientos: ${clases.encantamientos}
  Animales Magicos: ${clases.animalesMagicos}
  Historia De Magia: ${clases.historiaDeMagia}`
}

/* Paso 3
Inicia un nuevo día, es el día del sombrero seleccionador¡¡
hay una gran cena de bienvenida, estas tu con todos tus compas, según tu linaje y
cualidades, el sombrero seleccionador te asignara una casa.
Crear un objeto que sirva para escoger la casa al que pertenece el estudiante, será
condicional según tus cualidades y linaje.

Gryffindor ("valor, fuerza, audacia"
Linaje: Mestizo, muggle, Sangre pura )

Hufflepuff("justicia, lealtad, paciencia"
Linaje: Mestizo, muggle)

Ravenclaw(“creatividad, erudición, inteligencia"
Linaje: Mestizo, muggle, Sangre pura)

Slytherin ("ambición, determinación, astucia"
Linaje: "Sangre Pura") */

const casaAsignada = () => {
  const nombre = document.getElementById("nombre").value
  const edad = document.getElementById("edad").value
  const familia = document.getElementById("familia").value
  const linaje = document.getElementById("linaje").value
  const cualidades = document.getElementById("cualidades").value
  const solucionPaso3 = document.getElementById("paso3");

  hogwarts = {
    nombre: nombre,
    edad: edad,
    familia: familia,
    linaje: linaje,
    casa: "",
    patronus: "",
    cualidades: cualidades,
  };

  if (hogwarts.cualidades.includes("Ambición") && hogwarts.cualidades.includes("Determinación") && hogwarts.cualidades.includes("Astucia") && hogwarts.linaje == "Sangre pura") {
    hogwarts.casa = "Slytherin";
    solucionPaso3.innerText = `Tu casa es ${hogwarts.casa}`
  }
  
  else if (hogwarts.cualidades.includes("Valor") && hogwarts.cualidades.includes("Fuerza") && hogwarts.cualidades.includes("Audacia")) {
    hogwarts.casa = "Gryffindor";
    solucionPaso3.innerText = `Tu casa es ${hogwarts.casa}`;
  }
  
  else if (hogwarts.cualidades.includes("Justicia") && hogwarts.cualidades.includes("Lealtad") && hogwarts.cualidades.includes("Paciencia") && hogwarts.linaje == "Mestizo" | hogwarts.linaje == "Muggle") {
    hogwarts.casa = "Hufflepuff";
    solucionPaso3.innerText = `Tu casa es ${hogwarts.casa}`;
  }
  
  else if (hogwarts.cualidades.includes("Creatividad") && hogwarts.cualidades.includes("Erudición") && hogwarts.cualidades.includes("Inteligencia")) {
    hogwarts.casa = "Ravenclaw";
    solucionPaso3.innerText = `Tu casa es ${hogwarts.casa}`;
  }
  
  else {
    hogwarts.casa = "Ninguna"
    solucionPaso3.innerText = `Tu casa es ${hogwarts.casa}`;
  }
}

/* Paso 4
primer día de clases: vas temprano a clase de transformaciones, en clase de
transformaciones que es un objeto, con transformaciones con boggarts, «Altera
la habilidad de un boggart para cambiar de forma y provoca risa para derrotarlo.»
esto se logra con el encantamiento "Riddikulus".

- Definir la clase de Transformaciones
En este paso, estás creando un objeto llamado claseTransformaciones que
representa la clase de Transformaciones. Estableces el nombre del profesor,
el horario y una propiedad para rastrear la transformación de los boggarts.

- Paso 2: Crear una función para realizar la transformación con "Riddikulus"
Aquí defines una función realizarTransformacionRiddikulus dentro de
claseTransformaciones. Esta función verifica si hay un boggart presente y, si
es así, realiza la transformación con el encantamiento "Riddikulus".

- Paso 3: Crear una función para enfrentar un boggart
Aquí defines otra función enfrentarBoggart dentro de
claseTransformaciones. Esta función toma un boggart como argumento,
muestra un mensaje con la forma original del boggart, realiza la
transformación y muestra el resultado.

- Paso 4: Uso y llamada a las funciones
En este paso, creas un objeto boggartEjemplo y luego llamas a la función
enfrentarBoggart de claseTransformaciones para enfrentar el boggart. */

const verificarBoggart = () => {
  let boggart = {
    animal: "pollo",
    color: "amarillo",
    tamaño: "enorme",
    pelo: "mucho",
    textura: "gruesa",
    transformacion: "un pollito"
  }

  const solucionPaso4 = document.getElementById("paso4");
  
  const claseTransformaciones = {
    nombre: "Profesor Kevin Slughorn",
    horario: "2:00PM - 3:45PM",
    realizarTransformacionRiddikulus: () => {
      let boggarts = document.getElementById("boggart").value
      if (boggarts == "Hay un boggart presente") {
        solucionPaso4.innerText = `Transformación ¡Riddikulus!, has hecho el encantamiento.
        El boggart es ${boggart.tamaño}, parece un ${boggart.animal} demonio, es de textura ${boggart.textura} y de color ${boggart.color}
        Lo has derrotado, la transformación se ha hecho, el boggart ahora es ${boggart.transformacion}`;
      }
      
      else {
        solucionPaso4.innerText = "No hay ningún bloggart presente";
      }
    },
  }
  
  claseTransformaciones.realizarTransformacionRiddikulus()
  
}

/* Paso 5 
puedes ir agregando las demás clases, pero es importante que vayas a la clase de
defensa contra las artes oscuras, para puedas defenderte de los dementores que
han escapado de Azkaban.
crear un objeto con nombre defensaContraLasArtesOscuras con la función de
generar un animal de patronus, lo genere random y llenar la variable, de la
propiedad animalPatronus.
Crear función donde aparece un dementor, y si el estudiante tiene ya su animal
patronus detiene el dementor, si no, el estudiante será absorbido, y será llevado a
la enfermería */

let animalesPosibles = 0;

const generarPatronus = () => {
  const nombre = document.getElementById("nombre").value
  const edad = document.getElementById("edad").value
  const familia = document.getElementById("familia").value
  const linaje = document.getElementById("linaje").value
  const cualidades = document.getElementById("cualidades").value
  const solucionPaso5 = document.getElementById("paso5")

  hogwarts = {
    nombre: nombre,
    edad: edad,
    familia: familia,
    linaje: linaje,
    casa: "",
    patronus: "",
    cualidades: cualidades,
  };

  const defensaContraLasArtesOscuras = {
    generarAnimalPatronus: () => {
      animalesPosibles = ["Abarimon", "Aethonan", "Araña", "Arpía", "AlizorDeWestacottus", "Sentauro", "Minotauro", "King Kong", "Bestia", "Unicornio", "Medusa", "Cíclope"];
      this.animalPatronus = animalesPosibles[Math.floor(Math.random() * animalesPosibles.length)]
      hogwarts.patronus = this.animalPatronus;
      
    }
  };
  const dementor = () => {
    solucionPaso5.innerText = "Ha aparecido un dementor!"
    
    if (!hogwarts.patronus) {
      solucionPaso5.innerText = `Dementor te ha encontrado, has sido absorbido, serás llevado a la enfermería `
    }
    
    else {
      solucionPaso5.innerText = `Tu animal Patronus es ${hogwarts.patronus}.
      Has detenido el dementor porque tienes tu animal patronus.`
    }
  }
  
  defensaContraLasArtesOscuras.generarAnimalPatronus();
  
  
  dementor();
}

/* Paso 6
Mostrar información del estudiante con los cambios realizador a su objeto */

const verInformacion = () => {
  const nombre = document.getElementById("nombre").value
  const edad = document.getElementById("edad").value
  const familia = document.getElementById("familia").value
  const linaje = document.getElementById("linaje").value
  const cualidades = document.getElementById("cualidades").value
  const solucionPaso6 = document.getElementById("paso6")

  hogwarts = {
    nombre: nombre,
    edad: edad,
    familia: familia,
    linaje: linaje,
    casa: "",
    patronus: "",
    cualidades: cualidades,
  };

  if (hogwarts.cualidades.includes("Ambición") && hogwarts.cualidades.includes("Determinación") && hogwarts.cualidades.includes("Astucia") && hogwarts.linaje == "Sangre pura") {
    hogwarts.casa = "Slytherin";
  }
  
  else if (hogwarts.cualidades.includes("Valor") && hogwarts.cualidades.includes("Fuerza") && hogwarts.cualidades.includes("Audacia")) {
    hogwarts.casa = "Gryffindor";
  }
  
  else if (hogwarts.cualidades.includes("Justicia") && hogwarts.cualidades.includes("Lealtad") && hogwarts.cualidades.includes("Paciencia") && hogwarts.linaje == "Mestizo" | hogwarts.linaje == "Muggle") {
    hogwarts.casa = "Hufflepuff";
  }
  
  else if (hogwarts.cualidades.includes("Creatividad") && hogwarts.cualidades.includes("Erudición") && hogwarts.cualidades.includes("Inteligencia")) {
    hogwarts.casa = "Ravenclaw";
  }
  
  else {
    hogwarts.casa = "Ninguna"
  }

  animalesPosibles = ["Abarimon", "Aethonan", "Araña", "Arpía", "AlizorDeWestacottus", "Sentauro", "Minotauro", "King Kong", "Bestia", "Unicornio", "Medusa", "Cíclope"];
  this.animalPatronus = animalesPosibles[Math.floor(Math.random() * animalesPosibles.length)]
  hogwarts.patronus = this.animalPatronus;

  solucionPaso6.innerText = `Nombre: ${nombre}
  Edad: ${edad}
  Familia: ${familia}
  Linaje: ${linaje}
  Casa: ${hogwarts.casa}
  Patrónus: ${hogwarts.patronus}
  Cualidades: ${cualidades}`;
}
