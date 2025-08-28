import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';

const experienceItems = [
  {
    title: 'Strategic Risk Management — UBS',
    date: 'Mar 2025 – Present',
    icon: '🏦',
    points: [
      'Working on AI-driven document analysis and review platform for risk assessment and compliance.',
      'Applied advanced prompt engineering to optimize LLM outputs.',
      'Integrated Python automation into risk reporting pipelines.',
      'Enhanced efficiency in large-scale document review processes.',
    ],
  },
  {
    title: 'Software Engineer — Bank of America',
    date: 'Jun 2019 – Feb 2025',
    icon: '💼',
    points: [
      'Led ABS Lending Covenant Web App (React + Flask + Python), reducing manual deal onboarding by 6 hours; earned Gold Award.',
      'Migrated 100+ Python modules from 2.7 to 3.7 ensuring stability.',
      'Automated reporting and reconciliation processes, improving accuracy by 50%.',
      'Built dashboards for collateral and counterparty assets.',
      'Maintained >80% unit test coverage across 20+ modules.',
    ],
  },
];

const educationItems = [
  {
    title: 'B.Tech (Information Technology) — VIT University, Vellore',
    date: '2015 – 2019',
    icon: '🎓',
    desc: 'Graduated with IT degree from Vellore Institute of Technology.',
  },
  {
    title: 'Higher Secondary School — Jnana Prabodhini Prashala, Pune',
    date: '2007 – 2015',
    icon: '🏫',
    desc: 'Completed higher secondary education with focus on Science and Mathematics.',
  },
];

function SectionList({ title, items, isExperience }) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="h5" 
        sx={{ mb: 3, fontWeight: 700, borderBottom: '2px solid rgba(255,255,255,0.1)', pb: 1 }}
      >
        {title}
      </Typography>
      <List sx={{ p: 0 }}>
        {items.map((it, idx) => (
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
            <CardContent sx={{ p: 2 }}>
              <ListItem sx={{ alignItems: 'flex-start', p: 0 }}>
                <Box sx={{ mr: 2, fontSize: 26, flexShrink: 0 }}>{it.icon}</Box>
                
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {it.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 1, fontSize: 14 }}>
                    {it.date}
                  </Typography>

                  {isExperience ? (
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                      {it.points.map((point, i) => (
                        <li key={i}>
                          <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
                            {point}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
                      {it.desc}
                    </Typography>
                  )}
                </Box>
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
}

export default function Timeline() {
  return (
    <Box>
      <SectionList title="Experience" items={experienceItems} isExperience />
      <SectionList title="Education" items={educationItems} />
    </Box>
  );
}
