export class Products {
  public title:string;
  public catagory: string;
  public price: string;
  public image: string;
  public name:string;

  constructor( catagory: string,price: string,title:string, image: string,name:string) {
    this.price = price;
    this.name=name
    this.catagory=catagory;
    this.title=title;
    this.image = image;
  }
}

