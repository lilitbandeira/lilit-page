import axios from 'axios';


const ApiBusca = axios.create({
    baseURL: "https://cse.google.com/cse.js?cx=7cb6342e0bf3f9eed"
});

export default ApiBusca;
