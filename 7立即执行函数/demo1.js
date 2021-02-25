function makecount(){
    var count = 0;
    return function(){
        console.log(count++);
    };
}

var counter1 = makecount();
counter1();
counter1();
counter1();

var counter2 = makecount();
counter2();
counter2();
counter2();