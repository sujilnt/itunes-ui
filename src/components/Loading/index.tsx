import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

interface LoadingProps {
  size?: number;
  py?: number;
}

export function Loading({ size, py = 4 }: LoadingProps) {
  return (
    <Stack direction="row" justifyContent="center" py={py}>
      <CircularProgress size={size} />
    </Stack>
  );
}
