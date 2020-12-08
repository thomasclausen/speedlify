module.exports = {
  name: "side-projects", // optional, falls back to object key
  description: "Statistics for my silly side projects",
  skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
  options: {
    frequency: 60 * 23, // (in minutes), 23 hours
    freshChrome: "run"
  },
  urls: [
    "https://edbrian.it/",
    "https://searchsear.ch/",
    "https://ytrin.gs/frihed",
    "https://hvemerduks.nu/",
  ]
};
