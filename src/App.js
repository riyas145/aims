import './App.css';
import { useAuth } from './hooks/useAuth';

function App() {
  const [token,userInfo] = useAuth();
  return (
  <p>hello {token}{userInfo}</p>
  );
}

export default App;
