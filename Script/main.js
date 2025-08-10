let result = '';
            let scorering = {
                wins:0,
                losses:0,
                ties:0
            } 


            function pickComputerMove(){
            const randomNumber = Math.random();
            let copmputerMove='';
            
            

            if(randomNumber >= 0 && randomNumber < 1/3){
                copmputerMove = 'Rock';
            }
            else if(randomNumber >= 1/3 && randomNumber < 2/3){
                copmputerMove = 'Paper';
            }
            else if(randomNumber >= 2/3 && randomNumber < 1)
            {
                copmputerMove = 'Scissors';
            }
            return copmputerMove;
        }

        function playgame(playerMove){
            const copmputerMove = pickComputerMove();
            console.log(copmputerMove);
            

            if(playerMove === 'Scissors'){
                if(copmputerMove === 'Rock'){
                    document.getElementById('copmuterchoose').innerText = 'we choose '+ copmputerMove;
                    result = 'You Lose';
                }else if(copmputerMove === 'Paper'){
                    document.getElementById('copmuterchoose').innerText = 'we choose '+ copmputerMove;
                    result = 'You Win';
                }
                else if(copmputerMove === 'Scissors'){
                    document.getElementById('copmuterchoose').innerText = 'we choose '+ copmputerMove;
                    result ='You Tie';
                }
            }else if(playerMove === 'Paper'){
                if(copmputerMove === 'Rock'){
                    document.getElementById('copmuterchoose').innerText = 'we choose '+ copmputerMove;
                    result = 'You Win';
                }else if(copmputerMove === 'Paper'){
                    document.getElementById('copmuterchoose').innerText = 'we choose '+ copmputerMove;
                    result ='You Tie';
                }
                else if(copmputerMove === 'Scissors'){
                    document.getElementById('copmuterchoose').innerText = 'we choose '+ copmputerMove;
                    result = 'You Lose';
                }
            }else if(playerMove === 'Rock'){
                if(copmputerMove === 'Rock'){
                    document.getElementById('copmuterchoose').innerText = 'we choose '+ copmputerMove;
                    result ='You Tie';
                    

                }else if(copmputerMove === 'Paper'){
                    document.getElementById('copmuterchoose').innerText = 'we choose '+ copmputerMove;
                    result = 'You Lose';
                    
                }
                else if(copmputerMove === 'Scissors'){
                    document.getElementById('copmuterchoose').innerText = 'we choose '+ copmputerMove;
                    result = 'You Win';
                    
            }
            }
            if(result === 'You Win'){
                scorering.wins +=1;
            }else if(result === 'You Lose'){
                scorering.losses +=1;
            }else if(result === 'You Tie'){
                scorering.ties +=1;
            }
            
            

            let initialScore  = 'Win: '+ scorering.wins +' Loses: '+ scorering.losses + ' Ties: '+scorering.ties;
            document.getElementById('result').innerText = result;
            document.getElementById('score').innerText = initialScore;
        }

        function resetButton(){
            scorering = {
                wins:0,
                losses:0,
                ties:0
            };
            
             let scoreText  = 'Win: '+ scorering.wins +' Loses: '+ scorering.losses + ' Ties: '+scorering.ties;
            
            result = 'Lets play again.';
            document.getElementById('result').innerText = result; 
            document.getElementById('score').innerText = scoreText;
        }