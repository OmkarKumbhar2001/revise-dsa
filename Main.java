import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] daysPrice = {7, 1, 5, 3, 6, 4};
        int buyingDay = 1;
        int currentStockPrice = daysPrice[buyingDay];
        
        int[] remArr = cropedArray(daysPrice, buyingDay, daysPrice.length);
        int largestNum = largestNumber(remArr);
        
        if(currentStockPrice < largestNum){
            System.out.printf("you will get profit on %d day and its value is %d and your profit is %d%n",
                    indexOf(daysPrice, largestNum), largestNum, largestNum - currentStockPrice);
        } else {
            System.out.println("Dont sell your stock");
        }
    }

    public static int[] cropedArray(int[] arr, int indOne, int indTwo) {
        return Arrays.copyOfRange(arr, indOne, indTwo);
    }

    public static int largestNumber(int[] arr) {
        Arrays.sort(arr);
        return arr[arr.length - 1];
    }

    public static int indexOf(int[] arr, int num) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                return i;
            }
        }
        return -1;
    }
}
