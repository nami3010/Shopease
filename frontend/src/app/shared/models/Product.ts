export class Product{
    id!:string;
    imageCredit?:{};
    name!:string;
    price!:number;
    images!:Array<any>;
    description!:string;
    tags?:string[];
    favorite!:boolean;
    stars?:number;
    filename?:string;
    imageHash?:string;
    slug?:string;
    added?:number;
    manufacturer?:string;
    itemType?:string;
    productImg?:string;
    category!:string;

}