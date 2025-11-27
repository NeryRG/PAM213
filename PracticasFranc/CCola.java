public class CCola {

    // Atributos de la cola
    static int a[] = new int[10];
    static int front = -1;
    static int rear = -1;

    // Método para verificar si la cola está vacía
    public static boolean isEmpty() {
        if (front == -1 || front > rear) {
            return true;
        } else {
            return false;
        }
    }

    // Método para insertar (enqueue)
    public static void enqueue(int x) {
        if (rear == a.length - 1) {
            System.out.println("La cola está llena");
        } else {
            if (front == -1) {
                front = 0;
            }
            rear = rear + 1;
            a[rear] = x;
        }
    }

    // Método para eliminar (dequeue)
    public static void dequeue() {
        if (isEmpty()) {
            System.out.println("La cola está vacía");
        } else {
            front = front + 1;
        }
    }

    // Método para imprimir la cola
    public static void imprimir() {
        if (isEmpty()) {
            System.out.println("La cola está vacía");
        } else {
            for (int i = front; i <= rear; i++) {
                System.out.print(a[i] + " ");
            }
            System.out.println();
        }
    }

    // Método principal (DEBE LUCIR EXACTAMENTE ASÍ)
    public static void main(String[] args) {

        enqueue(8);
        enqueue(5);
        enqueue(2);
        enqueue(3);
        dequeue();
        dequeue();
        imprimir();

        System.out.println("ID del procesador: " + System.getenv("PROCESSOR_IDENTIFIER"));
        System.out.println("Arquitectura del procesador: " + System.getenv("PROCESSOR_ARCHITECTURE"));
        System.out.println("Número de procesadores: " + System.getenv("NUMBER_OF_PROCESSORS"));
        System.out.println("Directorio temporal: " + System.getenv("TMP"));
    }
}
    