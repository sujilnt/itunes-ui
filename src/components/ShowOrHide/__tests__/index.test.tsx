import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { ShowOrHide } from "../index";

describe("ShowOrHide Component", () => {
	describe("with multiple children", () => {
		test("should render all children when true", () => {
			render(
				<ShowOrHide when={true}>
					<span data-testid="first">First</span>
					<span data-testid="second">Second</span>
				</ShowOrHide>,
			);

			expect(screen.getByTestId("first")).toBeInTheDocument();
			expect(screen.getByTestId("second")).toBeInTheDocument();
		});

		test("should hide all children when false", () => {
			render(
				<ShowOrHide when={false}>
					<span data-testid="first">First</span>
					<span data-testid="second">Second</span>
				</ShowOrHide>,
			);

			expect(screen.queryByTestId("first")).not.toBeInTheDocument();
			expect(screen.queryByTestId("second")).not.toBeInTheDocument();
		});
	});
});
