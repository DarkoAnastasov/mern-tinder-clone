import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className='App'>
      <h1>
        <Header />
        <TinderCards />
        <SwipeButtons />
      </h1>
    </div>
  );
}

export default App;
