import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
function App(props) {
  return (
    <div className="App">
      <Header />
      <MainPage  state={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default App;
