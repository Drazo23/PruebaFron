export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    year: string
    url: string

    constructor(nombreP: string, descripcionP: string, year: string, url: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
    }
}
