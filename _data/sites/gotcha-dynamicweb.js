module.exports = {
  name: "Gotcha - Dynamicweb", // optional, falls back to object key
  description: "Statistics for Dynamicweb sites developed at gotcha",
  skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
  options: {
    frequency: 60 * 23, // (in minutes), 23 hours
    freshChrome: "run"
  },
  urls: [
    "https://shop.aircold.dk/",
    "https://ak83.dk/",
    "https://dot-nordic.com/",
    "http://gearupgreen.dk/",
    "https://gotcha.dk/",
    "https://groenkoeling.dk/",
    "http://www.homeinstall.dk/",
    "https://www.hydrema.dk/",
    "https://intech.dk/",
    "https://jutlander.dk/",
    "https://www.ke-fibertec.com/",
    "https://kornetshus.dk/",
    "https://lite-led.dk/",
    "https://www.nc-nielsen.dk/",
    "https://nordsoenoceanarium.dk/",
    "https://redmark.dk/",
    "https://www.smartlift.com/dk",
    "https://www.smyrilline.com/",

    "https://www.aal.dk/",
    "https://www.aalborgcitygymnasium.dk/",
    "https://www.borean.dk/",
    "https://www.ehrenbergsoerensen.dk/",
    "https://www.expo-net.dk/",
    "https://grundtilsucces.dk/",
    "https://intech.dk/en/login",
    "http://manuxa.dk/",
    "https://novi.dk/",
    "https://www.randerstegl.dk/",
    "https://www.rieslingweek.dk/",
    "https://www.roblon.com/",
    "http://www.skagenhavn.dk/",
    "https://distributor.smartlift.com/",
    "https://spilnu-grand-prix.dk/",
    "https://wefly.dk/",
  ]
};
