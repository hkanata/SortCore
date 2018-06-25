var array  = [6,1,5,8,9,4,7,2]; //expected: [1, 2, 4, 5, 6, 7, 8, 9]
var chosen = 0;	
var j			 = 0;

for( var i=1; i < array.length; i++ ){
  chosen = array[i];
  j = i-1;
  while(  (j >= 0) && (chosen < array[j]) ){
    array[j+1] = array[j];
    j = j - 1;
  }
  array[j+1]=chosen;
}
console.log(array);
