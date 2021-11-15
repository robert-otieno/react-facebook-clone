import './App.css'
import Header from './Header'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
