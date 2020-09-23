function forLoop(array){
  for(let i=0; i<25; i++){
    string = `I am ${i} strange loop${ i === 1 ? '' : 's' }.`
    array.push(string)
  }
  return array
}