import AppRoutes from "./routes";
import s from './app.module.css'

const App = () => {
  return (
    <div className={`${s.wrapper} ${s.container}`}>
      <AppRoutes/>
    </div>);
};

export default App;


