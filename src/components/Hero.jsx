import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';

function useTyping(text, speed = 80) {
  const [display, setDisplay] = React.useState('');
  React.useEffect(() => {
    let i = 0;
    setDisplay('');
    const t = setInterval(() => {
      setDisplay((prev) => text.slice(0, prev.length + 1));
      i++;
      if (i > text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return display;
}

export default function Hero() {
  const typed = useTyping(
    "Hi, I'm Rushi 👋 | Full-stack Developer (Python + React) | AI Engineer | Risk Analyst",
    35
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ flex: 1 }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          {typed}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            className="gradient-btn"
            variant="contained"
            onClick={() =>
              document
                .getElementById('projects')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            View Projects
          </Button>

          {/* ✅ Download Resume Button */}
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.12)' }}
            component="a"
            href="/Rushikesh_Babar_Resume_2025.pdf"
            download="Rushikesh_Babar_Resume_2025.pdf"
            target="_blank"
          >
            Download Resume
          </Button>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        style={{ flex: '0 0 220px' }}
      >
        <Box
          sx={{
            width: 220,
            height: 220,
            borderRadius: 2,
            overflow: 'hidden',
            background: 'linear-gradient(180deg,#1f2937,#111827)',
          }}
        >
          {/* Placeholder profile image */}
          <img
            src="/profile.jpeg"
            alt="profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </motion.div>
    </Box>
  );
}
