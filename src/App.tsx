import './App.css';
import { AppRoutes } from './routes/Routes';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  
  return (
   <div className="app">
      <Sidebar />
      <AppRoutes/>
    </div>
  );
}

export default App;
