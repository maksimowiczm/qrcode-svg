import QRCodeJs from "./qrcode.min";

interface Props {
  message: string;
  size?: number;
  padding?: number;
  mask?: undefined | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  errorCorrectionLevel?: "L" | "M" | "Q" | "H";
  errorCorrectionBoost?: boolean;
  color?: [string, string],
  verbose?: boolean;
}

export function QRCode({
  message,
  size = 256,
  padding = 4,
  mask = undefined,
  errorCorrectionLevel = "M",
  errorCorrectionBoost = true,
  color = ["#000", "#FFF"],
  verbose = false,
}: Props ): SVGElement {
  const params = {
    msg: message,
    dim: size,
    pad: padding,
    mtx: mask ?? -1,
    ecl: errorCorrectionLevel,
    ecb: errorCorrectionBoost ? 1 : 0,
    pal: [color, "transparent"],
    vrb: verbose ? 1 : 0,
  };
  return QRCodeJs(params);
}
