import fs from "node:fs";

const UPDATED_AT = process.env.SNAPSHOT_DATE || new Date().toISOString().slice(0, 10);

const inputFiles = process.argv.slice(2);
if (inputFiles.length === 0) {
  throw new Error("Pass one or more EVBOOST location-detail JSON files.");
}

const details = inputFiles.flatMap((file) => JSON.parse(fs.readFileSync(file, "utf8")));
const byId = new Map(details.map((location) => [Number(location.id), location]));

const GROUPS = [
  {
    ids: [3950, 4125, 4174, 11642, 11788],
    name: "ТРЦ Woodmall",
    address: "вул. Трудова, 6А",
    operator: "ECOFACTOR"
  },
  {
    ids: [4126, 4138],
    name: "ТРЦ «Оазис» (ECOFACTOR)",
    address: "вул. Степана Бандери, 2А",
    operator: "ECOFACTOR"
  },
  {
    ids: [10225, 11545],
    name: "CHARGEX",
    address: "вул. Василя Зеньковського, 23",
    operator: "Chargex"
  },
  {
    ids: [12662, 12664],
    name: "АЗК WOG",
    address: "Старокостянтинівське шосе, 2Л",
    operator: "EVA"
  },
  {
    ids: [13987, 14000],
    name: "LIGA ENERGY SYSTEMS",
    address: "вул. Грушевського, 64",
    operator: "EVA"
  }
];

const NAME_OVERRIDES = new Map([
  [3278, "«Аква-дім»"],
  [3403, "ТЦ «Сеул»"],
  [3588, "«Престиж Авто»"],
  [3635, "АЗС UKRNAFTA (навпроти)"],
  [3825, "АЗС БРСМ — ECOFACTOR"],
  [4012, "Автомийка на вул. Садовій"],
  [7810, "«Проспект Центр»"],
  [7817, "ГРК «Тамерлан»"],
  [7949, "Electri4ka"],
  [7962, "ТЦ «Мій Дім»"],
  [8017, "БЦ «Alliance»"],
  [8902, "LYBID PLAZA"],
  [9760, "Кафе «Вогнем і Ножем»"],
  [9764, "Автоцентр «ЛІГА»"],
  [9774, "АЗК «Аслан»"],
  [9776, "АЗК WOG — траса Н-03"],
  [10226, "CHARGEX — Копистин"],
  [10486, "Офіс Solarbud"],
  [10829, "ТРЦ «Оазис» (GO TO-U)"],
  [11502, "АЗС UKRNAFTA — TOKA"],
  [11997, "LIGA ENERGY SYSTEMS"],
  [12017, "LIGA ENERGY SYSTEMS"],
  [12257, "EVA — вул. Панаса Мирного, 16/1"],
  [12258, "AVILA LUX"],
  [12260, "EVA — вул. Панаса Мирного, 16/3"],
  [12387, "Готель «Фортеця»"],
  [12636, "ЦНАП"],
  [12638, "ТЦ «Подільський»"],
  [12639, "«Килимовий ярмарок»"],
  [12640, "Хмельницька обласна філармонія"],
  [12642, "СВ-клуб"],
  [12643, "Магазин «Дитячий світ»"],
  [12644, "Автостанція №2"],
  [12645, "Міський пляж"],
  [12647, "Залізничний вокзал"],
  [12648, "Sobkoff"],
  [12663, "Готель «Любе Плюс»"],
  [13923, "ТЦ «Гетьман»"],
  [24669, "АЗС UKRNAFTA"],
  [28114, "СВ-клуб"],
  [29573, "Сільпо — TOKA"],
  [29578, "Аквапарк «7 Океанів»"],
  [29585, "Готель-сауна «Водоспад»"],
  [31067, "БЦ «Прибузький»"],
  [31426, "Автомийка «Мий Сам»"]
]);

