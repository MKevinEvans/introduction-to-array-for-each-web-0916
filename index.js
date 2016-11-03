function changeCompletely(element, index, array){
	array[index] = 2
}

function doToElementsInArray(array, callback){
	array.forEach(callback)
}