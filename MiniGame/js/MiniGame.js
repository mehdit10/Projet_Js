    // Recuperation des element "Player" et "Block"
var Player = document.getElementById("Player");
var Block = document.getElementById("Block");
//Compteur
var counter=0;

    // Systeme de saut
function jump(){
    if(Player.classList == "animate"){return}
    Player.classList.add("animate");
    setTimeout(function(){
        Player.classList.remove("animate");
    },300);
}
    // Detection de "Game Over"
    var checkDead = setInterval(function() {
    let PlayerTop = parseInt(window.getComputedStyle(Player).getPropertyValue("top"));
    let BlockLeft = parseInt(window.getComputedStyle(Block).getPropertyValue("left"));
    
    
    if(BlockLeft<20 && BlockLeft>-20 && PlayerTop>=130){
        Block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        Block.style.animation = "Block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);