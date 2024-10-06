## QR Code svg generator

Fork of [qrcode-svg ](https://github.com/datalog/qrcode-svg) with added TypeScript wrapper.

Original repo provides only minified version so obviously there is no way to add new features or fix bugs.

## Example

```bash
npm install @maksimowicz/qrcode-svg
```

```typescript
import { QRCode } from "@maksimowicz/qrcode-svg";

const svgNode = QRCode({ message: "Hello World!" });
```

### Available options

```typescript
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
```

## Options

* **message** - QR Code `message`, obviously, this is **mandatory parameter**.
* **size** - is equal to needed dimension (width or height) in pixels, default value is `256`.
* **padding** - white space padding, default value is `4` blocks, set `0` for no padding.
* **mask** - mask pattern from `0` to `7`, if undefined suitable mask is choosen automatically
* **errorCorrectionLevel** - error correction level: `L`, `M`, `H`, `Q`, default value is `M`.
* **errorCorrectionBoost** - error correction level boost, default value is `true`, set `false` if no boost needed.
* **color** - is array of [`color`,`background-color`] strings that represent hex color codes, default value is [`'#000'`] along with transparent background. Set [`'#000'`,`'#fff'`] to make background opaque.
* **verbose** - svg node is optimized to be compact and default value is `false`, set this parameter to `true` in case you need more verbose output.
