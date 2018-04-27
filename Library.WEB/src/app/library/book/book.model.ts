import { Author } from './../author/author.model';
import { PublicHouse } from './../public-house/public-house.model';

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