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
            js+"controller.js",
            js+"jquery-ui-1.10.3.custom.min.js"
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
                            rect: ['-8px', '0px', '1183px', '837px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"classroom.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-37px', '-102px', '1088px', '686px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.702)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['93px', '-175px', '838px', '105px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Creation Strategies",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [70, "px"], "rgba(0,101,232,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'txt-creation',
                            type: 'image',
                            rect: ['281px', '-88px', '441px', '67px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-creation.png",'0px','0px']
                        },
                        {
                            id: 'text',
                            symbolName: 'text',
                            display: 'none',
                            type: 'rect',
                            rect: ['292px', '442', '199', '125', 'auto', 'auto']
                        },
                        {
                            id: 'image',
                            symbolName: 'image',
                            display: 'none',
                            type: 'rect',
                            rect: ['17px', '442', '246', '125', 'auto', 'auto']
                        },
                        {
                            id: 'colour',
                            symbolName: 'colour',
                            display: 'none',
                            type: 'rect',
                            rect: ['519', '442', '492', '125', 'auto', 'auto']
                        },
                        {
                            id: 'next-btn',
                            display: 'none',
                            type: 'image',
                            rect: ['859px', '383px', '152px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'colour-content',
                            symbolName: 'colour-content',
                            type: 'rect',
                            rect: ['-454', '-16', '1483', '1258', 'auto', 'auto'],
                            userClass: "contents"
                        },
                        {
                            id: 'text-content',
                            symbolName: 'text-content',
                            type: 'rect',
                            rect: ['-454', '-16', '1483', '1258', 'auto', 'auto'],
                            userClass: "contents"
                        },
                        {
                            id: 'image-content',
                            symbolName: 'image-content',
                            type: 'rect',
                            rect: ['-454px', '-16px', '1483', '1258', 'auto', 'auto'],
                            userClass: "contents"
                        },
                        {
                            id: 't1',
                            display: 'none',
                            type: 'rect',
                            rect: ['17px', '442px', '246px', '125px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "triggerClass"
                        },
                        {
                            id: 't2',
                            display: 'none',
                            type: 'rect',
                            rect: ['292px', '442px', '199px', '125px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "triggerClass"
                        },
                        {
                            id: 't3',
                            display: 'none',
                            type: 'rect',
                            rect: ['519px', '442px', '492px', '125px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "triggerClass"
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
                    duration: 36552,
                    autoPlay: true,
                    labels: {
                        "s1": 14098
                    },
                    data: [
                        [
                            "eid12497",
                            "height",
                            2463,
                            161,
                            "linear",
                            "${txt-creation}",
                            '67px',
                            '140px'
                        ],
                        [
                            "eid12145",
                            "background-color",
                            19020,
                            86,
                            "linear",
                            "${Rectangle}",
                            'rgba(255,255,255,0.702)',
                            'rgba(0,0,0,0.70)'
                        ],
                        [
                            "eid12499",
                            "left",
                            2463,
                            161,
                            "linear",
                            "${txt-creation}",
                            '281px',
                            '52px'
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
                            2361,
                            139,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12500",
                            "top",
                            2463,
                            161,
                            "linear",
                            "${txt-creation}",
                            '-88px',
                            '42px'
                        ],
                        [
                            "eid12655",
                            "top",
                            13800,
                            77,
                            "linear",
                            "${txt-creation}",
                            '42px',
                            '164px'
                        ],
                        [
                            "eid12657",
                            "top",
                            13877,
                            162,
                            "linear",
                            "${txt-creation}",
                            '164px',
                            '-161px'
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
                            2302,
                            198,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12146",
                            "opacity",
                            19106,
                            211,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '0.89430894308943'
                        ],
                        [
                            "eid12488",
                            "opacity",
                            36211,
                            341,
                            "linear",
                            "${Rectangle}",
                            '0.894309',
                            '0'
                        ],
                        [
                            "eid14118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14121",
                            "display",
                            13800,
                            0,
                            "linear",
                            "${t3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12498",
                            "width",
                            2463,
                            161,
                            "linear",
                            "${txt-creation}",
                            '441px',
                            '919px'
                        ],
                        [
                            "eid6741",
                            "top",
                            316,
                            184,
                            "linear",
                            "${Text}",
                            '-175px',
                            '230px'
                        ],
                        [
                            "eid6744",
                            "top",
                            2204,
                            98,
                            "linear",
                            "${Text}",
                            '230px',
                            '305px'
                        ],
                        [
                            "eid6746",
                            "top",
                            2302,
                            198,
                            "linear",
                            "${Text}",
                            '305px',
                            '-161px'
                        ],
                        [
                            "eid12510",
                            "display",
                            0,
                            0,
                            "linear",
                            "${image}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12507",
                            "display",
                            12624,
                            0,
                            "linear",
                            "${image}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14120",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14123",
                            "display",
                            13800,
                            0,
                            "linear",
                            "${t1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10899",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bookshop}",
                            '0px',
                            '0px'
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
                            "eid12511",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12508",
                            "display",
                            12812,
                            0,
                            "linear",
                            "${text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12505",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-creation}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12504",
                            "opacity",
                            2463,
                            86,
                            "linear",
                            "${txt-creation}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12660",
                            "opacity",
                            13953,
                            86,
                            "linear",
                            "${txt-creation}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14122",
                            "display",
                            13800,
                            0,
                            "linear",
                            "${t2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10903",
                            "left",
                            0,
                            13953,
                            "linear",
                            "${bookshop}",
                            '-8px',
                            '-152px'
                        ],
                        [
                            "eid12509",
                            "display",
                            0,
                            0,
                            "linear",
                            "${colour}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12506",
                            "display",
                            12970,
                            0,
                            "linear",
                            "${colour}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14246",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14330",
                            "display",
                            36500,
                            0,
                            "linear",
                            "${next-btn}",
                            'block',
                            'block'
                        ],
                            [ "eid12512", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${text}', [] ] ],
                            [ "eid14124", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${text-content}', [] ] ],
                            [ "eid14125", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${colour-content}', [] ] ],
                            [ "eid12513", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${colour}', [] ] ],
                            [ "eid12514", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${image}', [] ] ],
                            [ "eid12712", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${image-content}', [] ] ],
                            [ "eid12516", "trigger", 2624, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${image}', [] ] ],
                            [ "eid12515", "trigger", 12812, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${text}', [] ] ],
                            [ "eid12517", "trigger", 12970, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${colour}', [] ] ]
                    ]
                }
            },
            "text": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-178px', '-259px', '555px', '545px', 'auto', 'auto'],
                            id: 'spark1',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            rect: ['148px', '-354px', '91px', '53px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [5, 'rgba(229,229,229,1.00)', 'solid'],
                            id: 'RoundRect',
                            opacity: 0,
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.7)']
                        },
                        {
                            rect: ['150px', '-353px', '99px', '58px', 'auto', 'auto'],
                            id: 'txt-text',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/txt-text.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '199px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 346,
                    autoPlay: true,
                    data: [
                        [
                            "eid12581",
                            "width",
                            154,
                            192,
                            "linear",
                            "${spark1}",
                            '209px',
                            '555px'
                        ],
                        [
                            "eid12600",
                            "left",
                            0,
                            216,
                            "linear",
                            "${RoundRect}",
                            '148px',
                            '0px'
                        ],
                        [
                            "eid12613",
                            "opacity",
                            0,
                            102,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12577",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12578",
                            "opacity",
                            154,
                            62,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12579",
                            "opacity",
                            297,
                            49,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12575",
                            "top",
                            154,
                            192,
                            "linear",
                            "${spark1}",
                            '-40px',
                            '-259px'
                        ],
                        [
                            "eid12612",
                            "opacity",
                            0,
                            102,
                            "linear",
                            "${txt-text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12604",
                            "height",
                            0,
                            216,
                            "linear",
                            "${txt-text}",
                            '58px',
                            '115px'
                        ],
                        [
                            "eid12580",
                            "left",
                            154,
                            192,
                            "linear",
                            "${spark1}",
                            '-5px',
                            '-178px'
                        ],
                        [
                            "eid12601",
                            "top",
                            0,
                            216,
                            "linear",
                            "${RoundRect}",
                            '-354px',
                            '0px'
                        ],
                        [
                            "eid12576",
                            "height",
                            154,
                            192,
                            "linear",
                            "${spark1}",
                            '205px',
                            '545px'
                        ],
                        [
                            "eid12605",
                            "width",
                            0,
                            216,
                            "linear",
                            "${txt-text}",
                            '99px',
                            '195px'
                        ],
                        [
                            "eid12599",
                            "top",
                            0,
                            216,
                            "linear",
                            "${txt-text}",
                            '-353px',
                            '1px'
                        ],
                        [
                            "eid12603",
                            "width",
                            0,
                            216,
                            "linear",
                            "${RoundRect}",
                            '91px',
                            '189px'
                        ],
                        [
                            "eid12598",
                            "left",
                            0,
                            216,
                            "linear",
                            "${txt-text}",
                            '150px',
                            '2px'
                        ],
                        [
                            "eid12602",
                            "height",
                            0,
                            216,
                            "linear",
                            "${RoundRect}",
                            '53px',
                            '115px'
                        ]
                    ]
                }
            },
            "image": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-141px', '-259px', '555px', '545px', 'auto', 'auto'],
                            id: 'spark1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            rect: ['426px', '-358px', '109px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [5, 'rgba(255,236,66,1.00)', 'solid'],
                            id: 'RoundRectCopy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.7)']
                        },
                        {
                            rect: ['427px', '-351px', '119px', '56px', 'auto', 'auto'],
                            id: 'txt-image',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/txt-image.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '246px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 346,
                    autoPlay: true,
                    data: [
                        [
                            "eid12534",
                            "height",
                            0,
                            216,
                            "linear",
                            "${txt-image}",
                            '56px',
                            '115px'
                        ],
                        [
                            "eid12536",
                            "width",
                            0,
                            216,
                            "linear",
                            "${txt-image}",
                            '119px',
                            '245px'
                        ],
                        [
                            "eid12574",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12562",
                            "opacity",
                            154,
                            62,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12565",
                            "opacity",
                            297,
                            49,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12572",
                            "opacity",
                            0,
                            105,
                            "linear",
                            "${txt-image}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12541",
                            "top",
                            0,
                            216,
                            "linear",
                            "${RoundRectCopy}",
                            '-358px',
                            '0px'
                        ],
                        [
                            "eid12555",
                            "height",
                            154,
                            192,
                            "linear",
                            "${spark1}",
                            '205px',
                            '545px'
                        ],
                        [
                            "eid12540",
                            "top",
                            0,
                            216,
                            "linear",
                            "${txt-image}",
                            '-351px',
                            '7px'
                        ],
                        [
                            "eid12573",
                            "opacity",
                            0,
                            105,
                            "linear",
                            "${RoundRectCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12538",
                            "left",
                            0,
                            216,
                            "linear",
                            "${RoundRectCopy}",
                            '426px',
                            '0px'
                        ],
                        [
                            "eid12539",
                            "width",
                            0,
                            216,
                            "linear",
                            "${RoundRectCopy}",
                            '109px',
                            '235px'
                        ],
                        [
                            "eid12535",
                            "left",
                            0,
                            216,
                            "linear",
                            "${txt-image}",
                            '427px',
                            '1px'
                        ],
                        [
                            "eid12557",
                            "width",
                            154,
                            192,
                            "linear",
                            "${spark1}",
                            '209px',
                            '555px'
                        ],
                        [
                            "eid12556",
                            "top",
                            154,
                            192,
                            "linear",
                            "${spark1}",
                            '-40px',
                            '-259px'
                        ],
                        [
                            "eid12558",
                            "left",
                            154,
                            192,
                            "linear",
                            "${spark1}",
                            '17px',
                            '-141px'
                        ],
                        [
                            "eid12537",
                            "height",
                            0,
                            216,
                            "linear",
                            "${RoundRectCopy}",
                            '51px',
                            '115px'
                        ]
                    ]
                }
            },
            "colour": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-141px', '-259px', '555px', '545px', 'auto', 'auto'],
                            id: 'spark1Copy',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        },
                        {
                            rect: ['-75px', '-342px', '144px', '29px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [5, 'rgba(111,255,99,1.00)', 'solid'],
                            id: 'RoundRectCopy2',
                            opacity: 0,
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.7)']
                        },
                        {
                            rect: ['-78px', '-337px', '149px', '31px', 'auto', 'auto'],
                            id: 'txt-colourtone',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/txt-colourtone.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '492px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 346,
                    autoPlay: true,
                    data: [
                        [
                            "eid12652",
                            "opacity",
                            0,
                            105,
                            "linear",
                            "${RoundRectCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12638",
                            "left",
                            0,
                            216,
                            "linear",
                            "${RoundRectCopy2}",
                            '-75px',
                            '0px'
                        ],
                        [
                            "eid12639",
                            "width",
                            0,
                            216,
                            "linear",
                            "${RoundRectCopy2}",
                            '144px',
                            '482px'
                        ],
                        [
                            "eid12614",
                            "top",
                            154,
                            192,
                            "linear",
                            "${spark1Copy}",
                            '-40px',
                            '-259px'
                        ],
                        [
                            "eid12641",
                            "left",
                            0,
                            216,
                            "linear",
                            "${txt-colourtone}",
                            '-78px',
                            '6px'
                        ],
                        [
                            "eid12644",
                            "top",
                            0,
                            216,
                            "linear",
                            "${RoundRectCopy2}",
                            '-342px',
                            '0px'
                        ],
                        [
                            "eid12620",
                            "width",
                            154,
                            192,
                            "linear",
                            "${spark1Copy}",
                            '209px',
                            '555px'
                        ],
                        [
                            "eid12619",
                            "left",
                            154,
                            192,
                            "linear",
                            "${spark1Copy}",
                            '17px',
                            '-141px'
                        ],
                        [
                            "eid12643",
                            "top",
                            0,
                            216,
                            "linear",
                            "${txt-colourtone}",
                            '-337px',
                            '15px'
                        ],
                        [
                            "eid12615",
                            "height",
                            154,
                            192,
                            "linear",
                            "${spark1Copy}",
                            '205px',
                            '545px'
                        ],
                        [
                            "eid12651",
                            "opacity",
                            0,
                            105,
                            "linear",
                            "${txt-colourtone}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12640",
                            "height",
                            0,
                            216,
                            "linear",
                            "${txt-colourtone}",
                            '31px',
                            '98px'
                        ],
                        [
                            "eid12637",
                            "height",
                            0,
                            216,
                            "linear",
                            "${RoundRectCopy2}",
                            '29px',
                            '115px'
                        ],
                        [
                            "eid12642",
                            "width",
                            0,
                            216,
                            "linear",
                            "${txt-colourtone}",
                            '149px',
                            '477px'
                        ],
                        [
                            "eid12616",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12617",
                            "opacity",
                            154,
                            62,
                            "linear",
                            "${spark1Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12618",
                            "opacity",
                            297,
                            49,
                            "linear",
                            "${spark1Copy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "image-content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['439px', '0px', '1044px', '598px', 'auto', 'auto'],
                            stroke: [5, 'rgb(111, 255, 99)', 'none'],
                            id: 'Rectangle2Copy2',
                            opacity: '0.80458804878049',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.702)']
                        },
                        {
                            rect: ['60px', '614px', '789px', '546px', 'auto', 'auto'],
                            transform: [[], ['16'], [0, 0, 0], [1, 1, 1]],
                            id: 'folder-openCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/folder-open.png', '0px', '0px']
                        },
                        {
                            rect: ['505px', '39px', '368px', '179px', 'auto', 'auto'],
                            id: 'narrator-text-balloon2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(0, 101, 232)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text19',
                            opacity: '0',
                            text: 'Use suitable images to show the audience the feelings you want to convey such as sadness, happiness, anxiousness and curiousness.',
                            rect: ['875px', '55px', '514px', '138px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [31, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text21',
                            opacity: '0',
                            text: 'Match your reaction to each scenario by dragging an expression to the picture on the left.',
                            rect: ['879px', '50px', '501px', '128px', 'auto', 'auto']
                        },
                        {
                            rect: ['498px', '14px', '381px', '179px', 'auto', 'auto'],
                            id: 'txt-image2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/txt-image.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text20',
                            opacity: '0',
                            text: 'Sad',
                            rect: ['1001px', '87px', '154px', '60px', 'auto', 'auto']
                        },
                        {
                            rect: ['512px', '208px', '154px', '154px', 'auto', 'auto'],
                            id: 'right-select',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/emoticon4.png', '0px', '0px']
                        },
                        {
                            rect: ['1064px', '209px', '44px', '44px', 'auto', 'auto'],
                            id: 'right-selectCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/emoticon3.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text20Copy2',
                            opacity: '0',
                            text: 'Happy',
                            rect: ['1001px', '87px', '165px', '60px', 'auto', 'auto']
                        },
                        {
                            rect: ['1064px', '209px', '44px', '44px', 'auto', 'auto'],
                            id: 'right-selectCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/emoticon5.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text20Copy',
                            opacity: '0',
                            text: 'Anxious',
                            rect: ['1001px', '87px', '165px', '60px', 'auto', 'auto']
                        },
                        {
                            rect: ['1064px', '209px', '44px', '44px', 'auto', 'auto'],
                            id: 'right-selectCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/emoticon6.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text20Copy3',
                            opacity: '0',
                            text: 'Curious',
                            rect: ['1001px', '87px', '165px', '60px', 'auto', 'auto']
                        },
                        {
                            rect: ['520px', '186px', '350px', '384px', 'auto', 'auto'],
                            id: 'sad-poster',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sad-poster.png', '0px', '0px']
                        },
                        {
                            rect: ['520px', '186px', '350px', '384px', 'auto', 'auto'],
                            id: 'happy-poster',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/happy-poster.png', '0px', '0px']
                        },
                        {
                            rect: ['520px', '186px', '350px', '384px', 'auto', 'auto'],
                            id: 'curious-poster',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/curious-poster.png', '0px', '0px']
                        },
                        {
                            rect: ['520px', '186px', '350px', '384px', 'auto', 'auto'],
                            id: 'anxious-poster',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/anxious-poster.png', '0px', '0px']
                        },
                        {
                            rect: ['804px', '489px', '38px', '38px', 'auto', 'auto'],
                            id: 'right-select3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['480px', '34px', '430px', '530px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'd1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['480px', '34px', '430px', '530px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'd2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['480px', '34px', '430px', '530px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'd3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['480px', '34px', '430px', '530px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'd4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            userClass: 'emoticons',
                            type: 'rect',
                            id: 'curious',
                            display: 'none',
                            symbolName: 'curious',
                            cursor: 'pointer',
                            rect: ['1027px', '185px', '213', '213', 'auto', 'auto']
                        },
                        {
                            userClass: 'emoticons',
                            type: 'rect',
                            id: 'anxious',
                            display: 'none',
                            symbolName: 'anxious',
                            cursor: 'pointer',
                            rect: ['1027px', '399px', '213', '179', 'auto', 'auto']
                        },
                        {
                            userClass: 'emoticons',
                            type: 'rect',
                            id: 'sad',
                            display: 'none',
                            symbolName: 'sad',
                            cursor: 'pointer',
                            rect: ['1234px', '192px', '213', '213', 'auto', 'auto']
                        },
                        {
                            userClass: 'emoticons',
                            type: 'rect',
                            id: 'happy',
                            display: 'none',
                            symbolName: 'happy',
                            cursor: 'pointer',
                            rect: ['1237px', '382px', '213', '213', 'auto', 'auto']
                        },
                        {
                            rect: ['1404px', '22px', '63px', '57px', 'auto', 'auto'],
                            type: 'image',
                            id: 'close-btn',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn.png', '0px', '0px']
                        },
                        {
                            rect: ['1335px', '502px', '113px', '65px', 'auto', 'auto'],
                            type: 'image',
                            id: 'next_but',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next_but.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1483px', '1258px']
                        }
                    }
                },
                timeline: {
                    duration: 22353,
                    autoPlay: true,
                    labels: {
                        "sk1": 17782,
                        "end": 21951
                    },
                    data: [
                        [
                            "eid14151",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14149",
                            "display",
                            20394,
                            0,
                            "linear",
                            "${d3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14150",
                            "display",
                            20415,
                            0,
                            "linear",
                            "${d3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14316",
                            "left",
                            10087,
                            157,
                            "linear",
                            "${right-selectCopy}",
                            '1064px',
                            '514px'
                        ],
                        [
                            "eid12744",
                            "left",
                            357,
                            203,
                            "linear",
                            "${txt-image2}",
                            '620px',
                            '498px'
                        ],
                        [
                            "eid13245",
                            "left",
                            21850,
                            203,
                            "linear",
                            "${txt-image2}",
                            '498px',
                            '620px'
                        ],
                        [
                            "eid12769",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12768",
                            "opacity",
                            2782,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13065",
                            "opacity",
                            12357,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13068",
                            "opacity",
                            12561,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13206",
                            "opacity",
                            21677,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14324",
                            "left",
                            11216,
                            157,
                            "linear",
                            "${right-selectCopy2}",
                            '1064px',
                            '1042px'
                        ],
                        [
                            "eid14312",
                            "left",
                            9871,
                            129,
                            "linear",
                            "${Text20Copy}",
                            '1001px',
                            '666px'
                        ],
                        [
                            "eid12763",
                            "width",
                            2782,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '368px',
                            '622px'
                        ],
                        [
                            "eid13067",
                            "width",
                            12311,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '622px',
                            '368px'
                        ],
                        [
                            "eid13070",
                            "width",
                            12561,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '368px',
                            '622px'
                        ],
                        [
                            "eid13208",
                            "width",
                            21631,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '622px',
                            '368px'
                        ],
                        [
                            "eid13148",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${anxious-poster}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13151",
                            "opacity",
                            18600,
                            206,
                            "linear",
                            "${anxious-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13174",
                            "opacity",
                            19153,
                            158,
                            "linear",
                            "${anxious-poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13160",
                            "height",
                            18972,
                            128,
                            "linear",
                            "${right-select3}",
                            '38px',
                            '128px'
                        ],
                        [
                            "eid13178",
                            "height",
                            19683,
                            128,
                            "linear",
                            "${right-select3}",
                            '38px',
                            '128px'
                        ],
                        [
                            "eid13186",
                            "height",
                            20394,
                            128,
                            "linear",
                            "${right-select3}",
                            '38px',
                            '128px'
                        ],
                        [
                            "eid13194",
                            "height",
                            21105,
                            128,
                            "linear",
                            "${right-select3}",
                            '38px',
                            '128px'
                        ],
                        [
                            "eid14310",
                            "top",
                            9871,
                            129,
                            "linear",
                            "${Text20Copy}",
                            '87px',
                            '429px'
                        ],
                        [
                            "eid12774",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text19}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12773",
                            "opacity",
                            2906,
                            46,
                            "linear",
                            "${Text19}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13064",
                            "opacity",
                            12250,
                            109,
                            "linear",
                            "${Text19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14264",
                            "opacity",
                            2357,
                            0,
                            "linear",
                            "${Text20Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14311",
                            "opacity",
                            9871,
                            87,
                            "linear",
                            "${Text20Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14266",
                            "opacity",
                            13769,
                            109,
                            "linear",
                            "${Text20Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14322",
                            "height",
                            11216,
                            157,
                            "linear",
                            "${right-selectCopy2}",
                            '44px',
                            '154px'
                        ],
                        [
                            "eid13168",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-select3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13167",
                            "opacity",
                            18972,
                            73,
                            "linear",
                            "${right-select3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13173",
                            "opacity",
                            19153,
                            158,
                            "linear",
                            "${right-select3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13179",
                            "opacity",
                            19683,
                            73,
                            "linear",
                            "${right-select3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13180",
                            "opacity",
                            19864,
                            158,
                            "linear",
                            "${right-select3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13187",
                            "opacity",
                            20394,
                            73,
                            "linear",
                            "${right-select3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13188",
                            "opacity",
                            20575,
                            158,
                            "linear",
                            "${right-select3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13195",
                            "opacity",
                            21105,
                            73,
                            "linear",
                            "${right-select3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13196",
                            "opacity",
                            21286,
                            158,
                            "linear",
                            "${right-select3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14320",
                            "left",
                            11000,
                            129,
                            "linear",
                            "${Text20Copy3}",
                            '1001px',
                            '1196px'
                        ],
                        [
                            "eid14135",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14136",
                            "display",
                            18912,
                            0,
                            "linear",
                            "${d1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14137",
                            "display",
                            18943,
                            0,
                            "linear",
                            "${d1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12946",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-selectCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12847",
                            "opacity",
                            8716,
                            81,
                            "linear",
                            "${right-selectCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13061",
                            "opacity",
                            13769,
                            109,
                            "linear",
                            "${right-selectCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13080",
                            "display",
                            0,
                            0,
                            "linear",
                            "${happy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13076",
                            "display",
                            17805,
                            0,
                            "linear",
                            "${happy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13199",
                            "display",
                            21571,
                            0,
                            "linear",
                            "${happy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13083",
                            "display",
                            0,
                            0,
                            "linear",
                            "${curious}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13079",
                            "display",
                            18100,
                            0,
                            "linear",
                            "${curious}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13202",
                            "display",
                            21571,
                            0,
                            "linear",
                            "${curious}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13147",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${happy-poster}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13183",
                            "opacity",
                            20022,
                            206,
                            "linear",
                            "${happy-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13184",
                            "opacity",
                            20575,
                            158,
                            "linear",
                            "${happy-poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14276",
                            "opacity",
                            3986,
                            0,
                            "linear",
                            "${Text20Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14319",
                            "opacity",
                            11000,
                            87,
                            "linear",
                            "${Text20Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14278",
                            "opacity",
                            13769,
                            109,
                            "linear",
                            "${Text20Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12733",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12720",
                            "opacity",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13232",
                            "opacity",
                            21951,
                            101,
                            "linear",
                            "${close-btn}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13231",
                            "opacity",
                            22252,
                            0,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12848",
                            "height",
                            8716,
                            157,
                            "linear",
                            "${right-selectCopy4}",
                            '44px',
                            '154px'
                        ],
                        [
                            "eid12745",
                            "top",
                            357,
                            203,
                            "linear",
                            "${txt-image2}",
                            '36px',
                            '14px'
                        ],
                        [
                            "eid13242",
                            "top",
                            21850,
                            203,
                            "linear",
                            "${txt-image2}",
                            '14px',
                            '36px'
                        ],
                        [
                            "eid12753",
                            "rotateZ",
                            560,
                            106,
                            "linear",
                            "${txt-image2}",
                            '0deg',
                            '-6deg'
                        ],
                        [
                            "eid12755",
                            "rotateZ",
                            666,
                            2116,
                            "linear",
                            "${txt-image2}",
                            '-6deg',
                            '3deg'
                        ],
                        [
                            "eid12757",
                            "rotateZ",
                            2782,
                            91,
                            "linear",
                            "${txt-image2}",
                            '3deg',
                            '0deg'
                        ],
                        [
                            "eid12730",
                            "top",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '22px',
                            '9px'
                        ],
                        [
                            "eid13229",
                            "top",
                            21951,
                            101,
                            "linear",
                            "${close-btn}",
                            '9px',
                            '22px'
                        ],
                        [
                            "eid12750",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-image2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12749",
                            "opacity",
                            357,
                            102,
                            "linear",
                            "${txt-image2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13244",
                            "opacity",
                            21951,
                            102,
                            "linear",
                            "${txt-image2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13082",
                            "display",
                            0,
                            0,
                            "linear",
                            "${anxious}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13078",
                            "display",
                            17965,
                            0,
                            "linear",
                            "${anxious}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13200",
                            "display",
                            21571,
                            0,
                            "linear",
                            "${anxious}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12702",
                            "left",
                            0,
                            357,
                            "linear",
                            "${folder-openCopy2}",
                            '60px',
                            '442px'
                        ],
                        [
                            "eid13239",
                            "left",
                            21996,
                            357,
                            "linear",
                            "${folder-openCopy2}",
                            '442px',
                            '60px'
                        ],
                        [
                            "eid12701",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${folder-openCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13238",
                            "opacity",
                            22274,
                            79,
                            "linear",
                            "${folder-openCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13146",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${curious-poster}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13175",
                            "opacity",
                            19311,
                            206,
                            "linear",
                            "${curious-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13176",
                            "opacity",
                            19864,
                            158,
                            "linear",
                            "${curious-poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12704",
                            "opacity",
                            0,
                            214,
                            "linear",
                            "${Rectangle2Copy2}",
                            '0.000000',
                            '0.80458804878049'
                        ],
                        [
                            "eid13241",
                            "opacity",
                            22139,
                            214,
                            "linear",
                            "${Rectangle2Copy2}",
                            '0.80458804878049',
                            '0.000000'
                        ],
                        [
                            "eid14325",
                            "width",
                            11216,
                            157,
                            "linear",
                            "${right-selectCopy2}",
                            '44px',
                            '154px'
                        ],
                        [
                            "eid12850",
                            "left",
                            8716,
                            157,
                            "linear",
                            "${right-selectCopy4}",
                            '1064px',
                            '1022px'
                        ],
                        [
                            "eid13145",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sad-poster}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13191",
                            "opacity",
                            20733,
                            206,
                            "linear",
                            "${sad-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13192",
                            "opacity",
                            21286,
                            158,
                            "linear",
                            "${sad-poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12732",
                            "left",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '1404px',
                            '1387px'
                        ],
                        [
                            "eid13233",
                            "left",
                            21951,
                            101,
                            "linear",
                            "${close-btn}",
                            '1387px',
                            '1404px'
                        ],
                        [
                            "eid12729",
                            "height",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '57px',
                            '83px'
                        ],
                        [
                            "eid13230",
                            "height",
                            21951,
                            101,
                            "linear",
                            "${close-btn}",
                            '83px',
                            '57px'
                        ],
                        [
                            "eid14309",
                            "left",
                            7424,
                            197,
                            "linear",
                            "${Text20}",
                            '1001px',
                            '646px'
                        ],
                        [
                            "eid14303",
                            "height",
                            7718,
                            153,
                            "linear",
                            "${right-select}",
                            '44px',
                            '154px'
                        ],
                        [
                            "eid12820",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text20Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12821",
                            "opacity",
                            8500,
                            87,
                            "linear",
                            "${Text20Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13060",
                            "opacity",
                            13769,
                            109,
                            "linear",
                            "${Text20Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14307",
                            "top",
                            7424,
                            197,
                            "linear",
                            "${Text20}",
                            '87px',
                            '265px'
                        ],
                        [
                            "eid12703",
                            "width",
                            0,
                            357,
                            "linear",
                            "${folder-openCopy2}",
                            '789px',
                            '1048px'
                        ],
                        [
                            "eid13240",
                            "width",
                            21996,
                            357,
                            "linear",
                            "${folder-openCopy2}",
                            '1048px',
                            '789px'
                        ],
                        [
                            "eid14302",
                            "top",
                            7718,
                            153,
                            "linear",
                            "${right-select}",
                            '299px',
                            '208px'
                        ],
                        [
                            "eid12849",
                            "width",
                            8716,
                            157,
                            "linear",
                            "${right-selectCopy4}",
                            '44px',
                            '154px'
                        ],
                        [
                            "eid13075",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text21}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13074",
                            "opacity",
                            12685,
                            46,
                            "linear",
                            "${Text21}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13205",
                            "opacity",
                            21571,
                            101,
                            "linear",
                            "${Text21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14128",
                            "display",
                            17289,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14129",
                            "display",
                            17318,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14133",
                            "display",
                            19153,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14134",
                            "display",
                            19196,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14141",
                            "display",
                            19864,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14142",
                            "display",
                            19898,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14152",
                            "display",
                            20575,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14153",
                            "display",
                            20600,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14157",
                            "display",
                            21286,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14158",
                            "display",
                            21310,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13161",
                            "top",
                            18972,
                            128,
                            "linear",
                            "${right-select3}",
                            '489px',
                            '430px'
                        ],
                        [
                            "eid13177",
                            "top",
                            19683,
                            128,
                            "linear",
                            "${right-select3}",
                            '489px',
                            '430px'
                        ],
                        [
                            "eid13185",
                            "top",
                            20394,
                            128,
                            "linear",
                            "${right-select3}",
                            '489px',
                            '430px'
                        ],
                        [
                            "eid13193",
                            "top",
                            21105,
                            128,
                            "linear",
                            "${right-select3}",
                            '489px',
                            '430px'
                        ],
                        [
                            "eid14154",
                            "display",
                            666,
                            0,
                            "linear",
                            "${d4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14155",
                            "display",
                            21047,
                            0,
                            "linear",
                            "${d4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14156",
                            "display",
                            21068,
                            0,
                            "linear",
                            "${d4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13163",
                            "width",
                            18972,
                            128,
                            "linear",
                            "${right-select3}",
                            '38px',
                            '128px'
                        ],
                        [
                            "eid13182",
                            "width",
                            19683,
                            128,
                            "linear",
                            "${right-select3}",
                            '38px',
                            '128px'
                        ],
                        [
                            "eid13190",
                            "width",
                            20394,
                            128,
                            "linear",
                            "${right-select3}",
                            '38px',
                            '128px'
                        ],
                        [
                            "eid13198",
                            "width",
                            21105,
                            128,
                            "linear",
                            "${right-select3}",
                            '38px',
                            '128px'
                        ],
                        [
                            "eid14306",
                            "width",
                            7718,
                            153,
                            "linear",
                            "${right-select}",
                            '44px',
                            '154px'
                        ],
                        [
                            "eid12802",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-select}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14304",
                            "opacity",
                            7718,
                            93,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13058",
                            "opacity",
                            13769,
                            109,
                            "linear",
                            "${right-select}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12819",
                            "top",
                            8500,
                            129,
                            "linear",
                            "${Text20Copy2}",
                            '87px',
                            '241px'
                        ],
                        [
                            "eid14317",
                            "width",
                            10087,
                            157,
                            "linear",
                            "${right-selectCopy}",
                            '44px',
                            '145px'
                        ],
                        [
                            "eid12742",
                            "height",
                            357,
                            203,
                            "linear",
                            "${txt-image2}",
                            '62px',
                            '179px'
                        ],
                        [
                            "eid13243",
                            "height",
                            21850,
                            203,
                            "linear",
                            "${txt-image2}",
                            '179px',
                            '62px'
                        ],
                        [
                            "eid14321",
                            "top",
                            11216,
                            157,
                            "linear",
                            "${right-selectCopy2}",
                            '221px',
                            '363px'
                        ],
                        [
                            "eid12785",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text20}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14308",
                            "opacity",
                            7424,
                            133,
                            "linear",
                            "${Text20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13057",
                            "opacity",
                            13769,
                            109,
                            "linear",
                            "${Text20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14305",
                            "left",
                            7718,
                            153,
                            "linear",
                            "${right-select}",
                            '512px',
                            '492px'
                        ],
                        [
                            "eid13162",
                            "left",
                            18972,
                            128,
                            "linear",
                            "${right-select3}",
                            '804px',
                            '734px'
                        ],
                        [
                            "eid13181",
                            "left",
                            19683,
                            128,
                            "linear",
                            "${right-select3}",
                            '804px',
                            '734px'
                        ],
                        [
                            "eid13189",
                            "left",
                            20394,
                            128,
                            "linear",
                            "${right-select3}",
                            '804px',
                            '734px'
                        ],
                        [
                            "eid13197",
                            "left",
                            21105,
                            128,
                            "linear",
                            "${right-select3}",
                            '804px',
                            '734px'
                        ],
                        [
                            "eid12731",
                            "width",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '63px',
                            '91px'
                        ],
                        [
                            "eid13234",
                            "width",
                            21951,
                            101,
                            "linear",
                            "${close-btn}",
                            '91px',
                            '63px'
                        ],
                        [
                            "eid12698",
                            "top",
                            0,
                            357,
                            "linear",
                            "${folder-openCopy2}",
                            '614px',
                            '0px'
                        ],
                        [
                            "eid13235",
                            "top",
                            21996,
                            357,
                            "linear",
                            "${folder-openCopy2}",
                            '0px',
                            '614px'
                        ],
                        [
                            "eid14313",
                            "top",
                            10087,
                            157,
                            "linear",
                            "${right-selectCopy}",
                            '221px',
                            '373px'
                        ],
                        [
                            "eid14318",
                            "top",
                            11000,
                            129,
                            "linear",
                            "${Text20Copy3}",
                            '87px',
                            '419px'
                        ],
                        [
                            "eid14138",
                            "display",
                            0,
                            0,
                            "linear",
                            "${d2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14139",
                            "display",
                            19631,
                            0,
                            "linear",
                            "${d2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14140",
                            "display",
                            19662,
                            0,
                            "linear",
                            "${d2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12851",
                            "top",
                            8716,
                            157,
                            "linear",
                            "${right-selectCopy4}",
                            '221px',
                            '185px'
                        ],
                        [
                            "eid14314",
                            "height",
                            10087,
                            157,
                            "linear",
                            "${right-selectCopy}",
                            '44px',
                            '128px'
                        ],
                        [
                            "eid14270",
                            "opacity",
                            2357,
                            0,
                            "linear",
                            "${right-selectCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14315",
                            "opacity",
                            10087,
                            81,
                            "linear",
                            "${right-selectCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14272",
                            "opacity",
                            13769,
                            109,
                            "linear",
                            "${right-selectCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12699",
                            "rotateZ",
                            0,
                            357,
                            "linear",
                            "${folder-openCopy2}",
                            '16deg',
                            '0deg'
                        ],
                        [
                            "eid13236",
                            "rotateZ",
                            21996,
                            357,
                            "linear",
                            "${folder-openCopy2}",
                            '0deg',
                            '16deg'
                        ],
                        [
                            "eid12743",
                            "width",
                            357,
                            203,
                            "linear",
                            "${txt-image2}",
                            '132px',
                            '381px'
                        ],
                        [
                            "eid13246",
                            "width",
                            21850,
                            203,
                            "linear",
                            "${txt-image2}",
                            '381px',
                            '132px'
                        ],
                        [
                            "eid13081",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sad}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13077",
                            "display",
                            18262,
                            0,
                            "linear",
                            "${sad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13201",
                            "display",
                            21571,
                            0,
                            "linear",
                            "${sad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12700",
                            "height",
                            0,
                            357,
                            "linear",
                            "${folder-openCopy2}",
                            '546px',
                            '726px'
                        ],
                        [
                            "eid13237",
                            "height",
                            21996,
                            357,
                            "linear",
                            "${folder-openCopy2}",
                            '726px',
                            '546px'
                        ],
                        [
                            "eid12764",
                            "left",
                            2782,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '505px',
                            '826px'
                        ],
                        [
                            "eid13066",
                            "left",
                            12311,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '826px',
                            '505px'
                        ],
                        [
                            "eid13069",
                            "left",
                            12561,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '505px',
                            '826px'
                        ],
                        [
                            "eid13207",
                            "left",
                            21631,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '826px',
                            '505px'
                        ],
                        [
                            "eid12822",
                            "left",
                            8500,
                            129,
                            "linear",
                            "${Text20Copy2}",
                            '1001px',
                            '1176px'
                        ],
                        [
                            "eid14282",
                            "opacity",
                            3986,
                            0,
                            "linear",
                            "${right-selectCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14323",
                            "opacity",
                            11216,
                            81,
                            "linear",
                            "${right-selectCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14284",
                            "opacity",
                            13769,
                            109,
                            "linear",
                            "${right-selectCopy2}",
                            '1',
                            '0'
                        ],
                            [ "eid13110", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sad}', [] ] ],
                            [ "eid13111", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${anxious}', [] ] ],
                            [ "eid13108", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${curious}', [] ] ],
                            [ "eid13109", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${happy}', [] ] ],
                            [ "eid13114", "trigger", 17805, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${happy}', [] ] ],
                            [ "eid13115", "trigger", 17965, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${anxious}', [] ] ],
                            [ "eid13112", "trigger", 18100, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${curious}', [] ] ],
                            [ "eid13113", "trigger", 18262, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sad}', [] ] ],
                            [ "eid13247", "trigger", 21571, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${anxious}', [] ] ],
                            [ "eid13248", "trigger", 21571, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sad}', [] ] ],
                            [ "eid13249", "trigger", 21571, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${happy}', [] ] ],
                            [ "eid13250", "trigger", 21571, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${curious}', [] ] ]
                    ]
                }
            },
            "text-content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['439px', '0px', '1044px', '598px', 'auto', 'auto'],
                            opacity: '0.80458804878049',
                            id: 'Rectangle2Copy',
                            stroke: [5, 'rgb(111, 255, 99)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.702)']
                        },
                        {
                            transform: [[], ['16'], [0, 0, 0], [1, 1, 1]],
                            rect: ['60px', '614px', '789px', '546px', 'auto', 'auto'],
                            id: 'folder-openCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/folder-open.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'narrator-text-balloon2',
                            opacity: '0',
                            rect: ['589px', '47px', '194px', '138px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            rect: ['818px', '57px', '556px', '107px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text22',
                            text: 'A slogan is a short phrase which is used to drive your message clearly to your audience.',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['810px', '74px', '572px', '83px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text22Copy',
                            text: 'They can be used for events, promotions or warnings.',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['842px', '57px', '488px', '107px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text2',
                            text: 'Select the most suitable slogan and match it with the poster on the right.',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['551px', '85px', '314px', '61px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text24',
                            text: 'Keep it simple!',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['541px', '33px', '296px', '215px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            id: 'Text24Copy',
                            text: 'Use suitable words to convey the appropriate feelings.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'right-select4',
                            opacity: '0',
                            rect: ['485px', '225px', '41px', '41px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'right-select4Copy',
                            opacity: '0',
                            rect: ['460px', '316px', '91px', '91px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'arrow-side',
                            opacity: '0',
                            rect: ['896px', '440px', '125px', '122px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arrow-side.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'txt-text2',
                            opacity: '0',
                            rect: ['632px', '33px', '120px', '71px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-text.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'invitation1',
                            opacity: '0',
                            rect: ['920px', '113px', '436px', '325px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/invitation1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'recruitment-poster',
                            opacity: '0',
                            rect: ['1059px', '102px', '365px', '355px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/recruitment-poster.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'yoyo-poster',
                            opacity: '0',
                            rect: ['1490px', '33px', '344px', '424px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yoyo-poster.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Poster-travel',
                            opacity: '0',
                            rect: ['1490px', '102px', '323px', '355px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Poster-travel.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'recruitment-txt',
                            opacity: '0',
                            rect: ['1027px', '458px', '412px', '86px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/recruitment-txt.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'promotion-txt',
                            opacity: '0',
                            rect: ['1027px', '458px', '412px', '86px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/promotion-txt.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'invitation-txt',
                            opacity: '0',
                            rect: ['923px', '458px', '412px', '86px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/invitation-txt.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'competition-txt',
                            opacity: '0',
                            rect: ['1027px', '458px', '412px', '86px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/competition-txt.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'win-poster2',
                            symbolName: 'win-poster',
                            display: 'none',
                            rect: ['1029', '117', '412', '452', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'help-poster',
                            symbolName: 'help-poster',
                            display: 'none',
                            rect: ['1029', '117', '412', '452', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'water-poster',
                            symbolName: 'water-poster',
                            display: 'none',
                            rect: ['1029', '117', '412', '452', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'adopt-poster',
                            symbolName: 'adopt-poster',
                            display: 'none',
                            rect: ['1029', '117', '412', '452', 'auto', 'auto']
                        },
                        {
                            rect: ['522px', '185px', '357', '86', 'auto', 'auto'],
                            userClass: 'slogans',
                            id: 'win-slogan',
                            display: 'none',
                            symbolName: 'win-slogan',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            rect: ['518px', '452px', '360', '112', 'auto', 'auto'],
                            userClass: 'slogans',
                            id: 'help-slogan',
                            display: 'none',
                            symbolName: 'help-slogan',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            rect: ['493px', '354px', '412', '86', 'auto', 'auto'],
                            userClass: 'slogans',
                            id: 'water-slogan',
                            display: 'none',
                            symbolName: 'water-slogan',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            rect: ['498px', '282px', '398', '61', 'auto', 'auto'],
                            userClass: 'slogans',
                            id: 'adopt-slogan',
                            display: 'none',
                            symbolName: 'adopt-slogan',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            rect: ['1404px', '22px', '63px', '57px', 'auto', 'auto'],
                            id: 'close-btn',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['1385px', '534px', '91px', '53px', 'auto', 'auto'],
                            display: 'none',
                            id: 'next_but',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next_but.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1027px', '102px', '425px', '467px', 'auto', 'auto'],
                            id: 'ta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['1025px', '108px', '425px', '467px', 'auto', 'auto'],
                            id: 'tb',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['1025px', '102px', '425px', '467px', 'auto', 'auto'],
                            id: 'tc',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['1025px', '102px', '425px', '467px', 'auto', 'auto'],
                            id: 'td',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['477px', '163px', '444px', '405px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1483px', '1258px']
                        }
                    }
                },
                timeline: {
                    duration: 36214,
                    autoPlay: true,
                    labels: {
                        "skip1": 26356,
                        "p1": 31216,
                        "end": 35720
                    },
                    data: [
                        [
                            "eid13297",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text22}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13296",
                            "opacity",
                            906,
                            46,
                            "linear",
                            "${Text22}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13298",
                            "opacity",
                            5701,
                            46,
                            "linear",
                            "${Text22}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13280",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13281",
                            "opacity",
                            782,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13282",
                            "opacity",
                            10218,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13283",
                            "opacity",
                            26500,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13589",
                            "opacity",
                            31008,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13284",
                            "opacity",
                            33577,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13608",
                            "display",
                            0,
                            0,
                            "linear",
                            "${water-poster}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13693",
                            "display",
                            32348,
                            0,
                            "linear",
                            "${water-poster}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14327",
                            "display",
                            33461,
                            0,
                            "linear",
                            "${water-poster}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13402",
                            "left",
                            18130,
                            120,
                            "linear",
                            "${invitation-txt}",
                            '923px',
                            '1057px'
                        ],
                        [
                            "eid13289",
                            "width",
                            782,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '194px',
                            '706px'
                        ],
                        [
                            "eid13290",
                            "width",
                            10172,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '706px',
                            '220px'
                        ],
                        [
                            "eid13291",
                            "width",
                            26500,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '220px',
                            '640px'
                        ],
                        [
                            "eid13591",
                            "width",
                            30962,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '640px',
                            '220px'
                        ],
                        [
                            "eid13292",
                            "width",
                            33531,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '640px',
                            '368px'
                        ],
                        [
                            "eid13387",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${promotion-txt}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13431",
                            "opacity",
                            21250,
                            52,
                            "linear",
                            "${promotion-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13432",
                            "opacity",
                            22030,
                            135,
                            "linear",
                            "${promotion-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13412",
                            "left",
                            22470,
                            113,
                            "linear",
                            "${recruitment-poster}",
                            '1490px',
                            '1052px'
                        ],
                        [
                            "eid13342",
                            "top",
                            10622,
                            128,
                            "linear",
                            "${right-select4}",
                            '225px',
                            '200px'
                        ],
                        [
                            "eid13422",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${recruitment-poster}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13413",
                            "opacity",
                            22470,
                            39,
                            "linear",
                            "${recruitment-poster}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13417",
                            "opacity",
                            23500,
                            135,
                            "linear",
                            "${recruitment-poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14197",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ta}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14196",
                            "display",
                            31663,
                            0,
                            "linear",
                            "${ta}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14198",
                            "display",
                            31687,
                            0,
                            "linear",
                            "${ta}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13366",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-select4Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13363",
                            "opacity",
                            11250,
                            90,
                            "linear",
                            "${right-select4Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13463",
                            "opacity",
                            26424,
                            147,
                            "linear",
                            "${right-select4Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13478",
                            "display",
                            0,
                            0,
                            "linear",
                            "${help-slogan}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13474",
                            "display",
                            29670,
                            0,
                            "linear",
                            "${help-slogan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13829",
                            "display",
                            35750,
                            0,
                            "linear",
                            "${help-slogan}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13344",
                            "left",
                            10622,
                            128,
                            "linear",
                            "${right-select4}",
                            '485px',
                            '460px'
                        ],
                        [
                            "eid13272",
                            "width",
                            357,
                            143,
                            "linear",
                            "${txt-text2}",
                            '120px',
                            '234px'
                        ],
                        [
                            "eid13837",
                            "width",
                            35750,
                            143,
                            "linear",
                            "${txt-text2}",
                            '234px',
                            '120px'
                        ],
                        [
                            "eid13299",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text22Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13300",
                            "opacity",
                            5747,
                            46,
                            "linear",
                            "${Text22Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13301",
                            "opacity",
                            10172,
                            46,
                            "linear",
                            "${Text22Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid12694",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${folder-openCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13841",
                            "opacity",
                            36132,
                            79,
                            "linear",
                            "${folder-openCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13418",
                            "left",
                            19380,
                            113,
                            "linear",
                            "${yoyo-poster}",
                            '1490px',
                            '1028px'
                        ],
                        [
                            "eid13476",
                            "display",
                            0,
                            0,
                            "linear",
                            "${adopt-slogan}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13472",
                            "display",
                            30242,
                            0,
                            "linear",
                            "${adopt-slogan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13831",
                            "display",
                            35750,
                            0,
                            "linear",
                            "${adopt-slogan}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12696",
                            "width",
                            0,
                            357,
                            "linear",
                            "${folder-openCopy}",
                            '789px',
                            '1048px'
                        ],
                        [
                            "eid13843",
                            "width",
                            35854,
                            357,
                            "linear",
                            "${folder-openCopy}",
                            '1048px',
                            '789px'
                        ],
                        [
                            "eid13414",
                            "left",
                            22380,
                            120,
                            "linear",
                            "${recruitment-txt}",
                            '893px',
                            '1027px'
                        ],
                        [
                            "eid13261",
                            "width",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '63px',
                            '91px'
                        ],
                        [
                            "eid13262",
                            "width",
                            35806,
                            101,
                            "linear",
                            "${close-btn}",
                            '91px',
                            '63px'
                        ],
                        [
                            "eid13349",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-select4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13348",
                            "opacity",
                            10622,
                            90,
                            "linear",
                            "${right-select4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13465",
                            "opacity",
                            26424,
                            147,
                            "linear",
                            "${right-select4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13423",
                            "left",
                            19328,
                            120,
                            "linear",
                            "${competition-txt}",
                            '893px',
                            '1027px'
                        ],
                        [
                            "eid13332",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text24}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13331",
                            "opacity",
                            10398,
                            102,
                            "linear",
                            "${Text24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13462",
                            "opacity",
                            26424,
                            147,
                            "linear",
                            "${Text24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13326",
                            "top",
                            10398,
                            166,
                            "linear",
                            "${Text24}",
                            '85px',
                            '232px'
                        ],
                        [
                            "eid13365",
                            "width",
                            11250,
                            128,
                            "linear",
                            "${right-select4Copy}",
                            '41px',
                            '91px'
                        ],
                        [
                            "eid13362",
                            "height",
                            11250,
                            128,
                            "linear",
                            "${right-select4Copy}",
                            '41px',
                            '91px'
                        ],
                        [
                            "eid13385",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${invitation-txt}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13399",
                            "opacity",
                            18130,
                            52,
                            "linear",
                            "${invitation-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13407",
                            "opacity",
                            19193,
                            135,
                            "linear",
                            "${invitation-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13409",
                            "rotateZ",
                            500,
                            106,
                            "linear",
                            "${txt-text2}",
                            '0deg',
                            '-6deg'
                        ],
                        [
                            "eid13410",
                            "rotateZ",
                            606,
                            116,
                            "linear",
                            "${txt-text2}",
                            '-6deg',
                            '3deg'
                        ],
                        [
                            "eid13411",
                            "rotateZ",
                            722,
                            91,
                            "linear",
                            "${txt-text2}",
                            '3deg',
                            '0deg'
                        ],
                        [
                            "eid14259",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tc}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14204",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${tc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14205",
                            "display",
                            34019,
                            0,
                            "linear",
                            "${tc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13396",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${invitation1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13395",
                            "opacity",
                            17918,
                            39,
                            "linear",
                            "${invitation1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13408",
                            "opacity",
                            19365,
                            135,
                            "linear",
                            "${invitation1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13274",
                            "top",
                            357,
                            143,
                            "linear",
                            "${txt-text2}",
                            '33px',
                            '39px'
                        ],
                        [
                            "eid13833",
                            "top",
                            35750,
                            143,
                            "linear",
                            "${txt-text2}",
                            '39px',
                            '33px'
                        ],
                        [
                            "eid13343",
                            "width",
                            10622,
                            128,
                            "linear",
                            "${right-select4}",
                            '41px',
                            '91px'
                        ],
                        [
                            "eid13374",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${arrow-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13373",
                            "opacity",
                            17957,
                            81,
                            "linear",
                            "${arrow-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13453",
                            "opacity",
                            26285,
                            71,
                            "linear",
                            "${arrow-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13259",
                            "left",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '1404px',
                            '1383px'
                        ],
                        [
                            "eid13260",
                            "left",
                            35806,
                            101,
                            "linear",
                            "${close-btn}",
                            '1383px',
                            '1404px'
                        ],
                        [
                            "eid13253",
                            "height",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '57px',
                            '83px'
                        ],
                        [
                            "eid13254",
                            "height",
                            35806,
                            101,
                            "linear",
                            "${close-btn}",
                            '83px',
                            '57px'
                        ],
                        [
                            "eid13607",
                            "display",
                            0,
                            0,
                            "linear",
                            "${adopt-poster}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13611",
                            "display",
                            31216,
                            0,
                            "linear",
                            "${adopt-poster}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14326",
                            "display",
                            32333,
                            0,
                            "linear",
                            "${adopt-poster}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13327",
                            "left",
                            10398,
                            166,
                            "linear",
                            "${Text24}",
                            '551px',
                            '567px'
                        ],
                        [
                            "eid13285",
                            "left",
                            782,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '589px',
                            '742px'
                        ],
                        [
                            "eid13286",
                            "left",
                            10172,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '742px',
                            '577px'
                        ],
                        [
                            "eid13287",
                            "left",
                            26500,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '577px',
                            '742px'
                        ],
                        [
                            "eid13590",
                            "left",
                            30962,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '742px',
                            '577px'
                        ],
                        [
                            "eid13288",
                            "left",
                            33531,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '742px',
                            '505px'
                        ],
                        [
                            "eid13610",
                            "display",
                            0,
                            0,
                            "linear",
                            "${win-poster2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13791",
                            "display",
                            34607,
                            0,
                            "linear",
                            "${win-poster2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14329",
                            "display",
                            35720,
                            0,
                            "linear",
                            "${win-poster2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14160",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14166",
                            "display",
                            25031,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14167",
                            "display",
                            25053,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14168",
                            "display",
                            30943,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14169",
                            "display",
                            30962,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14170",
                            "display",
                            31968,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14171",
                            "display",
                            32000,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14172",
                            "display",
                            33124,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14173",
                            "display",
                            33148,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14174",
                            "display",
                            34274,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14175",
                            "display",
                            34304,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14176",
                            "display",
                            35411,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14177",
                            "display",
                            35438,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12691",
                            "top",
                            0,
                            357,
                            "linear",
                            "${folder-openCopy}",
                            '614px',
                            '0px'
                        ],
                        [
                            "eid13838",
                            "top",
                            35854,
                            357,
                            "linear",
                            "${folder-openCopy}",
                            '0px',
                            '614px'
                        ],
                        [
                            "eid13426",
                            "left",
                            21105,
                            113,
                            "linear",
                            "${Poster-travel}",
                            '1490px',
                            '1076px'
                        ],
                        [
                            "eid13391",
                            "left",
                            17918,
                            113,
                            "linear",
                            "${invitation1}",
                            '920px',
                            '1016px'
                        ],
                        [
                            "eid13361",
                            "top",
                            11250,
                            128,
                            "linear",
                            "${right-select4Copy}",
                            '341px',
                            '316px'
                        ],
                        [
                            "eid12693",
                            "height",
                            0,
                            357,
                            "linear",
                            "${folder-openCopy}",
                            '546px',
                            '726px'
                        ],
                        [
                            "eid13840",
                            "height",
                            35854,
                            357,
                            "linear",
                            "${folder-openCopy}",
                            '726px',
                            '546px'
                        ],
                        [
                            "eid12695",
                            "left",
                            0,
                            357,
                            "linear",
                            "${folder-openCopy}",
                            '60px',
                            '442px'
                        ],
                        [
                            "eid13842",
                            "left",
                            35854,
                            357,
                            "linear",
                            "${folder-openCopy}",
                            '442px',
                            '60px'
                        ],
                        [
                            "eid13388",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${competition-txt}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13424",
                            "opacity",
                            19328,
                            52,
                            "linear",
                            "${competition-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13425",
                            "opacity",
                            20705,
                            135,
                            "linear",
                            "${competition-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13369",
                            "left",
                            17957,
                            156,
                            "linear",
                            "${arrow-side}",
                            '872px',
                            '946px'
                        ],
                        [
                            "eid13376",
                            "left",
                            18113,
                            124,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13377",
                            "left",
                            18237,
                            133,
                            "linear",
                            "${arrow-side}",
                            '896px',
                            '946px'
                        ],
                        [
                            "eid13378",
                            "left",
                            18370,
                            133,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13379",
                            "left",
                            18503,
                            141,
                            "linear",
                            "${arrow-side}",
                            '896px',
                            '946px'
                        ],
                        [
                            "eid13380",
                            "left",
                            18644,
                            147,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13433",
                            "left",
                            20768,
                            124,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13434",
                            "left",
                            20892,
                            133,
                            "linear",
                            "${arrow-side}",
                            '896px',
                            '946px'
                        ],
                        [
                            "eid13435",
                            "left",
                            21025,
                            133,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13436",
                            "left",
                            21158,
                            141,
                            "linear",
                            "${arrow-side}",
                            '896px',
                            '946px'
                        ],
                        [
                            "eid13437",
                            "left",
                            21299,
                            147,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13438",
                            "left",
                            22500,
                            124,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13439",
                            "left",
                            22624,
                            133,
                            "linear",
                            "${arrow-side}",
                            '896px',
                            '946px'
                        ],
                        [
                            "eid13440",
                            "left",
                            22757,
                            133,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13441",
                            "left",
                            22890,
                            141,
                            "linear",
                            "${arrow-side}",
                            '896px',
                            '946px'
                        ],
                        [
                            "eid13442",
                            "left",
                            23031,
                            147,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13443",
                            "left",
                            24467,
                            124,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13444",
                            "left",
                            24591,
                            133,
                            "linear",
                            "${arrow-side}",
                            '896px',
                            '946px'
                        ],
                        [
                            "eid13445",
                            "left",
                            24724,
                            133,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13446",
                            "left",
                            24857,
                            141,
                            "linear",
                            "${arrow-side}",
                            '896px',
                            '946px'
                        ],
                        [
                            "eid13447",
                            "left",
                            24998,
                            147,
                            "linear",
                            "${arrow-side}",
                            '946px',
                            '896px'
                        ],
                        [
                            "eid13450",
                            "left",
                            26250,
                            106,
                            "linear",
                            "${arrow-side}",
                            '896px',
                            '806px'
                        ],
                        [
                            "eid13364",
                            "left",
                            11250,
                            128,
                            "linear",
                            "${right-select4Copy}",
                            '485px',
                            '460px'
                        ],
                        [
                            "eid13479",
                            "display",
                            0,
                            0,
                            "linear",
                            "${win-slogan}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13475",
                            "display",
                            30496,
                            0,
                            "linear",
                            "${win-slogan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13832",
                            "display",
                            35750,
                            0,
                            "linear",
                            "${win-slogan}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13341",
                            "height",
                            10622,
                            128,
                            "linear",
                            "${right-select4}",
                            '41px',
                            '91px'
                        ],
                        [
                            "eid13279",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13278",
                            "opacity",
                            357,
                            87,
                            "linear",
                            "${txt-text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13835",
                            "opacity",
                            35806,
                            87,
                            "linear",
                            "${txt-text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13386",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${recruitment-txt}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13415",
                            "opacity",
                            22380,
                            52,
                            "linear",
                            "${recruitment-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13416",
                            "opacity",
                            23500,
                            135,
                            "linear",
                            "${recruitment-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14260",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tb}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14202",
                            "display",
                            32842,
                            0,
                            "linear",
                            "${tb}",
                            'block',
                            'block'
                        ],
                        [
                            "eid14201",
                            "display",
                            32861,
                            0,
                            "linear",
                            "${tb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12692",
                            "rotateZ",
                            0,
                            357,
                            "linear",
                            "${folder-openCopy}",
                            '16deg',
                            '0deg'
                        ],
                        [
                            "eid13839",
                            "rotateZ",
                            35854,
                            357,
                            "linear",
                            "${folder-openCopy}",
                            '0deg',
                            '16deg'
                        ],
                        [
                            "eid13273",
                            "left",
                            357,
                            143,
                            "linear",
                            "${txt-text2}",
                            '632px',
                            '572px'
                        ],
                        [
                            "eid13836",
                            "left",
                            35750,
                            143,
                            "linear",
                            "${txt-text2}",
                            '572px',
                            '632px'
                        ],
                        [
                            "eid12697",
                            "opacity",
                            0,
                            214,
                            "linear",
                            "${Rectangle2Copy}",
                            '0.000000',
                            '0.80458804878049'
                        ],
                        [
                            "eid13844",
                            "opacity",
                            36000,
                            214,
                            "linear",
                            "${Rectangle2Copy}",
                            '0.80458804878049',
                            '0.000000'
                        ],
                        [
                            "eid13609",
                            "display",
                            0,
                            0,
                            "linear",
                            "${help-poster}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13750",
                            "display",
                            33474,
                            0,
                            "linear",
                            "${help-poster}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14328",
                            "display",
                            34585,
                            0,
                            "linear",
                            "${help-poster}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13477",
                            "display",
                            0,
                            0,
                            "linear",
                            "${water-slogan}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13473",
                            "display",
                            29958,
                            0,
                            "linear",
                            "${water-slogan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13830",
                            "display",
                            35750,
                            0,
                            "linear",
                            "${water-slogan}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13470",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13469",
                            "opacity",
                            26624,
                            46,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13588",
                            "opacity",
                            30964,
                            46,
                            "linear",
                            "${Text2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13421",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${yoyo-poster}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13419",
                            "opacity",
                            19380,
                            39,
                            "linear",
                            "${yoyo-poster}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13420",
                            "opacity",
                            20970,
                            135,
                            "linear",
                            "${yoyo-poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14258",
                            "display",
                            0,
                            0,
                            "linear",
                            "${td}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14207",
                            "display",
                            35086,
                            0,
                            "linear",
                            "${td}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14208",
                            "display",
                            35107,
                            0,
                            "linear",
                            "${td}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13360",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text24Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13359",
                            "opacity",
                            11085,
                            117,
                            "linear",
                            "${Text24Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13464",
                            "opacity",
                            26424,
                            147,
                            "linear",
                            "${Text24Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13251",
                            "top",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '22px',
                            '14px'
                        ],
                        [
                            "eid13252",
                            "top",
                            35806,
                            101,
                            "linear",
                            "${close-btn}",
                            '14px',
                            '22px'
                        ],
                        [
                            "eid13429",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Poster-travel}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13427",
                            "opacity",
                            21105,
                            39,
                            "linear",
                            "${Poster-travel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13428",
                            "opacity",
                            22250,
                            135,
                            "linear",
                            "${Poster-travel}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13355",
                            "top",
                            11000,
                            202,
                            "linear",
                            "${Text24Copy}",
                            '33px',
                            '320px'
                        ],
                        [
                            "eid14187",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14188",
                            "display",
                            26187,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14186",
                            "display",
                            31663,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14189",
                            "display",
                            31687,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14190",
                            "display",
                            32842,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14191",
                            "display",
                            32861,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14192",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14193",
                            "display",
                            34019,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14194",
                            "display",
                            35086,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14195",
                            "display",
                            35107,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13430",
                            "left",
                            21250,
                            120,
                            "linear",
                            "${promotion-txt}",
                            '893px',
                            '1027px'
                        ],
                        [
                            "eid13354",
                            "left",
                            11000,
                            202,
                            "linear",
                            "${Text24Copy}",
                            '541px',
                            '564px'
                        ],
                        [
                            "eid13255",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13256",
                            "opacity",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13257",
                            "opacity",
                            35806,
                            101,
                            "linear",
                            "${close-btn}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13258",
                            "opacity",
                            36107,
                            0,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13271",
                            "height",
                            357,
                            143,
                            "linear",
                            "${txt-text2}",
                            '71px',
                            '138px'
                        ],
                        [
                            "eid13834",
                            "height",
                            35750,
                            143,
                            "linear",
                            "${txt-text2}",
                            '138px',
                            '71px'
                        ],
                            [ "eid13725", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${water-poster}', [] ] ],
                            [ "eid13726", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${win-poster2}', [] ] ],
                            [ "eid13483", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${help-slogan}', [] ] ],
                            [ "eid13723", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${help-poster}', [] ] ],
                            [ "eid13724", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${adopt-poster}', [] ] ],
                            [ "eid13482", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${water-slogan}', [] ] ],
                            [ "eid13481", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${adopt-slogan}', [] ] ],
                            [ "eid13480", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${win-slogan}', [] ] ],
                            [ "eid13486", "trigger", 26670, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${help-slogan}', [] ] ],
                            [ "eid13485", "trigger", 29958, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${water-slogan}', [] ] ],
                            [ "eid13487", "trigger", 30242, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${adopt-slogan}', [] ] ],
                            [ "eid13484", "trigger", 30496.150551028, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${win-slogan}', [] ] ],
                            [ "eid13727", "trigger", 31216, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${adopt-poster}', [] ] ],
                            [ "eid14178", "trigger", 31643, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${adopt-poster}', [] ] ],
                            [ "eid14179", "trigger", 31687, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${adopt-poster}', [] ] ],
                            [ "eid14288", "trigger", 31968, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${adopt-poster}', [] ] ],
                            [ "eid14289", "trigger", 32000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${adopt-poster}', [] ] ],
                            [ "eid13728", "trigger", 32348, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${water-poster}', [] ] ],
                            [ "eid14180", "trigger", 32820, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${water-poster}', [] ] ],
                            [ "eid14181", "trigger", 32861, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${water-poster}', [] ] ],
                            [ "eid14290", "trigger", 33124, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${water-poster}', [] ] ],
                            [ "eid14291", "trigger", 33148, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${water-poster}', [] ] ],
                            [ "eid13751", "trigger", 33474, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${help-poster}', [] ] ],
                            [ "eid14182", "trigger", 33979, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${help-poster}', [] ] ],
                            [ "eid14183", "trigger", 34019, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${help-poster}', [] ] ],
                            [ "eid14292", "trigger", 34274, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${help-poster}', [] ] ],
                            [ "eid14293", "trigger", 34304, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${help-poster}', [] ] ],
                            [ "eid13792", "trigger", 34607, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${win-poster2}', [] ] ],
                            [ "eid14184", "trigger", 35061, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${win-poster2}', [] ] ],
                            [ "eid14185", "trigger", 35107, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${win-poster2}', [] ] ],
                            [ "eid14294", "trigger", 35411, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${win-poster2}', [] ] ],
                            [ "eid14295", "trigger", 35438, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${win-poster2}', [] ] ],
                            [ "eid13848", "trigger", 35750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${water-slogan}', [] ] ],
                            [ "eid13846", "trigger", 35750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${adopt-slogan}', [] ] ],
                            [ "eid13845", "trigger", 35750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${help-slogan}', [] ] ],
                            [ "eid13847", "trigger", 35750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${win-slogan}', [] ] ]
                    ]
                }
            },
            "colour-content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['439px', '0px', '1044px', '598px', 'auto', 'auto'],
                            stroke: [5, 'rgb(111, 255, 99)', 'none'],
                            id: 'Rectangle2',
                            opacity: '0.80458804878049',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.702)']
                        },
                        {
                            rect: ['60px', '614px', '789px', '546px', 'auto', 'auto'],
                            transform: [[], ['16'], [0, 0, 0], [1, 1, 1]],
                            id: 'folder-open',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/folder-open.png', '0px', '0px']
                        },
                        {
                            rect: ['772px', '33px', '194px', '137px', 'auto', 'auto'],
                            id: 'narrator-text-balloon2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/narrator-text-balloon.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['1013px', '53px', '338px', '83px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text3',
                            text: 'Colour plays a big role in creating feelings. ',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['1008px', '59px', '352px', '139px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text2',
                            text: 'Use bold and attractive colours to attract your audience\'s attention.',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [34, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['1001px', '46px', '359px', '100px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4',
                            text: 'Select the most suitable tone and match it with the poster on the right.',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            id: 'txt-colourtone',
                            rect: ['514px', '-80px', '334px', '93px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-colourtone.png', '0px', '0px']
                        },
                        {
                            rect: ['1032px', '166px', '404px', '404px', 'auto', 'auto'],
                            id: 'happy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/happy.png', '0px', '0px']
                        },
                        {
                            rect: ['1032px', '166px', '404px', '404px', 'auto', 'auto'],
                            id: 'gloomy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/gloomy.png', '0px', '0px']
                        },
                        {
                            rect: ['1032px', '166px', '404px', '404px', 'auto', 'auto'],
                            id: 'danger',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/danger.png', '0px', '0px']
                        },
                        {
                            rect: ['1062px', '498px', '40px', '40px', 'auto', 'auto'],
                            id: 'right-select',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['946px', '61px', '529px', '549px', 'auto', 'auto'],
                            id: 'spark2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['663px', '167px', '256', '180', 'auto', 'auto'],
                            id: 'sad-icon',
                            display: 'none',
                            symbolName: 'sad-icon',
                            cursor: 'pointer',
                            userClass: 'icons'
                        },
                        {
                            type: 'rect',
                            rect: ['490px', '330px', '256', '180', 'auto', 'auto'],
                            id: 'fun-icon',
                            display: 'none',
                            symbolName: 'fun-icon',
                            cursor: 'pointer',
                            userClass: 'icons'
                        },
                        {
                            type: 'rect',
                            rect: ['568', '396', '256', '180', 'auto', 'auto'],
                            id: 'danger-icon',
                            display: 'none',
                            symbolName: 'danger-icon',
                            cursor: 'pointer',
                            userClass: 'icons'
                        },
                        {
                            rect: ['1404px', '22px', '63px', '57px', 'auto', 'auto'],
                            type: 'image',
                            id: 'close-btn',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close-btn.png', '0px', '0px']
                        },
                        {
                            rect: ['1371px', '526px', '104px', '60px', 'auto', 'auto'],
                            type: 'image',
                            id: 'next_but2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next_but.png', '0px', '0px']
                        },
                        {
                            rect: ['1021px', '161px', '439px', '409px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'ta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['1021px', '163px', '439px', '409px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tb',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['1014px', '163px', '439px', '409px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'tc',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['475px', '150px', '426px', '426px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1483px', '1258px']
                        }
                    }
                },
                timeline: {
                    duration: 23432,
                    autoPlay: true,
                    labels: {
                        "s1": 20397,
                        "end": 23019
                    },
                    data: [
                        [
                            "eid13922",
                            "display",
                            0,
                            0,
                            "linear",
                            "${danger-icon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13924",
                            "display",
                            8537,
                            0,
                            "linear",
                            "${danger-icon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14078",
                            "display",
                            22910,
                            0,
                            "linear",
                            "${danger-icon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13861",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13862",
                            "opacity",
                            782,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13863",
                            "opacity",
                            8172,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13864",
                            "opacity",
                            8367,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13865",
                            "opacity",
                            22956,
                            124,
                            "linear",
                            "${narrator-text-balloon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14107",
                            "opacity",
                            23208,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14108",
                            "opacity",
                            23332,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14014",
                            "top",
                            19300,
                            247,
                            "linear",
                            "${spark2}",
                            '240px',
                            '61px'
                        ],
                        [
                            "eid14047",
                            "top",
                            20476,
                            247,
                            "linear",
                            "${spark2}",
                            '240px',
                            '61px'
                        ],
                        [
                            "eid14062",
                            "top",
                            21700,
                            247,
                            "linear",
                            "${spark2}",
                            '240px',
                            '61px'
                        ],
                        [
                            "eid12675",
                            "height",
                            0,
                            357,
                            "linear",
                            "${folder-open}",
                            '546px',
                            '726px'
                        ],
                        [
                            "eid14102",
                            "height",
                            23075,
                            357,
                            "linear",
                            "${folder-open}",
                            '726px',
                            '546px'
                        ],
                        [
                            "eid12677",
                            "width",
                            0,
                            357,
                            "linear",
                            "${folder-open}",
                            '789px',
                            '1048px'
                        ],
                        [
                            "eid14105",
                            "width",
                            23075,
                            357,
                            "linear",
                            "${folder-open}",
                            '1048px',
                            '789px'
                        ],
                        [
                            "eid13882",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt-colourtone}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13883",
                            "opacity",
                            357,
                            87,
                            "linear",
                            "${txt-colourtone}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14082",
                            "opacity",
                            23075,
                            87,
                            "linear",
                            "${txt-colourtone}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13857",
                            "left",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '1404px',
                            '1384px'
                        ],
                        [
                            "eid13858",
                            "left",
                            23019,
                            101,
                            "linear",
                            "${close-btn}",
                            '1384px',
                            '1404px'
                        ],
                        [
                            "eid12678",
                            "rotateZ",
                            0,
                            357,
                            "linear",
                            "${folder-open}",
                            '16deg',
                            '0deg'
                        ],
                        [
                            "eid14101",
                            "rotateZ",
                            23075,
                            357,
                            "linear",
                            "${folder-open}",
                            '0deg',
                            '16deg'
                        ],
                        [
                            "eid13851",
                            "height",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '57px',
                            '83px'
                        ],
                        [
                            "eid13852",
                            "height",
                            23019,
                            101,
                            "linear",
                            "${close-btn}",
                            '83px',
                            '57px'
                        ],
                        [
                            "eid13921",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sad-icon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13926",
                            "display",
                            9092,
                            0,
                            "linear",
                            "${sad-icon}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14079",
                            "display",
                            22910,
                            0,
                            "linear",
                            "${sad-icon}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13915",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13907",
                            "opacity",
                            4390,
                            62,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13914",
                            "opacity",
                            8126,
                            46,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14031",
                            "height",
                            19800,
                            152,
                            "linear",
                            "${right-select}",
                            '40px',
                            '100px'
                        ],
                        [
                            "eid14054",
                            "height",
                            21010,
                            152,
                            "linear",
                            "${right-select}",
                            '40px',
                            '100px'
                        ],
                        [
                            "eid14069",
                            "height",
                            22222,
                            152,
                            "linear",
                            "${right-select}",
                            '40px',
                            '100px'
                        ],
                        [
                            "eid13885",
                            "width",
                            357,
                            143,
                            "linear",
                            "${txt-colourtone}",
                            '334px',
                            '511px'
                        ],
                        [
                            "eid14084",
                            "width",
                            23019,
                            143,
                            "linear",
                            "${txt-colourtone}",
                            '511px',
                            '334px'
                        ],
                        [
                            "eid13884",
                            "left",
                            357,
                            143,
                            "linear",
                            "${txt-colourtone}",
                            '514px',
                            '480px'
                        ],
                        [
                            "eid14083",
                            "left",
                            23019,
                            143,
                            "linear",
                            "${txt-colourtone}",
                            '480px',
                            '514px'
                        ],
                        [
                            "eid13881",
                            "height",
                            357,
                            143,
                            "linear",
                            "${txt-colourtone}",
                            '71px',
                            '93px'
                        ],
                        [
                            "eid14081",
                            "height",
                            23019,
                            143,
                            "linear",
                            "${txt-colourtone}",
                            '93px',
                            '71px'
                        ],
                        [
                            "eid13867",
                            "left",
                            782,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '772px',
                            '961px'
                        ],
                        [
                            "eid13895",
                            "left",
                            4344,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '961px',
                            '961px'
                        ],
                        [
                            "eid13902",
                            "left",
                            4452,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '961px',
                            '961px'
                        ],
                        [
                            "eid13868",
                            "left",
                            8126,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '961px',
                            '736px'
                        ],
                        [
                            "eid13869",
                            "left",
                            8367,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '736px',
                            '956px'
                        ],
                        [
                            "eid13870",
                            "left",
                            22910,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '956px',
                            '577px'
                        ],
                        [
                            "eid13871",
                            "left",
                            23162,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '742px',
                            '505px'
                        ],
                        [
                            "eid14022",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14018",
                            "opacity",
                            19300,
                            56,
                            "linear",
                            "${spark2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14021",
                            "opacity",
                            19491,
                            55,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14049",
                            "opacity",
                            20476,
                            56,
                            "linear",
                            "${spark2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14050",
                            "opacity",
                            20667,
                            55,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14064",
                            "opacity",
                            21700,
                            56,
                            "linear",
                            "${spark2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14065",
                            "opacity",
                            21891,
                            55,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13877",
                            "top",
                            357,
                            143,
                            "linear",
                            "${txt-colourtone}",
                            '-80px',
                            '40px'
                        ],
                        [
                            "eid14080",
                            "top",
                            23019,
                            143,
                            "linear",
                            "${txt-colourtone}",
                            '40px',
                            '-80px'
                        ],
                        [
                            "eid13923",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fun-icon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13925",
                            "display",
                            8800,
                            0,
                            "linear",
                            "${fun-icon}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14077",
                            "display",
                            22910,
                            0,
                            "linear",
                            "${fun-icon}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12679",
                            "left",
                            0,
                            357,
                            "linear",
                            "${folder-open}",
                            '60px',
                            '442px'
                        ],
                        [
                            "eid14104",
                            "left",
                            23075,
                            357,
                            "linear",
                            "${folder-open}",
                            '442px',
                            '60px'
                        ],
                        [
                            "eid12676",
                            "top",
                            0,
                            357,
                            "linear",
                            "${folder-open}",
                            '614px',
                            '0px'
                        ],
                        [
                            "eid14100",
                            "top",
                            23075,
                            357,
                            "linear",
                            "${folder-open}",
                            '0px',
                            '614px'
                        ],
                        [
                            "eid14033",
                            "width",
                            19800,
                            152,
                            "linear",
                            "${right-select}",
                            '40px',
                            '100px'
                        ],
                        [
                            "eid14058",
                            "width",
                            21010,
                            152,
                            "linear",
                            "${right-select}",
                            '40px',
                            '100px'
                        ],
                        [
                            "eid14073",
                            "width",
                            22222,
                            152,
                            "linear",
                            "${right-select}",
                            '40px',
                            '100px'
                        ],
                        [
                            "eid13890",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13889",
                            "opacity",
                            906,
                            46,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13891",
                            "opacity",
                            4344,
                            46,
                            "linear",
                            "${Text3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13853",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13854",
                            "opacity",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13855",
                            "opacity",
                            23019,
                            101,
                            "linear",
                            "${close-btn}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13856",
                            "opacity",
                            23320,
                            0,
                            "linear",
                            "${close-btn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12664",
                            "opacity",
                            0,
                            214,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '0.80458804878049'
                        ],
                        [
                            "eid14106",
                            "opacity",
                            23218,
                            214,
                            "linear",
                            "${Rectangle2}",
                            '0.80458804878049',
                            '0.000000'
                        ],
                        [
                            "eid13859",
                            "width",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '63px',
                            '91px'
                        ],
                        [
                            "eid13860",
                            "width",
                            23019,
                            101,
                            "linear",
                            "${close-btn}",
                            '91px',
                            '63px'
                        ],
                        [
                            "eid14039",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-select}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14038",
                            "opacity",
                            19800,
                            102,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14044",
                            "opacity",
                            20239,
                            158,
                            "linear",
                            "${right-select}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14055",
                            "opacity",
                            21010,
                            102,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14056",
                            "opacity",
                            21449,
                            158,
                            "linear",
                            "${right-select}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14070",
                            "opacity",
                            22222,
                            102,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14071",
                            "opacity",
                            22661,
                            158,
                            "linear",
                            "${right-select}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13878",
                            "rotateZ",
                            500,
                            106,
                            "linear",
                            "${txt-colourtone}",
                            '0deg',
                            '-6deg'
                        ],
                        [
                            "eid13879",
                            "rotateZ",
                            606,
                            116,
                            "linear",
                            "${txt-colourtone}",
                            '-6deg',
                            '3deg'
                        ],
                        [
                            "eid13880",
                            "rotateZ",
                            722,
                            91,
                            "linear",
                            "${txt-colourtone}",
                            '3deg',
                            '0deg'
                        ],
                        [
                            "eid13849",
                            "top",
                            301,
                            101,
                            "linear",
                            "${close-btn}",
                            '22px',
                            '14px'
                        ],
                        [
                            "eid13850",
                            "top",
                            23019,
                            101,
                            "linear",
                            "${close-btn}",
                            '14px',
                            '22px'
                        ],
                        [
                            "eid13997",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${danger}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13996",
                            "opacity",
                            19194,
                            150,
                            "linear",
                            "${danger}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14045",
                            "opacity",
                            20239,
                            158,
                            "linear",
                            "${danger}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14227",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ta}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14226",
                            "display",
                            19800,
                            0,
                            "linear",
                            "${ta}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14228",
                            "display",
                            19818,
                            0,
                            "linear",
                            "${ta}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14011",
                            "height",
                            19300,
                            247,
                            "linear",
                            "${spark2}",
                            '191px',
                            '549px'
                        ],
                        [
                            "eid14048",
                            "height",
                            20476,
                            247,
                            "linear",
                            "${spark2}",
                            '191px',
                            '549px'
                        ],
                        [
                            "eid14063",
                            "height",
                            21700,
                            247,
                            "linear",
                            "${spark2}",
                            '191px',
                            '549px'
                        ],
                        [
                            "eid14012",
                            "left",
                            19300,
                            247,
                            "linear",
                            "${spark2}",
                            '1148px',
                            '946px'
                        ],
                        [
                            "eid14051",
                            "left",
                            20476,
                            247,
                            "linear",
                            "${spark2}",
                            '1148px',
                            '946px'
                        ],
                        [
                            "eid14066",
                            "left",
                            21700,
                            247,
                            "linear",
                            "${spark2}",
                            '1148px',
                            '946px'
                        ],
                        [
                            "eid14000",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gloomy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14046",
                            "opacity",
                            20397,
                            150,
                            "linear",
                            "${gloomy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14059",
                            "opacity",
                            21449,
                            158,
                            "linear",
                            "${gloomy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14013",
                            "width",
                            19300,
                            247,
                            "linear",
                            "${spark2}",
                            '184px',
                            '529px'
                        ],
                        [
                            "eid14052",
                            "width",
                            20476,
                            247,
                            "linear",
                            "${spark2}",
                            '184px',
                            '529px'
                        ],
                        [
                            "eid14067",
                            "width",
                            21700,
                            247,
                            "linear",
                            "${spark2}",
                            '184px',
                            '529px'
                        ],
                        [
                            "eid14001",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${happy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14061",
                            "opacity",
                            21607,
                            150,
                            "linear",
                            "${happy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14060",
                            "opacity",
                            22659,
                            158,
                            "linear",
                            "${happy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13899",
                            "height",
                            4344,
                            108,
                            "linear",
                            "${narrator-text-balloon2}",
                            '137px',
                            '217px'
                        ],
                        [
                            "eid13910",
                            "height",
                            8126,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '217px',
                            '139px'
                        ],
                        [
                            "eid12683",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${folder-open}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14103",
                            "opacity",
                            23353,
                            79,
                            "linear",
                            "${folder-open}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14229",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tb}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14232",
                            "display",
                            21010,
                            0,
                            "linear",
                            "${tb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14231",
                            "display",
                            21029,
                            0,
                            "linear",
                            "${tb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13872",
                            "width",
                            782,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '194px',
                            '423px'
                        ],
                        [
                            "eid13897",
                            "width",
                            4344,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '423px',
                            '423px'
                        ],
                        [
                            "eid13903",
                            "width",
                            4452,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '423px',
                            '423px'
                        ],
                        [
                            "eid13873",
                            "width",
                            8126,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '423px',
                            '220px'
                        ],
                        [
                            "eid13874",
                            "width",
                            8367,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '220px',
                            '426px'
                        ],
                        [
                            "eid13875",
                            "width",
                            22910,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '426px',
                            '220px'
                        ],
                        [
                            "eid13876",
                            "width",
                            23162,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '640px',
                            '368px'
                        ],
                        [
                            "eid13896",
                            "top",
                            4344,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid13900",
                            "top",
                            4452,
                            0,
                            "linear",
                            "${narrator-text-balloon2}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid13911",
                            "top",
                            8126,
                            170,
                            "linear",
                            "${narrator-text-balloon2}",
                            '33px',
                            '34px'
                        ],
                        [
                            "eid13920",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13919",
                            "opacity",
                            8491,
                            46,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid14076",
                            "opacity",
                            22910,
                            46,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14210",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next_but2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14300",
                            "display",
                            11802,
                            0,
                            "linear",
                            "${next_but2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14301",
                            "display",
                            11820,
                            0,
                            "linear",
                            "${next_but2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14212",
                            "display",
                            20126,
                            0,
                            "linear",
                            "${next_but2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14213",
                            "display",
                            20146,
                            0,
                            "linear",
                            "${next_but2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14214",
                            "display",
                            21300,
                            0,
                            "linear",
                            "${next_but2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14215",
                            "display",
                            21323,
                            0,
                            "linear",
                            "${next_but2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14216",
                            "display",
                            22516,
                            0,
                            "linear",
                            "${next_but2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14217",
                            "display",
                            22534,
                            0,
                            "linear",
                            "${next_but2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14032",
                            "top",
                            19800,
                            152,
                            "linear",
                            "${right-select}",
                            '498px',
                            '462px'
                        ],
                        [
                            "eid14053",
                            "top",
                            21010,
                            152,
                            "linear",
                            "${right-select}",
                            '498px',
                            '462px'
                        ],
                        [
                            "eid14068",
                            "top",
                            22222,
                            152,
                            "linear",
                            "${right-select}",
                            '498px',
                            '462px'
                        ],
                        [
                            "eid14233",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tc}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14234",
                            "display",
                            22222,
                            0,
                            "linear",
                            "${tc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14235",
                            "display",
                            22241,
                            0,
                            "linear",
                            "${tc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14218",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14219",
                            "display",
                            8491,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14220",
                            "display",
                            19800,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14221",
                            "display",
                            19818,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14222",
                            "display",
                            21010,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14223",
                            "display",
                            21029,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14224",
                            "display",
                            22222,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14225",
                            "display",
                            22241,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14034",
                            "left",
                            19800,
                            152,
                            "linear",
                            "${right-select}",
                            '1062px',
                            '1042px'
                        ],
                        [
                            "eid14057",
                            "left",
                            21010,
                            152,
                            "linear",
                            "${right-select}",
                            '1062px',
                            '1042px'
                        ],
                        [
                            "eid14072",
                            "left",
                            22222,
                            152,
                            "linear",
                            "${right-select}",
                            '1062px',
                            '1042px'
                        ],
                            [ "eid13990", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${fun-icon}', [] ] ],
                            [ "eid13988", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sad-icon}', [] ] ],
                            [ "eid13989", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${danger-icon}', [] ] ],
                            [ "eid13991", "trigger", 8537, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${danger-icon}', [] ] ],
                            [ "eid13992", "trigger", 8800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${fun-icon}', [] ] ],
                            [ "eid13993", "trigger", 9091.6289694392, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sad-icon}', [] ] ],
                            [ "eid14097", "trigger", 22910, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${fun-icon}', [] ] ],
                            [ "eid14098", "trigger", 22910, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${danger-icon}', [] ] ],
                            [ "eid14099", "trigger", 22910, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sad-icon}', [] ] ]
                    ]
                }
            },
            "curious": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['16px', '-184px', '185px', '185px', 'auto', 'auto'],
                            id: 'emoticon6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/emoticon6.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['54px', '168px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text2',
                            text: 'Curious',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '213px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid13120",
                            "left",
                            0,
                            165,
                            "linear",
                            "${emoticon6}",
                            '16px',
                            '-9px'
                        ],
                        [
                            "eid13122",
                            "left",
                            165,
                            85,
                            "linear",
                            "${emoticon6}",
                            '-9px',
                            '14px'
                        ],
                        [
                            "eid13127",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${emoticon6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13121",
                            "top",
                            0,
                            165,
                            "linear",
                            "${emoticon6}",
                            '-184px',
                            '26px'
                        ],
                        [
                            "eid13123",
                            "top",
                            165,
                            85,
                            "linear",
                            "${emoticon6}",
                            '26px',
                            '0px'
                        ]
                    ]
                }
            },
            "sad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-68px', '-188px', '185px', '185px', 'auto', 'auto'],
                            id: 'emoticon4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/emoticon4.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['43px', '163px', '130px', '33px', 'auto', 'auto'],
                            id: 'Text3',
                            text: 'Sad',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '213px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid13140",
                            "opacity",
                            0,
                            113,
                            "linear",
                            "${emoticon4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13132",
                            "left",
                            0,
                            158,
                            "linear",
                            "${emoticon4}",
                            '-68px',
                            '2px'
                        ],
                        [
                            "eid13136",
                            "left",
                            250,
                            0,
                            "linear",
                            "${emoticon4}",
                            '2px',
                            '14px'
                        ],
                        [
                            "eid13133",
                            "top",
                            0,
                            158,
                            "linear",
                            "${emoticon4}",
                            '-188px',
                            '33px'
                        ],
                        [
                            "eid13135",
                            "top",
                            158,
                            92,
                            "linear",
                            "${emoticon4}",
                            '33px',
                            '0px'
                        ]
                    ]
                }
            },
            "happy": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['50px', '-6px', '175px', '175px', 'auto', 'auto'],
                            id: 'emoticon3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/emoticon3.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['21px', '158px', '175px', '33px', 'auto', 'auto'],
                            id: 'Text5',
                            text: 'Happy',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '213px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid13103",
                            "opacity",
                            0,
                            113,
                            "linear",
                            "${emoticon3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13088",
                            "left",
                            0,
                            173,
                            "linear",
                            "${emoticon3}",
                            '50px',
                            '-5px'
                        ],
                        [
                            "eid13090",
                            "left",
                            173,
                            77,
                            "linear",
                            "${emoticon3}",
                            '-5px',
                            '21px'
                        ],
                        [
                            "eid13089",
                            "top",
                            0,
                            173,
                            "linear",
                            "${emoticon3}",
                            '-368px',
                            '25px'
                        ],
                        [
                            "eid13091",
                            "top",
                            173,
                            77,
                            "linear",
                            "${emoticon3}",
                            '25px',
                            '0px'
                        ]
                    ]
                }
            },
            "anxious": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '-3px', '176px', '148px', 'auto', 'auto'],
                            id: 'emoticon5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/emoticon5.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['19px', '139px', '176px', '33px', 'auto', 'auto'],
                            id: 'Text4',
                            text: 'Anxious',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [27, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 297,
                    autoPlay: true,
                    data: [
                        [
                            "eid13096",
                            "left",
                            0,
                            196,
                            "linear",
                            "${emoticon5}",
                            '-70px',
                            '6px'
                        ],
                        [
                            "eid13098",
                            "left",
                            196,
                            101,
                            "linear",
                            "${emoticon5}",
                            '6px',
                            '19px'
                        ],
                        [
                            "eid13097",
                            "top",
                            0,
                            196,
                            "linear",
                            "${emoticon5}",
                            '-374px',
                            '28px'
                        ],
                        [
                            "eid13099",
                            "top",
                            196,
                            101,
                            "linear",
                            "${emoticon5}",
                            '28px',
                            '0px'
                        ],
                        [
                            "eid13107",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${emoticon5}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "help-slogan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['87px', '-354px', '147px', '42px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: 0,
                            id: 'RoundRectCopy4',
                            stroke: [3, 'rgba(0,0,0,1)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(98,98,98,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'go-distance-txt',
                            opacity: 0,
                            rect: ['92px', '-349px', '146px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/go-distance-txt.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '360px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 572,
                    autoPlay: true,
                    data: [
                        [
                            "eid13510",
                            "height",
                            0,
                            207,
                            "linear",
                            "${go-distance-txt}",
                            '40px',
                            '95px'
                        ],
                        [
                            "eid13512",
                            "height",
                            0,
                            207,
                            "linear",
                            "${RoundRectCopy4}",
                            '42px',
                            '106px'
                        ],
                        [
                            "eid13511",
                            "width",
                            0,
                            207,
                            "linear",
                            "${go-distance-txt}",
                            '146px',
                            '344px'
                        ],
                        [
                            "eid13524",
                            "opacity",
                            0,
                            120,
                            "linear",
                            "${go-distance-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13525",
                            "opacity",
                            0,
                            120,
                            "linear",
                            "${RoundRectCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13515",
                            "top",
                            0,
                            207,
                            "linear",
                            "${go-distance-txt}",
                            '-349px',
                            '9px'
                        ],
                        [
                            "eid13514",
                            "left",
                            0,
                            207,
                            "linear",
                            "${go-distance-txt}",
                            '92px',
                            '9px'
                        ],
                        [
                            "eid13517",
                            "top",
                            0,
                            207,
                            "linear",
                            "${RoundRectCopy4}",
                            '-354px',
                            '0px'
                        ],
                        [
                            "eid13513",
                            "width",
                            0,
                            207,
                            "linear",
                            "${RoundRectCopy4}",
                            '147px',
                            '354px'
                        ],
                        [
                            "eid13516",
                            "left",
                            0,
                            207,
                            "linear",
                            "${RoundRectCopy4}",
                            '87px',
                            '0px'
                        ],
                        [
                            "eid13531",
                            "rotateZ",
                            250,
                            107,
                            "linear",
                            "${RoundRectCopy4}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid13535",
                            "rotateZ",
                            357,
                            113,
                            "linear",
                            "${RoundRectCopy4}",
                            '2deg',
                            '-2deg'
                        ],
                        [
                            "eid13539",
                            "rotateZ",
                            470,
                            102,
                            "linear",
                            "${RoundRectCopy4}",
                            '-2deg',
                            '0deg'
                        ],
                        [
                            "eid13530",
                            "rotateZ",
                            250,
                            107,
                            "linear",
                            "${go-distance-txt}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid13534",
                            "rotateZ",
                            357,
                            113,
                            "linear",
                            "${go-distance-txt}",
                            '2deg',
                            '-2deg'
                        ],
                        [
                            "eid13538",
                            "rotateZ",
                            470,
                            102,
                            "linear",
                            "${go-distance-txt}",
                            '-2deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "water-slogan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['21px', '0px', '362px', '80px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy2',
                            stroke: [3, 'rgba(0,0,0,1)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['31px', '12px', '388px', '69px', 'auto', 'auto'],
                            id: 'every-drop-txt',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/every-drop-txt.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '412px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 538.15055102811,
                    autoPlay: true,
                    data: [
                        [
                            "eid13540",
                            "top",
                            0,
                            177,
                            "linear",
                            "${every-drop-txt}",
                            '-250px',
                            '12px'
                        ],
                        [
                            "eid13554",
                            "left",
                            0,
                            177,
                            "linear",
                            "${RoundRectCopy2}",
                            '119px',
                            '21px'
                        ],
                        [
                            "eid13541",
                            "rotateZ",
                            216,
                            107,
                            "linear",
                            "${every-drop-txt}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid13542",
                            "rotateZ",
                            323,
                            113,
                            "linear",
                            "${every-drop-txt}",
                            '2deg',
                            '-2deg'
                        ],
                        [
                            "eid13543",
                            "rotateZ",
                            436,
                            102,
                            "linear",
                            "${every-drop-txt}",
                            '-2deg',
                            '0deg'
                        ],
                        [
                            "eid13553",
                            "opacity",
                            0,
                            103,
                            "linear",
                            "${RoundRectCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13549",
                            "rotateZ",
                            216,
                            107,
                            "linear",
                            "${RoundRectCopy2}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid13550",
                            "rotateZ",
                            323,
                            113,
                            "linear",
                            "${RoundRectCopy2}",
                            '2deg',
                            '-2deg'
                        ],
                        [
                            "eid13551",
                            "rotateZ",
                            436,
                            102,
                            "linear",
                            "${RoundRectCopy2}",
                            '-2deg',
                            '0deg'
                        ],
                        [
                            "eid13545",
                            "opacity",
                            0,
                            103,
                            "linear",
                            "${every-drop-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13546",
                            "left",
                            0,
                            177,
                            "linear",
                            "${every-drop-txt}",
                            '127px',
                            '31px'
                        ],
                        [
                            "eid13547",
                            "width",
                            0,
                            177,
                            "linear",
                            "${every-drop-txt}",
                            '146px',
                            '344px'
                        ],
                        [
                            "eid13548",
                            "top",
                            0,
                            177,
                            "linear",
                            "${RoundRectCopy2}",
                            '-257px',
                            '0px'
                        ],
                        [
                            "eid13552",
                            "height",
                            0,
                            177,
                            "linear",
                            "${RoundRectCopy2}",
                            '42px',
                            '80px'
                        ],
                        [
                            "eid13544",
                            "height",
                            0,
                            177,
                            "linear",
                            "${every-drop-txt}",
                            '40px',
                            '69px'
                        ],
                        [
                            "eid13555",
                            "width",
                            0,
                            177,
                            "linear",
                            "${RoundRectCopy2}",
                            '147px',
                            '362px'
                        ]
                    ]
                }
            },
            "adopt-slogan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['106px', '-166px', '392px', '25px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy',
                            stroke: [3, 'rgba(0,0,0,1)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(98,98,98,1.00)']
                        },
                        {
                            rect: ['114px', '15px', '375px', '36px', 'auto', 'auto'],
                            id: 'be-kind-txt',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/be-kind-txt.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '398px', '61px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid13563",
                            "width",
                            0,
                            135,
                            "linear",
                            "${be-kind-txt}",
                            '146px',
                            '344px'
                        ],
                        [
                            "eid13556",
                            "top",
                            0,
                            135,
                            "linear",
                            "${be-kind-txt}",
                            '-163px',
                            '15px'
                        ],
                        [
                            "eid13560",
                            "height",
                            0,
                            135,
                            "linear",
                            "${be-kind-txt}",
                            '26px',
                            '36px'
                        ],
                        [
                            "eid13561",
                            "opacity",
                            0,
                            78,
                            "linear",
                            "${be-kind-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13564",
                            "top",
                            0,
                            135,
                            "linear",
                            "${RoundRectCopy}",
                            '-166px',
                            '0px'
                        ],
                        [
                            "eid13568",
                            "height",
                            0,
                            135,
                            "linear",
                            "${RoundRectCopy}",
                            '25px',
                            '55px'
                        ],
                        [
                            "eid13570",
                            "left",
                            0,
                            135,
                            "linear",
                            "${RoundRectCopy}",
                            '106px',
                            '23px'
                        ],
                        [
                            "eid13571",
                            "width",
                            0,
                            135,
                            "linear",
                            "${RoundRectCopy}",
                            '147px',
                            '354px'
                        ],
                        [
                            "eid13569",
                            "opacity",
                            0,
                            78,
                            "linear",
                            "${RoundRectCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13562",
                            "left",
                            0,
                            135,
                            "linear",
                            "${be-kind-txt}",
                            '114px',
                            '32px'
                        ],
                        [
                            "eid13565",
                            "rotateZ",
                            178,
                            107,
                            "linear",
                            "${RoundRectCopy}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid13566",
                            "rotateZ",
                            285,
                            113,
                            "linear",
                            "${RoundRectCopy}",
                            '2deg',
                            '-2deg'
                        ],
                        [
                            "eid13567",
                            "rotateZ",
                            398,
                            102,
                            "linear",
                            "${RoundRectCopy}",
                            '-2deg',
                            '0deg'
                        ],
                        [
                            "eid13557",
                            "rotateZ",
                            178,
                            107,
                            "linear",
                            "${be-kind-txt}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid13558",
                            "rotateZ",
                            285,
                            113,
                            "linear",
                            "${be-kind-txt}",
                            '2deg',
                            '-2deg'
                        ],
                        [
                            "eid13559",
                            "rotateZ",
                            398,
                            102,
                            "linear",
                            "${be-kind-txt}",
                            '-2deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "win-slogan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['84px', '-87px', '351px', '37px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [3, 'rgba(0,0,0,1)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'win-poster-txt',
                            rect: ['92px', '-87px', '336px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/win-poster-txt.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '357px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 466,
                    autoPlay: true,
                    data: [
                        [
                            "eid13580",
                            "top",
                            0,
                            113,
                            "linear",
                            "${RoundRect}",
                            '-87px',
                            '0px'
                        ],
                        [
                            "eid13585",
                            "opacity",
                            0,
                            65,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13581",
                            "rotateZ",
                            144,
                            107,
                            "linear",
                            "${RoundRect}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid13582",
                            "rotateZ",
                            251,
                            113,
                            "linear",
                            "${RoundRect}",
                            '2deg',
                            '-2deg'
                        ],
                        [
                            "eid13583",
                            "rotateZ",
                            364,
                            102,
                            "linear",
                            "${RoundRect}",
                            '-2deg',
                            '0deg'
                        ],
                        [
                            "eid13586",
                            "left",
                            0,
                            113,
                            "linear",
                            "${RoundRect}",
                            '84px',
                            '0px'
                        ],
                        [
                            "eid13577",
                            "opacity",
                            0,
                            65,
                            "linear",
                            "${win-poster-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13576",
                            "height",
                            0,
                            113,
                            "linear",
                            "${win-poster-txt}",
                            '36px',
                            '71px'
                        ],
                        [
                            "eid13578",
                            "left",
                            0,
                            113,
                            "linear",
                            "${win-poster-txt}",
                            '92px',
                            '8px'
                        ],
                        [
                            "eid13572",
                            "top",
                            0,
                            113,
                            "linear",
                            "${win-poster-txt}",
                            '-87px',
                            '9px'
                        ],
                        [
                            "eid13579",
                            "width",
                            0,
                            113,
                            "linear",
                            "${win-poster-txt}",
                            '146px',
                            '344px'
                        ],
                        [
                            "eid13587",
                            "width",
                            0,
                            113,
                            "linear",
                            "${RoundRect}",
                            '147px',
                            '354px'
                        ],
                        [
                            "eid13573",
                            "rotateZ",
                            144,
                            107,
                            "linear",
                            "${win-poster-txt}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid13574",
                            "rotateZ",
                            251,
                            113,
                            "linear",
                            "${win-poster-txt}",
                            '2deg',
                            '-2deg'
                        ],
                        [
                            "eid13575",
                            "rotateZ",
                            364,
                            102,
                            "linear",
                            "${win-poster-txt}",
                            '-2deg',
                            '0deg'
                        ],
                        [
                            "eid13584",
                            "height",
                            0,
                            113,
                            "linear",
                            "${RoundRect}",
                            '37px',
                            '80px'
                        ]
                    ]
                }
            },
            "adopt-poster": {
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
                            id: 'be-kind-poster',
                            opacity: '0',
                            rect: ['0px', '0px', '412px', '452px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/be-kind-poster.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-mark',
                            opacity: '0',
                            rect: ['72px', '11px', '33px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy',
                            opacity: '0',
                            rect: ['151px', '11px', '33px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy2',
                            opacity: '0',
                            rect: ['227px', '11px', '33px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy3',
                            opacity: '0',
                            rect: ['299px', '11px', '33px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'be-kind-txt2',
                            opacity: '0',
                            rect: ['35px', '29px', '350px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/be-kind-txt.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'spark1',
                            opacity: '0',
                            rect: ['34px', '-132px', '354px', '348px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '412px', '452px']
                        }
                    }
                },
                timeline: {
                    duration: 1113,
                    autoPlay: true,
                    data: [
                        [
                            "eid13650",
                            "left",
                            523,
                            190,
                            "linear",
                            "${spark1}",
                            '151px',
                            '34px'
                        ],
                        [
                            "eid13623",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13624",
                            "opacity",
                            278,
                            60,
                            "linear",
                            "${question-markCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13637",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13662",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13654",
                            "opacity",
                            523,
                            49,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13657",
                            "opacity",
                            667,
                            46,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13621",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13622",
                            "opacity",
                            218,
                            60,
                            "linear",
                            "${question-markCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13638",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13625",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13626",
                            "opacity",
                            338,
                            60,
                            "linear",
                            "${question-markCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13636",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13682",
                            "top",
                            834,
                            83,
                            "linear",
                            "${be-kind-poster}",
                            '0px',
                            '23px'
                        ],
                        [
                            "eid13686",
                            "top",
                            917,
                            196,
                            "linear",
                            "${be-kind-poster}",
                            '23px',
                            '-574px'
                        ],
                        [
                            "eid13615",
                            "opacity",
                            0,
                            158,
                            "linear",
                            "${be-kind-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13692",
                            "opacity",
                            1027,
                            86,
                            "linear",
                            "${be-kind-poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13647",
                            "height",
                            523,
                            190,
                            "linear",
                            "${spark1}",
                            '127px',
                            '348px'
                        ],
                        [
                            "eid13663",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${be-kind-txt2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13661",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${be-kind-txt2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13691",
                            "opacity",
                            1027,
                            86,
                            "linear",
                            "${be-kind-txt2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13649",
                            "width",
                            523,
                            190,
                            "linear",
                            "${spark1}",
                            '129px',
                            '354px'
                        ],
                        [
                            "eid13681",
                            "top",
                            834,
                            83,
                            "linear",
                            "${be-kind-txt2}",
                            '29px',
                            '52px'
                        ],
                        [
                            "eid13685",
                            "top",
                            917,
                            196,
                            "linear",
                            "${be-kind-txt2}",
                            '52px',
                            '-545px'
                        ],
                        [
                            "eid13648",
                            "top",
                            523,
                            190,
                            "linear",
                            "${spark1}",
                            '-16px',
                            '-132px'
                        ],
                        [
                            "eid13620",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-mark}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13619",
                            "opacity",
                            158,
                            60,
                            "linear",
                            "${question-mark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13635",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-mark}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "water-poster": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-554px', '412px', '452px', 'auto', 'auto'],
                            id: 'every-drop-poster',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/every-drop-poster.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy7',
                            opacity: '0',
                            rect: ['76px', '371px', '33px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy6',
                            opacity: '0',
                            rect: ['155px', '371px', '33px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy5',
                            opacity: '0',
                            rect: ['231px', '371px', '33px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'question-markCopy4',
                            opacity: '0',
                            rect: ['303px', '371px', '33px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'every-drop-txt2',
                            opacity: '0',
                            rect: ['31px', '-191px', '349px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/every-drop-txt.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'spark1',
                            opacity: '0',
                            rect: ['43px', '197px', '354px', '348px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '412px', '452px']
                        }
                    }
                },
                timeline: {
                    duration: 1113,
                    autoPlay: true,
                    data: [
                        [
                            "eid13731",
                            "left",
                            523,
                            190,
                            "linear",
                            "${spark1}",
                            '155px',
                            '37px'
                        ],
                        [
                            "eid13701",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13702",
                            "opacity",
                            338,
                            60,
                            "linear",
                            "${question-markCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13703",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13696",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13697",
                            "opacity",
                            523,
                            49,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13698",
                            "opacity",
                            667,
                            46,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13732",
                            "top",
                            523,
                            190,
                            "linear",
                            "${spark1}",
                            '338px',
                            '180px'
                        ],
                        [
                            "eid13733",
                            "top",
                            834,
                            83,
                            "linear",
                            "${every-drop-poster}",
                            '0px',
                            '21px'
                        ],
                        [
                            "eid13734",
                            "top",
                            917,
                            196,
                            "linear",
                            "${every-drop-poster}",
                            '21px',
                            '-554px'
                        ],
                        [
                            "eid13707",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13708",
                            "opacity",
                            218,
                            60,
                            "linear",
                            "${question-markCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13709",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13700",
                            "width",
                            523,
                            190,
                            "linear",
                            "${spark1}",
                            '129px',
                            '354px'
                        ],
                        [
                            "eid13695",
                            "height",
                            523,
                            190,
                            "linear",
                            "${spark1}",
                            '127px',
                            '348px'
                        ],
                        [
                            "eid13710",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13711",
                            "opacity",
                            158,
                            60,
                            "linear",
                            "${question-markCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13712",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13704",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13705",
                            "opacity",
                            278,
                            60,
                            "linear",
                            "${question-markCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13706",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13735",
                            "opacity",
                            0,
                            158,
                            "linear",
                            "${every-drop-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13736",
                            "opacity",
                            1027,
                            86,
                            "linear",
                            "${every-drop-poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13741",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${every-drop-txt2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13740",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${every-drop-txt2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13749",
                            "opacity",
                            1027,
                            86,
                            "linear",
                            "${every-drop-txt2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13744",
                            "top",
                            834,
                            83,
                            "linear",
                            "${every-drop-txt2}",
                            '374px',
                            '395px'
                        ],
                        [
                            "eid13746",
                            "top",
                            917,
                            196,
                            "linear",
                            "${every-drop-txt2}",
                            '395px',
                            '-191px'
                        ]
                    ]
                }
            },
            "help-poster": {
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
                            id: 'go-distance-poster',
                            rect: ['0px', '-580px', '412px', '452px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/go-distance-poster.png', '0px', '0px']
                        },
                        {
                            rect: ['76px', '27px', '33px', '61px', 'auto', 'auto'],
                            id: 'question-markCopy11',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['155px', '27px', '33px', '61px', 'auto', 'auto'],
                            id: 'question-markCopy10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['231px', '27px', '33px', '61px', 'auto', 'auto'],
                            id: 'question-markCopy9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['303px', '27px', '33px', '61px', 'auto', 'auto'],
                            id: 'question-markCopy8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['55px', '-580px', '318px', '88px', 'auto', 'auto'],
                            id: 'go-distance-txt2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/go-distance-txt.png', '0px', '0px']
                        },
                        {
                            rect: ['43px', '197px', '354px', '348px', 'auto', 'auto'],
                            id: 'spark1Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '412px', '452px']
                        }
                    }
                },
                timeline: {
                    duration: 1113,
                    autoPlay: true,
                    data: [
                        [
                            "eid13754",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13755",
                            "opacity",
                            523,
                            49,
                            "linear",
                            "${spark1Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13756",
                            "opacity",
                            667,
                            46,
                            "linear",
                            "${spark1Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13768",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13769",
                            "opacity",
                            158,
                            60,
                            "linear",
                            "${question-markCopy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13770",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13773",
                            "top",
                            523,
                            190,
                            "linear",
                            "${spark1Copy}",
                            '-14px',
                            '-104px'
                        ],
                        [
                            "eid13785",
                            "top",
                            834,
                            83,
                            "linear",
                            "${go-distance-txt2}",
                            '13px',
                            '30px'
                        ],
                        [
                            "eid13787",
                            "top",
                            917,
                            196,
                            "linear",
                            "${go-distance-txt2}",
                            '30px',
                            '-580px'
                        ],
                        [
                            "eid13758",
                            "width",
                            523,
                            190,
                            "linear",
                            "${spark1Copy}",
                            '129px',
                            '354px'
                        ],
                        [
                            "eid13757",
                            "left",
                            523,
                            190,
                            "linear",
                            "${spark1Copy}",
                            '155px',
                            '37px'
                        ],
                        [
                            "eid13774",
                            "top",
                            834,
                            83,
                            "linear",
                            "${go-distance-poster}",
                            '0px',
                            '19px'
                        ],
                        [
                            "eid13775",
                            "top",
                            917,
                            196,
                            "linear",
                            "${go-distance-poster}",
                            '19px',
                            '-580px'
                        ],
                        [
                            "eid13753",
                            "height",
                            523,
                            190,
                            "linear",
                            "${spark1Copy}",
                            '127px',
                            '348px'
                        ],
                        [
                            "eid13782",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${go-distance-txt2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13781",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${go-distance-txt2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13790",
                            "opacity",
                            1027,
                            86,
                            "linear",
                            "${go-distance-txt2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13762",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13763",
                            "opacity",
                            278,
                            60,
                            "linear",
                            "${question-markCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13764",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13776",
                            "opacity",
                            0,
                            158,
                            "linear",
                            "${go-distance-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13777",
                            "opacity",
                            1027,
                            86,
                            "linear",
                            "${go-distance-poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13759",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13760",
                            "opacity",
                            338,
                            60,
                            "linear",
                            "${question-markCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13761",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13765",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13766",
                            "opacity",
                            218,
                            60,
                            "linear",
                            "${question-markCopy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13767",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy10}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "win-poster": {
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
                            id: 'win-poster',
                            rect: ['0px', '-576px', '412px', '452px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/win-poster.png', '0px', '0px']
                        },
                        {
                            rect: ['76px', '371px', '33px', '61px', 'auto', 'auto'],
                            id: 'question-markCopy15',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['155px', '371px', '33px', '61px', 'auto', 'auto'],
                            id: 'question-markCopy14',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['231px', '371px', '33px', '61px', 'auto', 'auto'],
                            id: 'question-markCopy13',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['303px', '371px', '33px', '61px', 'auto', 'auto'],
                            id: 'question-markCopy12',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['55px', '402px', '301px', '61px', 'auto', 'auto'],
                            id: 'win-poster-txt2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/win-poster-txt.png', '0px', '0px']
                        },
                        {
                            rect: ['43px', '197px', '354px', '348px', 'auto', 'auto'],
                            id: 'spark1Copy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '412px', '452px']
                        }
                    }
                },
                timeline: {
                    duration: 1113,
                    autoPlay: true,
                    data: [
                        [
                            "eid13814",
                            "opacity",
                            0,
                            158,
                            "linear",
                            "${win-poster}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13815",
                            "opacity",
                            1027,
                            86,
                            "linear",
                            "${win-poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13793",
                            "top",
                            523,
                            190,
                            "linear",
                            "${spark1Copy2}",
                            '338px',
                            '180px'
                        ],
                        [
                            "eid13800",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13801",
                            "opacity",
                            338,
                            60,
                            "linear",
                            "${question-markCopy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13802",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13806",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13807",
                            "opacity",
                            218,
                            60,
                            "linear",
                            "${question-markCopy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13808",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13823",
                            "top",
                            834,
                            83,
                            "linear",
                            "${win-poster-txt2}",
                            '382px',
                            '402px'
                        ],
                        [
                            "eid13825",
                            "top",
                            917,
                            196,
                            "linear",
                            "${win-poster-txt2}",
                            '402px',
                            '-204px'
                        ],
                        [
                            "eid13799",
                            "width",
                            523,
                            190,
                            "linear",
                            "${spark1Copy2}",
                            '129px',
                            '354px'
                        ],
                        [
                            "eid13820",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${win-poster-txt2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13819",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${win-poster-txt2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13828",
                            "opacity",
                            1027,
                            86,
                            "linear",
                            "${win-poster-txt2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13803",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy13}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13804",
                            "opacity",
                            278,
                            60,
                            "linear",
                            "${question-markCopy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13805",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13812",
                            "top",
                            834,
                            83,
                            "linear",
                            "${win-poster}",
                            '0px',
                            '18px'
                        ],
                        [
                            "eid13813",
                            "top",
                            917,
                            196,
                            "linear",
                            "${win-poster}",
                            '18px',
                            '-576px'
                        ],
                        [
                            "eid13809",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-markCopy15}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13810",
                            "opacity",
                            158,
                            60,
                            "linear",
                            "${question-markCopy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13811",
                            "opacity",
                            558,
                            78,
                            "linear",
                            "${question-markCopy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13794",
                            "height",
                            523,
                            190,
                            "linear",
                            "${spark1Copy2}",
                            '127px',
                            '348px'
                        ],
                        [
                            "eid13798",
                            "left",
                            523,
                            190,
                            "linear",
                            "${spark1Copy2}",
                            '155px',
                            '37px'
                        ],
                        [
                            "eid13795",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13796",
                            "opacity",
                            523,
                            49,
                            "linear",
                            "${spark1Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13797",
                            "opacity",
                            667,
                            46,
                            "linear",
                            "${spark1Copy2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "danger-icon": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['44px', '-368px', '152px', '107px', 'auto', 'auto'],
                            id: 'danger-txt',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/danger-txt.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '256px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 555,
                    autoPlay: true,
                    data: [
                        [
                            "eid13938",
                            "top",
                            0,
                            154,
                            "linear",
                            "${danger-txt}",
                            '-368px',
                            '0px'
                        ],
                        [
                            "eid13949",
                            "opacity",
                            0,
                            96,
                            "linear",
                            "${danger-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13941",
                            "rotateZ",
                            196,
                            117,
                            "linear",
                            "${danger-txt}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid13943",
                            "rotateZ",
                            313,
                            129,
                            "linear",
                            "${danger-txt}",
                            '7deg',
                            '-6deg'
                        ],
                        [
                            "eid13945",
                            "rotateZ",
                            442,
                            113,
                            "linear",
                            "${danger-txt}",
                            '-6deg',
                            '0deg'
                        ],
                        [
                            "eid13935",
                            "height",
                            0,
                            154,
                            "linear",
                            "${danger-txt}",
                            '107px',
                            '180px'
                        ],
                        [
                            "eid13936",
                            "width",
                            0,
                            154,
                            "linear",
                            "${danger-txt}",
                            '152px',
                            '256px'
                        ],
                        [
                            "eid13937",
                            "left",
                            0,
                            154,
                            "linear",
                            "${danger-txt}",
                            '44px',
                            '0px'
                        ]
                    ]
                }
            },
            "fun-icon": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['156px', '-196px', '123px', '86px', 'auto', 'auto'],
                            id: 'fun-txt',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fun-txt.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '256px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 563,
                    autoPlay: true,
                    data: [
                        [
                            "eid13964",
                            "top",
                            0,
                            162,
                            "linear",
                            "${fun-txt}",
                            '-196px',
                            '0px'
                        ],
                        [
                            "eid13963",
                            "width",
                            0,
                            162,
                            "linear",
                            "${fun-txt}",
                            '123px',
                            '256px'
                        ],
                        [
                            "eid13950",
                            "rotateZ",
                            204,
                            117,
                            "linear",
                            "${fun-txt}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid13951",
                            "rotateZ",
                            321,
                            129,
                            "linear",
                            "${fun-txt}",
                            '7deg',
                            '-6deg'
                        ],
                        [
                            "eid13952",
                            "rotateZ",
                            450,
                            113,
                            "linear",
                            "${fun-txt}",
                            '-6deg',
                            '0deg'
                        ],
                        [
                            "eid13961",
                            "height",
                            0,
                            162,
                            "linear",
                            "${fun-txt}",
                            '86px',
                            '180px'
                        ],
                        [
                            "eid13962",
                            "left",
                            0,
                            162,
                            "linear",
                            "${fun-txt}",
                            '156px',
                            '0px'
                        ],
                        [
                            "eid13968",
                            "opacity",
                            0,
                            104,
                            "linear",
                            "${fun-txt}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "sad-icon": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-14px', '-120px', '114px', '80px', 'auto', 'auto'],
                            id: 'sad-gloomy-txt',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sad-gloomy-txt.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '256px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 530,
                    autoPlay: true,
                    data: [
                        [
                            "eid13982",
                            "left",
                            0,
                            125,
                            "linear",
                            "${sad-gloomy-txt}",
                            '-14px',
                            '0px'
                        ],
                        [
                            "eid13983",
                            "top",
                            0,
                            125,
                            "linear",
                            "${sad-gloomy-txt}",
                            '-120px',
                            '0px'
                        ],
                        [
                            "eid13981",
                            "width",
                            0,
                            125,
                            "linear",
                            "${sad-gloomy-txt}",
                            '114px',
                            '256px'
                        ],
                        [
                            "eid13987",
                            "opacity",
                            0,
                            92,
                            "linear",
                            "${sad-gloomy-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13980",
                            "height",
                            0,
                            125,
                            "linear",
                            "${sad-gloomy-txt}",
                            '80px',
                            '180px'
                        ],
                        [
                            "eid13969",
                            "rotateZ",
                            171,
                            117,
                            "linear",
                            "${sad-gloomy-txt}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid13970",
                            "rotateZ",
                            288,
                            129,
                            "linear",
                            "${sad-gloomy-txt}",
                            '7deg',
                            '-6deg'
                        ],
                        [
                            "eid13971",
                            "rotateZ",
                            417,
                            113,
                            "linear",
                            "${sad-gloomy-txt}",
                            '-6deg',
                            '0deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("3_edgeActions.js");
})("EDGE-1646797");
