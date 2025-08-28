import { Dialog, DialogTitle, DialogContent, Typography, Chip, Link } from '@mui/material';

function ModalDetails({ open, handleClose, details }) {
  if (!details) return null;
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{details.title}</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1">
          {details.company || details.institution} ({details.period})
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {details.description && details.description.map((desc, i) => <li key={i}>{desc}</li>)}
        </Typography>
        <div style={{ marginTop: 10 }}>
          {details.technologies.map((tech, i) => (
            <Chip key={i} label={tech} size="small" sx={{mr: 0.5}}/>
          ))}
        </div>
        {details.demo && (
          <Link href={details.demo} target="_blank">Live Demo</Link>
        )}
        {details.source && (
          <Link href={details.source} target="_blank" sx={{ml:2}}>Source Code</Link>
        )}
        {details.awards && (
          <Typography variant="caption" color="primary" sx={{ mt: 2 }}>
            {details.awards.join(', ')}
          </Typography>
        )}
        {/* Add gallery or screenshots if available */}
      </DialogContent>
    </Dialog>
  );
}

export default ModalDetails;
