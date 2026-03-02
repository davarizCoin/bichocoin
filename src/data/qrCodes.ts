export interface QRCodeConfig {
  image: string;
  copyCode: string;
}

export const bichoQRCodes: Record<number, QRCodeConfig> = {
  2: { image: "/qrcodes/bicho-2.png", copyCode: "lnbc20n...PLACEHOLDER_LN_INVOICE_2_SAT" },
  5: { image: "/qrcodes/bicho-5.png", copyCode: "lnbc50n...PLACEHOLDER_LN_INVOICE_5_SAT" },
  10: { image: "/qrcodes/bicho-10.png", copyCode: "lnbc100n...PLACEHOLDER_LN_INVOICE_10_SAT" },
  20: { image: "/qrcodes/bicho-20.png", copyCode: "lnbc200n...PLACEHOLDER_LN_INVOICE_20_SAT" },
  50: { image: "/qrcodes/bicho-50.png", copyCode: "lnbc500n...PLACEHOLDER_LN_INVOICE_50_SAT" },
  100: { image: "/qrcodes/bicho-100.png", copyCode: "lnbc1u...PLACEHOLDER_LN_INVOICE_100_SAT" },
  200: { image: "/qrcodes/bicho-200.png", copyCode: "lnbc2u...PLACEHOLDER_LN_INVOICE_200_SAT" },
  500: { image: "/qrcodes/bicho-500.png", copyCode: "lnbc5u...PLACEHOLDER_LN_INVOICE_500_SAT" },
};

export const lotteryQRCodes: Record<string, QRCodeConfig> = {
  quina: { image: "/qrcodes/quina.png", copyCode: "COLE_AQUI_O_INVOICE_LIGHTNING_QUINA" },
  "mega-sena": { image: "/qrcodes/mega-sena.png", copyCode: "COLE_AQUI_O_INVOICE_LIGHTNING_MEGA_SENA" },
  "dia-de-sorte": { image: "/qrcodes/dia-de-sorte.png", copyCode: "COLE_AQUI_O_INVOICE_LIGHTNING_DIA_DE_SORTE" },
  "mais-milionaria": { image: "/qrcodes/mais-milionaria.png", copyCode: "COLE_AQUI_O_INVOICE_LIGHTNING_MAIS_MILIONARIA" },
  "mega-millions": { image: "/qrcodes/mega-millions.png", copyCode: "COLE_AQUI_O_INVOICE_LIGHTNING_MEGA_MILLIONS" },
  powerball: { image: "/qrcodes/powerball.png", copyCode: "COLE_AQUI_O_INVOICE_LIGHTNING_POWERBALL" },
  "lotto-america": { image: "/qrcodes/lotto-america.png", copyCode: "COLE_AQUI_O_INVOICE_LIGHTNING_LOTTO_AMERICA" },
  "2by2": { image: "/qrcodes/2by2.png", copyCode: "COLE_AQUI_O_INVOICE_LIGHTNING_2BY2" },
  stf01: { image: "/qrcodes/stf01.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
  stf02: { image: "/qrcodes/stf02.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
  stf03: { image: "/qrcodes/stf03.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
  stf04: { image: "/qrcodes/stf04.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
  stf05: { image: "/qrcodes/stf05.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
  stf06: { image: "/qrcodes/stf06.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
  stf07: { image: "/qrcodes/stf07.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
  stf08: { image: "/qrcodes/stf08.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
  stf09: { image: "/qrcodes/stf09.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
  stf10: { image: "/qrcodes/stf10.png", copyCode: "00020101021126360014br.gov.bcb.pix0114+5511999999999520400005303986540510.005802BR5915JOGUE NO BICHO6009SAO PAULO62070503***63045E61" },
};
