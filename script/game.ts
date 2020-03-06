
function game(): void
{
   
   const play: boolean = confirm("Do you want to play ?")
   
    if (play===true)
    {
       
       let numberRandom: number = Math.floor(Math.random() * (100-1))
       let numberChoice: number = 0
       let nbShot: number = 1
       
       while(numberChoice!==numberRandom)
       {
            numberChoice = Number(prompt('type a number between one and one hundred'))
          
            if(numberChoice>numberRandom && numberChoice<=100)
            {
                alert('try lower ')
                nbShot += 1
            }
            else if(numberChoice<numberRandom && numberChoice>=1)
            {
                alert('try higher ')
                nbShot += 1
            }
            else if(numberChoice >= 1 && numberChoice!==numberRandom || numberChoice <= 100 && numberChoice!==numberRandom)
            {
                alert('the number must be between one and one hundred')
            }
            else if(isNaN(numberChoice))
            {
                alert('type not letter')
            }
            else
            {
                alert('win in '+nbShot+' shots ')
                const replay: boolean = confirm('Do want to replay ?')
                
                if(replay===true)
                {
                    numberChoice = 0
                    numberRandom = Math.floor(Math.random() * (100 - 1 ))
                }
               
            }
       }

   }
   else
   {
        alert('by by')
    }
}
