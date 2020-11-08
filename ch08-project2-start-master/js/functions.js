/* add in your functions here */

function outputCountryBox(name, continent, cities, photos) 
{

    function outputCities() {
         for (var i=0;i<cities.length; i++)
         {
             var city =cities[i];
            document.write("<li>"+city+"</li>");
         }        
    }

    function outputPhotos() {

        for (var i=0;i<photos.length;i++)
        {
            var photo= photos[i];
            document.write("<img src='images/"+photo+"' class='photo'>");
        }
    }

    document.write("<div class='item'>"+
    "<h2>"+name+"</h2>"+
    "<p>"+continent+"</p>"+
    "<div class='inner-box'>"+
    "<h3>Cities</h3><ul>");
    outputCities();
    document.write("</ul></div><div class='inner-box'><h3>Popular Photos</h3>");
    outputPhotos();
    document.write("</div><button>Visit</button></div>");
}
