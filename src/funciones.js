import Swal from "sweetalert2";
import axios from "axios";

// creamos funciones exportables para las funcionalidades de nuestras vistas

export function mostrar_alerta(mensaje, icono, foco = ""){
  if (foco !== "") {
    // si el foco es diferente de vacio activa el elemento
    document.getElementById(foco).focus();
  }
  Swal.fire({
    title: mensaje,
    icon: icono,
    customClass: { confirmButton: "btn btn-primary", popup: "animated zooIn" },
    buttonsStyling: false,
  });
}

export function confirmar(id, nombre) {
  var url = "https://hamburguesas-back.elevadev.cl/burger/"+id;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success me-3",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Seguro desea eliminar la hamburguesa " + nombre,
      text: "Se perdera la información de la hamburguesa.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-check"></i> Sí, eliminar.',
      cancelButtonText: '<i class="fa-solid fa-ban"></i> No, cancelar.',
    })
    .then((ressult)=>{
      if (ressult.isConfirmed) {
        enviarSolicitud("DELETE",{ id: id },url, "Hamburguesa eliminada.");
        
      } else {
        mostrar_alerta("Operacion cancelada", "info");
      }
    });
}

export function enviarSolicitud(metodo, parametros, url, mensaje){
  axios({ method: metodo, url: url, data: parametros })
    .then((respuesta) => {
      var status = respuesta.data[0]["status"];
      if (status === "success") {
        mostrar_alerta(mensaje, status);
        window.setTimeout(function () {
          window.location.href = "/";
        }, 1000);
      } else {
        var listado = "";
        var errores = respuesta.data[1]["errors"];
        Object.keys(errores).forEach(
          (key) => (listado += errores[key][0] + ".")
        );
        mostrar_alerta(listado, "error");
      }
    }).catch(function (error) {
      show_alerta("Error en la solicitud", "error");
    });
}
