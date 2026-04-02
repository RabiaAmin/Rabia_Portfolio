export const GA_MEASUREMENT_ID = "G-J9TENPSNPQ";

export const pageview = (url) => {
  if (!GA_MEASUREMENT_ID) return; // Avoid errors if env is missing
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};