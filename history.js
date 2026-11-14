// Daily Video History Log & Topic Registry
const PODCAST_HISTORY = [
  {
    "episode": 1,
    "topic": "The Art of Unhurried Mornings",
    "date": "2026-10-15T08:09:53.953606",
    "duration_sec": 75.28,
    "duration_min": 1.25,
    "video_file": "podcast_ep1_20261015_080823.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 2,
    "topic": "Finding Quiet in the Everyday: Cultivating Inner Peace",
    "date": "2026-10-15T08:49:32.789771",
    "duration_sec": 1121.69,
    "duration_min": 18.69,
    "video_file": "podcast_ep2_20261015_083217.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 3,
    "topic": "La Douceur des Instants Suspendus : Savourer le Présent sans Attente",
    "date": "2026-10-17T11:55:54.953798",
    "duration_sec": 1103.35,
    "duration_min": 18.39,
    "video_file": "podcast_ep3_20261017_113716.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 4,
    "topic": "L'Écoute Profonde : Réapprendre à Entendre le Monde Intérieur",
    "date": "2026-10-18T05:40:04.529829",
    "duration_sec": 1150.58,
    "duration_min": 19.18,
    "video_file": "podcast_ep4_20261018_052115.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 5,
    "topic": "La Joie Subtile des Petites Victoires Quotidiennes",
    "date": "2026-10-19T05:56:38.300939",
    "duration_sec": 1120.87,
    "duration_min": 18.68,
    "video_file": "podcast_ep5_20261019_053823.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 6,
    "topic": "L'Art Délicat de la Respiration Consciente : Un Havre de Paix au Quotidien",
    "date": "2026-10-19T20:05:57.378558",
    "duration_sec": 1007.4,
    "duration_min": 16.79,
    "video_file": "podcast_ep6_20261019_200001.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 7,
    "topic": "Le Jardin Secret de l'Esprit : Cultiver la Sérénité Intérieure",
    "date": "2026-10-20T05:56:44.732345",
    "duration_sec": 1028.42,
    "duration_min": 17.14,
    "video_file": "podcast_ep7_20261020_053840.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 8,
    "topic": "Le Reflet Paisible des Eaux Calmes : Observer ses Pensées sans Jugement",
    "date": "2026-10-21T05:53:40.400668",
    "duration_sec": 1092.79,
    "duration_min": 18.21,
    "video_file": "podcast_ep8_20261021_054101.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 9,
    "topic": "L'Écho Doux des Souvenirs : Accueillir le Passé avec Bienveillance",
    "date": "2026-10-22T06:03:46.426508",
    "duration_sec": 1144.32,
    "duration_min": 19.07,
    "video_file": "podcast_ep9_20261022_054220.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 10,
    "topic": "La Mélodie Intérieure : Harmoniser le Corps et l'Esprit par le Mouvement Doux",
    "date": "2026-10-23T05:58:58.487133",
    "duration_sec": 1024.13,
    "duration_min": 17.07,
    "video_file": "podcast_ep10_20261023_054153.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 11,
    "topic": "L'Art de Flâner : Redécouvrir le Cheminement Lent et la Présence",
    "date": "2026-10-24T05:37:54.120024",
    "duration_sec": 1031.16,
    "duration_min": 17.19,
    "video_file": "podcast_ep11_20261024_051938.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 12,
    "topic": "La Sérénité des Pauses : Ralentir pour Mieux Respirer",
    "date": "2026-10-25T05:55:23.884919",
    "duration_sec": 1027.37,
    "duration_min": 17.12,
    "video_file": "podcast_ep12_20261025_053640.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 13,
    "topic": "La Grâce du Lâcher-prise : Naviguer avec Légèreté dans le Courant de la Vie",
    "date": "2026-10-26T06:01:57.601046",
    "duration_sec": 1054.06,
    "duration_min": 17.57,
    "video_file": "podcast_ep13_20261026_054335.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 14,
    "topic": "Le Fil Invisible : Tisser des Liens Doux avec le Monde",
    "date": "2026-10-27T06:11:01.073760",
    "duration_sec": 1041.29,
    "duration_min": 17.35,
    "video_file": "podcast_ep14_20261027_055559.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 15,
    "topic": "L'Art d'Écouter le Silence Intérieur : Trouver la Clarté dans le Calme",
    "date": "2026-10-29T00:07:12.517382",
    "duration_sec": 138.41,
    "duration_min": 2.31,
    "video_file": "podcast_ep15_20261029_000612.mp4",
    "platform": "None"
  },
  {
    "episode": 16,
    "topic": "L'Éclat Discret des Petits Rituels : Ancrer sa Journée dans la Douceur",
    "date": "2026-10-29T06:53:09.135035",
    "duration_sec": 1000.94,
    "duration_min": 16.68,
    "video_file": "podcast_ep16_20261029_064253.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 17,
    "topic": "Le Parfum des Heures Lentes : Cultiver l'Appréciation du Temps qui Passe",
    "date": "2026-10-30T07:01:51.783528",
    "duration_sec": 1070.86,
    "duration_min": 17.85,
    "video_file": "podcast_ep17_20261030_064411.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 18,
    "topic": "L'Écoute de Soi dans le Bruissement des Feuilles : Un Dialogue Intime avec la Nature",
    "date": "2026-10-31T06:46:40.705822",
    "duration_sec": 1100.21,
    "duration_min": 18.34,
    "video_file": "podcast_ep18_20261031_063449.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 19,
    "topic": "Le Rituel Sacré du Soir : Apprivoiser l'Obscurité pour un Sommeil Paisible",
    "date": "2026-11-01T07:21:26.773718",
    "duration_sec": 984.53,
    "duration_min": 16.41,
    "video_file": "podcast_ep19_20261101_070533.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 20,
    "topic": "Le Souffle de la Terre : Se Reconnecter à l'Essentiel par les Sons Naturels",
    "date": "2026-11-02T07:24:26.799039",
    "duration_sec": 996.67,
    "duration_min": 16.61,
    "video_file": "podcast_ep20_20261102_070829.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 21,
    "topic": "L'Art de Marcher dans le Silence : Cultiver la Présence à Chaque Pas",
    "date": "2026-11-03T07:44:26.650632",
    "duration_sec": 1024.37,
    "duration_min": 17.07,
    "video_file": "podcast_ep21_20261103_073054.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 22,
    "topic": "Le Murmure des Possibles : Ouvrir son Cœur à l'Inattendu",
    "date": "2026-11-04T07:23:10.703576",
    "duration_sec": 1045.78,
    "duration_min": 17.43,
    "video_file": "podcast_ep22_20261104_071149.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 23,
    "topic": "L'Art de la Fenêtre Ouverte : Laisser Entrer la Lumière et le Calme",
    "date": "2026-11-05T07:52:56.386634",
    "duration_sec": 1073.11,
    "duration_min": 17.89,
    "video_file": "podcast_ep23_20261105_073915.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 24,
    "topic": "Le Chant Discret des Objets : Écouter la Vie Quotidienne",
    "date": "2026-11-06T07:49:41.946223",
    "duration_sec": 998.21,
    "duration_min": 16.64,
    "video_file": "podcast_ep24_20261106_073631.mp4",
    "platform": "None"
  },
  {
    "episode": 25,
    "topic": "L'Art de la Pause Bienveillante : Accueillir le Vide pour Mieux Se Retrouver",
    "date": "2026-11-07T07:02:16.445318",
    "duration_sec": 1045.3,
    "duration_min": 17.42,
    "video_file": "podcast_ep25_20261107_064731.mp4",
    "platform": "None"
  },
  {
    "episode": 26,
    "topic": "Le Fil d'Or de la Gratitude : Illuminer le Quotidien par de Douces Reconnaissances",
    "date": "2026-11-08T07:07:22.893789",
    "duration_sec": 994.8,
    "duration_min": 16.58,
    "video_file": "podcast_ep26_20261108_065420.mp4",
    "platform": "YouTube"
  },
  {
    "episode": 27,
    "topic": "Le Cocon du Silence Intérieur : S'ancrer dans la Paix, loin du Brouhaha Extérieur",
    "date": "2026-11-09T07:50:13.326900",
    "duration_sec": 1038.36,
    "duration_min": 17.31,
    "video_file": "podcast_ep27_20261109_073439.mp4",
    "platform": "None"
  },
  {
    "episode": 28,
    "topic": "L'Art de la Transition Douce : Naviguer entre les Moments avec Sagesse",
    "date": "2026-11-10T08:16:05.306252",
    "duration_sec": 1081.56,
    "duration_min": 18.03,
    "video_file": "podcast_ep28_20261110_075758.mp4",
    "platform": "YouTube"
  },
  {
    "episode": 29,
    "topic": "L'Écoute des Nuances : Découvrir la Beauté des Sons Subtils",
    "date": "2026-11-11T07:38:18.410394",
    "duration_sec": 1009.2,
    "duration_min": 16.82,
    "video_file": "podcast_ep29_20261111_072735.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 30,
    "topic": "L'Art de la Lenteur Appréciée : Savourer chaque Battement de Cœur",
    "date": "2026-11-12T08:06:23.110759",
    "duration_sec": 1023.41,
    "duration_min": 17.06,
    "video_file": "podcast_ep30_20261112_075527.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 31,
    "topic": "L'Art Subtil de L'Observation Intérieure : Naviguer la Rivière des Émotions",
    "date": "2026-11-13T07:49:51.109410",
    "duration_sec": 1050.12,
    "duration_min": 17.5,
    "video_file": "podcast_ep31_20261113_073355.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 32,
    "topic": "Le Silence Créateur : Faire Naître la Sérénité dans le Calme Résonnant",
    "date": "2026-11-14T07:32:48.592751",
    "duration_sec": 1070.93,
    "duration_min": 17.85,
    "video_file": "podcast_ep32_20261114_071759.mp4",
    "platform": "Facebook"
  }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = PODCAST_HISTORY; }
if (typeof window !== 'undefined') { window.PODCAST_HISTORY = PODCAST_HISTORY; }
