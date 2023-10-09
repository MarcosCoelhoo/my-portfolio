import './App.css';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
      <main>
        <Profile />
        <About />
        <Projects />
      </main>

      <footer>
        <p>Feito de 💝 por Marcos Coelho / 2023</p>
      </footer>
    </>
  );
}

export default App;
