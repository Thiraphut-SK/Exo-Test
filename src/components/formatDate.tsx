import moment from "moment";

moment.locale("th");

moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: (value: number) => {
      // ถ้าเกิน 7 วัน ให้แปลงเป็นสัปดาห์
      if (value >= 7) {
        const weeks = Math.floor(value / 7);

        return weeks === 1 ? "a week" : `${weeks} weeks`;
      }

      return `${value} days`;
    },
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

export default function formatDate(dateInput: string | Date | null) {
  if (!dateInput) return "";

  return moment(dateInput).fromNow();
}
