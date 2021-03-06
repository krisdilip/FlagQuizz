var continents = [
	{name:"Africa", 
	img:"./img/africa.png",
	area:["30,221,532","(11,668,599 sq mi)"],
	countries:"57"},
	{name:"Asia", 
	img:"./img/asia.png",
	area:["44,579,000","(17,212,000 sq mi)"],
	countries:"48"},
	{name:"Europe", 
	img:"./img/europe.png",
	area:["10,180,000","(3,930,000 sq mi)"],
	countries:"50"},
	{name:"North America", 
	img:"./img/northamerica.png",
	area:["24,709,000","(9,540,000 sq mi)"],
	countries:"23"},
	{name:"South America", 
	img:"./img/southamerica.png",
	area:["17,840,000","(6,890,000 sq mi)"],
	countries:"12"},
	{name:"Oceania", 
	img:"./img/oceania.png",
	area:["8,560,000","(3,310,000 sq mi)"],
	countries:"14"},
	{name:"Antarctica", 
	img:"./img/antartica.png",
	area:["14,000,000","(5,400,000 sq mi)"],
	countries:"0"}
];

var africa = [
{flag:"./img/algeria.png",name:"Algeria", capital:["Algiers"], currency:["Dinar"], lang:["Arabic"]},
{flag:"./img/angola.png",name:"Angola", capital:["Luanda"], currency:["Kwanza"], lang:["Portuguese"]},
{flag:"./img/benin.png",name:"Benin", capital:["Porto-Novo (official)","Cotonou (seat of government)"], currency:["CFA franc"], lang:["French"]},
{flag:"./img/botswana.png",name:"Botswana", capital:["Gaborone"], currency:["Pula"], lang:["English","Setswana"]},
{flag:"./img/burkina-faso.png",name:"Burkina Faso",capital:["Ouagadougou"],currency:["CFA franc"],lang:["French"]},
{flag:"./img/burundi.png",name:"Burundi",capital:["Bujumbura"],currency:["Burundian franc"],lang:["Kirundi","French"]},
{flag:"./img/cameroon.png",name:"Cameroon",capital:["Yaoundé"],currency:["CFA franc"],lang:["French","English"]},
{flag:"./img/cape-verde.png",name:"Cape Verde",capital:["Praia"],currency:["Cape Verdean escudo"],lang:["Portuguese"]},
{flag:"./img/central-african-republic.png",name:"Central African Republic",capital:["Bangui"],currency:["CFA franc"],lang:["French","Sango"]},
{flag:"./img/chad.png",name:"Chad",capital:["N'Djamena"],currency:["CFA franc"],lang:["French","Arabic"]},
{flag:"./img/comoros.png",name:"Comoros",capital:["Moroni"],currency:["Comorian franc"],lang:["Comorian","Arabic","French"]},
{flag:"./img/congo.png",name:"Congo (Congo-Brazzaville)",capital:["Brazzaville"],currency:["CFA franc"],lang:["French"]},
{flag:"./img/ivory-coast.png",name:"Côte d'Ivoire (Ivory Coast)",capital:["Yamoussoukro (official)","Abidjan (seat of government)"],currency:["CFA franc"],lang:["French"]},
{flag:"./img/democratic-republic-of-the-congo.png",name:"Democratic Republic of the Congo (Congo-Kinshasa)",capital:["Kinshasa"],currency:["Congolese franc"],lang:["French"]},
{flag:"./img/djibouti.png",name:"Djibouti",capital:["Djibouti"],currency:["Djiboutian franc"],lang:["French","Arabic"]},
{flag:"./img/egypt.png",name:"Egypt",capital:["Cairo"],currency:["Egyptian pound"],lang:["Arabic"]},
{flag:"./img/equatorial-guinea.png",name:"Equatorial Guinea",capital:["Malabo"],currency:["Equatorial Guinean peseta"],lang:["Spanish","French","Portuguese"]},
{flag:"./img/eritrea.png",name:"Eritrea",capital:["Asmara"],currency:["Tallero"],lang:["Tigrinya","Arabic","English"]},
{flag:"./img/ethiopia.png",name:"Ethiopia",capital:["Addis Ababa"],currency:["Birr"],lang:["Amharic"]},
{flag:"./img/gabon.png",name:"Gabon",capital:["Libreville"],currency:["CFA franc"],lang:["French"]},
{flag:"./img/gambia.png",name:"Gambia",capital:["Banjul"],currency:["Gambian dalasi"],lang:["English"]},
{flag:"./img/ghana.png",name:"Ghana",capital:["Accra"],currency:["Ghana cedi"],lang:["English"]},
{flag:"./img/guinea.png",name:"Guinea",capital:["Conakry"],currency:["Guinean franc"],lang:["French"]},
{flag:"./img/guinea-bissau.png",name:"Guinea-Bissau",capital:["Bissau"],currency:["CFA franc"],lang:["Portuguese"]},
{flag:"./img/kenya.png",name:"Kenya",capital:["Nairobi"],currency:["Kenyan shilling"],lang:["Swahili","English"]},
{flag:"./img/lesotho.png",name:"Lesotho",capital:["Maseru"],currency:["Lesotho loti"],lang:["English","Sesotho"]},
{flag:"./img/liberia.png",name:"Liberia",capital:["Monrovia"],currency:["Liberian dollar"],lang:["English"]},
{flag:"./img/libya.png",name:"Libya",capital:["Tripoli"],currency:["Dinar"],lang:["Arabic"]},
{flag:"./img/madagascar.png",name:"Madagascar",capital:["Antananarivo"],currency:["Malagasy ariary"],lang:["Malagasy","French"]},
{flag:"./img/malawi.png",name:"Malawi",capital:["Lilongwe"],currency:["Kwacha"],lang:["English","Chichewa"]},
{flag:"./img/mali.png",name:"Mali",capital:["Bamako"],currency:["CFA franc"],lang:["French"]},
{flag:"./img/mauritania.png",name:"Mauritania",capital:["Nouakchott"],currency:["Ouguiya"],lang:["Arabic"]},
{flag:"./img/mauritius.png",name:"Mauritius",capital:["Port Louis"],currency:["Mauritian rupee"],lang:["Mauritian Creole","French","English"]},
{flag:"./img/mayotte.png",name:"Mayotte",capital:["Mamoudzou","Overseas department of France"],currency:["Euro"],lang:["French"]},
{flag:"./img/morocco.png",name:"Morocco",capital:["Rabat"],currency:["Moroccan dirham"],lang:["Arabic","Berber"]},
{flag:"./img/mozambique.png",name:"Mozambique",capital:["Maputo"],currency:["Mozambican metical"],lang:["Portuguese"]},
{flag:"./img/namibia.png",name:"Namibia",capital:["Windhoek"],currency:["Namibian dollar"],lang:["English"]},
{flag:"./img/niger.png",name:"Niger",capital:["Niamey"],currency:["CFA franc"],lang:["French"]},
{flag:"./img/nigeria.png",name:"Nigeria",capital:["Abuja"],currency:["Naira"],lang:["English"]},
{flag:"./img/reunion.png",name:"Réunion",capital:["Saint-Denis","Overseas department of France"],currency:["Euro"],lang:["French"]},
{flag:"./img/rwanda.png",name:"Rwanda",capital:["Kigali"],currency:["Rwandan franc"],lang:["Kinyarwanda","English","French"]},
{flag:"./img/saint-helena.png",name:"Saint Helena, Ascension and Tristan da Cunha",capital:["Jamestown (Saint Helena)","Georgetown (Ascension Island)","Edinburgh of the Seven Seas (Tristan da Cunha)"],currency:["Saint Helena pound","Pound sterling"],lang:["English"]},
{flag:"./img/sao-tome.png",name:"Sao Tome and Principe",capital:["São Tomé"],currency:["Dobra"],lang:["Portuguese"]},
{flag:"./img/senegal.png",name:"Senegal",capital:["Dakar"],currency:["CFA franc"],lang:["French"]},
{flag:"./img/seychelles.png",name:"Seychelles",capital:["Victoria"],currency:["Seychellois rupee"],lang:["Seychellois Creole","French","English"]},
{flag:"./img/sierra-leone.png",name:"Sierra Leone",capital:["Freetown"],currency:["Leone"],lang:["English"]},
{flag:"./img/somalia.png",name:"Somalia",capital:["Mogadishu"],currency:["Somali shilling"],lang:["Somali","Arabic"]},
{flag:"./img/somaliland.png",name:"Somaliland",capital:["Hargeisa"],currency:["Somaliland shilling"],lang:["Somali","Arabic"]},
{flag:"./img/south-africa.png",name:"South Africa",capital:["Pretoria (administrative/executive)","Cape Town (legislative)","Bloemfontein (judicial)"],currency:["South African rand"],lang:["Afrikaans","English","Southern Ndebele","Northern Sotho","Southern Sotho","Swazi","Tsonga","Tswana","Venda","Xhosa"]},
{flag:"./img/south-sudan.png",name:"South Sudan",capital:["Juba"],currency:["South Sudanese pound"],lang:["English"]},
{flag:"./img/sudan.png",name:"Sudan",capital:["Khartoum"],currency:["Sudanese pound"],lang:["Arabic","English"]},
{flag:"./img/swaziland.png",name:"Swaziland",capital:["Mbabane (administrative)","Lobamba (royal and legislative)"],currency:["Lilangeni"],lang:["English","Swati"]},
{flag:"./img/tanzania.png",name:"Tanzania",capital:["Dodoma (official)","Dar es Salaam (seat of government)"],currency:["Tanzanian shilling"],lang:["Swahili","English"]},
{flag:"./img/togo.png",name:"Togo",capital:["Lomé"],currency:["CFA franc"],lang:["French"]},
{flag:"./img/tunisia.png",name:"Tunisia",capital:["Tunis"],currency:["Tunisian dinar"],lang:["Arabic"]},
{flag:"./img/uganda.png",name:"Uganda",capital:["Kampala"],currency:["Ugandan shilling"],lang:["Swahili","English","Luganda"]},
{flag:"./img/zambia.png",name:"Zambia",capital:["Lusaka"],currency:["Zambian kwacha"],lang:["English"]},
{flag:"./img/zimbabwe.png",name:"Zimbabwe",capital:["Harare"],currency:["various"],lang:["English","Shona","Sindebele"]}
];


