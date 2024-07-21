import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CSSObject, styled } from "@mui/material/styles";
import {
  Info,
  InfoSlotStyles,
  InfoSubtitle,
  InfoTitle,
} from "../../components/ArtistCard.tsx/info-basic";

type ArtistCardProps = {
  name: "string";
  fansCount: number;
  imgUrl: string;
  // clickEventHandler: any;
};

const useStyles = (): CSSObject & Partial<InfoSlotStyles> => {
  return {
    eyebrow: {
      color: "rgba(255, 255, 255, 0.92)",
      fontFamily: '"Spartan", san-serif',
      lineHeight: 1.4,
      fontSize: "1.0625rem",
      letterSpacing: "1px",
      textTransform: "initial",
      marginBottom: 0,
    },
    title: {
      color: "#fff",
      fontSize: "1.25rem",
      fontWeight: "bold" as const,
      lineHeight: 1.2,
    },
    subtitle: {
      color: "rgba(255, 255, 255, 0.72)",
      lineHeight: 1.5,
    },
  };
};

const StyledCard = styled(Card)({
  borderRadius: "1rem",
  boxShadow: "none",
  position: "relative",
  width: "15rem",
  height: "20rem",
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "74%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
  },
});

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundPosition: "center",
});

const Content = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  paddingBottom: "1.5rem",
  position: "absolute",
  zIndex: 2,
  bottom: 0,
  width: "100%",
}));

export default function ArtistCard({
  name,
  fansCount,
  imgUrl,
}: // clickEventHandler,
ArtistCardProps) {
  return (
    <StyledCard>
      <StyledCardMedia image={imgUrl} />
      <Content>
        <Info useStyles={useStyles}>
          <InfoTitle
            sx={{
              textAlign: "center",
              paddingX: 1,
            }}
          >
            {name}
          </InfoTitle>
          <InfoSubtitle>{fansCount} fans</InfoSubtitle>
        </Info>
      </Content>
    </StyledCard>
  );
}
