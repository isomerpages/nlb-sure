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
                            rect: ['-8px', '-4px', '1039px', '735px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bookshop.jpg",'0px','0px']
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
                            rect: ['88px', '-175px', '838px', '254px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Types and Forms<br>of Visuals <br>(School)",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(0,101,232,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'gin-up-arm-back',
                            type: 'image',
                            rect: ['-145px', '386px', '74px', '169px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-up-arm-back.png",'0px','0px'],
                            transform: [[],['3']]
                        },
                        {
                            id: 'gin-low-arm-back',
                            type: 'image',
                            rect: ['-106px', '497px', '57px', '152px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-low-arm-back.png",'0px','0px'],
                            transform: [[],['-143']]
                        },
                        {
                            id: 'gin-body',
                            type: 'image',
                            rect: ['-294px', '302px', '216px', '401px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-body.png",'0px','0px']
                        },
                        {
                            id: 'gin-up-arm-front',
                            type: 'image',
                            rect: ['-304px', '395px', '70px', '166px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-up-arm-front.png",'0px','0px']
                        },
                        {
                            id: 'gin-low-arm-front',
                            type: 'image',
                            rect: ['-309px', '514px', '67px', '147px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-low-arm-front.png",'0px','0px'],
                            transform: [[],['-135']]
                        },
                        {
                            id: 'gin-side',
                            type: 'image',
                            rect: ['-3px', '114px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-side.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-blink2',
                            type: 'image',
                            rect: ['-3px', '114px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-blink2.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-smile-side',
                            type: 'image',
                            rect: ['-3px', '114px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-smile-side.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-blink1',
                            type: 'image',
                            rect: ['-3px', '114px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-blink1.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-speak-side',
                            type: 'image',
                            rect: ['-3px', '114px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-speak-side.png",'0px','0px']
                        },
                        {
                            id: 'nath-up-arm-back',
                            type: 'image',
                            rect: ['662px', '339px', '70px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-up-arm-back.png",'0px','0px'],
                            transform: [[],['1']]
                        },
                        {
                            id: 'nath-body',
                            type: 'image',
                            rect: ['1112px', '311px', '213px', '293px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-body.png",'0px','0px'],
                            transform: [[],['-5']]
                        },
                        {
                            id: 'nath-side',
                            type: 'image',
                            rect: ['681px', '81px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-side.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-blink',
                            type: 'image',
                            rect: ['681px', '81px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-blink.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-speak-side',
                            type: 'image',
                            rect: ['681px', '81px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-speak-side.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-up-arm-front',
                            type: 'image',
                            rect: ['1254px', '371px', '102px', '179px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-up-arm-front.png",'0px','0px'],
                            transform: [[],['-1']]
                        },
                        {
                            id: 'nath-low-arm-back',
                            type: 'image',
                            rect: ['669px', '515px', '77px', '138px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-low-arm-back.png",'0px','0px']
                        },
                        {
                            id: 'nath-low-arm-front',
                            type: 'image',
                            rect: ['903px', '515px', '51px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-low-arm-front.png",'0px','0px']
                        },
                        {
                            id: 'library-table',
                            type: 'image',
                            rect: ['-8px', '241px', '950px', '371px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"library-table.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['-12px', '-12px', '1048px', '608px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.64)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'search-screen',
                            type: 'image',
                            rect: ['253px', '262px', '406px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"search-screen.png",'0px','0px']
                        },
                        {
                            id: 'result-screen',
                            type: 'image',
                            rect: ['108px', '54px', '406px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"result-screen.png",'0px','0px']
                        },
                        {
                            id: 'letters',
                            symbolName: 'letters',
                            display: 'none',
                            type: 'rect',
                            rect: ['198px', '225px', '57', '54', 'auto', 'auto']
                        },
                        {
                            id: 'notif1',
                            symbolName: 'notif1',
                            display: 'none',
                            type: 'rect',
                            rect: ['-7px', '140px', '333', '383', 'auto', 'auto']
                        },
                        {
                            id: 'notif2',
                            symbolName: 'notif2',
                            display: 'none',
                            type: 'rect',
                            rect: ['664', '150', '367', '439', 'auto', 'auto']
                        },
                        {
                            id: 'search-btn',
                            display: 'none',
                            type: 'image',
                            rect: ['411px', '471px', '92px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"search-btn.png",'0px','0px']
                        },
                        {
                            id: 'next-btn2',
                            display: 'none',
                            type: 'image',
                            rect: ['697px', '470px', '165px', '54px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"next-btn.png",'0px','0px']
                        },
                        {
                            id: 't1',
                            display: 'none',
                            type: 'rect',
                            rect: ['164px', '139px', '343px', '203px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 't2',
                            display: 'none',
                            type: 'rect',
                            rect: ['531px', '138px', '343px', '203px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 't3',
                            display: 'none',
                            type: 'rect',
                            rect: ['164px', '345px', '343px', '92px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 't4',
                            display: 'none',
                            type: 'rect',
                            rect: ['164px', '443px', '343px', '92px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 't5',
                            display: 'none',
                            type: 'rect',
                            rect: ['531px', '345px', '343px', '190px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
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
                            rect: ['234', '13', '792', '203', 'auto', 'auto']
                        },
                        {
                            id: 'instruction2',
                            symbolName: 'instruction2',
                            display: 'none',
                            type: 'rect',
                            rect: ['-170px', '7px', '968', '150', 'auto', 'auto']
                        },
                        {
                            id: 'instruction-btn',
                            type: 'image',
                            rect: ['89px', '24px', '102px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"instruction-btn.png",'0px','0px']
                        },
                        {
                            id: 'game-resultWrong',
                            symbolName: 'game-result',
                            display: 'none',
                            type: 'rect',
                            rect: ['148', '154', '800', '212', 'auto', 'auto']
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
                    duration: 38272,
                    autoPlay: true,
                    labels: {
                        "test": 20682,
                        "find": 21750,
                        "correct": 26000
                    },
                    data: [
                        [
                            "eid10400",
                            "rotateZ",
                            5869,
                            188,
                            "linear",
                            "${gin-blink2}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid10853",
                            "rotateZ",
                            34361,
                            263,
                            "linear",
                            "${gin-blink2}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid10230",
                            "top",
                            4091,
                            409,
                            "linear",
                            "${library-table}",
                            '584px',
                            '241px'
                        ],
                        [
                            "eid10396",
                            "rotateZ",
                            5869,
                            188,
                            "linear",
                            "${gin-blink1}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid10849",
                            "rotateZ",
                            34361,
                            263,
                            "linear",
                            "${gin-blink1}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid10329",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-up-arm-back}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10274",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${nath-up-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10408",
                            "top",
                            5869,
                            188,
                            "linear",
                            "${gin-speak-side}",
                            '120px',
                            '126px'
                        ],
                        [
                            "eid10861",
                            "top",
                            34361,
                            263,
                            "linear",
                            "${gin-speak-side}",
                            '126px',
                            '114px'
                        ],
                        [
                            "eid10327",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-blink1}",
                            '-317px',
                            '9px'
                        ],
                        [
                            "eid10401",
                            "left",
                            5869,
                            188,
                            "linear",
                            "${gin-blink1}",
                            '9px',
                            '24px'
                        ],
                        [
                            "eid10854",
                            "left",
                            34361,
                            263,
                            "linear",
                            "${gin-blink1}",
                            '24px',
                            '-3px'
                        ],
                        [
                            "eid10927",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10932",
                            "display",
                            25740,
                            0,
                            "linear",
                            "${t2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10938",
                            "display",
                            25800,
                            0,
                            "linear",
                            "${t2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10322",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-low-arm-front}",
                            '-309px',
                            '17px'
                        ],
                        [
                            "eid10926",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10931",
                            "display",
                            25740,
                            0,
                            "linear",
                            "${t3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10937",
                            "display",
                            25800,
                            0,
                            "linear",
                            "${t3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10431",
                            "rotateZ",
                            5948,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid10806",
                            "rotateZ",
                            34001,
                            212,
                            "linear",
                            "${nath-speak-side}",
                            '-15deg',
                            '1deg'
                        ],
                        [
                            "eid10545",
                            "left",
                            16338,
                            218,
                            "linear",
                            "${search-screen}",
                            '253px',
                            '108px'
                        ],
                        [
                            "eid10342",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10650",
                            "display",
                            0,
                            0,
                            "linear",
                            "${notif1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10649",
                            "display",
                            26048,
                            0,
                            "linear",
                            "${notif1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10947",
                            "display",
                            31055,
                            0,
                            "linear",
                            "${notif1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10949",
                            "display",
                            33477,
                            0,
                            "linear",
                            "${notif1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10563",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${search-screen}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10561",
                            "opacity",
                            16338,
                            162,
                            "linear",
                            "${search-screen}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10641",
                            "opacity",
                            21807,
                            70,
                            "linear",
                            "${search-screen}",
                            '1',
                            '0'
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
                            "eid10895",
                            "opacity",
                            38060,
                            124,
                            "linear",
                            "${next-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10770",
                            "top",
                            33477,
                            240,
                            "linear",
                            "${result-screen}",
                            '54px',
                            '264px'
                        ],
                        [
                            "eid10565",
                            "display",
                            0,
                            0,
                            "linear",
                            "${letters}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10564",
                            "display",
                            16750,
                            0,
                            "linear",
                            "${letters}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10642",
                            "display",
                            21807,
                            0,
                            "linear",
                            "${letters}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10464",
                            "rotateZ",
                            6317,
                            241,
                            "linear",
                            "${nath-up-arm-back}",
                            '1deg',
                            '53deg'
                        ],
                        [
                            "eid10785",
                            "rotateZ",
                            33800,
                            201,
                            "linear",
                            "${nath-up-arm-back}",
                            '53deg',
                            '3deg'
                        ],
                        [
                            "eid10331",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-up-arm-front}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10275",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${nath-up-arm-front}",
                            '0',
                            '1'
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
                            "eid10475",
                            "height",
                            15867,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '33px',
                            '103px'
                        ],
                        [
                            "eid10482",
                            "height",
                            16062,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '103px',
                            '92px'
                        ],
                        [
                            "eid10870",
                            "height",
                            33800,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '92px',
                            '103px'
                        ],
                        [
                            "eid10869",
                            "height",
                            33903,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '103px',
                            '33px'
                        ],
                        [
                            "eid10319",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-speak-side}",
                            '-317px',
                            '9px'
                        ],
                        [
                            "eid10407",
                            "left",
                            5869,
                            188,
                            "linear",
                            "${gin-speak-side}",
                            '9px',
                            '24px'
                        ],
                        [
                            "eid10860",
                            "left",
                            34361,
                            263,
                            "linear",
                            "${gin-speak-side}",
                            '24px',
                            '-3px'
                        ],
                        [
                            "eid10297",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-low-arm-front}",
                            '1279px',
                            '903px'
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
                            "eid10262",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-blink}",
                            '1069px',
                            '686px'
                        ],
                        [
                            "eid10438",
                            "left",
                            5948,
                            187,
                            "linear",
                            "${nath-blink}",
                            '686px',
                            '660px'
                        ],
                        [
                            "eid10813",
                            "left",
                            34001,
                            212,
                            "linear",
                            "${nath-blink}",
                            '660px',
                            '681px'
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
                            15867,
                            99,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10871",
                            "opacity",
                            33999,
                            99,
                            "linear",
                            "${instruction-btn}",
                            '1',
                            '0'
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
                            "eid10866",
                            "opacity",
                            34735,
                            212,
                            "linear",
                            "${gin-smile-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10398",
                            "rotateZ",
                            5869,
                            188,
                            "linear",
                            "${gin-side}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid10851",
                            "rotateZ",
                            34361,
                            263,
                            "linear",
                            "${gin-side}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid10402",
                            "top",
                            5869,
                            188,
                            "linear",
                            "${gin-blink1}",
                            '120px',
                            '126px'
                        ],
                        [
                            "eid10855",
                            "top",
                            34361,
                            263,
                            "linear",
                            "${gin-blink1}",
                            '126px',
                            '114px'
                        ],
                        [
                            "eid10553",
                            "left",
                            16338,
                            218,
                            "linear",
                            "${search-btn}",
                            '411px',
                            '427px'
                        ],
                        [
                            "eid10265",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10280",
                            "opacity",
                            4946,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10283",
                            "opacity",
                            5098,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10457",
                            "opacity",
                            15846,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10456",
                            "opacity",
                            15998,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10815",
                            "opacity",
                            34382,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10816",
                            "opacity",
                            34534,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
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
                            "eid10433",
                            "rotateZ",
                            5948,
                            187,
                            "linear",
                            "${nath-blink}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid10808",
                            "rotateZ",
                            34001,
                            212,
                            "linear",
                            "${nath-blink}",
                            '-15deg',
                            '1deg'
                        ],
                        [
                            "eid10320",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-up-arm-back}",
                            '-145px',
                            '181px'
                        ],
                        [
                            "eid10884",
                            "height",
                            38060,
                            124,
                            "linear",
                            "${next-btn}",
                            '49px',
                            '109px'
                        ],
                        [
                            "eid10891",
                            "height",
                            38184,
                            88,
                            "linear",
                            "${next-btn}",
                            '109px',
                            '92px'
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
                            6909,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10411",
                            "opacity",
                            7061,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10817",
                            "opacity",
                            34119,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10818",
                            "opacity",
                            34271,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10562",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${search-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10560",
                            "opacity",
                            16338,
                            162,
                            "linear",
                            "${search-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10640",
                            "opacity",
                            21807,
                            70,
                            "linear",
                            "${search-btn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10928",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10933",
                            "display",
                            25740,
                            0,
                            "linear",
                            "${t1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10939",
                            "display",
                            25800,
                            0,
                            "linear",
                            "${t1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10771",
                            "left",
                            33477,
                            240,
                            "linear",
                            "${result-screen}",
                            '108px',
                            '255px'
                        ],
                        [
                            "eid10399",
                            "rotateZ",
                            5869,
                            188,
                            "linear",
                            "${gin-speak-side}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid10852",
                            "rotateZ",
                            34361,
                            263,
                            "linear",
                            "${gin-speak-side}",
                            '10deg',
                            '-10deg'
                        ],
                        [
                            "eid10476",
                            "width",
                            15867,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '102px',
                            '318px'
                        ],
                        [
                            "eid10481",
                            "width",
                            16062,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '318px',
                            '284px'
                        ],
                        [
                            "eid10875",
                            "width",
                            33800,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '284px',
                            '318px'
                        ],
                        [
                            "eid10874",
                            "width",
                            33903,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '318px',
                            '102px'
                        ],
                        [
                            "eid10633",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10632",
                            "display",
                            22099,
                            0,
                            "linear",
                            "${instruction2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10920",
                            "display",
                            25740,
                            0,
                            "linear",
                            "${instruction2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10772",
                            "width",
                            33477,
                            240,
                            "linear",
                            "${result-screen}",
                            '813px',
                            '406px'
                        ],
                        [
                            "eid10550",
                            "width",
                            16338,
                            218,
                            "linear",
                            "${search-btn}",
                            '92px',
                            '185px'
                        ],
                        [
                            "eid10227",
                            "top",
                            0,
                            4250,
                            "linear",
                            "${bookshop}",
                            '-4px',
                            '-87px'
                        ],
                        [
                            "eid10925",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10930",
                            "display",
                            25740,
                            0,
                            "linear",
                            "${t4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10936",
                            "display",
                            25800,
                            0,
                            "linear",
                            "${t4}",
                            'block',
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
                            "eid10950",
                            "display",
                            0,
                            0,
                            "linear",
                            "${search-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10951",
                            "display",
                            16338,
                            0,
                            "linear",
                            "${search-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10952",
                            "display",
                            21750,
                            0,
                            "linear",
                            "${search-btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10478",
                            "top",
                            15867,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '24px',
                            '2px'
                        ],
                        [
                            "eid10480",
                            "top",
                            16062,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '2px',
                            '8px'
                        ],
                        [
                            "eid10868",
                            "top",
                            33800,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '8px',
                            '2px'
                        ],
                        [
                            "eid10867",
                            "top",
                            33903,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '2px',
                            '24px'
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
                            16165,
                            255,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10778",
                            "opacity",
                            33550,
                            167,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10263",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-side}",
                            '1069px',
                            '686px'
                        ],
                        [
                            "eid10436",
                            "left",
                            5948,
                            187,
                            "linear",
                            "${nath-side}",
                            '686px',
                            '660px'
                        ],
                        [
                            "eid10811",
                            "left",
                            34001,
                            212,
                            "linear",
                            "${nath-side}",
                            '660px',
                            '681px'
                        ],
                        [
                            "eid10547",
                            "height",
                            16338,
                            218,
                            "linear",
                            "${search-btn}",
                            '32px',
                            '65px'
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
                            "eid10321",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-blink2}",
                            '-317px',
                            '9px'
                        ],
                        [
                            "eid10409",
                            "left",
                            5869,
                            188,
                            "linear",
                            "${gin-blink2}",
                            '9px',
                            '24px'
                        ],
                        [
                            "eid10862",
                            "left",
                            34361,
                            263,
                            "linear",
                            "${gin-blink2}",
                            '24px',
                            '-3px'
                        ],
                        [
                            "eid10924",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10929",
                            "display",
                            25740,
                            0,
                            "linear",
                            "${t5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10935",
                            "display",
                            25800,
                            0,
                            "linear",
                            "${t5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10318",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-up-arm-front}",
                            '-304px',
                            '22px'
                        ],
                        [
                            "eid10259",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-speak-side}",
                            '1069px',
                            '686px'
                        ],
                        [
                            "eid10434",
                            "left",
                            5948,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '686px',
                            '660px'
                        ],
                        [
                            "eid10809",
                            "left",
                            34001,
                            212,
                            "linear",
                            "${nath-speak-side}",
                            '660px',
                            '681px'
                        ],
                        [
                            "eid10326",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-side}",
                            '-317px',
                            '9px'
                        ],
                        [
                            "eid10405",
                            "left",
                            5869,
                            188,
                            "linear",
                            "${gin-side}",
                            '9px',
                            '24px'
                        ],
                        [
                            "eid10858",
                            "left",
                            34361,
                            263,
                            "linear",
                            "${gin-side}",
                            '24px',
                            '-3px'
                        ],
                        [
                            "eid10404",
                            "top",
                            5869,
                            188,
                            "linear",
                            "${gin-smile-side}",
                            '120px',
                            '126px'
                        ],
                        [
                            "eid10857",
                            "top",
                            34361,
                            263,
                            "linear",
                            "${gin-smile-side}",
                            '126px',
                            '114px'
                        ],
                        [
                            "eid10439",
                            "top",
                            5948,
                            187,
                            "linear",
                            "${nath-blink}",
                            '81px',
                            '100px'
                        ],
                        [
                            "eid10814",
                            "top",
                            34001,
                            212,
                            "linear",
                            "${nath-blink}",
                            '100px',
                            '84px'
                        ],
                        [
                            "eid10290",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-low-arm-back}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10288",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${nath-low-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10437",
                            "top",
                            5948,
                            187,
                            "linear",
                            "${nath-side}",
                            '81px',
                            '100px'
                        ],
                        [
                            "eid10812",
                            "top",
                            34001,
                            212,
                            "linear",
                            "${nath-side}",
                            '100px',
                            '84px'
                        ],
                        [
                            "eid10544",
                            "top",
                            16338,
                            218,
                            "linear",
                            "${search-screen}",
                            '262px',
                            '54px'
                        ],
                        [
                            "eid10258",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-up-arm-front}",
                            '1254px',
                            '871px'
                        ],
                        [
                            "eid10885",
                            "top",
                            38060,
                            124,
                            "linear",
                            "${next-btn}",
                            '500px',
                            '467px'
                        ],
                        [
                            "eid10889",
                            "top",
                            38184,
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
                            "eid10261",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-body}",
                            '1112px',
                            '729px'
                        ],
                        [
                            "eid10291",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-low-arm-front}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10289",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${nath-low-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10940",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10941",
                            "display",
                            38060,
                            0,
                            "linear",
                            "${next-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10477",
                            "left",
                            15867,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '89px',
                            '1px'
                        ],
                        [
                            "eid10479",
                            "left",
                            16062,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '1px',
                            '9px'
                        ],
                        [
                            "eid10873",
                            "left",
                            33800,
                            103,
                            "linear",
                            "${instruction-btn}",
                            '9px',
                            '1px'
                        ],
                        [
                            "eid10872",
                            "left",
                            33903,
                            195,
                            "linear",
                            "${instruction-btn}",
                            '1px',
                            '89px'
                        ],
                        [
                            "eid10410",
                            "top",
                            5869,
                            188,
                            "linear",
                            "${gin-blink2}",
                            '120px',
                            '126px'
                        ],
                        [
                            "eid10863",
                            "top",
                            34361,
                            263,
                            "linear",
                            "${gin-blink2}",
                            '126px',
                            '114px'
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
                            "eid10701",
                            "display",
                            0,
                            0,
                            "linear",
                            "${notif2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10700",
                            "display",
                            29412,
                            0,
                            "linear",
                            "${notif2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10948",
                            "display",
                            33477,
                            0,
                            "linear",
                            "${notif2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10328",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-body}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10277",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${nath-body}",
                            '0',
                            '1'
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
                            16165,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10946",
                            "display",
                            20851,
                            0,
                            "linear",
                            "${instruction}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10432",
                            "rotateZ",
                            5948,
                            187,
                            "linear",
                            "${nath-side}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid10807",
                            "rotateZ",
                            34001,
                            212,
                            "linear",
                            "${nath-side}",
                            '-15deg',
                            '1deg'
                        ],
                        [
                            "eid10435",
                            "top",
                            5948,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '81px',
                            '100px'
                        ],
                        [
                            "eid10810",
                            "top",
                            34001,
                            212,
                            "linear",
                            "${nath-speak-side}",
                            '100px',
                            '84px'
                        ],
                        [
                            "eid10887",
                            "width",
                            38060,
                            124,
                            "linear",
                            "${next-btn}",
                            '152px',
                            '338px'
                        ],
                        [
                            "eid10890",
                            "width",
                            38184,
                            88,
                            "linear",
                            "${next-btn}",
                            '338px',
                            '284px'
                        ],
                        [
                            "eid10406",
                            "top",
                            5869,
                            188,
                            "linear",
                            "${gin-side}",
                            '120px',
                            '126px'
                        ],
                        [
                            "eid10859",
                            "top",
                            34361,
                            263,
                            "linear",
                            "${gin-side}",
                            '126px',
                            '114px'
                        ],
                        [
                            "eid10769",
                            "height",
                            33477,
                            240,
                            "linear",
                            "${result-screen}",
                            '522px',
                            '261px'
                        ],
                        [
                            "eid10323",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-smile-side}",
                            '-317px',
                            '9px'
                        ],
                        [
                            "eid10403",
                            "left",
                            5869,
                            188,
                            "linear",
                            "${gin-smile-side}",
                            '9px',
                            '24px'
                        ],
                        [
                            "eid10856",
                            "left",
                            34361,
                            263,
                            "linear",
                            "${gin-smile-side}",
                            '24px',
                            '-3px'
                        ],
                        [
                            "eid10922",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-resultWrong}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10264",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10442",
                            "opacity",
                            6135,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10445",
                            "opacity",
                            6317,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10448",
                            "opacity",
                            6558,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10450",
                            "opacity",
                            6750,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10452",
                            "opacity",
                            6909,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10455",
                            "opacity",
                            15651,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10543",
                            "height",
                            16338,
                            218,
                            "linear",
                            "${search-screen}",
                            '261px',
                            '522px'
                        ],
                        [
                            "eid10397",
                            "rotateZ",
                            5869,
                            188,
                            "linear",
                            "${gin-smile-side}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid10850",
                            "rotateZ",
                            34361,
                            263,
                            "linear",
                            "${gin-smile-side}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid10466",
                            "top",
                            6317,
                            241,
                            "linear",
                            "${nath-up-arm-back}",
                            '376px',
                            '339px'
                        ],
                        [
                            "eid10787",
                            "top",
                            33800,
                            201,
                            "linear",
                            "${nath-up-arm-back}",
                            '339px',
                            '380px'
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
                            "eid10330",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10276",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${nath-side}",
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
                            "eid10548",
                            "top",
                            16338,
                            218,
                            "linear",
                            "${search-btn}",
                            '471px',
                            '470px'
                        ],
                        [
                            "eid6741",
                            "top",
                            316,
                            184,
                            "linear",
                            "${Text}",
                            '-175px',
                            '146px'
                        ],
                        [
                            "eid6744",
                            "top",
                            3843,
                            98,
                            "linear",
                            "${Text}",
                            '146px',
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
                            "eid10260",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-up-arm-back}",
                            '1083px',
                            '700px'
                        ],
                        [
                            "eid10465",
                            "left",
                            6317,
                            241,
                            "linear",
                            "${nath-up-arm-back}",
                            '700px',
                            '662px'
                        ],
                        [
                            "eid10786",
                            "left",
                            33800,
                            201,
                            "linear",
                            "${nath-up-arm-back}",
                            '662px',
                            '698px'
                        ],
                        [
                            "eid10324",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${gin-body}",
                            '-294px',
                            '32px'
                        ],
                        [
                            "eid10546",
                            "width",
                            16338,
                            218,
                            "linear",
                            "${search-screen}",
                            '406px',
                            '813px'
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
                            "eid11023",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next-btn2}",
                            'none',
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
                            '220px'
                        ],
                        [
                            "eid10647",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${result-screen}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10646",
                            "opacity",
                            21750,
                            57,
                            "linear",
                            "${result-screen}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10775",
                            "opacity",
                            33602,
                            115,
                            "linear",
                            "${result-screen}",
                            '1',
                            '0'
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
                            "eid10886",
                            "left",
                            38060,
                            124,
                            "linear",
                            "${next-btn}",
                            '793px',
                            '685px'
                        ],
                        [
                            "eid10888",
                            "left",
                            38184,
                            88,
                            "linear",
                            "${next-btn}",
                            '685px',
                            '728px'
                        ],
                        [
                            "eid10296",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-low-arm-back}",
                            '1045px',
                            '669px'
                        ],
                            [ "eid10736", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${notif2}', [] ] ],
                            [ "eid10698", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${notif1}', [] ] ],
                            [ "eid10566", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${letters}', [] ] ],
                            [ "eid10494", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid10923", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-resultWrong}', [] ] ],
                            [ "eid10634", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction2}', [] ] ],
                            [ "eid10238", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${chairs}', [] ] ],
                            [ "eid10239", "trigger", 4500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${chairs}', [] ] ],
                            [ "eid10495", "trigger", 16165, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ],
                            [ "eid10567", "trigger", 16750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${letters}', [] ] ],
                            [ "eid10648", "trigger", 21807, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${letters}', [] ] ],
                            [ "eid10635", "trigger", 22098.526386344, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction2}', [] ] ],
                            [ "eid10699", "trigger", 26048.365768593, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${notif1}', [] ] ],
                            [ "eid10737", "trigger", 29412, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${notif2}', [] ] ]
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
                            transform: [[], [], [], ['-1', '1.00696']],
                            id: 'chairCopy',
                            type: 'image',
                            rect: ['-44px', '1px', '263px', '258px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/chair.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'chair',
                            rect: ['1116px', '1px', '263px', '258px', 'auto', 'auto'],
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
                    duration: 395.09730578046,
                    autoPlay: true,
                    data: [
                        [
                            "eid10242",
                            "left",
                            0,
                            395,
                            "linear",
                            "${chair}",
                            '1116px',
                            '742px'
                        ],
                        [
                            "eid10245",
                            "left",
                            0,
                            395,
                            "linear",
                            "${chairCopy}",
                            '-366px',
                            '-44px'
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
                            rect: ['32px', '12px', '720px', '159px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['-210px', '7px', '262px', '67px', 'auto', 'auto'],
                            id: 'narrator-text-balloon',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [38, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(0, 101, 232)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text2',
                            text: 'Help them search online by typing in the <br>keywords. Fill in the missing letters <br>and click \'Search\'.',
                            opacity: '0',
                            rect: ['38px', '31px', '745px', '131px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '792px', '203px']
                        }
                    }
                },
                timeline: {
                    duration: 2686,
                    autoPlay: true,
                    data: [
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
                            2436,
                            62,
                            "linear",
                            "${Text2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10514",
                            "opacity",
                            2686,
                            0,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10503",
                            "top",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '7px',
                            '0px'
                        ],
                        [
                            "eid10515",
                            "top",
                            2436,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '0px',
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
                            2498,
                            188,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10501",
                            "width",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '262px',
                            '793px'
                        ],
                        [
                            "eid10519",
                            "width",
                            2436,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '793px',
                            '262px'
                        ],
                        [
                            "eid10943",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10944",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10945",
                            "display",
                            2498,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
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
                            2436,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '203px',
                            '67px'
                        ],
                        [
                            "eid10502",
                            "left",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '-210px',
                            '0px'
                        ],
                        [
                            "eid10518",
                            "left",
                            2436,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '0px',
                            '-210px'
                        ]
                    ]
                }
            },
            "letters": {
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
                            rect: ['273px', '166px', '45px', '43px', 'auto', 'auto'],
                            userClass: 'letters1',
                            id: 'l0',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter20.png', '0px', '0px']
                        },
                        {
                            userClass: 'letters1',
                            type: 'image',
                            display: 'block',
                            id: 'l5',
                            opacity: '1',
                            rect: ['235px', '1px', '50px', '48px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/letter20.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['417px', '80px', '45px', '43px', 'auto', 'auto'],
                            userClass: 'letters1',
                            id: 'l9',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter16.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['387px', '166px', '45px', '43px', 'auto', 'auto'],
                            userClass: 'letters1',
                            id: 'l2',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter15.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['47px', '80px', '45px', '43px', 'auto', 'auto'],
                            userClass: 'letters1',
                            id: 'l3',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter13.png', '0px', '0px']
                        },
                        {
                            userClass: 'letters1',
                            type: 'image',
                            display: 'block',
                            id: 'l7',
                            opacity: '1',
                            rect: ['323px', '1px', '50px', '48px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/letter13.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['573px', '175px', '45px', '43px', 'auto', 'auto'],
                            userClass: 'letters1',
                            id: 'l10',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter13.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['164px', '167px', '45px', '43px', 'auto', 'auto'],
                            userClass: 'letters1',
                            id: 'l11',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter12.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['70px', '155px', '45px', '43px', 'auto', 'auto'],
                            userClass: 'letters1',
                            id: 'l4',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter12.png', '0px', '0px']
                        },
                        {
                            userClass: 'letters1',
                            type: 'image',
                            display: 'block',
                            id: 'l1',
                            opacity: '1',
                            rect: ['38px', '1px', '50px', '48px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/letter11.png', '0px', '0px']
                        },
                        {
                            userClass: 'letters1',
                            type: 'image',
                            display: 'block',
                            id: 'l13',
                            opacity: '1',
                            rect: ['565px', '85px', '45px', '43px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/letter11.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['160px', '75px', '45px', '43px', 'auto', 'auto'],
                            userClass: 'letters1',
                            id: 'l8',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter10.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['296px', '77px', '45px', '43px', 'auto', 'auto'],
                            userClass: 'letters1',
                            id: 'l6',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter6.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['497px', '134px', '45px', '43px', 'auto', 'auto'],
                            userClass: 'letters1',
                            id: 'l12',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/letter1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '57px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 325,
                    autoPlay: true,
                    data: [
                        [
                            "eid10611",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${l10}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10609",
                            "opacity",
                            212,
                            113,
                            "linear",
                            "${l10}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10918",
                            "opacity",
                            0,
                            212,
                            "linear",
                            "${l13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10919",
                            "opacity",
                            325,
                            0,
                            "linear",
                            "${l13}",
                            '1',
                            '1'
                        ],
                        [
                            "eid10912",
                            "opacity",
                            0,
                            212,
                            "linear",
                            "${l5}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10903",
                            "opacity",
                            212,
                            113,
                            "linear",
                            "${l5}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid10910",
                            "display",
                            0,
                            0,
                            "linear",
                            "${l5}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10583",
                            "opacity",
                            0,
                            110,
                            "linear",
                            "${l11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10917",
                            "display",
                            0,
                            0,
                            "linear",
                            "${l13}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10911",
                            "display",
                            0,
                            0,
                            "linear",
                            "${l7}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10596",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${l6}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10594",
                            "opacity",
                            110,
                            102,
                            "linear",
                            "${l6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10597",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${l4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10593",
                            "opacity",
                            110,
                            102,
                            "linear",
                            "${l4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10598",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${l2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10595",
                            "opacity",
                            110,
                            102,
                            "linear",
                            "${l2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10581",
                            "opacity",
                            0,
                            110,
                            "linear",
                            "${l8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10913",
                            "opacity",
                            0,
                            212,
                            "linear",
                            "${l7}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10905",
                            "opacity",
                            212,
                            113,
                            "linear",
                            "${l7}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid10613",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${l0}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10610",
                            "opacity",
                            212,
                            113,
                            "linear",
                            "${l0}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10582",
                            "opacity",
                            0,
                            110,
                            "linear",
                            "${l12}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10612",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${l3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10608",
                            "opacity",
                            212,
                            113,
                            "linear",
                            "${l3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10580",
                            "opacity",
                            0,
                            110,
                            "linear",
                            "${l9}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10914",
                            "opacity",
                            0,
                            212,
                            "linear",
                            "${l1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10915",
                            "opacity",
                            325,
                            0,
                            "linear",
                            "${l1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10909",
                            "display",
                            0,
                            0,
                            "linear",
                            "${l1}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "instruction2": {
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
                            id: 'narrator-text-balloon',
                            opacity: '0',
                            rect: ['222px', '0px', '262px', '67px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            rect: ['474px', '21px', '509px', '89px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(0, 101, 232)', 'normal', 'break-word', 'normal'],
                            text: 'Choose the website which contains the most appropriate information on <br>Asian Elephants.',
                            id: 'Text2',
                            opacity: '0',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '968px', '150px']
                        }
                    }
                },
                timeline: {
                    duration: 1841,
                    autoPlay: true,
                    data: [
                        [
                            "eid10618",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10619",
                            "opacity",
                            188,
                            62,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10620",
                            "opacity",
                            1591,
                            62,
                            "linear",
                            "${Text2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10621",
                            "opacity",
                            1841,
                            0,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10626",
                            "opacity",
                            0,
                            188,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10627",
                            "opacity",
                            1653,
                            188,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10622",
                            "top",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '0px',
                            '7px'
                        ],
                        [
                            "eid10623",
                            "top",
                            1591,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '7px',
                            '0px'
                        ],
                        [
                            "eid10624",
                            "height",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '67px',
                            '131px'
                        ],
                        [
                            "eid10625",
                            "height",
                            1591,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '131px',
                            '67px'
                        ],
                        [
                            "eid10630",
                            "width",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '262px',
                            '554px'
                        ],
                        [
                            "eid10631",
                            "width",
                            1591,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '554px',
                            '262px'
                        ],
                        [
                            "eid10628",
                            "left",
                            0,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '222px',
                            '454px'
                        ],
                        [
                            "eid10629",
                            "left",
                            1591,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '454px',
                            '0px'
                        ]
                    ]
                }
            },
            "notif1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-37px', '312px', '100px', '118px', 'auto', 'auto'],
                            transform: [[], [], [], ['-0.77757', '0.76294']],
                            id: 'balloon2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/balloon2.png', '0px', '0px']
                        },
                        {
                            rect: ['-114px', '-155px', '605px', '595px', 'auto', 'auto'],
                            id: 'spark1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-6'], [0, 0, 0], [1, 1, 1]],
                            align: 'center',
                            opacity: '0',
                            rect: ['18px', '157px', '218px', '169px', 'auto', 'auto'],
                            id: 'Text3',
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            text: 'This website aims to educate and provide knowledge',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '333px', '383px']
                        }
                    }
                },
                timeline: {
                    duration: 1332,
                    autoPlay: true,
                    data: [
                        [
                            "eid10660",
                            "top",
                            0,
                            183,
                            "linear",
                            "${balloon2}",
                            '312px',
                            '-59px'
                        ],
                        [
                            "eid10742",
                            "top",
                            1149,
                            183,
                            "linear",
                            "${balloon2}",
                            '-59px',
                            '312px'
                        ],
                        [
                            "eid10689",
                            "left",
                            128,
                            204,
                            "linear",
                            "${spark1}",
                            '52px',
                            '-114px'
                        ],
                        [
                            "eid10675",
                            "left",
                            128,
                            55,
                            "linear",
                            "${Text3}",
                            '18px',
                            '56px'
                        ],
                        [
                            "eid10741",
                            "left",
                            1149,
                            55,
                            "linear",
                            "${Text3}",
                            '56px',
                            '18px'
                        ],
                        [
                            "eid10666",
                            "opacity",
                            0,
                            128,
                            "linear",
                            "${balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10744",
                            "opacity",
                            1204,
                            128,
                            "linear",
                            "${balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10677",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10670",
                            "opacity",
                            128,
                            55,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10740",
                            "opacity",
                            1149,
                            55,
                            "linear",
                            "${Text3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10739",
                            "opacity",
                            1332,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10687",
                            "top",
                            128,
                            204,
                            "linear",
                            "${spark1}",
                            '88px',
                            '-155px'
                        ],
                        [
                            "eid10659",
                            "height",
                            0,
                            183,
                            "linear",
                            "${balloon2}",
                            '118px',
                            '502px'
                        ],
                        [
                            "eid10743",
                            "height",
                            1149,
                            183,
                            "linear",
                            "${balloon2}",
                            '502px',
                            '118px'
                        ],
                        [
                            "eid10661",
                            "left",
                            0,
                            183,
                            "linear",
                            "${balloon2}",
                            '-37px',
                            '-48px'
                        ],
                        [
                            "eid10745",
                            "left",
                            1149,
                            183,
                            "linear",
                            "${balloon2}",
                            '-48px',
                            '-37px'
                        ],
                        [
                            "eid10662",
                            "width",
                            0,
                            183,
                            "linear",
                            "${balloon2}",
                            '100px',
                            '428px'
                        ],
                        [
                            "eid10746",
                            "width",
                            1149,
                            183,
                            "linear",
                            "${balloon2}",
                            '428px',
                            '100px'
                        ],
                        [
                            "eid10697",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10693",
                            "opacity",
                            128,
                            66,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10696",
                            "opacity",
                            283,
                            49,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10686",
                            "height",
                            128,
                            204,
                            "linear",
                            "${spark1}",
                            '188px',
                            '595px'
                        ],
                        [
                            "eid10688",
                            "width",
                            128,
                            204,
                            "linear",
                            "${spark1}",
                            '191px',
                            '605px'
                        ],
                        [
                            "eid10676",
                            "top",
                            128,
                            55,
                            "linear",
                            "${Text3}",
                            '157px',
                            '95px'
                        ],
                        [
                            "eid10738",
                            "top",
                            1149,
                            55,
                            "linear",
                            "${Text3}",
                            '95px',
                            '157px'
                        ]
                    ]
                }
            },
            "notif2": {
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
                            id: 'balloon22',
                            opacity: '0',
                            rect: ['313px', '371px', '78px', '93px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/balloon2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'spark1',
                            opacity: '0',
                            rect: ['-119px', '-126px', '605px', '595px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-7'], [0, 0, 0], [1, 1, 1]],
                            id: 'Text4',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [29, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            rect: ['157px', '182px', '231px', '166px', 'auto', 'auto'],
                            text: 'such as on animal. people and places based on factual information.',
                            align: 'center'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '367px', '439px']
                        }
                    }
                },
                timeline: {
                    duration: 1643,
                    autoPlay: true,
                    data: [
                        [
                            "eid10717",
                            "opacity",
                            0,
                            169,
                            "linear",
                            "${balloon22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10753",
                            "opacity",
                            1474,
                            169,
                            "linear",
                            "${balloon22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10735",
                            "width",
                            169,
                            204,
                            "linear",
                            "${spark1}",
                            '191px',
                            '605px'
                        ],
                        [
                            "eid10710",
                            "height",
                            0,
                            279,
                            "linear",
                            "${balloon22}",
                            '93px',
                            '439px'
                        ],
                        [
                            "eid10752",
                            "height",
                            1363,
                            279,
                            "linear",
                            "${balloon22}",
                            '439px',
                            '93px'
                        ],
                        [
                            "eid10729",
                            "top",
                            169,
                            204,
                            "linear",
                            "${spark1}",
                            '79px',
                            '-126px'
                        ],
                        [
                            "eid10727",
                            "top",
                            169,
                            99,
                            "linear",
                            "${Text4}",
                            '182px',
                            '79px'
                        ],
                        [
                            "eid10747",
                            "top",
                            1375,
                            99,
                            "linear",
                            "${Text4}",
                            '79px',
                            '182px'
                        ],
                        [
                            "eid10730",
                            "height",
                            169,
                            204,
                            "linear",
                            "${spark1}",
                            '188px',
                            '595px'
                        ],
                        [
                            "eid10734",
                            "left",
                            169,
                            204,
                            "linear",
                            "${spark1}",
                            '95px',
                            '-119px'
                        ],
                        [
                            "eid10728",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10721",
                            "opacity",
                            169,
                            99,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10749",
                            "opacity",
                            1375,
                            99,
                            "linear",
                            "${Text4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10748",
                            "opacity",
                            1642,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10711",
                            "top",
                            0,
                            279,
                            "linear",
                            "${balloon22}",
                            '371px',
                            '0px'
                        ],
                        [
                            "eid10751",
                            "top",
                            1363,
                            279,
                            "linear",
                            "${balloon22}",
                            '0px',
                            '371px'
                        ],
                        [
                            "eid10726",
                            "left",
                            169,
                            99,
                            "linear",
                            "${Text4}",
                            '157px',
                            '68px'
                        ],
                        [
                            "eid10750",
                            "left",
                            1375,
                            99,
                            "linear",
                            "${Text4}",
                            '68px',
                            '157px'
                        ],
                        [
                            "eid10712",
                            "left",
                            0,
                            279,
                            "linear",
                            "${balloon22}",
                            '313px',
                            '0px'
                        ],
                        [
                            "eid10754",
                            "left",
                            1363,
                            279,
                            "linear",
                            "${balloon22}",
                            '0px',
                            '313px'
                        ],
                        [
                            "eid10731",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10732",
                            "opacity",
                            169,
                            66,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10733",
                            "opacity",
                            323,
                            49,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10713",
                            "width",
                            0,
                            279,
                            "linear",
                            "${balloon22}",
                            '78px',
                            '367px'
                        ],
                        [
                            "eid10755",
                            "width",
                            1363,
                            279,
                            "linear",
                            "${balloon22}",
                            '367px',
                            '78px'
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
                            opacity: '1',
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
                            type: 'image',
                            rect: ['284px', '332px', '196px', '63px', 'auto', 'auto'],
                            id: 'close-btn1',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['284px', '332px', '196px', '63px', 'auto', 'auto'],
                            id: 'showanswer',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/showanswer.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Try again!',
                            id: 'textfeedback',
                            opacity: '1',
                            align: 'center',
                            rect: ['-3px', '226px', '746px', '63px', 'auto', 'auto']
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
                            "eid10956",
                            "opacity",
                            250,
                            60,
                            "linear",
                            "${showanswer}",
                            '0.000000',
                            '1'
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
                            "eid4365",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${textfeedback}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4367",
                            "opacity",
                            250,
                            60,
                            "linear",
                            "${textfeedback}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8458",
                            "opacity",
                            350,
                            0,
                            "linear",
                            "${textfeedback}",
                            '1',
                            '1'
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("4_edgeActions.js");
})("EDGE-1646797");
