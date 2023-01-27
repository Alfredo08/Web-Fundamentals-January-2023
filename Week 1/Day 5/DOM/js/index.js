
function displayHello( titleElement ){
    console.log( "Hello there from the terminal in the dev tools" );
    alert( "Hello there from the terminal in the dev tools" );
}

function selectThumbnail( element ){
    var thumbnailSRC = element.getAttribute( "src" );
    var thumbnailALT = element.getAttribute( "alt" );
    var mainImage = document.querySelector( ".mainImage" );
    mainImage.setAttribute( "alt", thumbnailALT );
    mainImage.setAttribute( "src", thumbnailSRC );
}

function addTitleToResultDiv( titleElement ){
    var titleText = titleElement.innerText;
    var resultDiv = document.querySelector( "#result" );
    //resultDiv.innerHTML += "<p>" + titleText + "</p>";
    resultDiv.innerHTML += `<p class="message"> ${titleText} </p>`;
}


