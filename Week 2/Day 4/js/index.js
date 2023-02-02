
async function fetchDogs( num ){
    var url = `https://dog.ceo/api/breeds/image/random/${num}`;
    var settings = {
        method : "GET"
    };

    var response = await fetch( url, settings );
    var data = await response.json();
    console.log( response );
    console.log( data );
    var results = document.querySelector( ".results" );
    results.innerHTML = "";
    for( var i = 0; i < data.message.length; i ++ ){
        results.innerHTML += `
            <div class="item">
                <img src="${data.message[i]}" alt="Random dog image" >
            </div>
        `;
    }

    console.log( "This will print second" );
}


function getDogImages( event ){
    event.preventDefault();
    var num = document.querySelector( "#numberOfImages" ).value;
    fetchDogs( num );
    console.log( "This will print first!" );
}