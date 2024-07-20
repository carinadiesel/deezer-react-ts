import { createContext, useContext, useState } from "react";

// export type ArtistInfo = {
//   smallImgUrl: string;
//   bigImgUrl: string;
//   name: string;
//   fanCount: number;
// };

// export type ArtistContext = {
//   artists: [];
//   //   topFive?: any;
//   //   albumList: [];
// };

// type ForecastContextType = {
//     weatherNow: Forecast[];
//     setWeatherNow: any;
//     lat?: Number | null;
//     lon?: Number | null;
//     setLon: any;
//     setLat: any;
//   };

export const ArtistContext = createContext(null);

// type Props = {
//   children?: React.ReactNode;
// };

export const ArtistContextProvider = (children: any) => {
  //   const [artistInfo, setArtistInfo] = useState({
  //     smallImgUrl: "",
  //     bigImgUrl: "string",
  //     name: "string",
  //     fanCount: 0,
  //   });

  const [artistInfo, setArtistInfo] = useState([]);
  return (
    <ArtistContextProvider value={{ artistInfo, setArtistInfo }}>
      {children}
    </ArtistContextProvider>
  );
};

export const useArtistContext = () => {
  const context = useContext(ArtistContext);
  if (context === null) {
    throw new Error(
      "useArtistContext must be used within the useArtistContextProvider"
    );
  }
  return context;
};
