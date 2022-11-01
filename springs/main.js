console.log("Bienvenido a Bancolombia");

//escribe la funcion quieroDinero para iniciar

let usuarios = true;
let totalDeBilletes = 0;
let totalBilletede5 = 0;
let totalBilletede10 = 0;
let totalBilletede20 = 0;
let totalBilletede50 = 0;
let totalBilletede100 = 0;

let tipoDeUsuarios = [
  {
    nombre: "sergio",
    documento: 2550,
    contraseña: 7650,
    tipoDeUsuario: "administrador",
  },
  {
    nombre: "lara",
    documento: 3390,
    contraseña: 4576,
    tipoDeUsuario: "cliente",
  },
];

let tipoDeBilletes = [
  { billete5: 0 },
  { billete10: 0 },
  { billete20: 0 },
  { billete50: 0 },
  { billete100: 0 },
];

let billetesdepositados = [0, 0, 0, 0, 0];

function quieroDinero() {}

function solicitarDatos() {
  documento = parseInt(window.prompt("ingresa tu documento"));
  contraseña = parseInt(window.prompt("ingresa tu contraseña"));
}

function solicitarBilletes() {
  tipoDeBilletes[0].billete5 = parseInt(
    window.prompt("Ingrese billetes de 5.000")
  );
  tipoDeBilletes[1].billete10 = parseInt(
    window.prompt("Ingrese billetes de 10.000")
  );
  tipoDeBilletes[2].billete20 = parseInt(
    window.prompt("Ingrese billetes de 20.000")
  );
  tipoDeBilletes[3].billete50 = parseInt(
    window.prompt("Ingrese billetes de 50.000")
  );
  tipoDeBilletes[4].billete100 = parseInt(
    window.prompt("Ingrese billetes de 100.000")
  );
}

function sumaDeBilletes(elemento, billete) {
  let sumaDeBilletes = elemento * billete;
  console.log(
    "hay disponible" + sumaDeBilletes + "pesos en billetes de" + billete
  );
  return sumaDeBilletes;
}

function usuarioAdmin() {
  solicitarBilletes();

  totalBilletede5 = sumaDeBilletes(tipoDeBilletes[0].billete5, 5000);
  totalBilletede10 = sumaDeBilletes(tipoDeBilletes[0].billete10, 10000);
  totalBilletede20 = sumaDeBilletes(tipoDeBilletes[0].billete20, 20000);
  totalBilletede50 = sumaDeBilletes(tipoDeBilletes[0].billete50, 50000);
  totalBilletede100 = sumaDeBilletes(tipoDeBilletes[0].billete100, 100000);

  totalDeBilletes =
    totalBilletede5 +
    totalBilletede10 +
    totalBilletede20 +
    totalBilletede50 +
    totalBilletede100;
  console.log("cajero full. tienes disponible " + totalDeBilletes);
}

