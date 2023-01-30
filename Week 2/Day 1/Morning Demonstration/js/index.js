function changeBoxColor( element, colorName ){
    console.log( element, colorName );
    
    var box = document.querySelector( ".box" );
    box.style.backgroundColor = colorName;

}

function addTextToLog( element ){
    var text = element.innerText;
    var log = document.querySelector( ".log" );
    log.innerHTML += `<p> ${text} </p>`;
    // log.innerHTMl += "<p>" + text + "</p>";
}

function toggleCatImage( element ){
    var catImage = document.querySelector( ".catImage" );
    console.log( catImage.classList );
    catImage.classList.toggle( "hideImage" );
    /*
    if( catImage.classList.contains( "hideImage" ) ){
        catImage.classList.remove( "hideImage" );
    }
    else{
        catImage.classList.add( "hideImage" );
    }
    */

}

function removeImageAndButton( element ){
    var hideShowButton = document.querySelector( "#hideShow" );
    var catImage = document.querySelector( ".catImage" );
    hideShowButton.remove();
    catImage.remove();
    // Disable the button now!
    element.disabled = true;
}