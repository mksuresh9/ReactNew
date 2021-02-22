import axios from "axios";

//const URL = 'http://13.232.209.246:5000/admin/auth/';

class AuthService {
  login() {

    const user ={
      username : this.username,
      password : this.password
    }
    return axios.post('http://15.206.118.222:5000/admin/auth/login' ,{ user})
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("admin", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("admin");
  }

  

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('admin'));;
  }
}

export default new AuthService();
