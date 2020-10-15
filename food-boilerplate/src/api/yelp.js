import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        authorization:'Bearer OzPj_crCNs0MTAFjaK8ftFIhXaMu5gOBgSqu-mWk2Eq73ewOdv5RIK_qhBa0eeXta7x-qP0_WGfAyaLSxnTps3T-if25470Q1ybOUDVB4NsmAsUs3MJX4xJsYdiBX3Yx'
    }
});