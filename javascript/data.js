$(document).ready(function() {
  $('#submitInfo').click(function() {

    //obtener valor datalist
    //var destino = document.getElementById("destino").value;
    //alert(cod);
    var destino = "CDMX";
    /* Para obtener el texto */
    /* var combo = document.getElementById("producto");
    var selected = combo.options[combo.selectedIndex].text;
    alert(selected);*/

    //var hotel = $("#check_hotel:checked").val();
    var hotel = true;
    //var auto = $("check_auto:checked").val();
    var auto=true;
    /*
    let redondo = $('input[name="rd_redondo"]:checked').val();

    var fecha_ida = document.getElementById("fecha_ida").value;
    var fecha_regreso = document.getElementById("fecha_regreso").value;
*/
    if (destino!="") {
      $.ajax({
        url: 'json/vuelos.json',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            var widget = showVuelos(data);
            $("#showVuelos").html(widget);
        }
      });
      if (auto==true) {
        $.ajax({
          url: 'json/autos.json',
          type: 'GET',
          dataType: 'json',
          success: function(data){
              var widget = showAutos(data);
              $("#showAutos").html(widget);
          }
        });
      }
      if (hotel==true) {
        $.ajax({
          url: 'json/hoteles.json',
          type: 'GET',
          dataType: 'json',
          success: function(data){
              var widget = showHoteles(data);
              $("#showHoteles").html(widget);
          }
        });
      }
    }
  })
});

function showHoteles(data) {

  var key, count = 0;

  for (key in data.hoteles) {
    if (data.hoteles.hasOwnProperty(key)) {
      return "<h3 style='font-size:32px; font-weight: bold;' class='text-center'>Hoteles</h3>" +
        "<h3><strong>Nombre</strong>: " + data.hoteles[count].Nombre + "</h3>" +
        "<h3><strong>Estrellas</strong>: " + data.hoteles[count].Estrellas + "</h3>" +
        "<h3><strong>Lugar</strong>: " + data.hoteles[count].Lugar + "&deg;C</h3>" +
        "<h3><strong>Precio</strong>: " + data.hoteles[count].Precio + "</h3>";
      count++;
    }
  }

}

function showVuelos(data) {

  var key, count = 0;

  for (key in data.vuelos) {
    if (data.vuelos.hasOwnProperty(key)) {
      return "<h3 style='font-size:32px; font-weight: bold;' class='text-center'>Vuelos</h3>" +
        "<h3><strong>Aerolinea</strong>: " + data.vuelos[count].Nombre + "</h3>" +
        "<h3><strong>Destino</strong>: " + data.vuelos[count].Destino + "</h3>" +
        "<h3><strong>Precio</strong>: " + data.vuelos[count].Precio + "&deg;C</h3>" +
        "<h3><strong>Fecha de salida</strong>: " + data.vuelos[count].Fecha_ida + "&deg;C</h3>" +
        "<h3><strong>Escalas</strong>: " + data.vuelos[count].Escalas + "</h3>";
      count++;
    }
  }
}

function showAutos(data) {

  var key, count = 0;

  for (key in data.autos) {
    if (data.autos.hasOwnProperty(key)) {
      return "<h3 style='font-size:32px; font-weight: bold;' class='text-center'>autos</h3>" +
        "<h3><strong>Agencia</strong>: " + data.autos[count].Agencia + "</h3>" +
        "<h3><strong>Lugar</strong>: " + data.autos[count].Lugar + "</h3>" +
        "<h3><strong>Marca</strong>: " + data.autos[count].Marca + "&deg;C</h3>" +
        "<h3><strong>Modelo</strong>: " + data.autos[count].Modelo + "&deg;C</h3>" +
        "<h3><strong>Transmision</strong>: " + data.autos[count].Transmision + "&deg;C</h3>" +
        "<h3><strong>Precio</strong>: " + data.autos[count].Precio + "</h3>";
      count++;
    }
  }
}
