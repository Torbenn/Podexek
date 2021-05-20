
function welcomeAppear(elemento) {
  elemento.innerHTML = "Consulte o pokemon inserindo seu número";
}

function welcomeDisapear(elemento) {
  elemento.innerHTML = "qual é esse pokemon? ";
}

function consultarPoke() {
  var pokeNum = document.getElementById("poke").value;
  var url = "https:pokeapi.co/api/v2/pokemon/" + pokeNum + "/";

  

  $.ajax({
    url: url,
    type: 'GET',
    dataType: "json",
    contentType: "application/json",
    success: function(response){
      console.log(response);
      $("#pokemon").html(response.name);
      $("#sprite").html('<img src="' + response.sprites.front_default + '">');
      
      
      for(var i in response.abilities){
        console.log(response.abilities[i].ability.name);
        $("#atks").html(response.abilities[i].ability.name);

      }
    }
  })
}

