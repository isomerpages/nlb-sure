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
                            rect: ['-124px', '-90px', '1300px', '919px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cafe-bg.jpg",'0px','0px'],
                            transform: [[],[],[],['1.07629','1.07629']]
                        },
                        {
                            id: 'cafe-bg-blur',
                            type: 'image',
                            rect: ['-174px', '-125px', '1400px', '989px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"cafe-bg-blur.jpg",'0px','0px']
                        },
                        {
                            id: 'cafe-table',
                            type: 'image',
                            rect: ['109px', '375px', '827px', '620px', 'auto', 'auto'],
                            opacity: '1',
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
                            text: "Interpretations",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(184,217,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'narrator-text-balloon',
                            type: 'image',
                            rect: ['168px', '-215px', '716px', '215px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['191px', '-193px', '668px', '138px', 'auto', 'auto'],
                            opacity: '0',
                            text: "When uploading your posts, <br>pay attention to how your words and images complement one another.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(184, 217, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'magz-open2',
                            type: 'image',
                            rect: ['46px', '15px', '934px', '545px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"magz-open.png",'0px','0px']
                        },
                        {
                            id: 'magz3-closed',
                            type: 'image',
                            rect: ['17px', '478px', '170px', '243px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"magz3-closed.png",'0px','0px']
                        },
                        {
                            id: 'magz3-halfopen',
                            type: 'image',
                            rect: ['255px', '11px', '508px', '576px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"magz3-halfopen.png",'0px','0px']
                        },
                        {
                            id: 'khalid',
                            symbolName: 'khalid',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '78px', '402', '267', 'auto', 'auto']
                        },
                        {
                            id: 'Penelope',
                            symbolName: 'Penelope',
                            display: 'none',
                            type: 'rect',
                            rect: ['343', '78', '340', '267', 'auto', 'auto']
                        },
                        {
                            id: 'Jun',
                            symbolName: 'Jun',
                            display: 'none',
                            type: 'rect',
                            rect: ['625', '86px', '389', '252', 'auto', 'auto']
                        },
                        {
                            id: 'spark2',
                            type: 'image',
                            rect: ['446px', '-44px', '659px', '686px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spark2.png",'0px','0px']
                        },
                        {
                            id: 'countdown3',
                            type: 'image',
                            rect: ['413px', '237px', '226px', '138px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown3.png",'0px','0px']
                        },
                        {
                            id: 'countdown2',
                            type: 'image',
                            rect: ['360px', '79px', '297px', '418px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown2.png",'0px','0px']
                        },
                        {
                            id: 'countdown1',
                            type: 'image',
                            rect: ['377px', '58px', '297px', '451px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"countdown1.png",'0px','0px']
                        },
                        {
                            id: 'instruction',
                            symbolName: 'instruction',
                            display: 'none',
                            type: 'rect',
                            rect: ['202px', '11px', '682', '138', 'auto', 'auto']
                        },
                        {
                            id: 'instruction-btn',
                            type: 'image',
                            rect: ['46px', '26px', '110px', '35px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"instruction-btn.png",'0px','0px']
                        },
                        {
                            id: 'a',
                            symbolName: 'text-khalid',
                            display: 'none',
                            type: 'rect',
                            rect: ['10px', '347px', '324', '165', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "triggers"
                        },
                        {
                            id: 'b',
                            symbolName: 'txt-penelope',
                            display: 'none',
                            type: 'rect',
                            rect: ['351px', '353px', '324', '304', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "triggers"
                        },
                        {
                            id: 'c',
                            symbolName: 'text-jun',
                            display: 'none',
                            type: 'rect',
                            rect: ['690px', '353px', '324', '303', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "triggers"
                        },
                        {
                            id: 'narrator-text-balloon3',
                            type: 'image',
                            rect: ['264px', '593px', '519px', '165px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            display: 'block',
                            type: 'rect',
                            rect: ['4px', '345px', '1024px', '167px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['223px', '618px', '600px', '105px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Now, let’s view <br>the actual captions.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'next-btn',
                            display: 'none',
                            type: 'image',
                            rect: ['417px', '512px', '191px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"next-btn.png",'0px','0px']
                        },
                        {
                            id: 'mainmenu',
                            display: 'none',
                            type: 'image',
                            rect: ['825px', '505px', '189px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
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
                    duration: 25500,
                    autoPlay: true,
                    data: [
                        [
                            "eid19342",
                            "left",
                            19567,
                            340,
                            "linear",
                            "${spark2}",
                            '429px',
                            '193px'
                        ],
                        [
                            "eid19322",
                            "top",
                            19589,
                            474,
                            "linear",
                            "${magz-open2}",
                            '15px',
                            '6px'
                        ],
                        [
                            "eid20571",
                            "width",
                            8292,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '110px',
                            '189px'
                        ],
                        [
                            "eid19339",
                            "height",
                            19567,
                            340,
                            "linear",
                            "${spark2}",
                            '157px',
                            '686px'
                        ],
                        [
                            "eid19340",
                            "top",
                            19567,
                            340,
                            "linear",
                            "${spark2}",
                            '209px',
                            '-50px'
                        ],
                        [
                            "eid19317",
                            "height",
                            8104,
                            250,
                            "linear",
                            "${magz3-closed}",
                            '243px',
                            '545px'
                        ],
                        [
                            "eid19321",
                            "width",
                            8104,
                            250,
                            "linear",
                            "${magz3-closed}",
                            '170px',
                            '507px'
                        ],
                        [
                            "eid20570",
                            "top",
                            8292,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '26px',
                            '10px'
                        ],
                        [
                            "eid20548",
                            "top",
                            19364,
                            356,
                            "linear",
                            "${countdown3}",
                            '237px',
                            '93px'
                        ],
                        [
                            "eid19329",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${magz3-closed}",
                            '0',
                            '0'
                        ],
                        [
                            "eid19318",
                            "opacity",
                            8104,
                            53,
                            "linear",
                            "${magz3-closed}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19319",
                            "opacity",
                            19567,
                            0,
                            "linear",
                            "${magz3-closed}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20558",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20517",
                            "opacity",
                            18407,
                            79,
                            "linear",
                            "${countdown1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20520",
                            "opacity",
                            18688,
                            70,
                            "linear",
                            "${countdown1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20510",
                            "height",
                            18407,
                            352,
                            "linear",
                            "${countdown1}",
                            '107px',
                            '451px'
                        ],
                        [
                            "eid21230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21229",
                            "display",
                            19793,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20560",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20554",
                            "opacity",
                            19364,
                            69,
                            "linear",
                            "${countdown3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20557",
                            "opacity",
                            19638,
                            82,
                            "linear",
                            "${countdown3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid19320",
                            "left",
                            8104,
                            250,
                            "linear",
                            "${magz3-closed}",
                            '17px',
                            '255px'
                        ],
                        [
                            "eid19361",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid19346",
                            "opacity",
                            19567,
                            50,
                            "linear",
                            "${spark2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19349",
                            "opacity",
                            19827,
                            80,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20547",
                            "height",
                            19364,
                            356,
                            "linear",
                            "${countdown3}",
                            '138px',
                            '389px'
                        ],
                        [
                            "eid20577",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20576",
                            "opacity",
                            8292,
                            78,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21315",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21314",
                            "display",
                            23815,
                            0,
                            "linear",
                            "${next-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21316",
                            "display",
                            23854,
                            0,
                            "linear",
                            "${next-btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20513",
                            "left",
                            18407,
                            352,
                            "linear",
                            "${countdown1}",
                            '469px',
                            '377px'
                        ],
                        [
                            "eid20512",
                            "width",
                            18407,
                            352,
                            "linear",
                            "${countdown1}",
                            '71px',
                            '297px'
                        ],
                        [
                            "eid19327",
                            "width",
                            19589,
                            474,
                            "linear",
                            "${magz-open2}",
                            '934px',
                            '943px'
                        ],
                        [
                            "eid20624",
                            "display",
                            0,
                            0,
                            "linear",
                            "${khalid}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20623",
                            "display",
                            19617,
                            0,
                            "linear",
                            "${khalid}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20483",
                            "top",
                            1846,
                            158,
                            "linear",
                            "${narrator-text-balloon}",
                            '-215px',
                            '78px'
                        ],
                        [
                            "eid20495",
                            "top",
                            2004,
                            75,
                            "linear",
                            "${narrator-text-balloon}",
                            '78px',
                            '22px'
                        ],
                        [
                            "eid20500",
                            "top",
                            8104,
                            47,
                            "linear",
                            "${narrator-text-balloon}",
                            '22px',
                            '78px'
                        ],
                        [
                            "eid20499",
                            "top",
                            8151,
                            99,
                            "linear",
                            "${narrator-text-balloon}",
                            '78px',
                            '-215px'
                        ],
                        [
                            "eid20530",
                            "top",
                            18863,
                            379,
                            "linear",
                            "${countdown2}",
                            '249px',
                            '79px'
                        ],
                        [
                            "eid20550",
                            "left",
                            19364,
                            356,
                            "linear",
                            "${countdown3}",
                            '413px',
                            '186px'
                        ],
                        [
                            "eid17483",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cafe-bg-blur}",
                            '0',
                            '0'
                        ],
                        [
                            "eid17485",
                            "opacity",
                            3323,
                            14983,
                            "linear",
                            "${cafe-bg-blur}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20572",
                            "left",
                            8292,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '46px',
                            '14px'
                        ],
                        [
                            "eid20622",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Penelope}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20621",
                            "display",
                            19617,
                            0,
                            "linear",
                            "${Penelope}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20532",
                            "left",
                            18863,
                            379,
                            "linear",
                            "${countdown2}",
                            '478px',
                            '360px'
                        ],
                        [
                            "eid20511",
                            "top",
                            18407,
                            352,
                            "linear",
                            "${countdown1}",
                            '246px',
                            '58px'
                        ],
                        [
                            "eid21286",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid21284",
                            "opacity",
                            20063,
                            105,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21289",
                            "opacity",
                            23685,
                            70,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid19330",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${magz-open2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid19324",
                            "opacity",
                            8104,
                            0,
                            "linear",
                            "${magz-open2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid19325",
                            "opacity",
                            19589,
                            49,
                            "linear",
                            "${magz-open2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20531",
                            "width",
                            18863,
                            379,
                            "linear",
                            "${countdown2}",
                            '70px',
                            '297px'
                        ],
                        [
                            "eid20559",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${countdown2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20535",
                            "opacity",
                            18863,
                            75,
                            "linear",
                            "${countdown2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20538",
                            "opacity",
                            19184,
                            58,
                            "linear",
                            "${countdown2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16585",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cafe-table}",
                            '1',
                            '1'
                        ],
                        [
                            "eid20493",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20491",
                            "opacity",
                            1846,
                            105,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20501",
                            "opacity",
                            8184,
                            66,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21247",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21246",
                            "display",
                            19793,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19328",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${magz3-halfopen}",
                            '0',
                            '0'
                        ],
                        [
                            "eid19313",
                            "opacity",
                            8104,
                            0,
                            "linear",
                            "${magz3-halfopen}",
                            '0',
                            '0'
                        ],
                        [
                            "eid19314",
                            "opacity",
                            19473,
                            94,
                            "linear",
                            "${magz3-halfopen}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19315",
                            "opacity",
                            19617,
                            49,
                            "linear",
                            "${magz3-halfopen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20620",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Jun}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20619",
                            "display",
                            19617,
                            0,
                            "linear",
                            "${Jun}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20492",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20490",
                            "opacity",
                            1846,
                            105,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20498",
                            "opacity",
                            8184,
                            66,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20579",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20578",
                            "display",
                            8441,
                            0,
                            "linear",
                            "${instruction}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21297",
                            "display",
                            18407,
                            0,
                            "linear",
                            "${instruction}",
                            'block',
                            'none'
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
                            1597,
                            139,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21273",
                            "top",
                            20063,
                            152,
                            "linear",
                            "${narrator-text-balloon3}",
                            '593px',
                            '345px'
                        ],
                        [
                            "eid21275",
                            "top",
                            20215,
                            95,
                            "linear",
                            "${narrator-text-balloon3}",
                            '345px',
                            '389px'
                        ],
                        [
                            "eid21291",
                            "top",
                            23591,
                            63,
                            "linear",
                            "${narrator-text-balloon3}",
                            '389px',
                            '345px'
                        ],
                        [
                            "eid21290",
                            "top",
                            23654,
                            101,
                            "linear",
                            "${narrator-text-balloon3}",
                            '345px',
                            '593px'
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
                            1538,
                            198,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20569",
                            "height",
                            8292,
                            149,
                            "linear",
                            "${instruction-btn}",
                            '35px',
                            '61px'
                        ],
                        [
                            "eid19341",
                            "width",
                            19567,
                            340,
                            "linear",
                            "${spark2}",
                            '151px',
                            '659px'
                        ],
                        [
                            "eid21318",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21317",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'block'
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
                            1440,
                            98,
                            "linear",
                            "${Text}",
                            '232px',
                            '305px'
                        ],
                        [
                            "eid16571",
                            "top",
                            1538,
                            198,
                            "linear",
                            "${Text}",
                            '305px',
                            '-161px'
                        ],
                        [
                            "eid19326",
                            "left",
                            19589,
                            474,
                            "linear",
                            "${magz-open2}",
                            '46px',
                            '39px'
                        ],
                        [
                            "eid21285",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid21283",
                            "opacity",
                            20063,
                            105,
                            "linear",
                            "${narrator-text-balloon3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21292",
                            "opacity",
                            23685,
                            70,
                            "linear",
                            "${narrator-text-balloon3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21274",
                            "top",
                            20063,
                            152,
                            "linear",
                            "${Text8}",
                            '618px',
                            '370px'
                        ],
                        [
                            "eid21276",
                            "top",
                            20215,
                            95,
                            "linear",
                            "${Text8}",
                            '370px',
                            '414px'
                        ],
                        [
                            "eid21288",
                            "top",
                            23591,
                            63,
                            "linear",
                            "${Text8}",
                            '414px',
                            '370px'
                        ],
                        [
                            "eid21287",
                            "top",
                            23654,
                            101,
                            "linear",
                            "${Text8}",
                            '370px',
                            '618px'
                        ],
                        [
                            "eid20482",
                            "top",
                            1846,
                            158,
                            "linear",
                            "${Text2}",
                            '-193px',
                            '100px'
                        ],
                        [
                            "eid20494",
                            "top",
                            2004,
                            75,
                            "linear",
                            "${Text2}",
                            '100px',
                            '44px'
                        ],
                        [
                            "eid20497",
                            "top",
                            8104,
                            47,
                            "linear",
                            "${Text2}",
                            '44px',
                            '100px'
                        ],
                        [
                            "eid20496",
                            "top",
                            8151,
                            99,
                            "linear",
                            "${Text2}",
                            '100px',
                            '-193px'
                        ],
                        [
                            "eid20529",
                            "height",
                            18863,
                            379,
                            "linear",
                            "${countdown2}",
                            '99px',
                            '418px'
                        ],
                        [
                            "eid21320",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid21321",
                            "display",
                            20063,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21322",
                            "display",
                            20099,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20549",
                            "width",
                            19364,
                            356,
                            "linear",
                            "${countdown3}",
                            '226px',
                            '638px'
                        ],
                        [
                            "eid19323",
                            "height",
                            19589,
                            474,
                            "linear",
                            "${magz-open2}",
                            '545px',
                            '560px'
                        ],
                        [
                            "eid21182",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21181",
                            "display",
                            19793,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19316",
                            "top",
                            8104,
                            250,
                            "linear",
                            "${magz3-closed}",
                            '478px',
                            '15px'
                        ],
                            [ "eid20616", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${instruction}', [] ] ],
                            [ "eid20626", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Penelope}', [] ] ],
                            [ "eid21231", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${b}', [] ] ],
                            [ "eid20625", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${khalid}', [] ] ],
                            [ "eid21257", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${c}', [] ] ],
                            [ "eid20627", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Jun}', [] ] ],
                            [ "eid21232", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${a}', [] ] ],
                            [ "eid20617", "trigger", 8441, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${instruction}', [] ] ],
                            [ "eid20628", "trigger", 19617, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Jun}', [] ] ],
                            [ "eid20630", "trigger", 19617, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${khalid}', [] ] ],
                            [ "eid20629", "trigger", 19617, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Penelope}', [] ] ],
                            [ "eid21233", "trigger", 19793, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${a}', [] ] ],
                            [ "eid21234", "trigger", 19793, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${b}', [] ] ],
                            [ "eid21258", "trigger", 19793, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${c}', [] ] ]
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
                            rect: ['-150px', '0px', '179px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Analyse the 3 images and interpret the storyline for each image. Swap and match the description with the correct image.',
                            id: 'Text3',
                            opacity: '0',
                            align: 'center',
                            rect: ['-55px', '12px', '630px', '114px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '682px', '138px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid20605",
                            "top",
                            75,
                            79,
                            "linear",
                            "${Text3}",
                            '12px',
                            '19px'
                        ],
                        [
                            "eid20606",
                            "top",
                            1131,
                            61,
                            "linear",
                            "${Text3}",
                            '19px',
                            '12px'
                        ],
                        [
                            "eid20604",
                            "left",
                            75,
                            79,
                            "linear",
                            "${Text3}",
                            '-55px',
                            '25px'
                        ],
                        [
                            "eid20609",
                            "left",
                            1131,
                            61,
                            "linear",
                            "${Text3}",
                            '25px',
                            '-55px'
                        ],
                        [
                            "eid20594",
                            "height",
                            0,
                            154,
                            "linear",
                            "${narrator-text-balloon2}",
                            '54px',
                            '165px'
                        ],
                        [
                            "eid20612",
                            "height",
                            1131,
                            119,
                            "linear",
                            "${narrator-text-balloon2}",
                            '165px',
                            '54px'
                        ],
                        [
                            "eid20585",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20613",
                            "opacity",
                            1192,
                            58,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid20595",
                            "width",
                            0,
                            154,
                            "linear",
                            "${narrator-text-balloon2}",
                            '179px',
                            '682px'
                        ],
                        [
                            "eid20615",
                            "width",
                            1131,
                            119,
                            "linear",
                            "${narrator-text-balloon2}",
                            '682px',
                            '179px'
                        ],
                        [
                            "eid20582",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20599",
                            "opacity",
                            75,
                            79,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20608",
                            "opacity",
                            1131,
                            61,
                            "linear",
                            "${Text3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid20607",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid20587",
                            "top",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid20591",
                            "top",
                            154,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid20611",
                            "top",
                            1131,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid20610",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid20596",
                            "left",
                            0,
                            154,
                            "linear",
                            "${narrator-text-balloon2}",
                            '-150px',
                            '0px'
                        ],
                        [
                            "eid20614",
                            "left",
                            1131,
                            119,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0px',
                            '-150px'
                        ]
                    ]
                }
            },
            "Jun": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-7'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy3',
                            opacity: '0',
                            rect: ['-299px', '190px', '336px', '263px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [2, 'rgba(0,0,0,1)', 'solid'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['-291px', '199px', '324px', '251px', 'auto', 'auto'],
                            transform: [[], ['-7'], [0, 0, 0], [1, 1, 1]],
                            id: 'mall',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mall.jpg', '0px', '0px']
                        },
                        {
                            rect: ['-230px', '257px', '252px', '193px', 'auto', 'auto'],
                            transform: [[], ['-7'], [0, 0, 0], [1, 1, 1]],
                            id: 'Jun-shopping-body',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Jun-shopping-body.png', '0px', '0px']
                        },
                        {
                            rect: ['203px', '203px', '65px', '85px', 'auto', 'auto'],
                            id: 'Jun-shopping-head1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Jun-shopping-head1.png', '0px', '0px']
                        },
                        {
                            rect: ['203px', '5px', '65px', '85px', 'auto', 'auto'],
                            id: 'Jun-shopping-head4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Jun-shopping-head4.png', '0px', '0px']
                        },
                        {
                            rect: ['-16px', '293px', '47px', '157px', 'auto', 'auto'],
                            transform: [[], ['-7'], [0, 0, 0], [1, 1, 1]],
                            id: 'Jun-shopping-arm-front',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Jun-shopping-arm-front.png', '0px', '0px']
                        },
                        {
                            rect: ['203px', '7px', '65px', '85px', 'auto', 'auto'],
                            id: 'Jun-shopping-head2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Jun-shopping-head2.png', '0px', '0px']
                        },
                        {
                            rect: ['203px', '7px', '65px', '85px', 'auto', 'auto'],
                            id: 'Jun-shopping-head3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Jun-shopping-head3.png', '0px', '0px']
                        },
                        {
                            rect: ['162px', '80px', '157px', '147px', 'auto', 'auto'],
                            transform: [[], ['-14'], [0, 0, 0], [1, 1, 1]],
                            id: 'Jun-shopping-arm2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Jun-shopping-arm2.png', '0px', '0px']
                        },
                        {
                            rect: ['147px', '85px', '71px', '55px', 'auto', 'auto'],
                            transform: [[], [], [], ['-0.58541', '0.5803']],
                            id: 'tweet-balloon2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tweet-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'center',
                            id: 'Text4',
                            opacity: '0.000000',
                            text: 'Boss',
                            rect: ['93px', '23px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text5',
                            opacity: '0.000000',
                            text: 'Get well soon, Jun Jie.',
                            rect: ['98px', '54px', '109px', '46px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '389px', '252px']
                        }
                    }
                },
                timeline: {
                    duration: 3251,
                    autoPlay: true,
                    labels: {
                        "flip": 1885
                    },
                    data: [
                        [
                            "eid21117",
                            "rotateZ",
                            1885,
                            115,
                            "linear",
                            "${Jun-shopping-head2}",
                            '0deg',
                            '-11deg'
                        ],
                        [
                            "eid21136",
                            "left",
                            1964,
                            194,
                            "linear",
                            "${Jun-shopping-arm2}",
                            '174px',
                            '162px'
                        ],
                        [
                            "eid20991",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${mall}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21122",
                            "top",
                            1885,
                            115,
                            "linear",
                            "${Jun-shopping-head3}",
                            '7px',
                            '10px'
                        ],
                        [
                            "eid21135",
                            "rotateZ",
                            1964,
                            194,
                            "linear",
                            "${Jun-shopping-arm2}",
                            '-14deg',
                            '0deg'
                        ],
                        [
                            "eid21119",
                            "left",
                            1885,
                            115,
                            "linear",
                            "${Jun-shopping-head2}",
                            '203px',
                            '201px'
                        ],
                        [
                            "eid20997",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${Jun-shopping-arm-front}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21125",
                            "opacity",
                            1925,
                            39,
                            "linear",
                            "${Jun-shopping-arm-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21151",
                            "width",
                            2074,
                            198,
                            "linear",
                            "${tweet-balloon2}",
                            '71px',
                            '222px'
                        ],
                        [
                            "eid21069",
                            "top",
                            250,
                            181,
                            "linear",
                            "${Jun-shopping-head4}",
                            '5px',
                            '6px'
                        ],
                        [
                            "eid21094",
                            "top",
                            1613,
                            176,
                            "linear",
                            "${Jun-shopping-head4}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid21039",
                            "rotateZ",
                            0,
                            176,
                            "linear",
                            "${Jun-shopping-arm-front}",
                            '-7deg',
                            '0deg'
                        ],
                        [
                            "eid20990",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${RoundRectCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20987",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Jun-shopping-head4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid21072",
                            "opacity",
                            585,
                            57,
                            "linear",
                            "${Jun-shopping-head4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21075",
                            "opacity",
                            699,
                            83,
                            "linear",
                            "${Jun-shopping-head4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21076",
                            "opacity",
                            1250,
                            57,
                            "linear",
                            "${Jun-shopping-head4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21077",
                            "opacity",
                            1364,
                            83,
                            "linear",
                            "${Jun-shopping-head4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21037",
                            "left",
                            0,
                            176,
                            "linear",
                            "${Jun-shopping-body}",
                            '-230px',
                            '126px'
                        ],
                        [
                            "eid21053",
                            "left",
                            250,
                            591,
                            "linear",
                            "${Jun-shopping-body}",
                            '126px',
                            '65px'
                        ],
                        [
                            "eid21030",
                            "top",
                            0,
                            176,
                            "linear",
                            "${Jun-shopping-arm-front}",
                            '293px',
                            '95px'
                        ],
                        [
                            "eid21029",
                            "left",
                            0,
                            176,
                            "linear",
                            "${Jun-shopping-arm-front}",
                            '-16px',
                            '340px'
                        ],
                        [
                            "eid21055",
                            "left",
                            250,
                            591,
                            "linear",
                            "${Jun-shopping-arm-front}",
                            '340px',
                            '279px'
                        ],
                        [
                            "eid21042",
                            "rotateZ",
                            0,
                            176,
                            "linear",
                            "${RoundRectCopy3}",
                            '-7deg',
                            '0deg'
                        ],
                        [
                            "eid21035",
                            "left",
                            0,
                            176,
                            "linear",
                            "${RoundRectCopy3}",
                            '-299px',
                            '57px'
                        ],
                        [
                            "eid21043",
                            "rotateZ",
                            0,
                            176,
                            "linear",
                            "${Jun-shopping-body}",
                            '-7deg',
                            '0deg'
                        ],
                        [
                            "eid21040",
                            "rotateZ",
                            0,
                            176,
                            "linear",
                            "${mall}",
                            '-7deg',
                            '0deg'
                        ],
                        [
                            "eid21067",
                            "rotateZ",
                            250,
                            181,
                            "linear",
                            "${Jun-shopping-head4}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid21091",
                            "rotateZ",
                            1613,
                            176,
                            "linear",
                            "${Jun-shopping-head4}",
                            '9deg',
                            '0deg'
                        ],
                        [
                            "eid21054",
                            "left",
                            250,
                            181,
                            "linear",
                            "${Jun-shopping-head4}",
                            '266px',
                            '250px'
                        ],
                        [
                            "eid21061",
                            "left",
                            431,
                            410,
                            "linear",
                            "${Jun-shopping-head4}",
                            '250px',
                            '205px'
                        ],
                        [
                            "eid21093",
                            "left",
                            1613,
                            176,
                            "linear",
                            "${Jun-shopping-head4}",
                            '205px',
                            '203px'
                        ],
                        [
                            "eid21177",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid21163",
                            "opacity",
                            2215,
                            57,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21031",
                            "left",
                            0,
                            176,
                            "linear",
                            "${mall}",
                            '-291px',
                            '65px'
                        ],
                        [
                            "eid21174",
                            "top",
                            2215,
                            57,
                            "linear",
                            "${Text5}",
                            '54px',
                            '34px'
                        ],
                        [
                            "eid20995",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${Jun-shopping-body}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21034",
                            "top",
                            0,
                            176,
                            "linear",
                            "${Jun-shopping-head1}",
                            '203px',
                            '5px'
                        ],
                        [
                            "eid21068",
                            "top",
                            250,
                            181,
                            "linear",
                            "${Jun-shopping-head1}",
                            '5px',
                            '6px'
                        ],
                        [
                            "eid21095",
                            "top",
                            1613,
                            176,
                            "linear",
                            "${Jun-shopping-head1}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid21041",
                            "rotateZ",
                            0,
                            176,
                            "linear",
                            "${Jun-shopping-head1}",
                            '-7deg',
                            '0deg'
                        ],
                        [
                            "eid21066",
                            "rotateZ",
                            250,
                            181,
                            "linear",
                            "${Jun-shopping-head1}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid21090",
                            "rotateZ",
                            1613,
                            176,
                            "linear",
                            "${Jun-shopping-head1}",
                            '9deg',
                            '0deg'
                        ],
                        [
                            "eid21175",
                            "left",
                            2215,
                            57,
                            "linear",
                            "${Text4}",
                            '93px',
                            '72px'
                        ],
                        [
                            "eid21032",
                            "top",
                            0,
                            176,
                            "linear",
                            "${mall}",
                            '199px',
                            '1px'
                        ],
                        [
                            "eid21120",
                            "top",
                            1885,
                            115,
                            "linear",
                            "${Jun-shopping-head2}",
                            '7px',
                            '10px'
                        ],
                        [
                            "eid21173",
                            "left",
                            2215,
                            57,
                            "linear",
                            "${Text5}",
                            '98px',
                            '77px'
                        ],
                        [
                            "eid21033",
                            "left",
                            0,
                            176,
                            "linear",
                            "${Jun-shopping-head1}",
                            '-90px',
                            '266px'
                        ],
                        [
                            "eid21052",
                            "left",
                            250,
                            181,
                            "linear",
                            "${Jun-shopping-head1}",
                            '266px',
                            '250px'
                        ],
                        [
                            "eid21060",
                            "left",
                            431,
                            410,
                            "linear",
                            "${Jun-shopping-head1}",
                            '250px',
                            '205px'
                        ],
                        [
                            "eid21092",
                            "left",
                            1613,
                            176,
                            "linear",
                            "${Jun-shopping-head1}",
                            '205px',
                            '203px'
                        ],
                        [
                            "eid21148",
                            "height",
                            2074,
                            198,
                            "linear",
                            "${tweet-balloon2}",
                            '55px',
                            '172px'
                        ],
                        [
                            "eid21150",
                            "left",
                            2074,
                            198,
                            "linear",
                            "${tweet-balloon2}",
                            '147px',
                            '19px'
                        ],
                        [
                            "eid21149",
                            "top",
                            2074,
                            198,
                            "linear",
                            "${tweet-balloon2}",
                            '85px',
                            '-36px'
                        ],
                        [
                            "eid21137",
                            "top",
                            1964,
                            194,
                            "linear",
                            "${Jun-shopping-arm2}",
                            '93px',
                            '80px'
                        ],
                        [
                            "eid21118",
                            "rotateZ",
                            1885,
                            115,
                            "linear",
                            "${Jun-shopping-head3}",
                            '0deg',
                            '-11deg'
                        ],
                        [
                            "eid21038",
                            "top",
                            0,
                            176,
                            "linear",
                            "${Jun-shopping-body}",
                            '257px',
                            '59px'
                        ],
                        [
                            "eid20979",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Jun-shopping-head2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid21101",
                            "opacity",
                            1789,
                            96,
                            "linear",
                            "${Jun-shopping-head2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21036",
                            "top",
                            0,
                            176,
                            "linear",
                            "${RoundRectCopy3}",
                            '190px',
                            '-8px'
                        ],
                        [
                            "eid20986",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Jun-shopping-head3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid21138",
                            "opacity",
                            2215,
                            57,
                            "linear",
                            "${Jun-shopping-head3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21139",
                            "opacity",
                            2329,
                            83,
                            "linear",
                            "${Jun-shopping-head3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21179",
                            "opacity",
                            3054,
                            57,
                            "linear",
                            "${Jun-shopping-head3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21180",
                            "opacity",
                            3168,
                            83,
                            "linear",
                            "${Jun-shopping-head3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21178",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid21164",
                            "opacity",
                            2215,
                            57,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20983",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Jun-shopping-arm2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid21128",
                            "opacity",
                            1885,
                            79,
                            "linear",
                            "${Jun-shopping-arm2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21156",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tweet-balloon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid21155",
                            "opacity",
                            2074,
                            141,
                            "linear",
                            "${tweet-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21121",
                            "left",
                            1885,
                            115,
                            "linear",
                            "${Jun-shopping-head3}",
                            '203px',
                            '201px'
                        ],
                        [
                            "eid20996",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${Jun-shopping-head1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21104",
                            "opacity",
                            1885,
                            0,
                            "linear",
                            "${Jun-shopping-head1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21176",
                            "top",
                            2215,
                            57,
                            "linear",
                            "${Text4}",
                            '23px',
                            '3px'
                        ]
                    ]
                }
            },
            "Penelope": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['7'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy2',
                            opacity: '0',
                            rect: ['221px', '-35px', '336px', '263px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [2, 'rgba(0,0,0,1)', 'solid'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['229px', '-27px', '324px', '251px', 'auto', 'auto'],
                            transform: [[], ['7'], [0, 0, 0], [1, 1, 1]],
                            id: 'feast',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/feast.jpg', '0px', '0px']
                        },
                        {
                            rect: ['105px', '113px', '50px', '105px', 'auto', 'auto'],
                            transform: [[], ['-21'], [0, 0, 0], [1, 1, 1]],
                            id: 'Pene-feast-arm-back',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pene-feast-arm-back.png', '0px', '0px']
                        },
                        {
                            rect: ['32px', '-9px', '107px', '231px', 'auto', 'auto'],
                            transform: [[], ['7'], [0, 0, 0], [1, 1, 1]],
                            id: 'Pene-feast1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pene-feast1.png', '0px', '0px']
                        },
                        {
                            rect: ['32px', '27px', '107px', '229px', 'auto', 'auto'],
                            id: 'Pene-feast2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pene-feast2.png', '0px', '0px']
                        },
                        {
                            rect: ['28px', '110px', '121px', '112px', 'auto', 'auto'],
                            transform: [[], ['-13'], [0, 0, 0], [1, 1, 1]],
                            id: 'Pene-feast-arm-front',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pene-feast-arm-front.png', '0px', '0px']
                        },
                        {
                            rect: ['30px', '26px', '107px', '233px', 'auto', 'auto'],
                            id: 'Pene-feast3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pene-feast3.png', '0px', '0px']
                        },
                        {
                            rect: ['26px', '126px', '109px', '114px', 'auto', 'auto'],
                            id: 'Pene-feast-arm-front3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pene-feast-arm-front3.png', '0px', '0px']
                        },
                        {
                            rect: ['26px', '126px', '113px', '114px', 'auto', 'auto'],
                            id: 'Pene-feast-arm-front2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pene-feast-arm-front2.png', '0px', '0px']
                        },
                        {
                            rect: ['119px', '169px', '92px', '22px', 'auto', 'auto'],
                            transform: [[], ['72'], [0, 0, 0], [1, 1, 1]],
                            id: 'Pic4e',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pic4e.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '340px', '267px']
                        }
                    }
                },
                timeline: {
                    duration: 2558,
                    autoPlay: true,
                    labels: {
                        "flip": 1250
                    },
                    data: [
                        [
                            "eid20925",
                            "left",
                            1562,
                            359,
                            "linear",
                            "${Pic4e}",
                            '104px',
                            '119px'
                        ],
                        [
                            "eid20938",
                            "left",
                            2000,
                            359,
                            "linear",
                            "${Pic4e}",
                            '104px',
                            '119px'
                        ],
                        [
                            "eid20859",
                            "left",
                            0,
                            180,
                            "linear",
                            "${RoundRectCopy2}",
                            '221px',
                            '0px'
                        ],
                        [
                            "eid20811",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Pene-feast2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20896",
                            "opacity",
                            567,
                            350,
                            "linear",
                            "${Pene-feast2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20912",
                            "opacity",
                            1250,
                            104,
                            "linear",
                            "${Pene-feast2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20856",
                            "top",
                            0,
                            180,
                            "linear",
                            "${feast}",
                            '-27px',
                            '8px'
                        ],
                        [
                            "eid20866",
                            "rotateZ",
                            0,
                            180,
                            "linear",
                            "${RoundRectCopy2}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid20812",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Pene-feast3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20905",
                            "opacity",
                            1160,
                            194,
                            "linear",
                            "${Pene-feast3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20809",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Pene-feast-arm-front2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20904",
                            "opacity",
                            1160,
                            194,
                            "linear",
                            "${Pene-feast-arm-front2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20957",
                            "opacity",
                            2359,
                            0,
                            "linear",
                            "${Pene-feast-arm-front2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20960",
                            "opacity",
                            2461,
                            0,
                            "linear",
                            "${Pene-feast-arm-front2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20966",
                            "opacity",
                            2558,
                            0,
                            "linear",
                            "${Pene-feast-arm-front2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20858",
                            "top",
                            0,
                            180,
                            "linear",
                            "${Pene-feast-arm-front}",
                            '86px',
                            '122px'
                        ],
                        [
                            "eid20891",
                            "top",
                            316,
                            184,
                            "linear",
                            "${Pene-feast-arm-front}",
                            '122px',
                            '110px'
                        ],
                        [
                            "eid20924",
                            "top",
                            1562,
                            359,
                            "linear",
                            "${Pic4e}",
                            '202px',
                            '169px'
                        ],
                        [
                            "eid20934",
                            "top",
                            2000,
                            359,
                            "linear",
                            "${Pic4e}",
                            '202px',
                            '169px'
                        ],
                        [
                            "eid20854",
                            "top",
                            0,
                            180,
                            "linear",
                            "${Pene-feast1}",
                            '-9px',
                            '27px'
                        ],
                        [
                            "eid20864",
                            "rotateZ",
                            0,
                            180,
                            "linear",
                            "${feast}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid20857",
                            "left",
                            0,
                            180,
                            "linear",
                            "${Pene-feast-arm-front}",
                            '227px',
                            '6px'
                        ],
                        [
                            "eid20877",
                            "left",
                            250,
                            66,
                            "linear",
                            "${Pene-feast-arm-front}",
                            '6px',
                            '10px'
                        ],
                        [
                            "eid20880",
                            "left",
                            316,
                            184,
                            "linear",
                            "${Pene-feast-arm-front}",
                            '10px',
                            '28px'
                        ],
                        [
                            "eid20862",
                            "top",
                            0,
                            180,
                            "linear",
                            "${Pene-feast-arm-back}",
                            '85px',
                            '121px'
                        ],
                        [
                            "eid20893",
                            "top",
                            316,
                            184,
                            "linear",
                            "${Pene-feast-arm-back}",
                            '121px',
                            '113px'
                        ],
                        [
                            "eid20853",
                            "left",
                            0,
                            180,
                            "linear",
                            "${Pene-feast1}",
                            '238px',
                            '17px'
                        ],
                        [
                            "eid20878",
                            "left",
                            250,
                            250,
                            "linear",
                            "${Pene-feast1}",
                            '17px',
                            '32px'
                        ],
                        [
                            "eid20930",
                            "opacity",
                            1562,
                            94,
                            "linear",
                            "${Pic4e}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20933",
                            "opacity",
                            1833,
                            88,
                            "linear",
                            "${Pic4e}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20936",
                            "opacity",
                            2000,
                            94,
                            "linear",
                            "${Pic4e}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20937",
                            "opacity",
                            2271,
                            88,
                            "linear",
                            "${Pic4e}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20876",
                            "left",
                            250,
                            250,
                            "linear",
                            "${Pene-feast2}",
                            '17px',
                            '32px'
                        ],
                        [
                            "eid20821",
                            "opacity",
                            0,
                            88,
                            "linear",
                            "${Pene-feast-arm-front}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20913",
                            "opacity",
                            1250,
                            104,
                            "linear",
                            "${Pene-feast-arm-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20810",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Pene-feast-arm-front3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20954",
                            "opacity",
                            2359,
                            0,
                            "linear",
                            "${Pene-feast-arm-front3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20963",
                            "opacity",
                            2461,
                            0,
                            "linear",
                            "${Pene-feast-arm-front3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20969",
                            "opacity",
                            2558,
                            0,
                            "linear",
                            "${Pene-feast-arm-front3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20816",
                            "opacity",
                            0,
                            88,
                            "linear",
                            "${RoundRectCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20820",
                            "opacity",
                            0,
                            88,
                            "linear",
                            "${Pene-feast-arm-back}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20914",
                            "opacity",
                            1250,
                            104,
                            "linear",
                            "${Pene-feast-arm-back}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20860",
                            "top",
                            0,
                            180,
                            "linear",
                            "${RoundRectCopy2}",
                            '-35px',
                            '0px'
                        ],
                        [
                            "eid20815",
                            "opacity",
                            0,
                            88,
                            "linear",
                            "${feast}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20926",
                            "width",
                            1562,
                            359,
                            "linear",
                            "${Pic4e}",
                            '37px',
                            '92px'
                        ],
                        [
                            "eid20939",
                            "width",
                            2000,
                            359,
                            "linear",
                            "${Pic4e}",
                            '37px',
                            '92px'
                        ],
                        [
                            "eid20822",
                            "opacity",
                            0,
                            88,
                            "linear",
                            "${Pene-feast1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20899",
                            "opacity",
                            784,
                            135,
                            "linear",
                            "${Pene-feast1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20863",
                            "rotateZ",
                            0,
                            180,
                            "linear",
                            "${Pene-feast1}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid20865",
                            "rotateZ",
                            0,
                            180,
                            "linear",
                            "${Pene-feast-arm-front}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid20890",
                            "rotateZ",
                            316,
                            184,
                            "linear",
                            "${Pene-feast-arm-front}",
                            '0deg',
                            '-13deg'
                        ],
                        [
                            "eid20923",
                            "height",
                            1562,
                            359,
                            "linear",
                            "${Pic4e}",
                            '22px',
                            '61px'
                        ],
                        [
                            "eid20935",
                            "height",
                            2000,
                            359,
                            "linear",
                            "${Pic4e}",
                            '22px',
                            '61px'
                        ],
                        [
                            "eid20867",
                            "rotateZ",
                            0,
                            180,
                            "linear",
                            "${Pene-feast-arm-back}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid20892",
                            "rotateZ",
                            316,
                            184,
                            "linear",
                            "${Pene-feast-arm-back}",
                            '0deg',
                            '-21deg'
                        ],
                        [
                            "eid20855",
                            "left",
                            0,
                            180,
                            "linear",
                            "${feast}",
                            '229px',
                            '8px'
                        ],
                        [
                            "eid20861",
                            "left",
                            0,
                            180,
                            "linear",
                            "${Pene-feast-arm-back}",
                            '304px',
                            '83px'
                        ],
                        [
                            "eid20879",
                            "left",
                            250,
                            66,
                            "linear",
                            "${Pene-feast-arm-back}",
                            '83px',
                            '87px'
                        ],
                        [
                            "eid20881",
                            "left",
                            316,
                            184,
                            "linear",
                            "${Pene-feast-arm-back}",
                            '87px',
                            '105px'
                        ]
                    ]
                }
            },
            "khalid": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['14'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy',
                            opacity: '0',
                            rect: ['112px', '178px', '336px', '263px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [2, 'rgba(0,0,0,1)', 'solid'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['120px', '186px', '324px', '251px', 'auto', 'auto'],
                            transform: [[], ['14'], [0, 0, 0], [1, 1, 1]],
                            id: 'gym',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/gym.jpg', '0px', '0px']
                        },
                        {
                            rect: ['5px', '234px', '324px', '200px', 'auto', 'auto'],
                            transform: [[], ['14'], [0, 0, 0], [1, 1, 1]],
                            id: 'khalid-lift2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/khalid-lift2.png', '0px', '0px']
                        },
                        {
                            rect: ['5px', '59px', '324px', '200px', 'auto', 'auto'],
                            id: 'khalid-lift1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/khalid-lift1.png', '0px', '0px']
                        },
                        {
                            rect: ['80px', '82px', '150px', '140px', 'auto', 'auto'],
                            id: 'khalid-sweat',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/khalid-sweat.png', '0px', '0px']
                        },
                        {
                            rect: ['119px', '82px', '129px', '127px', 'auto', 'auto'],
                            id: 'spark1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            rect: ['115px', '10px', '196px', '249px', 'auto', 'auto'],
                            id: 'khalid-lift4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/khalid-lift4.png', '0px', '0px']
                        },
                        {
                            rect: ['115px', '10px', '196px', '249px', 'auto', 'auto'],
                            id: 'khalid-lift3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/khalid-lift3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '402px', '267px']
                        }
                    }
                },
                timeline: {
                    duration: 2579,
                    autoPlay: true,
                    labels: {
                        "flip": 1793
                    },
                    data: [
                        [
                            "eid20682",
                            "top",
                            0,
                            184,
                            "linear",
                            "${khalid-lift2}",
                            '234px',
                            '59px'
                        ],
                        [
                            "eid20747",
                            "left",
                            1803,
                            403,
                            "linear",
                            "${spark1}",
                            '119px',
                            '16px'
                        ],
                        [
                            "eid20756",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20752",
                            "opacity",
                            1803,
                            98,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20755",
                            "opacity",
                            2127,
                            79,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20785",
                            "width",
                            2206,
                            373,
                            "linear",
                            "${khalid-lift3}",
                            '175px',
                            '196px'
                        ],
                        [
                            "eid20746",
                            "top",
                            1803,
                            403,
                            "linear",
                            "${spark1}",
                            '82px',
                            '-46px'
                        ],
                        [
                            "eid20679",
                            "left",
                            0,
                            184,
                            "linear",
                            "${gym}",
                            '120px',
                            '8px'
                        ],
                        [
                            "eid20786",
                            "height",
                            2206,
                            373,
                            "linear",
                            "${khalid-lift4}",
                            '223px',
                            '249px'
                        ],
                        [
                            "eid20683",
                            "rotateZ",
                            0,
                            184,
                            "linear",
                            "${gym}",
                            '14deg',
                            '0deg'
                        ],
                        [
                            "eid20677",
                            "left",
                            0,
                            184,
                            "linear",
                            "${RoundRectCopy}",
                            '112px',
                            '0px'
                        ],
                        [
                            "eid20745",
                            "height",
                            1803,
                            403,
                            "linear",
                            "${spark1}",
                            '127px',
                            '319px'
                        ],
                        [
                            "eid20787",
                            "top",
                            2206,
                            373,
                            "linear",
                            "${khalid-lift4}",
                            '36px',
                            '10px'
                        ],
                        [
                            "eid20652",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${khalid-lift2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20733",
                            "opacity",
                            1657,
                            136,
                            "linear",
                            "${khalid-lift2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20680",
                            "top",
                            0,
                            184,
                            "linear",
                            "${gym}",
                            '186px',
                            '8px'
                        ],
                        [
                            "eid20648",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${gym}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20641",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-lift3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20736",
                            "opacity",
                            1657,
                            146,
                            "linear",
                            "${khalid-lift3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20762",
                            "opacity",
                            2127,
                            79,
                            "linear",
                            "${khalid-lift3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20763",
                            "opacity",
                            2312,
                            44,
                            "linear",
                            "${khalid-lift3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20764",
                            "opacity",
                            2426,
                            44,
                            "linear",
                            "${khalid-lift3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20765",
                            "opacity",
                            2535,
                            44,
                            "linear",
                            "${khalid-lift3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20684",
                            "rotateZ",
                            0,
                            184,
                            "linear",
                            "${khalid-lift2}",
                            '14deg',
                            '0deg'
                        ],
                        [
                            "eid20783",
                            "top",
                            2206,
                            373,
                            "linear",
                            "${khalid-lift3}",
                            '36px',
                            '10px'
                        ],
                        [
                            "eid20782",
                            "height",
                            2206,
                            373,
                            "linear",
                            "${khalid-lift3}",
                            '223px',
                            '249px'
                        ],
                        [
                            "eid20685",
                            "rotateZ",
                            0,
                            184,
                            "linear",
                            "${RoundRectCopy}",
                            '14deg',
                            '0deg'
                        ],
                        [
                            "eid20647",
                            "opacity",
                            0,
                            75,
                            "linear",
                            "${RoundRectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20678",
                            "top",
                            0,
                            184,
                            "linear",
                            "${RoundRectCopy}",
                            '178px',
                            '0px'
                        ],
                        [
                            "eid20788",
                            "left",
                            2206,
                            373,
                            "linear",
                            "${khalid-lift4}",
                            '136px',
                            '115px'
                        ],
                        [
                            "eid20724",
                            "top",
                            801,
                            449,
                            "linear",
                            "${khalid-sweat}",
                            '71px',
                            '82px'
                        ],
                        [
                            "eid20643",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-lift1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20708",
                            "opacity",
                            541,
                            79,
                            "linear",
                            "${khalid-lift1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20730",
                            "opacity",
                            1301,
                            66,
                            "linear",
                            "${khalid-lift1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20748",
                            "width",
                            1803,
                            403,
                            "linear",
                            "${spark1}",
                            '129px',
                            '324px'
                        ],
                        [
                            "eid20644",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-lift4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20759",
                            "opacity",
                            2061,
                            66,
                            "linear",
                            "${khalid-lift4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20690",
                            "left",
                            250,
                            75,
                            "linear",
                            "${khalid-lift1}",
                            '8px',
                            '11px'
                        ],
                        [
                            "eid20694",
                            "left",
                            325,
                            79,
                            "linear",
                            "${khalid-lift1}",
                            '11px',
                            '5px'
                        ],
                        [
                            "eid20698",
                            "left",
                            404,
                            57,
                            "linear",
                            "${khalid-lift1}",
                            '5px',
                            '9px'
                        ],
                        [
                            "eid20702",
                            "left",
                            461,
                            39,
                            "linear",
                            "${khalid-lift1}",
                            '9px',
                            '5px'
                        ],
                        [
                            "eid20704",
                            "left",
                            500,
                            41,
                            "linear",
                            "${khalid-lift1}",
                            '5px',
                            '8px'
                        ],
                        [
                            "eid20709",
                            "left",
                            677,
                            60,
                            "linear",
                            "${khalid-lift1}",
                            '8px',
                            '11px'
                        ],
                        [
                            "eid20710",
                            "left",
                            737,
                            63,
                            "linear",
                            "${khalid-lift1}",
                            '11px',
                            '5px'
                        ],
                        [
                            "eid20711",
                            "left",
                            801,
                            46,
                            "linear",
                            "${khalid-lift1}",
                            '5px',
                            '9px'
                        ],
                        [
                            "eid20712",
                            "left",
                            847,
                            31,
                            "linear",
                            "${khalid-lift1}",
                            '9px',
                            '5px'
                        ],
                        [
                            "eid20713",
                            "left",
                            878,
                            33,
                            "linear",
                            "${khalid-lift1}",
                            '5px',
                            '8px'
                        ],
                        [
                            "eid20784",
                            "left",
                            2206,
                            373,
                            "linear",
                            "${khalid-lift3}",
                            '136px',
                            '115px'
                        ],
                        [
                            "eid20638",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${khalid-sweat}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20721",
                            "opacity",
                            801,
                            101,
                            "linear",
                            "${khalid-sweat}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20727",
                            "opacity",
                            1146,
                            104,
                            "linear",
                            "${khalid-sweat}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20681",
                            "left",
                            0,
                            184,
                            "linear",
                            "${khalid-lift2}",
                            '116px',
                            '8px'
                        ],
                        [
                            "eid20691",
                            "left",
                            250,
                            75,
                            "linear",
                            "${khalid-lift2}",
                            '8px',
                            '11px'
                        ],
                        [
                            "eid20695",
                            "left",
                            325,
                            79,
                            "linear",
                            "${khalid-lift2}",
                            '11px',
                            '5px'
                        ],
                        [
                            "eid20699",
                            "left",
                            404,
                            57,
                            "linear",
                            "${khalid-lift2}",
                            '5px',
                            '9px'
                        ],
                        [
                            "eid20703",
                            "left",
                            461,
                            39,
                            "linear",
                            "${khalid-lift2}",
                            '9px',
                            '5px'
                        ],
                        [
                            "eid20705",
                            "left",
                            500,
                            41,
                            "linear",
                            "${khalid-lift2}",
                            '5px',
                            '8px'
                        ],
                        [
                            "eid20714",
                            "left",
                            677,
                            60,
                            "linear",
                            "${khalid-lift2}",
                            '8px',
                            '11px'
                        ],
                        [
                            "eid20715",
                            "left",
                            737,
                            63,
                            "linear",
                            "${khalid-lift2}",
                            '11px',
                            '5px'
                        ],
                        [
                            "eid20716",
                            "left",
                            801,
                            46,
                            "linear",
                            "${khalid-lift2}",
                            '5px',
                            '9px'
                        ],
                        [
                            "eid20717",
                            "left",
                            847,
                            31,
                            "linear",
                            "${khalid-lift2}",
                            '9px',
                            '5px'
                        ],
                        [
                            "eid20718",
                            "left",
                            878,
                            33,
                            "linear",
                            "${khalid-lift2}",
                            '5px',
                            '8px'
                        ],
                        [
                            "eid20789",
                            "width",
                            2206,
                            373,
                            "linear",
                            "${khalid-lift4}",
                            '175px',
                            '196px'
                        ]
                    ]
                }
            },
            "text-khalid": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-165px', '320px', '161px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(0,0,0,1)', 'solid'],
                            id: 'RoundRectCopy6',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(138,221,255,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '314px', '155px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'RoundRect2',
                            stroke: [5, 'rgba(185,0,0,1.00)', 'solid'],
                            display: 'none',
                            fill: ['rgba(76,160,255,0.00)']
                        },
                        {
                            rect: ['28px', '-160px', '267px', '152px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            id: 'tweet-balloon',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tweet-balloon.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['94px', '-113px', '139px', '89px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text6',
                            text: 'No pain, no gain!',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['48px', '41px', '227px', '98px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text7',
                            text: 'Yes! <br>I beat my personal record!',
                            opacity: '0.000000',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '324px', '165px']
                        }
                    }
                },
                timeline: {
                    duration: 1686,
                    autoPlay: true,
                    labels: {
                        "notselected": 171,
                        "selected": 635,
                        "flip": 1500
                    },
                    data: [
                        [
                            "eid21206",
                            "background-color",
                            1500,
                            186,
                            "linear",
                            "${RoundRectCopy6}",
                            'rgba(76,160,255,1)',
                            'rgba(138,221,255,1.00)'
                        ],
                        [
                            "eid21201",
                            "top",
                            0,
                            171,
                            "linear",
                            "${RoundRectCopy6}",
                            '-165px',
                            '0px'
                        ],
                        [
                            "eid21217",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid21216",
                            "opacity",
                            1629,
                            57,
                            "linear",
                            "${Text7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21197",
                            "opacity",
                            0,
                            84,
                            "linear",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21212",
                            "opacity",
                            1500,
                            63,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21203",
                            "top",
                            0,
                            171,
                            "linear",
                            "${Text6}",
                            '-113px',
                            '52px'
                        ],
                        [
                            "eid21299",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21300",
                            "display",
                            171,
                            0,
                            "linear",
                            "${RoundRect2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21298",
                            "display",
                            635,
                            0,
                            "linear",
                            "${RoundRect2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21301",
                            "display",
                            674,
                            0,
                            "linear",
                            "${RoundRect2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21202",
                            "top",
                            0,
                            171,
                            "linear",
                            "${tweet-balloon}",
                            '-160px',
                            '5px'
                        ],
                        [
                            "eid21196",
                            "opacity",
                            0,
                            84,
                            "linear",
                            "${tweet-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21195",
                            "opacity",
                            0,
                            84,
                            "linear",
                            "${RoundRectCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21209",
                            "scaleX",
                            1500,
                            186,
                            "linear",
                            "${tweet-balloon}",
                            '1',
                            '-0.99751'
                        ]
                    ]
                }
            },
            "txt-penelope": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '320px', '161px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(0,0,0,1)', 'solid'],
                            id: 'RoundRectCopy7',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(138,221,255,1.00)']
                        },
                        {
                            rect: ['0px', '-5px', '314px', '155px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'RoundRect3',
                            stroke: [5, 'rgba(185,0,0,1.00)', 'solid'],
                            display: 'none',
                            fill: ['rgba(76,160,255,0.00)']
                        },
                        {
                            rect: ['18px', '5px', '287px', '152px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            id: 'tweet-balloonCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tweet-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text6',
                            opacity: '0',
                            text: 'I can’t wait to feast with my family!',
                            rect: ['29px', '52px', '257px', '98px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text7',
                            opacity: '0.000000',
                            text: 'I\'ll gain more weight eating all these.',
                            rect: ['33px', '38px', '257px', '103px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '324px', '165px']
                        }
                    }
                },
                timeline: {
                    duration: 1686,
                    autoPlay: true,
                    labels: {
                        "notselected": 210,
                        "selected": 750,
                        "flip": 1500
                    },
                    data: [
                        [
                            "eid21226",
                            "top",
                            0,
                            171,
                            "linear",
                            "${RoundRectCopy7}",
                            '0px',
                            '-5px'
                        ],
                        [
                            "eid21228",
                            "background-color",
                            1500,
                            186,
                            "linear",
                            "${RoundRectCopy7}",
                            'rgba(76,160,255,1)',
                            'rgba(138,221,255,1.00)'
                        ],
                        [
                            "eid21218",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid21219",
                            "opacity",
                            1629,
                            57,
                            "linear",
                            "${Text7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21221",
                            "opacity",
                            0,
                            84,
                            "linear",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21222",
                            "opacity",
                            1500,
                            63,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21306",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21307",
                            "display",
                            210,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21308",
                            "display",
                            750,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21309",
                            "display",
                            791,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21220",
                            "top",
                            0,
                            171,
                            "linear",
                            "${Text6}",
                            '52px',
                            '43px'
                        ],
                        [
                            "eid21224",
                            "opacity",
                            0,
                            84,
                            "linear",
                            "${tweet-balloonCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21223",
                            "top",
                            0,
                            171,
                            "linear",
                            "${tweet-balloonCopy}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid21225",
                            "scaleX",
                            1500,
                            186,
                            "linear",
                            "${tweet-balloonCopy}",
                            '1',
                            '-0.99751'
                        ],
                        [
                            "eid21227",
                            "opacity",
                            0,
                            84,
                            "linear",
                            "${RoundRectCopy7}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "text-jun": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '320px', '161px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [2, 'rgba(0,0,0,1)', 'solid'],
                            id: 'RoundRectCopy8',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(138,221,255,1.00)']
                        },
                        {
                            rect: ['0px', '-5px', '314px', '155px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'RoundRect4',
                            stroke: [5, 'rgba(185,0,0,1.00)', 'solid'],
                            display: 'none',
                            fill: ['rgba(76,160,255,0.00)']
                        },
                        {
                            rect: ['10px', '5px', '307px', '152px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            id: 'tweet-balloonCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tweet-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text6Copy',
                            opacity: '0',
                            text: 'My favourite brand has opened a branch in Singapore!',
                            rect: ['25px', '52px', '277px', '105px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text7Copy',
                            opacity: '0.000000',
                            text: 'Not feeling well, so I took a day off for some retail therapy.',
                            rect: ['17px', '36px', '292px', '116px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '324px', '165px']
                        }
                    }
                },
                timeline: {
                    duration: 1686,
                    autoPlay: true,
                    labels: {
                        "notselected": 250,
                        "selected": 750,
                        "flip": 1500
                    },
                    data: [
                        [
                            "eid21243",
                            "background-color",
                            1500,
                            186,
                            "linear",
                            "${RoundRectCopy8}",
                            'rgba(76,160,255,1)',
                            'rgba(138,221,255,1.00)'
                        ],
                        [
                            "eid21237",
                            "top",
                            0,
                            171,
                            "linear",
                            "${Text6Copy}",
                            '52px',
                            '35px'
                        ],
                        [
                            "eid21310",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21311",
                            "display",
                            250,
                            0,
                            "linear",
                            "${RoundRect4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21312",
                            "display",
                            750,
                            0,
                            "linear",
                            "${RoundRect4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21313",
                            "display",
                            786,
                            0,
                            "linear",
                            "${RoundRect4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21240",
                            "top",
                            0,
                            171,
                            "linear",
                            "${tweet-balloonCopy2}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid21235",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid21236",
                            "opacity",
                            1629,
                            57,
                            "linear",
                            "${Text7Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21242",
                            "scaleX",
                            1500,
                            186,
                            "linear",
                            "${tweet-balloonCopy2}",
                            '1',
                            '-0.99751'
                        ],
                        [
                            "eid21238",
                            "opacity",
                            0,
                            84,
                            "linear",
                            "${Text6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21239",
                            "opacity",
                            1500,
                            63,
                            "linear",
                            "${Text6Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21244",
                            "opacity",
                            0,
                            84,
                            "linear",
                            "${RoundRectCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21245",
                            "top",
                            0,
                            171,
                            "linear",
                            "${RoundRectCopy8}",
                            '0px',
                            '-5px'
                        ],
                        [
                            "eid21241",
                            "opacity",
                            0,
                            84,
                            "linear",
                            "${tweet-balloonCopy2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("5_edgeActions.js");
})("EDGE-1646797");
