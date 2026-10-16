// Original family itinerary, preserved verbatim from the existing repository.
const DATA = [
  {
    "id": 1,
    "date": "08/01",
    "place": "Christchurch",
    "summary": "Arrivée à 12h55, récupération du camping-car, courses et installation.",
    "main": "Découverte de la ville : tramway historique, Riverside Market, cathédrale et street art dans le Salt District.",
    "option": "Balade urbaine selon fatigue du voyage.",
    "sleep": "Hôtel à définir",
    "km": 0,
    "page": 1,
    "lat": -43.5321,
    "lng": 172.6362,
    "island": "Sud"
  },
  {
    "id": 2,
    "date": "09/01",
    "place": "Akaroa",
    "summary": "Courses puis route vers la péninsule de Banks.",
    "main": "Arrêts à Kaituna River, Little River et église de Ketegrins (nom à vérifier). Randonnée Stony Bay Peak possible.",
    "option": "Croisière dauphins Black Cat Cruises ; Giant’s House (16 $ indiqué).",
    "sleep": "Camping vers Akaroa",
    "km": 85,
    "page": 1,
    "lat": -43.804,
    "lng": 172.968,
    "island": "Sud"
  },
  {
    "id": 3,
    "date": "10/01",
    "place": "Mount Cook",
    "summary": "Long trajet d’Akaroa vers Aoraki / Mount Cook (env. 5 h 30 notées).",
    "main": "Arrêts Geraldine, Peel Forest, lac Tekapo et Mount John (montée env. 2 h 30).",
    "option": "Église Good Shepherd ; visite centre alpin Sir Edmund Hillary (20 $ indiqué).",
    "sleep": "DOC camping White Horse Hill",
    "km": 430,
    "page": 1,
    "lat": -43.735,
    "lng": 170.097,
    "island": "Sud"
  },
  {
    "id": 4,
    "date": "11/01",
    "place": "Mount Cook",
    "summary": "Journée randonnée dans le parc Aoraki / Mount Cook.",
    "main": "Hooker Valley Track : 10 km, env. 3 h ; ponts suspendus.",
    "option": "Mueller Hut Route (env. 5 h) ou Sealy Tarns Track (env. 3 h 30), selon conditions.",
    "sleep": "Mount Cook",
    "km": 0,
    "page": 1,
    "lat": -43.735,
    "lng": 170.097,
    "island": "Sud"
  },
  {
    "id": 5,
    "date": "12/01",
    "place": "Dunedin",
    "summary": "Route vers Dunedin via l’est de l’Otago.",
    "main": "Tasman Lake (marche env. 40 min), Elephant Rocks, Moeraki Boulders.",
    "option": "Oamaru : Clay Cliffs, observation des manchots, Totara Estate / musée, Speight’s Brewery ou Emerson’s.",
    "sleep": "Camping Dunedin / Otago",
    "km": 320,
    "page": 1,
    "lat": -45.8788,
    "lng": 170.5028,
    "island": "Sud"
  },
  {
    "id": 6,
    "date": "13/01",
    "place": "Dunedin",
    "summary": "Péninsule d’Otago et côte.",
    "main": "Tunnel Beach, Sandfly Bay (env. 3 km), Seal Point et observation de la faune.",
    "option": "Croisière Wildlife Cruise (env. 6 h indiqué), Royal Albatross Centre (54 $), Larnach Castle (45 $), visite Orokonui.",
    "sleep": "Dunedin ; alternative près de Sandfly Bay",
    "km": 85,
    "page": 2,
    "lat": -45.8788,
    "lng": 170.5028,
    "island": "Sud"
  },
  {
    "id": 7,
    "date": "14/01",
    "place": "Te Anau",
    "summary": "Trajet Dunedin → Te Anau (env. 3 h 25 notées).",
    "main": "Arrêts à Nugget Point, Surat Bay, Cannibal Bay et Catlins selon le temps.",
    "option": "Baignade en piscine chauffée à Dunedin (6 $ notés), Tunnel Beach, Lake Te Anau.",
    "sleep": "DOC Cascade Creek ou Te Anau",
    "km": 290,
    "page": 2,
    "lat": -45.416,
    "lng": 167.718,
    "island": "Sud"
  },
  {
    "id": 8,
    "date": "15/01",
    "place": "Te Anau",
    "summary": "Randonnées sur la route de Milford Sound.",
    "main": "Cascade Creek / Lake Gunn (30 min), Key Summit Track (3 h / 7,7 km), Lake Marian Track (3 h / 6 km).",
    "option": "Homer Tunnel, Hundred Falls ; Gertrude Saddle (6 h, difficile, à éviter par mauvais temps).",
    "sleep": "Milford Sound Lodge (110 $ notés) ou camping",
    "km": 120,
    "page": 2,
    "lat": -45.416,
    "lng": 167.718,
    "island": "Sud"
  },
  {
    "id": 9,
    "date": "16/01",
    "place": "Queenstown",
    "summary": "Croisière Milford Sound le matin puis retour vers Queenstown (env. 3 h 55 notées).",
    "main": "Croisière réservée dans le programme : départ 8 h 30, durée 2 h, 165 $ indiqués.",
    "option": "Te Anau Bird Sanctuary et jardins de Queenstown.",
    "sleep": "Camping Queenstown",
    "km": 290,
    "page": 2,
    "lat": -45.031,
    "lng": 168.663,
    "island": "Sud"
  },
  {
    "id": 10,
    "date": "17/01",
    "place": "Queenstown",
    "summary": "Journée montagne à Queenstown.",
    "main": "Ben Lomond : 7–9 h de marche ; télécabine Skyline possible pour réduire la montée.",
    "option": "Skyline luge, VTT de descente, alpine randonnée, Onsen Hot Pools (réservation signalée).",
    "sleep": "Queenstown",
    "km": 0,
    "page": 2,
    "lat": -45.031,
    "lng": 168.663,
    "island": "Sud"
  },
  {
    "id": 11,
    "date": "18/01",
    "place": "Glenorchy",
    "summary": "Excursion au nord du lac Wakatipu.",
    "main": "Earnslaw / Walter Peak Farm, Mount Crichton Loop (env. 2 h 30), Bob’s Cove (env. 2 h).",
    "option": "Lagoon de Glenorchy (1 h), visite du lac Moke et autres balades.",
    "sleep": "Camping Glenorchy",
    "km": 90,
    "page": 3,
    "lat": -44.85,
    "lng": 168.39,
    "island": "Sud"
  },
  {
    "id": 12,
    "date": "19/01",
    "place": "Wanaka",
    "summary": "Route Queenstown → Wanaka (env. 1 h 15 notées).",
    "main": "Gibbston Valley winery, Kawarau Bridge et Arrowtown ; Cardrona et sa clôture de soutiens-gorge.",
    "option": "Diamond Lake / Rocky Mountain (3 h), dégustation de vins, randonnée près de Wanaka.",
    "sleep": "Camping Wanaka",
    "km": 110,
    "page": 3,
    "lat": -44.696,
    "lng": 169.136,
    "island": "Sud"
  },
  {
    "id": 13,
    "date": "20/01",
    "place": "Wanaka",
    "summary": "Grande randonnée au-dessus du lac.",
    "main": "Roys Peak : 7–9 h de marche.",
    "option": "Journée de repos si météo défavorable ou fatigue.",
    "sleep": "Wanaka",
    "km": 0,
    "page": 3,
    "lat": -44.696,
    "lng": 169.136,
    "island": "Sud"
  },
  {
    "id": 14,
    "date": "21/01",
    "place": "Haast",
    "summary": "Route via le col de Haast (env. 2 h vers Pleasant Flat indiquées).",
    "main": "Mount Isthmus (6 h 45), Blue Pools Track (env. 1 h), Thunder Creek Falls.",
    "option": "Roaring Billy Falls (env. 20 min).",
    "sleep": "Pleasant Flat campsite ou Haast",
    "km": 145,
    "page": 3,
    "lat": -43.881,
    "lng": 169.041,
    "island": "Sud"
  },
  {
    "id": 15,
    "date": "22/01",
    "place": "Fox Glacier",
    "summary": "Haast → Fox Glacier (env. 2 h notées).",
    "main": "Dune Lake Walk (30 min), Swamp Forest Walk (20 min), arrêt à Bruce Bay.",
    "option": "Roberts Point Track (env. 5 h 30, difficile) ou glacier de Fox ; centre Kiwi House West Coast.",
    "sleep": "Camping vers Hokitika / Okarito",
    "km": 165,
    "page": 3,
    "lat": -43.463,
    "lng": 170.018,
    "island": "Sud"
  },
  {
    "id": 16,
    "date": "23/01",
    "place": "Hokitika",
    "summary": "Route sur la West Coast.",
    "main": "Okarito kayak dans les lagunes (env. 4 h), Hokitika Gorge et Pororari River.",
    "option": "White Heron Sanctuary Tours, visite de Greymouth, Shantytown (14 $ notés).",
    "sleep": "Westport",
    "km": 240,
    "page": 4,
    "lat": -42.717,
    "lng": 170.966,
    "island": "Sud"
  },
  {
    "id": 17,
    "date": "24/01",
    "place": "Westport",
    "summary": "Exploration de la côte ouest.",
    "main": "Cape Foulwind Walkway (env. 2 h aller-retour), Tauranga Bay et colonie de phoques.",
    "option": "Musée de Kawariri, Maruia Falls, rafting sur Buller River (180 $ indiqué).",
    "sleep": "Kaiteriteri ou Marahau",
    "km": 240,
    "page": 4,
    "lat": -41.755,
    "lng": 171.602,
    "island": "Sud"
  },
  {
    "id": 18,
    "date": "25/01",
    "place": "Marahau",
    "summary": "Abel Tasman National Park.",
    "main": "Kayak en liberté ou guidé avec Abel Tasman Kayaks ; Anchorage Bay.",
    "option": "Te Pukatea Bay et Cleopatra’s Pool (env. 1 h de marche depuis Anchorage).",
    "sleep": "Camping Marahau / Kaiteriteri",
    "km": 15,
    "page": 4,
    "lat": -41.003,
    "lng": 173.006,
    "island": "Sud"
  },
  {
    "id": 19,
    "date": "26/01",
    "place": "Kaiteriteri",
    "summary": "Deuxième journée Abel Tasman.",
    "main": "Kayak, plages, Split Apple Rock.",
    "option": "Water taxi, marche côtière ; repos à la plage si météo défavorable.",
    "sleep": "Camping Kaiteriteri",
    "km": 15,
    "page": 4,
    "lat": -41.035,
    "lng": 173.018,
    "island": "Sud"
  },
  {
    "id": 20,
    "date": "27/01",
    "place": "Kaiteriteri",
    "summary": "Excursion dans les Marlborough Sounds / Nelson.",
    "main": "Cable Bay Adventure Park, balade et plages.",
    "option": "Skywire (tarifs 215–270 $ notés), Pelorus Bridge, Havelock, Forrest Winery, dégustations.",
    "sleep": "Momorangi Bay ou Ngakuta Bay",
    "km": 165,
    "page": 4,
    "lat": -41.035,
    "lng": 173.018,
    "island": "Sud"
  },
  {
    "id": 21,
    "date": "28/01",
    "place": "Picton",
    "summary": "Marlborough Sounds.",
    "main": "Kayak au départ de Picton ou Ngakuta Bay ; Queen Charlotte Track, tronçon d’Anakiwa.",
    "option": "Excursion guidée en kayak (env. 8 h 30 ; 170 $ notés), promenade courte en baie.",
    "sleep": "Momorangi / Ngakuta Bay",
    "km": 75,
    "page": 5,
    "lat": -41.291,
    "lng": 174.001,
    "island": "Sud"
  },
  {
    "id": 22,
    "date": "29/01",
    "place": "Wellington",
    "summary": "Traversée du détroit de Cook.",
    "main": "Ferry Picton → Wellington ; temps de traversée env. 3 h 30 (à vérifier selon compagnie).",
    "option": "Wellington : Cuba Street, Te Papa, Lambton Quay, Wellington Museum, Mount Victoria.",
    "sleep": "Wellington ou Kapiti Coast",
    "km": 0,
    "page": 5,
    "lat": -41.286,
    "lng": 174.776,
    "island": "Nord"
  },
  {
    "id": 23,
    "date": "30/01",
    "place": "Wellington",
    "summary": "Journée découverte de la capitale.",
    "main": "Te Papa, promenade le long du front de mer, Weta Workshop.",
    "option": "Houghton Bay, Island Bay, Oriental Bay, Mount Victoria, Zealandia.",
    "sleep": "Wellington",
    "km": 30,
    "page": 5,
    "lat": -41.286,
    "lng": 174.776,
    "island": "Nord"
  },
  {
    "id": 24,
    "date": "31/01",
    "place": "Wellington",
    "summary": "Kapiti Coast ou journée supplémentaire en ville.",
    "main": "Kapiti Island Nature Tours : excursion 3–5 h ou 5 h 30 ; réservation notée.",
    "option": "Paekakariki Escarpment Track (env. 10 km / 3 h 45), Zealandia si non visitée.",
    "sleep": "Paekakariki / Kapiti ou Wellington",
    "km": 65,
    "page": 5,
    "lat": -41.286,
    "lng": 174.776,
    "island": "Nord"
  },
  {
    "id": 25,
    "date": "01/02",
    "place": "New Plymouth",
    "summary": "Route vers le mont Taranaki.",
    "main": "Pouakai Crossing (19 km, env. 9 h, difficile) ou ascension du mont Taranaki (9 h, difficile).",
    "option": "Choisir une seule grande randonnée ; adapter au niveau du groupe.",
    "sleep": "New Plymouth ou Lake Rotomanu",
    "km": 260,
    "page": 5,
    "lat": -39.057,
    "lng": 174.076,
    "island": "Nord"
  },
  {
    "id": 26,
    "date": "02/02",
    "place": "Waitomo",
    "summary": "New Plymouth → Waitomo (env. 2 h 25 notées).",
    "main": "Whitecliffs Walkway (selon marées), Three Sisters Rocks et Tongaporutu.",
    "option": "Waitomo Glowworm Caves (70 $ pour 45 min notés), Mangapohue Bridge (20 min), Piripiri Cave (5 min), Marokopa Falls (10 min).",
    "sleep": "Waitomo Top 10 ou Kiwi Cave",
    "km": 175,
    "page": 6,
    "lat": -38.261,
    "lng": 175.114,
    "island": "Nord"
  },
  {
    "id": 27,
    "date": "03/02",
    "place": "Waitomo",
    "summary": "Journée aventure dans les grottes.",
    "main": "Black Abyss / Black Water Rafting : canyoning env. 5 h (314 $ notés).",
    "option": "Ruakuri Cave, Labyrinth tubing (env. 3 h / 165 $ notés), volcan ou randonnée.",
    "sleep": "Whakapapa / Discovery Lodge",
    "km": 155,
    "page": 6,
    "lat": -38.261,
    "lng": 175.114,
    "island": "Nord"
  },
  {
    "id": 28,
    "date": "04/02",
    "place": "Whakapapa",
    "summary": "Tongariro National Park.",
    "main": "Tongariro Alpine Crossing : env. 20,4 km / 8 h, difficile ; navette à réserver la veille.",
    "option": "Repos ou marche courte si conditions défavorables.",
    "sleep": "Whakapapa",
    "km": 0,
    "page": 6,
    "lat": -39.203,
    "lng": 175.54,
    "island": "Nord"
  },
  {
    "id": 29,
    "date": "05/02",
    "place": "Taupo",
    "summary": "Route Tongariro → Taupo (env. 1 h 40 notées).",
    "main": "Taranaki Falls et lacs Tama (env. 6 h / 17,6 km, difficile).",
    "option": "Lac Taupo, Huka Falls, arrêt au lac Rotoaira et au lac Otokaka (nom à vérifier).",
    "sleep": "Waikato Bay / Taupo",
    "km": 105,
    "page": 6,
    "lat": -38.687,
    "lng": 176.07,
    "island": "Nord"
  },
  {
    "id": 30,
    "date": "06/02",
    "place": "Rotorua",
    "summary": "Taupo et région géothermale.",
    "main": "Hot pools, Otumuheke Stream, Huka Falls ; Wai-O-Tapu (45 $ notés).",
    "option": "Orakei Korako (55 $ notés), Rainbow Mountain (3 h 30), Wairakei Golf + hot pools.",
    "sleep": "Rotorua, Lake Okareka",
    "km": 85,
    "page": 6,
    "lat": -38.136,
    "lng": 176.249,
    "island": "Nord"
  },
  {
    "id": 31,
    "date": "07/02",
    "place": "Rotorua",
    "summary": "Rotorua : géothermie, lacs et culture maorie.",
    "main": "Balade autour de Blue Lake (Tikitapu), Redwood Whakarewarewa Forest.",
    "option": "Wai-O-Tapu, Waimangu, Te Puia, Whakarewarewa Village, Polynesian Spa ; soirée maorie à réserver.",
    "sleep": "Rotorua",
    "km": 30,
    "page": 7,
    "lat": -38.136,
    "lng": 176.249,
    "island": "Nord"
  },
  {
    "id": 32,
    "date": "08/02",
    "place": "Rotorua",
    "summary": "Rotorua et activités facultatives.",
    "main": "Tutea Falls (5 min), promenade à Hamurana Springs ou dans la forêt.",
    "option": "Zorb, Skyline Rotorua, Wai-O-Tapu si non fait, Karangahake Gorge (trajet).",
    "sleep": "Rotorua ou Papamoa Beach",
    "km": 50,
    "page": 7,
    "lat": -38.136,
    "lng": 176.249,
    "island": "Nord"
  },
  {
    "id": 33,
    "date": "09/02",
    "place": "Waiomu",
    "summary": "Péninsule de Coromandel.",
    "main": "Hahei, Cathedral Cove (env. 1 h 30 aller-retour indiquée), Hot Water Beach (marée à vérifier).",
    "option": "Lonely Beach / Shakespeare Cliff Lookout, Cooks Beach, Whitianga, Opito Bay.",
    "sleep": "Waiomu campsite",
    "km": 220,
    "page": 7,
    "lat": -37.054,
    "lng": 175.536,
    "island": "Nord"
  },
  {
    "id": 34,
    "date": "10/02",
    "place": "Waiomu",
    "summary": "Coromandel puis remontée vers Auckland.",
    "main": "Karangahake Gorge, Pinnacles Walk (1 h 40 ou 6–8 h selon itinéraire).",
    "option": "Arrêt Thames, Freedom Camping à Ambury Park si disponible.",
    "sleep": "Ambury Park / Auckland",
    "km": 150,
    "page": 7,
    "lat": -37.054,
    "lng": 175.536,
    "island": "Nord"
  },
  {
    "id": 35,
    "date": "11/02",
    "place": "Whangarei",
    "summary": "Départ vers Northland.",
    "main": "Whangarei Falls (env. 15 min), Whangarei Heads et Matapouri Beach.",
    "option": "Parua Bay, Waipu Cove, Kiwi House, kayak en baie.",
    "sleep": "Whangarei / Paihia",
    "km": 165,
    "page": 7,
    "lat": -35.725,
    "lng": 174.323,
    "island": "Nord"
  },
  {
    "id": 36,
    "date": "12/02",
    "place": "Paihia",
    "summary": "Bay of Islands.",
    "main": "Croisière Bay of Islands : env. 3 h / 108 $ notés ; Waitangi Treaty Grounds (env. 3 h).",
    "option": "Kerikeri River Track (3 h), Rainbow Falls, Mission Station, Kotorino Pa.",
    "sleep": "Paihia / Kerikeri",
    "km": 70,
    "page": 7,
    "lat": -35.282,
    "lng": 174.092,
    "island": "Nord"
  },
  {
    "id": 37,
    "date": "13/02",
    "place": "Paihia",
    "summary": "Far North / Karikari Peninsula.",
    "main": "Maitai Bay, plages, Karikari et baignade.",
    "option": "Mangonui, dégustation ou marche sur la côte ; option Cape Reinga jugée trop longue dans le carnet.",
    "sleep": "Karikari / Paihia",
    "km": 170,
    "page": 8,
    "lat": -35.282,
    "lng": 174.092,
    "island": "Nord"
  },
  {
    "id": 38,
    "date": "14/02",
    "place": "Auckland",
    "summary": "Retour vers Auckland (itinéraire selon camping).",
    "main": "Mangawhai Heads, Waipu Forest, Tawharanui Regional Park.",
    "option": "Mangawhai Clifftop Walk, Goat Island, Leigh, plages de la côte Est.",
    "sleep": "Auckland / Ambury Park",
    "km": 300,
    "page": 8,
    "lat": -36.849,
    "lng": 174.763,
    "island": "Nord"
  },
  {
    "id": 39,
    "date": "15/02",
    "place": "Auckland",
    "summary": "Restitution du camping-car ; hôtel à réserver.",
    "main": "Sky Tower, centre-ville, Auckland Harbour et visite urbaine.",
    "option": "Black Experience (69 $ notés), ferry Devonport et Mount Victoria.",
    "sleep": "Hôtel centre Auckland",
    "km": 0,
    "page": 8,
    "lat": -36.849,
    "lng": 174.763,
    "island": "Nord"
  },
  {
    "id": 40,
    "date": "16/02",
    "place": "Auckland",
    "summary": "Excursion Waiheke Island.",
    "main": "Ferry Fullers / Sealink, tour de l’île, plages Oneroa, Palm Beach, Onetangi.",
    "option": "Vignobles Batch Winery, Mudbrick, Cable Bay ; location vélo électrique (prix notés 50–90 $).",
    "sleep": "Auckland",
    "km": 0,
    "page": 8,
    "lat": -36.849,
    "lng": 174.763,
    "island": "Nord"
  },
  {
    "id": 41,
    "date": "17/02",
    "place": "Auckland",
    "summary": "Dernière journée Auckland.",
    "main": "Auckland Sea Kayak, Auckland Museum, Wintergarden, Parnell.",
    "option": "Kayak vers Rangitoto (175 $ / 4 h notés), Mission Bay, Okahu Bay, promenade côtière, Ponsonby.",
    "sleep": "Auckland",
    "km": 0,
    "page": 8,
    "lat": -36.849,
    "lng": 174.763,
    "island": "Nord"
  },
  {
    "id": 42,
    "date": "18/02",
    "place": "Auckland",
    "summary": "Départ international.",
    "main": "Vol Auckland 11 h 30 → Singapour 16 h 55 (horaires du carnet).",
    "option": "Correspondance Singapour puis Zurich et Paris le 19/02 ; horaires à reconfirmer.",
    "sleep": "Vol retour",
    "km": 0,
    "page": 8,
    "lat": -36.849,
    "lng": 174.763,
    "island": "Nord"
  }
];
const POIS = [
  {
    "day": 1,
    "name": "Riverside Market",
    "category": "food",
    "lat": -43.534,
    "lng": 172.637,
    "status": "main"
  },
  {
    "day": 1,
    "name": "Christchurch Botanic Gardens",
    "category": "nature",
    "lat": -43.53,
    "lng": 172.619,
    "status": "optional"
  },
  {
    "day": 2,
    "name": "Little River",
    "category": "stop",
    "lat": -43.772,
    "lng": 172.786,
    "status": "main"
  },
  {
    "day": 2,
    "name": "Giant’s House Akaroa",
    "category": "culture",
    "lat": -43.81,
    "lng": 172.963,
    "status": "optional"
  },
  {
    "day": 2,
    "name": "Akaroa Harbour",
    "category": "nature",
    "lat": -43.809,
    "lng": 172.968,
    "status": "main"
  },
  {
    "day": 3,
    "name": "Geraldine",
    "category": "stop",
    "lat": -44.093,
    "lng": 171.243,
    "status": "main"
  },
  {
    "day": 3,
    "name": "Peel Forest",
    "category": "nature",
    "lat": -43.897,
    "lng": 171.263,
    "status": "main"
  },
  {
    "day": 3,
    "name": "Lake Tekapo",
    "category": "nature",
    "lat": -44.005,
    "lng": 170.477,
    "status": "main"
  },
  {
    "day": 3,
    "name": "Church of the Good Shepherd",
    "category": "culture",
    "lat": -44.004,
    "lng": 170.482,
    "status": "optional"
  },
  {
    "day": 3,
    "name": "Mount John Observatory",
    "category": "hike",
    "lat": -43.985,
    "lng": 170.464,
    "status": "main"
  },
  {
    "day": 4,
    "name": "Hooker Valley Track",
    "category": "hike",
    "lat": -43.719,
    "lng": 170.099,
    "status": "main"
  },
  {
    "day": 4,
    "name": "Sealy Tarns",
    "category": "hike",
    "lat": -43.717,
    "lng": 170.078,
    "status": "optional"
  },
  {
    "day": 4,
    "name": "Tasman Glacier View",
    "category": "hike",
    "lat": -43.697,
    "lng": 170.166,
    "status": "optional"
  },
  {
    "day": 5,
    "name": "Elephant Rocks",
    "category": "nature",
    "lat": -44.899,
    "lng": 170.659,
    "status": "main"
  },
  {
    "day": 5,
    "name": "Moeraki Boulders",
    "category": "nature",
    "lat": -45.345,
    "lng": 170.829,
    "status": "main"
  },
  {
    "day": 5,
    "name": "Oamaru",
    "category": "stop",
    "lat": -45.097,
    "lng": 170.971,
    "status": "optional"
  },
  {
    "day": 6,
    "name": "Tunnel Beach",
    "category": "nature",
    "lat": -45.923,
    "lng": 170.456,
    "status": "main"
  },
  {
    "day": 6,
    "name": "Sandfly Bay",
    "category": "nature",
    "lat": -45.9,
    "lng": 170.647,
    "status": "main"
  },
  {
    "day": 6,
    "name": "Royal Albatross Centre",
    "category": "wildlife",
    "lat": -45.774,
    "lng": 170.729,
    "status": "optional"
  },
  {
    "day": 6,
    "name": "Larnach Castle",
    "category": "culture",
    "lat": -45.862,
    "lng": 170.626,
    "status": "optional"
  },
  {
    "day": 7,
    "name": "Nugget Point Lighthouse",
    "category": "nature",
    "lat": -46.449,
    "lng": 169.816,
    "status": "main"
  },
  {
    "day": 7,
    "name": "Surat Bay",
    "category": "nature",
    "lat": -46.468,
    "lng": 169.737,
    "status": "main"
  },
  {
    "day": 7,
    "name": "Cannibal Bay",
    "category": "nature",
    "lat": -46.477,
    "lng": 169.755,
    "status": "main"
  },
  {
    "day": 8,
    "name": "Lake Gunn Nature Walk",
    "category": "hike",
    "lat": -44.889,
    "lng": 168.078,
    "status": "main"
  },
  {
    "day": 8,
    "name": "Key Summit Track",
    "category": "hike",
    "lat": -44.824,
    "lng": 168.122,
    "status": "main"
  },
  {
    "day": 8,
    "name": "Lake Marian Track",
    "category": "hike",
    "lat": -44.802,
    "lng": 168.074,
    "status": "main"
  },
  {
    "day": 8,
    "name": "Homer Tunnel",
    "category": "stop",
    "lat": -44.761,
    "lng": 167.983,
    "status": "optional"
  },
  {
    "day": 8,
    "name": "Milford Sound",
    "category": "nature",
    "lat": -44.671,
    "lng": 167.926,
    "status": "main"
  },
  {
    "day": 9,
    "name": "Milford Sound Cruise",
    "category": "activity",
    "lat": -44.671,
    "lng": 167.926,
    "status": "main"
  },
  {
    "day": 9,
    "name": "Te Anau Bird Sanctuary",
    "category": "wildlife",
    "lat": -45.438,
    "lng": 167.711,
    "status": "optional"
  },
  {
    "day": 10,
    "name": "Ben Lomond Track",
    "category": "hike",
    "lat": -45.015,
    "lng": 168.629,
    "status": "main"
  },
  {
    "day": 10,
    "name": "Skyline Queenstown",
    "category": "activity",
    "lat": -45.028,
    "lng": 168.656,
    "status": "optional"
  },
  {
    "day": 11,
    "name": "Bob’s Cove",
    "category": "hike",
    "lat": -45.052,
    "lng": 168.555,
    "status": "main"
  },
  {
    "day": 11,
    "name": "Glenorchy Lagoon",
    "category": "hike",
    "lat": -44.849,
    "lng": 168.389,
    "status": "optional"
  },
  {
    "day": 11,
    "name": "Moke Lake",
    "category": "nature",
    "lat": -44.999,
    "lng": 168.568,
    "status": "optional"
  },
  {
    "day": 12,
    "name": "Arrowtown",
    "category": "culture",
    "lat": -44.938,
    "lng": 168.833,
    "status": "main"
  },
  {
    "day": 12,
    "name": "Kawarau Bridge",
    "category": "activity",
    "lat": -45.008,
    "lng": 168.888,
    "status": "main"
  },
  {
    "day": 12,
    "name": "Cardrona",
    "category": "stop",
    "lat": -44.885,
    "lng": 169.006,
    "status": "main"
  },
  {
    "day": 13,
    "name": "Roys Peak Track",
    "category": "hike",
    "lat": -44.703,
    "lng": 169.073,
    "status": "main"
  },
  {
    "day": 14,
    "name": "Blue Pools Track",
    "category": "hike",
    "lat": -44.164,
    "lng": 169.288,
    "status": "main"
  },
  {
    "day": 14,
    "name": "Thunder Creek Falls",
    "category": "nature",
    "lat": -44.05,
    "lng": 169.369,
    "status": "main"
  },
  {
    "day": 14,
    "name": "Roaring Billy Falls",
    "category": "nature",
    "lat": -43.986,
    "lng": 169.423,
    "status": "optional"
  },
  {
    "day": 15,
    "name": "Bruce Bay",
    "category": "nature",
    "lat": -43.6,
    "lng": 169.585,
    "status": "main"
  },
  {
    "day": 15,
    "name": "Fox Glacier",
    "category": "nature",
    "lat": -43.467,
    "lng": 170.018,
    "status": "optional"
  },
  {
    "day": 15,
    "name": "Lake Matheson",
    "category": "nature",
    "lat": -43.449,
    "lng": 169.969,
    "status": "optional"
  },
  {
    "day": 16,
    "name": "Okarito Lagoon",
    "category": "activity",
    "lat": -43.219,
    "lng": 170.167,
    "status": "main"
  },
  {
    "day": 16,
    "name": "Hokitika Gorge",
    "category": "nature",
    "lat": -42.96,
    "lng": 171.014,
    "status": "main"
  },
  {
    "day": 16,
    "name": "Shantytown Heritage Park",
    "category": "culture",
    "lat": -42.622,
    "lng": 171.005,
    "status": "optional"
  },
  {
    "day": 17,
    "name": "Cape Foulwind",
    "category": "hike",
    "lat": -41.746,
    "lng": 171.465,
    "status": "main"
  },
  {
    "day": 17,
    "name": "Tauranga Bay Seal Colony",
    "category": "wildlife",
    "lat": -41.753,
    "lng": 171.463,
    "status": "main"
  },
  {
    "day": 17,
    "name": "Maruia Falls",
    "category": "nature",
    "lat": -41.852,
    "lng": 172.246,
    "status": "optional"
  },
  {
    "day": 18,
    "name": "Marahau Abel Tasman",
    "category": "activity",
    "lat": -40.997,
    "lng": 173.007,
    "status": "main"
  },
  {
    "day": 18,
    "name": "Anchorage Bay",
    "category": "nature",
    "lat": -40.944,
    "lng": 173.057,
    "status": "main"
  },
  {
    "day": 18,
    "name": "Te Pukatea Bay",
    "category": "nature",
    "lat": -40.931,
    "lng": 173.071,
    "status": "optional"
  },
  {
    "day": 19,
    "name": "Split Apple Rock",
    "category": "nature",
    "lat": -41.009,
    "lng": 173.024,
    "status": "main"
  },
  {
    "day": 19,
    "name": "Kaiteriteri Beach",
    "category": "nature",
    "lat": -41.034,
    "lng": 173.018,
    "status": "main"
  },
  {
    "day": 20,
    "name": "Pelorus Bridge",
    "category": "nature",
    "lat": -41.297,
    "lng": 173.571,
    "status": "optional"
  },
  {
    "day": 20,
    "name": "Havelock",
    "category": "stop",
    "lat": -41.282,
    "lng": 173.766,
    "status": "optional"
  },
  {
    "day": 21,
    "name": "Queen Charlotte Track Anakiwa",
    "category": "hike",
    "lat": -41.263,
    "lng": 173.939,
    "status": "main"
  },
  {
    "day": 21,
    "name": "Ngakuta Bay",
    "category": "nature",
    "lat": -41.272,
    "lng": 173.97,
    "status": "optional"
  },
  {
    "day": 22,
    "name": "Te Papa Museum",
    "category": "culture",
    "lat": -41.29,
    "lng": 174.782,
    "status": "optional"
  },
  {
    "day": 22,
    "name": "Cuba Street",
    "category": "culture",
    "lat": -41.293,
    "lng": 174.776,
    "status": "optional"
  },
  {
    "day": 23,
    "name": "Weta Workshop",
    "category": "culture",
    "lat": -41.31,
    "lng": 174.824,
    "status": "main"
  },
  {
    "day": 23,
    "name": "Zealandia",
    "category": "wildlife",
    "lat": -41.29,
    "lng": 174.754,
    "status": "optional"
  },
  {
    "day": 23,
    "name": "Mount Victoria Lookout",
    "category": "nature",
    "lat": -41.296,
    "lng": 174.794,
    "status": "optional"
  },
  {
    "day": 24,
    "name": "Kapiti Island",
    "category": "wildlife",
    "lat": -40.854,
    "lng": 174.93,
    "status": "main"
  },
  {
    "day": 24,
    "name": "Paekakariki Escarpment Track",
    "category": "hike",
    "lat": -40.984,
    "lng": 174.95,
    "status": "optional"
  },
  {
    "day": 25,
    "name": "Pouakai Crossing",
    "category": "hike",
    "lat": -39.251,
    "lng": 174.058,
    "status": "main"
  },
  {
    "day": 25,
    "name": "Mount Taranaki",
    "category": "hike",
    "lat": -39.296,
    "lng": 174.064,
    "status": "optional"
  },
  {
    "day": 26,
    "name": "Three Sisters Tongaporutu",
    "category": "nature",
    "lat": -38.82,
    "lng": 174.598,
    "status": "main"
  },
  {
    "day": 26,
    "name": "Waitomo Glowworm Caves",
    "category": "activity",
    "lat": -38.26,
    "lng": 175.103,
    "status": "optional"
  },
  {
    "day": 26,
    "name": "Mangapohue Natural Bridge",
    "category": "nature",
    "lat": -38.307,
    "lng": 175.059,
    "status": "optional"
  },
  {
    "day": 27,
    "name": "Ruakuri Cave",
    "category": "activity",
    "lat": -38.262,
    "lng": 175.076,
    "status": "optional"
  },
  {
    "day": 27,
    "name": "Waitomo Black Water Rafting",
    "category": "activity",
    "lat": -38.26,
    "lng": 175.104,
    "status": "main"
  },
  {
    "day": 28,
    "name": "Tongariro Alpine Crossing",
    "category": "hike",
    "lat": -39.144,
    "lng": 175.581,
    "status": "main"
  },
  {
    "day": 29,
    "name": "Taranaki Falls",
    "category": "hike",
    "lat": -39.207,
    "lng": 175.539,
    "status": "main"
  },
  {
    "day": 29,
    "name": "Huka Falls",
    "category": "nature",
    "lat": -38.649,
    "lng": 176.09,
    "status": "optional"
  },
  {
    "day": 30,
    "name": "Otumuheke Stream",
    "category": "nature",
    "lat": -38.66,
    "lng": 176.087,
    "status": "main"
  },
  {
    "day": 30,
    "name": "Wai-O-Tapu Thermal Wonderland",
    "category": "nature",
    "lat": -38.359,
    "lng": 176.366,
    "status": "main"
  },
  {
    "day": 30,
    "name": "Orakei Korako",
    "category": "nature",
    "lat": -38.472,
    "lng": 176.148,
    "status": "optional"
  },
  {
    "day": 31,
    "name": "Redwoods Whakarewarewa Forest",
    "category": "nature",
    "lat": -38.162,
    "lng": 176.272,
    "status": "main"
  },
  {
    "day": 31,
    "name": "Blue Lake Tikitapu",
    "category": "nature",
    "lat": -38.189,
    "lng": 176.338,
    "status": "main"
  },
  {
    "day": 31,
    "name": "Te Puia",
    "category": "culture",
    "lat": -38.162,
    "lng": 176.254,
    "status": "optional"
  },
  {
    "day": 32,
    "name": "Hamurana Springs",
    "category": "nature",
    "lat": -38.034,
    "lng": 176.261,
    "status": "optional"
  },
  {
    "day": 32,
    "name": "Tutea Falls",
    "category": "nature",
    "lat": -38.02,
    "lng": 176.345,
    "status": "main"
  },
  {
    "day": 32,
    "name": "Skyline Rotorua",
    "category": "activity",
    "lat": -38.107,
    "lng": 176.223,
    "status": "optional"
  },
  {
    "day": 33,
    "name": "Cathedral Cove",
    "category": "hike",
    "lat": -36.828,
    "lng": 175.79,
    "status": "main"
  },
  {
    "day": 33,
    "name": "Hot Water Beach",
    "category": "nature",
    "lat": -36.89,
    "lng": 175.823,
    "status": "main"
  },
  {
    "day": 33,
    "name": "Shakespeare Cliff Lookout",
    "category": "nature",
    "lat": -36.829,
    "lng": 175.718,
    "status": "optional"
  },
  {
    "day": 34,
    "name": "Karangahake Gorge",
    "category": "hike",
    "lat": -37.423,
    "lng": 175.729,
    "status": "main"
  },
  {
    "day": 34,
    "name": "Pinnacles Track Coromandel",
    "category": "hike",
    "lat": -37.027,
    "lng": 175.684,
    "status": "main"
  },
  {
    "day": 34,
    "name": "Thames",
    "category": "stop",
    "lat": -37.139,
    "lng": 175.541,
    "status": "optional"
  },
  {
    "day": 35,
    "name": "Whangarei Falls",
    "category": "nature",
    "lat": -35.683,
    "lng": 174.334,
    "status": "main"
  },
  {
    "day": 35,
    "name": "Matapouri Beach",
    "category": "nature",
    "lat": -35.568,
    "lng": 174.505,
    "status": "main"
  },
  {
    "day": 35,
    "name": "Waipu Cove",
    "category": "nature",
    "lat": -35.974,
    "lng": 174.474,
    "status": "optional"
  },
  {
    "day": 36,
    "name": "Waitangi Treaty Grounds",
    "category": "culture",
    "lat": -35.267,
    "lng": 174.08,
    "status": "main"
  },
  {
    "day": 36,
    "name": "Bay of Islands Cruise",
    "category": "activity",
    "lat": -35.262,
    "lng": 174.091,
    "status": "main"
  },
  {
    "day": 36,
    "name": "Rainbow Falls Kerikeri",
    "category": "nature",
    "lat": -35.203,
    "lng": 173.955,
    "status": "optional"
  },
  {
    "day": 37,
    "name": "Maitai Bay",
    "category": "nature",
    "lat": -34.826,
    "lng": 173.42,
    "status": "main"
  },
  {
    "day": 37,
    "name": "Mangonui",
    "category": "stop",
    "lat": -34.991,
    "lng": 173.531,
    "status": "optional"
  },
  {
    "day": 38,
    "name": "Mangawhai Heads",
    "category": "nature",
    "lat": -36.095,
    "lng": 174.584,
    "status": "main"
  },
  {
    "day": 38,
    "name": "Tawharanui Regional Park",
    "category": "nature",
    "lat": -36.374,
    "lng": 174.836,
    "status": "main"
  },
  {
    "day": 38,
    "name": "Goat Island Marine Reserve",
    "category": "wildlife",
    "lat": -36.266,
    "lng": 174.798,
    "status": "optional"
  },
  {
    "day": 39,
    "name": "Sky Tower",
    "category": "culture",
    "lat": -36.848,
    "lng": 174.762,
    "status": "main"
  },
  {
    "day": 39,
    "name": "Devonport Mount Victoria",
    "category": "nature",
    "lat": -36.827,
    "lng": 174.798,
    "status": "optional"
  },
  {
    "day": 40,
    "name": "Waiheke Oneroa Beach",
    "category": "nature",
    "lat": -36.782,
    "lng": 175.009,
    "status": "main"
  },
  {
    "day": 40,
    "name": "Waiheke Onetangi Beach",
    "category": "nature",
    "lat": -36.79,
    "lng": 175.081,
    "status": "main"
  },
  {
    "day": 40,
    "name": "Mudbrick Vineyard",
    "category": "activity",
    "lat": -36.793,
    "lng": 174.997,
    "status": "optional"
  },
  {
    "day": 41,
    "name": "Auckland Museum",
    "category": "culture",
    "lat": -36.86,
    "lng": 174.777,
    "status": "main"
  },
  {
    "day": 41,
    "name": "Rangitoto Island",
    "category": "activity",
    "lat": -36.787,
    "lng": 174.86,
    "status": "optional"
  },
  {
    "day": 41,
    "name": "Mission Bay",
    "category": "nature",
    "lat": -36.848,
    "lng": 174.831,
    "status": "optional"
  }
];
