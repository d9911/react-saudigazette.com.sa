import { Article } from "./types";

// Helper function to resolve image urls safely
// If the image is a relative path like 'saudigazette/uploads/...', we fallback to saudi gazette servers
// to ensure the images load perfectly in preview mode.
export function getImageUrl(path: string): string {
  if (!path) return "https://saudigazette.com.sa/saudigazette/uploads/global_files/no-image.jpg";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `https://saudigazette.com.sa/${path.replace(/^\/+/, "")}`;
}

export const MAIN_FEATURED_ARTICLE: Article = {
  id: "main-featured",
  title: "Saudi Crown Prince receives Eid Al-Adha well-wishers in Mina",
  category: "SAUDI ARABIA",
  publishTime: "8 h ago",
  image: "saudigazette/uploads/images/2026/05/28/2714407.webp?v1&w=650&q=100&f=webp",
  description: "MINA — On behalf of Custodian of the Two Holy Mosques King Salman, Crown Prince and Prime Minister Mohammed bin Salman received Eid Al-Adha well-wishers on Wednesday at the Royal Court in Mina Palace. The reception included royal family members,...",
  url: "article/661676.html"
};

export const THREE_FEATURED_CARDS: Article[] = [
  {
    id: "fc-1",
    title: "Iran targets US base after new attack near Bandas Abbas",
    category: "World",
    publishTime: "3 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714422.webp?v1&w=420&q=100&f=webp",
    url: "article/661677.html"
  },
  {
    id: "fc-2",
    title: "King Salman congratulates Muslims on Eid Al-Adha, prays for pilgrims’ Hajj acceptance",
    category: "SAUDI ARABIA",
    publishTime: "23 h ago",
    image: "saudigazette/uploads/images/2026/05/27/2714026.webp?v1&w=420&q=100&f=webp",
    url: "article/661658.html"
  },
  {
    id: "fc-3",
    title: "Pilgrims perform main rituals on 3rd day of Hajj",
    category: "SAUDI ARABIA",
    publishTime: "20 h ago",
    image: "saudigazette/uploads/images/2026/05/27/2714095.webp?v1&w=420&q=100&f=webp",
    url: "article/661664.html"
  }
];

export const SAUDI_ARABIA_ARTICLES: Article[] = [
  {
    id: "sa-1",
    title: "Saudi interior minister discusses security cooperation with Pakistani, Iraqi, Lebanese and Kuwaiti counterparts",
    publishTime: "12 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714324.webp?v1&w=240&q=100&f=webp",
    url: "article/661675.html"
  },
  {
    id: "sa-2",
    title: "Saudi Arabia provides $150 million in urgent support to Yemen",
    publishTime: "13 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714318.webp?v1&w=240&q=100&f=webp",
    url: "article/661674.html"
  },
  {
    id: "sa-3",
    title: "Ministry of Health advises pilgrims to care for feet while moving around Mina",
    publishTime: "13 h ago",
    image: "saudigazette/uploads/images/2026/05/27/2714315.webp?v1&w=240&q=100&f=webp",
    url: "article/661673.html"
  },
  {
    id: "sa-4",
    title: "Saudi, Indian foreign ministers discuss strengthening bilateral relations in Cyprus",
    publishTime: "13 h ago",
    image: "saudigazette/uploads/images/2026/05/27/2714314.webp?v1&w=240&q=100&f=webp",
    url: "article/661672.html"
  }
];

export const LATEST_NEWS_ARTICLES: Article[] = [
  {
    id: "lat-1",
    title: "Bolivian president warns country at 'breaking point' after weeks of anti-government protests",
    publishTime: "2 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714425.webp?v1&w=150&q=100&f=webp",
    url: "article/661680.html"
  },
  {
    id: "lat-2",
    title: "Australia sues US chemicals giant over widespread contamination from firefighting foam",
    publishTime: "2 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714424.webp?v1&w=150&q=100&f=webp",
    url: "article/661679.html"
  },
  {
    id: "lat-3",
    title: "Israel issues evacuation order for swathes of southern Lebanon",
    publishTime: "2 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714423.webp?v1&w=150&q=100&f=webp",
    url: "article/661678.html"
  },
  {
    id: "lat-4",
    title: "Iran targets US base after new attack near Bandas Abbas",
    publishTime: "3 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714422.webp?v1&w=150&q=100&f=webp",
    url: "article/661677.html"
  }
];

