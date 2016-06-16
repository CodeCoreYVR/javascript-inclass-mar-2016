// 1. Select all the links with any "href" attribute
// 2. Select all the links to "http://www.facebook.com"
// 3. Highlight all the links to any ".com" URL by setting their class
// to "highlight".
// 4. Hide all the links NOT to "http://www.google.com"

$("[href]");

$("[href='http://www.facebook.com']");

$("[href*='.com']").addClass('highlight');

$("a[href!='http://www.google.com']");

a span {
  color: red;
}

// 1. Select the first table row
// 2. Select the last table row
// 3. Remove the even-numbered shapes from the green container
// 4. Highlight the odd rows on the table
// 5. Hide the last shape in every container

$("tr:first-child");

$("tr:last-child");

$("#green-container :even").remove();

$("tr:odd").addClass("highlight");

$(".container .shape:last-child").hide();

// 1. Add the "highlight" class to all links
// 2. Remove the "highlight" class from all links
// 3. Toggle the "highlight" class on all links. Toggle again.
// 4. Add the "my-own-class" class to the "body" element. Then
// verify it is there using "hasClass".
// 5. When any container is clicked, add the "highlight" class to
// all the shapes in that container.

$("a[href]").addClass("highlight");

$("a[href]").removeClass("highlight");

$("a[href]").toggleClass("highlight");

$("body").addClass("my-own-class");
$("body").hasClass("my-own-class");

$(".container").on("click", function(){
  $(this).find(".shape").addClass("highlight");
});
$(".container").on("click", function(){
  $(".shape", this).addClass("highlight");
});

// 1. Change the colour of all blue shapes to red, using one line of code.
// 2. Change all the small red circles into large grey squares, using one line of code.
$(".blue.shape").removeClass("blue").addClass("red");

$(".small.red.circle").removeClass("small").removeClass("red").removeClass("cirlce").addClass("large").addClass("square").addClass("grey");

$(".small.red.circle").toggleClass("small circle red large square blue");

// 1. Set the value of the text field in the form to "Hello World"
// 2. Get the value of the text field in the form
// 3. When the form's "Submit" button is clicked, change the contents of "Form Message" to be the text field's value.
$("input[type='text']").val("Hello World");

$("input[type='text']").val();
$("input:text").val();

$("input[type='submit']").click(function(){
  $("#form-message").text($("input[type='text']").val());
});

// 1. Append a "p" tag containing "Appended" to the "body" element.
// 2. Prepend a "p" tag containing "Prepended" to the "body" tag.
// 3. Append a new list item to the List, containing a link to link Amazon.com.
$("body").append("<p>Appended</p>");

$("body").prepend("<p>Prepended</p>");

$("ul").append("<li><a href='http://amazon.com'>Amazon.com</a></li>");

$("#button-3").fadeOut(5000, function(){
  $(this).css("display", "inline").css("opacity", 0)
});

// 1. Toggle the green container.
// 2. Toggle the green container again.
// 3. Fade the green container out.
// 4. Fade the green container in.
// 5. Slide the green container up.
// 6. Slide the green container down.
$("#green-container").toggle();

$("#green-container").toggle();

$("#green-container").fadeOut(5000);

$("#green-container").fadeIn(5000);

$("#green-container").slideUp(2000);

$("#green-container").slideDown(2000);

// 1. When the 'b' key is pressed, toggle all (b)lue shapes.
// 2. When the 'r' key is pressed, toggle all (r)ed shapes.
// 3. When the 'k' key is pressed, toggle all blac(k) shapes.

$(document).on("keypress", function(event){
  var key = String.fromCharCode(event.which);
  if( key === 'r') {
    $(".red").toggle();
  }
});
// $("input[type='text']").on("keyup", function(){
//   console.log($(this).val());
// });


$('form').on('submit', function() {
  console.log($("input[type='text']").val());
});

// Experiment
// 1. When a black square is clicked log "Black Square Clicked" to the console.
// 2. When the orange container is clicked log "Orange Container Clicked"
// 3. Click the black square in the orange container.
// 4. What happened? Why?

$(".black.square").on("click", function(event){
  event.stopPropagation();
  console.log("Black Square Clicked");
});

$("#orange-container").on("click", function(event){
  // console.log(event.target);
  console.log("Orange Container Clicked");
});

// $("#orange-container .shape").on("click", function(){
//   console.log($(this).attr('class'));
// });

// Experiment
// 1. When a link is clicked, log to the console "Link Clicked"
// 2. What happens when you click a link? Why?
$("a[href]").on("click", function(event){
  event.preventDefault();
  console.log("Link clicked");
});

// Experiment
// 1. When a shape is clicked, output "shape clicked" in the console.
// 2. Add a new shape using the console.
// 3. Try clicking the new shape.
$(".shape").on("click", function(){
  console.log("Shape Clicked");
});

$('.container').on('click', '.shape', function() {
  console.log("Shape clicked");
});
