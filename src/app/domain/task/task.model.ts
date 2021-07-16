import { NivelPrioridad } from "src/app/enums/prioridad.enum";
import { Status } from "src/app/enums/status.enum";

export class Task {
    
    id: number;

    titulo: string;

    fechaCreacion: Date;

    descripcion: string;

    nivelPrioridad: NivelPrioridad;

    status: Status;
    
}
