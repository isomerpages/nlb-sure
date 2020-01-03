/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"howler.min.js",
            js+"jquery-min.js",
            js+"jquery-ui-1.10.3.custom.min.js",
            js+"utils.js",
            js+"general.js",
            js+"controller.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'house-gin',
                            type: 'image',
                            rect: ['-7px', '-157px', '1037px', '733px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"house-gin.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-37px', '-102px', '1088px', '686px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.70)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'chairs',
                            symbolName: 'chairs',
                            display: 'none',
                            type: 'rect',
                            rect: ['9', '331', '1005', '261', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['27px', '-175px', '972px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Types and Forms of Visuals <br>(Home)<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(0,101,232,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'gin-up-arm-back',
                            type: 'image',
                            rect: ['323px', '338px', '87px', '199px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-up-arm-back.png",'0px','0px'],
                            transform: [[],['-3']]
                        },
                        {
                            id: 'gin-low-arm-back',
                            type: 'image',
                            rect: ['438px', '420px', '67px', '179px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-low-arm-back.png",'0px','0px'],
                            transform: [[],['-40']]
                        },
                        {
                            id: 'gin-body',
                            type: 'image',
                            rect: ['128px', '248px', '254px', '472px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-body.png",'0px','0px']
                        },
                        {
                            id: 'gin-up-arm-front',
                            type: 'image',
                            rect: ['142px', '355px', '82px', '195px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-up-arm-front.png",'0px','0px']
                        },
                        {
                            id: 'gin-low-arm-front',
                            type: 'image',
                            rect: ['239px', '438px', '79px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-low-arm-front.png",'0px','0px'],
                            transform: [[],['-91']]
                        },
                        {
                            id: 'gin-side',
                            type: 'image',
                            rect: ['92px', '38px', '306px', '307px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-side.png",'0px','0px'],
                            transform: [[],['21']]
                        },
                        {
                            id: 'gin-blink2',
                            type: 'image',
                            rect: ['92px', '23px', '306px', '307px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-blink2.png",'0px','0px'],
                            transform: [[],['21']]
                        },
                        {
                            id: 'gin-smile-side',
                            type: 'image',
                            rect: ['92px', '38px', '306px', '307px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-smile-side.png",'0px','0px'],
                            transform: [[],['21']]
                        },
                        {
                            id: 'gin-blink1',
                            type: 'image',
                            rect: ['92px', '38px', '306px', '307px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-blink1.png",'0px','0px'],
                            transform: [[],['21']]
                        },
                        {
                            id: 'gin-smile-front',
                            type: 'image',
                            rect: ['92px', '23px', '306px', '307px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-smile-front.png",'0px','0px'],
                            transform: [[],['13']]
                        },
                        {
                            id: 'library-table',
                            type: 'image',
                            rect: ['128px', '225px', '950px', '371px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"library-table.png",'0px','0px']
                        },
                        {
                            id: 'youtube_site',
                            type: 'image',
                            rect: ['390px', '253px', '407px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"youtube%20site.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['-7px', '-6px', '1048px', '594px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.6392)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'cartoon-vid',
                            symbolName: 'cartoon-vid',
                            display: 'none',
                            type: 'rect',
                            rect: ['391px', '276px', '224', '126', 'auto', 'auto'],
                            userClass: "dropItems"
                        },
                        {
                            id: 'docu-vid',
                            symbolName: 'docu-vid',
                            display: 'none',
                            type: 'rect',
                            rect: ['390px', '142px', '224', '125', 'auto', 'auto'],
                            userClass: "dropItems"
                        },
                        {
                            id: 'gameplay-vid',
                            symbolName: 'gameplay-vid',
                            display: 'none',
                            type: 'rect',
                            rect: ['391px', '409px', '224', '126', 'auto', 'auto'],
                            userClass: "dropItems"
                        },
                        {
                            id: 'music-vid',
                            symbolName: 'music-vid',
                            display: 'none',
                            type: 'rect',
                            rect: ['650px', '275px', '227', '128', 'auto', 'auto'],
                            userClass: "dropItems"
                        },
                        {
                            id: 'trailer-vid',
                            symbolName: 'trailer-vid',
                            display: 'none',
                            type: 'rect',
                            rect: ['650px', '142px', '231', '126', 'auto', 'auto'],
                            userClass: "dropItems"
                        },
                        {
                            id: 'genre-cartoon',
                            display: 'block',
                            type: 'image',
                            rect: ['414px', '457px', '96px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"genre-cartoon.png",'0px','0px'],
                            userClass: "dragItems"
                        },
                        {
                            id: 'genre-docu',
                            display: 'block',
                            type: 'image',
                            rect: ['414px', '420px', '96px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"genre-docu.png",'0px','0px'],
                            userClass: "dragItems"
                        },
                        {
                            id: 'genre-game',
                            display: 'block',
                            type: 'image',
                            rect: ['414px', '383px', '96px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"genre-game.png",'0px','0px'],
                            userClass: "dragItems"
                        },
                        {
                            id: 'genre-music',
                            display: 'block',
                            type: 'image',
                            rect: ['414px', '346px', '96px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"genre-music.png",'0px','0px'],
                            userClass: "dragItems"
                        },
                        {
                            id: 'genre-trailer',
                            display: 'block',
                            type: 'image',
                            rect: ['414px', '309px', '96px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"genre-trailer.png",'0px','0px'],
                            userClass: "dragItems"
                        },
                        {
                            id: 'Rectangle4',
                            display: 'block',
                            type: 'rect',
                            rect: ['118px', '26px', '254px', '532px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.6392)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            display: 'none',
                            type: 'rect',
                            rect: ['-12px', '-12px', '1048px', '608px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.64)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'spark3Copy4',
                            display: 'none',
                            type: 'image',
                            rect: ['726px', '175px', '362px', '404px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spark3.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['145px', '69px', '750px', '384px', 'auto', 'auto'],
                            text: "Some goals of visual messages are to entertain and make <br>us laugh.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [64, "px"], "rgba(255,202,50,1.00)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textShadow: ["rgba(154,102,15,1.00)", 3, 4, 3],
                            transform: [[],[],[],['0.76','0.76']]
                        },
                        {
                            id: 'next-btn',
                            display: 'none',
                            type: 'image',
                            rect: ['793px', '500px', '152px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'instruction',
                            symbolName: 'instruction',
                            display: 'none',
                            type: 'rect',
                            rect: ['234px', '13px', '792', '203', 'auto', 'auto']
                        },
                        {
                            id: 'instruction-btn',
                            display: 'block',
                            type: 'image',
                            rect: ['837px', '24px', '102px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"instruction-btn.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024', '576', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 32326,
                    autoPlay: true,
                    data: [
                        [
                            "eid10966",
                            "rotateZ",
                            6750,
                            11762,
                            "linear",
                            "${gin-blink2}",
                            '13deg',
                            '21deg'
                        ],
                        [
                            "eid11210",
                            "rotateZ",
                            31105,
                            262,
                            "linear",
                            "${gin-blink2}",
                            '21deg',
                            '13deg'
                        ],
                        [
                            "eid11293",
                            "rotateZ",
                            32127,
                            199,
                            "linear",
                            "${gin-blink2}",
                            '13deg',
                            '0deg'
                        ],
                        [
                            "eid10230",
                            "top",
                            4091,
                            409,
                            "linear",
                            "${library-table}",
                            '584px',
                            '225px'
                        ],
                        [
                            "eid11073",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${genre-docu}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11066",
                            "opacity",
                            19368,
                            175,
                            "linear",
                            "${genre-docu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10899",
                            "top",
                            0,
                            4895,
                            "linear",
                            "${house-gin}",
                            '-157px',
                            '-30px'
                        ],
                        [
                            "eid10967",
                            "rotateZ",
                            6750,
                            11762,
                            "linear",
                            "${gin-blink1}",
                            '13deg',
                            '21deg'
                        ],
                        [
                            "eid11204",
                            "rotateZ",
                            31105,
                            262,
                            "linear",
                            "${gin-blink1}",
                            '21deg',
                            '13deg'
                        ],
                        [
                            "eid11291",
                            "rotateZ",
                            32127,
                            199,
                            "linear",
                            "${gin-blink1}",
                            '13deg',
                            '0deg'
                        ],
                        [
                            "eid11047",
                            "top",
                            19368,
                            266,
                            "linear",
                            "${genre-trailer}",
                            '309px',
                            '142px'
                        ],
                        [
                            "eid10327",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-blink1}",
                            '-317px',
                            '104px'
                        ],
                        [
                            "eid10974",
                            "left",
                            6750,
                            11762,
                            "linear",
                            "${gin-blink1}",
                            '104px',
                            '121px'
                        ],
                        [
                            "eid11203",
                            "left",
                            31105,
                            262,
                            "linear",
                            "${gin-blink1}",
                            '121px',
                            '104px'
                        ],
                        [
                            "eid11297",
                            "left",
                            32127,
                            199,
                            "linear",
                            "${gin-blink1}",
                            '104px',
                            '92px'
                        ],
                        [
                            "eid11050",
                            "top",
                            19368,
                            266,
                            "linear",
                            "${youtube_site}",
                            '253px',
                            '26px'
                        ],
                        [
                            "eid11186",
                            "top",
                            30200,
                            181,
                            "linear",
                            "${youtube_site}",
                            '26px',
                            '253px'
                        ],
                        [
                            "eid10322",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-low-arm-front}",
                            '-309px',
                            '113px'
                        ],
                        [
                            "eid10915",
                            "left",
                            6250,
                            191,
                            "linear",
                            "${gin-low-arm-front}",
                            '113px',
                            '239px'
                        ],
                        [
                            "eid11241",
                            "left",
                            30950,
                            191,
                            "linear",
                            "${gin-low-arm-front}",
                            '239px',
                            '113px'
                        ],
                        [
                            "eid10321",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-blink2}",
                            '-317px',
                            '104px'
                        ],
                        [
                            "eid10972",
                            "left",
                            6750,
                            11762,
                            "linear",
                            "${gin-blink2}",
                            '104px',
                            '121px'
                        ],
                        [
                            "eid11209",
                            "left",
                            31105,
                            262,
                            "linear",
                            "${gin-blink2}",
                            '121px',
                            '104px'
                        ],
                        [
                            "eid11301",
                            "left",
                            32127,
                            199,
                            "linear",
                            "${gin-blink2}",
                            '104px',
                            '92px'
                        ],
                        [
                            "eid11051",
                            "top",
                            19368,
                            266,
                            "linear",
                            "${genre-cartoon}",
                            '457px',
                            '456px'
                        ],
                        [
                            "eid11083",
                            "display",
                            0,
                            0,
                            "linear",
                            "${gameplay-vid}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11078",
                            "display",
                            21165,
                            0,
                            "linear",
                            "${gameplay-vid}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11173",
                            "display",
                            30200,
                            0,
                            "linear",
                            "${gameplay-vid}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10524",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10523",
                            "opacity",
                            19165,
                            255,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11191",
                            "opacity",
                            30322,
                            255,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11343",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11339",
                            "opacity",
                            22786,
                            31,
                            "linear",
                            "${spark3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11340",
                            "opacity",
                            22922,
                            28,
                            "linear",
                            "${spark3Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11346",
                            "opacity",
                            23027,
                            31,
                            "linear",
                            "${spark3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11347",
                            "opacity",
                            23163,
                            28,
                            "linear",
                            "${spark3Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11356",
                            "opacity",
                            23240,
                            31,
                            "linear",
                            "${spark3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11357",
                            "opacity",
                            23376,
                            28,
                            "linear",
                            "${spark3Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11370",
                            "opacity",
                            23486,
                            31,
                            "linear",
                            "${spark3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11371",
                            "opacity",
                            23622,
                            28,
                            "linear",
                            "${spark3Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11395",
                            "display",
                            21774,
                            0,
                            "linear",
                            "${genre-trailer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11180",
                            "display",
                            30200,
                            0,
                            "linear",
                            "${genre-trailer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10896",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${next-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11309",
                            "opacity",
                            31806,
                            124,
                            "linear",
                            "${next-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11044",
                            "left",
                            19368,
                            266,
                            "linear",
                            "${genre-cartoon}",
                            '414px',
                            '135px'
                        ],
                        [
                            "eid10333",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10412",
                            "opacity",
                            18409,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10411",
                            "opacity",
                            18561,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11197",
                            "opacity",
                            30637,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11198",
                            "opacity",
                            30789,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11032",
                            "left",
                            19368,
                            266,
                            "linear",
                            "${genre-trailer}",
                            '414px',
                            '137px'
                        ],
                        [
                            "eid10975",
                            "top",
                            6750,
                            11762,
                            "linear",
                            "${gin-blink1}",
                            '23px',
                            '38px'
                        ],
                        [
                            "eid11202",
                            "top",
                            31105,
                            262,
                            "linear",
                            "${gin-blink1}",
                            '38px',
                            '23px'
                        ],
                        [
                            "eid11298",
                            "top",
                            32127,
                            199,
                            "linear",
                            "${gin-blink1}",
                            '23px',
                            '30px'
                        ],
                        [
                            "eid11403",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction-btn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid11402",
                            "display",
                            21774,
                            0,
                            "linear",
                            "${instruction-btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11399",
                            "display",
                            21774,
                            0,
                            "linear",
                            "${genre-cartoon}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11176",
                            "display",
                            30200,
                            0,
                            "linear",
                            "${genre-cartoon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11413",
                            "scaleY",
                            22538,
                            326,
                            "linear",
                            "${Text2}",
                            '0.76',
                            '1'
                        ],
                        [
                            "eid11419",
                            "scaleY",
                            29666,
                            284,
                            "linear",
                            "${Text2}",
                            '1',
                            '0.76'
                        ],
                        [
                            "eid11075",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${youtube_site}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11068",
                            "opacity",
                            19368,
                            175,
                            "linear",
                            "${youtube_site}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11188",
                            "opacity",
                            30262,
                            119,
                            "linear",
                            "${youtube_site}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11393",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11394",
                            "display",
                            22538,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11310",
                            "left",
                            31806,
                            124,
                            "linear",
                            "${next-btn}",
                            '793px',
                            '685px'
                        ],
                        [
                            "eid11311",
                            "left",
                            31930,
                            88,
                            "linear",
                            "${next-btn}",
                            '685px',
                            '728px'
                        ],
                        [
                            "eid10912",
                            "rotateZ",
                            6250,
                            191,
                            "linear",
                            "${gin-up-arm-front}",
                            '0deg',
                            '-24deg'
                        ],
                        [
                            "eid11246",
                            "rotateZ",
                            30950,
                            191,
                            "linear",
                            "${gin-up-arm-front}",
                            '-24deg',
                            '0deg'
                        ],
                        [
                            "eid10341",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-up-arm-back}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10356",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${gin-up-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10340",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-low-arm-back}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10359",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${gin-low-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10235",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${library-table}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10234",
                            "opacity",
                            4091,
                            97,
                            "linear",
                            "${library-table}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11304",
                            "top",
                            32127,
                            199,
                            "linear",
                            "${gin-smile-front}",
                            '23px',
                            '30px'
                        ],
                        [
                            "eid6725",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid6728",
                            "opacity",
                            250,
                            141,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid6738",
                            "opacity",
                            4000,
                            139,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11034",
                            "height",
                            19368,
                            266,
                            "linear",
                            "${genre-docu}",
                            '37px',
                            '78px'
                        ],
                        [
                            "eid11039",
                            "width",
                            19368,
                            266,
                            "linear",
                            "${genre-music}",
                            '96px',
                            '203px'
                        ],
                        [
                            "eid11398",
                            "display",
                            21774,
                            0,
                            "linear",
                            "${genre-docu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11177",
                            "display",
                            30200,
                            0,
                            "linear",
                            "${genre-docu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11029",
                            "left",
                            19368,
                            266,
                            "linear",
                            "${genre-game}",
                            '414px',
                            '137px'
                        ],
                        [
                            "eid11071",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${genre-music}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11067",
                            "opacity",
                            19368,
                            175,
                            "linear",
                            "${genre-music}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10334",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-smile-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10365",
                            "opacity",
                            5700,
                            115,
                            "linear",
                            "${gin-smile-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11216",
                            "opacity",
                            31367,
                            203,
                            "linear",
                            "${gin-smile-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11217",
                            "opacity",
                            31570,
                            0,
                            "linear",
                            "${gin-smile-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10969",
                            "rotateZ",
                            6750,
                            11762,
                            "linear",
                            "${gin-side}",
                            '13deg',
                            '21deg'
                        ],
                        [
                            "eid11213",
                            "rotateZ",
                            31105,
                            262,
                            "linear",
                            "${gin-side}",
                            '21deg',
                            '13deg'
                        ],
                        [
                            "eid11292",
                            "rotateZ",
                            32127,
                            199,
                            "linear",
                            "${gin-side}",
                            '13deg',
                            '0deg'
                        ],
                        [
                            "eid11337",
                            "height",
                            22786,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '69px',
                            '404px'
                        ],
                        [
                            "eid11353",
                            "height",
                            22991,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '404px',
                            '404px'
                        ],
                        [
                            "eid11345",
                            "height",
                            23027,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '69px',
                            '404px'
                        ],
                        [
                            "eid11363",
                            "height",
                            23216,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '404px',
                            '404px'
                        ],
                        [
                            "eid11355",
                            "height",
                            23240,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '69px',
                            '404px'
                        ],
                        [
                            "eid11367",
                            "height",
                            23450,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '404px',
                            '404px'
                        ],
                        [
                            "eid11369",
                            "height",
                            23486,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '69px',
                            '404px'
                        ],
                        [
                            "eid11072",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${genre-game}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11064",
                            "opacity",
                            19368,
                            175,
                            "linear",
                            "${genre-game}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10335",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10361",
                            "opacity",
                            5458,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10362",
                            "opacity",
                            5610,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11238",
                            "opacity",
                            31654,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11239",
                            "opacity",
                            31806,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10902",
                            "top",
                            6250,
                            0,
                            "linear",
                            "${gin-up-arm-front}",
                            '355px',
                            '355px'
                        ],
                        [
                            "eid10908",
                            "top",
                            6441,
                            0,
                            "linear",
                            "${gin-up-arm-front}",
                            '355px',
                            '355px'
                        ],
                        [
                            "eid11244",
                            "top",
                            30950,
                            0,
                            "linear",
                            "${gin-up-arm-front}",
                            '355px',
                            '355px'
                        ],
                        [
                            "eid11243",
                            "top",
                            31141,
                            0,
                            "linear",
                            "${gin-up-arm-front}",
                            '355px',
                            '355px'
                        ],
                        [
                            "eid10487",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10486",
                            "opacity",
                            18867,
                            99,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11222",
                            "opacity",
                            30223,
                            99,
                            "linear",
                            "${instruction-btn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10320",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-up-arm-back}",
                            '-145px',
                            '304px'
                        ],
                        [
                            "eid10933",
                            "left",
                            6544,
                            206,
                            "linear",
                            "${gin-up-arm-back}",
                            '304px',
                            '323px'
                        ],
                        [
                            "eid11251",
                            "left",
                            30950,
                            206,
                            "linear",
                            "${gin-up-arm-back}",
                            '323px',
                            '304px'
                        ],
                        [
                            "eid11041",
                            "left",
                            19368,
                            266,
                            "linear",
                            "${youtube_site}",
                            '390px',
                            '86px'
                        ],
                        [
                            "eid11189",
                            "left",
                            30200,
                            181,
                            "linear",
                            "${youtube_site}",
                            '86px',
                            '390px'
                        ],
                        [
                            "eid11382",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid11381",
                            "display",
                            21700,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11412",
                            "scaleX",
                            22538,
                            326,
                            "linear",
                            "${Text2}",
                            '0.76',
                            '1'
                        ],
                        [
                            "eid11418",
                            "scaleX",
                            29666,
                            284,
                            "linear",
                            "${Text2}",
                            '1',
                            '0.76'
                        ],
                        [
                            "eid11042",
                            "width",
                            19368,
                            266,
                            "linear",
                            "${youtube_site}",
                            '407px',
                            '857px'
                        ],
                        [
                            "eid11190",
                            "width",
                            30200,
                            181,
                            "linear",
                            "${youtube_site}",
                            '857px',
                            '407px'
                        ],
                        [
                            "eid11031",
                            "height",
                            19368,
                            266,
                            "linear",
                            "${genre-trailer}",
                            '37px',
                            '78px'
                        ],
                        [
                            "eid11335",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11317",
                            "opacity",
                            22538,
                            162,
                            "linear",
                            "${Rectangle3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11379",
                            "opacity",
                            29809,
                            141,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10476",
                            "width",
                            18867,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '102px',
                            '318px'
                        ],
                        [
                            "eid10481",
                            "width",
                            19062,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '318px',
                            '284px'
                        ],
                        [
                            "eid11225",
                            "width",
                            30024,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '284px',
                            '318px'
                        ],
                        [
                            "eid11226",
                            "width",
                            30127,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '318px',
                            '102px'
                        ],
                        [
                            "eid10930",
                            "rotateZ",
                            6544,
                            206,
                            "linear",
                            "${gin-up-arm-back}",
                            '-3deg',
                            '-24deg'
                        ],
                        [
                            "eid11252",
                            "rotateZ",
                            30950,
                            206,
                            "linear",
                            "${gin-up-arm-back}",
                            '-24deg',
                            '-3deg'
                        ],
                        [
                            "eid11074",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${genre-cartoon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11069",
                            "opacity",
                            19368,
                            175,
                            "linear",
                            "${genre-cartoon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11049",
                            "top",
                            19368,
                            266,
                            "linear",
                            "${genre-music}",
                            '346px',
                            '220px'
                        ],
                        [
                            "eid11082",
                            "display",
                            0,
                            0,
                            "linear",
                            "${music-vid}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11077",
                            "display",
                            21165,
                            0,
                            "linear",
                            "${music-vid}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11174",
                            "display",
                            30200,
                            0,
                            "linear",
                            "${music-vid}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11396",
                            "display",
                            21774,
                            0,
                            "linear",
                            "${genre-music}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11179",
                            "display",
                            30200,
                            0,
                            "linear",
                            "${genre-music}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10337",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-low-arm-front}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10358",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${gin-low-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11336",
                            "top",
                            22786,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '274px',
                            '129px'
                        ],
                        [
                            "eid11351",
                            "top",
                            22991,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '129px',
                            '129px'
                        ],
                        [
                            "eid11344",
                            "top",
                            23027,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '65px',
                            '-91px'
                        ],
                        [
                            "eid11361",
                            "top",
                            23216,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '-91px',
                            '-91px'
                        ],
                        [
                            "eid11354",
                            "top",
                            23240,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '367px',
                            '205px'
                        ],
                        [
                            "eid11365",
                            "top",
                            23450,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid11368",
                            "top",
                            23486,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '337px',
                            '175px'
                        ],
                        [
                            "eid10478",
                            "top",
                            18867,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '24px',
                            '0px'
                        ],
                        [
                            "eid10480",
                            "top",
                            19062,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '0px',
                            '8px'
                        ],
                        [
                            "eid11218",
                            "top",
                            30024,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '8px',
                            '0px'
                        ],
                        [
                            "eid11219",
                            "top",
                            30127,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '0px',
                            '24px'
                        ],
                        [
                            "eid10929",
                            "rotateZ",
                            6544,
                            206,
                            "linear",
                            "${gin-low-arm-back}",
                            '-40deg',
                            '-61deg'
                        ],
                        [
                            "eid11249",
                            "rotateZ",
                            30950,
                            206,
                            "linear",
                            "${gin-low-arm-back}",
                            '-61deg',
                            '-40deg'
                        ],
                        [
                            "eid11028",
                            "height",
                            19368,
                            266,
                            "linear",
                            "${genre-game}",
                            '37px',
                            '78px'
                        ],
                        [
                            "eid10326",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-side}",
                            '-317px',
                            '104px'
                        ],
                        [
                            "eid10978",
                            "left",
                            6750,
                            11762,
                            "linear",
                            "${gin-side}",
                            '104px',
                            '121px'
                        ],
                        [
                            "eid11212",
                            "left",
                            31105,
                            262,
                            "linear",
                            "${gin-side}",
                            '121px',
                            '104px'
                        ],
                        [
                            "eid11299",
                            "left",
                            32127,
                            199,
                            "linear",
                            "${gin-side}",
                            '104px',
                            '92px'
                        ],
                        [
                            "eid10339",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-body}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10360",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${gin-body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10913",
                            "rotateZ",
                            6250,
                            191,
                            "linear",
                            "${gin-low-arm-front}",
                            '2deg',
                            '-91deg'
                        ],
                        [
                            "eid11242",
                            "rotateZ",
                            30950,
                            191,
                            "linear",
                            "${gin-low-arm-front}",
                            '-91deg',
                            '2deg'
                        ],
                        [
                            "eid11303",
                            "left",
                            32127,
                            199,
                            "linear",
                            "${gin-smile-front}",
                            '104px',
                            '92px'
                        ],
                        [
                            "eid11038",
                            "left",
                            19368,
                            266,
                            "linear",
                            "${genre-music}",
                            '414px',
                            '137px'
                        ],
                        [
                            "eid11030",
                            "width",
                            19368,
                            266,
                            "linear",
                            "${genre-game}",
                            '96px',
                            '203px'
                        ],
                        [
                            "eid10916",
                            "top",
                            6250,
                            191,
                            "linear",
                            "${gin-low-arm-front}",
                            '478px',
                            '438px'
                        ],
                        [
                            "eid11240",
                            "top",
                            30950,
                            191,
                            "linear",
                            "${gin-low-arm-front}",
                            '438px',
                            '478px'
                        ],
                        [
                            "eid10971",
                            "top",
                            6750,
                            11762,
                            "linear",
                            "${gin-smile-side}",
                            '23px',
                            '38px'
                        ],
                        [
                            "eid11205",
                            "top",
                            31105,
                            262,
                            "linear",
                            "${gin-smile-side}",
                            '38px',
                            '23px'
                        ],
                        [
                            "eid11296",
                            "top",
                            32127,
                            199,
                            "linear",
                            "${gin-smile-side}",
                            '23px',
                            '30px'
                        ],
                        [
                            "eid11070",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${genre-trailer}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11065",
                            "opacity",
                            19368,
                            175,
                            "linear",
                            "${genre-trailer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11085",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cartoon-vid}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11080",
                            "display",
                            21165,
                            0,
                            "linear",
                            "${cartoon-vid}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11171",
                            "display",
                            30200,
                            0,
                            "linear",
                            "${cartoon-vid}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11037",
                            "height",
                            19368,
                            266,
                            "linear",
                            "${genre-music}",
                            '37px',
                            '78px'
                        ],
                        [
                            "eid10934",
                            "top",
                            6544,
                            206,
                            "linear",
                            "${gin-up-arm-back}",
                            '349px',
                            '338px'
                        ],
                        [
                            "eid11250",
                            "top",
                            30950,
                            206,
                            "linear",
                            "${gin-up-arm-back}",
                            '338px',
                            '349px'
                        ],
                        [
                            "eid11040",
                            "height",
                            19368,
                            266,
                            "linear",
                            "${youtube_site}",
                            '261px',
                            '550px'
                        ],
                        [
                            "eid11187",
                            "height",
                            30200,
                            181,
                            "linear",
                            "${youtube_site}",
                            '550px',
                            '261px'
                        ],
                        [
                            "eid11305",
                            "top",
                            31806,
                            124,
                            "linear",
                            "${next-btn}",
                            '500px',
                            '467px'
                        ],
                        [
                            "eid11306",
                            "top",
                            31930,
                            88,
                            "linear",
                            "${next-btn}",
                            '467px',
                            '471px'
                        ],
                        [
                            "eid10336",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10357",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${gin-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11045",
                            "width",
                            19368,
                            266,
                            "linear",
                            "${genre-cartoon}",
                            '96px',
                            '203px'
                        ],
                        [
                            "eid11342",
                            "width",
                            22786,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '62px',
                            '362px'
                        ],
                        [
                            "eid11352",
                            "width",
                            22991,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '362px',
                            '362px'
                        ],
                        [
                            "eid11349",
                            "width",
                            23027,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '62px',
                            '362px'
                        ],
                        [
                            "eid11362",
                            "width",
                            23216,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '362px',
                            '362px'
                        ],
                        [
                            "eid11359",
                            "width",
                            23240,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '62px',
                            '362px'
                        ],
                        [
                            "eid11366",
                            "width",
                            23450,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '362px',
                            '362px'
                        ],
                        [
                            "eid11373",
                            "width",
                            23486,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '62px',
                            '362px'
                        ],
                        [
                            "eid10979",
                            "top",
                            6750,
                            11762,
                            "linear",
                            "${gin-side}",
                            '23px',
                            '38px'
                        ],
                        [
                            "eid11211",
                            "top",
                            31105,
                            262,
                            "linear",
                            "${gin-side}",
                            '38px',
                            '23px'
                        ],
                        [
                            "eid11300",
                            "top",
                            32127,
                            199,
                            "linear",
                            "${gin-side}",
                            '23px',
                            '30px'
                        ],
                        [
                            "eid10477",
                            "left",
                            18867,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '843px',
                            '703px'
                        ],
                        [
                            "eid10479",
                            "left",
                            19062,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '703px',
                            '731px'
                        ],
                        [
                            "eid11223",
                            "left",
                            30024,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '731px',
                            '706px'
                        ],
                        [
                            "eid11224",
                            "left",
                            30127,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '706px',
                            '837px'
                        ],
                        [
                            "eid10973",
                            "top",
                            6750,
                            11762,
                            "linear",
                            "${gin-blink2}",
                            '23px',
                            '38px'
                        ],
                        [
                            "eid11208",
                            "top",
                            31105,
                            262,
                            "linear",
                            "${gin-blink2}",
                            '38px',
                            '23px'
                        ],
                        [
                            "eid11302",
                            "top",
                            32127,
                            199,
                            "linear",
                            "${gin-blink2}",
                            '23px',
                            '30px'
                        ],
                        [
                            "eid11341",
                            "left",
                            22786,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '815px',
                            '650px'
                        ],
                        [
                            "eid11350",
                            "left",
                            22991,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '650px',
                            '650px'
                        ],
                        [
                            "eid11348",
                            "left",
                            23027,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '121px',
                            '-24px'
                        ],
                        [
                            "eid11360",
                            "left",
                            23216,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '-24px',
                            '-24px'
                        ],
                        [
                            "eid11358",
                            "left",
                            23240,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '152px',
                            '10px'
                        ],
                        [
                            "eid11364",
                            "left",
                            23450,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid11372",
                            "left",
                            23486,
                            164,
                            "linear",
                            "${spark3Copy4}",
                            '850px',
                            '726px'
                        ],
                        [
                            "eid10338",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-up-arm-front}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10355",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${gin-up-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11036",
                            "width",
                            19368,
                            266,
                            "linear",
                            "${genre-docu}",
                            '96px',
                            '203px'
                        ],
                        [
                            "eid10489",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10488",
                            "display",
                            19165,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11383",
                            "display",
                            21700,
                            0,
                            "linear",
                            "${instruction}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11312",
                            "width",
                            31806,
                            124,
                            "linear",
                            "${next-btn}",
                            '152px',
                            '338px'
                        ],
                        [
                            "eid11313",
                            "width",
                            31930,
                            88,
                            "linear",
                            "${next-btn}",
                            '338px',
                            '284px'
                        ],
                        [
                            "eid11400",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11401",
                            "display",
                            32326,
                            0,
                            "linear",
                            "${next-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11081",
                            "display",
                            0,
                            0,
                            "linear",
                            "${trailer-vid}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11076",
                            "display",
                            21165,
                            0,
                            "linear",
                            "${trailer-vid}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11175",
                            "display",
                            30200,
                            0,
                            "linear",
                            "${trailer-vid}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11043",
                            "height",
                            19368,
                            266,
                            "linear",
                            "${genre-cartoon}",
                            '37px',
                            '78px'
                        ],
                        [
                            "eid11033",
                            "width",
                            19368,
                            266,
                            "linear",
                            "${genre-trailer}",
                            '96px',
                            '203px'
                        ],
                        [
                            "eid10323",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-smile-side}",
                            '-317px',
                            '104px'
                        ],
                        [
                            "eid10970",
                            "left",
                            6750,
                            11762,
                            "linear",
                            "${gin-smile-side}",
                            '104px',
                            '121px'
                        ],
                        [
                            "eid11206",
                            "left",
                            31105,
                            262,
                            "linear",
                            "${gin-smile-side}",
                            '121px',
                            '104px'
                        ],
                        [
                            "eid11295",
                            "left",
                            32127,
                            199,
                            "linear",
                            "${gin-smile-side}",
                            '104px',
                            '92px'
                        ],
                        [
                            "eid11390",
                            "display",
                            0,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11392",
                            "display",
                            22538,
                            0,
                            "linear",
                            "${spark3Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11046",
                            "top",
                            19368,
                            266,
                            "linear",
                            "${genre-game}",
                            '383px',
                            '299px'
                        ],
                        [
                            "eid11294",
                            "rotateZ",
                            32127,
                            199,
                            "linear",
                            "${gin-smile-front}",
                            '13deg',
                            '0deg'
                        ],
                        [
                            "eid11035",
                            "left",
                            19368,
                            266,
                            "linear",
                            "${genre-docu}",
                            '414px',
                            '137px'
                        ],
                        [
                            "eid11257",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-smile-front}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11256",
                            "opacity",
                            32127,
                            199,
                            "linear",
                            "${gin-smile-front}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid6754",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid6752",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6750",
                            "opacity",
                            3941,
                            198,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11048",
                            "top",
                            19368,
                            266,
                            "linear",
                            "${genre-docu}",
                            '420px',
                            '377px'
                        ],
                        [
                            "eid10318",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-up-arm-front}",
                            '-304px',
                            '118px'
                        ],
                        [
                            "eid10914",
                            "left",
                            6250,
                            191,
                            "linear",
                            "${gin-up-arm-front}",
                            '118px',
                            '142px'
                        ],
                        [
                            "eid11245",
                            "left",
                            30950,
                            191,
                            "linear",
                            "${gin-up-arm-front}",
                            '142px',
                            '118px'
                        ],
                        [
                            "eid10932",
                            "top",
                            6544,
                            206,
                            "linear",
                            "${gin-low-arm-back}",
                            '469px',
                            '420px'
                        ],
                        [
                            "eid11247",
                            "top",
                            30950,
                            206,
                            "linear",
                            "${gin-low-arm-back}",
                            '420px',
                            '469px'
                        ],
                        [
                            "eid6741",
                            "top",
                            316,
                            184,
                            "linear",
                            "${Text}",
                            '-175px',
                            '158px'
                        ],
                        [
                            "eid6744",
                            "top",
                            3843,
                            98,
                            "linear",
                            "${Text}",
                            '158px',
                            '305px'
                        ],
                        [
                            "eid6746",
                            "top",
                            3941,
                            198,
                            "linear",
                            "${Text}",
                            '305px',
                            '-161px'
                        ],
                        [
                            "eid10965",
                            "rotateZ",
                            6750,
                            11762,
                            "linear",
                            "${gin-smile-side}",
                            '13deg',
                            '21deg'
                        ],
                        [
                            "eid11207",
                            "rotateZ",
                            31105,
                            262,
                            "linear",
                            "${gin-smile-side}",
                            '21deg',
                            '13deg'
                        ],
                        [
                            "eid11290",
                            "rotateZ",
                            32127,
                            199,
                            "linear",
                            "${gin-smile-side}",
                            '13deg',
                            '0deg'
                        ],
                        [
                            "eid10324",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-body}",
                            '-294px',
                            '128px'
                        ],
                        [
                            "eid11307",
                            "height",
                            31806,
                            124,
                            "linear",
                            "${next-btn}",
                            '49px',
                            '109px'
                        ],
                        [
                            "eid11308",
                            "height",
                            31930,
                            88,
                            "linear",
                            "${next-btn}",
                            '109px',
                            '92px'
                        ],
                        [
                            "eid6731",
                            "rotateZ",
                            663,
                            250,
                            "linear",
                            "${Text}",
                            '0deg',
                            '-9deg'
                        ],
                        [
                            "eid6733",
                            "rotateZ",
                            913,
                            250,
                            "linear",
                            "${Text}",
                            '-9deg',
                            '5deg'
                        ],
                        [
                            "eid6735",
                            "rotateZ",
                            1163,
                            151,
                            "linear",
                            "${Text}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid11084",
                            "display",
                            0,
                            0,
                            "linear",
                            "${docu-vid}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11079",
                            "display",
                            21165,
                            0,
                            "linear",
                            "${docu-vid}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11172",
                            "display",
                            30200,
                            0,
                            "linear",
                            "${docu-vid}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10325",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-low-arm-back}",
                            '-106px',
                            '363px'
                        ],
                        [
                            "eid10931",
                            "left",
                            6544,
                            206,
                            "linear",
                            "${gin-low-arm-back}",
                            '363px',
                            '438px'
                        ],
                        [
                            "eid11248",
                            "left",
                            30950,
                            206,
                            "linear",
                            "${gin-low-arm-back}",
                            '438px',
                            '363px'
                        ],
                        [
                            "eid10475",
                            "height",
                            18867,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '33px',
                            '103px'
                        ],
                        [
                            "eid10482",
                            "height",
                            19062,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '103px',
                            '92px'
                        ],
                        [
                            "eid11220",
                            "height",
                            30024,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '92px',
                            '103px'
                        ],
                        [
                            "eid11221",
                            "height",
                            30127,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '103px',
                            '33px'
                        ],
                        [
                            "eid10237",
                            "display",
                            0,
                            0,
                            "linear",
                            "${chairs}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10236",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${chairs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11406",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11407",
                            "display",
                            22538,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11420",
                            "display",
                            29950,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11397",
                            "display",
                            21774,
                            0,
                            "linear",
                            "${genre-game}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11178",
                            "display",
                            30200,
                            0,
                            "linear",
                            "${genre-game}",
                            'none',
                            'none'
                        ],
                            [ "eid10494", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid11087", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${music-vid}', [] ] ],
                            [ "eid11088", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${gameplay-vid}', [] ] ],
                            [ "eid11090", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${cartoon-vid}', [] ] ],
                            [ "eid11086", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${trailer-vid}', [] ] ],
                            [ "eid11089", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${docu-vid}', [] ] ],
                            [ "eid10238", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${chairs}', [] ] ],
                            [ "eid10239", "trigger", 4500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${chairs}', [] ] ],
                            [ "eid10495", "trigger", 19165, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ],
                            [ "eid11092", "trigger", 21165, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${trailer-vid}', [] ] ],
                            [ "eid11091", "trigger", 21165, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${music-vid}', [] ] ],
                            [ "eid11095", "trigger", 21165, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${gameplay-vid}', [] ] ],
                            [ "eid11094", "trigger", 21165, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${cartoon-vid}', [] ] ],
                            [ "eid11093", "trigger", 21165, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${docu-vid}', [] ] ],
                            [ "eid11385", "trigger", 21700, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${cartoon-vid}', [] ] ],
                            [ "eid11387", "trigger", 21700, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${music-vid}', [] ] ],
                            [ "eid11386", "trigger", 21700, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${gameplay-vid}', [] ] ],
                            [ "eid11384", "trigger", 21700, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${docu-vid}', [] ] ],
                            [ "eid11388", "trigger", 21700, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${trailer-vid}', [] ] ],
                            [ "eid11193", "trigger", 30200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${docu-vid}', [] ] ],
                            [ "eid11196", "trigger", 30200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${cartoon-vid}', [] ] ],
                            [ "eid11194", "trigger", 30200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${music-vid}', [] ] ],
                            [ "eid11195", "trigger", 30200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${trailer-vid}', [] ] ],
                            [ "eid11192", "trigger", 30200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${gameplay-vid}', [] ] ]
                    ]
                }
            },
            "chairs": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'chairCopy',
                            rect: ['56px', '-6px', '263px', '258px', 'auto', 'auto'],
                            transform: [[], [], [], ['-1', '1.00696']],
                            fill: ['rgba(0,0,0,0)', 'images/chair.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1005px', '261px']
                        }
                    }
                },
                timeline: {
                    duration: 395,
                    autoPlay: true,
                    data: [
                        [
                            "eid10245",
                            "left",
                            0,
                            395,
                            "linear",
                            "${chairCopy}",
                            '-366px',
                            '56px'
                        ]
                    ]
                }
            },
            "instruction": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['508px', '7px', '262px', '67px', 'auto', 'auto'],
                            id: 'narrator-text-balloon',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['45px', '102px', '657px', '133px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text2',
                            text: 'Identify the types of video that Ginette is watching. Drag and drop the headers on the left onto the appropriate video.',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [36, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(0, 101, 232)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '792px', '203px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid10500",
                            "height",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '67px',
                            '203px'
                        ],
                        [
                            "eid10516",
                            "height",
                            1250,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '203px',
                            '67px'
                        ],
                        [
                            "eid10503",
                            "top",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '7px',
                            '71px'
                        ],
                        [
                            "eid10515",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '71px',
                            '7px'
                        ],
                        [
                            "eid10512",
                            "opacity",
                            0,
                            188,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10517",
                            "opacity",
                            1312,
                            188,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10508",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10507",
                            "opacity",
                            188,
                            62,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10513",
                            "opacity",
                            1250,
                            62,
                            "linear",
                            "${Text2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10514",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10501",
                            "width",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '262px',
                            '725px'
                        ],
                        [
                            "eid10519",
                            "width",
                            1250,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '725px',
                            '262px'
                        ],
                        [
                            "eid10502",
                            "left",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '512px',
                            '13px'
                        ],
                        [
                            "eid10518",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '13px',
                            '508px'
                        ]
                    ]
                }
            },
            "gameplay-vid": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'vid5',
                            rect: ['0px', '0px', '218px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vid5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ico-game',
                            rect: ['56px', '59px', '168px', '67px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ico-game.png', '0px', '0px']
                        },
                        {
                            rect: ['108px', '68px', '62px', '69px', 'auto', 'auto'],
                            id: 'spark3Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '224px', '126px']
                        }
                    }
                },
                timeline: {
                    duration: 931,
                    autoPlay: true,
                    data: [
                        [
                            "eid11155",
                            "width",
                            580,
                            351,
                            "linear",
                            "${spark3Copy}",
                            '62px',
                            '174px'
                        ],
                        [
                            "eid11151",
                            "height",
                            580,
                            351,
                            "linear",
                            "${spark3Copy}",
                            '69px',
                            '194px'
                        ],
                        [
                            "eid11150",
                            "top",
                            580,
                            351,
                            "linear",
                            "${spark3Copy}",
                            '68px',
                            '10px'
                        ],
                        [
                            "eid11109",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ico-game}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11108",
                            "opacity",
                            500,
                            201,
                            "linear",
                            "${ico-game}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11163",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark3Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11152",
                            "opacity",
                            580,
                            67,
                            "linear",
                            "${spark3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11153",
                            "opacity",
                            870,
                            61,
                            "linear",
                            "${spark3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11154",
                            "left",
                            580,
                            351,
                            "linear",
                            "${spark3Copy}",
                            '169px',
                            '108px'
                        ],
                        [
                            "eid11110",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${vid5}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "cartoon-vid": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'vid2',
                            rect: ['0px', '0px', '218px', '126px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vid2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ico-cartoon',
                            rect: ['57px', '61px', '167px', '65px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ico-cartoon.png', '0px', '0px']
                        },
                        {
                            rect: ['108px', '68px', '62px', '69px', 'auto', 'auto'],
                            id: 'spark3Copy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '224px', '126px']
                        }
                    }
                },
                timeline: {
                    duration: 931,
                    autoPlay: true,
                    data: [
                        [
                            "eid11170",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark3Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11166",
                            "opacity",
                            580,
                            67,
                            "linear",
                            "${spark3Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11167",
                            "opacity",
                            870,
                            61,
                            "linear",
                            "${spark3Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11116",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${vid2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11164",
                            "top",
                            580,
                            351,
                            "linear",
                            "${spark3Copy3}",
                            '68px',
                            '10px'
                        ],
                        [
                            "eid11168",
                            "left",
                            580,
                            351,
                            "linear",
                            "${spark3Copy3}",
                            '169px',
                            '108px'
                        ],
                        [
                            "eid11115",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ico-cartoon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11114",
                            "opacity",
                            500,
                            201,
                            "linear",
                            "${ico-cartoon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11169",
                            "width",
                            580,
                            351,
                            "linear",
                            "${spark3Copy3}",
                            '62px',
                            '174px'
                        ],
                        [
                            "eid11165",
                            "height",
                            580,
                            351,
                            "linear",
                            "${spark3Copy3}",
                            '69px',
                            '194px'
                        ]
                    ]
                }
            },
            "music-vid": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'vid4',
                            rect: ['0px', '0px', '218px', '127px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vid4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ico-music',
                            rect: ['92px', '72px', '135px', '56px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ico-music.png', '0px', '0px']
                        },
                        {
                            rect: ['108px', '68px', '62px', '69px', 'auto', 'auto'],
                            id: 'spark3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '227px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 931,
                    autoPlay: true,
                    data: [
                        [
                            "eid11148",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11144",
                            "opacity",
                            580,
                            67,
                            "linear",
                            "${spark3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11145",
                            "opacity",
                            870,
                            61,
                            "linear",
                            "${spark3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11106",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ico-music}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11105",
                            "opacity",
                            500,
                            201,
                            "linear",
                            "${ico-music}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11107",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${vid4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11142",
                            "top",
                            580,
                            351,
                            "linear",
                            "${spark3}",
                            '68px',
                            '10px'
                        ],
                        [
                            "eid11146",
                            "left",
                            580,
                            351,
                            "linear",
                            "${spark3}",
                            '169px',
                            '108px'
                        ],
                        [
                            "eid11143",
                            "height",
                            580,
                            351,
                            "linear",
                            "${spark3}",
                            '69px',
                            '194px'
                        ],
                        [
                            "eid11147",
                            "width",
                            580,
                            351,
                            "linear",
                            "${spark3}",
                            '62px',
                            '174px'
                        ]
                    ]
                }
            },
            "docu-vid": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'vid3',
                            rect: ['0px', '0px', '218px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vid3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ico-docu',
                            rect: ['30px', '64px', '194px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ico-docu.png', '0px', '0px']
                        },
                        {
                            rect: ['108px', '68px', '62px', '69px', 'auto', 'auto'],
                            id: 'spark3Copy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '224px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 931,
                    autoPlay: true,
                    data: [
                        [
                            "eid11157",
                            "height",
                            580,
                            351,
                            "linear",
                            "${spark3Copy2}",
                            '69px',
                            '194px'
                        ],
                        [
                            "eid11162",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark3Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11158",
                            "opacity",
                            580,
                            67,
                            "linear",
                            "${spark3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11159",
                            "opacity",
                            870,
                            61,
                            "linear",
                            "${spark3Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11156",
                            "top",
                            580,
                            351,
                            "linear",
                            "${spark3Copy2}",
                            '68px',
                            '10px'
                        ],
                        [
                            "eid11160",
                            "left",
                            580,
                            351,
                            "linear",
                            "${spark3Copy2}",
                            '169px',
                            '108px'
                        ],
                        [
                            "eid11161",
                            "width",
                            580,
                            351,
                            "linear",
                            "${spark3Copy2}",
                            '62px',
                            '174px'
                        ],
                        [
                            "eid11113",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${vid3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11112",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ico-docu}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11111",
                            "opacity",
                            500,
                            201,
                            "linear",
                            "${ico-docu}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "trailer-vid": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '218px', '126px', 'auto', 'auto'],
                            id: 'vid1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/vid1.png', '0px', '0px']
                        },
                        {
                            rect: ['94px', '57px', '137px', '69px', 'auto', 'auto'],
                            id: 'ico-trailer',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ico-trailer.png', '0px', '0px']
                        },
                        {
                            rect: ['108px', '68px', '62px', '69px', 'auto', 'auto'],
                            id: 'spark3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '231px', '126px']
                        }
                    }
                },
                timeline: {
                    duration: 931,
                    autoPlay: true,
                    data: [
                        [
                            "eid11099",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${vid1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11102",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ico-trailer}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11104",
                            "opacity",
                            500,
                            201,
                            "linear",
                            "${ico-trailer}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11132",
                            "left",
                            580,
                            351,
                            "linear",
                            "${spark3}",
                            '169px',
                            '108px'
                        ],
                        [
                            "eid11149",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11138",
                            "opacity",
                            580,
                            67,
                            "linear",
                            "${spark3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11141",
                            "opacity",
                            870,
                            61,
                            "linear",
                            "${spark3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11131",
                            "height",
                            580,
                            351,
                            "linear",
                            "${spark3}",
                            '69px',
                            '194px'
                        ],
                        [
                            "eid11134",
                            "top",
                            580,
                            351,
                            "linear",
                            "${spark3}",
                            '68px',
                            '10px'
                        ],
                        [
                            "eid11133",
                            "width",
                            580,
                            351,
                            "linear",
                            "${spark3}",
                            '62px',
                            '174px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("5_edgeActions.js");
})("EDGE-1646797");
