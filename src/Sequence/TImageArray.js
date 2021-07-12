import { TImg } from "../images";
import { useImage } from "../hooks";

const TImgArray = () => {
  const [TT1, TT1S] = useImage(TImg[0]);
  const [TT2, TT2S] = useImage(TImg[1]);
  const [TT3, TT3S] = useImage(TImg[2]);
  const [TT4, TT4S] = useImage(TImg[3]);
  const [TT5, TT5S] = useImage(TImg[4]);

  const TnewImages = Array.of(
    [TT1, TT1S],
    [TT2, TT2S],
    [TT3, TT3S],
    [TT4, TT4S],
    [TT5, TT5S],
  
    )
    return TnewImages;
}

export default TImgArray;
