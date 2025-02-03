import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';

const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [upcommingGames, setUpcommingGames] = useState([]);

  const isLoggedIn = async () => {
    try {
      const userToken = await AsyncStorage.getItem('token');
      setToken(userToken);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    const fetchUser = async (req, res) => {
      const token = await AsyncStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const uId = decodedToken.userId;
      setUserId(uId);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userId,
        setUserId,
        upcommingGames,
        setUpcommingGames,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