export const WORLD_ARTICLES: Article[] = [
  {
    id: "w-1",
    title: "Bolivian president warns country at 'breaking point' after weeks of anti-government protests",
    publishTime: "2 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714425.webp?v1&w=320&q=100&f=webp",
    url: "article/661680.html"
  },
  {
    id: "w-2",
    title: "Australia sues US chemicals giant over widespread contamination from firefighting foam",
    publishTime: "2 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714424.webp?v1&w=320&q=100&f=webp",
    url: "article/661679.html"
  },
  {
    id: "w-3",
    title: "Israel issues evacuation order for swathes of southern Lebanon",
    publishTime: "2 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714423.webp?v1&w=320&q=100&f=webp",
    url: "article/661678.html"
  },
  {
    id: "w-4",
    title: "Iran targets US base after new attack near Bandas Abbas",
    publishTime: "3 h ago",
    image: "saudigazette/uploads/images/2026/05/28/2714422.webp?v1&w=320&q=100&f=webp",
    url: "article/661677.html"
  },
  {
    id: "w-5",
    title: "IRGC warns Iran's coast will become a 'graveyard' if US strikes resume",
    publishTime: "20 h ago",
    image: "saudigazette/uploads/images/2026/05/27/2714094.webp?v1&w=320&q=100&f=webp",
    url: "article/661663.html"
  },
  {
    id: "w-6",
    title: "Five people found alive after week trapped in flooded Laos cave",
    publishTime: "21 h ago",
    image: "saudigazette/uploads/images/2026/05/27/2714077.webp?v1&w=320&q=100&f=webp",
    url: "article/661662.html"
  }
];

export const VIDEO_ARTICLES: Article[] = [
  {
    id: "v-1",
    title: "Interior Minister reviews Hajj security forces’ readiness for pilgrimage season",
    publishTime: "22 May 2026",
    image: "VOD/images/2026/05/22/2711578.jpg",
    url: "article/661536.html"
  },
  {
    id: "v-2",
    title: "From first practice to Olympic dreams: Inside Saudi Arabia’s first women’s flag football team",
    publishTime: "08 May 2026",
    image: "VOD/images/2026/05/08/2704594.jpg",
    url: "article/661186.html"
  },
  {
    id: "v-3",
    title: "Interior minister graces graduation ceremony of King Fahd Security College",
    publishTime: "05 May 2026",
    image: "VOD/images/2026/05/05/2703109.jpg",
    url: "article/661106.html"
  },
  {
    id: "v-4",
    title: "No Hajj without a permit",
    publishTime: "05 May 2026",
    image: "VOD/images/2026/05/05/2702940.jpg",
    url: "article/661096.html"
  }
];

export const BUSINESS_ARTICLES: Article[] = [
  {
    id: "b-1",
    title: "stc group powers through record digital traffic surge on Arafah Day",
    publishTime: "1d ago",
    image: "saudigazette/uploads/images/2026/05/26/2713844.webp?v1&w=320&q=100&f=webp",
    url: "article/661648/business/Click here.html"
  },
  {
    id: "b-2",
    title: "Al-Futtaim BYD Saudi Arabia expands its model lineup with launch of the All-New BYD Ti 7",
    publishTime: "24 May 2026",
    image: "saudigazette/uploads/images/2026/05/24/2712494.webp?v1&w=320&q=100&f=webp",
    url: "article/661573.html"
  },
  {
    id: "b-3",
    title: "CMA fines former Saudi German Health officials SR18 million over financial statement manipulation",
    publishTime: "21 May 2026",
    image: "saudigazette/uploads/images/2026/05/21/2711319.webp?v1&w=320&q=100&f=webp",
    url: "article/661517.html"
  }
];

