const persona = {
  nombre: "Ivan Isay",
  edad: 37,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

// 1. Destructuración del objeto
const { nombre, edad, direccion: { ciudad } } = persona;

// 2. Imprimir el mensaje
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