var asia = [
{flag:"./img/afghanistan.png",name:"Afghanistan",capital:["Kabul"],currency:["Afghani"],lang:["Pashto","Dari (Persian)"]},
{flag:"./img/akrotiri.png",name:"Akrotiri and Dhekelia",capital:["Episkopi Cantonment"],currency:["Euro"],lang:["English","Greek"]},
{flag:"./img/armenia.png",name:"Armenia",capital:["Yerevan"],currency:["Dram"],lang:["Armenian"]},
{flag:"./img/azerbaijan.png",name:"Azerbaijan [Europe]",capital:["Baku"],currency:["Manat"],lang:["Azerbaijani"]},
{flag:"./img/bahrain.png",name:"Bahrain",capital:["Manama"],currency:["Bahraini dinar"],lang:["Arabic"]},
{flag:"./img/bangladesh.png",name:"Bangladesh",capital:["Dhaka"],currency:["Taka"],lang:["Bengali"]},
{flag:"./img/bhutan.png",name:"Bhutan",capital:["Thimphu"],currency:["Bhutanese ngultrum"],lang:["Dzongkha"]},
{flag:"./img/british-indian-ocean-territory.png",name:"British Indian Ocean Territory",capital:["Diego Garcia","Overseas territory of the United Kingdom"],currency:["US dollar","UK pound"],lang:["English"]},
{flag:"./img/brunei.png",name:"Brunei",capital:["Bandar Seri Begawan"],currency:["Brunei dollar"],lang:["Bahasa Melayu"]},
{flag:"./img/cambodia.png",name:"Cambodia",capital:["Phnom Penh"],currency:["Riel"],lang:["Khmer"]},
{flag:"./img/china.png",name:"China",capital:["Beijing"],currency:["Renminbi (yuan)"],lang:["Standard Chinese"]},
{flag:"./img/christmas-island.png",name:"Christmas Island",capital:["Flying Fish Cove","External territory of Australia"],currency:["Australian dollar"],lang:["English"]},
{flag:"./img/cocos-islands.png",name:"Cocos (Keeling) Islands",capital:["West Island","External territory of Australia"],currency:["Australian dollar"],lang:["English","Tagalog"]},
{flag:"./img/cyprus.png",name:"Cyprus [Europe]",capital:["Nicosia"],currency:["Euro"],lang:["Greek","Turkish"]},
{flag:"./img/east-timor.png",name:"East Timor (Timor-Leste)",capital:["Dili"],currency:["US Dollar"],lang:["Portuguese","Tetum"]},
{flag:"./img/georgia.png",name:"Georgia [Europe]",capital:["Tbilisi"],currency:["Lari"],lang:["Georgian"]},
{flag:"./img/hong-kong.png",name:"Hong Kong",capital:["Special administrative region of China"],currency:["Hong Kong dollar"],lang:["English","Cantonese"]},
{flag:"./img/india.png",name:"India",capital:["New Delhi"],currency:["Rupee"],lang:["Hindi","English"]},
{flag:"./img/indonesia.png",name:"Indonesia",capital:["Jakarta"],currency:["Rupiah"],lang:["Indonesian"]},
{flag:"./img/iran.png",name:"Iran",capital:["Tehran"],currency:["Rial"],lang:["Persian"]},
{flag:"./img/iraq.png",name:"Iraq",capital:["Baghdad"],currency:["Iraqi dinar"],lang:["Kurdish","Arabic"]},
{flag:"./img/israel.png",name:"Israel",capital:["Jerusalem (seat of government, proclaimed capital)"],currency:["New Shekel"],lang:["Hebrew","Arabic"]},
{flag:"./img/japan.png",name:"Japan",capital:["Tokyo"],currency:["Yen"],lang:["Japanese"]},
{flag:"./img/jordan.png",name:"Jordan",capital:["Amman"],currency:["Jordanian dinar"],lang:["Arabic"]},
{flag:"./img/kazakhstan.png",name:"Kazakhstan",capital:["Astana"],currency:["Tenge"],lang:["Kazakh","Russian"]},
{flag:"./img/kurdistan.png",name:"Kurdistan",capital:["Erbil"],currency:["Dinar"],lang:["Kurdish"]},
{flag:"./img/kuwait.png",name:"Kuwait",capital:["Kuwait City"],currency:["Kuwaiti dinar"],lang:["Arabic"]},
{flag:"./img/kyrgyzstan.png",name:"Kyrgyzstan",capital:["Bishkek"],currency:["Som"],lang:["Kyrgyz","Russian"]},
{flag:"./img/laos.png",name:"Laos",capital:["Vientiane"],currency:["Kip"],lang:["Lao"]},
{flag:"./img/lebanon.png",name:"Lebanon",capital:["Beirut"],currency:["Lebanese pound"],lang:["Arabic"]},
{flag:"./img/macau.png",name:"Macau",capital:["Special administrative region of China"],currency:["Macanese pataca"],lang:["Portuguese","Cantonese"]},
{flag:"./img/malaysia.png",name:"Malaysia",capital:["Kuala Lumpur (official)","Putrajaya (seat of government)"],currency:["Ringgit"],lang:["Malaysian"]},
{flag:"./img/maldives.png",name:"Maldives",capital:["Malé"],currency:["Maldivian rufiyaa"],lang:["Maldivian"]},
{flag:"./img/mongolia.png",name:"Mongolia",capital:["Ulaanbaatar"],currency:["Tögrög"],lang:["Mongolian"]},
{flag:"./img/myanmar.png",name:"Myanmar (Burma)",capital:["Naypyidaw"],currency:["Kyat"],lang:["Burmese"]},
{flag:"./img/nagorno-karabakh.png",name:"Nagorno-Karabakh",capital:["Stepanakert"],currency:["Armenian dram"],lang:["Armenian"]},
{flag:"./img/nepal.png",name:"Nepal",capital:["Kathmandu"],currency:["Nepalese rupee"],lang:["Nepali"]},
{flag:"./img/northern-cyprus.png",name:"Northern Cyprus",capital:["Nicosia"],currency:["Turkish lira"],lang:["Turkish"]},
{flag:"./img/north-korea.png",name:"North Korea",capital:["Pyongyang"],currency:["North Korean won"],lang:["Korean"]},
{flag:"./img/oman.png",name:"Oman",capital:["Muscat"],currency:["Rial"],lang:["Arabic"]},
{flag:"./img/pakistan.png",name:"Pakistan",capital:["Islamabad"],currency:["Pakistani Rupee"],lang:["English","Urdu"]},
{flag:"./img/palestine.png",name:"Palestine",capital:["Ramallah (West Bank seat of government)","Gaza (Gaza Strip seat of government)","East Jerusalem (capital)","State of Palestine (flag displayed) proclaimed on territory"],currency:["Israeli Shekel"],lang:["Arabic"]},
{flag:"./img/philippines.png",name:"Philippines",capital:["Manila"],currency:["Philippine Peso"],lang:["Filipino","English"]},
{flag:"./img/qatar.png",name:"Qatar",capital:["Doha"],currency:["Riyal"],lang:["Arabic"]},
{flag:"./img/saudi-arabia.png",name:"Saudi Arabia",capital:["Riyadh"],currency:["Saudi riyal"],lang:["Arabic"]},
{flag:"./img/singapore.png",name:"Singapore",capital:["Singapore"],currency:["Singapore dollar"],lang:["English","Chinese","Malay","Tamil"]},
{flag:"./img/south-korea.png",name:"South Korea",capital:["Seoul"],currency:["South Korean won"],lang:["Korean"]},
{flag:"./img/sri-lanka.png",name:"Sri Lanka",capital:["Colombo"],currency:["Sri Lankan rupee"],lang:["Sinhala","Tamil"]},
{flag:"./img/syria.png",name:"Syria",capital:["Damascus"],currency:["Syrian pound"],lang:["Arabic"]},
{flag:"./img/taiwan.png",name:"Taiwan",capital:["Taipei"],currency:["New Taiwan dollar"],lang:["Standard Chinese"]},
{flag:"./img/tajikistan.png",name:"Tajikistan",capital:["Dushanbe"],currency:["Somoni"],lang:["Tajik"]},
{flag:"./img/thailand.png",name:"Thailand",capital:["Bangkok"],currency:["Baht"],lang:["Thai"]},
{flag:"./img/turkey.png",name:"Turkey [Europe]",capital:["Ankara"],currency:["Turkish lira"],lang:["Turkish"]},
{flag:"./img/turkmenistan.png",name:"Turkmenistan",capital:["Ashgabat"],currency:["Turkmen new manat"],lang:["Turkmen"]},
{flag:"./img/uae.png",name:"United Arab Emirates",capital:["Abu Dhabi"],currency:["UAE dirham"],lang:["Arabic"]},
{flag:"./img/uzbekistan.png",name:"Uzbekistan",capital:["Tashkent"],currency:["Uzbekistan som (O'zbekiston so'mi)"],lang:["Uzbek"]},
{flag:"./img/vietnam.png",name:"Vietnam",capital:["Hanoi"],currency:["đồng"],lang:["Vietnamese"]},
{flag:"./img/yemen.png",name:"Yemen",capital:["Sana'a"],currency:["Yemeni rial"],lang:["Arabic"]}
];

