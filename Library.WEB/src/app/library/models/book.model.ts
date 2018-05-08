import { PublicHouse } from './public-house.model';
import { Author } from './author.model';



export class Book {
    constructor(
        public bookId: number = 0,
        public name?: string,
        public authorName?: string,
        public yearOfPublishing?: number,
        public publicHouses?: PublicHouse[],
        public publicHousesFormated?: string,
        public authors?: Author[],
        public authorsFormated?: string ){}
}