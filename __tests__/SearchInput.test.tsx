import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import SearchInput from "@/components/SearchInput";

jest.mock("lodash.debounce", () => jest.fn((fn) => fn));

describe("Search Input", () => {
  it("renders input correctly", () => {
    const debouncedFunction = jest.fn();
    render(<SearchInput handleSearch={debouncedFunction} />);

    const searchInput = screen.getByRole("textbox");

    expect(searchInput).toBeInTheDocument();
  });

  it("renders input's value correctly", async () => {
    const debouncedFunction = jest.fn();
    render(<SearchInput handleSearch={debouncedFunction} />);

    const searchInput = screen.getByRole("textbox");

    fireEvent.change(searchInput, { target: { value: "Test" } });

    await waitFor(() => {
      // Verifica que la función debounced haya sido llamada correctamente
      expect(debouncedFunction).toHaveBeenCalled();
      expect(debouncedFunction).toHaveBeenCalledWith("Test");
    });
  });
});
