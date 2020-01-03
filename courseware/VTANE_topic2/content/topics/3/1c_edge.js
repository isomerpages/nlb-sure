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
                            id: 'mall-inside',
                            type: 'image',
                            rect: ['-50px', '-124px', '1082px', '765px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mall-inside.jpg",'0px','0px']
                        },
                        {
                            id: 'mall-inside-blur',
                            type: 'image',
                            rect: ['-50px', '-124px', '1082px', '765px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"mall-inside-blur.jpg",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['-17px', '-26px', '1060px', '640px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['-13px', '-8px', '1060px', '596px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '1',
                            fill: ["rgba(15,30,54,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'stars',
                            type: 'image',
                            rect: ['0', '18px', '1007px', '904px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"stars2.png",'0px','0px']
                        },
                        {
                            id: 'moon',
                            type: 'image',
                            rect: ['-237px', '-433px', '1469px', '1469px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"moon.png",'0px','0px'],
                            transform: [[],['-3']]
                        },
                        {
                            id: 'crowd6',
                            type: 'image',
                            rect: ['971px', '224px', '474px', '592px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd6.png",'0px','0px']
                        },
                        {
                            id: 'crowd4',
                            type: 'image',
                            rect: ['996px', '305px', '224px', '458px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd4.png",'0px','0px']
                        },
                        {
                            id: 'crowd3',
                            type: 'image',
                            rect: ['-278px', '183px', '286px', '729px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd3.png",'0px','0px']
                        },
                        {
                            id: 'narrator-text-balloon',
                            type: 'image',
                            rect: ['-881px', '27px', '858px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px'],
                            transform: [[],[],['-23'],['1.00439']]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['-829px', '64px', '744px', '101px', 'auto', 'auto'],
                            opacity: '0',
                            text: "How do different media formats affect the message?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [38, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['-778px', '63px', '678px', '101px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Out of the 3 cards, pick out the 1 card that does not belong. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [38, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Slot_BG',
                            symbolName: 'Slot_BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['504', '288', '190', '190', 'auto', 'auto']
                        },
                        {
                            id: 'slot-blankCopy',
                            type: 'image',
                            rect: ['349px', '604px', '327px', '448px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slot-blank.png",'0px','0px']
                        },
                        {
                            id: 'slot-blankCopy2',
                            type: 'image',
                            rect: ['677px', '604px', '327px', '448px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slot-blank.png",'0px','0px']
                        },
                        {
                            id: 'slot-blank',
                            type: 'image',
                            rect: ['20px', '604px', '327px', '448px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slot-blank.png",'0px','0px']
                        },
                        {
                            id: 'Images1',
                            symbolName: 'Images-set1',
                            display: 'none',
                            type: 'rect',
                            rect: ['20px', '45px', '981', '504', 'auto', 'auto'],
                            userClass: "imagesClass"
                        },
                        {
                            id: 'Images2',
                            symbolName: 'Images-set2',
                            display: 'none',
                            type: 'rect',
                            rect: ['23', '72', '976', '459', 'auto', 'auto'],
                            userClass: "imagesClass"
                        },
                        {
                            id: 'Images3',
                            symbolName: 'Images-set3',
                            display: 'none',
                            type: 'rect',
                            rect: ['23', '71', '975', '460', 'auto', 'auto'],
                            userClass: "imagesClass"
                        },
                        {
                            id: 'Images4',
                            symbolName: 'Images-set4',
                            display: 'none',
                            type: 'rect',
                            rect: ['24', '72', '973', '460', 'auto', 'auto'],
                            userClass: "imagesClass"
                        },
                        {
                            id: 'Images5',
                            symbolName: 'Images-set5',
                            display: 'none',
                            type: 'rect',
                            rect: ['22', '70', '976', '461', 'auto', 'auto'],
                            userClass: "imagesClass"
                        },
                        {
                            id: 'spinning-slots',
                            symbolName: 'spinning-slots',
                            display: 'none',
                            type: 'rect',
                            rect: ['20px', '70px', '984', '563', 'auto', 'auto']
                        },
                        {
                            id: 'slot-frame',
                            type: 'image',
                            rect: ['0px', '581px', '1024px', '507px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slot-frame.png",'0px','0px']
                        },
                        {
                            id: 'countdown3',
                            type: 'image',
                            rect: ['260px', '132px', '190px', '116px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown3.png",'0px','0px']
                        },
                        {
                            id: 'spark2',
                            type: 'image',
                            rect: ['3px', '-25px', '504px', '524px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spark2.png",'0px','0px']
                        },
                        {
                            id: 'instruction',
                            symbolName: 'instruction',
                            display: 'none',
                            type: 'rect',
                            rect: ['243px', '11px', '744', '189', 'auto', 'auto']
                        },
                        {
                            id: 'instruction-btn',
                            type: 'image',
                            rect: ['52px', '18px', '105px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"instruction-btn.png",'0px','0px']
                        },
                        {
                            id: 'slotTrigger1',
                            display: 'none',
                            type: 'rect',
                            rect: ['28px', '98px', '312px', '388px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "slotTrigger"
                        },
                        {
                            id: 'slotTrigger2',
                            display: 'none',
                            type: 'rect',
                            rect: ['356px', '98px', '312px', '388px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "slotTrigger"
                        },
                        {
                            id: 'slotTrigger3',
                            display: 'none',
                            type: 'rect',
                            rect: ['679px', '100px', '312px', '388px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "slotTrigger"
                        },
                        {
                            id: 'spin-button',
                            symbolName: 'spin-button',
                            display: 'none',
                            type: 'rect',
                            rect: ['808px', '971px', '191', '116', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'spinTrigger',
                            display: 'block',
                            type: 'rect',
                            rect: ['773px', '451px', '251px', '125px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'game-resultWrong',
                            symbolName: 'game-result',
                            display: 'none',
                            type: 'rect',
                            rect: ['148', '154', '800', '212', 'auto', 'auto']
                        },
                        {
                            id: 'game-resultCorrect',
                            symbolName: 'game-result2',
                            display: 'none',
                            type: 'rect',
                            rect: ['82', '151', '868', '207', 'auto', 'auto']
                        },
                        {
                            id: 'mainmenu',
                            display: 'none',
                            type: 'image',
                            rect: ['807px', '498', '204px', '66px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
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
                    duration: 24866,
                    autoPlay: true,
                    data: [
                        [
                            "eid8194",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Images1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7808",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-blankCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid7820",
                            "opacity",
                            10156,
                            94,
                            "linear",
                            "${slot-blankCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7729",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${moon}",
                            '1',
                            '1'
                        ],
                        [
                            "eid7749",
                            "opacity",
                            2000,
                            321,
                            "linear",
                            "${moon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8110",
                            "display",
                            0,
                            0,
                            "linear",
                            "${spinning-slots}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7831",
                            "top",
                            10554,
                            271,
                            "linear",
                            "${spark2}",
                            '398px',
                            '131px'
                        ],
                        [
                            "eid7849",
                            "top",
                            10825,
                            90,
                            "linear",
                            "${spark2}",
                            '131px',
                            '43px'
                        ],
                        [
                            "eid7857",
                            "top",
                            10915,
                            280,
                            "linear",
                            "${spark2}",
                            '43px',
                            '-107px'
                        ],
                        [
                            "eid7865",
                            "top",
                            11195,
                            67,
                            "linear",
                            "${spark2}",
                            '-107px',
                            '8px'
                        ],
                        [
                            "eid7888",
                            "top",
                            11262,
                            331,
                            "linear",
                            "${spark2}",
                            '8px',
                            '-25px'
                        ],
                        [
                            "eid8395",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-resultCorrect}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6734",
                            "skewX",
                            0,
                            296,
                            "linear",
                            "${narrator-text-balloon}",
                            '-22.83deg',
                            '22.09deg'
                        ],
                        [
                            "eid6739",
                            "skewX",
                            296,
                            188,
                            "linear",
                            "${narrator-text-balloon}",
                            '22.09deg',
                            '0deg'
                        ],
                        [
                            "eid6755",
                            "skewX",
                            9190,
                            211,
                            "linear",
                            "${narrator-text-balloon}",
                            '0deg',
                            '-16.78deg'
                        ],
                        [
                            "eid6765",
                            "skewX",
                            9472,
                            310,
                            "linear",
                            "${narrator-text-balloon}",
                            '-16.78deg',
                            '22.52deg'
                        ],
                        [
                            "eid7806",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-frame}",
                            '0',
                            '0'
                        ],
                        [
                            "eid7818",
                            "opacity",
                            10156,
                            94,
                            "linear",
                            "${slot-frame}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7721",
                            "opacity",
                            0,
                            725,
                            "linear",
                            "${stars}",
                            '1',
                            '0.64566929133858'
                        ],
                        [
                            "eid7722",
                            "opacity",
                            725,
                            715,
                            "linear",
                            "${stars}",
                            '0.645669',
                            '1'
                        ],
                        [
                            "eid7723",
                            "opacity",
                            1440,
                            310,
                            "linear",
                            "${stars}",
                            '1',
                            '0.778957'
                        ],
                        [
                            "eid7750",
                            "opacity",
                            1750,
                            463,
                            "linear",
                            "${stars}",
                            '0.778957',
                            '0'
                        ],
                        [
                            "eid6782",
                            "opacity",
                            0,
                            74,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8463",
                            "opacity",
                            4006,
                            233,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8450",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slotTrigger1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8090",
                            "height",
                            24384,
                            161,
                            "linear",
                            "${countdown3}",
                            '116px',
                            '389px'
                        ],
                        [
                            "eid8102",
                            "height",
                            24545,
                            86,
                            "linear",
                            "${countdown3}",
                            '389px',
                            '319px'
                        ],
                        [
                            "eid7916",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid7837",
                            "opacity",
                            10554,
                            114,
                            "linear",
                            "${spark2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7840",
                            "opacity",
                            10751,
                            74,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7843",
                            "opacity",
                            10915,
                            118,
                            "linear",
                            "${spark2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7844",
                            "opacity",
                            11119,
                            77,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7891",
                            "opacity",
                            11262,
                            81,
                            "linear",
                            "${spark2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7894",
                            "opacity",
                            11530,
                            63,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7709",
                            "opacity",
                            500,
                            1089,
                            "linear",
                            "${mall-inside-blur}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7726",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid7746",
                            "opacity",
                            1750,
                            371,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8247",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Images5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7754",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '1'
                        ],
                        [
                            "eid7753",
                            "opacity",
                            2121,
                            301,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8213",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Images2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6783",
                            "opacity",
                            0,
                            74,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6789",
                            "opacity",
                            9644,
                            138,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7903",
                            "height",
                            11344,
                            137,
                            "linear",
                            "${instruction-btn}",
                            '33px',
                            '92px'
                        ],
                        [
                            "eid7910",
                            "height",
                            11481,
                            65,
                            "linear",
                            "${instruction-btn}",
                            '92px',
                            '78px'
                        ],
                        [
                            "eid7731",
                            "rotateZ",
                            0,
                            2213,
                            "linear",
                            "${moon}",
                            '-3deg',
                            '-21deg'
                        ],
                        [
                            "eid7706",
                            "top",
                            0,
                            7862,
                            "linear",
                            "${mall-inside-blur}",
                            '-124px',
                            '-6px'
                        ],
                        [
                            "eid7832",
                            "width",
                            10554,
                            271,
                            "linear",
                            "${spark2}",
                            '151px',
                            '504px'
                        ],
                        [
                            "eid7855",
                            "width",
                            10825,
                            90,
                            "linear",
                            "${spark2}",
                            '504px',
                            '151px'
                        ],
                        [
                            "eid7860",
                            "width",
                            10915,
                            280,
                            "linear",
                            "${spark2}",
                            '151px',
                            '504px'
                        ],
                        [
                            "eid7868",
                            "width",
                            11195,
                            67,
                            "linear",
                            "${spark2}",
                            '504px',
                            '151px'
                        ],
                        [
                            "eid7886",
                            "width",
                            11262,
                            331,
                            "linear",
                            "${spark2}",
                            '151px',
                            '503px'
                        ],
                        [
                            "eid6747",
                            "left",
                            0,
                            296,
                            "linear",
                            "${Text2}",
                            '1116px',
                            '19px'
                        ],
                        [
                            "eid6748",
                            "left",
                            296,
                            188,
                            "linear",
                            "${Text2}",
                            '19px',
                            '140px'
                        ],
                        [
                            "eid5779",
                            "left",
                            8120,
                            940,
                            "linear",
                            "${crowd6}",
                            '971px',
                            '703px'
                        ],
                        [
                            "eid5783",
                            "left",
                            9060,
                            1008,
                            "linear",
                            "${crowd6}",
                            '703px',
                            '441px'
                        ],
                        [
                            "eid5787",
                            "left",
                            10068,
                            981,
                            "linear",
                            "${crowd6}",
                            '441px',
                            '158px'
                        ],
                        [
                            "eid5791",
                            "left",
                            11049,
                            1011,
                            "linear",
                            "${crowd6}",
                            '158px',
                            '-109px'
                        ],
                        [
                            "eid5795",
                            "left",
                            12060,
                            1000,
                            "linear",
                            "${crowd6}",
                            '-109px',
                            '-379px'
                        ],
                        [
                            "eid7915",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid7914",
                            "opacity",
                            11344,
                            77,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7792",
                            "top",
                            10250,
                            393,
                            "linear",
                            "${slot-frame}",
                            '581px',
                            '69px'
                        ],
                        [
                            "eid7800",
                            "top",
                            10250,
                            393,
                            "linear",
                            "${slot-blank}",
                            '604px',
                            '84px'
                        ],
                        [
                            "eid8390",
                            "display",
                            0,
                            0,
                            "linear",
                            "${spinTrigger}",
                            'block',
                            'block'
                        ],
                        [
                            "eid8391",
                            "display",
                            24863,
                            0,
                            "linear",
                            "${spinTrigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7833",
                            "left",
                            10554,
                            271,
                            "linear",
                            "${spark2}",
                            '282px',
                            '124px'
                        ],
                        [
                            "eid7853",
                            "left",
                            10825,
                            90,
                            "linear",
                            "${spark2}",
                            '124px',
                            '590px'
                        ],
                        [
                            "eid7859",
                            "left",
                            10915,
                            280,
                            "linear",
                            "${spark2}",
                            '590px',
                            '412px'
                        ],
                        [
                            "eid7867",
                            "left",
                            11195,
                            67,
                            "linear",
                            "${spark2}",
                            '412px',
                            '33px'
                        ],
                        [
                            "eid7887",
                            "left",
                            11262,
                            331,
                            "linear",
                            "${spark2}",
                            '33px',
                            '3px'
                        ],
                        [
                            "eid7905",
                            "width",
                            11344,
                            137,
                            "linear",
                            "${instruction-btn}",
                            '105px',
                            '280px'
                        ],
                        [
                            "eid7909",
                            "width",
                            11481,
                            65,
                            "linear",
                            "${instruction-btn}",
                            '280px',
                            '240px'
                        ],
                        [
                            "eid7830",
                            "height",
                            10554,
                            271,
                            "linear",
                            "${spark2}",
                            '157px',
                            '524px'
                        ],
                        [
                            "eid7851",
                            "height",
                            10825,
                            90,
                            "linear",
                            "${spark2}",
                            '524px',
                            '157px'
                        ],
                        [
                            "eid7858",
                            "height",
                            10915,
                            280,
                            "linear",
                            "${spark2}",
                            '157px',
                            '524px'
                        ],
                        [
                            "eid7866",
                            "height",
                            11195,
                            67,
                            "linear",
                            "${spark2}",
                            '524px',
                            '157px'
                        ],
                        [
                            "eid7885",
                            "height",
                            11262,
                            331,
                            "linear",
                            "${spark2}",
                            '157px',
                            '523px'
                        ],
                        [
                            "eid7705",
                            "left",
                            0,
                            7862,
                            "linear",
                            "${mall-inside-blur}",
                            '-50px',
                            '-6px'
                        ],
                        [
                            "eid7764",
                            "left",
                            9190,
                            211,
                            "linear",
                            "${Text}",
                            '171px',
                            '248px'
                        ],
                        [
                            "eid7763",
                            "left",
                            9472,
                            310,
                            "linear",
                            "${Text}",
                            '248px',
                            '-778px'
                        ],
                        [
                            "eid7974",
                            "top",
                            10250,
                            393,
                            "linear",
                            "${spin-button}",
                            '971px',
                            '460px'
                        ],
                        [
                            "eid8226",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Images3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8091",
                            "top",
                            24384,
                            161,
                            "linear",
                            "${countdown3}",
                            '49px',
                            '99px'
                        ],
                        [
                            "eid8103",
                            "top",
                            24545,
                            86,
                            "linear",
                            "${countdown3}",
                            '99px',
                            '132px'
                        ],
                        [
                            "eid5780",
                            "top",
                            8120,
                            331,
                            "linear",
                            "${crowd6}",
                            '215px',
                            '225px'
                        ],
                        [
                            "eid5800",
                            "top",
                            8451,
                            359,
                            "linear",
                            "${crowd6}",
                            '225px',
                            '214px'
                        ],
                        [
                            "eid5801",
                            "top",
                            8810,
                            250,
                            "linear",
                            "${crowd6}",
                            '214px',
                            '219px'
                        ],
                        [
                            "eid5784",
                            "top",
                            9060,
                            361,
                            "linear",
                            "${crowd6}",
                            '219px',
                            '225px'
                        ],
                        [
                            "eid5802",
                            "top",
                            9421,
                            328,
                            "linear",
                            "${crowd6}",
                            '225px',
                            '213px'
                        ],
                        [
                            "eid5803",
                            "top",
                            9749,
                            319,
                            "linear",
                            "${crowd6}",
                            '213px',
                            '218px'
                        ],
                        [
                            "eid5788",
                            "top",
                            10068,
                            312,
                            "linear",
                            "${crowd6}",
                            '218px',
                            '212px'
                        ],
                        [
                            "eid5804",
                            "top",
                            10380,
                            362,
                            "linear",
                            "${crowd6}",
                            '212px',
                            '226px'
                        ],
                        [
                            "eid5805",
                            "top",
                            10742,
                            307,
                            "linear",
                            "${crowd6}",
                            '226px',
                            '220px'
                        ],
                        [
                            "eid5792",
                            "top",
                            11049,
                            347,
                            "linear",
                            "${crowd6}",
                            '220px',
                            '229px'
                        ],
                        [
                            "eid5806",
                            "top",
                            11396,
                            331,
                            "linear",
                            "${crowd6}",
                            '229px',
                            '212px'
                        ],
                        [
                            "eid5807",
                            "top",
                            11727,
                            333,
                            "linear",
                            "${crowd6}",
                            '212px',
                            '219px'
                        ],
                        [
                            "eid5796",
                            "top",
                            12060,
                            348,
                            "linear",
                            "${crowd6}",
                            '219px',
                            '213px'
                        ],
                        [
                            "eid5808",
                            "top",
                            12408,
                            652,
                            "linear",
                            "${crowd6}",
                            '213px',
                            '224px'
                        ],
                        [
                            "eid8432",
                            "left",
                            24866,
                            0,
                            "linear",
                            "${spin-button}",
                            '808px',
                            '808px'
                        ],
                        [
                            "eid8097",
                            "opacity",
                            24384,
                            97,
                            "linear",
                            "${countdown3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8108",
                            "opacity",
                            24750,
                            113,
                            "linear",
                            "${countdown3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5774",
                            "opacity",
                            8120,
                            147,
                            "linear",
                            "${crowd6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5799",
                            "opacity",
                            12560,
                            500,
                            "linear",
                            "${crowd6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7711",
                            "top",
                            0,
                            0,
                            "linear",
                            "${moon}",
                            '-12px',
                            '8px'
                        ],
                        [
                            "eid7741",
                            "top",
                            1000,
                            1321,
                            "linear",
                            "${moon}",
                            '8px',
                            '-433px'
                        ],
                        [
                            "eid7799",
                            "top",
                            10250,
                            393,
                            "linear",
                            "${slot-blankCopy2}",
                            '604px',
                            '84px'
                        ],
                        [
                            "eid7807",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-blank}",
                            '0',
                            '0'
                        ],
                        [
                            "eid7819",
                            "opacity",
                            10156,
                            94,
                            "linear",
                            "${slot-blank}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7971",
                            "display",
                            0,
                            0,
                            "linear",
                            "${spin-button}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7970",
                            "display",
                            10250,
                            0,
                            "linear",
                            "${spin-button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7906",
                            "left",
                            11344,
                            137,
                            "linear",
                            "${instruction-btn}",
                            '52px',
                            '0px'
                        ],
                        [
                            "eid7907",
                            "left",
                            11481,
                            65,
                            "linear",
                            "${instruction-btn}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid7713",
                            "height",
                            0,
                            0,
                            "linear",
                            "${moon}",
                            '247px',
                            '547px'
                        ],
                        [
                            "eid7740",
                            "height",
                            1000,
                            1321,
                            "linear",
                            "${moon}",
                            '547px',
                            '1469px'
                        ],
                        [
                            "eid8448",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slotTrigger3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7918",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7917",
                            "display",
                            11481,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6742",
                            "width",
                            0,
                            296,
                            "linear",
                            "${narrator-text-balloon}",
                            '858px',
                            '744px'
                        ],
                        [
                            "eid6743",
                            "width",
                            296,
                            188,
                            "linear",
                            "${narrator-text-balloon}",
                            '744px',
                            '858px'
                        ],
                        [
                            "eid6760",
                            "width",
                            9190,
                            211,
                            "linear",
                            "${narrator-text-balloon}",
                            '858px',
                            '826px'
                        ],
                        [
                            "eid6767",
                            "width",
                            9472,
                            310,
                            "linear",
                            "${narrator-text-balloon}",
                            '826px',
                            '858px'
                        ],
                        [
                            "eid8237",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Images4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7718",
                            "width",
                            0,
                            0,
                            "linear",
                            "${moon}",
                            '247px',
                            '547px'
                        ],
                        [
                            "eid7743",
                            "width",
                            1000,
                            1321,
                            "linear",
                            "${moon}",
                            '547px',
                            '1469px'
                        ],
                        [
                            "eid5723",
                            "top",
                            4609,
                            545,
                            "linear",
                            "${crowd3}",
                            '183px',
                            '187px'
                        ],
                        [
                            "eid5736",
                            "top",
                            5154,
                            409,
                            "linear",
                            "${crowd3}",
                            '187px',
                            '169px'
                        ],
                        [
                            "eid5727",
                            "top",
                            5563,
                            557,
                            "linear",
                            "${crowd3}",
                            '169px',
                            '189px'
                        ],
                        [
                            "eid5737",
                            "top",
                            6120,
                            520,
                            "linear",
                            "${crowd3}",
                            '189px',
                            '179px'
                        ],
                        [
                            "eid5731",
                            "top",
                            6640,
                            561,
                            "linear",
                            "${crowd3}",
                            '179px',
                            '184px'
                        ],
                        [
                            "eid5738",
                            "top",
                            7201,
                            560,
                            "linear",
                            "${crowd3}",
                            '184px',
                            '163px'
                        ],
                        [
                            "eid5735",
                            "top",
                            7761,
                            598,
                            "linear",
                            "${crowd3}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid5739",
                            "top",
                            8359,
                            574,
                            "linear",
                            "${crowd3}",
                            '193px',
                            '183px'
                        ],
                        [
                            "eid7762",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8462",
                            "opacity",
                            4351,
                            217,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7767",
                            "opacity",
                            9644,
                            138,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5600",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${crowd4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid5742",
                            "opacity",
                            2213,
                            108,
                            "linear",
                            "${crowd4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5763",
                            "opacity",
                            6764,
                            199,
                            "linear",
                            "${crowd4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5596",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${crowd3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid5717",
                            "opacity",
                            4609,
                            152,
                            "linear",
                            "${crowd3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8093",
                            "left",
                            24384,
                            161,
                            "linear",
                            "${countdown3}",
                            '456px',
                            '205px'
                        ],
                        [
                            "eid8105",
                            "left",
                            24545,
                            86,
                            "linear",
                            "${countdown3}",
                            '205px',
                            '260px'
                        ],
                        [
                            "eid7809",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-blankCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid7821",
                            "opacity",
                            10156,
                            94,
                            "linear",
                            "${slot-blankCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5722",
                            "left",
                            4609,
                            954,
                            "linear",
                            "${crowd3}",
                            '-278px',
                            '73px'
                        ],
                        [
                            "eid5726",
                            "left",
                            5563,
                            1077,
                            "linear",
                            "${crowd3}",
                            '73px',
                            '471px'
                        ],
                        [
                            "eid5730",
                            "left",
                            6640,
                            1121,
                            "linear",
                            "${crowd3}",
                            '471px',
                            '801px'
                        ],
                        [
                            "eid5734",
                            "left",
                            7761,
                            1172,
                            "linear",
                            "${crowd3}",
                            '801px',
                            '1093px'
                        ],
                        [
                            "eid8449",
                            "display",
                            0,
                            0,
                            "linear",
                            "${slotTrigger2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8092",
                            "width",
                            24384,
                            161,
                            "linear",
                            "${countdown3}",
                            '190px',
                            '638px'
                        ],
                        [
                            "eid8104",
                            "width",
                            24545,
                            86,
                            "linear",
                            "${countdown3}",
                            '638px',
                            '524px'
                        ],
                        [
                            "eid7801",
                            "top",
                            10250,
                            393,
                            "linear",
                            "${slot-blankCopy}",
                            '604px',
                            '84px'
                        ],
                        [
                            "eid7703",
                            "left",
                            0,
                            7862,
                            "linear",
                            "${mall-inside}",
                            '-50px',
                            '-6px'
                        ],
                        [
                            "eid5747",
                            "left",
                            2213,
                            1110,
                            "linear",
                            "${crowd4}",
                            '996px',
                            '698px'
                        ],
                        [
                            "eid5751",
                            "left",
                            3323,
                            1185,
                            "linear",
                            "${crowd4}",
                            '698px',
                            '398px'
                        ],
                        [
                            "eid5755",
                            "left",
                            4508,
                            1205,
                            "linear",
                            "${crowd4}",
                            '398px',
                            '104px'
                        ],
                        [
                            "eid5759",
                            "left",
                            5713,
                            1250,
                            "linear",
                            "${crowd4}",
                            '104px',
                            '-174px'
                        ],
                        [
                            "eid8394",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-resultWrong}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5748",
                            "top",
                            2213,
                            291,
                            "linear",
                            "${crowd4}",
                            '305px',
                            '299px'
                        ],
                        [
                            "eid5764",
                            "top",
                            2504,
                            459,
                            "linear",
                            "${crowd4}",
                            '299px',
                            '308px'
                        ],
                        [
                            "eid5765",
                            "top",
                            2963,
                            360,
                            "linear",
                            "${crowd4}",
                            '308px',
                            '301px'
                        ],
                        [
                            "eid5752",
                            "top",
                            3323,
                            373,
                            "linear",
                            "${crowd4}",
                            '301px',
                            '308px'
                        ],
                        [
                            "eid5766",
                            "top",
                            3696,
                            467,
                            "linear",
                            "${crowd4}",
                            '308px',
                            '302px'
                        ],
                        [
                            "eid5767",
                            "top",
                            4163,
                            345,
                            "linear",
                            "${crowd4}",
                            '302px',
                            '307px'
                        ],
                        [
                            "eid5756",
                            "top",
                            4508,
                            350,
                            "linear",
                            "${crowd4}",
                            '307px',
                            '312px'
                        ],
                        [
                            "eid5768",
                            "top",
                            4858,
                            461,
                            "linear",
                            "${crowd4}",
                            '312px',
                            '297px'
                        ],
                        [
                            "eid5769",
                            "top",
                            5319,
                            394,
                            "linear",
                            "${crowd4}",
                            '297px',
                            '302px'
                        ],
                        [
                            "eid5760",
                            "top",
                            5713,
                            358,
                            "linear",
                            "${crowd4}",
                            '302px',
                            '310px'
                        ],
                        [
                            "eid5770",
                            "top",
                            6071,
                            392,
                            "linear",
                            "${crowd4}",
                            '310px',
                            '302px'
                        ],
                        [
                            "eid5771",
                            "top",
                            6463,
                            500,
                            "linear",
                            "${crowd4}",
                            '302px',
                            '308px'
                        ],
                        [
                            "eid8453",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7704",
                            "top",
                            0,
                            7862,
                            "linear",
                            "${mall-inside}",
                            '-124px',
                            '-6px'
                        ],
                        [
                            "eid7717",
                            "left",
                            0,
                            0,
                            "linear",
                            "${moon}",
                            '455px',
                            '251px'
                        ],
                        [
                            "eid7742",
                            "left",
                            1000,
                            1321,
                            "linear",
                            "${moon}",
                            '251px',
                            '-237px'
                        ],
                        [
                            "eid8170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Slot_BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8169",
                            "display",
                            9908,
                            0,
                            "linear",
                            "${Slot_BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6733",
                            "left",
                            0,
                            296,
                            "linear",
                            "${narrator-text-balloon}",
                            '1047px',
                            '33px'
                        ],
                        [
                            "eid6741",
                            "left",
                            296,
                            188,
                            "linear",
                            "${narrator-text-balloon}",
                            '33px',
                            '83px'
                        ],
                        [
                            "eid6756",
                            "left",
                            9190,
                            211,
                            "linear",
                            "${narrator-text-balloon}",
                            '83px',
                            '168px'
                        ],
                        [
                            "eid6766",
                            "left",
                            9472,
                            310,
                            "linear",
                            "${narrator-text-balloon}",
                            '168px',
                            '-868px'
                        ],
                            [ "eid8176", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Slot_BG}', [] ] ],
                            [ "eid8195", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Images1}', [] ] ],
                            [ "eid8396", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-resultWrong}', [] ] ],
                            [ "eid8254", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Images5}', [] ] ],
                            [ "eid8220", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Images2}', [] ] ],
                            [ "eid8234", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Images3}', [] ] ],
                            [ "eid8151", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${spinning-slots}', [] ] ],
                            [ "eid8069", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${spin-button}', [] ] ],
                            [ "eid8397", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-resultCorrect}', [] ] ],
                            [ "eid7968", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid8244", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Images4}', [] ] ],
                            [ "eid8177", "trigger", 9908, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Slot_BG}', [] ] ],
                            [ "eid8070", "trigger", 10250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${spin-button}', [] ] ],
                            [ "eid7969", "trigger", 11481, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ]
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
                            type: 'image',
                            id: 'narrator-text-balloon2',
                            opacity: '0',
                            rect: ['-179px', '-1px', '258px', '77px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Click the spin button, then compare the 3 images. Look at the style and medium of each image, and decide which image is the odd one out. When you’re ready, click the image to see if you’re right.',
                            id: 'Text3',
                            opacity: '0',
                            align: 'center',
                            rect: ['64px', '20px', '671px', '127px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '744px', '189px']
                        }
                    }
                },
                timeline: {
                    duration: 13000,
                    autoPlay: true,
                    data: [
                        [
                            "eid7935",
                            "height",
                            0,
                            151,
                            "linear",
                            "${narrator-text-balloon2}",
                            '69px',
                            '189px'
                        ],
                        [
                            "eid7956",
                            "height",
                            12916,
                            84,
                            "linear",
                            "${narrator-text-balloon2}",
                            '189px',
                            '77px'
                        ],
                        [
                            "eid7938",
                            "top",
                            0,
                            151,
                            "linear",
                            "${narrator-text-balloon2}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid7959",
                            "top",
                            12916,
                            84,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid7936",
                            "width",
                            0,
                            151,
                            "linear",
                            "${narrator-text-balloon2}",
                            '236px',
                            '788px'
                        ],
                        [
                            "eid7957",
                            "width",
                            12916,
                            84,
                            "linear",
                            "${narrator-text-balloon2}",
                            '788px',
                            '258px'
                        ],
                        [
                            "eid7947",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid7946",
                            "opacity",
                            108,
                            67,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7967",
                            "opacity",
                            12874,
                            42,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7942",
                            "opacity",
                            0,
                            67,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7964",
                            "opacity",
                            12958,
                            42,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7937",
                            "left",
                            0,
                            151,
                            "linear",
                            "${narrator-text-balloon2}",
                            '-217px',
                            '0px'
                        ],
                        [
                            "eid7958",
                            "left",
                            12916,
                            84,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0px',
                            '-179px'
                        ]
                    ]
                }
            },
            "spin-button": {
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
                            id: 'slot-spin-btn',
                            rect: ['-22px', '-21px', '191px', '116px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-spin-btn.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-1px', '191px', '116px', 'auto', 'auto'],
                            id: 'slot-spin-btn-lit',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-spin-btn-lit.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '191px', '116px']
                        }
                    }
                },
                timeline: {
                    duration: 5616,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "click": 5250
                    },
                    data: [
                        [
                            "eid7987",
                            "left",
                            500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-22px'
                        ],
                        [
                            "eid7991",
                            "left",
                            750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-22px',
                            '0px'
                        ],
                        [
                            "eid7995",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-22px'
                        ],
                        [
                            "eid7999",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-22px',
                            '0px'
                        ],
                        [
                            "eid8003",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-22px'
                        ],
                        [
                            "eid8007",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-22px',
                            '0px'
                        ],
                        [
                            "eid8011",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-22px'
                        ],
                        [
                            "eid8015",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-22px',
                            '0px'
                        ],
                        [
                            "eid8047",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-22px'
                        ],
                        [
                            "eid8051",
                            "left",
                            2750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-22px',
                            '0px'
                        ],
                        [
                            "eid8055",
                            "left",
                            3000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-22px'
                        ],
                        [
                            "eid8059",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-22px',
                            '0px'
                        ],
                        [
                            "eid8063",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-22px'
                        ],
                        [
                            "eid8067",
                            "left",
                            3750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-22px',
                            '0px'
                        ],
                        [
                            "eid8073",
                            "left",
                            4000,
                            370,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-22px'
                        ],
                        [
                            "eid8077",
                            "left",
                            4370,
                            456,
                            "linear",
                            "${slot-spin-btn}",
                            '-22px',
                            '0px'
                        ],
                        [
                            "eid7976",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-spin-btn-lit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8081",
                            "opacity",
                            5250,
                            40,
                            "linear",
                            "${slot-spin-btn-lit}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8224",
                            "opacity",
                            5370,
                            31,
                            "linear",
                            "${slot-spin-btn-lit}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7985",
                            "height",
                            500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '116px',
                            '146px'
                        ],
                        [
                            "eid7990",
                            "height",
                            750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '146px',
                            '116px'
                        ],
                        [
                            "eid7994",
                            "height",
                            1000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '116px',
                            '146px'
                        ],
                        [
                            "eid7998",
                            "height",
                            1250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '146px',
                            '116px'
                        ],
                        [
                            "eid8002",
                            "height",
                            1500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '116px',
                            '146px'
                        ],
                        [
                            "eid8006",
                            "height",
                            1750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '146px',
                            '116px'
                        ],
                        [
                            "eid8010",
                            "height",
                            2000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '116px',
                            '146px'
                        ],
                        [
                            "eid8014",
                            "height",
                            2250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '146px',
                            '116px'
                        ],
                        [
                            "eid8046",
                            "height",
                            2500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '116px',
                            '146px'
                        ],
                        [
                            "eid8050",
                            "height",
                            2750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '146px',
                            '116px'
                        ],
                        [
                            "eid8054",
                            "height",
                            3000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '116px',
                            '146px'
                        ],
                        [
                            "eid8058",
                            "height",
                            3250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '146px',
                            '116px'
                        ],
                        [
                            "eid8062",
                            "height",
                            3500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '116px',
                            '146px'
                        ],
                        [
                            "eid8066",
                            "height",
                            3750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '146px',
                            '116px'
                        ],
                        [
                            "eid8072",
                            "height",
                            4000,
                            370,
                            "linear",
                            "${slot-spin-btn}",
                            '116px',
                            '146px'
                        ],
                        [
                            "eid8076",
                            "height",
                            4370,
                            456,
                            "linear",
                            "${slot-spin-btn}",
                            '146px',
                            '116px'
                        ],
                        [
                            "eid7988",
                            "width",
                            500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '191px',
                            '240px'
                        ],
                        [
                            "eid7992",
                            "width",
                            750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '240px',
                            '191px'
                        ],
                        [
                            "eid7996",
                            "width",
                            1000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '191px',
                            '240px'
                        ],
                        [
                            "eid8000",
                            "width",
                            1250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '240px',
                            '191px'
                        ],
                        [
                            "eid8004",
                            "width",
                            1500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '191px',
                            '240px'
                        ],
                        [
                            "eid8008",
                            "width",
                            1750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '240px',
                            '191px'
                        ],
                        [
                            "eid8012",
                            "width",
                            2000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '191px',
                            '240px'
                        ],
                        [
                            "eid8016",
                            "width",
                            2250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '240px',
                            '191px'
                        ],
                        [
                            "eid8048",
                            "width",
                            2500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '191px',
                            '240px'
                        ],
                        [
                            "eid8052",
                            "width",
                            2750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '240px',
                            '191px'
                        ],
                        [
                            "eid8056",
                            "width",
                            3000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '191px',
                            '240px'
                        ],
                        [
                            "eid8060",
                            "width",
                            3250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '240px',
                            '191px'
                        ],
                        [
                            "eid8064",
                            "width",
                            3500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '191px',
                            '240px'
                        ],
                        [
                            "eid8068",
                            "width",
                            3750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '240px',
                            '191px'
                        ],
                        [
                            "eid8074",
                            "width",
                            4000,
                            370,
                            "linear",
                            "${slot-spin-btn}",
                            '191px',
                            '240px'
                        ],
                        [
                            "eid8078",
                            "width",
                            4370,
                            456,
                            "linear",
                            "${slot-spin-btn}",
                            '240px',
                            '191px'
                        ],
                        [
                            "eid7986",
                            "top",
                            500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-21px'
                        ],
                        [
                            "eid7989",
                            "top",
                            750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-21px',
                            '0px'
                        ],
                        [
                            "eid7993",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-21px'
                        ],
                        [
                            "eid7997",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-21px',
                            '0px'
                        ],
                        [
                            "eid8001",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-21px'
                        ],
                        [
                            "eid8005",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-21px',
                            '0px'
                        ],
                        [
                            "eid8009",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-21px'
                        ],
                        [
                            "eid8013",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-21px',
                            '0px'
                        ],
                        [
                            "eid8045",
                            "top",
                            2500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-21px'
                        ],
                        [
                            "eid8049",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-21px',
                            '0px'
                        ],
                        [
                            "eid8053",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-21px'
                        ],
                        [
                            "eid8057",
                            "top",
                            3250,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-21px',
                            '0px'
                        ],
                        [
                            "eid8061",
                            "top",
                            3500,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-21px'
                        ],
                        [
                            "eid8065",
                            "top",
                            3750,
                            250,
                            "linear",
                            "${slot-spin-btn}",
                            '-21px',
                            '0px'
                        ],
                        [
                            "eid8071",
                            "top",
                            4000,
                            370,
                            "linear",
                            "${slot-spin-btn}",
                            '0px',
                            '-21px'
                        ],
                        [
                            "eid8075",
                            "top",
                            4370,
                            456,
                            "linear",
                            "${slot-spin-btn}",
                            '-21px',
                            '0px'
                        ]
                    ]
                }
            },
            "spinning-slots": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '4px', '327px', '536px', 'auto', 'auto'],
                            id: 'slot-spinning',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-spinning.png', '0px', '0px']
                        },
                        {
                            rect: ['327px', '30px', '327px', '536px', 'auto', 'auto'],
                            id: 'slot-spinningCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-spinning.png', '0px', '0px']
                        },
                        {
                            rect: ['657px', '31px', '327px', '536px', 'auto', 'auto'],
                            id: 'slot-spinningCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-spinning.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '984px', '563px']
                        }
                    }
                },
                timeline: {
                    duration: 1167,
                    autoPlay: true,
                    data: [
                        [
                            "eid8120",
                            "opacity",
                            0,
                            96,
                            "linear",
                            "${slot-spinningCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8150",
                            "opacity",
                            1014,
                            81,
                            "linear",
                            "${slot-spinningCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8125",
                            "top",
                            0,
                            171,
                            "linear",
                            "${slot-spinning}",
                            '0px',
                            '26px'
                        ],
                        [
                            "eid8127",
                            "top",
                            171,
                            166,
                            "linear",
                            "${slot-spinning}",
                            '26px',
                            '4px'
                        ],
                        [
                            "eid8128",
                            "top",
                            337,
                            170,
                            "linear",
                            "${slot-spinning}",
                            '4px',
                            '26px'
                        ],
                        [
                            "eid8129",
                            "top",
                            507,
                            178,
                            "linear",
                            "${slot-spinning}",
                            '26px',
                            '4px'
                        ],
                        [
                            "eid8131",
                            "top",
                            686,
                            329,
                            "linear",
                            "${slot-spinning}",
                            '4px',
                            '31px'
                        ],
                        [
                            "eid8122",
                            "opacity",
                            0,
                            96,
                            "linear",
                            "${slot-spinning}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8134",
                            "opacity",
                            943,
                            72,
                            "linear",
                            "${slot-spinning}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8121",
                            "opacity",
                            0,
                            96,
                            "linear",
                            "${slot-spinningCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8168",
                            "opacity",
                            1095,
                            72,
                            "linear",
                            "${slot-spinningCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8137",
                            "top",
                            0,
                            96,
                            "linear",
                            "${slot-spinningCopy}",
                            '15px',
                            '3px'
                        ],
                        [
                            "eid8139",
                            "top",
                            96,
                            183,
                            "linear",
                            "${slot-spinningCopy}",
                            '3px',
                            '29px'
                        ],
                        [
                            "eid8141",
                            "top",
                            279,
                            183,
                            "linear",
                            "${slot-spinningCopy}",
                            '29px',
                            '4px'
                        ],
                        [
                            "eid8143",
                            "top",
                            462,
                            172,
                            "linear",
                            "${slot-spinningCopy}",
                            '4px',
                            '28px'
                        ],
                        [
                            "eid8145",
                            "top",
                            634,
                            176,
                            "linear",
                            "${slot-spinningCopy}",
                            '28px',
                            '2px'
                        ],
                        [
                            "eid8147",
                            "top",
                            810,
                            239,
                            "linear",
                            "${slot-spinningCopy}",
                            '2px',
                            '30px'
                        ],
                        [
                            "eid8155",
                            "top",
                            0,
                            171,
                            "linear",
                            "${slot-spinningCopy2}",
                            '27px',
                            '3px'
                        ],
                        [
                            "eid8157",
                            "top",
                            171,
                            209,
                            "linear",
                            "${slot-spinningCopy2}",
                            '3px',
                            '30px'
                        ],
                        [
                            "eid8159",
                            "top",
                            380,
                            181,
                            "linear",
                            "${slot-spinningCopy2}",
                            '30px',
                            '3px'
                        ],
                        [
                            "eid8161",
                            "top",
                            561,
                            200,
                            "linear",
                            "${slot-spinningCopy2}",
                            '3px',
                            '30px'
                        ],
                        [
                            "eid8163",
                            "top",
                            761,
                            155,
                            "linear",
                            "${slot-spinningCopy2}",
                            '30px',
                            '4px'
                        ],
                        [
                            "eid8165",
                            "top",
                            915,
                            203,
                            "linear",
                            "${slot-spinningCopy2}",
                            '4px',
                            '31px'
                        ]
                    ]
                }
            },
            "Slot_BG": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['1069'], [0, 0, 0], [1, 1, 1]],
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            id: 'slot-BG',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-BG.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '190px', '190px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid7776",
                            "height",
                            0,
                            468,
                            "linear",
                            "${slot-BG}",
                            '190px',
                            '1198px'
                        ],
                        [
                            "eid7777",
                            "top",
                            0,
                            468,
                            "linear",
                            "${slot-BG}",
                            '0px',
                            '-595px'
                        ],
                        [
                            "eid7779",
                            "width",
                            0,
                            468,
                            "linear",
                            "${slot-BG}",
                            '190px',
                            '1198px'
                        ],
                        [
                            "eid7778",
                            "left",
                            0,
                            468,
                            "linear",
                            "${slot-BG}",
                            '0px',
                            '-589px'
                        ],
                        [
                            "eid7785",
                            "rotateZ",
                            0,
                            2218,
                            "linear",
                            "${slot-BG}",
                            '0deg',
                            '450deg'
                        ],
                        [
                            "eid7787",
                            "rotateZ",
                            2218,
                            560,
                            "linear",
                            "${slot-BG}",
                            '450deg',
                            '540deg'
                        ],
                        [
                            "eid7789",
                            "rotateZ",
                            2778,
                            500,
                            "linear",
                            "${slot-BG}",
                            '540deg',
                            '571deg'
                        ],
                        [
                            "eid8173",
                            "rotateZ",
                            3500,
                            818,
                            "linear",
                            "${slot-BG}",
                            '571deg',
                            '900deg'
                        ],
                        [
                            "eid8175",
                            "rotateZ",
                            4318,
                            682,
                            "linear",
                            "${slot-BG}",
                            '900deg',
                            '1069deg'
                        ],
                        [
                            "eid7782",
                            "opacity",
                            62,
                            406,
                            "linear",
                            "${slot-BG}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Images-set1": {
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
                            id: 'slot2',
                            rect: ['327px', '42px', '327px', '462px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-news2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '26px', '327px', '462px', 'auto', 'auto'],
                            id: 'slot1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-news1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'slot3',
                            rect: ['654px', '39px', '327px', '419px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-magz.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '59px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['330px', '59px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['655px', '59px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['535px', '80px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['535px', '80px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right2',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['209px', '85px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['209px', '85px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right1',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['856px', '80px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong3',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['856px', '80px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right3',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '981px', '504px']
                        }
                    }
                },
                timeline: {
                    duration: 344,
                    autoPlay: true,
                    data: [
                        [
                            "eid8354",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8359",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8355",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8356",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8357",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8358",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8202",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8211",
                            "opacity",
                            138,
                            0,
                            "linear",
                            "${slot-highlight1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8201",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8210",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${slot-highlight3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8200",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8209",
                            "opacity",
                            187,
                            0,
                            "linear",
                            "${slot-highlight2}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "Images-set2": {
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
                            id: 'slot2',
                            rect: ['325px', '0px', '327px', '448px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-youtube.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'slot1',
                            rect: ['0px', '1px', '324px', '458px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-drama2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'slot3',
                            rect: ['652px', '1px', '324px', '448px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-drama.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '32px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['328px', '32px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['653px', '32px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['530px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['530px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['204px', '59px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['204px', '59px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['851px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong3',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['851px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right3',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '976px', '459px']
                        }
                    }
                },
                timeline: {
                    duration: 344,
                    autoPlay: true,
                    data: [
                        [
                            "eid8360",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8365",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8361",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8216",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8217",
                            "opacity",
                            187,
                            0,
                            "linear",
                            "${slot-highlight2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8363",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8364",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8218",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8219",
                            "opacity",
                            138,
                            0,
                            "linear",
                            "${slot-highlight1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8214",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8215",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${slot-highlight3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8362",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right1}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Images-set3": {
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
                            id: 'slot1',
                            rect: ['0px', '0px', '325px', '459px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-meme2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'slot3',
                            rect: ['651px', '2px', '324px', '458px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-meme1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'slot2',
                            rect: ['326px', '0px', '324px', '448px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-comic.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '33px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['327px', '33px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['652px', '33px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['530px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['530px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['204px', '59px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['204px', '59px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['851px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong3',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['851px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right3',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '975px', '460px']
                        }
                    }
                },
                timeline: {
                    duration: 344,
                    autoPlay: true,
                    data: [
                        [
                            "eid8228",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8229",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${slot-highlight3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8371",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8367",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8230",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8231",
                            "opacity",
                            187,
                            0,
                            "linear",
                            "${slot-highlight2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8369",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8370",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8232",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8233",
                            "opacity",
                            138,
                            0,
                            "linear",
                            "${slot-highlight1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8368",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8366",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Images-set4": {
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
                            id: 'slot1',
                            rect: ['0px', '0px', '325px', '460px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-TVnews2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'slot2',
                            rect: ['323px', '9px', '327px', '448px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-TVnews1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'slot3',
                            rect: ['650px', '0px', '323px', '448px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-docu.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '32px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['328px', '32px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['653px', '32px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['530px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['530px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['204px', '59px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['204px', '59px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['851px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong3',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['851px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right3',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '973px', '460px']
                        }
                    }
                },
                timeline: {
                    duration: 344,
                    autoPlay: true,
                    data: [
                        [
                            "eid8372",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8377",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8373",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8240",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8241",
                            "opacity",
                            187,
                            0,
                            "linear",
                            "${slot-highlight2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8375",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8376",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8242",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8243",
                            "opacity",
                            138,
                            0,
                            "linear",
                            "${slot-highlight1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8238",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8239",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${slot-highlight3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8374",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right1}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Images-set5": {
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
                            id: 'slot1',
                            rect: ['0px', '0px', '325px', '460px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-webad.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'slot2',
                            rect: ['326px', '2px', '325px', '459px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-paper-ad2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'slot3',
                            rect: ['651px', '2px', '325px', '448px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/slot-paper-ad1.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '32px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['328px', '32px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['653px', '32px', '323px', '383px', 'auto', 'auto'],
                            id: 'slot-highlight3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/slot-highlight.png', '0px', '0px']
                        },
                        {
                            rect: ['530px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['530px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['204px', '59px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['204px', '59px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['851px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'wrong3',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['851px', '54px', '100px', '100px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right3',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '976px', '461px']
                        }
                    }
                },
                timeline: {
                    duration: 344,
                    autoPlay: true,
                    data: [
                        [
                            "eid8378",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8383",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8379",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8380",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8381",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8382",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8252",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8253",
                            "opacity",
                            138,
                            0,
                            "linear",
                            "${slot-highlight1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8248",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8249",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${slot-highlight3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8250",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${slot-highlight2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8251",
                            "opacity",
                            187,
                            0,
                            "linear",
                            "${slot-highlight2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "game-result": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-160px', '-172px', '1048px', '608px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect4',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.63)']
                        },
                        {
                            rect: ['261px', '64px', '234px', '83px', 'auto', 'auto'],
                            id: 'game_result1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/game%20result1.png', '0px', '0px']
                        },
                        {
                            rect: ['284px', '332px', '196px', '63px', 'auto', 'auto'],
                            type: 'image',
                            id: 'close-btn1',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn1.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text8',
                            text: 'You\'ve got the wrong answer.',
                            opacity: '1',
                            rect: ['-3px', '226px', '746px', '63px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [29, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'subText',
                            text: 'Click \"Close\"  and spin again to load the next images.',
                            align: 'center',
                            rect: ['-2px', '295px', '800px', '34px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '212px']
                        }
                    }
                },
                timeline: {
                    duration: 350,
                    autoPlay: true,
                    data: [
                        [
                            "eid4356",
                            "top",
                            0,
                            135,
                            "linear",
                            "${game_result1}",
                            '64px',
                            '-38px'
                        ],
                        [
                            "eid4360",
                            "top",
                            135,
                            115,
                            "linear",
                            "${game_result1}",
                            '-38px',
                            '0px'
                        ],
                        [
                            "eid4355",
                            "height",
                            0,
                            135,
                            "linear",
                            "${game_result1}",
                            '83px',
                            '276px'
                        ],
                        [
                            "eid4362",
                            "height",
                            135,
                            115,
                            "linear",
                            "${game_result1}",
                            '276px',
                            '212px'
                        ],
                        [
                            "eid4357",
                            "width",
                            0,
                            135,
                            "linear",
                            "${game_result1}",
                            '234px',
                            '779px'
                        ],
                        [
                            "eid4361",
                            "width",
                            135,
                            115,
                            "linear",
                            "${game_result1}",
                            '779px',
                            '600px'
                        ],
                        [
                            "eid4365",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4367",
                            "opacity",
                            250,
                            60,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8458",
                            "opacity",
                            350,
                            0,
                            "linear",
                            "${Text8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid8404",
                            "opacity",
                            0,
                            92,
                            "linear",
                            "${game_result1}",
                            '0',
                            '0.99'
                        ],
                        [
                            "eid4358",
                            "left",
                            0,
                            135,
                            "linear",
                            "${game_result1}",
                            '261px',
                            '10px'
                        ],
                        [
                            "eid4359",
                            "left",
                            135,
                            115,
                            "linear",
                            "${game_result1}",
                            '10px',
                            '82px'
                        ],
                        [
                            "eid8431",
                            "opacity",
                            250,
                            60,
                            "linear",
                            "${close-btn1}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "game-result2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-160px', '-172px', '1138px', '608px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.63)']
                        },
                        {
                            type: 'image',
                            id: 'game_result22',
                            opacity: '1',
                            rect: ['-36px', '70px', '322px', '77px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/game%20result2.png', '0px', '0px']
                        },
                        {
                            rect: ['30px', '226px', '746px', '61px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text8',
                            text: 'You\'ve got it!',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'subText',
                            text: 'Click \"Close\"  and spin again to load the next images.',
                            font: ['Arial, Helvetica, sans-serif', [29, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            opacity: '1',
                            rect: ['36px', '305px', '746px', '39px', 'auto', 'auto'],
                            align: 'center'
                        },
                        {
                            type: 'image',
                            rect: ['304px', '344px', '188px', '61px', 'auto', 'auto'],
                            id: 'close-btn1',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '868px', '207px']
                        }
                    }
                },
                timeline: {
                    duration: 585,
                    autoPlay: true,
                    data: [
                        [
                            "eid4393",
                            "top",
                            0,
                            135,
                            "linear",
                            "${game_result22}",
                            '70px',
                            '-40px'
                        ],
                        [
                            "eid4397",
                            "top",
                            135,
                            115,
                            "linear",
                            "${game_result22}",
                            '-40px',
                            '0px'
                        ],
                        [
                            "eid4392",
                            "height",
                            0,
                            135,
                            "linear",
                            "${game_result22}",
                            '77px',
                            '257px'
                        ],
                        [
                            "eid4399",
                            "height",
                            135,
                            115,
                            "linear",
                            "${game_result22}",
                            '257px',
                            '207px'
                        ],
                        [
                            "eid4394",
                            "width",
                            0,
                            135,
                            "linear",
                            "${game_result22}",
                            '322px',
                            '1079px'
                        ],
                        [
                            "eid4398",
                            "width",
                            135,
                            115,
                            "linear",
                            "${game_result22}",
                            '1079px',
                            '868px'
                        ],
                        [
                            "eid4395",
                            "left",
                            0,
                            135,
                            "linear",
                            "${game_result22}",
                            '268px',
                            '-146px'
                        ],
                        [
                            "eid4396",
                            "left",
                            135,
                            115,
                            "linear",
                            "${game_result22}",
                            '-146px',
                            '-36px'
                        ],
                        [
                            "eid4372",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4373",
                            "opacity",
                            250,
                            100,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid4407",
                            "opacity",
                            525,
                            0,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8454",
                            "display",
                            0,
                            0,
                            "linear",
                            "${subText}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8455",
                            "display",
                            525,
                            0,
                            "linear",
                            "${subText}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4383",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${RoundRect4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4707",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${close-btn1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4709",
                            "opacity",
                            525,
                            60,
                            "linear",
                            "${close-btn1}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("1c_edgeActions.js");
})("EDGE-1646797");
