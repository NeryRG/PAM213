import java.util.Random;
import java.util.concurrent.TimeUnit;

public class CPruebaOrdenacion {

    public static int[] inicializarArregloAleatorio(int n) {
        Random rand = new Random();
        int[] arreglo = new int[n];

        final int MAX = 1000;

        for (int i = 0; i < n; i++) {
            // Genera un entero aleatorio entre 0 (inclusivo) y 1001 (exclusivo),
            // lo que resulta en un rango de [0, 1000].
            arreglo[i] = rand.nextInt(MAX + 1);
        }

        return arreglo;
    }

    public static void main(String[] args) throws InterruptedException {
        int[] datos = inicializarArregloAleatorio(50000);

        System.out.println("Arreglo original:");
        // COrdenacion.imprimirArreglo(datos); // no lo imprimos porque tomaría tiempo ,
        // y más si son millones de datos

        // 1. Registrar el tiempo de inicio
        long tiempoInicioNano = System.nanoTime();

        // 2. Llamar a la función cuyo tiempo de ejecución queremos medir
        System.out.println("Ordenando ... ... ...");
        COrdenacion.burbuja(datos); // ESTO es lo único que irá cambiando en este archivo

        // 3. Registrar el tiempo de finalización
        long tiempoFinNano = System.nanoTime();

        System.out.println("\nArreglo ordenado (Bubble Sort):");
        // // no lo imprimos porque tomaría tiempo , y más si son millones de datos ..
        // pero ya está probado que ordena

        // 4. Hacer la aritmética para obtener el tiempo en segundos
        long tiempoEjecucionNano = tiempoFinNano - tiempoInicioNano;
        double tiempoEjecucionSegundos = (double) tiempoEjecucionNano / 1000000000.0;

        // 6. Imprimir los resultados
        System.out.println("----------------------------------------");
        System.out.printf("Tiempo de Ejecución (Segundos): %.4f s\n", tiempoEjecucionSegundos);
        // NO ELIMINE las siguientes líneas
        System.out.println("ID del procesador: " + System.getenv("PROCESSOR_IDENTIFIER"));
        System.out.println("Arquitectura del procesador: " + System.getenv("PROCESSOR_ARCHITECTURE"));
        System.out.println("Número de procesadores: " + System.getenv("NUMBER_OF_PROCESSORS"));
        System.out.println("Directorio temporal: " + System.getenv("TMP"));
    }
} 