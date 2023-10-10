import './App.css';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Confetti from 'react-confetti';
import React from 'react';

function App() {
  const [confettiOn, setConfettiOn] = React.useState(false);

  return (
    <>
      {confettiOn && (
        <Confetti
          height={1220}
          gravity={0.3}
          // tweenDuration={1000}
          // initialVelocityY={60}
          recycle={false}
          onConfettiComplete={() => setConfettiOn(false)}
        />
      )}
      <main>
        <Profile setConfetti={setConfettiOn} />
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
