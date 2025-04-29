import { Link, Navigate, Outlet } from 'react-router-dom'; 
import { jwtVerify } from 'jose';
import { useEffect, useState } from 'react';
import './AuthMiddleware.css';

const AuthMiddleware = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) return setIsAuthenticated(false);
      try {
        const secretKey = new TextEncoder().encode('minhaChaveSecreta');
        await jwtVerify(token, secretKey);
        setIsAuthenticated(true);
      } catch (e) {
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    // Enquanto verifica, mostra um loading básico (opcional)
    return <div className="access-container"><p>Verificando acesso...</p></div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="access-container">
        <div className="access-box">
          <h2>Acesso Negado</h2>
          <p>Você está sem acesso! Faça login para continuar.</p>
          <Link to="/login" className="access-btn">Ir para Login</Link>
        </div>
      </div>
    );
  }

  return <Outlet />;
};

export default AuthMiddleware;
