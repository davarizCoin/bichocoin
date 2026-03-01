export interface QRCodeConfig {
  image: string;
  copyCode: string;
}

const testInvoice = "lnbc29100n1p568ar2pp5aqfwptuewsk3egsxn622f8xaqmfql7kluf3yxp6etje7yc6m0yhsdqqcqzzsxqyz5vqsp5elfw8x3x27ch3r52ze3msk0r5k7whsq9c6jux50tk9mtvgqq8f7s9qxpqysgqfd37vls03yavptp2t4u4j2d7289qudlk5p6s33ahfjxsd3fk2znx9w32n760c3gdcsd73ypjj6745lw8mdkg6j3atn9mzafrpqmsqhqp0tcyeu";

export const bichoQRCodes: Record<number, QRCodeConfig> = {
  2: { image: "/qrcodes/bicho-2.png", copyCode: testInvoice },
  5: { image: "/qrcodes/bicho-5.png", copyCode: testInvoice },
  10: { image: "/qrcodes/bicho-10.png", copyCode: testInvoice },
  20: { image: "/qrcodes/bicho-20.png", copyCode: testInvoice },
  50: { image: "/qrcodes/bicho-50.png", copyCode: testInvoice },
  100: { image: "/qrcodes/bicho-100.png", copyCode: testInvoice },
  200: { image: "/qrcodes/bicho-200.png", copyCode: testInvoice },
  500: { image: "/qrcodes/bicho-500.png", copyCode: testInvoice },
};

export const lotteryQRCodes: Record<string, QRCodeConfig> = {
  quina: { image: "/qrcodes/quina.png", copyCode: testInvoice },
  "mega-sena": { image: "/qrcodes/mega-sena.png", copyCode: testInvoice },
  "dia-de-sorte": { image: "/qrcodes/dia-de-sorte.png", copyCode: testInvoice },
  "mais-milionaria": { image: "/qrcodes/mais-milionaria.png", copyCode: testInvoice },
  "mega-millions": { image: "/qrcodes/mega-millions.png", copyCode: testInvoice },
  powerball: { image: "/qrcodes/powerball.png", copyCode: testInvoice },
  "lotto-america": { image: "/qrcodes/lotto-america.png", copyCode: testInvoice },
  "2by2": { image: "/qrcodes/2by2.png", copyCode: testInvoice },
  stf01: { image: "/qrcodes/stf01.png", copyCode: testInvoice },
  stf02: { image: "/qrcodes/stf02.png", copyCode: testInvoice },
  stf03: { image: "/qrcodes/stf03.png", copyCode: testInvoice },
  stf04: { image: "/qrcodes/stf04.png", copyCode: testInvoice },
  stf05: { image: "/qrcodes/stf05.png", copyCode: testInvoice },
  stf06: { image: "/qrcodes/stf06.png", copyCode: testInvoice },
  stf07: { image: "/qrcodes/stf07.png", copyCode: testInvoice },
  stf08: { image: "/qrcodes/stf08.png", copyCode: testInvoice },
  stf09: { image: "/qrcodes/stf09.png", copyCode: testInvoice },
  stf10: { image: "/qrcodes/stf10.png", copyCode: testInvoice },
};
