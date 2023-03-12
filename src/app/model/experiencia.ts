export class Experiencia{
    id? : number;
    nombreE : string
    descripcionE : string;
    periodo: string

    constructor(nombreE: string, descripcionE: string, periodo:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.periodo = periodo;
    }
}