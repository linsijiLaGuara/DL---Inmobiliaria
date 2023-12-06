const propiedades_venta = [
  {
    nombre: " Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      " Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4 + "Habitaciones",
    bano: 2 + "Baños",
    costo: 5000,
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2 + "Habitaciones",
    bano: 1 + "Baños",
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: " Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: " 567 Skyline Avenue,Skyview City, CA 56789",
    habitaciones: 3 + "Habitaciones",
    bano: 3 + "Baños",
    costo: 4500,
    smoke: false,
    pets: true,
  },
];

function renderizarVentasHtml(object) {
  let inicio = "<div class='col-md-4 mb-4'><div class='card'>";
  let image = " <img src='" + object.src + "' class='card-img-top'/>";
  let cardbody = "<div class='card-body'> ";

  let nombre = "<h5 class='card-title'> " + object.nombre + "</h5> ";

  let descripcion = "<p class='card-text'> " + object.descripcion + "</p>";

  let ubicacion =
    "<p> <i class='fas fa-map-marker-alt'></i> " + object.ubicacion + "</p>";
  let habitaciones =
    "<p> <i class='fas fa-bed'></i>  " + object.habitaciones + "</p>";
  let bano = "<p> <i class='fas fa-bath'></i>  " + object.bano + "</p>";
  let costo =
    "<p> <i class='fas fa-dollar-sign'></i>  " + object.costo + "</p>";

  let smoke = "";
  if (object.smoke) {
    smoke =
      "<p class='text-success'><i class='fas fa-smoking'></i> Permitido fumar</p>";
  } else {
    smoke =
      "<p class='text-danger'><i class='fas fa-smoking-ban'></i> No se permite fumar</p>";
  }

  let pets = "";
  if (object.pets) {
    pets =
      "<p class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas </p>";
  } else {
    pets =
      "<p class='text-danger'><i class='fas fa-ban'></i> No se permiten mascotas </p> ";
  }

  let carbodyfinal = "</div>";
  let fin = "</div></div>";
  return (
    inicio +
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
    carbodyfinal +
    fin
  );
}

function renderizar_todas_las_ventas() {
  let propiedad_de_venta = "";
  for (const venta of propiedades_venta) {
    propiedad_de_venta += renderizarVentasHtml(venta);
    console.log(venta);
  }
  const contenedorVenta_1 = (document.getElementById(
    "contenedor-ventas"
  ).innerHTML += propiedad_de_venta);
}

renderizar_todas_las_ventas();
