import { useState } from "react";
import AppRoutes from "./routes";
import s from './app.module.css'

const App = () => {

  const [user, setUser] = useState(localStorage.getItem('user') === 'true');
  const [userName, setUserName] = useState('');


  return (
    <div className={`${s.wrapper} ${s.container}`}>
      <AppRoutes
      user={user}
      userName={userName}
      setUser={setUser}
      setUserName={setUserName}
      />
    </div>);
};

export default App;


