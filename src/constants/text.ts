// ========================================
// TEXT CONSTANTS
// All user-facing text content in one place
// ========================================

export const SITE_INFO = {
  // Main site information
  TITLE: 'Sydney Brenton - Actor, Singer, Musician',
  NAME: 'Sydney Brenton',
  TAGLINE: 'Actor, Singer, Musician',
  DESCRIPTION: 'Sydney Brenton is an actor, singer, and musician currently based in Los Angeles. View her portfolio, resume, and media.',
  COPYRIGHT: '© 2024 Sydney Brenton',
} as const

export const PAGE_TITLES = {
  // Browser/document titles for each page
  HOME: 'Sydney Brenton - Actor, Singer, Musician',
  ABOUT: 'Resume - Sydney Brenton',
  FILM_STILLS: 'Film Stills - Sydney Brenton',
  LIVE_MEDIA: 'Live Media - Sydney Brenton',
  YOUTUBE: 'Video Content - Sydney Brenton',
  CONTACT: 'Contact Me - Sydney Brenton',
} as const

export const NAVIGATION = {
  // Navigation menu items
  BRAND: 'Sydney Brenton',
  MENU_ITEMS: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Resume' },
    { id: 'film-stills', label: 'Film Stills' },
    { id: 'live-media', label: 'Live Media' },
    { id: 'youtube', label: 'Video Content' },
    { id: 'contact', label: 'Contact Me' }
  ],
} as const

export const HOME_PAGE = {
  // Home page hero section
  HERO: {
    NAME: 'Sydney Brenton',
    TAGLINE: 'Actor, Singer, Musician',
    BIO_PARAGRAPH_1: 'Sydney Brenton is an actor, singer, and musician currently based in Los Angeles. As a New Jersey native, she is often home to visit her parents, sister and  (mostly her dog) and to get a New Jersey bagel. Sydney recently graduated Northwestern University with a Bachelor of Arts in Theatre (concentration in Acting) and Mathematics with an Integrated Marketing Communications certificate.',
    BIO_PARAGRAPH_2: 'She has also studied at Prague Film School in Film Acting and with the Prague Shakespeare Company, additionally performing with them in their summer season. In her spare time, Sydney loves to read, do yoga and pilates, and play piano. At Northwestern, she was the Music Director of THUNK A Cappella, arranged music for them, and sung with a band as well.',
  },
} as const

export const ABOUT_PAGE = {
  // About/Resume page
  RESUME: {
    ALT_TEXT: 'Sydney Brenton Resume',
    DOWNLOAD_BUTTON: 'Download Resume',
    DOWNLOAD_FILENAME: 'Sydney Brenton Resume.pdf',
  },
} as const

export const FILM_STILLS_PAGE = {
  // Film Stills page
  TITLE: 'Film Stills',
  PROJECTS: [
    { title: 'Will - A Short Film' },
    { title: 'Me, My Wife, and I' },
    { title: 'The Usual Couple' },
    { title: 'SMASHED' },
    { title: 'Dinner Date' },
    { title: 'Juliet' },
  ],
  ALT_TEXT_TEMPLATE: 'Film Still', // Will be followed by index number
} as const

export const LIVE_MEDIA_PAGE = {
  // Live Media page
  TITLE: 'Live Media',
  PROJECTS: [
    { title: 'Once' },
    { title: 'THUNK A Cappella' },
    { title: 'Inez, No Exit' },
    { title: 'Lead Vocals, Walter' },
  ],
} as const

export const YOUTUBE_PAGE = {
  // YouTube/Video Content page
  TITLE: 'Video Content',
  VIDEOS: [
    {
      id: '1wj_KOc46AU',
      title: 'SMASHED',
      description: 'Starring Sydney Brenton and Diego Goldfrank',
    },
    {
      id: '_wlXH0DJRaY',
      title: 'THUNK A Capella',
      description: 'Sydney Brenton singing Creep by Radiohead',
    },
    {
      id: 'nx7AG2c19J8',
      title: 'Will - A Short Film',
      description: 'Featuring Sydney Brenton',
    },
    {
      id: '5RM0uf7T--k',
      title: 'THUNK A Capella',
      description: 'Sydney Brenton singing Parking Lot by Genevieve Stokes',
    },
  ],
} as const

export const CONTACT_PAGE = {
  // Contact page content
  TITLE: 'Contact Me',
  INTRO: "You can reach me at:",
  EMAIL: {
    LABEL: 'Email:',
    ADDRESS: 'sydneyybrenton@gmail.com',
  },
  INSTAGRAM: {
    LABEL: 'Instagram:',
    HANDLE: 'sydneyybrenton',
    URL: 'https://instagram.com/sydneyybrenton',
  },
} as const

export const UI_TEXT = {
  // Generic UI text and labels
  LOADING: 'Loading...',
  CLOSE: 'Close',
  PLAY: 'Play',
  DOWNLOAD: 'Download',
  VIEW: 'View',
  BACK: 'Back',
  NEXT: 'Next',
  PREVIOUS: 'Previous',
} as const

export const ALT_TEXTS = {
  // Alt texts for images (accessibility)
  HERO_IMAGE: 'Sydney Brenton Hero',
  LOGO: 'Sydney Brenton Logo',
  PLAY_BUTTON: 'Play Video',
  CLOSE_BUTTON: 'Close',
} as const

// Helper function to get YouTube thumbnail URL
export const getYouTubeThumbnail = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

// Helper function to get YouTube embed URL
export const getYouTubeEmbedUrl = (videoId: string, autoplay = false): string => {
  return `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`
}

// Page titles mapping for easy lookup
export const PAGE_TITLE_MAP = {
  'home': PAGE_TITLES.HOME,
  'about': PAGE_TITLES.ABOUT,
  'film-stills': PAGE_TITLES.FILM_STILLS,
  'live-media': PAGE_TITLES.LIVE_MEDIA,
  'youtube': PAGE_TITLES.YOUTUBE,
  'contact': PAGE_TITLES.CONTACT,
} as const

// Export default title fallback
export const DEFAULT_TITLE = SITE_INFO.NAME
