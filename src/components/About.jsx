import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={10}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Box
            sx={{
              p: 4,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #252533, #13131A)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              color: 'white',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Me
            </Typography>

            <Typography paragraph sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
              I am a Full-stack Software Engineer with 6+ years of experience in Python, Flask, React, and SQL.
              I have hands-on expertise in AI/LLMs, prompt engineering, and document analysis for risk management.
              My background includes automation, data pipelines, and legacy system migrations at Bank of America,
              as well as AI-driven platforms like College Counselor with Flask APIs, Mistral AI chatbot, and Firebase.
              Currently, I am working in Strategic Risk Management at UBS, leveraging AI to enhance efficiency,
              compliance, and data accuracy.
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: '600' }}>
              Connect with me
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                {
                  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rushikeshbabar57@gmail.com',
                  label: '✉️ rushikeshbabar57@gmail.com',
                },
                { href: 'tel:+917972715112', label: '📞 +91 7972715112' },
                {
                  href: 'https://www.linkedin.com/in/rushikesh-babar-667711134',
                  label: '🔗 LinkedIn',
                },
                { href: 'https://github.com/rushikesh-57', label: '💻 GitHub' },
                {
                  href: 'https://www.hackerrank.com/profile/rushikesh_57',
                  label: '🏆 HackerRank',
                },
              ].map((link, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, x: 8 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    underline="hover"
                    sx={{
                      color: '#00e5ff',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease',
                      '&:hover': { color: '#4dd0e1' },
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  )
}
