export const wedding = {
  bride: "Dr. Anjali Gupta",
  brideParents: "Mr. Deepak Kumar Gupta & Mrs. Anju Gupta",
  groom: "Dr. Prashant Mehrotra",
  groomParents: "Mr. Atul Kumar Mehrotra & Mrs. Ritu Mehrotra",
  invitationLine: "Together with their families, request the honour of your presence",
  dateLabel: "Wednesday, 25 November 2026",
  shortDate: "25-11-2026",
  countdownTarget: "2026-11-25T19:30:00+05:30",
  story: [
    "Introduced by family, brought together by long talks and unforgettable dates.",
    "We started as two strangers on a call and grew into partners for life.",
  ],
  events: [
    {
      name: "Engagement",
      date: "25 November 2026",
      time: "9:30 AM",
      venue: "The Auravya Grand, Mohammadi",
      note: "Two souls, two rings, and a sacred promise celebrated with family.",
    },
    {
      name: "Wedding Ceremony",
      date: "25 November 2026",
      time: "7:30 PM",
      venue: "The Auravya Grand, Mohammadi",
      note: "The sacred saat phere, eternal vows, and divine blessings.",
    },
  ],
  venue: {
    name: "The Auravya Grand",
    address: "Mohamadi Sarai Road, Shuklapur Road, near Maharana Pratap Murti Chauraha, Mohammadi, Uttar Pradesh 262804",
    hint: "Near Maharana Pratap Murti Chauraha, Mohammadi",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Auravya+Grand+Mohammadi",
    mapEmbed: "https://www.google.com/maps?q=The+Auravya+Grand+Mohammadi&output=embed",
  },
  studio: {
    name: "STR STUDIO",
    phone: "8318424976",
  },
  closing: "With love and gratitude, we await you.",
} as const;

export function buildIcs() {
  const start = new Date(wedding.countdownTarget);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Prashant and Anjali//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@prashant-anjali`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Wedding of ${wedding.groom} & ${wedding.bride}`,
    `LOCATION:${wedding.venue.name}, ${wedding.venue.address}`,
    "DESCRIPTION:Wedding celebrations. We would love to have you with us.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

