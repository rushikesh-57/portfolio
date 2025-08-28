import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const funFacts = [
  { emoji: "☕", fact: "I debug best with a hot cup of coffee by my side." },
  { emoji: "🐍", fact: "Python is my spirit animal 🐍 (and favorite language)." },
  { emoji: "🎮", fact: "I love building and playing small indie games." },
  { emoji: "🚀", fact: "Dream: to build tools that genuinely help people grow." },
]

export default function FunSection() {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ textAlign: 'center', fontWeight: 'bold' }}
      >
        🎉 Fun Facts About Me
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {funFacts.map((f, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                sx={{ 
                  height: "100%", 
                  borderRadius: "16px", 
                  textAlign: "center",
                  background: "linear-gradient(135deg, #252533, #13131A)",
                  color: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                }}
              >
                <CardContent>
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    {f.emoji}
                  </Typography>
                  <Typography variant="body1">
                    {f.fact}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
