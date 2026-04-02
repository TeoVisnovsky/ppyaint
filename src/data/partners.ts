export type Partner = {
  name: string;
  country: string;
  desc: string;
  address: string;
  lat: number;
  lng: number;
};

export const partners: Partner[] = [
  {
    name: "Szansa",
    country: "Poland",
    desc: "Warsaw-based organization dedicated to youth empowerment and social inclusion.",
    address: "Warszawa, Poland",
    lat: 52.2297,
    lng: 21.0122,
  },
];

export const partnersMapCenter = {
  lat: partners.reduce((sum, partner) => sum + partner.lat, 0) / partners.length,
  lng: partners.reduce((sum, partner) => sum + partner.lng, 0) / partners.length,
};
