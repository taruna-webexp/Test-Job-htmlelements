export function GetData(rowscount, last, hasNullValues) {
  const data = [];

  if (rowscount === undefined) {
    rowscount = 100;
  }

  let startIndex = 0;

  if (last) {
    startIndex = rowscount;
    rowscount = last - rowscount;
  }

  const firstNames = [
    "Andrew",
    "Nancy",
    "Shelley",
    "Regina",
    "Yoshi",
    "Antoni",
    "Mayumi",
    "Ian",
    "Peter",
    "Lars",
    "Petra",
    "Martin",
    "Sven",
    "Elio",
    "Beate",
    "Cheryl",
    "Michael",
    "Guylene",
  ];

  const lastNames = [
    "Fuller",
    "Davolio",
    "Burke",
    "Murphy",
    "Nagase",
    "Saavedra",
    "Ohno",
    "Devling",
    "Wilson",
    "Peterson",
    "Winkler",
    "Bein",
    "Petersen",
    "Rossi",
    "Vileid",
    "Saylor",
    "Bjorn",
    "Nodier",
  ];
  const countryData = [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "AndorrA",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "India",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Cote D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and Mcdonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic Of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People'S Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People'S Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia, The Former Yugoslav Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "RWANDA",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const productNames = [
    "Black Tea",
    "Green Tea",
    "Caffe Espresso",
    "Doubleshot Espresso",
    "Caffe Latte",
    "White Chocolate Mocha",
    "Caramel Latte",
    "Caffe Americano",
    "Cappuccino",
    "Espresso Truffle",
    "Espresso con Panna",
    "Peppermint Mocha Twist",
  ];

  const priceValues = [
    "2.25",
    "1.5",
    "3.0",
    "3.3",
    "4.5",
    "3.6",
    "3.8",
    "2.5",
    "5.0",
    "1.75",
    "3.25",
    "4.0",
  ];

  for (let i = 0; i < rowscount; i++) {
    const row = {};

    const productindex = Math.floor(Math.random() * productNames.length);
    const price = parseFloat(priceValues[productindex]);
    const quantity = 1 + Math.round(Math.random() * 10);

    row.id = startIndex + i;
    row.reportsTo = Math.floor(Math.random() * firstNames.length);

    if (i % Math.floor(Math.random() * firstNames.length) === 0) {
      row.reportsTo = null;
    }

    row.available = productindex % 2 === 0;

    if (hasNullValues === true) {
      if (productindex % 2 !== 0) {
        const random = Math.floor(Math.random() * rowscount);
        row.available = i % random === 0 ? null : false;
      }
    }

    row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    row.countryData =
      countryData[Math.floor(Math.random() * countryData.length)];
    row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    row.name = row.firstName + " " + row.lastName;
    row.productName = productNames[productindex];
    row.price = price;
    row.quantity = quantity;
    row.total = price * quantity;

    const date = new Date();
    date.setFullYear(
      2016,
      Math.floor(Math.random() * 11),
      Math.floor(Math.random() * 27)
    );
    date.setHours(0, 0, 0, 0);
    row.date = date;

    data[i] = row;
  }

  return data;
}
