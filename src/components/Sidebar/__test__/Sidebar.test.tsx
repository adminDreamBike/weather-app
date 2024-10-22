import { render } from "@testing-library/react";
import { Sidebar } from "../Sidebar";
import { ChakraUIProvider } from "@/providers/ChakraUIProvider";

describe("Sidebar component", () => {
  test("", () => {
    const { asFragment } = render(
      <ChakraUIProvider>
        <Sidebar />
      </ChakraUIProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
