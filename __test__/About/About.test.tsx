import { About } from "@/app/components/About/About";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders a heading", () => {
    render(<About />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
  it('renders content',()=>{
    render(<About/>);

    const content = screen.getAllByRole('paragraph')
    expect(content.length).toBeGreaterThan(0)
  });
})
