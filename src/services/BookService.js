import api from '../config/api';

export const books = {
  getBookDetail: () => api.get('/books')
}