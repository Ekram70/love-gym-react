import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HorizontalScrollbar from './HorizontalScrollBar';
import Loader from './Loader';

function SimilarExecises({ targetMuscleExercises, targetEquipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant="h3" mb="33px">
        Exercises that the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb="33px" mt='100px'>
        Exercises that the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetEquipmentExercises.length ? (
          <HorizontalScrollbar data={targetEquipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExecises;
