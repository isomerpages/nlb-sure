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
                            id: 'conf',
                            type: 'image',
                            rect: ['-61px', '-71px', '1132px', '655px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"conference%20room.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-39px', '-102px', '1088px', '686px', 'auto', 'auto'],
                            opacity: '0.66666646341463',
                            fill: ["rgba(0,0,0,0.67)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['93px', '-175px', '838px', '98px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Fact-check Game",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(184,217,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'clipboard2',
                            type: 'image',
                            rect: ['-46px', '584px', '1101px', '727px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"clipboard2.png",'0px','0px']
                        },
                        {
                            id: 'questions',
                            symbolName: 'questions',
                            display: 'block',
                            type: 'rect',
                            rect: ['-2', '133', '229', '138', 'auto', 'auto']
                        },
                        {
                            id: 'why',
                            symbolName: 'why',
                            display: 'none',
                            type: 'rect',
                            rect: ['213', '88', '131', '66', 'auto', 'auto']
                        },
                        {
                            id: 'who',
                            symbolName: 'who',
                            display: 'none',
                            type: 'rect',
                            rect: ['874', '103', '131', '66', 'auto', 'auto']
                        },
                        {
                            id: 'where',
                            symbolName: 'where',
                            display: 'none',
                            type: 'rect',
                            rect: ['345', '119', '131', '66', 'auto', 'auto']
                        },
                        {
                            id: 'when',
                            symbolName: 'when',
                            display: 'none',
                            type: 'rect',
                            rect: ['478px', '79', '131', '66', 'auto', 'auto']
                        },
                        {
                            id: 'what',
                            symbolName: 'what',
                            display: 'none',
                            type: 'rect',
                            rect: ['611', '103', '131', '66', 'auto', 'auto']
                        },
                        {
                            id: 'how',
                            symbolName: 'how',
                            display: 'none',
                            type: 'rect',
                            rect: ['744', '125', '131', '66', 'auto', 'auto']
                        },
                        {
                            id: 'answer',
                            symbolName: 'answer',
                            display: 'none',
                            type: 'rect',
                            rect: ['184px', '74px', '688', '424', 'auto', 'auto']
                        },
                        {
                            id: 'arm1',
                            symbolName: 'arm-w-rubber',
                            type: 'rect',
                            rect: ['276px', '322px', '374', '524', 'auto', 'auto'],
                            userClass: "arms",
                            transform: [[],['-18']]
                        },
                        {
                            id: 'arm2',
                            symbolName: 'arm-w-rubber',
                            type: 'rect',
                            rect: ['276px', '300px', '374', '524', 'auto', 'auto'],
                            userClass: "arms",
                            transform: [[],['15']]
                        },
                        {
                            id: 'arm3',
                            symbolName: 'arm-w-rubber',
                            type: 'rect',
                            rect: ['308px', '250px', '374', '524', 'auto', 'auto'],
                            userClass: "arms",
                            transform: [[],['39']]
                        },
                        {
                            id: 'next-btn',
                            type: 'image',
                            rect: ['756px', '477px', '152px', '49px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px'],
                            transform: [[],[],[],['0.84507','0.84507']]
                        },
                        {
                            id: 'instruction',
                            symbolName: 'instruction',
                            display: 'none',
                            type: 'rect',
                            rect: ['16px', '363px', '1008', '222', 'auto', 'auto']
                        },
                        {
                            id: 'instruction-btn2',
                            symbolName: 'instruction-btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['-34px', '-9px', '300', '104', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.78846','0.78846']]
                        },
                        {
                            id: 'whytrigger',
                            type: 'rect',
                            rect: ['213px', '84px', '126px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'wheretrigger',
                            type: 'rect',
                            rect: ['344px', '112px', '126px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'whentrigger',
                            type: 'rect',
                            rect: ['478px', '77px', '126px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'whattrigger',
                            type: 'rect',
                            rect: ['609px', '99px', '126px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'howtrigger',
                            type: 'rect',
                            rect: ['744px', '120px', '126px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'whotrigger',
                            type: 'rect',
                            rect: ['874px', '99px', '126px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
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
                    duration: 25037,
                    autoPlay: true,
                    labels: {
                        "answers": 24448
                    },
                    data: [
                        [
                            "eid16910",
                            "display",
                            0,
                            0,
                            "linear",
                            "${what}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16904",
                            "display",
                            16875,
                            0,
                            "linear",
                            "${what}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17578",
                            "display",
                            24448,
                            0,
                            "linear",
                            "${what}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13440",
                            "top",
                            0,
                            3594,
                            "linear",
                            "${conf}",
                            '0px',
                            '-71px'
                        ],
                        [
                            "eid16379",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16380",
                            "display",
                            3441,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17563",
                            "display",
                            15537,
                            0,
                            "linear",
                            "${instruction}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16403",
                            "top",
                            16182,
                            318,
                            "linear",
                            "${clipboard2}",
                            '584px',
                            '2px'
                        ],
                        [
                            "eid17573",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-resultCorrect}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16911",
                            "display",
                            0,
                            0,
                            "linear",
                            "${when}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16905",
                            "display",
                            16750,
                            0,
                            "linear",
                            "${when}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17579",
                            "display",
                            24448,
                            0,
                            "linear",
                            "${when}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16377",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction-btn2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16378",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${instruction-btn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17584",
                            "display",
                            24448,
                            0,
                            "linear",
                            "${instruction-btn2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16909",
                            "display",
                            0,
                            0,
                            "linear",
                            "${how}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16903",
                            "display",
                            16800,
                            0,
                            "linear",
                            "${how}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17577",
                            "display",
                            24448,
                            0,
                            "linear",
                            "${how}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16914",
                            "display",
                            0,
                            0,
                            "linear",
                            "${why}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16908",
                            "display",
                            17000,
                            0,
                            "linear",
                            "${why}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17582",
                            "display",
                            24448,
                            0,
                            "linear",
                            "${why}",
                            'block',
                            'none'
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
                            500,
                            141,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid6738",
                            "opacity",
                            2778,
                            139,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17583",
                            "display",
                            24448,
                            0,
                            "linear",
                            "${questions}",
                            'block',
                            'none'
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
                            500,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6750",
                            "opacity",
                            2719,
                            198,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16383",
                            "opacity",
                            16128,
                            190,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '0.66666646341463'
                        ],
                        [
                            "eid17558",
                            "opacity",
                            24500,
                            124,
                            "linear",
                            "${Rectangle}",
                            '0.666666',
                            '0'
                        ],
                        [
                            "eid16408",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${clipboard2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16407",
                            "opacity",
                            16182,
                            136,
                            "linear",
                            "${clipboard2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17572",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-resultWrong}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16400",
                            "height",
                            16182,
                            318,
                            "linear",
                            "${clipboard2}",
                            '727px',
                            '595px'
                        ],
                        [
                            "eid6741",
                            "top",
                            566,
                            184,
                            "linear",
                            "${Text}",
                            '-175px',
                            '239px'
                        ],
                        [
                            "eid6744",
                            "top",
                            2621,
                            98,
                            "linear",
                            "${Text}",
                            '239px',
                            '305px'
                        ],
                        [
                            "eid6746",
                            "top",
                            2719,
                            198,
                            "linear",
                            "${Text}",
                            '305px',
                            '-161px'
                        ],
                        [
                            "eid16913",
                            "display",
                            0,
                            0,
                            "linear",
                            "${who}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16907",
                            "display",
                            16917,
                            0,
                            "linear",
                            "${who}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17581",
                            "display",
                            24448,
                            0,
                            "linear",
                            "${who}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16912",
                            "display",
                            0,
                            0,
                            "linear",
                            "${where}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16906",
                            "display",
                            16950,
                            0,
                            "linear",
                            "${where}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17580",
                            "display",
                            24448,
                            0,
                            "linear",
                            "${where}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16370",
                            "height",
                            24825,
                            124,
                            "linear",
                            "${next-btn}",
                            '49px',
                            '109px'
                        ],
                        [
                            "eid16371",
                            "height",
                            24949,
                            88,
                            "linear",
                            "${next-btn}",
                            '109px',
                            '92px'
                        ],
                        [
                            "eid16375",
                            "width",
                            24825,
                            124,
                            "linear",
                            "${next-btn}",
                            '152px',
                            '338px'
                        ],
                        [
                            "eid16376",
                            "width",
                            24949,
                            88,
                            "linear",
                            "${next-btn}",
                            '338px',
                            '284px'
                        ],
                        [
                            "eid16402",
                            "left",
                            16182,
                            318,
                            "linear",
                            "${clipboard2}",
                            '-46px',
                            '58px'
                        ],
                        [
                            "eid16368",
                            "top",
                            24825,
                            124,
                            "linear",
                            "${next-btn}",
                            '500px',
                            '467px'
                        ],
                        [
                            "eid16369",
                            "top",
                            24949,
                            88,
                            "linear",
                            "${next-btn}",
                            '467px',
                            '477px'
                        ],
                        [
                            "eid16373",
                            "left",
                            24825,
                            124,
                            "linear",
                            "${next-btn}",
                            '793px',
                            '685px'
                        ],
                        [
                            "eid16374",
                            "left",
                            24949,
                            88,
                            "linear",
                            "${next-btn}",
                            '685px',
                            '756px'
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
                            "eid16372",
                            "opacity",
                            24825,
                            124,
                            "linear",
                            "${next-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17436",
                            "display",
                            0,
                            0,
                            "linear",
                            "${answer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17435",
                            "display",
                            24448,
                            0,
                            "linear",
                            "${answer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16401",
                            "width",
                            16182,
                            318,
                            "linear",
                            "${clipboard2}",
                            '1101px',
                            '901px'
                        ],
                            [ "eid16388", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction-btn2}', [] ] ],
                            [ "eid17052", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${when}', [] ] ],
                            [ "eid17574", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-resultWrong}', [] ] ],
                            [ "eid17053", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${where}', [] ] ],
                            [ "eid17055", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${why}', [] ] ],
                            [ "eid17570", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${arm3}', [] ] ],
                            [ "eid17569", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${arm2}', [] ] ],
                            [ "eid17054", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${who}', [] ] ],
                            [ "eid17575", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-resultCorrect}', [] ] ],
                            [ "eid17051", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${how}', [] ] ],
                            [ "eid17559", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${answer}', [] ] ],
                            [ "eid16389", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid17562", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${questions}', [] ] ],
                            [ "eid17571", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${arm1}', [] ] ],
                            [ "eid17050", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${what}', [] ] ],
                            [ "eid16390", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction-btn2}', [] ] ],
                            [ "eid16391", "trigger", 3441, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ],
                            [ "eid17056", "trigger", 16750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${when}', [] ] ],
                            [ "eid17057", "trigger", 16800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${how}', [] ] ],
                            [ "eid17058", "trigger", 16875.026821216, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${what}', [] ] ],
                            [ "eid17059", "trigger", 16917, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${who}', [] ] ],
                            [ "eid17060", "trigger", 16950.053642433, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${where}', [] ] ],
                            [ "eid17061", "trigger", 17000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${why}', [] ] ],
                            [ "eid17560", "trigger", 24448, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${answer}', [] ] ]
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
                            rect: ['30px', '9px', '240px', '39px', 'auto', 'auto'],
                            id: 'instruction-btn',
                            opacity: '0',
                            type: 'image',
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
                            '93px',
                            '-6px'
                        ],
                        [
                            "eid8888",
                            "left",
                            250,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '-6px',
                            '30px'
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
                            '13px',
                            '0px'
                        ],
                        [
                            "eid16387",
                            "top",
                            250,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '0px',
                            '9px'
                        ],
                        [
                            "eid8876",
                            "width",
                            0,
                            250,
                            "linear",
                            "${instruction-btn}",
                            '113px',
                            '301px'
                        ],
                        [
                            "eid8889",
                            "width",
                            250,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '301px',
                            '240px'
                        ],
                        [
                            "eid8874",
                            "height",
                            0,
                            250,
                            "linear",
                            "${instruction-btn}",
                            '39px',
                            '104px'
                        ],
                        [
                            "eid16386",
                            "height",
                            250,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '104px',
                            '83px'
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
                            type: 'image',
                            id: 'narrator-text-balloon',
                            opacity: '0',
                            rect: ['0px', '0px', '1008px', '222px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['39px', '23px', '920px', '132px', 'auto', 'auto'],
                            text: 'The questioning technique using 5Ws and 1H stands for What, Why, When, Who, Where and How.<br>Match the description on the left with the correct question.',
                            id: 'Text',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1008px', '222px']
                        }
                    }
                },
                timeline: {
                    duration: 3187,
                    autoPlay: true,
                    data: [
                        [
                            "eid8786",
                            "height",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '125px',
                            '186px'
                        ],
                        [
                            "eid8775",
                            "opacity",
                            0,
                            190,
                            "linear",
                            "${narrator-text-balloon}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8855",
                            "opacity",
                            3097,
                            90,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8773",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8806",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8856",
                            "opacity",
                            3097,
                            90,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8785",
                            "top",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '231px',
                            '0px'
                        ],
                        [
                            "eid8831",
                            "top",
                            3000,
                            187,
                            "linear",
                            "${narrator-text-balloon}",
                            '0px',
                            '222px'
                        ],
                        [
                            "eid8832",
                            "top",
                            3000,
                            187,
                            "linear",
                            "${Text}",
                            '23px',
                            '246px'
                        ],
                        [
                            "eid8787",
                            "width",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '533px',
                            '978px'
                        ],
                        [
                            "eid8784",
                            "left",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '253px',
                            '18px'
                        ]
                    ]
                }
            },
            "questions": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], ['-7'], ['1.00179', '0.89406']],
                            rect: ['9px', '5px', '212px', '154px', 'auto', 'auto'],
                            id: 'stickynote-stack6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote-stack6.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['-7'], ['1.00179', '0.89406']],
                            rect: ['9px', '3px', '212px', '154px', 'auto', 'auto'],
                            id: 'stickynote-stack5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote-stack5.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['-7'], ['1.00179', '0.89406']],
                            rect: ['9px', '0px', '212px', '154px', 'auto', 'auto'],
                            id: 'stickynote-stack4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote-stack4.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['-7'], ['1.00179', '0.89406']],
                            rect: ['9px', '-2px', '212px', '154px', 'auto', 'auto'],
                            id: 'stickynote-stack3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote-stack3.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['-7'], ['1.00179', '0.89406']],
                            rect: ['9px', '-4px', '212px', '154px', 'auto', 'auto'],
                            id: 'stickynote-stack2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote-stack2.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['-7'], ['1.00179', '0.89406']],
                            rect: ['280px', '-287px', '212px', '154px', 'auto', 'auto'],
                            id: 'stickynote-stack1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote-stack1.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['-10'], [1, 1, 1]],
                            align: 'center',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(184, 217, 255)', 'normal', 'break-word', ''],
                            type: 'text',
                            rect: ['298px', '-226px', '178px', '35px', 'auto', 'auto'],
                            text: 'Description:',
                            id: 'Text2'
                        },
                        {
                            transform: [[], [], ['-6'], [1, 1, 1]],
                            rect: ['26px', '0px', '178px', '122px', 'auto', 'auto'],
                            id: 'stickynote',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['25px', '199px', '229px', '169px', 'auto', 'auto'],
                            text: '1. <br>The person sharing the information ',
                            id: 'Text3',
                            opacity: '0.000000',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['25px', '199px', '229px', '169px', 'auto', 'auto'],
                            text: '2.<br>The information being shared',
                            id: 'Text3Copy',
                            opacity: '0.000000',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['26px', '199px', '229px', '169px', 'auto', 'auto'],
                            text: '3.<br>The reason <br>the information <br>is shared',
                            id: 'Text3Copy2',
                            opacity: '0.000000',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['26px', '188px', '229px', '202px', 'auto', 'auto'],
                            text: '4.<br>The time frame during which the information <br>is shared',
                            id: 'Text3Copy3',
                            opacity: '0.000000',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['26px', '188px', '229px', '202px', 'auto', 'auto'],
                            text: '5.<br>The place/platform the information is shared',
                            id: 'Text3Copy4',
                            opacity: '0.000000',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['26px', '197px', '229px', '178px', 'auto', 'auto'],
                            text: '6.<br>The manner the information is shared',
                            id: 'Text3Copy5',
                            opacity: '0.000000',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            id: 'txt-W',
                            opacity: '0',
                            rect: ['95px', '141px', '37px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-W.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-who',
                            opacity: '0',
                            rect: ['124px', '141px', '49px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-who.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-W2',
                            opacity: '0',
                            rect: ['89px', '138px', '43px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-W.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-what',
                            opacity: '0',
                            rect: ['122px', '138px', '75px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-what.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-W3',
                            opacity: '0',
                            rect: ['84px', '96px', '57px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-W.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-why',
                            opacity: '0',
                            rect: ['129px', '99px', '73px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-why.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-W4',
                            opacity: '0',
                            rect: ['71px', '135px', '54px', '66px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-W.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-when',
                            opacity: '0',
                            rect: ['113px', '137px', '95px', '66px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-when.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-W5',
                            opacity: '0',
                            rect: ['74px', '446px', '45px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-W.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-where',
                            opacity: '0',
                            rect: ['108px', '449px', '95px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-where.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-H',
                            opacity: '0',
                            rect: ['83px', '133px', '44px', '66px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-H.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-how',
                            opacity: '0',
                            rect: ['119px', '133px', '82px', '66px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-how.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '229px', '138px']
                        }
                    }
                },
                timeline: {
                    duration: 7985,
                    autoPlay: true,
                    labels: {
                        "q1": 557,
                        "q2": 1836,
                        "q3": 3100,
                        "q4": 4314,
                        "q5": 5550,
                        "q6": 6821
                    },
                    data: [
                        [
                            "eid16613",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-W2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16611",
                            "opacity",
                            2350,
                            57,
                            "linear",
                            "${txt-W2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16630",
                            "opacity",
                            2904,
                            96,
                            "linear",
                            "${txt-W2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16419",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${stickynote-stack3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16572",
                            "opacity",
                            1836,
                            0,
                            "linear",
                            "${stickynote-stack3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16643",
                            "opacity",
                            3100,
                            68,
                            "linear",
                            "${stickynote-stack3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16471",
                            "left",
                            575,
                            175,
                            "linear",
                            "${stickynote}",
                            '26px',
                            '6px'
                        ],
                        [
                            "eid16568",
                            "left",
                            1836,
                            175,
                            "linear",
                            "${stickynote}",
                            '26px',
                            '6px'
                        ],
                        [
                            "eid16638",
                            "left",
                            3100,
                            175,
                            "linear",
                            "${stickynote}",
                            '26px',
                            '6px'
                        ],
                        [
                            "eid16706",
                            "left",
                            4340,
                            175,
                            "linear",
                            "${stickynote}",
                            '26px',
                            '6px'
                        ],
                        [
                            "eid16777",
                            "left",
                            5579,
                            175,
                            "linear",
                            "${stickynote}",
                            '26px',
                            '6px'
                        ],
                        [
                            "eid16846",
                            "left",
                            6821,
                            175,
                            "linear",
                            "${stickynote}",
                            '26px',
                            '6px'
                        ],
                        [
                            "eid16874",
                            "height",
                            7500,
                            114,
                            "linear",
                            "${txt-H}",
                            '66px',
                            '117px'
                        ],
                        [
                            "eid16682",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-why}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16680",
                            "opacity",
                            3597,
                            64,
                            "linear",
                            "${txt-why}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16697",
                            "opacity",
                            4168,
                            96,
                            "linear",
                            "${txt-why}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16803",
                            "height",
                            6189,
                            110,
                            "linear",
                            "${txt-W5}",
                            '55px',
                            '102px'
                        ],
                        [
                            "eid16451",
                            "left",
                            0,
                            221,
                            "linear",
                            "${stickynote-stack1}",
                            '280px',
                            '9px'
                        ],
                        [
                            "eid16511",
                            "top",
                            1101,
                            101,
                            "linear",
                            "${txt-who}",
                            '139px',
                            '141px'
                        ],
                        [
                            "eid16536",
                            "top",
                            1500,
                            93,
                            "linear",
                            "${txt-who}",
                            '141px',
                            '109px'
                        ],
                        [
                            "eid16544",
                            "top",
                            1593,
                            146,
                            "linear",
                            "${txt-who}",
                            '109px',
                            '449px'
                        ],
                        [
                            "eid16576",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid16577",
                            "opacity",
                            1965,
                            46,
                            "linear",
                            "${Text3Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16578",
                            "opacity",
                            2904,
                            96,
                            "linear",
                            "${Text3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16817",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-where}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16815",
                            "opacity",
                            6189,
                            61,
                            "linear",
                            "${txt-where}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16832",
                            "opacity",
                            6647,
                            96,
                            "linear",
                            "${txt-where}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16428",
                            "opacity",
                            0,
                            111,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16849",
                            "opacity",
                            6821,
                            43,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16876",
                            "width",
                            7500,
                            114,
                            "linear",
                            "${txt-H}",
                            '44px',
                            '77px'
                        ],
                        [
                            "eid16742",
                            "top",
                            4817,
                            0,
                            "linear",
                            "${txt-when}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid16743",
                            "top",
                            4927,
                            0,
                            "linear",
                            "${txt-when}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid16758",
                            "top",
                            5265,
                            93,
                            "linear",
                            "${txt-when}",
                            '137px',
                            '112px'
                        ],
                        [
                            "eid16762",
                            "top",
                            5358,
                            146,
                            "linear",
                            "${txt-when}",
                            '112px',
                            '448px'
                        ],
                        [
                            "eid16602",
                            "width",
                            2350,
                            96,
                            "linear",
                            "${txt-what}",
                            '75px',
                            '146px'
                        ],
                        [
                            "eid16598",
                            "width",
                            2350,
                            96,
                            "linear",
                            "${txt-W2}",
                            '43px',
                            '83px'
                        ],
                        [
                            "eid16538",
                            "top",
                            1500,
                            93,
                            "linear",
                            "${Text3}",
                            '199px',
                            '167px'
                        ],
                        [
                            "eid16546",
                            "top",
                            1593,
                            146,
                            "linear",
                            "${Text3}",
                            '167px',
                            '507px'
                        ],
                        [
                            "eid16734",
                            "height",
                            4817,
                            110,
                            "linear",
                            "${txt-when}",
                            '66px',
                            '102px'
                        ],
                        [
                            "eid16681",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-W3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16679",
                            "opacity",
                            3597,
                            64,
                            "linear",
                            "${txt-W3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16698",
                            "opacity",
                            4168,
                            96,
                            "linear",
                            "${txt-W3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16483",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid16482",
                            "opacity",
                            704,
                            46,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16558",
                            "opacity",
                            1643,
                            96,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16872",
                            "top",
                            7500,
                            114,
                            "linear",
                            "${txt-how}",
                            '133px',
                            '126px'
                        ],
                        [
                            "eid16892",
                            "top",
                            7746,
                            93,
                            "linear",
                            "${txt-how}",
                            '126px',
                            '92px'
                        ],
                        [
                            "eid16896",
                            "top",
                            7839,
                            146,
                            "linear",
                            "${txt-how}",
                            '92px',
                            '453px'
                        ],
                        [
                            "eid16873",
                            "width",
                            7500,
                            114,
                            "linear",
                            "${txt-how}",
                            '82px',
                            '145px'
                        ],
                        [
                            "eid16871",
                            "height",
                            7500,
                            114,
                            "linear",
                            "${txt-how}",
                            '66px',
                            '117px'
                        ],
                        [
                            "eid16646",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid16647",
                            "opacity",
                            3229,
                            46,
                            "linear",
                            "${Text3Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16648",
                            "opacity",
                            4168,
                            96,
                            "linear",
                            "${Text3Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16595",
                            "height",
                            2350,
                            96,
                            "linear",
                            "${txt-W2}",
                            '53px',
                            '102px'
                        ],
                        [
                            "eid16449",
                            "left",
                            0,
                            221,
                            "linear",
                            "${Text2}",
                            '298px',
                            '27px'
                        ],
                        [
                            "eid16800",
                            "height",
                            6189,
                            110,
                            "linear",
                            "${txt-where}",
                            '55px',
                            '102px'
                        ],
                        [
                            "eid16781",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid16782",
                            "opacity",
                            5708,
                            46,
                            "linear",
                            "${Text3Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16783",
                            "opacity",
                            6647,
                            96,
                            "linear",
                            "${Text3Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16574",
                            "top",
                            2761,
                            93,
                            "linear",
                            "${Text3Copy}",
                            '199px',
                            '167px'
                        ],
                        [
                            "eid16575",
                            "top",
                            2854,
                            146,
                            "linear",
                            "${Text3Copy}",
                            '167px',
                            '507px'
                        ],
                        [
                            "eid16450",
                            "top",
                            0,
                            221,
                            "linear",
                            "${Text2}",
                            '-226px',
                            '53px'
                        ],
                        [
                            "eid16455",
                            "top",
                            221,
                            72,
                            "linear",
                            "${Text2}",
                            '53px',
                            '56px'
                        ],
                        [
                            "eid16457",
                            "top",
                            293,
                            61,
                            "linear",
                            "${Text2}",
                            '56px',
                            '53px'
                        ],
                        [
                            "eid16715",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid16716",
                            "opacity",
                            4469,
                            46,
                            "linear",
                            "${Text3Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16717",
                            "opacity",
                            5408,
                            96,
                            "linear",
                            "${Text3Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16452",
                            "top",
                            0,
                            221,
                            "linear",
                            "${stickynote-stack1}",
                            '-287px',
                            '-8px'
                        ],
                        [
                            "eid16456",
                            "top",
                            221,
                            72,
                            "linear",
                            "${stickynote-stack1}",
                            '-8px',
                            '-5px'
                        ],
                        [
                            "eid16458",
                            "top",
                            293,
                            61,
                            "linear",
                            "${stickynote-stack1}",
                            '-5px',
                            '-8px'
                        ],
                        [
                            "eid16473",
                            "skewX",
                            575,
                            175,
                            "linear",
                            "${stickynote}",
                            '-6.06deg',
                            '0deg'
                        ],
                        [
                            "eid16564",
                            "skewX",
                            1836,
                            175,
                            "linear",
                            "${stickynote}",
                            '-6.06deg',
                            '0deg'
                        ],
                        [
                            "eid16634",
                            "skewX",
                            3100,
                            175,
                            "linear",
                            "${stickynote}",
                            '-6.06deg',
                            '0deg'
                        ],
                        [
                            "eid16702",
                            "skewX",
                            4340,
                            175,
                            "linear",
                            "${stickynote}",
                            '-6.06deg',
                            '0deg'
                        ],
                        [
                            "eid16773",
                            "skewX",
                            5579,
                            175,
                            "linear",
                            "${stickynote}",
                            '-6.06deg',
                            '0deg'
                        ],
                        [
                            "eid16842",
                            "skewX",
                            6821,
                            175,
                            "linear",
                            "${stickynote}",
                            '-6.06deg',
                            '0deg'
                        ],
                        [
                            "eid16516",
                            "top",
                            1101,
                            101,
                            "linear",
                            "${txt-W}",
                            '138px',
                            '141px'
                        ],
                        [
                            "eid16535",
                            "top",
                            1500,
                            93,
                            "linear",
                            "${txt-W}",
                            '141px',
                            '109px'
                        ],
                        [
                            "eid16543",
                            "top",
                            1593,
                            146,
                            "linear",
                            "${txt-W}",
                            '109px',
                            '449px'
                        ],
                        [
                            "eid16852",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid16853",
                            "opacity",
                            6950,
                            46,
                            "linear",
                            "${Text3Copy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16854",
                            "opacity",
                            7889,
                            96,
                            "linear",
                            "${Text3Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16507",
                            "width",
                            1101,
                            101,
                            "linear",
                            "${txt-who}",
                            '49px',
                            '109px'
                        ],
                        [
                            "eid16596",
                            "top",
                            2350,
                            96,
                            "linear",
                            "${txt-W2}",
                            '138px',
                            '141px'
                        ],
                        [
                            "eid16620",
                            "top",
                            2761,
                            93,
                            "linear",
                            "${txt-W2}",
                            '141px',
                            '108px'
                        ],
                        [
                            "eid16624",
                            "top",
                            2854,
                            146,
                            "linear",
                            "${txt-W2}",
                            '108px',
                            '439px'
                        ],
                        [
                            "eid16875",
                            "top",
                            7500,
                            114,
                            "linear",
                            "${txt-H}",
                            '133px',
                            '122px'
                        ],
                        [
                            "eid16891",
                            "top",
                            7746,
                            93,
                            "linear",
                            "${txt-H}",
                            '122px',
                            '88px'
                        ],
                        [
                            "eid16895",
                            "top",
                            7839,
                            146,
                            "linear",
                            "${txt-H}",
                            '88px',
                            '449px'
                        ],
                        [
                            "eid16670",
                            "width",
                            3597,
                            107,
                            "linear",
                            "${txt-W3}",
                            '57px',
                            '95px'
                        ],
                        [
                            "eid16421",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${stickynote-stack2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16486",
                            "opacity",
                            575,
                            0,
                            "linear",
                            "${stickynote-stack2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16573",
                            "opacity",
                            1836,
                            68,
                            "linear",
                            "${stickynote-stack2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16738",
                            "left",
                            4817,
                            110,
                            "linear",
                            "${txt-when}",
                            '113px',
                            '101px'
                        ],
                        [
                            "eid16752",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-W4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16750",
                            "opacity",
                            4817,
                            71,
                            "linear",
                            "${txt-W4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16769",
                            "opacity",
                            5408,
                            96,
                            "linear",
                            "${txt-W4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16510",
                            "left",
                            1101,
                            101,
                            "linear",
                            "${txt-who}",
                            '124px',
                            '122px'
                        ],
                        [
                            "eid16666",
                            "top",
                            3597,
                            107,
                            "linear",
                            "${txt-why}",
                            '145px',
                            '129px'
                        ],
                        [
                            "eid16687",
                            "top",
                            4025,
                            93,
                            "linear",
                            "${txt-why}",
                            '129px',
                            '99px'
                        ],
                        [
                            "eid16691",
                            "top",
                            4118,
                            146,
                            "linear",
                            "${txt-why}",
                            '99px',
                            '443px'
                        ],
                        [
                            "eid16886",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-how}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16884",
                            "opacity",
                            7500,
                            72,
                            "linear",
                            "${txt-how}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16902",
                            "opacity",
                            7889,
                            96,
                            "linear",
                            "${txt-how}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16512",
                            "left",
                            1101,
                            101,
                            "linear",
                            "${txt-W}",
                            '95px',
                            '60px'
                        ],
                        [
                            "eid16801",
                            "top",
                            6189,
                            110,
                            "linear",
                            "${txt-where}",
                            '142px',
                            '137px'
                        ],
                        [
                            "eid16822",
                            "top",
                            6504,
                            93,
                            "linear",
                            "${txt-where}",
                            '137px',
                            '112px'
                        ],
                        [
                            "eid16826",
                            "top",
                            6597,
                            146,
                            "linear",
                            "${txt-where}",
                            '112px',
                            '449px'
                        ],
                        [
                            "eid16806",
                            "left",
                            6189,
                            110,
                            "linear",
                            "${txt-where}",
                            '108px',
                            '84px'
                        ],
                        [
                            "eid16668",
                            "height",
                            3597,
                            107,
                            "linear",
                            "${txt-W3}",
                            '70px',
                            '117px'
                        ],
                        [
                            "eid16478",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${stickynote}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16477",
                            "opacity",
                            575,
                            43,
                            "linear",
                            "${stickynote}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16557",
                            "opacity",
                            1643,
                            96,
                            "linear",
                            "${stickynote}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16566",
                            "opacity",
                            1836,
                            43,
                            "linear",
                            "${stickynote}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16567",
                            "opacity",
                            2904,
                            96,
                            "linear",
                            "${stickynote}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16636",
                            "opacity",
                            3100,
                            43,
                            "linear",
                            "${stickynote}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16637",
                            "opacity",
                            4168,
                            96,
                            "linear",
                            "${stickynote}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16704",
                            "opacity",
                            4340,
                            43,
                            "linear",
                            "${stickynote}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16705",
                            "opacity",
                            5408,
                            96,
                            "linear",
                            "${stickynote}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16775",
                            "opacity",
                            5579,
                            43,
                            "linear",
                            "${stickynote}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16776",
                            "opacity",
                            6647,
                            96,
                            "linear",
                            "${stickynote}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16844",
                            "opacity",
                            6821,
                            43,
                            "linear",
                            "${stickynote}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16845",
                            "opacity",
                            7889,
                            96,
                            "linear",
                            "${stickynote}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16597",
                            "left",
                            2350,
                            96,
                            "linear",
                            "${txt-W2}",
                            '89px',
                            '39px'
                        ],
                        [
                            "eid16423",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${stickynote-stack6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16837",
                            "opacity",
                            5579,
                            0,
                            "linear",
                            "${stickynote-stack6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16848",
                            "opacity",
                            6821,
                            43,
                            "linear",
                            "${stickynote-stack6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16740",
                            "top",
                            4817,
                            110,
                            "linear",
                            "${txt-W4}",
                            '135px',
                            '132px'
                        ],
                        [
                            "eid16759",
                            "top",
                            5265,
                            93,
                            "linear",
                            "${txt-W4}",
                            '132px',
                            '107px'
                        ],
                        [
                            "eid16763",
                            "top",
                            5358,
                            146,
                            "linear",
                            "${txt-W4}",
                            '107px',
                            '443px'
                        ],
                        [
                            "eid16420",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${stickynote-stack4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16642",
                            "opacity",
                            3100,
                            0,
                            "linear",
                            "${stickynote-stack4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16712",
                            "opacity",
                            4340,
                            68,
                            "linear",
                            "${stickynote-stack4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16422",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${stickynote-stack5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16710",
                            "opacity",
                            4340,
                            0,
                            "linear",
                            "${stickynote-stack5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16838",
                            "opacity",
                            5579,
                            68,
                            "linear",
                            "${stickynote-stack5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16753",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-when}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16751",
                            "opacity",
                            4817,
                            71,
                            "linear",
                            "${txt-when}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16768",
                            "opacity",
                            5408,
                            96,
                            "linear",
                            "${txt-when}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16850",
                            "top",
                            7746,
                            93,
                            "linear",
                            "${Text3Copy5}",
                            '197px',
                            '167px'
                        ],
                        [
                            "eid16851",
                            "top",
                            7839,
                            146,
                            "linear",
                            "${Text3Copy5}",
                            '167px',
                            '507px'
                        ],
                        [
                            "eid16804",
                            "top",
                            6189,
                            110,
                            "linear",
                            "${txt-W5}",
                            '142px',
                            '134px'
                        ],
                        [
                            "eid16823",
                            "top",
                            6504,
                            93,
                            "linear",
                            "${txt-W5}",
                            '134px',
                            '109px'
                        ],
                        [
                            "eid16827",
                            "top",
                            6597,
                            146,
                            "linear",
                            "${txt-W5}",
                            '109px',
                            '446px'
                        ],
                        [
                            "eid16671",
                            "left",
                            3597,
                            107,
                            "linear",
                            "${txt-why}",
                            '129px',
                            '126px'
                        ],
                        [
                            "eid16805",
                            "width",
                            6189,
                            110,
                            "linear",
                            "${txt-W5}",
                            '45px',
                            '82px'
                        ],
                        [
                            "eid16665",
                            "height",
                            3597,
                            107,
                            "linear",
                            "${txt-why}",
                            '70px',
                            '117px'
                        ],
                        [
                            "eid16878",
                            "left",
                            7500,
                            114,
                            "linear",
                            "${txt-how}",
                            '119px',
                            '110px'
                        ],
                        [
                            "eid16600",
                            "top",
                            2350,
                            96,
                            "linear",
                            "${txt-what}",
                            '138px',
                            '142px'
                        ],
                        [
                            "eid16619",
                            "top",
                            2761,
                            93,
                            "linear",
                            "${txt-what}",
                            '142px',
                            '109px'
                        ],
                        [
                            "eid16623",
                            "top",
                            2854,
                            146,
                            "linear",
                            "${txt-what}",
                            '109px',
                            '440px'
                        ],
                        [
                            "eid16644",
                            "top",
                            4025,
                            93,
                            "linear",
                            "${Text3Copy2}",
                            '199px',
                            '167px'
                        ],
                        [
                            "eid16645",
                            "top",
                            4118,
                            146,
                            "linear",
                            "${Text3Copy2}",
                            '167px',
                            '507px'
                        ],
                        [
                            "eid16506",
                            "height",
                            1101,
                            101,
                            "linear",
                            "${txt-who}",
                            '46px',
                            '102px'
                        ],
                        [
                            "eid16739",
                            "left",
                            4817,
                            110,
                            "linear",
                            "${txt-W4}",
                            '71px',
                            '38px'
                        ],
                        [
                            "eid16885",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-H}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16883",
                            "opacity",
                            7500,
                            72,
                            "linear",
                            "${txt-H}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16901",
                            "opacity",
                            7889,
                            96,
                            "linear",
                            "${txt-H}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16472",
                            "top",
                            575,
                            175,
                            "linear",
                            "${stickynote}",
                            '0px',
                            '168px'
                        ],
                        [
                            "eid16537",
                            "top",
                            1500,
                            93,
                            "linear",
                            "${stickynote}",
                            '168px',
                            '136px'
                        ],
                        [
                            "eid16545",
                            "top",
                            1593,
                            146,
                            "linear",
                            "${stickynote}",
                            '136px',
                            '476px'
                        ],
                        [
                            "eid16561",
                            "top",
                            1836,
                            175,
                            "linear",
                            "${stickynote}",
                            '0px',
                            '168px'
                        ],
                        [
                            "eid16562",
                            "top",
                            2761,
                            93,
                            "linear",
                            "${stickynote}",
                            '168px',
                            '136px'
                        ],
                        [
                            "eid16563",
                            "top",
                            2854,
                            146,
                            "linear",
                            "${stickynote}",
                            '136px',
                            '476px'
                        ],
                        [
                            "eid16631",
                            "top",
                            3100,
                            175,
                            "linear",
                            "${stickynote}",
                            '0px',
                            '168px'
                        ],
                        [
                            "eid16632",
                            "top",
                            4025,
                            93,
                            "linear",
                            "${stickynote}",
                            '168px',
                            '136px'
                        ],
                        [
                            "eid16633",
                            "top",
                            4118,
                            146,
                            "linear",
                            "${stickynote}",
                            '136px',
                            '476px'
                        ],
                        [
                            "eid16699",
                            "top",
                            4340,
                            175,
                            "linear",
                            "${stickynote}",
                            '0px',
                            '168px'
                        ],
                        [
                            "eid16700",
                            "top",
                            5265,
                            93,
                            "linear",
                            "${stickynote}",
                            '168px',
                            '136px'
                        ],
                        [
                            "eid16701",
                            "top",
                            5358,
                            146,
                            "linear",
                            "${stickynote}",
                            '136px',
                            '476px'
                        ],
                        [
                            "eid16770",
                            "top",
                            5579,
                            175,
                            "linear",
                            "${stickynote}",
                            '0px',
                            '168px'
                        ],
                        [
                            "eid16771",
                            "top",
                            6504,
                            93,
                            "linear",
                            "${stickynote}",
                            '168px',
                            '136px'
                        ],
                        [
                            "eid16772",
                            "top",
                            6597,
                            146,
                            "linear",
                            "${stickynote}",
                            '136px',
                            '476px'
                        ],
                        [
                            "eid16839",
                            "top",
                            6821,
                            175,
                            "linear",
                            "${stickynote}",
                            '0px',
                            '168px'
                        ],
                        [
                            "eid16840",
                            "top",
                            7746,
                            93,
                            "linear",
                            "${stickynote}",
                            '168px',
                            '136px'
                        ],
                        [
                            "eid16841",
                            "top",
                            7839,
                            146,
                            "linear",
                            "${stickynote}",
                            '136px',
                            '476px'
                        ],
                        [
                            "eid16672",
                            "left",
                            3597,
                            107,
                            "linear",
                            "${txt-W3}",
                            '84px',
                            '54px'
                        ],
                        [
                            "eid16667",
                            "width",
                            3597,
                            107,
                            "linear",
                            "${txt-why}",
                            '73px',
                            '121px'
                        ],
                        [
                            "eid16807",
                            "left",
                            6189,
                            110,
                            "linear",
                            "${txt-W5}",
                            '74px',
                            '23px'
                        ],
                        [
                            "eid16469",
                            "height",
                            575,
                            175,
                            "linear",
                            "${stickynote}",
                            '122px',
                            '254px'
                        ],
                        [
                            "eid16565",
                            "height",
                            1836,
                            175,
                            "linear",
                            "${stickynote}",
                            '122px',
                            '254px'
                        ],
                        [
                            "eid16635",
                            "height",
                            3100,
                            175,
                            "linear",
                            "${stickynote}",
                            '122px',
                            '254px'
                        ],
                        [
                            "eid16703",
                            "height",
                            4340,
                            175,
                            "linear",
                            "${stickynote}",
                            '122px',
                            '254px'
                        ],
                        [
                            "eid16774",
                            "height",
                            5579,
                            175,
                            "linear",
                            "${stickynote}",
                            '122px',
                            '254px'
                        ],
                        [
                            "eid16843",
                            "height",
                            6821,
                            175,
                            "linear",
                            "${stickynote}",
                            '122px',
                            '254px'
                        ],
                        [
                            "eid16779",
                            "top",
                            6504,
                            93,
                            "linear",
                            "${Text3Copy4}",
                            '188px',
                            '167px'
                        ],
                        [
                            "eid16780",
                            "top",
                            6597,
                            146,
                            "linear",
                            "${Text3Copy4}",
                            '167px',
                            '507px'
                        ],
                        [
                            "eid16669",
                            "top",
                            3597,
                            107,
                            "linear",
                            "${txt-W3}",
                            '145px',
                            '126px'
                        ],
                        [
                            "eid16688",
                            "top",
                            4025,
                            93,
                            "linear",
                            "${txt-W3}",
                            '126px',
                            '96px'
                        ],
                        [
                            "eid16692",
                            "top",
                            4118,
                            146,
                            "linear",
                            "${txt-W3}",
                            '96px',
                            '440px'
                        ],
                        [
                            "eid16525",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-W}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16523",
                            "opacity",
                            1101,
                            65,
                            "linear",
                            "${txt-W}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16555",
                            "opacity",
                            1643,
                            96,
                            "linear",
                            "${txt-W}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16509",
                            "width",
                            1101,
                            101,
                            "linear",
                            "${txt-W}",
                            '37px',
                            '83px'
                        ],
                        [
                            "eid16735",
                            "width",
                            4817,
                            110,
                            "linear",
                            "${txt-when}",
                            '95px',
                            '146px'
                        ],
                        [
                            "eid16427",
                            "opacity",
                            0,
                            111,
                            "linear",
                            "${stickynote-stack1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16489",
                            "opacity",
                            575,
                            68,
                            "linear",
                            "${stickynote-stack1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16737",
                            "width",
                            4817,
                            110,
                            "linear",
                            "${txt-W4}",
                            '54px',
                            '83px'
                        ],
                        [
                            "eid16508",
                            "height",
                            1101,
                            101,
                            "linear",
                            "${txt-W}",
                            '46px',
                            '102px'
                        ],
                        [
                            "eid16816",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-W5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16814",
                            "opacity",
                            6189,
                            61,
                            "linear",
                            "${txt-W5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16833",
                            "opacity",
                            6647,
                            96,
                            "linear",
                            "${txt-W5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16470",
                            "width",
                            575,
                            175,
                            "linear",
                            "${stickynote}",
                            '178px',
                            '267px'
                        ],
                        [
                            "eid16569",
                            "width",
                            1836,
                            175,
                            "linear",
                            "${stickynote}",
                            '178px',
                            '267px'
                        ],
                        [
                            "eid16639",
                            "width",
                            3100,
                            175,
                            "linear",
                            "${stickynote}",
                            '178px',
                            '267px'
                        ],
                        [
                            "eid16707",
                            "width",
                            4340,
                            175,
                            "linear",
                            "${stickynote}",
                            '178px',
                            '267px'
                        ],
                        [
                            "eid16778",
                            "width",
                            5579,
                            175,
                            "linear",
                            "${stickynote}",
                            '178px',
                            '267px'
                        ],
                        [
                            "eid16847",
                            "width",
                            6821,
                            175,
                            "linear",
                            "${stickynote}",
                            '178px',
                            '267px'
                        ],
                        [
                            "eid16526",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-who}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16524",
                            "opacity",
                            1101,
                            65,
                            "linear",
                            "${txt-who}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16556",
                            "opacity",
                            1643,
                            96,
                            "linear",
                            "${txt-who}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16601",
                            "left",
                            2350,
                            96,
                            "linear",
                            "${txt-what}",
                            '122px',
                            '101px'
                        ],
                        [
                            "eid16713",
                            "top",
                            5265,
                            93,
                            "linear",
                            "${Text3Copy3}",
                            '188px',
                            '167px'
                        ],
                        [
                            "eid16714",
                            "top",
                            5358,
                            146,
                            "linear",
                            "${Text3Copy3}",
                            '167px',
                            '507px'
                        ],
                        [
                            "eid16614",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-what}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16612",
                            "opacity",
                            2350,
                            57,
                            "linear",
                            "${txt-what}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16629",
                            "opacity",
                            2904,
                            96,
                            "linear",
                            "${txt-what}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16736",
                            "height",
                            4817,
                            110,
                            "linear",
                            "${txt-W4}",
                            '66px',
                            '102px'
                        ],
                        [
                            "eid16599",
                            "height",
                            2350,
                            96,
                            "linear",
                            "${txt-what}",
                            '53px',
                            '102px'
                        ],
                        [
                            "eid16877",
                            "left",
                            7500,
                            114,
                            "linear",
                            "${txt-H}",
                            '83px',
                            '46px'
                        ],
                        [
                            "eid16802",
                            "width",
                            6189,
                            110,
                            "linear",
                            "${txt-where}",
                            '95px',
                            '175px'
                        ]
                    ]
                }
            },
            "how": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['10'], [0, 0, 0], [1, 1, 1]],
                            rect: ['0px', '481px', '131px', '66px', 'auto', 'auto'],
                            id: 'block-how',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block-how.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['10'], [0, 0, 0], [1, 1, 1]],
                            rect: ['0px', '481px', '131px', '66px', 'auto', 'auto'],
                            id: 'block-how-hit',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block-how-hit.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rubber-band',
                            opacity: '0',
                            rect: ['324px', '263px', '76px', '82px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rubber-band.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 2231,
                    autoPlay: true,
                    labels: {
                        "hit": 698
                    },
                    data: [
                        [
                            "eid16932",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-how-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid16946",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-how-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid16954",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-how-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid16956",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-how-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17141",
                            "top",
                            804,
                            109,
                            "linear",
                            "${block-how-hit}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17143",
                            "top",
                            921,
                            257,
                            "linear",
                            "${block-how-hit}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17169",
                            "top",
                            1312,
                            189,
                            "linear",
                            "${block-how-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17170",
                            "top",
                            1501,
                            122,
                            "linear",
                            "${block-how-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17171",
                            "top",
                            1623,
                            100,
                            "linear",
                            "${block-how-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17172",
                            "top",
                            1723,
                            57,
                            "linear",
                            "${block-how-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17424",
                            "top",
                            2032,
                            65,
                            "linear",
                            "${block-how-hit}",
                            '0px',
                            '126px'
                        ],
                        [
                            "eid17428",
                            "top",
                            2097,
                            134,
                            "linear",
                            "${block-how-hit}",
                            '126px',
                            '-210px'
                        ],
                        [
                            "eid17125",
                            "left",
                            698,
                            87,
                            "linear",
                            "${rubber-band}",
                            '-10px',
                            '38px'
                        ],
                        [
                            "eid17129",
                            "left",
                            785,
                            139,
                            "linear",
                            "${rubber-band}",
                            '38px',
                            '324px'
                        ],
                        [
                            "eid16939",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-how}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid16943",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-how}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid16951",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-how}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid16959",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-how}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17156",
                            "rotateZ",
                            804,
                            93,
                            "linear",
                            "${block-how}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17160",
                            "rotateZ",
                            897,
                            281,
                            "linear",
                            "${block-how}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17183",
                            "rotateZ",
                            1312,
                            189,
                            "linear",
                            "${block-how}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17184",
                            "rotateZ",
                            1501,
                            122,
                            "linear",
                            "${block-how}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17185",
                            "rotateZ",
                            1623,
                            100,
                            "linear",
                            "${block-how}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17186",
                            "rotateZ",
                            1723,
                            57,
                            "linear",
                            "${block-how}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid16938",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-how-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid16942",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-how-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid16950",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-how-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid16957",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-how-hit}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17155",
                            "rotateZ",
                            804,
                            93,
                            "linear",
                            "${block-how-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17159",
                            "rotateZ",
                            897,
                            281,
                            "linear",
                            "${block-how-hit}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17174",
                            "rotateZ",
                            1312,
                            189,
                            "linear",
                            "${block-how-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17175",
                            "rotateZ",
                            1501,
                            122,
                            "linear",
                            "${block-how-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17176",
                            "rotateZ",
                            1623,
                            100,
                            "linear",
                            "${block-how-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17177",
                            "rotateZ",
                            1723,
                            57,
                            "linear",
                            "${block-how-hit}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid16927",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${block-how}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17136",
                            "opacity",
                            852,
                            0,
                            "linear",
                            "${block-how}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17182",
                            "opacity",
                            1312,
                            107,
                            "linear",
                            "${block-how}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17434",
                            "opacity",
                            2159,
                            72,
                            "linear",
                            "${block-how}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17117",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rubber-band}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17120",
                            "opacity",
                            698,
                            47,
                            "linear",
                            "${rubber-band}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17165",
                            "opacity",
                            888,
                            37,
                            "linear",
                            "${rubber-band}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17126",
                            "top",
                            698,
                            87,
                            "linear",
                            "${rubber-band}",
                            '112px',
                            '13px'
                        ],
                        [
                            "eid17130",
                            "top",
                            785,
                            139,
                            "linear",
                            "${rubber-band}",
                            '13px',
                            '263px'
                        ],
                        [
                            "eid16933",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-how}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid16947",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-how}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid16955",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-how}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid16958",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-how}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17142",
                            "top",
                            804,
                            109,
                            "linear",
                            "${block-how}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17144",
                            "top",
                            921,
                            257,
                            "linear",
                            "${block-how}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17178",
                            "top",
                            1312,
                            189,
                            "linear",
                            "${block-how}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17179",
                            "top",
                            1501,
                            122,
                            "linear",
                            "${block-how}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17180",
                            "top",
                            1623,
                            100,
                            "linear",
                            "${block-how}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17181",
                            "top",
                            1723,
                            57,
                            "linear",
                            "${block-how}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17425",
                            "top",
                            2032,
                            65,
                            "linear",
                            "${block-how}",
                            '0px',
                            '126px'
                        ],
                        [
                            "eid17429",
                            "top",
                            2097,
                            134,
                            "linear",
                            "${block-how}",
                            '126px',
                            '-210px'
                        ],
                        [
                            "eid16922",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${block-how-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17133",
                            "opacity",
                            804,
                            48,
                            "linear",
                            "${block-how-hit}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17168",
                            "opacity",
                            1112,
                            66,
                            "linear",
                            "${block-how-hit}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17173",
                            "opacity",
                            1312,
                            0,
                            "linear",
                            "${block-how-hit}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "what": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-188px', '131px', '66px', 'auto', 'auto'],
                            id: 'block-what',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block-what.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-188px', '131px', '66px', 'auto', 'auto'],
                            id: 'block-what-hit',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block-what-hit.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rubber-bandCopy',
                            opacity: '0',
                            rect: ['262px', '483px', '76px', '82px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rubber-band.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 2175,
                    autoPlay: true,
                    labels: {
                        "hit": 698
                    },
                    data: [
                        [
                            "eid16964",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${block-what-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17200",
                            "opacity",
                            807,
                            48,
                            "linear",
                            "${block-what-hit}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17201",
                            "opacity",
                            1115,
                            66,
                            "linear",
                            "${block-what-hit}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17202",
                            "opacity",
                            1315,
                            0,
                            "linear",
                            "${block-what-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17189",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rubber-bandCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17190",
                            "opacity",
                            698,
                            47,
                            "linear",
                            "${rubber-bandCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17191",
                            "opacity",
                            963,
                            37,
                            "linear",
                            "${rubber-bandCopy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17187",
                            "top",
                            698,
                            87,
                            "linear",
                            "${rubber-bandCopy}",
                            '112px',
                            '13px'
                        ],
                        [
                            "eid17188",
                            "top",
                            785,
                            215,
                            "linear",
                            "${rubber-bandCopy}",
                            '13px',
                            '483px'
                        ],
                        [
                            "eid16973",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${block-what}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17215",
                            "opacity",
                            855,
                            0,
                            "linear",
                            "${block-what}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17216",
                            "opacity",
                            1315,
                            107,
                            "linear",
                            "${block-what}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17417",
                            "opacity",
                            2119,
                            56,
                            "linear",
                            "${block-what}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17192",
                            "left",
                            698,
                            87,
                            "linear",
                            "${rubber-bandCopy}",
                            '-10px',
                            '38px'
                        ],
                        [
                            "eid17193",
                            "left",
                            785,
                            215,
                            "linear",
                            "${rubber-bandCopy}",
                            '38px',
                            '262px'
                        ],
                        [
                            "eid16969",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-what}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid16970",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-what}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid16971",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-what}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid16972",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-what}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17209",
                            "top",
                            807,
                            109,
                            "linear",
                            "${block-what}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17210",
                            "top",
                            924,
                            257,
                            "linear",
                            "${block-what}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17211",
                            "top",
                            1315,
                            189,
                            "linear",
                            "${block-what}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17212",
                            "top",
                            1504,
                            122,
                            "linear",
                            "${block-what}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17213",
                            "top",
                            1626,
                            100,
                            "linear",
                            "${block-what}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17214",
                            "top",
                            1726,
                            57,
                            "linear",
                            "${block-what}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17419",
                            "top",
                            2006,
                            59,
                            "linear",
                            "${block-what}",
                            '0px',
                            '88px'
                        ],
                        [
                            "eid17416",
                            "top",
                            2065,
                            110,
                            "linear",
                            "${block-what}",
                            '88px',
                            '-188px'
                        ],
                        [
                            "eid16960",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-what-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid16961",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-what-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid16962",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-what-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid16963",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-what-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17194",
                            "top",
                            807,
                            109,
                            "linear",
                            "${block-what-hit}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17195",
                            "top",
                            924,
                            257,
                            "linear",
                            "${block-what-hit}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17196",
                            "top",
                            1315,
                            189,
                            "linear",
                            "${block-what-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17197",
                            "top",
                            1504,
                            122,
                            "linear",
                            "${block-what-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17198",
                            "top",
                            1626,
                            100,
                            "linear",
                            "${block-what-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17199",
                            "top",
                            1726,
                            57,
                            "linear",
                            "${block-what-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17418",
                            "top",
                            2006,
                            59,
                            "linear",
                            "${block-what-hit}",
                            '0px',
                            '88px'
                        ],
                        [
                            "eid17414",
                            "top",
                            2065,
                            110,
                            "linear",
                            "${block-what-hit}",
                            '88px',
                            '-188px'
                        ],
                        [
                            "eid16974",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-what}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid16975",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-what}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid16976",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-what}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid16977",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-what}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17217",
                            "rotateZ",
                            807,
                            93,
                            "linear",
                            "${block-what}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17218",
                            "rotateZ",
                            900,
                            281,
                            "linear",
                            "${block-what}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17219",
                            "rotateZ",
                            1315,
                            189,
                            "linear",
                            "${block-what}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17220",
                            "rotateZ",
                            1504,
                            122,
                            "linear",
                            "${block-what}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17221",
                            "rotateZ",
                            1626,
                            100,
                            "linear",
                            "${block-what}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17222",
                            "rotateZ",
                            1726,
                            57,
                            "linear",
                            "${block-what}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid16965",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-what-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid16966",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-what-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid16967",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-what-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid16968",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-what-hit}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17203",
                            "rotateZ",
                            807,
                            93,
                            "linear",
                            "${block-what-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17204",
                            "rotateZ",
                            900,
                            281,
                            "linear",
                            "${block-what-hit}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17205",
                            "rotateZ",
                            1315,
                            189,
                            "linear",
                            "${block-what-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17206",
                            "rotateZ",
                            1504,
                            122,
                            "linear",
                            "${block-what-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17207",
                            "rotateZ",
                            1626,
                            100,
                            "linear",
                            "${block-what-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17208",
                            "rotateZ",
                            1726,
                            57,
                            "linear",
                            "${block-what-hit}",
                            '-8deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "when": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-158px', '131px', '66px', 'auto', 'auto'],
                            id: 'block-when',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block-when.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-158px', '131px', '66px', 'auto', 'auto'],
                            id: 'block-when-hit',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block-when-hit.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rubber-bandCopy2',
                            opacity: '0',
                            rect: ['28px', '144px', '76px', '82px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rubber-band.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 2190,
                    autoPlay: true,
                    labels: {
                        "hit": 698
                    },
                    data: [
                        [
                            "eid17223",
                            "top",
                            698,
                            87,
                            "linear",
                            "${rubber-bandCopy2}",
                            '144px',
                            '13px'
                        ],
                        [
                            "eid17224",
                            "top",
                            785,
                            215,
                            "linear",
                            "${rubber-bandCopy2}",
                            '13px',
                            '483px'
                        ],
                        [
                            "eid16987",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-when}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid16988",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-when}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid16989",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-when}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid16990",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-when}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17245",
                            "top",
                            806,
                            109,
                            "linear",
                            "${block-when}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17246",
                            "top",
                            923,
                            257,
                            "linear",
                            "${block-when}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17247",
                            "top",
                            1314,
                            189,
                            "linear",
                            "${block-when}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17248",
                            "top",
                            1503,
                            122,
                            "linear",
                            "${block-when}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17249",
                            "top",
                            1625,
                            100,
                            "linear",
                            "${block-when}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17250",
                            "top",
                            1725,
                            57,
                            "linear",
                            "${block-when}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17412",
                            "top",
                            2021,
                            59,
                            "linear",
                            "${block-when}",
                            '0px',
                            '87px'
                        ],
                        [
                            "eid17409",
                            "top",
                            2080,
                            110,
                            "linear",
                            "${block-when}",
                            '87px',
                            '-158px'
                        ],
                        [
                            "eid16991",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${block-when}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17251",
                            "opacity",
                            854,
                            0,
                            "linear",
                            "${block-when}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17252",
                            "opacity",
                            1314,
                            107,
                            "linear",
                            "${block-when}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17410",
                            "opacity",
                            2134,
                            56,
                            "linear",
                            "${block-when}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16982",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${block-when-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17236",
                            "opacity",
                            806,
                            48,
                            "linear",
                            "${block-when-hit}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17237",
                            "opacity",
                            1114,
                            66,
                            "linear",
                            "${block-when-hit}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17238",
                            "opacity",
                            1314,
                            0,
                            "linear",
                            "${block-when-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17225",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rubber-bandCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17226",
                            "opacity",
                            698,
                            47,
                            "linear",
                            "${rubber-bandCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17227",
                            "opacity",
                            963,
                            37,
                            "linear",
                            "${rubber-bandCopy2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid16992",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-when}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid16993",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-when}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid16994",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-when}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid16995",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-when}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17253",
                            "rotateZ",
                            806,
                            93,
                            "linear",
                            "${block-when}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17254",
                            "rotateZ",
                            899,
                            281,
                            "linear",
                            "${block-when}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17255",
                            "rotateZ",
                            1314,
                            189,
                            "linear",
                            "${block-when}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17256",
                            "rotateZ",
                            1503,
                            122,
                            "linear",
                            "${block-when}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17257",
                            "rotateZ",
                            1625,
                            100,
                            "linear",
                            "${block-when}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17258",
                            "rotateZ",
                            1725,
                            57,
                            "linear",
                            "${block-when}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17228",
                            "left",
                            698,
                            87,
                            "linear",
                            "${rubber-bandCopy2}",
                            '28px',
                            '38px'
                        ],
                        [
                            "eid17229",
                            "left",
                            785,
                            215,
                            "linear",
                            "${rubber-bandCopy2}",
                            '38px',
                            '262px'
                        ],
                        [
                            "eid16978",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-when-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid16979",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-when-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid16980",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-when-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid16981",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-when-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17230",
                            "top",
                            806,
                            109,
                            "linear",
                            "${block-when-hit}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17231",
                            "top",
                            923,
                            257,
                            "linear",
                            "${block-when-hit}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17232",
                            "top",
                            1314,
                            189,
                            "linear",
                            "${block-when-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17233",
                            "top",
                            1503,
                            122,
                            "linear",
                            "${block-when-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17234",
                            "top",
                            1625,
                            100,
                            "linear",
                            "${block-when-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17235",
                            "top",
                            1725,
                            57,
                            "linear",
                            "${block-when-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17411",
                            "top",
                            2021,
                            59,
                            "linear",
                            "${block-when-hit}",
                            '0px',
                            '87px'
                        ],
                        [
                            "eid17407",
                            "top",
                            2080,
                            110,
                            "linear",
                            "${block-when-hit}",
                            '87px',
                            '-158px'
                        ],
                        [
                            "eid16983",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-when-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid16984",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-when-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid16985",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-when-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid16986",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-when-hit}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17239",
                            "rotateZ",
                            806,
                            93,
                            "linear",
                            "${block-when-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17240",
                            "rotateZ",
                            899,
                            281,
                            "linear",
                            "${block-when-hit}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17241",
                            "rotateZ",
                            1314,
                            189,
                            "linear",
                            "${block-when-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17242",
                            "rotateZ",
                            1503,
                            122,
                            "linear",
                            "${block-when-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17243",
                            "rotateZ",
                            1625,
                            100,
                            "linear",
                            "${block-when-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17244",
                            "rotateZ",
                            1725,
                            57,
                            "linear",
                            "${block-when-hit}",
                            '-8deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "where": {
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
                            id: 'block-where',
                            opacity: '1',
                            rect: ['0px', '0px', '131px', '66px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/block-where.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '131px', '66px', 'auto', 'auto'],
                            id: 'block-where-hit',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block-where-hit.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rubber-bandCopy3',
                            opacity: '0',
                            rect: ['-200px', '144px', '76px', '82px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rubber-band.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 2169,
                    autoPlay: true,
                    labels: {
                        "hit": 698
                    },
                    data: [
                        [
                            "eid16996",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-where-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid16997",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-where-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid16998",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-where-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid16999",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-where-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17266",
                            "top",
                            808,
                            109,
                            "linear",
                            "${block-where-hit}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17267",
                            "top",
                            925,
                            257,
                            "linear",
                            "${block-where-hit}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17268",
                            "top",
                            1316,
                            189,
                            "linear",
                            "${block-where-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17269",
                            "top",
                            1505,
                            122,
                            "linear",
                            "${block-where-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17270",
                            "top",
                            1627,
                            100,
                            "linear",
                            "${block-where-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17271",
                            "top",
                            1727,
                            57,
                            "linear",
                            "${block-where-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17395",
                            "top",
                            2000,
                            59,
                            "linear",
                            "${block-where-hit}",
                            '0px',
                            '74px'
                        ],
                        [
                            "eid17399",
                            "top",
                            2059,
                            110,
                            "linear",
                            "${block-where-hit}",
                            '74px',
                            '-200px'
                        ],
                        [
                            "eid17000",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${block-where-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17272",
                            "opacity",
                            808,
                            48,
                            "linear",
                            "${block-where-hit}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17273",
                            "opacity",
                            1116,
                            66,
                            "linear",
                            "${block-where-hit}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17274",
                            "opacity",
                            1316,
                            0,
                            "linear",
                            "${block-where-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17001",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-where-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17002",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-where-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17003",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-where-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17004",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-where-hit}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17275",
                            "rotateZ",
                            808,
                            93,
                            "linear",
                            "${block-where-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17276",
                            "rotateZ",
                            901,
                            281,
                            "linear",
                            "${block-where-hit}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17277",
                            "rotateZ",
                            1316,
                            189,
                            "linear",
                            "${block-where-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17278",
                            "rotateZ",
                            1505,
                            122,
                            "linear",
                            "${block-where-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17279",
                            "rotateZ",
                            1627,
                            100,
                            "linear",
                            "${block-where-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17280",
                            "rotateZ",
                            1727,
                            57,
                            "linear",
                            "${block-where-hit}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17264",
                            "left",
                            698,
                            87,
                            "linear",
                            "${rubber-bandCopy3}",
                            '120px',
                            '38px'
                        ],
                        [
                            "eid17265",
                            "left",
                            785,
                            215,
                            "linear",
                            "${rubber-bandCopy3}",
                            '38px',
                            '-200px'
                        ],
                        [
                            "eid17009",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${block-where}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17287",
                            "opacity",
                            856,
                            0,
                            "linear",
                            "${block-where}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17288",
                            "opacity",
                            1316,
                            107,
                            "linear",
                            "${block-where}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17405",
                            "opacity",
                            2113,
                            56,
                            "linear",
                            "${block-where}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17261",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rubber-bandCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17262",
                            "opacity",
                            698,
                            47,
                            "linear",
                            "${rubber-bandCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17263",
                            "opacity",
                            963,
                            37,
                            "linear",
                            "${rubber-bandCopy3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17005",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-where}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17006",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-where}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17007",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-where}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17008",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-where}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17281",
                            "top",
                            808,
                            109,
                            "linear",
                            "${block-where}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17282",
                            "top",
                            925,
                            257,
                            "linear",
                            "${block-where}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17283",
                            "top",
                            1316,
                            189,
                            "linear",
                            "${block-where}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17284",
                            "top",
                            1505,
                            122,
                            "linear",
                            "${block-where}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17285",
                            "top",
                            1627,
                            100,
                            "linear",
                            "${block-where}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17286",
                            "top",
                            1727,
                            57,
                            "linear",
                            "${block-where}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17396",
                            "top",
                            2000,
                            59,
                            "linear",
                            "${block-where}",
                            '0px',
                            '74px'
                        ],
                        [
                            "eid17400",
                            "top",
                            2059,
                            110,
                            "linear",
                            "${block-where}",
                            '74px',
                            '-200px'
                        ],
                        [
                            "eid17259",
                            "top",
                            698,
                            87,
                            "linear",
                            "${rubber-bandCopy3}",
                            '144px',
                            '13px'
                        ],
                        [
                            "eid17260",
                            "top",
                            785,
                            215,
                            "linear",
                            "${rubber-bandCopy3}",
                            '13px',
                            '483px'
                        ],
                        [
                            "eid17010",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-where}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17011",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-where}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17012",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-where}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17013",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-where}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17289",
                            "rotateZ",
                            808,
                            93,
                            "linear",
                            "${block-where}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17290",
                            "rotateZ",
                            901,
                            281,
                            "linear",
                            "${block-where}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17291",
                            "rotateZ",
                            1316,
                            189,
                            "linear",
                            "${block-where}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17292",
                            "rotateZ",
                            1505,
                            122,
                            "linear",
                            "${block-where}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17293",
                            "rotateZ",
                            1627,
                            100,
                            "linear",
                            "${block-where}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17294",
                            "rotateZ",
                            1727,
                            57,
                            "linear",
                            "${block-where}",
                            '-8deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "who": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-178px', '131px', '66px', 'auto', 'auto'],
                            id: 'block-who',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block-who.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-178px', '131px', '66px', 'auto', 'auto'],
                            id: 'block-who-hit',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block-who-hit.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rubber-bandCopy4',
                            opacity: '0',
                            rect: ['-190px', '194px', '76px', '82px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rubber-band.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 2246,
                    autoPlay: true,
                    labels: {
                        "hit": 698
                    },
                    data: [
                        [
                            "eid17300",
                            "left",
                            698,
                            26,
                            "linear",
                            "${rubber-bandCopy4}",
                            '-190px',
                            '-161px'
                        ],
                        [
                            "eid17576",
                            "left",
                            724,
                            104,
                            "linear",
                            "${rubber-bandCopy4}",
                            '-161px',
                            '38px'
                        ],
                        [
                            "eid17301",
                            "left",
                            828,
                            172,
                            "linear",
                            "${rubber-bandCopy4}",
                            '38px',
                            '-200px'
                        ],
                        [
                            "eid17018",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${block-who-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17308",
                            "opacity",
                            849,
                            48,
                            "linear",
                            "${block-who-hit}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17309",
                            "opacity",
                            1157,
                            66,
                            "linear",
                            "${block-who-hit}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17310",
                            "opacity",
                            1357,
                            0,
                            "linear",
                            "${block-who-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17297",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rubber-bandCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17298",
                            "opacity",
                            698,
                            47,
                            "linear",
                            "${rubber-bandCopy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17299",
                            "opacity",
                            963,
                            37,
                            "linear",
                            "${rubber-bandCopy4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17295",
                            "top",
                            698,
                            130,
                            "linear",
                            "${rubber-bandCopy4}",
                            '194px',
                            '13px'
                        ],
                        [
                            "eid17296",
                            "top",
                            828,
                            172,
                            "linear",
                            "${rubber-bandCopy4}",
                            '13px',
                            '483px'
                        ],
                        [
                            "eid17014",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-who-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17015",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-who-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17016",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-who-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17017",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-who-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17302",
                            "top",
                            849,
                            109,
                            "linear",
                            "${block-who-hit}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17303",
                            "top",
                            966,
                            257,
                            "linear",
                            "${block-who-hit}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17304",
                            "top",
                            1357,
                            189,
                            "linear",
                            "${block-who-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17305",
                            "top",
                            1546,
                            122,
                            "linear",
                            "${block-who-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17306",
                            "top",
                            1668,
                            100,
                            "linear",
                            "${block-who-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17307",
                            "top",
                            1768,
                            57,
                            "linear",
                            "${block-who-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17387",
                            "top",
                            2073,
                            66,
                            "linear",
                            "${block-who-hit}",
                            '0px',
                            '84px'
                        ],
                        [
                            "eid17383",
                            "top",
                            2139,
                            107,
                            "linear",
                            "${block-who-hit}",
                            '84px',
                            '-178px'
                        ],
                        [
                            "eid17028",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-who}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17029",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-who}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17030",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-who}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17031",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-who}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17325",
                            "rotateZ",
                            849,
                            93,
                            "linear",
                            "${block-who}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17326",
                            "rotateZ",
                            942,
                            281,
                            "linear",
                            "${block-who}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17327",
                            "rotateZ",
                            1357,
                            189,
                            "linear",
                            "${block-who}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17328",
                            "rotateZ",
                            1546,
                            122,
                            "linear",
                            "${block-who}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17329",
                            "rotateZ",
                            1668,
                            100,
                            "linear",
                            "${block-who}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17330",
                            "rotateZ",
                            1768,
                            57,
                            "linear",
                            "${block-who}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17027",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${block-who}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17323",
                            "opacity",
                            897,
                            0,
                            "linear",
                            "${block-who}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17324",
                            "opacity",
                            1357,
                            107,
                            "linear",
                            "${block-who}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17386",
                            "opacity",
                            2186,
                            60,
                            "linear",
                            "${block-who}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17023",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-who}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17024",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-who}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17025",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-who}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17026",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-who}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17317",
                            "top",
                            849,
                            109,
                            "linear",
                            "${block-who}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17318",
                            "top",
                            966,
                            257,
                            "linear",
                            "${block-who}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17319",
                            "top",
                            1357,
                            189,
                            "linear",
                            "${block-who}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17320",
                            "top",
                            1546,
                            122,
                            "linear",
                            "${block-who}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17321",
                            "top",
                            1668,
                            100,
                            "linear",
                            "${block-who}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17322",
                            "top",
                            1768,
                            57,
                            "linear",
                            "${block-who}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17388",
                            "top",
                            2073,
                            66,
                            "linear",
                            "${block-who}",
                            '0px',
                            '84px'
                        ],
                        [
                            "eid17385",
                            "top",
                            2139,
                            107,
                            "linear",
                            "${block-who}",
                            '84px',
                            '-178px'
                        ],
                        [
                            "eid17019",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-who-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17020",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-who-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17021",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-who-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17022",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-who-hit}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17311",
                            "rotateZ",
                            849,
                            93,
                            "linear",
                            "${block-who-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17312",
                            "rotateZ",
                            942,
                            281,
                            "linear",
                            "${block-who-hit}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17313",
                            "rotateZ",
                            1357,
                            189,
                            "linear",
                            "${block-who-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17314",
                            "rotateZ",
                            1546,
                            122,
                            "linear",
                            "${block-who-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17315",
                            "rotateZ",
                            1668,
                            100,
                            "linear",
                            "${block-who-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17316",
                            "rotateZ",
                            1768,
                            57,
                            "linear",
                            "${block-who-hit}",
                            '-8deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "why": {
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
                            id: 'block-why',
                            opacity: '1',
                            rect: ['0px', '0px', '131px', '66px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/block-why.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '131px', '66px', 'auto', 'auto'],
                            id: 'block-why-hit',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block-why-hit.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rubber-bandCopy5',
                            opacity: '0',
                            rect: ['304px', '170px', '76px', '82px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rubber-band.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 2280,
                    autoPlay: true,
                    labels: {
                        "hit": 698
                    },
                    data: [
                        [
                            "eid17032",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-why-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17033",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-why-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17034",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-why-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17035",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-why-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17338",
                            "top",
                            837,
                            109,
                            "linear",
                            "${block-why-hit}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17339",
                            "top",
                            954,
                            257,
                            "linear",
                            "${block-why-hit}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17340",
                            "top",
                            1345,
                            189,
                            "linear",
                            "${block-why-hit}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17341",
                            "top",
                            1534,
                            122,
                            "linear",
                            "${block-why-hit}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17342",
                            "top",
                            1656,
                            100,
                            "linear",
                            "${block-why-hit}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17343",
                            "top",
                            1756,
                            57,
                            "linear",
                            "${block-why-hit}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17371",
                            "top",
                            2107,
                            66,
                            "linear",
                            "${block-why-hit}",
                            '0px',
                            '42px'
                        ],
                        [
                            "eid17375",
                            "top",
                            2173,
                            107,
                            "linear",
                            "${block-why-hit}",
                            '42px',
                            '-158px'
                        ],
                        [
                            "eid17036",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${block-why-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17344",
                            "opacity",
                            837,
                            48,
                            "linear",
                            "${block-why-hit}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17345",
                            "opacity",
                            1145,
                            66,
                            "linear",
                            "${block-why-hit}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17346",
                            "opacity",
                            1345,
                            0,
                            "linear",
                            "${block-why-hit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17046",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-why}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17047",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-why}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17048",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-why}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17049",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-why}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17361",
                            "rotateZ",
                            837,
                            93,
                            "linear",
                            "${block-why}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17362",
                            "rotateZ",
                            930,
                            281,
                            "linear",
                            "${block-why}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17363",
                            "rotateZ",
                            1345,
                            189,
                            "linear",
                            "${block-why}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17364",
                            "rotateZ",
                            1534,
                            122,
                            "linear",
                            "${block-why}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17365",
                            "rotateZ",
                            1656,
                            100,
                            "linear",
                            "${block-why}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17366",
                            "rotateZ",
                            1756,
                            57,
                            "linear",
                            "${block-why}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17333",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rubber-bandCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17334",
                            "opacity",
                            698,
                            47,
                            "linear",
                            "${rubber-bandCopy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17335",
                            "opacity",
                            963,
                            37,
                            "linear",
                            "${rubber-bandCopy5}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17037",
                            "rotateZ",
                            0,
                            189,
                            "linear",
                            "${block-why-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17038",
                            "rotateZ",
                            189,
                            122,
                            "linear",
                            "${block-why-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17039",
                            "rotateZ",
                            311,
                            100,
                            "linear",
                            "${block-why-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17040",
                            "rotateZ",
                            411,
                            57,
                            "linear",
                            "${block-why-hit}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17347",
                            "rotateZ",
                            837,
                            93,
                            "linear",
                            "${block-why-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17348",
                            "rotateZ",
                            930,
                            281,
                            "linear",
                            "${block-why-hit}",
                            '12deg',
                            '-10deg'
                        ],
                        [
                            "eid17349",
                            "rotateZ",
                            1345,
                            189,
                            "linear",
                            "${block-why-hit}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid17350",
                            "rotateZ",
                            1534,
                            122,
                            "linear",
                            "${block-why-hit}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid17351",
                            "rotateZ",
                            1656,
                            100,
                            "linear",
                            "${block-why-hit}",
                            '12deg',
                            '-8deg'
                        ],
                        [
                            "eid17352",
                            "rotateZ",
                            1756,
                            57,
                            "linear",
                            "${block-why-hit}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid17045",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${block-why}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17359",
                            "opacity",
                            885,
                            0,
                            "linear",
                            "${block-why}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17360",
                            "opacity",
                            1345,
                            107,
                            "linear",
                            "${block-why}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17381",
                            "opacity",
                            2220,
                            60,
                            "linear",
                            "${block-why}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17336",
                            "left",
                            698,
                            116,
                            "linear",
                            "${rubber-bandCopy5}",
                            '304px',
                            '38px'
                        ],
                        [
                            "eid17337",
                            "left",
                            814,
                            186,
                            "linear",
                            "${rubber-bandCopy5}",
                            '38px',
                            '-200px'
                        ],
                        [
                            "eid17331",
                            "top",
                            698,
                            116,
                            "linear",
                            "${rubber-bandCopy5}",
                            '170px',
                            '13px'
                        ],
                        [
                            "eid17332",
                            "top",
                            814,
                            186,
                            "linear",
                            "${rubber-bandCopy5}",
                            '13px',
                            '483px'
                        ],
                        [
                            "eid17041",
                            "top",
                            0,
                            189,
                            "linear",
                            "${block-why}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17042",
                            "top",
                            189,
                            122,
                            "linear",
                            "${block-why}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17043",
                            "top",
                            311,
                            100,
                            "linear",
                            "${block-why}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17044",
                            "top",
                            411,
                            57,
                            "linear",
                            "${block-why}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17353",
                            "top",
                            837,
                            109,
                            "linear",
                            "${block-why}",
                            '0px',
                            '-97px'
                        ],
                        [
                            "eid17354",
                            "top",
                            954,
                            257,
                            "linear",
                            "${block-why}",
                            '-97px',
                            '481px'
                        ],
                        [
                            "eid17355",
                            "top",
                            1345,
                            189,
                            "linear",
                            "${block-why}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid17356",
                            "top",
                            1534,
                            122,
                            "linear",
                            "${block-why}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17357",
                            "top",
                            1656,
                            100,
                            "linear",
                            "${block-why}",
                            '-10px',
                            '-15px'
                        ],
                        [
                            "eid17358",
                            "top",
                            1756,
                            57,
                            "linear",
                            "${block-why}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid17372",
                            "top",
                            2107,
                            66,
                            "linear",
                            "${block-why}",
                            '0px',
                            '42px'
                        ],
                        [
                            "eid17376",
                            "top",
                            2173,
                            107,
                            "linear",
                            "${block-why}",
                            '42px',
                            '-158px'
                        ]
                    ]
                }
            },
            "arm-w-rubber": {
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
                            id: 'arm-rubber3',
                            opacity: '0',
                            rect: ['76px', '-35px', '374px', '524px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arm-rubber3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'arm-rubber2',
                            opacity: '0',
                            rect: ['90px', '-42px', '374px', '524px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arm-rubber2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'arm-rubber1',
                            opacity: '0',
                            rect: ['70px', '-62px', '374px', '524px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arm-rubber1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'arm-rubber4',
                            opacity: '0',
                            rect: ['95px', '-42px', '374px', '524px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arm-rubber4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '374px', '524px']
                        }
                    }
                },
                timeline: {
                    duration: 843,
                    autoPlay: true,
                    data: [
                        [
                            "eid17079",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${arm-rubber3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17078",
                            "opacity",
                            241,
                            21,
                            "linear",
                            "${arm-rubber3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17104",
                            "opacity",
                            500,
                            14,
                            "linear",
                            "${arm-rubber3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17068",
                            "opacity",
                            0,
                            93,
                            "linear",
                            "${arm-rubber1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17075",
                            "opacity",
                            214,
                            17,
                            "linear",
                            "${arm-rubber1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17098",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${arm-rubber4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17101",
                            "opacity",
                            500,
                            14,
                            "linear",
                            "${arm-rubber4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17115",
                            "opacity",
                            792,
                            51,
                            "linear",
                            "${arm-rubber4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17072",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${arm-rubber2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17071",
                            "opacity",
                            197,
                            17,
                            "linear",
                            "${arm-rubber2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17081",
                            "opacity",
                            262,
                            17,
                            "linear",
                            "${arm-rubber2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17090",
                            "top",
                            0,
                            115,
                            "linear",
                            "${arm-rubber1}",
                            '324px',
                            '-62px'
                        ],
                        [
                            "eid17110",
                            "top",
                            719,
                            124,
                            "linear",
                            "${arm-rubber1}",
                            '-62px',
                            '324px'
                        ],
                        [
                            "eid17093",
                            "top",
                            0,
                            115,
                            "linear",
                            "${arm-rubber4}",
                            '344px',
                            '-41px'
                        ],
                        [
                            "eid17109",
                            "top",
                            719,
                            124,
                            "linear",
                            "${arm-rubber4}",
                            '-41px',
                            '344px'
                        ],
                        [
                            "eid17091",
                            "top",
                            0,
                            115,
                            "linear",
                            "${arm-rubber3}",
                            '351px',
                            '-35px'
                        ],
                        [
                            "eid17096",
                            "top",
                            279,
                            78,
                            "linear",
                            "${arm-rubber3}",
                            '-35px',
                            '-29px'
                        ],
                        [
                            "eid17112",
                            "top",
                            719,
                            124,
                            "linear",
                            "${arm-rubber3}",
                            '-29px',
                            '351px'
                        ],
                        [
                            "eid17092",
                            "top",
                            0,
                            115,
                            "linear",
                            "${arm-rubber2}",
                            '344px',
                            '-42px'
                        ],
                        [
                            "eid17111",
                            "top",
                            719,
                            124,
                            "linear",
                            "${arm-rubber2}",
                            '-42px',
                            '344px'
                        ]
                    ]
                }
            },
            "answer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'The person sharing the information',
                            id: 'Text4',
                            opacity: '0.000000',
                            align: 'left',
                            rect: ['145px', '-17px', '688px', '44px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'The manner in which the information is shared',
                            id: 'Text4Copy',
                            opacity: '0.000000',
                            align: 'left',
                            rect: ['71px', '373px', '634px', '37px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'The place/ situation/ platform through which <br>the information is shared',
                            id: 'Text4Copy5',
                            opacity: '0.000000',
                            align: 'left',
                            rect: ['98px', '276px', '601px', '72px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'The time frame during which the information is shared ',
                            id: 'Text4Copy4',
                            opacity: '0.000000',
                            align: 'left',
                            rect: ['117px', '186px', '558px', '72px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'The reason the information is shared',
                            id: 'Text4Copy3',
                            opacity: '0.000000',
                            align: 'left',
                            rect: ['145px', '120px', '570px', '45px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'The information being shared ',
                            id: 'Text4Copy2',
                            opacity: '0.000000',
                            align: 'left',
                            rect: ['191px', '51px', '430px', '45px', 'auto', 'auto']
                        },
                        {
                            rect: ['82px', '45px', '56px', '46px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy',
                            stroke: [3, 'rgba(31,150,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            rect: ['38px', '112px', '66px', '46px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy2',
                            stroke: [3, 'rgba(31,150,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            rect: ['25px', '182px', '71px', '71px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy3',
                            stroke: [3, 'rgba(31,150,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            rect: ['0px', '273px', '79px', '74px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy4',
                            stroke: [3, 'rgba(31,150,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            rect: ['32px', '366px', '70px', '46px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy5',
                            stroke: [3, 'rgba(40,217,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            rect: ['50px', '-25px', '65px', '46px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect',
                            stroke: [3, 'rgba(31,150,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'txt-W6Copy',
                            opacity: '0',
                            rect: ['35px', '-28px', '48px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-W.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-W6Copy2',
                            opacity: '0',
                            rect: ['34px', '112px', '48px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-W.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-W6Copy3',
                            opacity: '0',
                            rect: ['54px', '39px', '48px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-W.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-W6Copy4',
                            opacity: '0',
                            rect: ['-12px', '183px', '48px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-W.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-W6',
                            opacity: '0',
                            rect: ['-52px', '277px', '49px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-W.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-why2',
                            opacity: '0',
                            rect: ['71px', '116px', '62px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-why.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-who2',
                            opacity: '0',
                            rect: ['71px', '-28px', '64px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-who.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-where2',
                            opacity: '0',
                            rect: ['-15px', '285px', '102px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-where.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-when2',
                            opacity: '0',
                            rect: ['25px', '185px', '85px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-when.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-what2',
                            opacity: '0',
                            rect: ['90px', '40px', '85px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-what.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-H2',
                            opacity: '0',
                            rect: ['-37px', '362px', '39px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-H.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-how2',
                            opacity: '0',
                            rect: ['-5px', '362px', '73px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-how.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '688px', '424px']
                        }
                    }
                },
                timeline: {
                    duration: 323,
                    autoPlay: true,
                    data: [
                        [
                            "eid17480",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-W6Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17539",
                            "width",
                            107,
                            186,
                            "linear",
                            "${RoundRectCopy3}",
                            '71px',
                            '564px'
                        ],
                        [
                            "eid17484",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-why2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17589",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17590",
                            "opacity",
                            275,
                            48,
                            "linear",
                            "${Text4Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17542",
                            "width",
                            107,
                            186,
                            "linear",
                            "${RoundRectCopy}",
                            '56px',
                            '449px'
                        ],
                        [
                            "eid17544",
                            "width",
                            107,
                            186,
                            "linear",
                            "${RoundRect}",
                            '65px',
                            '514px'
                        ],
                        [
                            "eid17540",
                            "width",
                            107,
                            186,
                            "linear",
                            "${RoundRectCopy5}",
                            '70px',
                            '644px'
                        ],
                        [
                            "eid17591",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17592",
                            "opacity",
                            275,
                            48,
                            "linear",
                            "${Text4Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17543",
                            "width",
                            107,
                            186,
                            "linear",
                            "${RoundRectCopy2}",
                            '66px',
                            '526px'
                        ],
                        [
                            "eid17501",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17513",
                            "opacity",
                            107,
                            82,
                            "linear",
                            "${RoundRectCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17500",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17514",
                            "opacity",
                            107,
                            82,
                            "linear",
                            "${RoundRectCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17475",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-who2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17502",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17512",
                            "opacity",
                            107,
                            82,
                            "linear",
                            "${RoundRectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17547",
                            "left",
                            107,
                            186,
                            "linear",
                            "${RoundRectCopy4}",
                            '0px',
                            '71px'
                        ],
                        [
                            "eid17473",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-where2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17549",
                            "left",
                            107,
                            186,
                            "linear",
                            "${RoundRectCopy2}",
                            '38px',
                            '109px'
                        ],
                        [
                            "eid17497",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17509",
                            "opacity",
                            107,
                            82,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17593",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17594",
                            "opacity",
                            275,
                            48,
                            "linear",
                            "${Text4Copy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17541",
                            "width",
                            107,
                            186,
                            "linear",
                            "${RoundRectCopy4}",
                            '79px',
                            '620px'
                        ],
                        [
                            "eid17499",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17511",
                            "opacity",
                            107,
                            82,
                            "linear",
                            "${RoundRectCopy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17587",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17588",
                            "opacity",
                            275,
                            48,
                            "linear",
                            "${Text4Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17585",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17586",
                            "opacity",
                            275,
                            48,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17477",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-what2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17546",
                            "left",
                            107,
                            186,
                            "linear",
                            "${RoundRectCopy5}",
                            '32px',
                            '47px'
                        ],
                        [
                            "eid17478",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-W6Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17479",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-W6Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17483",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-how2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17482",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-W6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17498",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17510",
                            "opacity",
                            107,
                            82,
                            "linear",
                            "${RoundRectCopy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17550",
                            "left",
                            107,
                            186,
                            "linear",
                            "${RoundRectCopy3}",
                            '25px',
                            '96px'
                        ],
                        [
                            "eid17555",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17554",
                            "opacity",
                            275,
                            48,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17481",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-W6Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17548",
                            "left",
                            107,
                            186,
                            "linear",
                            "${RoundRectCopy}",
                            '82px',
                            '153px'
                        ],
                        [
                            "eid17474",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-when2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17476",
                            "opacity",
                            0,
                            107,
                            "linear",
                            "${txt-H2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17545",
                            "left",
                            107,
                            186,
                            "linear",
                            "${RoundRect}",
                            '50px',
                            '121px'
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
                            fill: ['rgba(0,0,0,0)', 'images/game result12.png', '0px', '0px']
                        },
                        {
                            rect: ['284px', '332px', '196px', '63px', 'auto', 'auto'],
                            type: 'image',
                            id: 'close-btn1',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn13.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['-3px', '226px', '746px', '63px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text8',
                            opacity: '1',
                            text: 'You\'ve got the wrong answer.',
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['-2px', '295px', '800px', '34px', 'auto', 'auto'],
                            id: 'subText',
                            text: 'Click \"Close\"  and spin again to load the next images.',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [29, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', '']
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
                            text: 'You\'ve got it!',
                            id: 'Text8',
                            opacity: '0',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            rect: ['304px', '314px', '188px', '61px', 'auto', 'auto'],
                            id: 'close-btn1',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next-btn.png', '0px', '0px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("3_edgeActions.js");
})("EDGE-1646797");
