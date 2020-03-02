



var nameClass = ['block_0','block_1','block_2','block_3','block_4']
var sizefigure = [50,100,25,40,15];



function bubbleSort(array) {

  let swapp;

  do {
    swapp = false;
    
    array.forEach((elements, i) => {
   
      if (elements > array[i + 1]) {
        // Save the value to a variable so we don't lose it
        let temp = elements;
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapp = true;
      }

    })
  } while (swapp);

 sizefigure= array;
 $('.block_0').css({'width': sizefigure[0] + 'px', 'height': sizefigure[0]+ 'px'});
			$('.block_1').css({'width': sizefigure[1] + 'px', 'height': sizefigure[1]+ 'px'});
			$('.block_2').css({'width': sizefigure[2] + 'px', 'height': sizefigure[2]+ 'px'});
			$('.block_3').css({'width': sizefigure[3] + 'px', 'height': sizefigure[3]+ 'px'});
			$('.block_4').css({'width': sizefigure[4] + 'px', 'height': sizefigure[4]+ 'px'});

}


	for(let i=0;i< nameClass.length;++i){
		let block = document.getElementsByClassName(nameClass[i]).css;
			$('.block_0').css({'width': sizefigure[0] + 'px', 'height': sizefigure[0]+ 'px'});
			$('.block_1').css({'width': sizefigure[1] + 'px', 'height': sizefigure[1]+ 'px'});
			$('.block_2').css({'width': sizefigure[2] + 'px', 'height': sizefigure[2]+ 'px'});
			$('.block_3').css({'width': sizefigure[3] + 'px', 'height': sizefigure[3]+ 'px'});
			$('.block_4').css({'width': sizefigure[4] + 'px', 'height': sizefigure[4]+ 'px'});
	}


