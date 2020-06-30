export interface Book {
  title: string;
  author: string;
  image: any;
  genre: string;
  year: string;
  comment: Comments[];
}

export interface Comments {
  id: string;
  name: string;
  image: any;
  text: string;
}
