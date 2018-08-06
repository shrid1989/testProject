export interface IProduct{
    name:string,
    hero:IImages,
    id:string,
    images: IImages[],
    links : string,
    thumbnail: IImages,
    reviews:{
        likelihood: number,
        reviewCount:number,
        averageRating: number,
        id:string
    },
    priceRange: {
        selling:{
            high: number,
            low:number
        }
    }


}

interface IImages{
    size: string,
    rel:string,
    width: number,
    height: number,
    href: string
}

