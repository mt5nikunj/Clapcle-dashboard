import { Navigate } from 'react-router-dom';
import UserProtectedRoutes from './core/components/routes/userProtectedRoutes/userProtectedRoutes';

function App() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (role === 'Admin') {
    return <Navigate to="/admin" />;
  }

  if (role === 'User') {
    return (
      <>
        <UserProtectedRoutes role={role} token={token} />
      </>
    );
  }
}

export default App;