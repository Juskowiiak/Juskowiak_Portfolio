import { Container, Media1, Media2 } from "./style";
//importar media
import media1 from "../../assets/media/vid1.mov";
//import media2 from "../../assets/media/vid2.mov";

export default function MainVideo() {
  return (
    <Container>
      <Media1>
        <video src={media1} autoPlay playsInline loop muted />
      </Media1>
    </Container>
  );
}
