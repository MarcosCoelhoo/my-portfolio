import './App.css';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Confetti from 'react-confetti';
import React from 'react';
import Quotes from './components/quotes/Quotes';

function App() {
  const [confettiOn, setConfettiOn] = React.useState(false);

  return (
    <>
      {confettiOn && (
        <Confetti
          height={1220}
          gravity={0.3}
          recycle={false}
          onConfettiComplete={() => setConfettiOn(false)}
        />
      )}
      <main>
        <Profile setConfetti={setConfettiOn} />
        <About />
        <Projects />
      </main>

      <Quotes />

      <footer>
        <p>Feito de 💝 por Marcos Coelho / 2023</p>
      </footer>
    </>
  );
}

export default App;
