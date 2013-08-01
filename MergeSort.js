function MergeSort(array){
	this.Array=array;
}

MergeSort.prototype.Init = function() {
	//
	  if (this.Array.length < 2)
        return this.Array;
 
    var split = parseInt(this.Array.length / 2);
    var one   = this.Array.slice(0, split);
    var two  = this.Array.slice(split, this.Array.length);
    return this.Merge(new MergeSort(one).Init(),new MergeSort(two).Init() );

	//
};


MergeSort.prototype.GetArray = function() {
	return this.Init();
};

MergeSort.prototype.Merge = function(partOne,partTwo) {
	var result = [];
 
    while (partOne.length && partTwo.length) {
        if (partOne[0] <= partTwo[0]) {
            result.push(partOne.shift());
        } else {
            result.push(partTwo.shift());
        }
    }
 
    while (partOne.length){
    	result.push(partOne.shift());
    }
        
 
    while (partTwo.length){
    	result.push(partTwo.shift());
    }
        
   return result;



};
