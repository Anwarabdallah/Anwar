/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores , roundScores ,activePlayer , gamePlaying;

init();



document.querySelector('.btn-roll').addEventListener('click', function(){
 if (gamePlaying){
      // random number
    var dice = Math.floor(Math.random() *6) +1 ;
    
    // display the result
    var diceDom = document.querySelector('.dice');
    
    diceDom.style.display= 'block';
    diceDom.src = 'dice-'+dice+ '.png';
    
    // add the result if the number is greater than 1 
    
    if( dice !==1){
        // add the sum
        roundScores += dice;
        document.querySelector('#current-' +activePlayer).textContent= roundScores;
        
    }
    else{
        //next player
        nextplayer();
        
//        // the next player
//        activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
//        roundScores= 0;
//        //make the current score =0
//        document.getElementById('current-1').textContent='0';
//        document.getElementById('current-0').textContent='0';
//        
//        //toggle the active case
//        document.querySelector('.player-0-panel').classList.toggle('active');
//        document.querySelector('.player-1-panel').classList.toggle('active');
//        
//        //hide the dice
//        document.querySelector('.dice').style.display='none';
        
    }

     
 }                                                    
   

})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying){
      
          // add current score to the global score
    
    scores [activePlayer] += roundScores;
    // update the user inerface
    document.getElementById('score-'+activePlayer).textContent= scores[activePlayer];
    

    
    // check if he won the game
    if (scores[activePlayer] >= 100 ){
        document.getElementById('name-'+activePlayer).textContent= 'Winner';
        document.querySelector('.dice').style.display= 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }
    else{
          
    //next player
        nextplayer();
}
    }
  
})



function nextplayer(){
    
    // the next player
        activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
        roundScores= 0;
        //make the current score =0
        document.getElementById('current-1').textContent='0';
        document.getElementById('current-0').textContent='0';
        
        //toggle the active case
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //hide the dice
        document.querySelector('.dice').style.display='none';
        
}

function init(){
    
    scores= [0,0];
    roundScores= 0;
    activePlayer=0;  
    document.getElementById('score-0').textContent= '0';
    document.getElementById('current-0').textContent= '0';
    document.getElementById('score-1').textContent= '0';
    document.getElementById('current-1').textContent= '0';
    
    document.querySelector('.dice').style.display='none';
    
     document.getElementById('name-0').textContent= 'Player 1';
     document.getElementById('name-1').textContent= 'Player 2';
    
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    
    gamePlaying=true;
}

document.querySelector('.btn-new').addEventListener('click', init);





















