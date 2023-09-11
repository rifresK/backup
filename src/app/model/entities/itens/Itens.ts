export class Itens {
    private _nome : string;
    private _capacidade! : number;
    private _potencia! : string;
    private _categoria! : number;
    private _calibre! : number;

    constructor(nome : string){
        this._nome = nome;
    }

    //get set nome

    public get nome() : string {
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    //get set capacidade

    public get capacidade() : number {
        return this._capacidade;
    }

    public set capacidade(capacidade: number){
        this._capacidade = capacidade;
    }

    //get set potencia

    public get potencia() : string {
        return this._potencia;
    }

    public set potencia(potencia: string){
        this._potencia = potencia;
    }
    
    //get set categoria
    
    public get categoria() : number {
        return this._categoria;
    }

    public set categoria(categoria: number){
        this._categoria = categoria;
    }

    //get set calibre

    public get calibre() : number {
        return this._calibre;
    }

    public set calibre(calibre: number){
        this._calibre = calibre;
    }
}