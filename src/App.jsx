import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Loader from './components/Loader';
import FunSection from './components/Fun';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Particles */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <ParticlesBackground />
      </Box>

      {loading ? <Loader /> : null}
      <Navbar />

      <main>
        <section id="home">
          <Container sx={{ py: 2 }}>
            <Hero />
          </Container>
        </section>

        <section id="about" className="section-even">
          <Container sx={{ py: 2 }}>
            <About />
          </Container>
        </section>

        <section id="skills">
          <Container sx={{ py: 2 }}>
            <Skills />
          </Container>
        </section>

        <section id="projects" className="section-even">
          <Container sx={{ py: 2 }}>
            <Projects />
          </Container>
        </section>

        <section id="experience">
          <Container sx={{ py: 2 }}>
            <Timeline />
          </Container>
        </section>

        <section id="fun-facts" className="section-even">
          <Container sx={{ py: 2 }}>
            <FunSection />
          </Container>
        </section>

        {/* Uncomment later if you want contact */}
        {/* <section id="contact" className="section-even">
          <Container sx={{ py: 2 }}>
            <Contact />
          </Container>
        </section> */}
      </main>
    </Box>
  );
}
