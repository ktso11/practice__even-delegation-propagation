console.log("hello world");

$(document).ready(function(){

  var parent = document.querySelector('.btn-test');
  var child = document.querySelector('#child');
  var container = document.getElementsByClassName('container')
  var createBtn = document.querySelector('.create-btn')
  var btnDiv = document.querySelector('.btn-test')

// Event Delegation Example
  createBtn.addEventListener('click', insertBtn, false)

  function insertBtn(){
    var newDiv = document.createElement('Button')
    newDiv.innerHTML = "I am a new button"
    newDiv.setAttribute('class', 'btn')
    btnDiv.appendChild(newDiv)
  }
  //Even Delegation
  parent.addEventListener('click', function(event) {
    console.log(event.target)
    if(event.target.className==='btn'){
      alert('You clicked me!');
    }
  });






// Testing Event Capturing and Bubbling

  for(i=0; i<container.length; i++){
    //by default, true as the last parameter means capturing phase first
    container[i].addEventListener('click', clickedEvent, true)
    //false, will revert to bubbling phase -notify after the targetting phase
    // container[i].addEventListener('click', clickedEvent, false)
    // container[i].addEventListener('click', showAlert)
  }

function clickedEvent(e){
    var phase = e.eventPhase;
    //to stop bubbling up to parent node
    // e.stopPropagation();
    if(1=== phase){
      phase = 'capturing'
    } else if ( 2===phase){
      phase = 'at target'
    } else if (3 == phase){
      phase = 'bubbling'
    }
    console.log('container: '+this.id+ ' - ' + phase)
  };

});
