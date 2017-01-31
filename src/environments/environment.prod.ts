export const environment = {
  production: true,
  movies:
  {
      API_BASE_URL: 'https://api.themoviedb.org/3/search/movie?',
      API_KEY: 'af708b4d3ed724d2d43f01c3eb56291d',
      IMAGE_URL: 'https://image.tmdb.org/t/p/w500',
      NO_IMAGE: 'assets/images/no-image.jpg',
      CATEGORY_STRING: {
        ADULT: 'Adults Only',
        ADULT_ONLY: 'No Adult Only'    
      }
  },
  languages: {
    list: ['af', 'ach', 'ak', 'am', 'ar', 'az', 'be', 'bem', 'bg',
      'bh', 'bn', 'br', 'bs', 'ca', 'chr', 'ckb', 
      'co', 'crs', 'cs', 'cy', 'da', 'de', 'ee', 'el', 'en', 'eo', 'es', 
      'es-419', 'et', 'eu', 'fa', 'fi', 
      'fo','fr', 'fy', 'ga', 'gaa', 'gd', 'gl', 'gn', 'gu', 'ha', 
      'haw','hi', 'hr', 'ht', 'hu', 'hy', 'ia', 
      'id','ig', 'is', 'it', 'iw', 'ja', 'jw', 'ka', 'kg',
      'kk','km', 'kn', 'ko', 'kri', 'ku', 'ky', 'la', 
      'lg','ln', 'lo', 'loz', 'lt', 'lua', 'lv', 'mfe', 
      'mg','mi', 'mk', 'ml', 'mn', 'mo', 'mr', 'ms', 'mt',
      'ne','nl', 'nn', 'no', 'nso', 'ny', 'nyn', 'oc', 'om', 
      'or','pa', 'pcm', 'pl', 'ps', 'pt-BR', 
      'pt-PT', 'qu', 'rm', 'rn', 'ro', 'ru', 'rw', 'sd', 'sh', 
      'si, sk', 'sl', 'sn', 'so', 'sq', 'sr', 
      'sr-ME', 'st', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 
      'th', 'ti', 'tk', 'tl', 'tn', 'to', 'tr', 'tt', 
      'tum', 'tw, ug', 'uk', 'ur', 'uz', 'vi', 'wo', 
      'xh', 'xx-bork', 'xx-elmer', 'xx-hacker', 
      'xx-klingon', 'xx-pirate', 'yi', 'yo', 
      'zh-CN', 'zh-TW', 'zu']  
  }
};
