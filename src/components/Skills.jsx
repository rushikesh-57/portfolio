import React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'

const skillCategories = {
  "Languages & Frameworks": [
    { label: 'Python', level: 'Advanced' },
    { label: 'SQL', level: 'Intermediate' },
    { label: 'Flask (REST APIs)', level: 'Intermediate' },
    { label: 'React.js', level: 'Intermediate' },
    { label: 'Pandas', level: 'Advanced' },
    { label: 'ETL', level: 'Intermediate' },
    { label: 'Power BI', level: 'Beginner' },
  ],
  "AI & Machine Learning": [
    { label: 'Large Language Models (LLMs)', level: 'Intermediate' },
    { label: 'Prompt Engineering', level: 'Intermediate' },
  ],
  "Tools & Platforms": [
    { label: 'Git', level: 'Intermediate' },
    { label: 'Bitbucket', level: 'Intermediate' },
    { label: 'Quartz', level: 'Advanced' },
    { label: 'Firebase', level: 'Intermediate' },
    { label: 'Render', level: 'Intermediate' },
  ],
  "Methodologies & Practices": [
    { label: 'Agile (Scrum)', level: 'Intermediate' },
    { label: 'Unit Testing', level: 'Intermediate' },
    { label: 'CI/CD', level: 'Intermediate' },
    { label: 'Software Design Patterns', level: 'Intermediate' },
    { label: 'Production Support', level: 'Intermediate' },
  ],
  "Domain Knowledge": [
    { label: 'Strategic Risk Management', level: 'Intermediate' },
    { label: 'Non-Performing Loans (NPL)', level: 'Intermediate' },
    { label: 'Securities Lending', level: 'Intermediate' },
    { label: 'Financial Data Processing', level: 'Intermediate' },
  ]
}

export default function Skills() {
  return (
    <Box sx={{ mb: 6, position: 'relative', zIndex: 1 }}>
      <Typography 
        variant="h5" 
        sx={{ mb: 2, fontWeight: 700, color: 'white' }}
      >
        Skills
      </Typography>

      {Object.entries(skillCategories).map(([category, skills], catIdx) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: catIdx * 0.1, type: 'spring', stiffness: 100 }}
        >
          <Box
            sx={{
              mb: 3,
              p: 2,
              borderRadius: "16px",
              background: "linear-gradient(135deg, #252533, #13131A)",
              color: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              },
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, color: '#00e5ff' }}>
              {category}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {skills.map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, type: 'spring', stiffness: 120 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ display: 'inline-block' }}
                >
                  <Tooltip title={s.level}>
                    <Chip
                      sx={{
                        m: 0.5,
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        fontSize: '0.8rem',
                        borderRadius: '8px',
                        transition: 'all .3s ease',
                        '&:hover': {
                          background: 'rgba(0,229,255,0.2)',
                          boxShadow: '0px 0px 12px rgba(0,229,255,0.5)',
                        }
                      }}
                      label={s.label}
                      clickable
                      variant="outlined"
                    />
                  </Tooltip>
                </motion.div>
              ))}
            </Stack>
          </Box>
        </motion.div>
      ))}
    </Box>
  )
}
