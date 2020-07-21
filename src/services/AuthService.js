import api from '../config/api';
import AsyncStorage from '@react-native-community/async-storage';

const items = {
  token: 'token',
  client: 'client',
  uid: 'uid',
};

export const storage = {
  setItem: ({ client, uid, token }) => {
    AsyncStorage.setItem(items.token, token);
    AsyncStorage.setItem(items.client ,client);
    AsyncStorage.setItem(items.uid, uid);
  },
  getItem: async () => {
    return {
      'Access-token': await AsyncStorage.getItem(items.token),
      [items.client]: await AsyncStorage.getItem(items.client),
      [items.uid]: await AsyncStorage.getItem(items.uid),
    };
  }
};


export const auth = {
  login: user => api.post('/auth/sign_in', user),
  auth: async () => {
    const headers = await storage.getItem();
    if(headers.client === null || headers.uid === null || headers['Access-token'] === null) {
      return {ok: false};
    }
    else {
      api.setHeaders(headers);
      return {ok: true};
    }
  }
};
