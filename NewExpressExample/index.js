import express from "express";

const app = express();

const PORT = 3000;

app.get("/car-basic", (req, res) => {
  res.send({
    1: "Toyota",
    2: "Honda",
    3: "Ford",
    4: "Maruti",
    5: "Suzuki",
    6: "Hyundai",
    7: "Volkswagen",
    8: "Nissan",
    9: "BMW",
    10: "Audi",
    11: "Land-Rover",
    12: "Volvo",
    13: "Lexus",
    14: "Rolls-Royce",
    15: "Bentley",
    16: "Lexus",
    17: "Porsche",
    18: "Mercedes-Benz",
    19: "Jaguar",
    20: "Astin-Martin",
  });
});

app.get("/car-details", (req, res) => {
  res.json([
    {
      TOYOTA: {
        msg: "Engine Maintenance Required",
        brand: "Toyota",
        model: "Corolla",
        year: 2024,
        image:
          "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Toyota-Corolla/4538/1544534285920/front-left-side-47.jpg",
        body_style: "Sedan",
      },
      technical_specifications: {
        engine: {
          type: "4-cylinder",
          displacement: "2.0-litre",
          power: "169 hp",
          torque: "151 lb-ft",
        },
        transmission: {
          type: "CVT",
          gears: "6-transmission-gear",
        },
        drivetrain: "FWD",
        fuel_economy: {
          city_mpl: 32,
          highway_mpl: 41,
        },
      },
      dimensions_and_weight: {
        length: "4635 mm",
        width: "1780 mm",
        height: "1435 mm",
        wheelbase: "2700 mm",
        kerb_weight: "1340 kg",
      },
      safety_features: ["ABS", "EBD", "Lane Assist", " Airbags"],
      colors: {
        exterior: "Super White",
        interior: "Light Gray",
      },
    },
    {
      HONDA: {
        vehicle_info: {
          msg: "starter motor",
          brand: "Honda",
          model: "Civic",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Civic/7740/1585801296746/exterior-image-164.jpg",
          year: 2026,
          body_style: "Sedan",
        },
        technical_specifications: {
          engine: {
            type: "4-cylinder",
            displacement: "2.0-litre",
            power: "150 hp",
            torque: "133 lb-ft",
          },
          transmission: { type: "CVT", gears: "Variable" },
          drivetrain: "FWD",
          fuel_economy: { city_mpl: 32, highway_mpl: 41 },
        },
        dimensions_and_weight: {
          length: "4676 mm",
          width: "1801 mm",
          height: "1415 mm",
          wheelbase: "2736 mm",
          kerb_weight: "1327 kg",
        },
        safety_features: [
          "Honda Sensing",
          "Collision Mitigation",
          "Lane Keeping Assist",
          "Airbags",
        ],
        colors: { exterior: "Rallye Red", interior: "Black" },
      },
    },
    {
      FORD: {
        vehicle_info: {
          msg: "Naturally aspirated",
          brand: "Ford",
          model: "Mustang",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Ford/Mustang-2024/7939/1663750110692/front-left-side-47.jpg",
          year: 2026,
          body_style: "Coupe",
        },
        technical_specifications: {
          engine: {
            type: "EcoBoost 4-cylinder",
            displacement: "2.3-litre",
            power: "315 hp",
            torque: "350 lb-ft",
          },
          transmission: { type: "Automatic", gears: "10-speed" },
          drivetrain: "RWD",
          fuel_economy: { city_mpl: 22, highway_mpl: 33 },
        },
        dimensions_and_weight: {
          length: "4811 mm",
          width: "1915 mm",
          height: "1397 mm",
          wheelbase: "2718 mm",
          kerb_weight: "1627 kg",
        },
        safety_features: [
          "Co-Pilot360",
          "Pre-Collision Assist",
          "Blind Spot Info",
          "Airbags",
        ],
        colors: { exterior: "Shadow Black", interior: "Space Gray" },
      },
    },
    {
      MARUTI_SUZUKI: {
        vehicle_info: {
          msg: "air mass sensor",
          brand: "Maruti Suzuki",
          model: "Swift",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1755777061785/front-left-side-47.jpg?tr=w-664",
          year: 2026,
          body_style: "Hatchback",
        },
        technical_specifications: {
          engine: {
            type: "3-cylinder Z-Series",
            displacement: "1.2-litre",
            power: "80 hp",
            torque: "82 lb-ft",
          },
          transmission: { type: "AMT", gears: "5-speed" },
          drivetrain: "FWD",
          fuel_economy: { city_mpl: 58, highway_mpl: 63 },
        },
        dimensions_and_weight: {
          length: "3860 mm",
          width: "1735 mm",
          height: "1520 mm",
          wheelbase: "2450 mm",
          kerb_weight: "920 kg",
        },
        safety_features: [
          "ABS with EBD",
          "ESP",
          "Hill Hold Assist",
          "6 Airbags",
        ],
        colors: { exterior: "Sizzling Red", interior: "Black" },
      },
    },
    {
      HYUNDAI: {
        vehicle_info: {
          msg: " AUTONEST Car Seat Vibrating Massage Cushion",
          brand: "Hyundai",
          model: "Elantra",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Elantra/7888/1636975889286/exterior-image-164.jpg",
          year: 2026,
          body_style: "Sedan",
        },
        technical_specifications: {
          engine: {
            type: "4-cylinder",
            displacement: "2.0-litre",
            power: "147 hp",
            torque: "132 lb-ft",
          },
          transmission: { type: "IVT", gears: "Variable" },
          drivetrain: "FWD",
          fuel_economy: { city_mpl: 32, highway_mpl: 41 },
        },
        dimensions_and_weight: {
          length: "4675 mm",
          width: "1825 mm",
          height: "1430 mm",
          wheelbase: "2720 mm",
          kerb_weight: "1236 kg",
        },
        safety_features: [
          "SmartSense",
          "Forward Collision Avoidance",
          "Blind-Spot Assist",
          "Airbags",
        ],
        colors: { exterior: "Intense Blue", interior: "Gray" },
      },
    },
    {
      VOLKSWAGAN: {
        vehicle_info: {
          msg: "Mass Air Flow (MAF)",
          brand: "Volkswagen",
          model: "Jetta",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Virtus/10617/1739939470391/exterior-image-168.jpg",
          year: 2026,
          body_style: "Sedan",
        },
        technical_specifications: {
          engine: {
            type: "Turbocharged 4-cylinder",
            displacement: "1.5-litre",
            power: "158 hp",
            torque: "184 lb-ft",
          },
          transmission: { type: "Automatic", gears: "8-speed" },
          drivetrain: "FWD",
          fuel_economy: { city_mpl: 29, highway_mpl: 40 },
        },
        dimensions_and_weight: {
          length: "4738 mm",
          width: "1799 mm",
          height: "1465 mm",
          wheelbase: "2686 mm",
          kerb_weight: "1330 kg",
        },
        safety_features: [
          "IQ.DRIVE",
          "Travel Assist",
          "Adaptive Cruise Control",
          "Airbags",
        ],
        colors: { exterior: "Platinum Gray", interior: "Titan Black" },
      },
    },
    {
      NISSAN: {
        vehicle_info: {
          msg: " Nissan Sentra when driving safely below 5 mph.",
          brand: "Nissan",
          model: "Sentra",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/Tekton/13665/1785472477279/side-view-(left)-90.jpg",
          year: 2026,
          body_style: "Sedan",
        },
        technical_specifications: {
          engine: {
            type: "4-cylinder",
            displacement: "2.0-litre",
            power: "149 hp",
            torque: "146 lb-ft",
          },
          transmission: { type: "Xtronic CVT", gears: "Variable" },
          drivetrain: "FWD",
          fuel_economy: { city_mpl: 30, highway_mpl: 40 },
        },
        dimensions_and_weight: {
          length: "4640 mm",
          width: "1816 mm",
          height: "1445 mm",
          wheelbase: "2707 mm",
          kerb_weight: "1380 kg",
        },
        safety_features: [
          "Safety Shield 360",
          "Automatic Emergency Braking",
          "Rear Cross Traffic Alert",
          "Airbags",
        ],
        colors: { exterior: "Electric Blue", interior: "Charcoal" },
      },
    },
    {
      BMW: {
        vehicle_info: {
          brand: "BMW",
          model: "3 Series",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/M4-Competition/11702/1716966048673/side-view-(left)-90.jpg",
          year: 2026,
          body_style: "Sedan",
        },
        technical_specifications: {
          engine: {
            type: "TwinPower Turbo 4-cylinder",
            displacement: "2.0-litre",
            power: "255 hp",
            torque: "295 lb-ft",
          },
          transmission: { type: "Automatic", gears: "8-speed Sport" },
          drivetrain: "RWD",
          fuel_economy: { city_mpl: 26, highway_mpl: 36 },
        },
        dimensions_and_weight: {
          length: "4714 mm",
          width: "1826 mm",
          height: "1440 mm",
          wheelbase: "2851 mm",
          kerb_weight: "1619 kg",
        },
        safety_features: [
          "Active Driving Assistant",
          "Frontal Collision Warning",
          "Lane Departure Warning",
          "Airbags",
        ],
        colors: { exterior: "Alpine White", interior: "Canberra Beige" },
      },
    },
    {
      AUDI: {
        vehicle_info: {
          brand: "Audi",
          model: "A4",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/S5-Sportback/10569/1689596046874/side-view-(left)-90.jpg",
          year: 2026,
          body_style: "Sedan",
        },
        technical_specifications: {
          engine: {
            type: "TFSI 4-cylinder",
            displacement: "2.0-litre",
            power: "261 hp",
            torque: "273 lb-ft",
          },
          transmission: { type: "S tronic Dual-Clutch", gears: "7-speed" },
          drivetrain: "AWD (Quattro)",
          fuel_economy: { city_mpl: 24, highway_mpl: 32 },
        },
        dimensions_and_weight: {
          length: "4762 mm",
          width: "1847 mm",
          height: "1427 mm",
          wheelbase: "2820 mm",
          kerb_weight: "1645 kg",
        },
        safety_features: [
          "Audi pre sense basic",
          "Lane Departure Warning",
          "Parking System Plus",
          "Airbags",
        ],
        colors: { exterior: "Mythos Black", interior: "Rock Gray" },
      },
    },
    {
      LAND_ROVER: {
        vehicle_info: {
          brand: "Land Rover",
          model: "Range Rover Sport",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Defender/9080/1754473292780/front-right-view-120.jpg",
          year: 2026,
          body_style: "SUV",
        },
        technical_specifications: {
          engine: {
            type: "Mild Hybrid Turbo Inline-6",
            displacement: "3.0-litre",
            power: "355 hp",
            torque: "369 lb-ft",
          },
          transmission: { type: "Automatic", gears: "8-speed" },
          drivetrain: "AWD",
          fuel_economy: { city_mpl: 19, highway_mpl: 25 },
        },
        dimensions_and_weight: {
          length: "4946 mm",
          width: "2047 mm",
          height: "1820 mm",
          wheelbase: "2997 mm",
          kerb_weight: "2310 kg",
        },
        safety_features: [
          "Emergency Braking",
          "3D Surround Camera",
          "Adaptive Cruise Control",
          "Airbags",
        ],
        colors: { exterior: "Santorini Black", interior: "Ebony" },
      },
    },
    {
      VOLVO: {
        vehicle_info: {
          brand: "Volvo",
          model: "S60",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volvo/XC90/11977/1779873124180/side-view-(left)-90.jpg",
          year: 2026,
          body_style: "Sedan",
        },
        technical_specifications: {
          engine: {
            type: "Turbocharged 4-cylinder B5",
            displacement: "2.0-litre",
            power: "247 hp",
            torque: "258 lb-ft",
          },
          transmission: { type: "Automatic", gears: "8-speed" },
          drivetrain: "AWD",
          fuel_economy: { city_mpl: 25, highway_mpl: 33 },
        },
        dimensions_and_weight: {
          length: "4761 mm",
          width: "1850 mm",
          height: "1431 mm",
          wheelbase: "2872 mm",
          kerb_weight: "1680 kg",
        },
        safety_features: [
          "Pilot Assist",
          "BLIS Blind Spot System",
          "Oncoming Lane Mitigation",
          "Airbags",
        ],
        colors: { exterior: "Crystal White", interior: "Charcoal Nappa" },
      },
    },
    {
      LEXUS: {
        vehicle_info: {
          brand: "Lexus",
          model: "ES 350",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lexus/RX/11359/1750069519468/exterior-image-164.jpg",
          year: 2026,
          body_style: "Sedan",
        },
        technical_specifications: {
          engine: {
            type: "V6",
            displacement: "3.5-litre",
            power: "302 hp",
            torque: "267 lb-ft",
          },
          transmission: { type: "Direct Shift Automatic", gears: "8-speed" },
          drivetrain: "FWD",
          fuel_economy: { city_mpl: 22, highway_mpl: 32 },
        },
        dimensions_and_weight: {
          length: "4976 mm",
          width: "1864 mm",
          height: "1445 mm",
          wheelbase: "2870 mm",
          kerb_weight: "1675 kg",
        },
        safety_features: [
          "Lexus Safety System+ 3.0",
          "Pre-Collision System",
          "All-Speed Cruise Control",
          "Airbags",
        ],
        colors: { exterior: "Eminent White Pearl", interior: "Palomino" },
      },
    },
    {
      ROLLS_ROYALS: {
        vehicle_info: {
          brand: "Rolls-Royce",
          model: "Ghost",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Ghost-Series-II/12399/1780054389477/front-right-view-120.jpg",
          year: 2026,
          body_style: "Sedan",
        },
        technical_specifications: {
          engine: {
            type: "Twin-Turbo V12",
            displacement: "6.75-litre",
            power: "563 hp",
            torque: "627 lb-ft",
          },
          transmission: { type: "Satellite Aided Automatic", gears: "8-speed" },
          drivetrain: "AWD",
          fuel_economy: { city_mpl: 12, highway_mpl: 19 },
        },
        dimensions_and_weight: {
          length: "5546 mm",
          width: "2148 mm",
          height: "1571 mm",
          wheelbase: "3295 mm",
          kerb_weight: "2490 kg",
        },
        safety_features: [
          "Vision Assist",
          "Active Cruise Control",
          "High-Resolution Head-Up Display",
          "Airbags",
        ],
        colors: { exterior: "English White", interior: "Grace White" },
      },
    },
    {
      BENTLEY: {
        vehicle_info: {
          brand: "Bentley",
          model: "Continental GT",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Bentley/Continental/10465/1781091774720/rear-left-view-121.jpg",
          year: 2026,
          body_style: "Coupe",
        },
        technical_specifications: {
          engine: {
            type: "Twin-Turbo V8",
            displacement: "4.0-litre",
            power: "542 hp",
            torque: "568 lb-ft",
          },
          transmission: { type: "Dual-Clutch Automatic", gears: "8-speed" },
          drivetrain: "AWD",
          fuel_economy: { city_mpl: 15, highway_mpl: 22 },
        },
        dimensions_and_weight: {
          length: "4850 mm",
          width: "1954 mm",
          height: "1405 mm",
          wheelbase: "2851 mm",
          kerb_weight: "2165 kg",
        },
        safety_features: [
          "City Specification",
          "Traffic Sign Recognition",
          "Top View Camera",
          "Airbags",
        ],
        colors: { exterior: "St. James Red", interior: "Hotspur" },
      },
    },
    {
      PORSHE: {
        vehicle_info: {
          brand: "Porsche",
          model: "911 Carrera",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/911/11757/1762933836560/side-view-(left)-90.jpg",
          year: 2026,
          body_style: "Coupe",
        },
        technical_specifications: {
          engine: {
            type: "Twin-Turbo Boxer 6",
            displacement: "3.0-litre",
            power: "388 hp",
            torque: "331 lb-ft",
          },
          transmission: { type: "PDK Dual-Clutch", gears: "8-speed" },
          drivetrain: "RWD",
          fuel_economy: { city_mpl: 18, highway_mpl: 24 },
        },
        dimensions_and_weight: {
          length: "4519 mm",
          width: "1852 mm",
          height: "1298 mm",
          wheelbase: "2450 mm",
          kerb_weight: "1505 kg",
        },
        safety_features: [
          "Porsche Wet Mode",
          "Warn and Brake Assist",
          "ParkAssist",
          "Airbags",
        ],
        colors: { exterior: "Guards Red", interior: "Black" },
      },
    },
    {
      MERSEDS_BENZ: {
        vehicle_info: {
          brand: "Mercedes-Benz",
          model: "E-Class",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/E-Class/9790/1763471140336/front-left-side-47.jpg",
          year: 2026,
          body_style: "Sedan",
        },
        technical_specifications: {
          engine: {
            type: "Turbocharged Inline-4 Mild Hybrid",
            displacement: "2.0-litre",
            power: "255 hp",
            torque: "295 lb-ft",
          },
          transmission: { type: "9G-TRONIC Automatic", gears: "9-speed" },
          drivetrain: "AWD (4MATIC)",
          fuel_economy: { city_mpl: 24, highway_mpl: 33 },
        },
        dimensions_and_weight: {
          length: "4949 mm",
          width: "1880 mm",
          height: "1468 mm",
          wheelbase: "2961 mm",
          kerb_weight: "1825 kg",
        },
        safety_features: [
          "Active Brake Assist",
          "ATTENTION ASSIST",
          "PRE-SAFE",
          "Airbags",
        ],
        colors: {
          exterior: "Obsidian Black Metallic",
          interior: "Macchiato Beige",
        },
      },
    },
    {
      JAGUAR: {
        vehicle_info: {
          brand: "Jaguar",
          model: "F-TYPE",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Jaguar/F-Pace/10644/1755774688332/front-left-side-47.jpg",
          year: 2026,
          body_style: "Coupe",
        },
        technical_specifications: {
          engine: {
            type: "Supercharged V8",
            displacement: "5.0-litre",
            power: "444 hp",
            torque: "428 lb-ft",
          },
          transmission: { type: "Automatic", gears: "8-speed" },
          drivetrain: "RWD",
          fuel_economy: { city_mpl: 17, highway_mpl: 24 },
        },
        dimensions_and_weight: {
          length: "4470 mm",
          width: "1923 mm",
          height: "1311 mm",
          wheelbase: "2622 mm",
          kerb_weight: "1660 kg",
        },
        safety_features: [
          "Emergency Braking",
          "Lane Keep Assist",
          "Traffic Sign Recognition",
          "Airbags",
        ],
        colors: { exterior: "British Racing Green", interior: "Tan" },
      },
    },
    {
      ASTON_MARTIN: {
        vehicle_info: {
          brand: "Aston Martin",
          model: "Vantage",
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/930x620/Aston-Martin/Vantage/13726/1785919537118/grille-97.jpg",
          year: 2026,
          body_style: "Coupe",
        },
        technical_specifications: {
          engine: {
            type: "Twin-Turbo V8",
            displacement: "4.0-litre",
            power: "656 hp",
            torque: "590 lb-ft",
          },
          transmission: { type: "Automatic", gears: "8-speed" },
          drivetrain: "RWD",
          fuel_economy: { city_mpl: 15, highway_mpl: 22 },
        },
        dimensions_and_weight: {
          length: "4495 mm",
          width: "1940 mm",
          height: "1275 mm",
          wheelbase: "2705 mm",
          kerb_weight: "1605 kg",
        },
        safety_features: [
          "Forward Collision Warning",
          "Autonomous Emergency Braking",
          "Blind Spot Monitoring",
          "Airbags",
        ],
        colors: {
          exterior: "Aston Martin Racing Green",
          interior: "Onyx Black",
        },
      },
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server Initate on port http://localhost:${PORT}`);
});
