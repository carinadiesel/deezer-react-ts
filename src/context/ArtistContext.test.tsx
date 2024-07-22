// import { fireEvent, render } from "@testing-library/react";
// import { ArtistContextProvider, useArtistContext } from "./ArtistContext";
// import "@testing-library/jest-dom/extend-expect";

// const MockComponent = () => {
//   const { artistInfo, setArtistInfo } = useArtistContext();
//   return (
//     <div>
//       <span data-testid="artist-name">
//         {artistInfo ? artistInfo.name : "No artist"}
//       </span>
//       <button
//         onClick={() =>
//           setArtistInfo({
//             id: 1,
//             name: "Test Artist",
//             picture_small: "url1",
//             picture_medium: "url2",
//             picture_xl: "url3",
//             nb_album: "12",
//             nb_fan: 17,
//           })
//         }
//       >
//         Set Artist
//       </button>
//     </div>
//   );
// };

// describe("ArtistContextProvider", () => {
//   it("initializes with null artistInfo", () => {
//     const { getByTestId } = render(
//       <ArtistContextProvider>
//         <MockComponent />
//       </ArtistContextProvider>
//     );

//     expect(getByTestId("artist-name")).toHaveTextContent("No artist");
//   });

//   it("updates artistInfo correctly", () => {
//     const { getByText, getByTestId } = render(
//       <ArtistContextProvider>
//         <MockComponent />
//       </ArtistContextProvider>
//     );

//     fireEvent.click(getByText("Set Artist"));

//     expect(getByTestId("artist-name")).toHaveTextContent("Test Artist");
//   });

//   it("throws error when used outside of ArtistContextProvider", () => {
//     const ComponentUsingContext = () => {
//       useArtistContext();
//       return null;
//     };

//     expect(() => render(<ComponentUsingContext />)).toThrow(
//       "useArtistContext must be used within the ArtistContextProvider"
//     );
//   });
// });
