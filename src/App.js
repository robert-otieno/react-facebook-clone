import './App.css'
import Header from './components/Header'
import Sidebar from './Sidebar.js'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'

function App() {
  const user = null;
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (<Login/>):(
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        </>
      ) }
      
    </div>
  );
}

export default App;
