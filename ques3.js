var hello = {
    x:1,
    y:2
};

function addValue(x,y) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x+y);
    }, 2000);
  });
}

async function test() {
  var x = await addValue(hello.x,hello.y);
  console.log(x); // 10
}
test();
