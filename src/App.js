import About from './components/layout/About.js';
import Events from './components/layout/Events.js';
import Footer from './components/layout/Footer.js';
import Header from './components/layout/Header.js';
import Home from './components/layout/Home.js';
import Posts from './components/layout/Posts.js';
import Chat from './components/utility/Chat.js';
function App() {
  return (
    <div className="App ">
      <Chat/>
      <Header />
      <Home/>
      <About/>
      <Events/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default App;
