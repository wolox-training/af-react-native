export interface Book {
  title: string;
  author: string;
  img: any;
  type: string;
  year: string;
  comment: Comments[];
}

export interface Comments {
  id: string;
  name: string;
  img: any;
  text: string;
}
