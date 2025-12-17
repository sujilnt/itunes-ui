import type { Track } from '@api';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Loading } from '../../components/Loading';
import { ShowOrHide } from '../../components/ShowOrHide';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '@store';
import { loadMore } from '@features/itunes-slice';
import { useCallback, useEffect, useRef } from 'react';



export interface ItuneGalleryProps {
  items: Track[];
  emptyMessage?: string;
}

export function ItuneGallery(props: ItuneGalleryProps) {
  const { items, emptyMessage = 'No results found' } = props;
  const dispatch = useAppDispatch();
  const { isLoading, isLoadingMore, hasMore } = useAppSelector((state) => state.itunes);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = useCallback(() => {
    dispatch(loadMore());
  }, [dispatch]);

  const loadMoreRef = useRef(handleLoadMore);
  loadMoreRef.current = handleLoadMore;

  const hasItems = items.length > 0;

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore || isLoadingMore || !hasItems) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMoreRef.current?.();
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, isLoadingMore, hasItems]);

  if (isLoading) {
    return <Loading />;
  }

  if (!items.length) {
    return <Alert severity="info">{emptyMessage}</Alert>;
  }

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid key={item.trackId} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card>
              <CardActionArea
                component={item.trackViewUrl ? 'a' : 'div'}
                href={item.trackViewUrl}
                target={item.trackViewUrl ? '_blank' : undefined}
                rel={item.trackViewUrl ? 'noreferrer' : undefined}
              >
                <ShowOrHide when={!!item.artworkUrl100}>
                  <CardMedia component="img" height={160} image={item.artworkUrl100} />
                </ShowOrHide>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={600} noWrap>
                    {item.trackName}
                  </Typography>
                  <ShowOrHide when={!!item.artistName}>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {item.artistName}
                    </Typography>
                  </ShowOrHide>
                </CardContent>
              </CardActionArea> 
            </Card>
          </Grid>
        ))}
        <div ref={sentinelRef} />
      </Grid>
      <ShowOrHide when={isLoadingMore}>
        <Loading size={24} py={1} />
      </ShowOrHide>
    </Stack>
  );
}
