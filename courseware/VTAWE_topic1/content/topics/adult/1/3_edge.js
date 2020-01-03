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
                            rect: ['-323px', '-90px', '1085px', '767px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cafe-bg.jpg",'0px','0px'],
                            transform: [[],[],[],['1.07629','1.07629']]
                        },
                        {
                            id: 'cafe-bg-blur',
                            type: 'image',
                            rect: ['-373px', '-125px', '1400px', '989px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"cafe-bg-blur.jpg",'0px','0px']
                        },
                        {
                            id: 'khalid-cafe-arm2',
                            type: 'image',
                            rect: ['543px', '286px', '261px', '203px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"khalid-cafe-arm2.png",'0px','0px']
                        },
                        {
                            id: 'khalid-cafe-body',
                            type: 'image',
                            rect: ['1038px', '208px', '619px', '782px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"khalid-cafe-body.png",'0px','0px'],
                            transform: [[],['-3']]
                        },
                        {
                            id: 'khalid-cafe-uparm',
                            type: 'image',
                            rect: ['1426px', '335px', '236px', '156px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"khalid-cafe-uparm.png",'0px','0px'],
                            transform: [[],['-21']]
                        },
                        {
                            id: 'khalid-cafe-forearm',
                            type: 'image',
                            rect: ['703px', '331px', '145px', '194px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"khalid-cafe-forearm.png",'0px','0px'],
                            transform: [[],['-21']]
                        },
                        {
                            id: 'khalid-hand-phone',
                            type: 'image',
                            rect: ['609px', '204px', '128px', '194px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"khalid-hand-phone.png",'0px','0px']
                        },
                        {
                            id: 'khalid-lookdown',
                            type: 'image',
                            rect: ['1437px', '93px', '161px', '187px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"khalid-lookdown.png",'0px','0px']
                        },
                        {
                            id: 'khalid-blink1',
                            type: 'image',
                            rect: ['1437px', '93px', '161px', '187px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"khalid-blink1.png",'0px','0px']
                        },
                        {
                            id: 'khalid-laugh2',
                            type: 'image',
                            rect: ['1437px', '93px', '161px', '187px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"khalid-laugh.png",'0px','0px']
                        },
                        {
                            id: 'cafe-table',
                            type: 'image',
                            rect: ['49px', '335px', '726px', '544px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"cafe-table.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-39px', '-43px', '1088px', '686px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.67)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['93px', '-175px', '838px', '86px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Perceptions and Reactions",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(184,217,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'tweet-balloon',
                            type: 'image',
                            rect: ['647px', '202px', '52px', '49px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tweet-balloon.png",'0px','0px'],
                            transform: [[],[],[],['-1.0146']]
                        },
                        {
                            id: 'thumb-up',
                            type: 'image',
                            rect: ['619px', '44px', '120px', '104px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"thumb-up.png",'0px','0px']
                        },
                        {
                            id: 'network',
                            symbolName: 'network',
                            display: 'none',
                            type: 'rect',
                            rect: ['585', '23', '191', '188', 'auto', 'auto']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['83px', '32px', '623px', '125px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.88)"],
                            stroke: [5,"rgba(45,142,198,1.00)","solid"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['122px', '48px', '559px', '104px', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "Information can be created  and received  quickly  ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['152px', '79px', '451px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Easy to use devices",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(184, 217, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['152px', '79px', '589px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Extensive network connectivity ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [41, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(184, 217, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'hand-mobile',
                            type: 'image',
                            rect: ['-381px', '-41px', '838px', '1037px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"hand-mobile.png",'0px','0px']
                        },
                        {
                            id: 'khalid-post',
                            symbolName: 'khalid-post',
                            display: 'none',
                            type: 'rect',
                            rect: ['347px', '43px', '297', '501', 'auto', 'auto']
                        },
                        {
                            id: 'narrator-text-balloon-square',
                            type: 'image',
                            rect: ['512px', '125px', '410px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon-square.png",'0px','0px']
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['549px', '140px', '333px', '150px', 'auto', 'auto'],
                            opacity: '0',
                            text: "What are your perceptions and reactions?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [50, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'RoundRect3',
                            type: 'rect',
                            rect: ['14px', '-530px', '327px', '498px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.702)"],
                            stroke: [10,"rgb(45, 142, 198)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy',
                            type: 'rect',
                            rect: ['384px', '-530px', '599px', '498px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.702)"],
                            stroke: [10,"rgb(45, 142, 198)","solid"]
                        },
                        {
                            id: 'positive',
                            symbolName: 'positive',
                            display: 'none',
                            type: 'rect',
                            rect: ['469px', '60px', '413', '496', 'auto', 'auto']
                        },
                        {
                            id: 'good-bad',
                            symbolName: 'good-bad',
                            display: 'none',
                            type: 'rect',
                            rect: ['38px', '60px', '959', '1195', 'auto', 'auto']
                        },
                        {
                            id: 'negative',
                            symbolName: 'negative',
                            display: 'none',
                            type: 'rect',
                            rect: ['183px', '59px', '805', '1195', 'auto', 'auto']
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['439px', '132px', '510px', '79px', 'auto', 'auto'],
                            text: "Click on possible perceptions to see a reaction.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'txt-reaction',
                            type: 'image',
                            rect: ['378px', '-559px', '279px', '66px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-reaction.png",'0px','0px']
                        },
                        {
                            id: 'txt-perception',
                            type: 'image',
                            rect: ['7px', '-565px', '335px', '78px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-perception.png",'0px','0px']
                        },
                        {
                            id: 'positive-icon',
                            type: 'image',
                            rect: ['93px', '172px', '48px', '49px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"positive-icon.png",'0px','0px']
                        },
                        {
                            id: 'negative-icon',
                            type: 'image',
                            rect: ['75px', '484px', '53px', '50px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"negative-icon.png",'0px','0px']
                        },
                        {
                            id: 'good-bad-icon2',
                            type: 'image',
                            rect: ['239px', '326px', '62px', '86px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"good-bad-icon.png",'0px','0px']
                        },
                        {
                            id: 'next-btn',
                            type: 'image',
                            rect: ['784px', '481px', '204px', '66px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'a',
                            display: 'none',
                            type: 'rect',
                            rect: ['33px', '79px', '155px', '177px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'b',
                            display: 'none',
                            type: 'rect',
                            rect: ['203px', '239px', '145px', '214px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'c',
                            display: 'none',
                            type: 'rect',
                            rect: ['20px', '345px', '183px', '183px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
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
                    duration: 36343,
                    autoPlay: true,
                    labels: {
                        "s1": 26200,
                        "s2": 28700,
                        "s3": 32199
                    },
                    data: [
                        [
                            "eid16605",
                            "left",
                            1963,
                            387,
                            "linear",
                            "${khalid-blink1}",
                            '1437px',
                            '789px'
                        ],
                        [
                            "eid16751",
                            "left",
                            3566,
                            184,
                            "linear",
                            "${khalid-blink1}",
                            '789px',
                            '788px'
                        ],
                        [
                            "eid16903",
                            "left",
                            7437,
                            184,
                            "linear",
                            "${khalid-blink1}",
                            '788px',
                            '789px'
                        ],
                        [
                            "eid16929",
                            "left",
                            14798,
                            456,
                            "linear",
                            "${khalid-blink1}",
                            '789px',
                            '1455px'
                        ],
                        [
                            "eid17205",
                            "display",
                            0,
                            0,
                            "linear",
                            "${positive}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17204",
                            "display",
                            26200,
                            0,
                            "linear",
                            "${positive}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17479",
                            "display",
                            28700,
                            0,
                            "linear",
                            "${positive}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17480",
                            "display",
                            32199,
                            0,
                            "linear",
                            "${positive}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16637",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-cafe-uparm}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16633",
                            "opacity",
                            1963,
                            139,
                            "linear",
                            "${khalid-cafe-uparm}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17133",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-perception}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17132",
                            "opacity",
                            22162,
                            119,
                            "linear",
                            "${txt-perception}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17456",
                            "opacity",
                            36152,
                            85,
                            "linear",
                            "${txt-perception}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17049",
                            "left",
                            17126,
                            211,
                            "linear",
                            "${khalid-post}",
                            '347px',
                            '44px'
                        ],
                        [
                            "eid16695",
                            "width",
                            3180,
                            157,
                            "linear",
                            "${RoundRect}",
                            '44px',
                            '468px'
                        ],
                        [
                            "eid16775",
                            "width",
                            4392,
                            157,
                            "linear",
                            "${RoundRect}",
                            '468px',
                            '44px'
                        ],
                        [
                            "eid16838",
                            "width",
                            4621,
                            157,
                            "linear",
                            "${RoundRect}",
                            '44px',
                            '579px'
                        ],
                        [
                            "eid16844",
                            "width",
                            6898,
                            157,
                            "linear",
                            "${RoundRect}",
                            '579px',
                            '44px'
                        ],
                        [
                            "eid16888",
                            "width",
                            7089,
                            198,
                            "linear",
                            "${RoundRect}",
                            '44px',
                            '623px'
                        ],
                        [
                            "eid17198",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${good-bad-icon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17202",
                            "opacity",
                            22538,
                            88,
                            "linear",
                            "${good-bad-icon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17432",
                            "opacity",
                            35999,
                            62,
                            "linear",
                            "${good-bad-icon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16708",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16707",
                            "opacity",
                            3289,
                            48,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16772",
                            "opacity",
                            4392,
                            48,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17471",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17474",
                            "display",
                            25996,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16643",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-blink1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16646",
                            "opacity",
                            2547,
                            93,
                            "linear",
                            "${khalid-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16649",
                            "opacity",
                            2683,
                            67,
                            "linear",
                            "${khalid-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16754",
                            "opacity",
                            4750,
                            93,
                            "linear",
                            "${khalid-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16755",
                            "opacity",
                            4886,
                            67,
                            "linear",
                            "${khalid-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16756",
                            "opacity",
                            6500,
                            93,
                            "linear",
                            "${khalid-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16757",
                            "opacity",
                            6636,
                            67,
                            "linear",
                            "${khalid-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16908",
                            "opacity",
                            14705,
                            93,
                            "linear",
                            "${khalid-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16909",
                            "opacity",
                            14841,
                            67,
                            "linear",
                            "${khalid-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16726",
                            "top",
                            3500,
                            180,
                            "linear",
                            "${khalid-hand-phone}",
                            '193px',
                            '204px'
                        ],
                        [
                            "eid17113",
                            "top",
                            22162,
                            250,
                            "linear",
                            "${RoundRect3}",
                            '-530px',
                            '48px'
                        ],
                        [
                            "eid17461",
                            "top",
                            36059,
                            178,
                            "linear",
                            "${RoundRect3}",
                            '48px',
                            '-530px'
                        ],
                        [
                            "eid17134",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-reaction}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17130",
                            "opacity",
                            22162,
                            119,
                            "linear",
                            "${txt-reaction}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17458",
                            "opacity",
                            36152,
                            85,
                            "linear",
                            "${txt-reaction}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17472",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17475",
                            "display",
                            25996,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16658",
                            "height",
                            2750,
                            144,
                            "linear",
                            "${tweet-balloon}",
                            '49px',
                            '229px'
                        ],
                        [
                            "eid16665",
                            "height",
                            2894,
                            71,
                            "linear",
                            "${tweet-balloon}",
                            '229px',
                            '203px'
                        ],
                        [
                            "eid16866",
                            "height",
                            7012,
                            71,
                            "linear",
                            "${tweet-balloon}",
                            '203px',
                            '229px'
                        ],
                        [
                            "eid16865",
                            "height",
                            7083,
                            144,
                            "linear",
                            "${tweet-balloon}",
                            '229px',
                            '49px'
                        ],
                        [
                            "eid16769",
                            "rotateZ",
                            5163,
                            202,
                            "linear",
                            "${khalid-cafe-arm2}",
                            '-6deg',
                            '0deg'
                        ],
                        [
                            "eid16659",
                            "top",
                            2750,
                            144,
                            "linear",
                            "${tweet-balloon}",
                            '202px',
                            '6px'
                        ],
                        [
                            "eid16663",
                            "top",
                            2894,
                            71,
                            "linear",
                            "${tweet-balloon}",
                            '6px',
                            '23px'
                        ],
                        [
                            "eid16864",
                            "top",
                            7012,
                            71,
                            "linear",
                            "${tweet-balloon}",
                            '23px',
                            '6px'
                        ],
                        [
                            "eid16863",
                            "top",
                            7083,
                            144,
                            "linear",
                            "${tweet-balloon}",
                            '6px',
                            '202px'
                        ],
                        [
                            "eid16568",
                            "top",
                            0,
                            2421,
                            "linear",
                            "${bookshop}",
                            '28px',
                            '-52px'
                        ],
                        [
                            "eid16955",
                            "top",
                            14705,
                            633,
                            "linear",
                            "${bookshop}",
                            '-52px',
                            '-90px'
                        ],
                        [
                            "eid16889",
                            "height",
                            7089,
                            198,
                            "linear",
                            "${RoundRect}",
                            '87px',
                            '125px'
                        ],
                        [
                            "eid16752",
                            "top",
                            3566,
                            184,
                            "linear",
                            "${khalid-lookdown}",
                            '93px',
                            '95px'
                        ],
                        [
                            "eid16905",
                            "top",
                            7437,
                            184,
                            "linear",
                            "${khalid-lookdown}",
                            '95px',
                            '93px'
                        ],
                        [
                            "eid16747",
                            "rotateZ",
                            3566,
                            184,
                            "linear",
                            "${khalid-lookdown}",
                            '0deg',
                            '-3deg'
                        ],
                        [
                            "eid16907",
                            "rotateZ",
                            7437,
                            184,
                            "linear",
                            "${khalid-lookdown}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid16896",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid16895",
                            "opacity",
                            7287,
                            86,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16897",
                            "opacity",
                            14908,
                            86,
                            "linear",
                            "${Text3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid16604",
                            "left",
                            1963,
                            387,
                            "linear",
                            "${khalid-cafe-uparm}",
                            '1426px',
                            '778px'
                        ],
                        [
                            "eid16928",
                            "left",
                            14798,
                            456,
                            "linear",
                            "${khalid-cafe-uparm}",
                            '778px',
                            '1444px'
                        ],
                        [
                            "eid17188",
                            "left",
                            22709,
                            119,
                            "linear",
                            "${negative-icon}",
                            '75px',
                            '19px'
                        ],
                        [
                            "eid17189",
                            "left",
                            22828,
                            84,
                            "linear",
                            "${negative-icon}",
                            '19px',
                            '45px'
                        ],
                        [
                            "eid17443",
                            "left",
                            35798,
                            59,
                            "linear",
                            "${negative-icon}",
                            '45px',
                            '19px'
                        ],
                        [
                            "eid17442",
                            "left",
                            35857,
                            84,
                            "linear",
                            "${negative-icon}",
                            '19px',
                            '75px'
                        ],
                        [
                            "eid17196",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${positive-icon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17201",
                            "opacity",
                            22412,
                            88,
                            "linear",
                            "${positive-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17450",
                            "opacity",
                            36087,
                            62,
                            "linear",
                            "${positive-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16945",
                            "left",
                            14908,
                            346,
                            "linear",
                            "${cafe-table}",
                            '49px',
                            '75px'
                        ],
                        [
                            "eid16635",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-hand-phone}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16629",
                            "opacity",
                            1963,
                            139,
                            "linear",
                            "${khalid-hand-phone}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17185",
                            "height",
                            22709,
                            119,
                            "linear",
                            "${negative-icon}",
                            '50px',
                            '187px'
                        ],
                        [
                            "eid17192",
                            "height",
                            22828,
                            84,
                            "linear",
                            "${negative-icon}",
                            '187px',
                            '155px'
                        ],
                        [
                            "eid17440",
                            "height",
                            35798,
                            59,
                            "linear",
                            "${negative-icon}",
                            '155px',
                            '187px'
                        ],
                        [
                            "eid17439",
                            "height",
                            35857,
                            84,
                            "linear",
                            "${negative-icon}",
                            '187px',
                            '50px'
                        ],
                        [
                            "eid16723",
                            "top",
                            3500,
                            180,
                            "linear",
                            "${khalid-cafe-forearm}",
                            '329px',
                            '331px'
                        ],
                        [
                            "eid16572",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16573",
                            "opacity",
                            500,
                            141,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16574",
                            "opacity",
                            1963,
                            139,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16748",
                            "top",
                            3566,
                            184,
                            "linear",
                            "${khalid-laugh2}",
                            '93px',
                            '95px'
                        ],
                        [
                            "eid16899",
                            "top",
                            7437,
                            184,
                            "linear",
                            "${khalid-laugh2}",
                            '95px',
                            '93px'
                        ],
                        [
                            "eid17187",
                            "width",
                            22709,
                            119,
                            "linear",
                            "${negative-icon}",
                            '53px',
                            '194px'
                        ],
                        [
                            "eid17191",
                            "width",
                            22828,
                            84,
                            "linear",
                            "${negative-icon}",
                            '194px',
                            '161px'
                        ],
                        [
                            "eid17445",
                            "width",
                            35798,
                            59,
                            "linear",
                            "${negative-icon}",
                            '161px',
                            '194px'
                        ],
                        [
                            "eid17444",
                            "width",
                            35857,
                            84,
                            "linear",
                            "${negative-icon}",
                            '194px',
                            '53px'
                        ],
                        [
                            "eid16764",
                            "top",
                            5163,
                            202,
                            "linear",
                            "${khalid-cafe-arm2}",
                            '296px',
                            '286px'
                        ],
                        [
                            "eid17073",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17080",
                            "opacity",
                            17337,
                            105,
                            "linear",
                            "${Text7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17103",
                            "opacity",
                            22250,
                            119,
                            "linear",
                            "${Text7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16681",
                            "width",
                            2894,
                            185,
                            "linear",
                            "${thumb-up}",
                            '120px',
                            '152px'
                        ],
                        [
                            "eid16781",
                            "width",
                            4436,
                            185,
                            "linear",
                            "${thumb-up}",
                            '152px',
                            '120px'
                        ],
                        [
                            "eid16660",
                            "left",
                            2750,
                            144,
                            "linear",
                            "${tweet-balloon}",
                            '647px',
                            '570px'
                        ],
                        [
                            "eid16662",
                            "left",
                            2894,
                            71,
                            "linear",
                            "${tweet-balloon}",
                            '570px',
                            '564px'
                        ],
                        [
                            "eid16869",
                            "left",
                            7012,
                            71,
                            "linear",
                            "${tweet-balloon}",
                            '564px',
                            '570px'
                        ],
                        [
                            "eid16868",
                            "left",
                            7083,
                            144,
                            "linear",
                            "${tweet-balloon}",
                            '570px',
                            '647px'
                        ],
                        [
                            "eid16694",
                            "left",
                            3180,
                            157,
                            "linear",
                            "${RoundRect}",
                            '562px',
                            '120px'
                        ],
                        [
                            "eid16774",
                            "left",
                            4392,
                            157,
                            "linear",
                            "${RoundRect}",
                            '120px',
                            '562px'
                        ],
                        [
                            "eid16837",
                            "left",
                            4621,
                            157,
                            "linear",
                            "${RoundRect}",
                            '562px',
                            '9px'
                        ],
                        [
                            "eid16843",
                            "left",
                            6898,
                            157,
                            "linear",
                            "${RoundRect}",
                            '9px',
                            '562px'
                        ],
                        [
                            "eid16887",
                            "left",
                            7089,
                            198,
                            "linear",
                            "${RoundRect}",
                            '562px',
                            '83px'
                        ],
                        [
                            "eid16956",
                            "left",
                            14705,
                            633,
                            "linear",
                            "${bookshop}",
                            '34px',
                            '-323px'
                        ],
                        [
                            "eid16968",
                            "left",
                            15456,
                            391,
                            "linear",
                            "${hand-mobile}",
                            '-438px',
                            '-62px'
                        ],
                        [
                            "eid16972",
                            "left",
                            15847,
                            224,
                            "linear",
                            "${hand-mobile}",
                            '-62px',
                            '-78px'
                        ],
                        [
                            "eid17050",
                            "left",
                            17126,
                            211,
                            "linear",
                            "${hand-mobile}",
                            '-78px',
                            '-381px'
                        ],
                        [
                            "eid16942",
                            "height",
                            14908,
                            346,
                            "linear",
                            "${cafe-table}",
                            '544px',
                            '671px'
                        ],
                        [
                            "eid17136",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17129",
                            "opacity",
                            22162,
                            119,
                            "linear",
                            "${RoundRect3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17462",
                            "opacity",
                            36152,
                            85,
                            "linear",
                            "${RoundRect3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17170",
                            "top",
                            22540,
                            133,
                            "linear",
                            "${good-bad-icon2}",
                            '326px',
                            '160px'
                        ],
                        [
                            "eid17174",
                            "top",
                            22673,
                            100,
                            "linear",
                            "${good-bad-icon2}",
                            '160px',
                            '237px'
                        ],
                        [
                            "eid17429",
                            "top",
                            35896,
                            70,
                            "linear",
                            "${good-bad-icon2}",
                            '237px',
                            '160px'
                        ],
                        [
                            "eid17428",
                            "top",
                            35966,
                            93,
                            "linear",
                            "${good-bad-icon2}",
                            '160px',
                            '326px'
                        ],
                        [
                            "eid16944",
                            "width",
                            14908,
                            346,
                            "linear",
                            "${cafe-table}",
                            '726px',
                            '896px'
                        ],
                        [
                            "eid17470",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17473",
                            "display",
                            25996,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16603",
                            "left",
                            1963,
                            387,
                            "linear",
                            "${khalid-cafe-body}",
                            '1038px',
                            '390px'
                        ],
                        [
                            "eid16926",
                            "left",
                            14798,
                            456,
                            "linear",
                            "${khalid-cafe-body}",
                            '390px',
                            '1056px'
                        ],
                        [
                            "eid16745",
                            "rotateZ",
                            3566,
                            184,
                            "linear",
                            "${khalid-laugh2}",
                            '0deg',
                            '-3deg'
                        ],
                        [
                            "eid16901",
                            "rotateZ",
                            7437,
                            184,
                            "linear",
                            "${khalid-laugh2}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid17055",
                            "left",
                            17337,
                            179,
                            "linear",
                            "${Text7}",
                            '1041px',
                            '407px'
                        ],
                        [
                            "eid17057",
                            "left",
                            17516,
                            120,
                            "linear",
                            "${Text7}",
                            '407px',
                            '549px'
                        ],
                        [
                            "eid16700",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16699",
                            "opacity",
                            3180,
                            109,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16773",
                            "opacity",
                            4440,
                            109,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16836",
                            "opacity",
                            4621,
                            109,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16842",
                            "opacity",
                            6946,
                            109,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16878",
                            "opacity",
                            7287,
                            86,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16898",
                            "opacity",
                            14908,
                            86,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16831",
                            "left",
                            4730,
                            48,
                            "linear",
                            "${Text2Copy}",
                            '152px',
                            '9px'
                        ],
                        [
                            "eid16832",
                            "left",
                            6898,
                            48,
                            "linear",
                            "${Text2Copy}",
                            '9px',
                            '152px'
                        ],
                        [
                            "eid17485",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17484",
                            "display",
                            22828,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17482",
                            "display",
                            25996,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid17483",
                            "display",
                            26055,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16957",
                            "width",
                            14705,
                            633,
                            "linear",
                            "${bookshop}",
                            '1085px',
                            '1301px'
                        ],
                        [
                            "eid17135",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17131",
                            "opacity",
                            22162,
                            119,
                            "linear",
                            "${RoundRect3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17460",
                            "opacity",
                            36152,
                            85,
                            "linear",
                            "${RoundRect3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16636",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-cafe-forearm}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16631",
                            "opacity",
                            1963,
                            139,
                            "linear",
                            "${khalid-cafe-forearm}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16724",
                            "rotateZ",
                            3500,
                            180,
                            "linear",
                            "${khalid-hand-phone}",
                            '0deg',
                            '-5deg'
                        ],
                        [
                            "eid17424",
                            "display",
                            0,
                            0,
                            "linear",
                            "${negative}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17477",
                            "display",
                            26200,
                            0,
                            "linear",
                            "${negative}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17478",
                            "display",
                            28700,
                            0,
                            "linear",
                            "${negative}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17425",
                            "display",
                            32199,
                            0,
                            "linear",
                            "${negative}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17377",
                            "display",
                            0,
                            0,
                            "linear",
                            "${good-bad}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17476",
                            "display",
                            26200,
                            0,
                            "linear",
                            "${good-bad}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17376",
                            "display",
                            28700,
                            0,
                            "linear",
                            "${good-bad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17481",
                            "display",
                            32199,
                            0,
                            "linear",
                            "${good-bad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17146",
                            "top",
                            22412,
                            126,
                            "linear",
                            "${positive-icon}",
                            '172px',
                            '43px'
                        ],
                        [
                            "eid17150",
                            "top",
                            22538,
                            79,
                            "linear",
                            "${positive-icon}",
                            '43px',
                            '87px'
                        ],
                        [
                            "eid17447",
                            "top",
                            36005,
                            55,
                            "linear",
                            "${positive-icon}",
                            '87px',
                            '43px'
                        ],
                        [
                            "eid17446",
                            "top",
                            36061,
                            89,
                            "linear",
                            "${positive-icon}",
                            '43px',
                            '172px'
                        ],
                        [
                            "eid16890",
                            "top",
                            7089,
                            198,
                            "linear",
                            "${RoundRect}",
                            '57px',
                            '32px'
                        ],
                        [
                            "eid16721",
                            "rotateZ",
                            3500,
                            180,
                            "linear",
                            "${khalid-cafe-forearm}",
                            '-21deg',
                            '-26deg'
                        ],
                        [
                            "eid16602",
                            "left",
                            1963,
                            387,
                            "linear",
                            "${khalid-cafe-arm2}",
                            '1200px',
                            '552px'
                        ],
                        [
                            "eid16770",
                            "left",
                            5163,
                            202,
                            "linear",
                            "${khalid-cafe-arm2}",
                            '552px',
                            '543px'
                        ],
                        [
                            "eid16927",
                            "left",
                            14798,
                            456,
                            "linear",
                            "${khalid-cafe-arm2}",
                            '543px',
                            '1209px'
                        ],
                        [
                            "eid17091",
                            "top",
                            22066,
                            303,
                            "linear",
                            "${khalid-post}",
                            '43px',
                            '669px'
                        ],
                        [
                            "eid16609",
                            "left",
                            1963,
                            387,
                            "linear",
                            "${khalid-laugh2}",
                            '1437px',
                            '789px'
                        ],
                        [
                            "eid16749",
                            "left",
                            3566,
                            184,
                            "linear",
                            "${khalid-laugh2}",
                            '789px',
                            '788px'
                        ],
                        [
                            "eid16900",
                            "left",
                            7437,
                            184,
                            "linear",
                            "${khalid-laugh2}",
                            '788px',
                            '789px'
                        ],
                        [
                            "eid16933",
                            "left",
                            14798,
                            456,
                            "linear",
                            "${khalid-laugh2}",
                            '789px',
                            '1455px'
                        ],
                        [
                            "eid16976",
                            "display",
                            0,
                            0,
                            "linear",
                            "${khalid-post}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16975",
                            "display",
                            16071,
                            0,
                            "linear",
                            "${khalid-post}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17094",
                            "display",
                            22369,
                            0,
                            "linear",
                            "${khalid-post}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16606",
                            "left",
                            1963,
                            387,
                            "linear",
                            "${khalid-lookdown}",
                            '1437px',
                            '789px'
                        ],
                        [
                            "eid16753",
                            "left",
                            3566,
                            184,
                            "linear",
                            "${khalid-lookdown}",
                            '789px',
                            '788px'
                        ],
                        [
                            "eid16906",
                            "left",
                            7437,
                            184,
                            "linear",
                            "${khalid-lookdown}",
                            '788px',
                            '789px'
                        ],
                        [
                            "eid16930",
                            "left",
                            14798,
                            456,
                            "linear",
                            "${khalid-lookdown}",
                            '789px',
                            '1455px'
                        ],
                        [
                            "eid17090",
                            "top",
                            22066,
                            303,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '125px',
                            '751px'
                        ],
                        [
                            "eid16682",
                            "left",
                            2894,
                            185,
                            "linear",
                            "${thumb-up}",
                            '619px',
                            '602px'
                        ],
                        [
                            "eid16780",
                            "left",
                            4436,
                            185,
                            "linear",
                            "${thumb-up}",
                            '602px',
                            '619px'
                        ],
                        [
                            "eid16607",
                            "left",
                            1963,
                            387,
                            "linear",
                            "${khalid-cafe-forearm}",
                            '1348px',
                            '700px'
                        ],
                        [
                            "eid16722",
                            "left",
                            3500,
                            180,
                            "linear",
                            "${khalid-cafe-forearm}",
                            '700px',
                            '703px'
                        ],
                        [
                            "eid16931",
                            "left",
                            14798,
                            456,
                            "linear",
                            "${khalid-cafe-forearm}",
                            '703px',
                            '1369px'
                        ],
                        [
                            "eid17102",
                            "opacity",
                            22250,
                            119,
                            "linear",
                            "${hand-mobile}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16639",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-cafe-arm2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16632",
                            "opacity",
                            1963,
                            139,
                            "linear",
                            "${khalid-cafe-arm2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16670",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tweet-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16669",
                            "opacity",
                            2750,
                            144,
                            "linear",
                            "${tweet-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16867",
                            "opacity",
                            7083,
                            144,
                            "linear",
                            "${tweet-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17172",
                            "left",
                            22540,
                            133,
                            "linear",
                            "${good-bad-icon2}",
                            '239px',
                            '177px'
                        ],
                        [
                            "eid17173",
                            "left",
                            22673,
                            100,
                            "linear",
                            "${good-bad-icon2}",
                            '177px',
                            '187px'
                        ],
                        [
                            "eid17434",
                            "left",
                            35896,
                            70,
                            "linear",
                            "${good-bad-icon2}",
                            '187px',
                            '177px'
                        ],
                        [
                            "eid17433",
                            "left",
                            35966,
                            93,
                            "linear",
                            "${good-bad-icon2}",
                            '177px',
                            '239px'
                        ],
                        [
                            "eid16750",
                            "top",
                            3566,
                            184,
                            "linear",
                            "${khalid-blink1}",
                            '93px',
                            '95px'
                        ],
                        [
                            "eid16902",
                            "top",
                            7437,
                            184,
                            "linear",
                            "${khalid-blink1}",
                            '95px',
                            '93px'
                        ],
                        [
                            "eid16642",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-laugh2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16760",
                            "opacity",
                            3180,
                            188,
                            "linear",
                            "${khalid-laugh2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16761",
                            "opacity",
                            3957,
                            188,
                            "linear",
                            "${khalid-laugh2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16872",
                            "opacity",
                            5469,
                            188,
                            "linear",
                            "${khalid-laugh2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16873",
                            "opacity",
                            6246,
                            188,
                            "linear",
                            "${khalid-laugh2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17115",
                            "top",
                            22162,
                            250,
                            "linear",
                            "${RoundRect3Copy}",
                            '-530px',
                            '48px'
                        ],
                        [
                            "eid17459",
                            "top",
                            36059,
                            178,
                            "linear",
                            "${RoundRect3Copy}",
                            '48px',
                            '-530px'
                        ],
                        [
                            "eid17186",
                            "top",
                            22709,
                            119,
                            "linear",
                            "${negative-icon}",
                            '484px',
                            '345px'
                        ],
                        [
                            "eid17190",
                            "top",
                            22828,
                            84,
                            "linear",
                            "${negative-icon}",
                            '345px',
                            '381px'
                        ],
                        [
                            "eid17438",
                            "top",
                            35798,
                            59,
                            "linear",
                            "${negative-icon}",
                            '381px',
                            '345px'
                        ],
                        [
                            "eid17437",
                            "top",
                            35857,
                            84,
                            "linear",
                            "${negative-icon}",
                            '345px',
                            '484px'
                        ],
                        [
                            "eid17116",
                            "top",
                            22162,
                            250,
                            "linear",
                            "${txt-perception}",
                            '-565px',
                            '13px'
                        ],
                        [
                            "eid17455",
                            "top",
                            36059,
                            178,
                            "linear",
                            "${txt-perception}",
                            '13px',
                            '-565px'
                        ],
                        [
                            "eid17145",
                            "height",
                            22412,
                            126,
                            "linear",
                            "${positive-icon}",
                            '49px',
                            '177px'
                        ],
                        [
                            "eid17152",
                            "height",
                            22538,
                            79,
                            "linear",
                            "${positive-icon}",
                            '177px',
                            '153px'
                        ],
                        [
                            "eid17449",
                            "height",
                            36005,
                            55,
                            "linear",
                            "${positive-icon}",
                            '153px',
                            '177px'
                        ],
                        [
                            "eid17448",
                            "height",
                            36061,
                            89,
                            "linear",
                            "${positive-icon}",
                            '177px',
                            '49px'
                        ],
                        [
                            "eid17147",
                            "width",
                            22412,
                            126,
                            "linear",
                            "${positive-icon}",
                            '48px',
                            '174px'
                        ],
                        [
                            "eid17151",
                            "width",
                            22538,
                            79,
                            "linear",
                            "${positive-icon}",
                            '174px',
                            '151px'
                        ],
                        [
                            "eid17454",
                            "width",
                            36005,
                            55,
                            "linear",
                            "${positive-icon}",
                            '151px',
                            '174px'
                        ],
                        [
                            "eid17453",
                            "width",
                            36061,
                            89,
                            "linear",
                            "${positive-icon}",
                            '174px',
                            '48px'
                        ],
                        [
                            "eid16634",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-lookdown}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16630",
                            "opacity",
                            1963,
                            139,
                            "linear",
                            "${khalid-lookdown}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17114",
                            "top",
                            22162,
                            250,
                            "linear",
                            "${txt-reaction}",
                            '-559px',
                            '19px'
                        ],
                        [
                            "eid17457",
                            "top",
                            36059,
                            178,
                            "linear",
                            "${txt-reaction}",
                            '19px',
                            '-559px'
                        ],
                        [
                            "eid16585",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cafe-table}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16584",
                            "opacity",
                            1250,
                            162,
                            "linear",
                            "${cafe-table}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17197",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${negative-icon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17203",
                            "opacity",
                            22709,
                            88,
                            "linear",
                            "${negative-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17441",
                            "opacity",
                            35879,
                            62,
                            "linear",
                            "${negative-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17092",
                            "top",
                            22066,
                            303,
                            "linear",
                            "${Text7}",
                            '140px',
                            '766px'
                        ],
                        [
                            "eid16746",
                            "rotateZ",
                            3566,
                            184,
                            "linear",
                            "${khalid-blink1}",
                            '0deg',
                            '-3deg'
                        ],
                        [
                            "eid16904",
                            "rotateZ",
                            7437,
                            184,
                            "linear",
                            "${khalid-blink1}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid16954",
                            "height",
                            14705,
                            633,
                            "linear",
                            "${bookshop}",
                            '767px',
                            '919px'
                        ],
                        [
                            "eid17072",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17081",
                            "opacity",
                            17337,
                            105,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17101",
                            "opacity",
                            22250,
                            119,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16969",
                            "top",
                            15456,
                            391,
                            "linear",
                            "${hand-mobile}",
                            '582px',
                            '-75px'
                        ],
                        [
                            "eid16973",
                            "top",
                            15847,
                            224,
                            "linear",
                            "${hand-mobile}",
                            '-75px',
                            '-43px'
                        ],
                        [
                            "eid17093",
                            "top",
                            22066,
                            303,
                            "linear",
                            "${hand-mobile}",
                            '-43px',
                            '583px'
                        ],
                        [
                            "eid16661",
                            "width",
                            2750,
                            144,
                            "linear",
                            "${tweet-balloon}",
                            '52px',
                            '217px'
                        ],
                        [
                            "eid16664",
                            "width",
                            2894,
                            71,
                            "linear",
                            "${tweet-balloon}",
                            '217px',
                            '214px'
                        ],
                        [
                            "eid16871",
                            "width",
                            7012,
                            71,
                            "linear",
                            "${tweet-balloon}",
                            '214px',
                            '217px'
                        ],
                        [
                            "eid16870",
                            "width",
                            7083,
                            144,
                            "linear",
                            "${tweet-balloon}",
                            '217px',
                            '52px'
                        ],
                        [
                            "eid16680",
                            "height",
                            2894,
                            185,
                            "linear",
                            "${thumb-up}",
                            '104px',
                            '132px'
                        ],
                        [
                            "eid16778",
                            "height",
                            4436,
                            185,
                            "linear",
                            "${thumb-up}",
                            '132px',
                            '104px'
                        ],
                        [
                            "eid16575",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16576",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16577",
                            "opacity",
                            1904,
                            198,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17056",
                            "left",
                            17337,
                            179,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '1021px',
                            '387px'
                        ],
                        [
                            "eid17058",
                            "left",
                            17516,
                            120,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '387px',
                            '512px'
                        ],
                        [
                            "eid16580",
                            "top",
                            1250,
                            852,
                            "linear",
                            "${cafe-table}",
                            '582px',
                            '364px'
                        ],
                        [
                            "eid16943",
                            "top",
                            14908,
                            346,
                            "linear",
                            "${cafe-table}",
                            '364px',
                            '335px'
                        ],
                        [
                            "eid16689",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${thumb-up}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16688",
                            "opacity",
                            2894,
                            71,
                            "linear",
                            "${thumb-up}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16779",
                            "opacity",
                            4550,
                            71,
                            "linear",
                            "${thumb-up}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16569",
                            "top",
                            566,
                            184,
                            "linear",
                            "${Text}",
                            '-175px',
                            '232px'
                        ],
                        [
                            "eid16570",
                            "top",
                            1806,
                            98,
                            "linear",
                            "${Text}",
                            '232px',
                            '305px'
                        ],
                        [
                            "eid16571",
                            "top",
                            1904,
                            198,
                            "linear",
                            "${Text}",
                            '305px',
                            '-161px'
                        ],
                        [
                            "eid17171",
                            "width",
                            22540,
                            133,
                            "linear",
                            "${good-bad-icon2}",
                            '62px',
                            '180px'
                        ],
                        [
                            "eid17175",
                            "width",
                            22673,
                            100,
                            "linear",
                            "${good-bad-icon2}",
                            '180px',
                            '155px'
                        ],
                        [
                            "eid17436",
                            "width",
                            35896,
                            70,
                            "linear",
                            "${good-bad-icon2}",
                            '155px',
                            '180px'
                        ],
                        [
                            "eid17435",
                            "width",
                            35966,
                            93,
                            "linear",
                            "${good-bad-icon2}",
                            '180px',
                            '62px'
                        ],
                        [
                            "eid16783",
                            "display",
                            0,
                            0,
                            "linear",
                            "${network}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16782",
                            "display",
                            4621,
                            0,
                            "linear",
                            "${network}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16963",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cafe-bg-blur}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid16962",
                            "opacity",
                            15338,
                            299,
                            "linear",
                            "${cafe-bg-blur}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17465",
                            "opacity",
                            36110,
                            233,
                            "linear",
                            "${cafe-bg-blur}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17169",
                            "height",
                            22540,
                            133,
                            "linear",
                            "${good-bad-icon2}",
                            '86px',
                            '250px'
                        ],
                        [
                            "eid17176",
                            "height",
                            22673,
                            100,
                            "linear",
                            "${good-bad-icon2}",
                            '250px',
                            '216px'
                        ],
                        [
                            "eid17431",
                            "height",
                            35896,
                            70,
                            "linear",
                            "${good-bad-icon2}",
                            '216px',
                            '250px'
                        ],
                        [
                            "eid17430",
                            "height",
                            35966,
                            93,
                            "linear",
                            "${good-bad-icon2}",
                            '250px',
                            '86px'
                        ],
                        [
                            "eid16673",
                            "top",
                            2894,
                            185,
                            "linear",
                            "${thumb-up}",
                            '93px',
                            '7px'
                        ],
                        [
                            "eid16684",
                            "top",
                            3079,
                            101,
                            "linear",
                            "${thumb-up}",
                            '7px',
                            '44px'
                        ],
                        [
                            "eid16777",
                            "top",
                            4335,
                            101,
                            "linear",
                            "${thumb-up}",
                            '44px',
                            '7px'
                        ],
                        [
                            "eid16776",
                            "top",
                            4436,
                            185,
                            "linear",
                            "${thumb-up}",
                            '7px',
                            '93px'
                        ],
                        [
                            "eid16638",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-cafe-body}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16628",
                            "opacity",
                            1963,
                            139,
                            "linear",
                            "${khalid-cafe-body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16608",
                            "left",
                            1963,
                            387,
                            "linear",
                            "${khalid-hand-phone}",
                            '1267px',
                            '619px'
                        ],
                        [
                            "eid16725",
                            "left",
                            3500,
                            180,
                            "linear",
                            "${khalid-hand-phone}",
                            '619px',
                            '609px'
                        ],
                        [
                            "eid16932",
                            "left",
                            14798,
                            456,
                            "linear",
                            "${khalid-hand-phone}",
                            '609px',
                            '1275px'
                        ],
                        [
                            "eid16833",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16834",
                            "opacity",
                            4730,
                            48,
                            "linear",
                            "${Text2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16835",
                            "opacity",
                            6898,
                            48,
                            "linear",
                            "${Text2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17148",
                            "left",
                            22412,
                            126,
                            "linear",
                            "${positive-icon}",
                            '93px',
                            '32px'
                        ],
                        [
                            "eid17149",
                            "left",
                            22538,
                            79,
                            "linear",
                            "${positive-icon}",
                            '32px',
                            '42px'
                        ],
                        [
                            "eid17452",
                            "left",
                            36005,
                            55,
                            "linear",
                            "${positive-icon}",
                            '42px',
                            '32px'
                        ],
                        [
                            "eid17451",
                            "left",
                            36061,
                            89,
                            "linear",
                            "${positive-icon}",
                            '32px',
                            '93px'
                        ],
                        [
                            "eid16703",
                            "left",
                            3289,
                            48,
                            "linear",
                            "${Text2}",
                            '152px',
                            '131px'
                        ],
                        [
                            "eid16771",
                            "left",
                            4392,
                            48,
                            "linear",
                            "${Text2}",
                            '131px',
                            '152px'
                        ],
                            [ "eid17379", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${good-bad}', [] ] ],
                            [ "eid16977", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${khalid-post}', [] ] ],
                            [ "eid17426", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${negative}', [] ] ],
                            [ "eid16874", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${network}', [] ] ],
                            [ "eid17206", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${positive}', [] ] ],
                            [ "eid16875", "trigger", 4621, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${network}', [] ] ],
                            [ "eid16978", "trigger", 16071, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${khalid-post}', [] ] ],
                            [ "eid17104", "trigger", 22369, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${khalid-post}', [] ] ],
                            [ "eid17207", "trigger", 26200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${positive}', [0] ] ],
                            [ "eid17467", "trigger", 27347.085379535, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${positive}', [] ] ],
                            [ "eid17380", "trigger", 28700, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${good-bad}', [0] ] ],
                            [ "eid17468", "trigger", 29750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${good-bad}', [] ] ],
                            [ "eid17427", "trigger", 32199, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${negative}', [0] ] ],
                            [ "eid17469", "trigger", 33320.867396861, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${negative}', [] ] ]
                    ]
                }
            },
            "network": {
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
                            id: 'spark1',
                            opacity: '0',
                            rect: ['30px', '-73px', '101px', '99px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bar1',
                            opacity: '0',
                            rect: ['15px', '17px', '145px', '131px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bar1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bar2',
                            opacity: '0',
                            rect: ['15px', '17px', '145px', '131px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bar2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bar3',
                            opacity: '0',
                            rect: ['15px', '17px', '145px', '131px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bar3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bar4',
                            opacity: '0',
                            rect: ['15px', '17px', '145px', '131px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bar4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bar5',
                            opacity: '0',
                            rect: ['15px', '17px', '145px', '131px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bar5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bar6',
                            opacity: '0',
                            rect: ['15px', '17px', '145px', '131px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bar6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '191px', '188px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid16792",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bar3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16803",
                            "opacity",
                            250,
                            66,
                            "linear",
                            "${bar3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16860",
                            "opacity",
                            1367,
                            133,
                            "linear",
                            "${bar3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16818",
                            "left",
                            602,
                            193,
                            "linear",
                            "${spark1}",
                            '30px',
                            '-56px'
                        ],
                        [
                            "eid16829",
                            "left",
                            888,
                            193,
                            "linear",
                            "${spark1}",
                            '30px',
                            '-56px'
                        ],
                        [
                            "eid16793",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bar4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16804",
                            "opacity",
                            365,
                            66,
                            "linear",
                            "${bar4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16859",
                            "opacity",
                            1367,
                            133,
                            "linear",
                            "${bar4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16785",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16821",
                            "opacity",
                            602,
                            66,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16824",
                            "opacity",
                            750,
                            45,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16827",
                            "opacity",
                            888,
                            66,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16828",
                            "opacity",
                            1036,
                            45,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16816",
                            "top",
                            602,
                            193,
                            "linear",
                            "${spark1}",
                            '39px',
                            '-73px'
                        ],
                        [
                            "eid16825",
                            "top",
                            888,
                            193,
                            "linear",
                            "${spark1}",
                            '39px',
                            '-73px'
                        ],
                        [
                            "eid16795",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bar2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16802",
                            "opacity",
                            145,
                            66,
                            "linear",
                            "${bar2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16861",
                            "opacity",
                            1367,
                            133,
                            "linear",
                            "${bar2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16797",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bar6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16806",
                            "opacity",
                            567,
                            66,
                            "linear",
                            "${bar6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16857",
                            "opacity",
                            1367,
                            133,
                            "linear",
                            "${bar6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16799",
                            "opacity",
                            0,
                            110,
                            "linear",
                            "${bar1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16862",
                            "opacity",
                            1367,
                            133,
                            "linear",
                            "${bar1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16817",
                            "width",
                            602,
                            193,
                            "linear",
                            "${spark1}",
                            '101px',
                            '317px'
                        ],
                        [
                            "eid16830",
                            "width",
                            888,
                            193,
                            "linear",
                            "${spark1}",
                            '101px',
                            '317px'
                        ],
                        [
                            "eid16796",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bar5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16805",
                            "opacity",
                            466,
                            66,
                            "linear",
                            "${bar5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16858",
                            "opacity",
                            1367,
                            133,
                            "linear",
                            "${bar5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16815",
                            "height",
                            602,
                            193,
                            "linear",
                            "${spark1}",
                            '99px',
                            '311px'
                        ],
                        [
                            "eid16826",
                            "height",
                            888,
                            193,
                            "linear",
                            "${spark1}",
                            '99px',
                            '311px'
                        ]
                    ]
                }
            },
            "khalid-post": {
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
                            stroke: [5, 'rgb(45, 142, 198)', 'none'],
                            rect: ['0px', '0px', '297px', '48px', 'auto', 'auto'],
                            fill: ['rgba(198,226,242,1.00)']
                        },
                        {
                            rect: ['12px', '118px', '120px', '135px', 'auto', 'auto'],
                            id: 'khalid-avatar',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/khalid-avatar.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['-0.88601', '-0.98788']],
                            rect: ['16px', '151px', '292px', '255px', 'auto', 'auto'],
                            id: 'tweet-balloon2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tweet-balloon.png', '0px', '0px']
                        },
                        {
                            rect: ['41px', '181px', '235px', '136px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0.000000',
                            id: 'RoundRect2',
                            stroke: [5, 'rgb(45, 142, 198)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(198,226,242,1)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text4',
                            text: 'Khalid',
                            align: 'center',
                            rect: ['76px', '122px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text4Copy',
                            text: '#thisishowiroll',
                            align: 'center',
                            rect: ['68px', '282px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5Copy',
                            text: 'Just spent $2000 eating at Jerome’s Italian Restaurant.',
                            align: 'center',
                            rect: ['49px', '191px', '228px', '86px', 'auto', 'auto']
                        },
                        {
                            transform: [[], ['-18'], [0, 0, 0], [1, 1, 1]],
                            id: 'socialmedia-logo',
                            type: 'image',
                            rect: ['12px', '14px', '105px', '77px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/socialmedia-logo.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'post-btn',
                            opacity: '1',
                            rect: ['46px', '424px', '213px', '77px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/post-btn.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text6',
                            text: 'Just Now',
                            align: 'center',
                            rect: ['213px', '158px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'reply-btn',
                            opacity: '0.000000',
                            rect: ['46px', '424px', '212px', '77px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/reply-btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'spark12',
                            opacity: '0',
                            rect: ['89px', '270px', '120px', '118px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '297px', '501px']
                        }
                    }
                },
                timeline: {
                    duration: 839,
                    autoPlay: true,
                    data: [
                        [
                            "eid17027",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17026",
                            "opacity",
                            782,
                            57,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17013",
                            "top",
                            782,
                            57,
                            "linear",
                            "${khalid-avatar}",
                            '55px',
                            '118px'
                        ],
                        [
                            "eid16988",
                            "top",
                            598,
                            241,
                            "linear",
                            "${spark12}",
                            '398px',
                            '270px'
                        ],
                        [
                            "eid17010",
                            "height",
                            782,
                            57,
                            "linear",
                            "${khalid-avatar}",
                            '135px',
                            '61px'
                        ],
                        [
                            "eid17018",
                            "left",
                            782,
                            57,
                            "linear",
                            "${Text4}",
                            '45px',
                            '76px'
                        ],
                        [
                            "eid17022",
                            "opacity",
                            782,
                            57,
                            "linear",
                            "${tweet-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17012",
                            "left",
                            782,
                            57,
                            "linear",
                            "${khalid-avatar}",
                            '141px',
                            '12px'
                        ],
                        [
                            "eid17036",
                            "left",
                            782,
                            57,
                            "linear",
                            "${Text5Copy}",
                            '46px',
                            '49px'
                        ],
                        [
                            "eid17001",
                            "opacity",
                            782,
                            57,
                            "linear",
                            "${post-btn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16998",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid16994",
                            "opacity",
                            598,
                            70,
                            "linear",
                            "${spark12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16997",
                            "opacity",
                            782,
                            57,
                            "linear",
                            "${spark12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16987",
                            "height",
                            598,
                            241,
                            "linear",
                            "${spark12}",
                            '118px',
                            '374px'
                        ],
                        [
                            "eid17038",
                            "left",
                            782,
                            57,
                            "linear",
                            "${Text4Copy}",
                            '65px',
                            '68px'
                        ],
                        [
                            "eid16990",
                            "left",
                            598,
                            241,
                            "linear",
                            "${spark12}",
                            '89px',
                            '-37px'
                        ],
                        [
                            "eid17011",
                            "width",
                            782,
                            57,
                            "linear",
                            "${khalid-avatar}",
                            '120px',
                            '54px'
                        ],
                        [
                            "eid16989",
                            "width",
                            598,
                            241,
                            "linear",
                            "${spark12}",
                            '120px',
                            '380px'
                        ],
                        [
                            "eid17039",
                            "top",
                            782,
                            57,
                            "linear",
                            "${Text4Copy}",
                            '348px',
                            '282px'
                        ],
                        [
                            "eid17037",
                            "top",
                            782,
                            57,
                            "linear",
                            "${Text5Copy}",
                            '257px',
                            '191px'
                        ],
                        [
                            "eid17044",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${reply-btn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid17043",
                            "opacity",
                            782,
                            57,
                            "linear",
                            "${reply-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17019",
                            "top",
                            782,
                            57,
                            "linear",
                            "${Text4}",
                            '205px',
                            '122px'
                        ]
                    ]
                }
            },
            "positive": {
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
                            id: 'positive-BG',
                            opacity: '0',
                            rect: ['0px', '0px', '413px', '496px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/positive-BG.jpg', '0px', '0px']
                        },
                        {
                            rect: ['-212px', '525px', '377px', '670px', 'auto', 'auto'],
                            id: 'hand-mobile2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hand-mobile2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy',
                            stroke: [5, 'rgb(45, 142, 198)', 'none'],
                            rect: ['-110px', '583px', '196px', '32px', 'auto', 'auto'],
                            fill: ['rgba(198,226,242,1.00)']
                        },
                        {
                            transform: [[], [], [], ['-0.88601', '-0.98788']],
                            rect: ['-77px', '693px', '173px', '147px', 'auto', 'auto'],
                            id: 'tweet-balloon2Copy',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tweet-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5Copy3',
                            text: 'Wow, great restaurant. Love that place!',
                            align: 'center',
                            rect: ['-59px', '742px', '137px', '108px', 'auto', 'auto']
                        },
                        {
                            rect: ['-1px', '623px', '69px', '96px', 'auto', 'auto'],
                            id: 'ppl-icon12',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ppl-icon1.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-18'], [0, 0, 0], [1, 1, 1]],
                            id: 'socialmedia-logoCopy',
                            type: 'image',
                            rect: ['-107px', '585px', '79px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/socialmedia-logo.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'post-btnCopy',
                            opacity: '1',
                            rect: ['-65px', '836px', '161px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/post-btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'narrator-text-balloon-square2',
                            opacity: '0',
                            rect: ['330px', '248px', '196px', '96px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon-square.png', '0px', '0px']
                        },
                        {
                            rect: ['-433px', '22px', '151px', '156px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect4',
                            stroke: [5, 'rgb(45, 142, 198)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(198,226,242,0.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Connection',
                            id: 'Text8',
                            opacity: '0',
                            align: 'center',
                            rect: ['330px', '270px', '196px', '49px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '413px', '496px']
                        }
                    }
                },
                timeline: {
                    duration: 2399,
                    autoPlay: true,
                    data: [
                        [
                            "eid17255",
                            "top",
                            450,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '623px',
                            '143px'
                        ],
                        [
                            "eid17280",
                            "top",
                            1847,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '143px',
                            '623px'
                        ],
                        [
                            "eid17259",
                            "opacity",
                            0,
                            149,
                            "linear",
                            "${positive-BG}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17293",
                            "opacity",
                            2250,
                            149,
                            "linear",
                            "${positive-BG}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17245",
                            "top",
                            450,
                            308,
                            "linear",
                            "${post-btnCopy}",
                            '836px',
                            '356px'
                        ],
                        [
                            "eid17276",
                            "top",
                            1847,
                            308,
                            "linear",
                            "${post-btnCopy}",
                            '356px',
                            '836px'
                        ],
                        [
                            "eid17274",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17273",
                            "opacity",
                            914,
                            123,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17290",
                            "opacity",
                            2032,
                            123,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17254",
                            "left",
                            450,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '-1px',
                            '221px'
                        ],
                        [
                            "eid17279",
                            "left",
                            1847,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '221px',
                            '-1px'
                        ],
                        [
                            "eid17242",
                            "left",
                            450,
                            308,
                            "linear",
                            "${tweet-balloon2Copy}",
                            '-77px',
                            '145px'
                        ],
                        [
                            "eid17283",
                            "left",
                            1847,
                            308,
                            "linear",
                            "${tweet-balloon2Copy}",
                            '145px',
                            '-77px'
                        ],
                        [
                            "eid17271",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17270",
                            "opacity",
                            914,
                            123,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17292",
                            "opacity",
                            2032,
                            123,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17248",
                            "left",
                            450,
                            308,
                            "linear",
                            "${Text5Copy3}",
                            '-59px',
                            '163px'
                        ],
                        [
                            "eid17281",
                            "left",
                            1847,
                            308,
                            "linear",
                            "${Text5Copy3}",
                            '163px',
                            '-59px'
                        ],
                        [
                            "eid17243",
                            "top",
                            450,
                            308,
                            "linear",
                            "${tweet-balloon2Copy}",
                            '693px',
                            '213px'
                        ],
                        [
                            "eid17284",
                            "top",
                            1847,
                            308,
                            "linear",
                            "${tweet-balloon2Copy}",
                            '213px',
                            '693px'
                        ],
                        [
                            "eid17247",
                            "top",
                            450,
                            308,
                            "linear",
                            "${socialmedia-logoCopy}",
                            '585px',
                            '105px'
                        ],
                        [
                            "eid17278",
                            "top",
                            1847,
                            308,
                            "linear",
                            "${socialmedia-logoCopy}",
                            '105px',
                            '585px'
                        ],
                        [
                            "eid17250",
                            "left",
                            450,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '-212px',
                            '10px'
                        ],
                        [
                            "eid17287",
                            "left",
                            1847,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '10px',
                            '-212px'
                        ],
                        [
                            "eid17249",
                            "top",
                            450,
                            308,
                            "linear",
                            "${Text5Copy3}",
                            '742px',
                            '248px'
                        ],
                        [
                            "eid17282",
                            "top",
                            1847,
                            308,
                            "linear",
                            "${Text5Copy3}",
                            '248px',
                            '742px'
                        ],
                        [
                            "eid17244",
                            "left",
                            450,
                            308,
                            "linear",
                            "${post-btnCopy}",
                            '-65px',
                            '157px'
                        ],
                        [
                            "eid17275",
                            "left",
                            1847,
                            308,
                            "linear",
                            "${post-btnCopy}",
                            '157px',
                            '-65px'
                        ],
                        [
                            "eid17253",
                            "top",
                            450,
                            308,
                            "linear",
                            "${Rectangle2Copy}",
                            '583px',
                            '103px'
                        ],
                        [
                            "eid17286",
                            "top",
                            1847,
                            308,
                            "linear",
                            "${Rectangle2Copy}",
                            '103px',
                            '583px'
                        ],
                        [
                            "eid17246",
                            "left",
                            450,
                            308,
                            "linear",
                            "${socialmedia-logoCopy}",
                            '-107px',
                            '115px'
                        ],
                        [
                            "eid17277",
                            "left",
                            1847,
                            308,
                            "linear",
                            "${socialmedia-logoCopy}",
                            '115px',
                            '-107px'
                        ],
                        [
                            "eid17272",
                            "top",
                            914,
                            189,
                            "linear",
                            "${Text8}",
                            '26px',
                            '271px'
                        ],
                        [
                            "eid17289",
                            "top",
                            1966,
                            189,
                            "linear",
                            "${Text8}",
                            '271px',
                            '26px'
                        ],
                        [
                            "eid17251",
                            "top",
                            450,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '525px',
                            '45px'
                        ],
                        [
                            "eid17288",
                            "top",
                            1847,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '45px',
                            '525px'
                        ],
                        [
                            "eid17252",
                            "left",
                            450,
                            308,
                            "linear",
                            "${Rectangle2Copy}",
                            '-110px',
                            '112px'
                        ],
                        [
                            "eid17285",
                            "left",
                            1847,
                            308,
                            "linear",
                            "${Rectangle2Copy}",
                            '112px',
                            '-110px'
                        ],
                        [
                            "eid17263",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17378",
                            "opacity",
                            2320,
                            79,
                            "linear",
                            "${RoundRect4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17266",
                            "top",
                            914,
                            189,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '4px',
                            '248px'
                        ],
                        [
                            "eid17291",
                            "top",
                            1966,
                            189,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '248px',
                            '4px'
                        ]
                    ]
                }
            },
            "good-bad": {
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
                            id: 'positive-BG',
                            opacity: '0',
                            rect: ['433px', '0px', '413px', '496px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/good-or-bad-BG.jpg', '0px', '0px']
                        },
                        {
                            rect: ['555px', '525px', '377px', '670px', 'auto', 'auto'],
                            id: 'hand-mobile2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hand-mobile2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy2',
                            stroke: [5, 'rgb(45, 142, 198)', 'none'],
                            rect: ['657px', '583px', '196px', '32px', 'auto', 'auto'],
                            fill: ['rgba(198,226,242,1.00)']
                        },
                        {
                            transform: [[], [], [], ['-0.88601', '-0.98788']],
                            rect: ['690px', '693px', '173px', '147px', 'auto', 'auto'],
                            id: 'tweet-balloon2Copy2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tweet-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5Copy4',
                            text: 'Great to hear that!',
                            align: 'center',
                            rect: ['708px', '742px', '137px', '81px', 'auto', 'auto']
                        },
                        {
                            rect: ['766px', '623px', '69px', '96px', 'auto', 'auto'],
                            id: 'ppl-icon12',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ppl-icon2.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-18'], [0, 0, 0], [1, 1, 1]],
                            id: 'socialmedia-logoCopy2',
                            type: 'image',
                            rect: ['660px', '585px', '79px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/socialmedia-logo.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'post-btnCopy2',
                            opacity: '1',
                            rect: ['702px', '836px', '161px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/post-btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'narrator-text-balloon-square2',
                            opacity: '0',
                            rect: ['763px', '248px', '196px', '96px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon-square.png', '0px', '0px']
                        },
                        {
                            rect: ['154px', '170px', '143px', '220px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect4',
                            stroke: [5, 'rgb(45, 142, 198)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(198,226,242,0.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Objective',
                            id: 'Text8',
                            opacity: '0',
                            align: 'center',
                            rect: ['766px', '270px', '187px', '49px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '959px', '1195px']
                        }
                    }
                },
                timeline: {
                    duration: 3499,
                    autoPlay: true,
                    data: [
                        [
                            "eid17356",
                            "top",
                            450,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '623px',
                            '143px'
                        ],
                        [
                            "eid17357",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '143px',
                            '623px'
                        ],
                        [
                            "eid17374",
                            "opacity",
                            0,
                            149,
                            "linear",
                            "${positive-BG}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17375",
                            "opacity",
                            3350,
                            149,
                            "linear",
                            "${positive-BG}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17337",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17338",
                            "opacity",
                            914,
                            123,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17339",
                            "opacity",
                            3132,
                            123,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17354",
                            "left",
                            450,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '777px',
                            '654px'
                        ],
                        [
                            "eid17355",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '654px',
                            '766px'
                        ],
                        [
                            "eid17362",
                            "left",
                            450,
                            308,
                            "linear",
                            "${tweet-balloon2Copy2}",
                            '701px',
                            '578px'
                        ],
                        [
                            "eid17363",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${tweet-balloon2Copy2}",
                            '578px',
                            '690px'
                        ],
                        [
                            "eid17341",
                            "top",
                            914,
                            189,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '4px',
                            '248px'
                        ],
                        [
                            "eid17342",
                            "top",
                            3066,
                            189,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '248px',
                            '4px'
                        ],
                        [
                            "eid17364",
                            "top",
                            450,
                            308,
                            "linear",
                            "${tweet-balloon2Copy2}",
                            '693px',
                            '213px'
                        ],
                        [
                            "eid17365",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${tweet-balloon2Copy2}",
                            '213px',
                            '693px'
                        ],
                        [
                            "eid17358",
                            "left",
                            450,
                            308,
                            "linear",
                            "${Text5Copy4}",
                            '719px',
                            '596px'
                        ],
                        [
                            "eid17359",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${Text5Copy4}",
                            '596px',
                            '708px'
                        ],
                        [
                            "eid17368",
                            "left",
                            450,
                            308,
                            "linear",
                            "${Rectangle2Copy2}",
                            '668px',
                            '545px'
                        ],
                        [
                            "eid17369",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${Rectangle2Copy2}",
                            '545px',
                            '657px'
                        ],
                        [
                            "eid17360",
                            "top",
                            450,
                            308,
                            "linear",
                            "${Text5Copy4}",
                            '742px',
                            '262px'
                        ],
                        [
                            "eid17361",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${Text5Copy4}",
                            '262px',
                            '742px'
                        ],
                        [
                            "eid17343",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17344",
                            "opacity",
                            914,
                            123,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17345",
                            "opacity",
                            3132,
                            123,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17366",
                            "top",
                            450,
                            308,
                            "linear",
                            "${Rectangle2Copy2}",
                            '583px',
                            '103px'
                        ],
                        [
                            "eid17367",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${Rectangle2Copy2}",
                            '103px',
                            '583px'
                        ],
                        [
                            "eid17350",
                            "top",
                            450,
                            308,
                            "linear",
                            "${socialmedia-logoCopy2}",
                            '585px',
                            '105px'
                        ],
                        [
                            "eid17351",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${socialmedia-logoCopy2}",
                            '105px',
                            '585px'
                        ],
                        [
                            "eid17348",
                            "left",
                            450,
                            308,
                            "linear",
                            "${post-btnCopy2}",
                            '713px',
                            '590px'
                        ],
                        [
                            "eid17349",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${post-btnCopy2}",
                            '590px',
                            '702px'
                        ],
                        [
                            "eid17372",
                            "left",
                            450,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '566px',
                            '443px'
                        ],
                        [
                            "eid17373",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '443px',
                            '555px'
                        ],
                        [
                            "eid17335",
                            "top",
                            914,
                            189,
                            "linear",
                            "${Text8}",
                            '26px',
                            '270px'
                        ],
                        [
                            "eid17336",
                            "top",
                            3066,
                            189,
                            "linear",
                            "${Text8}",
                            '270px',
                            '26px'
                        ],
                        [
                            "eid17370",
                            "top",
                            450,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '525px',
                            '45px'
                        ],
                        [
                            "eid17371",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '45px',
                            '525px'
                        ],
                        [
                            "eid17346",
                            "top",
                            450,
                            308,
                            "linear",
                            "${post-btnCopy2}",
                            '836px',
                            '356px'
                        ],
                        [
                            "eid17347",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${post-btnCopy2}",
                            '356px',
                            '836px'
                        ],
                        [
                            "eid17340",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17381",
                            "opacity",
                            3420,
                            79,
                            "linear",
                            "${RoundRect4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17352",
                            "left",
                            450,
                            308,
                            "linear",
                            "${socialmedia-logoCopy2}",
                            '671px',
                            '548px'
                        ],
                        [
                            "eid17353",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${socialmedia-logoCopy2}",
                            '548px',
                            '660px'
                        ]
                    ]
                }
            },
            "negative": {
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
                            id: 'positive-BG',
                            opacity: '0',
                            rect: ['279px', '0px', '413px', '496px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/negative-BG.jpg', '0px', '0px']
                        },
                        {
                            rect: ['64px', '525px', '377px', '670px', 'auto', 'auto'],
                            id: 'hand-mobile2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hand-mobile2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [5, 'rgb(45, 142, 198)', 'none'],
                            rect: ['166px', '583px', '196px', '32px', 'auto', 'auto'],
                            fill: ['rgba(198,226,242,1.00)']
                        },
                        {
                            transform: [[], [], [], ['-0.88601', '-0.98788']],
                            rect: ['199px', '693px', '173px', '147px', 'auto', 'auto'],
                            id: 'tweet-balloon2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tweet-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5',
                            text: 'I think he is boasting.',
                            align: 'center',
                            rect: ['217px', '742px', '137px', '81px', 'auto', 'auto']
                        },
                        {
                            rect: ['275px', '623px', '69px', '96px', 'auto', 'auto'],
                            id: 'ppl-icon12',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ppl-icon4.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-18'], [0, 0, 0], [1, 1, 1]],
                            id: 'socialmedia-logo',
                            type: 'image',
                            rect: ['169px', '585px', '79px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/socialmedia-logo.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'post-btn',
                            opacity: '1',
                            rect: ['211px', '836px', '161px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/post-btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'narrator-text-balloon-square2',
                            opacity: '0',
                            rect: ['609px', '248px', '196px', '96px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon-square.png', '0px', '0px']
                        },
                        {
                            rect: ['-145px', '313px', '163px', '162px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect4',
                            stroke: [5, 'rgb(45, 142, 198)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(198,226,242,0.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Rejection',
                            id: 'Text8',
                            opacity: '0',
                            align: 'center',
                            rect: ['612px', '270px', '187px', '49px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '805px', '1195px']
                        }
                    }
                },
                timeline: {
                    duration: 3499,
                    autoPlay: true,
                    data: [
                        [
                            "eid17402",
                            "top",
                            450,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '623px',
                            '143px'
                        ],
                        [
                            "eid17403",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '143px',
                            '623px'
                        ],
                        [
                            "eid17422",
                            "opacity",
                            0,
                            149,
                            "linear",
                            "${positive-BG}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17423",
                            "opacity",
                            3350,
                            149,
                            "linear",
                            "${positive-BG}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17384",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17385",
                            "opacity",
                            914,
                            123,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17386",
                            "opacity",
                            3132,
                            123,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17404",
                            "left",
                            450,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '275px',
                            '500px'
                        ],
                        [
                            "eid17405",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${ppl-icon12}",
                            '500px',
                            '612px'
                        ],
                        [
                            "eid17389",
                            "top",
                            914,
                            189,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '4px',
                            '248px'
                        ],
                        [
                            "eid17390",
                            "top",
                            3066,
                            189,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '248px',
                            '4px'
                        ],
                        [
                            "eid17416",
                            "top",
                            450,
                            308,
                            "linear",
                            "${Rectangle2}",
                            '583px',
                            '103px'
                        ],
                        [
                            "eid17417",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${Rectangle2}",
                            '103px',
                            '583px'
                        ],
                        [
                            "eid17408",
                            "top",
                            450,
                            308,
                            "linear",
                            "${Text5}",
                            '742px',
                            '262px'
                        ],
                        [
                            "eid17409",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${Text5}",
                            '262px',
                            '742px'
                        ],
                        [
                            "eid17412",
                            "top",
                            450,
                            308,
                            "linear",
                            "${tweet-balloon2}",
                            '693px',
                            '213px'
                        ],
                        [
                            "eid17413",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${tweet-balloon2}",
                            '213px',
                            '693px'
                        ],
                        [
                            "eid17394",
                            "left",
                            450,
                            308,
                            "linear",
                            "${post-btn}",
                            '211px',
                            '436px'
                        ],
                        [
                            "eid17395",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${post-btn}",
                            '436px',
                            '548px'
                        ],
                        [
                            "eid17396",
                            "top",
                            450,
                            308,
                            "linear",
                            "${post-btn}",
                            '836px',
                            '356px'
                        ],
                        [
                            "eid17397",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${post-btn}",
                            '356px',
                            '836px'
                        ],
                        [
                            "eid17400",
                            "left",
                            450,
                            308,
                            "linear",
                            "${socialmedia-logo}",
                            '169px',
                            '394px'
                        ],
                        [
                            "eid17401",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${socialmedia-logo}",
                            '394px',
                            '506px'
                        ],
                        [
                            "eid17414",
                            "left",
                            450,
                            308,
                            "linear",
                            "${Rectangle2}",
                            '166px',
                            '391px'
                        ],
                        [
                            "eid17415",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${Rectangle2}",
                            '391px',
                            '503px'
                        ],
                        [
                            "eid17410",
                            "left",
                            450,
                            308,
                            "linear",
                            "${tweet-balloon2}",
                            '199px',
                            '424px'
                        ],
                        [
                            "eid17411",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${tweet-balloon2}",
                            '424px',
                            '536px'
                        ],
                        [
                            "eid17406",
                            "left",
                            450,
                            308,
                            "linear",
                            "${Text5}",
                            '217px',
                            '442px'
                        ],
                        [
                            "eid17407",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${Text5}",
                            '442px',
                            '554px'
                        ],
                        [
                            "eid17418",
                            "left",
                            450,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '64px',
                            '289px'
                        ],
                        [
                            "eid17419",
                            "left",
                            2947,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '289px',
                            '401px'
                        ],
                        [
                            "eid17382",
                            "top",
                            914,
                            189,
                            "linear",
                            "${Text8}",
                            '26px',
                            '270px'
                        ],
                        [
                            "eid17383",
                            "top",
                            3066,
                            189,
                            "linear",
                            "${Text8}",
                            '270px',
                            '26px'
                        ],
                        [
                            "eid17420",
                            "top",
                            450,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '525px',
                            '45px'
                        ],
                        [
                            "eid17421",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${hand-mobile2}",
                            '45px',
                            '525px'
                        ],
                        [
                            "eid17391",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17392",
                            "opacity",
                            914,
                            123,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17393",
                            "opacity",
                            3132,
                            123,
                            "linear",
                            "${narrator-text-balloon-square2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17387",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17388",
                            "opacity",
                            3420,
                            79,
                            "linear",
                            "${RoundRect4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid17398",
                            "top",
                            450,
                            308,
                            "linear",
                            "${socialmedia-logo}",
                            '585px',
                            '105px'
                        ],
                        [
                            "eid17399",
                            "top",
                            2947,
                            308,
                            "linear",
                            "${socialmedia-logo}",
                            '105px',
                            '585px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("3_edgeActions.js");
})("EDGE-1646797");
