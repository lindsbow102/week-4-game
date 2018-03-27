// $(document).ready(function () {

//variables 
var wins = 0;
var lost = 0;
var score = 0;


//taking random number from the computer 
var random = parseInt(Math.floor(Math.random() * 101) + 19);
$("#randomNumber").html(random);

//converting the random string into int
var stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone4 = parseInt(Math.floor(Math.random() * 12) + 1);


//Test display
console.log("randomNumber: " + random);
console.log("stone1: " + stone1);
console.log("stone2: " + stone2);
console.log("stone3: " + stone3);
console.log("stone4: " + stone4);
console.log("***");

//function to reset the game if the user loses or wins
function reset() {
    score = 0;
    $("#score").html("Your total score is: " + score);
    random = parseInt(Math.floor(Math.random() * 101) + 19);
    $("#random-number").html(random);
    stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone4 = parseInt(Math.floor(Math.random() * 12) + 1);
    console.log("randomNumber: " + random);
    console.log("stone1: " + stone1);
    console.log("stone2: " + stone2);
    console.log("stone3: " + stone3);
    console.log("stone4: " + stone4);
    console.log("***");
}


$(document).ready(function () {
    //onclick event for the images
    $(".image").on("click", function () {
        // i = ($(this));
        if ($(this).attr("class") === "image") {
            if ($(this).attr("id") === "image1") {
                score = parseInt(score) + parseInt(stone1);
            }
            if ($(this).attr("id") === "image2") {
                score = parseInt(score) + parseInt(stone2);
            }
            if ($(this).attr("id") === "image3") {
                score = parseInt(score) + parseInt(stone3);
            }
            if ($(this).attr("id") === "image4") {
                score = parseInt(score) + parseInt(stone4);
            }

        }
        console.log(score);
        $("#score").html("Your total score is: " + score);
        $("#random-number").html(random);

        //increase the win or lost counter by 1 depending on the result
        if (score === random) {
            wins++;
            console.log("You win : " + wins);
            alert("Great job!  You win");
            $("#wins").html("Won: " + wins);
            reset();

        } else if (score > random) {
            lost++;
            console.log("lost: " + lost);
            alert("You exceeded the computer's number. Try again!");
            $("#losses").html("Lost: " + lost);
            reset();
        }
    })

    reset();
})
// });
