function generateFizzBuzzSequence( event ){
    event.preventDefault();
    
    var numberChoice = document.querySelector( "#numberChoice" ).value;
    var numberInSequence = Number(numberChoice);
    var fizzBuzzContainer = document.querySelector( ".fizzBuzzSequence" );
    fizzBuzzContainer.innerHTML = "";
    
    for( var i = 1; i <= numberInSequence; i ++ ){
        if( i % 3 === 0 && i % 5 === 0 ){
            fizzBuzzContainer.innerHTML += 
                `<div class="fizzBuzzItem">
                    fizzbuzz
                </div>`;
        }
        else{
            if( i % 3 === 0 ){
                fizzBuzzContainer.innerHTML += 
                `<div class="fizzBuzzItem fizz">
                    fizz
                </div>`;
            }
            else{
                if( i % 5 === 0 ){
                    fizzBuzzContainer.innerHTML += 
                    `<div class="fizzBuzzItem buzz">
                        buzz
                    </div>`;
                }
                else{
                    fizzBuzzContainer.innerHTML += 
                    `<div class="fizzBuzzItem">
                        ${i}
                    </div>`;
                }
            }
        }
    }
}