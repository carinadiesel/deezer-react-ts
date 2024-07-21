import { createContext, useContext, useState } from "react";

// export type ArtistInfo = {
//   smallImgUrl: string;
//   bigImgUrl: string;
//   name: string;
//   fanCount: number;
// };

// export type ArtistContextType = {
//   artistInfo: any;
//   setArtistInfo: any;
// };

export type ArtistInfo = {
  smallImgUrl: string;
  bigImgUrl: string;
  name: string;
  fanCount: number;
};

export type ArtistContextType = {
  artistInfo: ArtistInfo | null;
  setArtistInfo: React.Dispatch<React.SetStateAction<ArtistInfo | null>>;
};

export const ArtistContext = createContext<ArtistContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

export const ArtistContextProvider = ({ children }: Props) => {
  const [artistInfo, setArtistInfo] = useState<ArtistInfo | null>(null);
  return (
    <ArtistContext.Provider value={{ artistInfo, setArtistInfo }}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtistContext = () => {
  const context = useContext(ArtistContext);
  if (context === null) {
    throw new Error(
      "useArtistContext must be used within the ArtistContextProvider"
    );
  }
  return context;
};

// export const ArtistContextProvider = ({ children }: Props) => {
//   const [artistInfo, setArtistInfo] = useState(null);
//   return (
//     <ArtistContext.Provider value={{ artistInfo, setArtistInfo }}>
//       {children}
//     </ArtistContext.Provider>
//   );
// };

// export const useArtistContext = () => {
//   const context = useContext(ArtistContext);
//   if (context === null) {
//     throw new Error(
//       "useArtistContext must be used within the useArtistContextProvider"
//     );
//   }
//   return context;
// };
