

//объявление массивов глобально
var nameClass = ['block_0','block_1','block_2','block_3','block_4']
var sizefigure = [0,0,0,0,0];
//фукция генерирует
function RandomSize(){
  let CalcSize;

  for(let i=0; sizefigure.length>i;i++){
    CalcSize = sizefigure[i] + (Math.floor(Math.random()*(100-15+1)) + 15);
    sizefigure[i]= CalcSize;

  }
 return  sizefigure;
  
}
RandomSize();

function bubbleSort(array) {
//реализация метода сортировки пызырьком
 
  
    let swapp;
    do {
      swapp = false;
      
      array.forEach((elements, i) => {
     
        if (elements > array[i + 1]) {
           // Сохраняем значение в переменную, чтобы не потерять его
          let temp = elements;
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapp = true;
        }
  
      })
    } while (swapp);
    sizefigure= array;
    setTimeout(()=>{
      $('.block_0').css({'width': sizefigure[0] + 'px', 'height': sizefigure[0]+ 'px'});
    },1000)
    setTimeout(()=>{
      $('.block_1').css({'width': sizefigure[1] + 'px', 'height': sizefigure[1]+ 'px'});
    },2000)
    setTimeout(()=>{
      $('.block_2').css({'width': sizefigure[2] + 'px', 'height': sizefigure[2]+ 'px'});
    },2000)
    setTimeout(()=>{
      $('.block_3').css({'width': sizefigure[3] + 'px', 'height': sizefigure[3]+ 'px'});
    },2000)
    setTimeout(()=>{
      $('.block_4').css({'width': sizefigure[4] + 'px', 'height': sizefigure[4]+ 'px'});
    },1000)
			
 
  
//присваивание значения высоты и ширины отсортирванного массива


 

}

	for(let i=0;i< nameClass.length;++i){

		let block = document.getElementsByClassName(nameClass[i]).css;
			$('.block_0').css({'width': sizefigure[0] + 'px', 'height': sizefigure[0]+ 'px'});
			$('.block_1').css({'width': sizefigure[1] + 'px', 'height': sizefigure[1]+ 'px'});
			$('.block_2').css({'width': sizefigure[2] + 'px', 'height': sizefigure[2]+ 'px'});
			$('.block_3').css({'width': sizefigure[3] + 'px', 'height': sizefigure[3]+ 'px'});
			$('.block_4').css({'width': sizefigure[4] + 'px', 'height': sizefigure[4]+ 'px'});
	}


