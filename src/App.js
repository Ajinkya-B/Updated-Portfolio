import Header from './componenets/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './componenets/About.js';

function App() {
  return (
    <div className="app-background">
      <div className="app-card">
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;

// skills, exp, proj, educations, 