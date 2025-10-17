class CArreglo{

    static double obtenerProm(int a[]){
        double total = 0;
        for (int i=0; i<a.length; i++ ){
            total = total + a[i];
        }

    return total / a.length;

    }
    
    public static void main(String[] args) {
        int edades[] = {25, 21, 30, 18, 20, 34, 29};

        System.out.println(edades[0]);
 
    }
}