const ADDRESS_OVERRIDES = new Map([
  [3635, "вул. Чорновола, 159/2"],
  [3825, "вул. Трудова, 9/3Г"],
  [7810, "просп. Миру, 1"],
  [7817, "вул. Нижня Берегова, 2/4"],
  [7949, "Старокостянтинівське шосе, 2М"],
  [7962, "просп. Миру, 99/101"],
  [8017, "вул. Зарічанська, 5/3"],
  [8902, "вул. Кам’янецька, 21"],
  [9776, "траса Н-03 Житомир — Чернівці, 192-й км"],
  [10226, "вул. Соборна, 3/1, Копистин"],
  [10486, "вул. Степана Бандери, 5/1А"],
  [10829, "пров. Степана Бандери, 2А"],
  [12257, "вул. Панаса Мирного, 16/1"],
  [12260, "вул. Панаса Мирного, 16/3"],
  [12387, "вул. Західно-Окружна, 15/1"],
  [12638, "вул. Подільська, 93"],
  [12640, "вул. Героїв Маріуполя, 7"],
  [13923, "вул. Гетьмана Мазепи, 17"],
  [24669, "перехрестя вул. Прибузької та вул. Трудової"],
  [29573, "Старокостянтинівське шосе, 6"],
  [29585, "район готелю «Водоспад», FXJC+5M"],
  [31426, "вул. Прикордонників, 3"]
]);

const GOOGLE_ONLY = [
  ["google-ae-starokostiantynivske-5b", "AE Charge Point", "Старокостянтинівське шосе, 5Б", 49.4308359, 27.0172723],
  ["google-ionity-prybuzka-m12", "IONITY", "вул. Прибузька, М12", 49.4288063, 26.9924414],
  ["google-ev-myru-101a", "EV Charging Station", "просп. Миру, 101А", 49.435029, 27.0167481],
  ["google-ae-svobody-13a", "AutoEnterprise", "вул. Свободи, 13А", 49.4322756, 26.9971174],
  ["google-ae-proskurivska-90", "AutoEnterprise", "вул. Проскурівська, 90", 49.4170598, 27.0078818],
  ["google-chargeme-starokostiantynivske-20", "CHARGE ME", "Старокостянтинівське шосе, 20", 49.430874, 27.0096243],
  ["google-ae-prybuzka-14-1", "AutoEnterprise", "вул. Прибузька, 14/1", 49.4284184, 26.9927528],
  ["google-ae-kamianetska-117", "AutoEnterprise 300", "вул. Кам’янецька, 117", 49.4080862, 26.969534]
].map(([uid, name, address, lat, lon]) => ({
  uid,
  name,
  address,
  lat,
  lon,
  kind: "google",
  operator: "",
  power: null,
  priceMin: null,
  priceMax: null,
  ports: [],
  parking: "",
  source: "Google Maps"
}));

const groupedIds = new Set(GROUPS.flatMap((group) => group.ids));
const stations = [
  ...GROUPS.map((group) => buildStation(group.ids, group)),
  ...details
    .filter((location) => !groupedIds.has(Number(location.id)))
    .map((location) => buildStation([Number(location.id)])),
  ...GOOGLE_ONLY
].sort((a, b) => {
  if (a.priceMin == null && b.priceMin != null) return 1;
  if (a.priceMin != null && b.priceMin == null) return -1;
  return a.name.localeCompare(b.name, "uk");
});

const pricedCount = stations.filter((station) => station.priceMin != null).length;
if (stations.length !== 58 || pricedCount !== 50) {
  throw new Error(`Unexpected snapshot totals: ${stations.length} locations, ${pricedCount} priced.`);
}

process.stdout.write(
  `// Generated from the public EVBOOST map and a deduplicated Google Maps check.\n` +
  `// Snapshot date: ${UPDATED_AT}. Rebuild with npm run refresh:data -- <detail-json...>\n` +
  `export const UPDATED_AT = ${JSON.stringify(UPDATED_AT)};\n` +
  `export const STATIONS = ${JSON.stringify(stations, null, 2)};\n`
);

