export interface BookingRecord {
  id: string;
  timestamp: string;
  guestName: string;
  guestEmail: string;
  phone?: string;
  city: string;
  venue?: string;
  tier: string;
  tierPrice?: number;
  ticketCount: number;
  totalAmount?: number;
  reservationCode: string;
  source: 'pre_seat_modal' | 'contact_form' | 'diwali_gala_modal';
  notes?: string;
  status: 'confirmed' | 'pending' | 'contacted';
}

const STORAGE_KEY = 'tinsel_town_bookings_v1';

export const getSavedBookings = (): BookingRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Return default initial demo bookings for preview
      const initialBookings: BookingRecord[] = [
        {
          id: 'bkg-101',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
          guestName: 'Rajesh & Simran Malhotra',
          guestEmail: 'rajesh.malhotra@gmail.com',
          phone: '+1 (416) 555-0192',
          city: 'Toronto, Canada',
          venue: 'Scotiabank Arena',
          tier: 'Royal Diamond VIP',
          ticketCount: 2,
          reservationCode: 'TT-PRE-2027-849201',
          source: 'pre_seat_modal',
          notes: 'Front row seats requested with Meet & Greet passes',
          status: 'confirmed',
        },
        {
          id: 'bkg-102',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
          guestName: 'Pooja Varma',
          guestEmail: 'pooja.v@outlook.com',
          phone: '+1 (201) 445-8890',
          city: 'New York City, USA',
          venue: 'Madison Square Garden',
          tier: 'Platinum Symphony',
          ticketCount: 4,
          reservationCode: 'TT-PRE-2027-512034',
          source: 'pre_seat_modal',
          notes: 'Family booking for weekend show',
          status: 'confirmed',
        },
        {
          id: 'bkg-103',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
          guestName: 'Amit Kapoor (Bay Area Promoters)',
          guestEmail: 'amit@bayentertainment.com',
          phone: '+1 (408) 890-1200',
          city: 'San Francisco, USA',
          venue: 'Chase Center',
          tier: 'Promoter City Inquiry',
          ticketCount: 1,
          reservationCode: 'TT-CITY-2027-109283',
          source: 'contact_form',
          notes: 'Interested in co-promoting Snehaa & Rram concert in USA',
          status: 'pending',
        },
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialBookings));
      return initialBookings;
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveNewBooking = (booking: Omit<BookingRecord, 'id' | 'timestamp'>): BookingRecord => {
  const existing = getSavedBookings();
  const newRecord: BookingRecord = {
    ...booking,
    id: `bkg-${Date.now()}`,
    timestamp: new Date().toISOString(),
  };
  const updated = [newRecord, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save booking to storage', err);
  }
  return newRecord;
};

export const deleteBooking = (id: string): void => {
  const existing = getSavedBookings();
  const updated = existing.filter((b) => b.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to delete booking', err);
  }
};

export const clearAllBookings = (): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  } catch (err) {
    console.error('Failed to clear bookings', err);
  }
};

export const updateBookingStatus = (id: string, status: BookingRecord['status']): void => {
  const existing = getSavedBookings();
  const updated = existing.map((b) => (b.id === id ? { ...b, status } : b));
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update status', err);
  }
};

export const exportBookingsToCSV = (): void => {
  const bookings = getSavedBookings();
  if (bookings.length === 0) {
    alert('No bookings available to export.');
    return;
  }

  const headers = [
    'Reservation Code',
    'Date & Time',
    'Guest Name',
    'Email',
    'Phone',
    'City & Venue',
    'Tier/Category',
    'Passes (Qty)',
    'Access Status',
    'Source',
    'Status',
    'Notes',
  ];

  const rows = bookings.map((b) => [
    `"${b.reservationCode}"`,
    `"${new Date(b.timestamp).toLocaleString()}"`,
    `"${b.guestName.replace(/"/g, '""')}"`,
    `"${b.guestEmail.replace(/"/g, '""')}"`,
    `"${(b.phone || '').replace(/"/g, '""')}"`,
    `"${b.city.replace(/"/g, '""')}"`,
    `"${b.tier.replace(/"/g, '""')}"`,
    b.ticketCount,
    '"Pre-Seat Priority"',
    `"${b.source}"`,
    `"${b.status}"`,
    `"${(b.notes || '').replace(/"/g, '""')}"`,
  ]);

  const csvContent =
    'data:text/csv;charset=utf-8,' +
    [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute(
    'download',
    `tinsel_town_bookings_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
