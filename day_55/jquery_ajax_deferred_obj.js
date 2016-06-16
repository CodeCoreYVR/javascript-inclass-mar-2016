$.ajax({
  url: "/questions.json"
}).
done(function(data){
  console.log(data);
}).
fail(function(){
  alert("failure");
} );