export const OPINION_ARTICLES: Article[] = [
  {
    id: "op-1",
    title: "Mohammed bin Salman and the diplomacy of balance to extinguish the flames of conflict",
    author: "Jameel Altheyabi",
    image: "saudigazette/uploads/images/2026/05/21/2711381.webp&w=250&q=100&f=webp",
    url: "article/661518.html",
    publishTime: ""
  },
  {
    id: "op-2",
    title: "Iran and the inevitable return to Washington",
    author: "Jameel Altheyabi",
    image: "saudigazette/uploads/authors/693.jpg?v=1769602971?v1&w=250&q=100&f=webp",
    url: "article/661145.html",
    publishTime: ""
  },
  {
    id: "op-3",
    title: "The region can no longer tolerate Iran's madness",
    author: "Jameel Altheyabi",
    image: "saudigazette/uploads/images/2026/03/05/2673301.webp&w=250&q=100&f=webp",
    url: "article/659485.html",
    publishTime: ""
  }
];

export const SPORTS_ARTICLES = {
  main: {
    id: "sp-main",
    title: "Saud Abdulhamid delayed joining Saudi World Cup camp after Amsterdam robbery",
    publishTime: "1d ago",
    image: "saudigazette/uploads/images/2026/05/26/2713633.webp?v1&w=550&q=100&f=webp",
    url: "article/661634.html"
  } as Article,
  list: [
    {
      id: "sp-1",
      title: "Mexico to host Iran's World Cup team after US refusal",
      publishTime: "2d ago",
      image: "saudigazette/uploads/images/2026/05/26/2713487.webp?v1&w=150&q=100&f=webp",
      url: "article/661625.html"
    },
    {
      id: "sp-2",
      title: "Saudi Arabia announce preliminary 30-man squad for 2026 FIFA World Cup preparations",
      publishTime: "2d ago",
      image: "saudigazette/uploads/images/2026/05/25/2713132.webp?v1&w=150&q=100&f=webp",
      url: "article/661603.html"
    },
    {
      id: "sp-3",
      title: "Spain include injured Yamal in World Cup squad as Real Madrid miss out completely",
      publishTime: "2d ago",
      image: "saudigazette/uploads/images/2026/05/25/2713127.webp?v1&w=150&q=100&f=webp",
      url: "article/661602.html"
    }
  ] as Article[]
};

export const ESPORTS_ARTICLES: Article[] = [
  {
    id: "e-1",
    title: "Saudi Arabia to host inaugural Esports Nations Cup in 2026",
    publishTime: "23 Aug 2025",
    image: "uploads/images/2025/08/23/2573530.jpg?v1&w=320&q=100&f=webp",
    url: "article/654395.html"
  },
  {
    id: "e-2",
    title: "Team Falcons clinch back-to-back Esports World Cup titles in Riyadh",
    publishTime: "21 Aug 2025",
    image: "uploads/images/2025/08/22/2572859.jpeg?v1&w=320&q=100&f=webp",
    url: "article/654360.html"
  },
  {
    id: "e-3",
    title: "Death Stranding 2: On the Beach – game review",
    publishTime: "18 Jul 2025",
    image: "uploads/images/2025/07/19/2556810.jpg?v1&w=320&q=100&f=webp",
    url: "article/653540.html"
  }
];

export const LIFESTYLE_ARTICLES: Article[] = [
  {
    id: "life-1",
    title: "K-pop band BTS wins big at American Music Awards",
    publishTime: "1d ago",
    image: "saudigazette/uploads/images/2026/05/26/2713591.webp?v1&w=320&q=100&f=webp",
    url: "article/661632.html"
  },
  {
    id: "life-2",
    title: "YouTuber used AI to fake evidence that ruined Korean actor's career, police say",
    publishTime: "22 May 2026",
    image: "saudigazette/uploads/images/2026/05/22/2711676.webp?v1&w=320&q=100&f=webp",
    url: "article/661540.html"
  },
  {
    id: "life-3",
    title: "Delta Goodrem sends Australia to Eurovision grand final with glittering performance",
    publishTime: "15 May 2026",
    image: "saudigazette/uploads/images/2026/05/15/2708275.webp?v1&w=320&q=100&f=webp",
    url: "article/661372.html"
  }
];

