import axios from 'axios';

const LOGIN_URL = 'http://api.tomasznastaly.com/auth/login';

const logIn = (email: string, password: string) => {
  return axios.post(LOGIN_URL, { email, password })
    .then(user => {
      localStorage.setItem('jobcan-user', JSON.stringify(user));
      return user;
  });
};

export const AuthService = {
  logIn,
};
