import './App.css'
import Header from './components/Header'
import Sidebar from './Sidebar.js'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from './StateProvider'

function App() {
  const [{user}, dispatch] = useStateValue()

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
