export type Location = {
  city: string
  state: string
  address: string | null
  phone: string | null
  whatsapp: string | null
  hours: string | null
  image: string | null
  googleMapsUrl: string | null
  status: 'principal' | 'editavel'
}

export const locations: Location[] = [
  {
    city: 'Manaus',
    state: 'AM',
    address: 'Avenida Torquato Tapajós, 597, Manaus - AM',
    phone: null,
    whatsapp: null,
    hours: null,
    image: null,
    googleMapsUrl: 'https://www.bing.com/maps/directions?FORM=HDRSC6&style=r&rtp=%7Epos.-3.0698752403259277_-60.02503204345703_Avenida%2520Torquato%2520Tapaj%25C3%25B3s%252C%2520597%252C%2520Manaus%252C%2520Amazonas_Instituto%2520Sharon%2520%257C%2520Especializa%25C3%25A7%25C3%25A3o%2520e%2520P%25C3%25B3s%2520na%2520%C3%81rea%2520da%2520Sa%C3%BAde%2520%257C%2520Refer%C3%AAncia%2520em%2520HOF%2520em%2520Manaus_ypid%3AYN4C51A8C2837A2E75&cp=-3.069875%7E-60.025032&lvl=16',
    status: 'principal',
  },
]

export const locationSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Instituto+Sharon+Manaus+AM'