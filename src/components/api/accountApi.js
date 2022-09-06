import axios from 'axios';

const accountApi = {
  getAccounts() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return axios.get(url).then((res) => res.data);
  },
  getAccountsError() {
    const url = 'https://jsonplaceholder.typicode.com/userseqweqweqweqweqweqweqwqwe';
    return axios.get(url).then((res) => res.data);
  },
  getAccountById(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios.get(url);
  },
  removeAccount(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios.delete(url).then((res) => res.data);
  }
};

export const getAccount = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.data);

export default accountApi;