var europe = [
{flag:"./img/aland.png",name:"Åland Islands",capital:["Mariehamn","Autonomous region of Finland (recognized by international treaty)"],currency:["Euro"],lang:["Swedish"]},
{flag:"./img/albania.png",name:"Albania",capital:["Tirana"],currency:["Lek"],lang:["Albanian"]},
{flag:"./img/andorra.png",name:"Andorra",capital:["Andorra la Vella"],currency:["Euro"],lang:["Catalan"]},
{flag:"./img/austria.png",name:"Austria",capital:["Vienna"],currency:["Euro"],lang:["German"]},
{flag:"./img/belarus.png",name:"Belarus",capital:["Minsk"],currency:["Belarusian ruble"],lang:["Belarusian","Russian"]},
{flag:"./img/belgium.png",name:"Belgium",capital:["Brussels"],currency:["Euro"],lang:["Dutch","French","German"]},
{flag:"./img/bosnia-herzegovina.png",name:"Bosnia and Herzegovina",capital:["Sarajevo"],currency:["Convertible mark"],lang:["Bosnian","Croatian","Serbian"]},
{flag:"./img/bulgaria.png",name:"Bulgaria",capital:["Sofia"],currency:["Lev"],lang:["Bulgarian"]},
{flag:"./img/croatia.png",name:"Croatia",capital:["Zagreb"],currency:["Kuna"],lang:["Croatian"]},
{flag:"./img/czech-republic.png",name:"Czech Republic",capital:["Prague"],currency:["Czech koruna"],lang:["Czech"]},
{flag:"./img/denmark.png",name:"Denmark",capital:["Copenhagen"],currency:["Danish krone[a]"],lang:["Danish"]},
{flag:"./img/estonia.png",name:"Estonia",capital:["Tallinn"],currency:["Euro"],lang:["Estonian"]},
{flag:"./img/faroe-islands.png",name:"Faroe Islands",capital:["Tórshavn","Self-governing territory of the Danish Realm"],currency:["Faroese króna"],lang:["Faroese","Danish"]},
{flag:"./img/finland.png",name:"Finland",capital:["Helsinki"],currency:["Euro"],lang:["Finnish","Swedish"]},
{flag:"./img/france.png",name:"France",capital:["Paris"],currency:["Euro","CFP franc"],lang:["French"]},
{flag:"./img/germany.png",name:"Germany",capital:["Berlin"],currency:["Euro"],lang:["German"]},
{flag:"./img/gibraltar.png",name:"Gibraltar",capital:["Gibraltar","Overseas territory of the United Kingdom"],currency:["Gibraltar pound"],lang:["English"]},
{flag:"./img/greece.png",name:"Greece",capital:["Athens"],currency:["Euro"],lang:["Greek"]},
{flag:"./img/guernsey.png",name:"Guernsey",capital:["Saint Peter Port","British Crown dependency"],currency:["Pound sterling"],lang:["English","French"]},
{flag:"./img/hungary.png",name:"Hungary",capital:["Budapest"],currency:["Forint"],lang:["Hungarian"]},
{flag:"./img/iceland.png",name:"Iceland",capital:["Reykjavík"],currency:["Icelandic króna"],lang:["Icelandic"]},
{flag:"./img/ireland.png",name:"Ireland",capital:["Dublin"],currency:["Euro"],lang:["English","Irish"]},
{flag:"./img/isle-of-mann.png",name:"Isle of Man",capital:["Douglas","British Crown dependency"],currency:["Pound sterling"],lang:["English","Manx"]},
{flag:"./img/italy.png",name:"Italy",capital:["Rome"],currency:["Euro"],lang:["Italian"]},
{flag:"./img/jersey.png",name:"Jersey",capital:["Saint Helier","British Crown dependency"],currency:["Pound sterling"],lang:["English","French"]},
{flag:"./img/kosovo.png",name:"Kosovo",capital:["Pristina"],currency:["Euro"],lang:["Albanian","Serbian"]},
{flag:"./img/latvia.png",name:"Latvia",capital:["Riga"],currency:["Euro"],lang:["Latvian"]},
{flag:"./img/liechtenstein.png",name:"Liechtenstein",capital:["Vaduz"],currency:["Swiss franc"],lang:["German"]},
{flag:"./img/lithuania.png",name:"Lithuania",capital:["Vilnius"],currency:["Euro"],lang:["Lithuanian"]},
{flag:"./img/luxembourg.png",name:"Luxembourg",capital:["Luxembourg"],currency:["Euro"],lang:["Luxembourgish","French","German"]},
{flag:"./img/macedonia.png",name:"Macedonia",capital:["Skopje"],currency:["Macedonian denar"],lang:["Macedonian"]},
{flag:"./img/malta.png",name:"Malta",capital:["Valletta"],currency:["Euro"],lang:["Maltese","English"]},
{flag:"./img/moldova.png",name:"Moldova",capital:["Chişinău"],currency:["Moldovan leu"],lang:["Moldovan"]},
{flag:"./img/monaco.png",name:"Monaco",capital:["Monaco"],currency:["Euro"],lang:["French"]},
{flag:"./img/montenegro.png",name:"Montenegro",capital:["Podgorica"],currency:["Euro"],lang:["Montenegrin"]},
{flag:"./img/netherlands.png",name:"Netherlands",capital:["Amsterdam"],currency:["Euro","US dollar","NA guilder","Aruban florin"],lang:["Dutch"]},
{flag:"./img/norway.png",name:"Norway",capital:["Oslo"],currency:["Norwegian krone"],lang:["Norwegian","Bokmål","Nynorsk"]},
{flag:"./img/poland.png",name:"Poland",capital:["Warsaw"],currency:["Złoty"],lang:["Polish"]},
{flag:"./img/portugal.png",name:"Portugal",capital:["Lisbon"],currency:["Euro"],lang:["Portuguese"]},
{flag:"./img/romania.png",name:"Romania",capital:["Bucharest"],currency:["Romanian leu"],lang:["Romanian"]},
{flag:"./img/russia.png",name:"Russia",capital:["Moscow"],currency:["Russian ruble"],lang:["Russian","27 others co-official"]},
{flag:"./img/san-marino.png",name:"San Marino",capital:["San Marino"],currency:["Euro"],lang:["Italian"]},
{flag:"./img/serbia.png",name:"Serbia",capital:["Belgrade"],currency:["Serbian dinar"],lang:["Serbian"]},
{flag:"./img/slovakia.png",name:"Slovakia",capital:["Bratislava"],currency:["Euro"],lang:["Slovak"]},
{flag:"./img/slovenia.png",name:"Slovenia",capital:["Ljubljana"],currency:["Euro"],lang:["Slovene"]},
{flag:"./img/spain.png",name:"Spain",capital:["Madrid"],currency:["Euro"],lang:["Spanish","Catalan","Galician","Basque"]},
{flag:"./img/svalbard.png",name:"Svalbard",capital:["Longyearbyen","Special territory of Norway (recognized by international treaty)"],currency:["Norwegian krone"],lang:["Norwegian"]},
{flag:"./img/sweden.png",name:"Sweden",capital:["Stockholm"],currency:["Swedish krona"],lang:["Swedish"]},
{flag:"./img/switzerland.png",name:"Switzerland",capital:["Bern"],currency:["Swiss franc"],lang:["German","French","Italian","Romansh"]},
{flag:"./img/transnistria.png",name:"Transnistria",capital:["Tiraspol"],currency:["Transnistrian ruble"],lang:["Russian","Moldovan","Ukrainian"]},
{flag:"./img/ukraine.png",name:"Ukraine",capital:["Kiev"],currency:["Ukrainian hryvnia"],lang:["Ukrainian"]},
{flag:"./img/united-kingdom.png",name:"United Kingdom",capital:["London"],currency:["Pound sterling"],lang:["English"]},
{flag:"./img/vatican-city.png",name:"Vatican City",capital:["Vatican City"],currency:["Euro"],lang:["Italian"]}
];

