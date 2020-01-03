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
                            id: 'Rectangle2',
                            display: 'block',
                            type: 'rect',
                            rect: ['-14px', '-18px', '1065px', '616px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.70)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'picture',
                            symbolName: 'picture',
                            display: 'none',
                            type: 'rect',
                            rect: ['-15px', '32px', '815', '551', 'auto', 'auto'],
                            transform: [[],[],[],['0.95337','0.95337']]
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
                            rect: ['88px', '-175px', '838px', '177px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Conflict and Obstacles",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(0,101,232,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'gin-up-arm-back',
                            type: 'image',
                            rect: ['568px', '385px', '74px', '169px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-up-arm-back.png",'0px','0px'],
                            transform: [[],['-7']]
                        },
                        {
                            id: 'gin-body',
                            type: 'image',
                            rect: ['416px', '299px', '216px', '401px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-body.png",'0px','0px']
                        },
                        {
                            id: 'gin-up-arm-front',
                            type: 'image',
                            rect: ['406px', '392px', '70px', '166px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-up-arm-front.png",'0px','0px']
                        },
                        {
                            id: 'gin-low-arm-front',
                            type: 'image',
                            rect: ['478px', '409px', '67px', '147px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-low-arm-front.png",'0px','0px'],
                            transform: [[],['-125']]
                        },
                        {
                            id: 'gin-hand-pencil',
                            type: 'image',
                            rect: ['533px', '356px', '117px', '109px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-hand-pencil.png",'0px','0px'],
                            transform: [[],['-18']]
                        },
                        {
                            id: 'gin-side',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-side.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-blink2',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-blink2.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-smile-side',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-smile-side.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-blink1',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-blink1.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-speak-side',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-speak-side.png",'0px','0px'],
                            transform: [[],['-10']]
                        },
                        {
                            id: 'gin-sad1',
                            type: 'image',
                            rect: ['386px', '110px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-sad1.png",'0px','0px'],
                            transform: [[],['1']]
                        },
                        {
                            id: 'nath-up-arm-back',
                            type: 'image',
                            rect: ['768px', '367px', '70px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-up-arm-back.png",'0px','0px'],
                            transform: [[],['2']]
                        },
                        {
                            id: 'nath-body',
                            type: 'image',
                            rect: ['788px', '301px', '213px', '293px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-body.png",'0px','0px'],
                            transform: [[],['-5']]
                        },
                        {
                            id: 'nath-side',
                            type: 'image',
                            rect: ['733px', '74px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-side.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-blink',
                            type: 'image',
                            rect: ['733px', '74px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-blink.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-sad2',
                            type: 'image',
                            rect: ['743px', '85px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-sad2.png",'0px','0px'],
                            transform: [[],['1']]
                        },
                        {
                            id: 'nath-speak-side',
                            type: 'image',
                            rect: ['733px', '74px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-speak-side.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-up-arm-front',
                            type: 'image',
                            rect: ['930px', '361px', '102px', '179px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-up-arm-front.png",'0px','0px'],
                            transform: [[],['-1']]
                        },
                        {
                            id: 'nath-low-arm-front',
                            type: 'image',
                            rect: ['891px', '432px', '51px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-low-arm-front.png",'0px','0px'],
                            transform: [[],['136']]
                        },
                        {
                            id: 'nath-hand-write',
                            type: 'image',
                            rect: ['852px', '437px', '152px', '113px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-hand-write.png",'0px','0px'],
                            transform: [[],['6']]
                        },
                        {
                            id: 'library-table',
                            type: 'image',
                            rect: ['220px', '241px', '950px', '371px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"library-table2.png",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['57px', '57px', '312px', '363px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Ginette has been trying to write a story for a competition, but she’s feeling a little stuck.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['57px', '70px', '312px', '168px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Could you help her put a story together? ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'next-btn',
                            type: 'image',
                            rect: ['793px', '500px', '152px', '49px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"next-btn.png",'0px','0px']
                        },
                        {
                            id: 'balloon2',
                            type: 'image',
                            rect: ['762px', '371px', '102px', '79px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"balloon2.png",'0px','0px'],
                            transform: [[],['-90'],[],['0.67664','1.81743']]
                        },
                        {
                            id: 'balloon22',
                            type: 'image',
                            rect: ['68px', '363px', '428px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"balloon2.png",'0px','0px']
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['336px', '391px', '344px', '87px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Ginette, there’s so much happening in this picture.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(0, 101, 232)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text4Copy',
                            type: 'text',
                            rect: ['336px', '391px', '312px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            text: "I don’t know what to do next!",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(0, 101, 232)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['260px', '324px', '216px', '104px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Hmm, let me see. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text5Copy',
                            type: 'text',
                            rect: ['260px', '324px', '216px', '140px', 'auto', 'auto'],
                            opacity: '0',
                            text: "I usually try to add Conflict.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['472px', '408px', '216px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            text: "What’s that?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['258px', '302px', '232px', '189px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Conflict is a problem that can make your story more exciting.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text7Copy',
                            type: 'text',
                            rect: ['163px', '277px', '243px', '222px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Look at the picture and think about all the events that could go wrong.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'box-group',
                            symbolName: 'box-group',
                            type: 'rect',
                            rect: ['764', '171', '256', '382', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'timer',
                            symbolName: 'timer',
                            display: 'none',
                            type: 'rect',
                            rect: ['869', '6', '150', '75', 'auto', 'auto']
                        },
                        {
                            id: 'progress-bar',
                            symbolName: 'progress-bar',
                            display: 'none',
                            type: 'rect',
                            rect: ['8', '534', '668', '35', 'auto', 'auto']
                        },
                        {
                            id: 'instruction',
                            symbolName: 'instruction',
                            display: 'none',
                            type: 'rect',
                            rect: ['16', '263px', '1008', '222', 'auto', 'auto']
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
                            id: 'answer1',
                            symbolName: 'answer1',
                            type: 'rect',
                            rect: ['151px', '98px', '488', '416', 'auto', 'auto'],
                            userClass: "answers"
                        },
                        {
                            id: 'answer2',
                            symbolName: 'answer2',
                            type: 'rect',
                            rect: ['151px', '98px', '488', '416', 'auto', 'auto'],
                            userClass: "answers"
                        },
                        {
                            id: 'answer3',
                            symbolName: 'answer3',
                            type: 'rect',
                            rect: ['151px', '98px', '488', '416', 'auto', 'auto'],
                            userClass: "answers"
                        },
                        {
                            id: 'answer4',
                            symbolName: 'answer4',
                            type: 'rect',
                            rect: ['151px', '98px', '488', '416', 'auto', 'auto'],
                            userClass: "answers"
                        },
                        {
                            id: 'answer5',
                            symbolName: 'answer5',
                            type: 'rect',
                            rect: ['151px', '98px', '488', '416', 'auto', 'auto'],
                            userClass: "answers"
                        },
                        {
                            id: 'countdown4',
                            type: 'image',
                            rect: ['294px', '272px', '299px', '82px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown4.png",'0px','0px']
                        },
                        {
                            id: 'RoundRect5',
                            display: 'block',
                            type: 'rect',
                            rect: ['-10px', '-7px', '1040px', '592px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.69)"],
                            stroke: [3,"rgb(51, 51, 51)","none"]
                        },
                        {
                            id: 'mainmenu',
                            type: 'image',
                            rect: ['801px', '492px', '216px', '70px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'well-done2',
                            symbolName: 'well-done',
                            type: 'rect',
                            rect: ['146', '133', '732', '259', 'auto', 'auto'],
                            userClass: "feedbacks"
                        },
                        {
                            id: 'decent',
                            symbolName: 'decent',
                            type: 'rect',
                            rect: ['58', '145', '904', '247', 'auto', 'auto'],
                            userClass: "feedbacks"
                        },
                        {
                            id: 'oops',
                            symbolName: 'oops',
                            type: 'rect',
                            rect: ['148px', '126', '732', '266', 'auto', 'auto'],
                            userClass: "feedbacks"
                        },
                        {
                            id: 'startgame-btn',
                            display: 'none',
                            type: 'image',
                            rect: ['380px', '472px', '237px', '77px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"startgame-btn.png",'0px','0px']
                        },
                        {
                            id: 'instruction-btn2',
                            symbolName: 'instruction-btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['-28px', '-2px', '300', '104', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.78846','0.78846']]
                        },
                        {
                            id: 't1',
                            display: 'none',
                            type: 'rect',
                            rect: ['258px', '204px', '67px', '104px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [3,"rgb(51, 51, 51)","none"]
                        },
                        {
                            id: 't2',
                            display: 'none',
                            type: 'rect',
                            rect: ['461px', '445px', '160px', '93px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [3,"rgb(51, 51, 51)","none"]
                        },
                        {
                            id: 't3',
                            display: 'none',
                            type: 'rect',
                            rect: ['615px', '115px', '70px', '63px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [3,"rgb(51, 51, 51)","none"]
                        },
                        {
                            id: 't4',
                            display: 'none',
                            type: 'rect',
                            rect: ['455px', '84px', '130px', '104px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [3,"rgb(51, 51, 51)","none"]
                        },
                        {
                            id: 't5',
                            display: 'none',
                            type: 'rect',
                            rect: ['86px', '156px', '137px', '104px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [3,"rgb(51, 51, 51)","none"]
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
                    duration: 36447,
                    autoPlay: true,
                    labels: {
                        "start": 28950,
                        "timeup": 35379,
                        "result": 36035
                    },
                    data: [
                        [
                            "eid10400",
                            "rotateZ",
                            4602,
                            188,
                            "linear",
                            "${gin-blink2}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid11114",
                            "rotateZ",
                            12266,
                            263,
                            "linear",
                            "${gin-blink2}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid13203",
                            "left",
                            8298,
                            99,
                            "linear",
                            "${nath-sad2}",
                            '743px',
                            '718px'
                        ],
                        [
                            "eid13204",
                            "left",
                            8500,
                            0,
                            "linear",
                            "${nath-sad2}",
                            '718px',
                            '718px'
                        ],
                        [
                            "eid13574",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${nath-sad2}",
                            '718px',
                            '1510px'
                        ],
                        [
                            "eid10408",
                            "top",
                            4602,
                            188,
                            "linear",
                            "${gin-speak-side}",
                            '120px',
                            '128px'
                        ],
                        [
                            "eid11100",
                            "top",
                            12266,
                            263,
                            "linear",
                            "${gin-speak-side}",
                            '128px',
                            '113px'
                        ],
                        [
                            "eid13271",
                            "top",
                            12578,
                            0,
                            "linear",
                            "${gin-speak-side}",
                            '110px',
                            '110px'
                        ],
                        [
                            "eid10942",
                            "top",
                            3782,
                            139,
                            "linear",
                            "${nath-low-arm-front}",
                            '508px',
                            '429px'
                        ],
                        [
                            "eid13679",
                            "width",
                            30450,
                            425,
                            "linear",
                            "${countdown3}",
                            '203px',
                            '543px'
                        ],
                        [
                            "eid13886",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13881",
                            "display",
                            30991,
                            0,
                            "linear",
                            "${t2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13891",
                            "display",
                            31059,
                            0,
                            "linear",
                            "${t2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10322",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-low-arm-front}",
                            '-309px',
                            '410px'
                        ],
                        [
                            "eid10921",
                            "left",
                            3679,
                            152,
                            "linear",
                            "${gin-low-arm-front}",
                            '410px',
                            '438px'
                        ],
                        [
                            "eid13404",
                            "left",
                            18793,
                            307,
                            "linear",
                            "${gin-low-arm-front}",
                            '438px',
                            '478px'
                        ],
                        [
                            "eid13572",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-low-arm-front}",
                            '478px',
                            '1270px'
                        ],
                        [
                            "eid10318",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-up-arm-front}",
                            '-304px',
                            '406px'
                        ],
                        [
                            "eid13575",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-up-arm-front}",
                            '406px',
                            '1198px'
                        ],
                        [
                            "eid13675",
                            "height",
                            30450,
                            425,
                            "linear",
                            "${countdown3}",
                            '104px',
                            '278px'
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
                            "eid13223",
                            "opacity",
                            9042,
                            115,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13222",
                            "opacity",
                            9224,
                            102,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13219",
                            "opacity",
                            9465,
                            192,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13901",
                            "opacity",
                            9766,
                            115,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13902",
                            "opacity",
                            9948,
                            102,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13903",
                            "opacity",
                            10189,
                            192,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13904",
                            "opacity",
                            10461,
                            115,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13905",
                            "opacity",
                            10643,
                            102,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13906",
                            "opacity",
                            10884,
                            192,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13907",
                            "opacity",
                            11132,
                            115,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13908",
                            "opacity",
                            11314,
                            102,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13909",
                            "opacity",
                            11555,
                            192,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13221",
                            "opacity",
                            11747,
                            30,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13224",
                            "opacity",
                            11916,
                            99,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13225",
                            "opacity",
                            12067,
                            115,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13226",
                            "opacity",
                            12249,
                            102,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13273",
                            "opacity",
                            12578,
                            99,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13326",
                            "opacity",
                            15615,
                            115,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13327",
                            "opacity",
                            15797,
                            102,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13328",
                            "opacity",
                            16038,
                            192,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13329",
                            "opacity",
                            16230,
                            159,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13330",
                            "opacity",
                            16389,
                            103,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13331",
                            "opacity",
                            16631,
                            99,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13332",
                            "opacity",
                            16850,
                            99,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13333",
                            "opacity",
                            17001,
                            115,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13334",
                            "opacity",
                            17183,
                            102,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13335",
                            "opacity",
                            17424,
                            192,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13336",
                            "opacity",
                            17616,
                            159,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13337",
                            "opacity",
                            17775,
                            103,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13338",
                            "opacity",
                            18017,
                            99,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13341",
                            "opacity",
                            18358,
                            99,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13342",
                            "opacity",
                            18509,
                            115,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13343",
                            "opacity",
                            18691,
                            102,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13344",
                            "opacity",
                            18932,
                            192,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13345",
                            "opacity",
                            19124,
                            159,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13346",
                            "opacity",
                            19283,
                            103,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13347",
                            "opacity",
                            19525,
                            99,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13348",
                            "opacity",
                            19744,
                            99,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13349",
                            "opacity",
                            19895,
                            115,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13350",
                            "opacity",
                            20077,
                            102,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13351",
                            "opacity",
                            20318,
                            192,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13352",
                            "opacity",
                            20510,
                            159,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13353",
                            "opacity",
                            20669,
                            103,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13354",
                            "opacity",
                            20911,
                            99,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13384",
                            "opacity",
                            21163,
                            192,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13385",
                            "opacity",
                            21355,
                            159,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13386",
                            "opacity",
                            21514,
                            103,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13387",
                            "opacity",
                            21756,
                            99,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13258",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13251",
                            "opacity",
                            8974,
                            68,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13259",
                            "opacity",
                            11712,
                            68,
                            "linear",
                            "${Text5}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10227",
                            "top",
                            0,
                            3107,
                            "linear",
                            "${bookshop}",
                            '-4px',
                            '-87px'
                        ],
                        [
                            "eid13850",
                            "width",
                            35450,
                            250,
                            "linear",
                            "${countdown4}",
                            '299px',
                            '886px'
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
                            2824,
                            97,
                            "linear",
                            "${library-table}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13662",
                            "top",
                            28950,
                            425,
                            "linear",
                            "${countdown1}",
                            '283px',
                            '142px'
                        ],
                        [
                            "eid11146",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13673",
                            "width",
                            29700,
                            425,
                            "linear",
                            "${countdown2}",
                            '69px',
                            '230px'
                        ],
                        [
                            "eid13116",
                            "height",
                            4191,
                            207,
                            "linear",
                            "${balloon2}",
                            '79px',
                            '383px'
                        ],
                        [
                            "eid13187",
                            "height",
                            7927,
                            207,
                            "linear",
                            "${balloon2}",
                            '383px',
                            '79px'
                        ],
                        [
                            "eid13300",
                            "height",
                            13660,
                            207,
                            "linear",
                            "${balloon2}",
                            '79px',
                            '256px'
                        ],
                        [
                            "eid13301",
                            "height",
                            15100,
                            207,
                            "linear",
                            "${balloon2}",
                            '256px',
                            '79px'
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
                            3233,
                            114,
                            "linear",
                            "${nath-up-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13119",
                            "width",
                            4191,
                            207,
                            "linear",
                            "${balloon2}",
                            '102px',
                            '355px'
                        ],
                        [
                            "eid13190",
                            "width",
                            7927,
                            207,
                            "linear",
                            "${balloon2}",
                            '355px',
                            '102px'
                        ],
                        [
                            "eid13306",
                            "width",
                            13660,
                            207,
                            "linear",
                            "${balloon2}",
                            '102px',
                            '355px'
                        ],
                        [
                            "eid13307",
                            "width",
                            15100,
                            207,
                            "linear",
                            "${balloon2}",
                            '355px',
                            '102px'
                        ],
                        [
                            "eid13133",
                            "left",
                            4331,
                            67,
                            "linear",
                            "${Text4}",
                            '336px',
                            '227px'
                        ],
                        [
                            "eid11366",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13684",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${box-group}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13683",
                            "opacity",
                            24331,
                            369,
                            "linear",
                            "${box-group}",
                            '0.000000',
                            '1'
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
                            2733,
                            139,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10297",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-low-arm-front}",
                            '1279px',
                            '962px'
                        ],
                        [
                            "eid10941",
                            "left",
                            3782,
                            139,
                            "linear",
                            "${nath-low-arm-front}",
                            '962px',
                            '891px'
                        ],
                        [
                            "eid13567",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${nath-low-arm-front}",
                            '891px',
                            '1683px'
                        ],
                        [
                            "eid10398",
                            "rotateZ",
                            4602,
                            188,
                            "linear",
                            "${gin-side}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid11117",
                            "rotateZ",
                            12266,
                            263,
                            "linear",
                            "${gin-side}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid10940",
                            "top",
                            3782,
                            139,
                            "linear",
                            "${nath-hand-write}",
                            '628px',
                            '396px'
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
                            4191,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10362",
                            "opacity",
                            4343,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13339",
                            "opacity",
                            18116,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13340",
                            "opacity",
                            18268,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13389",
                            "opacity",
                            22955,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13388",
                            "opacity",
                            23107,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13118",
                            "left",
                            4191,
                            207,
                            "linear",
                            "${balloon2}",
                            '762px',
                            '295px'
                        ],
                        [
                            "eid13189",
                            "left",
                            7927,
                            207,
                            "linear",
                            "${balloon2}",
                            '295px',
                            '762px'
                        ],
                        [
                            "eid13304",
                            "left",
                            13660,
                            207,
                            "linear",
                            "${balloon2}",
                            '762px',
                            '355px'
                        ],
                        [
                            "eid13305",
                            "left",
                            15100,
                            207,
                            "linear",
                            "${balloon2}",
                            '355px',
                            '762px'
                        ],
                        [
                            "eid13586",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13847",
                            "opacity",
                            35450,
                            133,
                            "linear",
                            "${countdown4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13848",
                            "opacity",
                            35892,
                            143,
                            "linear",
                            "${countdown4}",
                            '1',
                            '0'
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
                            7254,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10411",
                            "opacity",
                            7406,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13321",
                            "opacity",
                            14226,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13320",
                            "opacity",
                            14378,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13137",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picture}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13136",
                            "display",
                            5334,
                            0,
                            "linear",
                            "${picture}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10259",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-speak-side}",
                            '1069px',
                            '745px'
                        ],
                        [
                            "eid10434",
                            "left",
                            4681,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '745px',
                            '718px'
                        ],
                        [
                            "eid11090",
                            "left",
                            11906,
                            212,
                            "linear",
                            "${nath-speak-side}",
                            '718px',
                            '743px'
                        ],
                        [
                            "eid13580",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${nath-speak-side}",
                            '743px',
                            '1535px'
                        ],
                        [
                            "eid13674",
                            "top",
                            30450,
                            425,
                            "linear",
                            "${countdown3}",
                            '241px',
                            '133px'
                        ],
                        [
                            "eid13882",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13877",
                            "display",
                            30991,
                            0,
                            "linear",
                            "${t5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13887",
                            "display",
                            31059,
                            0,
                            "linear",
                            "${t5}",
                            'block',
                            'none'
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
                            3233,
                            114,
                            "linear",
                            "${gin-body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10918",
                            "rotateZ",
                            3679,
                            152,
                            "linear",
                            "${gin-low-arm-front}",
                            '-15deg',
                            '-101deg'
                        ],
                        [
                            "eid13402",
                            "rotateZ",
                            18793,
                            307,
                            "linear",
                            "${gin-low-arm-front}",
                            '-101deg',
                            '-118deg'
                        ],
                        [
                            "eid13870",
                            "display",
                            0,
                            0,
                            "linear",
                            "${startgame-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13869",
                            "display",
                            28250,
                            0,
                            "linear",
                            "${startgame-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13876",
                            "display",
                            28303,
                            0,
                            "linear",
                            "${startgame-btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10439",
                            "top",
                            4681,
                            187,
                            "linear",
                            "${nath-blink}",
                            '74px',
                            '101px'
                        ],
                        [
                            "eid11092",
                            "top",
                            11906,
                            212,
                            "linear",
                            "${nath-blink}",
                            '101px',
                            '82px'
                        ],
                        [
                            "eid13666",
                            "left",
                            28950,
                            425,
                            "linear",
                            "${countdown1}",
                            '485px',
                            '370px'
                        ],
                        [
                            "eid13667",
                            "width",
                            28950,
                            425,
                            "linear",
                            "${countdown1}",
                            '69px',
                            '230px'
                        ],
                        [
                            "eid10258",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-up-arm-front}",
                            '1254px',
                            '930px'
                        ],
                        [
                            "eid13564",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${nath-up-arm-front}",
                            '930px',
                            '1722px'
                        ],
                        [
                            "eid10937",
                            "rotateZ",
                            3782,
                            139,
                            "linear",
                            "${nath-hand-write}",
                            '-66deg',
                            '6deg'
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
                            3233,
                            114,
                            "linear",
                            "${gin-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13668",
                            "top",
                            29700,
                            425,
                            "linear",
                            "${countdown2}",
                            '283px',
                            '142px'
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
                            3233,
                            114,
                            "linear",
                            "${nath-low-arm-front}",
                            '0',
                            '1'
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
                            3233,
                            114,
                            "linear",
                            "${gin-up-arm-front}",
                            '0',
                            '1'
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
                            3233,
                            114,
                            "linear",
                            "${nath-body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13614",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13615",
                            "display",
                            25506,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13875",
                            "display",
                            28303,
                            0,
                            "linear",
                            "${instruction}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10432",
                            "rotateZ",
                            4681,
                            187,
                            "linear",
                            "${nath-side}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid11099",
                            "rotateZ",
                            11906,
                            212,
                            "linear",
                            "${nath-side}",
                            '-15deg',
                            '1deg'
                        ],
                        [
                            "eid13257",
                            "top",
                            8974,
                            68,
                            "linear",
                            "${Text5}",
                            '324px',
                            '297px'
                        ],
                        [
                            "eid13369",
                            "top",
                            15538,
                            68,
                            "linear",
                            "${Text7}",
                            '302px',
                            '266px'
                        ],
                        [
                            "eid13247",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${balloon22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13246",
                            "opacity",
                            8900,
                            74,
                            "linear",
                            "${balloon22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13267",
                            "opacity",
                            13586,
                            74,
                            "linear",
                            "${balloon22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13357",
                            "opacity",
                            15464,
                            74,
                            "linear",
                            "${balloon22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13381",
                            "opacity",
                            23200,
                            74,
                            "linear",
                            "${balloon22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13201",
                            "rotateZ",
                            8298,
                            99,
                            "linear",
                            "${nath-sad2}",
                            '1deg',
                            '-15deg'
                        ],
                        [
                            "eid13209",
                            "rotateZ",
                            11649,
                            0,
                            "linear",
                            "${nath-sad2}",
                            '-15deg',
                            '-15deg'
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
                            3233,
                            114,
                            "linear",
                            "${nath-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11210",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-sad2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13193",
                            "opacity",
                            8397,
                            103,
                            "linear",
                            "${nath-sad2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13215",
                            "opacity",
                            11649,
                            79,
                            "linear",
                            "${nath-sad2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10260",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-up-arm-back}",
                            '1083px',
                            '768px'
                        ],
                        [
                            "eid13568",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${nath-up-arm-back}",
                            '768px',
                            '1560px'
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
                            "eid13176",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13128",
                            "opacity",
                            4331,
                            67,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13135",
                            "opacity",
                            6618,
                            67,
                            "linear",
                            "${Text4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13910",
                            "display",
                            36447,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13581",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${library-table}",
                            '220px',
                            '1012px'
                        ],
                        [
                            "eid10262",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-blink}",
                            '1069px',
                            '745px'
                        ],
                        [
                            "eid10438",
                            "left",
                            4681,
                            187,
                            "linear",
                            "${nath-blink}",
                            '745px',
                            '718px'
                        ],
                        [
                            "eid11095",
                            "left",
                            11906,
                            212,
                            "linear",
                            "${nath-blink}",
                            '718px',
                            '743px'
                        ],
                        [
                            "eid13579",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${nath-blink}",
                            '743px',
                            '1535px'
                        ],
                        [
                            "eid10230",
                            "top",
                            2824,
                            409,
                            "linear",
                            "${library-table}",
                            '584px',
                            '231px'
                        ],
                        [
                            "eid13260",
                            "top",
                            11780,
                            68,
                            "linear",
                            "${Text5Copy}",
                            '324px',
                            '280px'
                        ],
                        [
                            "eid10396",
                            "rotateZ",
                            4602,
                            188,
                            "linear",
                            "${gin-blink1}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid11107",
                            "rotateZ",
                            12266,
                            263,
                            "linear",
                            "${gin-blink1}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid13178",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13184",
                            "opacity",
                            6685,
                            67,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13183",
                            "opacity",
                            7884,
                            67,
                            "linear",
                            "${Text4Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10431",
                            "rotateZ",
                            4681,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid11091",
                            "rotateZ",
                            11906,
                            212,
                            "linear",
                            "${nath-speak-side}",
                            '-15deg',
                            '1deg'
                        ],
                        [
                            "eid13857",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13867",
                            "opacity",
                            36035,
                            277,
                            "linear",
                            "${RoundRect5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10435",
                            "top",
                            4681,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '74px',
                            '101px'
                        ],
                        [
                            "eid11089",
                            "top",
                            11906,
                            212,
                            "linear",
                            "${nath-speak-side}",
                            '101px',
                            '82px'
                        ],
                        [
                            "eid13316",
                            "left",
                            13800,
                            47,
                            "linear",
                            "${Text6}",
                            '472px',
                            '374px'
                        ],
                        [
                            "eid13845",
                            "top",
                            35450,
                            250,
                            "linear",
                            "${countdown4}",
                            '272px',
                            '174px'
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
                            "eid13678",
                            "left",
                            30450,
                            425,
                            "linear",
                            "${countdown3}",
                            '397px',
                            '223px'
                        ],
                        [
                            "eid13256",
                            "left",
                            8974,
                            68,
                            "linear",
                            "${Text5}",
                            '260px',
                            '177px'
                        ],
                        [
                            "eid13241",
                            "left",
                            8900,
                            142,
                            "linear",
                            "${balloon22}",
                            '361px',
                            '68px'
                        ],
                        [
                            "eid13268",
                            "left",
                            13518,
                            142,
                            "linear",
                            "${balloon22}",
                            '68px',
                            '361px'
                        ],
                        [
                            "eid13358",
                            "left",
                            15464,
                            142,
                            "linear",
                            "${balloon22}",
                            '361px',
                            '68px'
                        ],
                        [
                            "eid13382",
                            "left",
                            23132,
                            142,
                            "linear",
                            "${balloon22}",
                            '68px',
                            '361px'
                        ],
                        [
                            "eid13619",
                            "display",
                            0,
                            0,
                            "linear",
                            "${timer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13620",
                            "display",
                            30991,
                            0,
                            "linear",
                            "${timer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13621",
                            "display",
                            35450,
                            0,
                            "linear",
                            "${timer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13849",
                            "left",
                            35450,
                            250,
                            "linear",
                            "${countdown4}",
                            '294px',
                            '64px'
                        ],
                        [
                            "eid13368",
                            "left",
                            15538,
                            68,
                            "linear",
                            "${Text7}",
                            '258px',
                            '165px'
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
                            3233,
                            114,
                            "linear",
                            "${gin-up-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10920",
                            "top",
                            3679,
                            152,
                            "linear",
                            "${gin-hand-pencil}",
                            '639px',
                            '405px'
                        ],
                        [
                            "eid13407",
                            "top",
                            18793,
                            307,
                            "linear",
                            "${gin-hand-pencil}",
                            '405px',
                            '353px'
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
                            "eid13282",
                            "opacity",
                            13544,
                            116,
                            "linear",
                            "${gin-smile-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13324",
                            "opacity",
                            14673,
                            177,
                            "linear",
                            "${gin-smile-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13185",
                            "left",
                            6685,
                            67,
                            "linear",
                            "${Text4Copy}",
                            '336px',
                            '243px'
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
                            3679,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10283",
                            "opacity",
                            3831,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10457",
                            "opacity",
                            6387,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10456",
                            "opacity",
                            6539,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11093",
                            "opacity",
                            12287,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11094",
                            "opacity",
                            12439,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13408",
                            "opacity",
                            16543,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13409",
                            "opacity",
                            16695,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13410",
                            "opacity",
                            19834,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13411",
                            "opacity",
                            19986,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13412",
                            "opacity",
                            23470,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13413",
                            "opacity",
                            23622,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13240",
                            "top",
                            8900,
                            142,
                            "linear",
                            "${balloon22}",
                            '363px',
                            '199px'
                        ],
                        [
                            "eid13265",
                            "top",
                            13518,
                            142,
                            "linear",
                            "${balloon22}",
                            '199px',
                            '363px'
                        ],
                        [
                            "eid13355",
                            "top",
                            15464,
                            142,
                            "linear",
                            "${balloon22}",
                            '363px',
                            '199px'
                        ],
                        [
                            "eid13379",
                            "top",
                            23132,
                            142,
                            "linear",
                            "${balloon22}",
                            '199px',
                            '363px'
                        ],
                        [
                            "eid10320",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-up-arm-back}",
                            '-145px',
                            '568px'
                        ],
                        [
                            "eid13569",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-up-arm-back}",
                            '568px',
                            '1360px'
                        ],
                        [
                            "eid13242",
                            "width",
                            8900,
                            142,
                            "linear",
                            "${balloon22}",
                            '199px',
                            '428px'
                        ],
                        [
                            "eid13269",
                            "width",
                            13518,
                            142,
                            "linear",
                            "${balloon22}",
                            '428px',
                            '199px'
                        ],
                        [
                            "eid13359",
                            "width",
                            15464,
                            142,
                            "linear",
                            "${balloon22}",
                            '199px',
                            '428px'
                        ],
                        [
                            "eid13383",
                            "width",
                            23132,
                            142,
                            "linear",
                            "${balloon22}",
                            '428px',
                            '199px'
                        ],
                        [
                            "eid10319",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-speak-side}",
                            '-317px',
                            '393px'
                        ],
                        [
                            "eid10407",
                            "left",
                            4602,
                            188,
                            "linear",
                            "${gin-speak-side}",
                            '393px',
                            '412px'
                        ],
                        [
                            "eid11101",
                            "left",
                            12266,
                            263,
                            "linear",
                            "${gin-speak-side}",
                            '412px',
                            '386px'
                        ],
                        [
                            "eid13270",
                            "left",
                            12578,
                            0,
                            "linear",
                            "${gin-speak-side}",
                            '386px',
                            '386px'
                        ],
                        [
                            "eid13578",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-speak-side}",
                            '386px',
                            '1178px'
                        ],
                        [
                            "eid13884",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13879",
                            "display",
                            30991,
                            0,
                            "linear",
                            "${t4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13889",
                            "display",
                            31059,
                            0,
                            "linear",
                            "${t4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10399",
                            "rotateZ",
                            4602,
                            188,
                            "linear",
                            "${gin-speak-side}",
                            '0deg',
                            '21deg'
                        ],
                        [
                            "eid11102",
                            "rotateZ",
                            12266,
                            263,
                            "linear",
                            "${gin-speak-side}",
                            '21deg',
                            '-10deg'
                        ],
                        [
                            "eid13275",
                            "rotateZ",
                            12529,
                            49,
                            "linear",
                            "${gin-speak-side}",
                            '-10deg',
                            '1deg'
                        ],
                        [
                            "eid13317",
                            "top",
                            13800,
                            47,
                            "linear",
                            "${Text6}",
                            '408px',
                            '433px'
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
                            3233,
                            114,
                            "linear",
                            "${gin-low-arm-front}",
                            '0',
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
                            2674,
                            198,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10263",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-side}",
                            '1069px',
                            '745px'
                        ],
                        [
                            "eid10436",
                            "left",
                            4681,
                            187,
                            "linear",
                            "${nath-side}",
                            '745px',
                            '718px'
                        ],
                        [
                            "eid11098",
                            "left",
                            11906,
                            212,
                            "linear",
                            "${nath-side}",
                            '718px',
                            '743px'
                        ],
                        [
                            "eid13573",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${nath-side}",
                            '743px',
                            '1535px'
                        ],
                        [
                            "eid10326",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-side}",
                            '-317px',
                            '393px'
                        ],
                        [
                            "eid10405",
                            "left",
                            4602,
                            188,
                            "linear",
                            "${gin-side}",
                            '393px',
                            '412px'
                        ],
                        [
                            "eid11116",
                            "left",
                            12266,
                            263,
                            "linear",
                            "${gin-side}",
                            '412px',
                            '386px'
                        ],
                        [
                            "eid13576",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-side}",
                            '386px',
                            '1178px'
                        ],
                        [
                            "eid10433",
                            "rotateZ",
                            4681,
                            187,
                            "linear",
                            "${nath-blink}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid11096",
                            "rotateZ",
                            11906,
                            212,
                            "linear",
                            "${nath-blink}",
                            '-15deg',
                            '1deg'
                        ],
                        [
                            "eid13370",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13363",
                            "opacity",
                            15538,
                            68,
                            "linear",
                            "${Text7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13371",
                            "opacity",
                            18457,
                            68,
                            "linear",
                            "${Text7}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13264",
                            "left",
                            11780,
                            68,
                            "linear",
                            "${Text5Copy}",
                            '260px',
                            '174px'
                        ],
                        [
                            "eid13607",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13676",
                            "opacity",
                            30450,
                            128,
                            "linear",
                            "${countdown3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13677",
                            "opacity",
                            30875,
                            116,
                            "linear",
                            "${countdown3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13124",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${balloon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13123",
                            "opacity",
                            4191,
                            140,
                            "linear",
                            "${balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13188",
                            "opacity",
                            7994,
                            140,
                            "linear",
                            "${balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13302",
                            "opacity",
                            13660,
                            140,
                            "linear",
                            "${balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13303",
                            "opacity",
                            15167,
                            140,
                            "linear",
                            "${balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10922",
                            "top",
                            3679,
                            152,
                            "linear",
                            "${gin-low-arm-front}",
                            '531px',
                            '446px'
                        ],
                        [
                            "eid13405",
                            "top",
                            18793,
                            307,
                            "linear",
                            "${gin-low-arm-front}",
                            '446px',
                            '412px'
                        ],
                        [
                            "eid10404",
                            "top",
                            4602,
                            188,
                            "linear",
                            "${gin-smile-side}",
                            '120px',
                            '128px'
                        ],
                        [
                            "eid11108",
                            "top",
                            12266,
                            263,
                            "linear",
                            "${gin-smile-side}",
                            '128px',
                            '110px'
                        ],
                        [
                            "eid10939",
                            "left",
                            3782,
                            139,
                            "linear",
                            "${nath-hand-write}",
                            '852px',
                            '726px'
                        ],
                        [
                            "eid13563",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${nath-hand-write}",
                            '726px',
                            '1518px'
                        ],
                        [
                            "eid10901",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-hand-write}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10903",
                            "opacity",
                            3628,
                            51,
                            "linear",
                            "${nath-hand-write}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10919",
                            "left",
                            3679,
                            152,
                            "linear",
                            "${gin-hand-pencil}",
                            '451px',
                            '501px'
                        ],
                        [
                            "eid13406",
                            "left",
                            18793,
                            307,
                            "linear",
                            "${gin-hand-pencil}",
                            '501px',
                            '533px'
                        ],
                        [
                            "eid13571",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-hand-pencil}",
                            '533px',
                            '1325px'
                        ],
                        [
                            "eid13261",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13262",
                            "opacity",
                            11780,
                            68,
                            "linear",
                            "${Text5Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13263",
                            "opacity",
                            13476,
                            68,
                            "linear",
                            "${Text5Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13577",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-sad1}",
                            '386px',
                            '1178px'
                        ],
                        [
                            "eid11170",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-sad1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10324",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-body}",
                            '-294px',
                            '416px'
                        ],
                        [
                            "eid13570",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-body}",
                            '416px',
                            '1208px'
                        ],
                        [
                            "eid13239",
                            "height",
                            8900,
                            142,
                            "linear",
                            "${balloon22}",
                            '139px',
                            '367px'
                        ],
                        [
                            "eid13266",
                            "height",
                            13518,
                            142,
                            "linear",
                            "${balloon22}",
                            '367px',
                            '139px'
                        ],
                        [
                            "eid13356",
                            "height",
                            15464,
                            142,
                            "linear",
                            "${balloon22}",
                            '139px',
                            '367px'
                        ],
                        [
                            "eid13380",
                            "height",
                            23132,
                            142,
                            "linear",
                            "${balloon22}",
                            '367px',
                            '139px'
                        ],
                        [
                            "eid10321",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-blink2}",
                            '-317px',
                            '393px'
                        ],
                        [
                            "eid10409",
                            "left",
                            4602,
                            188,
                            "linear",
                            "${gin-blink2}",
                            '393px',
                            '412px'
                        ],
                        [
                            "eid11113",
                            "left",
                            12266,
                            263,
                            "linear",
                            "${gin-blink2}",
                            '412px',
                            '386px'
                        ],
                        [
                            "eid13562",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-blink2}",
                            '386px',
                            '1178px'
                        ],
                        [
                            "eid10406",
                            "top",
                            4602,
                            188,
                            "linear",
                            "${gin-side}",
                            '120px',
                            '128px'
                        ],
                        [
                            "eid11115",
                            "top",
                            12266,
                            263,
                            "linear",
                            "${gin-side}",
                            '128px',
                            '110px'
                        ],
                        [
                            "eid10902",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-hand-pencil}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10904",
                            "opacity",
                            3628,
                            51,
                            "linear",
                            "${gin-hand-pencil}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10410",
                            "top",
                            4602,
                            188,
                            "linear",
                            "${gin-blink2}",
                            '120px',
                            '128px'
                        ],
                        [
                            "eid11112",
                            "top",
                            12266,
                            263,
                            "linear",
                            "${gin-blink2}",
                            '128px',
                            '110px'
                        ],
                        [
                            "eid13672",
                            "left",
                            29700,
                            425,
                            "linear",
                            "${countdown2}",
                            '485px',
                            '370px'
                        ],
                        [
                            "eid13373",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13377",
                            "opacity",
                            18525,
                            68,
                            "linear",
                            "${Text7Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13378",
                            "opacity",
                            23132,
                            68,
                            "linear",
                            "${Text7Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13911",
                            "display",
                            36447,
                            0,
                            "linear",
                            "${RoundRect5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12407",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13091",
                            "opacity",
                            5130,
                            366,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10917",
                            "rotateZ",
                            3679,
                            152,
                            "linear",
                            "${gin-hand-pencil}",
                            '78deg',
                            '-19deg'
                        ],
                        [
                            "eid13403",
                            "rotateZ",
                            18793,
                            307,
                            "linear",
                            "${gin-hand-pencil}",
                            '-19deg',
                            '-18deg'
                        ],
                        [
                            "eid13616",
                            "display",
                            0,
                            0,
                            "linear",
                            "${progress-bar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13617",
                            "display",
                            30991,
                            0,
                            "linear",
                            "${progress-bar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13618",
                            "display",
                            35450,
                            0,
                            "linear",
                            "${progress-bar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13612",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction-btn2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13613",
                            "display",
                            24506,
                            0,
                            "linear",
                            "${instruction-btn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13912",
                            "display",
                            36083,
                            0,
                            "linear",
                            "${instruction-btn2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13182",
                            "top",
                            6685,
                            67,
                            "linear",
                            "${Text4Copy}",
                            '391px',
                            '437px'
                        ],
                        [
                            "eid10327",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-blink1}",
                            '-317px',
                            '393px'
                        ],
                        [
                            "eid10401",
                            "left",
                            4602,
                            188,
                            "linear",
                            "${gin-blink1}",
                            '393px',
                            '412px'
                        ],
                        [
                            "eid11106",
                            "left",
                            12266,
                            263,
                            "linear",
                            "${gin-blink1}",
                            '412px',
                            '386px'
                        ],
                        [
                            "eid13565",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-blink1}",
                            '386px',
                            '1178px'
                        ],
                        [
                            "eid10323",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-smile-side}",
                            '-317px',
                            '393px'
                        ],
                        [
                            "eid10403",
                            "left",
                            4602,
                            188,
                            "linear",
                            "${gin-smile-side}",
                            '393px',
                            '412px'
                        ],
                        [
                            "eid11110",
                            "left",
                            12266,
                            263,
                            "linear",
                            "${gin-smile-side}",
                            '412px',
                            '386px'
                        ],
                        [
                            "eid13566",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${gin-smile-side}",
                            '386px',
                            '1178px'
                        ],
                        [
                            "eid13600",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13670",
                            "opacity",
                            29700,
                            128,
                            "linear",
                            "${countdown2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13671",
                            "opacity",
                            30125,
                            116,
                            "linear",
                            "${countdown2}",
                            '1',
                            '0'
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
                            "eid10943",
                            "opacity",
                            4114,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10944",
                            "opacity",
                            4296,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10945",
                            "opacity",
                            4537,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10946",
                            "opacity",
                            4729,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10947",
                            "opacity",
                            4888,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10948",
                            "opacity",
                            5130,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10949",
                            "opacity",
                            5281,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10950",
                            "opacity",
                            5463,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10951",
                            "opacity",
                            5704,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10952",
                            "opacity",
                            5896,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10953",
                            "opacity",
                            6055,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10954",
                            "opacity",
                            6297,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11000",
                            "opacity",
                            6618,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11001",
                            "opacity",
                            6769,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11002",
                            "opacity",
                            6951,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11003",
                            "opacity",
                            7192,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11004",
                            "opacity",
                            7384,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11005",
                            "opacity",
                            7543,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13898",
                            "opacity",
                            7707,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13899",
                            "opacity",
                            7858,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13900",
                            "opacity",
                            8040,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11006",
                            "opacity",
                            8298,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13284",
                            "opacity",
                            13748,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13285",
                            "opacity",
                            13899,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13286",
                            "opacity",
                            14081,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13287",
                            "opacity",
                            14322,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13288",
                            "opacity",
                            14514,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13289",
                            "opacity",
                            14673,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13290",
                            "opacity",
                            14915,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
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
                            3233,
                            114,
                            "linear",
                            "${nath-up-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10397",
                            "rotateZ",
                            4602,
                            188,
                            "linear",
                            "${gin-smile-side}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid11111",
                            "rotateZ",
                            12266,
                            263,
                            "linear",
                            "${gin-smile-side}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid13117",
                            "top",
                            4191,
                            207,
                            "linear",
                            "${balloon2}",
                            '371px',
                            '283px'
                        ],
                        [
                            "eid13186",
                            "top",
                            7927,
                            207,
                            "linear",
                            "${balloon2}",
                            '283px',
                            '371px'
                        ],
                        [
                            "eid13298",
                            "top",
                            13660,
                            207,
                            "linear",
                            "${balloon2}",
                            '371px',
                            '346px'
                        ],
                        [
                            "eid13299",
                            "top",
                            15100,
                            207,
                            "linear",
                            "${balloon2}",
                            '346px',
                            '371px'
                        ],
                        [
                            "eid13663",
                            "height",
                            28950,
                            425,
                            "linear",
                            "${countdown1}",
                            '104px',
                            '348px'
                        ],
                        [
                            "eid13846",
                            "height",
                            35450,
                            250,
                            "linear",
                            "${countdown4}",
                            '82px',
                            '243px'
                        ],
                        [
                            "eid10938",
                            "rotateZ",
                            3782,
                            139,
                            "linear",
                            "${nath-low-arm-front}",
                            '0deg',
                            '92deg'
                        ],
                        [
                            "eid13593",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13664",
                            "opacity",
                            28950,
                            128,
                            "linear",
                            "${countdown1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13665",
                            "opacity",
                            29375,
                            116,
                            "linear",
                            "${countdown1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid6741",
                            "top",
                            316,
                            184,
                            "linear",
                            "${Text}",
                            '-175px',
                            '178px'
                        ],
                        [
                            "eid6744",
                            "top",
                            2576,
                            98,
                            "linear",
                            "${Text}",
                            '178px',
                            '305px'
                        ],
                        [
                            "eid6746",
                            "top",
                            2674,
                            198,
                            "linear",
                            "${Text}",
                            '305px',
                            '-161px'
                        ],
                        [
                            "eid10437",
                            "top",
                            4681,
                            187,
                            "linear",
                            "${nath-side}",
                            '74px',
                            '101px'
                        ],
                        [
                            "eid11097",
                            "top",
                            11906,
                            212,
                            "linear",
                            "${nath-side}",
                            '101px',
                            '82px'
                        ],
                        [
                            "eid13883",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13878",
                            "display",
                            30991,
                            0,
                            "linear",
                            "${t1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13888",
                            "display",
                            31059,
                            0,
                            "linear",
                            "${t1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10261",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-body}",
                            '1112px',
                            '788px'
                        ],
                        [
                            "eid13582",
                            "left",
                            23712,
                            619,
                            "linear",
                            "${nath-body}",
                            '788px',
                            '1580px'
                        ],
                        [
                            "eid13885",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13880",
                            "display",
                            30991,
                            0,
                            "linear",
                            "${t3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13890",
                            "display",
                            31059,
                            0,
                            "linear",
                            "${t3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13669",
                            "height",
                            29700,
                            425,
                            "linear",
                            "${countdown2}",
                            '104px',
                            '348px'
                        ],
                        [
                            "eid10402",
                            "top",
                            4602,
                            188,
                            "linear",
                            "${gin-blink1}",
                            '120px',
                            '128px'
                        ],
                        [
                            "eid11103",
                            "top",
                            12266,
                            263,
                            "linear",
                            "${gin-blink1}",
                            '128px',
                            '110px'
                        ],
                        [
                            "eid13205",
                            "top",
                            8298,
                            99,
                            "linear",
                            "${nath-sad2}",
                            '85px',
                            '101px'
                        ],
                        [
                            "eid13208",
                            "top",
                            8500,
                            0,
                            "linear",
                            "${nath-sad2}",
                            '98px',
                            '98px'
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
                            3233,
                            0,
                            "linear",
                            "${chairs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13414",
                            "display",
                            23712,
                            0,
                            "linear",
                            "${chairs}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13318",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13311",
                            "opacity",
                            13800,
                            67,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13319",
                            "opacity",
                            15100,
                            67,
                            "linear",
                            "${Text6}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13134",
                            "top",
                            4331,
                            67,
                            "linear",
                            "${Text4}",
                            '391px',
                            '443px'
                        ],
                            [ "eid10238", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${chairs}', [] ] ],
                            [ "eid13765", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${answer2}', [] ] ],
                            [ "eid13822", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${answer5}', [] ] ],
                            [ "eid13625", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid13622", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${progress-bar}', [] ] ],
                            [ "eid13861", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${well-done2}', [] ] ],
                            [ "eid13217", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picture}', [] ] ],
                            [ "eid13817", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${answer4}', [] ] ],
                            [ "eid13791", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${answer3}', [] ] ],
                            [ "eid13859", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${oops}', [] ] ],
                            [ "eid13623", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${timer}', [] ] ],
                            [ "eid13733", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${answer1}', [] ] ],
                            [ "eid13624", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction-btn2}', [] ] ],
                            [ "eid13860", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${decent}', [] ] ],
                            [ "eid10239", "trigger", 3233, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${chairs}', [] ] ],
                            [ "eid13218", "trigger", 5334, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${picture}', [] ] ],
                            [ "eid13583", "trigger", 23712, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${chairs}', [] ] ],
                            [ "eid13629", "trigger", 24506, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction-btn2}', [] ] ],
                            [ "eid13631", "trigger", 25506, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ],
                            [ "eid13626", "trigger", 30991, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${timer}', [] ] ],
                            [ "eid13630", "trigger", 35450, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${progress-bar}', [] ] ],
                            [ "eid13628", "trigger", 35450, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${timer}', [] ] ]
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
                            rect: ['-44px', '1px', '263px', '258px', 'auto', 'auto'],
                            id: 'chairCopy',
                            transform: [[], [], [], ['-1', '1.00696']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/chair.png', '0px', '0px']
                        },
                        {
                            rect: ['1116px', '1px', '263px', '258px', 'auto', 'auto'],
                            id: 'chair',
                            type: 'image',
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
                            "eid10242",
                            "left",
                            0,
                            395,
                            "linear",
                            "${chair}",
                            '1116px',
                            '852px'
                        ],
                        [
                            "eid10245",
                            "left",
                            0,
                            395,
                            "linear",
                            "${chairCopy}",
                            '-366px',
                            '366px'
                        ]
                    ]
                }
            },
            "picture": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            opacity: 0,
                            rect: ['-628px', '-197px', '587px', '394px', 'auto', 'auto'],
                            transform: [[], ['24'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            transform: [[], ['24'], [0, 0, 0], [1, 1, 1]],
                            rect: ['-621px', '-189px', '571px', '378px', 'auto', 'auto'],
                            id: 'pic2',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pic2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '815px', '551px']
                        }
                    }
                },
                timeline: {
                    duration: 342.3410163438,
                    autoPlay: true,
                    data: [
                        [
                            "eid13158",
                            "rotateZ",
                            0,
                            342,
                            "linear",
                            "${pic2}",
                            '24deg',
                            '0deg'
                        ],
                        [
                            "eid13163",
                            "top",
                            0,
                            342,
                            "linear",
                            "${RoundRect}",
                            '-197px',
                            '14px'
                        ],
                        [
                            "eid13175",
                            "opacity",
                            0,
                            92,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13159",
                            "rotateZ",
                            0,
                            342,
                            "linear",
                            "${RoundRect}",
                            '24deg',
                            '0deg'
                        ],
                        [
                            "eid13161",
                            "top",
                            0,
                            342,
                            "linear",
                            "${pic2}",
                            '-189px',
                            '24px'
                        ],
                        [
                            "eid13174",
                            "opacity",
                            0,
                            92,
                            "linear",
                            "${pic2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13162",
                            "left",
                            0,
                            342,
                            "linear",
                            "${RoundRect}",
                            '-628px',
                            '0px'
                        ],
                        [
                            "eid13167",
                            "width",
                            0,
                            342,
                            "linear",
                            "${pic2}",
                            '571px',
                            '778px'
                        ],
                        [
                            "eid13166",
                            "height",
                            0,
                            342,
                            "linear",
                            "${pic2}",
                            '378px',
                            '515px'
                        ],
                        [
                            "eid13165",
                            "width",
                            0,
                            342,
                            "linear",
                            "${RoundRect}",
                            '587px',
                            '799px'
                        ],
                        [
                            "eid13160",
                            "left",
                            0,
                            342,
                            "linear",
                            "${pic2}",
                            '-621px',
                            '9px'
                        ],
                        [
                            "eid13164",
                            "height",
                            0,
                            342,
                            "linear",
                            "${RoundRect}",
                            '394px',
                            '537px'
                        ]
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
                            rect: ['67px', '23px', '165px', '57px', 'auto', 'auto'],
                            id: 'instruction-btn',
                            opacity: 0,
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
                            rect: ['39px', '28px', '920px', '46px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'Could you help Ginette and Nathan by finding ',
                            id: 'Text',
                            opacity: '0',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['407px', '64px', '78px', '62px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [70, 'px'], 'rgba(13,74,229,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: '5',
                            id: 'TextCopy5',
                            opacity: '0',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['326px', '121px', '444px', '65px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [60, 'px'], 'rgba(13,74,229,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'could go wrong',
                            id: 'TextCopy6',
                            opacity: '0',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['465px', '81px', '159px', '54px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'events',
                            id: 'TextCopy2',
                            opacity: '0',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['248px', '133px', '101px', '46px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'that',
                            id: 'TextCopy3',
                            opacity: '0',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['742px', '135px', '69px', '38px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: '?',
                            id: 'TextCopy4',
                            opacity: '0',
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
                    duration: 3187,
                    autoPlay: true,
                    data: [
                        [
                            "eid8766",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8802",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${TextCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8849",
                            "opacity",
                            3097,
                            90,
                            "linear",
                            "${TextCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8827",
                            "top",
                            3000,
                            187,
                            "linear",
                            "${TextCopy3}",
                            '133px',
                            '358px'
                        ],
                        [
                            "eid8825",
                            "top",
                            3000,
                            187,
                            "linear",
                            "${TextCopy2}",
                            '81px',
                            '303px'
                        ],
                        [
                            "eid8787",
                            "width",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '533px',
                            '1008px'
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
                            "eid8768",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8804",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${TextCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8851",
                            "opacity",
                            3097,
                            90,
                            "linear",
                            "${TextCopy3}",
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
                            "eid8769",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8805",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${TextCopy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8852",
                            "opacity",
                            3097,
                            90,
                            "linear",
                            "${TextCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8832",
                            "top",
                            3000,
                            187,
                            "linear",
                            "${Text}",
                            '28px',
                            '246px'
                        ],
                        [
                            "eid8786",
                            "height",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '125px',
                            '222px'
                        ],
                        [
                            "eid8770",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8808",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${TextCopy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8853",
                            "opacity",
                            3097,
                            90,
                            "linear",
                            "${TextCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8830",
                            "top",
                            3000,
                            187,
                            "linear",
                            "${TextCopy6}",
                            '121px',
                            '340px'
                        ],
                        [
                            "eid8771",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8807",
                            "opacity",
                            250,
                            126,
                            "linear",
                            "${TextCopy6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8854",
                            "opacity",
                            3097,
                            90,
                            "linear",
                            "${TextCopy6}",
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
                            "eid8829",
                            "top",
                            3000,
                            187,
                            "linear",
                            "${TextCopy4}",
                            '135px',
                            '357px'
                        ],
                        [
                            "eid8828",
                            "top",
                            3000,
                            187,
                            "linear",
                            "${TextCopy5}",
                            '64px',
                            '287px'
                        ],
                        [
                            "eid8784",
                            "left",
                            0,
                            308,
                            "linear",
                            "${narrator-text-balloon}",
                            '253px',
                            '0px'
                        ]
                    ]
                }
            },
            "progress-bar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '662px', '29px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [3, 'rgb(51, 51, 51)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.76)']
                        },
                        {
                            rect: ['1px', '3px', '15px', '29px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4Copy',
                            stroke: [3, 'rgb(51, 51, 51)', 'none'],
                            type: 'rect',
                            fill: ['rgba(239,255,0,0.67)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'txt',
                            text: '0/5',
                            align: 'left',
                            rect: ['15px', '2px', '80px', '28px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '668px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    labels: {
                        "a1": 500,
                        "a2": 1105,
                        "a3": 1690,
                        "a4": 2201,
                        "a5": 2750
                    },
                    data: [
                        [
                            "eid11186",
                            "width",
                            0,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '15px',
                            '51px'
                        ],
                        [
                            "eid11187",
                            "width",
                            250,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '51px',
                            '112px'
                        ],
                        [
                            "eid11189",
                            "width",
                            500,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '112px',
                            '173px'
                        ],
                        [
                            "eid11191",
                            "width",
                            750,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '173px',
                            '234px'
                        ],
                        [
                            "eid11193",
                            "width",
                            1000,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '234px',
                            '295px'
                        ],
                        [
                            "eid11195",
                            "width",
                            1250,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '295px',
                            '356px'
                        ],
                        [
                            "eid11197",
                            "width",
                            1500,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '356px',
                            '417px'
                        ],
                        [
                            "eid11199",
                            "width",
                            1750,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '417px',
                            '478px'
                        ],
                        [
                            "eid11201",
                            "width",
                            2000,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '478px',
                            '538px'
                        ],
                        [
                            "eid11203",
                            "width",
                            2250,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '538px',
                            '599px'
                        ],
                        [
                            "eid11205",
                            "width",
                            2500,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            '599px',
                            '664px'
                        ],
                        [
                            "eid11164",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(255,103,0,0.67)',
                            'rgba(255,159,0,0.67)'
                        ],
                        [
                            "eid11165",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(255,159,0,0.67)',
                            'rgba(255,191,0,0.67)'
                        ],
                        [
                            "eid11167",
                            "background-color",
                            500,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(255,191,0,0.67)',
                            'rgba(247,255,0,0.67)'
                        ],
                        [
                            "eid11168",
                            "background-color",
                            750,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(247,255,0,0.67)',
                            'rgba(183,255,0,0.67)'
                        ],
                        [
                            "eid11170",
                            "background-color",
                            1000,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(183,255,0,0.67)',
                            'rgba(47,255,0,0.67)'
                        ],
                        [
                            "eid11171",
                            "background-color",
                            1250,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(47,255,0,0.67)',
                            'rgba(0,255,63,0.67)'
                        ],
                        [
                            "eid11173",
                            "background-color",
                            1500,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(0,255,63,0.67)',
                            'rgba(0,255,167,0.67)'
                        ],
                        [
                            "eid11174",
                            "background-color",
                            1750,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(0,255,167,0.67)',
                            'rgba(0,247,255,0.67)'
                        ],
                        [
                            "eid11176",
                            "background-color",
                            2000,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(0,247,255,0.67)',
                            'rgba(0,191,255,0.67)'
                        ],
                        [
                            "eid11177",
                            "background-color",
                            2250,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(0,191,255,0.67)',
                            'rgba(43,169,255,0.77)'
                        ],
                        [
                            "eid11179",
                            "background-color",
                            2500,
                            250,
                            "linear",
                            "${RoundRect4Copy}",
                            'rgba(43,169,255,0.77)',
                            'rgba(63,147,255,0.77)'
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
                            opacity: '1',
                            id: 'RoundRect',
                            stroke: [2, 'rgba(51,51,51,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(100,237,54,0.51)']
                        },
                        {
                            rect: ['73px', '2px', '3px', '71px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '1',
                            id: 'RoundRect3',
                            stroke: [2, 'rgb(51, 51, 51)', 'none'],
                            type: 'rect',
                            fill: ['rgba(159,243,130,0.82)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            opacity: '1',
                            id: 'Text',
                            text: '01:00',
                            align: 'center',
                            rect: ['12px', '6px', 'auto', 'auto', 'auto', 'auto']
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
                            "eid13894",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid13895",
                            "opacity",
                            158,
                            0,
                            "linear",
                            "${RoundRect3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid13892",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid13893",
                            "opacity",
                            158,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid13896",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '1'
                        ],
                        [
                            "eid13897",
                            "opacity",
                            158,
                            0,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "box": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '126px', '124px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'question-mark',
                            rect: ['36px', '14px', '58px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '132px', '130px']
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
            "box-group": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'box',
                            symbolName: 'box',
                            transform: [[], [], [], ['0.95385', '0.95385']],
                            rect: ['-3px', '255px', '132', '130', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'boxCopy',
                            symbolName: 'box',
                            transform: [[], [], [], ['0.95385', '0.95385']],
                            rect: ['127px', '255px', '132', '130', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'boxCopy3',
                            symbolName: 'box',
                            transform: [[], [], [], ['0.95385', '0.95385']],
                            rect: ['-3px', '126px', '132', '130', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'boxCopy4',
                            symbolName: 'box',
                            transform: [[], [], [], ['0.95385', '0.95385']],
                            rect: ['-3px', '-3px', '132', '130', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'boxCopy2',
                            symbolName: 'box',
                            transform: [[], [], [], ['0.95385', '0.95385']],
                            rect: ['127px', '126px', '132', '130', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '256px', '382px']
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
            "answer1": {
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
                            id: 'right-select',
                            opacity: '0',
                            rect: ['87px', '149px', '58px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['614px', '75px', '124px', '121px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2',
                            stroke: [3, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'accident1',
                            opacity: '0',
                            rect: ['617px', '86px', '117px', '100px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/accident1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '488px', '416px']
                        }
                    }
                },
                timeline: {
                    duration: 2033,
                    autoPlay: true,
                    data: [
                        [
                            "eid13714",
                            "top",
                            93,
                            231,
                            "linear",
                            "${RoundRect2}",
                            '139px',
                            '0px'
                        ],
                        [
                            "eid13725",
                            "top",
                            1802,
                            231,
                            "linear",
                            "${RoundRect2}",
                            '0px',
                            '75px'
                        ],
                        [
                            "eid13732",
                            "opacity",
                            0,
                            57,
                            "linear",
                            "${right-select}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13718",
                            "width",
                            93,
                            231,
                            "linear",
                            "${accident1}",
                            '79px',
                            '475px'
                        ],
                        [
                            "eid13724",
                            "width",
                            1802,
                            231,
                            "linear",
                            "${accident1}",
                            '475px',
                            '117px'
                        ],
                        [
                            "eid13689",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${accident1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13695",
                            "opacity",
                            93,
                            108,
                            "linear",
                            "${accident1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13720",
                            "left",
                            93,
                            231,
                            "linear",
                            "${RoundRect2}",
                            '-86px',
                            '0px'
                        ],
                        [
                            "eid13727",
                            "left",
                            1802,
                            231,
                            "linear",
                            "${RoundRect2}",
                            '0px',
                            '614px'
                        ],
                        [
                            "eid13715",
                            "width",
                            93,
                            231,
                            "linear",
                            "${RoundRect2}",
                            '81px',
                            '488px'
                        ],
                        [
                            "eid13728",
                            "width",
                            1802,
                            231,
                            "linear",
                            "${RoundRect2}",
                            '488px',
                            '124px'
                        ],
                        [
                            "eid13717",
                            "top",
                            93,
                            231,
                            "linear",
                            "${accident1}",
                            '140px',
                            '8px'
                        ],
                        [
                            "eid13721",
                            "top",
                            1802,
                            231,
                            "linear",
                            "${accident1}",
                            '8px',
                            '86px'
                        ],
                        [
                            "eid13713",
                            "height",
                            93,
                            231,
                            "linear",
                            "${RoundRect2}",
                            '69px',
                            '416px'
                        ],
                        [
                            "eid13726",
                            "height",
                            1802,
                            231,
                            "linear",
                            "${RoundRect2}",
                            '416px',
                            '121px'
                        ],
                        [
                            "eid13716",
                            "height",
                            93,
                            231,
                            "linear",
                            "${accident1}",
                            '67px',
                            '401px'
                        ],
                        [
                            "eid13722",
                            "height",
                            1802,
                            231,
                            "linear",
                            "${accident1}",
                            '401px',
                            '100px'
                        ],
                        [
                            "eid13690",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13696",
                            "opacity",
                            93,
                            108,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13719",
                            "left",
                            93,
                            231,
                            "linear",
                            "${accident1}",
                            '-85px',
                            '7px'
                        ],
                        [
                            "eid13723",
                            "left",
                            1802,
                            231,
                            "linear",
                            "${accident1}",
                            '7px',
                            '617px'
                        ]
                    ]
                }
            },
            "answer2": {
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
                            id: 'right-select',
                            opacity: '0',
                            rect: ['378px', '365px', '58px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['614px', '203px', '488px', '416px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy4',
                            stroke: [3, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['617px', '213px', '475px', '401px', 'auto', 'auto'],
                            id: 'accident2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/accident2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '488px', '416px']
                        }
                    }
                },
                timeline: {
                    duration: 2033,
                    autoPlay: true,
                    data: [
                        [
                            "eid13744",
                            "width",
                            93,
                            231,
                            "linear",
                            "${accident2}",
                            '79px',
                            '475px'
                        ],
                        [
                            "eid13745",
                            "width",
                            1802,
                            231,
                            "linear",
                            "${accident2}",
                            '475px',
                            '117px'
                        ],
                        [
                            "eid13748",
                            "height",
                            93,
                            231,
                            "linear",
                            "${RoundRect2Copy4}",
                            '69px',
                            '416px'
                        ],
                        [
                            "eid13749",
                            "height",
                            1802,
                            231,
                            "linear",
                            "${RoundRect2Copy4}",
                            '416px',
                            '121px'
                        ],
                        [
                            "eid13742",
                            "left",
                            93,
                            231,
                            "linear",
                            "${accident2}",
                            '331px',
                            '7px'
                        ],
                        [
                            "eid13761",
                            "left",
                            1802,
                            231,
                            "linear",
                            "${accident2}",
                            '7px',
                            '617px'
                        ],
                        [
                            "eid13746",
                            "top",
                            93,
                            231,
                            "linear",
                            "${RoundRect2Copy4}",
                            '347px',
                            '0px'
                        ],
                        [
                            "eid13763",
                            "top",
                            1802,
                            231,
                            "linear",
                            "${RoundRect2Copy4}",
                            '0px',
                            '203px'
                        ],
                        [
                            "eid13741",
                            "opacity",
                            93,
                            108,
                            "linear",
                            "${accident2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13750",
                            "opacity",
                            93,
                            108,
                            "linear",
                            "${RoundRect2Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13739",
                            "height",
                            93,
                            231,
                            "linear",
                            "${accident2}",
                            '67px',
                            '401px'
                        ],
                        [
                            "eid13740",
                            "height",
                            1802,
                            231,
                            "linear",
                            "${accident2}",
                            '401px',
                            '100px'
                        ],
                        [
                            "eid13737",
                            "top",
                            93,
                            231,
                            "linear",
                            "${accident2}",
                            '345px',
                            '7px'
                        ],
                        [
                            "eid13738",
                            "top",
                            1802,
                            231,
                            "linear",
                            "${accident2}",
                            '7px',
                            '213px'
                        ],
                        [
                            "eid13764",
                            "opacity",
                            0,
                            57,
                            "linear",
                            "${right-select}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13753",
                            "width",
                            93,
                            231,
                            "linear",
                            "${RoundRect2Copy4}",
                            '81px',
                            '488px'
                        ],
                        [
                            "eid13754",
                            "width",
                            1802,
                            231,
                            "linear",
                            "${RoundRect2Copy4}",
                            '488px',
                            '124px'
                        ],
                        [
                            "eid13751",
                            "left",
                            93,
                            231,
                            "linear",
                            "${RoundRect2Copy4}",
                            '326px',
                            '0px'
                        ],
                        [
                            "eid13762",
                            "left",
                            1802,
                            231,
                            "linear",
                            "${RoundRect2Copy4}",
                            '0px',
                            '614px'
                        ]
                    ]
                }
            },
            "answer3": {
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
                            id: 'right-selectCopy',
                            opacity: '0',
                            rect: ['523px', '29px', '58px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['744px', '203px', '488px', '416px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy3',
                            stroke: [3, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['747px', '212px', '475px', '401px', 'auto', 'auto'],
                            id: 'accident3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/accident3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '488px', '416px']
                        }
                    }
                },
                timeline: {
                    duration: 2043,
                    autoPlay: true,
                    data: [
                        [
                            "eid13780",
                            "top",
                            103,
                            231,
                            "linear",
                            "${RoundRect2Copy3}",
                            '-19px',
                            '0px'
                        ],
                        [
                            "eid13779",
                            "top",
                            1812,
                            231,
                            "linear",
                            "${RoundRect2Copy3}",
                            '0px',
                            '203px'
                        ],
                        [
                            "eid13782",
                            "height",
                            103,
                            231,
                            "linear",
                            "${RoundRect2Copy3}",
                            '69px',
                            '416px'
                        ],
                        [
                            "eid13781",
                            "height",
                            1812,
                            231,
                            "linear",
                            "${RoundRect2Copy3}",
                            '416px',
                            '121px'
                        ],
                        [
                            "eid13775",
                            "left",
                            103,
                            231,
                            "linear",
                            "${accident3}",
                            '341px',
                            '6px'
                        ],
                        [
                            "eid13776",
                            "left",
                            1812,
                            231,
                            "linear",
                            "${accident3}",
                            '6px',
                            '747px'
                        ],
                        [
                            "eid13769",
                            "opacity",
                            0,
                            57,
                            "linear",
                            "${right-selectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13787",
                            "width",
                            103,
                            231,
                            "linear",
                            "${RoundRect2Copy3}",
                            '81px',
                            '488px'
                        ],
                        [
                            "eid13786",
                            "width",
                            1812,
                            231,
                            "linear",
                            "${RoundRect2Copy3}",
                            '488px',
                            '124px'
                        ],
                        [
                            "eid13772",
                            "height",
                            103,
                            231,
                            "linear",
                            "${accident3}",
                            '67px',
                            '401px'
                        ],
                        [
                            "eid13773",
                            "height",
                            1812,
                            231,
                            "linear",
                            "${accident3}",
                            '401px',
                            '100px'
                        ],
                        [
                            "eid13785",
                            "left",
                            103,
                            231,
                            "linear",
                            "${RoundRect2Copy3}",
                            '340px',
                            '0px'
                        ],
                        [
                            "eid13784",
                            "left",
                            1812,
                            231,
                            "linear",
                            "${RoundRect2Copy3}",
                            '0px',
                            '744px'
                        ],
                        [
                            "eid13783",
                            "opacity",
                            103,
                            108,
                            "linear",
                            "${RoundRect2Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13774",
                            "opacity",
                            103,
                            108,
                            "linear",
                            "${accident3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13777",
                            "width",
                            103,
                            231,
                            "linear",
                            "${accident3}",
                            '79px',
                            '475px'
                        ],
                        [
                            "eid13778",
                            "width",
                            1812,
                            231,
                            "linear",
                            "${accident3}",
                            '475px',
                            '117px'
                        ],
                        [
                            "eid13770",
                            "top",
                            103,
                            231,
                            "linear",
                            "${accident3}",
                            '-18px',
                            '7px'
                        ],
                        [
                            "eid13790",
                            "top",
                            1812,
                            231,
                            "linear",
                            "${accident3}",
                            '8px',
                            '212px'
                        ]
                    ]
                }
            },
            "answer4": {
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
                            id: 'right-selectCopy2',
                            opacity: '0',
                            rect: ['349px', '-19px', '58px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['614px', '332px', '488px', '416px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy2',
                            stroke: [3, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['618px', '342px', '475px', '401px', 'auto', 'auto'],
                            id: 'accident4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/accident4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '488px', '416px']
                        }
                    }
                },
                timeline: {
                    duration: 2074,
                    autoPlay: true,
                    data: [
                        [
                            "eid13800",
                            "left",
                            134,
                            231,
                            "linear",
                            "${accident4}",
                            '352px',
                            '7px'
                        ],
                        [
                            "eid13815",
                            "left",
                            1843,
                            231,
                            "linear",
                            "${accident4}",
                            '7px',
                            '618px'
                        ],
                        [
                            "eid13810",
                            "left",
                            134,
                            231,
                            "linear",
                            "${RoundRect2Copy2}",
                            '351px',
                            '0px'
                        ],
                        [
                            "eid13809",
                            "left",
                            1843,
                            231,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0px',
                            '614px'
                        ],
                        [
                            "eid13799",
                            "opacity",
                            134,
                            108,
                            "linear",
                            "${accident4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13802",
                            "width",
                            134,
                            231,
                            "linear",
                            "${accident4}",
                            '79px',
                            '475px'
                        ],
                        [
                            "eid13803",
                            "width",
                            1843,
                            231,
                            "linear",
                            "${accident4}",
                            '475px',
                            '117px'
                        ],
                        [
                            "eid13816",
                            "opacity",
                            0,
                            57,
                            "linear",
                            "${right-selectCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13795",
                            "top",
                            134,
                            231,
                            "linear",
                            "${accident4}",
                            '-20px',
                            '7px'
                        ],
                        [
                            "eid13796",
                            "top",
                            1843,
                            231,
                            "linear",
                            "${accident4}",
                            '7px',
                            '342px'
                        ],
                        [
                            "eid13805",
                            "top",
                            134,
                            231,
                            "linear",
                            "${RoundRect2Copy2}",
                            '-21px',
                            '0px'
                        ],
                        [
                            "eid13804",
                            "top",
                            1843,
                            231,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0px',
                            '332px'
                        ],
                        [
                            "eid13808",
                            "opacity",
                            134,
                            108,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13797",
                            "height",
                            134,
                            231,
                            "linear",
                            "${accident4}",
                            '67px',
                            '401px'
                        ],
                        [
                            "eid13798",
                            "height",
                            1843,
                            231,
                            "linear",
                            "${accident4}",
                            '401px',
                            '100px'
                        ],
                        [
                            "eid13812",
                            "width",
                            134,
                            231,
                            "linear",
                            "${RoundRect2Copy2}",
                            '81px',
                            '488px'
                        ],
                        [
                            "eid13811",
                            "width",
                            1843,
                            231,
                            "linear",
                            "${RoundRect2Copy2}",
                            '488px',
                            '124px'
                        ],
                        [
                            "eid13807",
                            "height",
                            134,
                            231,
                            "linear",
                            "${RoundRect2Copy2}",
                            '69px',
                            '416px'
                        ],
                        [
                            "eid13806",
                            "height",
                            1843,
                            231,
                            "linear",
                            "${RoundRect2Copy2}",
                            '416px',
                            '121px'
                        ]
                    ]
                }
            },
            "answer5": {
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
                            id: 'right-selectCopy3',
                            opacity: '0',
                            rect: ['13px', '87px', '58px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['744px', '333px', '488px', '416px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy',
                            stroke: [3, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['747px', '341px', '475px', '401px', 'auto', 'auto'],
                            id: 'accident5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/accident5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '488px', '416px']
                        }
                    }
                },
                timeline: {
                    duration: 2048,
                    autoPlay: true,
                    data: [
                        [
                            "eid13831",
                            "width",
                            108,
                            231,
                            "linear",
                            "${accident5}",
                            '79px',
                            '475px'
                        ],
                        [
                            "eid13832",
                            "width",
                            1817,
                            231,
                            "linear",
                            "${accident5}",
                            '475px',
                            '117px'
                        ],
                        [
                            "eid13824",
                            "top",
                            108,
                            231,
                            "linear",
                            "${accident5}",
                            '29px',
                            '7px'
                        ],
                        [
                            "eid13844",
                            "top",
                            1817,
                            231,
                            "linear",
                            "${accident5}",
                            '8px',
                            '341px'
                        ],
                        [
                            "eid13821",
                            "opacity",
                            0,
                            57,
                            "linear",
                            "${right-selectCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13829",
                            "left",
                            108,
                            231,
                            "linear",
                            "${accident5}",
                            '-38px',
                            '6px'
                        ],
                        [
                            "eid13830",
                            "left",
                            1817,
                            231,
                            "linear",
                            "${accident5}",
                            '6px',
                            '747px'
                        ],
                        [
                            "eid13839",
                            "left",
                            108,
                            231,
                            "linear",
                            "${RoundRect2Copy}",
                            '-39px',
                            '0px'
                        ],
                        [
                            "eid13838",
                            "left",
                            1817,
                            231,
                            "linear",
                            "${RoundRect2Copy}",
                            '0px',
                            '744px'
                        ],
                        [
                            "eid13836",
                            "height",
                            108,
                            231,
                            "linear",
                            "${RoundRect2Copy}",
                            '69px',
                            '416px'
                        ],
                        [
                            "eid13835",
                            "height",
                            1817,
                            231,
                            "linear",
                            "${RoundRect2Copy}",
                            '416px',
                            '121px'
                        ],
                        [
                            "eid13834",
                            "top",
                            108,
                            231,
                            "linear",
                            "${RoundRect2Copy}",
                            '29px',
                            '0px'
                        ],
                        [
                            "eid13833",
                            "top",
                            1817,
                            231,
                            "linear",
                            "${RoundRect2Copy}",
                            '0px',
                            '333px'
                        ],
                        [
                            "eid13837",
                            "opacity",
                            0,
                            108,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13828",
                            "opacity",
                            0,
                            108,
                            "linear",
                            "${accident5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13826",
                            "height",
                            108,
                            231,
                            "linear",
                            "${accident5}",
                            '67px',
                            '401px'
                        ],
                        [
                            "eid13827",
                            "height",
                            1817,
                            231,
                            "linear",
                            "${accident5}",
                            '401px',
                            '100px'
                        ],
                        [
                            "eid13841",
                            "width",
                            108,
                            231,
                            "linear",
                            "${RoundRect2Copy}",
                            '81px',
                            '488px'
                        ],
                        [
                            "eid13840",
                            "width",
                            1817,
                            231,
                            "linear",
                            "${RoundRect2Copy}",
                            '488px',
                            '124px'
                        ]
                    ]
                }
            },
            "oops": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['107px', '81px', '526px', '156px', 'auto', 'auto'],
                            id: 'game_result1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/game%20result1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['130px', '356px', '122px', '40px', 'auto', 'auto'],
                            id: 'replay-btnCopy',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/replay-btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['389px', '356px', '212px', '69px', 'auto', 'auto'],
                            id: 'next-btnCopy',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '732px', '266px']
                        }
                    }
                },
                timeline: {
                    duration: 414,
                    autoPlay: true,
                    data: [
                        [
                            "eid11335",
                            "left",
                            250,
                            164,
                            "linear",
                            "${next-btnCopy}",
                            '440px',
                            '389px'
                        ],
                        [
                            "eid11333",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${next-btnCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11334",
                            "opacity",
                            250,
                            88,
                            "linear",
                            "${next-btnCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11338",
                            "height",
                            250,
                            164,
                            "linear",
                            "${replay-btnCopy}",
                            '40px',
                            '69px'
                        ],
                        [
                            "eid11342",
                            "width",
                            250,
                            164,
                            "linear",
                            "${replay-btnCopy}",
                            '122px',
                            '212px'
                        ],
                        [
                            "eid11332",
                            "height",
                            250,
                            164,
                            "linear",
                            "${next-btnCopy}",
                            '40px',
                            '69px'
                        ],
                        [
                            "eid11323",
                            "left",
                            0,
                            182,
                            "linear",
                            "${game_result1}",
                            '291px',
                            '-32px'
                        ],
                        [
                            "eid11324",
                            "left",
                            182,
                            68,
                            "linear",
                            "${game_result1}",
                            '-32px',
                            '107px'
                        ],
                        [
                            "eid11336",
                            "width",
                            250,
                            164,
                            "linear",
                            "${next-btnCopy}",
                            '122px',
                            '212px'
                        ],
                        [
                            "eid11318",
                            "top",
                            0,
                            182,
                            "linear",
                            "${game_result1}",
                            '81px',
                            '-41px'
                        ],
                        [
                            "eid11319",
                            "top",
                            182,
                            68,
                            "linear",
                            "${game_result1}",
                            '-41px',
                            '0px'
                        ],
                        [
                            "eid11320",
                            "height",
                            0,
                            182,
                            "linear",
                            "${game_result1}",
                            '52px',
                            '227px'
                        ],
                        [
                            "eid11321",
                            "height",
                            182,
                            68,
                            "linear",
                            "${game_result1}",
                            '227px',
                            '158px'
                        ],
                        [
                            "eid11325",
                            "width",
                            0,
                            182,
                            "linear",
                            "${game_result1}",
                            '174px',
                            '797px'
                        ],
                        [
                            "eid11326",
                            "width",
                            182,
                            68,
                            "linear",
                            "${game_result1}",
                            '797px',
                            '526px'
                        ],
                        [
                            "eid11339",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replay-btnCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11340",
                            "opacity",
                            250,
                            88,
                            "linear",
                            "${replay-btnCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11337",
                            "top",
                            250,
                            164,
                            "linear",
                            "${replay-btnCopy}",
                            '356px',
                            '346px'
                        ],
                        [
                            "eid11341",
                            "left",
                            250,
                            164,
                            "linear",
                            "${replay-btnCopy}",
                            '181px',
                            '130px'
                        ],
                        [
                            "eid11322",
                            "opacity",
                            0,
                            98,
                            "linear",
                            "${game_result1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11331",
                            "top",
                            250,
                            164,
                            "linear",
                            "${next-btnCopy}",
                            '356px',
                            '346px'
                        ]
                    ]
                }
            },
            "decent": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '904px', '141px', 'auto', 'auto'],
                            id: 'game_result3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/game%20result3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'replay-btn',
                            opacity: '0',
                            rect: ['219px', '342px', '122px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/replay-btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'next-btn',
                            opacity: '0',
                            rect: ['478px', '327px', '212px', '69px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/next-btn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '904px', '247px']
                        }
                    }
                },
                timeline: {
                    duration: 414,
                    autoPlay: true,
                    data: [
                        [
                            "eid11311",
                            "width",
                            0,
                            182,
                            "linear",
                            "${game_result3}",
                            '418px',
                            '1016px'
                        ],
                        [
                            "eid11312",
                            "width",
                            182,
                            68,
                            "linear",
                            "${game_result3}",
                            '1016px',
                            '904px'
                        ],
                        [
                            "eid11300",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${replay-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11301",
                            "opacity",
                            250,
                            88,
                            "linear",
                            "${replay-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11304",
                            "top",
                            0,
                            182,
                            "linear",
                            "${game_result3}",
                            '78px',
                            '-17px'
                        ],
                        [
                            "eid11305",
                            "top",
                            182,
                            68,
                            "linear",
                            "${game_result3}",
                            '-17px',
                            '0px'
                        ],
                        [
                            "eid11299",
                            "height",
                            250,
                            164,
                            "linear",
                            "${replay-btn}",
                            '40px',
                            '69px'
                        ],
                        [
                            "eid11293",
                            "height",
                            250,
                            164,
                            "linear",
                            "${next-btn}",
                            '40px',
                            '69px'
                        ],
                        [
                            "eid11297",
                            "width",
                            250,
                            164,
                            "linear",
                            "${next-btn}",
                            '122px',
                            '212px'
                        ],
                        [
                            "eid11298",
                            "top",
                            250,
                            164,
                            "linear",
                            "${replay-btn}",
                            '342px',
                            '327px'
                        ],
                        [
                            "eid11309",
                            "left",
                            0,
                            182,
                            "linear",
                            "${game_result3}",
                            '234px',
                            '-55px'
                        ],
                        [
                            "eid11310",
                            "left",
                            182,
                            68,
                            "linear",
                            "${game_result3}",
                            '-55px',
                            '0px'
                        ],
                        [
                            "eid11302",
                            "left",
                            250,
                            164,
                            "linear",
                            "${replay-btn}",
                            '271px',
                            '219px'
                        ],
                        [
                            "eid11303",
                            "width",
                            250,
                            164,
                            "linear",
                            "${replay-btn}",
                            '122px',
                            '212px'
                        ],
                        [
                            "eid11292",
                            "top",
                            250,
                            164,
                            "linear",
                            "${next-btn}",
                            '342px',
                            '327px'
                        ],
                        [
                            "eid11296",
                            "left",
                            250,
                            164,
                            "linear",
                            "${next-btn}",
                            '530px',
                            '478px'
                        ],
                        [
                            "eid11294",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${next-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11295",
                            "opacity",
                            250,
                            88,
                            "linear",
                            "${next-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11306",
                            "height",
                            0,
                            182,
                            "linear",
                            "${game_result3}",
                            '52px',
                            '186px'
                        ],
                        [
                            "eid11307",
                            "height",
                            182,
                            68,
                            "linear",
                            "${game_result3}",
                            '186px',
                            '158px'
                        ],
                        [
                            "eid11308",
                            "opacity",
                            0,
                            98,
                            "linear",
                            "${game_result3}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "well-done": {
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
                            id: 'game_result2',
                            opacity: '0',
                            rect: ['37px', '78px', '218px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/game%20result2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['291px', '349px', '212px', '69px', 'auto', 'auto'],
                            id: 'next-btn',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '732px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 414,
                    autoPlay: true,
                    data: [
                        [
                            "eid11241",
                            "width",
                            0,
                            182,
                            "linear",
                            "${game_result2}",
                            '218px',
                            '949px'
                        ],
                        [
                            "eid11249",
                            "width",
                            182,
                            68,
                            "linear",
                            "${game_result2}",
                            '949px',
                            '662px'
                        ],
                        [
                            "eid11242",
                            "left",
                            0,
                            182,
                            "linear",
                            "${game_result2}",
                            '271px',
                            '-105px'
                        ],
                        [
                            "eid11247",
                            "left",
                            182,
                            68,
                            "linear",
                            "${game_result2}",
                            '-105px',
                            '37px'
                        ],
                        [
                            "eid11279",
                            "width",
                            250,
                            164,
                            "linear",
                            "${next-btn}",
                            '122px',
                            '212px'
                        ],
                        [
                            "eid11277",
                            "height",
                            250,
                            164,
                            "linear",
                            "${next-btn}",
                            '40px',
                            '69px'
                        ],
                        [
                            "eid11230",
                            "opacity",
                            0,
                            98,
                            "linear",
                            "${game_result2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11276",
                            "top",
                            250,
                            164,
                            "linear",
                            "${next-btn}",
                            '349px',
                            '337px'
                        ],
                        [
                            "eid11278",
                            "left",
                            250,
                            164,
                            "linear",
                            "${next-btn}",
                            '291px',
                            '260px'
                        ],
                        [
                            "eid11226",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${next-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11259",
                            "opacity",
                            250,
                            88,
                            "linear",
                            "${next-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11239",
                            "height",
                            0,
                            182,
                            "linear",
                            "${game_result2}",
                            '52px',
                            '227px'
                        ],
                        [
                            "eid11250",
                            "height",
                            182,
                            68,
                            "linear",
                            "${game_result2}",
                            '227px',
                            '158px'
                        ],
                        [
                            "eid11240",
                            "top",
                            0,
                            182,
                            "linear",
                            "${game_result2}",
                            '78px',
                            '-15px'
                        ],
                        [
                            "eid11248",
                            "top",
                            182,
                            68,
                            "linear",
                            "${game_result2}",
                            '-15px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("3_edgeActions.js");
})("EDGE-1646797");
