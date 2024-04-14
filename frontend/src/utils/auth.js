import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';


const USER_ROLES = {
    admin: 'admin',
    officer: 'officer',
    user: 'user',
  };
  
  let currentUser = {
    role: USER_ROLES.officer,
  };
  
  export const login = (role) => {
    currentUser = { role };
  };
  
  export const logout = () => {
    currentUser = null;
  };
  
  export const getUserRole = () => {
    return currentUser ? currentUser.role : null;
  };



export const getUserIdFromToken = () => {
  const token = Cookies.get('token');

  console.log(token);
  if (!token) return null;

  const decodedToken = jwtDecode(token);
  return decodedToken.id;
};