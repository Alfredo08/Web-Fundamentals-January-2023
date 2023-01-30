
var pet = {
    name : "Max",
    age : 6,
    owner : "Roger",
    vaccionationHistory : [ "10/20/2019", "08/16/2020", "09/23/2021" ],
    displayInformation : function(){
        console.log( "Pet name:", pet.name );
        console.log( "Pet age:", this.age );
        console.log( "Pet owner:", this.owner );
        console.log( "Vacation History" );
        console.log( this.vaccionationHistory );
        console.log( this.vaccionationHistory.join( " - " ) );
        for( var i = 0; i < this.vaccionationHistory.length; i ++ ){
            console.log( this.vaccionationHistory[i] );
        }
    }
};

console.log( pet.name );
pet.displayInformation();
