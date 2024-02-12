const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
//middlewares
app.use(bodyParser.json());
app.use(cors({
  domains: '*',
  methods: "*"
}));

//routes
app.get('/tipocambio', function (req, res) {
  res.json({
    "TipoCompraDolares": "621",
    "TipoVentaDolares": "621",
    "TipoCompraEuros": "731.85",
    "TipoVentaEuros": "761.9"
  });
});
app.get('/listcountri', function (req, res) {
  res.json(
    {
      "Andorra": {
        "Name": "Andorra",
        "Currency": "EUR"
      },
      "French Southern and Antarctic Lands": {
        "Name": "French Southern and Antarctic Lands",
        "Currency": "EUR"
      },
      "Laos": {
        "Name": "Laos",
        "Currency": "LAK"
      },
      "Canada": {
        "Name": "Canada",
        "Currency": "CAD"
      },
      "Nigeria": {
        "Name": "Nigeria",
        "Currency": "NGN"
      },
      "Vanuatu": {
        "Name": "Vanuatu",
        "Currency": "VUV"
      },
      "Czechia": {
        "Name": "Czechia",
        "Currency": "CZK"
      },
      "Malawi": {
        "Name": "Malawi",
        "Currency": "MWK"
      },
      "Mali": {
        "Name": "Mali",
        "Currency": "XOF"
      },
      "Iceland": {
        "Name": "Iceland",
        "Currency": "ISK"
      },
      "Norway": {
        "Name": "Norway",
        "Currency": "NOK"
      },
      "Saint Vincent and the Grenadines": {
        "Name": "Saint Vincent and the Grenadines",
        "Currency": "XCD"
      },
      "Guadeloupe": {
        "Name": "Guadeloupe",
        "Currency": "EUR"
      },
      "Chile": {
        "Name": "Chile",
        "Currency": "CLP"
      },
      "Bermuda": {
        "Name": "Bermuda",
        "Currency": "BMD"
      },
      "Kuwait": {
        "Name": "Kuwait",
        "Currency": "KWD"
      },
      "Dominica": {
        "Name": "Dominica",
        "Currency": "XCD"
      },
      "Montenegro": {
        "Name": "Montenegro",
        "Currency": "EUR"
      },
      "United States Virgin Islands": {
        "Name": "United States Virgin Islands",
        "Currency": "USD"
      },
      "Cameroon": {
        "Name": "Cameroon",
        "Currency": "XAF"
      },
      "Sri Lanka": {
        "Name": "Sri Lanka",
        "Currency": "LKR"
      },
      "China": {
        "Name": "China",
        "Currency": "CNY"
      },
      "Bangladesh": {
        "Name": "Bangladesh",
        "Currency": "BDT"
      },
      "Sweden": {
        "Name": "Sweden",
        "Currency": "SEK"
      },
      "Grenada": {
        "Name": "Grenada",
        "Currency": "XCD"
      },
      "Turkey": {
        "Name": "Turkey",
        "Currency": "TRY"
      },
      "Guinea": {
        "Name": "Guinea",
        "Currency": "GNF"
      },
      "Tanzania": {
        "Name": "Tanzania",
        "Currency": "TZS"
      },
      "Rwanda": {
        "Name": "Rwanda",
        "Currency": "RWF"
      },
      "Singapore": {
        "Name": "Singapore",
        "Currency": "SGD"
      },
      "Morocco": {
        "Name": "Morocco",
        "Currency": "MAD"
      },
      "Saint Barthélemy": {
        "Name": "Saint Barthélemy",
        "Currency": "EUR"
      },
      "Iraq": {
        "Name": "Iraq",
        "Currency": "IQD"
      },
      "Brunei": {
        "Name": "Brunei",
        "Currency": "BND"
      },
      "Isle of Man": {
        "Name": "Isle of Man",
        "Currency": "GBP"
      },
      "North Korea": {
        "Name": "North Korea",
        "Currency": "KPW"
      },
      "Iran": {
        "Name": "Iran",
        "Currency": "IRR"
      },
      "Curaçao": {
        "Name": "Curaçao",
        "Currency": "ANG"
      },
      "Paraguay": {
        "Name": "Paraguay",
        "Currency": "PYG"
      },
      "Albania": {
        "Name": "Albania",
        "Currency": "ALL"
      },
      "Tajikistan": {
        "Name": "Tajikistan",
        "Currency": "TJS"
      },
      "Bolivia": {
        "Name": "Bolivia",
        "Currency": "BOB"
      },
      "Austria": {
        "Name": "Austria",
        "Currency": "EUR"
      },
      "Saint Kitts and Nevis": {
        "Name": "Saint Kitts and Nevis",
        "Currency": "XCD"
      },
      "United States Minor Outlying Islands": {
        "Name": "United States Minor Outlying Islands",
        "Currency": "USD"
      },
      "Colombia": {
        "Name": "Colombia",
        "Currency": "COP"
      },
      "Kosovo": {
        "Name": "Kosovo",
        "Currency": "EUR"
      },
      "Belize": {
        "Name": "Belize",
        "Currency": "BZD"
      },
      "Guinea-Bissau": {
        "Name": "Guinea-Bissau",
        "Currency": "XOF"
      },
      "Marshall Islands": {
        "Name": "Marshall Islands",
        "Currency": "USD"
      },
      "Myanmar": {
        "Name": "Myanmar",
        "Currency": "MMK"
      },
      "French Polynesia": {
        "Name": "French Polynesia",
        "Currency": "XPF"
      },
      "Brazil": {
        "Name": "Brazil",
        "Currency": "BRL"
      },
      "Croatia": {
        "Name": "Croatia",
        "Currency": "EUR"
      },
      "Somalia": {
        "Name": "Somalia",
        "Currency": "SOS"
      },
      "Afghanistan": {
        "Name": "Afghanistan",
        "Currency": "AFN"
      },
      "Anguilla": {
        "Name": "Anguilla",
        "Currency": "XCD"
      },
      "Cook Islands": {
        "Name": "Cook Islands",
        "Currency": "CKD"
      },
      "Western Sahara": {
        "Name": "Western Sahara",
        "Currency": "DZD"
      },
      "New Zealand": {
        "Name": "New Zealand",
        "Currency": "NZD"
      },
      "Eritrea": {
        "Name": "Eritrea",
        "Currency": "ERN"
      },
      "Cambodia": {
        "Name": "Cambodia",
        "Currency": "KHR"
      },
      "Bahamas": {
        "Name": "Bahamas",
        "Currency": "BSD"
      },
      "Belarus": {
        "Name": "Belarus",
        "Currency": "BYN"
      },
      "Norfolk Island": {
        "Name": "Norfolk Island",
        "Currency": "AUD"
      },
      "Tuvalu": {
        "Name": "Tuvalu",
        "Currency": "AUD"
      },
      "South Georgia": {
        "Name": "South Georgia",
        "Currency": "SHP"
      },
      "Mauritania": {
        "Name": "Mauritania",
        "Currency": "MRU"
      },
      "New Caledonia": {
        "Name": "New Caledonia",
        "Currency": "XPF"
      },
      "Bulgaria": {
        "Name": "Bulgaria",
        "Currency": "BGN"
      },
      "Mozambique": {
        "Name": "Mozambique",
        "Currency": "MZN"
      },
      "Niue": {
        "Name": "Niue",
        "Currency": "NZD"
      },
      "Estonia": {
        "Name": "Estonia",
        "Currency": "EUR"
      },
      "Italy": {
        "Name": "Italy",
        "Currency": "EUR"
      },
      "Malta": {
        "Name": "Malta",
        "Currency": "EUR"
      },
      "Slovenia": {
        "Name": "Slovenia",
        "Currency": "EUR"
      },
      "India": {
        "Name": "India",
        "Currency": "INR"
      },
      "Peru": {
        "Name": "Peru",
        "Currency": "PEN"
      },
      "Burundi": {
        "Name": "Burundi",
        "Currency": "BIF"
      },
      "Lithuania": {
        "Name": "Lithuania",
        "Currency": "EUR"
      },
      "United States": {
        "Name": "United States",
        "Currency": "USD"
      },
      "Honduras": {
        "Name": "Honduras",
        "Currency": "HNL"
      },
      "Tonga": {
        "Name": "Tonga",
        "Currency": "TOP"
      },
      "Saudi Arabia": {
        "Name": "Saudi Arabia",
        "Currency": "SAR"
      },
      "Suriname": {
        "Name": "Suriname",
        "Currency": "SRD"
      },
      "Qatar": {
        "Name": "Qatar",
        "Currency": "QAR"
      },
      "Saint Helena, Ascension and Tristan da Cunha": {
        "Name": "Saint Helena, Ascension and Tristan da Cunha",
        "Currency": "GBP"
      },
      "Gibraltar": {
        "Name": "Gibraltar",
        "Currency": "GIP"
      },
      "Northern Mariana Islands": {
        "Name": "Northern Mariana Islands",
        "Currency": "USD"
      },
      "Mauritius": {
        "Name": "Mauritius",
        "Currency": "MUR"
      },
      "Barbados": {
        "Name": "Barbados",
        "Currency": "BBD"
      },
      "Réunion": {
        "Name": "Réunion",
        "Currency": "EUR"
      },
      "British Indian Ocean Territory": {
        "Name": "British Indian Ocean Territory",
        "Currency": "USD"
      },
      "Syria": {
        "Name": "Syria",
        "Currency": "SYP"
      },
      "Egypt": {
        "Name": "Egypt",
        "Currency": "EGP"
      },
      "São Tomé and Príncipe": {
        "Name": "São Tomé and Príncipe",
        "Currency": "STN"
      },
      "Kiribati": {
        "Name": "Kiribati",
        "Currency": "AUD"
      },
      "Timor-Leste": {
        "Name": "Timor-Leste",
        "Currency": "USD"
      },
      "Lesotho": {
        "Name": "Lesotho",
        "Currency": "LSL"
      },
      "Solomon Islands": {
        "Name": "Solomon Islands",
        "Currency": "SBD"
      },
      "Libya": {
        "Name": "Libya",
        "Currency": "LYD"
      },
      "South Korea": {
        "Name": "South Korea",
        "Currency": "KRW"
      },
      "Liechtenstein": {
        "Name": "Liechtenstein",
        "Currency": "CHF"
      },
      "Nicaragua": {
        "Name": "Nicaragua",
        "Currency": "NIO"
      },
      "Ecuador": {
        "Name": "Ecuador",
        "Currency": "USD"
      },
      "Maldives": {
        "Name": "Maldives",
        "Currency": "MVR"
      },
      "Algeria": {
        "Name": "Algeria",
        "Currency": "DZD"
      },
      "Kyrgyzstan": {
        "Name": "Kyrgyzstan",
        "Currency": "KGS"
      },
      "Finland": {
        "Name": "Finland",
        "Currency": "EUR"
      },
      "Kenya": {
        "Name": "Kenya",
        "Currency": "KES"
      },
      "Cuba": {
        "Name": "Cuba",
        "Currency": "CUC"
      },
      "Montserrat": {
        "Name": "Montserrat",
        "Currency": "XCD"
      },
      "Poland": {
        "Name": "Poland",
        "Currency": "PLN"
      },
      "Åland Islands": {
        "Name": "Åland Islands",
        "Currency": "EUR"
      },
      "Ethiopia": {
        "Name": "Ethiopia",
        "Currency": "ETB"
      },
      "Togo": {
        "Name": "Togo",
        "Currency": "XOF"
      },
      "Bosnia and Herzegovina": {
        "Name": "Bosnia and Herzegovina",
        "Currency": "BAM"
      },
      "Uruguay": {
        "Name": "Uruguay",
        "Currency": "UYU"
      },
      "Guam": {
        "Name": "Guam",
        "Currency": "USD"
      },
      "Cape Verde": {
        "Name": "Cape Verde",
        "Currency": "CVE"
      },
      "Chad": {
        "Name": "Chad",
        "Currency": "XAF"
      },
      "Vatican City": {
        "Name": "Vatican City",
        "Currency": "EUR"
      },
      "Palau": {
        "Name": "Palau",
        "Currency": "USD"
      },
      "Haiti": {
        "Name": "Haiti",
        "Currency": "HTG"
      },
      "Yemen": {
        "Name": "Yemen",
        "Currency": "YER"
      },
      "Eswatini": {
        "Name": "Eswatini",
        "Currency": "SZL"
      },
      "Zimbabwe": {
        "Name": "Zimbabwe",
        "Currency": "ZWL"
      },
      "Greece": {
        "Name": "Greece",
        "Currency": "EUR"
      },
      "Israel": {
        "Name": "Israel",
        "Currency": "ILS"
      },
      "Saint Martin": {
        "Name": "Saint Martin",
        "Currency": "EUR"
      },
      "Antigua and Barbuda": {
        "Name": "Antigua and Barbuda",
        "Currency": "XCD"
      },
      "Cyprus": {
        "Name": "Cyprus",
        "Currency": "EUR"
      },
      "Sint Maarten": {
        "Name": "Sint Maarten",
        "Currency": "ANG"
      },
      "Monaco": {
        "Name": "Monaco",
        "Currency": "EUR"
      },
      "Fiji": {
        "Name": "Fiji",
        "Currency": "FJD"
      },
      "Ukraine": {
        "Name": "Ukraine",
        "Currency": "UAH"
      },
      "Martinique": {
        "Name": "Martinique",
        "Currency": "EUR"
      },
      "Hong Kong": {
        "Name": "Hong Kong",
        "Currency": "HKD"
      },
      "Portugal": {
        "Name": "Portugal",
        "Currency": "EUR"
      },
      "Bhutan": {
        "Name": "Bhutan",
        "Currency": "BTN"
      },
      "Nepal": {
        "Name": "Nepal",
        "Currency": "NPR"
      },
      "France": {
        "Name": "France",
        "Currency": "EUR"
      },
      "Ireland": {
        "Name": "Ireland",
        "Currency": "EUR"
      },
      "United Arab Emirates": {
        "Name": "United Arab Emirates",
        "Currency": "AED"
      },
      "Guernsey": {
        "Name": "Guernsey",
        "Currency": "GBP"
      },
      "Saint Lucia": {
        "Name": "Saint Lucia",
        "Currency": "XCD"
      },
      "Dominican Republic": {
        "Name": "Dominican Republic",
        "Currency": "DOP"
      },
      "Serbia": {
        "Name": "Serbia",
        "Currency": "RSD"
      },
      "Botswana": {
        "Name": "Botswana",
        "Currency": "BWP"
      },
      "Ivory Coast": {
        "Name": "Ivory Coast",
        "Currency": "XOF"
      },
      "Ghana": {
        "Name": "Ghana",
        "Currency": "GHS"
      },
      "Comoros": {
        "Name": "Comoros",
        "Currency": "KMF"
      },
      "Azerbaijan": {
        "Name": "Azerbaijan",
        "Currency": "AZN"
      },
      "United Kingdom": {
        "Name": "United Kingdom",
        "Currency": "GBP"
      },
      "Central African Republic": {
        "Name": "Central African Republic",
        "Currency": "XAF"
      },
      "Palestine": {
        "Name": "Palestine",
        "Currency": "EGP"
      },
      "Caribbean Netherlands": {
        "Name": "Caribbean Netherlands",
        "Currency": "USD"
      },
      "Taiwan": {
        "Name": "Taiwan",
        "Currency": "TWD"
      },
      "Pitcairn Islands": {
        "Name": "Pitcairn Islands",
        "Currency": "NZD"
      },
      "San Marino": {
        "Name": "San Marino",
        "Currency": "EUR"
      },
      "Svalbard and Jan Mayen": {
        "Name": "Svalbard and Jan Mayen",
        "Currency": "NOK"
      },
      "Djibouti": {
        "Name": "Djibouti",
        "Currency": "DJF"
      },
      "Wallis and Futuna": {
        "Name": "Wallis and Futuna",
        "Currency": "XPF"
      },
      "Denmark": {
        "Name": "Denmark",
        "Currency": "DKK"
      },
      "Papua New Guinea": {
        "Name": "Papua New Guinea",
        "Currency": "PGK"
      },
      "Madagascar": {
        "Name": "Madagascar",
        "Currency": "MGA"
      },
      "Hungary": {
        "Name": "Hungary",
        "Currency": "HUF"
      },
      "Tokelau": {
        "Name": "Tokelau",
        "Currency": "NZD"
      },
      "Trinidad and Tobago": {
        "Name": "Trinidad and Tobago",
        "Currency": "TTD"
      },
      "Gambia": {
        "Name": "Gambia",
        "Currency": "GMD"
      },
      "Luxembourg": {
        "Name": "Luxembourg",
        "Currency": "EUR"
      },
      "Cocos (Keeling) Islands": {
        "Name": "Cocos (Keeling) Islands",
        "Currency": "AUD"
      },
      "Republic of the Congo": {
        "Name": "Republic of the Congo",
        "Currency": "XAF"
      },
      "Argentina": {
        "Name": "Argentina",
        "Currency": "ARS"
      },
      "DR Congo": {
        "Name": "DR Congo",
        "Currency": "CDF"
      },
      "Greenland": {
        "Name": "Greenland",
        "Currency": "DKK"
      },
      "Jordan": {
        "Name": "Jordan",
        "Currency": "JOD"
      },
      "Belgium": {
        "Name": "Belgium",
        "Currency": "EUR"
      },
      "Switzerland": {
        "Name": "Switzerland",
        "Currency": "CHF"
      },
      "Indonesia": {
        "Name": "Indonesia",
        "Currency": "IDR"
      },
      "Lebanon": {
        "Name": "Lebanon",
        "Currency": "LBP"
      },
      "Malaysia": {
        "Name": "Malaysia",
        "Currency": "MYR"
      },
      "Cayman Islands": {
        "Name": "Cayman Islands",
        "Currency": "KYD"
      },
      "Slovakia": {
        "Name": "Slovakia",
        "Currency": "EUR"
      },
      "Armenia": {
        "Name": "Armenia",
        "Currency": "AMD"
      },
      "Christmas Island": {
        "Name": "Christmas Island",
        "Currency": "AUD"
      },
      "Mongolia": {
        "Name": "Mongolia",
        "Currency": "MNT"
      },
      "Saint Pierre and Miquelon": {
        "Name": "Saint Pierre and Miquelon",
        "Currency": "EUR"
      },
      "Japan": {
        "Name": "Japan",
        "Currency": "JPY"
      },
      "South Africa": {
        "Name": "South Africa",
        "Currency": "ZAR"
      },
      "Philippines": {
        "Name": "Philippines",
        "Currency": "PHP"
      },
      "Micronesia": {
        "Name": "Micronesia",
        "Currency": "USD"
      },
      "Germany": {
        "Name": "Germany",
        "Currency": "EUR"
      },
      "Latvia": {
        "Name": "Latvia",
        "Currency": "EUR"
      },
      "Jamaica": {
        "Name": "Jamaica",
        "Currency": "JMD"
      },
      "Macau": {
        "Name": "Macau",
        "Currency": "MOP"
      },
      "Nauru": {
        "Name": "Nauru",
        "Currency": "AUD"
      },
      "Faroe Islands": {
        "Name": "Faroe Islands",
        "Currency": "DKK"
      },
      "Guyana": {
        "Name": "Guyana",
        "Currency": "GYD"
      },
      "Burkina Faso": {
        "Name": "Burkina Faso",
        "Currency": "XOF"
      },
      "Sudan": {
        "Name": "Sudan",
        "Currency": "SDG"
      },
      "Russia": {
        "Name": "Russia",
        "Currency": "RUB"
      },
      "Mayotte": {
        "Name": "Mayotte",
        "Currency": "EUR"
      },
      "Australia": {
        "Name": "Australia",
        "Currency": "AUD"
      },
      "Liberia": {
        "Name": "Liberia",
        "Currency": "LRD"
      },
      "Mexico": {
        "Name": "Mexico",
        "Currency": "MXN"
      },
      "Tunisia": {
        "Name": "Tunisia",
        "Currency": "TND"
      },
      "Aruba": {
        "Name": "Aruba",
        "Currency": "AWG"
      },
      "Kazakhstan": {
        "Name": "Kazakhstan",
        "Currency": "KZT"
      },
      "Oman": {
        "Name": "Oman",
        "Currency": "OMR"
      },
      "French Guiana": {
        "Name": "French Guiana",
        "Currency": "EUR"
      },
      "Niger": {
        "Name": "Niger",
        "Currency": "XOF"
      },
      "Turkmenistan": {
        "Name": "Turkmenistan",
        "Currency": "TMT"
      },
      "Sierra Leone": {
        "Name": "Sierra Leone",
        "Currency": "SLL"
      },
      "Samoa": {
        "Name": "Samoa",
        "Currency": "WST"
      },
      "Senegal": {
        "Name": "Senegal",
        "Currency": "XOF"
      },
      "Georgia": {
        "Name": "Georgia",
        "Currency": "GEL"
      },
      "Namibia": {
        "Name": "Namibia",
        "Currency": "NAD"
      },
      "South Sudan": {
        "Name": "South Sudan",
        "Currency": "SSP"
      },
      "Thailand": {
        "Name": "Thailand",
        "Currency": "THB"
      },
      "Bahrain": {
        "Name": "Bahrain",
        "Currency": "BHD"
      },
      "Falkland Islands": {
        "Name": "Falkland Islands",
        "Currency": "FKP"
      },
      "Jersey": {
        "Name": "Jersey",
        "Currency": "GBP"
      },
      "Vietnam": {
        "Name": "Vietnam",
        "Currency": "VND"
      },
      "Guatemala": {
        "Name": "Guatemala",
        "Currency": "GTQ"
      },
      "Moldova": {
        "Name": "Moldova",
        "Currency": "MDL"
      },
      "North Macedonia": {
        "Name": "North Macedonia",
        "Currency": "MKD"
      },
      "Uzbekistan": {
        "Name": "Uzbekistan",
        "Currency": "UZS"
      },
      "Romania": {
        "Name": "Romania",
        "Currency": "RON"
      },
      "Uganda": {
        "Name": "Uganda",
        "Currency": "UGX"
      },
      "El Salvador": {
        "Name": "El Salvador",
        "Currency": "USD"
      },
      "Zambia": {
        "Name": "Zambia",
        "Currency": "ZMW"
      },
      "Gabon": {
        "Name": "Gabon",
        "Currency": "XAF"
      },
      "Equatorial Guinea": {
        "Name": "Equatorial Guinea",
        "Currency": "XAF"
      },
      "Spain": {
        "Name": "Spain",
        "Currency": "EUR"
      },
      "Netherlands": {
        "Name": "Netherlands",
        "Currency": "EUR"
      },
      "British Virgin Islands": {
        "Name": "British Virgin Islands",
        "Currency": "USD"
      },
      "Benin": {
        "Name": "Benin",
        "Currency": "XOF"
      },
      "Pakistan": {
        "Name": "Pakistan",
        "Currency": "PKR"
      },
      "Panama": {
        "Name": "Panama",
        "Currency": "PAB"
      },
      "Turks and Caicos Islands": {
        "Name": "Turks and Caicos Islands",
        "Currency": "USD"
      },
      "Angola": {
        "Name": "Angola",
        "Currency": "AOA"
      },
      "American Samoa": {
        "Name": "American Samoa",
        "Currency": "USD"
      },
      "Venezuela": {
        "Name": "Venezuela",
        "Currency": "VES"
      },
      "Costa Rica": {
        "Name": "Costa Rica",
        "Currency": "CRC"
      },
      "Puerto Rico": {
        "Name": "Puerto Rico",
        "Currency": "USD"
      },
      "Seychelles": {
        "Name": "Seychelles",
        "Currency": "SCR"
      }
    }
  );
});
//start the app
app.listen(3001, () => console.log(`BBCR Exchange type service listening on port 3001!`))
