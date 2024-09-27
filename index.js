var dic1 = null;
var dic2 = null;
function Roll() {
    dic1 = Math.floor(Math.random() * 6 + 1);
    dic2 = Math.floor(Math.random() * 6 + 1);

    var urlDic1 = "./image/dicce" + dic1 +".png";
    var urlDic2 = "./image/dicce" + dic2 +".png";

    document.getElementById('image1').src = urlDic1 ;
    document.getElementById('image2').src = urlDic2 ; 
   
}    
function Move(){
    var robot1 = document.getElementById('robot1');
    var robot2 = document.getElementById('robot2');

    position1 = parseInt(robot1.style.top)||0;
    position2 = parseInt(robot2.style.top)||0;
    if (dic1 > dic2){
        
        document.getElementById('move').innerHTML = "Player 1 Move!";
        position1 +=50;
        robot1.style.top = position1 + "px";
        
    } else if (dic1 < dic2){
        document.getElementById('move').innerHTML = 'Player 2 Move!';
        position2 += 50;
        robot2.style.top = position2 +'px'
       
    } else{
        document.getElementById('move').innerHTML = "It's A Tie!"
    }
    if (position1>=450 || position2>=450){
        if (position1>=450){
            document.getElementsByTagName('h1')[0].innerHTML='PLAYER 1 WINS';
        } else if (position2>=450){
            document.getElementsByTagName('h1')[0].innerHTML='PLAYER 2 WINS';
        }
        document.getElementById('move').disabled=true;
        document.getElementById('button').disabled=true;
    }
    dic1 = null;
    dic2 = null;
}


var button = document.getElementById('button');
button.addEventListener("click",Roll);
var move = document.getElementById('move');
move.addEventListener('click',Move);