import { Navigate } from 'react-router-dom';


export default function AdminProtectedRoutes() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (token && role === 'Admin') {
    // return <Admin />;
  } else if (token && role === 'User') {
    return <Navigate to="/unauthorize" />;
  } else {
    return <Navigate to={'/login'} />;
  }
}