import { memo, useEffect, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import debounce from "debounce";

interface SearchProps {
	onSearch: (term: string) => void;
	value?: string;
}

const Search = memo(function Search({ onSearch, value }: SearchProps) {
	const onDebouncedSearch = useMemo(() => debounce(onSearch, 300), [onSearch]);

	useEffect(() => {
		return () => {
			onDebouncedSearch.clear();
		};
	}, [onDebouncedSearch]);

	return (
		<TextField
			fullWidth
			size="small"
			label="Search iTunes"
			slotProps={{
				input: {
					endAdornment: (value ?? "").trim().length ? (
						<InputAdornment position="end">
							<IconButton
								aria-label="clear search"
								edge="end"
								size="small"
								onClick={() => {
									onDebouncedSearch.clear();
									onSearch("");
								}}
							>
								<CloseIcon fontSize="small" />
							</IconButton>
						</InputAdornment>
					) : undefined,
				},
			}}
			onChange={(e) => {
				onDebouncedSearch(e.target.value);
			}}
		/>
	);
});

export default Search;
