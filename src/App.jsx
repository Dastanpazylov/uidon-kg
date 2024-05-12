import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './links/AppRouter';

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
