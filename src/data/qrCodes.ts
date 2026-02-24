export interface QRCodeConfig {
  image: string;
  copyCode: string;
}

export const bichoQRCodes: Record<number, QRCodeConfig> = {
  2: { image: "/qrcodes/bicho-2.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+551199999999952040000530398654042.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***6304FBDB" },
  5: { image: "/qrcodes/bicho-5.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+551199999999952040000530398654045.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***6304EDCD" },
  10: { image: "/qrcodes/bicho-10.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
  20: { image: "/qrcodes/bicho-20.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540520.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***630402E4" },
  50: { image: "/qrcodes/bicho-50.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540550.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63043812" },
};

export const lotteryQRCodes: Record<string, QRCodeConfig> = {
  quina: { image: "/qrcodes/quina.png", copyCode: "COLE_AQUI_O_CODIGO_PIX_QUINA" },
  "mega-sena": { image: "/qrcodes/mega-sena.png", copyCode: "COLE_AQUI_O_CODIGO_PIX_MEGA_SENA" },
  "dia-de-sorte": { image: "/qrcodes/dia-de-sorte.png", copyCode: "COLE_AQUI_O_CODIGO_PIX_DIA_DE_SORTE" },
  "mais-milionaria": { image: "/qrcodes/mais-milionaria.png", copyCode: "COLE_AQUI_O_CODIGO_PIX_MAIS_MILIONARIA" },
  "mega-millions": { image: "/qrcodes/mega-millions.png", copyCode: "COLE_AQUI_O_CODIGO_PIX_MEGA_MILLIONS" },
  powerball: { image: "/qrcodes/powerball.png", copyCode: "COLE_AQUI_O_CODIGO_PIX_POWERBALL" },
  "lotto-america": { image: "/qrcodes/lotto-america.png", copyCode: "COLE_AQUI_O_CODIGO_PIX_LOTTO_AMERICA" },
  "2by2": { image: "/qrcodes/2by2.png", copyCode: "COLE_AQUI_O_CODIGO_PIX_2BY2" },
};
