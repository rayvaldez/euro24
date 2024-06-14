import React from 'react';
import { Box, Typography } from '@mui/material';

const Rules = () => {
  return (
    <Box sx={{ m: "1em 0 1em 0", p: "0 0 3px 0", border: "2px solid #295aa8", borderRadius: "5px"}}>
      <Box sx={{ backgroundColor: "#295aa8"}}>
        <Typography variant="h6" component="span" sx={{ color: "#faf9f6", pl: "5px"}}>
          Scoring
        </Typography>
      </Box>
      <Box sx={{ p: "0 3px 0 3px"}}>
        <Typography variant="body2">
          Win 3 Points, Draw 1 Point, Loss 0 Points
        </Typography>
      </Box>
    </Box>
  )
}

export default Rules