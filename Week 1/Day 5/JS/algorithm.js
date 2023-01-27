function reverse(arr) {
    /*
    for(var i = 0; i < arr.length/2; i++) {
        var first = i
        var last = arr.length-1-i
        var temp = arr[first]
        arr[first] = arr[last]
        arr[last] = temp
    }*/
    var i = 0;
    while( i < arr.length/2 ){
        var first = i
        var last = arr.length-1-i
        var temp = arr[first]
        arr[first] = arr[last]
        arr[last] = temp
        i++;
    }

    return arr;
}

var reverseThis = reverse(["a", "b", "c", "d", "e", "f", "g"])
console.log(reverseThis)