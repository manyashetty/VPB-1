import axios from 'axios';

const url = 'https://vpb-f.onrender.com/api/services';

export const fetchServices = () => axios.get(url);