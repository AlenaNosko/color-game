var squares = document.querySelectorAll(".square");
var rgbColor = document.querySelector("#colorRGB");
var h1BG = document.querySelector("h1");
var reset = document.querySelector("button");
var modeButtons = document.querySelectorAll(".mode");
var color;
var numOfSquares = 6;

resetGame();

// filling squares with new random colors and reset the game
  reset.addEventListener("click", function(){
    resetGame();
  });

// Finding right color in squares
for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor === color){
            document.querySelector("#message").textContent = "Correct!";
            h1BG.style.backgroundColor = color;
            reset.textContent = "PLAY AGAIN?";
            for(var j = 0; j < squares.length; j++){
                squares[j].style.backgroundColor = color;
            }
        } else {
            this.style.backgroundColor = "#232323";
            document.querySelector("#message").textContent = "Try again!";
        }
    });
}

// Choosing mode: easy or Hard
for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
       resetGame();
});
}


// functions section
//**************************************************************** */

// 
function resetGame(){
    resetColors();
    modeButtons[0].classList.contains("selected") ? numOfSquares = 3 :  numOfSquares = 6;
    for(var i = 0; i < numOfSquares; i++){
        squares[i].style.display = "inline-block";
    }
    pickColor(numOfSquares);
    h1BG.style.background = "steelblue";
    document.querySelector("#message").textContent = "";
    reset.textContent = "NEW COLORS";
}

// randomly change squares colors and reset the game
function resetColors(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = randomRGB();
        squares[i].style.display = "none";
    }
    
}

// randomly choosing one color from squares and display it in above
function pickColor(n){
    var randomNumber = Math.floor((Math.random() * n)+1);
    console.log(randomNumber);
    color = squares[randomNumber-1].style.backgroundColor;
    rgbColor.textContent = color.toUpperCase();
}

// pick one random color
function randomRGB(){
    return "rgb(" + Math.round(Math.random()*255) + ", " +  Math.round(Math.random()*255) + ", " +  Math.round(Math.random()*255) + ")";
}

