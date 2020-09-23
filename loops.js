function forLoop(array){
  for(let i=0; i<25; i++){
    string = `I am ${i} strange loop${ i === 1 ? '' : 's' }.`
    array.push(string)
  }
  return array
}

function whileLoop(n){
  while(n>0){
    n--
    console.log(n)
  }
  return 'done'
}

function doWhileLoop(num){
  let i = 0
  
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  
  do{
    console.log("I run once regardless.")
    incrementVariable()
  }while(incrementVariable() < num)
}