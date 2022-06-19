$(document).ready(function(){
$("#form-madL").submit(function(event) {
    const boyname1 = $("#boy-name").val();
    const number1 = $("#num-111").val();
    const charity1 = $("#charity").val();
    const thing1 = $("#a-thing").val();
    const another1 = $("#another-thing").val();
    const morething1 = $("#more-thing").val();

    $(".boy-name").text(boyname1);
    $(".num-111").text(number1);
    $(".charity").text(charity1);
    $(".a-thing").text(thing1);
    $(".another-thing").text(another1);
    $(".more-thing").text(morething1);

    $("#madlips-story").show();

    event.preventDefault();


})







})