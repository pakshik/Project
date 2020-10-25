let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let button = document.getElementById('button1')
let btncli = false
let value = ['😍' , '😍','😁','😊','🤣','😒','😘','😉','😎'] ; 

function getRandomValue()
{
   return  parseInt(Math.floor(Math.random()*8));   
}

var id = setInterval(()=>{
    if(btncli)
      { result(); return;}     
  value1.innerText = value[getRandomValue()];
  value2.innerText = value[getRandomValue()];
  value3.innerText = value[getRandomValue()];
},1000)

function print(ans)
{
    if(ans ===  true )
       alert('Game Won ');
    else 
       alert('Game Loss ') ;  
}
function result() 
{
    clearInterval(id);  
  if(value1.innerText == value2.innerText && value2.innerText == value3.innerText )
     { print(true)  }
   else 
     {print(false) ;} 
}
button.onclick = function() {
     document.documentElement.style.setProperty('--speed' , 0 );
           btncli = true ; 
    // var num = 4 ; 
    // interval();
    //    function interval()
    //    {
    //        console.log(num); 
    //      setTimeout(()=>{
    //         document.documentElement.style.setProperty('--speed' , num ); 
    //      },1000);  
    //      num-- ; 
    //     if(num == -1 )  
    //      btncli = true ;
    //     else 
    //      interval(); 
    //    }   
}
