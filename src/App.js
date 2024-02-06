import './App.css';
import Login from './componentes/login';
import Principal from './componentes/principal';

var x=localStorage.getItem('user');

function App() {
  let actual;
  if(x==null){
    actual = <Login/>;
  }
  else{
    actual = <Principal/>;
  }
  return (
    <div className="App">
      <header className="App-header">
        {actual}
      </header>
    </div>
  );
}

export default App;
