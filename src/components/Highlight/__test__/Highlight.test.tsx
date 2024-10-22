import { render, screen } from "@testing-library/react";
import { Highlight } from "../Highlight";
import { ChakraUIProvider } from "@/providers/ChakraUIProvider";

const defaultProps = {
  title: "Test",
  value: 130,
  units: "mph",
};

describe("", () => {
  test("should render Highlight component correctly", () => {
    const { asFragment } = render(
      <ChakraUIProvider>
        <Highlight {...defaultProps} />
      </ChakraUIProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("should render Highlight with wind_deg and progres icon", () => {
    const { getByRole } = render(
      <ChakraUIProvider>
        <Highlight {...defaultProps} wind_deg={180} progress={80} />
      </ChakraUIProvider>
    );
    const progressIcon = getByRole("progressbar");

    expect(progressIcon).toBeDefined();
    expect(screen.getByRole("img")).toBeDefined();
  });
});
