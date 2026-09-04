export interface TourCity {
  id: string;
  city: string;
  country: 'USA' | 'Canada';
  venue: string;
  season: string;
  preSeatStatus: string;
  status: 'Pre-Seat Booking Open' | 'Coming Soon 2027' | 'Limited VIP Seats' | 'Priority Waitlist';
  capacity: string;
}

export interface VIPTier {
  id: string;
  name: string;
  badge: string;
  price?: number;
  perks: string[];
  recommended?: boolean;
}

export interface MusicTrack {
  id: string;
  title: string;
  era: string;
  duration: string;
  description: string;
}
