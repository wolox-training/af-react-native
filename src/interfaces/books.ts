export interface Book {
  id: number;
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
    authLoading: boolean;
    loading: boolean;
    error: string;
    auth: {
      data: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        uid: string
      };
    }
  }
}
