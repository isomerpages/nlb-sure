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
                            id: 'crowd6',
                            type: 'image',
                            rect: ['1024px', '219px', '599px', '748px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd6.png",'0px','0px']
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
                            rect: ['222px', '196px', '621px', '164px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Coverage/Content and Currency",
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
                            id: 'txt-obj',
                            type: 'image',
                            rect: ['765px', '482px', '225px', '66px', 'auto', 'auto'],
                            opacity: '0.19684988976378',
                            fill: ["rgba(0,0,0,0)",im+"txt-obj.png",'0px','0px']
                        },
                        {
                            id: 'currencyH',
                            symbolName: 'authorH',
                            type: 'rect',
                            rect: ['741', '370px', '276', '81', 'auto', 'auto']
                        },
                        {
                            id: 'txt-curr',
                            type: 'image',
                            rect: ['762px', '380px', '218px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-curr.png",'0px','0px']
                        },
                        {
                            id: 'coverageH',
                            symbolName: 'AccuracyH',
                            type: 'rect',
                            rect: ['741', '209px', '276', '92', 'auto', 'auto']
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
                            text: "Let’s now look at Coverage/Content and Currency.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'currencyTrigger',
                            type: 'rect',
                            rect: ['741px', '369px', '273px', '82px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(248,163,163,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'coverageTrigger',
                            type: 'rect',
                            rect: ['741px', '209px', '273px', '140px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(248,163,163,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'mainmenu',
                            type: 'image',
                            rect: ['761px', '483px', '284px', '92px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px'],
                            transform: [[],[],[],['0.7676','0.7676']]
                        },
                        {
                            id: 'Coverage',
                            symbolName: 'Coverage',
                            type: 'rect',
                            rect: ['46px', '6px', '999', '545', 'auto', 'auto']
                        },
                        {
                            id: 'Currency',
                            symbolName: 'Currency',
                            type: 'rect',
                            rect: ['0px', '-6px', '1045', '587', 'auto', 'auto']
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
                    duration: 9945,
                    autoPlay: true,
                    labels: {
                        "test": 5838,
                        "loop": 6039
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
                            6230,
                            558,
                            "linear",
                            "${spark2}",
                            '150px',
                            '3px'
                        ],
                        [
                            "eid2774",
                            "left",
                            8644,
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
                            '0.19684988976378'
                        ],
                        [
                            "eid2597",
                            "height",
                            6230,
                            558,
                            "linear",
                            "${spark2}",
                            '92px',
                            '366px'
                        ],
                        [
                            "eid2771",
                            "height",
                            8644,
                            558,
                            "linear",
                            "${spark2}",
                            '92px',
                            '366px'
                        ],
                        [
                            "eid2598",
                            "top",
                            6230,
                            558,
                            "linear",
                            "${spark2}",
                            '279px',
                            '130px'
                        ],
                        [
                            "eid2770",
                            "top",
                            8644,
                            558,
                            "linear",
                            "${spark2}",
                            '279px',
                            '130px'
                        ],
                        [
                            "eid2577",
                            "width",
                            5962,
                            812,
                            "linear",
                            "${Yoyo-poster-small}",
                            '203px',
                            '195px'
                        ],
                        [
                            "eid2583",
                            "width",
                            6774,
                            1001,
                            "linear",
                            "${Yoyo-poster-small}",
                            '195px',
                            '203px'
                        ],
                        [
                            "eid2780",
                            "width",
                            7908,
                            912,
                            "linear",
                            "${Yoyo-poster-small}",
                            '203px',
                            '195px'
                        ],
                        [
                            "eid2781",
                            "width",
                            8820,
                            1125,
                            "linear",
                            "${Yoyo-poster-small}",
                            '195px',
                            '203px'
                        ],
                        [
                            "eid3792",
                            "top",
                            2185,
                            425,
                            "linear",
                            "${crowd6}",
                            '221px',
                            '208px'
                        ],
                        [
                            "eid3793",
                            "top",
                            2610,
                            460,
                            "linear",
                            "${crowd6}",
                            '208px',
                            '226px'
                        ],
                        [
                            "eid3795",
                            "top",
                            3070,
                            539,
                            "linear",
                            "${crowd6}",
                            '226px',
                            '210px'
                        ],
                        [
                            "eid3797",
                            "top",
                            3609,
                            553,
                            "linear",
                            "${crowd6}",
                            '210px',
                            '224px'
                        ],
                        [
                            "eid3799",
                            "top",
                            4162,
                            527,
                            "linear",
                            "${crowd6}",
                            '224px',
                            '213px'
                        ],
                        [
                            "eid3801",
                            "top",
                            4689,
                            511,
                            "linear",
                            "${crowd6}",
                            '213px',
                            '220px'
                        ],
                        [
                            "eid3803",
                            "top",
                            5200,
                            485,
                            "linear",
                            "${crowd6}",
                            '220px',
                            '219px'
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
                            5903,
                            97,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid486",
                            "top",
                            1038,
                            662,
                            "linear",
                            "${TextCopy}",
                            '196px',
                            '182px'
                        ],
                        [
                            "eid2528",
                            "top",
                            1700,
                            100,
                            "linear",
                            "${TextCopy}",
                            '182px',
                            '176px'
                        ],
                        [
                            "eid487",
                            "top",
                            1800,
                            497,
                            "linear",
                            "${TextCopy}",
                            '176px',
                            '183px'
                        ],
                        [
                            "eid2530",
                            "top",
                            2297,
                            203,
                            "linear",
                            "${TextCopy}",
                            '183px',
                            '185px'
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
                            5750,
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
                            6230,
                            156,
                            "linear",
                            "${spark2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2603",
                            "opacity",
                            6700,
                            88,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2772",
                            "opacity",
                            8644,
                            156,
                            "linear",
                            "${spark2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2773",
                            "opacity",
                            9114,
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
                            5962,
                            812,
                            "linear",
                            "${Yoyo-poster-small}",
                            '38px',
                            '62px'
                        ],
                        [
                            "eid2582",
                            "left",
                            6774,
                            1001,
                            "linear",
                            "${Yoyo-poster-small}",
                            '62px',
                            '38px'
                        ],
                        [
                            "eid2778",
                            "left",
                            7908,
                            912,
                            "linear",
                            "${Yoyo-poster-small}",
                            '38px',
                            '62px'
                        ],
                        [
                            "eid2779",
                            "left",
                            8820,
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
                            1038,
                            762,
                            "linear",
                            "${text-balloon}",
                            '117px',
                            '100px'
                        ],
                        [
                            "eid495",
                            "top",
                            1800,
                            700,
                            "linear",
                            "${text-balloon}",
                            '100px',
                            '110px'
                        ],
                        [
                            "eid515",
                            "top",
                            0,
                            5314,
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
                            "eid2600",
                            "width",
                            6230,
                            558,
                            "linear",
                            "${spark2}",
                            '88px',
                            '352px'
                        ],
                        [
                            "eid2775",
                            "width",
                            8644,
                            558,
                            "linear",
                            "${spark2}",
                            '88px',
                            '352px'
                        ],
                        [
                            "eid2575",
                            "skewX",
                            5962,
                            812,
                            "linear",
                            "${Yoyo-poster-small}",
                            '0deg',
                            '7.75deg'
                        ],
                        [
                            "eid2581",
                            "skewX",
                            6774,
                            1001,
                            "linear",
                            "${Yoyo-poster-small}",
                            '7.75deg',
                            '0deg'
                        ],
                        [
                            "eid2776",
                            "skewX",
                            7908,
                            912,
                            "linear",
                            "${Yoyo-poster-small}",
                            '0deg',
                            '7.75deg'
                        ],
                        [
                            "eid2777",
                            "skewX",
                            8820,
                            1125,
                            "linear",
                            "${Yoyo-poster-small}",
                            '7.75deg',
                            '0deg'
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
                            "eid3789",
                            "left",
                            2185,
                            425,
                            "linear",
                            "${crowd6}",
                            '1024px',
                            '863px'
                        ],
                        [
                            "eid3790",
                            "left",
                            2610,
                            460,
                            "linear",
                            "${crowd6}",
                            '863px',
                            '689px'
                        ],
                        [
                            "eid3794",
                            "left",
                            3070,
                            539,
                            "linear",
                            "${crowd6}",
                            '689px',
                            '485px'
                        ],
                        [
                            "eid3796",
                            "left",
                            3609,
                            553,
                            "linear",
                            "${crowd6}",
                            '485px',
                            '276px'
                        ],
                        [
                            "eid3798",
                            "left",
                            4162,
                            527,
                            "linear",
                            "${crowd6}",
                            '276px',
                            '77px'
                        ],
                        [
                            "eid3800",
                            "left",
                            4689,
                            511,
                            "linear",
                            "${crowd6}",
                            '77px',
                            '-116px'
                        ],
                        [
                            "eid3802",
                            "left",
                            5200,
                            485,
                            "linear",
                            "${crowd6}",
                            '-116px',
                            '-300px'
                        ],
                        [
                            "eid3784",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${crowd6}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3783",
                            "opacity",
                            2185,
                            123,
                            "linear",
                            "${crowd6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3806",
                            "opacity",
                            5535,
                            106,
                            "linear",
                            "${crowd6}",
                            '1',
                            '0'
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
                            5750,
                            250,
                            "linear",
                            "${Text2}",
                            '37px',
                            '-128px'
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
                            5903,
                            97,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2828",
                            "top",
                            0,
                            5314,
                            "linear",
                            "${mall-outside-blur}",
                            '-113px',
                            '-205px'
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
                            '1'
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
                            2500,
                            295,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
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
                            2500,
                            295,
                            "linear",
                            "${text-balloon}",
                            '1',
                            '0'
                        ],
                            [ "eid3571", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Currency}', [] ] ],
                            [ "eid3778", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Coverage}', [] ] ]
                    ]
                }
            },
            "Currency": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1044px', '587px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.45)']
                        },
                        {
                            rect: ['48px', '87px', '289px', '364px', 'auto', 'auto'],
                            id: 'yoyo-poster-blank',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-poster-blank.png', '0px', '0px']
                        },
                        {
                            rect: ['64px', '356px', '105px', '40px', 'auto', 'auto'],
                            id: 'yoyo-venue',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-venue.png', '0px', '0px']
                        },
                        {
                            rect: ['217px', '90px', '120px', '44px', 'auto', 'auto'],
                            id: 'yoyo-time',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-time.png', '0px', '0px']
                        },
                        {
                            rect: ['183px', '363px', '147px', '77px', 'auto', 'auto'],
                            id: 'yoyo-prize',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-prize.png', '0px', '0px']
                        },
                        {
                            rect: ['48px', '107px', '169px', '38px', 'auto', 'auto'],
                            id: 'yoyo-date',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-date.png', '0px', '0px']
                        },
                        {
                            rect: ['625px', '19px', '420px', '395px', 'auto', 'auto'],
                            id: 'narrator-text-balloon-squareCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon-square.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['661px', '103px', '352px', '102px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text4Copy9',
                            text: 'Is the information on the date and time clearly presented in the poster',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['661px', '243px', '365px', '81px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text4Copy8',
                            text: 'Is the closing date <br>mentioned',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['948px', '164px', '65px', '102px', 'auto', 'auto'],
                            id: 'question-markCopy8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['826px', '271px', '65px', '102px', 'auto', 'auto'],
                            id: 'question-markCopy7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['645px', '32px', '103px', '44px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text5Copy',
                            text: 'Task:',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['654px', '71px', '372px', '82px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text6Copy',
                            text: 'How frequently is this competition held?',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['723px', '157px', '290px', '37px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text7Copy11',
                            text: 'Yearly',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['723px', '202px', '290px', '37px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text7Copy10',
                            text: 'Quarterly',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['726px', '247px', '290px', '37px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text7Copy9',
                            text: 'Every two years',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['723px', '291px', '290px', '37px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text7Copy8',
                            text: 'It’s in its first year.',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['668px', '145px', '41px', '42px', 'auto', 'auto'],
                            id: 'number-boxCopy7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/number-box.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            userClass: 'ticks',
                            rect: ['668px', '146px', '48px', '42px', 'auto', 'auto'],
                            id: 'a_tick',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/tick2.png', '0px', '0px']
                        },
                        {
                            rect: ['668px', '193px', '41px', '42px', 'auto', 'auto'],
                            id: 'number-boxCopy6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/number-box.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            userClass: 'ticks',
                            rect: ['668px', '194px', '48px', '42px', 'auto', 'auto'],
                            id: 'b_tick',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/tick2.png', '0px', '0px']
                        },
                        {
                            rect: ['668px', '242px', '41px', '42px', 'auto', 'auto'],
                            id: 'number-boxCopy5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/number-box.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            userClass: 'ticks',
                            rect: ['668px', '243px', '48px', '42px', 'auto', 'auto'],
                            id: 'c_tick',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/tick2.png', '0px', '0px']
                        },
                        {
                            rect: ['668px', '291px', '41px', '42px', 'auto', 'auto'],
                            id: 'number-boxCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/number-box.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            userClass: 'ticks',
                            rect: ['668px', '292px', '48px', '42px', 'auto', 'auto'],
                            id: 'd_tick',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/tick2.png', '0px', '0px']
                        },
                        {
                            rect: ['796px', '392px', '137px', '42px', 'auto', 'auto'],
                            id: 'narrator-text-balloonCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['625px', '442px', '391px', '70px', 'auto', 'auto'],
                            id: 'Text3Copy',
                            opacity: '0',
                            text: 'Refers to the degree the information is up to date in relation to something',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(3,64,143,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            rect: ['762px', '380px', '218px', '62px', 'auto', 'auto'],
                            id: 'txt-curr2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/txt-curr.png', '0px', '0px']
                        },
                        {
                            rect: ['936px', '1px', '77px', '70px', 'auto', 'auto'],
                            type: 'image',
                            id: 'close-btnCopy',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'a',
                            opacity: '1',
                            cursor: 'pointer',
                            rect: ['661px', '138px', '360px', '49px', 'auto', 'auto'],
                            display: 'none',
                            userClass: '',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(248,163,163,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'b',
                            opacity: '1',
                            cursor: 'pointer',
                            rect: ['661px', '191px', '360px', '41px', 'auto', 'auto'],
                            display: 'none',
                            userClass: '',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(248,163,163,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'c',
                            opacity: '1',
                            cursor: 'pointer',
                            rect: ['661px', '234px', '360px', '54px', 'auto', 'auto'],
                            display: 'none',
                            userClass: '',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(248,163,163,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'd',
                            opacity: '1',
                            cursor: 'pointer',
                            rect: ['661px', '290px', '360px', '50px', 'auto', 'auto'],
                            display: 'none',
                            userClass: '',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(248,163,163,0.00)']
                        },
                        {
                            rect: ['861px', '333px', '166px', '54px', 'auto', 'auto'],
                            type: 'image',
                            id: 'submit-btn',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/submit-btn.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '1px', '732', '259', 'auto', 'auto'],
                            id: 'well-done2Copy',
                            symbolName: 'well-done',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['923px', '324px', '93px', '54px', 'auto', 'auto'],
                            type: 'image',
                            id: 'next_but2',
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
                    duration: 7648,
                    autoPlay: true,
                    labels: {
                        "start": 75,
                        "skip1": 6120
                    },
                    data: [
                        [
                            "eid3564",
                            "opacity",
                            0,
                            155,
                            "linear",
                            "${txt-curr2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3833",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3470",
                            "left",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloonCopy}",
                            '796px',
                            '601px'
                        ],
                        [
                            "eid3482",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${number-boxCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3483",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${number-boxCopy6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3531",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-squareCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3532",
                            "opacity",
                            675,
                            105,
                            "linear",
                            "${narrator-text-balloon-squareCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3538",
                            "left",
                            0,
                            250,
                            "linear",
                            "${yoyo-date}",
                            '48px',
                            '140px'
                        ],
                        [
                            "eid3516",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3517",
                            "opacity",
                            780,
                            120,
                            "linear",
                            "${question-markCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3518",
                            "opacity",
                            6200,
                            175,
                            "linear",
                            "${question-markCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3547",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${yoyo-time}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3838",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3842",
                            "display",
                            7648,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3471",
                            "width",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloonCopy}",
                            '137px',
                            '445px'
                        ],
                        [
                            "eid3559",
                            "width",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster-blank}",
                            '289px',
                            '457px'
                        ],
                        [
                            "eid3837",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3841",
                            "display",
                            7648,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3556",
                            "height",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster-blank}",
                            '364px',
                            '576px'
                        ],
                        [
                            "eid3860",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next_but2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3861",
                            "display",
                            1935,
                            0,
                            "linear",
                            "${next_but2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3862",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${next_but2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3513",
                            "width",
                            1595,
                            105,
                            "linear",
                            "${question-markCopy7}",
                            '65px',
                            '38px'
                        ],
                        [
                            "eid3545",
                            "top",
                            0,
                            250,
                            "linear",
                            "${yoyo-time}",
                            '90px',
                            '9px'
                        ],
                        [
                            "eid3560",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3509",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3510",
                            "opacity",
                            1525,
                            120,
                            "linear",
                            "${question-markCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3511",
                            "opacity",
                            6200,
                            175,
                            "linear",
                            "${question-markCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3484",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${a_tick}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3492",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7Copy10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3493",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${Text7Copy10}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3557",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${yoyo-poster-blank}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3552",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${yoyo-venue}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3514",
                            "top",
                            850,
                            105,
                            "linear",
                            "${question-markCopy8}",
                            '158px',
                            '164px'
                        ],
                        [
                            "eid3527",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3528",
                            "opacity",
                            780,
                            70,
                            "linear",
                            "${Text4Copy9}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3529",
                            "opacity",
                            6200,
                            175,
                            "linear",
                            "${Text4Copy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3478",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${number-boxCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3479",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${number-boxCopy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3496",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3497",
                            "opacity",
                            6500,
                            168,
                            "linear",
                            "${Text6Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3554",
                            "width",
                            0,
                            250,
                            "linear",
                            "${yoyo-venue}",
                            '105px',
                            '166px'
                        ],
                        [
                            "eid3541",
                            "height",
                            0,
                            250,
                            "linear",
                            "${yoyo-prize}",
                            '77px',
                            '121px'
                        ],
                        [
                            "eid3543",
                            "left",
                            0,
                            250,
                            "linear",
                            "${yoyo-prize}",
                            '183px',
                            '353px'
                        ],
                        [
                            "eid3544",
                            "width",
                            0,
                            250,
                            "linear",
                            "${yoyo-prize}",
                            '147px',
                            '233px'
                        ],
                        [
                            "eid3494",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7Copy11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3495",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${Text7Copy11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3836",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3530",
                            "height",
                            675,
                            175,
                            "linear",
                            "${narrator-text-balloon-squareCopy}",
                            '19px',
                            '395px'
                        ],
                        [
                            "eid3472",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${d_tick}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3488",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7Copy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3489",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${Text7Copy8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3863",
                            "left",
                            850,
                            0,
                            "linear",
                            "${question-markCopy8}",
                            '952px',
                            '952px'
                        ],
                        [
                            "eid3864",
                            "left",
                            955,
                            0,
                            "linear",
                            "${question-markCopy8}",
                            '952px',
                            '952px'
                        ],
                        [
                            "eid3524",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3525",
                            "opacity",
                            1525,
                            75,
                            "linear",
                            "${Text4Copy8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3526",
                            "opacity",
                            6200,
                            175,
                            "linear",
                            "${Text4Copy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3490",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7Copy9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3491",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${Text7Copy9}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3540",
                            "top",
                            0,
                            250,
                            "linear",
                            "${yoyo-prize}",
                            '363px',
                            '445px'
                        ],
                        [
                            "eid3480",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${b_tick}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3549",
                            "width",
                            0,
                            250,
                            "linear",
                            "${yoyo-time}",
                            '120px',
                            '190px'
                        ],
                        [
                            "eid3839",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3843",
                            "display",
                            7648,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3835",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3548",
                            "left",
                            0,
                            250,
                            "linear",
                            "${yoyo-time}",
                            '217px',
                            '406px'
                        ],
                        [
                            "eid3845",
                            "display",
                            0,
                            0,
                            "linear",
                            "${submit-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3840",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3844",
                            "display",
                            7648,
                            0,
                            "linear",
                            "${d}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3546",
                            "height",
                            0,
                            250,
                            "linear",
                            "${yoyo-time}",
                            '44px',
                            '70px'
                        ],
                        [
                            "eid3467",
                            "height",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloonCopy}",
                            '42px',
                            '117px'
                        ],
                        [
                            "eid3507",
                            "top",
                            1595,
                            105,
                            "linear",
                            "${question-markCopy7}",
                            '267px',
                            '271px'
                        ],
                        [
                            "eid3536",
                            "height",
                            0,
                            250,
                            "linear",
                            "${yoyo-date}",
                            '38px',
                            '60px'
                        ],
                        [
                            "eid3474",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${number-boxCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3475",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${number-boxCopy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3539",
                            "width",
                            0,
                            250,
                            "linear",
                            "${yoyo-date}",
                            '169px',
                            '268px'
                        ],
                        [
                            "eid3537",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${yoyo-date}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3834",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3508",
                            "height",
                            1595,
                            105,
                            "linear",
                            "${question-markCopy7}",
                            '102px',
                            '60px'
                        ],
                        [
                            "eid3486",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${number-boxCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3487",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${number-boxCopy7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3553",
                            "left",
                            0,
                            250,
                            "linear",
                            "${yoyo-venue}",
                            '64px',
                            '162px'
                        ],
                        [
                            "eid3568",
                            "left",
                            1595,
                            105,
                            "linear",
                            "${question-markCopy7}",
                            '764px',
                            '810px'
                        ],
                        [
                            "eid3498",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3499",
                            "opacity",
                            6500,
                            168,
                            "linear",
                            "${Text5Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3515",
                            "height",
                            850,
                            105,
                            "linear",
                            "${question-markCopy8}",
                            '102px',
                            '60px'
                        ],
                        [
                            "eid3551",
                            "height",
                            0,
                            250,
                            "linear",
                            "${yoyo-venue}",
                            '40px',
                            '64px'
                        ],
                        [
                            "eid3457",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${close-btnCopy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3458",
                            "opacity",
                            250,
                            55,
                            "linear",
                            "${close-btnCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3520",
                            "width",
                            850,
                            105,
                            "linear",
                            "${question-markCopy8}",
                            '65px',
                            '38px'
                        ],
                        [
                            "eid3466",
                            "top",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloonCopy}",
                            '392px',
                            '417px'
                        ],
                        [
                            "eid3535",
                            "top",
                            0,
                            250,
                            "linear",
                            "${yoyo-date}",
                            '107px',
                            '36px'
                        ],
                        [
                            "eid3464",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3465",
                            "opacity",
                            345,
                            50,
                            "linear",
                            "${Text3Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3847",
                            "display",
                            0,
                            0,
                            "linear",
                            "${well-done2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3476",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${c_tick}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3542",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${yoyo-prize}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3555",
                            "top",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster-blank}",
                            '87px',
                            '6px'
                        ],
                        [
                            "eid3565",
                            "top",
                            675,
                            175,
                            "linear",
                            "${narrator-text-balloon-squareCopy}",
                            '426px',
                            '19px'
                        ],
                        [
                            "eid3468",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloonCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3469",
                            "opacity",
                            250,
                            95,
                            "linear",
                            "${narrator-text-balloonCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3550",
                            "top",
                            0,
                            250,
                            "linear",
                            "${yoyo-venue}",
                            '356px',
                            '431px'
                        ],
                        [
                            "eid3558",
                            "left",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster-blank}",
                            '48px',
                            '139px'
                        ],
                            [ "eid3850", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${well-done2Copy}', [] ] ]
                    ]
                }
            },
            "Coverage": {
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
                            id: 'yoyo-poster',
                            opacity: '0',
                            rect: ['0px', '80px', '284px', '358px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-poster.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'narrator-text-balloon-squareCopy2',
                            opacity: '0',
                            rect: ['579px', '294px', '420px', '267px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon-square.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Messages can be overt or covert. ',
                            id: 'Text4Copy13',
                            opacity: '0',
                            align: 'left',
                            rect: ['605px', '327px', '371px', '68px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0.98', '0.98']],
                            align: 'left',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            rect: ['672px', '400px', '306px', '135px', 'auto', 'auto'],
                            text: 'Overt messages are obvious. You can understand the meaning  easily.',
                            id: 'Text4Copy12'
                        },
                        {
                            type: 'image',
                            id: '_1',
                            opacity: '0',
                            rect: ['619px', '420px', '33px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_2',
                            opacity: '0',
                            rect: ['619px', '425px', '33px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Covert messages are hidden. You may need to analyse deeper in order to grasp the different layers of meaning.',
                            id: 'Text4Copy11',
                            opacity: '0',
                            align: 'left',
                            rect: ['677px', '384px', '306px', '164px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'With reference to the words used, who is the main target audience',
                            id: 'Text9',
                            opacity: '0',
                            align: 'left',
                            rect: ['610px', '334px', '334px', '102px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'How is this information further reinforced in this poster',
                            id: 'Text9Copy',
                            opacity: '0',
                            align: 'left',
                            rect: ['610px', '449px', '307px', '80px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy10',
                            opacity: '0',
                            rect: ['706px', '368px', '65px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy9',
                            opacity: '0',
                            rect: ['675px', '466px', '65px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Task:',
                            id: 'Text5Copy2',
                            opacity: '0',
                            align: 'left',
                            rect: ['603px', '308px', '89px', '44px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Identify a piece of information which suggest the target audience. Place 1 star on it.',
                            id: 'Text6Copy2',
                            opacity: '0',
                            align: 'left',
                            rect: ['605px', '350px', '374px', '191px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'narrator-text-balloonCopy2',
                            opacity: '0',
                            rect: ['756px', '239px', '144px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(3,64,143,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3Copy2',
                            opacity: '0',
                            text: 'How information is portrayed in the poster',
                            rect: ['610px', '114px', '351px', '81px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            rect: ['461px', '312px', '44px', '44px', 'auto', 'auto'],
                            id: 'right-select',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'wrong-select2',
                            opacity: '0',
                            rect: ['11px', '404px', '75px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wrong-select.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-cov2',
                            opacity: '0',
                            rect: ['713px', '201px', '254px', '129px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-cov.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['888px', '7px', '82px', '75px', 'auto', 'auto'],
                            id: 'close-btnCopy2',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'dropArea',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['404px', '328px', '147px', '88px', 'auto', 'auto'],
                            fill: ['rgba(248,163,163,0.00)']
                        },
                        {
                            type: 'image',
                            rect: ['852px', '498px', '28px', '28px', 'auto', 'auto'],
                            id: 'star',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/star.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['852px', '498px', '28px', '28px', 'auto', 'auto'],
                            display: 'none',
                            id: 'star1',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/star.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['840px', '474px', '46px', '48px', 'auto', 'auto'],
                            id: 'spark22',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/spark2.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '1px', '732', '259', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'well-done',
                            id: 'well-done2Copy3',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            rect: ['888px', '498px', '83px', '48px', 'auto', 'auto'],
                            display: 'none',
                            id: 'next_but',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next_but.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '999px', '545px']
                        }
                    }
                },
                timeline: {
                    duration: 16880,
                    autoPlay: true,
                    labels: {
                        "start": 55,
                        "skip1": 5045,
                        "skip2": 8250,
                        "skip3": 14290
                    },
                    data: [
                        [
                            "eid3723",
                            "height",
                            15000,
                            159,
                            "linear",
                            "${star}",
                            '28px',
                            '102px'
                        ],
                        [
                            "eid3734",
                            "height",
                            15159,
                            91,
                            "linear",
                            "${star}",
                            '102px',
                            '75px'
                        ],
                        [
                            "eid3813",
                            "rotateZ",
                            15400,
                            100,
                            "linear",
                            "${star1}",
                            '0deg',
                            '34deg'
                        ],
                        [
                            "eid3814",
                            "rotateZ",
                            15500,
                            115,
                            "linear",
                            "${star1}",
                            '34deg',
                            '0deg'
                        ],
                        [
                            "eid3815",
                            "rotateZ",
                            15615,
                            100,
                            "linear",
                            "${star1}",
                            '0deg',
                            '-35deg'
                        ],
                        [
                            "eid3816",
                            "rotateZ",
                            15715,
                            125,
                            "linear",
                            "${star1}",
                            '-35deg',
                            '0deg'
                        ],
                        [
                            "eid3817",
                            "rotateZ",
                            16060,
                            100,
                            "linear",
                            "${star1}",
                            '0deg',
                            '34deg'
                        ],
                        [
                            "eid3818",
                            "rotateZ",
                            16160,
                            115,
                            "linear",
                            "${star1}",
                            '34deg',
                            '0deg'
                        ],
                        [
                            "eid3819",
                            "rotateZ",
                            16275,
                            100,
                            "linear",
                            "${star1}",
                            '0deg',
                            '-35deg'
                        ],
                        [
                            "eid3820",
                            "rotateZ",
                            16375,
                            125,
                            "linear",
                            "${star1}",
                            '-35deg',
                            '0deg'
                        ],
                        [
                            "eid3634",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3635",
                            "opacity",
                            1175,
                            75,
                            "linear",
                            "${Text4Copy12}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3636",
                            "opacity",
                            5120,
                            175,
                            "linear",
                            "${Text4Copy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3613",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3614",
                            "opacity",
                            9901,
                            120,
                            "linear",
                            "${question-markCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3615",
                            "opacity",
                            14250,
                            175,
                            "linear",
                            "${question-markCopy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3705",
                            "top",
                            9070,
                            105,
                            "linear",
                            "${question-markCopy10}",
                            '368px',
                            '384px'
                        ],
                        [
                            "eid3692",
                            "left",
                            5422,
                            156,
                            "linear",
                            "${_2}",
                            '619px',
                            '601px'
                        ],
                        [
                            "eid3743",
                            "rotateZ",
                            15400,
                            100,
                            "linear",
                            "${star}",
                            '0deg',
                            '34deg'
                        ],
                        [
                            "eid3744",
                            "rotateZ",
                            15500,
                            115,
                            "linear",
                            "${star}",
                            '34deg',
                            '0deg'
                        ],
                        [
                            "eid3747",
                            "rotateZ",
                            15615,
                            100,
                            "linear",
                            "${star}",
                            '0deg',
                            '-35deg'
                        ],
                        [
                            "eid3748",
                            "rotateZ",
                            15715,
                            125,
                            "linear",
                            "${star}",
                            '-35deg',
                            '0deg'
                        ],
                        [
                            "eid3749",
                            "rotateZ",
                            16060,
                            100,
                            "linear",
                            "${star}",
                            '0deg',
                            '34deg'
                        ],
                        [
                            "eid3750",
                            "rotateZ",
                            16160,
                            115,
                            "linear",
                            "${star}",
                            '34deg',
                            '0deg'
                        ],
                        [
                            "eid3751",
                            "rotateZ",
                            16275,
                            100,
                            "linear",
                            "${star}",
                            '0deg',
                            '-35deg'
                        ],
                        [
                            "eid3752",
                            "rotateZ",
                            16375,
                            125,
                            "linear",
                            "${star}",
                            '-35deg',
                            '0deg'
                        ],
                        [
                            "eid3640",
                            "height",
                            395,
                            175,
                            "linear",
                            "${narrator-text-balloon-squareCopy2}",
                            '19px',
                            '267px'
                        ],
                        [
                            "eid3616",
                            "left",
                            9971,
                            105,
                            "linear",
                            "${question-markCopy9}",
                            '675px',
                            '679px'
                        ],
                        [
                            "eid3849",
                            "display",
                            0,
                            0,
                            "linear",
                            "${well-done2Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3624",
                            "width",
                            9070,
                            105,
                            "linear",
                            "${question-markCopy10}",
                            '65px',
                            '38px'
                        ],
                        [
                            "eid3643",
                            "top",
                            395,
                            175,
                            "linear",
                            "${narrator-text-balloon-squareCopy2}",
                            '195px',
                            '294px'
                        ],
                        [
                            "eid3689",
                            "height",
                            5422,
                            156,
                            "linear",
                            "${_2}",
                            '44px',
                            '102px'
                        ],
                        [
                            "eid3811",
                            "top",
                            15000,
                            159,
                            "linear",
                            "${star1}",
                            '498px',
                            '436px'
                        ],
                        [
                            "eid3812",
                            "top",
                            15159,
                            91,
                            "linear",
                            "${star1}",
                            '436px',
                            '460px'
                        ],
                        [
                            "eid3764",
                            "height",
                            14915,
                            390,
                            "linear",
                            "${spark22}",
                            '48px',
                            '194px'
                        ],
                        [
                            "eid3611",
                            "top",
                            9971,
                            105,
                            "linear",
                            "${question-markCopy9}",
                            '466px',
                            '496px'
                        ],
                        [
                            "eid3808",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right-select}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3573",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${close-btnCopy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3574",
                            "opacity",
                            250,
                            55,
                            "linear",
                            "${close-btnCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3655",
                            "opacity",
                            0,
                            55,
                            "linear",
                            "${txt-cov2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3644",
                            "top",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '80px',
                            '-6px'
                        ],
                        [
                            "eid3599",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3600",
                            "opacity",
                            345,
                            50,
                            "linear",
                            "${Text3Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3631",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3632",
                            "opacity",
                            5578,
                            70,
                            "linear",
                            "${Text4Copy11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3633",
                            "opacity",
                            8573,
                            175,
                            "linear",
                            "${Text4Copy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3677",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3688",
                            "opacity",
                            5422,
                            78,
                            "linear",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3695",
                            "opacity",
                            8573,
                            175,
                            "linear",
                            "${_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3821",
                            "height",
                            15000,
                            159,
                            "linear",
                            "${star1}",
                            '28px',
                            '102px'
                        ],
                        [
                            "eid3822",
                            "height",
                            15159,
                            91,
                            "linear",
                            "${star1}",
                            '102px',
                            '75px'
                        ],
                        [
                            "eid3607",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3608",
                            "opacity",
                            14700,
                            168,
                            "linear",
                            "${Text6Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3765",
                            "top",
                            14915,
                            390,
                            "linear",
                            "${spark22}",
                            '474px',
                            '391px'
                        ],
                        [
                            "eid3617",
                            "width",
                            9971,
                            105,
                            "linear",
                            "${question-markCopy9}",
                            '65px',
                            '38px'
                        ],
                        [
                            "eid3690",
                            "top",
                            5422,
                            156,
                            "linear",
                            "${_2}",
                            '425px',
                            '396px'
                        ],
                        [
                            "eid3666",
                            "width",
                            1020,
                            155,
                            "linear",
                            "${_1}",
                            '33px',
                            '77px'
                        ],
                        [
                            "eid3827",
                            "width",
                            15000,
                            159,
                            "linear",
                            "${star1}",
                            '28px',
                            '102px'
                        ],
                        [
                            "eid3828",
                            "width",
                            15159,
                            91,
                            "linear",
                            "${star1}",
                            '102px',
                            '75px'
                        ],
                        [
                            "eid3612",
                            "height",
                            9971,
                            105,
                            "linear",
                            "${question-markCopy9}",
                            '102px',
                            '60px'
                        ],
                        [
                            "eid3665",
                            "top",
                            1020,
                            155,
                            "linear",
                            "${_1}",
                            '420px',
                            '396px'
                        ],
                        [
                            "eid3606",
                            "width",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloonCopy2}",
                            '144px',
                            '445px'
                        ],
                        [
                            "eid3739",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${star}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3738",
                            "opacity",
                            15000,
                            84,
                            "linear",
                            "${star}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3667",
                            "left",
                            1020,
                            155,
                            "linear",
                            "${_1}",
                            '619px',
                            '601px'
                        ],
                        [
                            "eid3691",
                            "width",
                            5422,
                            156,
                            "linear",
                            "${_2}",
                            '33px',
                            '77px'
                        ],
                        [
                            "eid3619",
                            "height",
                            9070,
                            105,
                            "linear",
                            "${question-markCopy10}",
                            '102px',
                            '60px'
                        ],
                        [
                            "eid3726",
                            "left",
                            15000,
                            159,
                            "linear",
                            "${star}",
                            '852px',
                            '819px'
                        ],
                        [
                            "eid3731",
                            "left",
                            15159,
                            91,
                            "linear",
                            "${star}",
                            '819px',
                            '829px'
                        ],
                        [
                            "eid3577",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3620",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3621",
                            "opacity",
                            9000,
                            120,
                            "linear",
                            "${question-markCopy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3622",
                            "opacity",
                            14250,
                            175,
                            "linear",
                            "${question-markCopy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3664",
                            "height",
                            1020,
                            155,
                            "linear",
                            "${_1}",
                            '44px',
                            '102px'
                        ],
                        [
                            "eid3641",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-squareCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3642",
                            "opacity",
                            395,
                            105,
                            "linear",
                            "${narrator-text-balloon-squareCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3767",
                            "left",
                            14915,
                            390,
                            "linear",
                            "${spark22}",
                            '840px',
                            '776px'
                        ],
                        [
                            "eid3810",
                            "display",
                            16880,
                            0,
                            "linear",
                            "${spark22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3823",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${star1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3824",
                            "opacity",
                            15000,
                            84,
                            "linear",
                            "${star1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3672",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3671",
                            "opacity",
                            1020,
                            95,
                            "linear",
                            "${_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3675",
                            "opacity",
                            5120,
                            175,
                            "linear",
                            "${_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3853",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3854",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3855",
                            "display",
                            1536,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3856",
                            "display",
                            5953,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3857",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3858",
                            "display",
                            10114,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3859",
                            "display",
                            10158,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3645",
                            "height",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '358px',
                            '576px'
                        ],
                        [
                            "eid3724",
                            "top",
                            15000,
                            159,
                            "linear",
                            "${star}",
                            '498px',
                            '436px'
                        ],
                        [
                            "eid3732",
                            "top",
                            15159,
                            91,
                            "linear",
                            "${star}",
                            '436px',
                            '460px'
                        ],
                        [
                            "eid3766",
                            "width",
                            14915,
                            390,
                            "linear",
                            "${spark22}",
                            '46px',
                            '187px'
                        ],
                        [
                            "eid3602",
                            "height",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloonCopy2}",
                            '44px',
                            '134px'
                        ],
                        [
                            "eid3725",
                            "width",
                            15000,
                            159,
                            "linear",
                            "${star}",
                            '28px',
                            '102px'
                        ],
                        [
                            "eid3733",
                            "width",
                            15159,
                            91,
                            "linear",
                            "${star}",
                            '102px',
                            '75px'
                        ],
                        [
                            "eid3772",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3771",
                            "opacity",
                            14915,
                            85,
                            "linear",
                            "${spark22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3775",
                            "opacity",
                            15210,
                            95,
                            "linear",
                            "${spark22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3698",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3702",
                            "opacity",
                            9000,
                            75,
                            "linear",
                            "${Text9}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3714",
                            "opacity",
                            14250,
                            175,
                            "linear",
                            "${Text9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3825",
                            "left",
                            15000,
                            159,
                            "linear",
                            "${star1}",
                            '852px',
                            '819px'
                        ],
                        [
                            "eid3826",
                            "left",
                            15159,
                            91,
                            "linear",
                            "${star1}",
                            '819px',
                            '829px'
                        ],
                        [
                            "eid3646",
                            "opacity",
                            0,
                            95,
                            "linear",
                            "${yoyo-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3637",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy13}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3638",
                            "opacity",
                            500,
                            70,
                            "linear",
                            "${Text4Copy13}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3639",
                            "opacity",
                            8325,
                            175,
                            "linear",
                            "${Text4Copy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3647",
                            "left",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '0px',
                            '94px'
                        ],
                        [
                            "eid3623",
                            "left",
                            9070,
                            105,
                            "linear",
                            "${question-markCopy10}",
                            '706px',
                            '708px'
                        ],
                        [
                            "eid3648",
                            "width",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '284px',
                            '457px'
                        ],
                        [
                            "eid3699",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text9Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3708",
                            "opacity",
                            9901,
                            59,
                            "linear",
                            "${Text9Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3713",
                            "opacity",
                            14250,
                            175,
                            "linear",
                            "${Text9Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3603",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloonCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3604",
                            "opacity",
                            250,
                            95,
                            "linear",
                            "${narrator-text-balloonCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3865",
                            "display",
                            0,
                            0,
                            "linear",
                            "${star1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3605",
                            "left",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloonCopy2}",
                            '756px',
                            '561px'
                        ],
                        [
                            "eid3601",
                            "top",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloonCopy2}",
                            '239px',
                            '97px'
                        ],
                        [
                            "eid3609",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3610",
                            "opacity",
                            14700,
                            168,
                            "linear",
                            "${Text5Copy2}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid3851", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${well-done2Copy3}', [] ] ]
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
                            rect: ['0px', '0px', '276px', '138px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(202,231,147,1.00)']
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
            "authorH": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '276px', '81px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(242,163,248,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '276px', '81px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid3451",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3453",
                            "opacity",
                            1420,
                            1080,
                            "linear",
                            "${Rectangle}",
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
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1040px', '585px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.77)']
                        },
                        {
                            type: 'image',
                            id: 'game_result2',
                            opacity: '0',
                            rect: ['168px', '196px', '218px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/game%20result2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['458px', '484px', '123px', '40px', 'auto', 'auto'],
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("3_edgeActions.js");
})("EDGE-601893278");
