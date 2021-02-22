import axios from 'axios';
import authHeader from './auth-header';

//const URL = 'http://13.232.209.246:5000/admin/auth/';

class Userservice{
    getPublicContent(){
        return axios.get('http://15.206.118.222:5000/admin/auth/login');
    }

   /* getUser() {
        return axios.get(URL + 'user', { headers: authHeader() });
      }
    
      getManager() {
        return axios.get(URL + 'manager', { headers: authHeader() });
      }*/
    
      getAdmin() {
        return axios.get('http://15.206.118.222:5000/admin/auth/login', { headers: authHeader() });
      }
    }
    
    export default new Userservice();
