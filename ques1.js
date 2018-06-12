
var hello = {
    x:1,
    y:2
};

function test(x,y){
    console.log(x+y);
    return x+y;
}

function add(options,callback){
    callback(options.x,options.y);
}
add(hello,test);
