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
                            id: 'mall',
                            type: 'image',
                            rect: ['-15px', '-113px', '1112px', '786px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mall.jpg",'0px','0px']
                        },
                        {
                            id: 'mall-outside-blur',
                            type: 'image',
                            rect: ['-15px', '-113px', '1112px', '786px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mall-outside-blur.jpg",'0px','0px']
                        },
                        {
                            id: 'signboard-outside',
                            type: 'image',
                            rect: ['-9px', '-113px', '750px', '694px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"signboard-outside.png",'0px','0px']
                        },
                        {
                            id: 'Yoyo-poster-small',
                            type: 'image',
                            rect: ['38px', '62px', '203px', '437px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Yoyo-poster-small.png",'0px','0px']
                        },
                        {
                            id: 'crowd5',
                            type: 'image',
                            rect: ['-259px', '111px', '295px', '725px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd5.png",'0px','0px']
                        },
                        {
                            id: 'spark2',
                            type: 'image',
                            rect: ['150px', '279px', '88px', '92px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spark2.png",'0px','0px']
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
                            rect: ['222px', '235px', '621px', '100px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Objective",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(0,0,0,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['644px', '-25px', '309px', '626px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.73)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'objectiveH',
                            symbolName: 'AccuracyH',
                            type: 'rect',
                            rect: ['748px', '469px', '276', '92', 'auto', 'auto']
                        },
                        {
                            id: 'txt-obj',
                            type: 'image',
                            rect: ['765px', '482px', '225px', '66px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"txt-obj.png",'0px','0px']
                        },
                        {
                            id: 'txt-curr',
                            type: 'image',
                            rect: ['762px', '380px', '218px', '62px', 'auto', 'auto'],
                            opacity: '0.19685039370079',
                            fill: ["rgba(0,0,0,0)",im+"txt-curr.png",'0px','0px']
                        },
                        {
                            id: 'txt-cov',
                            type: 'image',
                            rect: ['760px', '209px', '252px', '128px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-cov.png",'0px','0px']
                        },
                        {
                            id: 'txt-auth',
                            type: 'image',
                            rect: ['776px', '10px', '179px', '63px', 'auto', 'auto'],
                            opacity: '0.20472440944882',
                            fill: ["rgba(0,0,0,0)",im+"txt-auth.png",'0px','0px']
                        },
                        {
                            id: 'txt-accu',
                            type: 'image',
                            rect: ['767px', '110px', '226px', '63px', 'auto', 'auto'],
                            opacity: '0.20472452755906',
                            fill: ["rgba(0,0,0,0)",im+"txt-accu.png",'0px','0px']
                        },
                        {
                            id: 'narrator-text-balloon2',
                            type: 'image',
                            rect: ['0px', '-181px', '741px', '167px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['42px', '-145px', '635px', '115px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The final point in the AACCO criteria is Objective.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'objectiveTrigger',
                            type: 'rect',
                            rect: ['749px', '469px', '273px', '92px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(248,163,163,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'mainmenu',
                            type: 'image',
                            rect: ['766px', '483px', '284px', '92px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px'],
                            transform: [[],[],[],['0.7676','0.7676']]
                        },
                        {
                            id: 'Objective',
                            symbolName: 'Objective',
                            type: 'rect',
                            rect: ['8px', '2px', '999', '545', 'auto', 'auto']
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
                    duration: 12445,
                    autoPlay: true,
                    labels: {
                        "loop": 8500
                    },
                    data: [
                        [
                            "eid3456",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Yoyo-poster-small}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid2599",
                            "left",
                            8730,
                            558,
                            "linear",
                            "${spark2}",
                            '150px',
                            '3px'
                        ],
                        [
                            "eid2774",
                            "left",
                            11144,
                            558,
                            "linear",
                            "${spark2}",
                            '150px',
                            '3px'
                        ],
                        [
                            "eid3449",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-obj}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3453",
                            "opacity",
                            3867,
                            106,
                            "linear",
                            "${txt-obj}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2597",
                            "height",
                            8730,
                            558,
                            "linear",
                            "${spark2}",
                            '92px',
                            '366px'
                        ],
                        [
                            "eid2771",
                            "height",
                            11144,
                            558,
                            "linear",
                            "${spark2}",
                            '92px',
                            '366px'
                        ],
                        [
                            "eid2598",
                            "top",
                            8730,
                            558,
                            "linear",
                            "${spark2}",
                            '279px',
                            '130px'
                        ],
                        [
                            "eid2770",
                            "top",
                            11144,
                            558,
                            "linear",
                            "${spark2}",
                            '279px',
                            '130px'
                        ],
                        [
                            "eid3816",
                            "left",
                            2409,
                            308,
                            "linear",
                            "${crowd5}",
                            '-259px',
                            '-95px'
                        ],
                        [
                            "eid3820",
                            "left",
                            2717,
                            347,
                            "linear",
                            "${crowd5}",
                            '-95px',
                            '90px'
                        ],
                        [
                            "eid3824",
                            "left",
                            3064,
                            421,
                            "linear",
                            "${crowd5}",
                            '90px',
                            '315px'
                        ],
                        [
                            "eid3826",
                            "left",
                            3485,
                            360,
                            "linear",
                            "${crowd5}",
                            '315px',
                            '507px'
                        ],
                        [
                            "eid3828",
                            "left",
                            3845,
                            364,
                            "linear",
                            "${crowd5}",
                            '507px',
                            '701px'
                        ],
                        [
                            "eid3830",
                            "left",
                            4208,
                            342,
                            "linear",
                            "${crowd5}",
                            '701px',
                            '884px'
                        ],
                        [
                            "eid3832",
                            "left",
                            4551,
                            306,
                            "linear",
                            "${crowd5}",
                            '884px',
                            '1047px'
                        ],
                        [
                            "eid2577",
                            "width",
                            8462,
                            812,
                            "linear",
                            "${Yoyo-poster-small}",
                            '203px',
                            '195px'
                        ],
                        [
                            "eid2583",
                            "width",
                            9274,
                            1001,
                            "linear",
                            "${Yoyo-poster-small}",
                            '195px',
                            '203px'
                        ],
                        [
                            "eid2780",
                            "width",
                            10408,
                            912,
                            "linear",
                            "${Yoyo-poster-small}",
                            '203px',
                            '195px'
                        ],
                        [
                            "eid2781",
                            "width",
                            11320,
                            1125,
                            "linear",
                            "${Yoyo-poster-small}",
                            '195px',
                            '203px'
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
                            "eid2985",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2984",
                            "opacity",
                            3250,
                            87,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3006",
                            "opacity",
                            8403,
                            97,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid486",
                            "top",
                            1023,
                            598,
                            "linear",
                            "${TextCopy}",
                            '238px',
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
                            "eid2973",
                            "top",
                            3250,
                            174,
                            "linear",
                            "${narrator-text-balloon2}",
                            '-181px',
                            '8px'
                        ],
                        [
                            "eid3001",
                            "top",
                            8250,
                            250,
                            "linear",
                            "${narrator-text-balloon2}",
                            '8px',
                            '-157px'
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
                            "eid2588",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid2587",
                            "opacity",
                            8730,
                            156,
                            "linear",
                            "${spark2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2603",
                            "opacity",
                            9200,
                            88,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2772",
                            "opacity",
                            11144,
                            156,
                            "linear",
                            "${spark2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2773",
                            "opacity",
                            11614,
                            88,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2871",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-auth}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2870",
                            "opacity",
                            3867,
                            106,
                            "linear",
                            "${txt-auth}",
                            '0',
                            '0.20472440944882'
                        ],
                        [
                            "eid3811",
                            "opacity",
                            2409,
                            95,
                            "linear",
                            "${crowd5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3819",
                            "opacity",
                            4767,
                            90,
                            "linear",
                            "${crowd5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3454",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Yoyo-poster-small}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid2576",
                            "left",
                            8462,
                            812,
                            "linear",
                            "${Yoyo-poster-small}",
                            '38px',
                            '62px'
                        ],
                        [
                            "eid2582",
                            "left",
                            9274,
                            1001,
                            "linear",
                            "${Yoyo-poster-small}",
                            '62px',
                            '38px'
                        ],
                        [
                            "eid2778",
                            "left",
                            10408,
                            912,
                            "linear",
                            "${Yoyo-poster-small}",
                            '38px',
                            '62px'
                        ],
                        [
                            "eid2779",
                            "left",
                            11320,
                            1125,
                            "linear",
                            "${Yoyo-poster-small}",
                            '62px',
                            '38px'
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
                            "eid515",
                            "top",
                            0,
                            7814,
                            "linear",
                            "${mall}",
                            '-113px',
                            '-205px'
                        ],
                        [
                            "eid2945",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-curr}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2944",
                            "opacity",
                            3867,
                            106,
                            "linear",
                            "${txt-curr}",
                            '0',
                            '0.19685039370079'
                        ],
                        [
                            "eid2899",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-accu}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2898",
                            "opacity",
                            3867,
                            106,
                            "linear",
                            "${txt-accu}",
                            '0',
                            '0.20472452755906'
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
                            "eid2600",
                            "width",
                            8730,
                            558,
                            "linear",
                            "${spark2}",
                            '88px',
                            '352px'
                        ],
                        [
                            "eid2775",
                            "width",
                            11144,
                            558,
                            "linear",
                            "${spark2}",
                            '88px',
                            '352px'
                        ],
                        [
                            "eid2920",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-cov}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2919",
                            "opacity",
                            3867,
                            106,
                            "linear",
                            "${txt-cov}",
                            '0',
                            '0.21259842519685'
                        ],
                        [
                            "eid2847",
                            "left",
                            3620,
                            247,
                            "linear",
                            "${RoundRect}",
                            '1030px',
                            '733px'
                        ],
                        [
                            "eid3822",
                            "top",
                            2409,
                            308,
                            "linear",
                            "${crowd5}",
                            '125px',
                            '110px'
                        ],
                        [
                            "eid3823",
                            "top",
                            2717,
                            347,
                            "linear",
                            "${crowd5}",
                            '110px',
                            '126px'
                        ],
                        [
                            "eid3825",
                            "top",
                            3064,
                            421,
                            "linear",
                            "${crowd5}",
                            '126px',
                            '115px'
                        ],
                        [
                            "eid3827",
                            "top",
                            3485,
                            360,
                            "linear",
                            "${crowd5}",
                            '115px',
                            '126px'
                        ],
                        [
                            "eid3829",
                            "top",
                            3845,
                            364,
                            "linear",
                            "${crowd5}",
                            '126px',
                            '117px'
                        ],
                        [
                            "eid3831",
                            "top",
                            4208,
                            342,
                            "linear",
                            "${crowd5}",
                            '117px',
                            '132px'
                        ],
                        [
                            "eid3833",
                            "top",
                            4551,
                            306,
                            "linear",
                            "${crowd5}",
                            '132px',
                            '111px'
                        ],
                        [
                            "eid676",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${mall-outside-blur}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2824",
                            "opacity",
                            2845,
                            605,
                            "linear",
                            "${mall-outside-blur}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2575",
                            "skewX",
                            8462,
                            812,
                            "linear",
                            "${Yoyo-poster-small}",
                            '0deg',
                            '7.75deg'
                        ],
                        [
                            "eid2581",
                            "skewX",
                            9274,
                            1001,
                            "linear",
                            "${Yoyo-poster-small}",
                            '7.75deg',
                            '0deg'
                        ],
                        [
                            "eid2776",
                            "skewX",
                            10408,
                            912,
                            "linear",
                            "${Yoyo-poster-small}",
                            '0deg',
                            '7.75deg'
                        ],
                        [
                            "eid2777",
                            "skewX",
                            11320,
                            1125,
                            "linear",
                            "${Yoyo-poster-small}",
                            '7.75deg',
                            '0deg'
                        ],
                        [
                            "eid2980",
                            "top",
                            3250,
                            174,
                            "linear",
                            "${Text2}",
                            '-145px',
                            '37px'
                        ],
                        [
                            "eid3000",
                            "top",
                            8250,
                            250,
                            "linear",
                            "${Text2}",
                            '37px',
                            '-128px'
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
                            "eid2828",
                            "top",
                            0,
                            7814,
                            "linear",
                            "${mall-outside-blur}",
                            '-113px',
                            '-205px'
                        ],
                        [
                            "eid2986",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2977",
                            "opacity",
                            3250,
                            87,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3007",
                            "opacity",
                            8403,
                            97,
                            "linear",
                            "${narrator-text-balloon2}",
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
                            "eid2807",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2850",
                            "opacity",
                            3500,
                            158,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
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
                            [ "eid3939", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Objective}', [] ] ]
                    ]
                }
            },
            "Objective": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '80px', '284px', '358px', 'auto', 'auto'],
                            id: 'yoyo-poster',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-poster.png', '0px', '0px']
                        },
                        {
                            rect: ['579px', '393px', '420px', '373px', 'auto', 'auto'],
                            id: 'narrator-text-balloon-square',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon-square.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['618px', '115px', '339px', '76px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text4Copy2',
                            text: 'What is the organiser\'s main objective',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['619px', '219px', '332px', '109px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text4Copy',
                            text: 'You can find the objective by looking closely at the words or slogans used.',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['743px', '142px', '65px', '102px', 'auto', 'auto'],
                            id: 'question-markCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['607px', '153px', '89px', '44px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text5',
                            text: 'Task:',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['709px', '159px', '257px', '81px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text6',
                            text: 'Identify the slogan used in this poster by clicking on it.',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['794px', '499px', '144px', '44px', 'auto', 'auto'],
                            id: 'narrator-text-balloon',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            rect: ['755px', '480px', '227px', '66px', 'auto', 'auto'],
                            id: 'txt-obj2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/txt-obj.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['597px', '407px', '385px', '81px', 'auto', 'auto'],
                            id: 'Text3',
                            opacity: '0',
                            text: 'The possible messages the organiser wants to convey.',
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(3,64,143,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            rect: ['352px', '144px', '28px', '28px', 'auto', 'auto'],
                            type: 'image',
                            id: 'right-select',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['12px', '383px', '76px', '76px', 'auto', 'auto'],
                            id: 'wrong-select',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            rect: ['906px', '12px', '76px', '69px', 'auto', 'auto'],
                            type: 'image',
                            id: 'close-btn',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '1px', '732', '259', 'auto', 'auto'],
                            id: 'well-done2',
                            symbolName: 'well-done',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['364px', '69px', '176px', '123px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'trigger',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(248,163,163,1)']
                        },
                        {
                            rect: ['878px', '317px', '104px', '60px', 'auto', 'auto'],
                            type: 'image',
                            id: 'next_but',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next_but.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '732px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 6453,
                    autoPlay: true,
                    labels: {
                        "start": 45,
                        "skip1": 5880
                    },
                    data: [
                        [
                            "eid3870",
                            "top",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '499px',
                            '383px'
                        ],
                        [
                            "eid3943",
                            "display",
                            0,
                            0,
                            "linear",
                            "${trigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3944",
                            "display",
                            6453,
                            0,
                            "linear",
                            "${trigger}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3839",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3834",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3835",
                            "opacity",
                            250,
                            55,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3930",
                            "left",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '0px',
                            '94px'
                        ],
                        [
                            "eid3942",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right-select}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3875",
                            "width",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '144px',
                            '445px'
                        ],
                        [
                            "eid3872",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3873",
                            "opacity",
                            250,
                            95,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3945",
                            "display",
                            0,
                            0,
                            "linear",
                            "${well-done2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3923",
                            "height",
                            395,
                            175,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '19px',
                            '373px'
                        ],
                        [
                            "eid3927",
                            "top",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '80px',
                            '-6px'
                        ],
                        [
                            "eid3924",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3925",
                            "opacity",
                            395,
                            105,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3926",
                            "top",
                            395,
                            175,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '393px',
                            '33px'
                        ],
                        [
                            "eid3889",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3890",
                            "opacity",
                            500,
                            120,
                            "linear",
                            "${question-markCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3891",
                            "opacity",
                            6000,
                            175,
                            "linear",
                            "${question-markCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3887",
                            "top",
                            570,
                            105,
                            "linear",
                            "${question-markCopy}",
                            '136px',
                            '140px'
                        ],
                        [
                            "eid3917",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3918",
                            "opacity",
                            1250,
                            75,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3919",
                            "opacity",
                            6000,
                            175,
                            "linear",
                            "${Text4Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3893",
                            "width",
                            570,
                            105,
                            "linear",
                            "${question-markCopy}",
                            '65px',
                            '38px'
                        ],
                        [
                            "eid3935",
                            "opacity",
                            0,
                            95,
                            "linear",
                            "${txt-obj2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3878",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3879",
                            "opacity",
                            6285,
                            168,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3929",
                            "opacity",
                            0,
                            95,
                            "linear",
                            "${yoyo-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3931",
                            "width",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '284px',
                            '457px'
                        ],
                        [
                            "eid3871",
                            "height",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '44px',
                            '134px'
                        ],
                        [
                            "eid3876",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3877",
                            "opacity",
                            6285,
                            168,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3928",
                            "height",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '358px',
                            '576px'
                        ],
                        [
                            "eid3892",
                            "left",
                            570,
                            105,
                            "linear",
                            "${question-markCopy}",
                            '739px',
                            '802px'
                        ],
                        [
                            "eid3948",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3949",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3950",
                            "display",
                            1545,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3920",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3921",
                            "opacity",
                            500,
                            70,
                            "linear",
                            "${Text4Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3922",
                            "opacity",
                            6000,
                            175,
                            "linear",
                            "${Text4Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3888",
                            "height",
                            570,
                            105,
                            "linear",
                            "${question-markCopy}",
                            '102px',
                            '60px'
                        ],
                        [
                            "eid3868",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3869",
                            "opacity",
                            345,
                            50,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3874",
                            "left",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '794px',
                            '561px'
                        ],
                            [ "eid3946", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${well-done2}', [] ] ]
                    ]
                }
            },
            "AccuracyH": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '276px', '92px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(163,218,248,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '276px', '92px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid3456",
                            "opacity",
                            0,
                            960,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3458",
                            "opacity",
                            1500,
                            1000,
                            "linear",
                            "${Rectangle2}",
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
                            rect: ['0px', '0px', '1040px', '585px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.77)']
                        },
                        {
                            rect: ['168px', '196px', '218px', '52px', 'auto', 'auto'],
                            id: 'game_result2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/game%20result2.png', '0px', '0px']
                        },
                        {
                            rect: ['458px', '484px', '123px', '40px', 'auto', 'auto'],
                            type: 'image',
                            id: 'close-btn1',
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
                            "eid3576",
                            "top",
                            250,
                            164,
                            "linear",
                            "${close-btn1}",
                            '484px',
                            '407px'
                        ],
                        [
                            "eid11242",
                            "left",
                            0,
                            182,
                            "linear",
                            "${game_result2}",
                            '410px',
                            '60px'
                        ],
                        [
                            "eid11247",
                            "left",
                            182,
                            68,
                            "linear",
                            "${game_result2}",
                            '60px',
                            '168px'
                        ],
                        [
                            "eid3579",
                            "left",
                            250,
                            164,
                            "linear",
                            "${close-btn1}",
                            '458px',
                            '414px'
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
                            "eid3578",
                            "width",
                            250,
                            164,
                            "linear",
                            "${close-btn1}",
                            '123px',
                            '212px'
                        ],
                        [
                            "eid3577",
                            "height",
                            250,
                            164,
                            "linear",
                            "${close-btn1}",
                            '40px',
                            '69px'
                        ],
                        [
                            "eid11240",
                            "top",
                            0,
                            182,
                            "linear",
                            "${game_result2}",
                            '214px',
                            '142px'
                        ],
                        [
                            "eid11248",
                            "top",
                            182,
                            68,
                            "linear",
                            "${game_result2}",
                            '142px',
                            '196px'
                        ],
                        [
                            "eid3563",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${close-btn1}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid3564",
                            "opacity",
                            250,
                            164,
                            "linear",
                            "${close-btn1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("4_edgeActions.js");
})("EDGE-601893278");
