import { TImg } from "../images";
import { useImage } from "../hooks";

const TImgArray = () => {
  const [TT1, TT1S] = useImage(TImg[0]);
  const [TT2, TT2S] = useImage(TImg[1]);
  const [TT3, TT3S] = useImage(TImg[2]);
  const [TT4, TT4S] = useImage(TImg[3]);
  const [TT5, TT5S] = useImage(TImg[4]);
  const [TT6, TT6S] = useImage(TImg[5]);
  const [TT7, TT7S] = useImage(TImg[6]);
  const [TT8, TT8S] = useImage(TImg[7]);
  const [TT9, TT9S] = useImage(TImg[8]);
  const [TT10, TT10S] = useImage(TImg[9]);
  const [TT11, TT11S] = useImage(TImg[10]);
  const [TT12, TT12S] = useImage(TImg[11]);
  const [TT13, TT13S] = useImage(TImg[12]);
  const [TT14, TT14S] = useImage(TImg[13]);
  const [TT15, TT15S] = useImage(TImg[14]);
  
  const TnewImages = Array.of(
    [TT1, TT1S],
    [TT2, TT2S],
    [TT3, TT3S],
    [TT4, TT4S],
    [TT5, TT5S],
    [TT6, TT6S],
    [TT7, TT7S],
    [TT8, TT8S] ,
    [TT9, TT9S] ,
    [TT10, TT10S],
    [TT11, TT11S],
    [TT12, TT12S],
    [TT13, TT13S],
    [TT14, TT14S],
    [TT15, TT15S],
  
    )
    return TnewImages;
}

export default TImgArray;
