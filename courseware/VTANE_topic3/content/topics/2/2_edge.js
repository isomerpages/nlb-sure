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
            js+"controller.js",
            js+"utils.js",
            js+"general.js"
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
                            rect: ['-15px', '-3px', '1112px', '786px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mall.jpg",'0px','0px']
                        },
                        {
                            id: 'mall-outside-blur',
                            type: 'image',
                            rect: ['-15px', '-3px', '1112px', '786px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mall-outside-blur.jpg",'0px','0px']
                        },
                        {
                            id: 'crowd1',
                            type: 'image',
                            rect: ['615px', '467px', '118px', '366px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd1.png",'0px','0px']
                        },
                        {
                            id: 'signboard-outside',
                            type: 'image',
                            rect: ['-445px', '319px', '750px', '694px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"signboard-outside.png",'0px','0px']
                        },
                        {
                            id: 'Yoyo-poster-small',
                            type: 'image',
                            rect: ['-398px', '514px', '203px', '437px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Yoyo-poster-small.png",'0px','0px']
                        },
                        {
                            id: 'spark2',
                            type: 'image',
                            rect: ['150px', '279px', '88px', '92px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spark2.png",'0px','0px']
                        },
                        {
                            id: 'crowd2',
                            type: 'image',
                            rect: ['733px', '563px', '166px', '398px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd22.png",'0px','0px']
                        },
                        {
                            id: 'crowd3',
                            type: 'image',
                            rect: ['-278px', '183px', '286px', '729px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"crowd32.png",'0px','0px']
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
                            text: "Author and Accuracy",
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
                            id: 'Text',
                            type: 'text',
                            rect: ['166px', '64px', '375px', '92px', 'auto', 'auto'],
                            opacity: '0',
                            text: "represents",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'txt-AACCO',
                            type: 'image',
                            rect: ['174px', '14px', '375px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-AACCO.png",'0px','0px']
                        },
                        {
                            id: 'txt-obj',
                            type: 'image',
                            rect: ['452px', '74px', '89px', '26px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-obj.png",'0px','0px']
                        },
                        {
                            id: 'txt-curr',
                            type: 'image',
                            rect: ['378px', '74px', '92px', '26px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-curr.png",'0px','0px']
                        },
                        {
                            id: 'authorH',
                            symbolName: 'authorH',
                            type: 'rect',
                            rect: ['741', '4px', '276', '81', 'auto', 'auto']
                        },
                        {
                            id: 'txt-auth',
                            type: 'image',
                            rect: ['179px', '66px', '88px', '31px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-auth.png",'0px','0px']
                        },
                        {
                            id: 'accuracyH',
                            symbolName: 'AccuracyH',
                            type: 'rect',
                            rect: ['741', '95', '276', '92', 'auto', 'auto']
                        },
                        {
                            id: 'txt-accu',
                            type: 'image',
                            rect: ['249px', '69px', '90px', '25px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-accu.png",'0px','0px']
                        },
                        {
                            id: 'txt-cov',
                            type: 'image',
                            rect: ['311px', '65px', '87px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-cov.png",'0px','0px']
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
                            rect: ['24px', '-145px', '685px', '115px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Let's learn more about Author and Accuracy.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'authorTrigger',
                            type: 'rect',
                            rect: ['741px', '3px', '273px', '82px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(248,163,163,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'accuracyTrigger',
                            type: 'rect',
                            rect: ['741px', '96px', '273px', '92px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(248,163,163,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'mainmenu',
                            type: 'image',
                            rect: ['811px', '500px', '203px', '66px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'Author',
                            symbolName: 'Author',
                            type: 'rect',
                            rect: ['-8px', '-6px', '1044', '587', 'auto', 'auto']
                        },
                        {
                            id: 'Accuracy',
                            symbolName: 'Accuracy',
                            type: 'rect',
                            rect: ['-8px', '-6', '1044', '587', 'auto', 'auto']
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
                    duration: 25250,
                    autoPlay: true,
                    labels: {
                        "test": 22750,
                        "start": 22828,
                        "loop": 22910
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
                            "eid2950",
                            "height",
                            8250,
                            340,
                            "linear",
                            "${txt-obj}",
                            '26px',
                            '121px'
                        ],
                        [
                            "eid2957",
                            "height",
                            8590,
                            87,
                            "linear",
                            "${txt-obj}",
                            '121px',
                            '66px'
                        ],
                        [
                            "eid567",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${crowd2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid568",
                            "opacity",
                            1705,
                            74,
                            "linear",
                            "${crowd2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid569",
                            "opacity",
                            6085,
                            127,
                            "linear",
                            "${crowd2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2598",
                            "top",
                            10268,
                            558,
                            "linear",
                            "${spark2}",
                            '279px',
                            '130px'
                        ],
                        [
                            "eid2770",
                            "top",
                            23682,
                            558,
                            "linear",
                            "${spark2}",
                            '279px',
                            '130px'
                        ],
                        [
                            "eid2931",
                            "left",
                            7715,
                            310,
                            "linear",
                            "${txt-curr}",
                            '378px',
                            '563px'
                        ],
                        [
                            "eid2933",
                            "left",
                            8025,
                            90,
                            "linear",
                            "${txt-curr}",
                            '563px',
                            '762px'
                        ],
                        [
                            "eid2886",
                            "width",
                            6629,
                            320,
                            "linear",
                            "${txt-accu}",
                            '90px',
                            '413px'
                        ],
                        [
                            "eid2893",
                            "width",
                            6949,
                            109,
                            "linear",
                            "${txt-accu}",
                            '413px',
                            '226px'
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
                            16426,
                            87,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3006",
                            "opacity",
                            25153,
                            97,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2860",
                            "width",
                            6085,
                            299,
                            "linear",
                            "${txt-auth}",
                            '88px',
                            '361px'
                        ],
                        [
                            "eid2865",
                            "width",
                            6384,
                            116,
                            "linear",
                            "${txt-auth}",
                            '361px',
                            '179px'
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
                            10268,
                            156,
                            "linear",
                            "${spark2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2603",
                            "opacity",
                            10738,
                            88,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2772",
                            "opacity",
                            23682,
                            156,
                            "linear",
                            "${spark2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2773",
                            "opacity",
                            24152,
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
                            6085,
                            128,
                            "linear",
                            "${txt-auth}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2890",
                            "left",
                            6629,
                            320,
                            "linear",
                            "${txt-accu}",
                            '249px',
                            '611px'
                        ],
                        [
                            "eid2891",
                            "left",
                            6949,
                            109,
                            "linear",
                            "${txt-accu}",
                            '611px',
                            '767px'
                        ],
                        [
                            "eid2549",
                            "left",
                            2000,
                            3114,
                            "linear",
                            "${Yoyo-poster-small}",
                            '-398px',
                            '38px'
                        ],
                        [
                            "eid2576",
                            "left",
                            10000,
                            812,
                            "linear",
                            "${Yoyo-poster-small}",
                            '38px',
                            '62px'
                        ],
                        [
                            "eid2582",
                            "left",
                            10812,
                            1001,
                            "linear",
                            "${Yoyo-poster-small}",
                            '62px',
                            '38px'
                        ],
                        [
                            "eid2778",
                            "left",
                            22946,
                            912,
                            "linear",
                            "${Yoyo-poster-small}",
                            '38px',
                            '62px'
                        ],
                        [
                            "eid2779",
                            "left",
                            23858,
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
                            2645,
                            605,
                            "linear",
                            "${mall-outside-blur}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid561",
                            "height",
                            1705,
                            689,
                            "linear",
                            "${crowd2}",
                            '933px',
                            '825px'
                        ],
                        [
                            "eid562",
                            "height",
                            2394,
                            767,
                            "linear",
                            "${crowd2}",
                            '825px',
                            '653px'
                        ],
                        [
                            "eid563",
                            "height",
                            3161,
                            903,
                            "linear",
                            "${crowd2}",
                            '653px',
                            '537px'
                        ],
                        [
                            "eid564",
                            "height",
                            4064,
                            893,
                            "linear",
                            "${crowd2}",
                            '537px',
                            '398px'
                        ],
                        [
                            "eid565",
                            "height",
                            4957,
                            1255,
                            "linear",
                            "${crowd2}",
                            '398px',
                            '298px'
                        ],
                        [
                            "eid2608",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${crowd1}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid2607",
                            "opacity",
                            7000,
                            133,
                            "linear",
                            "${crowd1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2680",
                            "opacity",
                            11002,
                            328,
                            "linear",
                            "${crowd1}",
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
                            562,
                            "linear",
                            "${text-balloon}",
                            '117px',
                            '100px'
                        ],
                        [
                            "eid495",
                            "top",
                            1600,
                            700,
                            "linear",
                            "${text-balloon}",
                            '100px',
                            '110px'
                        ],
                        [
                            "eid2909",
                            "width",
                            7188,
                            312,
                            "linear",
                            "${txt-cov}",
                            '87px',
                            '434px'
                        ],
                        [
                            "eid2914",
                            "width",
                            7500,
                            103,
                            "linear",
                            "${txt-cov}",
                            '434px',
                            '252px'
                        ],
                        [
                            "eid2838",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid2832",
                            "opacity",
                            3406,
                            94,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2841",
                            "opacity",
                            5455,
                            227,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
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
                            7715,
                            115,
                            "linear",
                            "${txt-curr}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2993",
                            "opacity",
                            10250,
                            250,
                            "linear",
                            "${txt-curr}",
                            '1',
                            '0.20472440944882'
                        ],
                        [
                            "eid2862",
                            "top",
                            6085,
                            299,
                            "linear",
                            "${txt-auth}",
                            '66px',
                            '7px'
                        ],
                        [
                            "eid2864",
                            "top",
                            6384,
                            116,
                            "linear",
                            "${txt-auth}",
                            '7px',
                            '10px'
                        ],
                        [
                            "eid2552",
                            "top",
                            2000,
                            3114,
                            "linear",
                            "${signboard-outside}",
                            '319px',
                            '-113px'
                        ],
                        [
                            "eid2600",
                            "width",
                            10268,
                            558,
                            "linear",
                            "${spark2}",
                            '88px',
                            '352px'
                        ],
                        [
                            "eid2775",
                            "width",
                            23682,
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
                            7188,
                            135,
                            "linear",
                            "${txt-cov}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2994",
                            "opacity",
                            10250,
                            250,
                            "linear",
                            "${txt-cov}",
                            '1',
                            '0.20472440944882'
                        ],
                        [
                            "eid2847",
                            "left",
                            5838,
                            247,
                            "linear",
                            "${RoundRect}",
                            '1030px',
                            '733px'
                        ],
                        [
                            "eid2617",
                            "height",
                            7000,
                            500,
                            "linear",
                            "${crowd1}",
                            '1033px',
                            '940px'
                        ],
                        [
                            "eid2630",
                            "height",
                            7500,
                            0,
                            "linear",
                            "${crowd1}",
                            '940px',
                            '940px'
                        ],
                        [
                            "eid2632",
                            "height",
                            7546,
                            454,
                            "linear",
                            "${crowd1}",
                            '940px',
                            '854px'
                        ],
                        [
                            "eid2637",
                            "height",
                            8000,
                            0,
                            "linear",
                            "${crowd1}",
                            '854px',
                            '854px'
                        ],
                        [
                            "eid2639",
                            "height",
                            8047,
                            543,
                            "linear",
                            "${crowd1}",
                            '854px',
                            '749px'
                        ],
                        [
                            "eid2644",
                            "height",
                            8590,
                            0,
                            "linear",
                            "${crowd1}",
                            '749px',
                            '749px'
                        ],
                        [
                            "eid2646",
                            "height",
                            8639,
                            531,
                            "linear",
                            "${crowd1}",
                            '749px',
                            '644px'
                        ],
                        [
                            "eid2651",
                            "height",
                            9170,
                            0,
                            "linear",
                            "${crowd1}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid2653",
                            "height",
                            9208,
                            481,
                            "linear",
                            "${crowd1}",
                            '644px',
                            '547px'
                        ],
                        [
                            "eid2658",
                            "height",
                            9689,
                            0,
                            "linear",
                            "${crowd1}",
                            '547px',
                            '547px'
                        ],
                        [
                            "eid2660",
                            "height",
                            9750,
                            893,
                            "linear",
                            "${crowd1}",
                            '547px',
                            '397px'
                        ],
                        [
                            "eid2674",
                            "height",
                            10683,
                            647,
                            "linear",
                            "${crowd1}",
                            '397px',
                            '366px'
                        ],
                        [
                            "eid2828",
                            "top",
                            2550,
                            2564,
                            "linear",
                            "${mall-outside-blur}",
                            '-3px',
                            '-205px'
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
                            2300,
                            295,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2550",
                            "top",
                            2000,
                            3114,
                            "linear",
                            "${Yoyo-poster-small}",
                            '514px',
                            '82px'
                        ],
                        [
                            "eid2930",
                            "width",
                            7715,
                            310,
                            "linear",
                            "${txt-curr}",
                            '92px',
                            '456px'
                        ],
                        [
                            "eid2935",
                            "width",
                            8025,
                            90,
                            "linear",
                            "${txt-curr}",
                            '456px',
                            '218px'
                        ],
                        [
                            "eid2884",
                            "height",
                            6629,
                            320,
                            "linear",
                            "${txt-accu}",
                            '25px',
                            '115px'
                        ],
                        [
                            "eid2894",
                            "height",
                            6949,
                            109,
                            "linear",
                            "${txt-accu}",
                            '115px',
                            '63px'
                        ],
                        [
                            "eid2861",
                            "left",
                            6085,
                            299,
                            "linear",
                            "${txt-auth}",
                            '179px',
                            '649px'
                        ],
                        [
                            "eid2863",
                            "left",
                            6384,
                            116,
                            "linear",
                            "${txt-auth}",
                            '649px',
                            '776px'
                        ],
                        [
                            "eid2597",
                            "height",
                            10268,
                            558,
                            "linear",
                            "${spark2}",
                            '92px',
                            '366px'
                        ],
                        [
                            "eid2771",
                            "height",
                            23682,
                            558,
                            "linear",
                            "${spark2}",
                            '92px',
                            '366px'
                        ],
                        [
                            "eid590",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${crowd3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid591",
                            "opacity",
                            3855,
                            105,
                            "linear",
                            "${crowd3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2835",
                            "left",
                            3406,
                            209,
                            "linear",
                            "${Text}",
                            '166px',
                            '582px'
                        ],
                        [
                            "eid2837",
                            "left",
                            3615,
                            95,
                            "linear",
                            "${Text}",
                            '582px',
                            '538px'
                        ],
                        [
                            "eid2844",
                            "left",
                            5455,
                            383,
                            "linear",
                            "${Text}",
                            '538px',
                            '1030px'
                        ],
                        [
                            "eid576",
                            "width",
                            1705,
                            689,
                            "linear",
                            "${crowd2}",
                            '389px',
                            '344px'
                        ],
                        [
                            "eid577",
                            "width",
                            2394,
                            767,
                            "linear",
                            "${crowd2}",
                            '344px',
                            '272px'
                        ],
                        [
                            "eid578",
                            "width",
                            3161,
                            903,
                            "linear",
                            "${crowd2}",
                            '272px',
                            '224px'
                        ],
                        [
                            "eid579",
                            "width",
                            4064,
                            893,
                            "linear",
                            "${crowd2}",
                            '224px',
                            '166px'
                        ],
                        [
                            "eid580",
                            "width",
                            4957,
                            1255,
                            "linear",
                            "${crowd2}",
                            '166px',
                            '124px'
                        ],
                        [
                            "eid2908",
                            "height",
                            7188,
                            312,
                            "linear",
                            "${txt-cov}",
                            '44px',
                            '220px'
                        ],
                        [
                            "eid2915",
                            "height",
                            7500,
                            103,
                            "linear",
                            "${txt-cov}",
                            '220px',
                            '128px'
                        ],
                        [
                            "eid2885",
                            "top",
                            6629,
                            320,
                            "linear",
                            "${txt-accu}",
                            '69px',
                            '81px'
                        ],
                        [
                            "eid2892",
                            "top",
                            6949,
                            109,
                            "linear",
                            "${txt-accu}",
                            '81px',
                            '110px'
                        ],
                        [
                            "eid2577",
                            "width",
                            10000,
                            812,
                            "linear",
                            "${Yoyo-poster-small}",
                            '203px',
                            '195px'
                        ],
                        [
                            "eid2583",
                            "width",
                            10812,
                            1001,
                            "linear",
                            "${Yoyo-poster-small}",
                            '195px',
                            '203px'
                        ],
                        [
                            "eid2780",
                            "width",
                            22946,
                            912,
                            "linear",
                            "${Yoyo-poster-small}",
                            '203px',
                            '195px'
                        ],
                        [
                            "eid2781",
                            "width",
                            23858,
                            1125,
                            "linear",
                            "${Yoyo-poster-small}",
                            '195px',
                            '203px'
                        ],
                        [
                            "eid2951",
                            "width",
                            8250,
                            340,
                            "linear",
                            "${txt-obj}",
                            '89px',
                            '423px'
                        ],
                        [
                            "eid2956",
                            "width",
                            8590,
                            87,
                            "linear",
                            "${txt-obj}",
                            '423px',
                            '225px'
                        ],
                        [
                            "eid2952",
                            "left",
                            8250,
                            340,
                            "linear",
                            "${txt-obj}",
                            '452px',
                            '592px'
                        ],
                        [
                            "eid2954",
                            "left",
                            8590,
                            87,
                            "linear",
                            "${txt-obj}",
                            '592px',
                            '765px'
                        ],
                        [
                            "eid2618",
                            "top",
                            7000,
                            500,
                            "linear",
                            "${crowd1}",
                            '-144px',
                            '-76px'
                        ],
                        [
                            "eid2631",
                            "top",
                            7546,
                            454,
                            "linear",
                            "${crowd1}",
                            '-61px',
                            '30px'
                        ],
                        [
                            "eid2638",
                            "top",
                            8047,
                            543,
                            "linear",
                            "${crowd1}",
                            '39px',
                            '137px'
                        ],
                        [
                            "eid2645",
                            "top",
                            8639,
                            531,
                            "linear",
                            "${crowd1}",
                            '141px',
                            '226px'
                        ],
                        [
                            "eid2652",
                            "top",
                            9208,
                            481,
                            "linear",
                            "${crowd1}",
                            '226px',
                            '307px'
                        ],
                        [
                            "eid2659",
                            "top",
                            9750,
                            575,
                            "linear",
                            "${crowd1}",
                            '307px',
                            '389px'
                        ],
                        [
                            "eid2626",
                            "top",
                            10325,
                            318,
                            "linear",
                            "${crowd1}",
                            '389px',
                            '449px'
                        ],
                        [
                            "eid2684",
                            "top",
                            10643,
                            40,
                            "linear",
                            "${crowd1}",
                            '449px',
                            '443px'
                        ],
                        [
                            "eid2685",
                            "top",
                            10683,
                            647,
                            "linear",
                            "${crowd1}",
                            '443px',
                            '467px'
                        ],
                        [
                            "eid3463",
                            "width",
                            23250,
                            0,
                            "linear",
                            "${Text2}",
                            '685px',
                            '685px'
                        ],
                        [
                            "eid2973",
                            "top",
                            16426,
                            174,
                            "linear",
                            "${narrator-text-balloon2}",
                            '-181px',
                            '8px'
                        ],
                        [
                            "eid3001",
                            "top",
                            25000,
                            250,
                            "linear",
                            "${narrator-text-balloon2}",
                            '8px',
                            '-157px'
                        ],
                        [
                            "eid2815",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-AACCO}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2818",
                            "opacity",
                            2750,
                            92,
                            "linear",
                            "${txt-AACCO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2970",
                            "opacity",
                            9689,
                            61,
                            "linear",
                            "${txt-AACCO}",
                            '1',
                            '0'
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
                            "eid2534",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${signboard-outside}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2548",
                            "opacity",
                            2000,
                            750,
                            "linear",
                            "${signboard-outside}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2953",
                            "top",
                            8250,
                            340,
                            "linear",
                            "${txt-obj}",
                            '74px',
                            '442px'
                        ],
                        [
                            "eid2955",
                            "top",
                            8590,
                            87,
                            "linear",
                            "${txt-obj}",
                            '442px',
                            '482px'
                        ],
                        [
                            "eid2619",
                            "width",
                            7000,
                            500,
                            "linear",
                            "${crowd1}",
                            '332px',
                            '302px'
                        ],
                        [
                            "eid2629",
                            "width",
                            7500,
                            0,
                            "linear",
                            "${crowd1}",
                            '302px',
                            '302px'
                        ],
                        [
                            "eid2634",
                            "width",
                            7546,
                            454,
                            "linear",
                            "${crowd1}",
                            '302px',
                            '274px'
                        ],
                        [
                            "eid2636",
                            "width",
                            8000,
                            0,
                            "linear",
                            "${crowd1}",
                            '274px',
                            '274px'
                        ],
                        [
                            "eid2641",
                            "width",
                            8047,
                            543,
                            "linear",
                            "${crowd1}",
                            '274px',
                            '240px'
                        ],
                        [
                            "eid2643",
                            "width",
                            8590,
                            0,
                            "linear",
                            "${crowd1}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid2648",
                            "width",
                            8639,
                            531,
                            "linear",
                            "${crowd1}",
                            '240px',
                            '207px'
                        ],
                        [
                            "eid2650",
                            "width",
                            9170,
                            0,
                            "linear",
                            "${crowd1}",
                            '207px',
                            '207px'
                        ],
                        [
                            "eid2655",
                            "width",
                            9208,
                            481,
                            "linear",
                            "${crowd1}",
                            '207px',
                            '176px'
                        ],
                        [
                            "eid2657",
                            "width",
                            9689,
                            0,
                            "linear",
                            "${crowd1}",
                            '176px',
                            '176px'
                        ],
                        [
                            "eid2662",
                            "width",
                            9750,
                            893,
                            "linear",
                            "${crowd1}",
                            '176px',
                            '128px'
                        ],
                        [
                            "eid2676",
                            "width",
                            10683,
                            647,
                            "linear",
                            "${crowd1}",
                            '128px',
                            '118px'
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
                            "eid2910",
                            "left",
                            7188,
                            312,
                            "linear",
                            "${txt-cov}",
                            '311px',
                            '583px'
                        ],
                        [
                            "eid2912",
                            "left",
                            7500,
                            103,
                            "linear",
                            "${txt-cov}",
                            '583px',
                            '760px'
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
                            "eid570",
                            "left",
                            1705,
                            689,
                            "linear",
                            "${crowd2}",
                            '1032px',
                            '851px'
                        ],
                        [
                            "eid571",
                            "left",
                            2394,
                            286,
                            "linear",
                            "${crowd2}",
                            '851px',
                            '843px'
                        ],
                        [
                            "eid2554",
                            "left",
                            2680,
                            264,
                            "linear",
                            "${crowd2}",
                            '843px',
                            '805px'
                        ],
                        [
                            "eid652",
                            "left",
                            2944,
                            217,
                            "linear",
                            "${crowd2}",
                            '805px',
                            '801px'
                        ],
                        [
                            "eid572",
                            "left",
                            3161,
                            304,
                            "linear",
                            "${crowd2}",
                            '801px',
                            '780px'
                        ],
                        [
                            "eid2555",
                            "left",
                            3465,
                            283,
                            "linear",
                            "${crowd2}",
                            '780px',
                            '782px'
                        ],
                        [
                            "eid653",
                            "left",
                            3748,
                            316,
                            "linear",
                            "${crowd2}",
                            '782px',
                            '772px'
                        ],
                        [
                            "eid573",
                            "left",
                            4064,
                            250,
                            "linear",
                            "${crowd2}",
                            '772px',
                            '741px'
                        ],
                        [
                            "eid654",
                            "left",
                            4314,
                            250,
                            "linear",
                            "${crowd2}",
                            '741px',
                            '732px'
                        ],
                        [
                            "eid2556",
                            "left",
                            4564,
                            185,
                            "linear",
                            "${crowd2}",
                            '732px',
                            '720px'
                        ],
                        [
                            "eid2557",
                            "left",
                            4749,
                            208,
                            "linear",
                            "${crowd2}",
                            '720px',
                            '726px'
                        ],
                        [
                            "eid574",
                            "left",
                            4957,
                            240,
                            "linear",
                            "${crowd2}",
                            '726px',
                            '721px'
                        ],
                        [
                            "eid2559",
                            "left",
                            5455,
                            263,
                            "linear",
                            "${crowd2}",
                            '721px',
                            '711px'
                        ],
                        [
                            "eid2560",
                            "left",
                            5718,
                            256,
                            "linear",
                            "${crowd2}",
                            '711px',
                            '718px'
                        ],
                        [
                            "eid2561",
                            "left",
                            5974,
                            238,
                            "linear",
                            "${crowd2}",
                            '718px',
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
                            5718,
                            158,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2533",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Yoyo-poster-small}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2547",
                            "opacity",
                            2000,
                            750,
                            "linear",
                            "${Yoyo-poster-small}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2859",
                            "height",
                            6085,
                            299,
                            "linear",
                            "${txt-auth}",
                            '31px',
                            '128px'
                        ],
                        [
                            "eid2866",
                            "height",
                            6384,
                            116,
                            "linear",
                            "${txt-auth}",
                            '128px',
                            '63px'
                        ],
                        [
                            "eid2821",
                            "left",
                            3250,
                            156,
                            "linear",
                            "${txt-AACCO}",
                            '343px',
                            '178px'
                        ],
                        [
                            "eid515",
                            "top",
                            2550,
                            2564,
                            "linear",
                            "${mall}",
                            '-3px',
                            '-205px'
                        ],
                        [
                            "eid2932",
                            "top",
                            7715,
                            310,
                            "linear",
                            "${txt-curr}",
                            '74px',
                            '348px'
                        ],
                        [
                            "eid2934",
                            "top",
                            8025,
                            90,
                            "linear",
                            "${txt-curr}",
                            '348px',
                            '380px'
                        ],
                        [
                            "eid2620",
                            "left",
                            7000,
                            500,
                            "linear",
                            "${crowd1}",
                            '1097px',
                            '1050px'
                        ],
                        [
                            "eid2628",
                            "left",
                            7500,
                            0,
                            "linear",
                            "${crowd1}",
                            '1050px',
                            '1050px'
                        ],
                        [
                            "eid2633",
                            "left",
                            7546,
                            454,
                            "linear",
                            "${crowd1}",
                            '1050px',
                            '1006px'
                        ],
                        [
                            "eid2635",
                            "left",
                            8000,
                            0,
                            "linear",
                            "${crowd1}",
                            '1006px',
                            '1006px'
                        ],
                        [
                            "eid2640",
                            "left",
                            8047,
                            543,
                            "linear",
                            "${crowd1}",
                            '1006px',
                            '953px'
                        ],
                        [
                            "eid2642",
                            "left",
                            8590,
                            0,
                            "linear",
                            "${crowd1}",
                            '953px',
                            '953px'
                        ],
                        [
                            "eid2647",
                            "left",
                            8639,
                            531,
                            "linear",
                            "${crowd1}",
                            '953px',
                            '900px'
                        ],
                        [
                            "eid2649",
                            "left",
                            9170,
                            0,
                            "linear",
                            "${crowd1}",
                            '900px',
                            '900px'
                        ],
                        [
                            "eid2654",
                            "left",
                            9208,
                            481,
                            "linear",
                            "${crowd1}",
                            '900px',
                            '848px'
                        ],
                        [
                            "eid2661",
                            "left",
                            9750,
                            575,
                            "linear",
                            "${crowd1}",
                            '848px',
                            '763px'
                        ],
                        [
                            "eid2681",
                            "left",
                            10325,
                            318,
                            "linear",
                            "${crowd1}",
                            '763px',
                            '700px'
                        ],
                        [
                            "eid2677",
                            "left",
                            10683,
                            647,
                            "linear",
                            "${crowd1}",
                            '700px',
                            '615px'
                        ],
                        [
                            "eid2911",
                            "top",
                            7188,
                            312,
                            "linear",
                            "${txt-cov}",
                            '65px',
                            '163px'
                        ],
                        [
                            "eid2913",
                            "top",
                            7500,
                            103,
                            "linear",
                            "${txt-cov}",
                            '163px',
                            '209px'
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
                            6629,
                            121,
                            "linear",
                            "${txt-accu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2962",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-obj}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2961",
                            "opacity",
                            8250,
                            127,
                            "linear",
                            "${txt-obj}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2995",
                            "opacity",
                            10250,
                            250,
                            "linear",
                            "${txt-obj}",
                            '1',
                            '0.20472440944882'
                        ],
                        [
                            "eid592",
                            "left",
                            3855,
                            662,
                            "linear",
                            "${crowd3}",
                            '-278px',
                            '73px'
                        ],
                        [
                            "eid593",
                            "left",
                            4517,
                            747,
                            "linear",
                            "${crowd3}",
                            '73px',
                            '471px'
                        ],
                        [
                            "eid594",
                            "left",
                            5265,
                            778,
                            "linear",
                            "${crowd3}",
                            '471px',
                            '801px'
                        ],
                        [
                            "eid595",
                            "left",
                            6043,
                            813,
                            "linear",
                            "${crowd3}",
                            '801px',
                            '1093px'
                        ],
                        [
                            "eid2575",
                            "skewX",
                            10000,
                            812,
                            "linear",
                            "${Yoyo-poster-small}",
                            '0deg',
                            '7.75deg'
                        ],
                        [
                            "eid2581",
                            "skewX",
                            10812,
                            1001,
                            "linear",
                            "${Yoyo-poster-small}",
                            '7.75deg',
                            '0deg'
                        ],
                        [
                            "eid2776",
                            "skewX",
                            22946,
                            912,
                            "linear",
                            "${Yoyo-poster-small}",
                            '0deg',
                            '7.75deg'
                        ],
                        [
                            "eid2777",
                            "skewX",
                            23858,
                            1125,
                            "linear",
                            "${Yoyo-poster-small}",
                            '7.75deg',
                            '0deg'
                        ],
                        [
                            "eid2980",
                            "top",
                            16426,
                            174,
                            "linear",
                            "${Text2}",
                            '-145px',
                            '37px'
                        ],
                        [
                            "eid3000",
                            "top",
                            25000,
                            250,
                            "linear",
                            "${Text2}",
                            '37px',
                            '-128px'
                        ],
                        [
                            "eid539",
                            "top",
                            1705,
                            261,
                            "linear",
                            "${crowd2}",
                            '95px',
                            '98px'
                        ],
                        [
                            "eid540",
                            "top",
                            1966,
                            231,
                            "linear",
                            "${crowd2}",
                            '98px',
                            '144px'
                        ],
                        [
                            "eid541",
                            "top",
                            2197,
                            197,
                            "linear",
                            "${crowd2}",
                            '144px',
                            '139px'
                        ],
                        [
                            "eid542",
                            "top",
                            2394,
                            286,
                            "linear",
                            "${crowd2}",
                            '139px',
                            '172px'
                        ],
                        [
                            "eid543",
                            "top",
                            2680,
                            264,
                            "linear",
                            "${crowd2}",
                            '172px',
                            '178px'
                        ],
                        [
                            "eid544",
                            "top",
                            2944,
                            217,
                            "linear",
                            "${crowd2}",
                            '178px',
                            '234px'
                        ],
                        [
                            "eid545",
                            "top",
                            3161,
                            305,
                            "linear",
                            "${crowd2}",
                            '234px',
                            '288px'
                        ],
                        [
                            "eid546",
                            "top",
                            3466,
                            282,
                            "linear",
                            "${crowd2}",
                            '288px',
                            '319px'
                        ],
                        [
                            "eid547",
                            "top",
                            3748,
                            316,
                            "linear",
                            "${crowd2}",
                            '319px',
                            '365px'
                        ],
                        [
                            "eid548",
                            "top",
                            4064,
                            250,
                            "linear",
                            "${crowd2}",
                            '365px',
                            '406px'
                        ],
                        [
                            "eid550",
                            "top",
                            4564,
                            185,
                            "linear",
                            "${crowd2}",
                            '406px',
                            '431px'
                        ],
                        [
                            "eid551",
                            "top",
                            4749,
                            208,
                            "linear",
                            "${crowd2}",
                            '431px',
                            '457px'
                        ],
                        [
                            "eid552",
                            "top",
                            4957,
                            240,
                            "linear",
                            "${crowd2}",
                            '457px',
                            '476px'
                        ],
                        [
                            "eid553",
                            "top",
                            5197,
                            258,
                            "linear",
                            "${crowd2}",
                            '476px',
                            '489px'
                        ],
                        [
                            "eid554",
                            "top",
                            5455,
                            263,
                            "linear",
                            "${crowd2}",
                            '489px',
                            '507px'
                        ],
                        [
                            "eid555",
                            "top",
                            5718,
                            256,
                            "linear",
                            "${crowd2}",
                            '507px',
                            '519px'
                        ],
                        [
                            "eid556",
                            "top",
                            5974,
                            238,
                            "linear",
                            "${crowd2}",
                            '519px',
                            '563px'
                        ],
                        [
                            "eid2811",
                            "top",
                            2750,
                            271,
                            "linear",
                            "${txt-AACCO}",
                            '-158px',
                            '92px'
                        ],
                        [
                            "eid2813",
                            "top",
                            3021,
                            90,
                            "linear",
                            "${txt-AACCO}",
                            '92px',
                            '17px'
                        ],
                        [
                            "eid2965",
                            "top",
                            9500,
                            98,
                            "linear",
                            "${txt-AACCO}",
                            '17px',
                            '82px'
                        ],
                        [
                            "eid2967",
                            "top",
                            9598,
                            152,
                            "linear",
                            "${txt-AACCO}",
                            '82px',
                            '-150px'
                        ],
                        [
                            "eid2551",
                            "left",
                            2000,
                            3114,
                            "linear",
                            "${signboard-outside}",
                            '-445px',
                            '-9px'
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
                            16426,
                            87,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3007",
                            "opacity",
                            25153,
                            97,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid486",
                            "top",
                            1038,
                            462,
                            "linear",
                            "${TextCopy}",
                            '196px',
                            '182px'
                        ],
                        [
                            "eid2528",
                            "top",
                            1500,
                            100,
                            "linear",
                            "${TextCopy}",
                            '182px',
                            '176px'
                        ],
                        [
                            "eid487",
                            "top",
                            1600,
                            497,
                            "linear",
                            "${TextCopy}",
                            '176px',
                            '183px'
                        ],
                        [
                            "eid2530",
                            "top",
                            2097,
                            203,
                            "linear",
                            "${TextCopy}",
                            '183px',
                            '185px'
                        ],
                        [
                            "eid2599",
                            "left",
                            10268,
                            558,
                            "linear",
                            "${spark2}",
                            '150px',
                            '3px'
                        ],
                        [
                            "eid2774",
                            "left",
                            23682,
                            558,
                            "linear",
                            "${spark2}",
                            '150px',
                            '3px'
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
                            2300,
                            295,
                            "linear",
                            "${text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2929",
                            "height",
                            7715,
                            310,
                            "linear",
                            "${txt-curr}",
                            '26px',
                            '128px'
                        ],
                        [
                            "eid2936",
                            "height",
                            8025,
                            90,
                            "linear",
                            "${txt-curr}",
                            '128px',
                            '62px'
                        ],
                        [
                            "eid3461",
                            "left",
                            23250,
                            0,
                            "linear",
                            "${Text2}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid582",
                            "top",
                            3855,
                            378,
                            "linear",
                            "${crowd3}",
                            '183px',
                            '187px'
                        ],
                        [
                            "eid583",
                            "top",
                            4233,
                            284,
                            "linear",
                            "${crowd3}",
                            '187px',
                            '169px'
                        ],
                        [
                            "eid584",
                            "top",
                            4517,
                            387,
                            "linear",
                            "${crowd3}",
                            '169px',
                            '189px'
                        ],
                        [
                            "eid585",
                            "top",
                            4904,
                            361,
                            "linear",
                            "${crowd3}",
                            '189px',
                            '179px'
                        ],
                        [
                            "eid586",
                            "top",
                            5265,
                            389,
                            "linear",
                            "${crowd3}",
                            '179px',
                            '184px'
                        ],
                        [
                            "eid587",
                            "top",
                            5654,
                            389,
                            "linear",
                            "${crowd3}",
                            '184px',
                            '163px'
                        ],
                        [
                            "eid588",
                            "top",
                            6043,
                            415,
                            "linear",
                            "${crowd3}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid589",
                            "top",
                            6458,
                            398,
                            "linear",
                            "${crowd3}",
                            '193px',
                            '183px'
                        ],
                            [ "eid3483", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Accuracy}', [] ] ],
                            [ "eid3482", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Author}', [] ] ]
                    ]
                }
            },
            "Author": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1044px', '783px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '1',
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(1,1,1,0.45)']
                        },
                        {
                            type: 'image',
                            id: 'yoyo-poster',
                            opacity: '0',
                            rect: ['46px', '92px', '284px', '358px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-poster.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'narrator-text-balloon-square',
                            opacity: '0',
                            rect: ['625px', '161px', '420px', '432px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon-square.png', '0px', '0px']
                        },
                        {
                            rect: ['672px', '355px', '342px', '112px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text4Copy5',
                            text: 'Look for phrases such as “Organised by”, “Presents”, by-lines or company logos.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['671px', '204px', '328px', '102px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text4Copy4',
                            text: 'One way to find the objective of the poster or event is to identify who the author is.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['664px', '218px', '328px', '37px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text4Copy3',
                            text: 'Other questions include:',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['682px', '264px', '310px', '75px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text4Copy6',
                            text: 'Did the organiser state the terms and conditions clearly',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['690px', '386px', '306px', '102px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text8',
                            text: 'Why did the organiser produce the poster in this manner',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy5',
                            opacity: '0',
                            rect: ['935px', '306px', '65px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy4',
                            opacity: '0',
                            rect: ['920px', '421px', '65px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['638px', '207px', '103px', '44px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text5',
                            text: 'Task:',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['741px', '209px', '291px', '122px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text6',
                            text: 'Identify the organiser.<br>Drag and drop the label \"Author\" onto the specific part in <br>the poster.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'narrator-text-balloon',
                            opacity: '0',
                            rect: ['802px', '29px', '144px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            rect: ['615px', '89px', '407px', '81px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [31, 'px'], 'rgba(3,64,143,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text3',
                            text: 'The creator or organiser for the event.',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['784px', '15px', '179px', '64px', 'auto', 'auto'],
                            id: 'txt-auth2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/txt-auth.png', '0px', '0px']
                        },
                        {
                            rect: ['140px', '474px', '208px', '113px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'droparea',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(1,1,1,0.451)']
                        },
                        {
                            type: 'image',
                            id: 'txt-auth3',
                            opacity: '0',
                            rect: ['784px', '15px', '179px', '64px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-auth.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['72px', '474px', '91px', '91px', 'auto', 'auto'],
                            id: 'right-select',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['966px', '3px', '66px', '60px', 'auto', 'auto'],
                            id: 'close-btn',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'well-done2Copy',
                            symbolName: 'well-done',
                            display: 'none',
                            rect: ['2px', '1px', '732', '259', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'oopsCopy',
                            symbolName: 'oops',
                            display: 'none',
                            rect: ['0px', '3px', '732', '266', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            rect: ['923px', '511px', '104px', '60px', 'auto', 'auto'],
                            display: 'none',
                            id: 'next_but',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next_but.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1044px', '587px']
                        }
                    }
                },
                timeline: {
                    duration: 28462,
                    autoPlay: true,
                    labels: {
                        "start": 40,
                        "rev": 250,
                        "skip1": 7250,
                        "skip2": 13297
                    },
                    data: [
                        [
                            "eid3358",
                            "height",
                            395,
                            175,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '19px',
                            '432px'
                        ],
                        [
                            "eid3469",
                            "left",
                            15705,
                            0,
                            "linear",
                            "${Text3}",
                            '615px',
                            '615px'
                        ],
                        [
                            "eid3341",
                            "width",
                            8133,
                            105,
                            "linear",
                            "${question-markCopy4}",
                            '65px',
                            '38px'
                        ],
                        [
                            "eid3364",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3365",
                            "opacity",
                            7678,
                            70,
                            "linear",
                            "${Text4Copy6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3366",
                            "opacity",
                            13400,
                            175,
                            "linear",
                            "${Text4Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3349",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3350",
                            "opacity",
                            7500,
                            70,
                            "linear",
                            "${Text4Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3351",
                            "opacity",
                            13400,
                            175,
                            "linear",
                            "${Text4Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3383",
                            "height",
                            14074,
                            95,
                            "linear",
                            "${txt-auth3}",
                            '64px',
                            '74px'
                        ],
                        [
                            "eid3390",
                            "height",
                            14169,
                            285,
                            "linear",
                            "${txt-auth3}",
                            '74px',
                            '64px'
                        ],
                        [
                            "eid3488",
                            "left",
                            11829,
                            0,
                            "linear",
                            "${close-btn}",
                            '966px',
                            '966px'
                        ],
                        [
                            "eid3486",
                            "height",
                            11829,
                            0,
                            "linear",
                            "${close-btn}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid3495",
                            "font-size",
                            11829,
                            3876,
                            "linear",
                            "${Text3}",
                            '31px',
                            '32px'
                        ],
                        [
                            "eid3340",
                            "left",
                            8133,
                            105,
                            "linear",
                            "${question-markCopy4}",
                            '920px',
                            '845px'
                        ],
                        [
                            "eid3337",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3338",
                            "opacity",
                            8063,
                            120,
                            "linear",
                            "${question-markCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3339",
                            "opacity",
                            13400,
                            175,
                            "linear",
                            "${question-markCopy4}",
                            '1',
                            '0.03999999910593'
                        ],
                        [
                            "eid3342",
                            "top",
                            7818,
                            105,
                            "linear",
                            "${question-markCopy5}",
                            '306px',
                            '326px'
                        ],
                        [
                            "eid3326",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3327",
                            "opacity",
                            13700,
                            168,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3312",
                            "height",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '358px',
                            '576px'
                        ],
                        [
                            "eid3601",
                            "display",
                            7325,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3602",
                            "display",
                            7370,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3603",
                            "display",
                            13400,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3604",
                            "display",
                            13446,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3598",
                            "display",
                            22462,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3363",
                            "top",
                            395,
                            175,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '154px',
                            '161px'
                        ],
                        [
                            "eid3395",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-auth3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3394",
                            "opacity",
                            14074,
                            55,
                            "linear",
                            "${txt-auth3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3542",
                            "display",
                            0,
                            0,
                            "linear",
                            "${well-done2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3468",
                            "top",
                            15705,
                            0,
                            "linear",
                            "${Text3}",
                            '89px',
                            '89px'
                        ],
                        [
                            "eid3385",
                            "left",
                            14074,
                            95,
                            "linear",
                            "${txt-auth3}",
                            '784px',
                            '765px'
                        ],
                        [
                            "eid3387",
                            "left",
                            14169,
                            285,
                            "linear",
                            "${txt-auth3}",
                            '765px',
                            '741px'
                        ],
                        [
                            "eid3371",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3370",
                            "opacity",
                            8000,
                            63,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3374",
                            "opacity",
                            13400,
                            175,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3296",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3297",
                            "opacity",
                            250,
                            95,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3348",
                            "width",
                            7818,
                            105,
                            "linear",
                            "${question-markCopy5}",
                            '65px',
                            '38px'
                        ],
                        [
                            "eid3343",
                            "height",
                            7818,
                            105,
                            "linear",
                            "${question-markCopy5}",
                            '102px',
                            '60px'
                        ],
                        [
                            "eid3386",
                            "top",
                            14074,
                            95,
                            "linear",
                            "${txt-auth3}",
                            '15px',
                            '1px'
                        ],
                        [
                            "eid3388",
                            "top",
                            14169,
                            285,
                            "linear",
                            "${txt-auth3}",
                            '1px',
                            '397px'
                        ],
                        [
                            "eid3314",
                            "left",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '46px',
                            '140px'
                        ],
                        [
                            "eid3538",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right-select}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3439",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3440",
                            "opacity",
                            250,
                            55,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3355",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3356",
                            "opacity",
                            1000,
                            70,
                            "linear",
                            "${Text4Copy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3357",
                            "opacity",
                            7325,
                            175,
                            "linear",
                            "${Text4Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3487",
                            "width",
                            11829,
                            0,
                            "linear",
                            "${close-btn}",
                            '66px',
                            '66px'
                        ],
                        [
                            "eid3384",
                            "width",
                            14074,
                            95,
                            "linear",
                            "${txt-auth3}",
                            '179px',
                            '206px'
                        ],
                        [
                            "eid3389",
                            "width",
                            14169,
                            285,
                            "linear",
                            "${txt-auth3}",
                            '206px',
                            '180px'
                        ],
                        [
                            "eid3315",
                            "top",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '92px',
                            '6px'
                        ],
                        [
                            "eid3489",
                            "top",
                            11829,
                            0,
                            "linear",
                            "${close-btn}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid3344",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3345",
                            "opacity",
                            7748,
                            120,
                            "linear",
                            "${question-markCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3346",
                            "opacity",
                            13400,
                            175,
                            "linear",
                            "${question-markCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3359",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3360",
                            "opacity",
                            395,
                            105,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3294",
                            "top",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '29px',
                            '58px'
                        ],
                        [
                            "eid3399",
                            "rotateZ",
                            14564,
                            149,
                            "linear",
                            "${txt-auth3}",
                            '0deg',
                            '-19deg'
                        ],
                        [
                            "eid3400",
                            "rotateZ",
                            14713,
                            151,
                            "linear",
                            "${txt-auth3}",
                            '-19deg',
                            '0deg'
                        ],
                        [
                            "eid3403",
                            "rotateZ",
                            14864,
                            156,
                            "linear",
                            "${txt-auth3}",
                            '0deg',
                            '23deg'
                        ],
                        [
                            "eid3404",
                            "rotateZ",
                            15020,
                            148,
                            "linear",
                            "${txt-auth3}",
                            '23deg',
                            '0deg'
                        ],
                        [
                            "eid3405",
                            "rotateZ",
                            15169,
                            145,
                            "linear",
                            "${txt-auth3}",
                            '0deg',
                            '-19deg'
                        ],
                        [
                            "eid3406",
                            "rotateZ",
                            15314,
                            147,
                            "linear",
                            "${txt-auth3}",
                            '-19deg',
                            '0deg'
                        ],
                        [
                            "eid3407",
                            "rotateZ",
                            15461,
                            141,
                            "linear",
                            "${txt-auth3}",
                            '0deg',
                            '23deg'
                        ],
                        [
                            "eid3408",
                            "rotateZ",
                            15602,
                            148,
                            "linear",
                            "${txt-auth3}",
                            '23deg',
                            '0deg'
                        ],
                        [
                            "eid3299",
                            "width",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '144px',
                            '445px'
                        ],
                        [
                            "eid3352",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3353",
                            "opacity",
                            500,
                            75,
                            "linear",
                            "${Text4Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3354",
                            "opacity",
                            7325,
                            175,
                            "linear",
                            "${Text4Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3466",
                            "width",
                            15705,
                            0,
                            "linear",
                            "${Text3}",
                            '407px',
                            '407px'
                        ],
                        [
                            "eid3303",
                            "opacity",
                            0,
                            95,
                            "linear",
                            "${yoyo-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3541",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oopsCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3292",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3293",
                            "opacity",
                            345,
                            50,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3324",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3325",
                            "opacity",
                            13700,
                            168,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3313",
                            "width",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster}",
                            '284px',
                            '457px'
                        ],
                        [
                            "eid3425",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3335",
                            "top",
                            8133,
                            105,
                            "linear",
                            "${question-markCopy4}",
                            '421px',
                            '444px'
                        ],
                        [
                            "eid3336",
                            "height",
                            8133,
                            105,
                            "linear",
                            "${question-markCopy4}",
                            '102px',
                            '60px'
                        ],
                        [
                            "eid3295",
                            "height",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '44px',
                            '134px'
                        ],
                        [
                            "eid3347",
                            "left",
                            7818,
                            105,
                            "linear",
                            "${question-markCopy5}",
                            '935px',
                            '775px'
                        ],
                        [
                            "eid3298",
                            "left",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '802px',
                            '607px'
                        ],
                            [ "eid3543", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${oopsCopy}', [] ] ],
                            [ "eid3544", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${well-done2Copy}', [] ] ]
                    ]
                }
            },
            "Accuracy": {
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
                            opacity: '0',
                            id: 'RoundRect2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.45)']
                        },
                        {
                            type: 'image',
                            id: 'yoyo-poster-blankCopy',
                            opacity: '0',
                            rect: ['48px', '87px', '289px', '364px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-poster-blank.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'c_missing',
                            opacity: '0',
                            rect: ['64px', '356px', '105px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-venue.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'd_missing',
                            opacity: '0',
                            rect: ['217px', '90px', '120px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-time.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_missing',
                            opacity: '0',
                            rect: ['183px', '363px', '147px', '77px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-prize.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'a_missing',
                            opacity: '0',
                            rect: ['48px', '107px', '169px', '38px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-date.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'narrator-text-balloon-square',
                            opacity: '0',
                            rect: ['625px', '228px', '420px', '368px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon-square.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Do the image and textual information in the poster complement each other',
                            id: 'Text4',
                            opacity: '0',
                            align: 'left',
                            rect: ['654px', '257px', '362px', '81px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Any missing information',
                            id: 'Text4Copy2',
                            opacity: '0',
                            align: 'left',
                            rect: ['654px', '386px', '362px', '81px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(3, 64, 143)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'If Yes, why was it left out',
                            id: 'Text4Copy',
                            opacity: '0',
                            align: 'left',
                            rect: ['654px', '465px', '362px', '47px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'question-mark',
                            opacity: '0',
                            rect: ['813px', '283px', '65px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy',
                            opacity: '0',
                            rect: ['745px', '426px', '65px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy2',
                            opacity: '0',
                            rect: ['950px', '504px', '65px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Task:',
                            id: 'Text5',
                            opacity: '0',
                            align: 'left',
                            rect: ['629px', '256px', '103px', '44px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Click on the information that is missing in the poster.',
                            id: 'Text6',
                            opacity: '0',
                            align: 'left',
                            rect: ['727px', '256px', '310px', '68px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Date',
                            id: 'Text7',
                            opacity: '0',
                            align: 'left',
                            rect: ['726px', '337px', '290px', '37px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Prizes',
                            id: 'Text7Copy',
                            opacity: '0',
                            align: 'left',
                            rect: ['726px', '386px', '290px', '37px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Venue',
                            id: 'Text7Copy2',
                            opacity: '0',
                            align: 'left',
                            rect: ['726px', '428px', '290px', '37px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Time',
                            id: 'Text7Copy3',
                            opacity: '0',
                            align: 'left',
                            rect: ['726px', '478px', '290px', '37px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'number-box',
                            opacity: '0',
                            rect: ['671px', '329px', '41px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/number-box.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['671px', '329px', '48px', '42px', 'auto', 'auto'],
                            id: 'a_tick',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/tick2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'number-boxCopy',
                            opacity: '0',
                            rect: ['671px', '377px', '41px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/number-box.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['671px', '377px', '48px', '42px', 'auto', 'auto'],
                            id: 'b_tick',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/tick2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'number-boxCopy2',
                            opacity: '0',
                            rect: ['671px', '426px', '41px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/number-box.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['671px', '426px', '48px', '42px', 'auto', 'auto'],
                            id: 'c_tick',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/tick2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'number-boxCopy3',
                            opacity: '0',
                            rect: ['671px', '475px', '41px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/number-box.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['671px', '475px', '48px', '42px', 'auto', 'auto'],
                            id: 'd_tick',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/tick2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['883px', '529px', '145px', '47px', 'auto', 'auto'],
                            display: 'none',
                            id: 'submit-btn',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/submit-btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'narrator-text-balloon',
                            opacity: '0',
                            rect: ['805px', '129px', '166px', '51px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(3,64,143,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Is the information in the poster correct and complete?',
                            id: 'Text3',
                            opacity: '0',
                            align: 'center',
                            rect: ['625px', '148px', '401px', '81px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'txt-accuCopy3',
                            opacity: '0',
                            rect: ['775px', '116px', '90px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-accu.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['954px', '9px', '77px', '70px', 'auto', 'auto'],
                            id: 'close-btn',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'a',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['670px', '324px', '330px', '47px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0.040650406504065',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'b',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['666px', '374px', '330px', '47px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0.040650406504065',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'c',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['666px', '425px', '330px', '47px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0.040650406504065',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'd',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['668px', '472px', '330px', '47px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0.040650406504065',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['2px', '1px', '732', '259', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'well-done',
                            id: 'well-done2',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '3px', '732', '266', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'oops',
                            id: 'oops',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            rect: ['926px', '517px', '104px', '60px', 'auto', 'auto'],
                            display: 'none',
                            id: 'next_but',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next_but.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '732px', '266px']
                        }
                    }
                },
                timeline: {
                    duration: 25250,
                    autoPlay: true,
                    labels: {
                        "start": 75,
                        "rev": 250,
                        "skip1": 5915
                    },
                    data: [
                        [
                            "eid3069",
                            "left",
                            0,
                            250,
                            "linear",
                            "${d_missing}",
                            '217px',
                            '406px'
                        ],
                        [
                            "eid3132",
                            "top",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '129px',
                            '122px'
                        ],
                        [
                            "eid3518",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3525",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${a_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3072",
                            "top",
                            0,
                            250,
                            "linear",
                            "${b_missing}",
                            '363px',
                            '445px'
                        ],
                        [
                            "eid3064",
                            "width",
                            0,
                            250,
                            "linear",
                            "${c_missing}",
                            '105px',
                            '166px'
                        ],
                        [
                            "eid3068",
                            "top",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster-blankCopy}",
                            '87px',
                            '6px'
                        ],
                        [
                            "eid3074",
                            "top",
                            0,
                            250,
                            "linear",
                            "${c_missing}",
                            '356px',
                            '431px'
                        ],
                        [
                            "eid3519",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3524",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${b_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3109",
                            "height",
                            0,
                            0,
                            "linear",
                            "${txt-accuCopy3}",
                            '25px',
                            '63px'
                        ],
                        [
                            "eid3510",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3514",
                            "display",
                            7648,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3071",
                            "left",
                            0,
                            250,
                            "linear",
                            "${b_missing}",
                            '183px',
                            '353px'
                        ],
                        [
                            "eid3191",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3192",
                            "opacity",
                            825,
                            120,
                            "linear",
                            "${question-markCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3216",
                            "opacity",
                            6200,
                            175,
                            "linear",
                            "${question-markCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3115",
                            "width",
                            0,
                            0,
                            "linear",
                            "${txt-accuCopy3}",
                            '90px',
                            '226px'
                        ],
                        [
                            "eid3226",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3230",
                            "opacity",
                            6500,
                            168,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3497",
                            "left",
                            11829,
                            0,
                            "linear",
                            "${Text6}",
                            '727px',
                            '727px'
                        ],
                        [
                            "eid3193",
                            "left",
                            895,
                            105,
                            "linear",
                            "${question-markCopy}",
                            '742px',
                            '962px'
                        ],
                        [
                            "eid3177",
                            "height",
                            570,
                            105,
                            "linear",
                            "${question-mark}",
                            '102px',
                            '60px'
                        ],
                        [
                            "eid3062",
                            "width",
                            0,
                            250,
                            "linear",
                            "${b_missing}",
                            '147px',
                            '233px'
                        ],
                        [
                            "eid3142",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3141",
                            "opacity",
                            345,
                            50,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3199",
                            "height",
                            1140,
                            105,
                            "linear",
                            "${question-markCopy2}",
                            '102px',
                            '60px'
                        ],
                        [
                            "eid3093",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${d_missing}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3135",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3137",
                            "opacity",
                            250,
                            95,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3491",
                            "width",
                            11829,
                            0,
                            "linear",
                            "${close-btn}",
                            '77px',
                            '77px'
                        ],
                        [
                            "eid3262",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${number-boxCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3271",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${number-boxCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3594",
                            "top",
                            25250,
                            0,
                            "linear",
                            "${close-btn}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid3188",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-mark}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3187",
                            "opacity",
                            500,
                            120,
                            "linear",
                            "${question-mark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3219",
                            "opacity",
                            6200,
                            175,
                            "linear",
                            "${question-mark}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3281",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${b_tick}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3261",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${number-boxCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3269",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${number-boxCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3530",
                            "display",
                            0,
                            0,
                            "linear",
                            "${well-done2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3520",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3523",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${c_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3059",
                            "height",
                            0,
                            250,
                            "linear",
                            "${d_missing}",
                            '44px',
                            '70px'
                        ],
                        [
                            "eid3263",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${number-boxCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3268",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${number-boxCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3113",
                            "left",
                            0,
                            0,
                            "linear",
                            "${txt-accuCopy3}",
                            '249px',
                            '775px'
                        ],
                        [
                            "eid3532",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oops}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3070",
                            "top",
                            0,
                            250,
                            "linear",
                            "${d_missing}",
                            '90px',
                            '9px'
                        ],
                        [
                            "eid3147",
                            "height",
                            395,
                            175,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '19px',
                            '368px'
                        ],
                        [
                            "eid3243",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3248",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${Text7Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3470",
                            "background-color",
                            7500,
                            0,
                            "linear",
                            "${RoundRect2Copy}",
                            'rgba(0,0,0,0.45)',
                            'rgba(0,0,0,0.45)'
                        ],
                        [
                            "eid3260",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${number-box}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3270",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${number-box}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3183",
                            "left",
                            570,
                            105,
                            "linear",
                            "${question-mark}",
                            '813px',
                            '943px'
                        ],
                        [
                            "eid3129",
                            "height",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '51px',
                            '134px'
                        ],
                        [
                            "eid3016",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3501",
                            "top",
                            11829,
                            0,
                            "linear",
                            "${Text6}",
                            '256px',
                            '256px'
                        ],
                        [
                            "eid3202",
                            "left",
                            1140,
                            105,
                            "linear",
                            "${question-markCopy2}",
                            '943px',
                            '962px'
                        ],
                        [
                            "eid3063",
                            "height",
                            0,
                            250,
                            "linear",
                            "${c_missing}",
                            '40px',
                            '64px'
                        ],
                        [
                            "eid3490",
                            "height",
                            11829,
                            0,
                            "linear",
                            "${close-btn}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid3492",
                            "font-size",
                            11829,
                            0,
                            "linear",
                            "${Text3}",
                            '27px',
                            '27px'
                        ],
                        [
                            "eid3182",
                            "top",
                            570,
                            105,
                            "linear",
                            "${question-mark}",
                            '283px',
                            '317px'
                        ],
                        [
                            "eid3157",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3164",
                            "opacity",
                            750,
                            75,
                            "linear",
                            "${Text4Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3217",
                            "opacity",
                            6200,
                            175,
                            "linear",
                            "${Text4Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3092",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${yoyo-poster-blankCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3200",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3201",
                            "opacity",
                            1070,
                            120,
                            "linear",
                            "${question-markCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3220",
                            "opacity",
                            6200,
                            175,
                            "linear",
                            "${question-markCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3240",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3249",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${Text7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3120",
                            "opacity",
                            0,
                            155,
                            "linear",
                            "${txt-accuCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3158",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3161",
                            "opacity",
                            500,
                            70,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3221",
                            "opacity",
                            6200,
                            175,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3593",
                            "left",
                            25250,
                            0,
                            "linear",
                            "${close-btn}",
                            '954px',
                            '954px'
                        ],
                        [
                            "eid3076",
                            "top",
                            0,
                            250,
                            "linear",
                            "${a_missing}",
                            '107px',
                            '36px'
                        ],
                        [
                            "eid3143",
                            "top",
                            395,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '255px',
                            '255px'
                        ],
                        [
                            "eid3145",
                            "top",
                            570,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '255px',
                            '227px'
                        ],
                        [
                            "eid3107",
                            "top",
                            0,
                            0,
                            "linear",
                            "${txt-accuCopy3}",
                            '69px',
                            '82px'
                        ],
                        [
                            "eid3095",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${a_missing}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3595",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3596",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3597",
                            "display",
                            6042,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3075",
                            "left",
                            0,
                            250,
                            "linear",
                            "${a_missing}",
                            '48px',
                            '140px'
                        ],
                        [
                            "eid3190",
                            "height",
                            895,
                            105,
                            "linear",
                            "${question-markCopy}",
                            '102px',
                            '60px'
                        ],
                        [
                            "eid3094",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${b_missing}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3065",
                            "height",
                            0,
                            250,
                            "linear",
                            "${a_missing}",
                            '38px',
                            '60px'
                        ],
                        [
                            "eid3156",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3168",
                            "opacity",
                            1000,
                            70,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3218",
                            "opacity",
                            6200,
                            175,
                            "linear",
                            "${Text4Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3511",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3515",
                            "display",
                            7648,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3067",
                            "left",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster-blankCopy}",
                            '48px',
                            '139px'
                        ],
                        [
                            "eid3508",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3512",
                            "display",
                            7648,
                            0,
                            "linear",
                            "${d}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3496",
                            "left",
                            11829,
                            0,
                            "linear",
                            "${Text3}",
                            '625px',
                            '625px'
                        ],
                        [
                            "eid3061",
                            "height",
                            0,
                            250,
                            "linear",
                            "${b_missing}",
                            '77px',
                            '121px'
                        ],
                        [
                            "eid3241",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3250",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${Text7Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3509",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3513",
                            "display",
                            7648,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3130",
                            "width",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '166px',
                            '445px'
                        ],
                        [
                            "eid3198",
                            "top",
                            1140,
                            105,
                            "linear",
                            "${question-markCopy2}",
                            '464px',
                            '451px'
                        ],
                        [
                            "eid3203",
                            "width",
                            1140,
                            105,
                            "linear",
                            "${question-markCopy2}",
                            '65px',
                            '38px'
                        ],
                        [
                            "eid3073",
                            "left",
                            0,
                            250,
                            "linear",
                            "${c_missing}",
                            '64px',
                            '162px'
                        ],
                        [
                            "eid3178",
                            "width",
                            570,
                            105,
                            "linear",
                            "${question-mark}",
                            '65px',
                            '38px'
                        ],
                        [
                            "eid3152",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3151",
                            "opacity",
                            395,
                            105,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3057",
                            "height",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster-blankCopy}",
                            '364px',
                            '576px'
                        ],
                        [
                            "eid3242",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3251",
                            "opacity",
                            7500,
                            148,
                            "linear",
                            "${Text7Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3096",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${c_missing}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3060",
                            "width",
                            0,
                            250,
                            "linear",
                            "${d_missing}",
                            '120px',
                            '197px'
                        ],
                        [
                            "eid3194",
                            "width",
                            895,
                            105,
                            "linear",
                            "${question-markCopy}",
                            '65px',
                            '38px'
                        ],
                        [
                            "eid3498",
                            "width",
                            11829,
                            0,
                            "linear",
                            "${Text6}",
                            '310px',
                            '310px'
                        ],
                        [
                            "eid3283",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${d_tick}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3494",
                            "width",
                            11829,
                            0,
                            "linear",
                            "${Text3}",
                            '401px',
                            '401px'
                        ],
                        [
                            "eid3280",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${a_tick}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3197",
                            "top",
                            895,
                            50,
                            "linear",
                            "${question-markCopy}",
                            '426px',
                            '378px'
                        ],
                        [
                            "eid3521",
                            "top",
                            945,
                            55,
                            "linear",
                            "${question-markCopy}",
                            '378px',
                            '380px'
                        ],
                        [
                            "eid3526",
                            "display",
                            0,
                            0,
                            "linear",
                            "${submit-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3282",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${c_tick}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3066",
                            "width",
                            0,
                            250,
                            "linear",
                            "${a_missing}",
                            '169px',
                            '268px'
                        ],
                        [
                            "eid3227",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3231",
                            "opacity",
                            6500,
                            168,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3058",
                            "width",
                            0,
                            250,
                            "linear",
                            "${yoyo-poster-blankCopy}",
                            '289px',
                            '457px'
                        ],
                        [
                            "eid3517",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3522",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${d_tick}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3438",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid3437",
                            "opacity",
                            250,
                            55,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid3131",
                            "left",
                            250,
                            145,
                            "linear",
                            "${narrator-text-balloon}",
                            '805px',
                            '605px'
                        ],
                            [ "eid3531", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${well-done2}', [] ] ],
                            [ "eid3535", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${oops}', [] ] ]
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
                            fill: ['rgba(248,163,163,1.00)']
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
            "_correct": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '634px', '311px', 'auto', 'auto'],
                            borderRadius: ['20px', '20px', '20px', '20px 20px'],
                            id: 'RoundRect2',
                            stroke: [5, 'rgba(244,183,48,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(247,243,195,0.94)']
                        },
                        {
                            type: 'text',
                            id: 'Text8',
                            text: 'You\'ve got it right!',
                            rect: ['94px', '50px', '442px', '61px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(70,78,70,1.00)', '800', 'none', '', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '644px', '321px']
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
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1040px', '581px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.7725)']
                        },
                        {
                            rect: ['219px', '178px', '526px', '156px', 'auto', 'auto'],
                            id: 'game_result1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/game%20result1.png', '0px', '0px']
                        },
                        {
                            rect: ['103px', '362px', '874px', '56px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text3Copy2',
                            text: 'Try again to get it all correct!',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            rect: ['502px', '418px', '122px', '40px', 'auto', 'auto'],
                            id: 'replay-btnCopy',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/replay-btn2.png', '0px', '0px']
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
                            "eid11318",
                            "top",
                            0,
                            182,
                            "linear",
                            "${game_result1}",
                            '240px',
                            '152px'
                        ],
                        [
                            "eid11319",
                            "top",
                            182,
                            68,
                            "linear",
                            "${game_result1}",
                            '152px',
                            '178px'
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
                            "eid11337",
                            "top",
                            250,
                            88,
                            "linear",
                            "${replay-btnCopy}",
                            '453px',
                            '425px'
                        ],
                        [
                            "eid3534",
                            "top",
                            338,
                            31,
                            "linear",
                            "${replay-btnCopy}",
                            '425px',
                            '418px'
                        ],
                        [
                            "eid3607",
                            "top",
                            369,
                            45,
                            "linear",
                            "${replay-btnCopy}",
                            '418px',
                            '418px'
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
                            "eid11341",
                            "left",
                            250,
                            88,
                            "linear",
                            "${replay-btnCopy}",
                            '534px',
                            '520px'
                        ],
                        [
                            "eid3533",
                            "left",
                            338,
                            31,
                            "linear",
                            "${replay-btnCopy}",
                            '520px',
                            '446px'
                        ],
                        [
                            "eid3606",
                            "left",
                            369,
                            45,
                            "linear",
                            "${replay-btnCopy}",
                            '446px',
                            '502px'
                        ],
                        [
                            "eid11323",
                            "left",
                            0,
                            182,
                            "linear",
                            "${game_result1}",
                            '377px',
                            '116px'
                        ],
                        [
                            "eid11324",
                            "left",
                            182,
                            68,
                            "linear",
                            "${game_result1}",
                            '116px',
                            '277px'
                        ],
                        [
                            "eid11330",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11329",
                            "opacity",
                            250,
                            119,
                            "linear",
                            "${Text3Copy2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("2_edgeActions.js");
})("EDGE-601893278");