function usuarioCliente() {
  if (totalDeBilletes == 0) {
    alert("Cajero en mantenimiento, vuelva pronto");
  } else {
    let valorARetirar = parseInt(window.prompt("Ingrese valor a retirar:"));
    console.log(
      "hay " +
        totalBilletede5 +
        "en" +
        tipoDeBilletes[0].billete5 +
        "billetes de 5.000"
    );
    console.log(
      "hay " +
        totalBilletede10 +
        "en" +
        tipoDeBilletes[0].billete10 +
        "billetes de 10.000"
    );
    console.log(
      "hay " +
        totalBilletede20 +
        "en" +
        tipoDeBilletes[0].billete20 +
        "billetes de 20.000"
    );
    console.log(
      "hay " +
        totalBilletede50 +
        "en" +
        tipoDeBilletes[0].billete50 +
        "billetes de 50.000"
    );
    console.log(
      "hay " +
        totalBilletede100 +
        "en" +
        tipoDeBilletes[0].billete100 +
        "billetes de 100.000"
    );

    totalDeBilletes =
      totalBilletede5 +
      totalBilletede10 +
      totalBilletede20 +
      totalBilletede50 +
      totalBilletede100;
    console.log("este es tu saldo" + totalDeBilletes);

    valorARetirar = parseInt(valorARetirar / 5000) * 5000;
    console.log("el total de dinero que se entregara es de " + valorARetirar);
    alert("el total que se entregara es de " + valorARetirar);

    if (totalDeBilletes < valorARetirar) {
      alert("cantidad a retirar insuficiente");
    } else {
      console.log("contando tu dinero");

      totalDeBilletes -= valorARetirar;
      let tomaTuPlata = false;

      while (tomaTuPlata === false) {
        if (valorARetirar >= 100000 && tipoDeBilletes[4].billete100 > 0) {
          valorARetirar -= 100000;
          tipoDeBilletes[4].billete100 -= 1;
          billetesEntregados[4] += 1;
          totalBilletede100 -= 100000;
        } else if (valorARetirar >= 50000 && tipoDeBilletes[3].billete50 > 0) {
          valorARetirar -= 50000;
          tipoDeBilletes[3].billete50 -= 1;
          billetesEntregados[3] += 1;
          totalBilletede50 -= 50000;
        } else if (valorARetirar >= 20000 && tipoDeBilletes[2].billete20 > 0) {
          valorARetirar -= 20000;
          tipoDeBilletes[2].billete20 -= 1;
          billetesEntregados[2] += 1;
          totalBilletede20 -= 20000;
        } else if (valorARetirar >= 10000 && tipoDeBilletes[1].billete10 > 0) {
          valorARetirar -= 10000;
          tipoDeBilletes[1].billete10 -= 1;
          billetesEntregados[1] += 1;
          totalBilletede10 -= 10000;
        } else if (valorARetirar >= 5000 && tipoDeBilletes[0].billete5 > 0) {
          valorARetirar -= 5000;
          tipoDeBilletes[0].billete5 -= 1;
          billetesEntregados[0] += 1;
          totalBilletede5 -= 5000;
        }

        if (valorARetirar == 0) {
          tomaTuPlata = true;
        }
      }

      console.log(
        "tienes disponible " +
          totalBilletede5 +
          " en " +
          tipoDeBilletes[0].billete5 +
          "billete de 5.000"
      );
      console.log(
        "tienes disponible " +
          totalBilletede5 +
          " en " +
          tipoDeBilletes[1].billete5 +
          "billete de 10.000"
      );
      console.log(
        "tienes disponible " +
          totalBilletede5 +
          " en " +
          tipoDeBilletes[2].billete5 +
          "billete de 20.000"
      );
      console.log(
        "tienes disponible " +
          totalBilletede5 +
          " en " +
          tipoDeBilletes[3].billete5 +
          "billete de 50.000"
      );
      console.log(
        "tienes disponible " +
          totalBilletede5 +
          " en " +
          tipoDeBilletes[4].billete5 +
          "billete de 100.000"
      );

      console.log(
        "Se entregaron " + billetesEntregados[4] + " en billetes de $100.000"
      );
      console.log(
        "Se entregaron " + billetesEntregados[3] + " en billetes de $50.000"
      );
      console.log(
        "Se entregaron " + billetesEntregados[2] + " en billetes de $20.000"
      );
      console.log(
        "Se entregaron " + billetesEntregados[1] + " en billetes de $10.000"
      );
      console.log(
        "Se entregaron " + billetesEntregados[0] + " en billetes de $5.000"
      );
      console.log("miATM tiene un nuevo saldo de " + totalDeBilletes);
    }
  }
}

do {
  solicitarDatos();

  if (documento == "2550" && contraseña == "7650") {
    alert("Bienvenido estimado"), (usuarios = true);
    usuarioAdmin();
  } else if (documento == " 3390" && contraseña == "4576") {
    alert("Bienvenido Cliente");

    usuarios = true;
    usuarioCliente();
  } else {
    alert("Datos Incorrectos");
    usuarios = false;
  }
} while (usuarios != true);
