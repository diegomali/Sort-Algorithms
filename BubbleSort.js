function BubbleSort(array){
        var length=array.length;//c1
        var temp;//c2
        var j=length -1;//c3
        var i;//c4
        for (;j>=1 ;j--) {//c5
               for(i=0; i<j; i++)//c6	//c7	//c8
                {
                    if(array[i]>array[i+1])//c9
                    {
                        temp=array[i];
                        array[i]=array[i+1];
                        array[i+1]=array;
                    }
                }
        };

}
/*
	t(n) = n + n²
	t(n) = O(n²);
	
*/