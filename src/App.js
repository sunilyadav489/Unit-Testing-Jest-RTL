import Counter from './components/Counter';
import Product from './components/Products';
import styles from './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Learning Unit Testing with Jest and React Testing Library</h2>
      </header>

      <Counter/>
      <br/>
      <Product/>
    </div>
  );
}

export default App;
