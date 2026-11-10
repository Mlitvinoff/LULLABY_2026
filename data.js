var APP_DATA = {
  "scenes": [
    {
      "id": "0-queue-entrance",
      "name": "Queue Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02664092509973237,
          "pitch": 0.16401991442150532,
          "rotation": 0,
          "target": "2-queue-p2"
        },
        {
          "yaw": 1.0028598323252176,
          "pitch": 0.18733774701066608,
          "rotation": 4.71238898038469,
          "target": "1-queue-p1"
        },
        {
          "yaw": -1.5994116763445003,
          "pitch": -0.1698156932772985,
          "rotation": 2.356194490192345,
          "target": "76-exit-pathway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-queue-p1",
      "name": "Queue P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09347714699443976,
          "pitch": 0.17489170550806143,
          "rotation": 0.7853981633974483,
          "target": "2-queue-p2"
        },
        {
          "yaw": -1.7870607130443155,
          "pitch": 0.1724233217673703,
          "rotation": 2.356194490192345,
          "target": "0-queue-entrance"
        },
        {
          "yaw": 0.3227143499573426,
          "pitch": 0.0981169635598782,
          "rotation": 0.7853981633974483,
          "target": "3-gangway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-queue-p2",
      "name": "Queue P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.053306493321009896,
          "pitch": 0.1061617882199748,
          "rotation": 0,
          "target": "3-gangway"
        },
        {
          "yaw": 3.0887231406113482,
          "pitch": 0.12245370601801753,
          "rotation": 3.141592653589793,
          "target": "0-queue-entrance"
        },
        {
          "yaw": 2.37218593023805,
          "pitch": 0.0886902700692982,
          "rotation": 3.141592653589793,
          "target": "1-queue-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-gangway",
      "name": "Gangway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.0809624636159993,
        "pitch": 0.004328195665532775,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.054541119030140806,
          "pitch": 0.23614635692999109,
          "rotation": 3.141592653589793,
          "target": "2-queue-p2"
        },
        {
          "yaw": 3.101671198961572,
          "pitch": 0.013233287867361554,
          "rotation": 0,
          "target": "4-ex-hall-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ex-hall-p1",
      "name": "Ex Hall P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.010921626165366405,
        "pitch": 0.22573386955765784,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.028919406006189,
          "pitch": 0.2683015751992155,
          "rotation": 3.141592653589793,
          "target": "3-gangway"
        },
        {
          "yaw": 0.09200287704481624,
          "pitch": 0.5421784037368713,
          "rotation": 1.5707963267948966,
          "target": "5-ex-hall-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ex-hall-p2",
      "name": "Ex Hall P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.5183436296776902,
        "pitch": 0.08720429613484271,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.040794280508564,
          "pitch": 0.08472867121668415,
          "rotation": 3.141592653589793,
          "target": "4-ex-hall-p1"
        },
        {
          "yaw": 1.5201900228825291,
          "pitch": 0.15571299311488573,
          "rotation": 5.497787143782138,
          "target": "6-ex-hall-p3"
        },
        {
          "yaw": -0.06333409410243718,
          "pitch": 0.19085019136425885,
          "rotation": 0,
          "target": "10-ex-hall-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ex-hall-p3",
      "name": "Ex Hall P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6489920903632758,
        "pitch": 0.05708901872239025,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.7169225470334499,
          "pitch": 0.036262086266670934,
          "rotation": 16.493361431346422,
          "target": "7-ex-hall-p4"
        },
        {
          "yaw": 0.14977957606756398,
          "pitch": 0.02014889844523715,
          "rotation": 3.9269908169872414,
          "target": "8-ex-hall-p5"
        },
        {
          "yaw": -1.7178865388565203,
          "pitch": 0.1425269546227277,
          "rotation": 3.141592653589793,
          "target": "5-ex-hall-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-ex-hall-p4",
      "name": "Ex Hall P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.143871988246996,
        "pitch": 0.08842961700271701,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.1943862794799607,
          "pitch": 0.16672138413354176,
          "rotation": 2.356194490192345,
          "target": "6-ex-hall-p3"
        },
        {
          "yaw": 1.2875439468770047,
          "pitch": 0.014495084979058603,
          "rotation": 3.9269908169872414,
          "target": "8-ex-hall-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ex-hall-p5",
      "name": "Ex Hall P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.5632628563117663,
        "pitch": 0.14858426759763788,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.6937953276023698,
          "pitch": 0.17248481193527354,
          "rotation": 0,
          "target": "9-ex-hall-p6"
        },
        {
          "yaw": -1.4282661204625686,
          "pitch": 0.051262699446509075,
          "rotation": 3.141592653589793,
          "target": "7-ex-hall-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ex-hall-p6",
      "name": "Ex Hall P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5467856736118932,
        "pitch": 0.2446174954430287,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.738520617911721,
          "pitch": 0.14046582871938362,
          "rotation": 3.141592653589793,
          "target": "8-ex-hall-p5"
        },
        {
          "yaw": -0.9135922761817596,
          "pitch": 0.5359432408786642,
          "rotation": 0.7853981633974483,
          "target": "10-ex-hall-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ex-hall-p7",
      "name": "Ex Hall P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.5650437336118879,
        "pitch": 0.23914779902056083,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.026525191643596457,
          "pitch": 0.14127309329562188,
          "rotation": 3.141592653589793,
          "target": "5-ex-hall-p2"
        },
        {
          "yaw": 1.6194323685573835,
          "pitch": 0.36117270772854937,
          "rotation": 5.497787143782138,
          "target": "11-maze-entrance"
        },
        {
          "yaw": -2.395799411175277,
          "pitch": 0.37767483210672204,
          "rotation": 3.9269908169872414,
          "target": "9-ex-hall-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-maze-entrance",
      "name": "Maze Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.20472463974814303,
        "pitch": 0.3560449280027935,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.995453943732402,
          "pitch": 0.58946611663713,
          "rotation": 3.141592653589793,
          "target": "10-ex-hall-p7"
        },
        {
          "yaw": 0.23471800479824445,
          "pitch": 0.3645080145100863,
          "rotation": 2.356194490192345,
          "target": "12-pool-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pool-p1",
      "name": "Pool P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.6284262789701884,
        "pitch": 0.4063701585168751,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.5324446353628485,
          "pitch": 0.8346932992159797,
          "rotation": 5.497787143782138,
          "target": "13-pool-p2"
        },
        {
          "yaw": 1.1741523358792616,
          "pitch": 0.7949160807176519,
          "rotation": 2.356194490192345,
          "target": "11-maze-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pool-p2",
      "name": "Pool P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.03225964020273864,
        "pitch": 0.25407089522529525,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.1657463903626244,
          "pitch": 0.5147137209233286,
          "rotation": 0.7853981633974483,
          "target": "14-pool-p3"
        },
        {
          "yaw": -2.5289618061776693,
          "pitch": 0.5724415355603867,
          "rotation": 3.141592653589793,
          "target": "12-pool-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pool-p3",
      "name": "Pool P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.0918653146806356,
        "pitch": 0.21086155930261619,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.1846124932917501,
          "pitch": 0.4512571897741431,
          "rotation": 5.497787143782138,
          "target": "15-pathway-1-p1"
        },
        {
          "yaw": -2.828503666700959,
          "pitch": 0.38884238217201883,
          "rotation": 3.141592653589793,
          "target": "13-pool-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pathway-1-p1",
      "name": "Pathway 1 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.021125361857261993,
        "pitch": 0.2454290280407534,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.431284069219487,
          "pitch": 0.45173396646426056,
          "rotation": 3.141592653589793,
          "target": "14-pool-p3"
        },
        {
          "yaw": 0.035697649637477014,
          "pitch": 0.5254082262430941,
          "rotation": 0,
          "target": "16-pathway-1-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pathway-1-p2",
      "name": "Pathway 1 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.027373083550104482,
        "pitch": 0.2618562174911432,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.01276695559871932,
          "pitch": 0.19421720951686083,
          "rotation": 4.71238898038469,
          "target": "17-pathway-1-p3"
        },
        {
          "yaw": 3.124698863614224,
          "pitch": 0.5286455829661456,
          "rotation": 3.141592653589793,
          "target": "15-pathway-1-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-pathway-1-p3",
      "name": "Pathway 1 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.11663100688682171,
        "pitch": 0.053579576544105834,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.7047145617171697,
          "pitch": 0.30385378225301096,
          "rotation": 3.141592653589793,
          "target": "16-pathway-1-p2"
        },
        {
          "yaw": -0.016327646871301837,
          "pitch": 0.2396182277972656,
          "rotation": 0,
          "target": "18-pathway-1-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-pathway-1-p4",
      "name": "Pathway 1 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.017370575493778517,
        "pitch": 0.1365602649901554,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.097130794907022,
          "pitch": 0.2173732389091505,
          "rotation": 3.141592653589793,
          "target": "17-pathway-1-p3"
        },
        {
          "yaw": 0.02858960983958525,
          "pitch": 0.25542395684616004,
          "rotation": 7.853981633974483,
          "target": "19-pathway-1-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-pathway-1-p5",
      "name": "Pathway 1 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.039709969982883564,
        "pitch": -0.044943093239210086,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.5954627672397077,
          "pitch": 0.16847263217062292,
          "rotation": 3.141592653589793,
          "target": "18-pathway-1-p4"
        },
        {
          "yaw": 0.02057945535579897,
          "pitch": -0.39519816249703865,
          "rotation": 0.7853981633974483,
          "target": "20-pathway-2-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pathway-2-p1",
      "name": "Pathway 2 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.1166156145603523,
        "pitch": 0.15900320902030884,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.3011451177267226,
          "pitch": 0.74522692805715,
          "rotation": 3.141592653589793,
          "target": "19-pathway-1-p5"
        },
        {
          "yaw": -0.08044092819653237,
          "pitch": 0.468346363126928,
          "rotation": 5.497787143782138,
          "target": "21-pathway-2-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-pathway-2-p2",
      "name": "Pathway 2 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.22209716798379375,
        "pitch": 0.1728400638619405,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.721999160778715,
          "pitch": 0.4635400299818784,
          "rotation": 3.9269908169872414,
          "target": "20-pathway-2-p1"
        },
        {
          "yaw": -0.6592032261044203,
          "pitch": 0.09509183391160292,
          "rotation": 1.5707963267948966,
          "target": "22-pathway-2-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-pathway-2-p3",
      "name": "Pathway 2 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.19355925702917176,
        "pitch": 0.3353044467598938,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.1865704012465876,
          "pitch": 0.2995221569052724,
          "rotation": 3.9269908169872414,
          "target": "21-pathway-2-p2"
        },
        {
          "yaw": -0.22048583661798382,
          "pitch": 0.4369698214535873,
          "rotation": 4.71238898038469,
          "target": "23-pathway-2-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-pathway-2-p4",
      "name": "Pathway 2 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.42433910979681144,
        "pitch": 0.22987473357840216,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.777770969396844,
          "pitch": 0.2703497209764869,
          "rotation": 6.283185307179586,
          "target": "24-pathway-2-p5"
        },
        {
          "yaw": -1.793459647021752,
          "pitch": 0.4061986485646294,
          "rotation": 3.141592653589793,
          "target": "22-pathway-2-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-pathway-2-p5",
      "name": "Pathway 2 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.824499467186353,
        "pitch": 0.3377881796742308,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.2227910534759108,
          "pitch": 0.22571126543543052,
          "rotation": 10.995574287564278,
          "target": "23-pathway-2-p4"
        },
        {
          "yaw": -0.9708339244910391,
          "pitch": 0.49003559878586245,
          "rotation": 1.5707963267948966,
          "target": "25-pathway-2-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-pathway-2-p6",
      "name": "Pathway 2 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.04094492794962612,
        "pitch": 0.15901035619541304,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.5573497096352709,
          "pitch": 0.49350847441810863,
          "rotation": 3.141592653589793,
          "target": "24-pathway-2-p5"
        },
        {
          "yaw": -1.1919117661580163,
          "pitch": 0.2978846341687138,
          "rotation": 0,
          "target": "26-pathway-2-p7"
        },
        {
          "yaw": -0.08513025000047136,
          "pitch": 0.23865105327899094,
          "rotation": 0,
          "target": "27-bridge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-pathway-2-p7",
      "name": "Pathway 2 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.897130563992828,
          "pitch": 0.18807323819496702,
          "rotation": 4.71238898038469,
          "target": "25-pathway-2-p6"
        },
        {
          "yaw": 0.26210385827426386,
          "pitch": 0.12886749578505174,
          "rotation": 0,
          "target": "35-pathway-4-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-bridge",
      "name": "Bridge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.10174950436575969,
        "pitch": 0.10197403277749473,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0104269127332692,
          "pitch": 0.16590523566573445,
          "rotation": 3.141592653589793,
          "target": "25-pathway-2-p6"
        },
        {
          "yaw": -0.11837354645014209,
          "pitch": 0.17365421464659114,
          "rotation": 4.71238898038469,
          "target": "28-pathway-3-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-pathway-3-p1",
      "name": "Pathway 3 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.15882148729378365,
        "pitch": 0.1503684890108854,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.3974120987457912,
          "pitch": 0.23295691689482467,
          "rotation": 3.141592653589793,
          "target": "27-bridge"
        },
        {
          "yaw": 0.2085842557266684,
          "pitch": 0.40280009030102626,
          "rotation": 0,
          "target": "29-pathway-3-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-pathway-3-p2",
      "name": "Pathway 3 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.2072130725733352,
        "pitch": 0.13482277048749758,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.945180405646644,
          "pitch": 0.4222365050547907,
          "rotation": 3.141592653589793,
          "target": "28-pathway-3-p1"
        },
        {
          "yaw": 0.2507369276754119,
          "pitch": 0.2931351773950652,
          "rotation": 0,
          "target": "30-pathway-3-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-pathway-3-p3",
      "name": "Pathway 3 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.44915345205351187,
        "pitch": 0.18312269103253342,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.013589076823319,
          "pitch": 0.29191706266161077,
          "rotation": 3.141592653589793,
          "target": "29-pathway-3-p2"
        },
        {
          "yaw": -0.48552275096905717,
          "pitch": 0.44854456279544586,
          "rotation": 5.497787143782138,
          "target": "31-pathway-3-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-pathway-3-p4",
      "name": "Pathway 3 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.8310397489342911,
        "pitch": 0.1970305318772425,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.79436903818905,
          "pitch": 0.4285309995997153,
          "rotation": 3.141592653589793,
          "target": "30-pathway-3-p3"
        },
        {
          "yaw": -0.9483452163448547,
          "pitch": 0.5603498009808199,
          "rotation": 5.497787143782138,
          "target": "32-pathway-3-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-pathway-3-p5",
      "name": "Pathway 3 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.15633517944404396,
        "pitch": 0.1434549952632569,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.932275660268953,
          "pitch": 0.2896660768794703,
          "rotation": 3.9269908169872414,
          "target": "31-pathway-3-p4"
        },
        {
          "yaw": -0.23252163684027138,
          "pitch": 0.10826946210091393,
          "rotation": 4.71238898038469,
          "target": "33-pathway-3-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-pathway-3-p6",
      "name": "Pathway 3 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.01861133088619127,
        "pitch": 0.18402492126306313,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.551341656533884,
          "pitch": 0.7416804381991504,
          "rotation": 3.9269908169872414,
          "target": "32-pathway-3-p5"
        },
        {
          "yaw": 0.009318463000704824,
          "pitch": 0.3366195490045989,
          "rotation": 0,
          "target": "34-pathway-3-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-pathway-3-p7",
      "name": "Pathway 3 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0037222661772382537,
        "pitch": 0.19184945149664934,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.071170170006967,
          "pitch": 0.323817838357062,
          "rotation": 3.141592653589793,
          "target": "33-pathway-3-p6"
        },
        {
          "yaw": 0.3031140083779462,
          "pitch": 0.12745726766279475,
          "rotation": 2.356194490192345,
          "target": "35-pathway-4-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-pathway-4-p1",
      "name": "Pathway 4 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.7811976847383804,
        "pitch": 0.13279968853128565,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.6282482127746896,
          "pitch": 0.6983207746734124,
          "rotation": 2.356194490192345,
          "target": "34-pathway-3-p7"
        },
        {
          "yaw": 2.4553494987048,
          "pitch": 0.08867533137731343,
          "rotation": 3.141592653589793,
          "target": "26-pathway-2-p7"
        },
        {
          "yaw": -0.7188395052374226,
          "pitch": 0.4118569952945528,
          "rotation": 0,
          "target": "36-pathway-4-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-pathway-4-p2",
      "name": "Pathway 4 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.03971208238700896,
        "pitch": 0.05876469685481922,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.1213824519752205,
          "pitch": 0.44743696568290225,
          "rotation": 3.141592653589793,
          "target": "35-pathway-4-p1"
        },
        {
          "yaw": 0.06399941325941683,
          "pitch": 0.23510629420044538,
          "rotation": 6.283185307179586,
          "target": "38-pathway-4-p4"
        },
        {
          "yaw": -1.7314544198933248,
          "pitch": 0.2785889032729081,
          "rotation": 1.5707963267948966,
          "target": "37-pathway-4-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-pathway-4-p3",
      "name": "Pathway 4 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.03226438116213082,
        "pitch": 0.2246885467978732,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.00229187599136,
          "pitch": 0.251685701861458,
          "rotation": 4.71238898038469,
          "target": "36-pathway-4-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-pathway-4-p4",
      "name": "Pathway 4 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.10174194217786692,
        "pitch": 0.0276539749905087,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.979950653613022,
          "pitch": 0.2364125807768538,
          "rotation": 3.141592653589793,
          "target": "36-pathway-4-p2"
        },
        {
          "yaw": -0.12038036783426165,
          "pitch": 0.33556857962157594,
          "rotation": 0,
          "target": "39-pathway-4-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-pathway-4-p5",
      "name": "Pathway 4 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.09464658491763,
          "pitch": 0.330464912075044,
          "rotation": 3.141592653589793,
          "target": "38-pathway-4-p4"
        },
        {
          "yaw": -0.13676825805400838,
          "pitch": 0.25931951742090575,
          "rotation": 0,
          "target": "40-pathway-4-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-pathway-4-p6",
      "name": "Pathway 4 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.021092841671020324,
        "pitch": 0.07604843122389227,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0017692775620874,
          "pitch": 0.2219462288224232,
          "rotation": 3.141592653589793,
          "target": "39-pathway-4-p5"
        },
        {
          "yaw": -0.12048435130922286,
          "pitch": 0.09580015497768812,
          "rotation": 11.780972450961727,
          "target": "41-pathway-4-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-pathway-4-p7",
      "name": "Pathway 4 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.011057355418223835,
        "pitch": 0.16133819431344598,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.9529923391200086,
          "pitch": 0.1984033934959264,
          "rotation": 4.71238898038469,
          "target": "40-pathway-4-p6"
        },
        {
          "yaw": 0.5677047943701048,
          "pitch": 0.45302438928593247,
          "rotation": 5.497787143782138,
          "target": "42-pathway-4-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-pathway-4-p8",
      "name": "Pathway 4 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.01985208627860402,
        "pitch": 0.20221969211808322,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.7868294214523583,
          "pitch": 0.29177657462637363,
          "rotation": 3.141592653589793,
          "target": "41-pathway-4-p7"
        },
        {
          "yaw": -0.04102084220816948,
          "pitch": 0.34633606820368534,
          "rotation": 0.7853981633974483,
          "target": "43-pathway-4-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-pathway-4-p9",
      "name": "Pathway 4 P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.17124588839728538,
        "pitch": 0.19706472226016203,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.1795328582239275,
          "pitch": 0.3176685463860984,
          "rotation": 18.84955592153877,
          "target": "44-pathway-4-p10"
        },
        {
          "yaw": 1.3720885015618673,
          "pitch": 0.18543195783943034,
          "rotation": 3.9269908169872414,
          "target": "42-pathway-4-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-pathway-4-p10",
      "name": "Pathway 4 P10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.4665318960539153,
        "pitch": 0.1348240889159129,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.5421715299750272,
          "pitch": 0.178862943409424,
          "rotation": 6.283185307179586,
          "target": "45-pathway-4-p11"
        },
        {
          "yaw": -2.0126959789008474,
          "pitch": 0.12840422057305645,
          "rotation": 8.63937979737193,
          "target": "43-pathway-4-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-pathway-4-p11",
      "name": "Pathway 4 P11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.11911251767164899,
        "pitch": 0.15895568889044043,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.3471721793489166,
          "pitch": 0.3592042842633347,
          "rotation": 3.141592653589793,
          "target": "44-pathway-4-p10"
        },
        {
          "yaw": 0.0798466200807244,
          "pitch": 0.3470417498410807,
          "rotation": 0,
          "target": "46-pathway-4-p12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-pathway-4-p12",
      "name": "Pathway 4 P12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.1418484220637133,
        "pitch": 0.22699080042958641,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0336448618368674,
          "pitch": 0.3395234916702048,
          "rotation": 3.141592653589793,
          "target": "45-pathway-4-p11"
        },
        {
          "yaw": -0.21159670453195645,
          "pitch": 0.2539345579410046,
          "rotation": 0,
          "target": "47-pathway-5-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-pathway-5-p1",
      "name": "Pathway 5 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.313915745941884,
        "pitch": 0.2143183061764251,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.9538669412245788,
          "pitch": 0.3687367174913945,
          "rotation": 3.141592653589793,
          "target": "46-pathway-4-p12"
        },
        {
          "yaw": 0.30840532884162997,
          "pitch": 0.28104945023795125,
          "rotation": 0.7853981633974483,
          "target": "48-pathway-5-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-pathway-5-p2",
      "name": "Pathway 5 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.40945240468619737,
        "pitch": 0.18147921087519947,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.4766481419376074,
          "pitch": 0.25614445795139673,
          "rotation": 3.141592653589793,
          "target": "47-pathway-5-p1"
        },
        {
          "yaw": -0.2730129580334104,
          "pitch": 0.16355612798455255,
          "rotation": 4.71238898038469,
          "target": "49-pathway-5-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-pathway-5-p3",
      "name": "Pathway 5 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.5595924978968618,
        "pitch": 0.16765222337995134,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.9672416250661335,
          "pitch": 0.3822192583514674,
          "rotation": 3.141592653589793,
          "target": "48-pathway-5-p2"
        },
        {
          "yaw": 0.7207884846981791,
          "pitch": 0.12383838623150467,
          "rotation": 2.356194490192345,
          "target": "50-pathway-5-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-pathway-5-p4",
      "name": "Pathway 5 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.01364591659303116,
        "pitch": 0.2627127624098211,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.42801680217489846,
          "pitch": 0.22429057263385488,
          "rotation": 3.141592653589793,
          "target": "49-pathway-5-p3"
        },
        {
          "yaw": 0.006917974148944239,
          "pitch": 0.4552467611488229,
          "rotation": 0.7853981633974483,
          "target": "51-pathway-5-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-pathway-5-p5",
      "name": "Pathway 5 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.3573375530149434,
        "pitch": 0.23851553429313022,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.44202418432359813,
          "pitch": 0.5785106608157164,
          "rotation": 5.497787143782138,
          "target": "53-pathway-5-p7"
        },
        {
          "yaw": 1.9502446169210685,
          "pitch": 0.2293235250450536,
          "rotation": 3.141592653589793,
          "target": "50-pathway-5-p4"
        },
        {
          "yaw": -2.5950848349557027,
          "pitch": 0.47218137664863136,
          "rotation": 0,
          "target": "52-pathway-5-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-pathway-5-p6",
      "name": "Pathway 5 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.0454329127609068,
        "pitch": 0.17533811203887595,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.1295285796534138,
          "pitch": 0.44256948542779995,
          "rotation": 5.497787143782138,
          "target": "51-pathway-5-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-pathway-5-p7",
      "name": "Pathway 5 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6854382962272787,
        "pitch": 0.10543077965130898,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.7024107208316899,
          "pitch": 0.35841742819503253,
          "rotation": 4.71238898038469,
          "target": "54-pathway-5-p8"
        },
        {
          "yaw": -1.695010937408579,
          "pitch": 0.518134644615726,
          "rotation": 3.141592653589793,
          "target": "51-pathway-5-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-pathway-5-p8",
      "name": "Pathway 5 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.14516838091231676,
        "pitch": 0.13481312807872747,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.05570461859102771,
          "pitch": 0.35357534718023587,
          "rotation": 0,
          "target": "55-teddy-factory-p1"
        },
        {
          "yaw": -1.7136714207391037,
          "pitch": 0.4026177009337282,
          "rotation": 3.141592653589793,
          "target": "53-pathway-5-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-teddy-factory-p1",
      "name": "Teddy Factory P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.08809363286131955,
        "pitch": 0.038024215611944356,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.03625538283927732,
          "pitch": 0.3059981800482561,
          "rotation": 0,
          "target": "56-teddy-factory-p2"
        },
        {
          "yaw": 3.057872962183465,
          "pitch": 0.3946382592704367,
          "rotation": 3.141592653589793,
          "target": "54-pathway-5-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-teddy-factory-p2",
      "name": "Teddy Factory P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.134006448770613,
          "pitch": 0.39636070485650166,
          "rotation": 3.141592653589793,
          "target": "55-teddy-factory-p1"
        },
        {
          "yaw": 1.5874203945484844,
          "pitch": 0.23213695948983215,
          "rotation": 1.5707963267948966,
          "target": "57-teddy-factory-p3"
        },
        {
          "yaw": 0.03692272873903768,
          "pitch": -0.10826704731119463,
          "rotation": 1.5707963267948966,
          "target": "59-pathway-6-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-teddy-factory-p3",
      "name": "Teddy Factory P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.28668066934829284,
        "pitch": 0.14363935531929428,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.3859984926141724,
          "pitch": 0.29298146053404395,
          "rotation": 1.5707963267948966,
          "target": "58-teddy-factory-p4"
        },
        {
          "yaw": 1.1355067755727895,
          "pitch": 0.3174414352177237,
          "rotation": 1.5707963267948966,
          "target": "56-teddy-factory-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-teddy-factory-p4",
      "name": "Teddy Factory P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.4355539890218907,
        "pitch": 0.25752764209910417,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.2891485229260784,
          "pitch": 0.08902789701114955,
          "rotation": 3.141592653589793,
          "target": "57-teddy-factory-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-pathway-6-p1",
      "name": "Pathway 6 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.3104910112628474,
        "pitch": 0.2085521154812895,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.5922284207204331,
          "pitch": 0.4056338671897599,
          "rotation": 7.0685834705770345,
          "target": "60-pathway-6-p2"
        },
        {
          "yaw": 1.7903352608909646,
          "pitch": 0.5218715810715899,
          "rotation": 3.141592653589793,
          "target": "56-teddy-factory-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-pathway-6-p2",
      "name": "Pathway 6 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.1315200715957765,
        "pitch": 0.22815600987783924,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.1107102234940864,
          "pitch": 0.2035673591529381,
          "rotation": 2.356194490192345,
          "target": "59-pathway-6-p1"
        },
        {
          "yaw": 0.31328502721879836,
          "pitch": 0.5085739304048875,
          "rotation": 2.356194490192345,
          "target": "61-pathway-6-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-pathway-6-p3",
      "name": "Pathway 6 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.0896334562025958,
        "pitch": 0.18698840120534932,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.19581717657403,
          "pitch": 0.4619821468167533,
          "rotation": 0.7853981633974483,
          "target": "62-pathway-6-p4"
        },
        {
          "yaw": -2.7193213171634802,
          "pitch": 0.5042439820322215,
          "rotation": 2.356194490192345,
          "target": "60-pathway-6-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-pathway-6-p4",
      "name": "Pathway 6 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.12283478384886237,
        "pitch": 0.2125899327395242,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.5380219563333277,
          "pitch": 0.12734280193101455,
          "rotation": 1.5707963267948966,
          "target": "74-maze-exit"
        },
        {
          "yaw": -1.943349084094459,
          "pitch": 0.2774212244656269,
          "rotation": 3.141592653589793,
          "target": "61-pathway-6-p3"
        },
        {
          "yaw": 0.06175370936245983,
          "pitch": 0.29123859571165234,
          "rotation": 5.497787143782138,
          "target": "63-speakeasy-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-speakeasy-p1",
      "name": "Speakeasy P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.03846695942922196,
        "pitch": 0.22296017336096519,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.013648316414258232,
          "pitch": 0.2984201900133989,
          "rotation": 0,
          "target": "64-speakeasy-p2"
        },
        {
          "yaw": 2.195984360617307,
          "pitch": 0.219895667883943,
          "rotation": 3.9269908169872414,
          "target": "62-pathway-6-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-speakeasy-p2",
      "name": "Speakeasy P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.32383715741980623,
        "pitch": 0.1209861405834598,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.804709170810688,
          "pitch": 0.216970707917282,
          "rotation": 3.141592653589793,
          "target": "63-speakeasy-p1"
        },
        {
          "yaw": -0.3154126217524258,
          "pitch": 0.2716877452312758,
          "rotation": 0,
          "target": "65-speakeasy-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-speakeasy-p3",
      "name": "Speakeasy P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.2556014406679772,
        "pitch": 0.13136450216486573,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.8885488431835906,
          "pitch": 0.14738880701542634,
          "rotation": 3.141592653589793,
          "target": "64-speakeasy-p2"
        },
        {
          "yaw": -0.25560064634909274,
          "pitch": 0.14367792792996426,
          "rotation": 1.5707963267948966,
          "target": "66-speakeasy-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-speakeasy-p4",
      "name": "Speakeasy P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.5038184804936456,
        "pitch": 0.28642796186875685,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.5119369189982361,
          "pitch": 0.24548393815799407,
          "rotation": 0,
          "target": "67-speakeasy-p5"
        },
        {
          "yaw": 3.035353787985465,
          "pitch": 0.12267691600141006,
          "rotation": 3.141592653589793,
          "target": "65-speakeasy-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "67-speakeasy-p5",
      "name": "Speakeasy P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.31143145272045203,
        "pitch": 0.12962800776799632,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.788596652230517,
          "pitch": 0.25827631293129727,
          "rotation": 3.141592653589793,
          "target": "66-speakeasy-p4"
        },
        {
          "yaw": 0.3561858095460906,
          "pitch": 0.4410016985466534,
          "rotation": 0.7853981633974483,
          "target": "68-speakeasy-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-speakeasy-p6",
      "name": "Speakeasy P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.9263265038875339,
        "pitch": 0.26608299358501775,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.3591091317682213,
          "pitch": 0.4938957672957187,
          "rotation": 0,
          "target": "69-speakeasy-p7"
        },
        {
          "yaw": -2.787679705283045,
          "pitch": 0.47099996226367935,
          "rotation": 3.141592653589793,
          "target": "67-speakeasy-p5"
        },
        {
          "yaw": 1.00413748963026,
          "pitch": 0.29283739673908826,
          "rotation": 2.356194490192345,
          "target": "70-speakeasy-p8"
        },
        {
          "yaw": 1.7456349542146175,
          "pitch": 0.07289967717587231,
          "rotation": 0,
          "target": "71-speakeasy-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "69-speakeasy-p7",
      "name": "Speakeasy P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07196381275995378,
        "pitch": 0.12444288745727583,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.004062465140012,
          "pitch": 0.37862362072998934,
          "rotation": 5.497787143782138,
          "target": "68-speakeasy-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "70-speakeasy-p8",
      "name": "Speakeasy P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.2344867471771543,
        "pitch": 0.10370240621441162,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.273686870810077,
          "pitch": 0.12453858255161698,
          "rotation": 4.71238898038469,
          "target": "71-speakeasy-p9"
        },
        {
          "yaw": -2.863868567337862,
          "pitch": 0.38510983511276464,
          "rotation": 8.63937979737193,
          "target": "68-speakeasy-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "71-speakeasy-p9",
      "name": "Speakeasy P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.2344824557597125,
        "pitch": 0.10199205075683793,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.4390090809157705,
          "pitch": 0.23858776371328894,
          "rotation": 3.141592653589793,
          "target": "70-speakeasy-p8"
        },
        {
          "yaw": 2.8474333510518903,
          "pitch": 0.15170247603075993,
          "rotation": 1.5707963267948966,
          "target": "68-speakeasy-p6"
        },
        {
          "yaw": -0.2237446549837614,
          "pitch": 0.22816212738085895,
          "rotation": 0,
          "target": "72-speakeasy-p10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "72-speakeasy-p10",
      "name": "Speakeasy P10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.04223212873105453,
        "pitch": 0.07604843122389404,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0934756499633007,
          "pitch": 0.2310878457026604,
          "rotation": 3.141592653589793,
          "target": "71-speakeasy-p9"
        },
        {
          "yaw": -0.02136653114362197,
          "pitch": 0.2546625890176131,
          "rotation": 0,
          "target": "73-speakeasy-p11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "73-speakeasy-p11",
      "name": "Speakeasy P11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.29778129417912425,
        "pitch": 0.07777680466080206,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.851978677298561,
          "pitch": 0.3556063581988642,
          "rotation": 3.141592653589793,
          "target": "72-speakeasy-p10"
        },
        {
          "yaw": 0.44826581734187165,
          "pitch": 0.04760733146386187,
          "rotation": 4.71238898038469,
          "target": "74-maze-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "74-maze-exit",
      "name": "Maze Exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.14764989169714227,
        "pitch": 0.11752939370965088,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.17871956161350866,
          "pitch": 0.14003296304446522,
          "rotation": 0,
          "target": "75-exit-gangway"
        },
        {
          "yaw": 3.0276368167562193,
          "pitch": 0.1592896285866896,
          "rotation": 3.141592653589793,
          "target": "62-pathway-6-p4"
        },
        {
          "yaw": -1.8974838508712182,
          "pitch": 0.13469635377666123,
          "rotation": 3.141592653589793,
          "target": "73-speakeasy-p11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "75-exit-gangway",
      "name": "Exit Gangway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.118660782092121,
        "pitch": 0.05218810578574562,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0895684670466332,
          "pitch": 0.2662760744496797,
          "rotation": 0,
          "target": "76-exit-pathway"
        },
        {
          "yaw": 0.015144906046355544,
          "pitch": 0.13336352813355035,
          "rotation": 3.141592653589793,
          "target": "74-maze-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "76-exit-pathway",
      "name": "Exit Pathway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.9297597281825531,
        "pitch": -0.11714511071978428,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.342549809033308,
          "pitch": -0.04119170674626105,
          "rotation": 3.9269908169872414,
          "target": "0-queue-entrance"
        },
        {
          "yaw": 3.058998601391962,
          "pitch": 0.02174865437564577,
          "rotation": 3.141592653589793,
          "target": "75-exit-gangway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LULLABY 2026",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