export const TECHNOLOGY_ARTICLES: Article[] = [
  {
    id: "t-1",
    title: "Telegram to adapt to Russia restrictions, Pavel Durov says",
    publishTime: "05 Apr 2026",
    image: "saudigazette/uploads/images/2026/04/05/2687401.webp?v1&w=320&q=100&f=webp",
    url: "article/660258.html"
  },
  {
    id: "t-2",
    title: "Saudi Arabia launches ‘Ahlan’ app ahead of AFC Asian Cup 2027",
    publishTime: "31 Mar 2026",
    image: "saudigazette/uploads/images/2026/03/31/2685039.webp?v1&w=320&q=100&f=webp",
    url: "article/660146.html"
  },
  {
    id: "t-3",
    title: "Chinese AI app Seedance sending Hollywood studios into panic",
    publishTime: "20 Feb 2026",
    image: "saudigazette/uploads/images/2026/02/20/2666038.webp?v1&w=320&q=100&f=webp",
    url: "article/659073.html"
  }
];

export const EDITORS_CHOICE_ARTICLES: Article[] = [
  {
    id: "ec-1",
    title: "Makkah airport and metro plans underway: Official",
    category: "SAUDI ARABIA",
    publishTime: "01 Apr 2026",
    image: "saudigazette/uploads/images/2026/04/01/2685662.webp?v1&w=300&q=100&f=webp",
    description: "MAKKAH — Plans to build an airport and a metro system in Makkah are underway, according to an official, as the city moves ahead with major transport and infrastructure upgrades. CEO of the Royal Commission for Makkah City and the Holy Sites, Saleh...",
    url: "article/660176.html"
  },
  {
    id: "ec-2",
    title: "How Saudi Arabia maintained growth and stability amid rising regional tensions in March",
    category: "SAUDI ARABIA",
    publishTime: "01 Apr 2026",
    image: "saudigazette/uploads/images/2026/04/01/2685733.webp?v1&w=300&q=100&f=webp",
    description: "RIYADH — March unfolded amid rising tensions in the Middle East, heightened risks of a global energy crisis, and mounting climate challenges, yet Saudi Arabia closed the month with strong domestic performance and continued regional leadership....",
    url: "article/660185.html"
  }
];

export const DISCOVER_SAUDI_ARTICLES: Article[] = [
  {
    id: "ds-1",
    title: "Where light meets heritage: How Saudi regions are illuminating culture and identity",
    publishTime: "17 May 2026",
    image: "saudigazette/uploads/images/2026/05/17/2709088.webp?v1&w=450&q=100&f=webp",
    url: "article/661409.html"
  },
  {
    id: "ds-2",
    title: "Where the desert turns green: Inside Umm Al-Asafeer’s post-rain transformation",
    publishTime: "05 May 2026",
    image: "saudigazette/uploads/images/2026/05/05/2702881.webp?v1&w=450&q=100&f=webp",
    url: "article/661091.html"
  },
  {
    id: "ds-3",
    title: "From desert valleys to coral reefs: A week showcasing Saudi Arabia’s natural transformation",
    publishTime: "04 May 2026",
    image: "saudigazette/uploads/images/2026/05/04/2702156.webp?v1&w=450&q=100&f=webp",
    url: "article/661060.html"
  }
];

