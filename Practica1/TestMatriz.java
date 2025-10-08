public class TestMatriz {
    public static void main(String[] args) {

        int[][] matriz = {
            {1, 2, 3, 4}
            {5, 6, 7, 8}
            {9, 10, 11, 12}
        };
        
        System.out.println("IMprimiendo la matriz por elementos");

        for (int i = 0; i < matriz.lenght; i++) {
            for (int j = 0; j < matriz[i].lenght; j++) {
                System.out.println(matriz[i][j] + " ");
            }
            System.out.print();
        }
    }
}