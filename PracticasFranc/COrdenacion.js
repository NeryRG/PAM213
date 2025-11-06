public static void burbuja(int[] arr) {
    int n = arr.length;
    boolean huboIntercambio;

    for (int i = 0; i < n - 1; i++) {
        huboIntercambio = false;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                huboIntercambio = true;
            }
        }

        // Si no hubo intercambios, el arreglo ya está ordenado
        if (!huboIntercambio) {
            break;
        }
    }
}
