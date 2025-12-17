import { css } from '@emotion/react';
import Stack from '@mui/material/Stack';
import {
  Page,
  PageHeader,
  PageContent,
  PageSection,
  PageFooter,
} from '../../components/Page';
import Search from '../../components/Search';
import { fetchItunes, setFilters, reset } from '@features/itunes-slice';
import { useAppDispatch, useAppSelector } from '@store';
import { useEffect } from 'react';
import { ItuneGallery } from './ItuneGallery';

export function HomePage() {
  const dispatch = useAppDispatch();
  const { filters, itunes } = useAppSelector((state) => state.itunes);
  const emptyMessage = filters.term ? `No results found for "${filters.term}"` : 'Search for artists, albums, or songs';

  useEffect(()=>{
    return ()=>{
      dispatch(reset());
    }
  },[dispatch]);

  useEffect(() => {
    dispatch(fetchItunes(filters));
  }, [filters, dispatch]);

  return (
    <Page>
      <PageHeader>
       <h1 css={css`
              margin: 0;
              font-size: 1.75rem;
              color: #333;
            `}> 
            iTunes UI
        </h1>
      </PageHeader>

      <PageContent>
        <Stack spacing={2}>
          <PageSection>
            <div style={{ marginBottom: "10px"}}>
              <Search
              value={filters.term}
              onSearch={ (term: string) => {
               dispatch(setFilters({ term }));
               }}
            />  
            </div>
            <ItuneGallery
              items={itunes.results ?? []}
              emptyMessage={emptyMessage}
            />
          </PageSection>
        </Stack>
      </PageContent>
      <PageFooter>
        <p>
          2025 iTunes UI Demo
        </p>
      </PageFooter>
    </Page>
  );
}