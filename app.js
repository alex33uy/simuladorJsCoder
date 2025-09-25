function triviaCreator() {
  let score = 0;
  let introduction = prompt("Escriba su nombre participante:");
  let edad = prompt("Escriba su edad:");

  const capitals = [
    "Montevideo",
    "Buenos Aires",
    "Quito",
    "Santiago de Chile",
    "Brasilia",
    "Bogota",
    "Caracas",
    "Lima",
    "Paramaribo",
  ];
  let correcto1 = false;
  let firstQuestion = prompt(
    introduction +
      " , Esta es la primer consigna, demme una capital latinoamericana"
  );

  for (let capital of capitals) {
    if (capital === firstQuestion) {
      correcto1 = true;
      break;
    }
  }

  if (correcto1 === true) {
    alert("Buena Respuesta " + introduction);
    score = score + 10;
    console.log("Su resultado actual es " + score);
    if (correcto1 === false) {
      alert("Mejor suerte para la proxima pregunta " + introduction);
      score = score + 0;
      console.log("Su resultado actual es " + score);
    }
  }

  let answer2 = "Coderhouse";
  let secondQuestion = prompt(
    introduction +
      " , Segunda pregunta, que entidad permite la formacion academica en marketing digital, carreras de full stack y explorar el desarrollo digital?"
  );

  if (secondQuestion === answer2) {
    alert("Buena Respuesta " + introduction);
    score = score + 10;
    console.log("Su resultado actual es " + score);
  } else if (secondQuestion !== answer2) {
    alert("Mejor suerte para la proxima pregunta " + introduction);
    score = score + 0;
    console.log("Su resultado actual es " + score);
  }

  const vehicles = ["Moto", "Auto"];
  let correcto2 = false;
  let thirdQuestion = prompt(
    introduction +
      " , ultima pregunta, cual es un medio de transporte muy usado hoy dia para recorrer distancias entre ciudades, y posee neumaticos y motores y es el preferido por las personas"
  );

  for (let vehicle of vehicles) {
    if (vehicle === thirdQuestion) {
      correcto2 = true;
      break;
    }
  }

  if (correcto2 === true) {
    alert("Buena Respuesta " + introduction);
    score = score + 10;
    console.log("Su resultado actual es " + score);
    if (correcto2 === false) {
      alert("Mejor suerte para la proxima " + introduction);
      score = score + 0;
      console.log("Su resultado actual es " + score);
    }
  }

  alert("Su resultado final " + introduction + " es de " + score);
  alert("Gracias por jugar " + introduction);
}

triviaCreator();
