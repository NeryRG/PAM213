class CCola {


    static a = new Array(10);
    static front = -1;
    static rear = -1;


    static isEmpty() {
        if (this.front === -1 || this.front > this.rear) {
            return true;
        } else {
            return false;
        }
    }

    static enqueue(x) {
        if (this.rear === this.a.length - 1) {
            console.log("La cola está llena");
        } else {
            if (this.front === -1) {
                this.front = 0;
            }
            this.rear = this.rear + 1;
            this.a[this.rear] = x;
        }
    }


    static dequeue() {
        if (this.isEmpty()) {
            console.log("La cola está vacía");
        } else {
            this.front = this.front + 1;
        }
    }

    // Imprimir la cola
    static imprimir() {
        if (this.isEmpty()) {
            console.log("La cola está vacía");
        } else {
            let salida = "";
            for (let i = this.front; i <= this.rear; i++) {
                salida += this.a[i] + " ";
            }
            console.log(salida.trim());
        }
    }


    static main() {

        this.enqueue(8);
        this.enqueue(5);
        this.enqueue(2);
        this.enqueue(3);
        this.dequeue();
        this.dequeue();
        this.imprimir();

        console.log("ID del procesador: " + (process.env.PROCESSOR_IDENTIFIER || "No disponible"));
        console.log("Arquitectura del procesador: " + (process.env.PROCESSOR_ARCHITECTURE || process.arch));
        console.log("Número de procesadores: " + require("os").cpus().length);
        console.log("Directorio temporal: " + require("os").tmpdir());
    }
}

CCola.main();
