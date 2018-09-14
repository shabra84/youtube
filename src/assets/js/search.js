// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyAdME3grRcvvaLNYJun7N4FpHUkcbLb0WE');
}
 
// Called when the search button is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:query
    });
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
    
    
    var html = "";
    
    for(var i=0;i<response.items.length;i++){     
        html = html 
                + "<div><a href='//82.223.15.193/convertidor/temporal/"+response.items[i].snippet.title.replace(" - ","_-_")+".mp3'>" 
                + response.items[i].snippet.title 
                + "</a></div></br></br>";
    }
    
    //asigna el resultado de la busqueda
    document.getElementById('resultado').innerHTML = html;
    
}


function crearMusica(){
        
        //nombre de la canción
        var musica = document.getElementById("query").value;
    
        // Definimos la URL que vamos a solicitar via Ajax
        var ajax_url = "http://82.223.15.193/convertidor/convertir.php";

        // Definimos los parámetros que vamos a enviar
        var params = "musica="+musica;

        // Creamos un nuevo objeto encargado de la comunicación
        var ajax_request = new XMLHttpRequest();

        // Definimos como queremos realizar la comunicación
        ajax_request.open( "POST", ajax_url, true );
        // Ponemos las cabeceras de la solicitud como si fuera un formulario, necesario si se utiliza POST
        ajax_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //Enviamos la solicitud junto con los parámetros
        ajax_request.send( params );
    
}