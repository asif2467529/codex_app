import { createContext, useContext, useMemo, useState } from 'react';
import { apiClient } from '../utils/apiClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('accessToken'));
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    const { token: accessToken, user: profile } = response.data;
    // TODO: Prefer httpOnly cookie storage in production.
    localStorage.setItem('accessToken', accessToken);
    setToken(accessToken);
    setUser(profile);
  };

  const register = async (payload) => {
    const response = await apiClient.post('/auth/register', payload);
    const { token: accessToken, user: profile } = response.data;
    localStorage.setItem('accessToken', accessToken);
    setToken(accessToken);
    setUser(profile);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setToken(null);
    setUser(null);
  };

  const value = useMemo(
    () => ({ token, user, setUser, login, register, logout }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
