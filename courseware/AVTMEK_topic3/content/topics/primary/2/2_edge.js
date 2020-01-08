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
                            id: 'chairs',
                            symbolName: 'chairs',
                            display: 'none',
                            type: 'rect',
                            rect: ['9', '331', '1005', '261', 'auto', 'auto']
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['198px', '-175px', '672px', '254px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Picture Stories",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [50, "px"], "rgba(0,101,232,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['-12px', '-12px', '1048px', '608px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.64)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'narrator-text-balloon-square',
                            type: 'image',
                            rect: ['704px', '-4px', '317px', '379px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon-square.png",'0px','0px']
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['733px', '24px', '266px', '213px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Answer:<br>The boy",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [29, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text7Copy',
                            type: 'text',
                            rect: ['721px', '35px', '279px', '213px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Answer: <br>The dog is running.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['754px', '27px', '224px', '136px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Let’s have a closer look at this picture.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text4Copy',
                            type: 'text',
                            rect: ['733px', '40px', '270px', '182px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Let’s see <br>what else is happening in the midground.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [29, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text4Copy2',
                            type: 'text',
                            rect: ['725px', '52px', '270px', '182px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Look at the sky. How will the weather change?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['725px', '19px', '271px', '91px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Who is the main character in this picture?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text5Copy',
                            type: 'text',
                            rect: ['726px', '29px', '270px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            text: "What is the dog doing?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text11',
                            type: 'text',
                            rect: ['772px', '25px', '238px', '59px', 'auto', 'auto'],
                            opacity: '0',
                            text: "There are storm clouds. It will rain soon.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text11Copy',
                            type: 'text',
                            rect: ['770px', '147px', '229px', '58px', 'auto', 'auto'],
                            opacity: '0',
                            text: "There was thunder and lightning.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text11Copy2',
                            type: 'text',
                            rect: ['770px', '87px', '226px', '58px', 'auto', 'auto'],
                            opacity: '0',
                            text: "It is a hot day with no clouds in the sky.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['793px', '122px', '188px', '34px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The boy",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy2',
                            type: 'text',
                            rect: ['793px', '162px', '188px', '36px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The father",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy3',
                            type: 'text',
                            rect: ['793px', '205px', '188px', '36px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The dog",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['725px', '20px', '270px', '221px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Answer: <br>The thunderstorm is coming as the clouds are grey.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['751px', '69px', '258px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The dog is sleeping.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text10Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['752px', '115px', '258px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The dog is running.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text10Copy2',
                            type: 'text',
                            rect: ['752px', '159px', '258px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The dog is sitting.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text8',
                            display: 'none',
                            type: 'text',
                            rect: ['740px', '52px', '259px', '153px', 'auto', 'auto'],
                            opacity: '0',
                            text: "What else do I see in the foreground? <br><br>Find 3 things.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [29, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text8Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['732px', '25px', '263px', '192px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Find 1 more person  in the midground section.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text12',
                            display: 'none',
                            type: 'text',
                            rect: ['726px', '18px', '270px', '219px', 'auto', 'auto'],
                            opacity: '0',
                            text: "What else is happening in the background section?<br>Clue: Find 3 things/people.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['729px', '90px', '23px', '22px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [3,"rgba(0,20,23,1.00)","solid"]
                        },
                        {
                            id: 'RoundRect2Copy',
                            type: 'rect',
                            rect: ['729px', '115px', '23px', '22px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [3,"rgba(0,20,23,1.00)","solid"]
                        },
                        {
                            id: 'RoundRect2Copy2',
                            type: 'rect',
                            rect: ['729px', '196px', '23px', '22px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [3,"rgba(0,20,23,1.00)","solid"]
                        },
                        {
                            id: 'right-select',
                            type: 'image',
                            rect: ['746px', '119px', '40px', '40px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"right-select.png",'0px','0px']
                        },
                        {
                            id: 'wrong-select',
                            type: 'image',
                            rect: ['710px', '142px', '40px', '40px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"wrong-select.png",'0px','0px']
                        },
                        {
                            id: 'wrong-selectCopy',
                            type: 'image',
                            rect: ['710px', '196px', '40px', '40px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"wrong-select.png",'0px','0px']
                        },
                        {
                            id: 'nath-up-arm-back',
                            type: 'image',
                            rect: ['825px', '474px', '70px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-up-arm-back.png",'0px','0px'],
                            transform: [[],['1']]
                        },
                        {
                            id: 'nath-body',
                            type: 'image',
                            rect: ['849px', '420px', '213px', '293px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-body.png",'0px','0px'],
                            transform: [[],['-5']]
                        },
                        {
                            id: 'nath-side',
                            type: 'image',
                            rect: ['809px', '244px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-side.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-blink',
                            type: 'image',
                            rect: ['809px', '244px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-blink.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-speak-side',
                            type: 'image',
                            rect: ['809px', '244px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-speak-side.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-front',
                            type: 'image',
                            rect: ['809px', '244px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-front.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-speak-front',
                            type: 'image',
                            rect: ['809px', '244px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-speak-front.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-laugh',
                            type: 'image',
                            rect: ['809px', '244px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-laugh.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-up-arm-front',
                            type: 'image',
                            rect: ['964px', '468px', '102px', '179px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-up-arm-front.png",'0px','0px'],
                            transform: [[],['-1']]
                        },
                        {
                            id: 'nath-low-arm-back',
                            type: 'image',
                            rect: ['797px', '581px', '77px', '138px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-low-arm-back.png",'0px','0px'],
                            transform: [[],['7']]
                        },
                        {
                            id: 'nath-low-arm-front',
                            type: 'image',
                            rect: ['987px', '578px', '51px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-low-arm-front.png",'0px','0px'],
                            transform: [[],['-168']]
                        },
                        {
                            id: 'nath-hand5',
                            type: 'image',
                            rect: ['982px', '670px', '70px', '119px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-hand5.png",'0px','0px'],
                            transform: [[],['9'],[],['-1']]
                        },
                        {
                            id: 'library-table',
                            type: 'image',
                            rect: ['-58px', '241px', '950px', '371px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"library-table.png",'0px','0px'],
                            transform: [[],[],[],['-1.00422']]
                        },
                        {
                            id: 'narrator-text-balloon',
                            type: 'image',
                            rect: ['32px', '114px', '591px', '213px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['69px', '140px', '520px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Nathan is also writing a story for the competition, but he is using a picture to guide him.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(0, 101, 232)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'balloon2',
                            type: 'image',
                            rect: ['558px', '294px', '103px', '138px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"balloon2.png",'0px','0px'],
                            transform: [[],['-90'],[],['-0.71035']]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['304px', '108px', '295px', '136px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Help me analyse the picture based on foreground, midground and background.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'spark1',
                            type: 'image',
                            rect: ['270px', '150px', '191px', '188px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spark1.png",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['-185px', '-337px', '509px', '325px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'pic',
                            type: 'image',
                            rect: ['-167px', '-330px', '471px', '313px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pic.jpg",'0px','0px']
                        },
                        {
                            id: 'pic-foreground',
                            type: 'image',
                            rect: ['44px', '16px', '628px', '417px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pic-foreground.jpg",'0px','0px']
                        },
                        {
                            id: 'pic-midground',
                            type: 'image',
                            rect: ['44px', '16px', '628px', '417px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pic-midground.jpg",'0px','0px']
                        },
                        {
                            id: 'pic-background',
                            type: 'image',
                            rect: ['43px', '15px', '628px', '417px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pic-background.jpg",'0px','0px']
                        },
                        {
                            id: 'spark12',
                            type: 'image',
                            rect: ['521px', '288px', '377px', '371px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spark1.png",'0px','0px']
                        },
                        {
                            id: 'button-MG',
                            type: 'image',
                            rect: ['285px', '451px', '283px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"button-MG.png",'0px','0px']
                        },
                        {
                            id: 'button-FG',
                            type: 'image',
                            rect: ['9px', '584px', '283px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"button-FG.png",'0px','0px']
                        },
                        {
                            id: 'button-BG',
                            type: 'image',
                            rect: ['562px', '451px', '283px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"button-BG.png",'0px','0px']
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['313px', '151px', '174px', '175px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [5,"rgba(192,255,31,1.00)","solid"]
                        },
                        {
                            id: 'fence',
                            symbolName: 'fence',
                            type: 'rect',
                            rect: ['400', '336', '223', '91', 'auto', 'auto']
                        },
                        {
                            id: 'ball',
                            symbolName: 'ball',
                            display: 'none',
                            type: 'rect',
                            rect: ['442px', '35px', '123', '91', 'auto', 'auto']
                        },
                        {
                            id: 'tree',
                            symbolName: 'tree',
                            display: 'none',
                            type: 'rect',
                            rect: ['522px', '157px', '121', '91', 'auto', 'auto']
                        },
                        {
                            id: 'picnic',
                            symbolName: 'picnic',
                            display: 'none',
                            type: 'rect',
                            rect: ['181px', '111px', '123', '91', 'auto', 'auto']
                        },
                        {
                            id: 'park-sign',
                            symbolName: 'park-sign',
                            display: 'none',
                            type: 'rect',
                            rect: ['224', '20', '223', '91', 'auto', 'auto']
                        },
                        {
                            id: 'parking',
                            symbolName: 'parking',
                            display: 'none',
                            type: 'rect',
                            rect: ['183px', '121px', '121', '91', 'auto', 'auto']
                        },
                        {
                            id: 'dogs',
                            symbolName: 'dogs',
                            display: 'none',
                            type: 'rect',
                            rect: ['249px', '40px', '201', '91', 'auto', 'auto']
                        },
                        {
                            id: 'skyline',
                            symbolName: 'skyline',
                            display: 'none',
                            type: 'rect',
                            rect: ['53px', '159px', '181', '91', 'auto', 'auto']
                        },
                        {
                            id: 'sky',
                            symbolName: 'sky',
                            display: 'none',
                            type: 'rect',
                            rect: ['413px', '37px', '138', '91', 'auto', 'auto']
                        },
                        {
                            id: 'op1',
                            display: 'none',
                            type: 'rect',
                            rect: ['15px', '451px', '270px', '110px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'op2',
                            display: 'none',
                            type: 'rect',
                            rect: ['292px', '451px', '270px', '110px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'op3',
                            display: 'none',
                            type: 'rect',
                            rect: ['571px', '455px', '268px', '110px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'treetrigger',
                            display: 'none',
                            type: 'rect',
                            rect: ['577px', '100px', '45px', '328px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [5,"rgb(192, 255, 31)","none"]
                        },
                        {
                            id: 'fencetrigger',
                            display: 'none',
                            type: 'rect',
                            rect: ['51px', '336px', '526px', '97px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [5,"rgb(192, 255, 31)","none"]
                        },
                        {
                            id: 'balltrigger',
                            display: 'none',
                            type: 'rect',
                            rect: ['550px', '52px', '73px', '61px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [5,"rgb(192, 255, 31)","none"]
                        },
                        {
                            id: 'posttrigger',
                            display: 'none',
                            type: 'rect',
                            rect: ['197px', '16px', '61px', '213px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'picnictrigger',
                            display: 'none',
                            type: 'rect',
                            rect: ['51px', '104px', '146px', '70px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'carparktrigger',
                            display: 'none',
                            type: 'rect',
                            rect: ['55px', '88px', '137px', '204px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'dogtrigger',
                            display: 'none',
                            type: 'rect',
                            rect: ['213px', '19px', '57px', '206px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(0, 20, 23)","none"]
                        },
                        {
                            id: 'darkcloudtrigger',
                            display: 'none',
                            type: 'rect',
                            rect: ['293px', '136px', '377px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(0, 20, 23)","none"]
                        },
                        {
                            id: 'skylinetrigger',
                            display: 'none',
                            type: 'rect',
                            rect: ['108px', '93px', '105px', '77px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [3,"rgb(0, 20, 23)","none"]
                        },
                        {
                            id: 'mainmenu',
                            display: 'none',
                            type: 'image',
                            rect: ['793px', '485px', '213px', '69px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"mainmenu.png",'0px','0px']
                        },
                        {
                            id: 'Text9',
                            display: 'none',
                            type: 'text',
                            rect: ['727px', '44px', '267px', '147px', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "The terms foreground, midground and background are used especially in analysing <br>a picture or photograph.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text9Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['721px', '24px', '279px', '221px', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "This picture contains many exciting events. You can write a narrative story for each event. <br><br>To do that, you need to analyse the picture systematically according to these sections: foreground, midground and background.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [19, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text9Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['727px', '44px', '267px', '103px', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "Foreground refers to the part of the picture nearest to you.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text9Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['734px', '44px', '254px', '173px', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "Midground refers to the part of the picture between the foreground and background.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text9Copy4',
                            type: 'text',
                            rect: ['734px', '44px', '254px', '142px', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "Background refers to the part of the picture which is far away <br>from your view.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'next_but',
                            display: 'none',
                            type: 'image',
                            rect: ['931px', '209px', '80px', '47px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"next_but.png",'0px','0px']
                        },
                        {
                            id: 'a1',
                            type: 'rect',
                            rect: ['751px', '126px', '179px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'a2',
                            type: 'rect',
                            rect: ['751px', '167px', '182px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'a3',
                            type: 'rect',
                            rect: ['748px', '209px', '182px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'b1',
                            type: 'rect',
                            rect: ['718px', '64px', '285px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'b2',
                            type: 'rect',
                            rect: ['718px', '109px', '285px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'b3',
                            type: 'rect',
                            rect: ['718px', '153px', '285px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'c1',
                            type: 'rect',
                            rect: ['729px', '149px', '242px', '54px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'c2',
                            type: 'rect',
                            rect: ['729px', '87px', '242px', '54px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'c3',
                            type: 'rect',
                            rect: ['729px', '24px', '258px', '54px', 'auto', 'auto'],
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
                    duration: 79510,
                    autoPlay: true,
                    labels: {
                        "start": 27132,
                        "s1": 27224,
                        "fa": 38300,
                        "fb": 38681,
                        "fc": 39050,
                        "answer1": 39634,
                        "s2": 44550,
                        "mb": 54538,
                        "ma": 54919,
                        "mc": 55288,
                        "answer2": 56150,
                        "s3": 61593,
                        "ba": 70067,
                        "bb": 70448,
                        "bc": 70817,
                        "answer3": 71513
                    },
                    data: [
                        [
                            "eid11283",
                            "left",
                            12431,
                            33,
                            "linear",
                            "${Text3}",
                            '304px',
                            '219px'
                        ],
                        [
                            "eid11302",
                            "left",
                            16627,
                            33,
                            "linear",
                            "${Text3}",
                            '219px',
                            '304px'
                        ],
                        [
                            "eid11223",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-blink}",
                            '280px',
                            '221px'
                        ],
                        [
                            "eid12073",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-blink}",
                            '221px',
                            '280px'
                        ],
                        [
                            "eid11256",
                            "rotateZ",
                            17067,
                            83,
                            "linear",
                            "${nath-speak-front}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid12056",
                            "rotateZ",
                            78630,
                            83,
                            "linear",
                            "${nath-speak-front}",
                            '0deg',
                            '-4deg'
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
                            4500,
                            114,
                            "linear",
                            "${nath-up-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11218",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-up-arm-back}",
                            '70px',
                            '55px'
                        ],
                        [
                            "eid12088",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-up-arm-back}",
                            '55px',
                            '70px'
                        ],
                        [
                            "eid11294",
                            "top",
                            15935,
                            86,
                            "linear",
                            "${button-FG}",
                            '584px',
                            '386px'
                        ],
                        [
                            "eid11295",
                            "top",
                            16021,
                            50,
                            "linear",
                            "${button-FG}",
                            '386px',
                            '451px'
                        ],
                        [
                            "eid11981",
                            "top",
                            78372,
                            50,
                            "linear",
                            "${button-FG}",
                            '451px',
                            '386px'
                        ],
                        [
                            "eid11980",
                            "top",
                            78422,
                            86,
                            "linear",
                            "${button-FG}",
                            '386px',
                            '584px'
                        ],
                        [
                            "eid11360",
                            "width",
                            16981,
                            203,
                            "linear",
                            "${RoundRect}",
                            '509px',
                            '679px'
                        ],
                        [
                            "eid12002",
                            "width",
                            78508,
                            203,
                            "linear",
                            "${RoundRect}",
                            '679px',
                            '509px'
                        ],
                        [
                            "eid10969",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-speak-front}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10973",
                            "opacity",
                            12316,
                            115,
                            "linear",
                            "${nath-speak-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10974",
                            "opacity",
                            12498,
                            102,
                            "linear",
                            "${nath-speak-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10975",
                            "opacity",
                            12739,
                            192,
                            "linear",
                            "${nath-speak-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10976",
                            "opacity",
                            12931,
                            159,
                            "linear",
                            "${nath-speak-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10977",
                            "opacity",
                            13090,
                            103,
                            "linear",
                            "${nath-speak-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10978",
                            "opacity",
                            13332,
                            99,
                            "linear",
                            "${nath-speak-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11026",
                            "opacity",
                            13512,
                            115,
                            "linear",
                            "${nath-speak-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11027",
                            "opacity",
                            13694,
                            102,
                            "linear",
                            "${nath-speak-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11028",
                            "opacity",
                            15935,
                            192,
                            "linear",
                            "${nath-speak-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11029",
                            "opacity",
                            16127,
                            159,
                            "linear",
                            "${nath-speak-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11030",
                            "opacity",
                            16286,
                            103,
                            "linear",
                            "${nath-speak-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11031",
                            "opacity",
                            16528,
                            99,
                            "linear",
                            "${nath-speak-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10921",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10919",
                            "opacity",
                            4895,
                            51,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10925",
                            "opacity",
                            12230,
                            51,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11361",
                            "height",
                            16981,
                            203,
                            "linear",
                            "${pic}",
                            '313px',
                            '417px'
                        ],
                        [
                            "eid11994",
                            "height",
                            78508,
                            203,
                            "linear",
                            "${pic}",
                            '417px',
                            '313px'
                        ],
                        [
                            "eid12170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12167",
                            "display",
                            53931,
                            0,
                            "linear",
                            "${b3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12171",
                            "display",
                            53998,
                            0,
                            "linear",
                            "${b3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12123",
                            "display",
                            0,
                            0,
                            "linear",
                            "${balltrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12119",
                            "display",
                            43728,
                            0,
                            "linear",
                            "${balltrigger}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12148",
                            "display",
                            43786,
                            0,
                            "linear",
                            "${balltrigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11433",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11432",
                            "opacity",
                            34050,
                            150,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11497",
                            "opacity",
                            39430,
                            120,
                            "linear",
                            "${Text5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12127",
                            "display",
                            38207,
                            0,
                            "linear",
                            "${a3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12133",
                            "display",
                            38257,
                            0,
                            "linear",
                            "${a3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11693",
                            "left",
                            54538,
                            0,
                            "linear",
                            "${wrong-selectCopy}",
                            '746px',
                            '714px'
                        ],
                        [
                            "eid11888",
                            "left",
                            70067,
                            0,
                            "linear",
                            "${wrong-selectCopy}",
                            '714px',
                            '724px'
                        ],
                        [
                            "eid11017",
                            "top",
                            12316,
                            54,
                            "linear",
                            "${nath-hand5}",
                            '622px',
                            '501px'
                        ],
                        [
                            "eid11023",
                            "top",
                            12370,
                            30,
                            "linear",
                            "${nath-hand5}",
                            '501px',
                            '400px'
                        ],
                        [
                            "eid11025",
                            "top",
                            12400,
                            31,
                            "linear",
                            "${nath-hand5}",
                            '400px',
                            '310px'
                        ],
                        [
                            "eid11047",
                            "top",
                            13548,
                            79,
                            "linear",
                            "${nath-hand5}",
                            '310px',
                            '295px'
                        ],
                        [
                            "eid11054",
                            "top",
                            16627,
                            79,
                            "linear",
                            "${nath-hand5}",
                            '295px',
                            '310px'
                        ],
                        [
                            "eid11062",
                            "top",
                            16706,
                            31,
                            "linear",
                            "${nath-hand5}",
                            '310px',
                            '400px'
                        ],
                        [
                            "eid11061",
                            "top",
                            16737,
                            30,
                            "linear",
                            "${nath-hand5}",
                            '400px',
                            '501px'
                        ],
                        [
                            "eid11060",
                            "top",
                            16767,
                            54,
                            "linear",
                            "${nath-hand5}",
                            '501px',
                            '622px'
                        ],
                        [
                            "eid11142",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-hand5}",
                            '622px',
                            '670px'
                        ],
                        [
                            "eid12013",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-hand5}",
                            '670px',
                            '622px'
                        ],
                        [
                            "eid10227",
                            "top",
                            0,
                            4250,
                            "linear",
                            "${bookshop}",
                            '-4px',
                            '-87px'
                        ],
                        [
                            "eid11359",
                            "height",
                            16981,
                            203,
                            "linear",
                            "${RoundRect}",
                            '325px',
                            '434px'
                        ],
                        [
                            "eid11999",
                            "height",
                            78508,
                            203,
                            "linear",
                            "${RoundRect}",
                            '434px',
                            '325px'
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
                            4091,
                            97,
                            "linear",
                            "${library-table}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11094",
                            "opacity",
                            17067,
                            83,
                            "linear",
                            "${library-table}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12007",
                            "opacity",
                            78286,
                            83,
                            "linear",
                            "${library-table}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12292",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text9Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12293",
                            "display",
                            21250,
                            0,
                            "linear",
                            "${Text9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12294",
                            "display",
                            27075,
                            0,
                            "linear",
                            "${Text9Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11289",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11288",
                            "opacity",
                            12431,
                            33,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11301",
                            "opacity",
                            16627,
                            33,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11960",
                            "display",
                            0,
                            0,
                            "linear",
                            "${dogs}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11570",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ball}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11275",
                            "height",
                            12316,
                            148,
                            "linear",
                            "${balloon2}",
                            '138px',
                            '507px'
                        ],
                        [
                            "eid11304",
                            "height",
                            16627,
                            148,
                            "linear",
                            "${balloon2}",
                            '507px',
                            '138px'
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
                            4500,
                            114,
                            "linear",
                            "${nath-up-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11278",
                            "width",
                            12316,
                            148,
                            "linear",
                            "${balloon2}",
                            '103px',
                            '379px'
                        ],
                        [
                            "eid11307",
                            "width",
                            16627,
                            148,
                            "linear",
                            "${balloon2}",
                            '379px',
                            '103px'
                        ],
                        [
                            "eid11694",
                            "top",
                            54538,
                            0,
                            "linear",
                            "${wrong-selectCopy}",
                            '203px',
                            '153px'
                        ],
                        [
                            "eid11889",
                            "top",
                            70067,
                            0,
                            "linear",
                            "${wrong-selectCopy}",
                            '153px',
                            '150px'
                        ],
                        [
                            "eid11805",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11808",
                            "opacity",
                            66186,
                            150,
                            "linear",
                            "${Text4Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11809",
                            "opacity",
                            69450,
                            150,
                            "linear",
                            "${Text4Copy2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11152",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-laugh}",
                            '81px',
                            '244px'
                        ],
                        [
                            "eid12049",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-laugh}",
                            '244px',
                            '81px'
                        ],
                        [
                            "eid12168",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12165",
                            "display",
                            53931,
                            0,
                            "linear",
                            "${b1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12173",
                            "display",
                            53998,
                            0,
                            "linear",
                            "${b1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11324",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${button-MG}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11321",
                            "opacity",
                            15935,
                            41,
                            "linear",
                            "${button-MG}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12326",
                            "opacity",
                            27132,
                            18,
                            "linear",
                            "${button-MG}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid12347",
                            "opacity",
                            44396,
                            51,
                            "linear",
                            "${button-MG}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid12357",
                            "opacity",
                            61417,
                            83,
                            "linear",
                            "${button-MG}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid11985",
                            "opacity",
                            78467,
                            41,
                            "linear",
                            "${button-MG}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11416",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11412",
                            "opacity",
                            27150,
                            74,
                            "linear",
                            "${spark12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11415",
                            "opacity",
                            27322,
                            78,
                            "linear",
                            "${spark12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11592",
                            "opacity",
                            44550,
                            74,
                            "linear",
                            "${spark12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11593",
                            "opacity",
                            44722,
                            78,
                            "linear",
                            "${spark12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11796",
                            "opacity",
                            61650,
                            74,
                            "linear",
                            "${spark12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11797",
                            "opacity",
                            61822,
                            78,
                            "linear",
                            "${spark12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11509",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11508",
                            "opacity",
                            39634,
                            101,
                            "linear",
                            "${Text7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11522",
                            "opacity",
                            41945,
                            101,
                            "linear",
                            "${Text7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11215",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-body}",
                            '293px',
                            '231px'
                        ],
                        [
                            "eid12081",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-body}",
                            '231px',
                            '293px'
                        ],
                        [
                            "eid11458",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11457",
                            "opacity",
                            36761,
                            150,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11495",
                            "opacity",
                            39430,
                            120,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11221",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-front}",
                            '280px',
                            '221px'
                        ],
                        [
                            "eid12062",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-front}",
                            '221px',
                            '280px'
                        ],
                        [
                            "eid11696",
                            "top",
                            54538,
                            0,
                            "linear",
                            "${wrong-select}",
                            '161px',
                            '64px'
                        ],
                        [
                            "eid11887",
                            "top",
                            70067,
                            0,
                            "linear",
                            "${wrong-select}",
                            '64px',
                            '87px'
                        ],
                        [
                            "eid11540",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11539",
                            "opacity",
                            39816,
                            102,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11543",
                            "opacity",
                            41859,
                            102,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11717",
                            "opacity",
                            56150,
                            102,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11718",
                            "opacity",
                            58672,
                            102,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11927",
                            "opacity",
                            71715,
                            102,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11928",
                            "opacity",
                            74175,
                            102,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11478",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wrong-select}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11475",
                            "opacity",
                            38681,
                            64,
                            "linear",
                            "${wrong-select}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11481",
                            "opacity",
                            38857,
                            64,
                            "linear",
                            "${wrong-select}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11862",
                            "opacity",
                            54919,
                            64,
                            "linear",
                            "${wrong-select}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11863",
                            "opacity",
                            55095,
                            64,
                            "linear",
                            "${wrong-select}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11868",
                            "opacity",
                            70448,
                            64,
                            "linear",
                            "${wrong-select}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11869",
                            "opacity",
                            70624,
                            64,
                            "linear",
                            "${wrong-select}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10259",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-speak-side}",
                            '1069px',
                            '627px'
                        ],
                        [
                            "eid10434",
                            "left",
                            5948,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '627px',
                            '602px'
                        ],
                        [
                            "eid10930",
                            "left",
                            12093,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '602px',
                            '627px'
                        ],
                        [
                            "eid11153",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-speak-side}",
                            '627px',
                            '809px'
                        ],
                        [
                            "eid12069",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-speak-side}",
                            '809px',
                            '627px'
                        ],
                        [
                            "eid11468",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11465",
                            "opacity",
                            36761,
                            150,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11493",
                            "opacity",
                            39430,
                            120,
                            "linear",
                            "${RoundRect2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11654",
                            "opacity",
                            53586,
                            105,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11705",
                            "opacity",
                            55902,
                            120,
                            "linear",
                            "${RoundRect2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11834",
                            "opacity",
                            69743,
                            107,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11897",
                            "opacity",
                            71197,
                            107,
                            "linear",
                            "${RoundRect2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12193",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picnictrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12190",
                            "display",
                            60970,
                            0,
                            "linear",
                            "${picnictrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12196",
                            "display",
                            61055,
                            0,
                            "linear",
                            "${picnictrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10439",
                            "top",
                            5948,
                            187,
                            "linear",
                            "${nath-blink}",
                            '81px',
                            '101px'
                        ],
                        [
                            "eid10932",
                            "top",
                            12093,
                            187,
                            "linear",
                            "${nath-blink}",
                            '101px',
                            '81px'
                        ],
                        [
                            "eid11147",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-blink}",
                            '81px',
                            '244px'
                        ],
                        [
                            "eid12071",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-blink}",
                            '244px',
                            '81px'
                        ],
                        [
                            "eid10290",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-low-arm-back}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10288",
                            "opacity",
                            4500,
                            114,
                            "linear",
                            "${nath-low-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11621",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11624",
                            "opacity",
                            52566,
                            150,
                            "linear",
                            "${Text5Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11625",
                            "opacity",
                            55902,
                            120,
                            "linear",
                            "${Text5Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11671",
                            "left",
                            53586,
                            0,
                            "linear",
                            "${RoundRect2Copy}",
                            '752px',
                            '720px'
                        ],
                        [
                            "eid11851",
                            "left",
                            69743,
                            0,
                            "linear",
                            "${RoundRect2Copy}",
                            '720px',
                            '729px'
                        ],
                        [
                            "eid12217",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text11Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12218",
                            "opacity",
                            69743,
                            107,
                            "linear",
                            "${Text11Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12219",
                            "opacity",
                            71197,
                            107,
                            "linear",
                            "${Text11Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11217",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-up-arm-back}",
                            '173px',
                            '136px'
                        ],
                        [
                            "eid12085",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-up-arm-back}",
                            '136px',
                            '173px'
                        ],
                        [
                            "eid12174",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text10Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12175",
                            "opacity",
                            53586,
                            105,
                            "linear",
                            "${Text10Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12176",
                            "opacity",
                            55902,
                            120,
                            "linear",
                            "${Text10Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10968",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-front}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10972",
                            "opacity",
                            12280,
                            36,
                            "linear",
                            "${nath-front}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11262",
                            "opacity",
                            17117,
                            33,
                            "linear",
                            "${nath-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12093",
                            "opacity",
                            79454,
                            56,
                            "linear",
                            "${nath-front}",
                            '0',
                            '1'
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
                            4500,
                            114,
                            "linear",
                            "${nath-low-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11407",
                            "width",
                            27150,
                            250,
                            "linear",
                            "${spark12}",
                            '191px',
                            '377px'
                        ],
                        [
                            "eid11598",
                            "width",
                            44447,
                            0,
                            "linear",
                            "${spark12}",
                            '377px',
                            '377px'
                        ],
                        [
                            "eid11595",
                            "width",
                            44550,
                            250,
                            "linear",
                            "${spark12}",
                            '191px',
                            '377px'
                        ],
                        [
                            "eid11802",
                            "width",
                            61593,
                            0,
                            "linear",
                            "${spark12}",
                            '377px',
                            '377px'
                        ],
                        [
                            "eid11799",
                            "width",
                            61650,
                            250,
                            "linear",
                            "${spark12}",
                            '191px',
                            '377px'
                        ],
                        [
                            "eid11081",
                            "opacity",
                            16627,
                            79,
                            "linear",
                            "${nath-laugh}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11259",
                            "opacity",
                            17117,
                            33,
                            "linear",
                            "${nath-laugh}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11558",
                            "opacity",
                            43589,
                            139,
                            "linear",
                            "${nath-laugh}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11583",
                            "opacity",
                            44050,
                            139,
                            "linear",
                            "${nath-laugh}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11740",
                            "opacity",
                            57367,
                            114,
                            "linear",
                            "${nath-laugh}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11743",
                            "opacity",
                            57757,
                            88,
                            "linear",
                            "${nath-laugh}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12169",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12166",
                            "display",
                            53931,
                            0,
                            "linear",
                            "${b2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12172",
                            "display",
                            53998,
                            0,
                            "linear",
                            "${b2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11016",
                            "left",
                            12316,
                            54,
                            "linear",
                            "${nath-hand5}",
                            '843px',
                            '996px'
                        ],
                        [
                            "eid11022",
                            "left",
                            12370,
                            30,
                            "linear",
                            "${nath-hand5}",
                            '996px',
                            '996px'
                        ],
                        [
                            "eid11024",
                            "left",
                            12400,
                            31,
                            "linear",
                            "${nath-hand5}",
                            '996px',
                            '924px'
                        ],
                        [
                            "eid11046",
                            "left",
                            13548,
                            79,
                            "linear",
                            "${nath-hand5}",
                            '924px',
                            '859px'
                        ],
                        [
                            "eid11055",
                            "left",
                            16627,
                            79,
                            "linear",
                            "${nath-hand5}",
                            '859px',
                            '924px'
                        ],
                        [
                            "eid11066",
                            "left",
                            16706,
                            31,
                            "linear",
                            "${nath-hand5}",
                            '924px',
                            '996px'
                        ],
                        [
                            "eid11065",
                            "left",
                            16737,
                            30,
                            "linear",
                            "${nath-hand5}",
                            '996px',
                            '996px'
                        ],
                        [
                            "eid11064",
                            "left",
                            16767,
                            54,
                            "linear",
                            "${nath-hand5}",
                            '996px',
                            '843px'
                        ],
                        [
                            "eid11141",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-hand5}",
                            '843px',
                            '982px'
                        ],
                        [
                            "eid12022",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-hand5}",
                            '982px',
                            '843px'
                        ],
                        [
                            "eid11393",
                            "opacity",
                            17117,
                            82,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11396",
                            "opacity",
                            17302,
                            61,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11143",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-front}",
                            '627px',
                            '809px'
                        ],
                        [
                            "eid12064",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-front}",
                            '809px',
                            '627px'
                        ],
                        [
                            "eid12124",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fencetrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12120",
                            "display",
                            43728,
                            0,
                            "linear",
                            "${fencetrigger}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12149",
                            "display",
                            43786,
                            0,
                            "linear",
                            "${fencetrigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11672",
                            "top",
                            53586,
                            0,
                            "linear",
                            "${RoundRect2Copy}",
                            '167px',
                            '115px'
                        ],
                        [
                            "eid11852",
                            "top",
                            69743,
                            0,
                            "linear",
                            "${RoundRect2Copy}",
                            '95px',
                            '95px'
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
                            4500,
                            114,
                            "linear",
                            "${nath-body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12245",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12239",
                            "display",
                            69850,
                            0,
                            "linear",
                            "${c2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12242",
                            "display",
                            69899,
                            0,
                            "linear",
                            "${c2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11234",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-speak-front}",
                            '251px',
                            '198px'
                        ],
                        [
                            "eid12059",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-speak-front}",
                            '198px',
                            '251px'
                        ],
                        [
                            "eid12295",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text9Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12296",
                            "display",
                            27496,
                            0,
                            "linear",
                            "${Text9Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12297",
                            "display",
                            31075,
                            0,
                            "linear",
                            "${Text9Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11777",
                            "display",
                            0,
                            0,
                            "linear",
                            "${park-sign}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10258",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-up-arm-front}",
                            '1254px',
                            '812px'
                        ],
                        [
                            "eid11014",
                            "left",
                            12316,
                            115,
                            "linear",
                            "${nath-up-arm-front}",
                            '812px',
                            '824px'
                        ],
                        [
                            "eid11076",
                            "left",
                            16706,
                            115,
                            "linear",
                            "${nath-up-arm-front}",
                            '824px',
                            '812px'
                        ],
                        [
                            "eid11165",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-up-arm-front}",
                            '812px',
                            '964px'
                        ],
                        [
                            "eid12047",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-up-arm-front}",
                            '964px',
                            '812px'
                        ],
                        [
                            "eid11429",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12247",
                            "opacity",
                            17362,
                            100,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12257",
                            "opacity",
                            27032,
                            100,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11427",
                            "opacity",
                            27364,
                            150,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11582",
                            "opacity",
                            44151,
                            150,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11603",
                            "opacity",
                            44658,
                            150,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11790",
                            "opacity",
                            61267,
                            150,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11804",
                            "opacity",
                            61724,
                            150,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11992",
                            "opacity",
                            77914,
                            68,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11222",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-front}",
                            '251px',
                            '198px'
                        ],
                        [
                            "eid12065",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-front}",
                            '198px',
                            '251px'
                        ],
                        [
                            "eid11224",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-blink}",
                            '251px',
                            '198px'
                        ],
                        [
                            "eid12075",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-blink}",
                            '198px',
                            '251px'
                        ],
                        [
                            "eid10466",
                            "top",
                            6317,
                            241,
                            "linear",
                            "${nath-up-arm-back}",
                            '376px',
                            '341px'
                        ],
                        [
                            "eid10948",
                            "top",
                            6750,
                            164,
                            "linear",
                            "${nath-up-arm-back}",
                            '341px',
                            '354px'
                        ],
                        [
                            "eid10949",
                            "top",
                            6914,
                            0,
                            "linear",
                            "${nath-up-arm-back}",
                            '354px',
                            '354px'
                        ],
                        [
                            "eid10950",
                            "top",
                            11510,
                            140,
                            "linear",
                            "${nath-up-arm-back}",
                            '354px',
                            '344px'
                        ],
                        [
                            "eid10980",
                            "top",
                            11650,
                            93,
                            "linear",
                            "${nath-up-arm-back}",
                            '344px',
                            '342px'
                        ],
                        [
                            "eid10984",
                            "top",
                            11743,
                            245,
                            "linear",
                            "${nath-up-arm-back}",
                            '342px',
                            '363px'
                        ],
                        [
                            "eid10985",
                            "top",
                            11988,
                            292,
                            "linear",
                            "${nath-up-arm-back}",
                            '363px',
                            '379px'
                        ],
                        [
                            "eid11140",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-up-arm-back}",
                            '379px',
                            '474px'
                        ],
                        [
                            "eid12086",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-up-arm-back}",
                            '474px',
                            '379px'
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
                            3941,
                            198,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12138",
                            "display",
                            0,
                            0,
                            "linear",
                            "${op1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12141",
                            "display",
                            27150,
                            0,
                            "linear",
                            "${op1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12144",
                            "display",
                            27224,
                            0,
                            "linear",
                            "${op1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11323",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${button-FG}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11320",
                            "opacity",
                            15935,
                            41,
                            "linear",
                            "${button-FG}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12353",
                            "opacity",
                            44396,
                            51,
                            "linear",
                            "${button-FG}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid11982",
                            "opacity",
                            78467,
                            41,
                            "linear",
                            "${button-FG}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11227",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-laugh}",
                            '280px',
                            '221px'
                        ],
                        [
                            "eid12051",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-laugh}",
                            '221px',
                            '280px'
                        ],
                        [
                            "eid11298",
                            "top",
                            16207,
                            86,
                            "linear",
                            "${button-BG}",
                            '584px',
                            '386px'
                        ],
                        [
                            "eid11299",
                            "top",
                            16293,
                            50,
                            "linear",
                            "${button-BG}",
                            '386px',
                            '451px'
                        ],
                        [
                            "eid11978",
                            "top",
                            78100,
                            50,
                            "linear",
                            "${button-BG}",
                            '451px',
                            '386px'
                        ],
                        [
                            "eid11977",
                            "top",
                            78150,
                            86,
                            "linear",
                            "${button-BG}",
                            '386px',
                            '584px'
                        ],
                        [
                            "eid10260",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-up-arm-back}",
                            '1083px',
                            '641px'
                        ],
                        [
                            "eid10465",
                            "left",
                            6317,
                            241,
                            "linear",
                            "${nath-up-arm-back}",
                            '641px',
                            '611px'
                        ],
                        [
                            "eid10946",
                            "left",
                            6750,
                            164,
                            "linear",
                            "${nath-up-arm-back}",
                            '611px',
                            '616px'
                        ],
                        [
                            "eid10947",
                            "left",
                            6914,
                            0,
                            "linear",
                            "${nath-up-arm-back}",
                            '616px',
                            '616px'
                        ],
                        [
                            "eid10951",
                            "left",
                            11510,
                            140,
                            "linear",
                            "${nath-up-arm-back}",
                            '616px',
                            '607px'
                        ],
                        [
                            "eid10979",
                            "left",
                            11650,
                            93,
                            "linear",
                            "${nath-up-arm-back}",
                            '607px',
                            '603px'
                        ],
                        [
                            "eid10961",
                            "left",
                            11743,
                            245,
                            "linear",
                            "${nath-up-arm-back}",
                            '603px',
                            '621px'
                        ],
                        [
                            "eid10981",
                            "left",
                            11988,
                            292,
                            "linear",
                            "${nath-up-arm-back}",
                            '621px',
                            '643px'
                        ],
                        [
                            "eid11139",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-up-arm-back}",
                            '643px',
                            '825px'
                        ],
                        [
                            "eid12087",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-up-arm-back}",
                            '825px',
                            '643px'
                        ],
                        [
                            "eid11669",
                            "left",
                            53586,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '752px',
                            '720px'
                        ],
                        [
                            "eid11853",
                            "left",
                            69743,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '720px',
                            '729px'
                        ],
                        [
                            "eid11408",
                            "left",
                            27150,
                            250,
                            "linear",
                            "${spark12}",
                            '54px',
                            '-32px'
                        ],
                        [
                            "eid11596",
                            "left",
                            44447,
                            0,
                            "linear",
                            "${spark12}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid11594",
                            "left",
                            44550,
                            250,
                            "linear",
                            "${spark12}",
                            '331px',
                            '238px'
                        ],
                        [
                            "eid11800",
                            "left",
                            61593,
                            0,
                            "linear",
                            "${spark12}",
                            '238px',
                            '238px'
                        ],
                        [
                            "eid11798",
                            "left",
                            61650,
                            250,
                            "linear",
                            "${spark12}",
                            '608px',
                            '521px'
                        ],
                        [
                            "eid11773",
                            "display",
                            0,
                            0,
                            "linear",
                            "${picnic}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11571",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fence}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11164",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-low-arm-back}",
                            '515px',
                            '581px'
                        ],
                        [
                            "eid12038",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-low-arm-back}",
                            '581px',
                            '515px'
                        ],
                        [
                            "eid11090",
                            "left",
                            16706,
                            444,
                            "linear",
                            "${library-table}",
                            '-58px',
                            '-226px'
                        ],
                        [
                            "eid12008",
                            "left",
                            78286,
                            444,
                            "linear",
                            "${library-table}",
                            '-226px',
                            '-58px'
                        ],
                        [
                            "eid10262",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-blink}",
                            '1069px',
                            '627px'
                        ],
                        [
                            "eid10438",
                            "left",
                            5948,
                            187,
                            "linear",
                            "${nath-blink}",
                            '627px',
                            '602px'
                        ],
                        [
                            "eid10933",
                            "left",
                            12093,
                            187,
                            "linear",
                            "${nath-blink}",
                            '602px',
                            '627px'
                        ],
                        [
                            "eid11145",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-blink}",
                            '627px',
                            '809px'
                        ],
                        [
                            "eid12074",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-blink}",
                            '809px',
                            '627px'
                        ],
                        [
                            "eid11330",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pic-midground}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11602",
                            "opacity",
                            44722,
                            132,
                            "linear",
                            "${pic-midground}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11793",
                            "opacity",
                            61267,
                            91,
                            "linear",
                            "${pic-midground}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10296",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-low-arm-back}",
                            '1045px',
                            '607px'
                        ],
                        [
                            "eid11163",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-low-arm-back}",
                            '607px',
                            '797px'
                        ],
                        [
                            "eid12040",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-low-arm-back}",
                            '797px',
                            '607px'
                        ],
                        [
                            "eid11277",
                            "left",
                            12316,
                            148,
                            "linear",
                            "${balloon2}",
                            '558px',
                            '235px'
                        ],
                        [
                            "eid11306",
                            "left",
                            16627,
                            148,
                            "linear",
                            "${balloon2}",
                            '235px',
                            '558px'
                        ],
                        [
                            "eid11968",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sky}",
                            'none',
                            'none'
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
                            "eid11434",
                            "opacity",
                            33450,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11435",
                            "opacity",
                            33632,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11436",
                            "opacity",
                            33873,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11437",
                            "opacity",
                            34065,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11438",
                            "opacity",
                            34224,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11439",
                            "opacity",
                            34466,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11440",
                            "opacity",
                            34646,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11441",
                            "opacity",
                            34828,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11442",
                            "opacity",
                            36069,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11443",
                            "opacity",
                            36261,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11444",
                            "opacity",
                            36420,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11445",
                            "opacity",
                            36662,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11446",
                            "opacity",
                            36850,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11447",
                            "opacity",
                            37032,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11448",
                            "opacity",
                            37273,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11449",
                            "opacity",
                            37465,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11450",
                            "opacity",
                            37624,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11451",
                            "opacity",
                            37866,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11510",
                            "opacity",
                            39634,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11511",
                            "opacity",
                            39816,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11512",
                            "opacity",
                            40057,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11513",
                            "opacity",
                            40249,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11514",
                            "opacity",
                            40408,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11515",
                            "opacity",
                            40650,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11516",
                            "opacity",
                            40830,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11517",
                            "opacity",
                            41012,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11518",
                            "opacity",
                            41253,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11519",
                            "opacity",
                            41445,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11520",
                            "opacity",
                            41604,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11521",
                            "opacity",
                            41846,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11548",
                            "opacity",
                            42109,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11549",
                            "opacity",
                            42291,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11550",
                            "opacity",
                            42532,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11551",
                            "opacity",
                            42724,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11552",
                            "opacity",
                            42883,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11553",
                            "opacity",
                            43125,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11554",
                            "opacity",
                            43305,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11555",
                            "opacity",
                            43487,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11609",
                            "opacity",
                            50050,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11610",
                            "opacity",
                            50232,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11611",
                            "opacity",
                            50473,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11612",
                            "opacity",
                            50665,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11613",
                            "opacity",
                            50824,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11614",
                            "opacity",
                            51066,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11615",
                            "opacity",
                            51246,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11616",
                            "opacity",
                            51928,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11617",
                            "opacity",
                            52094,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11618",
                            "opacity",
                            52276,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11626",
                            "opacity",
                            52620,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11627",
                            "opacity",
                            52802,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11628",
                            "opacity",
                            53043,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11629",
                            "opacity",
                            53235,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11630",
                            "opacity",
                            53394,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11631",
                            "opacity",
                            53636,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11632",
                            "opacity",
                            53816,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11633",
                            "opacity",
                            53998,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11634",
                            "opacity",
                            54164,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11635",
                            "opacity",
                            54346,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11732",
                            "opacity",
                            56252,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11733",
                            "opacity",
                            56434,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11734",
                            "opacity",
                            56675,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11735",
                            "opacity",
                            56867,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11736",
                            "opacity",
                            57026,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11737",
                            "opacity",
                            57268,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11744",
                            "opacity",
                            57845,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11745",
                            "opacity",
                            58027,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11746",
                            "opacity",
                            58268,
                            146,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11747",
                            "opacity",
                            58414,
                            121,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11748",
                            "opacity",
                            58535,
                            78,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11751",
                            "opacity",
                            58613,
                            95,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11760",
                            "opacity",
                            58900,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11761",
                            "opacity",
                            59082,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11762",
                            "opacity",
                            59323,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11763",
                            "opacity",
                            59515,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11764",
                            "opacity",
                            59674,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11765",
                            "opacity",
                            59916,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11766",
                            "opacity",
                            60096,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11767",
                            "opacity",
                            60278,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11768",
                            "opacity",
                            60444,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11769",
                            "opacity",
                            60626,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11810",
                            "opacity",
                            66672,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11811",
                            "opacity",
                            66854,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11812",
                            "opacity",
                            67095,
                            146,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11813",
                            "opacity",
                            67241,
                            121,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11814",
                            "opacity",
                            67362,
                            78,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11815",
                            "opacity",
                            67440,
                            95,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11816",
                            "opacity",
                            67727,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11817",
                            "opacity",
                            67909,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11818",
                            "opacity",
                            69150,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11819",
                            "opacity",
                            69342,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11820",
                            "opacity",
                            69501,
                            0,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11905",
                            "opacity",
                            71600,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11906",
                            "opacity",
                            71782,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11907",
                            "opacity",
                            72023,
                            146,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11908",
                            "opacity",
                            72169,
                            121,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11909",
                            "opacity",
                            72290,
                            78,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11910",
                            "opacity",
                            72368,
                            95,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11911",
                            "opacity",
                            72655,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11912",
                            "opacity",
                            72837,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11913",
                            "opacity",
                            73078,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11914",
                            "opacity",
                            73270,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11915",
                            "opacity",
                            73429,
                            0,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11916",
                            "opacity",
                            73501,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11917",
                            "opacity",
                            73683,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11918",
                            "opacity",
                            73924,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11919",
                            "opacity",
                            74116,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11920",
                            "opacity",
                            74275,
                            0,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11941",
                            "opacity",
                            74748,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11942",
                            "opacity",
                            74930,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11943",
                            "opacity",
                            75171,
                            146,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11944",
                            "opacity",
                            75317,
                            121,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11945",
                            "opacity",
                            75438,
                            78,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11946",
                            "opacity",
                            75516,
                            95,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11947",
                            "opacity",
                            75803,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11948",
                            "opacity",
                            75985,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11949",
                            "opacity",
                            76226,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11950",
                            "opacity",
                            76418,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11951",
                            "opacity",
                            76577,
                            0,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11952",
                            "opacity",
                            76649,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11953",
                            "opacity",
                            76831,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11954",
                            "opacity",
                            77072,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11955",
                            "opacity",
                            77264,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11956",
                            "opacity",
                            77423,
                            0,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12314",
                            "display",
                            53586,
                            0,
                            "linear",
                            "${Text10Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12315",
                            "display",
                            56022,
                            0,
                            "linear",
                            "${Text10Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12220",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text11Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12221",
                            "opacity",
                            69743,
                            107,
                            "linear",
                            "${Text11Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12222",
                            "opacity",
                            71197,
                            107,
                            "linear",
                            "${Text11Copy2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11547",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11546",
                            "opacity",
                            42109,
                            101,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11581",
                            "opacity",
                            44050,
                            101,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11226",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-up-arm-front}",
                            '102px',
                            '80px'
                        ],
                        [
                            "eid12048",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-up-arm-front}",
                            '80px',
                            '102px'
                        ],
                        [
                            "eid12312",
                            "display",
                            42109,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12313",
                            "display",
                            44189,
                            0,
                            "linear",
                            "${Text8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12306",
                            "display",
                            71513,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12307",
                            "display",
                            74302,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11362",
                            "width",
                            16981,
                            203,
                            "linear",
                            "${pic}",
                            '471px',
                            '628px'
                        ],
                        [
                            "eid11997",
                            "width",
                            78508,
                            203,
                            "linear",
                            "${pic}",
                            '628px',
                            '471px'
                        ],
                        [
                            "eid11470",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11467",
                            "opacity",
                            36761,
                            150,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11496",
                            "opacity",
                            39430,
                            120,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11656",
                            "opacity",
                            53586,
                            105,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11707",
                            "opacity",
                            55902,
                            120,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11836",
                            "opacity",
                            69743,
                            107,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11899",
                            "opacity",
                            71197,
                            107,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11231",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-side}",
                            '280px',
                            '221px'
                        ],
                        [
                            "eid12078",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-side}",
                            '221px',
                            '280px'
                        ],
                        [
                            "eid11219",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-hand5}",
                            '119px',
                            '94px'
                        ],
                        [
                            "eid12016",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-hand5}",
                            '94px',
                            '119px'
                        ],
                        [
                            "eid12287",
                            "rotateZ",
                            663,
                            250,
                            "linear",
                            "${TextCopy}",
                            '0deg',
                            '-9deg'
                        ],
                        [
                            "eid12288",
                            "rotateZ",
                            913,
                            250,
                            "linear",
                            "${TextCopy}",
                            '-9deg',
                            '5deg'
                        ],
                        [
                            "eid12289",
                            "rotateZ",
                            1163,
                            151,
                            "linear",
                            "${TextCopy}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid11532",
                            "height",
                            39816,
                            161,
                            "linear",
                            "${Ellipse}",
                            '175px',
                            '258px'
                        ],
                        [
                            "eid11542",
                            "height",
                            41800,
                            161,
                            "linear",
                            "${Ellipse}",
                            '258px',
                            '175px'
                        ],
                        [
                            "eid11726",
                            "height",
                            56082,
                            0,
                            "linear",
                            "${Ellipse}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid11715",
                            "height",
                            56150,
                            161,
                            "linear",
                            "${Ellipse}",
                            '175px',
                            '258px'
                        ],
                        [
                            "eid11716",
                            "height",
                            58613,
                            161,
                            "linear",
                            "${Ellipse}",
                            '258px',
                            '175px'
                        ],
                        [
                            "eid11936",
                            "height",
                            71663,
                            0,
                            "linear",
                            "${Ellipse}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid11925",
                            "height",
                            71715,
                            161,
                            "linear",
                            "${Ellipse}",
                            '76px',
                            '71px'
                        ],
                        [
                            "eid11926",
                            "height",
                            74116,
                            161,
                            "linear",
                            "${Ellipse}",
                            '71px',
                            '175px'
                        ],
                        [
                            "eid11161",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-speak-front}",
                            '627px',
                            '809px'
                        ],
                        [
                            "eid12058",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-speak-front}",
                            '809px',
                            '627px'
                        ],
                        [
                            "eid12310",
                            "display",
                            17462,
                            0,
                            "linear",
                            "${Text9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12311",
                            "display",
                            21250,
                            0,
                            "linear",
                            "${Text9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11604",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11607",
                            "opacity",
                            49505,
                            150,
                            "linear",
                            "${Text4Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11608",
                            "opacity",
                            52348,
                            150,
                            "linear",
                            "${Text4Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid12191",
                            "display",
                            0,
                            0,
                            "linear",
                            "${posttrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12188",
                            "display",
                            60970,
                            0,
                            "linear",
                            "${posttrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12194",
                            "display",
                            61055,
                            0,
                            "linear",
                            "${posttrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11232",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-side}",
                            '251px',
                            '198px'
                        ],
                        [
                            "eid12080",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-side}",
                            '198px',
                            '251px'
                        ],
                        [
                            "eid10431",
                            "rotateZ",
                            5948,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid10931",
                            "rotateZ",
                            12093,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '-15deg',
                            '-4deg'
                        ],
                        [
                            "eid11254",
                            "rotateZ",
                            17067,
                            83,
                            "linear",
                            "${nath-speak-side}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid12067",
                            "rotateZ",
                            78630,
                            83,
                            "linear",
                            "${nath-speak-side}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid12304",
                            "display",
                            74680,
                            0,
                            "linear",
                            "${Text12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12305",
                            "display",
                            77943,
                            0,
                            "linear",
                            "${Text12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10435",
                            "top",
                            5948,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '81px',
                            '101px'
                        ],
                        [
                            "eid10929",
                            "top",
                            12093,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '101px',
                            '81px'
                        ],
                        [
                            "eid11155",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-speak-side}",
                            '81px',
                            '244px'
                        ],
                        [
                            "eid12066",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-speak-side}",
                            '244px',
                            '81px'
                        ],
                        [
                            "eid11009",
                            "rotateZ",
                            12316,
                            115,
                            "linear",
                            "${nath-up-arm-front}",
                            '-1deg',
                            '-10deg'
                        ],
                        [
                            "eid11077",
                            "rotateZ",
                            16706,
                            115,
                            "linear",
                            "${nath-up-arm-front}",
                            '-10deg',
                            '-1deg'
                        ],
                        [
                            "eid11477",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${wrong-selectCopy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11476",
                            "opacity",
                            39050,
                            64,
                            "linear",
                            "${wrong-selectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11482",
                            "opacity",
                            39234,
                            64,
                            "linear",
                            "${wrong-selectCopy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11860",
                            "opacity",
                            55288,
                            64,
                            "linear",
                            "${wrong-selectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11861",
                            "opacity",
                            55472,
                            64,
                            "linear",
                            "${wrong-selectCopy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11866",
                            "opacity",
                            70817,
                            64,
                            "linear",
                            "${wrong-selectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11867",
                            "opacity",
                            71001,
                            64,
                            "linear",
                            "${wrong-selectCopy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11479",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-select}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11474",
                            "opacity",
                            38300,
                            64,
                            "linear",
                            "${right-select}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11480",
                            "opacity",
                            38473,
                            64,
                            "linear",
                            "${right-select}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11864",
                            "opacity",
                            54538,
                            64,
                            "linear",
                            "${right-select}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11865",
                            "opacity",
                            54711,
                            64,
                            "linear",
                            "${right-select}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11870",
                            "opacity",
                            70067,
                            64,
                            "linear",
                            "${right-select}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11871",
                            "opacity",
                            70240,
                            64,
                            "linear",
                            "${right-select}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid12132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12129",
                            "display",
                            38207,
                            0,
                            "linear",
                            "${a1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12135",
                            "display",
                            38257,
                            0,
                            "linear",
                            "${a1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10990",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-hand5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10989",
                            "opacity",
                            12280,
                            36,
                            "linear",
                            "${nath-hand5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11063",
                            "opacity",
                            16821,
                            36,
                            "linear",
                            "${nath-hand5}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid12017",
                            "opacity",
                            78923,
                            36,
                            "linear",
                            "${nath-hand5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11781",
                            "display",
                            0,
                            0,
                            "linear",
                            "${parking}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11216",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-body}",
                            '213px',
                            '168px'
                        ],
                        [
                            "eid12084",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-body}",
                            '168px',
                            '213px'
                        ],
                        [
                            "eid11229",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-speak-side}",
                            '280px',
                            '221px'
                        ],
                        [
                            "eid12068",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-speak-side}",
                            '221px',
                            '280px'
                        ],
                        [
                            "eid11284",
                            "top",
                            12431,
                            33,
                            "linear",
                            "${Text3}",
                            '108px',
                            '67px'
                        ],
                        [
                            "eid11300",
                            "top",
                            16627,
                            33,
                            "linear",
                            "${Text3}",
                            '67px',
                            '108px'
                        ],
                        [
                            "eid11322",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${button-BG}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11319",
                            "opacity",
                            15935,
                            41,
                            "linear",
                            "${button-BG}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid12330",
                            "opacity",
                            27132,
                            18,
                            "linear",
                            "${button-BG}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid12361",
                            "opacity",
                            61417,
                            83,
                            "linear",
                            "${button-BG}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid11979",
                            "opacity",
                            78467,
                            41,
                            "linear",
                            "${button-BG}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid11162",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-speak-front}",
                            '81px',
                            '244px'
                        ],
                        [
                            "eid12055",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-speak-front}",
                            '244px',
                            '81px'
                        ],
                        [
                            "eid10922",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10920",
                            "opacity",
                            4895,
                            51,
                            "linear",
                            "${narrator-text-balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10928",
                            "opacity",
                            12230,
                            51,
                            "linear",
                            "${narrator-text-balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11377",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11375",
                            "opacity",
                            16981,
                            81,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12000",
                            "opacity",
                            78630,
                            81,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11697",
                            "left",
                            54538,
                            0,
                            "linear",
                            "${right-select}",
                            '746px',
                            '715px'
                        ],
                        [
                            "eid11884",
                            "left",
                            70067,
                            0,
                            "linear",
                            "${right-select}",
                            '715px',
                            '724px'
                        ],
                        [
                            "eid12268",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text9Copy4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12271",
                            "opacity",
                            61861,
                            75,
                            "linear",
                            "${Text9Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12272",
                            "opacity",
                            66111,
                            75,
                            "linear",
                            "${Text9Copy4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10464",
                            "rotateZ",
                            6317,
                            241,
                            "linear",
                            "${nath-up-arm-back}",
                            '1deg',
                            '53deg'
                        ],
                        [
                            "eid10944",
                            "rotateZ",
                            6750,
                            164,
                            "linear",
                            "${nath-up-arm-back}",
                            '53deg',
                            '40deg'
                        ],
                        [
                            "eid10945",
                            "rotateZ",
                            6914,
                            0,
                            "linear",
                            "${nath-up-arm-back}",
                            '40deg',
                            '40deg'
                        ],
                        [
                            "eid10952",
                            "rotateZ",
                            11510,
                            233,
                            "linear",
                            "${nath-up-arm-back}",
                            '40deg',
                            '53deg'
                        ],
                        [
                            "eid10959",
                            "rotateZ",
                            11743,
                            245,
                            "linear",
                            "${nath-up-arm-back}",
                            '53deg',
                            '27deg'
                        ],
                        [
                            "eid10983",
                            "rotateZ",
                            11988,
                            292,
                            "linear",
                            "${nath-up-arm-back}",
                            '27deg',
                            '-4deg'
                        ],
                        [
                            "eid11252",
                            "rotateZ",
                            17067,
                            83,
                            "linear",
                            "${nath-laugh}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid12050",
                            "rotateZ",
                            78630,
                            83,
                            "linear",
                            "${nath-laugh}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid11727",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text7Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11730",
                            "opacity",
                            56201,
                            101,
                            "linear",
                            "${Text7Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11731",
                            "opacity",
                            58613,
                            101,
                            "linear",
                            "${Text7Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11237",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-low-arm-back}",
                            '138px',
                            '109px'
                        ],
                        [
                            "eid12039",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-low-arm-back}",
                            '109px',
                            '138px'
                        ],
                        [
                            "eid11387",
                            "width",
                            17117,
                            245,
                            "linear",
                            "${spark1}",
                            '191px',
                            '717px'
                        ],
                        [
                            "eid12233",
                            "display",
                            0,
                            0,
                            "linear",
                            "${skylinetrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12234",
                            "display",
                            76577,
                            0,
                            "linear",
                            "${skylinetrigger}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12235",
                            "display",
                            76649,
                            0,
                            "linear",
                            "${skylinetrigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11900",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11903",
                            "opacity",
                            71513,
                            150,
                            "linear",
                            "${Text6Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11904",
                            "opacity",
                            74182,
                            120,
                            "linear",
                            "${Text6Copy}",
                            '1',
                            '0'
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
                            4946,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10283",
                            "opacity",
                            5098,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10457",
                            "opacity",
                            11746,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10456",
                            "opacity",
                            11898,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11308",
                            "opacity",
                            21564,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11309",
                            "opacity",
                            21716,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11452",
                            "opacity",
                            37965,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11453",
                            "opacity",
                            38117,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11619",
                            "opacity",
                            52378,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11620",
                            "opacity",
                            52530,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11770",
                            "opacity",
                            60728,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11771",
                            "opacity",
                            60880,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11823",
                            "opacity",
                            69501,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11824",
                            "opacity",
                            69653,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11921",
                            "opacity",
                            74275,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11922",
                            "opacity",
                            74427,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11957",
                            "opacity",
                            77423,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11958",
                            "opacity",
                            77575,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12089",
                            "opacity",
                            79212,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12090",
                            "opacity",
                            79364,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12301",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text9Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12302",
                            "display",
                            44722,
                            0,
                            "linear",
                            "${Text9Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12303",
                            "display",
                            49505,
                            0,
                            "linear",
                            "${Text9Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12263",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text9Copy3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12266",
                            "opacity",
                            44722,
                            75,
                            "linear",
                            "${Text9Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12267",
                            "opacity",
                            49430,
                            75,
                            "linear",
                            "${Text9Copy3}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11220",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-hand5}",
                            '70px',
                            '55px'
                        ],
                        [
                            "eid12023",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-hand5}",
                            '55px',
                            '70px'
                        ],
                        [
                            "eid11647",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text10}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11646",
                            "opacity",
                            53586,
                            105,
                            "linear",
                            "${Text10}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11712",
                            "opacity",
                            55902,
                            120,
                            "linear",
                            "${Text10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12229",
                            "display",
                            0,
                            0,
                            "linear",
                            "${dogtrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12227",
                            "display",
                            76577,
                            0,
                            "linear",
                            "${dogtrigger}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12232",
                            "display",
                            76649,
                            0,
                            "linear",
                            "${dogtrigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11015",
                            "top",
                            12316,
                            115,
                            "linear",
                            "${nath-up-arm-front}",
                            '371px',
                            '368px'
                        ],
                        [
                            "eid11075",
                            "top",
                            16706,
                            115,
                            "linear",
                            "${nath-up-arm-front}",
                            '368px',
                            '371px'
                        ],
                        [
                            "eid11166",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-up-arm-front}",
                            '371px',
                            '468px'
                        ],
                        [
                            "eid12043",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-up-arm-front}",
                            '468px',
                            '371px'
                        ],
                        [
                            "eid12192",
                            "display",
                            0,
                            0,
                            "linear",
                            "${carparktrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12189",
                            "display",
                            60970,
                            0,
                            "linear",
                            "${carparktrigger}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12195",
                            "display",
                            61055,
                            0,
                            "linear",
                            "${carparktrigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11328",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pic-background}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11988",
                            "opacity",
                            61861,
                            39,
                            "linear",
                            "${pic-background}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11989",
                            "opacity",
                            77943,
                            39,
                            "linear",
                            "${pic-background}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11405",
                            "height",
                            27150,
                            250,
                            "linear",
                            "${spark12}",
                            '188px',
                            '371px'
                        ],
                        [
                            "eid11599",
                            "height",
                            44447,
                            0,
                            "linear",
                            "${spark12}",
                            '371px',
                            '371px'
                        ],
                        [
                            "eid11591",
                            "height",
                            44550,
                            250,
                            "linear",
                            "${spark12}",
                            '188px',
                            '371px'
                        ],
                        [
                            "eid11803",
                            "height",
                            61593,
                            0,
                            "linear",
                            "${spark12}",
                            '371px',
                            '371px'
                        ],
                        [
                            "eid11795",
                            "height",
                            61650,
                            250,
                            "linear",
                            "${spark12}",
                            '188px',
                            '371px'
                        ],
                        [
                            "eid11534",
                            "width",
                            39816,
                            161,
                            "linear",
                            "${Ellipse}",
                            '174px',
                            '256px'
                        ],
                        [
                            "eid11545",
                            "width",
                            41800,
                            161,
                            "linear",
                            "${Ellipse}",
                            '256px',
                            '174px'
                        ],
                        [
                            "eid11725",
                            "width",
                            56082,
                            0,
                            "linear",
                            "${Ellipse}",
                            '174px',
                            '174px'
                        ],
                        [
                            "eid11721",
                            "width",
                            56150,
                            161,
                            "linear",
                            "${Ellipse}",
                            '174px',
                            '256px'
                        ],
                        [
                            "eid11722",
                            "width",
                            58613,
                            161,
                            "linear",
                            "${Ellipse}",
                            '256px',
                            '174px'
                        ],
                        [
                            "eid11935",
                            "width",
                            71663,
                            0,
                            "linear",
                            "${Ellipse}",
                            '174px',
                            '174px'
                        ],
                        [
                            "eid11931",
                            "width",
                            71715,
                            161,
                            "linear",
                            "${Ellipse}",
                            '247px',
                            '273px'
                        ],
                        [
                            "eid11932",
                            "width",
                            74116,
                            161,
                            "linear",
                            "${Ellipse}",
                            '273px',
                            '174px'
                        ],
                        [
                            "eid11138",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-body}",
                            '311px',
                            '420px'
                        ],
                        [
                            "eid12082",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-body}",
                            '420px',
                            '311px'
                        ],
                        [
                            "eid10907",
                            "top",
                            4895,
                            188,
                            "linear",
                            "${Text2}",
                            '-199px',
                            '140px'
                        ],
                        [
                            "eid10911",
                            "top",
                            5083,
                            105,
                            "linear",
                            "${Text2}",
                            '140px',
                            '48px'
                        ],
                        [
                            "eid10924",
                            "top",
                            11988,
                            105,
                            "linear",
                            "${Text2}",
                            '48px',
                            '140px'
                        ],
                        [
                            "eid10923",
                            "top",
                            12093,
                            188,
                            "linear",
                            "${Text2}",
                            '140px',
                            '-199px'
                        ],
                        [
                            "eid11364",
                            "left",
                            16981,
                            203,
                            "linear",
                            "${pic}",
                            '-167px',
                            '44px'
                        ],
                        [
                            "eid11996",
                            "left",
                            78508,
                            203,
                            "linear",
                            "${pic}",
                            '44px',
                            '-167px'
                        ],
                        [
                            "eid10433",
                            "rotateZ",
                            5948,
                            187,
                            "linear",
                            "${nath-blink}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid10934",
                            "rotateZ",
                            12093,
                            187,
                            "linear",
                            "${nath-blink}",
                            '-15deg',
                            '-4deg'
                        ],
                        [
                            "eid11253",
                            "rotateZ",
                            17067,
                            83,
                            "linear",
                            "${nath-blink}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid12072",
                            "rotateZ",
                            78630,
                            83,
                            "linear",
                            "${nath-blink}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid11296",
                            "top",
                            16071,
                            86,
                            "linear",
                            "${button-MG}",
                            '584px',
                            '386px'
                        ],
                        [
                            "eid11297",
                            "top",
                            16157,
                            50,
                            "linear",
                            "${button-MG}",
                            '386px',
                            '451px'
                        ],
                        [
                            "eid11984",
                            "top",
                            78236,
                            50,
                            "linear",
                            "${button-MG}",
                            '451px',
                            '386px'
                        ],
                        [
                            "eid11983",
                            "top",
                            78286,
                            86,
                            "linear",
                            "${button-MG}",
                            '386px',
                            '584px'
                        ],
                        [
                            "eid12284",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12285",
                            "opacity",
                            250,
                            141,
                            "linear",
                            "${TextCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12286",
                            "opacity",
                            4000,
                            139,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11755",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text8Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11758",
                            "opacity",
                            58889,
                            101,
                            "linear",
                            "${Text8Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11759",
                            "opacity",
                            61217,
                            101,
                            "linear",
                            "${Text8Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11151",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-laugh}",
                            '627px',
                            '809px'
                        ],
                        [
                            "eid12053",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-laugh}",
                            '809px',
                            '627px'
                        ],
                        [
                            "eid10297",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-low-arm-front}",
                            '1279px',
                            '844px'
                        ],
                        [
                            "eid11012",
                            "left",
                            12316,
                            54,
                            "linear",
                            "${nath-low-arm-front}",
                            '844px',
                            '902px'
                        ],
                        [
                            "eid11018",
                            "left",
                            12370,
                            30,
                            "linear",
                            "${nath-low-arm-front}",
                            '902px',
                            '917px'
                        ],
                        [
                            "eid11020",
                            "left",
                            12400,
                            31,
                            "linear",
                            "${nath-low-arm-front}",
                            '917px',
                            '894px'
                        ],
                        [
                            "eid11048",
                            "left",
                            13548,
                            79,
                            "linear",
                            "${nath-low-arm-front}",
                            '894px',
                            '875px'
                        ],
                        [
                            "eid11058",
                            "left",
                            16627,
                            79,
                            "linear",
                            "${nath-low-arm-front}",
                            '875px',
                            '894px'
                        ],
                        [
                            "eid11073",
                            "left",
                            16706,
                            31,
                            "linear",
                            "${nath-low-arm-front}",
                            '894px',
                            '917px'
                        ],
                        [
                            "eid11072",
                            "left",
                            16737,
                            30,
                            "linear",
                            "${nath-low-arm-front}",
                            '917px',
                            '902px'
                        ],
                        [
                            "eid11071",
                            "left",
                            16767,
                            54,
                            "linear",
                            "${nath-low-arm-front}",
                            '902px',
                            '844px'
                        ],
                        [
                            "eid11149",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-low-arm-front}",
                            '844px',
                            '987px'
                        ],
                        [
                            "eid12036",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-low-arm-front}",
                            '987px',
                            '844px'
                        ],
                        [
                            "eid11388",
                            "left",
                            17117,
                            245,
                            "linear",
                            "${spark1}",
                            '527px',
                            '270px'
                        ],
                        [
                            "eid11698",
                            "top",
                            54538,
                            0,
                            "linear",
                            "${right-select}",
                            '119px',
                            '109px'
                        ],
                        [
                            "eid11885",
                            "top",
                            70067,
                            0,
                            "linear",
                            "${right-select}",
                            '109px',
                            '32px'
                        ],
                        [
                            "eid12228",
                            "display",
                            0,
                            0,
                            "linear",
                            "${darkcloudtrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12226",
                            "display",
                            76577,
                            0,
                            "linear",
                            "${darkcloudtrigger}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12231",
                            "display",
                            76649,
                            0,
                            "linear",
                            "${darkcloudtrigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11406",
                            "top",
                            27150,
                            250,
                            "linear",
                            "${spark12}",
                            '413px',
                            '292px'
                        ],
                        [
                            "eid11597",
                            "top",
                            44447,
                            0,
                            "linear",
                            "${spark12}",
                            '292px',
                            '292px'
                        ],
                        [
                            "eid11590",
                            "top",
                            44550,
                            250,
                            "linear",
                            "${spark12}",
                            '413px',
                            '292px'
                        ],
                        [
                            "eid11801",
                            "top",
                            61593,
                            0,
                            "linear",
                            "${spark12}",
                            '292px',
                            '292px'
                        ],
                        [
                            "eid11794",
                            "top",
                            61650,
                            250,
                            "linear",
                            "${spark12}",
                            '413px',
                            '288px'
                        ],
                        [
                            "eid10230",
                            "top",
                            4091,
                            409,
                            "linear",
                            "${library-table}",
                            '584px',
                            '241px'
                        ],
                        [
                            "eid11091",
                            "top",
                            16706,
                            444,
                            "linear",
                            "${library-table}",
                            '241px',
                            '592px'
                        ],
                        [
                            "eid12006",
                            "top",
                            78286,
                            444,
                            "linear",
                            "${library-table}",
                            '592px',
                            '241px'
                        ],
                        [
                            "eid12298",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12299",
                            "display",
                            31075,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12300",
                            "display",
                            33429,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12244",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12238",
                            "display",
                            69850,
                            0,
                            "linear",
                            "${c3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12241",
                            "display",
                            69899,
                            0,
                            "linear",
                            "${c3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11011",
                            "rotateZ",
                            12316,
                            115,
                            "linear",
                            "${nath-low-arm-front}",
                            '0deg',
                            '-168deg'
                        ],
                        [
                            "eid11045",
                            "rotateZ",
                            13548,
                            79,
                            "linear",
                            "${nath-low-arm-front}",
                            '-168deg',
                            '-192deg'
                        ],
                        [
                            "eid11059",
                            "rotateZ",
                            16627,
                            79,
                            "linear",
                            "${nath-low-arm-front}",
                            '-192deg',
                            '-168deg'
                        ],
                        [
                            "eid11074",
                            "rotateZ",
                            16706,
                            115,
                            "linear",
                            "${nath-low-arm-front}",
                            '-168deg',
                            '0deg'
                        ],
                        [
                            "eid11235",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-low-arm-front}",
                            '139px',
                            '110px'
                        ],
                        [
                            "eid12031",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-low-arm-front}",
                            '110px',
                            '139px'
                        ],
                        [
                            "eid12281",
                            "top",
                            316,
                            125,
                            "linear",
                            "${TextCopy}",
                            '-175px',
                            '283px'
                        ],
                        [
                            "eid12290",
                            "top",
                            441,
                            59,
                            "linear",
                            "${TextCopy}",
                            '283px',
                            '260px'
                        ],
                        [
                            "eid12282",
                            "top",
                            3843,
                            98,
                            "linear",
                            "${TextCopy}",
                            '260px',
                            '305px'
                        ],
                        [
                            "eid12283",
                            "top",
                            3941,
                            198,
                            "linear",
                            "${TextCopy}",
                            '305px',
                            '-161px'
                        ],
                        [
                            "eid11962",
                            "display",
                            0,
                            0,
                            "linear",
                            "${skyline}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11569",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tree}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10263",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-side}",
                            '1069px',
                            '627px'
                        ],
                        [
                            "eid10436",
                            "left",
                            5948,
                            187,
                            "linear",
                            "${nath-side}",
                            '627px',
                            '602px'
                        ],
                        [
                            "eid10936",
                            "left",
                            12093,
                            187,
                            "linear",
                            "${nath-side}",
                            '602px',
                            '627px'
                        ],
                        [
                            "eid11157",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-side}",
                            '627px',
                            '809px'
                        ],
                        [
                            "eid12079",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-side}",
                            '809px',
                            '627px'
                        ],
                        [
                            "eid11695",
                            "left",
                            54538,
                            0,
                            "linear",
                            "${wrong-select}",
                            '746px',
                            '712px'
                        ],
                        [
                            "eid11886",
                            "left",
                            70067,
                            0,
                            "linear",
                            "${wrong-select}",
                            '712px',
                            '724px'
                        ],
                        [
                            "eid11251",
                            "rotateZ",
                            17067,
                            83,
                            "linear",
                            "${nath-front}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid12061",
                            "rotateZ",
                            78630,
                            83,
                            "linear",
                            "${nath-front}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid11670",
                            "top",
                            53586,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '126px',
                            '71px'
                        ],
                        [
                            "eid11854",
                            "top",
                            69743,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '71px',
                            '38px'
                        ],
                        [
                            "eid11367",
                            "top",
                            16981,
                            203,
                            "linear",
                            "${RoundRect}",
                            '-337px',
                            '9px'
                        ],
                        [
                            "eid11998",
                            "top",
                            78508,
                            203,
                            "linear",
                            "${RoundRect}",
                            '9px',
                            '-337px'
                        ],
                        [
                            "eid11376",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pic}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11374",
                            "opacity",
                            16981,
                            81,
                            "linear",
                            "${pic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11995",
                            "opacity",
                            78630,
                            81,
                            "linear",
                            "${pic}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11290",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${balloon2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11266",
                            "opacity",
                            12316,
                            70,
                            "linear",
                            "${balloon2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11305",
                            "opacity",
                            16706,
                            70,
                            "linear",
                            "${balloon2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11010",
                            "rotateZ",
                            12316,
                            115,
                            "linear",
                            "${nath-hand5}",
                            '152deg',
                            '9deg'
                        ],
                        [
                            "eid11044",
                            "rotateZ",
                            13548,
                            79,
                            "linear",
                            "${nath-hand5}",
                            '9deg',
                            '-15deg'
                        ],
                        [
                            "eid11056",
                            "rotateZ",
                            16627,
                            79,
                            "linear",
                            "${nath-hand5}",
                            '-15deg',
                            '9deg'
                        ],
                        [
                            "eid11067",
                            "rotateZ",
                            16706,
                            115,
                            "linear",
                            "${nath-hand5}",
                            '9deg',
                            '152deg'
                        ],
                        [
                            "eid12126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${treetrigger}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12122",
                            "display",
                            43728,
                            0,
                            "linear",
                            "${treetrigger}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12151",
                            "display",
                            43786,
                            0,
                            "linear",
                            "${treetrigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11469",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11466",
                            "opacity",
                            36761,
                            150,
                            "linear",
                            "${RoundRect2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11494",
                            "opacity",
                            39430,
                            120,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11655",
                            "opacity",
                            53586,
                            105,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11706",
                            "opacity",
                            55902,
                            120,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11835",
                            "opacity",
                            69743,
                            107,
                            "linear",
                            "${RoundRect2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11898",
                            "opacity",
                            71197,
                            107,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10437",
                            "top",
                            5948,
                            187,
                            "linear",
                            "${nath-side}",
                            '81px',
                            '101px'
                        ],
                        [
                            "eid10935",
                            "top",
                            12093,
                            187,
                            "linear",
                            "${nath-side}",
                            '101px',
                            '81px'
                        ],
                        [
                            "eid11159",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-side}",
                            '81px',
                            '244px'
                        ],
                        [
                            "eid12076",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-side}",
                            '244px',
                            '81px'
                        ],
                        [
                            "eid11533",
                            "top",
                            39816,
                            161,
                            "linear",
                            "${Ellipse}",
                            '151px',
                            '136px'
                        ],
                        [
                            "eid11541",
                            "top",
                            41800,
                            161,
                            "linear",
                            "${Ellipse}",
                            '136px',
                            '151px'
                        ],
                        [
                            "eid11724",
                            "top",
                            56082,
                            0,
                            "linear",
                            "${Ellipse}",
                            '151px',
                            '175px'
                        ],
                        [
                            "eid11713",
                            "top",
                            56150,
                            161,
                            "linear",
                            "${Ellipse}",
                            '175px',
                            '158px'
                        ],
                        [
                            "eid11714",
                            "top",
                            58613,
                            161,
                            "linear",
                            "${Ellipse}",
                            '158px',
                            '180px'
                        ],
                        [
                            "eid11934",
                            "top",
                            71663,
                            0,
                            "linear",
                            "${Ellipse}",
                            '180px',
                            '180px'
                        ],
                        [
                            "eid11923",
                            "top",
                            71715,
                            161,
                            "linear",
                            "${Ellipse}",
                            '18px',
                            '11px'
                        ],
                        [
                            "eid11924",
                            "top",
                            74116,
                            161,
                            "linear",
                            "${Ellipse}",
                            '11px',
                            '83px'
                        ],
                        [
                            "eid10524",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10523",
                            "opacity",
                            16812,
                            255,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12005",
                            "opacity",
                            78630,
                            81,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11535",
                            "left",
                            39816,
                            161,
                            "linear",
                            "${Ellipse}",
                            '313px',
                            '296px'
                        ],
                        [
                            "eid11544",
                            "left",
                            41800,
                            161,
                            "linear",
                            "${Ellipse}",
                            '296px',
                            '313px'
                        ],
                        [
                            "eid11723",
                            "left",
                            56082,
                            0,
                            "linear",
                            "${Ellipse}",
                            '313px',
                            '184px'
                        ],
                        [
                            "eid11719",
                            "left",
                            56150,
                            161,
                            "linear",
                            "${Ellipse}",
                            '184px',
                            '105px'
                        ],
                        [
                            "eid11720",
                            "left",
                            58613,
                            161,
                            "linear",
                            "${Ellipse}",
                            '105px',
                            '174px'
                        ],
                        [
                            "eid11933",
                            "left",
                            71663,
                            0,
                            "linear",
                            "${Ellipse}",
                            '174px',
                            '174px'
                        ],
                        [
                            "eid11929",
                            "left",
                            71715,
                            161,
                            "linear",
                            "${Ellipse}",
                            '101px',
                            '109px'
                        ],
                        [
                            "eid11930",
                            "left",
                            74116,
                            161,
                            "linear",
                            "${Ellipse}",
                            '109px',
                            '44px'
                        ],
                        [
                            "eid12106",
                            "display",
                            0,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12108",
                            "display",
                            38473,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12109",
                            "display",
                            38537,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12110",
                            "display",
                            38857,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12111",
                            "display",
                            38921,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12112",
                            "display",
                            39234,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12113",
                            "display",
                            39298,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12115",
                            "display",
                            41846,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12116",
                            "display",
                            41900,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12158",
                            "display",
                            52094,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12159",
                            "display",
                            52156,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12180",
                            "display",
                            54711,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12181",
                            "display",
                            54775,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12182",
                            "display",
                            55095,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12183",
                            "display",
                            55159,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12184",
                            "display",
                            55472,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12185",
                            "display",
                            55536,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12186",
                            "display",
                            58268,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12187",
                            "display",
                            58316,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12206",
                            "display",
                            69450,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12207",
                            "display",
                            69501,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12208",
                            "display",
                            70240,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12209",
                            "display",
                            70304,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12210",
                            "display",
                            70624,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12211",
                            "display",
                            70688,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12212",
                            "display",
                            71001,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12213",
                            "display",
                            71065,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12223",
                            "display",
                            73501,
                            0,
                            "linear",
                            "${next_but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12224",
                            "display",
                            73570,
                            0,
                            "linear",
                            "${next_but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11365",
                            "top",
                            16981,
                            203,
                            "linear",
                            "${pic}",
                            '-330px',
                            '16px'
                        ],
                        [
                            "eid11993",
                            "top",
                            78508,
                            203,
                            "linear",
                            "${pic}",
                            '16px',
                            '-330px'
                        ],
                        [
                            "eid12308",
                            "display",
                            58889,
                            0,
                            "linear",
                            "${Text8Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12309",
                            "display",
                            61318,
                            0,
                            "linear",
                            "${Text8Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11366",
                            "left",
                            16981,
                            203,
                            "linear",
                            "${RoundRect}",
                            '-185px',
                            '18px'
                        ],
                        [
                            "eid12001",
                            "left",
                            78508,
                            203,
                            "linear",
                            "${RoundRect}",
                            '18px',
                            '-185px'
                        ],
                        [
                            "eid12095",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12096",
                            "opacity",
                            36761,
                            150,
                            "linear",
                            "${Text6Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12097",
                            "opacity",
                            39430,
                            120,
                            "linear",
                            "${Text6Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12258",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text9Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12261",
                            "opacity",
                            27496,
                            75,
                            "linear",
                            "${Text9Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12262",
                            "opacity",
                            31000,
                            75,
                            "linear",
                            "${Text9Copy2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10261",
                            "left",
                            4500,
                            395,
                            "linear",
                            "${nath-body}",
                            '1112px',
                            '670px'
                        ],
                        [
                            "eid11137",
                            "left",
                            16821,
                            246,
                            "linear",
                            "${nath-body}",
                            '670px',
                            '849px'
                        ],
                        [
                            "eid12083",
                            "left",
                            78713,
                            246,
                            "linear",
                            "${nath-body}",
                            '849px',
                            '670px'
                        ],
                        [
                            "eid10908",
                            "top",
                            4895,
                            188,
                            "linear",
                            "${narrator-text-balloon}",
                            '-225px',
                            '114px'
                        ],
                        [
                            "eid10912",
                            "top",
                            5083,
                            105,
                            "linear",
                            "${narrator-text-balloon}",
                            '114px',
                            '20px'
                        ],
                        [
                            "eid10927",
                            "top",
                            11988,
                            105,
                            "linear",
                            "${narrator-text-balloon}",
                            '20px',
                            '114px'
                        ],
                        [
                            "eid10926",
                            "top",
                            12093,
                            188,
                            "linear",
                            "${narrator-text-balloon}",
                            '114px',
                            '-225px'
                        ],
                        [
                            "eid11228",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-laugh}",
                            '251px',
                            '198px'
                        ],
                        [
                            "eid12054",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-laugh}",
                            '198px',
                            '251px'
                        ],
                        [
                            "eid12098",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12099",
                            "opacity",
                            36761,
                            150,
                            "linear",
                            "${Text6Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12100",
                            "opacity",
                            39430,
                            120,
                            "linear",
                            "${Text6Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11225",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-up-arm-front}",
                            '179px',
                            '141px'
                        ],
                        [
                            "eid12045",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-up-arm-front}",
                            '141px',
                            '179px'
                        ],
                        [
                            "eid11144",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-front}",
                            '81px',
                            '244px'
                        ],
                        [
                            "eid12060",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-front}",
                            '244px',
                            '81px'
                        ],
                        [
                            "eid11013",
                            "top",
                            12316,
                            54,
                            "linear",
                            "${nath-low-arm-front}",
                            '515px',
                            '469px'
                        ],
                        [
                            "eid11019",
                            "top",
                            12370,
                            30,
                            "linear",
                            "${nath-low-arm-front}",
                            '469px',
                            '438px'
                        ],
                        [
                            "eid11021",
                            "top",
                            12400,
                            31,
                            "linear",
                            "${nath-low-arm-front}",
                            '438px',
                            '408px'
                        ],
                        [
                            "eid11049",
                            "top",
                            13548,
                            79,
                            "linear",
                            "${nath-low-arm-front}",
                            '408px',
                            '401px'
                        ],
                        [
                            "eid11057",
                            "top",
                            16627,
                            79,
                            "linear",
                            "${nath-low-arm-front}",
                            '401px',
                            '408px'
                        ],
                        [
                            "eid11070",
                            "top",
                            16706,
                            31,
                            "linear",
                            "${nath-low-arm-front}",
                            '408px',
                            '438px'
                        ],
                        [
                            "eid11069",
                            "top",
                            16737,
                            30,
                            "linear",
                            "${nath-low-arm-front}",
                            '438px',
                            '469px'
                        ],
                        [
                            "eid11068",
                            "top",
                            16767,
                            54,
                            "linear",
                            "${nath-low-arm-front}",
                            '469px',
                            '515px'
                        ],
                        [
                            "eid11150",
                            "top",
                            16821,
                            246,
                            "linear",
                            "${nath-low-arm-front}",
                            '515px',
                            '578px'
                        ],
                        [
                            "eid12028",
                            "top",
                            78713,
                            246,
                            "linear",
                            "${nath-low-arm-front}",
                            '578px',
                            '515px'
                        ],
                        [
                            "eid12177",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text10Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12178",
                            "opacity",
                            53586,
                            105,
                            "linear",
                            "${Text10Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12179",
                            "opacity",
                            55902,
                            120,
                            "linear",
                            "${Text10Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12136",
                            "display",
                            0,
                            0,
                            "linear",
                            "${op3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12197",
                            "display",
                            61500,
                            0,
                            "linear",
                            "${op3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12203",
                            "display",
                            61593,
                            0,
                            "linear",
                            "${op3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11386",
                            "height",
                            17117,
                            245,
                            "linear",
                            "${spark1}",
                            '188px',
                            '706px'
                        ],
                        [
                            "eid11827",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text11}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11826",
                            "opacity",
                            69743,
                            107,
                            "linear",
                            "${Text11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11890",
                            "opacity",
                            71197,
                            107,
                            "linear",
                            "${Text11}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid12252",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text9}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12251",
                            "opacity",
                            17462,
                            75,
                            "linear",
                            "${Text9}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12253",
                            "opacity",
                            21175,
                            75,
                            "linear",
                            "${Text9}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11329",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pic-foreground}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11419",
                            "opacity",
                            27322,
                            174,
                            "linear",
                            "${pic-foreground}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11586",
                            "opacity",
                            44151,
                            150,
                            "linear",
                            "${pic-foreground}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11236",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-low-arm-front}",
                            '51px',
                            '40px'
                        ],
                        [
                            "eid12037",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-low-arm-front}",
                            '40px',
                            '51px'
                        ],
                        [
                            "eid11233",
                            "height",
                            16821,
                            246,
                            "linear",
                            "${nath-speak-front}",
                            '280px',
                            '221px'
                        ],
                        [
                            "eid12057",
                            "height",
                            78713,
                            246,
                            "linear",
                            "${nath-speak-front}",
                            '221px',
                            '280px'
                        ],
                        [
                            "eid11276",
                            "top",
                            12316,
                            148,
                            "linear",
                            "${balloon2}",
                            '294px',
                            '-131px'
                        ],
                        [
                            "eid11303",
                            "top",
                            16627,
                            148,
                            "linear",
                            "${balloon2}",
                            '-131px',
                            '294px'
                        ],
                        [
                            "eid11389",
                            "top",
                            17117,
                            245,
                            "linear",
                            "${spark1}",
                            '150px',
                            '-129px'
                        ],
                        [
                            "eid11674",
                            "top",
                            53586,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            '209px',
                            '159px'
                        ],
                        [
                            "eid11850",
                            "top",
                            69743,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            '159px',
                            '160px'
                        ],
                        [
                            "eid11938",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text12}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11937",
                            "opacity",
                            74680,
                            150,
                            "linear",
                            "${Text12}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11940",
                            "opacity",
                            77823,
                            120,
                            "linear",
                            "${Text12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12236",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12237",
                            "display",
                            79510,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11238",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-low-arm-back}",
                            '77px',
                            '61px'
                        ],
                        [
                            "eid12041",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-low-arm-back}",
                            '61px',
                            '77px'
                        ],
                        [
                            "eid11230",
                            "width",
                            16821,
                            246,
                            "linear",
                            "${nath-speak-side}",
                            '251px',
                            '198px'
                        ],
                        [
                            "eid12070",
                            "width",
                            78713,
                            246,
                            "linear",
                            "${nath-speak-side}",
                            '198px',
                            '251px'
                        ],
                        [
                            "eid11673",
                            "left",
                            53586,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            '752px',
                            '720px'
                        ],
                        [
                            "eid11849",
                            "left",
                            69743,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            '720px',
                            '729px'
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
                            4500,
                            0,
                            "linear",
                            "${chairs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12128",
                            "display",
                            38207,
                            0,
                            "linear",
                            "${a2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12134",
                            "display",
                            38257,
                            0,
                            "linear",
                            "${a2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12254",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text9Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12255",
                            "opacity",
                            21250,
                            75,
                            "linear",
                            "${Text9Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12256",
                            "opacity",
                            27000,
                            75,
                            "linear",
                            "${Text9Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10432",
                            "rotateZ",
                            5948,
                            187,
                            "linear",
                            "${nath-side}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid10937",
                            "rotateZ",
                            12093,
                            187,
                            "linear",
                            "${nath-side}",
                            '-15deg',
                            '-4deg'
                        ],
                        [
                            "eid11255",
                            "rotateZ",
                            17067,
                            83,
                            "linear",
                            "${nath-side}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid12077",
                            "rotateZ",
                            78630,
                            83,
                            "linear",
                            "${nath-side}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid11428",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11426",
                            "opacity",
                            31075,
                            150,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11431",
                            "opacity",
                            33279,
                            150,
                            "linear",
                            "${Text4}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid12137",
                            "display",
                            0,
                            0,
                            "linear",
                            "${op2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12153",
                            "display",
                            44447,
                            0,
                            "linear",
                            "${op2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12156",
                            "display",
                            44550,
                            0,
                            "linear",
                            "${op2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12246",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12240",
                            "display",
                            69850,
                            0,
                            "linear",
                            "${c1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12243",
                            "display",
                            69899,
                            0,
                            "linear",
                            "${c1}",
                            'block',
                            'none'
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
                            4500,
                            114,
                            "linear",
                            "${nath-side}",
                            '0',
                            '1'
                        ],
                            [ "eid10238", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${chairs}', [] ] ],
                            [ "eid11963", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${dogs}', [] ] ],
                            [ "eid11972", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sky}', [] ] ],
                            [ "eid11785", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${parking}', [] ] ],
                            [ "eid11774", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${picnic}', [] ] ],
                            [ "eid11964", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${skyline}', [] ] ],
                            [ "eid11573", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${ball}', [] ] ],
                            [ "eid11572", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${fence}', [] ] ],
                            [ "eid11574", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tree}', [] ] ],
                            [ "eid11778", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${park-sign}', [] ] ],
                            [ "eid10239", "trigger", 4500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${chairs}', [] ] ]
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
                            type: 'image',
                            id: 'chair',
                            rect: ['672px', '2px', '263px', '258px', 'auto', 'auto'],
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
                            '672px'
                        ]
                    ]
                }
            },
            "tree": {
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
                            id: '_1',
                            rect: ['0px', '0px', '68px', '91px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/1.png', '0px', '0px']
                        },
                        {
                            rect: ['43px', '14px', '68px', '30px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3',
                            stroke: [5, 'rgb(192, 255, 31)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.76)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text9Copy2',
                            text: 'tree',
                            align: 'center',
                            rect: ['56px', '18px', '53px', '28px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '121px', '91px']
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
            "ball": {
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
                            id: '_3',
                            rect: ['0px', '0px', '68px', '91px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/3.png', '0px', '0px']
                        },
                        {
                            rect: ['54px', '23px', '59px', '30px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3Copy',
                            stroke: [5, 'rgb(192, 255, 31)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.76)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text9Copy',
                            text: 'ball',
                            align: 'center',
                            rect: ['63px', '27px', '53px', '28px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '123px', '91px']
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
            "fence": {
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
                            id: '_2',
                            rect: ['0px', '0px', '68px', '91px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                        },
                        {
                            rect: ['52px', '37px', '161px', '30px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3Copy2',
                            stroke: [5, 'rgb(192, 255, 31)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.76)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text9',
                            text: 'broken fence',
                            align: 'center',
                            rect: ['55px', '42px', '163px', '28px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '223px', '91px']
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
            "picnic": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '68px', '91px', 'auto', 'auto'],
                            id: '_3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/3.png', '0px', '0px']
                        },
                        {
                            rect: ['54px', '13px', '137px', '50px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3Copy3',
                            stroke: [5, 'rgb(192, 255, 31)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.76)']
                        },
                        {
                            type: 'text',
                            rect: ['61px', '19px', '133px', '49px', 'auto', 'auto'],
                            id: 'Text9Copy3',
                            text: 'a family having a picnic',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '123px', '91px']
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
            "park-sign": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '68px', '91px', 'auto', 'auto'],
                            id: '_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                        },
                        {
                            rect: ['52px', '37px', '119px', '30px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3Copy4',
                            stroke: [5, 'rgb(192, 255, 31)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.76)']
                        },
                        {
                            type: 'text',
                            rect: ['56px', '43px', '119px', '28px', 'auto', 'auto'],
                            id: 'Text9Copy4',
                            text: 'a park sign',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '223px', '91px']
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
            "parking": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '68px', '91px', 'auto', 'auto'],
                            id: '_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/1.png', '0px', '0px']
                        },
                        {
                            rect: ['43px', '14px', '155px', '30px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3Copy5',
                            stroke: [5, 'rgb(192, 255, 31)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.76)']
                        },
                        {
                            type: 'text',
                            rect: ['47px', '21px', '154px', '28px', 'auto', 'auto'],
                            id: 'Text9Copy5',
                            text: 'The boy\'s father',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '121px', '91px']
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
            "dogs": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '68px', '91px', 'auto', 'auto'],
                            id: '_3Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/3.png', '0px', '0px']
                        },
                        {
                            rect: ['54px', '13px', '98px', '50px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3Copy6',
                            stroke: [5, 'rgb(192, 255, 31)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.76)']
                        },
                        {
                            type: 'text',
                            rect: ['54px', '17px', '108px', '49px', 'auto', 'auto'],
                            id: 'Text9Copy6',
                            text: 'The park signage',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '201px', '91px']
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
            "skyline": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '68px', '91px', 'auto', 'auto'],
                            id: '_2Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                        },
                        {
                            rect: ['52px', '37px', '156px', '30px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3Copy7',
                            stroke: [5, 'rgb(192, 255, 31)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.76)']
                        },
                        {
                            type: 'text',
                            rect: ['56px', '43px', '162px', '28px', 'auto', 'auto'],
                            id: 'Text9Copy7',
                            text: 'A family picnic',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '181px', '91px']
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
            "sky": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '68px', '91px', 'auto', 'auto'],
                            id: '_1Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/1.png', '0px', '0px']
                        },
                        {
                            rect: ['43px', '14px', '126px', '32px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3Copy8',
                            stroke: [5, 'rgb(192, 255, 31)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.76)']
                        },
                        {
                            type: 'text',
                            rect: ['41px', '21px', '138px', '52px', 'auto', 'auto'],
                            id: 'Text9Copy8',
                            text: 'The carpark',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '138px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("2_edgeActions.js");
})("EDGE-1646797");
