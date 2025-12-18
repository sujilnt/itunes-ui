import type { Track } from "@api";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Loading } from "../../components/Loading";
import { ShowOrHide } from "../../components/ShowOrHide";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "@store";
import { useEffect, useRef, type Dispatch } from "react";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";

export interface ItuneGalleryProps {
	items: Track[];
	emptyMessage?: string;
	displayCount: number;
	setDisplayCount: Dispatch<React.SetStateAction<number>>;
}

export function ItuneGallery(props: ItuneGalleryProps) {
	const {
		items,
		emptyMessage = "No results found",
		displayCount,
		setDisplayCount,
	} = props;
	const { isLoading, itunes } = useAppSelector((state) => state.itunes);
	const elementRef = useRef<HTMLDivElement>(null);

	const displayItems = items.slice(0, displayCount);
	const hasMoreToDisplay = displayCount < items.length;
	const noItems = displayItems?.length == 0;

	const { isInView, resetInView } = useIntersectionObserver({
		elementRef,
		activateObserver: !!itunes?.results?.length,
		options: {
			rootMargin: "50px",
			threshold: 0,
		},
	});

	useEffect(() => {
		if (hasMoreToDisplay && isInView) {
			setDisplayCount((prev) => Math.min(prev + 10, items.length));
			resetInView();
		}
	}, [isInView, hasMoreToDisplay, items.length, resetInView, setDisplayCount]);

	return (
		<>
			<Stack spacing={2}>
				<ShowOrHide when={noItems}>
					<Alert severity="info">{emptyMessage}</Alert>
				</ShowOrHide>
				<ShowOrHide when={isLoading}>
					<Loading size={40} />
				</ShowOrHide>
				<ShowOrHide when={!isLoading}>
					<Grid container spacing={2}>
						{displayItems.map((item) => (
							<Grid
								key={item.trackId ?? item.collectionId}
								size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
							>
								<Card>
									<CardActionArea
										component={item.trackViewUrl ? "a" : "div"}
										href={item.trackViewUrl}
										target={item.trackViewUrl ? "_blank" : undefined}
										rel={item.trackViewUrl ? "noreferrer" : undefined}
									>
										<ShowOrHide when={!!item.artworkUrl100}>
											<CardMedia
												component="img"
												height={160}
												image={item.artworkUrl100}
											/>
										</ShowOrHide>
										<CardContent>
											<Typography variant="subtitle1" fontWeight={600} noWrap>
												{item.trackName}
											</Typography>
											<ShowOrHide when={!!item.artistName}>
												<Typography
													variant="body2"
													color="text.secondary"
													noWrap
												>
													{item.artistName}
												</Typography>
											</ShowOrHide>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						))}
					</Grid>
				</ShowOrHide>
				<div ref={elementRef} style={{ height: 1 }} />
				<ShowOrHide when={displayItems?.length === items?.length && !noItems}>
					<Alert severity="success" sx={{ textAlign: "center" }}>
						All results loaded
					</Alert>
				</ShowOrHide>
			</Stack>
		</>
	);
}
