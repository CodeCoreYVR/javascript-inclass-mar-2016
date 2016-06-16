var p = new Promise(function(resolve, reject){
  var number = Math.floor(Math.random() * 100);
  if(number > 50) {
    resolve();
  } else {
    reject();
  }
});

p.
then(function(){
  console.log("SUCCESS");
}).
catch(function(){
  console.log("FAILIURE");
});
