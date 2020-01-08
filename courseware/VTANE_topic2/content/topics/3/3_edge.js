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
                            id: 'classroom',
                            type: 'image',
                            rect: ['-14px', '-10px', '1052px', '744px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"classroom.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-10px', '-8px', '1052px', '601px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.68)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'text-balloon-bub',
                            type: 'image',
                            rect: ['520px', '576px', '116px', '115px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-balloon-bub.png",'0px','0px']
                        },
                        {
                            id: 'text-balloon',
                            type: 'image',
                            rect: ['367px', '296px', '334px', '128px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['183px', '194px', '682px', '156px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Intended Audiences and Content",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(0,0,0,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'box',
                            type: 'image',
                            rect: ['320px', '434px', '359px', '331px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"box.png",'0px','0px']
                        },
                        {
                            id: 'box-open',
                            type: 'image',
                            rect: ['198px', '358px', '602px', '407px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"box-open.png",'0px','0px']
                        },
                        {
                            id: 'box-item5',
                            type: 'image',
                            rect: ['385px', '362px', '250px', '246px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"box-item5.png",'0px','0px']
                        },
                        {
                            id: 'box-item4',
                            type: 'image',
                            rect: ['512px', '415px', '75px', '97px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"box-item4.png",'0px','0px']
                        },
                        {
                            id: 'box-item3',
                            type: 'image',
                            rect: ['412px', '410px', '80px', '98px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"box-item3.png",'0px','0px']
                        },
                        {
                            id: 'box-item2',
                            type: 'image',
                            rect: ['398px', '168px', '202px', '205px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"box-item2.png",'0px','0px'],
                            transform: [[],['36']]
                        },
                        {
                            id: 'box-item1',
                            type: 'image',
                            rect: ['442px', '401px', '190px', '192px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"box-item1.png",'0px','0px']
                        },
                        {
                            id: 'narrator-text-balloon',
                            type: 'image',
                            rect: ['148px', '18px', '708px', '156px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['190px', '43px', '630px', '95px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Are you ready to try out this activity?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [42, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['167px', '32px', '682px', '98px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Identify who the visual text is intended for by looking at its content. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['148px', '19px', '717px', '138px', 'auto', 'auto'],
                            opacity: '0',
                            text: "How to identify the target audience?<br>Clue: analyse the image styles and text messages",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['291px', '44px', '441px', '98px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Let’s use the example of a party invitation.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['199px', '46px', '602px', '98px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Find the appropriate audience by looking through the invitations.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'magnifying-glass',
                            type: 'image',
                            rect: ['1038px', '416px', '300px', '384px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"magnifying-glass.png",'0px','0px']
                        },
                        {
                            id: 'drop1',
                            symbolName: 'drop-effect',
                            display: 'none',
                            type: 'rect',
                            rect: ['64', '354', '191', '188', 'auto', 'auto']
                        },
                        {
                            id: 'drop2',
                            symbolName: 'drop-effect',
                            display: 'none',
                            type: 'rect',
                            rect: ['419px', '354', '191', '188', 'auto', 'auto']
                        },
                        {
                            id: 'drop3',
                            symbolName: 'drop-effect',
                            display: 'none',
                            type: 'rect',
                            rect: ['756px', '354', '191', '188', 'auto', 'auto']
                        },
                        {
                            id: 'icon-18yrs',
                            type: 'image',
                            rect: ['702px', '329px', '300px', '231px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"icon-18yrs.png",'0px','0px'],
                            userClass: "groups"
                        },
                        {
                            id: 'icon-13yrs',
                            type: 'image',
                            rect: ['370px', '329px', '300px', '231px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"icon-13yrs.png",'0px','0px'],
                            userClass: "groups"
                        },
                        {
                            id: 'icon-12yrs',
                            type: 'image',
                            rect: ['21px', '329px', '300px', '231px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"icon-12yrs.png",'0px','0px'],
                            userClass: "groups"
                        },
                        {
                            id: 'instruction',
                            symbolName: 'instruction',
                            display: 'none',
                            type: 'rect',
                            rect: ['198px', '7px', '826', '168', 'auto', 'auto']
                        },
                        {
                            id: 'instruction-btn',
                            type: 'image',
                            rect: ['62px', '33px', '128px', '41px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"instruction-btn.png",'0px','0px']
                        },
                        {
                            id: 'envelope1',
                            display: 'none',
                            type: 'image',
                            rect: ['425px', '90px', '192px', '196px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"envelope-close1.png",'0px','0px'],
                            userClass: "envelopes"
                        },
                        {
                            id: 'envelope2',
                            display: 'none',
                            type: 'image',
                            rect: ['425px', '90px', '192px', '196px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"envelope-close1.png",'0px','0px'],
                            userClass: "envelopes"
                        },
                        {
                            id: 'envelope3',
                            display: 'none',
                            type: 'image',
                            rect: ['425px', '90px', '192px', '196px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"envelope-close1.png",'0px','0px'],
                            userClass: "envelopes"
                        },
                        {
                            id: 'invitation2',
                            symbolName: 'invitation2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1058', '180', '192', '196', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'invitation3',
                            symbolName: 'invitation3',
                            display: 'none',
                            type: 'rect',
                            rect: ['-2px', '-2px', '192', '196', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'invitation1',
                            symbolName: 'invitation1',
                            display: 'none',
                            type: 'rect',
                            rect: ['-16px', '-223px', '1056', '816', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'mainmenu',
                            display: 'none',
                            type: 'image',
                            rect: ['829px', '507px', '185px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
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
                    duration: 41039,
                    autoPlay: true,
                    labels: {
                        "test": 40921
                    },
                    data: [
                        [
                            "eid10181",
                            "top",
                            3173,
                            257,
                            "linear",
                            "${narrator-text-balloon}",
                            '-172px',
                            '392px'
                        ],
                        [
                            "eid10193",
                            "top",
                            3430,
                            191,
                            "linear",
                            "${narrator-text-balloon}",
                            '392px',
                            '283px'
                        ],
                        [
                            "eid10205",
                            "top",
                            3621,
                            179,
                            "linear",
                            "${narrator-text-balloon}",
                            '283px',
                            '405px'
                        ],
                        [
                            "eid10219",
                            "top",
                            3800,
                            76,
                            "linear",
                            "${narrator-text-balloon}",
                            '405px',
                            '417px'
                        ],
                        [
                            "eid10223",
                            "top",
                            3876,
                            54,
                            "linear",
                            "${narrator-text-balloon}",
                            '417px',
                            '398px'
                        ],
                        [
                            "eid10254",
                            "top",
                            8322,
                            251,
                            "linear",
                            "${narrator-text-balloon}",
                            '398px',
                            '5px'
                        ],
                        [
                            "eid10359",
                            "top",
                            11000,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid10363",
                            "top",
                            11250,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid10586",
                            "top",
                            17000,
                            207,
                            "linear",
                            "${narrator-text-balloon}",
                            '5px',
                            '18px'
                        ],
                        [
                            "eid10712",
                            "top",
                            29898,
                            102,
                            "linear",
                            "${narrator-text-balloon}",
                            '18px',
                            '58px'
                        ],
                        [
                            "eid10716",
                            "top",
                            30000,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '58px',
                            '-166px'
                        ],
                        [
                            "eid6719",
                            "top",
                            0,
                            11000,
                            "linear",
                            "${classroom}",
                            '-158px',
                            '-10px'
                        ],
                        [
                            "eid10423",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${box-item3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10421",
                            "opacity",
                            13194,
                            100,
                            "linear",
                            "${box-item3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10506",
                            "opacity",
                            14705,
                            108,
                            "linear",
                            "${box-item3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10604",
                            "left",
                            18000,
                            336,
                            "linear",
                            "${icon-12yrs}",
                            '1038px',
                            '48px'
                        ],
                        [
                            "eid10609",
                            "left",
                            18336,
                            164,
                            "linear",
                            "${icon-12yrs}",
                            '48px',
                            '18px'
                        ],
                        [
                            "eid10615",
                            "left",
                            18577,
                            132,
                            "linear",
                            "${icon-12yrs}",
                            '18px',
                            '21px'
                        ],
                        [
                            "eid11122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${envelope3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-resultCorrect}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10286",
                            "left",
                            9300,
                            153,
                            "linear",
                            "${box-item2}",
                            '398px',
                            '411px'
                        ],
                        [
                            "eid10265",
                            "rotateZ",
                            8686,
                            206,
                            "linear",
                            "${box}",
                            '0deg',
                            '-6deg'
                        ],
                        [
                            "eid10267",
                            "rotateZ",
                            8892,
                            204,
                            "linear",
                            "${box}",
                            '-6deg',
                            '10deg'
                        ],
                        [
                            "eid10269",
                            "rotateZ",
                            9096,
                            204,
                            "linear",
                            "${box}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid10622",
                            "left",
                            19309,
                            191,
                            "linear",
                            "${icon-18yrs}",
                            '1038px',
                            '694px'
                        ],
                        [
                            "eid10623",
                            "left",
                            19500,
                            149,
                            "linear",
                            "${icon-18yrs}",
                            '694px',
                            '657px'
                        ],
                        [
                            "eid10624",
                            "left",
                            19708,
                            121,
                            "linear",
                            "${icon-18yrs}",
                            '657px',
                            '702px'
                        ],
                        [
                            "eid10349",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${box-item1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10329",
                            "opacity",
                            11458,
                            102,
                            "linear",
                            "${box-item1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10348",
                            "opacity",
                            13194,
                            56,
                            "linear",
                            "${box-item1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11123",
                            "display",
                            0,
                            0,
                            "linear",
                            "${envelope2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10230",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10228",
                            "opacity",
                            3173,
                            77,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10352",
                            "opacity",
                            9345,
                            165,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10386",
                            "top",
                            13194,
                            258,
                            "linear",
                            "${box-item4}",
                            '460px',
                            '235px'
                        ],
                        [
                            "eid10469",
                            "top",
                            13452,
                            548,
                            "linear",
                            "${box-item4}",
                            '235px',
                            '265px'
                        ],
                        [
                            "eid10473",
                            "top",
                            14000,
                            636,
                            "linear",
                            "${box-item4}",
                            '265px',
                            '221px'
                        ],
                        [
                            "eid10481",
                            "top",
                            14636,
                            177,
                            "linear",
                            "${box-item4}",
                            '221px',
                            '415px'
                        ],
                        [
                            "eid10462",
                            "width",
                            13194,
                            253,
                            "linear",
                            "${box-item3}",
                            '80px',
                            '190px'
                        ],
                        [
                            "eid10500",
                            "width",
                            14636,
                            177,
                            "linear",
                            "${box-item3}",
                            '190px',
                            '104px'
                        ],
                        [
                            "eid11067",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${icon-13yrs}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11076",
                            "opacity",
                            17908,
                            92,
                            "linear",
                            "${icon-13yrs}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11007",
                            "display",
                            0,
                            0,
                            "linear",
                            "${drop1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10651",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10650",
                            "opacity",
                            18852,
                            119,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11082",
                            "opacity",
                            21750,
                            173,
                            "linear",
                            "${Text5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11006",
                            "display",
                            0,
                            0,
                            "linear",
                            "${drop2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10625",
                            "skewX",
                            19309,
                            191,
                            "linear",
                            "${icon-18yrs}",
                            '0deg',
                            '-9.91deg'
                        ],
                        [
                            "eid10626",
                            "skewX",
                            19500,
                            149,
                            "linear",
                            "${icon-18yrs}",
                            '-9.91deg',
                            '15deg'
                        ],
                        [
                            "eid10627",
                            "skewX",
                            19708,
                            121,
                            "linear",
                            "${icon-18yrs}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid3579",
                            "opacity",
                            0,
                            170,
                            "linear",
                            "${text-balloon-bub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3576",
                            "opacity",
                            250,
                            181,
                            "linear",
                            "${text-balloon-bub}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3581",
                            "opacity",
                            500,
                            169,
                            "linear",
                            "${text-balloon-bub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3580",
                            "opacity",
                            750,
                            138,
                            "linear",
                            "${text-balloon-bub}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10357",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10356",
                            "opacity",
                            9568,
                            192,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10576",
                            "opacity",
                            18709,
                            185,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10392",
                            "left",
                            13194,
                            258,
                            "linear",
                            "${box-item4}",
                            '549px',
                            '512px'
                        ],
                        [
                            "eid10468",
                            "left",
                            13452,
                            548,
                            "linear",
                            "${box-item4}",
                            '512px',
                            '499px'
                        ],
                        [
                            "eid10472",
                            "left",
                            14000,
                            636,
                            "linear",
                            "${box-item4}",
                            '499px',
                            '506px'
                        ],
                        [
                            "eid10483",
                            "left",
                            14636,
                            177,
                            "linear",
                            "${box-item4}",
                            '506px',
                            '512px'
                        ],
                        [
                            "eid3593",
                            "top",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '296px',
                            '117px'
                        ],
                        [
                            "eid3645",
                            "top",
                            1038,
                            462,
                            "linear",
                            "${text-balloon}",
                            '117px',
                            '100px'
                        ],
                        [
                            "eid3649",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${text-balloon}",
                            '100px',
                            '111px'
                        ],
                        [
                            "eid3653",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${text-balloon}",
                            '111px',
                            '99px'
                        ],
                        [
                            "eid3657",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${text-balloon}",
                            '99px',
                            '110px'
                        ],
                        [
                            "eid10231",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10229",
                            "opacity",
                            3173,
                            77,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10706",
                            "opacity",
                            30000,
                            116,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10619",
                            "skewX",
                            18709,
                            250,
                            "linear",
                            "${icon-13yrs}",
                            '0deg',
                            '-9.91deg'
                        ],
                        [
                            "eid10620",
                            "skewX",
                            18959,
                            153,
                            "linear",
                            "${icon-13yrs}",
                            '-9.91deg',
                            '15deg'
                        ],
                        [
                            "eid10621",
                            "skewX",
                            19183,
                            126,
                            "linear",
                            "${icon-13yrs}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid10389",
                            "top",
                            13194,
                            258,
                            "linear",
                            "${box-item3}",
                            '452px',
                            '230px'
                        ],
                        [
                            "eid10486",
                            "top",
                            13452,
                            548,
                            "linear",
                            "${box-item3}",
                            '230px',
                            '204px'
                        ],
                        [
                            "eid10491",
                            "top",
                            14000,
                            636,
                            "linear",
                            "${box-item3}",
                            '204px',
                            '250px'
                        ],
                        [
                            "eid10499",
                            "top",
                            14636,
                            177,
                            "linear",
                            "${box-item3}",
                            '250px',
                            '410px'
                        ],
                        [
                            "eid3673",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3550",
                            "opacity",
                            888,
                            150,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3662",
                            "opacity",
                            2878,
                            295,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10463",
                            "left",
                            13194,
                            253,
                            "linear",
                            "${box-item3}",
                            '412px',
                            '304px'
                        ],
                        [
                            "eid10487",
                            "left",
                            13447,
                            553,
                            "linear",
                            "${box-item3}",
                            '304px',
                            '301px'
                        ],
                        [
                            "eid10490",
                            "left",
                            14000,
                            636,
                            "linear",
                            "${box-item3}",
                            '301px',
                            '322px'
                        ],
                        [
                            "eid10501",
                            "left",
                            14636,
                            177,
                            "linear",
                            "${box-item3}",
                            '322px',
                            '404px'
                        ],
                        [
                            "eid10235",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${box}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10238",
                            "opacity",
                            8250,
                            72,
                            "linear",
                            "${box}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11068",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${icon-18yrs}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11077",
                            "opacity",
                            17908,
                            92,
                            "linear",
                            "${icon-18yrs}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10234",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${box-open}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10277",
                            "opacity",
                            9300,
                            45,
                            "linear",
                            "${box-open}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10545",
                            "opacity",
                            16500,
                            94,
                            "linear",
                            "${box-open}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10366",
                            "height",
                            11000,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '165px',
                            '198px'
                        ],
                        [
                            "eid10585",
                            "height",
                            17000,
                            207,
                            "linear",
                            "${narrator-text-balloon}",
                            '198px',
                            '156px'
                        ],
                        [
                            "eid10180",
                            "top",
                            3173,
                            257,
                            "linear",
                            "${Text2}",
                            '-145px',
                            '419px'
                        ],
                        [
                            "eid10191",
                            "top",
                            3430,
                            191,
                            "linear",
                            "${Text2}",
                            '419px',
                            '310px'
                        ],
                        [
                            "eid10204",
                            "top",
                            3621,
                            179,
                            "linear",
                            "${Text2}",
                            '310px',
                            '432px'
                        ],
                        [
                            "eid10217",
                            "top",
                            3800,
                            76,
                            "linear",
                            "${Text2}",
                            '432px',
                            '444px'
                        ],
                        [
                            "eid10222",
                            "top",
                            3876,
                            54,
                            "linear",
                            "${Text2}",
                            '444px',
                            '425px'
                        ],
                        [
                            "eid10253",
                            "top",
                            8322,
                            251,
                            "linear",
                            "${Text2}",
                            '425px',
                            '32px'
                        ],
                        [
                            "eid10742",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10741",
                            "opacity",
                            30116,
                            105,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10303",
                            "top",
                            9649,
                            461,
                            "linear",
                            "${magnifying-glass}",
                            '416px',
                            '178px'
                        ],
                        [
                            "eid10307",
                            "top",
                            10110,
                            390,
                            "linear",
                            "${magnifying-glass}",
                            '178px',
                            '170px'
                        ],
                        [
                            "eid10311",
                            "top",
                            10500,
                            500,
                            "linear",
                            "${magnifying-glass}",
                            '170px',
                            '209px'
                        ],
                        [
                            "eid10315",
                            "top",
                            11000,
                            500,
                            "linear",
                            "${magnifying-glass}",
                            '209px',
                            '196px'
                        ],
                        [
                            "eid10335",
                            "top",
                            11500,
                            750,
                            "linear",
                            "${magnifying-glass}",
                            '196px',
                            '209px'
                        ],
                        [
                            "eid10337",
                            "top",
                            12250,
                            750,
                            "linear",
                            "${magnifying-glass}",
                            '209px',
                            '170px'
                        ],
                        [
                            "eid10339",
                            "top",
                            13000,
                            750,
                            "linear",
                            "${magnifying-glass}",
                            '170px',
                            '178px'
                        ],
                        [
                            "eid10343",
                            "top",
                            13750,
                            672,
                            "linear",
                            "${magnifying-glass}",
                            '178px',
                            '209px'
                        ],
                        [
                            "eid10528",
                            "top",
                            14422,
                            828,
                            "linear",
                            "${magnifying-glass}",
                            '209px',
                            '223px'
                        ],
                        [
                            "eid10532",
                            "top",
                            15250,
                            937,
                            "linear",
                            "${magnifying-glass}",
                            '223px',
                            '195px'
                        ],
                        [
                            "eid10542",
                            "top",
                            16187,
                            493,
                            "linear",
                            "${magnifying-glass}",
                            '195px',
                            '587px'
                        ],
                        [
                            "eid10733",
                            "width",
                            30116,
                            171,
                            "linear",
                            "${instruction-btn}",
                            '128px',
                            '355px'
                        ],
                        [
                            "eid10734",
                            "width",
                            30287,
                            99,
                            "linear",
                            "${instruction-btn}",
                            '355px',
                            '250px'
                        ],
                        [
                            "eid10285",
                            "top",
                            9300,
                            153,
                            "linear",
                            "${box-item2}",
                            '329px',
                            '168px'
                        ],
                        [
                            "eid10288",
                            "top",
                            9453,
                            103,
                            "linear",
                            "${box-item2}",
                            '168px',
                            '234px'
                        ],
                        [
                            "eid10295",
                            "top",
                            9556,
                            804,
                            "linear",
                            "${box-item2}",
                            '234px',
                            '201px'
                        ],
                        [
                            "eid10297",
                            "top",
                            10360,
                            890,
                            "linear",
                            "${box-item2}",
                            '201px',
                            '227px'
                        ],
                        [
                            "eid10317",
                            "top",
                            11250,
                            250,
                            "linear",
                            "${box-item2}",
                            '227px',
                            '357px'
                        ],
                        [
                            "eid10737",
                            "top",
                            30116,
                            171,
                            "linear",
                            "${instruction-btn}",
                            '33px',
                            '0px'
                        ],
                        [
                            "eid10738",
                            "top",
                            30287,
                            99,
                            "linear",
                            "${instruction-btn}",
                            '0px',
                            '5px'
                        ],
                        [
                            "eid10461",
                            "height",
                            13194,
                            253,
                            "linear",
                            "${box-item3}",
                            '98px',
                            '233px'
                        ],
                        [
                            "eid10498",
                            "height",
                            14636,
                            177,
                            "linear",
                            "${box-item3}",
                            '233px',
                            '127px'
                        ],
                        [
                            "eid3598",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3600",
                            "opacity",
                            579,
                            209,
                            "linear",
                            "${text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3663",
                            "opacity",
                            2878,
                            295,
                            "linear",
                            "${text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10179",
                            "rotateZ",
                            3173,
                            257,
                            "linear",
                            "${narrator-text-balloon}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid10195",
                            "rotateZ",
                            3430,
                            191,
                            "linear",
                            "${narrator-text-balloon}",
                            '5deg',
                            '-3deg'
                        ],
                        [
                            "eid10203",
                            "rotateZ",
                            3621,
                            179,
                            "linear",
                            "${narrator-text-balloon}",
                            '-3deg',
                            '2deg'
                        ],
                        [
                            "eid10215",
                            "rotateZ",
                            3800,
                            76,
                            "linear",
                            "${narrator-text-balloon}",
                            '2deg',
                            '0deg'
                        ],
                        [
                            "eid3592",
                            "height",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '128px',
                            '321px'
                        ],
                        [
                            "eid11100",
                            "scaleX",
                            17000,
                            207,
                            "linear",
                            "${Text3}",
                            '1',
                            '0.87866'
                        ],
                        [
                            "eid10524",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${box-item5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10520",
                            "opacity",
                            14813,
                            84,
                            "linear",
                            "${box-item5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10523",
                            "opacity",
                            16403,
                            97,
                            "linear",
                            "${box-item5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10244",
                            "top",
                            8250,
                            265,
                            "linear",
                            "${box-open}",
                            '582px',
                            '215px'
                        ],
                        [
                            "eid10248",
                            "top",
                            8515,
                            172,
                            "linear",
                            "${box-open}",
                            '215px',
                            '358px'
                        ],
                        [
                            "eid10551",
                            "top",
                            16594,
                            156,
                            "linear",
                            "${box-open}",
                            '358px',
                            '302px'
                        ],
                        [
                            "eid10557",
                            "top",
                            16813,
                            235,
                            "linear",
                            "${box-open}",
                            '302px',
                            '506px'
                        ],
                        [
                            "eid3594",
                            "width",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '334px',
                            '840px'
                        ],
                        [
                            "eid10735",
                            "left",
                            30116,
                            171,
                            "linear",
                            "${instruction-btn}",
                            '62px',
                            '-14px'
                        ],
                        [
                            "eid10736",
                            "left",
                            30287,
                            99,
                            "linear",
                            "${instruction-btn}",
                            '-14px',
                            '5px'
                        ],
                        [
                            "eid10892",
                            "display",
                            0,
                            0,
                            "linear",
                            "${invitation3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11005",
                            "display",
                            0,
                            0,
                            "linear",
                            "${drop3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3595",
                            "left",
                            579,
                            421,
                            "linear",
                            "${text-balloon}",
                            '367px',
                            '104px'
                        ],
                        [
                            "eid10464",
                            "height",
                            13194,
                            253,
                            "linear",
                            "${box-item4}",
                            '97px',
                            '233px'
                        ],
                        [
                            "eid10480",
                            "height",
                            14636,
                            177,
                            "linear",
                            "${box-item4}",
                            '233px',
                            '127px'
                        ],
                        [
                            "eid10744",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10780",
                            "display",
                            30343,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10731",
                            "height",
                            30116,
                            171,
                            "linear",
                            "${instruction-btn}",
                            '41px',
                            '115px'
                        ],
                        [
                            "eid10732",
                            "height",
                            30287,
                            99,
                            "linear",
                            "${instruction-btn}",
                            '115px',
                            '81px'
                        ],
                        [
                            "eid10284",
                            "rotateZ",
                            9300,
                            153,
                            "linear",
                            "${box-item2}",
                            '36deg',
                            '-23deg'
                        ],
                        [
                            "eid10368",
                            "width",
                            11000,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '744px',
                            '766px'
                        ],
                        [
                            "eid10587",
                            "width",
                            17000,
                            207,
                            "linear",
                            "${narrator-text-balloon}",
                            '766px',
                            '708px'
                        ],
                        [
                            "eid10592",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11079",
                            "opacity",
                            22000,
                            159,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11080",
                            "opacity",
                            26107,
                            143,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10178",
                            "rotateZ",
                            3173,
                            257,
                            "linear",
                            "${Text2}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid10194",
                            "rotateZ",
                            3430,
                            191,
                            "linear",
                            "${Text2}",
                            '5deg',
                            '-3deg'
                        ],
                        [
                            "eid10202",
                            "rotateZ",
                            3621,
                            179,
                            "linear",
                            "${Text2}",
                            '-3deg',
                            '2deg'
                        ],
                        [
                            "eid10214",
                            "rotateZ",
                            3800,
                            76,
                            "linear",
                            "${Text2}",
                            '2deg',
                            '0deg'
                        ],
                        [
                            "eid10510",
                            "top",
                            14813,
                            187,
                            "linear",
                            "${box-item5}",
                            '362px',
                            '194px'
                        ],
                        [
                            "eid10512",
                            "top",
                            15000,
                            123,
                            "linear",
                            "${box-item5}",
                            '194px',
                            '266px'
                        ],
                        [
                            "eid10514",
                            "top",
                            15123,
                            1169,
                            "linear",
                            "${box-item5}",
                            '266px',
                            '227px'
                        ],
                        [
                            "eid10516",
                            "top",
                            16292,
                            208,
                            "linear",
                            "${box-item5}",
                            '227px',
                            '350px'
                        ],
                        [
                            "eid10293",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${box-item2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10292",
                            "opacity",
                            9300,
                            96,
                            "linear",
                            "${box-item2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10320",
                            "opacity",
                            11458,
                            42,
                            "linear",
                            "${box-item2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10323",
                            "top",
                            11458,
                            266,
                            "linear",
                            "${box-item1}",
                            '401px',
                            '170px'
                        ],
                        [
                            "eid10325",
                            "top",
                            11724,
                            137,
                            "linear",
                            "${box-item1}",
                            '170px',
                            '266px'
                        ],
                        [
                            "eid10331",
                            "top",
                            11861,
                            833,
                            "linear",
                            "${box-item1}",
                            '266px',
                            '216px'
                        ],
                        [
                            "eid10333",
                            "top",
                            12694,
                            306,
                            "linear",
                            "${box-item1}",
                            '216px',
                            '251px'
                        ],
                        [
                            "eid10345",
                            "top",
                            13000,
                            250,
                            "linear",
                            "${box-item1}",
                            '251px',
                            '401px'
                        ],
                        [
                            "eid10688",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10687",
                            "opacity",
                            26370,
                            194,
                            "linear",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10705",
                            "opacity",
                            30000,
                            116,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3572",
                            "left",
                            0,
                            431,
                            "linear",
                            "${text-balloon-bub}",
                            '520px',
                            '602px'
                        ],
                        [
                            "eid3582",
                            "left",
                            500,
                            388,
                            "linear",
                            "${text-balloon-bub}",
                            '520px',
                            '602px'
                        ],
                        [
                            "eid3573",
                            "top",
                            0,
                            431,
                            "linear",
                            "${text-balloon-bub}",
                            '576px',
                            '352px'
                        ],
                        [
                            "eid3583",
                            "top",
                            500,
                            388,
                            "linear",
                            "${text-balloon-bub}",
                            '576px',
                            '352px'
                        ],
                        [
                            "eid10596",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10595",
                            "opacity",
                            17048,
                            452,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10894",
                            "display",
                            0,
                            0,
                            "linear",
                            "${invitation2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10424",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${box-item4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10422",
                            "opacity",
                            13194,
                            100,
                            "linear",
                            "${box-item4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10507",
                            "opacity",
                            14705,
                            108,
                            "linear",
                            "${box-item4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11125",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3644",
                            "top",
                            1038,
                            462,
                            "linear",
                            "${Text}",
                            '198px',
                            '182px'
                        ],
                        [
                            "eid3665",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${Text}",
                            '182px',
                            '196px'
                        ],
                        [
                            "eid3652",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${Text}",
                            '196px',
                            '182px'
                        ],
                        [
                            "eid3656",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${Text}",
                            '182px',
                            '194px'
                        ],
                        [
                            "eid11124",
                            "display",
                            0,
                            0,
                            "linear",
                            "${envelope1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10605",
                            "skewX",
                            18000,
                            336,
                            "linear",
                            "${icon-12yrs}",
                            '0deg',
                            '-9.91deg'
                        ],
                        [
                            "eid10608",
                            "skewX",
                            18336,
                            164,
                            "linear",
                            "${icon-12yrs}",
                            '-9.91deg',
                            '15deg'
                        ],
                        [
                            "eid10614",
                            "skewX",
                            18577,
                            132,
                            "linear",
                            "${icon-12yrs}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid10616",
                            "left",
                            18709,
                            250,
                            "linear",
                            "${icon-13yrs}",
                            '1038px',
                            '359px'
                        ],
                        [
                            "eid10617",
                            "left",
                            18959,
                            153,
                            "linear",
                            "${icon-13yrs}",
                            '359px',
                            '314px'
                        ],
                        [
                            "eid10618",
                            "left",
                            19183,
                            126,
                            "linear",
                            "${icon-13yrs}",
                            '314px',
                            '370px'
                        ],
                        [
                            "eid11066",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${icon-12yrs}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11075",
                            "opacity",
                            17908,
                            92,
                            "linear",
                            "${icon-12yrs}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11101",
                            "scaleY",
                            17000,
                            207,
                            "linear",
                            "${Text3}",
                            '1',
                            '0.87866'
                        ],
                        [
                            "eid10243",
                            "top",
                            8250,
                            265,
                            "linear",
                            "${box}",
                            '658px',
                            '291px'
                        ],
                        [
                            "eid10247",
                            "top",
                            8515,
                            172,
                            "linear",
                            "${box}",
                            '291px',
                            '434px'
                        ],
                        [
                            "eid10273",
                            "top",
                            9096,
                            102,
                            "linear",
                            "${box}",
                            '434px',
                            '458px'
                        ],
                        [
                            "eid10274",
                            "top",
                            9198,
                            102,
                            "linear",
                            "${box}",
                            '458px',
                            '434px'
                        ],
                        [
                            "eid10550",
                            "top",
                            16594,
                            156,
                            "linear",
                            "${box}",
                            '434px',
                            '378px'
                        ],
                        [
                            "eid10556",
                            "top",
                            16813,
                            235,
                            "linear",
                            "${box}",
                            '378px',
                            '582px'
                        ],
                        [
                            "eid11027",
                            "display",
                            0,
                            0,
                            "linear",
                            "${invitation1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10465",
                            "width",
                            13194,
                            253,
                            "linear",
                            "${box-item4}",
                            '75px',
                            '180px'
                        ],
                        [
                            "eid10482",
                            "width",
                            14636,
                            177,
                            "linear",
                            "${box-item4}",
                            '180px',
                            '98px'
                        ],
                        [
                            "eid10302",
                            "left",
                            9649,
                            461,
                            "linear",
                            "${magnifying-glass}",
                            '1038px',
                            '434px'
                        ],
                        [
                            "eid10306",
                            "left",
                            10110,
                            390,
                            "linear",
                            "${magnifying-glass}",
                            '434px',
                            '374px'
                        ],
                        [
                            "eid10310",
                            "left",
                            10500,
                            500,
                            "linear",
                            "${magnifying-glass}",
                            '374px',
                            '368px'
                        ],
                        [
                            "eid10314",
                            "left",
                            11000,
                            500,
                            "linear",
                            "${magnifying-glass}",
                            '368px',
                            '424px'
                        ],
                        [
                            "eid10334",
                            "left",
                            11500,
                            750,
                            "linear",
                            "${magnifying-glass}",
                            '424px',
                            '368px'
                        ],
                        [
                            "eid10336",
                            "left",
                            12250,
                            750,
                            "linear",
                            "${magnifying-glass}",
                            '368px',
                            '374px'
                        ],
                        [
                            "eid10338",
                            "left",
                            13000,
                            750,
                            "linear",
                            "${magnifying-glass}",
                            '374px',
                            '434px'
                        ],
                        [
                            "eid10342",
                            "left",
                            13750,
                            672,
                            "linear",
                            "${magnifying-glass}",
                            '434px',
                            '404px'
                        ],
                        [
                            "eid10527",
                            "left",
                            14422,
                            828,
                            "linear",
                            "${magnifying-glass}",
                            '404px',
                            '358px'
                        ],
                        [
                            "eid10531",
                            "left",
                            15250,
                            937,
                            "linear",
                            "${magnifying-glass}",
                            '358px',
                            '387px'
                        ],
                        [
                            "eid10541",
                            "left",
                            16187,
                            493,
                            "linear",
                            "${magnifying-glass}",
                            '387px',
                            '650px'
                        ],
                        [
                            "eid10183",
                            "left",
                            3173,
                            257,
                            "linear",
                            "${narrator-text-balloon}",
                            '140px',
                            '137px'
                        ],
                        [
                            "eid10192",
                            "left",
                            3430,
                            191,
                            "linear",
                            "${narrator-text-balloon}",
                            '137px',
                            '140px'
                        ],
                        [
                            "eid10207",
                            "left",
                            3621,
                            179,
                            "linear",
                            "${narrator-text-balloon}",
                            '140px',
                            '141px'
                        ],
                        [
                            "eid10218",
                            "left",
                            3800,
                            76,
                            "linear",
                            "${narrator-text-balloon}",
                            '141px',
                            '140px'
                        ],
                        [
                            "eid10367",
                            "left",
                            11000,
                            250,
                            "linear",
                            "${narrator-text-balloon}",
                            '140px',
                            '125px'
                        ],
                        [
                            "eid10588",
                            "left",
                            17000,
                            207,
                            "linear",
                            "${narrator-text-balloon}",
                            '125px',
                            '151px'
                        ],
                            [ "eid10895", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${invitation2}', [] ] ],
                            [ "eid11010", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop1}', [] ] ],
                            [ "eid11008", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop2}', [] ] ],
                            [ "eid11061", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${invitation1}', [] ] ],
                            [ "eid10896", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${invitation3}', [] ] ],
                            [ "eid10834", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid11009", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${drop3}', [] ] ],
                            [ "eid11127", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-resultCorrect}', [] ] ],
                            [ "eid10835", "trigger", 30343, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ]
                    ]
                }
            },
            "invitation3": {
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
                            rect: ['-14px', '-6px', '1056px', '610px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,0.57)']
                        },
                        {
                            type: 'image',
                            id: 'envelope-open2',
                            opacity: '0',
                            rect: ['428px', '94px', '192px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/envelope-open2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'envelope-close2',
                            opacity: '1',
                            rect: ['428px', '94px', '192px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/envelope-close2.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['9'], [], ['0.87481', '0.87481']],
                            rect: ['437px', '129px', '177px', '127px', 'auto', 'auto'],
                            id: 'invitation',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/invitation3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '192px', '196px']
                        }
                    }
                },
                timeline: {
                    duration: 1564,
                    autoPlay: true,
                    labels: {
                        "stop": 447,
                        "close": 1091
                    },
                    data: [
                        [
                            "eid10947",
                            "width",
                            579,
                            171,
                            "linear",
                            "${invitation}",
                            '177px',
                            '829px'
                        ],
                        [
                            "eid10974",
                            "width",
                            1250,
                            199,
                            "linear",
                            "${invitation}",
                            '829px',
                            '177px'
                        ],
                        [
                            "eid10912",
                            "top",
                            0,
                            250,
                            "linear",
                            "${envelope-open2}",
                            '-393px',
                            '94px'
                        ],
                        [
                            "eid10949",
                            "rotateZ",
                            579,
                            171,
                            "linear",
                            "${invitation}",
                            '9deg',
                            '0deg'
                        ],
                        [
                            "eid10971",
                            "rotateZ",
                            1250,
                            199,
                            "linear",
                            "${invitation}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid10948",
                            "left",
                            579,
                            171,
                            "linear",
                            "${invitation}",
                            '437px',
                            '109px'
                        ],
                        [
                            "eid10973",
                            "left",
                            1250,
                            199,
                            "linear",
                            "${invitation}",
                            '109px',
                            '437px'
                        ],
                        [
                            "eid10906",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${envelope-close2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid10917",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${envelope-close2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10958",
                            "opacity",
                            1564,
                            0,
                            "linear",
                            "${envelope-close2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10953",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${invitation}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10952",
                            "opacity",
                            579,
                            91,
                            "linear",
                            "${invitation}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10977",
                            "opacity",
                            1379,
                            70,
                            "linear",
                            "${invitation}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10945",
                            "height",
                            579,
                            171,
                            "linear",
                            "${invitation}",
                            '127px',
                            '594px'
                        ],
                        [
                            "eid10972",
                            "height",
                            1250,
                            199,
                            "linear",
                            "${invitation}",
                            '594px',
                            '127px'
                        ],
                        [
                            "eid11116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11117",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11118",
                            "display",
                            1091,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10946",
                            "top",
                            579,
                            171,
                            "linear",
                            "${invitation}",
                            '129px',
                            '-12px'
                        ],
                        [
                            "eid10970",
                            "top",
                            1250,
                            199,
                            "linear",
                            "${invitation}",
                            '-12px',
                            '129px'
                        ],
                        [
                            "eid10911",
                            "top",
                            0,
                            250,
                            "linear",
                            "${envelope-close2}",
                            '-393px',
                            '94px'
                        ],
                        [
                            "eid10905",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${envelope-open2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10918",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${envelope-open2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10959",
                            "opacity",
                            1564,
                            0,
                            "linear",
                            "${envelope-open2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10899",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10900",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${Rectangle2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10901",
                            "opacity",
                            1329,
                            235,
                            "linear",
                            "${Rectangle2Copy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "invitation2": {
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
                            rect: ['-1072px', '-192px', '1056px', '610px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.57)']
                        },
                        {
                            type: 'image',
                            id: 'envelope-open1',
                            opacity: '0',
                            rect: ['-634px', '-90px', '192px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/envelope-open1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'envelope-close1',
                            opacity: '1',
                            rect: ['-634px', '-90px', '192px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/envelope-close1.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-12'], [0, 0, 0], [1, 1, 1]],
                            rect: ['-620px', '-53px', '158px', '113px', 'auto', 'auto'],
                            id: 'invitation',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/invitation2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '192px', '196px']
                        }
                    }
                },
                timeline: {
                    duration: 1564,
                    autoPlay: true,
                    labels: {
                        "stop": 440,
                        "close": 1085
                    },
                    data: [
                        [
                            "eid10865",
                            "width",
                            619,
                            177,
                            "linear",
                            "${invitation}",
                            '158px',
                            '739px'
                        ],
                        [
                            "eid10881",
                            "width",
                            1250,
                            178,
                            "linear",
                            "${invitation}",
                            '739px',
                            '158px'
                        ],
                        [
                            "eid10863",
                            "height",
                            619,
                            177,
                            "linear",
                            "${invitation}",
                            '113px',
                            '529px'
                        ],
                        [
                            "eid10879",
                            "height",
                            1250,
                            178,
                            "linear",
                            "${invitation}",
                            '529px',
                            '113px'
                        ],
                        [
                            "eid10851",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${envelope-close1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10889",
                            "opacity",
                            1564,
                            0,
                            "linear",
                            "${envelope-close1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10836",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10837",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10838",
                            "opacity",
                            1329,
                            235,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10846",
                            "top",
                            0,
                            250,
                            "linear",
                            "${envelope-open1}",
                            '-398px',
                            '-90px'
                        ],
                        [
                            "eid10871",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${invitation}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10870",
                            "opacity",
                            619,
                            92,
                            "linear",
                            "${invitation}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10884",
                            "opacity",
                            1349,
                            79,
                            "linear",
                            "${invitation}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10840",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${envelope-open1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10852",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${envelope-open1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10890",
                            "opacity",
                            1564,
                            0,
                            "linear",
                            "${envelope-open1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11120",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11121",
                            "display",
                            1085,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10864",
                            "top",
                            619,
                            177,
                            "linear",
                            "${invitation}",
                            '-53px',
                            '-166px'
                        ],
                        [
                            "eid10877",
                            "top",
                            1250,
                            178,
                            "linear",
                            "${invitation}",
                            '-166px',
                            '-53px'
                        ],
                        [
                            "eid10866",
                            "left",
                            619,
                            177,
                            "linear",
                            "${invitation}",
                            '-620px',
                            '-915px'
                        ],
                        [
                            "eid10880",
                            "left",
                            1250,
                            178,
                            "linear",
                            "${invitation}",
                            '-915px',
                            '-620px'
                        ],
                        [
                            "eid10867",
                            "rotateZ",
                            619,
                            177,
                            "linear",
                            "${invitation}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid10878",
                            "rotateZ",
                            1250,
                            178,
                            "linear",
                            "${invitation}",
                            '0deg',
                            '-12deg'
                        ],
                        [
                            "eid10845",
                            "top",
                            0,
                            250,
                            "linear",
                            "${envelope-close1}",
                            '-398px',
                            '-90px'
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
                            id: 'narrator-text-balloon2',
                            opacity: '0',
                            rect: ['25px', '-1px', '208px', '74px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Drag the invitation to the right age group. Click the envelope to show the invitation again and click once more to close it.',
                            id: 'Text7',
                            opacity: '0',
                            align: 'center',
                            rect: ['112px', '26px', '671px', '115px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '826px', '168px']
                        }
                    }
                },
                timeline: {
                    duration: 8500,
                    autoPlay: true,
                    data: [
                        [
                            "eid10759",
                            "height",
                            0,
                            198,
                            "linear",
                            "${narrator-text-balloon2}",
                            '74px',
                            '168px'
                        ],
                        [
                            "eid10771",
                            "height",
                            8304,
                            196,
                            "linear",
                            "${narrator-text-balloon2}",
                            '168px',
                            '74px'
                        ],
                        [
                            "eid10760",
                            "width",
                            0,
                            198,
                            "linear",
                            "${narrator-text-balloon2}",
                            '208px',
                            '826px'
                        ],
                        [
                            "eid10773",
                            "width",
                            8304,
                            196,
                            "linear",
                            "${narrator-text-balloon2}",
                            '826px',
                            '208px'
                        ],
                        [
                            "eid10762",
                            "top",
                            0,
                            198,
                            "linear",
                            "${narrator-text-balloon2}",
                            '-1px',
                            '0px'
                        ],
                        [
                            "eid10770",
                            "top",
                            8304,
                            196,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid10750",
                            "opacity",
                            0,
                            77,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10776",
                            "opacity",
                            8403,
                            97,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10747",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10765",
                            "opacity",
                            132,
                            67,
                            "linear",
                            "${Text7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10779",
                            "opacity",
                            8304,
                            99,
                            "linear",
                            "${Text7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10761",
                            "left",
                            0,
                            198,
                            "linear",
                            "${narrator-text-balloon2}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid10772",
                            "left",
                            8304,
                            196,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0px',
                            '25px'
                        ]
                    ]
                }
            },
            "drop-effect": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-188px', '-184px', '567px', '556px', 'auto', 'auto'],
                            id: 'spark1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '191px', '188px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid10994",
                            "left",
                            0,
                            250,
                            "linear",
                            "${spark1}",
                            '13px',
                            '-188px'
                        ],
                        [
                            "eid10991",
                            "height",
                            0,
                            250,
                            "linear",
                            "${spark1}",
                            '162px',
                            '556px'
                        ],
                        [
                            "eid10998",
                            "opacity",
                            0,
                            81,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11001",
                            "opacity",
                            184,
                            66,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10992",
                            "top",
                            0,
                            250,
                            "linear",
                            "${spark1}",
                            '8px',
                            '-184px'
                        ],
                        [
                            "eid10993",
                            "width",
                            0,
                            250,
                            "linear",
                            "${spark1}",
                            '165px',
                            '567px'
                        ]
                    ]
                }
            },
            "invitation1": {
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
                            rect: ['0px', '206px', '1056px', '610px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.57)']
                        },
                        {
                            type: 'image',
                            id: 'envelope-open1',
                            opacity: '0',
                            rect: ['441px', '314px', '192px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/envelope-open1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'envelope-close1',
                            opacity: '1',
                            rect: ['441px', '314px', '192px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/envelope-close1.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-12'], [0, 0, 0], [1, 1, 1]],
                            rect: ['452px', '351px', '157px', '113px', 'auto', 'auto'],
                            id: 'invitation',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/invitation1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1056px', '816px']
                        }
                    }
                },
                timeline: {
                    duration: 1564,
                    autoPlay: true,
                    labels: {
                        "stop": 389,
                        "close": 1155
                    },
                    data: [
                        [
                            "eid11040",
                            "width",
                            606,
                            192,
                            "linear",
                            "${invitation}",
                            '157px',
                            '742px'
                        ],
                        [
                            "eid11052",
                            "width",
                            1250,
                            205,
                            "linear",
                            "${invitation}",
                            '742px',
                            '157px'
                        ],
                        [
                            "eid11038",
                            "height",
                            606,
                            192,
                            "linear",
                            "${invitation}",
                            '113px',
                            '531px'
                        ],
                        [
                            "eid11050",
                            "height",
                            1250,
                            205,
                            "linear",
                            "${invitation}",
                            '531px',
                            '113px'
                        ],
                        [
                            "eid11042",
                            "rotateZ",
                            606,
                            192,
                            "linear",
                            "${invitation}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid11049",
                            "rotateZ",
                            1250,
                            205,
                            "linear",
                            "${invitation}",
                            '0deg',
                            '-12deg'
                        ],
                        [
                            "eid11014",
                            "top",
                            0,
                            250,
                            "linear",
                            "${envelope-close1}",
                            '0px',
                            '314px'
                        ],
                        [
                            "eid11017",
                            "top",
                            0,
                            250,
                            "linear",
                            "${envelope-open1}",
                            '0px',
                            '314px'
                        ],
                        [
                            "eid11055",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${invitation}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11057",
                            "opacity",
                            606,
                            90,
                            "linear",
                            "${invitation}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11060",
                            "opacity",
                            1374,
                            81,
                            "linear",
                            "${invitation}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11018",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${envelope-open1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11019",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${envelope-open1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11020",
                            "opacity",
                            1564,
                            0,
                            "linear",
                            "${envelope-open1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11113",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11114",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11115",
                            "display",
                            1155,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11039",
                            "top",
                            606,
                            192,
                            "linear",
                            "${invitation}",
                            '351px',
                            '237px'
                        ],
                        [
                            "eid11048",
                            "top",
                            1250,
                            205,
                            "linear",
                            "${invitation}",
                            '237px',
                            '351px'
                        ],
                        [
                            "eid11025",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${envelope-close1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid11016",
                            "opacity",
                            1564,
                            0,
                            "linear",
                            "${envelope-close1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid11021",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11022",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11023",
                            "opacity",
                            1329,
                            235,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11041",
                            "left",
                            606,
                            192,
                            "linear",
                            "${invitation}",
                            '452px',
                            '157px'
                        ],
                        [
                            "eid11051",
                            "left",
                            1250,
                            205,
                            "linear",
                            "${invitation}",
                            '157px',
                            '452px'
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