var northamerica = [
{flag:"./img/anguilla.png",name:"Anguilla",capital:["The Valley","Overseas territory of the United Kingdom"],currency:["East Caribbean Dollar"],lang:["English"]},
{flag:"./img/antigua-and-barbuda.png",name:"Antigua and Barbuda",capital:["St. John's"],currency:["East Caribbean Dollar"],lang:["English"]},
{flag:"./img/aruba.png",name:"Aruba",capital:["Oranjestad","Constituent country of the Kingdom of the Netherlands"],currency:["Aruban florin"],lang:["Papiamento","Dutch"]},
{flag:"./img/bahamas.png",name:"Bahamas",capital:["Nassau"],currency:["Bahamian Dollar"],lang:["English"]},
{flag:"./img/barbados.png",name:"Barbados",capital:["Bridgetown"],currency:["Barbadian Dollar"],lang:["English"]},
{flag:"./img/belize.png",name:"Belize",capital:["Belmopan"],currency:["Belize Dollar"],lang:["English"]},
{flag:"./img/bermuda.png",name:"Bermuda",capital:["Hamilton","Overseas territory of the United Kingdom"],currency:["Bermudian Dollar"],lang:["English"]},
{flag:"./img/bonaire.png",name:"Bonaire",capital:["Kralendijk","Special municipality of the Netherlands"],currency:["United States Dollar"],lang:["Dutch"]},
{flag:"./img/british-virgin-islands.png",name:"British Virgin Islands",capital:["Road Town","Overseas territory of the United Kingdom"],currency:["United States Dollar"],lang:["English"]},
{flag:"./img/canada.png",name:"Canada",capital:["Ottawa"],currency:["Canadian Dollar"],lang:["French","English"]},
{flag:"./img/cayman-islands.png",name:"Cayman Islands",capital:["George Town","Overseas territory of the United Kingdom"],currency:["Cayman Islands Dollar"],lang:["English"]},
{flag:"./img/clipperton-island.png",name:"Clipperton Island",capital:["uninhabited","Overseas territory of France"],currency:["Euro"],lang:["French"]},
{flag:"./img/costa-rica.png",name:"Costa Rica",capital:["San José"],currency:["Costa Rican colon"],lang:["Spanish"]},
{flag:"./img/cuba.png",name:"Cuba",capital:["Havana"],currency:["Cuban peso"],lang:["Spanish"]},
{flag:"./img/curacao.png",name:"Curaçao",capital:["Willemstad","Constituent country of the Kingdom of the Netherlands"],currency:["Netherlands Antillean guilder"],lang:["Papiamento","Dutch"]},
{flag:"./img/dominica.png",name:"Dominica",capital:["Roseau"],currency:["East Caribbean Dollar"],lang:["English"]},
{flag:"./img/dominican-republic.png",name:"Dominican Republic",capital:["Santo Domingo"],currency:["Dominican peso"],lang:["Spanish"]},
{flag:"./img/el-salvador.png",name:"El Salvador",capital:["San Salvador"],currency:["United States Dollar"],lang:["Spanish"]},
{flag:"./img/greenland.png",name:"Greenland",capital:["Nuuk","Self-governing territory of the Danish Realm"],currency:["Danish Krone"],lang:["Greenlandic"]},
{flag:"./img/grenada.png",name:"Grenada",capital:["St. George's"],currency:["East Caribbean Dollar"],lang:["English"]},
{flag:"./img/guadeloupe.png",name:"Guadeloupe",capital:["Basse-Terre","Overseas department of France"],currency:["Euro"],lang:["French"]},
{flag:"./img/guatemala.png",name:"Guatemala",capital:["Guatemala City"],currency:["Guatemalan quetzal"],lang:["Spanish"]},
{flag:"./img/haiti.png",name:"Haiti",capital:["Port-au-Prince"],currency:["Haitian gourde"],lang:["French"]},
{flag:"./img/honduras.png",name:"Honduras",capital:["Tegucigalpa"],currency:["Honduran lempira"],lang:["Spanish"]},
{flag:"./img/jamaica.png",name:"Jamaica",capital:["Kingston"],currency:["Jamaican Dollar"],lang:["English"]},
{flag:"./img/martinique.png",name:"Martinique",capital:["Fort-de-France","Overseas department of France"],currency:["Euro"],lang:["French"]},
{flag:"./img/mexico.png",name:"Mexico",capital:["Mexico City"],currency:["Mexican peso"],lang:["Spanish"]},
{flag:"./img/montserrat.png",name:"Montserrat",capital:["Plymouth (official)","Brades (seat of government)","Overseas territory of the United Kingdom"],currency:["East Caribbean Dollar"],lang:["English"]},
{flag:"./img/navassa-island.png",name:"Navassa Island",capital:["-","Insular area of the United States of America"],currency:["United States Dollar"],lang:["English"]},
{flag:"./img/nicaragua.png",name:"Nicaragua",capital:["Managua"],currency:["Nicaraguan cordoba"],lang:["Spanish"]},
{flag:"./img/panama.png",name:"Panama",capital:["Panama City"],currency:["United States Dollar","Panamanian balboa"],lang:["Spanish"]},
{flag:"./img/puerto-rico.png",name:"Puerto Rico",capital:["San Juan","Insular area of the United States of America"],currency:["United States Dollar"],lang:["English","Spanish"]},
{flag:"./img/saba.png",name:"Saba",capital:["The Bottom","Special municipality of the Netherlands"],currency:["United States Dollar"],lang:[""]},
{flag:"./img/france.png",name:"Saint Barthélemy",capital:["Gustavia","Overseas collectivity of France"],currency:["Euro"],lang:["French"]},
{flag:"./img/saint-kitts-and-nevis.png",name:"Saint Kitts and Nevis",capital:["Basseterre"],currency:["East Caribbean Dollar"],lang:["English"]},
{flag:"./img/saint-lucia.png",name:"Saint Lucia",capital:["Castries"],currency:["East Caribbean Dollar"],lang:["English"]},
{flag:"./img/france.png",name:"Saint Martin",capital:["Marigot","Overseas collectivity of France"],currency:["Euro"],lang:["French"]},
{flag:"./img/france.png",name:"Saint Pierre and Miquelon",capital:["Saint-Pierre","Overseas collectivity of France"],currency:["Euro"],lang:["French"]},
{flag:"./img/saint-vincent-and-the-grenadines.png",name:"Saint Vincent and the Grenadines",capital:["Kingstown"],currency:["East Caribbean Dollar"],lang:["English"]},
{flag:"./img/sint-eustatius.png",name:"Sint Eustatius",capital:["Oranjestad","Special municipality of the Netherlands"],currency:["United States Dollar"],lang:[""]},
{flag:"./img/sint-maarten.png",name:"Sint Maarten",capital:["Philipsburg","Constituent country of the Kingdom of the Netherlands"],currency:["Netherlands Antillean guilder"],lang:[""]},
{flag:"./img/trinidad-and-tobago.png",name:"Trinidad and Tobago",capital:["Port of Spain"],currency:["Trinidad and Tobago Dollar"],lang:["English"]},
{flag:"./img/united-states.png",name:"United States",capital:["Washington, D.C."],currency:["United States Dollar"],lang:["English"]},
{flag:"./img/united-states-virgin-islands.png",name:"United States Virgin Islands",capital:["Charlotte Amalie","Insular area of the United States of America"],currency:["United States Dollar"],lang:["English"]}
];

