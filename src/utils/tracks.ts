const tracks = [
  {
    label: `Supersnajper`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip1.mp4`,
  },
  {
    label: `Chciałbym się kiedyś obudzić`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip2.mp4`,
  },
  {
    label: `Kurwa`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip3.mp4`,
  },
  {
    label: `Liż mi jaja`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip4.mp4`,
  },
  {
    label: `Jebana akcyza`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip5.mp4`,
  },
  {
    label: `Nalot na wątrobę`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip6.mp4`,
  },
  {
    label: `Nie uchowa się nikt`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip7.mp4`,
  },
  {
    label: `Odmeldowuję się`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip8.mp4`,
  },
  {
    label: `Kurwiwi`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip9.mp4`,
  },
  {
    label: `Konfucjusz`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip10.mp4`,
  },
  {
    label: `Nalot`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip11.mp4`,
  },
  {
    label: `Niemiecki`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip12.mp4`,
  },
  {
    label: `Tylko polmos`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip13.mp4`,
  },
  {
    label: `Daj mi wódy`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip14.mp4`,
  },
  {
    label: `Kocham polmos`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip15.mp4`,
  },
  {
    label: `Ale bym się nakurwił`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip16.mp4`,
  },
  {
    label: `Potem to chyba jebiesz`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip17.mp4`,
  },
  {
    label: `Nigdy nie piłem`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip18.mp4`,
  },
  {
    label: `Po za tym tylko polmos`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip19.mp4`,
  },
  {
    label: `Nienawiść do akcyzy`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip20.mp4`,
  },
  {
    label: `Podania starych ludów`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip21.mp4`,
  },
  {
    label: `Prawda o Jahwe`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip22.mp4`,
  },
  {
    label: `Jade sobie samochodem`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip23.mp4`,
  },
  {
    label: `Co byś chciał zmienić w życiu?`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip24.mp4`,
  },
  {
    label: `Podaje mi nóż`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip25.mp4`,
  },
  {
    label: `Z tej strony mówi`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip26.mp4`,
  },
  {
    label: `Czy wierzysz w polmos?`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip27.mp4`,
  },
  {
    label: `M982`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip28.mp4`,
  },
  {
    label: `Kolejne pomówienia`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip29.mp4`,
  },
  {
    label: `Kocham wódę`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip30.mp4`,
  },
  {
    label: `Wiedza starożytnych filozofów`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip31.mp4`,
  },
  {
    label: `Nigdy nie wierzyłem w koż`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip32.mp4`,
  },
  {
    label: `Ogłaszam wszem i wobec`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip33.mp4`,
  },
  {
    label: `Tydzień urlopu`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip34.mp4`,
  },
  {
    label: `Przestroga dla fanów kożu`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip35.mp4`,
  },
  {
    label: `Kiedyś spotkałem żula`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip36.mp4`,
  },
  {
    label: `Zamknij pizdę`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip37.mp4`,
  },
  {
    label: `Jestem zjebem`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip38.mp4`,
  },
  {
    label: `Golf r32`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip39.mp4`,
  },
  {
    label: `Pierdolę niemiecką motoryzację`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip40.mp4`,
  },
  {
    label: `Skyline`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip41.mp4`,
  },
  {
    label: `Nie było dnia`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip42.mp4`,
  },
  {
    label: `Kocham piwo`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip43.mp4`,
  },
  {
    label: `Piosenka`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip44.mp4`,
  },
  {
    label: `Pierdolę kożowników`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip45.mp4`,
  },
  {
    label: `2 zdania o jankesach`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip46.mp4`,
  },
  {
    label: `Kocham policję`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip47.mp4`,
  },
  {
    label: `Wziąłbym chuja do ręki`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip48.mp4`,
  },
  {
    label: `Ence pence`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip49.mp4`,
  },
  {
    label: `Kocham polmos v2`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip50.mp4`,
  },
  {
    label: `Hop hop wódeczko`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip51.mp4`,
  },
  {
    label: `Nie słychać kierunkowskazu`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip52.mp4`,
  },
  {
    label: `Wziąłbym chuja do ręki v2`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip53.mp4`,
  },
  {
    label: `Kocham memy`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip54.mp4`,
  },
  {
    label: `Oficjalnie ogłaszam`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip55.mp4`,
  },
  {
    label: `Alkoholiczny mordulec`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip56.mp4`,
  },
  {
    label: `Kurwa kurwa kurwa`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip57.mp4`,
  },
  {
    label: `Zjadłem kanapeczkę`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip58.mp4`,
  },
  {
    label: `Za matkę zabiję`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip59.mp4`,
  },
  {
    label: `Każdego kożowego purystę`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip60.mp4`,
  },
  {
    label: `Chlanko jebanko i spanko`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip61.mp4`,
  },
  {
    label: `Wiele osób mnie pyta`,
    file: `${import.meta.env.BASE_URL}/tracks/audioclip62.mp4`,
  },
];

export default tracks;
