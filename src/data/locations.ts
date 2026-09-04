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
    googleMapsUrl: 'https://www.google.com/maps/place/Instituto+Sharon+%7C+Especializa%C3%A7%C3%A3o+e+P%C3%B3s+na+%C3%81rea+da+Sa%C3%BAde+%7C+Refer%C3%AAncia+em+HOF+em+Manaus/@-3.0698568,-60.0276067,17z/data=!3m1!4b1!4m6!3m5!1s0x926c1ba8e98b19ff:0xd3950fa77b7acfd1!8m2!3d-3.0698622!4d-60.0250318!16s%2Fg%2F11rd9336p8?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D',
    status: 'principal',
  },
]

export const locationSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Instituto+Sharon+Manaus+AM'