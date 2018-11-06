import axios from 'axios';

const istance = axios.create({
    baseURL: `http://rekrutacja.gbx24.com`
});

axios.defaults.headers.common['Authorization'] = '3Basdq312fsd@#21dwqc23rc2SASFDa14124';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default istance;