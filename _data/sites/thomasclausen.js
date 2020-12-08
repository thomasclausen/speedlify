module.exports = {
  name: "thomasclausen.dk", // optional, falls back to object key
  description: "Statistics for my own site",
  skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
  options: {
    frequency: 60 * 23, // (in minutes), 23 hours
  },
  urls: [
    "https://thomasclausen.dk/",
    "https://thomasclausen.dk/det-er-mig/",
    "https://thomasclausen.dk/har-lavet/",
    "https://thomasclausen.dk/skriver-om/",
    "https://thomasclausen.dk/skriver-om/tilgaengelighed-eller-accessibility/",
    "https://thomasclausen.dk/skriver-om/skip-to-content/",
    "https://thomasclausen.dk/kan-kontaktes-her/"
  ]
};
