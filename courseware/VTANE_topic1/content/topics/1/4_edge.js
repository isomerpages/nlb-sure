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
                            id: 'bookshop',
                            type: 'image',
                            rect: ['-10px', '-8px', '1040px', '735px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bookshop.jpg",'0px','0px']
                        },
                        {
                            id: 'crowd6',
                            type: 'image',
                            rect: ['971px', '215px', '474px', '592px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd6.png",'0px','0px']
                        },
                        {
                            id: 'crowd3',
                            type: 'image',
                            rect: ['-278px', '183px', '286px', '729px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd3.png",'0px','0px']
                        },
                        {
                            id: 'bookshelf',
                            type: 'image',
                            rect: ['30px', '349px', '959px', '231px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bookshelf.png",'0px','0px']
                        },
                        {
                            id: 'text-balloon-bub',
                            type: 'image',
                            rect: ['520px', '576px', '116px', '115px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-balloon-bub2.png",'0px','0px']
                        },
                        {
                            id: 'text-balloon',
                            type: 'image',
                            rect: ['367px', '296px', '334px', '128px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-balloon2.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['166px', '225px', '716px', '100px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Uses of Visual Text",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(0,0,0,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'narrator-text-balloon',
                            type: 'image',
                            rect: ['83px', '359px', '858px', '207px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['148px', '399px', '740px', '115px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The power of Visual and Text messages to INFLUENCE and PERSUADE.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['193px', '410px', '672px', '110px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Let’s see how these messages <br>can be used in visual text.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'RoundRect5',
                            type: 'rect',
                            rect: ['-10px', '-5px', '1040px', '592px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.69)"],
                            stroke: [3,"rgb(51, 51, 51)","none"]
                        },
                        {
                            id: 'game7',
                            symbolName: 'game7',
                            display: 'none',
                            type: 'rect',
                            rect: ['827px', '409', '114', '141', 'auto', 'auto'],
                            userClass: "games"
                        },
                        {
                            id: 'game6',
                            symbolName: 'game6',
                            display: 'none',
                            type: 'rect',
                            rect: ['699', '409', '114', '141', 'auto', 'auto'],
                            userClass: "games"
                        },
                        {
                            id: 'game5',
                            symbolName: 'game5',
                            display: 'none',
                            type: 'rect',
                            rect: ['573', '409', '114', '141', 'auto', 'auto'],
                            userClass: "games"
                        },
                        {
                            id: 'game4',
                            symbolName: 'game4',
                            display: 'none',
                            type: 'rect',
                            rect: ['447', '409', '114', '141', 'auto', 'auto'],
                            userClass: "games"
                        },
                        {
                            id: 'game3',
                            symbolName: 'game3',
                            display: 'none',
                            type: 'rect',
                            rect: ['322px', '409', '114', '141', 'auto', 'auto'],
                            userClass: "games"
                        },
                        {
                            id: 'game2',
                            symbolName: 'game2',
                            display: 'none',
                            type: 'rect',
                            rect: ['199px', '409', '114', '141', 'auto', 'auto'],
                            userClass: "games"
                        },
                        {
                            id: 'game1',
                            symbolName: 'game1',
                            display: 'none',
                            type: 'rect',
                            rect: ['72', '409', '114', '141', 'auto', 'auto'],
                            userClass: "games"
                        },
                        {
                            id: 'timer',
                            symbolName: 'timer',
                            display: 'none',
                            type: 'rect',
                            rect: ['869', '6px', '150', '75', 'auto', 'auto']
                        },
                        {
                            id: 'instruction',
                            symbolName: 'instruction',
                            display: 'none',
                            type: 'rect',
                            rect: ['83', '354', '858', '207', 'auto', 'auto']
                        },
                        {
                            id: 'instruction-btn2',
                            symbolName: 'instruction-btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['-28px', '-6px', '300', '104', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.78846','0.78846']]
                        },
                        {
                            id: 'countdown3Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['397px', '241px', '203px', '104px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown32.png",'0px','0px']
                        },
                        {
                            id: 'countdown2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['370px', '142px', '251px', '353px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown22.png",'0px','0px']
                        },
                        {
                            id: 'countdown1Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['485px', '283px', '69px', '104px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown12.png",'0px','0px']
                        },
                        {
                            id: 'countdown4Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['294px', '272px', '299px', '82px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown42.png",'0px','0px']
                        },
                        {
                            id: 'clipboard',
                            display: 'none',
                            type: 'image',
                            rect: ['-164px', '-196px', '1040px', '1244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"clipboard.png",'0px','0px']
                        },
                        {
                            id: 'prev_btn',
                            display: 'none',
                            type: 'image',
                            rect: ['128px', '297px', '116px', '67px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"prev_btn.png",'0px','0px']
                        },
                        {
                            id: 'next_but',
                            display: 'none',
                            type: 'image',
                            rect: ['713px', '298px', '114px', '66px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"next_but.png",'0px','0px']
                        },
                        {
                            id: 'txt-correct-answers',
                            display: 'none',
                            type: 'image',
                            rect: ['251px', '19px', '295px', '43px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-correct-answers.png",'0px','0px']
                        },
                        {
                            id: 'Text6',
                            display: 'none',
                            type: 'text',
                            rect: ['166px', '19px', '622px', '113px', 'auto', 'auto'],
                            opacity: '0',
                            text: "To give someone facts or information.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['166px', '40px', '622px', '113px', 'auto', 'auto'],
                            opacity: '0',
                            text: "To provide someone <br>with amusement.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['167px', '39px', '622px', '113px', 'auto', 'auto'],
                            opacity: '0',
                            text: "To give intellectual, moral and social instructions to someone.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy4',
                            display: 'none',
                            type: 'text',
                            rect: ['166px', '174px', '622px', '165px', 'auto', 'auto'],
                            opacity: '0',
                            text: "To suggest or hint at something negative <br>in an indirect way",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['129px', '0px', '692px', '205px', 'auto', 'auto'],
                            opacity: '0',
                            text: "To have positive or negative effect on the character, development, or behaviour of someone.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [42, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy5',
                            display: 'none',
                            type: 'text',
                            rect: ['166px', '6px', '622px', '171px', 'auto', 'auto'],
                            opacity: '0',
                            text: "To convey a meaning indirectly through what one says instead of being explicit.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy8',
                            display: 'none',
                            type: 'text',
                            rect: ['166px', '6px', '622px', '171px', 'auto', 'auto'],
                            opacity: '1',
                            text: " To suggest or hint at something negative in an indirect way.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy6',
                            display: 'none',
                            type: 'text',
                            rect: ['128px', '30px', '692px', '131px', 'auto', 'auto'],
                            opacity: '0',
                            text: "To fill someone with the urge or ability to take positive actions.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'txt-inform',
                            display: 'none',
                            type: 'image',
                            rect: ['384px', '246px', '185px', '66px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-inform.png",'0px','0px']
                        },
                        {
                            id: 'txt-educate',
                            display: 'none',
                            type: 'image',
                            rect: ['286px', '351px', '364px', '113px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-educate.png",'0px','0px']
                        },
                        {
                            id: 'txt-entertain2',
                            display: 'none',
                            type: 'image',
                            rect: ['347px', '371px', '259px', '65px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-entertain2.png",'0px','0px']
                        },
                        {
                            id: 'txt-influence',
                            display: 'none',
                            type: 'image',
                            rect: ['223px', '371px', '262px', '67px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-influence.png",'0px','0px']
                        },
                        {
                            id: 'txt-insinuate',
                            display: 'none',
                            type: 'image',
                            rect: ['216px', '384px', '260px', '68px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-insinuate.png",'0px','0px']
                        },
                        {
                            id: 'txt-implicate',
                            display: 'none',
                            type: 'image',
                            rect: ['216px', '368px', '256px', '69px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-implicate.png",'0px','0px']
                        },
                        {
                            id: 'txt-inspire',
                            display: 'none',
                            type: 'image',
                            rect: ['245px', '371px', '445px', '66px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-inspire.png",'0px','0px']
                        },
                        {
                            id: 'mainmenu',
                            display: 'none',
                            type: 'image',
                            rect: ['791px', '479px', '212px', '69px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'nextgame',
                            display: 'none',
                            type: 'image',
                            rect: ['839px', '163px', '200px', '196px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"arrow-up.png",'0px','0px'],
                            transform: [[],['90'],[],['0.57999','0.57999']]
                        },
                        {
                            id: 'answer',
                            display: 'none',
                            type: 'text',
                            rect: ['176px', '439px', '602px', '79px', 'auto', 'auto'],
                            text: "ANSWER",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(61,58,58,1.00)", "700", "none", "italic", "break-word", ""],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(135,133,133,0.59)", 5, 5, 0],
                            transform: [[],[],['18']]
                        },
                        {
                            id: 'txt-your-answers',
                            display: 'none',
                            type: 'image',
                            rect: ['357px', '371px', '242px', '43px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt-your-answers.png",'0px','0px']
                        },
                        {
                            id: 'replay-btn',
                            display: 'none',
                            type: 'image',
                            rect: ['-5px', '468px', '284px', '92px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"replay-btn.png",'0px','0px'],
                            transform: [[],[],[],['0.75','0.75']]
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
                    duration: 45475,
                    autoPlay: true,
                    labels: {
                        "test": 12150,
                        "restart": 19750,
                        "startgame": 22120,
                        "timeup": 24750,
                        "endgame": 26000,
                        "ans1": 28317,
                        "ans5": 30169,
                        "ans4": 32750,
                        "ans2": 35750,
                        "ans6": 39000,
                        "ans7": 42064,
                        "ans3": 44500,
                        "end": 44870
                    },
                    data: [
                        [
                            "eid11681",
                            "left",
                            0,
                            431,
                            "linear",
                            "${text-balloon-bub}",
                            '520px',
                            '602px'
                        ],
                        [
                            "eid11682",
                            "left",
                            500,
                            388,
                            "linear",
                            "${text-balloon-bub}",
                            '520px',
                            '602px'
                        ],
                        [
                            "eid12618",
                            "height",
                            29785,
                            250,
                            "linear",
                            "${txt-educate}",
                            '67px',
                            '66px'
                        ],
                        [
                            "eid12489",
                            "left",
                            21340,
                            425,
                            "linear",
                            "${countdown3Copy}",
                            '397px',
                            '223px'
                        ],
                        [
                            "eid12486",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown3Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12487",
                            "opacity",
                            21340,
                            128,
                            "linear",
                            "${countdown3Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12488",
                            "opacity",
                            21765,
                            116,
                            "linear",
                            "${countdown3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11687",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11691",
                            "opacity",
                            3840,
                            276,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11695",
                            "opacity",
                            8630,
                            213,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12766",
                            "display",
                            0,
                            0,
                            "linear",
                            "${countdown3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12764",
                            "display",
                            21340,
                            0,
                            "linear",
                            "${countdown3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12765",
                            "display",
                            21881,
                            0,
                            "linear",
                            "${countdown3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12475",
                            "left",
                            19750,
                            425,
                            "linear",
                            "${countdown1Copy}",
                            '485px',
                            '370px'
                        ],
                        [
                            "eid11656",
                            "top",
                            0,
                            11332,
                            "linear",
                            "${bookshop}",
                            '-8px',
                            '-148px'
                        ],
                        [
                            "eid12066",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12840",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${game4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13192",
                            "display",
                            26000,
                            0,
                            "linear",
                            "${game4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13198",
                            "opacity",
                            44870,
                            0,
                            "linear",
                            "${replay-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13201",
                            "opacity",
                            45038,
                            181,
                            "linear",
                            "${replay-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11700",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11699",
                            "opacity",
                            8843,
                            238,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11709",
                            "opacity",
                            12000,
                            250,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11664",
                            "top",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '296px',
                            '117px'
                        ],
                        [
                            "eid11665",
                            "top",
                            1038,
                            562,
                            "linear",
                            "${text-balloon}",
                            '117px',
                            '100px'
                        ],
                        [
                            "eid11666",
                            "top",
                            1600,
                            600,
                            "linear",
                            "${text-balloon}",
                            '100px',
                            '111px'
                        ],
                        [
                            "eid11667",
                            "top",
                            2200,
                            600,
                            "linear",
                            "${text-balloon}",
                            '111px',
                            '99px'
                        ],
                        [
                            "eid11668",
                            "top",
                            2800,
                            600,
                            "linear",
                            "${text-balloon}",
                            '99px',
                            '110px'
                        ],
                        [
                            "eid12757",
                            "display",
                            0,
                            0,
                            "linear",
                            "${countdown1Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12758",
                            "display",
                            19750,
                            0,
                            "linear",
                            "${countdown1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12759",
                            "display",
                            20291,
                            0,
                            "linear",
                            "${countdown1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12675",
                            "top",
                            40427,
                            279,
                            "linear",
                            "${txt-implicate}",
                            '400px',
                            '258px'
                        ],
                        [
                            "eid12760",
                            "display",
                            0,
                            0,
                            "linear",
                            "${countdown2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12761",
                            "display",
                            20590,
                            0,
                            "linear",
                            "${countdown2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12762",
                            "display",
                            21131,
                            0,
                            "linear",
                            "${countdown2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12464",
                            "height",
                            24870,
                            250,
                            "linear",
                            "${countdown4Copy}",
                            '82px',
                            '243px'
                        ],
                        [
                            "eid12567",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-correct-answers}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12566",
                            "opacity",
                            26706,
                            164,
                            "linear",
                            "${txt-correct-answers}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12694",
                            "opacity",
                            44870,
                            185,
                            "linear",
                            "${txt-correct-answers}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11661",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11662",
                            "opacity",
                            888,
                            150,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11663",
                            "opacity",
                            3278,
                            295,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12835",
                            "display",
                            0,
                            0,
                            "linear",
                            "${nextgame}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12211",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12841",
                            "display",
                            13567,
                            0,
                            "linear",
                            "${game5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13193",
                            "display",
                            26000,
                            0,
                            "linear",
                            "${game5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12478",
                            "height",
                            20590,
                            425,
                            "linear",
                            "${countdown2Copy}",
                            '104px',
                            '348px'
                        ],
                        [
                            "eid5779",
                            "left",
                            1000,
                            1040,
                            "linear",
                            "${crowd6}",
                            '971px',
                            '703px'
                        ],
                        [
                            "eid5783",
                            "left",
                            2040,
                            1008,
                            "linear",
                            "${crowd6}",
                            '703px',
                            '441px'
                        ],
                        [
                            "eid5787",
                            "left",
                            3048,
                            981,
                            "linear",
                            "${crowd6}",
                            '441px',
                            '158px'
                        ],
                        [
                            "eid5791",
                            "left",
                            4029,
                            1011,
                            "linear",
                            "${crowd6}",
                            '158px',
                            '-109px'
                        ],
                        [
                            "eid5795",
                            "left",
                            5040,
                            1000,
                            "linear",
                            "${crowd6}",
                            '-109px',
                            '-379px'
                        ],
                        [
                            "eid12602",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12589",
                            "opacity",
                            27120,
                            153,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12613",
                            "opacity",
                            28620,
                            161,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12643",
                            "width",
                            31755,
                            279,
                            "linear",
                            "${txt-entertain2}",
                            '259px',
                            '286px'
                        ],
                        [
                            "eid12617",
                            "top",
                            29785,
                            250,
                            "linear",
                            "${txt-educate}",
                            '378px',
                            '248px'
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
                            "eid8637",
                            "opacity",
                            7676,
                            152,
                            "linear",
                            "${crowd3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12576",
                            "height",
                            26794,
                            326,
                            "linear",
                            "${clipboard}",
                            '940px',
                            '1244px'
                        ],
                        [
                            "eid12719",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-entertain2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12720",
                            "display",
                            31755,
                            0,
                            "linear",
                            "${txt-entertain2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12721",
                            "display",
                            33159,
                            0,
                            "linear",
                            "${txt-entertain2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12687",
                            "height",
                            43120,
                            279,
                            "linear",
                            "${txt-inspire}",
                            '65px',
                            '66px'
                        ],
                        [
                            "eid11729",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction-btn2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11730",
                            "display",
                            12616,
                            0,
                            "linear",
                            "${instruction-btn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12538",
                            "display",
                            25120,
                            0,
                            "linear",
                            "${instruction-btn2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11670",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11671",
                            "opacity",
                            579,
                            209,
                            "linear",
                            "${text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11672",
                            "opacity",
                            3278,
                            295,
                            "linear",
                            "${text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13172",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-your-answers}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13175",
                            "display",
                            28317,
                            0,
                            "linear",
                            "${txt-your-answers}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13187",
                            "display",
                            44870,
                            0,
                            "linear",
                            "${txt-your-answers}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12491",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${crowd6}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid5774",
                            "opacity",
                            1000,
                            147,
                            "linear",
                            "${crowd6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5799",
                            "opacity",
                            5540,
                            500,
                            "linear",
                            "${crowd6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12691",
                            "width",
                            43120,
                            279,
                            "linear",
                            "${txt-inspire}",
                            '212px',
                            '224px'
                        ],
                        [
                            "eid11669",
                            "height",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '128px',
                            '321px'
                        ],
                        [
                            "eid12604",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-inform}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12607",
                            "opacity",
                            27870,
                            123,
                            "linear",
                            "${txt-inform}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12612",
                            "opacity",
                            28620,
                            161,
                            "linear",
                            "${txt-inform}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12670",
                            "left",
                            37743,
                            279,
                            "linear",
                            "${txt-insinuate}",
                            '341px',
                            '346px'
                        ],
                        [
                            "eid12728",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12746",
                            "display",
                            42667,
                            0,
                            "linear",
                            "${Text6Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12747",
                            "display",
                            44781,
                            0,
                            "linear",
                            "${Text6Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11776",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12837",
                            "display",
                            12273,
                            0,
                            "linear",
                            "${game1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13189",
                            "display",
                            26000,
                            0,
                            "linear",
                            "${game1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12623",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-educate}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12619",
                            "opacity",
                            29785,
                            123,
                            "linear",
                            "${txt-educate}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12620",
                            "opacity",
                            31209,
                            161,
                            "linear",
                            "${txt-educate}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12484",
                            "top",
                            21340,
                            425,
                            "linear",
                            "${countdown3Copy}",
                            '241px',
                            '133px'
                        ],
                        [
                            "eid12354",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12842",
                            "display",
                            13911,
                            0,
                            "linear",
                            "${game6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13194",
                            "display",
                            26000,
                            0,
                            "linear",
                            "${game6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12672",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12673",
                            "opacity",
                            39628,
                            153,
                            "linear",
                            "${Text6Copy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12674",
                            "opacity",
                            42370,
                            161,
                            "linear",
                            "${Text6Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12676",
                            "height",
                            40427,
                            279,
                            "linear",
                            "${txt-implicate}",
                            '65px',
                            '66px'
                        ],
                        [
                            "eid12671",
                            "width",
                            37743,
                            279,
                            "linear",
                            "${txt-insinuate}",
                            '259px',
                            '263px'
                        ],
                        [
                            "eid12710",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-implicate}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12711",
                            "display",
                            40427,
                            0,
                            "linear",
                            "${txt-implicate}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12712",
                            "display",
                            42531,
                            0,
                            "linear",
                            "${txt-implicate}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7902",
                            "left",
                            0,
                            0,
                            "linear",
                            "${crowd3}",
                            '-278px',
                            '-278px'
                        ],
                        [
                            "eid8638",
                            "left",
                            7676,
                            954,
                            "linear",
                            "${crowd3}",
                            '-278px',
                            '73px'
                        ],
                        [
                            "eid8639",
                            "left",
                            8630,
                            1077,
                            "linear",
                            "${crowd3}",
                            '73px',
                            '471px'
                        ],
                        [
                            "eid8640",
                            "left",
                            9707,
                            1121,
                            "linear",
                            "${crowd3}",
                            '471px',
                            '801px'
                        ],
                        [
                            "eid8641",
                            "left",
                            10828,
                            1172,
                            "linear",
                            "${crowd3}",
                            '801px',
                            '1093px'
                        ],
                        [
                            "eid12471",
                            "height",
                            19750,
                            425,
                            "linear",
                            "${countdown1Copy}",
                            '104px',
                            '348px'
                        ],
                        [
                            "eid12667",
                            "height",
                            37743,
                            279,
                            "linear",
                            "${txt-insinuate}",
                            '65px',
                            '66px'
                        ],
                        [
                            "eid13169",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${Text6Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13170",
                            "display",
                            42064,
                            0,
                            "linear",
                            "${Text6Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12713",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-insinuate}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12714",
                            "display",
                            37743,
                            0,
                            "linear",
                            "${txt-insinuate}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12715",
                            "display",
                            39531,
                            0,
                            "linear",
                            "${txt-insinuate}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12479",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12480",
                            "opacity",
                            20590,
                            128,
                            "linear",
                            "${countdown2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12481",
                            "opacity",
                            21015,
                            116,
                            "linear",
                            "${countdown2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12641",
                            "height",
                            31755,
                            279,
                            "linear",
                            "${txt-entertain2}",
                            '65px',
                            '72px'
                        ],
                        [
                            "eid13171",
                            "display",
                            0,
                            0,
                            "linear",
                            "${prev_btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13181",
                            "display",
                            30169,
                            0,
                            "linear",
                            "${prev_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13185",
                            "display",
                            44870,
                            0,
                            "linear",
                            "${prev_btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12656",
                            "top",
                            34870,
                            279,
                            "linear",
                            "${txt-influence}",
                            '393px',
                            '254px'
                        ],
                        [
                            "eid12681",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-implicate}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12677",
                            "opacity",
                            40427,
                            124,
                            "linear",
                            "${txt-implicate}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12678",
                            "opacity",
                            42370,
                            161,
                            "linear",
                            "${txt-implicate}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12469",
                            "width",
                            24870,
                            250,
                            "linear",
                            "${countdown4Copy}",
                            '299px',
                            '886px'
                        ],
                        [
                            "eid11216",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11218",
                            "opacity",
                            22893,
                            378,
                            "linear",
                            "${RoundRect5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12585",
                            "top",
                            26870,
                            250,
                            "linear",
                            "${txt-correct-answers}",
                            '58px',
                            '183px'
                        ],
                        [
                            "eid12459",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12843",
                            "display",
                            14250,
                            0,
                            "linear",
                            "${game7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13195",
                            "display",
                            26000,
                            0,
                            "linear",
                            "${game7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13173",
                            "display",
                            0,
                            0,
                            "linear",
                            "${answer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13176",
                            "display",
                            28317,
                            0,
                            "linear",
                            "${answer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13186",
                            "display",
                            44870,
                            0,
                            "linear",
                            "${answer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11677",
                            "opacity",
                            0,
                            170,
                            "linear",
                            "${text-balloon-bub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11678",
                            "opacity",
                            250,
                            181,
                            "linear",
                            "${text-balloon-bub}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11679",
                            "opacity",
                            500,
                            169,
                            "linear",
                            "${text-balloon-bub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11680",
                            "opacity",
                            750,
                            138,
                            "linear",
                            "${text-balloon-bub}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12483",
                            "width",
                            20590,
                            425,
                            "linear",
                            "${countdown2Copy}",
                            '69px',
                            '230px'
                        ],
                        [
                            "eid11731",
                            "display",
                            0,
                            0,
                            "linear",
                            "${timer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11732",
                            "display",
                            21691,
                            0,
                            "linear",
                            "${timer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12537",
                            "display",
                            25120,
                            0,
                            "linear",
                            "${timer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12621",
                            "left",
                            29785,
                            250,
                            "linear",
                            "${txt-educate}",
                            '370px',
                            '386px'
                        ],
                        [
                            "eid12468",
                            "left",
                            24870,
                            250,
                            "linear",
                            "${countdown4Copy}",
                            '294px',
                            '64px'
                        ],
                        [
                            "eid12661",
                            "width",
                            34870,
                            279,
                            "linear",
                            "${txt-influence}",
                            '259px',
                            '267px'
                        ],
                        [
                            "eid12614",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12615",
                            "opacity",
                            28870,
                            153,
                            "linear",
                            "${Text6Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12616",
                            "opacity",
                            31209,
                            161,
                            "linear",
                            "${Text6Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11674",
                            "width",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '334px',
                            '840px'
                        ],
                        [
                            "eid12731",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12624",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12625",
                            "opacity",
                            31496,
                            153,
                            "linear",
                            "${Text6Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12626",
                            "opacity",
                            32996,
                            161,
                            "linear",
                            "${Text6Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12666",
                            "top",
                            37743,
                            279,
                            "linear",
                            "${txt-insinuate}",
                            '384px',
                            '255px'
                        ],
                        [
                            "eid12660",
                            "left",
                            34870,
                            279,
                            "linear",
                            "${txt-influence}",
                            '338px',
                            '344px'
                        ],
                        [
                            "eid12679",
                            "left",
                            40427,
                            279,
                            "linear",
                            "${txt-implicate}",
                            '348px',
                            '396px'
                        ],
                        [
                            "eid12622",
                            "width",
                            29785,
                            250,
                            "linear",
                            "${txt-educate}",
                            '187px',
                            '184px'
                        ],
                        [
                            "eid13196",
                            "display",
                            0,
                            0,
                            "linear",
                            "${replay-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13197",
                            "display",
                            44870,
                            0,
                            "linear",
                            "${replay-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12690",
                            "left",
                            43120,
                            279,
                            "linear",
                            "${txt-inspire}",
                            '356px',
                            '366px'
                        ],
                        [
                            "eid12680",
                            "width",
                            40427,
                            279,
                            "linear",
                            "${txt-implicate}",
                            '259px',
                            '164px'
                        ],
                        [
                            "eid13206",
                            "opacity",
                            45055,
                            164,
                            "linear",
                            "${mainmenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12725",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-inform}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12726",
                            "display",
                            27870,
                            0,
                            "linear",
                            "${txt-inform}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12727",
                            "display",
                            28781,
                            0,
                            "linear",
                            "${txt-inform}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5780",
                            "top",
                            1000,
                            431,
                            "linear",
                            "${crowd6}",
                            '215px',
                            '225px'
                        ],
                        [
                            "eid5800",
                            "top",
                            1431,
                            359,
                            "linear",
                            "${crowd6}",
                            '225px',
                            '214px'
                        ],
                        [
                            "eid5801",
                            "top",
                            1790,
                            250,
                            "linear",
                            "${crowd6}",
                            '214px',
                            '219px'
                        ],
                        [
                            "eid5784",
                            "top",
                            2040,
                            361,
                            "linear",
                            "${crowd6}",
                            '219px',
                            '225px'
                        ],
                        [
                            "eid5802",
                            "top",
                            2401,
                            328,
                            "linear",
                            "${crowd6}",
                            '225px',
                            '213px'
                        ],
                        [
                            "eid5803",
                            "top",
                            2729,
                            319,
                            "linear",
                            "${crowd6}",
                            '213px',
                            '218px'
                        ],
                        [
                            "eid5788",
                            "top",
                            3048,
                            312,
                            "linear",
                            "${crowd6}",
                            '218px',
                            '212px'
                        ],
                        [
                            "eid5804",
                            "top",
                            3360,
                            362,
                            "linear",
                            "${crowd6}",
                            '212px',
                            '226px'
                        ],
                        [
                            "eid5805",
                            "top",
                            3722,
                            307,
                            "linear",
                            "${crowd6}",
                            '226px',
                            '220px'
                        ],
                        [
                            "eid5792",
                            "top",
                            4029,
                            347,
                            "linear",
                            "${crowd6}",
                            '220px',
                            '229px'
                        ],
                        [
                            "eid5806",
                            "top",
                            4376,
                            331,
                            "linear",
                            "${crowd6}",
                            '229px',
                            '212px'
                        ],
                        [
                            "eid5807",
                            "top",
                            4707,
                            333,
                            "linear",
                            "${crowd6}",
                            '212px',
                            '219px'
                        ],
                        [
                            "eid5796",
                            "top",
                            5040,
                            348,
                            "linear",
                            "${crowd6}",
                            '219px',
                            '213px'
                        ],
                        [
                            "eid5808",
                            "top",
                            5388,
                            652,
                            "linear",
                            "${crowd6}",
                            '213px',
                            '224px'
                        ],
                        [
                            "eid12722",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-educate}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12723",
                            "display",
                            29785,
                            0,
                            "linear",
                            "${txt-educate}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12724",
                            "display",
                            31370,
                            0,
                            "linear",
                            "${txt-educate}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12653",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12654",
                            "opacity",
                            33246,
                            153,
                            "linear",
                            "${Text6Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12655",
                            "opacity",
                            36709,
                            161,
                            "linear",
                            "${Text6Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12904",
                            "left",
                            22340,
                            0,
                            "linear",
                            "${game2}",
                            '199px',
                            '199px'
                        ],
                        [
                            "eid12729",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12744",
                            "display",
                            39628,
                            0,
                            "linear",
                            "${Text6Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12745",
                            "display",
                            42531,
                            0,
                            "linear",
                            "${Text6Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12707",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-inspire}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12708",
                            "display",
                            43120,
                            0,
                            "linear",
                            "${txt-inspire}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12709",
                            "display",
                            44781,
                            0,
                            "linear",
                            "${txt-inspire}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12578",
                            "width",
                            26794,
                            326,
                            "linear",
                            "${clipboard}",
                            '786px',
                            '1040px'
                        ],
                        [
                            "eid12716",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-influence}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12717",
                            "display",
                            34870,
                            0,
                            "linear",
                            "${txt-influence}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12718",
                            "display",
                            36870,
                            0,
                            "linear",
                            "${txt-influence}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12568",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${clipboard}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12554",
                            "opacity",
                            25968,
                            173,
                            "linear",
                            "${clipboard}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12703",
                            "opacity",
                            45273,
                            202,
                            "linear",
                            "${clipboard}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11725",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bookshelf}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11724",
                            "opacity",
                            12150,
                            100,
                            "linear",
                            "${bookshelf}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11673",
                            "left",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '367px',
                            '104px'
                        ],
                        [
                            "eid12485",
                            "height",
                            21340,
                            425,
                            "linear",
                            "${countdown3Copy}",
                            '104px',
                            '278px'
                        ],
                        [
                            "eid12482",
                            "left",
                            20590,
                            425,
                            "linear",
                            "${countdown2Copy}",
                            '485px',
                            '370px'
                        ],
                        [
                            "eid13174",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13179",
                            "display",
                            28317,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13184",
                            "display",
                            44870,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12751",
                            "display",
                            0,
                            0,
                            "linear",
                            "${clipboard}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12752",
                            "display",
                            25968,
                            0,
                            "linear",
                            "${clipboard}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12753",
                            "display",
                            45475,
                            0,
                            "linear",
                            "${clipboard}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12490",
                            "width",
                            21340,
                            425,
                            "linear",
                            "${countdown3Copy}",
                            '203px',
                            '543px'
                        ],
                        [
                            "eid12657",
                            "height",
                            34870,
                            279,
                            "linear",
                            "${txt-influence}",
                            '65px',
                            '67px'
                        ],
                        [
                            "eid12730",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12742",
                            "display",
                            33246,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12743",
                            "display",
                            36870,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11748",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11749",
                            "display",
                            12273,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12767",
                            "display",
                            19523,
                            0,
                            "linear",
                            "${instruction}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12476",
                            "width",
                            19750,
                            425,
                            "linear",
                            "${countdown1Copy}",
                            '69px',
                            '230px'
                        ],
                        [
                            "eid12733",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12738",
                            "display",
                            31496,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12739",
                            "display",
                            33157,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12748",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt-correct-answers}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12749",
                            "display",
                            26706,
                            0,
                            "linear",
                            "${txt-correct-answers}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13188",
                            "display",
                            44870,
                            0,
                            "linear",
                            "${txt-correct-answers}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12750",
                            "display",
                            45038,
                            0,
                            "linear",
                            "${txt-correct-answers}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12477",
                            "top",
                            20590,
                            425,
                            "linear",
                            "${countdown2Copy}",
                            '283px',
                            '142px'
                        ],
                        [
                            "eid11728",
                            "top",
                            12150,
                            350,
                            "linear",
                            "${bookshelf}",
                            '583px',
                            '349px'
                        ],
                        [
                            "eid12836",
                            "top",
                            13911,
                            0,
                            "linear",
                            "${bookshelf}",
                            '349px',
                            '347px'
                        ],
                        [
                            "eid12465",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown4Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12466",
                            "opacity",
                            24870,
                            133,
                            "linear",
                            "${countdown4Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12467",
                            "opacity",
                            25620,
                            143,
                            "linear",
                            "${countdown4Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12734",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12736",
                            "display",
                            27120,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12737",
                            "display",
                            28781,
                            0,
                            "linear",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12682",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-insinuate}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12668",
                            "opacity",
                            37743,
                            124,
                            "linear",
                            "${txt-insinuate}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12669",
                            "opacity",
                            39370,
                            161,
                            "linear",
                            "${txt-insinuate}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12732",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12740",
                            "display",
                            28870,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12741",
                            "display",
                            31370,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12649",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-entertain2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12648",
                            "opacity",
                            31755,
                            124,
                            "linear",
                            "${txt-entertain2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12652",
                            "opacity",
                            32996,
                            161,
                            "linear",
                            "${txt-entertain2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12754",
                            "display",
                            0,
                            0,
                            "linear",
                            "${countdown4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12755",
                            "display",
                            24870,
                            0,
                            "linear",
                            "${countdown4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12756",
                            "display",
                            25763,
                            0,
                            "linear",
                            "${countdown4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12663",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12664",
                            "opacity",
                            37010,
                            153,
                            "linear",
                            "${Text6Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12665",
                            "opacity",
                            39370,
                            161,
                            "linear",
                            "${Text6Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12683",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy6}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12684",
                            "opacity",
                            42667,
                            153,
                            "linear",
                            "${Text6Copy6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12685",
                            "opacity",
                            44620,
                            161,
                            "linear",
                            "${Text6Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12463",
                            "top",
                            24870,
                            250,
                            "linear",
                            "${countdown4Copy}",
                            '272px',
                            '174px'
                        ],
                        [
                            "eid12472",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown1Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12473",
                            "opacity",
                            19750,
                            128,
                            "linear",
                            "${countdown1Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12474",
                            "opacity",
                            20175,
                            116,
                            "linear",
                            "${countdown1Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11675",
                            "top",
                            0,
                            431,
                            "linear",
                            "${text-balloon-bub}",
                            '576px',
                            '352px'
                        ],
                        [
                            "eid11676",
                            "top",
                            500,
                            388,
                            "linear",
                            "${text-balloon-bub}",
                            '576px',
                            '352px'
                        ],
                        [
                            "eid11841",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12838",
                            "display",
                            12616,
                            0,
                            "linear",
                            "${game2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13190",
                            "display",
                            26000,
                            0,
                            "linear",
                            "${game2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12562",
                            "top",
                            25968,
                            652,
                            "linear",
                            "${clipboard}",
                            '201px',
                            '-45px'
                        ],
                        [
                            "eid12577",
                            "top",
                            26794,
                            326,
                            "linear",
                            "${clipboard}",
                            '-45px',
                            '-196px'
                        ],
                        [
                            "eid12700",
                            "top",
                            44950,
                            525,
                            "linear",
                            "${clipboard}",
                            '-196px',
                            '502px'
                        ],
                        [
                            "eid11688",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11692",
                            "opacity",
                            3840,
                            276,
                            "linear",
                            "${narrator-text-balloon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11747",
                            "opacity",
                            12088,
                            185,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13202",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13203",
                            "display",
                            45055,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11657",
                            "top",
                            1038,
                            562,
                            "linear",
                            "${Text}",
                            '233px',
                            '220px'
                        ],
                        [
                            "eid11658",
                            "top",
                            1600,
                            600,
                            "linear",
                            "${Text}",
                            '220px',
                            '235px'
                        ],
                        [
                            "eid11659",
                            "top",
                            2200,
                            600,
                            "linear",
                            "${Text}",
                            '235px',
                            '215px'
                        ],
                        [
                            "eid11660",
                            "top",
                            2800,
                            600,
                            "linear",
                            "${Text}",
                            '215px',
                            '225px'
                        ],
                        [
                            "eid12556",
                            "left",
                            25968,
                            652,
                            "linear",
                            "${clipboard}",
                            '-840px',
                            '64px'
                        ],
                        [
                            "eid12558",
                            "left",
                            26620,
                            174,
                            "linear",
                            "${clipboard}",
                            '64px',
                            '-8px'
                        ],
                        [
                            "eid12579",
                            "left",
                            26794,
                            326,
                            "linear",
                            "${clipboard}",
                            '-8px',
                            '-164px'
                        ],
                        [
                            "eid12699",
                            "left",
                            44950,
                            525,
                            "linear",
                            "${clipboard}",
                            '-164px',
                            '-729px'
                        ],
                        [
                            "eid11944",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12839",
                            "display",
                            12928,
                            0,
                            "linear",
                            "${game3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13191",
                            "display",
                            26000,
                            0,
                            "linear",
                            "${game3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12704",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-inspire}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12688",
                            "opacity",
                            43120,
                            124,
                            "linear",
                            "${txt-inspire}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12689",
                            "opacity",
                            44620,
                            161,
                            "linear",
                            "${txt-inspire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12470",
                            "top",
                            19750,
                            425,
                            "linear",
                            "${countdown1Copy}",
                            '283px',
                            '142px'
                        ],
                        [
                            "eid12644",
                            "left",
                            31755,
                            279,
                            "linear",
                            "${txt-entertain2}",
                            '347px',
                            '334px'
                        ],
                        [
                            "eid12686",
                            "top",
                            43120,
                            279,
                            "linear",
                            "${txt-inspire}",
                            '393px',
                            '253px'
                        ],
                        [
                            "eid12584",
                            "left",
                            26870,
                            250,
                            "linear",
                            "${txt-correct-answers}",
                            '251px',
                            '329px'
                        ],
                        [
                            "eid12662",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-influence}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12658",
                            "opacity",
                            34870,
                            124,
                            "linear",
                            "${txt-influence}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12659",
                            "opacity",
                            36709,
                            161,
                            "linear",
                            "${txt-influence}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12642",
                            "top",
                            31755,
                            279,
                            "linear",
                            "${txt-entertain2}",
                            '371px',
                            '252px'
                        ],
                        [
                            "eid7959",
                            "top",
                            0,
                            0,
                            "linear",
                            "${crowd3}",
                            '183px',
                            '183px'
                        ],
                        [
                            "eid8629",
                            "top",
                            7676,
                            545,
                            "linear",
                            "${crowd3}",
                            '183px',
                            '187px'
                        ],
                        [
                            "eid8630",
                            "top",
                            8221,
                            409,
                            "linear",
                            "${crowd3}",
                            '187px',
                            '169px'
                        ],
                        [
                            "eid8631",
                            "top",
                            8630,
                            557,
                            "linear",
                            "${crowd3}",
                            '169px',
                            '189px'
                        ],
                        [
                            "eid8632",
                            "top",
                            9187,
                            520,
                            "linear",
                            "${crowd3}",
                            '189px',
                            '179px'
                        ],
                        [
                            "eid8633",
                            "top",
                            9707,
                            561,
                            "linear",
                            "${crowd3}",
                            '179px',
                            '184px'
                        ],
                        [
                            "eid8634",
                            "top",
                            10268,
                            560,
                            "linear",
                            "${crowd3}",
                            '184px',
                            '163px'
                        ],
                        [
                            "eid8635",
                            "top",
                            10828,
                            598,
                            "linear",
                            "${crowd3}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid8636",
                            "top",
                            11426,
                            574,
                            "linear",
                            "${crowd3}",
                            '193px',
                            '183px'
                        ],
                            [ "eid11769", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction-btn2}', [] ] ],
                            [ "eid11768", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid11770", "trigger", 7.2759576141834e-012, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${timer}', [] ] ],
                            [ "eid11772", "trigger", 12273, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ],
                            [ "eid11773", "trigger", 12616, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction-btn2}', [] ] ],
                            [ "eid11771", "trigger", 21691, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${timer}', [] ] ],
                            [ "eid12541", "trigger", 25120, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction-btn2}', [] ] ],
                            [ "eid12540", "trigger", 25120, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${timer}', [] ] ]
                    ]
                }
            },
            "instruction-btn": {
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
                            id: 'instruction-btn',
                            opacity: 0,
                            rect: ['67px', '23px', '165px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/instruction-btn2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 399,
                    autoPlay: true,
                    data: [
                        [
                            "eid8877",
                            "left",
                            0,
                            250,
                            "linear",
                            "${instruction-btn}",
                            '67px',
                            '-50px'
                        ],
                        [
                            "eid8888",
                            "left",
                            250,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid8865",
                            "opacity",
                            0,
                            135,
                            "linear",
                            "${instruction-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8875",
                            "top",
                            0,
                            250,
                            "linear",
                            "${instruction-btn}",
                            '23px',
                            '-15px'
                        ],
                        [
                            "eid8887",
                            "top",
                            250,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid8876",
                            "width",
                            0,
                            250,
                            "linear",
                            "${instruction-btn}",
                            '165px',
                            '400px'
                        ],
                        [
                            "eid8889",
                            "width",
                            250,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '400px',
                            '300px'
                        ],
                        [
                            "eid8874",
                            "height",
                            0,
                            250,
                            "linear",
                            "${instruction-btn}",
                            '57px',
                            '138px'
                        ],
                        [
                            "eid8886",
                            "height",
                            250,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '138px',
                            '104px'
                        ]
                    ]
                }
            },
            "timer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '146px', '71px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect',
                            stroke: [2, 'rgba(51,51,51,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(100,237,54,0.51)']
                        },
                        {
                            rect: ['73px', '2px', '3px', '71px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect3',
                            stroke: [2, 'rgb(51, 51, 51)', 'none'],
                            type: 'rect',
                            fill: ['rgba(159,243,130,0.82)']
                        },
                        {
                            type: 'text',
                            rect: ['12px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Text',
                            text: '00:00',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '150px', '75px']
                        }
                    }
                },
                timeline: {
                    duration: 158,
                    autoPlay: true,
                    data: [
                        [
                            "eid11144",
                            "opacity",
                            0,
                            158,
                            "linear",
                            "${RoundRect3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11146",
                            "opacity",
                            0,
                            158,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11145",
                            "opacity",
                            0,
                            158,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
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
                            rect: ['0px', '0px', '858px', '207px', 'auto', 'auto'],
                            id: 'narrator-text-balloonCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['24px', '32px', '796px', '125px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4',
                            text: 'Click on the letters to form the word using the clues given for each word. To remove the letter, click on it again.',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [37, 'px'], 'rgba(0,78,147,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '858px', '207px']
                        }
                    }
                },
                timeline: {
                    duration: 7250,
                    autoPlay: true,
                    labels: {
                        "close": 7000
                    },
                    data: [
                        [
                            "eid11760",
                            "top",
                            579,
                            421,
                            "linear",
                            "${narrator-text-balloonCopy}",
                            '0px',
                            '-176px'
                        ],
                        [
                            "eid11755",
                            "opacity",
                            0,
                            190,
                            "linear",
                            "${narrator-text-balloonCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11766",
                            "opacity",
                            7000,
                            250,
                            "linear",
                            "${narrator-text-balloonCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11754",
                            "opacity",
                            0,
                            190,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11767",
                            "opacity",
                            7000,
                            250,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11761",
                            "top",
                            579,
                            421,
                            "linear",
                            "${Text4}",
                            '32px',
                            '-144px'
                        ]
                    ]
                }
            },
            "game1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['131px', '-616px', '640px', '790px', 'auto', 'auto'],
                            id: 'book-cov1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/book-cov1.png', '0px', '0px']
                        },
                        {
                            rect: ['220px', '-371px', '460px', '115px', 'auto', 'auto'],
                            id: '_6letters-slot',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/6letters-slot.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'g1',
                            rect: ['241px', '-353px', '422', '82', 'auto', 'auto'],
                            id: 'g1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "start": 361,
                        "end": 1497
                    },
                    data: [
                        [
                            "eid11780",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${book-cov1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11959",
                            "opacity",
                            1655,
                            95,
                            "linear",
                            "${book-cov1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11790",
                            "top",
                            361,
                            389,
                            "linear",
                            "${book-cov1}",
                            '0px',
                            '-616px'
                        ],
                        [
                            "eid11953",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${book-cov1}",
                            '-616px',
                            '-1202px'
                        ],
                        [
                            "eid12902",
                            "display",
                            0,
                            0,
                            "linear",
                            "${g1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12903",
                            "display",
                            750,
                            0,
                            "linear",
                            "${g1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11797",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_6letters-slot}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11799",
                            "opacity",
                            750,
                            130,
                            "linear",
                            "${_6letters-slot}",
                            '0.000000',
                            '0.99000000953674'
                        ],
                        [
                            "eid11958",
                            "opacity",
                            1655,
                            95,
                            "linear",
                            "${_6letters-slot}",
                            '0.99000000953674',
                            '0'
                        ],
                        [
                            "eid12820",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${g1}",
                            '241px',
                            '241px'
                        ],
                        [
                            "eid11791",
                            "height",
                            361,
                            389,
                            "linear",
                            "${book-cov1}",
                            '141px',
                            '790px'
                        ],
                        [
                            "eid11792",
                            "width",
                            361,
                            389,
                            "linear",
                            "${book-cov1}",
                            '114px',
                            '640px'
                        ],
                        [
                            "eid11789",
                            "left",
                            361,
                            389,
                            "linear",
                            "${book-cov1}",
                            '0px',
                            '132px'
                        ],
                        [
                            "eid11952",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${_6letters-slot}",
                            '-371px',
                            '-957px'
                        ],
                        [
                            "eid12812",
                            "opacity",
                            361,
                            0,
                            "linear",
                            "${g1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12815",
                            "opacity",
                            750,
                            750,
                            "linear",
                            "${g1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12817",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${g1}",
                            '-353px',
                            '-353px'
                        ],
                            [ "eid12786", "trigger", 415.47242397472, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${g1}', [0] ] ]
                    ]
                }
            },
            "game2": {
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
                            id: 'book-cov2',
                            opacity: '1',
                            rect: ['0px', '-604px', '114px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/book-cov2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_9letters-slotCopy',
                            opacity: '1',
                            rect: ['0px', '-327px', '650px', '115px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/9letters-slot.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'g2',
                            display: 'none',
                            opacity: '0',
                            rect: ['23px', '-309px', '618', '84', 'auto', 'auto'],
                            symbolName: 'g2'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "start": 361
                    },
                    data: [
                        [
                            "eid11834",
                            "width",
                            361,
                            389,
                            "linear",
                            "${book-cov2}",
                            '114px',
                            '640px'
                        ],
                        [
                            "eid11843",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_9letters-slotCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11842",
                            "opacity",
                            750,
                            130,
                            "linear",
                            "${_9letters-slotCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11989",
                            "opacity",
                            1640,
                            110,
                            "linear",
                            "${_9letters-slotCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12898",
                            "display",
                            0,
                            0,
                            "linear",
                            "${g2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12899",
                            "display",
                            880,
                            0,
                            "linear",
                            "${g2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11831",
                            "height",
                            361,
                            389,
                            "linear",
                            "${book-cov2}",
                            '141px',
                            '790px'
                        ],
                        [
                            "eid12910",
                            "top",
                            1339,
                            0,
                            "linear",
                            "${g2}",
                            '-309px',
                            '-309px'
                        ],
                        [
                            "eid11983",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${_9letters-slotCopy}",
                            '-327px',
                            '-929px'
                        ],
                        [
                            "eid11835",
                            "left",
                            361,
                            0,
                            "linear",
                            "${book-cov2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11836",
                            "left",
                            750,
                            0,
                            "linear",
                            "${book-cov2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11832",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${book-cov2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11988",
                            "opacity",
                            1640,
                            110,
                            "linear",
                            "${book-cov2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12901",
                            "opacity",
                            880,
                            620,
                            "linear",
                            "${g2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11839",
                            "top",
                            361,
                            389,
                            "linear",
                            "${book-cov2}",
                            '0px',
                            '-604px'
                        ],
                        [
                            "eid11982",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${book-cov2}",
                            '-604px',
                            '-1206px'
                        ],
                            [ "eid12905", "trigger", 436, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${g2}', [0] ] ]
                    ]
                }
            },
            "game3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-1206px', '114px', '141px', 'auto', 'auto'],
                            id: 'book-cov3',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/book-cov3.png', '0px', '0px']
                        },
                        {
                            rect: ['-70px', '-994px', '520px', '115px', 'auto', 'auto'],
                            id: '_7letters-slotCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/7letters-slot.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'g3',
                            rect: ['-50px', '-313px', '484', '76', 'auto', 'auto'],
                            id: 'g3'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "start": 361
                    },
                    data: [
                        [
                            "eid11899",
                            "left",
                            361,
                            389,
                            "linear",
                            "${book-cov3}",
                            '0px',
                            '-128px'
                        ],
                        [
                            "eid11902",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_7letters-slotCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11905",
                            "opacity",
                            750,
                            138,
                            "linear",
                            "${_7letters-slotCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12028",
                            "opacity",
                            1655,
                            95,
                            "linear",
                            "${_7letters-slotCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12022",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${_7letters-slotCopy}",
                            '-329px',
                            '-994px'
                        ],
                        [
                            "eid11900",
                            "top",
                            361,
                            389,
                            "linear",
                            "${book-cov3}",
                            '0px',
                            '-541px'
                        ],
                        [
                            "eid12021",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${book-cov3}",
                            '-541px',
                            '-1206px'
                        ],
                        [
                            "eid12982",
                            "top",
                            1076,
                            0,
                            "linear",
                            "${g3}",
                            '-313px',
                            '-313px'
                        ],
                        [
                            "eid11896",
                            "width",
                            361,
                            389,
                            "linear",
                            "${book-cov3}",
                            '114px',
                            '640px'
                        ],
                        [
                            "eid11892",
                            "height",
                            361,
                            389,
                            "linear",
                            "${book-cov3}",
                            '141px',
                            '790px'
                        ],
                        [
                            "eid11893",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${book-cov3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12027",
                            "opacity",
                            1655,
                            95,
                            "linear",
                            "${book-cov3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12977",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${g3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12976",
                            "opacity",
                            888,
                            612,
                            "linear",
                            "${g3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12972",
                            "display",
                            0,
                            0,
                            "linear",
                            "${g3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12974",
                            "display",
                            888,
                            0,
                            "linear",
                            "${g3}",
                            'none',
                            'block'
                        ],
                            [ "eid12978", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${g3}', [0] ] ]
                    ]
                }
            },
            "game4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-251px', '-437px', '114px', '141px', 'auto', 'auto'],
                            id: 'book-cov4',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/book-cov4.png', '0px', '0px']
                        },
                        {
                            rect: ['-251px', '-325px', '650px', '115px', 'auto', 'auto'],
                            id: '_9letters-slotCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/9letters-slot.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'g4',
                            rect: ['-224px', '-308px', '614', '76', 'auto', 'auto'],
                            id: 'g4'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "start": 361
                    },
                    data: [
                        [
                            "eid13010",
                            "display",
                            0,
                            0,
                            "linear",
                            "${g4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13012",
                            "display",
                            895,
                            0,
                            "linear",
                            "${g4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12070",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_9letters-slotCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12072",
                            "opacity",
                            750,
                            145,
                            "linear",
                            "${_9letters-slotCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12127",
                            "opacity",
                            1647,
                            103,
                            "linear",
                            "${_9letters-slotCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12056",
                            "height",
                            361,
                            389,
                            "linear",
                            "${book-cov4}",
                            '141px',
                            '790px'
                        ],
                        [
                            "eid12065",
                            "top",
                            361,
                            389,
                            "linear",
                            "${book-cov4}",
                            '0px',
                            '-463px'
                        ],
                        [
                            "eid12109",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${book-cov4}",
                            '-463px',
                            '-1205px'
                        ],
                        [
                            "eid12110",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${_9letters-slotCopy}",
                            '-325px',
                            '-1069px'
                        ],
                        [
                            "eid12057",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${book-cov4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12133",
                            "opacity",
                            1647,
                            103,
                            "linear",
                            "${book-cov4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12064",
                            "left",
                            361,
                            389,
                            "linear",
                            "${book-cov4}",
                            '0px',
                            '-251px'
                        ],
                        [
                            "eid12059",
                            "width",
                            361,
                            389,
                            "linear",
                            "${book-cov4}",
                            '114px',
                            '640px'
                        ],
                        [
                            "eid13013",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${g4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13014",
                            "opacity",
                            895,
                            605,
                            "linear",
                            "${g4}",
                            '0',
                            '1'
                        ],
                            [ "eid13015", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${g4}', [0] ] ]
                    ]
                }
            },
            "game5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-381px', '-576px', '114px', '141px', 'auto', 'auto'],
                            id: 'book-cov5',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/book-cov5.png', '0px', '0px']
                        },
                        {
                            rect: ['-323px', '-314px', '520px', '115px', 'auto', 'auto'],
                            id: '_7letters-slotCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/7letters-slot.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'g5',
                            rect: ['-291px', '-299', '478', '76', 'auto', 'auto'],
                            id: 'g5'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "start": 361
                    },
                    data: [
                        [
                            "eid13019",
                            "display",
                            0,
                            0,
                            "linear",
                            "${g5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13021",
                            "display",
                            872,
                            0,
                            "linear",
                            "${g5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12148",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_7letters-slotCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12150",
                            "opacity",
                            750,
                            122,
                            "linear",
                            "${_7letters-slotCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12203",
                            "opacity",
                            1647,
                            103,
                            "linear",
                            "${_7letters-slotCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12186",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${_7letters-slotCopy}",
                            '-314px',
                            '-944px'
                        ],
                        [
                            "eid13056",
                            "left",
                            1091,
                            0,
                            "linear",
                            "${g5}",
                            '-291px',
                            '-291px'
                        ],
                        [
                            "eid12137",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${book-cov5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12209",
                            "opacity",
                            1647,
                            103,
                            "linear",
                            "${book-cov5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13020",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${g5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid13023",
                            "opacity",
                            872,
                            628,
                            "linear",
                            "${g5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12136",
                            "height",
                            361,
                            389,
                            "linear",
                            "${book-cov5}",
                            '141px',
                            '790px'
                        ],
                        [
                            "eid12145",
                            "top",
                            361,
                            389,
                            "linear",
                            "${book-cov5}",
                            '0px',
                            '-576px'
                        ],
                        [
                            "eid12185",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${book-cov5}",
                            '-576px',
                            '-1206px'
                        ],
                        [
                            "eid12144",
                            "left",
                            361,
                            389,
                            "linear",
                            "${book-cov5}",
                            '0px',
                            '-381px'
                        ],
                        [
                            "eid12139",
                            "width",
                            361,
                            389,
                            "linear",
                            "${book-cov5}",
                            '114px',
                            '640px'
                        ],
                            [ "eid13052", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${g5}', [0] ] ]
                    ]
                }
            },
            "game6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-506px', '-543px', '114px', '141px', 'auto', 'auto'],
                            id: 'book-cov6',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/book-cov6.png', '0px', '0px']
                        },
                        {
                            rect: ['-507px', '-327px', '650px', '115px', 'auto', 'auto'],
                            id: '_9letters-slotCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/9letters-slot.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'g6',
                            rect: ['-473px', '-309px', '587', '68', 'auto', 'auto'],
                            id: 'g6'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "start": 361
                    },
                    data: [
                        [
                            "eid12216",
                            "height",
                            361,
                            389,
                            "linear",
                            "${book-cov6}",
                            '141px',
                            '790px'
                        ],
                        [
                            "eid12217",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${book-cov6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12345",
                            "opacity",
                            1647,
                            103,
                            "linear",
                            "${book-cov6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12228",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_9letters-slotCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12230",
                            "opacity",
                            750,
                            137,
                            "linear",
                            "${_9letters-slotCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12344",
                            "opacity",
                            1647,
                            103,
                            "linear",
                            "${_9letters-slotCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13097",
                            "display",
                            0,
                            0,
                            "linear",
                            "${g6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13099",
                            "display",
                            887,
                            0,
                            "linear",
                            "${g6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13105",
                            "opacity",
                            887,
                            613,
                            "linear",
                            "${g6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12225",
                            "top",
                            361,
                            389,
                            "linear",
                            "${book-cov6}",
                            '0px',
                            '-543px'
                        ],
                        [
                            "eid12319",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${book-cov6}",
                            '-543px',
                            '-1209px'
                        ],
                        [
                            "eid12320",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${_9letters-slotCopy2}",
                            '-327px',
                            '-993px'
                        ],
                        [
                            "eid12219",
                            "width",
                            361,
                            389,
                            "linear",
                            "${book-cov6}",
                            '114px',
                            '640px'
                        ],
                        [
                            "eid12224",
                            "left",
                            361,
                            389,
                            "linear",
                            "${book-cov6}",
                            '0px',
                            '-506px'
                        ],
                            [ "eid13106", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${g6}', [0] ] ]
                    ]
                }
            },
            "game7": {
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
                            id: 'book-cov7',
                            opacity: '1',
                            rect: ['-626px', '-1204px', '114px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/book-cov7.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_9letters-slotCopy3',
                            opacity: '0',
                            rect: ['-626px', '-966px', '650px', '115px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/9letters-slot.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'g7',
                            display: 'none',
                            symbolName: 'g7',
                            rect: ['-604', '-311', '604', '80', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "start": 361
                    },
                    data: [
                        [
                            "eid12369",
                            "top",
                            361,
                            389,
                            "linear",
                            "${book-cov7}",
                            '0px',
                            '-565px'
                        ],
                        [
                            "eid12424",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${book-cov7}",
                            '-565px',
                            '-1204px'
                        ],
                        [
                            "eid12425",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${_9letters-slotCopy3}",
                            '-327px',
                            '-966px'
                        ],
                        [
                            "eid12372",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_9letters-slotCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12374",
                            "opacity",
                            750,
                            122,
                            "linear",
                            "${_9letters-slotCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12455",
                            "opacity",
                            1655,
                            95,
                            "linear",
                            "${_9letters-slotCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12361",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${book-cov7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12451",
                            "opacity",
                            1655,
                            95,
                            "linear",
                            "${book-cov7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12360",
                            "height",
                            361,
                            389,
                            "linear",
                            "${book-cov7}",
                            '141px',
                            '790px'
                        ],
                        [
                            "eid13161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${g7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13164",
                            "display",
                            872,
                            0,
                            "linear",
                            "${g7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12363",
                            "width",
                            361,
                            389,
                            "linear",
                            "${book-cov7}",
                            '114px',
                            '640px'
                        ],
                        [
                            "eid12368",
                            "left",
                            361,
                            389,
                            "linear",
                            "${book-cov7}",
                            '0px',
                            '-626px'
                        ],
                        [
                            "eid13163",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${g7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13166",
                            "opacity",
                            872,
                            628,
                            "linear",
                            "${g7}",
                            '0',
                            '1'
                        ],
                            [ "eid13167", "trigger", 579, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${g7}', [0] ] ]
                    ]
                }
            },
            "next-btn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '-4px', '49px', '48px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            id: 'arrow-up',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arrow-up.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114px', '116px']
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
            "g1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '422px', '82px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'letterHolder',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            userClass: 'letters1',
                            type: 'image',
                            rect: ['184px', '161px', '72px', '67px', 'auto', 'auto'],
                            id: 'l0',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter15.png', '0px', '0px']
                        },
                        {
                            userClass: 'letters1',
                            type: 'image',
                            rect: ['275px', '261px', '72px', '67px', 'auto', 'auto'],
                            id: 'l1',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter12.png', '0px', '0px']
                        },
                        {
                            userClass: 'letters1',
                            type: 'image',
                            rect: ['6px', '260px', '72px', '67px', 'auto', 'auto'],
                            id: 'l4',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter92.png', '0px', '0px']
                        },
                        {
                            userClass: 'letters1',
                            type: 'image',
                            rect: ['-66px', '152px', '72px', '67px', 'auto', 'auto'],
                            id: 'l5',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter82.png', '0px', '0px']
                        },
                        {
                            userClass: 'letters1',
                            type: 'image',
                            rect: ['379px', '212px', '72px', '67px', 'auto', 'auto'],
                            id: 'l2',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter72.png', '0px', '0px']
                        },
                        {
                            userClass: 'letters1',
                            type: 'image',
                            rect: ['97px', '228px', '72px', '67px', 'auto', 'auto'],
                            id: 'l3',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter22.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '422px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 60,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "g2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '618px', '84px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'letterHolder',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['239px', '102px', '69px', '65px', 'auto', 'auto'],
                            userClass: 'letters2',
                            type: 'image',
                            id: 'l0',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter152.png', '0px', '0px']
                        },
                        {
                            rect: ['92px', '179px', '69px', '65px', 'auto', 'auto'],
                            userClass: 'letters2',
                            type: 'image',
                            id: 'l8',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter14.png', '0px', '0px']
                        },
                        {
                            rect: ['121px', '98px', '69px', '65px', 'auto', 'auto'],
                            userClass: 'letters2',
                            type: 'image',
                            id: 'l5',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter14.png', '0px', '0px']
                        },
                        {
                            rect: ['185px', '169px', '69px', '65px', 'auto', 'auto'],
                            userClass: 'letters2',
                            type: 'image',
                            id: 'l6',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter122.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '187px', '69px', '65px', 'auto', 'auto'],
                            userClass: 'letters2',
                            type: 'image',
                            id: 'l1',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter122.png', '0px', '0px']
                        },
                        {
                            rect: ['512px', '98px', '69px', '65px', 'auto', 'auto'],
                            userClass: 'letters2',
                            type: 'image',
                            id: 'l2',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter73.png', '0px', '0px']
                        },
                        {
                            rect: ['294px', '155px', '69px', '65px', 'auto', 'auto'],
                            userClass: 'letters2',
                            type: 'image',
                            id: 'l3',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter62.png', '0px', '0px']
                        },
                        {
                            rect: ['18px', '102px', '69px', '65px', 'auto', 'auto'],
                            userClass: 'letters2',
                            type: 'image',
                            id: 'l4',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter52.png', '0px', '0px']
                        },
                        {
                            rect: ['415px', '137px', '69px', '65px', 'auto', 'auto'],
                            userClass: 'letters2',
                            type: 'image',
                            id: 'l7',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter42.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '618px', '84px']
                        }
                    }
                },
                timeline: {
                    duration: 60,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "g3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '484px', '76px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'letterHolder',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['360px', '117px', '70px', '66px', 'auto', 'auto'],
                            userClass: 'letters3',
                            type: 'image',
                            id: 'l4',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter153.png', '0px', '0px']
                        },
                        {
                            rect: ['449px', '183px', '70px', '66px', 'auto', 'auto'],
                            userClass: 'letters3',
                            type: 'image',
                            id: 'l0',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter153.png', '0px', '0px']
                        },
                        {
                            rect: ['-38px', '161px', '70px', '66px', 'auto', 'auto'],
                            userClass: 'letters3',
                            type: 'image',
                            id: 'l6',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter142.png', '0px', '0px']
                        },
                        {
                            rect: ['84px', '210px', '70px', '66px', 'auto', 'auto'],
                            userClass: 'letters3',
                            type: 'image',
                            id: 'l1',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter123.png', '0px', '0px']
                        },
                        {
                            rect: ['77px', '100px', '70px', '66px', 'auto', 'auto'],
                            userClass: 'letters3',
                            type: 'image',
                            id: 'l2',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter11.png', '0px', '0px']
                        },
                        {
                            rect: ['267px', '193px', '70px', '66px', 'auto', 'auto'],
                            userClass: 'letters3',
                            type: 'image',
                            id: 'l3',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter10.png', '0px', '0px']
                        },
                        {
                            rect: ['172px', '144px', '70px', '66px', 'auto', 'auto'],
                            userClass: 'letters3',
                            type: 'image',
                            id: 'l5',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter93.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '484px', '76px']
                        }
                    }
                },
                timeline: {
                    duration: 52.650316719229,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "g4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '614px', '76px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'letterHolder',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['400px', '175px', '67px', '63px', 'auto', 'auto'],
                            userClass: 'letters4',
                            type: 'image',
                            id: 'l7',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter154.png', '0px', '0px']
                        },
                        {
                            rect: ['493px', '198px', '67px', '63px', 'auto', 'auto'],
                            userClass: 'letters4',
                            type: 'image',
                            id: 'l3',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter143.png', '0px', '0px']
                        },
                        {
                            rect: ['292px', '198px', '67px', '63px', 'auto', 'auto'],
                            userClass: 'letters4',
                            type: 'image',
                            id: 'l0',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter143.png', '0px', '0px']
                        },
                        {
                            rect: ['190px', '198px', '67px', '63px', 'auto', 'auto'],
                            userClass: 'letters4',
                            type: 'image',
                            id: 'l6',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter132.png', '0px', '0px']
                        },
                        {
                            rect: ['108px', '146px', '67px', '63px', 'auto', 'auto'],
                            userClass: 'letters4',
                            type: 'image',
                            id: 'l8',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter124.png', '0px', '0px']
                        },
                        {
                            rect: ['482px', '109px', '67px', '63px', 'auto', 'auto'],
                            userClass: 'letters4',
                            type: 'image',
                            id: 'l1',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter124.png', '0px', '0px']
                        },
                        {
                            rect: ['20px', '198px', '67px', '63px', 'auto', 'auto'],
                            userClass: 'letters4',
                            type: 'image',
                            id: 'l4',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter94.png', '0px', '0px']
                        },
                        {
                            rect: ['307px', '109px', '67px', '63px', 'auto', 'auto'],
                            userClass: 'letters4',
                            type: 'image',
                            id: 'l2',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter13.png', '0px', '0px']
                        },
                        {
                            rect: ['21px', '109px', '67px', '63px', 'auto', 'auto'],
                            userClass: 'letters4',
                            type: 'image',
                            id: 'l5',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter13.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '614px', '76px']
                        }
                    }
                },
                timeline: {
                    duration: 60.171790536262,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "g5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '478px', '76px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'letterHolder',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['430px', '195px', '65px', '61px', 'auto', 'auto'],
                            userClass: 'letters5',
                            type: 'image',
                            id: 'l0',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter144.png', '0px', '0px']
                        },
                        {
                            rect: ['91px', '107px', '65px', '61px', 'auto', 'auto'],
                            userClass: 'letters5',
                            type: 'image',
                            id: 'l6',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter144.png', '0px', '0px']
                        },
                        {
                            rect: ['65px', '197px', '65px', '61px', 'auto', 'auto'],
                            userClass: 'letters5',
                            type: 'image',
                            id: 'l4',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter133.png', '0px', '0px']
                        },
                        {
                            rect: ['201px', '156px', '65px', '61px', 'auto', 'auto'],
                            userClass: 'letters5',
                            type: 'image',
                            id: 'l2',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter53.png', '0px', '0px']
                        },
                        {
                            rect: ['298px', '156px', '65px', '61px', 'auto', 'auto'],
                            userClass: 'letters5',
                            type: 'image',
                            id: 'l3',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter43.png', '0px', '0px']
                        },
                        {
                            rect: ['396px', '107px', '65px', '61px', 'auto', 'auto'],
                            userClass: 'letters5',
                            type: 'image',
                            id: 'l1',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter32.png', '0px', '0px']
                        },
                        {
                            rect: ['-22px', '145px', '65px', '61px', 'auto', 'auto'],
                            userClass: 'letters5',
                            type: 'image',
                            id: 'l5',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter16.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '478px', '76px']
                        }
                    }
                },
                timeline: {
                    duration: 60.171790536262,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "g6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '587px', '68px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'letterHolder',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['34px', '203px', '64px', '60px', 'auto', 'auto'],
                            userClass: 'letters6',
                            type: 'image',
                            id: 'l3',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter155.png', '0px', '0px']
                        },
                        {
                            rect: ['352px', '102px', '64px', '60px', 'auto', 'auto'],
                            userClass: 'letters6',
                            type: 'image',
                            id: 'l0',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter155.png', '0px', '0px']
                        },
                        {
                            rect: ['442px', '194px', '64px', '60px', 'auto', 'auto'],
                            userClass: 'letters6',
                            type: 'image',
                            id: 'l8',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter145.png', '0px', '0px']
                        },
                        {
                            rect: ['255px', '117px', '64px', '60px', 'auto', 'auto'],
                            userClass: 'letters6',
                            type: 'image',
                            id: 'l6',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter134.png', '0px', '0px']
                        },
                        {
                            rect: ['34px', '97px', '64px', '60px', 'auto', 'auto'],
                            userClass: 'letters6',
                            type: 'image',
                            id: 'l4',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter125.png', '0px', '0px']
                        },
                        {
                            rect: ['205px', '203px', '64px', '60px', 'auto', 'auto'],
                            userClass: 'letters6',
                            type: 'image',
                            id: 'l1',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter125.png', '0px', '0px']
                        },
                        {
                            rect: ['352px', '194px', '64px', '60px', 'auto', 'auto'],
                            userClass: 'letters6',
                            type: 'image',
                            id: 'l2',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter112.png', '0px', '0px']
                        },
                        {
                            rect: ['491px', '102px', '64px', '60px', 'auto', 'auto'],
                            userClass: 'letters6',
                            type: 'image',
                            id: 'l5',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter54.png', '0px', '0px']
                        },
                        {
                            rect: ['116px', '141px', '64px', '60px', 'auto', 'auto'],
                            userClass: 'letters6',
                            type: 'image',
                            id: 'l7',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter17.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '587px', '68px']
                        }
                    }
                },
                timeline: {
                    duration: 52.650316719229,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "g7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '604px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'letterHolder',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            rect: ['388px', '95px', '68px', '64px', 'auto', 'auto'],
                            userClass: 'letters7',
                            id: 'l0',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter156.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['197px', '92px', '68px', '64px', 'auto', 'auto'],
                            userClass: 'letters7',
                            id: 'l2',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter102.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['341px', '171px', '68px', '64px', 'auto', 'auto'],
                            userClass: 'letters7',
                            id: 'l1',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter83.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['110px', '131px', '68px', '64px', 'auto', 'auto'],
                            userClass: 'letters7',
                            id: 'l3',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter63.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'l4',
                            rect: ['231px', '187px', '68px', '64px', 'auto', 'auto'],
                            userClass: 'letters7',
                            fill: ['rgba(0,0,0,0)', 'images/letter157.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '604px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("4_edgeActions.js");
})("EDGE-1646797");
