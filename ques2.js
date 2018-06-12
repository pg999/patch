var hello = {
    x:1,
    y:2
};
function addValue(){
    var x = hello.x;
    var y = hello.y;
    return x+y;
}

function add(options,callback){
    callback(options.x,options.y);
}
var add = new Promise(
    function (resolve, reject) {
        if(1){
            var result = addValue();
            resolve(result);
        }
        else{
            var error = new Error("Error");
            reject(error);
        }
    }
);
var test = function () {
    add
        .then(function (result) {
            console.log(result);
        })
        .catch(function (error) {
            console.log(error.message);
        });
};

test();
