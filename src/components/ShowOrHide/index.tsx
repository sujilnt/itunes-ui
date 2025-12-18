import type { ReactNode } from "react";

interface ShowOrHideProps {
	when: boolean;
	children: ReactNode;
}

export function ShowOrHide({ when, children }: ShowOrHideProps) {
	return when ? <>{children}</> : null;
}
