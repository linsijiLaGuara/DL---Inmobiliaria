const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      " Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2 + "Habitaciones ",
    bano: 2 + "Baños",
    costo:2000,
    smoke:false,
    pets: true,
  },

  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3 + "Habitaciones ",
    bano: 3 + "Baños",
    costo:2500,
    smoke:false,
    pets:true,
  },
  {
    nombre: "  Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      " Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: 2 + "Habitaciones ",
    bano: 2 + "Baños",
    costo: 2200,
    smoke: false,
    pets: true,
  },
];

function renderizarAlquilerhtml(object) {
  let image = " <img src='" + object.src + "' class='card-img-top'/>";
  let cardbody = "<div class='card-body'> ";

  let nombre = "<h5 class='card-title'> " + object.nombre + "</h5> ";

  let descripcion = "<p class='card-text'> " + object.descripcion + "</p>";

  let ubicacion =
    "<p> <i class='fas fa-map-marker-alt'></i> " + object.ubicacion + "</p>";
  let habitaciones = "<p> <i class='fas fa-bed'></i>  " + object.habitaciones + "</p>";
  let bano = "<p> <i class='fas fa-bath'></i>  " + object.bano + "</p>";
  let costo ="<p> <i class='fas fa-dollar-sign'></i>  " + object.costo + "</p>";
  let smoke ="<p class='text-danger'><i class='fas fa-smoking-ban'></i> " +object.smoke +"</p>";
  let pets ="<p class='text-danger'><i class='fa-solid fa-ban'></i> " +object.pets +"</p>";
  let carbodyfinal = "</div>";
  return (
    image +
    cardbody +
    nombre +
    descripcion +
    ubicacion +
    bano +
    habitaciones +
    costo +
    smoke +
    pets +
    carbodyfinal
  );
}

const contenedorAlquiler_1 = (document.getElementById(
  "contenedor-alquiler"
).innerHTML += renderizarAlquilerhtml(propiedades_alquiler[0]));

const contenedorAlquiler_2 = (document.getElementById(
  "contenedor-alquiler1"
).innerHTML += renderizarAlquilerhtml(propiedades_alquiler[1]));

const contenedorAlquiler_3 = (document.getElementById(
  "contenedor-alquiler2"
).innerHTML += renderizarAlquilerhtml(propiedades_alquiler[2]));
