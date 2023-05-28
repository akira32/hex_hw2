
function myMove(elem,late)
{
  let id = null;
  let countdown = 0;
  let startRun = false;
  let downMove = true;

  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() 
  {
    if (startRun == false)
    {
      if (countdown >= late)
      {
        pos = 0;
        startRun = true;
        countdown = 0;
      }
      else
      {
        countdown++;
      }
    }
    else if (startRun == true)
    {
      if (downMove == false)
      {
        pos--;
        
        if (pos < 0)
        {
          downMove = true;
        }
        elem.style.top = pos + "px";
        //console.log('up' + pos.toString());
      } 
      else if (downMove == true)
      {
        pos++; 
        
        if (pos >= 160)
        {
          downMove = false;          
        }  
        elem.style.top = pos + "px";
        //console.log('down' + pos.toString());
      }
      
      
    }
  }
}

$(document).ready(function() {
    $('#scrollToTop').click(function() {
      $('html,body').animate({scrollTop:0}, 'slow');
    });

    $('#arrow1').click(function(){
      let elem1 = document.querySelector("#arrow1");
      let pos = 1;
      elem1.style.top = pos;
      alert(elem1.style.top);
    });
  
    let elem1 = document.querySelector("#arrow1");
    let elem2 = document.querySelector("#arrow2");
    let elem3 = document.querySelector("#arrow3");

    myMove(elem1, 0);
    myMove(elem2, 30);
    myMove(elem3, 60);

  });



  
