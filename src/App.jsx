import './assets/css/style.scss';
import Nav from './scripts/mainNav';
import Content from './scripts/mainContent';
import Footer from './scripts/mainFooter';
import Sidebar from './scripts/mainSidebar';
  
const App = () => {
  return (
    <div className='wrapper container'>
      <main className='main'>
        <Nav />
        <Content />
        <Footer />
        <Sidebar />
      </main>
    </div>);
};

export default App;


