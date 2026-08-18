import data from './weddingData.json';

export const {
  brand,
  hero,
  photoGallery,
  groomAndBride,
  scratchToReveal,
  invitationCards,
  countdown,
  weddingEvents,
  venueLocation,
  footer
} = data;

// Map compatible objects for sections to consume easily
export const COUPLE_DETAILS = {
  bride: {
    name: groomAndBride.bride.name,
    fullName: groomAndBride.bride.name,
    parents: groomAndBride.bride.parents,
    grandparents: "Daughter of The Bride's Family",
    about: groomAndBride.bride.description,
    instagram: groomAndBride.bride.instagram,
    photo: groomAndBride.bride.imageUrl
  },
  groom: {
    name: groomAndBride.groom.name,
    fullName: groomAndBride.groom.name,
    parents: groomAndBride.groom.parents,
    grandparents: "Son of Sri & Smt. Maharana Family",
    about: groomAndBride.groom.description,
    instagram: groomAndBride.groom.instagram,
    photo: groomAndBride.groom.imageUrl
  },
  weddingDate: countdown.targetDate,
  displayDate: hero.eventDate,
  hashtag: `#${groomAndBride.groom.name}Weds${groomAndBride.bride.name}`,
  tagline: hero.subtitle,
  mainVenue: hero.venue
};

export const LOVE_STORY = [
  {
    id: "first-meet",
    year: "2023",
    title: "A Creative Spark",
    location: "Udaipur Heritage Restoration Site",
    description: "Arjun was sketching a classical Rajputana archway, and Ananya was searching for historical textile motifs. They shared an afternoon tea, and a beautiful connection began.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "friendship",
    year: "2024",
    title: "Melodies & Design",
    location: "Mewar Cultural Centre",
    description: "Ananya's classical vocal performance resonated with Arjun's appreciation for fine arts. They spent months sharing acoustical songs, traditional design concepts, and coffee by the lake.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proposal",
    year: "2025",
    title: "The Moonlit Vow",
    location: "Fateh Sagar Lake, Udaipur",
    description: "Under a blanket of stars during a quiet boat ride on Lake Pichola, Arjun proposed with a handcrafted heritage ring. Ananya sang her acceptance to the gentle lake breeze.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wedding-day",
    year: "2027",
    title: "Royal Union",
    location: "The Rose Garden Estate, Udaipur",
    description: "Walking hand in hand into a lifetime of love, creativity, and sacred promises surrounded by our dear family and friends.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_IMAGES = photoGallery.photos.map((photo) => {
  let url = photo.src;
  if (url === 'gallery1.jpg') {
    url = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800';
  } else if (url === 'happymoment.jpg') {
    url = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800';
  } else if (url === 'engagement.jpg') {
    url = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800';
  } else if (url === 'love story.jpg') {
    url = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800';
  } else if (url === 'proposal.jpg') {
    url = 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800';
  } else if (url === 'sindur.jpg') {
    url = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800';
  } else if (url === 'celebration.jpg') {
    url = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800';
  }
  return {
    id: photo.id,
    url: url,
    title: photo.alt,
    caption: photo.alt
  };
});

export const VENUE_INFO = {
  name: venueLocation.venueName,
  subtitle: venueLocation.sectionTitle,
  address: venueLocation.address,
  googleMapEmbed: venueLocation.mapEmbedIframeUrl,
  directionsUrl: venueLocation.googleMapsUrl,
  features: [
    {
      title: "Airport Connections",
      desc: venueLocation.airport
    },
    {
      title: "Railway Connections",
      desc: venueLocation.railway
    },
    {
      title: "Valet Parking",
      desc: venueLocation.parking
    }
  ]
};

export const WEDDING_EVENTS = weddingEvents.map((evt) => {
  let image = evt.imageUrl;
  if (image === '/haldi_ceremony.jpg') {
    image = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80';
  } else if (image === '/saadi.png') {
    image = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80';
  }

  let dressColorPalette = ['#D4AF37', '#FFF8EF', '#8B1E3F'];
  if (evt.id === 'welcome') {
    dressColorPalette = ['#1E3A8A', '#3B82F6', '#F59E0B', '#FFF8EF'];
  } else if (evt.id === 'mehendi') {
    dressColorPalette = ['#047857', '#10B981', '#F59E0B', '#FFF8EF'];
  } else if (evt.id === 'haldi') {
    dressColorPalette = ['#FBBF24', '#F59E0B', '#FFFBEB', '#FFFFFF'];
  } else if (evt.id === 'sangeet') {
    dressColorPalette = ['#8B5CF6', '#EC4899', '#3B82F6', '#000000'];
  } else if (evt.id === 'wedding') {
    dressColorPalette = ['#991B1B', '#D4AF37', '#FFFBEB', '#7F1D1D'];
  } else if (evt.id === 'reception') {
    dressColorPalette = ['#0F172A', '#D4AF37', '#FFFFFF', '#64748B'];
  }

  return {
    ...evt,
    image,
    hindiTitle: evt.subtitle || "विवाह उत्सव",
    dressColorPalette,
    mapUrl: venueLocation.googleMapsUrl,
    address: venueLocation.address
  };
});

export const INVITATION_MESSAGE = {
  quote: "\"Mangalam Bhagwan Vishnoo, Mangalam Garunadhwaja. Mangalam Pundareekaksham, Mangalaya Tano Harih.\"",
  translation: "May auspiciousness and divine grace surround your presence as two hearts unite in eternal love.",
  letterBody: hero.subtitle
};
