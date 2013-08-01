function SelectionSort(array)
{
        var lower,temp;
        var i =0,j;
        var length=array.length;
        var lenghtOne=length-1;
            for (; i < lenghtOne; i++)
            {
                lower = i;
                for (j = i + 1; j < length; j++) 
                
                    if (array[j] < array[lower]){
                        lower = j;
         			}
         
                    if (lower != i)
                    {
                        temp = array[lower];
                        array[lower] = array[i];
                        array[i] = temp;
                    }
            }        
}