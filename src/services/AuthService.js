import api from '../config/api';

export const auth = {
  login: user => api.post('/auth/sign_in', user),
  auth: ({accessToken, client, uid}) => api.setHeaders({'Access-Token': accessToken, Client: client, Uid: uid}) 
};
