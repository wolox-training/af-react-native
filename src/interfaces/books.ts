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

export interface State {
  books: {
    books: Book[];
    loading: boolean;
    error: string;
  };
  auth: {
    auth: {
      data: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        uid: string
      };
      loading: boolean;
      error: string;
    }
  }
}
