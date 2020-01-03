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
                            id: 'mall-inside',
                            type: 'image',
                            rect: ['-63px', '-190px', '1093px', '773px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mall-inside.jpg",'0px','0px']
                        },
                        {
                            id: 'mall-inside-blur',
                            type: 'image',
                            rect: ['-63px', '-190px', '1093px', '773px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mall-inside-blur.jpg",'0px','0px']
                        },
                        {
                            id: 'crowd6',
                            type: 'image',
                            rect: ['1024px', '219px', '599px', '748px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd63.png",'0px','0px']
                        },
                        {
                            id: 'crowd5',
                            type: 'image',
                            rect: ['-259px', '111px', '295px', '725px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd5.png",'0px','0px']
                        },
                        {
                            id: 'text-balloon-bub',
                            type: 'image',
                            rect: ['520px', '576px', '116px', '115px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-balloon-bub3.png",'0px','0px']
                        },
                        {
                            id: 'text-balloon',
                            type: 'image',
                            rect: ['367px', '296px', '334px', '128px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-balloon3.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['219px', '235px', '621px', '100px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Hands-on Trials",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(0,0,0,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'dice',
                            symbolName: 'dice',
                            display: 'none',
                            type: 'rect',
                            rect: ['-7px', '129px', '330', '516', 'auto', 'auto'],
                            transform: [[],[],[],['0.9327','0.9327']]
                        },
                        {
                            id: 'narrator-text-balloon',
                            type: 'image',
                            rect: ['149px', '-195px', '752px', '219px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['241px', '33px', '568px', '68px', 'auto', 'auto'],
                            opacity: '0',
                            text: "On your left is a die. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['256px', '100px', '539px', '68px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Try clicking it.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['161px', '388px', '715px', '160px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Analysing Visual and Text messages using AACCO criteria  ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['201px', '39px', '664px', '160px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The number of dots on the die indicates how many AACCO criteria you will need to identify.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'txt-great',
                            type: 'image',
                            rect: ['143px', '301px', '164px', '68px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-great.png",'0px','0px']
                        },
                        {
                            id: 'posters',
                            symbolName: 'posters',
                            display: 'none',
                            type: 'rect',
                            rect: ['285px', '0px', '743', '753', 'auto', 'auto']
                        },
                        {
                            id: 'AACCO-objs',
                            symbolName: 'AACCO-objs',
                            display: 'none',
                            type: 'rect',
                            rect: ['817px', '114px', '196', '450', 'auto', 'auto']
                        },
                        {
                            id: 'instruction',
                            symbolName: 'instruction',
                            display: 'none',
                            type: 'rect',
                            rect: ['-206px', '6px', '1023', '576', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'instruction-btn',
                            type: 'image',
                            rect: ['285px', '19px', '192px', '62px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"instruction-btn.png",'0px','0px']
                        },
                        {
                            id: 'instructionBtn',
                            display: 'none',
                            type: 'rect',
                            rect: ['43px', '13px', '192px', '62px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'posters-remaining',
                            symbolName: 'posters-remaining',
                            display: 'none',
                            type: 'rect',
                            rect: ['817', '12', '202', '95', 'auto', 'auto']
                        },
                        {
                            id: 'game-result',
                            symbolName: 'game-result',
                            display: 'none',
                            type: 'rect',
                            rect: ['148', '154', '800', '212', 'auto', 'auto']
                        },
                        {
                            id: 'diceTrigger',
                            display: 'none',
                            type: 'rect',
                            rect: ['48px', '241px', '213px', '205px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'diceTriggerNew',
                            display: 'none',
                            type: 'rect',
                            rect: ['36px', '235px', '220px', '195px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'txt-accu',
                            display: 'none',
                            type: 'image',
                            rect: ['818px', '194px', '192px', '53px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"txt-accu.png",'0px','0px'],
                            userClass: "aaccoClass"
                        },
                        {
                            id: 'txt-auth',
                            display: 'none',
                            type: 'image',
                            rect: ['822px', '124px', '150px', '53px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"txt-auth.png",'0px','0px'],
                            userClass: "aaccoClass"
                        },
                        {
                            id: 'txt-cov',
                            display: 'none',
                            type: 'image',
                            rect: ['822px', '264px', '191px', '95px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"txt-cov.png",'0px','0px'],
                            userClass: "aaccoClass"
                        },
                        {
                            id: 'txt-curr',
                            display: 'none',
                            type: 'image',
                            rect: ['818px', '376px', '184px', '53px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"txt-curr.png",'0px','0px'],
                            userClass: "aaccoClass"
                        },
                        {
                            id: 'txt-obj',
                            display: 'none',
                            type: 'image',
                            rect: ['823px', '446px', '190px', '54px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"txt-obj.png",'0px','0px'],
                            userClass: "aaccoClass"
                        },
                        {
                            id: 'dragCover',
                            type: 'rect',
                            rect: ['817px', '110px', '202px', '418px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'mainmenu',
                            display: 'none',
                            type: 'image',
                            rect: ['812px', '505px', '211px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'game-result2',
                            symbolName: 'game-result2',
                            display: 'none',
                            type: 'rect',
                            rect: ['82', '151', '868', '207', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '576px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 36466,
                    autoPlay: true,
                    labels: {
                        "great": 17050,
                        "skip1": 36000
                    },
                    data: [
                        [
                            "eid3965",
                            "top",
                            2610,
                            265,
                            "linear",
                            "${narrator-text-balloon}",
                            '581px',
                            '363px'
                        ],
                        [
                            "eid4071",
                            "top",
                            13552,
                            114,
                            "linear",
                            "${narrator-text-balloon}",
                            '363px',
                            '-195px'
                        ],
                        [
                            "eid4077",
                            "top",
                            13666,
                            294,
                            "linear",
                            "${narrator-text-balloon}",
                            '-195px',
                            '13px'
                        ],
                        [
                            "eid4765",
                            "width",
                            18660,
                            0,
                            "linear",
                            "${Text4}",
                            '664px',
                            '664px'
                        ],
                        [
                            "eid3953",
                            "left",
                            0,
                            5250,
                            "linear",
                            "${mall-inside}",
                            '-63px',
                            '-7px'
                        ],
                        [
                            "eid4104",
                            "width",
                            17050,
                            295,
                            "linear",
                            "${txt-great}",
                            '164px',
                            '396px'
                        ],
                        [
                            "eid4115",
                            "width",
                            17345,
                            255,
                            "linear",
                            "${txt-great}",
                            '396px',
                            '575px'
                        ],
                        [
                            "eid3951",
                            "left",
                            0,
                            5250,
                            "linear",
                            "${mall-inside-blur}",
                            '-63px',
                            '-7px'
                        ],
                        [
                            "eid4486",
                            "display",
                            0,
                            0,
                            "linear",
                            "${diceTrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4487",
                            "display",
                            16411,
                            0,
                            "linear",
                            "${diceTrigger}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4489",
                            "display",
                            17050,
                            0,
                            "linear",
                            "${diceTrigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3816",
                            "left",
                            8403,
                            368,
                            "linear",
                            "${crowd5}",
                            '-259px',
                            '-95px'
                        ],
                        [
                            "eid3820",
                            "left",
                            8771,
                            414,
                            "linear",
                            "${crowd5}",
                            '-95px',
                            '90px'
                        ],
                        [
                            "eid3824",
                            "left",
                            9185,
                            503,
                            "linear",
                            "${crowd5}",
                            '90px',
                            '315px'
                        ],
                        [
                            "eid3826",
                            "left",
                            9688,
                            430,
                            "linear",
                            "${crowd5}",
                            '315px',
                            '507px'
                        ],
                        [
                            "eid3828",
                            "left",
                            10118,
                            3435,
                            "linear",
                            "${crowd5}",
                            '507px',
                            '701px'
                        ],
                        [
                            "eid3830",
                            "left",
                            13551,
                            408,
                            "linear",
                            "${crowd5}",
                            '701px',
                            '884px'
                        ],
                        [
                            "eid3832",
                            "left",
                            13960,
                            365,
                            "linear",
                            "${crowd5}",
                            '884px',
                            '1047px'
                        ],
                        [
                            "eid4579",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-curr}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4584",
                            "display",
                            36466,
                            0,
                            "linear",
                            "${txt-curr}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4750",
                            "top",
                            24940,
                            11386,
                            "linear",
                            "${instruction-btn}",
                            '19px',
                            '22px'
                        ],
                        [
                            "eid4668",
                            "top",
                            36326,
                            140,
                            "linear",
                            "${instruction-btn}",
                            '22px',
                            '13px'
                        ],
                        [
                            "eid4578",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-obj}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4583",
                            "display",
                            36466,
                            0,
                            "linear",
                            "${txt-obj}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4421",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-result}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3994",
                            "top",
                            830,
                            425,
                            "linear",
                            "${crowd6}",
                            '221px',
                            '208px'
                        ],
                        [
                            "eid3995",
                            "top",
                            1255,
                            460,
                            "linear",
                            "${crowd6}",
                            '208px',
                            '226px'
                        ],
                        [
                            "eid3996",
                            "top",
                            1715,
                            539,
                            "linear",
                            "${crowd6}",
                            '226px',
                            '210px'
                        ],
                        [
                            "eid3997",
                            "top",
                            2254,
                            553,
                            "linear",
                            "${crowd6}",
                            '210px',
                            '224px'
                        ],
                        [
                            "eid3998",
                            "top",
                            2807,
                            527,
                            "linear",
                            "${crowd6}",
                            '224px',
                            '213px'
                        ],
                        [
                            "eid3999",
                            "top",
                            3334,
                            511,
                            "linear",
                            "${crowd6}",
                            '213px',
                            '220px'
                        ],
                        [
                            "eid4000",
                            "top",
                            3845,
                            485,
                            "linear",
                            "${crowd6}",
                            '220px',
                            '219px'
                        ],
                        [
                            "eid499",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid500",
                            "opacity",
                            579,
                            209,
                            "linear",
                            "${text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid501",
                            "opacity",
                            2344,
                            266,
                            "linear",
                            "${text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4080",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4082",
                            "opacity",
                            13891,
                            69,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4742",
                            "opacity",
                            17695,
                            65,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4012",
                            "display",
                            0,
                            0,
                            "linear",
                            "${dice}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4011",
                            "display",
                            10435,
                            0,
                            "linear",
                            "${dice}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4753",
                            "top",
                            13959,
                            0,
                            "linear",
                            "${Text4}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid486",
                            "top",
                            1023,
                            407,
                            "linear",
                            "${TextCopy}",
                            '238px',
                            '226px'
                        ],
                        [
                            "eid3955",
                            "top",
                            1430,
                            191,
                            "linear",
                            "${TextCopy}",
                            '226px',
                            '222px'
                        ],
                        [
                            "eid487",
                            "top",
                            1712,
                            449,
                            "linear",
                            "${TextCopy}",
                            '222px',
                            '231px'
                        ],
                        [
                            "eid2530",
                            "top",
                            2160,
                            183,
                            "linear",
                            "${TextCopy}",
                            '231px',
                            '235px'
                        ],
                        [
                            "eid4120",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-great}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4118",
                            "opacity",
                            17050,
                            147,
                            "linear",
                            "${txt-great}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4109",
                            "opacity",
                            17478,
                            122,
                            "linear",
                            "${txt-great}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4670",
                            "opacity",
                            36326,
                            85,
                            "linear",
                            "${instruction-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4101",
                            "left",
                            17050,
                            295,
                            "linear",
                            "${txt-great}",
                            '143px',
                            '379px'
                        ],
                        [
                            "eid4116",
                            "left",
                            17345,
                            255,
                            "linear",
                            "${txt-great}",
                            '379px',
                            '265px'
                        ],
                        [
                            "eid498",
                            "height",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '128px',
                            '321px'
                        ],
                        [
                            "eid4582",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-accu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4587",
                            "display",
                            36466,
                            0,
                            "linear",
                            "${txt-accu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4672",
                            "width",
                            36326,
                            140,
                            "linear",
                            "${instruction-btn}",
                            '120px',
                            '192px'
                        ],
                        [
                            "eid4072",
                            "height",
                            13551,
                            115,
                            "linear",
                            "${narrator-text-balloon}",
                            '219px',
                            '175px'
                        ],
                        [
                            "eid4128",
                            "height",
                            17760,
                            95,
                            "linear",
                            "${narrator-text-balloon}",
                            '175px',
                            '222px'
                        ],
                        [
                            "eid4580",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-cov}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4585",
                            "display",
                            36466,
                            0,
                            "linear",
                            "${txt-cov}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4745",
                            "width",
                            4092,
                            0,
                            "linear",
                            "${Text}",
                            '715px',
                            '715px'
                        ],
                        [
                            "eid3811",
                            "opacity",
                            8403,
                            113,
                            "linear",
                            "${crowd5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3819",
                            "opacity",
                            14218,
                            107,
                            "linear",
                            "${crowd5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3942",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${mall-inside-blur}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3958",
                            "opacity",
                            4406,
                            844,
                            "linear",
                            "${mall-inside-blur}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4703",
                            "opacity",
                            36068,
                            203,
                            "linear",
                            "${instruction}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4706",
                            "opacity",
                            36271,
                            55,
                            "linear",
                            "${instruction}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4749",
                            "left",
                            24940,
                            11386,
                            "linear",
                            "${instruction-btn}",
                            '285px',
                            '286px'
                        ],
                        [
                            "eid4671",
                            "left",
                            36326,
                            140,
                            "linear",
                            "${instruction-btn}",
                            '286px',
                            '43px'
                        ],
                        [
                            "eid4102",
                            "top",
                            17050,
                            295,
                            "linear",
                            "${txt-great}",
                            '301px',
                            '189px'
                        ],
                        [
                            "eid4106",
                            "top",
                            17345,
                            255,
                            "linear",
                            "${txt-great}",
                            '189px',
                            '235px'
                        ],
                        [
                            "eid4303",
                            "display",
                            0,
                            0,
                            "linear",
                            "${posters-remaining}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4302",
                            "display",
                            23941,
                            0,
                            "linear",
                            "${posters-remaining}",
                            'none',
                            'block'
                        ],
                        [
                            "eid502",
                            "left",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '367px',
                            '104px'
                        ],
                        [
                            "eid4090",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid4089",
                            "opacity",
                            14944,
                            94,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4123",
                            "opacity",
                            17695,
                            65,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4581",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-auth}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4586",
                            "display",
                            36466,
                            0,
                            "linear",
                            "${txt-auth}",
                            'none',
                            'block'
                        ],
                        [
                            "eid493",
                            "top",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '296px',
                            '117px'
                        ],
                        [
                            "eid494",
                            "top",
                            1023,
                            688,
                            "linear",
                            "${text-balloon}",
                            '117px',
                            '100px'
                        ],
                        [
                            "eid495",
                            "top",
                            1712,
                            632,
                            "linear",
                            "${text-balloon}",
                            '100px',
                            '110px'
                        ],
                        [
                            "eid4161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${posters}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4160",
                            "display",
                            23401,
                            0,
                            "linear",
                            "${posters}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4065",
                            "width",
                            13551,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '752px',
                            '752px'
                        ],
                        [
                            "eid4068",
                            "width",
                            13666,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '752px',
                            '752px'
                        ],
                        [
                            "eid3966",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3962",
                            "opacity",
                            2610,
                            120,
                            "linear",
                            "${narrator-text-balloon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3977",
                            "opacity",
                            10250,
                            185,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4076",
                            "opacity",
                            13839,
                            121,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4159",
                            "opacity",
                            23624,
                            171,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4740",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4001",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${crowd6}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid4002",
                            "opacity",
                            830,
                            123,
                            "linear",
                            "${crowd6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4003",
                            "opacity",
                            4180,
                            106,
                            "linear",
                            "${crowd6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4764",
                            "left",
                            13959,
                            4701,
                            "linear",
                            "${Text4}",
                            '201px',
                            '188px'
                        ],
                        [
                            "eid4298",
                            "display",
                            0,
                            0,
                            "linear",
                            "${AACCO-objs}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4299",
                            "display",
                            24939,
                            0,
                            "linear",
                            "${AACCO-objs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4577",
                            "display",
                            36466,
                            0,
                            "linear",
                            "${AACCO-objs}",
                            'block',
                            'none'
                        ],
                        [
                            "eid506",
                            "opacity",
                            0,
                            170,
                            "linear",
                            "${text-balloon-bub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid507",
                            "opacity",
                            250,
                            181,
                            "linear",
                            "${text-balloon-bub}",
                            '1',
                            '0'
                        ],
                        [
                            "eid508",
                            "opacity",
                            500,
                            169,
                            "linear",
                            "${text-balloon-bub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid509",
                            "opacity",
                            750,
                            138,
                            "linear",
                            "${text-balloon-bub}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4669",
                            "height",
                            36326,
                            140,
                            "linear",
                            "${instruction-btn}",
                            '39px',
                            '62px'
                        ],
                        [
                            "eid504",
                            "top",
                            0,
                            431,
                            "linear",
                            "${text-balloon-bub}",
                            '576px',
                            '352px'
                        ],
                        [
                            "eid505",
                            "top",
                            500,
                            388,
                            "linear",
                            "${text-balloon-bub}",
                            '576px',
                            '352px'
                        ],
                        [
                            "eid3952",
                            "top",
                            0,
                            5250,
                            "linear",
                            "${mall-inside-blur}",
                            '-190px',
                            '-8px'
                        ],
                        [
                            "eid3971",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3970",
                            "opacity",
                            2790,
                            85,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3976",
                            "opacity",
                            10250,
                            185,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3954",
                            "top",
                            0,
                            5250,
                            "linear",
                            "${mall-inside}",
                            '-190px',
                            '-8px'
                        ],
                        [
                            "eid4666",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instructionBtn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4667",
                            "display",
                            23500,
                            0,
                            "linear",
                            "${instructionBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid503",
                            "width",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '334px',
                            '840px'
                        ],
                        [
                            "eid4229",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4228",
                            "display",
                            25593,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4704",
                            "display",
                            36271,
                            0,
                            "linear",
                            "${instruction}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4004",
                            "left",
                            830,
                            425,
                            "linear",
                            "${crowd6}",
                            '1024px',
                            '863px'
                        ],
                        [
                            "eid4005",
                            "left",
                            1255,
                            460,
                            "linear",
                            "${crowd6}",
                            '863px',
                            '689px'
                        ],
                        [
                            "eid4006",
                            "left",
                            1715,
                            539,
                            "linear",
                            "${crowd6}",
                            '689px',
                            '485px'
                        ],
                        [
                            "eid4007",
                            "left",
                            2254,
                            553,
                            "linear",
                            "${crowd6}",
                            '485px',
                            '276px'
                        ],
                        [
                            "eid4008",
                            "left",
                            2807,
                            527,
                            "linear",
                            "${crowd6}",
                            '276px',
                            '77px'
                        ],
                        [
                            "eid4009",
                            "left",
                            3334,
                            511,
                            "linear",
                            "${crowd6}",
                            '77px',
                            '-116px'
                        ],
                        [
                            "eid4010",
                            "left",
                            3845,
                            485,
                            "linear",
                            "${crowd6}",
                            '-116px',
                            '-300px'
                        ],
                        [
                            "eid4420",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-result2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3822",
                            "top",
                            8403,
                            368,
                            "linear",
                            "${crowd5}",
                            '125px',
                            '110px'
                        ],
                        [
                            "eid3823",
                            "top",
                            8771,
                            414,
                            "linear",
                            "${crowd5}",
                            '110px',
                            '126px'
                        ],
                        [
                            "eid3825",
                            "top",
                            9185,
                            503,
                            "linear",
                            "${crowd5}",
                            '126px',
                            '115px'
                        ],
                        [
                            "eid3827",
                            "top",
                            9688,
                            430,
                            "linear",
                            "${crowd5}",
                            '115px',
                            '126px'
                        ],
                        [
                            "eid3829",
                            "top",
                            10118,
                            3435,
                            "linear",
                            "${crowd5}",
                            '126px',
                            '117px'
                        ],
                        [
                            "eid3831",
                            "top",
                            13551,
                            408,
                            "linear",
                            "${crowd5}",
                            '117px',
                            '132px'
                        ],
                        [
                            "eid3833",
                            "top",
                            13960,
                            365,
                            "linear",
                            "${crowd5}",
                            '132px',
                            '111px'
                        ],
                        [
                            "eid4133",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid4132",
                            "opacity",
                            17760,
                            95,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4156",
                            "opacity",
                            23624,
                            101,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4575",
                            "display",
                            0,
                            0,
                            "linear",
                            "${diceTriggerNew}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4576",
                            "display",
                            36466,
                            0,
                            "linear",
                            "${diceTriggerNew}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4103",
                            "height",
                            17050,
                            295,
                            "linear",
                            "${txt-great}",
                            '68px',
                            '164px'
                        ],
                        [
                            "eid4114",
                            "height",
                            17345,
                            255,
                            "linear",
                            "${txt-great}",
                            '164px',
                            '238px'
                        ],
                        [
                            "eid490",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid491",
                            "opacity",
                            888,
                            135,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid492",
                            "opacity",
                            2344,
                            266,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid510",
                            "left",
                            0,
                            431,
                            "linear",
                            "${text-balloon-bub}",
                            '520px',
                            '602px'
                        ],
                        [
                            "eid511",
                            "left",
                            500,
                            388,
                            "linear",
                            "${text-balloon-bub}",
                            '520px',
                            '602px'
                        ],
                        [
                            "eid4070",
                            "left",
                            13551,
                            115,
                            "linear",
                            "${narrator-text-balloon}",
                            '149px',
                            '148px'
                        ],
                            [ "eid4300", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${AACCO-objs}', [] ] ],
                            [ "eid4091", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${dice}', [] ] ],
                            [ "eid4312", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${posters-remaining}', [] ] ],
                            [ "eid4162", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${posters}', [] ] ],
                            [ "eid4424", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-result2}', [] ] ],
                            [ "eid4425", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-result}', [] ] ],
                            [ "eid4230", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid4092", "trigger", 10435, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${dice}', [] ] ],
                            [ "eid4163", "trigger", 23401, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${posters}', [] ] ],
                            [ "eid4313", "trigger", 23941, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${posters-remaining}', [] ] ],
                            [ "eid4301", "trigger", 24939, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${AACCO-objs}', [] ] ],
                            [ "eid4231", "trigger", 25593.174456308, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ]
                    ]
                }
            },
            "dice": {
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
                            id: 'spark1',
                            opacity: '0',
                            rect: ['-223px', '-227px', '839px', '827px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-13px', '330px', '516px', 'auto', 'auto'],
                            id: 'hand-big',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hand-big.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['81px', '466px', '167px', '160px', 'auto', 'auto'],
                            id: 'dice6',
                            fill: ['rgba(0,0,0,0)', 'images/dice6.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['81px', '466px', '167px', '160px', 'auto', 'auto'],
                            id: 'dice5',
                            fill: ['rgba(0,0,0,0)', 'images/dice5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['81px', '466px', '167px', '160px', 'auto', 'auto'],
                            id: 'dice4',
                            fill: ['rgba(0,0,0,0)', 'images/dice4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['81px', '466px', '167px', '160px', 'auto', 'auto'],
                            id: 'dice3',
                            fill: ['rgba(0,0,0,0)', 'images/dice3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['81px', '466px', '167px', '160px', 'auto', 'auto'],
                            id: 'dice2',
                            fill: ['rgba(0,0,0,0)', 'images/dice2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['81px', '466px', '167px', '160px', 'auto', 'auto'],
                            id: 'dice1',
                            fill: ['rgba(0,0,0,0)', 'images/dice1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '330px', '516px']
                        }
                    }
                },
                timeline: {
                    duration: 3335,
                    autoPlay: true,
                    labels: {
                        "roll": 1250
                    },
                    data: [
                        [
                            "eid4150",
                            "left",
                            1250,
                            425,
                            "linear",
                            "${spark1}",
                            '69px',
                            '-223px'
                        ],
                        [
                            "eid4042",
                            "top",
                            0,
                            250,
                            "linear",
                            "${dice3}",
                            '466px',
                            '126px'
                        ],
                        [
                            "eid4148",
                            "top",
                            1250,
                            425,
                            "linear",
                            "${spark1}",
                            '119px',
                            '-227px'
                        ],
                        [
                            "eid4050",
                            "top",
                            0,
                            250,
                            "linear",
                            "${hand-big}",
                            '340px',
                            '0px'
                        ],
                        [
                            "eid4057",
                            "top",
                            500,
                            300,
                            "linear",
                            "${hand-big}",
                            '0px',
                            '28px'
                        ],
                        [
                            "eid4059",
                            "top",
                            800,
                            160,
                            "linear",
                            "${hand-big}",
                            '28px',
                            '-13px'
                        ],
                        [
                            "eid4061",
                            "top",
                            960,
                            115,
                            "linear",
                            "${hand-big}",
                            '-13px',
                            '0px'
                        ],
                        [
                            "eid4147",
                            "height",
                            1250,
                            425,
                            "linear",
                            "${spark1}",
                            '188px',
                            '827px'
                        ],
                        [
                            "eid4049",
                            "left",
                            0,
                            250,
                            "linear",
                            "${hand-big}",
                            '120px',
                            '0px'
                        ],
                        [
                            "eid4505",
                            "display",
                            1370,
                            0,
                            "linear",
                            "${dice6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4516",
                            "display",
                            1625,
                            0,
                            "linear",
                            "${dice6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4517",
                            "display",
                            1675,
                            0,
                            "linear",
                            "${dice6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4527",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${dice6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4528",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${dice6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4538",
                            "display",
                            2385,
                            0,
                            "linear",
                            "${dice6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4539",
                            "display",
                            2435,
                            0,
                            "linear",
                            "${dice6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4549",
                            "display",
                            2760,
                            0,
                            "linear",
                            "${dice6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4550",
                            "display",
                            2810,
                            0,
                            "linear",
                            "${dice6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4560",
                            "display",
                            3140,
                            0,
                            "linear",
                            "${dice6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4561",
                            "display",
                            3190,
                            0,
                            "linear",
                            "${dice6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4045",
                            "left",
                            0,
                            250,
                            "linear",
                            "${dice5}",
                            '201px',
                            '81px'
                        ],
                        [
                            "eid4047",
                            "left",
                            0,
                            250,
                            "linear",
                            "${dice1}",
                            '201px',
                            '81px'
                        ],
                        [
                            "eid4041",
                            "left",
                            0,
                            250,
                            "linear",
                            "${dice3}",
                            '201px',
                            '81px'
                        ],
                        [
                            "eid4053",
                            "left",
                            0,
                            250,
                            "linear",
                            "${dice2}",
                            '201px',
                            '81px'
                        ],
                        [
                            "eid4054",
                            "top",
                            0,
                            250,
                            "linear",
                            "${dice2}",
                            '466px',
                            '126px'
                        ],
                        [
                            "eid4504",
                            "display",
                            1370,
                            0,
                            "linear",
                            "${dice5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4512",
                            "display",
                            1675,
                            0,
                            "linear",
                            "${dice5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4513",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${dice5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4525",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${dice5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4526",
                            "display",
                            2125,
                            0,
                            "linear",
                            "${dice5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4536",
                            "display",
                            2435,
                            0,
                            "linear",
                            "${dice5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4537",
                            "display",
                            2510,
                            0,
                            "linear",
                            "${dice5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4547",
                            "display",
                            2810,
                            0,
                            "linear",
                            "${dice5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4548",
                            "display",
                            2885,
                            0,
                            "linear",
                            "${dice5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4558",
                            "display",
                            3190,
                            0,
                            "linear",
                            "${dice5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4559",
                            "display",
                            3265,
                            0,
                            "linear",
                            "${dice5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4046",
                            "top",
                            0,
                            250,
                            "linear",
                            "${dice5}",
                            '466px',
                            '126px'
                        ],
                        [
                            "eid4501",
                            "display",
                            1370,
                            0,
                            "linear",
                            "${dice2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4510",
                            "display",
                            1564,
                            0,
                            "linear",
                            "${dice2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4511",
                            "display",
                            1625,
                            0,
                            "linear",
                            "${dice2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4520",
                            "display",
                            1939,
                            0,
                            "linear",
                            "${dice2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4521",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${dice2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4531",
                            "display",
                            2324,
                            0,
                            "linear",
                            "${dice2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4532",
                            "display",
                            2385,
                            0,
                            "linear",
                            "${dice2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4542",
                            "display",
                            2699,
                            0,
                            "linear",
                            "${dice2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4543",
                            "display",
                            2760,
                            0,
                            "linear",
                            "${dice2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4553",
                            "display",
                            3079,
                            0,
                            "linear",
                            "${dice2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4554",
                            "display",
                            3140,
                            0,
                            "linear",
                            "${dice2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4500",
                            "display",
                            1370,
                            0,
                            "linear",
                            "${dice1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4506",
                            "display",
                            1440,
                            0,
                            "linear",
                            "${dice1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4507",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${dice1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4518",
                            "display",
                            1815,
                            0,
                            "linear",
                            "${dice1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4519",
                            "display",
                            1875,
                            0,
                            "linear",
                            "${dice1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4529",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${dice1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4530",
                            "display",
                            2260,
                            0,
                            "linear",
                            "${dice1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4540",
                            "display",
                            2575,
                            0,
                            "linear",
                            "${dice1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4541",
                            "display",
                            2635,
                            0,
                            "linear",
                            "${dice1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4551",
                            "display",
                            2955,
                            0,
                            "linear",
                            "${dice1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4552",
                            "display",
                            3015,
                            0,
                            "linear",
                            "${dice1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4048",
                            "top",
                            0,
                            250,
                            "linear",
                            "${dice1}",
                            '466px',
                            '126px'
                        ],
                        [
                            "eid4502",
                            "display",
                            1370,
                            0,
                            "linear",
                            "${dice3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4508",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${dice3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4509",
                            "display",
                            1564,
                            0,
                            "linear",
                            "${dice3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4522",
                            "display",
                            1875,
                            0,
                            "linear",
                            "${dice3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4523",
                            "display",
                            1939,
                            0,
                            "linear",
                            "${dice3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4533",
                            "display",
                            2260,
                            0,
                            "linear",
                            "${dice3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4534",
                            "display",
                            2324,
                            0,
                            "linear",
                            "${dice3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4544",
                            "display",
                            2635,
                            0,
                            "linear",
                            "${dice3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4545",
                            "display",
                            2699,
                            0,
                            "linear",
                            "${dice3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4555",
                            "display",
                            3015,
                            0,
                            "linear",
                            "${dice3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4556",
                            "display",
                            3079,
                            0,
                            "linear",
                            "${dice3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4043",
                            "left",
                            0,
                            250,
                            "linear",
                            "${dice4}",
                            '201px',
                            '81px'
                        ],
                        [
                            "eid4503",
                            "display",
                            1370,
                            0,
                            "linear",
                            "${dice4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4514",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${dice4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4515",
                            "display",
                            1815,
                            0,
                            "linear",
                            "${dice4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4524",
                            "display",
                            2125,
                            0,
                            "linear",
                            "${dice4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4535",
                            "display",
                            2510,
                            0,
                            "linear",
                            "${dice4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4546",
                            "display",
                            2885,
                            0,
                            "linear",
                            "${dice4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4557",
                            "display",
                            3265,
                            0,
                            "linear",
                            "${dice4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4562",
                            "display",
                            3335,
                            0,
                            "linear",
                            "${dice4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4052",
                            "top",
                            0,
                            250,
                            "linear",
                            "${dice6}",
                            '466px',
                            '126px'
                        ],
                        [
                            "eid4135",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4138",
                            "opacity",
                            1250,
                            120,
                            "linear",
                            "${spark1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4153",
                            "opacity",
                            1564,
                            111,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4044",
                            "top",
                            0,
                            250,
                            "linear",
                            "${dice4}",
                            '466px',
                            '126px'
                        ],
                        [
                            "eid4051",
                            "left",
                            0,
                            250,
                            "linear",
                            "${dice6}",
                            '201px',
                            '81px'
                        ],
                        [
                            "eid4149",
                            "width",
                            1250,
                            425,
                            "linear",
                            "${spark1}",
                            '191px',
                            '839px'
                        ]
                    ]
                }
            },
            "posters": {
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
                            id: 'hand-poster',
                            opacity: '0',
                            rect: ['1039px', '847px', '228px', '482px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hand-poster.png', '0px', '0px']
                        },
                        {
                            rect: ['525px', '584px', '524px', '576px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.7294)']
                        },
                        {
                            type: 'text',
                            rect: ['108px', '206px', '320px', '100px', 'auto', 'auto'],
                            display: 'block',
                            id: 'Text6',
                            text: 'Roll the die to go to the next.',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            id: 'Text6Copy3',
                            text: 'Roll the die to start.',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', ''],
                            display: 'none',
                            opacity: '0',
                            rect: ['108px', '206px', '320px', '100px', 'auto', 'auto'],
                            align: 'center'
                        },
                        {
                            type: 'text',
                            id: 'Text5',
                            text: '?',
                            font: ['Arial, Helvetica, sans-serif', [200, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            display: 'block',
                            opacity: '0',
                            rect: ['734px', '756px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'center'
                        },
                        {
                            type: 'image',
                            id: 'Poster-travel',
                            opacity: '1',
                            rect: ['0px', '0px', '525px', '576px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Poster-travel.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'travel-content',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['37px', '225px', '274px', '306px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'travel-currency',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['326px', '192px', '199px', '132px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'travel-accuracy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['326px', '93px', '199px', '87px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'travel-objective',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '156px', '122px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'travel-author',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['409px', '471px', '116px', '105px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'travel-accuracy1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1px', '520px', '408px', '56px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            id: 'Poster-Restaurant',
                            opacity: '1',
                            rect: ['0px', '0px', '525px', '576px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Poster-Restaurant.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'restaurant-author',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '263px', '87px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'restaurant-content',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['58px', '87px', '276px', '87px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'restaurant-accuracy1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['31px', '333px', '157px', '92px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'restaurant-accuracy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['346px', '357px', '157px', '92px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'restaurant-accuracy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['101px', '472px', '142px', '92px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'restaurant-objective',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['230px', '518px', '239px', '58px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            id: 'Poster-med-check',
                            opacity: '1',
                            rect: ['0px', '0px', '525px', '576px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Poster-med-check.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'med-content',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['47px', '107px', '409px', '241px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'med-objective',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['3px', '348px', '336px', '156px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'med-currency',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['339px', '347px', '186px', '157px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'med-author',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['3px', '504px', '336px', '72px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'med-accuracy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['339px', '504px', '186px', '72px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            id: 'Poster-mall',
                            opacity: '1',
                            rect: ['0px', '0px', '525px', '576px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Poster-mall.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'mall-author',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['163px', '13px', '204px', '138px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'mall-content',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['25px', '151px', '476px', '195px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'mall-accuracy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['110px', '354px', '309px', '126px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'mall-objective',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['155px', '480px', '204px', '49px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'mall-currency',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['108px', '529px', '329px', '47px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            id: 'Poster-camping',
                            opacity: '1',
                            rect: ['0px', '0px', '525px', '576px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Poster-camping.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'camp-accuracy1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['1px', '0px', '228px', '77px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'camp-author',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['221px', '0px', '119px', '94px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'camp-objective',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['1px', '271px', '141px', '178px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'camp-content1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['1px', '77px', '141px', '194px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'camp-content2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['93px', '198px', '432px', '119px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'camp-accuracy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['184px', '512px', '341px', '64px', 'auto', 'auto'],
                            display: 'none',
                            userClass: 'droppable',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            id: 'right-select',
                            opacity: '0',
                            rect: ['115px', '371px', '54px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'wrong-select',
                            opacity: '0',
                            rect: ['115px', '432px', '54px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '743px', '753px']
                        }
                    }
                },
                timeline: {
                    duration: 2810,
                    autoPlay: true,
                    labels: {
                        "next": 435,
                        "start": 945,
                        "p1": 1500,
                        "p2": 1800,
                        "p3": 2095,
                        "p4": 2345,
                        "p5": 2595
                    },
                    data: [
                        [
                            "eid4673",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4674",
                            "display",
                            435,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4625",
                            "display",
                            0,
                            0,
                            "linear",
                            "${med-content}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4630",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${med-content}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4635",
                            "display",
                            2305,
                            0,
                            "linear",
                            "${med-content}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4701",
                            "opacity",
                            945,
                            305,
                            "linear",
                            "${Text6Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4170",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Poster-med-check}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4212",
                            "opacity",
                            2095,
                            155,
                            "linear",
                            "${Poster-med-check}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4495",
                            "opacity",
                            2250,
                            55,
                            "linear",
                            "${Poster-med-check}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4640",
                            "display",
                            0,
                            0,
                            "linear",
                            "${restaurant-content}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4646",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${restaurant-content}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4652",
                            "display",
                            2555,
                            0,
                            "linear",
                            "${restaurant-content}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4171",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Poster-Restaurant}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4209",
                            "opacity",
                            2345,
                            155,
                            "linear",
                            "${Poster-Restaurant}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4497",
                            "opacity",
                            2500,
                            55,
                            "linear",
                            "${Poster-Restaurant}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4654",
                            "display",
                            0,
                            0,
                            "linear",
                            "${travel-accuracy1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4660",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${travel-accuracy1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4684",
                            "top",
                            435,
                            355,
                            "linear",
                            "${Text6}",
                            '767px',
                            '206px'
                        ],
                        [
                            "eid4610",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mall-author}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4615",
                            "display",
                            1955,
                            0,
                            "linear",
                            "${mall-author}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4620",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${mall-author}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4609",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mall-content}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4614",
                            "display",
                            1955,
                            0,
                            "linear",
                            "${mall-content}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4619",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${mall-content}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4623",
                            "display",
                            0,
                            0,
                            "linear",
                            "${med-currency}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4628",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${med-currency}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4633",
                            "display",
                            2305,
                            0,
                            "linear",
                            "${med-currency}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4191",
                            "top",
                            0,
                            375,
                            "linear",
                            "${hand-poster}",
                            '847px',
                            '271px'
                        ],
                        [
                            "eid4639",
                            "display",
                            0,
                            0,
                            "linear",
                            "${restaurant-accuracy1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4645",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${restaurant-accuracy1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4651",
                            "display",
                            2555,
                            0,
                            "linear",
                            "${restaurant-accuracy1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4169",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Poster-mall}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4215",
                            "opacity",
                            1800,
                            155,
                            "linear",
                            "${Poster-mall}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4493",
                            "opacity",
                            1955,
                            100,
                            "linear",
                            "${Poster-mall}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4201",
                            "opacity",
                            0,
                            90,
                            "linear",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4172",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Poster-travel}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4206",
                            "opacity",
                            2595,
                            155,
                            "linear",
                            "${Poster-travel}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4499",
                            "opacity",
                            2750,
                            60,
                            "linear",
                            "${Poster-travel}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4641",
                            "display",
                            0,
                            0,
                            "linear",
                            "${restaurant-author}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4647",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${restaurant-author}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4653",
                            "display",
                            2555,
                            0,
                            "linear",
                            "${restaurant-author}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4608",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mall-accuracy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4613",
                            "display",
                            1955,
                            0,
                            "linear",
                            "${mall-accuracy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4618",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${mall-accuracy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4696",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4697",
                            "display",
                            945,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4657",
                            "display",
                            0,
                            0,
                            "linear",
                            "${travel-accuracy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4663",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${travel-accuracy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4186",
                            "left",
                            0,
                            375,
                            "linear",
                            "${Text5}",
                            '734px',
                            '210px'
                        ],
                        [
                            "eid4202",
                            "opacity",
                            0,
                            90,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4203",
                            "opacity",
                            0,
                            90,
                            "linear",
                            "${hand-poster}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4190",
                            "left",
                            0,
                            375,
                            "linear",
                            "${hand-poster}",
                            '1039px',
                            '515px'
                        ],
                        [
                            "eid4187",
                            "top",
                            0,
                            375,
                            "linear",
                            "${Text5}",
                            '756px',
                            '180px'
                        ],
                        [
                            "eid4699",
                            "display",
                            945,
                            0,
                            "linear",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4173",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Poster-camping}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4472",
                            "opacity",
                            1500,
                            155,
                            "linear",
                            "${Poster-camping}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4491",
                            "opacity",
                            1655,
                            95,
                            "linear",
                            "${Poster-camping}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4638",
                            "display",
                            0,
                            0,
                            "linear",
                            "${restaurant-accuracy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4644",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${restaurant-accuracy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4650",
                            "display",
                            2555,
                            0,
                            "linear",
                            "${restaurant-accuracy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4606",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mall-currency}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4611",
                            "display",
                            1955,
                            0,
                            "linear",
                            "${mall-currency}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4616",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${mall-currency}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4592",
                            "display",
                            0,
                            0,
                            "linear",
                            "${camp-author}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4598",
                            "display",
                            1655,
                            0,
                            "linear",
                            "${camp-author}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4604",
                            "display",
                            1695,
                            0,
                            "linear",
                            "${camp-author}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4683",
                            "left",
                            435,
                            355,
                            "linear",
                            "${Text6}",
                            '635px',
                            '108px'
                        ],
                        [
                            "eid4655",
                            "display",
                            0,
                            0,
                            "linear",
                            "${travel-author}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4661",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${travel-author}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4607",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mall-objective}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4612",
                            "display",
                            1955,
                            0,
                            "linear",
                            "${mall-objective}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4617",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${mall-objective}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4621",
                            "display",
                            0,
                            0,
                            "linear",
                            "${med-accuracy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4626",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${med-accuracy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4631",
                            "display",
                            2305,
                            0,
                            "linear",
                            "${med-accuracy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4624",
                            "display",
                            0,
                            0,
                            "linear",
                            "${med-objective}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4629",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${med-objective}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4634",
                            "display",
                            2305,
                            0,
                            "linear",
                            "${med-objective}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4189",
                            "top",
                            0,
                            375,
                            "linear",
                            "${RoundRect}",
                            '576px',
                            '0px'
                        ],
                        [
                            "eid4680",
                            "top",
                            435,
                            355,
                            "linear",
                            "${RoundRect}",
                            '584px',
                            '0px'
                        ],
                        [
                            "eid4589",
                            "display",
                            0,
                            0,
                            "linear",
                            "${camp-content2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4595",
                            "display",
                            1655,
                            0,
                            "linear",
                            "${camp-content2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4601",
                            "display",
                            1695,
                            0,
                            "linear",
                            "${camp-content2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4188",
                            "left",
                            0,
                            375,
                            "linear",
                            "${RoundRect}",
                            '525px',
                            '1px'
                        ],
                        [
                            "eid4679",
                            "left",
                            435,
                            355,
                            "linear",
                            "${RoundRect}",
                            '525px',
                            '1px'
                        ],
                        [
                            "eid4591",
                            "display",
                            0,
                            0,
                            "linear",
                            "${camp-objective}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4597",
                            "display",
                            1655,
                            0,
                            "linear",
                            "${camp-objective}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4603",
                            "display",
                            1695,
                            0,
                            "linear",
                            "${camp-objective}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4637",
                            "display",
                            0,
                            0,
                            "linear",
                            "${restaurant-accuracy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4643",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${restaurant-accuracy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4649",
                            "display",
                            2555,
                            0,
                            "linear",
                            "${restaurant-accuracy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4622",
                            "display",
                            0,
                            0,
                            "linear",
                            "${med-author}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4627",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${med-author}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4632",
                            "display",
                            2305,
                            0,
                            "linear",
                            "${med-author}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4593",
                            "display",
                            0,
                            0,
                            "linear",
                            "${camp-accuracy1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4599",
                            "display",
                            1655,
                            0,
                            "linear",
                            "${camp-accuracy1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4605",
                            "display",
                            1695,
                            0,
                            "linear",
                            "${camp-accuracy1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4636",
                            "display",
                            0,
                            0,
                            "linear",
                            "${restaurant-objective}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4642",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${restaurant-objective}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4648",
                            "display",
                            2555,
                            0,
                            "linear",
                            "${restaurant-objective}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4658",
                            "display",
                            0,
                            0,
                            "linear",
                            "${travel-currency}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4664",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${travel-currency}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4659",
                            "display",
                            0,
                            0,
                            "linear",
                            "${travel-content}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4665",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${travel-content}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4590",
                            "display",
                            0,
                            0,
                            "linear",
                            "${camp-content1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4596",
                            "display",
                            1655,
                            0,
                            "linear",
                            "${camp-content1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4602",
                            "display",
                            1695,
                            0,
                            "linear",
                            "${camp-content1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4588",
                            "display",
                            0,
                            0,
                            "linear",
                            "${camp-accuracy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4594",
                            "display",
                            1655,
                            0,
                            "linear",
                            "${camp-accuracy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4600",
                            "display",
                            1695,
                            0,
                            "linear",
                            "${camp-accuracy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4656",
                            "display",
                            0,
                            0,
                            "linear",
                            "${travel-objective}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4662",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${travel-objective}",
                            'none',
                            'block'
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
                            rect: ['228px', '385px', '795px', '191px', 'auto', 'auto'],
                            id: 'narrator-text-balloon2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text6',
                            opacity: '1',
                            text: 'Roll the die. Choose the AACCO criteria and drag them to the correct information in the poster.',
                            rect: ['251px', '406px', '734px', '141px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1023px', '576px']
                        }
                    }
                },
                timeline: {
                    duration: 360,
                    autoPlay: true,
                    data: [
                        [
                            "eid4255",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4260",
                            "opacity",
                            210,
                            150,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4256",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4261",
                            "opacity",
                            210,
                            150,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "AACCO-objs": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-3px', '-8px', '203px', '462px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '1',
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,186,86,0.73)']
                        },
                        {
                            type: 'image',
                            id: 'txt-accu',
                            opacity: '1',
                            rect: ['0px', '81px', '192px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-accu.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-auth',
                            opacity: '1',
                            rect: ['5px', '12px', '150px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-auth.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-cov',
                            opacity: '1',
                            rect: ['5px', '151px', '191px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-cov.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-curr',
                            opacity: '1',
                            rect: ['0px', '262px', '184px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-curr.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-obj',
                            opacity: '1',
                            rect: ['6px', '331px', '190px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-obj.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'spark2',
                            opacity: '0',
                            rect: ['-205px', '114px', '151px', '157px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spark2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '196px', '450px']
                        }
                    }
                },
                timeline: {
                    duration: 1105,
                    autoPlay: true,
                    data: [
                        [
                            "eid4289",
                            "opacity",
                            0,
                            105,
                            "linear",
                            "${txt-curr}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4330",
                            "left",
                            0,
                            315,
                            "linear",
                            "${spark2}",
                            '17px',
                            '-205px'
                        ],
                        [
                            "eid4288",
                            "opacity",
                            0,
                            105,
                            "linear",
                            "${txt-obj}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4291",
                            "opacity",
                            0,
                            105,
                            "linear",
                            "${txt-cov}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4332",
                            "top",
                            0,
                            315,
                            "linear",
                            "${spark2}",
                            '114px',
                            '-32px'
                        ],
                        [
                            "eid4317",
                            "opacity",
                            0,
                            55,
                            "linear",
                            "${spark2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4320",
                            "opacity",
                            251,
                            64,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4294",
                            "background-color",
                            0,
                            185,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,241,207,0.56)',
                            'rgba(255,186,86,0.73)'
                        ],
                        [
                            "eid4297",
                            "background-color",
                            185,
                            185,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,186,86,0.73)',
                            'rgba(255,241,207,0.56)'
                        ],
                        [
                            "eid4341",
                            "background-color",
                            370,
                            190,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,241,207,0.56)',
                            'rgba(255,186,86,0.73)'
                        ],
                        [
                            "eid4342",
                            "background-color",
                            560,
                            190,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,186,86,0.73)',
                            'rgba(255,241,207,0.56)'
                        ],
                        [
                            "eid4290",
                            "opacity",
                            0,
                            105,
                            "linear",
                            "${txt-accu}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4287",
                            "opacity",
                            0,
                            105,
                            "linear",
                            "${txt-auth}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4331",
                            "width",
                            0,
                            315,
                            "linear",
                            "${spark2}",
                            '151px',
                            '433px'
                        ],
                        [
                            "eid4329",
                            "height",
                            0,
                            315,
                            "linear",
                            "${spark2}",
                            '157px',
                            '450px'
                        ],
                        [
                            "eid4464",
                            "opacity",
                            1000,
                            105,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "posters-remaining": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '1px', '196px', '88px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '1',
                            id: 'RoundRect3',
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(69,255,17,0.5608)']
                        },
                        {
                            rect: ['69px', '0px', '66px', '88px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [90, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                            text: '5',
                            id: 'Text7',
                            opacity: '1',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '202px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

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
                            opacity: '0',
                            id: 'RoundRect4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.63)']
                        },
                        {
                            type: 'image',
                            id: 'game_result1',
                            opacity: '0',
                            rect: ['261px', '64px', '234px', '83px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/game%20result1.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            opacity: '0',
                            id: 'Text8',
                            text: 'You need to learn more about analysing images using the AACCO criteria.',
                            align: 'center',
                            rect: ['-3px', '226px', '746px', '166px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '212px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
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
                            "eid4346",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${RoundRect4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4417",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${RoundRect4}",
                            '1',
                            '0'
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
                            100,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4415",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
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
                            "eid4371",
                            "opacity",
                            0,
                            85,
                            "linear",
                            "${game_result1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4416",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${game_result1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4751",
                            "height",
                            670,
                            0,
                            "linear",
                            "${Text8}",
                            '166px',
                            '166px'
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect4',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.63)']
                        },
                        {
                            rect: ['-36px', '70px', '322px', '77px', 'auto', 'auto'],
                            id: 'game_result22',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/game%20result2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['30px', '226px', '746px', '106px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text8',
                            text: 'You are able to analyse images using the AACCO criteria',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['304px', '344px', '188px', '61px', 'auto', 'auto'],
                            type: 'image',
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
                    duration: 33466,
                    autoPlay: true,
                    data: [
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
                            "eid4408",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${RoundRect4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid4710",
                            "width",
                            33466,
                            0,
                            "linear",
                            "${RoundRect4}",
                            '1138px',
                            '1138px'
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
                            1250,
                            0,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '1'
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
                            1190,
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("5_edgeActions.js");
})("EDGE-601893278");