var southamerica = [
{flag:"./img/argentina.png",name:"Argentina",capital:["Buenos Aires"],currency:["Peso"],lang:["Spanish"]},
{flag:"./img/bolivia.png",name:"Bolivia",capital:["Sucre (official)","La Paz (seat of government)"],currency:["Boliviano"],lang:["Spanish","Quechua","Aymara"]},
{flag:"./img/brazil.png",name:"Brazil",capital:["Brasília"],currency:["Real"],lang:["Portuguese"]},
{flag:"./img/chile.png",name:"Chile",capital:["Santiago"],currency:["Peso"],lang:["Spanish"]},
{flag:"./img/colombia.png",name:"Colombia",capital:["Bogotá"],currency:["Peso"],lang:["Spanish"]},
{flag:"./img/ecuador.png",name:"Ecuador",capital:["Quito"],currency:["United States dollar"],lang:["Spanish"]},
{flag:"./img/falkland-islands.png",name:"Falkland Islands",capital:["Stanley","Overseas territory of the United Kingdom"],currency:["Falkland Islands pound"],lang:["English"]},
{flag:"./img/france.png",name:"French Guiana",capital:["Cayenne","Overseas department of France"],currency:["Euro"],lang:["French"]},
{flag:"./img/guyana.png",name:"Guyana",capital:["Georgetown"],currency:["Guyanese dollar"],lang:["English"]},
{flag:"./img/paraguay.png",name:"Paraguay",capital:["Asunción"],currency:["Guaraní"],lang:["Spanish","Guaraní"]},
{flag:"./img/peru.png",name:"Peru",capital:["Lima"],currency:["Nuevo sol"],lang:["Spanish"]},
{flag:"./img/suriname.png",name:"Suriname",capital:["Paramaribo"],currency:["Surinamese dollar"],lang:["Dutch"]},
{flag:"./img/uruguay.png",name:"Uruguay",capital:["Montevideo"],currency:["Uruguayan peso"],lang:["Spanish"]},
{flag:"./img/venezuela.png",name:"Venezuela",capital:["Caracas"],currency:["Bolívar fuerte"],lang:["Spanish"]}
];

