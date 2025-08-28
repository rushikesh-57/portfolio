import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Chip, Card, CardContent } from '@mui/material'

const projects = [
  {
    title: 'Cap Round Advisor — College Counselor',
    date: '2025',
    icon: '💡',
    desc: 'An online platform designed to assist students with college counseling and admission queries. Features an AI-powered chatbot to answer student questions, helping them make informed decisions about courses, colleges, and admissions.',
    tags: ['React.js', 'Material UI', 'Flask', 'Python', 'SQLite', 'PostgreSQL', 'Mistral AI', 'Firebase', 'Render'],
    link: 'https://caproundadvisor.onrender.com/'
  },
]

export default function Projects() {
  return (
    <Box sx={{ mb: 6, position: 'relative', zIndex: 1 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((p, idx) => (
          <Grid item xs={12} sm={6} md={6} key={idx}>
            <Card
              key={idx}
              sx={{
                height: "100%", // optional for Projects grid
                mb: 3, // only for Timeline list
                borderRadius: "16px",
                background: "linear-gradient(135deg, #252533, #13131A)",
                color: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                  <Box sx={{ mr: 2, fontSize: 26 }}>{p.icon}</Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {p.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, mb: 1 }}>
                      {p.date}
                    </Typography>
                  </Box>
                </Box>

                <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, fontSize: 14 }}>
                  {p.desc}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {p.tags.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        mr: 0.5,
                        mt: 0.5,
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>

                {p.link && (
                  <Button
                    startIcon={<OpenInNewIcon />}
                    size="small"
                    variant="contained"
                    component="a"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"   // 🔹 uses theme primary color
                    sx={{
                      borderRadius: "12px",
                      fontWeight: 600,
                      textTransform: "none",
                      borderWidth: 2,
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
