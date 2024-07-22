import { createContext, useContext, useState } from "react";

export type ArtistInfo = {
  id: number;
  picture_small: string;
  picture_medium: string;
  picture_xl: string;
  name: string;
  nb_fan: number;
  nb_album: string;
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
