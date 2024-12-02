import NavBar from "@/app/components/NavBar/NavBar";
import { AppContextProvider } from "@/app/context/appContext";
import { fireEvent, render, screen } from "@testing-library/react";

// Mock context
const mockSetSelectedTab = jest.fn();

const provideContenxt = (ui: JSX.Element) => {
  return (
    <AppContextProvider value={{ selectedTab: "home" }}>
      {ui}
    </AppContextProvider>
  );
};
describe("Navigation", () => {
  render(provideContenxt(<NavBar />));

  it("renders logo", () => {
    render(provideContenxt(<NavBar />));
    const logo = screen.getAllByText("Adnan");
    expect(logo.length).toBeGreaterThan(0)
  });
  it("should render buttons", () => {
      const homeButton = screen.getAllByRole('');
      const aboutButton = screen.getByText(/About/i);
      const skillsButton = screen.getByText(/Skills/i);
      const experienceButton = screen.getByText(/Experience/i);
    expect(homeButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
    expect(skillsButton).toBeInTheDocument();
    expect(experienceButton).toBeInTheDocument();

   
  });

//   it("should change active state on click", () => {

//     // Initially, the "home" button should have the active style
//     console.log(homeButton,'come')
//     expect(homeButton).toHaveStyle("background: rgba(88,175,223,.1)"); // Active style

//     // Click the "About" button
//     fireEvent.click(aboutButton);

//     // Check if the "About" button is now active
//     expect(aboutButton).toHaveStyle("background: rgba(88,175,223,.1)"); // Active style
//     expect(homeButton).not.toHaveStyle("background: rgba(88,175,223,.1)"); // Home button should not be active anymore

//     // Check that mockSetSelectedTab was called with "about"
//     expect(mockSetSelectedTab).toHaveBeenCalledWith("about");
//   });
});