function buildStation(ids, override = {}) {
  const locations = ids.map((id) => byId.get(id)).filter(Boolean);
  if (locations.length !== ids.length) {
    const missing = ids.filter((id) => !byId.has(id));
    throw new Error(`Missing EVBOOST details for: ${missing.join(", ")}`);
  }

  const anchor = locations.reduce((best, current) =>
    Number(current.power || 0) > Number(best.power || 0) ? current : best
  );
  const ports = dedupePorts(locations.flatMap((location) => location.chargers || []));
  const prices = ports.map((port) => port.price).filter((price) => Number.isFinite(price) && price > 0);
  const parking = [...new Set(
    (locations.flatMap((location) => location.chargers || []))
      .map((port) => String(port.parkingFee || "").trim())
      .filter((value) => value && value !== "Вартість простою 0 грн/хв")
  )].join(" · ");

  return {
    uid: `evboost-${ids.join("-")}`,
    name: override.name || NAME_OVERRIDES.get(ids[0]) || cleanName(anchor.name),
    address: override.address || ADDRESS_OVERRIDES.get(ids[0]) || cleanAddress(anchor),
    lat: Number(anchor.lat),
    lon: Number(anchor.lon),
    kind: prices.length ? "priced" : "listed",
    operator: override.operator || unique(locations.map((location) => location.operator)).join(" / "),
    power: Math.max(
      ...locations.map((location) => Number(location.power || 0)),
      ...ports.map((port) => Number(port.power || 0))
    ) || null,
    priceMin: prices.length ? Math.min(...prices) : null,
    priceMax: prices.length ? Math.max(...prices) : null,
    ports,
    parking,
    source: "EVBOOST",
    sourceUrl: `https://www.evboost.com.ua/?location=${anchor.id}`
  };
}

function dedupePorts(chargers) {
  const result = new Map();
  for (const charger of chargers) {
    const port = {
      power: positiveNumber(charger.power),
      price: positiveNumber(charger.price),
      status: null,
      type: normalizeConnector(charger.alias)
    };
    const key = `${port.type}|${port.power ?? ""}|${port.price ?? ""}`;
    result.set(key, port);
  }
  return [...result.values()].sort((a, b) => (b.power || 0) - (a.power || 0) || a.type.localeCompare(b.type));
}

function positiveNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function normalizeConnector(value) {
  return String(value || "Невідомий конектор")
    .replace(/^Chademo$/i, "CHAdeMO")
    .replace(/^GBT DC$/i, "GB/T DC")
    .replace(/^GBT AC$/i, "GB/T AC")
    .replace(/^Type2 Розетка$/i, "Type 2 socket")
    .replace(/^Type2$/i, "Type 2")
    .replace(/^Type1$/i, "Type 1");
}

function cleanName(value) {
  return String(value || "Зарядна станція")
    .replace(/^\s*\[\d+]\s*/, "")
    .replace(/^\s*#?\d+\s*[-–]?\s*/, "")
    .replace(/\s*\(\d+\)\s*$/, "")
    .trim();
}

function cleanAddress(location) {
  let address = String(location.address || "")
    .replace(/<br\s*\/?\s*>/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const name = String(location.name || "").replace(/\s+/g, " ").trim();
  if (name && address.startsWith(`${name},`)) address = address.slice(name.length + 1).trim();
  return address
    .replace(/^м\.\s*Хмельницький,\s*/i, "")
    .replace(/^Хмельницька обл\.\s*м\.\s*Хмельницький,\s*/i, "")
    .replace(/^Khmel'nyts'kyi,\s*/i, "")
    .replace(/^Хмельницький,\s*/i, "")
    .replace(/,\s*м\.?\s*Хмельницький.*$/i, "")
    .replace(/,\s*Хмельницький(?:,.*)?$/i, "")
    .replace(/,\s*Хмельницьк(?:а|ий)(?:\s+область)?(?:,.*)?$/i, "")
    .replace(/,\s*Укра[їи]на(?:,.*)?$/i, "")
    .trim();
}

function unique(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
}
