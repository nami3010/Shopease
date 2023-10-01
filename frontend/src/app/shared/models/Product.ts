export class Product{
    id!:string;
    name!:string;
    price!:number;
    imageUrl!:string;
    description!:string;
    tags?:string[];
    favorite!:boolean;
    stars?:number;
}