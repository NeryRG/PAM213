import java.util.Scanner;

class inicioPAM {

    public void ReglamentoPOO() {
        System.out.println("\nReglamento POO:");
        System.out.println("- 1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\r\n" + //
                        "2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de\r\n" + //
                        "inicio:7:00a.m y 14:00 p.m).\r\n" + //
                        "3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),\r\n" + //
                        "justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al\r\n" + //
                        "tutor para ser validados y de forma posterior emitidos).\r\n" + //
                        "4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)\r\n" + //
                        "5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.\r\n" + //
                        "6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\r\n" + //
                        "7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.\r\n" + //
                        "8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final\r\n" + //
                        "9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará\r\n" + //
                        "una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.\r\n" + //
                        "10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.\r\n" + //
                        "11. Prohibido el uso de audífonos durante la clase.\r\n" + //
                        "12. Prohibido comer y/o tomar líquidos en el salón.\r\n" + //
                        "13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.\r\n" + //
                        "14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación\r\n" + //
                        "de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)\r\n" + //
                        "15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.\r\n" + //
                        "16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación\r\n" + //
                        "17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el\r\n" + //
                        "50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión..");
    }

    public void LineamientosClassroom() {
        System.out.println("\nLineamientos Classroom:");
        System.out.println("- Participación.");
        System.out.println("- Entregas Completas.");
        System.out.println("- Respetar tiempos de entrega.\n");
        System.out.println("- Presentacion de trabajo calidad de alumno.\n");
    }

    public void FechasParciales() {
        System.out.println("\nFechas de Parciales:");
        System.out.println("- Parcial 1: 30-09-25");
        System.out.println("- Parcial 2: 04-11-25");
        System.out.println("- Parcial 3: 02-12-25");
        System.out.println("- Final: 08-12-25\n");
    }

    public void PorcentajesParcial() {
        System.out.println("\nPorcentajes de Evaluacion:");
        System.out.println("- Parcial 1: Con:40% Des:20% Prod:30% PI:10%");
        System.out.println("- Parcial 2: Con:40% Des:20% Prod:20% PI:20%");
        System.out.println("- Parcial 3: Con:20% Des:10% Prod:40% Pi:30%\n");
    }
}

// Clase principal con menú en consola
public class MainPAM {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        inicioPAM pam = new inicioPAM();
        int opcion;

        do {
            System.out.println("===== Aplicacion PAM =====");
            System.out.println("1. Ver Reglamento POO");
            System.out.println("2. Ver Lineamientos Classroom");
            System.out.println("3. Ver Fechas de Parciales");
            System.out.println("4. Ver Porcentajes de Parciales");
            System.out.println("5. Salir");
            System.out.print("Seleccione una opcion: ");
            opcion = sc.nextInt();

            switch (opcion) {
                case 1:
                    pam.ReglamentoPOO();
                    break;
                case 2:
                    pam.LineamientosClassroom();
                    break;
                case 3:
                    pam.FechasParciales();
                    break;
                case 4:
                    pam.PorcentajesParcial();
                    break;
                case 5:
                    System.out.println("\nSaliendo del programa...");
                    break;
                default:
                    System.out.println("\nOpcion invalida. Intente de nuevo.\n");
            }

        } while (opcion != 5);

        sc.close();

        
    }
}
