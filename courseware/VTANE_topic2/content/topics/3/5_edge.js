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
                            id: 'school-gym',
                            type: 'image',
                            rect: ['-6px', '-5px', '1268px', '586px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"school-gym.png",'0px','0px']
                        },
                        {
                            id: 'silhouette5',
                            type: 'image',
                            rect: ['227px', '577px', '528px', '505px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"silhouette5.png",'0px','0px']
                        },
                        {
                            id: 'silhouette4',
                            type: 'image',
                            rect: ['1030px', '99px', '369px', '587px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"silhouette4.png",'0px','0px']
                        },
                        {
                            id: 'silhouette3',
                            type: 'image',
                            rect: ['363px', '123px', '272px', '433px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"silhouette3.png",'0px','0px']
                        },
                        {
                            id: 'silhouette2',
                            type: 'image',
                            rect: ['-199px', '116px', '369px', '586px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"silhouette2.png",'0px','0px']
                        },
                        {
                            id: 'silhouette1',
                            type: 'image',
                            rect: ['210px', '16px', '580px', '625px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"silhouette1.png",'0px','0px']
                        },
                        {
                            id: 'question-mark',
                            type: 'image',
                            rect: ['566px', '149px', '74px', '115px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"question-mark.png",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['-6px', '-15px', '1038px', '603px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.52)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'railings',
                            symbolName: 'railings',
                            type: 'rect',
                            rect: ['-227px', '475px', '1293', '108', 'auto', 'auto']
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
                            rect: ['329px', '241px', '378px', '94px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Stereotypes",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(0,0,0,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'ashish-up-arm-back',
                            type: 'image',
                            rect: ['1037px', '345px', '108px', '285px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-up-arm-back.png",'0px','0px'],
                            transform: [[],['8']]
                        },
                        {
                            id: 'ashish-shop-body',
                            type: 'image',
                            rect: ['1072px', '248px', '378px', '694px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-shop-body.png",'0px','0px'],
                            transform: [[],['3']]
                        },
                        {
                            id: 'ashish-up-arm-front',
                            type: 'image',
                            rect: ['1274px', '323px', '116px', '316px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-up-arm-front.png",'0px','0px'],
                            transform: [[],['-16']]
                        },
                        {
                            id: 'ashish-low-arm-front2',
                            type: 'image',
                            rect: ['876px', '360px', '96px', '278px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-low-arm-front.png",'0px','0px'],
                            transform: [[],['143']]
                        },
                        {
                            id: 'ashish-hand2',
                            type: 'image',
                            rect: ['674px', '326px', '188px', '130px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-hand2.png",'0px','0px'],
                            transform: [[],['71']]
                        },
                        {
                            id: 'ashish-eyes-base',
                            type: 'image',
                            rect: ['1092px', '173px', '97px', '26px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-eyes-base.png",'0px','0px']
                        },
                        {
                            id: 'ashish-eyeballs',
                            type: 'image',
                            rect: ['1090px', '174px', '77px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-eyeballs.png",'0px','0px']
                        },
                        {
                            id: 'ashish-head',
                            type: 'image',
                            rect: ['1031px', '38px', '272px', '278px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-head.png",'0px','0px']
                        },
                        {
                            id: 'ashish-eyes-blink',
                            type: 'image',
                            rect: ['1090px', '169px', '105px', '32px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-eyes-blink.png",'0px','0px']
                        },
                        {
                            id: 'ashish-eyes-laugh',
                            type: 'image',
                            rect: ['1088px', '145px', '103px', '59px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-eyes-laugh.png",'0px','0px']
                        },
                        {
                            id: 'ashish-mouth-smile2',
                            type: 'image',
                            rect: ['1091px', '238px', '80px', '72px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-mouth-smile2.png",'0px','0px']
                        },
                        {
                            id: 'ashish-mouth-smile1',
                            type: 'image',
                            rect: ['755px', '244px', '82px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-mouth-smile1.png",'0px','0px']
                        },
                        {
                            id: 'ashish-mouth-talk2',
                            type: 'image',
                            rect: ['1090px', '236px', '76px', '76px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-mouth-talk2.png",'0px','0px']
                        },
                        {
                            id: 'ashish-low-arm-front',
                            type: 'image',
                            rect: ['886px', '530px', '98px', '285px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-low-arm-front.png",'0px','0px'],
                            transform: [[],['57'],[],['0.92297','0.91991']]
                        },
                        {
                            id: 'ashish-hand4',
                            type: 'image',
                            rect: ['429px', '482px', '123px', '199px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ashish-hand4.png",'0px','0px'],
                            transform: [[],['-3'],[],['-0.90157','0.90357']]
                        },
                        {
                            id: 'jannah-up-arm-back',
                            type: 'image',
                            rect: ['101px', '349px', '110px', '298px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-up-arm-back.png",'0px','0px']
                        },
                        {
                            id: 'jannah-shop-body',
                            type: 'image',
                            rect: ['-70px', '271px', '268px', '421px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-shop-body.png",'0px','0px'],
                            transform: [[],['-12'],[],['-1']]
                        },
                        {
                            id: 'jannah-up-arm-front',
                            type: 'image',
                            rect: ['-107px', '343px', '119px', '312px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-up-arm-front.png",'0px','0px'],
                            transform: [[],['6']]
                        },
                        {
                            id: 'jannah-eyes-base',
                            type: 'image',
                            rect: ['92px', '189px', '110px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-eyes-base.png",'0px','0px']
                        },
                        {
                            id: 'jannah-eyeballs',
                            type: 'image',
                            rect: ['127px', '191px', '76px', '25px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-eyeballs.png",'0px','0px']
                        },
                        {
                            id: 'jannah-head',
                            type: 'image',
                            rect: ['-64px', '38px', '312px', '312px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-head.png",'0px','0px']
                        },
                        {
                            id: 'jannah-eyes-laugh',
                            type: 'image',
                            rect: ['103px', '169px', '100px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-eyes-laugh.png",'0px','0px']
                        },
                        {
                            id: 'jannah-eyes-blink',
                            type: 'image',
                            rect: ['105px', '198px', '99px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-eyes-blink.png",'0px','0px']
                        },
                        {
                            id: 'jannah-mouth-smile1',
                            type: 'image',
                            rect: ['126px', '261px', '71px', '55px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-mouth-smile1.png",'0px','0px']
                        },
                        {
                            id: 'jannah-mouth-smile2',
                            type: 'image',
                            rect: ['130px', '263px', '66px', '45px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-mouth-smile2.png",'0px','0px']
                        },
                        {
                            id: 'jannah-low-arm-front',
                            type: 'image',
                            rect: ['-153px', '432px', '100px', '238px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-low-arm-front.png",'0px','0px'],
                            transform: [[],['-251']]
                        },
                        {
                            id: 'jannah-hand3',
                            type: 'image',
                            rect: ['-312px', '489px', '108px', '168px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"jannah-hand3.png",'0px','0px'],
                            transform: [[],['-40'],[],['-1']]
                        },
                        {
                            id: 'narrator-text-balloon',
                            display: 'block',
                            type: 'image',
                            rect: ['227px', '411px', '580px', '153px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['133px', '377px', '761px', '172px', 'auto', 'auto'],
                            opacity: '0',
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [43, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['261px', '631px', '510px', '108px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Characteristics can be positive or negative.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [43, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'narrator-text-balloon-square',
                            type: 'image',
                            rect: ['494px', '143px', '80px', '320px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon-square.png",'0px','0px']
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['396px', '202px', '298px', '219px', 'auto', 'auto'],
                            opacity: '0',
                            text: "A generalisation of a group of people we prescribe a set of characteristics to.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'narrator-text-balloon2',
                            type: 'image',
                            rect: ['143px', '200px', '739px', '154px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['186px', '220px', '638px', '95px', 'auto', 'auto'],
                            opacity: '0',
                            text: "What are some common stereotypes you see around you?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [42, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['180px', '216px', '652px', '161px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Let's take a look at Ashish's and Jannah's classmates. What are your first impressions of them?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [42, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['227px', '377px', '571px', '172px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<br>Are a mind-set which can be difficult to change.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'narrator-text-balloon2Copy3',
                            display: 'block',
                            type: 'image',
                            rect: ['147px', '671px', '756px', '278px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'group-of-ppl',
                            display: 'none',
                            type: 'image',
                            rect: ['336px', '199px', '378px', '360px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"group-of-ppl.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['246px', '427px', '534px', '120px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Are an easy but unreliable way of deciding how to interact with others.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt-stereo2',
                            type: 'image',
                            rect: ['362px', '529px', '387px', '108px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-stereo2.png",'0px','0px']
                        },
                        {
                            id: 'classmates',
                            symbolName: 'classmates',
                            display: 'none',
                            type: 'rect',
                            rect: ['40px', '607px', '942', '248', 'auto', 'auto']
                        },
                        {
                            id: 'submit-btn',
                            type: 'image',
                            rect: ['794px', '497px', '221px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"submit-btn.png",'0px','0px']
                        },
                        {
                            id: 'mainmenu',
                            display: 'none',
                            type: 'image',
                            rect: ['794px', '495px', '221px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'instruction',
                            symbolName: 'instruction',
                            display: 'none',
                            type: 'rect',
                            rect: ['270px', '-21px', '791', '175', 'auto', 'auto']
                        },
                        {
                            id: 'instruction-btn',
                            type: 'image',
                            rect: ['4px', '495px', '234px', '76px', 'auto', 'auto'],
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
                        },
                        {
                            id: 'game-resultCorrect',
                            symbolName: 'game-result2',
                            display: 'none',
                            type: 'rect',
                            rect: ['82', '151', '868', '207', 'auto', 'auto']
                        },
                        {
                            id: 'Cover',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '488px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
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
                    duration: 61850,
                    autoPlay: true,
                    labels: {
                        "test": 51695,
                        "end": 61850
                    },
                    data: [
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
                            "eid3018",
                            "opacity",
                            28008,
                            42,
                            "linear",
                            "${silhouette4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3034",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3033",
                            "opacity",
                            20295,
                            65,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3051",
                            "opacity",
                            26101,
                            65,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3069",
                            "opacity",
                            33895,
                            65,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3093",
                            "opacity",
                            43050,
                            113,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3206",
                            "opacity",
                            52755,
                            85,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2946",
                            "opacity",
                            25395,
                            155,
                            "linear",
                            "${silhouette3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1392",
                            "left",
                            10888,
                            455,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '-137px',
                            '248px'
                        ],
                        [
                            "eid3750",
                            "left",
                            13307,
                            193,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '248px',
                            '247px'
                        ],
                        [
                            "eid3751",
                            "left",
                            13500,
                            0,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '247px',
                            '247px'
                        ],
                        [
                            "eid3795",
                            "left",
                            17304,
                            268,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '247px',
                            '245px'
                        ],
                        [
                            "eid3796",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '245px',
                            '126px'
                        ],
                        [
                            "eid3141",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '126px',
                            '-136px'
                        ],
                        [
                            "eid2535",
                            "left",
                            0,
                            21200,
                            "linear",
                            "${railings}",
                            '-227px',
                            '-51px'
                        ],
                        [
                            "eid1393",
                            "left",
                            10888,
                            455,
                            "linear",
                            "${jannah-shop-body}",
                            '-333px',
                            '52px'
                        ],
                        [
                            "eid2685",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-shop-body}",
                            '52px',
                            '-70px'
                        ],
                        [
                            "eid3134",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-shop-body}",
                            '-70px',
                            '-332px'
                        ],
                        [
                            "eid1825",
                            "left",
                            11158,
                            427,
                            "linear",
                            "${ashish-eyes-blink}",
                            '1096px',
                            '753px'
                        ],
                        [
                            "eid2727",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-eyes-blink}",
                            '753px',
                            '866px'
                        ],
                        [
                            "eid3168",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-eyes-blink}",
                            '866px',
                            '1090px'
                        ],
                        [
                            "eid2627",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid2626",
                            "opacity",
                            11585,
                            60,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2632",
                            "opacity",
                            17500,
                            72,
                            "linear",
                            "${Text5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1355",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-head}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1420",
                            "opacity",
                            10888,
                            57,
                            "linear",
                            "${jannah-head}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3213",
                            "display",
                            0,
                            0,
                            "linear",
                            "${classmates}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3212",
                            "display",
                            51800,
                            0,
                            "linear",
                            "${classmates}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2692",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-low-arm-front}",
                            '-31px',
                            '-153px'
                        ],
                        [
                            "eid3136",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-low-arm-front}",
                            '-153px',
                            '-415px'
                        ],
                        [
                            "eid2863",
                            "opacity",
                            20543,
                            67,
                            "linear",
                            "${silhouette1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2553",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2551",
                            "opacity",
                            2250,
                            83,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2568",
                            "opacity",
                            10792,
                            170,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3749",
                            "top",
                            13307,
                            193,
                            "linear",
                            "${jannah-eyes-base}",
                            '182px',
                            '189px'
                        ],
                        [
                            "eid3767",
                            "top",
                            17304,
                            0,
                            "linear",
                            "${jannah-eyes-base}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid4310",
                            "left",
                            61590,
                            173,
                            "linear",
                            "${submit-btn}",
                            '813px',
                            '731px'
                        ],
                        [
                            "eid4318",
                            "left",
                            61763,
                            87,
                            "linear",
                            "${submit-btn}",
                            '731px',
                            '794px'
                        ],
                        [
                            "eid2913",
                            "top",
                            22162,
                            190,
                            "linear",
                            "${silhouette3}",
                            '579px',
                            '105px'
                        ],
                        [
                            "eid2926",
                            "top",
                            22410,
                            590,
                            "linear",
                            "${silhouette3}",
                            '105px',
                            '75px'
                        ],
                        [
                            "eid2941",
                            "top",
                            25138,
                            412,
                            "linear",
                            "${silhouette3}",
                            '75px',
                            '123px'
                        ],
                        [
                            "eid3733",
                            "rotateZ",
                            13307,
                            193,
                            "linear",
                            "${jannah-eyes-blink}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid3771",
                            "rotateZ",
                            17304,
                            268,
                            "linear",
                            "${jannah-eyes-blink}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid4307",
                            "height",
                            61590,
                            173,
                            "linear",
                            "${submit-btn}",
                            '45px',
                            '94px'
                        ],
                        [
                            "eid4315",
                            "height",
                            61763,
                            87,
                            "linear",
                            "${submit-btn}",
                            '94px',
                            '72px'
                        ],
                        [
                            "eid1354",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-eyes-base}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1424",
                            "opacity",
                            10888,
                            57,
                            "linear",
                            "${jannah-eyes-base}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1360",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-shop-body}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1421",
                            "opacity",
                            10888,
                            57,
                            "linear",
                            "${jannah-shop-body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3623",
                            "height",
                            52840,
                            173,
                            "linear",
                            "${instruction-btn}",
                            '32px',
                            '95px'
                        ],
                        [
                            "eid3624",
                            "height",
                            53013,
                            87,
                            "linear",
                            "${instruction-btn}",
                            '95px',
                            '76px'
                        ],
                        [
                            "eid4213",
                            "top",
                            19396,
                            104,
                            "linear",
                            "${ashish-hand2}",
                            '729px',
                            '530px'
                        ],
                        [
                            "eid4217",
                            "top",
                            19500,
                            127,
                            "linear",
                            "${ashish-hand2}",
                            '530px',
                            '280px'
                        ],
                        [
                            "eid4231",
                            "top",
                            19627,
                            1188,
                            "linear",
                            "${ashish-hand2}",
                            '280px',
                            '326px'
                        ],
                        [
                            "eid4232",
                            "top",
                            20815,
                            97,
                            "linear",
                            "${ashish-hand2}",
                            '326px',
                            '507px'
                        ],
                        [
                            "eid4240",
                            "top",
                            20912,
                            124,
                            "linear",
                            "${ashish-hand2}",
                            '507px',
                            '729px'
                        ],
                        [
                            "eid2536",
                            "top",
                            0,
                            21200,
                            "linear",
                            "${railings}",
                            '489px',
                            '475px'
                        ],
                        [
                            "eid3190",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3189",
                            "opacity",
                            45750,
                            130,
                            "linear",
                            "${Text7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3205",
                            "opacity",
                            52755,
                            85,
                            "linear",
                            "${Text7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1826",
                            "left",
                            11158,
                            427,
                            "linear",
                            "${ashish-head}",
                            '1037px',
                            '694px'
                        ],
                        [
                            "eid2725",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-head}",
                            '694px',
                            '807px'
                        ],
                        [
                            "eid3170",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-head}",
                            '807px',
                            '1031px'
                        ],
                        [
                            "eid2760",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2759",
                            "opacity",
                            18000,
                            83,
                            "linear",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2777",
                            "opacity",
                            19845,
                            65,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1790",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-mouth-talk2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid4174",
                            "opacity",
                            19191,
                            98,
                            "linear",
                            "${ashish-mouth-talk2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4244",
                            "opacity",
                            20500,
                            110,
                            "linear",
                            "${ashish-mouth-talk2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4337",
                            "display",
                            42441,
                            0,
                            "linear",
                            "${narrator-text-balloon2Copy3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4338",
                            "display",
                            42606,
                            0,
                            "linear",
                            "${narrator-text-balloon2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1388",
                            "left",
                            10888,
                            455,
                            "linear",
                            "${jannah-head}",
                            '-327px',
                            '58px'
                        ],
                        [
                            "eid3737",
                            "left",
                            13307,
                            193,
                            "linear",
                            "${jannah-head}",
                            '58px',
                            '72px'
                        ],
                        [
                            "eid3738",
                            "left",
                            13500,
                            0,
                            "linear",
                            "${jannah-head}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid3762",
                            "left",
                            17304,
                            268,
                            "linear",
                            "${jannah-head}",
                            '72px',
                            '58px'
                        ],
                        [
                            "eid2689",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-head}",
                            '58px',
                            '-64px'
                        ],
                        [
                            "eid3138",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-head}",
                            '-64px',
                            '-326px'
                        ],
                        [
                            "eid3625",
                            "width",
                            52840,
                            173,
                            "linear",
                            "${instruction-btn}",
                            '99px',
                            '293px'
                        ],
                        [
                            "eid3626",
                            "width",
                            53013,
                            87,
                            "linear",
                            "${instruction-btn}",
                            '293px',
                            '234px'
                        ],
                        [
                            "eid3891",
                            "top",
                            12000,
                            100,
                            "linear",
                            "${ashish-hand4}",
                            '593px',
                            '512px'
                        ],
                        [
                            "eid3897",
                            "top",
                            12100,
                            150,
                            "linear",
                            "${ashish-hand4}",
                            '512px',
                            '347px'
                        ],
                        [
                            "eid3924",
                            "top",
                            12250,
                            195,
                            "linear",
                            "${ashish-hand4}",
                            '347px',
                            '311px'
                        ],
                        [
                            "eid3925",
                            "top",
                            12445,
                            242,
                            "linear",
                            "${ashish-hand4}",
                            '311px',
                            '357px'
                        ],
                        [
                            "eid3932",
                            "top",
                            12687,
                            258,
                            "linear",
                            "${ashish-hand4}",
                            '357px',
                            '347px'
                        ],
                        [
                            "eid3901",
                            "top",
                            12945,
                            106,
                            "linear",
                            "${ashish-hand4}",
                            '347px',
                            '482px'
                        ],
                        [
                            "eid3909",
                            "top",
                            13051,
                            112,
                            "linear",
                            "${ashish-hand4}",
                            '482px',
                            '554px'
                        ],
                        [
                            "eid2995",
                            "height",
                            27119,
                            745,
                            "linear",
                            "${silhouette4}",
                            '587px',
                            '791px'
                        ],
                        [
                            "eid2781",
                            "top",
                            18750,
                            205,
                            "linear",
                            "${silhouette1}",
                            '576px',
                            '16px'
                        ],
                        [
                            "eid2783",
                            "top",
                            18955,
                            135,
                            "linear",
                            "${silhouette1}",
                            '16px',
                            '86px'
                        ],
                        [
                            "eid2794",
                            "top",
                            19090,
                            160,
                            "linear",
                            "${silhouette1}",
                            '86px',
                            '89px'
                        ],
                        [
                            "eid4176",
                            "top",
                            19396,
                            0,
                            "linear",
                            "${ashish-up-arm-front}",
                            '323px',
                            '323px'
                        ],
                        [
                            "eid4179",
                            "top",
                            19627,
                            0,
                            "linear",
                            "${ashish-up-arm-front}",
                            '323px',
                            '323px'
                        ],
                        [
                            "eid4185",
                            "top",
                            20815,
                            0,
                            "linear",
                            "${ashish-up-arm-front}",
                            '323px',
                            '323px'
                        ],
                        [
                            "eid4187",
                            "top",
                            21036,
                            0,
                            "linear",
                            "${ashish-up-arm-front}",
                            '323px',
                            '323px'
                        ],
                        [
                            "eid4565",
                            "top",
                            33800,
                            160,
                            "linear",
                            "${group-of-ppl}",
                            '586px',
                            '199px'
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
                            2000,
                            295,
                            "linear",
                            "${text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2826",
                            "top",
                            19396,
                            185,
                            "linear",
                            "${question-mark}",
                            '219px',
                            '194px'
                        ],
                        [
                            "eid2832",
                            "top",
                            19581,
                            110,
                            "linear",
                            "${question-mark}",
                            '194px',
                            '212px'
                        ],
                        [
                            "eid2853",
                            "top",
                            20153,
                            142,
                            "linear",
                            "${question-mark}",
                            '212px',
                            '198px'
                        ],
                        [
                            "eid2888",
                            "top",
                            20851,
                            185,
                            "linear",
                            "${question-mark}",
                            '219px',
                            '194px'
                        ],
                        [
                            "eid2889",
                            "top",
                            21036,
                            110,
                            "linear",
                            "${question-mark}",
                            '194px',
                            '212px'
                        ],
                        [
                            "eid2890",
                            "top",
                            21608,
                            142,
                            "linear",
                            "${question-mark}",
                            '212px',
                            '198px'
                        ],
                        [
                            "eid2947",
                            "top",
                            22623,
                            185,
                            "linear",
                            "${question-mark}",
                            '219px',
                            '252px'
                        ],
                        [
                            "eid2948",
                            "top",
                            22808,
                            110,
                            "linear",
                            "${question-mark}",
                            '252px',
                            '263px'
                        ],
                        [
                            "eid2949",
                            "top",
                            25180,
                            142,
                            "linear",
                            "${question-mark}",
                            '263px',
                            '226px'
                        ],
                        [
                            "eid2964",
                            "top",
                            25658,
                            185,
                            "linear",
                            "${question-mark}",
                            '219px',
                            '177px'
                        ],
                        [
                            "eid2965",
                            "top",
                            25843,
                            72,
                            "linear",
                            "${question-mark}",
                            '177px',
                            '201px'
                        ],
                        [
                            "eid3071",
                            "top",
                            25915,
                            38,
                            "linear",
                            "${question-mark}",
                            '201px',
                            '240px'
                        ],
                        [
                            "eid2966",
                            "top",
                            26415,
                            142,
                            "linear",
                            "${question-mark}",
                            '240px',
                            '161px'
                        ],
                        [
                            "eid2999",
                            "top",
                            27050,
                            185,
                            "linear",
                            "${question-mark}",
                            '161px',
                            '177px'
                        ],
                        [
                            "eid3000",
                            "top",
                            27235,
                            110,
                            "linear",
                            "${question-mark}",
                            '177px',
                            '219px'
                        ],
                        [
                            "eid3001",
                            "top",
                            27807,
                            142,
                            "linear",
                            "${question-mark}",
                            '219px',
                            '149px'
                        ],
                        [
                            "eid2578",
                            "height",
                            10962,
                            196,
                            "linear",
                            "${txt-stereo2}",
                            '72px',
                            '199px'
                        ],
                        [
                            "eid2594",
                            "height",
                            11158,
                            130,
                            "linear",
                            "${txt-stereo2}",
                            '199px',
                            '154px'
                        ],
                        [
                            "eid2603",
                            "height",
                            11288,
                            357,
                            "linear",
                            "${txt-stereo2}",
                            '154px',
                            '108px'
                        ],
                        [
                            "eid1357",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-up-arm-back}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1423",
                            "opacity",
                            10888,
                            57,
                            "linear",
                            "${jannah-up-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3030",
                            "top",
                            20295,
                            161,
                            "linear",
                            "${narrator-text-balloon2}",
                            '42px',
                            '410px'
                        ],
                        [
                            "eid3045",
                            "top",
                            25953,
                            148,
                            "linear",
                            "${narrator-text-balloon2}",
                            '410px',
                            '583px'
                        ],
                        [
                            "eid3049",
                            "top",
                            26101,
                            161,
                            "linear",
                            "${narrator-text-balloon2}",
                            '42px',
                            '359px'
                        ],
                        [
                            "eid3063",
                            "top",
                            33800,
                            160,
                            "linear",
                            "${narrator-text-balloon2}",
                            '359px',
                            '587px'
                        ],
                        [
                            "eid3088",
                            "top",
                            33960,
                            90,
                            "linear",
                            "${narrator-text-balloon2}",
                            '587px',
                            '277px'
                        ],
                        [
                            "eid3099",
                            "top",
                            43050,
                            198,
                            "linear",
                            "${narrator-text-balloon2}",
                            '277px',
                            '200px'
                        ],
                        [
                            "eid3186",
                            "top",
                            45750,
                            130,
                            "linear",
                            "${narrator-text-balloon2}",
                            '200px',
                            '197px'
                        ],
                        [
                            "eid3249",
                            "top",
                            51931,
                            119,
                            "linear",
                            "${narrator-text-balloon2}",
                            '197px',
                            '38px'
                        ],
                        [
                            "eid3250",
                            "top",
                            52050,
                            76,
                            "linear",
                            "${narrator-text-balloon2}",
                            '38px',
                            '89px'
                        ],
                        [
                            "eid3252",
                            "top",
                            52126,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '89px',
                            '89px'
                        ],
                        [
                            "eid3258",
                            "top",
                            52666,
                            174,
                            "linear",
                            "${narrator-text-balloon2}",
                            '89px',
                            '-214px'
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
                            "eid2618",
                            "top",
                            11500,
                            145,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '58px',
                            '143px'
                        ],
                        [
                            "eid2638",
                            "top",
                            17500,
                            172,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '143px',
                            '58px'
                        ],
                        [
                            "eid1792",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-eyes-laugh}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3852",
                            "opacity",
                            12000,
                            100,
                            "linear",
                            "${ashish-eyes-laugh}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3938",
                            "opacity",
                            12945,
                            106,
                            "linear",
                            "${ashish-eyes-laugh}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2008",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-low-arm-front}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3857",
                            "opacity",
                            11926,
                            74,
                            "linear",
                            "${ashish-low-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3879",
                            "opacity",
                            13093,
                            70,
                            "linear",
                            "${ashish-low-arm-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1819",
                            "left",
                            11158,
                            427,
                            "linear",
                            "${ashish-eyeballs}",
                            '1096px',
                            '753px'
                        ],
                        [
                            "eid3943",
                            "left",
                            12945,
                            106,
                            "linear",
                            "${ashish-eyeballs}",
                            '753px',
                            '765px'
                        ],
                        [
                            "eid3944",
                            "left",
                            13051,
                            0,
                            "linear",
                            "${ashish-eyeballs}",
                            '765px',
                            '765px'
                        ],
                        [
                            "eid3946",
                            "left",
                            17371,
                            129,
                            "linear",
                            "${ashish-eyeballs}",
                            '765px',
                            '753px'
                        ],
                        [
                            "eid2726",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-eyeballs}",
                            '753px',
                            '866px'
                        ],
                        [
                            "eid3960",
                            "left",
                            18250,
                            81,
                            "linear",
                            "${ashish-eyeballs}",
                            '866px',
                            '867px'
                        ],
                        [
                            "eid3961",
                            "left",
                            18331,
                            0,
                            "linear",
                            "${ashish-eyeballs}",
                            '867px',
                            '867px'
                        ],
                        [
                            "eid3962",
                            "left",
                            18872,
                            83,
                            "linear",
                            "${ashish-eyeballs}",
                            '867px',
                            '866px'
                        ],
                        [
                            "eid3979",
                            "left",
                            28997,
                            95,
                            "linear",
                            "${ashish-eyeballs}",
                            '866px',
                            '878px'
                        ],
                        [
                            "eid3980",
                            "left",
                            29092,
                            0,
                            "linear",
                            "${ashish-eyeballs}",
                            '878px',
                            '878px'
                        ],
                        [
                            "eid3987",
                            "left",
                            43050,
                            0,
                            "linear",
                            "${ashish-eyeballs}",
                            '878px',
                            '878px'
                        ],
                        [
                            "eid3176",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-eyeballs}",
                            '878px',
                            '1090px'
                        ],
                        [
                            "eid4560",
                            "display",
                            61850,
                            0,
                            "linear",
                            "${Cover}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3637",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3636",
                            "display",
                            52666,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4553",
                            "display",
                            61850,
                            0,
                            "linear",
                            "${instruction}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3865",
                            "top",
                            11926,
                            74,
                            "linear",
                            "${ashish-low-arm-front}",
                            '574px',
                            '530px'
                        ],
                        [
                            "eid3870",
                            "top",
                            12000,
                            250,
                            "linear",
                            "${ashish-low-arm-front}",
                            '530px',
                            '438px'
                        ],
                        [
                            "eid3928",
                            "top",
                            12250,
                            195,
                            "linear",
                            "${ashish-low-arm-front}",
                            '438px',
                            '424px'
                        ],
                        [
                            "eid3929",
                            "top",
                            12445,
                            242,
                            "linear",
                            "${ashish-low-arm-front}",
                            '424px',
                            '431px'
                        ],
                        [
                            "eid3933",
                            "top",
                            12687,
                            258,
                            "linear",
                            "${ashish-low-arm-front}",
                            '431px',
                            '438px'
                        ],
                        [
                            "eid3874",
                            "top",
                            12945,
                            218,
                            "linear",
                            "${ashish-low-arm-front}",
                            '438px',
                            '530px'
                        ],
                        [
                            "eid3247",
                            "top",
                            51931,
                            119,
                            "linear",
                            "${Text7}",
                            '216px',
                            '57px'
                        ],
                        [
                            "eid3248",
                            "top",
                            52050,
                            76,
                            "linear",
                            "${Text7}",
                            '57px',
                            '108px'
                        ],
                        [
                            "eid3251",
                            "top",
                            52126,
                            0,
                            "linear",
                            "${Text7}",
                            '108px',
                            '108px'
                        ],
                        [
                            "eid3257",
                            "top",
                            52666,
                            174,
                            "linear",
                            "${Text7}",
                            '108px',
                            '-195px'
                        ],
                        [
                            "eid2622",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2621",
                            "opacity",
                            11500,
                            47,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2633",
                            "opacity",
                            17622,
                            72,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1353",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-eyes-blink}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3677",
                            "opacity",
                            11500,
                            47,
                            "linear",
                            "${jannah-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3680",
                            "opacity",
                            11585,
                            60,
                            "linear",
                            "${jannah-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3754",
                            "opacity",
                            13605,
                            47,
                            "linear",
                            "${jannah-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3753",
                            "opacity",
                            13690,
                            60,
                            "linear",
                            "${jannah-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3798",
                            "opacity",
                            17116,
                            47,
                            "linear",
                            "${jannah-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3797",
                            "opacity",
                            17201,
                            60,
                            "linear",
                            "${jannah-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3810",
                            "opacity",
                            19691,
                            47,
                            "linear",
                            "${jannah-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3811",
                            "opacity",
                            19776,
                            60,
                            "linear",
                            "${jannah-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3812",
                            "opacity",
                            21750,
                            47,
                            "linear",
                            "${jannah-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3813",
                            "opacity",
                            21835,
                            60,
                            "linear",
                            "${jannah-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3814",
                            "opacity",
                            25395,
                            47,
                            "linear",
                            "${jannah-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3815",
                            "opacity",
                            25480,
                            60,
                            "linear",
                            "${jannah-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3822",
                            "opacity",
                            26800,
                            47,
                            "linear",
                            "${jannah-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3821",
                            "opacity",
                            26885,
                            60,
                            "linear",
                            "${jannah-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3824",
                            "opacity",
                            28405,
                            47,
                            "linear",
                            "${jannah-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3823",
                            "opacity",
                            28490,
                            60,
                            "linear",
                            "${jannah-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2986",
                            "left",
                            26734,
                            316,
                            "linear",
                            "${silhouette4}",
                            '1030px',
                            '363px'
                        ],
                        [
                            "eid2997",
                            "left",
                            27119,
                            745,
                            "linear",
                            "${silhouette4}",
                            '363px',
                            '301px'
                        ],
                        [
                            "eid4334",
                            "opacity",
                            42441,
                            0,
                            "linear",
                            "${narrator-text-balloon2Copy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2006",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-hand4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3882",
                            "opacity",
                            12000,
                            100,
                            "linear",
                            "${ashish-hand4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3911",
                            "opacity",
                            13093,
                            111,
                            "linear",
                            "${ashish-hand4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3105",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3104",
                            "opacity",
                            43163,
                            85,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3180",
                            "opacity",
                            45615,
                            135,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2927",
                            "left",
                            22410,
                            590,
                            "linear",
                            "${silhouette3}",
                            '294px',
                            '259px'
                        ],
                        [
                            "eid2943",
                            "left",
                            25138,
                            412,
                            "linear",
                            "${silhouette3}",
                            '259px',
                            '363px'
                        ],
                        [
                            "eid4309",
                            "width",
                            61590,
                            173,
                            "linear",
                            "${submit-btn}",
                            '138px',
                            '288px'
                        ],
                        [
                            "eid4317",
                            "width",
                            61763,
                            87,
                            "linear",
                            "${submit-btn}",
                            '288px',
                            '221px'
                        ],
                        [
                            "eid3732",
                            "rotateZ",
                            13307,
                            193,
                            "linear",
                            "${jannah-head}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid3772",
                            "rotateZ",
                            17304,
                            268,
                            "linear",
                            "${jannah-head}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid2791",
                            "height",
                            19090,
                            160,
                            "linear",
                            "${silhouette1}",
                            '625px',
                            '470px'
                        ],
                        [
                            "eid2557",
                            "top",
                            2333,
                            78,
                            "linear",
                            "${txt-stereo2}",
                            '551px',
                            '409px'
                        ],
                        [
                            "eid2559",
                            "top",
                            2411,
                            124,
                            "linear",
                            "${txt-stereo2}",
                            '409px',
                            '410px'
                        ],
                        [
                            "eid2579",
                            "top",
                            10962,
                            196,
                            "linear",
                            "${txt-stereo2}",
                            '410px',
                            '24px'
                        ],
                        [
                            "eid2597",
                            "top",
                            11158,
                            130,
                            "linear",
                            "${txt-stereo2}",
                            '24px',
                            '8px'
                        ],
                        [
                            "eid2606",
                            "top",
                            11288,
                            357,
                            "linear",
                            "${txt-stereo2}",
                            '8px',
                            '38px'
                        ],
                        [
                            "eid2747",
                            "top",
                            17672,
                            145,
                            "linear",
                            "${txt-stereo2}",
                            '38px',
                            '16px'
                        ],
                        [
                            "eid2806",
                            "top",
                            18955,
                            135,
                            "linear",
                            "${txt-stereo2}",
                            '16px',
                            '14px'
                        ],
                        [
                            "eid2807",
                            "top",
                            19090,
                            101,
                            "linear",
                            "${txt-stereo2}",
                            '14px',
                            '16px'
                        ],
                        [
                            "eid3074",
                            "top",
                            33668,
                            132,
                            "linear",
                            "${txt-stereo2}",
                            '16px',
                            '277px'
                        ],
                        [
                            "eid3076",
                            "top",
                            33800,
                            160,
                            "linear",
                            "${txt-stereo2}",
                            '277px',
                            '529px'
                        ],
                        [
                            "eid4556",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-resultCorrect}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3862",
                            "rotateZ",
                            11926,
                            74,
                            "linear",
                            "${ashish-low-arm-front}",
                            '167deg',
                            '57deg'
                        ],
                        [
                            "eid3869",
                            "rotateZ",
                            12000,
                            250,
                            "linear",
                            "${ashish-low-arm-front}",
                            '57deg',
                            '147deg'
                        ],
                        [
                            "eid3920",
                            "rotateZ",
                            12250,
                            195,
                            "linear",
                            "${ashish-low-arm-front}",
                            '147deg',
                            '160deg'
                        ],
                        [
                            "eid3921",
                            "rotateZ",
                            12445,
                            242,
                            "linear",
                            "${ashish-low-arm-front}",
                            '160deg',
                            '130deg'
                        ],
                        [
                            "eid3935",
                            "rotateZ",
                            12687,
                            258,
                            "linear",
                            "${ashish-low-arm-front}",
                            '130deg',
                            '147deg'
                        ],
                        [
                            "eid3876",
                            "rotateZ",
                            12945,
                            218,
                            "linear",
                            "${ashish-low-arm-front}",
                            '147deg',
                            '57deg'
                        ],
                        [
                            "eid3739",
                            "top",
                            13307,
                            193,
                            "linear",
                            "${jannah-head}",
                            '38px',
                            '39px'
                        ],
                        [
                            "eid3761",
                            "top",
                            17304,
                            0,
                            "linear",
                            "${jannah-head}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid3734",
                            "rotateZ",
                            13307,
                            193,
                            "linear",
                            "${jannah-eyeballs}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid3773",
                            "rotateZ",
                            17304,
                            268,
                            "linear",
                            "${jannah-eyeballs}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid3028",
                            "width",
                            20295,
                            161,
                            "linear",
                            "${narrator-text-balloon2}",
                            '201px',
                            '613px'
                        ],
                        [
                            "eid3053",
                            "width",
                            26101,
                            161,
                            "linear",
                            "${narrator-text-balloon2}",
                            '201px',
                            '613px'
                        ],
                        [
                            "eid3089",
                            "width",
                            33960,
                            90,
                            "linear",
                            "${narrator-text-balloon2}",
                            '613px',
                            '293px'
                        ],
                        [
                            "eid3100",
                            "width",
                            43050,
                            198,
                            "linear",
                            "${narrator-text-balloon2}",
                            '293px',
                            '739px'
                        ],
                        [
                            "eid1361",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-eyes-laugh}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3841",
                            "opacity",
                            28997,
                            95,
                            "linear",
                            "${jannah-eyes-laugh}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1389",
                            "left",
                            10888,
                            455,
                            "linear",
                            "${jannah-up-arm-front}",
                            '-358px',
                            '15px'
                        ],
                        [
                            "eid2687",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-up-arm-front}",
                            '15px',
                            '-107px'
                        ],
                        [
                            "eid3131",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-up-arm-front}",
                            '-107px',
                            '-369px'
                        ],
                        [
                            "eid2581",
                            "width",
                            10962,
                            196,
                            "linear",
                            "${txt-stereo2}",
                            '257px',
                            '711px'
                        ],
                        [
                            "eid2595",
                            "width",
                            11158,
                            130,
                            "linear",
                            "${txt-stereo2}",
                            '711px',
                            '551px'
                        ],
                        [
                            "eid2605",
                            "width",
                            11288,
                            357,
                            "linear",
                            "${txt-stereo2}",
                            '551px',
                            '387px'
                        ],
                        [
                            "eid1827",
                            "left",
                            11158,
                            427,
                            "linear",
                            "${ashish-mouth-smile2}",
                            '1097px',
                            '754px'
                        ],
                        [
                            "eid2722",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-mouth-smile2}",
                            '754px',
                            '867px'
                        ],
                        [
                            "eid3173",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-mouth-smile2}",
                            '867px',
                            '1091px'
                        ],
                        [
                            "eid1824",
                            "left",
                            11158,
                            427,
                            "linear",
                            "${ashish-mouth-talk2}",
                            '1096px',
                            '753px'
                        ],
                        [
                            "eid2728",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-mouth-talk2}",
                            '753px',
                            '866px'
                        ],
                        [
                            "eid3166",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-mouth-talk2}",
                            '866px',
                            '1090px'
                        ],
                        [
                            "eid2542",
                            "top",
                            2250,
                            161,
                            "linear",
                            "${narrator-text-balloon}",
                            '585px',
                            '288px'
                        ],
                        [
                            "eid2546",
                            "top",
                            2411,
                            124,
                            "linear",
                            "${narrator-text-balloon}",
                            '288px',
                            '349px'
                        ],
                        [
                            "eid2730",
                            "top",
                            18000,
                            161,
                            "linear",
                            "${narrator-text-balloon}",
                            '585px',
                            '352px'
                        ],
                        [
                            "eid2744",
                            "top",
                            18161,
                            127,
                            "linear",
                            "${narrator-text-balloon}",
                            '352px',
                            '411px'
                        ],
                        [
                            "eid2772",
                            "top",
                            19750,
                            160,
                            "linear",
                            "${narrator-text-balloon}",
                            '411px',
                            '587px'
                        ],
                        [
                            "eid4208",
                            "rotateZ",
                            19396,
                            231,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '50deg',
                            '143deg'
                        ],
                        [
                            "eid4226",
                            "rotateZ",
                            19627,
                            1188,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '143deg',
                            '135deg'
                        ],
                        [
                            "eid4237",
                            "rotateZ",
                            20815,
                            221,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '135deg',
                            '50deg'
                        ],
                        [
                            "eid3892",
                            "rotateZ",
                            12000,
                            100,
                            "linear",
                            "${ashish-hand4}",
                            '-86deg',
                            '-74deg'
                        ],
                        [
                            "eid3896",
                            "rotateZ",
                            12100,
                            150,
                            "linear",
                            "${ashish-hand4}",
                            '-74deg',
                            '-3deg'
                        ],
                        [
                            "eid3918",
                            "rotateZ",
                            12250,
                            195,
                            "linear",
                            "${ashish-hand4}",
                            '-3deg',
                            '10deg'
                        ],
                        [
                            "eid3919",
                            "rotateZ",
                            12445,
                            242,
                            "linear",
                            "${ashish-hand4}",
                            '10deg',
                            '-20deg'
                        ],
                        [
                            "eid3934",
                            "rotateZ",
                            12687,
                            258,
                            "linear",
                            "${ashish-hand4}",
                            '-20deg',
                            '-3deg'
                        ],
                        [
                            "eid3904",
                            "rotateZ",
                            12945,
                            106,
                            "linear",
                            "${ashish-hand4}",
                            '-3deg',
                            '-74deg'
                        ],
                        [
                            "eid3908",
                            "rotateZ",
                            13051,
                            112,
                            "linear",
                            "${ashish-hand4}",
                            '-74deg',
                            '-92deg'
                        ],
                        [
                            "eid3697",
                            "top",
                            12945,
                            0,
                            "linear",
                            "${jannah-eyeballs}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid3698",
                            "top",
                            13051,
                            0,
                            "linear",
                            "${jannah-eyeballs}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid3745",
                            "top",
                            13307,
                            193,
                            "linear",
                            "${jannah-eyeballs}",
                            '189px',
                            '199px'
                        ],
                        [
                            "eid3746",
                            "top",
                            13500,
                            0,
                            "linear",
                            "${jannah-eyeballs}",
                            '199px',
                            '199px'
                        ],
                        [
                            "eid3787",
                            "top",
                            17304,
                            268,
                            "linear",
                            "${jannah-eyeballs}",
                            '199px',
                            '192px'
                        ],
                        [
                            "eid3809",
                            "top",
                            18955,
                            45,
                            "linear",
                            "${jannah-eyeballs}",
                            '192px',
                            '189px'
                        ],
                        [
                            "eid3820",
                            "top",
                            25658,
                            104,
                            "linear",
                            "${jannah-eyeballs}",
                            '189px',
                            '192px'
                        ],
                        [
                            "eid3831",
                            "top",
                            28636,
                            96,
                            "linear",
                            "${jannah-eyeballs}",
                            '192px',
                            '191px'
                        ],
                        [
                            "eid2928",
                            "width",
                            22410,
                            590,
                            "linear",
                            "${silhouette3}",
                            '436px',
                            '510px'
                        ],
                        [
                            "eid2942",
                            "width",
                            25138,
                            412,
                            "linear",
                            "${silhouette3}",
                            '510px',
                            '272px'
                        ],
                        [
                            "eid2541",
                            "top",
                            2250,
                            161,
                            "linear",
                            "${Text3}",
                            '613px',
                            '316px'
                        ],
                        [
                            "eid2545",
                            "top",
                            2411,
                            124,
                            "linear",
                            "${Text3}",
                            '316px',
                            '377px'
                        ],
                        [
                            "eid1789",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-up-arm-back}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid1782",
                            "opacity",
                            11158,
                            46,
                            "linear",
                            "${ashish-up-arm-back}",
                            '0.000000',
                            '1'
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
                            "eid2823",
                            "height",
                            19396,
                            185,
                            "linear",
                            "${question-mark}",
                            '115px',
                            '199px'
                        ],
                        [
                            "eid2831",
                            "height",
                            19581,
                            110,
                            "linear",
                            "${question-mark}",
                            '199px',
                            '151px'
                        ],
                        [
                            "eid2850",
                            "height",
                            20153,
                            142,
                            "linear",
                            "${question-mark}",
                            '151px',
                            '219px'
                        ],
                        [
                            "eid2891",
                            "height",
                            20851,
                            185,
                            "linear",
                            "${question-mark}",
                            '115px',
                            '199px'
                        ],
                        [
                            "eid2892",
                            "height",
                            21036,
                            110,
                            "linear",
                            "${question-mark}",
                            '199px',
                            '151px'
                        ],
                        [
                            "eid2893",
                            "height",
                            21608,
                            142,
                            "linear",
                            "${question-mark}",
                            '151px',
                            '219px'
                        ],
                        [
                            "eid2950",
                            "height",
                            22623,
                            185,
                            "linear",
                            "${question-mark}",
                            '115px',
                            '199px'
                        ],
                        [
                            "eid2951",
                            "height",
                            22808,
                            110,
                            "linear",
                            "${question-mark}",
                            '199px',
                            '151px'
                        ],
                        [
                            "eid2952",
                            "height",
                            25180,
                            142,
                            "linear",
                            "${question-mark}",
                            '151px',
                            '219px'
                        ],
                        [
                            "eid2967",
                            "height",
                            25658,
                            185,
                            "linear",
                            "${question-mark}",
                            '115px',
                            '199px'
                        ],
                        [
                            "eid2968",
                            "height",
                            25843,
                            110,
                            "linear",
                            "${question-mark}",
                            '199px',
                            '151px'
                        ],
                        [
                            "eid2969",
                            "height",
                            26415,
                            142,
                            "linear",
                            "${question-mark}",
                            '151px',
                            '219px'
                        ],
                        [
                            "eid3002",
                            "height",
                            27050,
                            185,
                            "linear",
                            "${question-mark}",
                            '115px',
                            '199px'
                        ],
                        [
                            "eid3003",
                            "height",
                            27235,
                            110,
                            "linear",
                            "${question-mark}",
                            '199px',
                            '151px'
                        ],
                        [
                            "eid3004",
                            "height",
                            27807,
                            142,
                            "linear",
                            "${question-mark}",
                            '151px',
                            '219px'
                        ],
                        [
                            "eid3211",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3210",
                            "opacity",
                            51050,
                            215,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1386",
                            "left",
                            10888,
                            455,
                            "linear",
                            "${jannah-eyes-blink}",
                            '-158px',
                            '227px'
                        ],
                        [
                            "eid3740",
                            "left",
                            13307,
                            193,
                            "linear",
                            "${jannah-eyes-blink}",
                            '227px',
                            '239px'
                        ],
                        [
                            "eid3741",
                            "left",
                            13500,
                            0,
                            "linear",
                            "${jannah-eyes-blink}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid3759",
                            "left",
                            17304,
                            268,
                            "linear",
                            "${jannah-eyes-blink}",
                            '239px',
                            '227px'
                        ],
                        [
                            "eid2690",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-eyes-blink}",
                            '227px',
                            '106px'
                        ],
                        [
                            "eid3130",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-eyes-blink}",
                            '106px',
                            '-157px'
                        ],
                        [
                            "eid1387",
                            "left",
                            10888,
                            455,
                            "linear",
                            "${jannah-eyes-base}",
                            '-171px',
                            '214px'
                        ],
                        [
                            "eid3747",
                            "left",
                            13307,
                            193,
                            "linear",
                            "${jannah-eyes-base}",
                            '214px',
                            '225px'
                        ],
                        [
                            "eid3748",
                            "left",
                            13500,
                            0,
                            "linear",
                            "${jannah-eyes-base}",
                            '225px',
                            '225px'
                        ],
                        [
                            "eid3768",
                            "left",
                            17304,
                            268,
                            "linear",
                            "${jannah-eyes-base}",
                            '225px',
                            '214px'
                        ],
                        [
                            "eid2683",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-eyes-base}",
                            '214px',
                            '92px'
                        ],
                        [
                            "eid3135",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-eyes-base}",
                            '92px',
                            '-170px'
                        ],
                        [
                            "eid4209",
                            "rotateZ",
                            19396,
                            231,
                            "linear",
                            "${ashish-hand2}",
                            '0deg',
                            '93deg'
                        ],
                        [
                            "eid4227",
                            "rotateZ",
                            19627,
                            1188,
                            "linear",
                            "${ashish-hand2}",
                            '93deg',
                            '71deg'
                        ],
                        [
                            "eid4234",
                            "rotateZ",
                            20815,
                            221,
                            "linear",
                            "${ashish-hand2}",
                            '71deg',
                            '0deg'
                        ],
                        [
                            "eid3036",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3039",
                            "opacity",
                            20405,
                            51,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3048",
                            "opacity",
                            26050,
                            51,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2876",
                            "rotateZ",
                            20815,
                            296,
                            "linear",
                            "${silhouette2}",
                            '0deg',
                            '-2deg'
                        ],
                        [
                            "eid2877",
                            "rotateZ",
                            21111,
                            320,
                            "linear",
                            "${silhouette2}",
                            '-2deg',
                            '0deg'
                        ],
                        [
                            "eid2885",
                            "rotateZ",
                            21430,
                            320,
                            "linear",
                            "${silhouette2}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid2554",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2552",
                            "opacity",
                            2250,
                            83,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2569",
                            "opacity",
                            10792,
                            170,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2732",
                            "opacity",
                            18000,
                            83,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2778",
                            "opacity",
                            19845,
                            65,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3027",
                            "height",
                            20295,
                            161,
                            "linear",
                            "${narrator-text-balloon2}",
                            '55px',
                            '168px'
                        ],
                        [
                            "eid3050",
                            "height",
                            26101,
                            161,
                            "linear",
                            "${narrator-text-balloon2}",
                            '55px',
                            '219px'
                        ],
                        [
                            "eid3090",
                            "height",
                            33960,
                            90,
                            "linear",
                            "${narrator-text-balloon2}",
                            '219px',
                            '55px'
                        ],
                        [
                            "eid3098",
                            "height",
                            43050,
                            198,
                            "linear",
                            "${narrator-text-balloon2}",
                            '55px',
                            '154px'
                        ],
                        [
                            "eid3185",
                            "height",
                            45750,
                            130,
                            "linear",
                            "${narrator-text-balloon2}",
                            '154px',
                            '199px'
                        ],
                        [
                            "eid2925",
                            "height",
                            22410,
                            590,
                            "linear",
                            "${silhouette3}",
                            '694px',
                            '812px'
                        ],
                        [
                            "eid2940",
                            "height",
                            25138,
                            412,
                            "linear",
                            "${silhouette3}",
                            '812px',
                            '433px'
                        ],
                        [
                            "eid4555",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-resultWrong}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2615",
                            "height",
                            11500,
                            145,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '55px',
                            '320px'
                        ],
                        [
                            "eid2639",
                            "height",
                            17500,
                            172,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '320px',
                            '55px'
                        ],
                        [
                            "eid1396",
                            "left",
                            10888,
                            455,
                            "linear",
                            "${jannah-eyeballs}",
                            '-126px',
                            '249px'
                        ],
                        [
                            "eid3688",
                            "left",
                            12945,
                            106,
                            "linear",
                            "${jannah-eyeballs}",
                            '249px',
                            '238px'
                        ],
                        [
                            "eid3743",
                            "left",
                            13307,
                            193,
                            "linear",
                            "${jannah-eyeballs}",
                            '238px',
                            '249px'
                        ],
                        [
                            "eid3744",
                            "left",
                            13500,
                            0,
                            "linear",
                            "${jannah-eyeballs}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid3788",
                            "left",
                            17304,
                            268,
                            "linear",
                            "${jannah-eyeballs}",
                            '249px',
                            '250px'
                        ],
                        [
                            "eid3789",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-eyeballs}",
                            '250px',
                            '127px'
                        ],
                        [
                            "eid3805",
                            "left",
                            18955,
                            0,
                            "linear",
                            "${jannah-eyeballs}",
                            '127px',
                            '127px'
                        ],
                        [
                            "eid3807",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${jannah-eyeballs}",
                            '127px',
                            '127px'
                        ],
                        [
                            "eid3816",
                            "left",
                            25658,
                            0,
                            "linear",
                            "${jannah-eyeballs}",
                            '127px',
                            '127px'
                        ],
                        [
                            "eid3818",
                            "left",
                            25762,
                            0,
                            "linear",
                            "${jannah-eyeballs}",
                            '127px',
                            '127px'
                        ],
                        [
                            "eid3829",
                            "left",
                            28636,
                            96,
                            "linear",
                            "${jannah-eyeballs}",
                            '127px',
                            '115px'
                        ],
                        [
                            "eid3830",
                            "left",
                            28732,
                            0,
                            "linear",
                            "${jannah-eyeballs}",
                            '115px',
                            '115px'
                        ],
                        [
                            "eid3832",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-eyeballs}",
                            '115px',
                            '-135px'
                        ],
                        [
                            "eid2824",
                            "width",
                            19396,
                            185,
                            "linear",
                            "${question-mark}",
                            '74px',
                            '128px'
                        ],
                        [
                            "eid2833",
                            "width",
                            19581,
                            110,
                            "linear",
                            "${question-mark}",
                            '128px',
                            '97px'
                        ],
                        [
                            "eid2851",
                            "width",
                            20153,
                            142,
                            "linear",
                            "${question-mark}",
                            '97px',
                            '141px'
                        ],
                        [
                            "eid2899",
                            "width",
                            20851,
                            185,
                            "linear",
                            "${question-mark}",
                            '74px',
                            '128px'
                        ],
                        [
                            "eid2900",
                            "width",
                            21036,
                            110,
                            "linear",
                            "${question-mark}",
                            '128px',
                            '97px'
                        ],
                        [
                            "eid2901",
                            "width",
                            21608,
                            142,
                            "linear",
                            "${question-mark}",
                            '97px',
                            '141px'
                        ],
                        [
                            "eid2958",
                            "width",
                            22623,
                            185,
                            "linear",
                            "${question-mark}",
                            '74px',
                            '128px'
                        ],
                        [
                            "eid2959",
                            "width",
                            22808,
                            110,
                            "linear",
                            "${question-mark}",
                            '128px',
                            '97px'
                        ],
                        [
                            "eid2960",
                            "width",
                            25180,
                            142,
                            "linear",
                            "${question-mark}",
                            '97px',
                            '141px'
                        ],
                        [
                            "eid2975",
                            "width",
                            25658,
                            185,
                            "linear",
                            "${question-mark}",
                            '74px',
                            '128px'
                        ],
                        [
                            "eid2976",
                            "width",
                            25843,
                            110,
                            "linear",
                            "${question-mark}",
                            '128px',
                            '97px'
                        ],
                        [
                            "eid2977",
                            "width",
                            26415,
                            142,
                            "linear",
                            "${question-mark}",
                            '97px',
                            '141px'
                        ],
                        [
                            "eid3010",
                            "width",
                            27050,
                            185,
                            "linear",
                            "${question-mark}",
                            '74px',
                            '128px'
                        ],
                        [
                            "eid3011",
                            "width",
                            27235,
                            110,
                            "linear",
                            "${question-mark}",
                            '128px',
                            '97px'
                        ],
                        [
                            "eid3012",
                            "width",
                            27807,
                            142,
                            "linear",
                            "${question-mark}",
                            '97px',
                            '141px'
                        ],
                        [
                            "eid4212",
                            "left",
                            19396,
                            104,
                            "linear",
                            "${ashish-hand2}",
                            '822px',
                            '679px'
                        ],
                        [
                            "eid4215",
                            "left",
                            19500,
                            127,
                            "linear",
                            "${ashish-hand2}",
                            '679px',
                            '719px'
                        ],
                        [
                            "eid4230",
                            "left",
                            19627,
                            1188,
                            "linear",
                            "${ashish-hand2}",
                            '719px',
                            '674px'
                        ],
                        [
                            "eid4233",
                            "left",
                            20815,
                            97,
                            "linear",
                            "${ashish-hand2}",
                            '674px',
                            '661px'
                        ],
                        [
                            "eid4238",
                            "left",
                            20912,
                            124,
                            "linear",
                            "${ashish-hand2}",
                            '661px',
                            '822px'
                        ],
                        [
                            "eid4327",
                            "top",
                            33800,
                            160,
                            "linear",
                            "${narrator-text-balloon2Copy3}",
                            '671px',
                            '313px'
                        ],
                        [
                            "eid4332",
                            "top",
                            42441,
                            165,
                            "linear",
                            "${narrator-text-balloon2Copy3}",
                            '313px',
                            '609px'
                        ],
                        [
                            "eid4339",
                            "left",
                            33414,
                            0,
                            "linear",
                            "${Text2}",
                            '227px',
                            '227px'
                        ],
                        [
                            "eid2838",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-mark}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2837",
                            "opacity",
                            19396,
                            104,
                            "linear",
                            "${question-mark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2841",
                            "opacity",
                            20153,
                            142,
                            "linear",
                            "${question-mark}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2894",
                            "opacity",
                            20851,
                            104,
                            "linear",
                            "${question-mark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2895",
                            "opacity",
                            21608,
                            142,
                            "linear",
                            "${question-mark}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2953",
                            "opacity",
                            22623,
                            104,
                            "linear",
                            "${question-mark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2954",
                            "opacity",
                            25180,
                            142,
                            "linear",
                            "${question-mark}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2970",
                            "opacity",
                            25658,
                            104,
                            "linear",
                            "${question-mark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2971",
                            "opacity",
                            26415,
                            142,
                            "linear",
                            "${question-mark}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3005",
                            "opacity",
                            27050,
                            104,
                            "linear",
                            "${question-mark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3006",
                            "opacity",
                            27807,
                            142,
                            "linear",
                            "${question-mark}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4323",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${submit-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4322",
                            "opacity",
                            61590,
                            78,
                            "linear",
                            "${submit-btn}",
                            '0',
                            '1'
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
                            "eid4587",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4588",
                            "display",
                            18000,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3752",
                            "top",
                            13307,
                            193,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '259px',
                            '270px'
                        ],
                        [
                            "eid3794",
                            "top",
                            17304,
                            268,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '270px',
                            '261px'
                        ],
                        [
                            "eid2739",
                            "height",
                            18000,
                            161,
                            "linear",
                            "${narrator-text-balloon}",
                            '222px',
                            '153px'
                        ],
                        [
                            "eid2804",
                            "rotateZ",
                            18955,
                            135,
                            "linear",
                            "${txt-stereo2}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid2805",
                            "rotateZ",
                            19090,
                            101,
                            "linear",
                            "${txt-stereo2}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid3057",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3056",
                            "opacity",
                            26222,
                            40,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3066",
                            "opacity",
                            33895,
                            65,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3635",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3634",
                            "opacity",
                            52840,
                            78,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2910",
                            "opacity",
                            22213,
                            77,
                            "linear",
                            "${silhouette2}",
                            '1',
                            '0'
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
                            150,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid492",
                            "opacity",
                            2000,
                            295,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1391",
                            "left",
                            10888,
                            455,
                            "linear",
                            "${jannah-mouth-smile2}",
                            '-133px',
                            '252px'
                        ],
                        [
                            "eid2693",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-mouth-smile2}",
                            '252px',
                            '130px'
                        ],
                        [
                            "eid3140",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-mouth-smile2}",
                            '130px',
                            '-132px'
                        ],
                        [
                            "eid1356",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-up-arm-front}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1425",
                            "opacity",
                            10888,
                            57,
                            "linear",
                            "${jannah-up-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2616",
                            "width",
                            11500,
                            145,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '80px',
                            '351px'
                        ],
                        [
                            "eid2641",
                            "width",
                            17500,
                            172,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '351px',
                            '80px'
                        ],
                        [
                            "eid3735",
                            "rotateZ",
                            13307,
                            193,
                            "linear",
                            "${jannah-eyes-base}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid3774",
                            "rotateZ",
                            17304,
                            268,
                            "linear",
                            "${jannah-eyes-base}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid2563",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-stereo2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2562",
                            "opacity",
                            2250,
                            83,
                            "linear",
                            "${txt-stereo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3079",
                            "opacity",
                            33895,
                            65,
                            "linear",
                            "${txt-stereo2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3945",
                            "top",
                            12945,
                            106,
                            "linear",
                            "${ashish-eyeballs}",
                            '175px',
                            '174px'
                        ],
                        [
                            "eid3947",
                            "top",
                            17371,
                            0,
                            "linear",
                            "${ashish-eyeballs}",
                            '174px',
                            '174px'
                        ],
                        [
                            "eid3959",
                            "top",
                            18250,
                            81,
                            "linear",
                            "${ashish-eyeballs}",
                            '174px',
                            '179px'
                        ],
                        [
                            "eid3966",
                            "top",
                            18872,
                            83,
                            "linear",
                            "${ashish-eyeballs}",
                            '179px',
                            '174px'
                        ],
                        [
                            "eid3984",
                            "top",
                            28997,
                            95,
                            "linear",
                            "${ashish-eyeballs}",
                            '174px',
                            '173px'
                        ],
                        [
                            "eid3986",
                            "top",
                            43050,
                            0,
                            "linear",
                            "${ashish-eyeballs}",
                            '173px',
                            '173px'
                        ],
                        [
                            "eid1795",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-eyeballs}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid1779",
                            "opacity",
                            11158,
                            46,
                            "linear",
                            "${ashish-eyeballs}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4181",
                            "rotateZ",
                            19396,
                            231,
                            "linear",
                            "${ashish-up-arm-front}",
                            '-16deg',
                            '17deg'
                        ],
                        [
                            "eid4219",
                            "rotateZ",
                            20815,
                            221,
                            "linear",
                            "${ashish-up-arm-front}",
                            '17deg',
                            '-16deg'
                        ],
                        [
                            "eid3889",
                            "left",
                            12000,
                            100,
                            "linear",
                            "${ashish-hand4}",
                            '429px',
                            '429px'
                        ],
                        [
                            "eid3890",
                            "left",
                            12100,
                            150,
                            "linear",
                            "${ashish-hand4}",
                            '429px',
                            '568px'
                        ],
                        [
                            "eid3922",
                            "left",
                            12250,
                            195,
                            "linear",
                            "${ashish-hand4}",
                            '568px',
                            '598px'
                        ],
                        [
                            "eid3923",
                            "left",
                            12445,
                            242,
                            "linear",
                            "${ashish-hand4}",
                            '598px',
                            '511px'
                        ],
                        [
                            "eid3930",
                            "left",
                            12687,
                            258,
                            "linear",
                            "${ashish-hand4}",
                            '511px',
                            '568px'
                        ],
                        [
                            "eid3899",
                            "left",
                            12945,
                            106,
                            "linear",
                            "${ashish-hand4}",
                            '568px',
                            '439px'
                        ],
                        [
                            "eid3903",
                            "left",
                            13051,
                            112,
                            "linear",
                            "${ashish-hand4}",
                            '439px',
                            '429px'
                        ],
                        [
                            "eid3905",
                            "left",
                            13163,
                            4337,
                            "linear",
                            "${ashish-hand4}",
                            '429px',
                            '438px'
                        ],
                        [
                            "eid2729",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-hand4}",
                            '438px',
                            '933px'
                        ],
                        [
                            "eid3172",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-hand4}",
                            '933px',
                            '1157px'
                        ],
                        [
                            "eid2825",
                            "left",
                            19396,
                            185,
                            "linear",
                            "${question-mark}",
                            '487px',
                            '460px'
                        ],
                        [
                            "eid2834",
                            "left",
                            19581,
                            110,
                            "linear",
                            "${question-mark}",
                            '460px',
                            '477px'
                        ],
                        [
                            "eid2852",
                            "left",
                            20153,
                            142,
                            "linear",
                            "${question-mark}",
                            '477px',
                            '453px'
                        ],
                        [
                            "eid2896",
                            "left",
                            20851,
                            185,
                            "linear",
                            "${question-mark}",
                            '487px',
                            '460px'
                        ],
                        [
                            "eid2897",
                            "left",
                            21036,
                            110,
                            "linear",
                            "${question-mark}",
                            '460px',
                            '477px'
                        ],
                        [
                            "eid2898",
                            "left",
                            21608,
                            142,
                            "linear",
                            "${question-mark}",
                            '477px',
                            '453px'
                        ],
                        [
                            "eid2955",
                            "left",
                            22623,
                            185,
                            "linear",
                            "${question-mark}",
                            '487px',
                            '460px'
                        ],
                        [
                            "eid2956",
                            "left",
                            22808,
                            110,
                            "linear",
                            "${question-mark}",
                            '460px',
                            '477px'
                        ],
                        [
                            "eid2957",
                            "left",
                            25180,
                            142,
                            "linear",
                            "${question-mark}",
                            '477px',
                            '453px'
                        ],
                        [
                            "eid2972",
                            "left",
                            25658,
                            185,
                            "linear",
                            "${question-mark}",
                            '487px',
                            '566px'
                        ],
                        [
                            "eid2973",
                            "left",
                            25843,
                            72,
                            "linear",
                            "${question-mark}",
                            '566px',
                            '574px'
                        ],
                        [
                            "eid3070",
                            "left",
                            25915,
                            38,
                            "linear",
                            "${question-mark}",
                            '574px',
                            '580px'
                        ],
                        [
                            "eid2974",
                            "left",
                            26415,
                            142,
                            "linear",
                            "${question-mark}",
                            '580px',
                            '566px'
                        ],
                        [
                            "eid3007",
                            "left",
                            27050,
                            185,
                            "linear",
                            "${question-mark}",
                            '487px',
                            '460px'
                        ],
                        [
                            "eid3008",
                            "left",
                            27235,
                            110,
                            "linear",
                            "${question-mark}",
                            '460px',
                            '477px'
                        ],
                        [
                            "eid3009",
                            "left",
                            27807,
                            142,
                            "linear",
                            "${question-mark}",
                            '477px',
                            '453px'
                        ],
                        [
                            "eid1359",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3683",
                            "opacity",
                            11697,
                            124,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3804",
                            "opacity",
                            18288,
                            82,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3835",
                            "opacity",
                            28844,
                            82,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4343",
                            "height",
                            33414,
                            0,
                            "linear",
                            "${Text2}",
                            '172px',
                            '172px'
                        ],
                        [
                            "eid2756",
                            "top",
                            18000,
                            161,
                            "linear",
                            "${Text6}",
                            '631px',
                            '375px'
                        ],
                        [
                            "eid2754",
                            "top",
                            18161,
                            127,
                            "linear",
                            "${Text6}",
                            '375px',
                            '433px'
                        ],
                        [
                            "eid2771",
                            "top",
                            19750,
                            160,
                            "linear",
                            "${Text6}",
                            '433px',
                            '609px'
                        ],
                        [
                            "eid3629",
                            "top",
                            52840,
                            173,
                            "linear",
                            "${instruction-btn}",
                            '529px',
                            '488px'
                        ],
                        [
                            "eid4254",
                            "top",
                            53013,
                            87,
                            "linear",
                            "${instruction-btn}",
                            '488px',
                            '495px'
                        ],
                        [
                            "eid2878",
                            "left",
                            20815,
                            296,
                            "linear",
                            "${silhouette2}",
                            '329px',
                            '319px'
                        ],
                        [
                            "eid2879",
                            "left",
                            21111,
                            320,
                            "linear",
                            "${silhouette2}",
                            '319px',
                            '329px'
                        ],
                        [
                            "eid2886",
                            "left",
                            21430,
                            320,
                            "linear",
                            "${silhouette2}",
                            '329px',
                            '334px'
                        ],
                        [
                            "eid2906",
                            "left",
                            21815,
                            475,
                            "linear",
                            "${silhouette2}",
                            '334px',
                            '-199px'
                        ],
                        [
                            "eid1820",
                            "left",
                            11158,
                            427,
                            "linear",
                            "${ashish-eyes-base}",
                            '1098px',
                            '755px'
                        ],
                        [
                            "eid2723",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-eyes-base}",
                            '755px',
                            '868px'
                        ],
                        [
                            "eid3171",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-eyes-base}",
                            '868px',
                            '1092px'
                        ],
                        [
                            "eid3742",
                            "top",
                            13307,
                            193,
                            "linear",
                            "${jannah-eyes-blink}",
                            '189px',
                            '198px'
                        ],
                        [
                            "eid3758",
                            "top",
                            17304,
                            0,
                            "linear",
                            "${jannah-eyes-blink}",
                            '190px',
                            '190px'
                        ],
                        [
                            "eid2924",
                            "rotateZ",
                            22410,
                            590,
                            "linear",
                            "${silhouette3}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid2939",
                            "rotateZ",
                            25138,
                            412,
                            "linear",
                            "${silhouette3}",
                            '2deg',
                            '0deg'
                        ],
                        [
                            "eid4211",
                            "top",
                            19396,
                            104,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '544px',
                            '464px'
                        ],
                        [
                            "eid4216",
                            "top",
                            19500,
                            127,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '464px',
                            '360px'
                        ],
                        [
                            "eid4229",
                            "top",
                            19627,
                            1188,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '360px',
                            '377px'
                        ],
                        [
                            "eid4235",
                            "top",
                            20815,
                            97,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '377px',
                            '449px'
                        ],
                        [
                            "eid4241",
                            "top",
                            20912,
                            124,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '449px',
                            '544px'
                        ],
                        [
                            "eid1821",
                            "left",
                            11158,
                            427,
                            "linear",
                            "${ashish-eyes-laugh}",
                            '1094px',
                            '751px'
                        ],
                        [
                            "eid2718",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-eyes-laugh}",
                            '751px',
                            '864px'
                        ],
                        [
                            "eid3174",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-eyes-laugh}",
                            '864px',
                            '1088px'
                        ],
                        [
                            "eid1797",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-up-arm-front}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid1788",
                            "opacity",
                            11158,
                            46,
                            "linear",
                            "${ashish-up-arm-front}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid486",
                            "top",
                            1038,
                            462,
                            "linear",
                            "${TextCopy}",
                            '241px',
                            '218px'
                        ],
                        [
                            "eid487",
                            "top",
                            1500,
                            297,
                            "linear",
                            "${TextCopy}",
                            '218px',
                            '221px'
                        ],
                        [
                            "eid512",
                            "top",
                            1797,
                            203,
                            "linear",
                            "${TextCopy}",
                            '221px',
                            '230px'
                        ],
                        [
                            "eid488",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${TextCopy}",
                            '230px',
                            '230px'
                        ],
                        [
                            "eid2007",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-hand3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3849",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-mouth-smile1}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3848",
                            "opacity",
                            11926,
                            74,
                            "linear",
                            "${ashish-mouth-smile1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3950",
                            "opacity",
                            16912,
                            88,
                            "linear",
                            "${ashish-mouth-smile1}",
                            '1',
                            '0'
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
                            1038,
                            462,
                            "linear",
                            "${text-balloon}",
                            '117px',
                            '100px'
                        ],
                        [
                            "eid495",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${text-balloon}",
                            '100px',
                            '110px'
                        ],
                        [
                            "eid3029",
                            "left",
                            20295,
                            161,
                            "linear",
                            "${narrator-text-balloon2}",
                            '439px',
                            '211px'
                        ],
                        [
                            "eid3052",
                            "left",
                            26101,
                            161,
                            "linear",
                            "${narrator-text-balloon2}",
                            '439px',
                            '211px'
                        ],
                        [
                            "eid3087",
                            "left",
                            33960,
                            90,
                            "linear",
                            "${narrator-text-balloon2}",
                            '211px',
                            '344px'
                        ],
                        [
                            "eid3101",
                            "left",
                            43050,
                            198,
                            "linear",
                            "${narrator-text-balloon2}",
                            '344px',
                            '143px'
                        ],
                        [
                            "eid1358",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-mouth-smile2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3801",
                            "opacity",
                            18250,
                            81,
                            "linear",
                            "${jannah-mouth-smile2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3838",
                            "opacity",
                            28926,
                            71,
                            "linear",
                            "${jannah-mouth-smile2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2983",
                            "opacity",
                            26734,
                            66,
                            "linear",
                            "${silhouette5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2691",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-hand3}",
                            '-190px',
                            '-312px'
                        ],
                        [
                            "eid3132",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-hand3}",
                            '-312px',
                            '-574px'
                        ],
                        [
                            "eid1822",
                            "left",
                            11158,
                            427,
                            "linear",
                            "${ashish-up-arm-back}",
                            '1043px',
                            '700px'
                        ],
                        [
                            "eid2719",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-up-arm-back}",
                            '700px',
                            '813px'
                        ],
                        [
                            "eid3167",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-up-arm-back}",
                            '813px',
                            '1037px'
                        ],
                        [
                            "eid2580",
                            "left",
                            10962,
                            196,
                            "linear",
                            "${txt-stereo2}",
                            '362px',
                            '173px'
                        ],
                        [
                            "eid2596",
                            "left",
                            11158,
                            130,
                            "linear",
                            "${txt-stereo2}",
                            '173px',
                            '237px'
                        ],
                        [
                            "eid2604",
                            "left",
                            11288,
                            357,
                            "linear",
                            "${txt-stereo2}",
                            '237px',
                            '356px'
                        ],
                        [
                            "eid2808",
                            "left",
                            18955,
                            135,
                            "linear",
                            "${txt-stereo2}",
                            '356px',
                            '370px'
                        ],
                        [
                            "eid2809",
                            "left",
                            19090,
                            101,
                            "linear",
                            "${txt-stereo2}",
                            '370px',
                            '356px'
                        ],
                        [
                            "eid1823",
                            "left",
                            11158,
                            427,
                            "linear",
                            "${ashish-shop-body}",
                            '1078px',
                            '735px'
                        ],
                        [
                            "eid2720",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-shop-body}",
                            '735px',
                            '848px'
                        ],
                        [
                            "eid3175",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-shop-body}",
                            '848px',
                            '1072px'
                        ],
                        [
                            "eid1798",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-shop-body}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid1783",
                            "opacity",
                            11158,
                            46,
                            "linear",
                            "${ashish-shop-body}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4308",
                            "top",
                            61590,
                            173,
                            "linear",
                            "${submit-btn}",
                            '514px',
                            '490px'
                        ],
                        [
                            "eid4316",
                            "top",
                            61763,
                            87,
                            "linear",
                            "${submit-btn}",
                            '490px',
                            '497px'
                        ],
                        [
                            "eid3627",
                            "left",
                            52840,
                            173,
                            "linear",
                            "${instruction-btn}",
                            '63px',
                            '-10px'
                        ],
                        [
                            "eid3628",
                            "left",
                            53013,
                            87,
                            "linear",
                            "${instruction-btn}",
                            '-10px',
                            '4px'
                        ],
                        [
                            "eid2792",
                            "width",
                            19090,
                            160,
                            "linear",
                            "${silhouette1}",
                            '580px',
                            '436px'
                        ],
                        [
                            "eid2963",
                            "top",
                            25498,
                            160,
                            "linear",
                            "${silhouette5}",
                            '577px',
                            '87px'
                        ],
                        [
                            "eid2980",
                            "top",
                            26557,
                            243,
                            "linear",
                            "${silhouette5}",
                            '87px',
                            '537px'
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
                            "eid4195",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-hand2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4194",
                            "opacity",
                            19289,
                            107,
                            "linear",
                            "${ashish-hand2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4252",
                            "opacity",
                            22500,
                            123,
                            "linear",
                            "${ashish-hand2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2996",
                            "width",
                            27119,
                            745,
                            "linear",
                            "${silhouette4}",
                            '369px',
                            '497px'
                        ],
                        [
                            "eid2793",
                            "left",
                            19090,
                            160,
                            "linear",
                            "${silhouette1}",
                            '210px',
                            '248px'
                        ],
                        [
                            "eid2857",
                            "left",
                            20250,
                            110,
                            "linear",
                            "${silhouette1}",
                            '248px',
                            '196px'
                        ],
                        [
                            "eid2860",
                            "left",
                            20405,
                            205,
                            "linear",
                            "${silhouette1}",
                            '196px',
                            '1024px'
                        ],
                        [
                            "eid1793",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-eyes-blink}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3952",
                            "opacity",
                            14353,
                            47,
                            "linear",
                            "${ashish-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3951",
                            "opacity",
                            14438,
                            60,
                            "linear",
                            "${ashish-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3954",
                            "opacity",
                            18000,
                            47,
                            "linear",
                            "${ashish-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3953",
                            "opacity",
                            18085,
                            60,
                            "linear",
                            "${ashish-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3968",
                            "opacity",
                            19910,
                            47,
                            "linear",
                            "${ashish-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3967",
                            "opacity",
                            19995,
                            60,
                            "linear",
                            "${ashish-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4245",
                            "opacity",
                            21430,
                            47,
                            "linear",
                            "${ashish-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4246",
                            "opacity",
                            21515,
                            60,
                            "linear",
                            "${ashish-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3970",
                            "opacity",
                            22727,
                            47,
                            "linear",
                            "${ashish-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3969",
                            "opacity",
                            22812,
                            60,
                            "linear",
                            "${ashish-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3972",
                            "opacity",
                            26578,
                            47,
                            "linear",
                            "${ashish-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3971",
                            "opacity",
                            26663,
                            60,
                            "linear",
                            "${ashish-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3974",
                            "opacity",
                            28796,
                            47,
                            "linear",
                            "${ashish-eyes-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3973",
                            "opacity",
                            28881,
                            60,
                            "linear",
                            "${ashish-eyes-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2741",
                            "width",
                            18000,
                            161,
                            "linear",
                            "${narrator-text-balloon}",
                            '910px',
                            '580px'
                        ],
                        [
                            "eid4562",
                            "display",
                            0,
                            0,
                            "linear",
                            "${group-of-ppl}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4563",
                            "display",
                            33800,
                            0,
                            "linear",
                            "${group-of-ppl}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4566",
                            "display",
                            42441,
                            0,
                            "linear",
                            "${group-of-ppl}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4567",
                            "display",
                            42606,
                            0,
                            "linear",
                            "${group-of-ppl}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4344",
                            "top",
                            33414,
                            386,
                            "linear",
                            "${Text2}",
                            '377px',
                            '380px'
                        ],
                        [
                            "eid3062",
                            "top",
                            33800,
                            160,
                            "linear",
                            "${Text2}",
                            '380px',
                            '608px'
                        ],
                        [
                            "eid2866",
                            "top",
                            20543,
                            165,
                            "linear",
                            "${silhouette2}",
                            '595px',
                            '110px'
                        ],
                        [
                            "eid2880",
                            "top",
                            20815,
                            296,
                            "linear",
                            "${silhouette2}",
                            '110px',
                            '107px'
                        ],
                        [
                            "eid2881",
                            "top",
                            21111,
                            320,
                            "linear",
                            "${silhouette2}",
                            '107px',
                            '110px'
                        ],
                        [
                            "eid2887",
                            "top",
                            21430,
                            320,
                            "linear",
                            "${silhouette2}",
                            '110px',
                            '107px'
                        ],
                        [
                            "eid2907",
                            "top",
                            21815,
                            475,
                            "linear",
                            "${silhouette2}",
                            '107px',
                            '116px'
                        ],
                        [
                            "eid4191",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4190",
                            "opacity",
                            19289,
                            107,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4251",
                            "opacity",
                            22500,
                            123,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2009",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-low-arm-front}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3736",
                            "rotateZ",
                            13307,
                            193,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid3770",
                            "rotateZ",
                            17304,
                            268,
                            "linear",
                            "${jannah-mouth-smile1}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid1828",
                            "left",
                            11158,
                            427,
                            "linear",
                            "${ashish-up-arm-front}",
                            '1242px',
                            '937px'
                        ],
                        [
                            "eid2721",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-up-arm-front}",
                            '937px',
                            '1050px'
                        ],
                        [
                            "eid4182",
                            "left",
                            19396,
                            231,
                            "linear",
                            "${ashish-up-arm-front}",
                            '1050px',
                            '991px'
                        ],
                        [
                            "eid4183",
                            "left",
                            19627,
                            0,
                            "linear",
                            "${ashish-up-arm-front}",
                            '991px',
                            '991px'
                        ],
                        [
                            "eid4184",
                            "left",
                            20815,
                            221,
                            "linear",
                            "${ashish-up-arm-front}",
                            '991px',
                            '1050px'
                        ],
                        [
                            "eid4186",
                            "left",
                            43163,
                            0,
                            "linear",
                            "${ashish-up-arm-front}",
                            '1050px',
                            '1050px'
                        ],
                        [
                            "eid3169",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-up-arm-front}",
                            '1050px',
                            '1274px'
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
                            "eid1794",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-head}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid1786",
                            "opacity",
                            11158,
                            46,
                            "linear",
                            "${ashish-head}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1796",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-eyes-base}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid1780",
                            "opacity",
                            11158,
                            46,
                            "linear",
                            "${ashish-eyes-base}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3863",
                            "left",
                            11926,
                            74,
                            "linear",
                            "${ashish-low-arm-front}",
                            '886px',
                            '602px'
                        ],
                        [
                            "eid3864",
                            "left",
                            12000,
                            250,
                            "linear",
                            "${ashish-low-arm-front}",
                            '602px',
                            '638px'
                        ],
                        [
                            "eid3926",
                            "left",
                            12250,
                            195,
                            "linear",
                            "${ashish-low-arm-front}",
                            '638px',
                            '640px'
                        ],
                        [
                            "eid3927",
                            "left",
                            12445,
                            242,
                            "linear",
                            "${ashish-low-arm-front}",
                            '640px',
                            '620px'
                        ],
                        [
                            "eid3931",
                            "left",
                            12687,
                            258,
                            "linear",
                            "${ashish-low-arm-front}",
                            '620px',
                            '638px'
                        ],
                        [
                            "eid3872",
                            "left",
                            12945,
                            218,
                            "linear",
                            "${ashish-low-arm-front}",
                            '638px',
                            '602px'
                        ],
                        [
                            "eid3875",
                            "left",
                            13163,
                            4337,
                            "linear",
                            "${ashish-low-arm-front}",
                            '602px',
                            '886px'
                        ],
                        [
                            "eid2724",
                            "left",
                            17500,
                            250,
                            "linear",
                            "${ashish-low-arm-front}",
                            '886px',
                            '999px'
                        ],
                        [
                            "eid3177",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${ashish-low-arm-front}",
                            '999px',
                            '1223px'
                        ],
                        [
                            "eid4559",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3044",
                            "top",
                            25953,
                            148,
                            "linear",
                            "${Text}",
                            '427px',
                            '600px'
                        ],
                        [
                            "eid1390",
                            "left",
                            10888,
                            455,
                            "linear",
                            "${jannah-up-arm-back}",
                            '-162px',
                            '223px'
                        ],
                        [
                            "eid2682",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-up-arm-back}",
                            '223px',
                            '101px'
                        ],
                        [
                            "eid3133",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-up-arm-back}",
                            '101px',
                            '-161px'
                        ],
                        [
                            "eid4341",
                            "width",
                            33414,
                            0,
                            "linear",
                            "${Text2}",
                            '571px',
                            '571px'
                        ],
                        [
                            "eid2530",
                            "left",
                            0,
                            21200,
                            "linear",
                            "${school-gym}",
                            '-6px',
                            '-238px'
                        ],
                        [
                            "eid1363",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${jannah-eyeballs}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1422",
                            "opacity",
                            10888,
                            57,
                            "linear",
                            "${jannah-eyeballs}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4210",
                            "left",
                            19396,
                            104,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '1002px',
                            '907px'
                        ],
                        [
                            "eid4214",
                            "left",
                            19500,
                            127,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '907px',
                            '876px'
                        ],
                        [
                            "eid4228",
                            "left",
                            19627,
                            1188,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '876px',
                            '872px'
                        ],
                        [
                            "eid4236",
                            "left",
                            20815,
                            97,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '872px',
                            '894px'
                        ],
                        [
                            "eid4239",
                            "left",
                            20912,
                            124,
                            "linear",
                            "${ashish-low-arm-front2}",
                            '894px',
                            '1002px'
                        ],
                        [
                            "eid1394",
                            "left",
                            10888,
                            455,
                            "linear",
                            "${jannah-eyes-laugh}",
                            '-160px',
                            '225px'
                        ],
                        [
                            "eid2686",
                            "left",
                            17572,
                            245,
                            "linear",
                            "${jannah-eyes-laugh}",
                            '225px',
                            '103px'
                        ],
                        [
                            "eid3137",
                            "left",
                            43163,
                            173,
                            "linear",
                            "${jannah-eyes-laugh}",
                            '103px',
                            '-159px'
                        ],
                        [
                            "eid2617",
                            "left",
                            11500,
                            145,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '494px',
                            '370px'
                        ],
                        [
                            "eid2640",
                            "left",
                            17500,
                            172,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '370px',
                            '494px'
                        ],
                        [
                            "eid2998",
                            "top",
                            27119,
                            745,
                            "linear",
                            "${silhouette4}",
                            '99px',
                            '89px'
                        ],
                        [
                            "eid3015",
                            "top",
                            27903,
                            147,
                            "linear",
                            "${silhouette4}",
                            '89px',
                            '567px'
                        ],
                        [
                            "eid1791",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ashish-mouth-smile2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3844",
                            "opacity",
                            11821,
                            105,
                            "linear",
                            "${ashish-mouth-smile2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2742",
                            "left",
                            18000,
                            161,
                            "linear",
                            "${narrator-text-balloon}",
                            '57px',
                            '227px'
                        ],
                            [ "eid3333", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${classmates}', [] ] ],
                            [ "eid3673", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid4558", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-resultCorrect}', [] ] ],
                            [ "eid4557", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-resultWrong}', [] ] ],
                            [ "eid3334", "trigger", 51800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${classmates}', [] ] ],
                            [ "eid4561", "trigger", 52666, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ]
                    ]
                }
            },
            "railings": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1293px', '20px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(55,55,55,1.00)']
                        },
                        {
                            rect: ['99px', '14px', '14px', '94px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(55,55,55,1)']
                        },
                        {
                            rect: ['1191px', '14px', '14px', '94px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(55,55,55,1)']
                        },
                        {
                            rect: ['271px', '14px', '14px', '94px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(55,55,55,1)']
                        },
                        {
                            rect: ['451px', '14px', '14px', '94px', 'auto', 'auto'],
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(55,55,55,1)']
                        },
                        {
                            rect: ['640px', '14px', '14px', '94px', 'auto', 'auto'],
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(55,55,55,1)']
                        },
                        {
                            rect: ['831px', '14px', '14px', '94px', 'auto', 'auto'],
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(55,55,55,1)']
                        },
                        {
                            rect: ['1015px', '14px', '14px', '94px', 'auto', 'auto'],
                            id: 'Rectangle2Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(55,55,55,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1293px', '108px']
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
            "classmates": {
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
                            id: 'classmate5',
                            rect: ['780px', '-592px', '177px', '219px', 'auto', 'auto'],
                            transform: [[], ['-3'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/classmate5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'classmate4',
                            rect: ['578px', '-592px', '176px', '219px', 'auto', 'auto'],
                            transform: [[], ['-5'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/classmate4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'classmate3',
                            rect: ['376px', '-592px', '177px', '219px', 'auto', 'auto'],
                            transform: [[], ['2'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/classmate3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'classmate2',
                            rect: ['173px', '-592px', '177px', '219px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/classmate2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'classmate1',
                            rect: ['-30px', '-592px', '177px', '219px', 'auto', 'auto'],
                            transform: [[], ['-3'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/classmate1.png', '0px', '0px']
                        },
                        {
                            rect: ['-308px', '-493px', '793px', '119px', 'auto', 'auto'],
                            id: 'txt-lets',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/txt-lets.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['-33px', '-331px', '199', '197', 'auto', 'auto'],
                            id: 'opt1',
                            display: 'none',
                            symbolName: 'opt1',
                            cursor: 'pointer',
                            userClass: 'dragIcons'
                        },
                        {
                            type: 'rect',
                            rect: ['171px', '-338px', '202', '204', 'auto', 'auto'],
                            id: 'opt2',
                            display: 'none',
                            symbolName: 'Symbol_1',
                            cursor: 'pointer',
                            userClass: 'dragIcons'
                        },
                        {
                            type: 'rect',
                            rect: ['375px', '-338px', '202', '204', 'auto', 'auto'],
                            id: 'opt3',
                            display: 'none',
                            symbolName: 'Symbol_2',
                            cursor: 'pointer',
                            userClass: 'dragIcons'
                        },
                        {
                            type: 'rect',
                            rect: ['578px', '-338px', '202', '204', 'auto', 'auto'],
                            id: 'opt4',
                            display: 'none',
                            symbolName: 'Symbol_3',
                            cursor: 'pointer',
                            userClass: 'dragIcons'
                        },
                        {
                            type: 'rect',
                            rect: ['781px', '-338px', '202', '204', 'auto', 'auto'],
                            id: 'opt5',
                            display: 'none',
                            symbolName: 'Symbol_4',
                            cursor: 'pointer',
                            userClass: 'dragIcons'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '942px', '248px']
                        }
                    }
                },
                timeline: {
                    duration: 6448,
                    autoPlay: true,
                    labels: {
                        "reveal": 1500,
                        "show": 5904
                    },
                    data: [
                        [
                            "eid4285",
                            "width",
                            2701,
                            0,
                            "linear",
                            "${txt-lets}",
                            '793px',
                            '793px'
                        ],
                        [
                            "eid4298",
                            "width",
                            6100,
                            348,
                            "linear",
                            "${txt-lets}",
                            '793px',
                            '1499px'
                        ],
                        [
                            "eid3301",
                            "left",
                            1000,
                            160,
                            "linear",
                            "${classmate1}",
                            '6px',
                            '-30px'
                        ],
                        [
                            "eid4538",
                            "display",
                            0,
                            0,
                            "linear",
                            "${opt1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4543",
                            "display",
                            1306,
                            0,
                            "linear",
                            "${opt1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3307",
                            "height",
                            1000,
                            160,
                            "linear",
                            "${classmate3}",
                            '219px',
                            '248px'
                        ],
                        [
                            "eid3330",
                            "rotateZ",
                            1000,
                            160,
                            "linear",
                            "${classmate4}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid3309",
                            "left",
                            1000,
                            160,
                            "linear",
                            "${classmate3}",
                            '383px',
                            '376px'
                        ],
                        [
                            "eid3320",
                            "rotateZ",
                            1000,
                            0,
                            "linear",
                            "${classmate2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid3325",
                            "rotateZ",
                            1160,
                            0,
                            "linear",
                            "${classmate2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid3315",
                            "height",
                            1000,
                            160,
                            "linear",
                            "${classmate2}",
                            '219px',
                            '248px'
                        ],
                        [
                            "eid3329",
                            "rotateZ",
                            1000,
                            160,
                            "linear",
                            "${classmate1}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid3310",
                            "width",
                            1000,
                            160,
                            "linear",
                            "${classmate3}",
                            '177px',
                            '200px'
                        ],
                        [
                            "eid4542",
                            "display",
                            0,
                            0,
                            "linear",
                            "${opt2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4547",
                            "display",
                            1306,
                            0,
                            "linear",
                            "${opt2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3216",
                            "top",
                            0,
                            0,
                            "linear",
                            "${classmate2}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid3230",
                            "top",
                            250,
                            175,
                            "linear",
                            "${classmate2}",
                            '29px',
                            '-277px'
                        ],
                        [
                            "eid3232",
                            "top",
                            425,
                            120,
                            "linear",
                            "${classmate2}",
                            '-277px',
                            '-238px'
                        ],
                        [
                            "eid3316",
                            "top",
                            1000,
                            160,
                            "linear",
                            "${classmate2}",
                            '-238px',
                            '-592px'
                        ],
                        [
                            "eid3302",
                            "width",
                            1000,
                            160,
                            "linear",
                            "${classmate1}",
                            '177px',
                            '200px'
                        ],
                        [
                            "eid3218",
                            "top",
                            0,
                            0,
                            "linear",
                            "${classmate4}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid3225",
                            "top",
                            145,
                            195,
                            "linear",
                            "${classmate4}",
                            '16px',
                            '-282px'
                        ],
                        [
                            "eid3227",
                            "top",
                            340,
                            85,
                            "linear",
                            "${classmate4}",
                            '-282px',
                            '-246px'
                        ],
                        [
                            "eid3304",
                            "top",
                            1000,
                            160,
                            "linear",
                            "${classmate4}",
                            '-246px',
                            '-592px'
                        ],
                        [
                            "eid3214",
                            "top",
                            0,
                            0,
                            "linear",
                            "${classmate5}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid3235",
                            "top",
                            250,
                            205,
                            "linear",
                            "${classmate5}",
                            '16px',
                            '-304px'
                        ],
                        [
                            "eid3237",
                            "top",
                            455,
                            120,
                            "linear",
                            "${classmate5}",
                            '-304px',
                            '-246px'
                        ],
                        [
                            "eid3312",
                            "top",
                            1000,
                            160,
                            "linear",
                            "${classmate5}",
                            '-246px',
                            '-592px'
                        ],
                        [
                            "eid3314",
                            "width",
                            1000,
                            160,
                            "linear",
                            "${classmate5}",
                            '177px',
                            '200px'
                        ],
                        [
                            "eid3220",
                            "top",
                            0,
                            185,
                            "linear",
                            "${classmate1}",
                            '7px',
                            '-293px'
                        ],
                        [
                            "eid3222",
                            "top",
                            185,
                            110,
                            "linear",
                            "${classmate1}",
                            '-293px',
                            '-249px'
                        ],
                        [
                            "eid3300",
                            "top",
                            1000,
                            160,
                            "linear",
                            "${classmate1}",
                            '-249px',
                            '-592px'
                        ],
                        [
                            "eid3317",
                            "left",
                            1000,
                            160,
                            "linear",
                            "${classmate2}",
                            '201px',
                            '173px'
                        ],
                        [
                            "eid4540",
                            "display",
                            0,
                            0,
                            "linear",
                            "${opt4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4545",
                            "display",
                            1306,
                            0,
                            "linear",
                            "${opt4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3332",
                            "rotateZ",
                            1000,
                            160,
                            "linear",
                            "${classmate5}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid4286",
                            "left",
                            2701,
                            0,
                            "linear",
                            "${txt-lets}",
                            '77px',
                            '77px'
                        ],
                        [
                            "eid4297",
                            "left",
                            6100,
                            348,
                            "linear",
                            "${txt-lets}",
                            '77px',
                            '-308px'
                        ],
                        [
                            "eid4294",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-lets}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4293",
                            "opacity",
                            1500,
                            42,
                            "linear",
                            "${txt-lets}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4290",
                            "opacity",
                            6318,
                            130,
                            "linear",
                            "${txt-lets}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3299",
                            "height",
                            1000,
                            160,
                            "linear",
                            "${classmate1}",
                            '219px',
                            '248px'
                        ],
                        [
                            "eid3313",
                            "left",
                            1000,
                            160,
                            "linear",
                            "${classmate5}",
                            '765px',
                            '780px'
                        ],
                        [
                            "eid3306",
                            "width",
                            1000,
                            160,
                            "linear",
                            "${classmate4}",
                            '176px',
                            '199px'
                        ],
                        [
                            "eid3311",
                            "height",
                            1000,
                            160,
                            "linear",
                            "${classmate5}",
                            '219px',
                            '248px'
                        ],
                        [
                            "eid4284",
                            "height",
                            2701,
                            0,
                            "linear",
                            "${txt-lets}",
                            '119px',
                            '119px'
                        ],
                        [
                            "eid4296",
                            "height",
                            6100,
                            348,
                            "linear",
                            "${txt-lets}",
                            '119px',
                            '225px'
                        ],
                        [
                            "eid3318",
                            "width",
                            1000,
                            160,
                            "linear",
                            "${classmate2}",
                            '177px',
                            '200px'
                        ],
                        [
                            "eid3217",
                            "top",
                            0,
                            0,
                            "linear",
                            "${classmate3}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid3240",
                            "top",
                            185,
                            208,
                            "linear",
                            "${classmate3}",
                            '3px',
                            '-303px'
                        ],
                        [
                            "eid3242",
                            "top",
                            393,
                            107,
                            "linear",
                            "${classmate3}",
                            '-303px',
                            '-250px'
                        ],
                        [
                            "eid3308",
                            "top",
                            1000,
                            160,
                            "linear",
                            "${classmate3}",
                            '-250px',
                            '-592px'
                        ],
                        [
                            "eid4541",
                            "display",
                            0,
                            0,
                            "linear",
                            "${opt3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4546",
                            "display",
                            1306,
                            0,
                            "linear",
                            "${opt3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4539",
                            "display",
                            0,
                            0,
                            "linear",
                            "${opt5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4544",
                            "display",
                            1306,
                            0,
                            "linear",
                            "${opt5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3305",
                            "left",
                            1000,
                            160,
                            "linear",
                            "${classmate4}",
                            '574px',
                            '578px'
                        ],
                        [
                            "eid3303",
                            "height",
                            1000,
                            160,
                            "linear",
                            "${classmate4}",
                            '219px',
                            '248px'
                        ],
                        [
                            "eid4274",
                            "top",
                            1500,
                            1136,
                            "linear",
                            "${txt-lets}",
                            '-740px',
                            '-404px'
                        ],
                        [
                            "eid4276",
                            "top",
                            2636,
                            65,
                            "linear",
                            "${txt-lets}",
                            '-404px',
                            '-449px'
                        ],
                        [
                            "eid4287",
                            "top",
                            2701,
                            0,
                            "linear",
                            "${txt-lets}",
                            '-449px',
                            '-449px'
                        ],
                        [
                            "eid4295",
                            "top",
                            6100,
                            348,
                            "linear",
                            "${txt-lets}",
                            '-449px',
                            '-493px'
                        ],
                        [
                            "eid3331",
                            "rotateZ",
                            1000,
                            160,
                            "linear",
                            "${classmate3}",
                            '2deg',
                            '0deg'
                        ],
                            [ "eid4548", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${opt1}', [] ] ],
                            [ "eid4551", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${opt2}', [] ] ],
                            [ "eid4550", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${opt3}', [] ] ],
                            [ "eid4549", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${opt4}', [] ] ],
                            [ "eid4552", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${opt5}', [] ] ]
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
                            rect: ['-218px', '491px', '218px', '66px', 'auto', 'auto'],
                            id: 'narrator-text-balloon3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['-9px', '405px', '577px', '117px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text8',
                            text: 'Examine the faces of these students. Match the descriptions in the boxes below by clicking on them.',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '791px', '175px']
                        }
                    }
                },
                timeline: {
                    duration: 8750,
                    autoPlay: true,
                    labels: {
                        "end": 8670
                    },
                    data: [
                        [
                            "eid3648",
                            "left",
                            0,
                            197,
                            "linear",
                            "${narrator-text-balloon3}",
                            '-222px',
                            '-40px'
                        ],
                        [
                            "eid3668",
                            "left",
                            8555,
                            195,
                            "linear",
                            "${narrator-text-balloon3}",
                            '-40px',
                            '-218px'
                        ],
                        [
                            "eid3658",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3657",
                            "opacity",
                            131,
                            66,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3661",
                            "opacity",
                            8500,
                            120,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3647",
                            "width",
                            0,
                            197,
                            "linear",
                            "${narrator-text-balloon3}",
                            '239px',
                            '640px'
                        ],
                        [
                            "eid3669",
                            "width",
                            8555,
                            195,
                            "linear",
                            "${narrator-text-balloon3}",
                            '640px',
                            '218px'
                        ],
                        [
                            "eid3646",
                            "height",
                            0,
                            197,
                            "linear",
                            "${narrator-text-balloon3}",
                            '66px',
                            '208px'
                        ],
                        [
                            "eid3667",
                            "height",
                            8555,
                            195,
                            "linear",
                            "${narrator-text-balloon3}",
                            '208px',
                            '66px'
                        ],
                        [
                            "eid3653",
                            "opacity",
                            0,
                            91,
                            "linear",
                            "${narrator-text-balloon3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3672",
                            "opacity",
                            8670,
                            80,
                            "linear",
                            "${narrator-text-balloon3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3649",
                            "top",
                            0,
                            197,
                            "linear",
                            "${narrator-text-balloon3}",
                            '492px',
                            '366px'
                        ],
                        [
                            "eid3666",
                            "top",
                            8555,
                            195,
                            "linear",
                            "${narrator-text-balloon3}",
                            '366px',
                            '491px'
                        ]
                    ]
                }
            },
            "s1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '199px', '197px', 'auto', 'auto'],
                            id: 'stickynote',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '395px', '197px']
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
            "opt1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['13px', '0px', '173px', '184px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '1',
                            id: 'RoundRect2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['20px', '29px', '159px', '125px', 'auto', 'auto'],
                            text: 'Won the inter-school boxing championship',
                            id: 'Text9Copy5',
                            opacity: '1',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '-7px', '202px', '197px', 'auto', 'auto'],
                            id: 'spark1Copy',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '199px', '197px', 'auto', 'auto'],
                            id: 'stickynote',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text8Copy4',
                            opacity: '1',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            overflow: 'hidden',
                            display: 'block',
                            text: 'Top student in class',
                            align: 'center',
                            rect: ['19px', '16px', '161px', '144px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '199px', '197px']
                        }
                    }
                },
                timeline: {
                    duration: 1112,
                    autoPlay: true,
                    data: [
                        [
                            "eid4392",
                            "display",
                            700,
                            0,
                            "linear",
                            "${Text8Copy4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4394",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${Text8Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4376",
                            "opacity",
                            700,
                            106,
                            "linear",
                            "${spark1Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4383",
                            "top",
                            700,
                            300,
                            "linear",
                            "${spark1Copy}",
                            '-7px',
                            '-41px'
                        ],
                        [
                            "eid4382",
                            "width",
                            700,
                            300,
                            "linear",
                            "${spark1Copy}",
                            '202px',
                            '286px'
                        ],
                        [
                            "eid4384",
                            "left",
                            700,
                            300,
                            "linear",
                            "${spark1Copy}",
                            '0px',
                            '-43px'
                        ],
                        [
                            "eid4381",
                            "height",
                            700,
                            300,
                            "linear",
                            "${spark1Copy}",
                            '197px',
                            '279px'
                        ],
                        [
                            "eid4374",
                            "opacity",
                            700,
                            0,
                            "linear",
                            "${Text8Copy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid4393",
                            "height",
                            700,
                            300,
                            "linear",
                            "${Text8Copy4}",
                            '144px',
                            '11px'
                        ],
                        [
                            "eid4389",
                            "height",
                            700,
                            300,
                            "linear",
                            "${stickynote}",
                            '197px',
                            '27px'
                        ],
                        [
                            "eid4385",
                            "display",
                            700,
                            0,
                            "linear",
                            "${spark1Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4386",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${spark1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4388",
                            "display",
                            700,
                            0,
                            "linear",
                            "${stickynote}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4390",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${stickynote}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['13px', '7px', '173px', '184px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '1',
                            id: 'RoundRect2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['20px', '49px', '159px', '99px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            text: 'Best midfielder <br>in class',
                            id: 'Text9Copy7',
                            opacity: '1',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '202px', '197px', 'auto', 'auto'],
                            id: 'spark1Copy',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '7px', '199px', '197px', 'auto', 'auto'],
                            id: 'stickynote',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text8Copy5',
                            opacity: '1',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            overflow: 'hidden',
                            display: 'block',
                            text: 'Model',
                            align: 'center',
                            rect: ['20px', '71px', '161px', '61px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '202px', '204px']
                        }
                    }
                },
                timeline: {
                    duration: 1112,
                    autoPlay: true,
                    data: [
                        [
                            "eid4465",
                            "opacity",
                            700,
                            106,
                            "linear",
                            "${spark1Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4473",
                            "top",
                            700,
                            0,
                            "linear",
                            "${Text8Copy5}",
                            '71px',
                            '71px'
                        ],
                        [
                            "eid4461",
                            "top",
                            700,
                            300,
                            "linear",
                            "${spark1Copy}",
                            '0px',
                            '-34px'
                        ],
                        [
                            "eid4467",
                            "width",
                            700,
                            300,
                            "linear",
                            "${spark1Copy}",
                            '202px',
                            '286px'
                        ],
                        [
                            "eid4466",
                            "left",
                            700,
                            300,
                            "linear",
                            "${spark1Copy}",
                            '0px',
                            '-43px'
                        ],
                        [
                            "eid4464",
                            "height",
                            700,
                            300,
                            "linear",
                            "${spark1Copy}",
                            '197px',
                            '279px'
                        ],
                        [
                            "eid4474",
                            "left",
                            700,
                            0,
                            "linear",
                            "${Text8Copy5}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid4458",
                            "display",
                            700,
                            0,
                            "linear",
                            "${stickynote}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4459",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${stickynote}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4460",
                            "height",
                            700,
                            300,
                            "linear",
                            "${stickynote}",
                            '197px',
                            '27px'
                        ],
                        [
                            "eid4462",
                            "display",
                            700,
                            0,
                            "linear",
                            "${spark1Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4463",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${spark1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4468",
                            "display",
                            700,
                            0,
                            "linear",
                            "${Text8Copy5}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4479",
                            "display",
                            918,
                            0,
                            "linear",
                            "${Text8Copy5}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Symbol_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['13px', '7px', '173px', '184px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '1',
                            id: 'RoundRect2Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['20px', '47px', '159px', '115px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            text: 'Helps out at his father\'s stall at night',
                            id: 'Text9Copy9',
                            opacity: '1',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '202px', '197px', 'auto', 'auto'],
                            id: 'spark1Copy2',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '7px', '199px', '197px', 'auto', 'auto'],
                            id: 'stickynoteCopy5',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text8Copy6',
                            opacity: '1',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            overflow: 'hidden',
                            display: 'block',
                            text: 'Lazy',
                            align: 'center',
                            rect: ['20px', '71px', '161px', '61px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '202px', '204px']
                        }
                    }
                },
                timeline: {
                    duration: 1112,
                    autoPlay: true,
                    data: [
                        [
                            "eid4499",
                            "top",
                            700,
                            300,
                            "linear",
                            "${spark1Copy2}",
                            '0px',
                            '-34px'
                        ],
                        [
                            "eid4492",
                            "top",
                            700,
                            0,
                            "linear",
                            "${Text8Copy6}",
                            '71px',
                            '71px'
                        ],
                        [
                            "eid4500",
                            "display",
                            700,
                            0,
                            "linear",
                            "${spark1Copy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4501",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${spark1Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4503",
                            "opacity",
                            700,
                            106,
                            "linear",
                            "${spark1Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4505",
                            "width",
                            700,
                            300,
                            "linear",
                            "${spark1Copy2}",
                            '202px',
                            '286px'
                        ],
                        [
                            "eid4493",
                            "left",
                            700,
                            0,
                            "linear",
                            "${Text8Copy6}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid4502",
                            "height",
                            700,
                            300,
                            "linear",
                            "${spark1Copy2}",
                            '197px',
                            '279px'
                        ],
                        [
                            "eid4497",
                            "display",
                            700,
                            0,
                            "linear",
                            "${stickynoteCopy5}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4498",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${stickynoteCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4496",
                            "height",
                            700,
                            300,
                            "linear",
                            "${stickynoteCopy5}",
                            '197px',
                            '27px'
                        ],
                        [
                            "eid4504",
                            "left",
                            700,
                            300,
                            "linear",
                            "${spark1Copy2}",
                            '0px',
                            '-43px'
                        ],
                        [
                            "eid4494",
                            "display",
                            700,
                            0,
                            "linear",
                            "${Text8Copy6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4495",
                            "display",
                            918,
                            0,
                            "linear",
                            "${Text8Copy6}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Symbol_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['13px', '7px', '173px', '184px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '1',
                            id: 'RoundRect2Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['20px', '65px', '159px', '74px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            text: 'Class chairperson',
                            id: 'Text9Copy12',
                            opacity: '1',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '202px', '197px', 'auto', 'auto'],
                            id: 'spark1Copy3',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '7px', '199px', '197px', 'auto', 'auto'],
                            id: 'stickynoteCopy6',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text8Copy7',
                            opacity: '1',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            overflow: 'visible',
                            display: 'block',
                            text: 'Best at Home Econs',
                            align: 'center',
                            rect: ['20px', '24px', '161px', '167px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '202px', '204px']
                        }
                    }
                },
                timeline: {
                    duration: 1112,
                    autoPlay: true,
                    data: [
                        [
                            "eid4518",
                            "height",
                            700,
                            300,
                            "linear",
                            "${spark1Copy3}",
                            '197px',
                            '279px'
                        ],
                        [
                            "eid4510",
                            "display",
                            700,
                            0,
                            "linear",
                            "${Text8Copy7}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4511",
                            "display",
                            918,
                            0,
                            "linear",
                            "${Text8Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4515",
                            "top",
                            700,
                            300,
                            "linear",
                            "${spark1Copy3}",
                            '0px',
                            '-34px'
                        ],
                        [
                            "eid4516",
                            "display",
                            700,
                            0,
                            "linear",
                            "${spark1Copy3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4517",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${spark1Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4513",
                            "display",
                            700,
                            0,
                            "linear",
                            "${stickynoteCopy6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4514",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${stickynoteCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4509",
                            "left",
                            700,
                            0,
                            "linear",
                            "${Text8Copy7}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid4512",
                            "height",
                            700,
                            300,
                            "linear",
                            "${stickynoteCopy6}",
                            '197px',
                            '27px'
                        ],
                        [
                            "eid4520",
                            "left",
                            700,
                            300,
                            "linear",
                            "${spark1Copy3}",
                            '0px',
                            '-43px'
                        ],
                        [
                            "eid4519",
                            "opacity",
                            700,
                            106,
                            "linear",
                            "${spark1Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4508",
                            "top",
                            700,
                            0,
                            "linear",
                            "${Text8Copy7}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid4521",
                            "width",
                            700,
                            300,
                            "linear",
                            "${spark1Copy3}",
                            '202px',
                            '286px'
                        ]
                    ]
                }
            },
            "Symbol_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['13px', '7px', '173px', '184px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '1',
                            id: 'RoundRect2Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['21px', '65px', '159px', '74px', 'auto', 'auto'],
                            text: 'Top <br>student',
                            id: 'Text9Copy14',
                            opacity: '1',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '202px', '197px', 'auto', 'auto'],
                            id: 'spark1Copy4',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '7px', '199px', '197px', 'auto', 'auto'],
                            id: 'stickynoteCopy7',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text8Copy8',
                            opacity: '1',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            overflow: 'hidden',
                            display: 'block',
                            text: 'Anti-social',
                            align: 'center',
                            rect: ['19px', '39px', '161px', '122px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '202px', '204px']
                        }
                    }
                },
                timeline: {
                    duration: 1112,
                    autoPlay: true,
                    data: [
                        [
                            "eid4535",
                            "opacity",
                            700,
                            106,
                            "linear",
                            "${spark1Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4526",
                            "display",
                            700,
                            0,
                            "linear",
                            "${Text8Copy8}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4527",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${Text8Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4534",
                            "height",
                            700,
                            300,
                            "linear",
                            "${spark1Copy4}",
                            '197px',
                            '279px'
                        ],
                        [
                            "eid4536",
                            "left",
                            700,
                            300,
                            "linear",
                            "${spark1Copy4}",
                            '0px',
                            '-43px'
                        ],
                        [
                            "eid4532",
                            "display",
                            700,
                            0,
                            "linear",
                            "${spark1Copy4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4533",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${spark1Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4531",
                            "top",
                            700,
                            300,
                            "linear",
                            "${spark1Copy4}",
                            '0px',
                            '-34px'
                        ],
                        [
                            "eid4524",
                            "height",
                            700,
                            300,
                            "linear",
                            "${Text8Copy8}",
                            '122px',
                            '11px'
                        ],
                        [
                            "eid4530",
                            "height",
                            700,
                            300,
                            "linear",
                            "${stickynoteCopy7}",
                            '197px',
                            '27px'
                        ],
                        [
                            "eid4537",
                            "width",
                            700,
                            300,
                            "linear",
                            "${spark1Copy4}",
                            '202px',
                            '286px'
                        ],
                        [
                            "eid4525",
                            "opacity",
                            700,
                            0,
                            "linear",
                            "${Text8Copy8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid4528",
                            "display",
                            700,
                            0,
                            "linear",
                            "${stickynoteCopy7}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4529",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${stickynoteCopy7}",
                            'block',
                            'none'
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
                            type: 'text',
                            rect: ['27px', '223px', '746px', '63px', 'auto', 'auto'],
                            text: 'You\'ve got the wrong answer.',
                            id: 'Text8',
                            opacity: '1',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['-2px', '295px', '800px', '34px', 'auto', 'auto'],
                            id: 'subText',
                            text: 'Try again until you get the correct answer.',
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
                            type: 'text',
                            rect: ['30px', '226px', '746px', '100px', 'auto', 'auto'],
                            text: 'You\'ve identified the stereotypes associated to these students.',
                            id: 'Text8',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [45, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
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
})("EDGE-601893278");
