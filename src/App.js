import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
   
    const [query, setQuery] = useState('');
    const [ setWeather] = useState({});
    
    
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
        </div>
    );


export default App;