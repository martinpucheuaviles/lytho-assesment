// model ~~ blueprint?
export class Picture { 
    public id: number;
    public name: string;
    public description: string;
    public urlPath: string;

    constructor(id: number, name: string, desc:string, urlPath: string){
        this.id = id;
        this.name = name;
        this.description = desc;
        this.urlPath = urlPath;

    }
}