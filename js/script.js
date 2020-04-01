$(document).ready(function(){
   
    $("#form").submit(function(event){
        event.preventDefault();
        var truthy = "true";
        var falsey = "false"
    


        var input = parseInt($("#input").val());
        console.log(input);

        if ((input % 4 == 0) || (input % 400 == 0)){
            console.log("true")
            $("#result").text(truthy)



        }else{
            console.log("false");
            $("#result").text(falsey)
        }





    })














})