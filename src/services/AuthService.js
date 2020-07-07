import api from '../config/api';

export const auth = {
  login: user => api.post('/auth/sign_in', user),
}