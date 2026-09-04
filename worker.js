var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/stations.js
var UPDATED_AT = "2026-09-04";
var STATIONS = [
  {
    "uid": "p-10225",
    "name": "CHARGEX",
    "address": "\u0432\u0443\u043B. \u0412\u0430\u0441\u0438\u043B\u044F \u0417\u0435\u043D\u044C\u043A\u043E\u0432\u0441\u044C\u043A\u043E\u0433\u043E, 23",
    "lat": 49.39325,
    "lon": 27.03877,
    "kind": "priced",
    "operator": "Chargex",
    "power": 40,
    "priceMin": 10,
    "priceMax": 13,
    "ports": [
      {
        "power": 40,
        "price": 13,
        "status": null,
        "type": "CHAdeMO"
      },
      {
        "power": 40,
        "price": 13,
        "status": null,
        "type": "GB/T DC"
      },
      {
        "power": 22,
        "price": 10,
        "status": null,
        "type": "Type 2"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-10486",
    "name": "\u041E\u0444\u0456\u0441 Solarbud",
    "address": "\u0432\u0443\u043B. \u0421\u0442\u0435\u043F\u0430\u043D\u0430 \u0411\u0430\u043D\u0434\u0435\u0440\u0438, 5/1\u0410",
    "lat": 49.43825,
    "lon": 26.983472,
    "kind": "priced",
    "operator": "GO TO-U",
    "power": 22,
    "priceMin": 13.99,
    "priceMax": 13.99,
    "ports": [
      {
        "power": 22,
        "price": 13.99,
        "status": null,
        "type": "Type 2"
      },
      {
        "power": 7,
        "price": 13.99,
        "status": null,
        "type": "Type 2 socket"
      },
      {
        "power": 7,
        "price": 13.99,
        "status": null,
        "type": "Type 1"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-11502",
    "name": "\u0410\u0417\u0421 UKRNAFTA \u2014 TOKA",
    "address": "\u0432\u0443\u043B. \u0421\u0438\u043C\u043E\u043D\u0430 \u041F\u0435\u0442\u043B\u044E\u0440\u0438, 54/7",
    "lat": 49.403177,
    "lon": 26.993483,
    "kind": "priced",
    "operator": "Toka",
    "power": 120,
    "priceMin": 18.99,
    "priceMax": 22.99,
    "ports": [
      {
        "power": 120,
        "price": 22.99,
        "status": 3,
        "type": "CCS2"
      },
      {
        "power": 120,
        "price": 22.99,
        "status": 1,
        "type": "GB/T DC"
      },
      {
        "power": 22,
        "price": 18.99,
        "status": 1,
        "type": "Type 2"
      }
    ],
    "parking": "200 \u0433\u0440\u043D/\u0433\u043E\u0434 \u043F\u0456\u0441\u043B\u044F 10 \u0445\u0432, \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E 22:00\u201308:00 \xB7 20 \u0433\u0440\u043D/\u0433\u043E\u0434 \u043F\u0456\u0441\u043B\u044F 30 \u0445\u0432, \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E 22:00\u201308:00"
  },
  {
    "uid": "p-11997",
    "name": "LIGA ENERGY SYSTEMS",
    "address": "\u0432\u0443\u043B. \u0406\u0432\u0430\u043D\u0430 \u0424\u0440\u0430\u043D\u043A\u0430, 8/1",
    "lat": 49.422429,
    "lon": 26.994768,
    "kind": "priced",
    "operator": "EVA",
    "power": 120,
    "priceMin": 22.9,
    "priceMax": 22.9,
    "ports": [
      {
        "power": 120,
        "price": 22.9,
        "status": 3,
        "type": "CCS2"
      },
      {
        "power": 120,
        "price": 22.9,
        "status": 1,
        "type": "GB/T DC"
      },
      {
        "power": 80,
        "price": 22.9,
        "status": 1,
        "type": "CHAdeMO"
      },
      {
        "power": 22,
        "price": 22.9,
        "status": 1,
        "type": "Type 2"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-12017",
    "name": "LIGA ENERGY SYSTEMS",
    "address": "\u0432\u0443\u043B. \u041F\u0440\u043E\u0441\u043A\u0443\u0440\u0456\u0432\u0441\u044C\u043A\u0430, 81",
    "lat": 49.420001,
    "lon": 26.995478,
    "kind": "priced",
    "operator": "EVA",
    "power": 120,
    "priceMin": 22.9,
    "priceMax": 22.9,
    "ports": [
      {
        "power": 120,
        "price": 22.9,
        "status": 1,
        "type": "CCS2"
      },
      {
        "power": 120,
        "price": 22.9,
        "status": 1,
        "type": "GB/T DC"
      },
      {
        "power": 80,
        "price": 22.9,
        "status": 1,
        "type": "CHAdeMO"
      },
      {
        "power": 22,
        "price": 22.9,
        "status": 1,
        "type": "Type 2"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-12260",
    "name": "EVA",
    "address": "\u0432\u0443\u043B. \u041F\u0430\u043D\u0430\u0441\u0430 \u041C\u0438\u0440\u043D\u043E\u0433\u043E, 16/3",
    "lat": 49.44883,
    "lon": 27.01109,
    "kind": "priced",
    "operator": "EVA",
    "power": 90,
    "priceMin": 27.9,
    "priceMax": 27.9,
    "ports": [
      {
        "power": 90,
        "price": null,
        "status": null,
        "type": "DC (\u0442\u0438\u043F \u043D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E)"
      },
      {
        "power": 22,
        "price": 27.9,
        "status": 1,
        "type": "Type 2"
      },
      {
        "power": 9,
        "price": 27.9,
        "status": 1,
        "type": "Type 1"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-3278",
    "name": "\xAB\u0410\u043A\u0432\u0430-\u0434\u0456\u043C\xBB",
    "address": "\u0421\u0442\u0430\u0440\u043E\u043A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432\u0441\u044C\u043A\u0435 \u0448\u043E\u0441\u0435, 14/1",
    "lat": 49.433299,
    "lon": 27.012381,
    "kind": "priced",
    "operator": "ECOFACTOR",
    "power": 22,
    "priceMin": 20.99,
    "priceMax": 20.99,
    "ports": [
      {
        "power": 22,
        "price": 20.99,
        "status": 4,
        "type": "Type 2 socket"
      },
      {
        "power": 9,
        "price": 20.99,
        "status": 4,
        "type": "Type 1"
      }
    ],
    "parking": "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u044E 0 \u0433\u0440\u043D/\u0445\u0432"
  },
  {
    "uid": "p-3403",
    "name": "\u0422\u0426 \xAB\u0421\u0435\u0443\u043B\xBB",
    "address": "\u0432\u0443\u043B. \u0413\u0435\u043E\u043B\u043E\u0433\u0456\u0432, 24",
    "lat": 49.4190284,
    "lon": 26.9408996,
    "kind": "priced",
    "operator": "ECOFACTOR",
    "power": 22,
    "priceMin": 17.99,
    "priceMax": 17.99,
    "ports": [
      {
        "power": 22,
        "price": 17.99,
        "status": 4,
        "type": "Type 2"
      },
      {
        "power": 7,
        "price": 17.99,
        "status": 4,
        "type": "Type 2 socket"
      },
      {
        "power": 7,
        "price": 17.99,
        "status": 4,
        "type": "Type 1"
      }
    ],
    "parking": "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u044E 0 \u0433\u0440\u043D/\u0445\u0432"
  },
  {
    "uid": "p-3588",
    "name": "\xAB\u041F\u0440\u0435\u0441\u0442\u0438\u0436 \u0410\u0432\u0442\u043E\xBB",
    "address": "\u0432\u0443\u043B. \u041F\u0440\u0438\u0431\u0443\u0437\u044C\u043A\u0430, 48",
    "lat": 49.419688,
    "lon": 27.018238,
    "kind": "priced",
    "operator": "ECOFACTOR",
    "power": 22,
    "priceMin": 18.49,
    "priceMax": 18.49,
    "ports": [
      {
        "power": 22,
        "price": 18.49,
        "status": 1,
        "type": "Type 2 socket"
      },
      {
        "power": 9,
        "price": 18.49,
        "status": 1,
        "type": "Type 1"
      }
    ],
    "parking": "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u044E 0 \u0433\u0440\u043D/\u0445\u0432"
  },
  {
    "uid": "p-3635",
    "name": "\u041D\u0430\u0432\u043F\u0440\u043E\u0442\u0438 \u0410\u0417\u0421 UKRNAFTA",
    "address": "\u0432\u0443\u043B. \u0427\u043E\u0440\u043D\u043E\u0432\u043E\u043B\u0430, 159/2",
    "lat": 49.401797,
    "lon": 27.054737,
    "kind": "priced",
    "operator": "ECOFACTOR",
    "power": 22,
    "priceMin": 17.99,
    "priceMax": 17.99,
    "ports": [
      {
        "power": 22,
        "price": 17.99,
        "status": 1,
        "type": "Type 2 socket"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-3825",
    "name": "\u0411\u0420\u0421\u041C",
    "address": "\u0432\u0443\u043B. \u0422\u0440\u0443\u0434\u043E\u0432\u0430, 9/3\u0413",
    "lat": 49.426714,
    "lon": 27.024128,
    "kind": "priced",
    "operator": "ECOFACTOR",
    "power": 22,
    "priceMin": 20.99,
    "priceMax": 20.99,
    "ports": [
      {
        "power": 22,
        "price": 20.99,
        "status": 4,
        "type": "Type 2"
      },
      {
        "power": 7,
        "price": 20.99,
        "status": 4,
        "type": "Type 1"
      }
    ],
    "parking": "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u044E 0 \u0433\u0440\u043D/\u0445\u0432"
  },
  {
    "uid": "p-3950-4125-4174",
    "name": "\u0422\u0420\u0426 Woodmall",
    "address": "\u0432\u0443\u043B. \u0422\u0440\u0443\u0434\u043E\u0432\u0430, 6\u0410",
    "lat": 49.42647806,
    "lon": 27.022246076666665,
    "kind": "priced",
    "operator": "ECOFACTOR",
    "power": 160,
    "priceMin": 20.99,
    "priceMax": 20.99,
    "ports": [
      {
        "power": 160,
        "price": 20.99,
        "status": 1,
        "type": "CCS2"
      },
      {
        "power": 160,
        "price": 20.99,
        "status": 1,
        "type": "GB/T DC"
      },
      {
        "power": 50,
        "price": 20.99,
        "status": 3,
        "type": "CHAdeMO"
      },
      {
        "power": 22,
        "price": 20.99,
        "status": 4,
        "type": "Type 2 socket"
      },
      {
        "power": 9,
        "price": 20.99,
        "status": 4,
        "type": "Type 1"
      }
    ],
    "parking": "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u044E 0 \u0433\u0440\u043D/\u0445\u0432"
  },
  {
    "uid": "p-4012",
    "name": "\u0410\u0432\u0442\u043E\u043C\u0438\u0439\u043A\u0430",
    "address": "\u0432\u0443\u043B. \u0421\u0430\u0434\u043E\u0432\u0430, 1/3",
    "lat": 49.452944,
    "lon": 27.000308,
    "kind": "priced",
    "operator": "ECOFACTOR",
    "power": 80,
    "priceMin": 20.99,
    "priceMax": 20.99,
    "ports": [
      {
        "power": 80,
        "price": null,
        "status": null,
        "type": "DC (\u0442\u0438\u043F \u043D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E)"
      },
      {
        "power": 22,
        "price": 20.99,
        "status": 4,
        "type": "CHAdeMO"
      },
      {
        "power": 22,
        "price": 20.99,
        "status": 4,
        "type": "CCS1"
      },
      {
        "power": 22,
        "price": 20.99,
        "status": 4,
        "type": "Type 2 socket"
      },
      {
        "power": 9,
        "price": 20.99,
        "status": 4,
        "type": "Type 1"
      }
    ],
    "parking": "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u044E 0 \u0433\u0440\u043D/\u0445\u0432"
  },
  {
    "uid": "p-4126-4138",
    "name": "\u0422\u0420\u0426 \xAB\u041E\u0430\u0437\u0438\u0441\xBB",
    "address": "\u0432\u0443\u043B. \u0421\u0442\u0435\u043F\u0430\u043D\u0430 \u0411\u0430\u043D\u0434\u0435\u0440\u0438, 2\u0410",
    "lat": 49.432341914999995,
    "lon": 26.98463503,
    "kind": "priced",
    "operator": "ECOFACTOR",
    "power": 160,
    "priceMin": 19.99,
    "priceMax": 20.49,
    "ports": [
      {
        "power": 160,
        "price": 20.49,
        "status": 1,
        "type": "CCS2"
      },
      {
        "power": 160,
        "price": 20.49,
        "status": 1,
        "type": "GB/T DC"
      },
      {
        "power": 50,
        "price": 20.49,
        "status": 1,
        "type": "CHAdeMO"
      },
      {
        "power": 22,
        "price": 19.99,
        "status": 1,
        "type": "Type 2"
      },
      {
        "power": 7,
        "price": 19.99,
        "status": 1,
        "type": "Type 1"
      },
      {
        "power": 7,
        "price": 19.99,
        "status": 1,
        "type": "GB/T AC"
      }
    ],
    "parking": "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u044E 0 \u0433\u0440\u043D/\u0445\u0432"
  },
  {
    "uid": "p-7810",
    "name": "\xAB\u041F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u0426\u0435\u043D\u0442\u0440\xBB",
    "address": "\u043F\u0440\u043E\u0441\u043F. \u041C\u0438\u0440\u0443, 1",
    "lat": 49.44031,
    "lon": 26.999651,
    "kind": "priced",
    "operator": "GO TO-U",
    "power": 22,
    "priceMin": 19.99,
    "priceMax": 23.99,
    "ports": [
      {
        "power": 22,
        "price": 19.99,
        "status": null,
        "type": "Type 2"
      },
      {
        "power": 7,
        "price": 23.99,
        "status": null,
        "type": "Type 1"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-7817",
    "name": "\u0413\u0420\u041A \xAB\u0422\u0430\u043C\u0435\u0440\u043B\u0430\u043D\xBB",
    "address": "\u0432\u0443\u043B. \u041D\u0438\u0436\u043D\u044F \u0411\u0435\u0440\u0435\u0433\u043E\u0432\u0430, 2/4",
    "lat": 49.440049,
    "lon": 26.970087,
    "kind": "priced",
    "operator": "GO TO-U",
    "power": 22,
    "priceMin": 19.9,
    "priceMax": 23.88,
    "ports": [
      {
        "power": 22,
        "price": 19.9,
        "status": null,
        "type": "Type 2 socket"
      },
      {
        "power": 22,
        "price": 19.9,
        "status": null,
        "type": "Type 2"
      },
      {
        "power": 7,
        "price": 23.88,
        "status": null,
        "type": "Type 1"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-7949",
    "name": "Electri4ka",
    "address": "\u0421\u0442\u0430\u0440\u043E\u043A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432\u0441\u044C\u043A\u0435 \u0448\u043E\u0441\u0435, 2\u041C",
    "lat": 49.446564,
    "lon": 27.019726,
    "kind": "priced",
    "operator": "GO TO-U",
    "power": 22,
    "priceMin": 19.9,
    "priceMax": 23.88,
    "ports": [
      {
        "power": 22,
        "price": 19.9,
        "status": null,
        "type": "Type 2 socket"
      },
      {
        "power": 22,
        "price": 19.9,
        "status": null,
        "type": "Type 2"
      },
      {
        "power": 7,
        "price": 23.88,
        "status": null,
        "type": "Type 1"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-7962",
    "name": "\u0422\u0426 \xAB\u041C\u0456\u0439 \u0414\u0456\u043C\xBB",
    "address": "\u043F\u0440\u043E\u0441\u043F. \u041C\u0438\u0440\u0443, 99/101",
    "lat": 49.437311,
    "lon": 27.018096,
    "kind": "priced",
    "operator": "GO TO-U",
    "power": 160,
    "priceMin": 19,
    "priceMax": 20,
    "ports": [
      {
        "power": 160,
        "price": 20,
        "status": null,
        "type": "CCS2"
      },
      {
        "power": 160,
        "price": 20,
        "status": null,
        "type": "GB/T DC"
      },
      {
        "power": 22,
        "price": 19,
        "status": null,
        "type": "Type 2"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-8017",
    "name": "\u0411\u0426 \xABAlliance\xBB",
    "address": "\u0432\u0443\u043B. \u0417\u0430\u0440\u0456\u0447\u0430\u043D\u0441\u044C\u043A\u0430, 5/3",
    "lat": 49.432661,
    "lon": 26.994131,
    "kind": "priced",
    "operator": "GO TO-U",
    "power": 22,
    "priceMin": 23,
    "priceMax": 23,
    "ports": [
      {
        "power": 22,
        "price": 23,
        "status": null,
        "type": "Type 2 socket"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-8902",
    "name": "LYBID PLAZA",
    "address": "\u0432\u0443\u043B. \u041A\u0430\u043C\u2019\u044F\u043D\u0435\u0446\u044C\u043A\u0430, 21",
    "lat": 49.426505,
    "lon": 26.979752,
    "kind": "priced",
    "operator": "UGV",
    "power": 40,
    "priceMin": 20.49,
    "priceMax": 20.99,
    "ports": [
      {
        "power": 40,
        "price": 20.99,
        "status": 1,
        "type": "CHAdeMO"
      },
      {
        "power": 22,
        "price": 20.49,
        "status": 1,
        "type": "Type 2"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-9760",
    "name": "\u041A\u0430\u0444\u0435 \xAB\u0412\u043E\u0433\u043D\u0435\u043C \u0456 \u041D\u043E\u0436\u0435\u043C\xBB",
    "address": "\u0432\u0443\u043B. \u0420\u0430\u043D\u043A\u043E\u0432\u0430, 4\u0410",
    "lat": 49.409089,
    "lon": 26.980448,
    "kind": "priced",
    "operator": "EVA",
    "power": 9,
    "priceMin": 20,
    "priceMax": 20,
    "ports": [
      {
        "power": 9,
        "price": 20,
        "status": 4,
        "type": "Type 1"
      }
    ],
    "parking": ""
  },
  {
    "uid": "p-9764",
    "name": "\u0410\u0432\u0442\u043E\u0446\u0435\u043D\u0442\u0440 \xAB\u041B\u0406\u0413\u0410\xBB",
    "address": "\u0432\u0443\u043B. \u041A\u0443\u043F\u0440\u0456\u043D\u0430, 57/1",
    "lat": 49.405493,
    "lon": 26.980402,
    "kind": "priced",
    "operator": "EVA",
    "power": 22,
    "priceMin": 20,
    "priceMax": 20,
    "ports": [
      {
        "power": 22,
        "price": 20,
        "status": 2,
        "type": "Type 2"
      },
      {
        "power": 9,
        "price": 20,
        "status": 2,
        "type": "Type 1"
      }
    ],
    "parking": ""
  },
  {
    "uid": "r-12258",
    "name": "AE Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0440\u043E\u0441\u043A\u0443\u0440\u0456\u0432\u0441\u044C\u043A\u043E\u0433\u043E \u041F\u0456\u0434\u043F\u0456\u043B\u043B\u044F, 199",
    "lat": 49.427215,
    "lon": 26.962932,
    "kind": "listed",
    "operator": "",
    "power": 90,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12387",
    "name": "AE Charge Point Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0417\u0430\u0445\u0456\u0434\u043D\u0430 \u041E\u043A\u0440\u0443\u0436\u043D\u0430, 15/1",
    "lat": 49.430322,
    "lon": 26.943958,
    "kind": "listed",
    "operator": "",
    "power": 22,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12636",
    "name": "AE Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0421\u043E\u0431\u043E\u0440\u043D\u0430, 17",
    "lat": 49.42775,
    "lon": 26.9817,
    "kind": "listed",
    "operator": "",
    "power": 9,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12638",
    "name": "Electric Vehicle Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u043E\u0434\u0456\u043B\u044C\u0441\u044C\u043A\u0430",
    "lat": 49.426152,
    "lon": 26.988604,
    "kind": "listed",
    "operator": "",
    "power": 9,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12639",
    "name": "AE Charging Point Charging Station",
    "address": "\u0443\u043B. \u041F\u0440\u0438\u0431\u0443\u0436\u0441\u043A\u0430\u044F, 11",
    "lat": 49.42314,
    "lon": 27.01003,
    "kind": "listed",
    "operator": "",
    "power": 9,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12640",
    "name": "AE Charging Station",
    "address": "\u0432\u0443\u043B. \u0413\u0435\u0440\u043E\u0457\u0432 \u041C\u0430\u0440\u0456\u0443\u043F\u043E\u043B\u044F, 18/1",
    "lat": 49.41914,
    "lon": 26.97603,
    "kind": "listed",
    "operator": "",
    "power": 9,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12642",
    "name": "AE Charge Point Charging Station",
    "address": "\u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u041C\u0438\u0440\u0443, 72/5",
    "lat": 49.438514,
    "lon": 27.001824,
    "kind": "listed",
    "operator": "",
    "power": 9,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12643",
    "name": "AutoEnterprise 294",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0421\u043E\u0431\u043E\u0440\u043D\u0430, 21/1",
    "lat": 49.426433,
    "lon": 26.981467,
    "kind": "listed",
    "operator": "",
    "power": 9,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12644",
    "name": "AE Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u0430, 66",
    "lat": 49.4171,
    "lon": 27.01399,
    "kind": "listed",
    "operator": "",
    "power": 9,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12645",
    "name": "AutoEnterprise Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0411\u0430\u043D\u0434\u0435\u0440\u0438, 6",
    "lat": 49.435206,
    "lon": 26.98165,
    "kind": "listed",
    "operator": "",
    "power": 9,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12647",
    "name": "AutoEnterprise Charging Station",
    "address": "\u043C, \u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0440\u043E\u0441\u043A\u0443\u0440\u0456\u0432\u0441\u044C\u043A\u0430, 92",
    "lat": 49.416907,
    "lon": 27.010373,
    "kind": "listed",
    "operator": "",
    "power": 9,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12648",
    "name": "AE Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0440\u0438\u0431\u0443\u0437\u044C\u043A\u0430, 15/1",
    "lat": 49.41975,
    "lon": 27.02211,
    "kind": "listed",
    "operator": "",
    "power": 60,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12662-12664",
    "name": "AutoEnterprise Charging Station",
    "address": "\u0421\u0442\u0430\u0440\u043E\u043A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432\u0441\u044C\u043A\u0435 \u0448\u043E\u0441\u0435, 2\u043B",
    "lat": 49.444728,
    "lon": 27.0187795,
    "kind": "listed",
    "operator": "",
    "power": 22,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-12663",
    "name": "AutoEnterprise Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0404\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0430, 18",
    "lat": 49.418049,
    "lon": 26.984664,
    "kind": "listed",
    "operator": "",
    "power": 9,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-13923",
    "name": "Go To-U Charging Station",
    "address": "\u041A\u0440\u0430\u0441\u043E\u0432\u0441\u044C\u043A\u043E\u0433\u043E \u0432\u0443\u043B\u0438\u0446\u044F 17 \u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u0438\u0439 \u0440\u0430\u0439\u043E\u043D",
    "lat": 49.41450778,
    "lon": 27.0038681,
    "kind": "listed",
    "operator": "",
    "power": 120,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-13987-14000",
    "name": "AutoEnterprise Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0413\u0440\u0443\u0448\u0435\u0432\u0441\u044C\u043A\u043E\u0433\u043E, 68",
    "lat": 49.423553,
    "lon": 26.984544,
    "kind": "listed",
    "operator": "",
    "power": 22,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-24669",
    "name": "AE Charging Point Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0440\u0438\u0431\u0443\u0437\u044C\u043A\u0430",
    "lat": 49.420918,
    "lon": 27.017321,
    "kind": "listed",
    "operator": "",
    "power": 50,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-28114",
    "name": "GO TO-U Charging Station",
    "address": "\u0421\u0432\u043E\u0431\u043E\u0434\u0438 \u0432\u0443\u043B\u0438\u0446\u044F 1\u0410 \u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u0438\u0439 \u0440\u0430\u0439\u043E\u043D",
    "lat": 49.4383709,
    "lon": 27.0034221,
    "kind": "listed",
    "operator": "",
    "power": 60,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-29573",
    "name": "\u0417\u0430\u0440\u044F\u0434\u043D\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F Flash",
    "address": "\u0421\u0442\u0430\u0440\u043E\u043A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432\u0441\u044C\u043A\u0435 \u0448\u043E\u0441\u0435, 6",
    "lat": 49.434642,
    "lon": 27.01522,
    "kind": "listed",
    "operator": "",
    "power": 40,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-29578",
    "name": "AE Charge Point Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0422\u0435\u0440\u043D\u043E\u043F\u0456\u043B\u044C\u0441\u044C\u043A\u0430, 7",
    "lat": 49.403975,
    "lon": 26.959671,
    "kind": "listed",
    "operator": "",
    "power": 80,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "r-31067",
    "name": "IONITY Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0440\u0438\u0431\u0443\u0437\u044C\u043A\u0430",
    "lat": 49.420821,
    "lon": 27.018713,
    "kind": "listed",
    "operator": "",
    "power": 22,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-0",
    "name": "\u0417\u0430\u0440\u044F\u0434\u043D\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F AE Charge Point",
    "address": "\u0421\u0442\u0430\u0440\u043E\u043A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432\u0441\u044C\u043A\u0435 \u0448\u043E\u0441\u0435, 5\u0411",
    "lat": 49.4308359,
    "lon": 27.0172723,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-1",
    "name": "IONITY Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0456\u043B\u043E\u0442\u0441\u044C\u043A\u0430, 65",
    "lat": 49.407627,
    "lon": 27.013857,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-2",
    "name": "AE Charge Point Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0417\u0430\u0445\u0456\u0434\u043D\u0430 \u041E\u043A\u0440\u0443\u0436\u043D\u0430, 5, \u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u0438\u0439, \u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u0430 \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0423\u043A\u0440\u0430\u0457\u043D\u0430, 29000 \u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u0438\u0439 \u0440\u0430\u0439\u043E\u043D",
    "lat": 49.4581951,
    "lon": 26.9593059,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-3",
    "name": "Autoenterprise Charging Station",
    "address": "13\u0410,, \u0432\u0443\u043B\u0438\u0446\u044F \u0421\u0432\u043E\u0431\u043E\u0434\u0438, 13\u0410",
    "lat": 49.4322756,
    "lon": 26.9971174,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-4",
    "name": "EV Charging Station",
    "address": "\u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u041C\u0438\u0440\u0443, 101\u0410",
    "lat": 49.435029,
    "lon": 27.0167481,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-5",
    "name": "AutoEnterprise Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0440\u043E\u0441\u043A\u0443\u0440\u0456\u0432\u0441\u044C\u043A\u0430, 90",
    "lat": 49.4170598,
    "lon": 27.0078818,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-6",
    "name": "CHARGE ME Charging Station",
    "address": "\u0421\u0442\u0430\u0440\u043E\u043A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D\u0456\u0432\u0441\u044C\u043A\u0435 \u0448\u043E\u0441\u0435, 20",
    "lat": 49.430874,
    "lon": 27.0096243,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-7",
    "name": "AE Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0440\u0438\u0431\u0443\u0437\u044C\u043A\u0430, 14/1",
    "lat": 49.4284184,
    "lon": 26.9927528,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-8",
    "name": "Ionity Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0422\u0435\u0440\u043D\u043E\u043F\u0456\u043B\u044C\u0441\u044C\u043A\u0430, 7",
    "lat": 49.4047363,
    "lon": 26.9583908,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-9",
    "name": "AutoEnterprise 300",
    "address": "\u041A\u0430\u043C'\u044F\u043D\u0435\u0446\u044C\u043A\u0430 \u0432\u0443\u043B\u0438\u0446\u044F, 117",
    "lat": 49.4080862,
    "lon": 26.969534,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-10",
    "name": "AutoEnterprise 131",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041C\u0430\u0440\u043A\u0430 \u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u044C\u043A\u043E\u0433\u043E, 5",
    "lat": 49.4410091,
    "lon": 27.0050001,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-11",
    "name": "AE Charging Station",
    "address": "\u0432\u0443\u043B. \u0421\u0438\u043C\u043E\u043D\u0430 \u041F\u0435\u0442\u043B\u044E\u0440\u0438, 54/1",
    "lat": 49.403808,
    "lon": 26.9895606,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-12",
    "name": "AE Charging Station",
    "address": "\u041A\u0430\u043C'\u044F\u043D\u0435\u0446\u044C\u043A\u0430 \u0432\u0443\u043B\u0438\u0446\u044F, 2",
    "lat": 49.4303514,
    "lon": 26.9798067,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-13",
    "name": "AE Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0440\u043E\u0441\u043A\u0443\u0440\u0456\u0432\u0441\u044C\u043A\u0430, 46-48",
    "lat": 49.4222302,
    "lon": 26.9882402,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-14",
    "name": "AE Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0440\u043E\u0441\u043A\u0443\u0440\u0456\u0432\u0441\u044C\u043A\u0430, 83/1",
    "lat": 49.4203904,
    "lon": 26.9944566,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-15",
    "name": "AE Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041C\u0430\u0440\u043A\u0430 \u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u044C\u043A\u043E\u0433\u043E, 7",
    "lat": 49.4425065,
    "lon": 27.005978,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-16",
    "name": "\u211642 AutoEnterprise",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0421\u0432\u043E\u0431\u043E\u0434\u0438, 17/1",
    "lat": 49.4247872,
    "lon": 26.9917601,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-17",
    "name": "AE Charge Point Charging Station",
    "address": "\u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430, \u0432\u0443\u043B. \u0421\u0438\u043C\u043E\u043D\u0430 \u041F\u0435\u0442\u043B\u044E\u0440\u0438",
    "lat": 49.4041993,
    "lon": 26.9862523,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-18",
    "name": "AE Charge Point Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u0421\u0432\u043E\u0431\u043E\u0434\u0438, 15/1\u0410",
    "lat": 49.4321234,
    "lon": 26.9966774,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-19",
    "name": "AE Charge Point Charging Station",
    "address": "\u0432\u0443\u043B\u0438\u0446\u044F \u041F\u0430\u043D\u0430\u0441\u0430 \u041C\u0438\u0440\u043D\u043E\u0433\u043E, 34/1",
    "lat": 49.4569571,
    "lon": 27.0053083,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-20",
    "name": "Electric Vehicle Charging Station",
    "address": "95/1A, \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u041C\u0438\u0440\u0443, 95/1\u0410",
    "lat": 49.4362081,
    "lon": 27.0136099,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-21",
    "name": "AE Charging Station",
    "address": "\u0440\u0430\u0439\u043E\u043D 29000-29499, \u041D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456, \u041F\u043B\u043E\u0449\u0430",
    "lat": 49.4204299,
    "lon": 26.9798293,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  },
  {
    "uid": "g-22",
    "name": "AE Charging Station",
    "address": "\u041A\u0430\u043C'\u044F\u043D\u0435\u0446\u044C\u043A\u0430 \u0432\u0443\u043B\u0438\u0446\u044F, 117",
    "lat": 49.4084595,
    "lon": 26.9686467,
    "kind": "google",
    "operator": "",
    "power": null,
    "priceMin": null,
    "priceMax": null,
    "ports": [],
    "parking": ""
  }
];

// src/map-page.js
function renderMapPage(stations, updatedAt) {
  const stationData = JSON.stringify(stations).replaceAll("<", "\\u003c");
  const [year, month, day] = updatedAt.split("-");
  const dateLabel = day + "." + month + "." + year;
  return `<!doctype html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>\u0417\u0430\u0440\u044F\u0434\u043A\u0438 \u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u043E\u0433\u043E</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
  <style>
    :root {
      color-scheme: light dark;
      --bg: var(--tg-theme-bg-color, #f5f7fa);
      --text: var(--tg-theme-text-color, #152033);
      --muted: var(--tg-theme-hint-color, #657184);
      --panel: var(--tg-theme-secondary-bg-color, #ffffff);
      --button: var(--tg-theme-button-color, #2374e1);
      --button-text: var(--tg-theme-button-text-color, #ffffff);
      --border: rgba(127, 127, 127, .28);
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; min-height: 100%; background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    body { padding: 12px 12px calc(16px + env(safe-area-inset-bottom)); }
    header { margin-bottom: 10px; }
    h1 { margin: 0 0 3px; font-size: 22px; }
    .sub { margin: 0; color: var(--muted); font-size: 13px; }
    .toolbar { display: flex; gap: 7px; overflow-x: auto; padding: 2px 0 9px; scrollbar-width: none; }
    .toolbar::-webkit-scrollbar { display: none; }
    button { min-height: 42px; border: 1px solid var(--border); border-radius: 12px; padding: 0 13px; background: var(--panel); color: var(--text); white-space: nowrap; font: inherit; font-weight: 600; }
    button.active { background: var(--button); color: var(--button-text); border-color: var(--button); }
    #map { height: min(67vh, 640px); min-height: 420px; border-radius: 16px; overflow: hidden; border: 1px solid var(--border); background: var(--panel); }
    .footer { display: flex; justify-content: space-between; gap: 12px; margin-top: 8px; color: var(--muted); font-size: 12px; }
    .leaflet-popup-content-wrapper, .leaflet-popup-tip { background: var(--panel); color: var(--text); }
    .leaflet-popup-content { min-width: 210px; line-height: 1.4; }
    .popup-name { font-weight: 700; font-size: 15px; margin-bottom: 3px; }
    .popup-address { color: var(--muted); margin-bottom: 7px; }
    .popup-facts { margin-bottom: 7px; }
    .popup-link { display: block; text-align: center; padding: 9px 10px; border-radius: 10px; background: var(--button); color: var(--button-text) !important; text-decoration: none; font-weight: 700; }
    .legend { background: var(--panel); color: var(--text); padding: 7px 9px; border-radius: 10px; border: 1px solid var(--border); font-size: 11px; line-height: 1.55; }
    .dot { display: inline-block; width: 9px; height: 9px; border-radius: 50%; margin-right: 5px; }
    @media (max-width: 380px) { body { padding-left: 8px; padding-right: 8px; } #map { min-height: 380px; } }
  </style>
</head>
<body>
  <header>
    <h1>\u26A1 \u0417\u0430\u0440\u044F\u0434\u043A\u0438 \u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u043E\u0433\u043E</h1>
    <p class="sub">66 \u043B\u043E\u043A\u0430\u0446\u0456\u0439 \xB7 22 \u0437 \u0446\u0456\u043D\u043E\u044E \xB7 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u043E ${dateLabel}</p>
  </header>
  <div class="toolbar" aria-label="\u0424\u0456\u043B\u044C\u0442\u0440\u0438">
    <button type="button" class="active" data-filter="all">\u0423\u0441\u0456</button>
    <button type="button" data-filter="priced">\u0417 \u0446\u0456\u043D\u043E\u044E</button>
    <button type="button" data-filter="fast">\u0412\u0456\u0434 40 \u043A\u0412\u0442</button>
    <button type="button" data-filter="cheap">\u0414\u043E 18,49 \u20B4</button>
    <button type="button" id="locate">\u041C\u043E\u0454 \u043C\u0456\u0441\u0446\u0435</button>
  </div>
  <div id="map" aria-label="\u041A\u0430\u0440\u0442\u0430 \u0437\u0430\u0440\u044F\u0434\u043D\u0438\u0445 \u0441\u0442\u0430\u043D\u0446\u0456\u0439"></div>
  <div class="footer"><span id="count"></span><span>\u0426\u0456\u043D\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438\u0441\u044F</span></div>

  <script src="https://telegram.org/js/telegram-web-app.js"><\/script>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>
  <script>
    const stations = ${stationData};
    const tg = window.Telegram && window.Telegram.WebApp;
    if (tg) { tg.ready(); tg.expand(); }

    const map = L.map("map", { zoomControl: true }).setView([49.422, 26.99], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "\xA9 OpenStreetMap contributors"
    }).addTo(map);

    const layer = L.layerGroup().addTo(map);
    const count = document.getElementById("count");
    let activeFilter = "all";
    let locationMarker = null;

    function escapeHtml(value) {
      return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
    }
    function money(value) { return new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 2 }).format(value); }
    function price(station) {
      if (station.priceMin == null) return "\u0446\u0456\u043D\u0430 \u043D\u0435 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u0430";
      if (station.priceMax == null || station.priceMin === station.priceMax) return money(station.priceMin) + " \u20B4/\u043A\u0412\u0442\xB7\u0433\u043E\u0434";
      return money(station.priceMin) + "\u2013" + money(station.priceMax) + " \u20B4/\u043A\u0412\u0442\xB7\u0433\u043E\u0434";
    }
    function color(station) {
      if (station.priceMin == null) return "#7b8797";
      if (station.priceMin <= 18.49) return "#20a464";
      if (station.priceMin < 22) return "#f19a22";
      return "#e14d52";
    }
    function visible(station) {
      if (activeFilter === "priced") return station.priceMin != null;
      if (activeFilter === "fast") return (station.power || 0) >= 40;
      if (activeFilter === "cheap") return station.priceMin != null && station.priceMin <= 18.49;
      return true;
    }
    function popup(station) {
      const connectors = [...new Set((station.ports || []).map(port => port.type).filter(Boolean))];
      const route = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(station.lat + "," + station.lon);
      return '<div class="popup-name">' + escapeHtml(station.name) + '</div>' +
        '<div class="popup-address">' + escapeHtml(station.address || "\u0410\u0434\u0440\u0435\u0441\u0443 \u043D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E") + '</div>' +
        '<div class="popup-facts"><b>\u26A1 ' + (station.power ? station.power + " \u043A\u0412\u0442" : "\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E") + '</b><br><b>\u{1F4B3} ' + escapeHtml(price(station)) + '</b>' +
        (connectors.length ? '<br>\u{1F50C} ' + escapeHtml(connectors.join(", ")) : "") + '</div>' +
        '<a class="popup-link" href="' + route + '" target="_blank" rel="noopener">\u041F\u0440\u043E\u043A\u043B\u0430\u0441\u0442\u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442</a>';
    }
    function draw() {
      layer.clearLayers();
      const shown = stations.filter(visible);
      shown.forEach(station => {
        const radius = station.power >= 120 ? 9 : station.power >= 40 ? 7 : 5.5;
        L.circleMarker([station.lat, station.lon], {
          radius,
          color: "#ffffff",
          weight: 1.5,
          fillColor: color(station),
          fillOpacity: station.kind === "google" ? .48 : .92
        }).bindPopup(popup(station)).addTo(layer);
      });
      count.textContent = "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E: " + shown.length;
    }

    document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      activeFilter = button.dataset.filter;
      draw();
    }));

    document.getElementById("locate").addEventListener("click", () => {
      if (!navigator.geolocation) return;
      navigator.geolocation.getCurrentPosition(position => {
        const point = [position.coords.latitude, position.coords.longitude];
        if (locationMarker) map.removeLayer(locationMarker);
        locationMarker = L.circleMarker(point, { radius: 8, color: "#2374e1", weight: 3, fillColor: "#ffffff", fillOpacity: 1 }).addTo(map).bindPopup("\u0422\u0438 \u0442\u0443\u0442").openPopup();
        map.setView(point, 14);
      }, () => alert("\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0456\u044E. \u0414\u043E\u0437\u0432\u043E\u043B\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0443 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445 Telegram."), { enableHighAccuracy: true, timeout: 10000 });
    });

    const bounds = L.latLngBounds(stations.map(station => [station.lat, station.lon]));
    map.fitBounds(bounds, { padding: [18, 18], maxZoom: 14 });
    const legend = L.control({ position: "bottomright" });
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "legend");
      div.innerHTML = '<span class="dot" style="background:#20a464"></span>\u0434\u043E 18,49 \u20B4<br><span class="dot" style="background:#f19a22"></span>18,50\u201321,99 \u20B4<br><span class="dot" style="background:#e14d52"></span>\u0432\u0456\u0434 22 \u20B4<br><span class="dot" style="background:#7b8797"></span>\u0446\u0456\u043D\u0430 \u043D\u0435\u0432\u0456\u0434\u043E\u043C\u0430';
      return div;
    };
    legend.addTo(map);
    draw();
  <\/script>
</body>
</html>`;
}
__name(renderMapPage, "renderMapPage");

// src/index.js
var PAGE_SIZE = 6;
var BUTTONS = {
  map: "\u{1F5FA} \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043A\u0430\u0440\u0442\u0443",
  cheap: "\u{1F4B8} \u041D\u0430\u0439\u0434\u0435\u0448\u0435\u0432\u0448\u0456",
  fast: "\u26A1 \u041D\u0430\u0439\u0448\u0432\u0438\u0434\u0448\u0456",
  nearby: "\u{1F4CD} \u041F\u043E\u0440\u0443\u0447 \u0437\u0456 \u043C\u043D\u043E\u044E",
  priced: "\u{1F4CB} \u0412\u0441\u0456 \u0437 \u0446\u0456\u043D\u043E\u044E"
};
var index_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/map") {
      return new Response(renderMapPage(STATIONS, UPDATED_AT), {
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=300",
          "x-content-type-options": "nosniff",
          "referrer-policy": "no-referrer"
        }
      });
    }
    if (request.method === "GET" && url.pathname === "/health") {
      return Response.json({
        ok: true,
        updatedAt: UPDATED_AT,
        stations: STATIONS.length,
        pricedStations: STATIONS.filter((station) => station.priceMin != null).length
      });
    }
    if (request.method === "GET" && url.pathname === "/") {
      return new Response("Khmelnytskyi EV charging bot is online \u26A1", {
        headers: { "content-type": "text/plain; charset=UTF-8" }
      });
    }
    if (request.method === "GET" && url.pathname === "/setup") {
      return setupResponse(renderSetupPage());
    }
    if (request.method === "POST" && url.pathname === "/setup") {
      if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_WEBHOOK_SECRET) {
        return setupResponse(renderSetupPage("\u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0434\u043E\u0434\u0430\u0439 \u043E\u0431\u0438\u0434\u0432\u0430 \u0441\u0435\u043A\u0440\u0435\u0442\u0438 \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445 Cloudflare."), 503);
      }
      const form = await request.formData().catch(() => null);
      const suppliedSecret2 = String(form?.get("setup_secret") || "");
      if (!suppliedSecret2 || suppliedSecret2 !== env.TELEGRAM_WEBHOOK_SECRET) {
        return setupResponse(renderSetupPage("\u041A\u043E\u0434 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439."), 403);
      }
      try {
        const bot = await configureTelegram(env, url.origin);
        return setupResponse(renderSetupSuccess(bot.username, url.origin));
      } catch (error) {
        console.error("Telegram setup failed", error);
        return setupResponse(renderSetupPage("Telegram \u043D\u0435 \u043F\u0440\u0438\u0439\u043D\u044F\u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F. \u041F\u0435\u0440\u0435\u0432\u0456\u0440 \u0442\u043E\u043A\u0435\u043D \u0443 Cloudflare."), 502);
      }
    }
    if (request.method !== "POST" || url.pathname !== "/telegram") {
      return new Response("Not found", { status: 404 });
    }
    if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_WEBHOOK_SECRET) {
      console.error("Telegram secrets are not configured");
      return new Response("Bot is not configured", { status: 503 });
    }
    const suppliedSecret = request.headers.get("X-Telegram-Bot-Api-Secret-Token");
    if (suppliedSecret !== env.TELEGRAM_WEBHOOK_SECRET) {
      return new Response("Forbidden", { status: 403 });
    }
    let update;
    try {
      update = await request.json();
    } catch {
      return new Response("Bad request", { status: 400 });
    }
    try {
      await handleUpdate(update, env, url.origin);
    } catch (error) {
      console.error("Update handling failed", error);
      return new Response("Temporary error", { status: 500 });
    }
    return new Response("ok");
  }
};
async function handleUpdate(update, env, origin) {
  if (update.callback_query) {
    await handleCallback(update.callback_query, env, origin);
    return;
  }
  const message = update.message;
  if (!message?.chat?.id) return;
  const chatId = message.chat.id;
  if (message.location) {
    const nearest = nearestStations(message.location.latitude, message.location.longitude, STATIONS, 5);
    await sendStationList(env, chatId, "\u{1F4CD} \u041D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0456 \u0437\u0430\u0440\u044F\u0434\u043A\u0438", nearest, origin);
    return;
  }
  const text = (message.text || "").trim();
  if (text === "/start" || text === "/help" || text === "/menu" || !text) {
    await sendWelcome(env, chatId, origin);
    return;
  }
  if (text === "/map" || text === BUTTONS.map) {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "\u0412\u0456\u0434\u043A\u0440\u0438\u0439 \u043A\u0430\u0440\u0442\u0443 \u2014 \u0442\u0430\u043C \u0454 \u0432\u0441\u0456 66 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0438\u0445 \u0442\u043E\u0447\u043E\u043A, \u0444\u0456\u043B\u044C\u0442\u0440\u0438 \u0437\u0430 \u0446\u0456\u043D\u043E\u044E \u0442\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E.",
      reply_markup: {
        inline_keyboard: [[{ text: "\u{1F5FA} \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043A\u0430\u0440\u0442\u0443", web_app: { url: origin + "/map" } }]]
      }
    });
    return;
  }
  if (text === "/cheap" || text === BUTTONS.cheap) {
    const stations = STATIONS.filter((station) => station.priceMin != null).sort((a, b) => a.priceMin - b.priceMin || (b.power || 0) - (a.power || 0)).slice(0, 6);
    await sendStationList(env, chatId, "\u{1F4B8} \u041D\u0430\u0439\u0434\u0435\u0448\u0435\u0432\u0448\u0456 \u0437 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E\u044E \u0446\u0456\u043D\u043E\u044E", stations, origin);
    return;
  }
  if (text === "/fast" || text === BUTTONS.fast) {
    const stations = STATIONS.filter((station) => station.priceMin != null && (station.power || 0) >= 40).sort((a, b) => (b.power || 0) - (a.power || 0) || a.priceMin - b.priceMin).slice(0, 8);
    await sendStationList(env, chatId, "\u26A1 \u041D\u0430\u0439\u0448\u0432\u0438\u0434\u0448\u0456 \u0437 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E\u044E \u0446\u0456\u043D\u043E\u044E", stations, origin);
    return;
  }
  if (text === "/all" || text === BUTTONS.priced) {
    await sendPricedPage(env, chatId, 0, origin);
    return;
  }
  if (text === "/nearby" || text === BUTTONS.nearby) {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "\u041D\u0430\u0442\u0438\u0441\u043D\u0438 \u043A\u043D\u043E\u043F\u043A\u0443 \u043D\u0438\u0436\u0447\u0435 \u0439 \u0434\u043E\u0437\u0432\u043E\u043B\u044C Telegram \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0442\u0432\u043E\u044E \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0456\u044E. \u0411\u043E\u0442 \u0437\u0431\u0435\u0440\u0435\u0436\u0435 \u0457\u0457 \u043B\u0438\u0448\u0435 \u0432 \u043C\u0435\u0436\u0430\u0445 \u0446\u044C\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0442\u0443.",
      reply_markup: mainKeyboard(origin)
    });
    return;
  }
  await sendWelcome(env, chatId, origin);
}
__name(handleUpdate, "handleUpdate");
async function handleCallback(callback, env, origin) {
  const data = callback.data || "";
  const message = callback.message;
  await telegram(env, "answerCallbackQuery", { callback_query_id: callback.id });
  if (!message?.chat?.id || !data.startsWith("priced:")) return;
  const page = Math.max(0, Number.parseInt(data.split(":")[1], 10) || 0);
  const rendered = pricedPage(page);
  rendered.replyMarkup.inline_keyboard.push([
    { text: "\u{1F5FA} \u041A\u0430\u0440\u0442\u0430", web_app: { url: origin + "/map" } }
  ]);
  await telegram(env, "editMessageText", {
    chat_id: message.chat.id,
    message_id: message.message_id,
    text: rendered.text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: rendered.replyMarkup
  });
}
__name(handleCallback, "handleCallback");
async function sendWelcome(env, chatId, origin) {
  const priced = STATIONS.filter((station) => station.priceMin != null).length;
  await telegram(env, "sendMessage", {
    chat_id: chatId,
    text: "<b>\u26A1 \u0417\u0430\u0440\u044F\u0434\u043A\u0438 \u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u043E\u0433\u043E</b>\n\n\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E <b>" + STATIONS.length + "</b> \u043B\u043E\u043A\u0430\u0446\u0456\u0439, \u0434\u043B\u044F <b>" + priced + "</b> \u0454 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u0430 \u0446\u0456\u043D\u0430. \u041E\u0431\u0438\u0440\u0430\u0439 \u043A\u043D\u043E\u043F\u043A\u0443 \u043D\u0438\u0436\u0447\u0435 \u0430\u0431\u043E \u0432\u0456\u0434\u043A\u0440\u0438\u0439 \u043A\u0430\u0440\u0442\u0443.\n\n<i>\u0422\u0430\u0440\u0438\u0444\u0438 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u0456 " + formatDate(UPDATED_AT) + " \u0456 \u043C\u043E\u0436\u0443\u0442\u044C \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438\u0441\u044F \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0440\u044F\u0434\u0436\u0430\u043D\u043D\u044F\u043C.</i>",
    parse_mode: "HTML",
    reply_markup: mainKeyboard(origin)
  });
}
__name(sendWelcome, "sendWelcome");
async function configureTelegram(env, origin) {
  await telegram(env, "setWebhook", {
    url: origin + "/telegram",
    secret_token: env.TELEGRAM_WEBHOOK_SECRET,
    allowed_updates: ["message", "callback_query"],
    drop_pending_updates: true
  });
  await telegram(env, "setMyCommands", {
    commands: [
      { command: "start", description: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0433\u043E\u043B\u043E\u0432\u043D\u0435 \u043C\u0435\u043D\u044E" },
      { command: "map", description: "\u041A\u0430\u0440\u0442\u0430 \u0432\u0441\u0456\u0445 \u0437\u0430\u0440\u044F\u0434\u043E\u043A" },
      { command: "cheap", description: "\u041D\u0430\u0439\u0434\u0435\u0448\u0435\u0432\u0448\u0456 \u0437\u0430\u0440\u044F\u0434\u043A\u0438" },
      { command: "fast", description: "\u041D\u0430\u0439\u0448\u0432\u0438\u0434\u0448\u0456 \u0437\u0430\u0440\u044F\u0434\u043A\u0438" },
      { command: "all", description: "\u0423\u0441\u0456 \u0437\u0430\u0440\u044F\u0434\u043A\u0438 \u0437 \u0446\u0456\u043D\u043E\u044E" },
      { command: "nearby", description: "\u0417\u0430\u0440\u044F\u0434\u043A\u0438 \u043F\u043E\u0440\u0443\u0447" },
      { command: "help", description: "\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430" }
    ]
  });
  await telegram(env, "setMyDescription", {
    description: "\u041A\u0430\u0440\u0442\u0430 \u0437\u0430\u0440\u044F\u0434\u043E\u043A \u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u043E\u0433\u043E: \u0446\u0456\u043D\u0438, \u043F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C, \u043A\u043E\u043D\u0435\u043A\u0442\u043E\u0440\u0438 \u0442\u0430 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0456 \u0442\u043E\u0447\u043A\u0438."
  });
  return telegram(env, "getMe", {});
}
__name(configureTelegram, "configureTelegram");
function setupResponse(html, status = 200) {
  return new Response(html, {
    status,
    headers: {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
      "referrer-policy": "no-referrer",
      "content-security-policy": "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'"
    }
  });
}
__name(setupResponse, "setupResponse");
function renderSetupPage(error = "") {
  return `<!doctype html>
<html lang="uk"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u043E\u0442\u0430</title><style>
body{margin:0;background:#f4f7fb;color:#172033;font:16px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}main{max-width:480px;margin:0 auto;padding:28px 18px}section{background:#fff;border:1px solid #dce3ed;border-radius:18px;padding:22px;box-shadow:0 8px 30px #1e35520d}h1{font-size:24px;margin:0 0 9px}p{line-height:1.5;color:#526071}label{display:block;font-weight:700;margin:22px 0 8px}input{width:100%;box-sizing:border-box;border:1px solid #b8c3d2;border-radius:12px;padding:14px;font:inherit}button{width:100%;margin-top:12px;border:0;border-radius:12px;padding:14px;background:#2374e1;color:#fff;font:inherit;font-weight:700}.error{background:#fff0f0;color:#9d2929;border-radius:10px;padding:10px}.note{font-size:13px}
</style></head><body><main><section><h1>\u26A1 \u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F Telegram</h1>
<p>\u0412\u0432\u0435\u0434\u0438 \u043A\u043E\u0434 <b>TELEGRAM_WEBHOOK_SECRET</b>, \u044F\u043A\u0438\u0439 \u0442\u0438 \u0434\u043E\u0434\u0430\u0432 \u0443 Cloudflare. \u0422\u043E\u043A\u0435\u043D BotFather \u0441\u044E\u0434\u0438 \u0432\u0432\u043E\u0434\u0438\u0442\u0438 \u043D\u0435 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E.</p>
${error ? `<p class="error">${escapeHtml(error)}</p>` : ""}
<form method="post" action="/setup"><label for="setup_secret">\u041A\u043E\u0434 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F</label>
<input id="setup_secret" name="setup_secret" type="password" autocomplete="off" required>
<button type="submit">\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0431\u043E\u0442\u0430</button></form>
<p class="note">\u041A\u043E\u0434 \u043F\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0438\u043C HTTPS-\u0437\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F\u043C \u0456 \u043D\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u0446\u0456\u0454\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u043E\u044E.</p>
</section></main></body></html>`;
}
__name(renderSetupPage, "renderSetupPage");
function renderSetupSuccess(username, origin) {
  const botUrl = "https://t.me/" + encodeURIComponent(username);
  return `<!doctype html><html lang="uk"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>\u0411\u043E\u0442 \u0433\u043E\u0442\u043E\u0432\u0438\u0439</title><style>body{margin:0;background:#f4f7fb;color:#172033;font:16px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}main{max-width:480px;margin:0 auto;padding:40px 18px}section{background:#fff;border-radius:18px;padding:24px;text-align:center}h1{margin-top:0}.button{display:block;background:#2374e1;color:#fff;text-decoration:none;padding:14px;border-radius:12px;font-weight:700}p{line-height:1.5;color:#526071}</style></head>
<body><main><section><h1>\u2705 \u0411\u043E\u0442 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439</h1><p>Webhook \u0456 \u043A\u043E\u043C\u0430\u043D\u0434\u0438 Telegram \u043D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0456. \u0421\u0435\u0440\u0432\u0435\u0440: ${escapeHtml(origin)}</p><a class="button" href="${escapeHtml(botUrl)}">\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 @${escapeHtml(username)}</a></section></main></body></html>`;
}
__name(renderSetupSuccess, "renderSetupSuccess");
function mainKeyboard(origin) {
  return {
    keyboard: [
      [{ text: BUTTONS.map, web_app: { url: origin + "/map" } }],
      [{ text: BUTTONS.cheap }, { text: BUTTONS.fast }],
      [{ text: BUTTONS.nearby, request_location: true }, { text: BUTTONS.priced }]
    ],
    resize_keyboard: true,
    is_persistent: true,
    input_field_placeholder: "\u041E\u0431\u0435\u0440\u0438 \u0434\u0456\u044E"
  };
}
__name(mainKeyboard, "mainKeyboard");
async function sendStationList(env, chatId, title, stations, origin) {
  const text = "<b>" + escapeHtml(title) + "</b>\n\n" + stations.map(
    (station, index) => formatStation(station, index + 1)
  ).join("\n\n") + "\n\n<i>\u0426\u0456\u043D\u0430 \u043C\u043E\u0436\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u0438\u0441\u044F \u2014 \u043F\u0435\u0440\u0435\u0432\u0456\u0440 \u043F\u0435\u0440\u0435\u0434 \u0441\u0442\u0430\u0440\u0442\u043E\u043C \u0441\u0435\u0441\u0456\u0457.</i>";
  await telegram(env, "sendMessage", {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "\u{1F5FA} \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0432\u0441\u0456 \u043D\u0430 \u043A\u0430\u0440\u0442\u0456", web_app: { url: origin + "/map" } }]]
    }
  });
}
__name(sendStationList, "sendStationList");
async function sendPricedPage(env, chatId, page, origin) {
  const rendered = pricedPage(page);
  rendered.replyMarkup.inline_keyboard.push([{ text: "\u{1F5FA} \u041A\u0430\u0440\u0442\u0430", web_app: { url: origin + "/map" } }]);
  await telegram(env, "sendMessage", {
    chat_id: chatId,
    text: rendered.text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: rendered.replyMarkup
  });
}
__name(sendPricedPage, "sendPricedPage");
function pricedPage(requestedPage) {
  const priced = STATIONS.filter((station) => station.priceMin != null).sort((a, b) => (b.power || 0) - (a.power || 0) || a.priceMin - b.priceMin);
  const pageCount = Math.max(1, Math.ceil(priced.length / PAGE_SIZE));
  const page = Math.min(Math.max(requestedPage, 0), pageCount - 1);
  const slice = priced.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const buttons = [];
  if (page > 0) buttons.push({ text: "\u2190 \u041D\u0430\u0437\u0430\u0434", callback_data: "priced:" + (page - 1) });
  buttons.push({ text: page + 1 + "/" + pageCount, callback_data: "noop" });
  if (page < pageCount - 1) buttons.push({ text: "\u0414\u0430\u043B\u0456 \u2192", callback_data: "priced:" + (page + 1) });
  return {
    text: "<b>\u{1F4CB} \u0417\u0430\u0440\u044F\u0434\u043A\u0438 \u0437 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E\u044E \u0446\u0456\u043D\u043E\u044E</b>\n\n" + slice.map(
      (station, index) => formatStation(station, page * PAGE_SIZE + index + 1)
    ).join("\n\n"),
    replyMarkup: { inline_keyboard: [buttons] }
  };
}
__name(pricedPage, "pricedPage");
function formatStation(station, number) {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(station.lat + "," + station.lon);
  const connectors = [...new Set((station.ports || []).map((port) => port.type).filter(Boolean))];
  const connectorLine = connectors.length ? "\n\u{1F50C} " + escapeHtml(connectors.join(", ")) : "";
  const distanceLine = station.distanceKm == null ? "" : "\n\u{1F4CD} " + formatDistance(station.distanceKm);
  return '<a href="' + escapeHtml(mapsUrl) + '"><b>' + number + ". " + escapeHtml(station.name) + "</b></a>\n" + escapeHtml(station.address || "\u0410\u0434\u0440\u0435\u0441\u0443 \u043D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E") + "\n\u26A1 " + (station.power ? station.power + " \u043A\u0412\u0442" : "\u043F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C \u043D\u0435\u0432\u0456\u0434\u043E\u043C\u0430") + " \xB7 \u{1F4B3} " + escapeHtml(priceText(station)) + connectorLine + distanceLine;
}
__name(formatStation, "formatStation");
function priceText(station) {
  if (station.priceMin == null) return "\u0446\u0456\u043D\u0430 \u043D\u0435 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u0430";
  const min = money(station.priceMin);
  if (station.priceMax == null || station.priceMax === station.priceMin) return min + " \u20B4/\u043A\u0412\u0442\xB7\u0433\u043E\u0434";
  return min + "\u2013" + money(station.priceMax) + " \u20B4/\u043A\u0412\u0442\xB7\u0433\u043E\u0434";
}
__name(priceText, "priceText");
function money(value) {
  return new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 2 }).format(value);
}
__name(money, "money");
function formatDate(value) {
  const [year, month, day] = value.split("-");
  return day + "." + month + "." + year;
}
__name(formatDate, "formatDate");
function formatDistance(km) {
  if (km < 1) return Math.round(km * 1e3) + " \u043C \u0432\u0456\u0434 \u0442\u0435\u0431\u0435";
  return new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 1 }).format(km) + " \u043A\u043C \u0432\u0456\u0434 \u0442\u0435\u0431\u0435";
}
__name(formatDistance, "formatDistance");
function nearestStations(lat, lon, stations = STATIONS, limit = 5) {
  return stations.map((station) => ({ ...station, distanceKm: haversineKm(lat, lon, station.lat, station.lon) })).sort((a, b) => a.distanceKm - b.distanceKm).slice(0, limit);
}
__name(nearestStations, "nearestStations");
function haversineKm(lat1, lon1, lat2, lon2) {
  const radians = /* @__PURE__ */ __name((degrees) => degrees * Math.PI / 180, "radians");
  const earthRadiusKm = 6371;
  const deltaLat = radians(lat2 - lat1);
  const deltaLon = radians(lon2 - lon1);
  const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(deltaLon / 2) ** 2;
  return 2 * earthRadiusKm * Math.asin(Math.sqrt(a));
}
__name(haversineKm, "haversineKm");
function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
__name(escapeHtml, "escapeHtml");
async function telegram(env, method, payload) {
  const response = await fetch("https://api.telegram.org/bot" + env.TELEGRAM_BOT_TOKEN + "/" + method, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.ok) {
    throw new Error("Telegram " + method + " failed: " + (result?.description || response.status));
  }
  return result.result;
}
__name(telegram, "telegram");
export {
  index_default as default,
  formatStation,
  nearestStations,
  priceText
};
//# sourceMappingURL=index.js.map