export const MOST_READ_ARTICLES = {
  day: [
    {
      id: "mr-d-1",
      title: "Saudi Crown Prince receives Eid Al-Adha well-wishers in Mina",
      publishTime: "8 h ago",
      image: "saudigazette/uploads/images/2026/05/28/2714407.webp?v1&w=120&q=100&f=webp",
      url: "article/661676.html"
    },
    {
      id: "mr-d-2",
      title: "Saudi Arabia forecasts temperatures reaching 50°C in Eastern Province",
      publishTime: "22 h ago",
      image: "saudigazette/uploads/images/2026/05/27/2714051.webp?v1&w=120&q=100&f=webp",
      url: "article/661659.html"
    },
    {
      id: "mr-d-3",
      title: "Saudi interior minister discusses security cooperation with Pakistani, Iraqi, Lebanese and Kuwaiti counterparts",
      publishTime: "12 h ago",
      image: "saudigazette/uploads/images/2026/05/28/2714324.webp?v1&w=120&q=100&f=webp",
      url: "article/661675.html"
    },
    {
      id: "mr-d-4",
      title: "Ministry of Health advises pilgrims to care for feet while moving around Mina",
      publishTime: "13 h ago",
      image: "saudigazette/uploads/images/2026/05/27/2714315.webp?v1&w=120&q=100&f=webp",
      url: "article/661673.html"
    },
    {
      id: "mr-d-5",
      title: "3 critically ill Saudi citizens airlifted from Egypt",
      publishTime: "16 h ago",
      image: "saudigazette/uploads/images/2026/05/27/2714246.webp?v1&w=120&q=100&f=webp",
      url: "article/661670.html"
    }
  ],
  week: [
    {
      id: "mr-w-1",
      title: "stc group powers through record digital traffic surge on Arafah Day",
      publishTime: "6 days ago",
      image: "saudigazette/uploads/images/2026/05/26/2713844.webp?v1&w=320&q=100&f=webp",
      url: "article/661648/business/Click here.html"
    },
    {
      id: "mr-w-2",
      title: "K-pop band BTS wins big at American Music Awards",
      publishTime: "5 days ago",
      image: "saudigazette/uploads/images/2026/05/26/2713591.webp?v1&w=320&q=100&f=webp",
      url: "article/661632.html"
    },
    {
      id: "mr-w-3",
      title: "Mexico to host Iran's World Cup team after US refusal",
      publishTime: "4 days ago",
      image: "saudigazette/uploads/images/2026/05/26/2713487.webp?v1&w=150&q=100&f=webp",
      url: "article/661625.html"
    },
    {
      id: "mr-w-4",
      title: "Pilgrims perform main rituals on 3rd day of Hajj",
      publishTime: "3 days ago",
      image: "saudigazette/uploads/images/2026/05/27/2714095.webp?v1&w=420&q=100&f=webp",
      url: "article/661664.html"
    },
    {
      id: "mr-w-5",
      title: "Saud Abdulhamid delayed joining Saudi World Cup camp after Amsterdam robbery",
      publishTime: "2 days ago",
      image: "saudigazette/uploads/images/2026/05/26/2713633.webp?v1&w=550&q=100&f=webp",
      url: "article/661634.html"
    }
  ],
  month: [
    {
      id: "mr-m-1",
      title: "Telegram to adapt to Russia restrictions, Pavel Durov says",
      publishTime: "3 weeks ago",
      image: "saudigazette/uploads/images/2026/04/05/2687401.webp?v1&w=320&q=100&f=webp",
      url: "article/660258.html"
    },
    {
      id: "mr-m-2",
      title: "Makkah airport and metro plans underway: Official",
      publishTime: "2 weeks ago",
      image: "saudigazette/uploads/images/2026/04/01/2685662.webp?v1&w=300&q=100&f=webp",
      url: "article/660176.html"
    },
    {
      id: "mr-m-3",
      title: "How Saudi Arabia maintained growth and stability amid rising regional tensions in March",
      publishTime: "4 weeks ago",
      image: "saudigazette/uploads/images/2026/04/01/2685733.webp?v1&w=300&q=100&f=webp",
      url: "article/660185.html"
    },
    {
      id: "mr-m-4",
      title: "Saudi Arabia to host inaugural Esports Nations Cup in 2026",
      publishTime: "4 weeks ago",
      image: "uploads/images/2025/08/23/2573530.jpg?v1&w=320&q=100&f=webp",
      url: "article/654395.html"
    },
    {
      id: "mr-m-5",
      title: "Chinese AI app Seedance sending Hollywood studios into panic",
      publishTime: "1 month ago",
      image: "saudigazette/uploads/images/2026/02/20/2666038.webp?v1&w=320&q=100&f=webp",
      url: "article/659073.html"
    }
  ]
};
