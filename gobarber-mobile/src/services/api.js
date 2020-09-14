import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;

// to user on Android Emulator 'http://10.0.2.2:3333'
// to user on Android Smartphone 'http://192.168.1.6:3333'
