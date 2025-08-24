export const ROSSWARE = {
  SCHEDULE: import.meta.env.VITE_ROSSWARE_SCHEDULE_URL ?? "https://booking.rossware.com/schedule/4474",
  TRACK:    import.meta.env.VITE_ROSSWARE_TRACK_URL    ?? "https://booking.rossware.com/track-technician/4474",
  PARTS:    import.meta.env.VITE_ROSSWARE_PARTS_URL    ?? "https://booking.rossware.com/check-status/4474",
} as const;
