import {
	type RefObject,
	useEffect,
	useState,
	useCallback,
	useMemo,
} from "react";

export interface IntersectionObserverProps {
	elementRef: RefObject<HTMLDivElement | null>;
	activateObserver?: boolean;
	options?: IntersectionObserverInit;
}

export const useIntersectionObserver = (props: IntersectionObserverProps) => {
	const { elementRef, activateObserver = true, options } = props;
	const [isInView, setIsInView] = useState(false);

	const memoizedOptions = useMemo(
		() => options,
		[options?.root, options?.rootMargin, options?.threshold],
	);

	useEffect(() => {
		const element = elementRef?.current;
		if (!element || !activateObserver) {
			return;
		}

		const observer = new IntersectionObserver((entries) => {
			const isIntersecting = entries[0]?.isIntersecting ?? false;
			setIsInView(isIntersecting);
		}, memoizedOptions);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [activateObserver, memoizedOptions, elementRef]);

	const resetInView = useCallback(() => {
		setIsInView(false);
	}, []);

	return {
		isInView,
		resetInView,
	};
};
