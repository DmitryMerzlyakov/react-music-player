import { useGetPlaylistByIDQuery } from "./servises/songsApi";
import AppRoutes from "./routes";
import s from './app.module.css'

const App = () => {
  const { data = [] } = useGetPlaylistByIDQuery()

  console.log(data);

  return (
    <div className={`${s.wrapper} ${s.container}`}>
      <AppRoutes dataForId={data}/>
    </div>);
};

export default App;


