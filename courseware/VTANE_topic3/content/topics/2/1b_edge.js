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
                            id: '_1stQ',
                            type: 'image',
                            rect: ['12px', '-60px', '1000px', '707px', 'auto', 'auto'],
                            clip: 'rect(0px 471.326171875px 334.2401428222656px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mall-inside.jpg",'0px','0px','100%','99.9000015258789%', 'no-repeat'],
                            transform: [[],[],[],['1.116','1.116']]
                        },
                        {
                            id: '_3rdQ',
                            type: 'image',
                            rect: ['12px', '-62px', '1000px', '707px', 'auto', 'auto'],
                            clip: 'rect(335.1254577636719px 471.326171875px 699.83154296875px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mall-inside.jpg",'0px','0px','100%','99.9000015258789%', 'no-repeat'],
                            transform: [[],[],[],['1.116','1.116']]
                        },
                        {
                            id: '_2ndQ',
                            type: 'image',
                            rect: ['11px', '-60px', '1000px', '707px', 'auto', 'auto'],
                            clip: 'rect(0px 998.2078857421875px 334.2401428222656px 471.326171875px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mall-inside.jpg",'0px','0px','100%','99.9000015258789%', 'no-repeat'],
                            transform: [[],[],[],['1.116','1.116']]
                        },
                        {
                            id: '_4thQ',
                            type: 'image',
                            rect: ['11px', '-62px', '1000px', '707px', 'auto', 'auto'],
                            clip: 'rect(335.1254577636719px 998.2078857421875px 698.0394287109375px 471.326171875px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mall-inside.jpg",'0px','0px','100%','99.9000015258789%', 'no-repeat'],
                            transform: [[],[],[],['1.116','1.116']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-75px', '-39px', '1194px', '733px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.48)"],
                            stroke: [5,"rgb(207, 202, 202)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['410px', '74px', '568px', '176px', 'auto', 'auto'],
                            borderRadius: ["20px 20px", "20px 20px", "20px 20px", "20px 20px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(207,202,202,1.00)","solid"],
                            transform: [[],['-1']]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['-652px', '93px', '541px', '148px', 'auto', 'auto'],
                            opacity: '1',
                            text: "Let’s see how creators and audience play their roles.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            transform: [[],['-1']]
                        },
                        {
                            id: 'card1',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['16px', '85px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card2',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['184px', '85px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card3',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['352px', '85px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card4',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['520px', '85px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card5',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['688px', '85px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card6',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['856px', '85px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card7',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['16px', '287px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card8',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['184px', '287px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card9',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['352px', '287px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card10',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['520px', '287px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card11',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['688px', '287px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'card12',
                            symbolName: 'card1',
                            display: 'none',
                            type: 'rect',
                            rect: ['856px', '290px', '155px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            userClass: "cards",
                            transform: [[],[],[],['1.06452','0.85966']]
                        },
                        {
                            id: 'instruction-btn',
                            type: 'image',
                            rect: ['19px', '7px', '196px', '63px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"instruction-btn.png",'0px','0px']
                        },
                        {
                            id: 'mainmenu',
                            display: 'none',
                            type: 'image',
                            rect: ['833px', '512px', '179px', '58px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'Group',
                            display: 'block',
                            type: 'group',
                            rect: ['66', '320', '892', '214', 'auto', 'auto'],
                            c: [
                            {
                                id: 'insBack',
                                display: 'none',
                                type: 'rect',
                                rect: ['0px', '0px', '882px', '204px', 'auto', 'auto'],
                                borderRadius: ["20px 20px", "20px 20px", "20px 20px", "20px 20px"],
                                opacity: '1',
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [5,"rgba(207,202,202,1.00)","solid"],
                                transform: [[],['-5']]
                            },
                            {
                                id: 'insText',
                                display: 'block',
                                type: 'text',
                                rect: ['22px', '24px', '827px', '168px', 'auto', 'auto'],
                                opacity: '1',
                                text: "There are 6 scenarios showcasing the roles of creator and audience. Turn over any 2 cards to find and match the creator and the audience for each scenario.",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                                transform: [[],['-5']]
                            }]
                        },
                        {
                            id: 'startgame-btn',
                            display: 'none',
                            type: 'image',
                            rect: ['744px', '588px', '262px', '85px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"startgame-btn.png",'0px','0px']
                        },
                        {
                            id: 'game-result2',
                            symbolName: 'game-result2',
                            display: 'none',
                            type: 'rect',
                            rect: ['82', '151', '868', '207', 'auto', 'auto']
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
                    duration: 16522,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "left",
                            1000,
                            191,
                            "linear",
                            "${Rectangle2}",
                            '-670px',
                            '402px'
                        ],
                        [
                            "eid259",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid295",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "originX",
                            16148,
                            0,
                            "linear",
                            "${Text3}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_2ndQ}",
                            '0',
                            '0'
                        ],
                        [
                            "eid9",
                            "opacity",
                            210,
                            228,
                            "linear",
                            "${_2ndQ}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            16348,
                            100,
                            "linear",
                            "${startgame-btn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid261",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid297",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid923",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${insText}",
                            'block',
                            'block'
                        ],
                        [
                            "eid926",
                            "display",
                            16448,
                            0,
                            "linear",
                            "${insText}",
                            'block',
                            'block'
                        ],
                        [
                            "eid86",
                            "rotateZ",
                            16129,
                            19,
                            "linear",
                            "${Text3}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid96",
                            "rotateZ",
                            16266,
                            82,
                            "linear",
                            "${Text3}",
                            '-8deg',
                            '-2deg'
                        ],
                        [
                            "eid75",
                            "rotateZ",
                            16055,
                            93,
                            "linear",
                            "${insBack}",
                            '0deg',
                            '-5deg'
                        ],
                        [
                            "eid916",
                            "rotateZ",
                            16416,
                            32,
                            "linear",
                            "${insBack}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid448",
                            "display",
                            0,
                            0,
                            "linear",
                            "${startgame-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid449",
                            "display",
                            15972,
                            0,
                            "linear",
                            "${startgame-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid933",
                            "display",
                            16448,
                            0,
                            "linear",
                            "${startgame-btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_4thQ}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13",
                            "opacity",
                            678,
                            224,
                            "linear",
                            "${_4thQ}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid328",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid325",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid267",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid303",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid931",
                            "display",
                            16448,
                            0,
                            "linear",
                            "${Group}",
                            'block',
                            'none'
                        ],
                        [
                            "eid319",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${insText}",
                            '0',
                            '0'
                        ],
                        [
                            "eid938",
                            "opacity",
                            5732,
                            149,
                            "linear",
                            "${insText}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid924",
                            "opacity",
                            16348,
                            0,
                            "linear",
                            "${insText}",
                            '1',
                            '1'
                        ],
                        [
                            "eid925",
                            "opacity",
                            16448,
                            0,
                            "linear",
                            "${insText}",
                            '1',
                            '1'
                        ],
                        [
                            "eid77",
                            "rotateZ",
                            16055,
                            93,
                            "linear",
                            "${insText}",
                            '0deg',
                            '-5deg'
                        ],
                        [
                            "eid922",
                            "rotateZ",
                            16416,
                            32,
                            "linear",
                            "${insText}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid321",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_3rdQ}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11",
                            "opacity",
                            438,
                            240,
                            "linear",
                            "${_3rdQ}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid264",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid300",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid263",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${insBack}",
                            '0',
                            '0'
                        ],
                        [
                            "eid940",
                            "opacity",
                            5638,
                            243,
                            "linear",
                            "${insBack}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid927",
                            "opacity",
                            16348,
                            0,
                            "linear",
                            "${insBack}",
                            '1',
                            '1'
                        ],
                        [
                            "eid928",
                            "opacity",
                            16448,
                            0,
                            "linear",
                            "${insBack}",
                            '1',
                            '1'
                        ],
                        [
                            "eid327",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "skewY",
                            1000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid262",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "opacity",
                            16348,
                            100,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid82",
                            "originX",
                            16148,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid260",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid296",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid320",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid268",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid74",
                            "originX",
                            16148,
                            0,
                            "linear",
                            "${insBack}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid913",
                            "originX",
                            16416,
                            0,
                            "linear",
                            "${insBack}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid42",
                            "skewX",
                            1000,
                            191,
                            "linear",
                            "${Text3}",
                            '0deg',
                            '-14.23deg'
                        ],
                        [
                            "eid44",
                            "skewX",
                            1307,
                            108,
                            "linear",
                            "${Text3}",
                            '-14.23deg',
                            '0deg'
                        ],
                        [
                            "eid265",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid301",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid450",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid326",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "left",
                            1000,
                            191,
                            "linear",
                            "${Text3}",
                            '-652px',
                            '422px'
                        ],
                        [
                            "eid322",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            210,
                            "linear",
                            "${_1stQ}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid69",
                            "top",
                            0,
                            0,
                            "linear",
                            "${startgame-btn}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid71",
                            "top",
                            15972,
                            176,
                            "linear",
                            "${startgame-btn}",
                            '588px',
                            '474px'
                        ],
                        [
                            "eid76",
                            "originX",
                            16148,
                            0,
                            "linear",
                            "${insText}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid921",
                            "originX",
                            16416,
                            0,
                            "linear",
                            "${insText}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid323",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid318",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid324",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid939",
                            "display",
                            5638,
                            0,
                            "linear",
                            "${insBack}",
                            'none',
                            'block'
                        ],
                        [
                            "eid919",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${insBack}",
                            'block',
                            'block'
                        ],
                        [
                            "eid918",
                            "display",
                            16448,
                            0,
                            "linear",
                            "${insBack}",
                            'block',
                            'block'
                        ],
                        [
                            "eid266",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid302",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid934",
                            "display",
                            0,
                            0,
                            "linear",
                            "${game-result2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid269",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid305",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "rotateZ",
                            16129,
                            19,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid95",
                            "rotateZ",
                            16266,
                            82,
                            "linear",
                            "${Rectangle2}",
                            '-8deg',
                            '-2deg'
                        ],
                        [
                            "eid346",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${instruction-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid348",
                            "opacity",
                            16462,
                            60,
                            "linear",
                            "${instruction-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1000,
                            191,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            16348,
                            100,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "skewX",
                            1000,
                            191,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '-12.78deg'
                        ],
                        [
                            "eid36",
                            "skewX",
                            1307,
                            108,
                            "linear",
                            "${Rectangle2}",
                            '-12.78deg',
                            '0deg'
                        ],
                        [
                            "eid258",
                            "display",
                            0,
                            0,
                            "linear",
                            "${card12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid294",
                            "display",
                            16416,
                            0,
                            "linear",
                            "${card12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid329",
                            "opacity",
                            16416,
                            106,
                            "linear",
                            "${card8}",
                            '0',
                            '1'
                        ],
                            [ "eid937", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${game-result2}', [] ] ]
                    ]
                }
            },
            "card1": {
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
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3',
                            stroke: [3, 'rgb(207, 202, 202)', 'none'],
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            display: 'block',
                            transform: [[], [], [], ['-1']],
                            userClass: 'cardsback',
                            fill: ['rgba(25,118,48,0.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'front',
                            stroke: [3, 'rgba(0,43,2,1.00)', 'none'],
                            rect: ['0px', '-11px', '149px', '232px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['-1']],
                            userClass: 'cardsfront',
                            fill: ['rgba(41,116,225,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "back": 158,
                        "end": 387
                    },
                    data: [
                        [
                            "eid117",
                            "scaleX",
                            0,
                            158,
                            "linear",
                            "${Rectangle3}",
                            '-1',
                            '1'
                        ],
                        [
                            "eid152",
                            "scaleX",
                            158,
                            156,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '-1'
                        ],
                        [
                            "eid145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${front}",
                            'none',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            79,
                            0,
                            "linear",
                            "${front}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            235,
                            0,
                            "linear",
                            "${front}",
                            'block',
                            'none'
                        ],
                        [
                            "eid896",
                            "display",
                            387,
                            0,
                            "linear",
                            "${front}",
                            'none',
                            'block'
                        ],
                        [
                            "eid147",
                            "display",
                            79,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            235,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid897",
                            "display",
                            387,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid910",
                            "top",
                            387,
                            113,
                            "linear",
                            "${front}",
                            '0px',
                            '-11px'
                        ],
                        [
                            "eid911",
                            "top",
                            500,
                            370,
                            "easeOutBounce",
                            "${front}",
                            '-11px',
                            '0px'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            0,
                            158,
                            "linear",
                            "${front}",
                            '-1',
                            '1'
                        ],
                        [
                            "eid150",
                            "scaleX",
                            158,
                            156,
                            "linear",
                            "${front}",
                            '1',
                            '-1'
                        ],
                        [
                            "eid908",
                            "scaleX",
                            314,
                            73,
                            "linear",
                            "${front}",
                            '-1',
                            '1'
                        ]
                    ]
                }
            },
            "card2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "card3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy2',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "card4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy3',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "card5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy4',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "card6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy5',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "card7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy11',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
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
            "card8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy10',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "card9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy9',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "card10": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy8',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
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
            "card11": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy7',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "card12": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '232px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'Rectangle3Copy6',
                            stroke: [3, 'rgb(207, 202, 202)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

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
                            rect: ['-160px', '-295px', '1205px', '880px', 'auto', 'auto'],
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
                            type: 'image',
                            rect: ['304px', '269px', '188px', '61px', 'auto', 'auto'],
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
                    duration: 33466,
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
                            "eid4710",
                            "width",
                            33466,
                            0,
                            "linear",
                            "${RoundRect4}",
                            '1205px',
                            '1205px'
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
                            "eid4408",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${RoundRect4}",
                            '1',
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
                            1190,
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("1b_edgeActions.js");
})("EDGE-186649922");
