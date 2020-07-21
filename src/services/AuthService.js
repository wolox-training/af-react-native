import api from '../config/api';
import AsyncStorage from '@react-native-community/async-storage';

const AUTH_HEADERS = 'AuthHeaders';

export const storage = {
  setAuthHeaders: async (headers) => await AsyncStorage.setItem(AUTH_HEADERS, headers),
  getAuthHeaders: async () => await AsyncStorage.getItem(AUTH_HEADERS),
};


export const auth = {
  login: user => api.post('/auth/sign_in', user),
  authHeaders: ({uid, client, 'access-token': accessToken}) => {
    const headers = {uid, client, 'access-token': accessToken}
    api.setHeaders(headers);
  },
};
