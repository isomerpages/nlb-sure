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
                            rect: ['-6px', '-135px', '1036px', '720px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bookshop2.jpg",'0px','0px']
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
                            text: "Spot the Differences",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(184,217,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'narrator-text-balloon',
                            type: 'image',
                            rect: ['104px', '-172px', '810px', '136px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['44px', '-142px', '919px', '65px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Put your 'detective skills' to the test!",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(184, 217, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'spot-difference1b',
                            type: 'image',
                            rect: ['6px', '106px', '499px', '393px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spot-difference1b.jpg",'0px','0px']
                        },
                        {
                            id: 'spot-difference1a',
                            type: 'image',
                            rect: ['517px', '106px', '499px', '393px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spot-difference1a.jpg",'0px','0px']
                        },
                        {
                            id: 'spot-difference2b',
                            type: 'image',
                            rect: ['6px', '467px', '800px', '630px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spot-difference2b.jpg",'0px','0px']
                        },
                        {
                            id: 'spot-difference2a',
                            type: 'image',
                            rect: ['517px', '93px', '800px', '630px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spot-difference2a.jpg",'0px','0px']
                        },
                        {
                            id: 'spot-difference3b',
                            type: 'image',
                            rect: ['6px', '104px', '800px', '630px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spot-difference3b.jpg",'0px','0px']
                        },
                        {
                            id: 'spot-difference3a',
                            type: 'image',
                            rect: ['518px', '104px', '800px', '630px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spot-difference3a.jpg",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['5px', '103px', '494px', '390px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [3,"rgba(31,129,255,1.00)","solid"]
                        },
                        {
                            id: 'RoundRectCopy',
                            type: 'rect',
                            rect: ['517px', '103px', '494px', '390px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [3,"rgba(45,241,0,1.00)","solid"]
                        },
                        {
                            id: 'countdown3',
                            type: 'image',
                            rect: ['397px', '241px', '203px', '104px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown3.png",'0px','0px']
                        },
                        {
                            id: 'countdown2',
                            type: 'image',
                            rect: ['370px', '142px', '251px', '353px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown2.png",'0px','0px']
                        },
                        {
                            id: 'countdown1',
                            type: 'image',
                            rect: ['485px', '283px', '69px', '104px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown1.png",'0px','0px']
                        },
                        {
                            id: 'picture1-right-select-1',
                            symbolName: 'picture1-right-selects',
                            display: 'none',
                            type: 'rect',
                            rect: ['668px', '225px', '56', '56', 'auto', 'auto']
                        },
                        {
                            id: 'picture1-right-select-2',
                            symbolName: 'picture1-right-select-2',
                            display: 'none',
                            type: 'rect',
                            rect: ['888px', '216px', '111', '85', 'auto', 'auto']
                        },
                        {
                            id: 'picture1-right-select-3',
                            symbolName: 'picture1-right-select-3',
                            display: 'none',
                            type: 'rect',
                            rect: ['888px', '314px', '111', '95', 'auto', 'auto']
                        },
                        {
                            id: 'picture2-right-select-1',
                            symbolName: 'picture2-right-select-1',
                            display: 'none',
                            type: 'rect',
                            rect: ['8px', '186px', '1007', '384', 'auto', 'auto']
                        },
                        {
                            id: 'picture2-right-select-2',
                            symbolName: 'picture2-right-select-2',
                            display: 'none',
                            type: 'rect',
                            rect: ['8px', '297px', '1007', '273', 'auto', 'auto']
                        },
                        {
                            id: 'picture2-right-select-3',
                            symbolName: 'picture2-right-select-3',
                            display: 'none',
                            type: 'rect',
                            rect: ['8px', '434px', '1007', '136', 'auto', 'auto']
                        },
                        {
                            id: 'picture3-right-select-1',
                            symbolName: 'picture3-right-select-1',
                            display: 'none',
                            type: 'rect',
                            rect: ['7px', '138px', '1007', '432', 'auto', 'auto']
                        },
                        {
                            id: 'picture3-right-select-2',
                            symbolName: 'picture3-right-select-2',
                            display: 'none',
                            type: 'rect',
                            rect: ['7px', '296px', '1007', '274', 'auto', 'auto']
                        },
                        {
                            id: 'picture3-right-select-3',
                            symbolName: 'picture3-right-select-3',
                            display: 'none',
                            type: 'rect',
                            rect: ['7px', '296px', '1007', '274', 'auto', 'auto']
                        },
                        {
                            id: 'instruction',
                            symbolName: 'instruction',
                            display: 'none',
                            type: 'rect',
                            rect: ['16', '363px', '1008', '222', 'auto', 'auto']
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
                            id: 'timer',
                            symbolName: 'timer',
                            display: 'none',
                            type: 'rect',
                            rect: ['869', '6', '150', '75', 'auto', 'auto']
                        },
                        {
                            id: 'countdown4',
                            type: 'image',
                            rect: ['294px', '272px', '299px', '82px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown4.png",'0px','0px']
                        },
                        {
                            id: 'mainmenu',
                            type: 'image',
                            rect: ['784px', '490px', '230px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'a',
                            display: 'none',
                            type: 'rect',
                            rect: ['517px', '106px', '493px', '387px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(45, 241, 0)","none"]
                        },
                        {
                            id: 'a1',
                            display: 'none',
                            type: 'rect',
                            rect: ['583px', '166px', '184px', '68px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(45, 241, 0)","none"]
                        },
                        {
                            id: 'a2',
                            display: 'none',
                            type: 'rect',
                            rect: ['918px', '205px', '74px', '83px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(45, 241, 0)","none"]
                        },
                        {
                            id: 'a3',
                            display: 'none',
                            type: 'rect',
                            rect: ['888px', '304px', '104px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(45, 241, 0)","none"]
                        },
                        {
                            id: 'b1',
                            display: 'none',
                            type: 'rect',
                            rect: ['622px', '174px', '85px', '175px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(45, 241, 0)","none"]
                        },
                        {
                            id: 'b2',
                            display: 'none',
                            type: 'rect',
                            rect: ['869px', '375px', '75px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(45, 241, 0)","none"]
                        },
                        {
                            id: 'b3',
                            display: 'none',
                            type: 'rect',
                            rect: ['906px', '150px', '109px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(45, 241, 0)","none"]
                        },
                        {
                            id: 'c1',
                            display: 'none',
                            type: 'rect',
                            rect: ['600px', '216px', '108px', '98px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(45, 241, 0)","none"]
                        },
                        {
                            id: 'c2',
                            display: 'none',
                            type: 'rect',
                            rect: ['779px', '411px', '108px', '86px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(45, 241, 0)","none"]
                        },
                        {
                            id: 'c3',
                            display: 'none',
                            type: 'rect',
                            rect: ['862px', '131px', '82px', '65px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(45, 241, 0)","none"]
                        },
                        {
                            id: 'game-resultCorrectCopy',
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
                    duration: 67524,
                    autoPlay: true,
                    labels: {
                        "sk1": 22209,
                        "tu1": 26110,
                        "s2": 27250,
                        "tu2": 31123,
                        "s3": 32289,
                        "tu3": 36212,
                        "end": 37284
                    },
                    data: [
                        [
                            "eid17935",
                            "left",
                            27250,
                            433,
                            "linear",
                            "${spot-difference2b}",
                            '288px',
                            '262px'
                        ],
                        [
                            "eid17936",
                            "left",
                            27683,
                            320,
                            "linear",
                            "${spot-difference2b}",
                            '262px',
                            '6px'
                        ],
                        [
                            "eid18035",
                            "left",
                            31750,
                            189,
                            "linear",
                            "${spot-difference2b}",
                            '6px',
                            '262px'
                        ],
                        [
                            "eid18034",
                            "left",
                            31939,
                            256,
                            "linear",
                            "${spot-difference2b}",
                            '262px',
                            '288px'
                        ],
                        [
                            "eid17566",
                            "top",
                            2346,
                            131,
                            "linear",
                            "${narrator-text-balloon}",
                            '-172px',
                            '126px'
                        ],
                        [
                            "eid17568",
                            "top",
                            2477,
                            79,
                            "linear",
                            "${narrator-text-balloon}",
                            '126px',
                            '14px'
                        ],
                        [
                            "eid18205",
                            "top",
                            8000,
                            57,
                            "linear",
                            "${narrator-text-balloon}",
                            '14px',
                            '126px'
                        ],
                        [
                            "eid18206",
                            "top",
                            8057,
                            95,
                            "linear",
                            "${narrator-text-balloon}",
                            '126px',
                            '-172px'
                        ],
                        [
                            "eid18052",
                            "height",
                            32289,
                            433,
                            "linear",
                            "${spot-difference3b}",
                            '82px',
                            '393px'
                        ],
                        [
                            "eid18149",
                            "height",
                            37013,
                            271,
                            "linear",
                            "${spot-difference3b}",
                            '393px',
                            '82px'
                        ],
                        [
                            "eid17714",
                            "height",
                            22317,
                            433,
                            "linear",
                            "${spot-difference1b}",
                            '82px',
                            '393px'
                        ],
                        [
                            "eid17912",
                            "height",
                            26857,
                            325,
                            "linear",
                            "${spot-difference1b}",
                            '393px',
                            '82px'
                        ],
                        [
                            "eid17926",
                            "top",
                            27250,
                            433,
                            "linear",
                            "${spot-difference2a}",
                            '467px',
                            '104px'
                        ],
                        [
                            "eid18025",
                            "top",
                            31939,
                            256,
                            "linear",
                            "${spot-difference2a}",
                            '104px',
                            '467px'
                        ],
                        [
                            "eid18198",
                            "height",
                            37360,
                            164,
                            "linear",
                            "${mainmenu}",
                            '40px',
                            '75px'
                        ],
                        [
                            "eid17694",
                            "width",
                            24750,
                            425,
                            "linear",
                            "${countdown3}",
                            '203px',
                            '543px'
                        ],
                        [
                            "eid17959",
                            "width",
                            29503,
                            425,
                            "linear",
                            "${countdown3}",
                            '203px',
                            '543px'
                        ],
                        [
                            "eid18076",
                            "width",
                            34542,
                            425,
                            "linear",
                            "${countdown3}",
                            '203px',
                            '543px'
                        ],
                        [
                            "eid18050",
                            "width",
                            32289,
                            433,
                            "linear",
                            "${spot-difference3a}",
                            '104px',
                            '499px'
                        ],
                        [
                            "eid18147",
                            "width",
                            37013,
                            271,
                            "linear",
                            "${spot-difference3a}",
                            '499px',
                            '104px'
                        ],
                        [
                            "eid17577",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17575",
                            "opacity",
                            2346,
                            79,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18204",
                            "opacity",
                            8095,
                            58,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17931",
                            "width",
                            27250,
                            433,
                            "linear",
                            "${spot-difference2a}",
                            '104px',
                            '499px'
                        ],
                        [
                            "eid18030",
                            "width",
                            31939,
                            256,
                            "linear",
                            "${spot-difference2a}",
                            '499px',
                            '104px'
                        ],
                        [
                            "eid18054",
                            "left",
                            32289,
                            433,
                            "linear",
                            "${spot-difference3b}",
                            '593px',
                            '254px'
                        ],
                        [
                            "eid18055",
                            "left",
                            32722,
                            320,
                            "linear",
                            "${spot-difference3b}",
                            '254px',
                            '6px'
                        ],
                        [
                            "eid18152",
                            "left",
                            36813,
                            200,
                            "linear",
                            "${spot-difference3b}",
                            '6px',
                            '254px'
                        ],
                        [
                            "eid18151",
                            "left",
                            37013,
                            271,
                            "linear",
                            "${spot-difference3b}",
                            '254px',
                            '593px'
                        ],
                        [
                            "eid17711",
                            "height",
                            22317,
                            433,
                            "linear",
                            "${spot-difference1a}",
                            '82px',
                            '393px'
                        ],
                        [
                            "eid17906",
                            "height",
                            26857,
                            325,
                            "linear",
                            "${spot-difference1a}",
                            '393px',
                            '82px'
                        ],
                        [
                            "eid18225",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18223",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18224",
                            "display",
                            25553,
                            0,
                            "linear",
                            "${a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18229",
                            "display",
                            30044,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18230",
                            "display",
                            30099,
                            0,
                            "linear",
                            "${a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18255",
                            "display",
                            35083,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18256",
                            "display",
                            35145,
                            0,
                            "linear",
                            "${a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18222",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18216",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${a1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18219",
                            "display",
                            25553,
                            0,
                            "linear",
                            "${a1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17716",
                            "width",
                            22317,
                            433,
                            "linear",
                            "${spot-difference1b}",
                            '104px',
                            '499px'
                        ],
                        [
                            "eid17916",
                            "width",
                            26857,
                            325,
                            "linear",
                            "${spot-difference1b}",
                            '499px',
                            '104px'
                        ],
                        [
                            "eid17938",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spot-difference2a}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17928",
                            "opacity",
                            27250,
                            273,
                            "linear",
                            "${spot-difference2a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18027",
                            "opacity",
                            32034,
                            161,
                            "linear",
                            "${spot-difference2a}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17674",
                            "top",
                            23250,
                            425,
                            "linear",
                            "${countdown1}",
                            '283px',
                            '142px'
                        ],
                        [
                            "eid17942",
                            "top",
                            28003,
                            425,
                            "linear",
                            "${countdown1}",
                            '283px',
                            '142px'
                        ],
                        [
                            "eid18059",
                            "top",
                            33042,
                            425,
                            "linear",
                            "${countdown1}",
                            '283px',
                            '142px'
                        ],
                        [
                            "eid17743",
                            "display",
                            0,
                            0,
                            "linear",
                            "${timer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17744",
                            "display",
                            25080,
                            0,
                            "linear",
                            "${timer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18163",
                            "display",
                            36813,
                            0,
                            "linear",
                            "${timer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17717",
                            "top",
                            22317,
                            433,
                            "linear",
                            "${spot-difference1a}",
                            '109px',
                            '106px'
                        ],
                        [
                            "eid17905",
                            "top",
                            26857,
                            325,
                            "linear",
                            "${spot-difference1a}",
                            '106px',
                            '109px'
                        ],
                        [
                            "eid18168",
                            "left",
                            26110,
                            250,
                            "linear",
                            "${countdown4}",
                            '294px',
                            '64px'
                        ],
                        [
                            "eid18174",
                            "left",
                            31123,
                            250,
                            "linear",
                            "${countdown4}",
                            '294px',
                            '64px'
                        ],
                        [
                            "eid18180",
                            "left",
                            36212,
                            250,
                            "linear",
                            "${countdown4}",
                            '294px',
                            '64px'
                        ],
                        [
                            "eid18057",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spot-difference3a}",
                            '0',
                            '0'
                        ],
                        [
                            "eid18047",
                            "opacity",
                            32289,
                            273,
                            "linear",
                            "${spot-difference3a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18144",
                            "opacity",
                            37113,
                            171,
                            "linear",
                            "${spot-difference3a}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18048",
                            "left",
                            32289,
                            433,
                            "linear",
                            "${spot-difference3a}",
                            '593px',
                            '254px'
                        ],
                        [
                            "eid18049",
                            "left",
                            32722,
                            320,
                            "linear",
                            "${spot-difference3a}",
                            '254px',
                            '518px'
                        ],
                        [
                            "eid18146",
                            "left",
                            36813,
                            200,
                            "linear",
                            "${spot-difference3a}",
                            '518px',
                            '254px'
                        ],
                        [
                            "eid18145",
                            "left",
                            37013,
                            271,
                            "linear",
                            "${spot-difference3a}",
                            '254px',
                            '593px'
                        ],
                        [
                            "eid17718",
                            "top",
                            22317,
                            433,
                            "linear",
                            "${spot-difference1b}",
                            '109px',
                            '106px'
                        ],
                        [
                            "eid17911",
                            "top",
                            26857,
                            325,
                            "linear",
                            "${spot-difference1b}",
                            '106px',
                            '109px'
                        ],
                        [
                            "eid17712",
                            "left",
                            22317,
                            433,
                            "linear",
                            "${spot-difference1a}",
                            '795px',
                            '254px'
                        ],
                        [
                            "eid17720",
                            "left",
                            22750,
                            320,
                            "linear",
                            "${spot-difference1a}",
                            '254px',
                            '517px'
                        ],
                        [
                            "eid17909",
                            "left",
                            26617,
                            240,
                            "linear",
                            "${spot-difference1a}",
                            '517px',
                            '254px'
                        ],
                        [
                            "eid17908",
                            "left",
                            26857,
                            325,
                            "linear",
                            "${spot-difference1a}",
                            '254px',
                            '795px'
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
                            2207,
                            139,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18239",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18233",
                            "display",
                            30044,
                            0,
                            "linear",
                            "${b1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18236",
                            "display",
                            30099,
                            0,
                            "linear",
                            "${b1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18046",
                            "height",
                            32289,
                            433,
                            "linear",
                            "${spot-difference3a}",
                            '82px',
                            '393px'
                        ],
                        [
                            "eid18143",
                            "height",
                            37013,
                            271,
                            "linear",
                            "${spot-difference3a}",
                            '393px',
                            '82px'
                        ],
                        [
                            "eid18201",
                            "width",
                            37360,
                            164,
                            "linear",
                            "${mainmenu}",
                            '122px',
                            '230px'
                        ],
                        [
                            "eid17683",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17684",
                            "opacity",
                            24000,
                            128,
                            "linear",
                            "${countdown2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17685",
                            "opacity",
                            24425,
                            116,
                            "linear",
                            "${countdown2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17950",
                            "opacity",
                            28753,
                            128,
                            "linear",
                            "${countdown2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17951",
                            "opacity",
                            29178,
                            116,
                            "linear",
                            "${countdown2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18067",
                            "opacity",
                            33792,
                            128,
                            "linear",
                            "${countdown2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18068",
                            "opacity",
                            34217,
                            116,
                            "linear",
                            "${countdown2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17669",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid18166",
                            "opacity",
                            26110,
                            133,
                            "linear",
                            "${countdown4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18167",
                            "opacity",
                            27050,
                            143,
                            "linear",
                            "${countdown4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18173",
                            "opacity",
                            31123,
                            133,
                            "linear",
                            "${countdown4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18172",
                            "opacity",
                            32063,
                            143,
                            "linear",
                            "${countdown4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18179",
                            "opacity",
                            36212,
                            133,
                            "linear",
                            "${countdown4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18178",
                            "opacity",
                            37152,
                            143,
                            "linear",
                            "${countdown4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17927",
                            "height",
                            27250,
                            433,
                            "linear",
                            "${spot-difference2a}",
                            '82px',
                            '393px'
                        ],
                        [
                            "eid18026",
                            "height",
                            31939,
                            256,
                            "linear",
                            "${spot-difference2a}",
                            '393px',
                            '82px'
                        ],
                        [
                            "eid17933",
                            "height",
                            27250,
                            433,
                            "linear",
                            "${spot-difference2b}",
                            '82px',
                            '393px'
                        ],
                        [
                            "eid18032",
                            "height",
                            31939,
                            256,
                            "linear",
                            "${spot-difference2b}",
                            '393px',
                            '82px'
                        ],
                        [
                            "eid18197",
                            "top",
                            37360,
                            164,
                            "linear",
                            "${mainmenu}",
                            '499px',
                            '490px'
                        ],
                        [
                            "eid18247",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18250",
                            "display",
                            35083,
                            0,
                            "linear",
                            "${c3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18253",
                            "display",
                            35145,
                            0,
                            "linear",
                            "${c3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17713",
                            "width",
                            22317,
                            433,
                            "linear",
                            "${spot-difference1a}",
                            '104px',
                            '499px'
                        ],
                        [
                            "eid17910",
                            "width",
                            26857,
                            325,
                            "linear",
                            "${spot-difference1a}",
                            '499px',
                            '104px'
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
                            "eid18209",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${instruction-btn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17688",
                            "top",
                            24750,
                            425,
                            "linear",
                            "${countdown3}",
                            '241px',
                            '133px'
                        ],
                        [
                            "eid17954",
                            "top",
                            29503,
                            425,
                            "linear",
                            "${countdown3}",
                            '241px',
                            '133px'
                        ],
                        [
                            "eid18071",
                            "top",
                            34542,
                            425,
                            "linear",
                            "${countdown3}",
                            '241px',
                            '133px'
                        ],
                        [
                            "eid17740",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spot-difference1b}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17738",
                            "opacity",
                            22317,
                            273,
                            "linear",
                            "${spot-difference1b}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17913",
                            "opacity",
                            26977,
                            205,
                            "linear",
                            "${spot-difference1b}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17987",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picture2-right-select-2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18038",
                            "display",
                            31750,
                            0,
                            "linear",
                            "${picture2-right-select-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17833",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picture1-right-select-2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17921",
                            "display",
                            26617,
                            0,
                            "linear",
                            "${picture1-right-select-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18045",
                            "top",
                            32289,
                            433,
                            "linear",
                            "${spot-difference3a}",
                            '281px',
                            '104px'
                        ],
                        [
                            "eid18142",
                            "top",
                            37013,
                            271,
                            "linear",
                            "${spot-difference3a}",
                            '104px',
                            '281px'
                        ],
                        [
                            "eid17578",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17576",
                            "opacity",
                            2346,
                            79,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18207",
                            "opacity",
                            8095,
                            58,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17690",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17691",
                            "opacity",
                            24750,
                            128,
                            "linear",
                            "${countdown3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17692",
                            "opacity",
                            25175,
                            116,
                            "linear",
                            "${countdown3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17956",
                            "opacity",
                            29503,
                            128,
                            "linear",
                            "${countdown3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17957",
                            "opacity",
                            29928,
                            116,
                            "linear",
                            "${countdown3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18073",
                            "opacity",
                            34542,
                            128,
                            "linear",
                            "${countdown3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18074",
                            "opacity",
                            34967,
                            116,
                            "linear",
                            "${countdown3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17687",
                            "width",
                            24000,
                            425,
                            "linear",
                            "${countdown2}",
                            '69px',
                            '230px'
                        ],
                        [
                            "eid17953",
                            "width",
                            28753,
                            425,
                            "linear",
                            "${countdown2}",
                            '69px',
                            '230px'
                        ],
                        [
                            "eid18070",
                            "width",
                            33792,
                            425,
                            "linear",
                            "${countdown2}",
                            '69px',
                            '230px'
                        ],
                        [
                            "eid13440",
                            "top",
                            0,
                            5047,
                            "linear",
                            "${conf}",
                            '-1px',
                            '-135px'
                        ],
                        [
                            "eid17693",
                            "left",
                            24750,
                            425,
                            "linear",
                            "${countdown3}",
                            '397px',
                            '224px'
                        ],
                        [
                            "eid17958",
                            "left",
                            29503,
                            425,
                            "linear",
                            "${countdown3}",
                            '224px',
                            '223px'
                        ],
                        [
                            "eid18075",
                            "left",
                            34542,
                            425,
                            "linear",
                            "${countdown3}",
                            '397px',
                            '223px'
                        ],
                        [
                            "eid18220",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18214",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${a3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18217",
                            "display",
                            25553,
                            0,
                            "linear",
                            "${a3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17739",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spot-difference1a}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17737",
                            "opacity",
                            22317,
                            273,
                            "linear",
                            "${spot-difference1a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17907",
                            "opacity",
                            26977,
                            205,
                            "linear",
                            "${spot-difference1a}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17679",
                            "left",
                            23250,
                            425,
                            "linear",
                            "${countdown1}",
                            '485px',
                            '370px'
                        ],
                        [
                            "eid17946",
                            "left",
                            28003,
                            425,
                            "linear",
                            "${countdown1}",
                            '485px',
                            '370px'
                        ],
                        [
                            "eid18063",
                            "left",
                            33042,
                            425,
                            "linear",
                            "${countdown1}",
                            '485px',
                            '370px'
                        ],
                        [
                            "eid17680",
                            "width",
                            23250,
                            425,
                            "linear",
                            "${countdown1}",
                            '69px',
                            '230px'
                        ],
                        [
                            "eid17947",
                            "width",
                            28003,
                            425,
                            "linear",
                            "${countdown1}",
                            '69px',
                            '230px'
                        ],
                        [
                            "eid18064",
                            "width",
                            33042,
                            425,
                            "linear",
                            "${countdown1}",
                            '69px',
                            '230px'
                        ],
                        [
                            "eid17689",
                            "height",
                            24750,
                            425,
                            "linear",
                            "${countdown3}",
                            '104px',
                            '278px'
                        ],
                        [
                            "eid17955",
                            "height",
                            29503,
                            425,
                            "linear",
                            "${countdown3}",
                            '104px',
                            '278px'
                        ],
                        [
                            "eid18072",
                            "height",
                            34542,
                            425,
                            "linear",
                            "${countdown3}",
                            '104px',
                            '278px'
                        ],
                        [
                            "eid17742",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17729",
                            "opacity",
                            23000,
                            70,
                            "linear",
                            "${RoundRectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17903",
                            "opacity",
                            26617,
                            53,
                            "linear",
                            "${RoundRectCopy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17940",
                            "opacity",
                            27933,
                            70,
                            "linear",
                            "${RoundRectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18023",
                            "opacity",
                            31750,
                            41,
                            "linear",
                            "${RoundRectCopy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18043",
                            "opacity",
                            32972,
                            70,
                            "linear",
                            "${RoundRectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18140",
                            "opacity",
                            36813,
                            44,
                            "linear",
                            "${RoundRectCopy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17681",
                            "top",
                            24000,
                            425,
                            "linear",
                            "${countdown2}",
                            '283px',
                            '142px'
                        ],
                        [
                            "eid17948",
                            "top",
                            28753,
                            425,
                            "linear",
                            "${countdown2}",
                            '283px',
                            '142px'
                        ],
                        [
                            "eid18065",
                            "top",
                            33792,
                            425,
                            "linear",
                            "${countdown2}",
                            '283px',
                            '142px'
                        ],
                        [
                            "eid17929",
                            "left",
                            27250,
                            433,
                            "linear",
                            "${spot-difference2a}",
                            '288px',
                            '262px'
                        ],
                        [
                            "eid17930",
                            "left",
                            27683,
                            320,
                            "linear",
                            "${spot-difference2a}",
                            '262px',
                            '517px'
                        ],
                        [
                            "eid18029",
                            "left",
                            31750,
                            189,
                            "linear",
                            "${spot-difference2a}",
                            '517px',
                            '262px'
                        ],
                        [
                            "eid18028",
                            "left",
                            31939,
                            256,
                            "linear",
                            "${spot-difference2a}",
                            '262px',
                            '288px'
                        ],
                        [
                            "eid17676",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17677",
                            "opacity",
                            23250,
                            128,
                            "linear",
                            "${countdown1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17678",
                            "opacity",
                            23675,
                            116,
                            "linear",
                            "${countdown1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17944",
                            "opacity",
                            28003,
                            128,
                            "linear",
                            "${countdown1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17945",
                            "opacity",
                            28428,
                            116,
                            "linear",
                            "${countdown1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18061",
                            "opacity",
                            33042,
                            128,
                            "linear",
                            "${countdown1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18062",
                            "opacity",
                            33467,
                            116,
                            "linear",
                            "${countdown1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18165",
                            "height",
                            26110,
                            250,
                            "linear",
                            "${countdown4}",
                            '82px',
                            '243px'
                        ],
                        [
                            "eid18171",
                            "height",
                            31123,
                            250,
                            "linear",
                            "${countdown4}",
                            '82px',
                            '243px'
                        ],
                        [
                            "eid18177",
                            "height",
                            36212,
                            250,
                            "linear",
                            "${countdown4}",
                            '82px',
                            '243px'
                        ],
                        [
                            "eid18056",
                            "width",
                            32289,
                            433,
                            "linear",
                            "${spot-difference3b}",
                            '104px',
                            '499px'
                        ],
                        [
                            "eid18153",
                            "width",
                            37013,
                            271,
                            "linear",
                            "${spot-difference3b}",
                            '499px',
                            '104px'
                        ],
                        [
                            "eid18238",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18232",
                            "display",
                            30044,
                            0,
                            "linear",
                            "${b2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18235",
                            "display",
                            30099,
                            0,
                            "linear",
                            "${b2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17686",
                            "left",
                            24000,
                            425,
                            "linear",
                            "${countdown2}",
                            '485px',
                            '370px'
                        ],
                        [
                            "eid17952",
                            "left",
                            28753,
                            425,
                            "linear",
                            "${countdown2}",
                            '485px',
                            '370px'
                        ],
                        [
                            "eid18069",
                            "left",
                            33792,
                            425,
                            "linear",
                            "${countdown2}",
                            '485px',
                            '370px'
                        ],
                        [
                            "eid18193",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${mainmenu}",
                            '0',
                            '0'
                        ],
                        [
                            "eid18199",
                            "opacity",
                            37360,
                            88,
                            "linear",
                            "${mainmenu}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17741",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17730",
                            "opacity",
                            23000,
                            70,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17904",
                            "opacity",
                            26617,
                            53,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17941",
                            "opacity",
                            27933,
                            70,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18024",
                            "opacity",
                            31750,
                            41,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18044",
                            "opacity",
                            32972,
                            70,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18141",
                            "opacity",
                            36813,
                            44,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.000000'
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
                            8250,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18212",
                            "display",
                            20881,
                            0,
                            "linear",
                            "${instruction}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17715",
                            "left",
                            22317,
                            433,
                            "linear",
                            "${spot-difference1b}",
                            '795px',
                            '254px'
                        ],
                        [
                            "eid17722",
                            "left",
                            22750,
                            320,
                            "linear",
                            "${spot-difference1b}",
                            '254px',
                            '6px'
                        ],
                        [
                            "eid17915",
                            "left",
                            26617,
                            240,
                            "linear",
                            "${spot-difference1b}",
                            '6px',
                            '254px'
                        ],
                        [
                            "eid17914",
                            "left",
                            26857,
                            325,
                            "linear",
                            "${spot-difference1b}",
                            '254px',
                            '795px'
                        ],
                        [
                            "eid18088",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picture3-right-select-1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18156",
                            "display",
                            36813,
                            0,
                            "linear",
                            "${picture3-right-select-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18248",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18251",
                            "display",
                            35083,
                            0,
                            "linear",
                            "${c2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18254",
                            "display",
                            35145,
                            0,
                            "linear",
                            "${c2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17752",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picture1-right-select-1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17920",
                            "display",
                            26617,
                            0,
                            "linear",
                            "${picture1-right-select-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17937",
                            "width",
                            27250,
                            433,
                            "linear",
                            "${spot-difference2b}",
                            '104px',
                            '499px'
                        ],
                        [
                            "eid18036",
                            "width",
                            31939,
                            256,
                            "linear",
                            "${spot-difference2b}",
                            '499px',
                            '104px'
                        ],
                        [
                            "eid18246",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18249",
                            "display",
                            35083,
                            0,
                            "linear",
                            "${c1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18252",
                            "display",
                            35145,
                            0,
                            "linear",
                            "${c1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17675",
                            "height",
                            23250,
                            425,
                            "linear",
                            "${countdown1}",
                            '104px',
                            '348px'
                        ],
                        [
                            "eid17943",
                            "height",
                            28003,
                            425,
                            "linear",
                            "${countdown1}",
                            '104px',
                            '348px'
                        ],
                        [
                            "eid18060",
                            "height",
                            33042,
                            425,
                            "linear",
                            "${countdown1}",
                            '104px',
                            '348px'
                        ],
                        [
                            "eid18169",
                            "width",
                            26110,
                            250,
                            "linear",
                            "${countdown4}",
                            '299px',
                            '886px'
                        ],
                        [
                            "eid18175",
                            "width",
                            31123,
                            250,
                            "linear",
                            "${countdown4}",
                            '299px',
                            '886px'
                        ],
                        [
                            "eid18181",
                            "width",
                            36212,
                            250,
                            "linear",
                            "${countdown4}",
                            '299px',
                            '886px'
                        ],
                        [
                            "eid18051",
                            "top",
                            32289,
                            433,
                            "linear",
                            "${spot-difference3b}",
                            '281px',
                            '104px'
                        ],
                        [
                            "eid18148",
                            "top",
                            37013,
                            271,
                            "linear",
                            "${spot-difference3b}",
                            '104px',
                            '281px'
                        ],
                        [
                            "eid17972",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picture2-right-select-1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18039",
                            "display",
                            31750,
                            0,
                            "linear",
                            "${picture2-right-select-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18200",
                            "left",
                            37360,
                            164,
                            "linear",
                            "${mainmenu}",
                            '443px',
                            '784px'
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
                            2148,
                            198,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16383",
                            "opacity",
                            22500,
                            190,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18157",
                            "opacity",
                            37102,
                            190,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18058",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spot-difference3b}",
                            '0',
                            '0'
                        ],
                        [
                            "eid18053",
                            "opacity",
                            32289,
                            273,
                            "linear",
                            "${spot-difference3b}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18150",
                            "opacity",
                            37113,
                            171,
                            "linear",
                            "${spot-difference3b}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picture3-right-select-3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18119",
                            "display",
                            35083,
                            0,
                            "linear",
                            "${picture3-right-select-3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18154",
                            "display",
                            36813,
                            0,
                            "linear",
                            "${picture3-right-select-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18237",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18231",
                            "display",
                            30044,
                            0,
                            "linear",
                            "${b3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18234",
                            "display",
                            30099,
                            0,
                            "linear",
                            "${b3}",
                            'block',
                            'none'
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
                            2050,
                            98,
                            "linear",
                            "${Text}",
                            '239px',
                            '305px'
                        ],
                        [
                            "eid6746",
                            "top",
                            2148,
                            198,
                            "linear",
                            "${Text}",
                            '305px',
                            '-161px'
                        ],
                        [
                            "eid17866",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picture1-right-select-3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17922",
                            "display",
                            26617,
                            0,
                            "linear",
                            "${picture1-right-select-3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18164",
                            "top",
                            26110,
                            250,
                            "linear",
                            "${countdown4}",
                            '272px',
                            '174px'
                        ],
                        [
                            "eid18170",
                            "top",
                            31123,
                            250,
                            "linear",
                            "${countdown4}",
                            '272px',
                            '174px'
                        ],
                        [
                            "eid18176",
                            "top",
                            36212,
                            250,
                            "linear",
                            "${countdown4}",
                            '272px',
                            '174px'
                        ],
                        [
                            "eid17932",
                            "top",
                            27250,
                            433,
                            "linear",
                            "${spot-difference2b}",
                            '467px',
                            '104px'
                        ],
                        [
                            "eid18031",
                            "top",
                            31939,
                            256,
                            "linear",
                            "${spot-difference2b}",
                            '104px',
                            '467px'
                        ],
                        [
                            "eid18221",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18215",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${a2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18218",
                            "display",
                            25553,
                            0,
                            "linear",
                            "${a2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17682",
                            "height",
                            24000,
                            425,
                            "linear",
                            "${countdown2}",
                            '104px',
                            '348px'
                        ],
                        [
                            "eid17949",
                            "height",
                            28753,
                            425,
                            "linear",
                            "${countdown2}",
                            '104px',
                            '348px'
                        ],
                        [
                            "eid18066",
                            "height",
                            33792,
                            425,
                            "linear",
                            "${countdown2}",
                            '104px',
                            '348px'
                        ],
                        [
                            "eid17939",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spot-difference2b}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17934",
                            "opacity",
                            27250,
                            273,
                            "linear",
                            "${spot-difference2b}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18033",
                            "opacity",
                            32034,
                            161,
                            "linear",
                            "${spot-difference2b}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18002",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picture2-right-select-3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18037",
                            "display",
                            31750,
                            0,
                            "linear",
                            "${picture2-right-select-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18103",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picture3-right-select-2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18155",
                            "display",
                            36813,
                            0,
                            "linear",
                            "${picture3-right-select-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18227",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-resultCorrectCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17565",
                            "top",
                            2346,
                            131,
                            "linear",
                            "${Text2}",
                            '-142px',
                            '156px'
                        ],
                        [
                            "eid17567",
                            "top",
                            2477,
                            79,
                            "linear",
                            "${Text2}",
                            '156px',
                            '49px'
                        ],
                        [
                            "eid18202",
                            "top",
                            8000,
                            57,
                            "linear",
                            "${Text2}",
                            '49px',
                            '156px'
                        ],
                        [
                            "eid18203",
                            "top",
                            8057,
                            95,
                            "linear",
                            "${Text2}",
                            '156px',
                            '-142px'
                        ],
                            [ "eid16388", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction-btn2}', [] ] ],
                            [ "eid17988", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture2-right-select-2}', [] ] ],
                            [ "eid18003", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture2-right-select-3}', [] ] ],
                            [ "eid18228", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-resultCorrectCopy}', [] ] ],
                            [ "eid17841", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture1-right-select-2}', [] ] ],
                            [ "eid17973", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture2-right-select-1}', [] ] ],
                            [ "eid18090", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture3-right-select-1}', [] ] ],
                            [ "eid17806", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture1-right-select-1}', [] ] ],
                            [ "eid18105", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture3-right-select-2}', [] ] ],
                            [ "eid17868", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture1-right-select-3}', [] ] ],
                            [ "eid16389", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid18120", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture3-right-select-3}', [] ] ],
                            [ "eid17746", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${timer}', [] ] ],
                            [ "eid16391", "trigger", 8250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ],
                            [ "eid18211", "trigger", 8250.4571055859, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction-btn2}', [] ] ],
                            [ "eid17747", "trigger", 25079.996576496, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${timer}', [] ] ],
                            [ "eid17925", "trigger", 26617, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture1-right-select-2}', [] ] ],
                            [ "eid17923", "trigger", 26617, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture1-right-select-3}', [] ] ],
                            [ "eid17924", "trigger", 26617, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture1-right-select-1}', [] ] ],
                            [ "eid18042", "trigger", 31750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture2-right-select-3}', [] ] ],
                            [ "eid18040", "trigger", 31750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture2-right-select-1}', [] ] ],
                            [ "eid18041", "trigger", 31750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture2-right-select-2}', [] ] ],
                            [ "eid18190", "trigger", 36813, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${timer}', [] ] ],
                            [ "eid18189", "trigger", 36813, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture3-right-select-1}', [] ] ],
                            [ "eid18188", "trigger", 36813, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture3-right-select-3}', [] ] ],
                            [ "eid18187", "trigger", 36813, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture3-right-select-2}', [] ] ]
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
                            opacity: '0',
                            rect: ['30px', '9px', '240px', '39px', 'auto', 'auto'],
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
                            rect: ['141px', '-357px', '876px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon2.png', '0px', '0px']
                        },
                        {
                            rect: ['181px', '-342px', '787px', '46px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text',
                            text: 'At a glance, these 2 images seem identical.',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['772px', '-221px', '155px', '46px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'TextCopy2',
                            text: 'areas. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['207px', '-221px', '514px', '46px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'TextCopy4',
                            text: 'Your task is to identify these',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            rect: ['148px', '-303px', '525px', '37px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'TextCopy3',
                            text: 'The one on the right contains',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            rect: ['680px', '-314px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,92,211,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            opacity: '0.000000',
                            id: 'Text3',
                            text: '3',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['731px', '-228px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,92,211,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            opacity: '0.000000',
                            id: 'Text3Copy',
                            text: '3',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['717px', '-303px', '244px', '37px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'TextCopy5',
                            text: 'areas which ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['231px', '-262px', '679px', '37px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'TextCopy',
                            text: 'have been altered / manipulated.',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1008px', '222px']
                        }
                    }
                },
                timeline: {
                    duration: 3269,
                    autoPlay: true,
                    data: [
                        [
                            "eid8785",
                            "top",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '-351px',
                            '-357px'
                        ],
                        [
                            "eid17662",
                            "top",
                            3049,
                            220,
                            "linear",
                            "${narrator-text-balloon}",
                            '-357px',
                            '-351px'
                        ],
                        [
                            "eid17614",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17613",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17653",
                            "opacity",
                            3000,
                            90,
                            "linear",
                            "${Text3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17652",
                            "opacity",
                            3269,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
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
                            "eid17661",
                            "opacity",
                            3000,
                            90,
                            "linear",
                            "${Text}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17660",
                            "opacity",
                            3269,
                            0,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid8787",
                            "width",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '187px',
                            '876px'
                        ],
                        [
                            "eid17666",
                            "width",
                            3049,
                            220,
                            "linear",
                            "${narrator-text-balloon}",
                            '876px',
                            '187px'
                        ],
                        [
                            "eid18257",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid18258",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${TextCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18259",
                            "opacity",
                            3000,
                            90,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18260",
                            "opacity",
                            3269,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid8786",
                            "height",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '57px',
                            '211px'
                        ],
                        [
                            "eid17663",
                            "height",
                            3049,
                            220,
                            "linear",
                            "${narrator-text-balloon}",
                            '211px',
                            '57px'
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
                            "eid17664",
                            "opacity",
                            3133,
                            136,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17594",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17595",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${TextCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17657",
                            "opacity",
                            3000,
                            90,
                            "linear",
                            "${TextCopy3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17656",
                            "opacity",
                            3269,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid18261",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid18262",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${TextCopy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18263",
                            "opacity",
                            3000,
                            90,
                            "linear",
                            "${TextCopy4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18264",
                            "opacity",
                            3269,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid17590",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17591",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${TextCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17659",
                            "opacity",
                            3000,
                            90,
                            "linear",
                            "${TextCopy2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17658",
                            "opacity",
                            3269,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid17618",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17619",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${Text3Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17651",
                            "opacity",
                            3000,
                            90,
                            "linear",
                            "${Text3Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17650",
                            "opacity",
                            3269,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17602",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17603",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${TextCopy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17649",
                            "opacity",
                            3000,
                            90,
                            "linear",
                            "${TextCopy5}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17648",
                            "opacity",
                            3269,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid8784",
                            "left",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '5px',
                            '141px'
                        ],
                        [
                            "eid17665",
                            "left",
                            3049,
                            220,
                            "linear",
                            "${narrator-text-balloon}",
                            '141px',
                            '5px'
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
                            text: '00:45',
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
            "wrong-select": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'wrong-select',
                            type: 'image',
                            rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '56px', '56px']
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
            "picture1-right-selects": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-54px', '-40px', '19px', '19px', 'auto', 'auto'],
                            id: 'right-select',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['-660px', '271px', '1003px', '69px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'RoundRect2Copy',
                            opacity: '0.000000',
                            type: 'rect',
                            fill: ['rgba(143,192,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['-613px', '287px', '927px', '42px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4',
                            text: 'Incorrect perspective lines.',
                            opacity: '0.000000',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '56px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 2080,
                    autoPlay: true,
                    data: [
                        [
                            "eid17762",
                            "top",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '-40px',
                            '-67px'
                        ],
                        [
                            "eid17761",
                            "height",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17763",
                            "width",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17764",
                            "left",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '-54px',
                            '-74px'
                        ],
                        [
                            "eid17768",
                            "opacity",
                            0,
                            59,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17900",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17901",
                            "opacity",
                            121,
                            80,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17902",
                            "opacity",
                            2000,
                            80,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17790",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17789",
                            "opacity",
                            152,
                            49,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17798",
                            "opacity",
                            2000,
                            49,
                            "linear",
                            "${Text4}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            },
            "picture1-right-select-2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['38px', '0px', '19px', '19px', 'auto', 'auto'],
                            id: 'right-select',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['-881px', '280px', '1003px', '69px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'RoundRect2',
                            opacity: '0.000000',
                            type: 'rect',
                            fill: ['rgba(143,192,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['-805px', '297px', '885px', '42px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4',
                            text: 'No reflection.',
                            opacity: '0.000000',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '111px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 2080,
                    autoPlay: true,
                    data: [
                        [
                            "eid17897",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17898",
                            "opacity",
                            121,
                            80,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17899",
                            "opacity",
                            2000,
                            80,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17828",
                            "height",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17831",
                            "width",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17830",
                            "left",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '38px',
                            '17px'
                        ],
                        [
                            "eid17829",
                            "opacity",
                            0,
                            59,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17827",
                            "top",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '0px',
                            '-18px'
                        ],
                        [
                            "eid17811",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17812",
                            "opacity",
                            152,
                            49,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17813",
                            "opacity",
                            2000,
                            49,
                            "linear",
                            "${Text4}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            },
            "picture1-right-select-3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['46px', '60px', '19px', '19px', 'auto', 'auto'],
                            id: 'right-selectCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['-881px', '182px', '1003px', '69px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'RoundRect2',
                            opacity: '0.000000',
                            type: 'rect',
                            fill: ['rgba(143,192,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['-831px', '197px', '907px', '44px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4Copy',
                            text: 'Different direction of shadow.',
                            opacity: '0.000000',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '111px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 2080,
                    autoPlay: true,
                    data: [
                        [
                            "eid17896",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17894",
                            "opacity",
                            121,
                            80,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17895",
                            "opacity",
                            2000,
                            80,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17845",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17846",
                            "opacity",
                            152,
                            49,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17847",
                            "opacity",
                            2000,
                            49,
                            "linear",
                            "${Text4Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17861",
                            "top",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy}",
                            '60px',
                            '46px'
                        ],
                        [
                            "eid17864",
                            "left",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy}",
                            '46px',
                            '33px'
                        ],
                        [
                            "eid17862",
                            "height",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17865",
                            "width",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17863",
                            "opacity",
                            0,
                            59,
                            "linear",
                            "${right-selectCopy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "picture2-right-select-1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['606px', '111px', '19px', '19px', 'auto', 'auto'],
                            id: 'right-selectCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '311px', '1003px', '69px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'RoundRect2Copy2',
                            opacity: '0.000000',
                            type: 'rect',
                            fill: ['rgba(143,192,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['47px', '327px', '927px', '42px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4Copy2',
                            text: 'No reflection.',
                            opacity: '0.000000',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1007px', '384px']
                        }
                    }
                },
                timeline: {
                    duration: 2080,
                    autoPlay: true,
                    data: [
                        [
                            "eid17967",
                            "height",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy2}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17960",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17961",
                            "opacity",
                            152,
                            49,
                            "linear",
                            "${Text4Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17962",
                            "opacity",
                            2000,
                            49,
                            "linear",
                            "${Text4Copy2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17966",
                            "top",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy2}",
                            '111px',
                            '88px'
                        ],
                        [
                            "eid17963",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17964",
                            "opacity",
                            121,
                            80,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17965",
                            "opacity",
                            2000,
                            80,
                            "linear",
                            "${RoundRect2Copy2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17969",
                            "left",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy2}",
                            '606px',
                            '586px'
                        ],
                        [
                            "eid17970",
                            "width",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy2}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17968",
                            "opacity",
                            0,
                            59,
                            "linear",
                            "${right-selectCopy2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "picture2-right-select-2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['923px', '137px', '19px', '19px', 'auto', 'auto'],
                            id: 'right-selectCopy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '200px', '1003px', '69px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'RoundRect2Copy3',
                            opacity: '0.000000',
                            type: 'rect',
                            fill: ['rgba(143,192,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['47px', '216px', '927px', '42px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4Copy3',
                            text: 'Light and shadow in the wrong direction.',
                            opacity: '0.000000',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1007px', '273px']
                        }
                    }
                },
                timeline: {
                    duration: 2080,
                    autoPlay: true,
                    data: [
                        [
                            "eid17985",
                            "width",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy3}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17984",
                            "left",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy3}",
                            '923px',
                            '910px'
                        ],
                        [
                            "eid17981",
                            "top",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy3}",
                            '137px',
                            '129px'
                        ],
                        [
                            "eid17982",
                            "height",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy3}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17983",
                            "opacity",
                            0,
                            59,
                            "linear",
                            "${right-selectCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17978",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17979",
                            "opacity",
                            121,
                            80,
                            "linear",
                            "${RoundRect2Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17980",
                            "opacity",
                            2000,
                            80,
                            "linear",
                            "${RoundRect2Copy3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17975",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17976",
                            "opacity",
                            152,
                            49,
                            "linear",
                            "${Text4Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17977",
                            "opacity",
                            2000,
                            49,
                            "linear",
                            "${Text4Copy3}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            },
            "picture2-right-select-3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['925px', '-296px', '19px', '19px', 'auto', 'auto'],
                            id: 'right-selectCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '63px', '1003px', '69px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'RoundRect2Copy4',
                            opacity: '0.000000',
                            type: 'rect',
                            fill: ['rgba(143,192,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['47px', '79px', '927px', '42px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4Copy4',
                            text: 'Copied and pasted area.',
                            opacity: '0.000000',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1007px', '136px']
                        }
                    }
                },
                timeline: {
                    duration: 2080,
                    autoPlay: true,
                    data: [
                        [
                            "eid18000",
                            "width",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy4}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17998",
                            "opacity",
                            0,
                            59,
                            "linear",
                            "${right-selectCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17990",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17991",
                            "opacity",
                            152,
                            49,
                            "linear",
                            "${Text4Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17992",
                            "opacity",
                            2000,
                            49,
                            "linear",
                            "${Text4Copy4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17993",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17994",
                            "opacity",
                            121,
                            80,
                            "linear",
                            "${RoundRect2Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17995",
                            "opacity",
                            2000,
                            80,
                            "linear",
                            "${RoundRect2Copy4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17997",
                            "height",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy4}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid17996",
                            "top",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy4}",
                            '-296px',
                            '-319px'
                        ],
                        [
                            "eid17999",
                            "left",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy4}",
                            '925px',
                            '909px'
                        ]
                    ]
                }
            },
            "picture3-right-select-1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['626px', '158px', '19px', '19px', 'auto', 'auto'],
                            id: 'right-select',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '359px', '1003px', '69px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'RoundRect2',
                            opacity: '0.000000',
                            type: 'rect',
                            fill: ['rgba(143,192,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['47px', '375px', '927px', '42px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4',
                            text: 'Out-of-place pixels that look like a halo.',
                            opacity: '0.000000',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1007px', '432px']
                        }
                    }
                },
                timeline: {
                    duration: 2080,
                    autoPlay: true,
                    data: [
                        [
                            "eid18083",
                            "top",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '158px',
                            '144px'
                        ],
                        [
                            "eid18084",
                            "height",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid18087",
                            "width",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid18086",
                            "left",
                            0,
                            121,
                            "linear",
                            "${right-select}",
                            '626px',
                            '606px'
                        ],
                        [
                            "eid18085",
                            "opacity",
                            0,
                            59,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18080",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid18081",
                            "opacity",
                            121,
                            80,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18082",
                            "opacity",
                            2000,
                            80,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18077",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid18078",
                            "opacity",
                            152,
                            49,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18079",
                            "opacity",
                            2000,
                            49,
                            "linear",
                            "${Text4}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            },
            "picture3-right-select-2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['793px', '137px', '19px', '19px', 'auto', 'auto'],
                            id: 'right-selectCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '201px', '1003px', '69px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'RoundRect2Copy',
                            opacity: '0.000000',
                            type: 'rect',
                            fill: ['rgba(143,192,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['47px', '217px', '927px', '42px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4Copy',
                            text: 'Lack of shadow.',
                            opacity: '0.000000',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1007px', '274px']
                        }
                    }
                },
                timeline: {
                    duration: 2080,
                    autoPlay: true,
                    data: [
                        [
                            "eid18092",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid18093",
                            "opacity",
                            152,
                            49,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18094",
                            "opacity",
                            2000,
                            49,
                            "linear",
                            "${Text4Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18101",
                            "left",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy}",
                            '793px',
                            '774px'
                        ],
                        [
                            "eid18098",
                            "top",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy}",
                            '137px',
                            '122px'
                        ],
                        [
                            "eid18095",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid18096",
                            "opacity",
                            121,
                            80,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18097",
                            "opacity",
                            2000,
                            80,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18099",
                            "height",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid18102",
                            "width",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid18100",
                            "opacity",
                            0,
                            59,
                            "linear",
                            "${right-selectCopy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "picture3-right-select-3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['837px', '-173px', '19px', '19px', 'auto', 'auto'],
                            id: 'right-selectCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '201px', '1003px', '69px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'RoundRect2Copy2',
                            opacity: '0.000000',
                            type: 'rect',
                            fill: ['rgba(143,192,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['38px', '217px', '927px', '42px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4Copy2',
                            text: 'Clone tool marks left behind.',
                            opacity: '0.000000',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1007px', '274px']
                        }
                    }
                },
                timeline: {
                    duration: 2080,
                    autoPlay: true,
                    data: [
                        [
                            "eid18114",
                            "height",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy2}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid18115",
                            "opacity",
                            0,
                            59,
                            "linear",
                            "${right-selectCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18116",
                            "left",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy2}",
                            '837px',
                            '818px'
                        ],
                        [
                            "eid18110",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid18111",
                            "opacity",
                            121,
                            80,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18112",
                            "opacity",
                            2000,
                            80,
                            "linear",
                            "${RoundRect2Copy2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18113",
                            "top",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy2}",
                            '-173px',
                            '-192px'
                        ],
                        [
                            "eid18117",
                            "width",
                            0,
                            121,
                            "linear",
                            "${right-selectCopy2}",
                            '19px',
                            '56px'
                        ],
                        [
                            "eid18107",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid18108",
                            "opacity",
                            152,
                            49,
                            "linear",
                            "${Text4Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18109",
                            "opacity",
                            2000,
                            49,
                            "linear",
                            "${Text4Copy2}",
                            '1',
                            '0.000000'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("5_edgeActions.js");
})("EDGE-1646797");