var oceania = [
{flag:"./img/australia.png",name:"Australia",capital:["Canberra"],currency:["Australian dollar"],lang:["English"]},
{flag:"./img/fiji.png",name:"Fiji",capital:["Suva"],currency:["Fijian dollar"],lang:["English","Fijian","Fiji Hindi"]},
{flag:"./img/kiribati.png",name:"Kiribati",capital:["South Tarawa"],currency:["Kiribati dollar","Australian dollar"],lang:["English","Gilbertese"]},
{flag:"./img/marshall-islands.png",name:"Marshall Islands",capital:["Majuro"],currency:["United States dollar"],lang:["Marshallese","English"]},
{flag:"./img/micronesia.png",name:"Micronesia",capital:["Palikir"],currency:["United States dollar"],lang:["English"]},
{flag:"./img/nauru.png",name:"Nauru",capital:["Yaren (seat of government)"],currency:["Australian dollar"],lang:["Nauruan","English"]},
{flag:"./img/new-zealand.png",name:"New Zealand",capital:["Wellington"],currency:["New Zealand Dollar"],lang:["Maori","New Zealand Sign","English"]},
{flag:"./img/palau.png",name:"Palau",capital:["Ngerulmud"],currency:["United States dollar"],lang:["Palauan","English"]},
{flag:"./img/papua-new-guinea.png",name:"Papua New Guinea",capital:["Port Moresby"],currency:["Papua New Guinean kina (PGK)"],lang:["Hiri Motu","Tok Pisin","English"]},
{flag:"./img/samoa.png",name:"Samoa",capital:["Apia"],currency:["Tala (WST)"],lang:["Samoan","English"]},
{flag:"./img/solomon-islands.png",name:"Solomon Islands",capital:["Honiara"],currency:["Solomon Islands dollar (SBD)"],lang:["English"]},
{flag:"./img/tonga.png",name:"Tonga",capital:["Nukuʻalofa"],currency:["Paanga"],lang:["Tongan","English"]},
{flag:"./img/tuvalu.png",name:"Tuvalu",capital:["Funafuti"],currency:["Tuvaluan dollar","Australian dollar"],lang:["Tuvaluan","English"]},
{flag:"./img/vanuatu.png",name:"Vanuatu",capital:["Port Vila"],currency:["Vanuatu vatu"],lang:["Bislama","French","English"]}
];

var quiz = [
{name:"Australia",options:["./img/australia.png","./img/papua-new-guinea.png","./img/tuvalu.png","./img/palau.png"],answer:1},
];