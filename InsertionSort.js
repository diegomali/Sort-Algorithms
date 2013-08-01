function InsertionSort(array)
{
        var i=0,j,temp; 
        var length=array.length;
                for (; i < length; i++) {
                j=i;
                while( (j!=0) && ( array[j] < array[j-1] ) ){
                        temp=array[j]; 
                        array[j]=array[j-1];
                        array[j-1]=temp;
                        j--;
                }
        };
}