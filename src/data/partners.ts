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
    name: "Youth Network Europe",
    country: "Belgium",
    desc: "European network supporting youth organizations with capacity building.",
    address: "Rue de la Loi 155, Brussels, Belgium",
    lat: 50.8453,
    lng: 4.3574,
  },
  {
    name: "Futuro Joven",
    country: "Spain",
    desc: "Spanish NGO focused on youth participation and social innovation.",
    address: "Calle de Atocha 91, Madrid, Spain",
    lat: 40.4107,
    lng: -3.6994,
  },
  {
    name: "Jugendwerk Berlin",
    country: "Germany",
    desc: "German youth work organization specializing in intercultural exchanges.",
    address: "Alexanderplatz 4, Berlin, Germany",
    lat: 52.5219,
    lng: 13.4132,
  },
  {
    name: "Associazione Giovani",
    country: "Italy",
    desc: "Italian association empowering young people through education and mobility.",
    address: "Via Torino 2, Milano MI, Italy",
    lat: 45.4654,
    lng: 9.1866,
  },
  {
    name: "Stowarzyszenie Młodzież",
    country: "Poland",
    desc: "Polish youth organization promoting active citizenship and European values.",
    address: "ul. Świętokrzyska 12, Warszawa, Poland",
    lat: 52.237,
    lng: 21.0175,
  },
  {
    name: "Ung i Norden",
    country: "Sweden",
    desc: "Scandinavian partner focused on inclusivity and sustainable development.",
    address: "Hantverkargatan 3A, 112 21 Stockholm, Sweden",
    lat: 59.3275,
    lng: 18.0549,
  },
];

export const partnersMapCenter = {
  lat: partners.reduce((sum, partner) => sum + partner.lat, 0) / partners.length,
  lng: partners.reduce((sum, partner) => sum + partner.lng, 0) / partners.length,
};
