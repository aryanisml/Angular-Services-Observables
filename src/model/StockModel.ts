
export class StockModel {
    private id:number;
    private Name: string;
    private Price: number;

    constructor(_id:number, _name: string, _price: number) {
        this.id=_id;
        this.Name = _name;
        this.Price = _price;
    }
    copy(): StockModel {
        return new StockModel(this.id, this.Name, this.Price);
    }
}