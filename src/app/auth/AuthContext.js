import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FuseSplashScreen from '@fuse/core/FuseSplashScreen';
import jwtServiceConfig from './jwtServiceConfig';

const AuthContext = React.createContext();

function AuthProvider({ children }) {

  const [waitAuthCheck, setWaitAuthCheck] = useState(false)

  useEffect(() => {

    axios.defaults.baseURL = "http://localhost:7003";
  
    axios.post(`${jwtServiceConfig.login}`,
      {
        userName: "guest@qubic.li",
        password: "guest13@Qubic.li",
        twoFactorCode: "",
      }
    ).then((response) => {
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    })
      .then(() => {
        console.log(axios.defaults.headers.common.Authorization)
        setWaitAuthCheck(true)
      }
      )
      .catch((error) => {
        console.log(error)
      })

  }, []);

  return waitAuthCheck ? (
    <AuthContext.Provider value={{ waitAuthCheck }}>{children}</AuthContext.Provider>
  ) : (
    <FuseSplashScreen />
  );
}

export default AuthProvider;
