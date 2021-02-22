export default function authHeader() {
    const admin = JSON.parse(localStorage.getItem('user'));
  
    if (admin && admin.accessToken) {
     // return { Authorization: 'Bearer ' + user.accessToken };
      return {'x-access-token' : admin.accessToken}
    } else {
      return {};
    }
  }