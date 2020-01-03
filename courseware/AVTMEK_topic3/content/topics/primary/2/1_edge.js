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
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['-14px', '-18px', '1065px', '616px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.70)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'notebook',
                            type: 'image',
                            rect: ['-215px', '-227px', '207px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"notebook.png",'0px','0px']
                        },
                        {
                            id: 'circle-drawn',
                            type: 'image',
                            rect: ['47px', '90px', '359px', '121px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circle-drawn.png",'0px','0px']
                        },
                        {
                            id: 'circle-drawnCopy',
                            type: 'image',
                            rect: ['64px', '25px', '312px', '121px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circle-drawn.png",'0px','0px']
                        },
                        {
                            id: 'circle-drawnCopy2',
                            type: 'image',
                            rect: ['82px', '24px', '260px', '121px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circle-drawn.png",'0px','0px']
                        },
                        {
                            id: 'arrow-drawn',
                            type: 'image',
                            rect: ['192px', '157px', '55px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"arrow-drawn.png",'0px','0px']
                        },
                        {
                            id: 'arrow-drawnCopy',
                            type: 'image',
                            rect: ['192px', '358px', '55px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"arrow-drawn.png",'0px','0px']
                        },
                        {
                            id: 'main-txt',
                            type: 'image',
                            rect: ['104px', '58px', '215px', '67px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"main-txt.png",'0px','0px']
                        },
                        {
                            id: 'intro-txt',
                            type: 'image',
                            rect: ['96px', '124px', '255px', '66px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"intro-txt.png",'0px','0px']
                        },
                        {
                            id: 'end-txt',
                            type: 'image',
                            rect: ['115px', '49px', '183px', '67px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"end-txt.png",'0px','0px']
                        },
                        {
                            id: 'structure-txt',
                            type: 'image',
                            rect: ['46px', '41px', '359px', '37px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"structure-txt.png",'0px','0px']
                        },
                        {
                            id: 'story-txt',
                            type: 'image',
                            rect: ['41px', '32px', '367px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"story-txt.png",'0px','0px']
                        },
                        {
                            id: 'notebook-flip',
                            type: 'image',
                            rect: ['33px', '-14px', '6px', '528px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"notebook-flip.png",'0px','0px'],
                            transform: [[],[],['0','-84']]
                        },
                        {
                            id: 'chairs',
                            symbolName: 'chairs',
                            display: 'none',
                            type: 'rect',
                            rect: ['9', '331', '1005', '261', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['88px', '-175px', '838px', '95px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Story Structure",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [75, "px"], "rgba(0,101,232,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['95px', '-175px', '838px', '95px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Descriptive Stories",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [50, "px"], "rgba(0,0,0,0.68)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'gin-up-arm-back',
                            type: 'image',
                            rect: ['568px', '388px', '74px', '169px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-up-arm-back.png",'0px','0px'],
                            transform: [[],['-7']]
                        },
                        {
                            id: 'gin-body',
                            type: 'image',
                            rect: ['416px', '302px', '216px', '401px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-body.png",'0px','0px']
                        },
                        {
                            id: 'gin-up-arm-front',
                            type: 'image',
                            rect: ['406px', '395px', '70px', '166px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-up-arm-front.png",'0px','0px']
                        },
                        {
                            id: 'gin-low-arm-front',
                            type: 'image',
                            rect: ['478px', '409px', '67px', '147px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-low-arm-front.png",'0px','0px'],
                            transform: [[],['-125']]
                        },
                        {
                            id: 'gin-hand-pencil',
                            type: 'image',
                            rect: ['535px', '414px', '117px', '109px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-hand-pencil.png",'0px','0px'],
                            transform: [[],['-38']]
                        },
                        {
                            id: 'gin-side',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-side.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-blink2',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-blink2.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-smile-side',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-smile-side.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-blink1',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-blink1.png",'0px','0px'],
                            transform: [[],['11']]
                        },
                        {
                            id: 'gin-speak-side',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-speak-side.png",'0px','0px'],
                            transform: [[],['-10']]
                        },
                        {
                            id: 'gin-sad1',
                            type: 'image',
                            rect: ['386px', '113px', '260px', '261px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"gin-sad1.png",'0px','0px'],
                            transform: [[],['1']]
                        },
                        {
                            id: 'nath-up-arm-back',
                            type: 'image',
                            rect: ['768px', '370px', '70px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-up-arm-back.png",'0px','0px'],
                            transform: [[],['2']]
                        },
                        {
                            id: 'nath-body',
                            type: 'image',
                            rect: ['788px', '304px', '213px', '293px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-body.png",'0px','0px'],
                            transform: [[],['-5']]
                        },
                        {
                            id: 'nath-side',
                            type: 'image',
                            rect: ['733px', '74px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-side.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-blink',
                            type: 'image',
                            rect: ['733px', '74px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-blink.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-sad2',
                            type: 'image',
                            rect: ['733px', '85px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-sad2.png",'0px','0px'],
                            transform: [[],['1']]
                        },
                        {
                            id: 'nath-speak-side',
                            type: 'image',
                            rect: ['733px', '74px', '251px', '280px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-speak-side.png",'0px','0px'],
                            transform: [[],['-4']]
                        },
                        {
                            id: 'nath-up-arm-front',
                            type: 'image',
                            rect: ['930px', '364px', '102px', '179px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-up-arm-front.png",'0px','0px'],
                            transform: [[],['-1']]
                        },
                        {
                            id: 'nath-low-arm-front',
                            type: 'image',
                            rect: ['891px', '432px', '51px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-low-arm-front.png",'0px','0px'],
                            transform: [[],['136']]
                        },
                        {
                            id: 'nath-hand-write',
                            type: 'image',
                            rect: ['852px', '437px', '152px', '113px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nath-hand-write.png",'0px','0px'],
                            transform: [[],['6']]
                        },
                        {
                            id: 'library-table',
                            type: 'image',
                            rect: ['220px', '241px', '950px', '371px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"library-table2.png",'0px','0px']
                        },
                        {
                            id: 'sweat2',
                            type: 'image',
                            rect: ['536px', '117px', '55px', '66px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sweat2.png",'0px','0px'],
                            transform: [[],['-14']]
                        },
                        {
                            id: 'narrator-text-balloon-square',
                            type: 'image',
                            rect: ['-365px', '35px', '357px', '293px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"narrator-text-balloon-square.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['-333px', '72px', '286px', '225px', 'auto', 'auto'],
                            opacity: '0',
                            text: "When writing stories,<br> it helps to have a plan.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(0, 101, 232)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            display: 'block',
                            type: 'text',
                            rect: ['57px', '57px', '312px', '363px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Ginette has been trying to write a story for a competition, but she’s feeling a little stuck.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['57px', '70px', '312px', '168px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Could you help her put a story together? ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'balloon',
                            type: 'image',
                            rect: ['531px', '-51px', '87px', '114px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"balloon.png",'0px','0px'],
                            transform: [[],['70'],[],['-0.84828']]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['633px', '77px', '179px', '121px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Hmmm, I need an exciting way to start my story. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['673px', '66px', '175px', '148px', 'auto', 'auto'],
                            opacity: '0',
                            text: "I would like my story to be interesting and entertaining",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text9',
                            type: 'text',
                            rect: ['621px', '57px', '254px', '110px', 'auto', 'auto'],
                            opacity: '0',
                            text: "What happened next? What are the problems and solutions?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['663px', '65px', '255px', '110px', 'auto', 'auto'],
                            opacity: '0',
                            text: "My character should have a goal (what does the character want to do next, and why?).",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text11',
                            type: 'text',
                            rect: ['641px', '51px', '216px', '137px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Now I need to show the reader my character’s journey from here to the <br>next point. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text12',
                            type: 'text',
                            rect: ['620px', '73px', '267px', '87px', 'auto', 'auto'],
                            opacity: '0',
                            text: "I should add some events that make my reader feel for my character. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text14',
                            type: 'text',
                            rect: ['660px', '101px', '164px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            text: "I could end my story...",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Intro-choices',
                            symbolName: 'Intro-choices',
                            display: 'none',
                            type: 'rect',
                            rect: ['30px', '156px', '354', '358', 'auto', 'auto']
                        },
                        {
                            id: 'intro-answer',
                            symbolName: 'intro-answer',
                            display: 'none',
                            type: 'rect',
                            rect: ['379px', '409px', '219', '177', 'auto', 'auto']
                        },
                        {
                            id: 'Main-choices',
                            symbolName: 'Main-choices',
                            display: 'none',
                            type: 'rect',
                            rect: ['30px', '149px', '354', '358', 'auto', 'auto']
                        },
                        {
                            id: 'main-answer',
                            symbolName: 'main-answer',
                            display: 'none',
                            type: 'rect',
                            rect: ['-282', '-282', '1094', '868', 'auto', 'auto']
                        },
                        {
                            id: 'end-choices',
                            symbolName: 'end-choices',
                            display: 'none',
                            type: 'rect',
                            rect: ['30px', '144px', '354', '382', 'auto', 'auto']
                        },
                        {
                            id: 'RoundRect3',
                            display: 'none',
                            type: 'rect',
                            rect: ['1067px', '196px', '461px', '205px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,0.93)"],
                            stroke: [1,"rgba(204,204,204,1.00)","solid"],
                            transform: [[],[],['-13']]
                        },
                        {
                            id: 'Text6',
                            display: 'none',
                            type: 'text',
                            rect: ['1083px', '206px', '436px', '190px', 'auto', 'auto'],
                            text: "Do you like your story in this activity? <br>This activity is a simple way to build your story.<br>Begin by setting your story and describing the environment. <br>Then, add a problem that your character encounters. <br>To end, help your character solve the problem.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [19, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            transform: [[],[],['-13']]
                        },
                        {
                            id: 'end-answer',
                            symbolName: 'end-answer',
                            display: 'none',
                            type: 'rect',
                            rect: ['398', '409', '627', '177', 'auto', 'auto']
                        },
                        {
                            id: 'beginning-final',
                            symbolName: 'beginning-final',
                            display: 'none',
                            type: 'rect',
                            rect: ['52', '102px', '341', '75', 'auto', 'auto']
                        },
                        {
                            id: 'Middle-final',
                            symbolName: 'Middle-final',
                            display: 'none',
                            type: 'rect',
                            rect: ['54', '240', '331', '117', 'auto', 'auto']
                        },
                        {
                            id: 'end-final',
                            symbolName: 'end-final',
                            display: 'none',
                            type: 'rect',
                            rect: ['56', '293px', '312', '193', 'auto', 'auto']
                        },
                        {
                            id: 'spark1',
                            type: 'image',
                            rect: ['-8px', '467px', '119px', '117px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spark1.png",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['394px', '-59px', '662px', '705px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"],
                            transform: [[],['-37'],[],['0.725','0.725']]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['506px', '56px', '438px', '470px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 'ba',
                            symbolName: 'opening1',
                            display: 'none',
                            type: 'rect',
                            rect: ['506', '57', '438', '470', 'auto', 'auto']
                        },
                        {
                            id: 'bb',
                            symbolName: 'opening2',
                            display: 'none',
                            type: 'rect',
                            rect: ['507', '55', '438', '470', 'auto', 'auto']
                        },
                        {
                            id: 'bc',
                            symbolName: 'opening3',
                            display: 'none',
                            type: 'rect',
                            rect: ['506', '55', '438', '470', 'auto', 'auto']
                        },
                        {
                            id: 'ma',
                            symbolName: 'Middle1',
                            display: 'none',
                            type: 'rect',
                            rect: ['506', '57', '438', '470', 'auto', 'auto']
                        },
                        {
                            id: 'mb',
                            symbolName: 'middle2',
                            display: 'none',
                            type: 'rect',
                            rect: ['506', '55', '438', '471', 'auto', 'auto']
                        },
                        {
                            id: 'mc',
                            symbolName: 'middle3',
                            display: 'none',
                            type: 'rect',
                            rect: ['506', '56', '438', '470', 'auto', 'auto']
                        },
                        {
                            id: 'ea',
                            symbolName: 'end1',
                            display: 'none',
                            type: 'rect',
                            rect: ['506', '55', '439', '471', 'auto', 'auto']
                        },
                        {
                            id: 'eb',
                            symbolName: 'end2',
                            display: 'none',
                            type: 'rect',
                            rect: ['506', '57', '438', '470', 'auto', 'auto']
                        },
                        {
                            id: 'ec',
                            symbolName: 'end3',
                            display: 'none',
                            type: 'rect',
                            rect: ['506', '56', '438', '470', 'auto', 'auto']
                        },
                        {
                            id: 't1',
                            display: 'none',
                            type: 'rect',
                            rect: ['30px', '151px', '342px', '95px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(153,194,255,0.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 't2',
                            display: 'none',
                            type: 'rect',
                            rect: ['30px', '263px', '342px', '119px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(153,194,255,0.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 't3',
                            display: 'none',
                            type: 'rect',
                            rect: ['30px', '395px', '342px', '119px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(153,194,255,0.00)"],
                            stroke: [0,"rgb(31, 227, 255)","none"]
                        },
                        {
                            id: 't4',
                            display: 'none',
                            type: 'rect',
                            rect: ['28px', '146px', '348px', '110px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 't5',
                            display: 'none',
                            type: 'rect',
                            rect: ['26px', '273px', '353px', '110px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 't6',
                            display: 'none',
                            type: 'rect',
                            rect: ['30px', '407px', '354px', '110px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 't7',
                            display: 'none',
                            type: 'rect',
                            rect: ['30px', '144px', '349px', '95px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 't8',
                            display: 'none',
                            type: 'rect',
                            rect: ['30px', '263px', '346px', '162px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 't9',
                            display: 'none',
                            type: 'rect',
                            rect: ['30px', '443px', '346px', '90px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'play-btn',
                            display: 'none',
                            type: 'image',
                            rect: ['155px', '520px', '26px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"play-btn.png",'0px','0px']
                        },
                        {
                            id: 'mainmenu',
                            display: 'none',
                            type: 'image',
                            rect: ['802px', '491px', '207px', '67px', 'auto', 'auto'],
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
                    duration: 65611,
                    autoPlay: true,
                    labels: {
                        "beginning": 29500,
                        "middle": 46900,
                        "end": 51233,
                        "start": 54534,
                        "end1": 64783
                    },
                    data: [
                        [
                            "eid10400",
                            "rotateZ",
                            4602,
                            188,
                            "linear",
                            "${gin-blink2}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid11114",
                            "rotateZ",
                            9766,
                            263,
                            "linear",
                            "${gin-blink2}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid11286",
                            "rotateZ",
                            20116,
                            146,
                            "linear",
                            "${gin-blink2}",
                            '1deg',
                            '26deg'
                        ],
                        [
                            "eid12163",
                            "rotateZ",
                            51733,
                            215,
                            "linear",
                            "${gin-blink2}",
                            '26deg',
                            '3deg'
                        ],
                        [
                            "eid11190",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sweat2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11186",
                            "opacity",
                            14300,
                            79,
                            "linear",
                            "${sweat2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11189",
                            "opacity",
                            14511,
                            81,
                            "linear",
                            "${sweat2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11193",
                            "opacity",
                            14714,
                            79,
                            "linear",
                            "${sweat2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11194",
                            "opacity",
                            14925,
                            81,
                            "linear",
                            "${sweat2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11199",
                            "opacity",
                            15114,
                            79,
                            "linear",
                            "${sweat2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11200",
                            "opacity",
                            15325,
                            81,
                            "linear",
                            "${sweat2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11238",
                            "opacity",
                            19942,
                            79,
                            "linear",
                            "${sweat2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11239",
                            "opacity",
                            20153,
                            81,
                            "linear",
                            "${sweat2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11240",
                            "opacity",
                            20356,
                            79,
                            "linear",
                            "${sweat2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11241",
                            "opacity",
                            20567,
                            81,
                            "linear",
                            "${sweat2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11242",
                            "opacity",
                            20756,
                            79,
                            "linear",
                            "${sweat2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11243",
                            "opacity",
                            20967,
                            81,
                            "linear",
                            "${sweat2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11789",
                            "top",
                            36947,
                            55,
                            "linear",
                            "${Text11}",
                            '69px',
                            '51px'
                        ],
                        [
                            "eid11795",
                            "top",
                            37002,
                            2998,
                            "linear",
                            "${Text11}",
                            '51px',
                            '52px'
                        ],
                        [
                            "eid12329",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${play-btn}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12328",
                            "opacity",
                            53900,
                            116,
                            "linear",
                            "${play-btn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11501",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Intro-choices}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11500",
                            "display",
                            27412,
                            0,
                            "linear",
                            "${Intro-choices}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13106",
                            "display",
                            36287,
                            0,
                            "linear",
                            "${Intro-choices}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10969",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${notebook}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10971",
                            "opacity",
                            3679,
                            100,
                            "linear",
                            "${notebook}",
                            '0',
                            '1'
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
                            3233,
                            114,
                            "linear",
                            "${nath-up-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12389",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${nath-up-arm-back}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10408",
                            "top",
                            4602,
                            188,
                            "linear",
                            "${gin-speak-side}",
                            '120px',
                            '128px'
                        ],
                        [
                            "eid11100",
                            "top",
                            9766,
                            263,
                            "linear",
                            "${gin-speak-side}",
                            '128px',
                            '113px'
                        ],
                        [
                            "eid11303",
                            "top",
                            20116,
                            146,
                            "linear",
                            "${gin-speak-side}",
                            '113px',
                            '120px'
                        ],
                        [
                            "eid12180",
                            "top",
                            51733,
                            215,
                            "linear",
                            "${gin-speak-side}",
                            '120px',
                            '119px'
                        ],
                        [
                            "eid10942",
                            "top",
                            3782,
                            139,
                            "linear",
                            "${nath-low-arm-front}",
                            '508px',
                            '432px'
                        ],
                        [
                            "eid11226",
                            "top",
                            15115,
                            210,
                            "linear",
                            "${nath-low-arm-front}",
                            '432px',
                            '434px'
                        ],
                        [
                            "eid11405",
                            "top",
                            21944,
                            139,
                            "linear",
                            "${nath-low-arm-front}",
                            '434px',
                            '432px'
                        ],
                        [
                            "eid12248",
                            "top",
                            47777,
                            0,
                            "linear",
                            "${nath-low-arm-front}",
                            '432px',
                            '432px'
                        ],
                        [
                            "eid12249",
                            "top",
                            48241,
                            0,
                            "linear",
                            "${nath-low-arm-front}",
                            '432px',
                            '432px'
                        ],
                        [
                            "eid12257",
                            "top",
                            51948,
                            0,
                            "linear",
                            "${nath-low-arm-front}",
                            '432px',
                            '432px'
                        ],
                        [
                            "eid12256",
                            "top",
                            52114,
                            0,
                            "linear",
                            "${nath-low-arm-front}",
                            '432px',
                            '432px'
                        ],
                        [
                            "eid12421",
                            "width",
                            54900,
                            133,
                            "linear",
                            "${RoundRect}",
                            '120px',
                            '662px'
                        ],
                        [
                            "eid13077",
                            "width",
                            64783,
                            133,
                            "linear",
                            "${RoundRect}",
                            '662px',
                            '120px'
                        ],
                        [
                            "eid12300",
                            "width",
                            53900,
                            278,
                            "linear",
                            "${play-btn}",
                            '26px',
                            '100px'
                        ],
                        [
                            "eid12304",
                            "width",
                            54178,
                            139,
                            "linear",
                            "${play-btn}",
                            '100px',
                            '87px'
                        ],
                        [
                            "eid11132",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11130",
                            "opacity",
                            9939,
                            90,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11136",
                            "opacity",
                            13668,
                            132,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10322",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-low-arm-front}",
                            '-309px',
                            '410px'
                        ],
                        [
                            "eid10921",
                            "left",
                            3679,
                            152,
                            "linear",
                            "${gin-low-arm-front}",
                            '410px',
                            '438px'
                        ],
                        [
                            "eid11165",
                            "left",
                            13915,
                            132,
                            "linear",
                            "${gin-low-arm-front}",
                            '438px',
                            '478px'
                        ],
                        [
                            "eid11320",
                            "left",
                            20153,
                            109,
                            "linear",
                            "${gin-low-arm-front}",
                            '478px',
                            '473px'
                        ],
                        [
                            "eid11797",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11783",
                            "opacity",
                            36947,
                            55,
                            "linear",
                            "${Text11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11796",
                            "opacity",
                            39900,
                            55,
                            "linear",
                            "${Text11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10342",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12117",
                            "opacity",
                            40530,
                            71,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12118",
                            "opacity",
                            42861,
                            71,
                            "linear",
                            "${gin-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12344",
                            "opacity",
                            54485,
                            0,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12365",
                            "opacity",
                            54900,
                            0,
                            "linear",
                            "${gin-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10902",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-hand-pencil}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10904",
                            "opacity",
                            3628,
                            51,
                            "linear",
                            "${gin-hand-pencil}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12400",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${gin-hand-pencil}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12950",
                            "display",
                            0,
                            0,
                            "linear",
                            "${eb}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12706",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mb}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11924",
                            "top",
                            47563,
                            63,
                            "linear",
                            "${end-txt}",
                            '435px',
                            '49px'
                        ],
                        [
                            "eid12094",
                            "top",
                            52013,
                            63,
                            "linear",
                            "${end-txt}",
                            '49px',
                            '435px'
                        ],
                        [
                            "eid10227",
                            "top",
                            0,
                            3107,
                            "linear",
                            "${bookshop}",
                            '-4px',
                            '-87px'
                        ],
                        [
                            "eid12419",
                            "height",
                            54900,
                            133,
                            "linear",
                            "${RoundRect}",
                            '128px',
                            '705px'
                        ],
                        [
                            "eid13074",
                            "height",
                            64783,
                            133,
                            "linear",
                            "${RoundRect}",
                            '705px',
                            '128px'
                        ],
                        [
                            "eid12887",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ea}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11146",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11145",
                            "opacity",
                            13800,
                            115,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11231",
                            "opacity",
                            19863,
                            79,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12628",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ma}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11763",
                            "top",
                            36045,
                            75,
                            "linear",
                            "${main-txt}",
                            '283px',
                            '58px'
                        ],
                        [
                            "eid11910",
                            "top",
                            47380,
                            75,
                            "linear",
                            "${main-txt}",
                            '58px',
                            '283px'
                        ],
                        [
                            "eid12505",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12504",
                            "opacity",
                            55033,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13080",
                            "opacity",
                            64783,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '1',
                            '0'
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
                            3233,
                            114,
                            "linear",
                            "${nath-up-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12397",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${nath-up-arm-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11670",
                            "top",
                            30264,
                            55,
                            "linear",
                            "${Text9}",
                            '83px',
                            '63px'
                        ],
                        [
                            "eid11682",
                            "top",
                            30319,
                            2698,
                            "linear",
                            "${Text9}",
                            '63px',
                            '57px'
                        ],
                        [
                            "eid11080",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${main-txt}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10987",
                            "opacity",
                            5897,
                            58,
                            "linear",
                            "${main-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11053",
                            "opacity",
                            9250,
                            96,
                            "linear",
                            "${main-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11753",
                            "opacity",
                            36120,
                            175,
                            "linear",
                            "${main-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11911",
                            "opacity",
                            47205,
                            175,
                            "linear",
                            "${main-txt}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11366",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11369",
                            "opacity",
                            19942,
                            115,
                            "linear",
                            "${Text3Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11370",
                            "opacity",
                            21865,
                            79,
                            "linear",
                            "${Text3Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11298",
                            "left",
                            20116,
                            146,
                            "linear",
                            "${gin-sad1}",
                            '386px',
                            '413px'
                        ],
                        [
                            "eid12172",
                            "left",
                            51733,
                            215,
                            "linear",
                            "${gin-sad1}",
                            '413px',
                            '389px'
                        ],
                        [
                            "eid11925",
                            "top",
                            47563,
                            63,
                            "linear",
                            "${circle-drawnCopy2}",
                            '410px',
                            '24px'
                        ],
                        [
                            "eid12096",
                            "top",
                            52013,
                            63,
                            "linear",
                            "${circle-drawnCopy2}",
                            '24px',
                            '410px'
                        ],
                        [
                            "eid11788",
                            "left",
                            36947,
                            55,
                            "linear",
                            "${Text11}",
                            '640px',
                            '683px'
                        ],
                        [
                            "eid11792",
                            "left",
                            37002,
                            2998,
                            "linear",
                            "${Text11}",
                            '683px',
                            '641px'
                        ],
                        [
                            "eid10297",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-low-arm-front}",
                            '1279px',
                            '962px'
                        ],
                        [
                            "eid10941",
                            "left",
                            3782,
                            139,
                            "linear",
                            "${nath-low-arm-front}",
                            '962px',
                            '891px'
                        ],
                        [
                            "eid11225",
                            "left",
                            15115,
                            210,
                            "linear",
                            "${nath-low-arm-front}",
                            '891px',
                            '874px'
                        ],
                        [
                            "eid11406",
                            "left",
                            21944,
                            139,
                            "linear",
                            "${nath-low-arm-front}",
                            '874px',
                            '891px'
                        ],
                        [
                            "eid12250",
                            "left",
                            47777,
                            0,
                            "linear",
                            "${nath-low-arm-front}",
                            '891px',
                            '891px'
                        ],
                        [
                            "eid12251",
                            "left",
                            48241,
                            0,
                            "linear",
                            "${nath-low-arm-front}",
                            '891px',
                            '891px'
                        ],
                        [
                            "eid12259",
                            "left",
                            51948,
                            0,
                            "linear",
                            "${nath-low-arm-front}",
                            '891px',
                            '891px'
                        ],
                        [
                            "eid12258",
                            "left",
                            52114,
                            0,
                            "linear",
                            "${nath-low-arm-front}",
                            '891px',
                            '891px'
                        ],
                        [
                            "eid13156",
                            "display",
                            13800,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11815",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text12}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11801",
                            "opacity",
                            40000,
                            150,
                            "linear",
                            "${Text12}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11814",
                            "opacity",
                            42744,
                            55,
                            "linear",
                            "${Text12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10398",
                            "rotateZ",
                            4602,
                            188,
                            "linear",
                            "${gin-side}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid11117",
                            "rotateZ",
                            9766,
                            263,
                            "linear",
                            "${gin-side}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid11290",
                            "rotateZ",
                            20116,
                            146,
                            "linear",
                            "${gin-side}",
                            '1deg',
                            '26deg'
                        ],
                        [
                            "eid12167",
                            "rotateZ",
                            51733,
                            215,
                            "linear",
                            "${gin-side}",
                            '26deg',
                            '3deg'
                        ],
                        [
                            "eid11953",
                            "top",
                            48096,
                            55,
                            "linear",
                            "${Text14}",
                            '101px',
                            '61px'
                        ],
                        [
                            "eid11961",
                            "top",
                            48151,
                            999,
                            "linear",
                            "${Text14}",
                            '61px',
                            '56px'
                        ],
                        [
                            "eid11966",
                            "top",
                            49150,
                            55,
                            "linear",
                            "${Text14}",
                            '56px',
                            '98px'
                        ],
                        [
                            "eid10940",
                            "top",
                            3782,
                            139,
                            "linear",
                            "${nath-hand-write}",
                            '628px',
                            '399px'
                        ],
                        [
                            "eid11228",
                            "top",
                            15115,
                            210,
                            "linear",
                            "${nath-hand-write}",
                            '399px',
                            '437px'
                        ],
                        [
                            "eid11402",
                            "top",
                            21944,
                            139,
                            "linear",
                            "${nath-hand-write}",
                            '437px',
                            '399px'
                        ],
                        [
                            "eid12245",
                            "top",
                            47777,
                            464,
                            "linear",
                            "${nath-hand-write}",
                            '399px',
                            '331px'
                        ],
                        [
                            "eid12253",
                            "top",
                            51948,
                            166,
                            "linear",
                            "${nath-hand-write}",
                            '331px',
                            '399px'
                        ],
                        [
                            "eid10335",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10361",
                            "opacity",
                            4191,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10362",
                            "opacity",
                            4343,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11147",
                            "opacity",
                            13426,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11148",
                            "opacity",
                            13578,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11397",
                            "opacity",
                            21900,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11398",
                            "opacity",
                            22052,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11490",
                            "opacity",
                            23844,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11491",
                            "opacity",
                            23996,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11492",
                            "opacity",
                            25869,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11493",
                            "opacity",
                            26021,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12098",
                            "opacity",
                            28087,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12099",
                            "opacity",
                            28239,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12100",
                            "opacity",
                            30085,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12101",
                            "opacity",
                            30237,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12102",
                            "opacity",
                            32339,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12103",
                            "opacity",
                            32491,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12104",
                            "opacity",
                            34793,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12105",
                            "opacity",
                            34945,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12106",
                            "opacity",
                            36663,
                            103,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12107",
                            "opacity",
                            36815,
                            90,
                            "linear",
                            "${gin-blink2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12347",
                            "opacity",
                            54485,
                            0,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12368",
                            "opacity",
                            54900,
                            0,
                            "linear",
                            "${gin-blink2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11580",
                            "display",
                            0,
                            0,
                            "linear",
                            "${intro-answer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13101",
                            "display",
                            29500,
                            0,
                            "linear",
                            "${intro-answer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12282",
                            "display",
                            52515,
                            0,
                            "linear",
                            "${intro-answer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10333",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10412",
                            "opacity",
                            5642,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10411",
                            "opacity",
                            5794,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11104",
                            "opacity",
                            9524,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11105",
                            "opacity",
                            9676,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12111",
                            "opacity",
                            38226,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12112",
                            "opacity",
                            38378,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12113",
                            "opacity",
                            40288,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12114",
                            "opacity",
                            40440,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12119",
                            "opacity",
                            42932,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12120",
                            "opacity",
                            43084,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12121",
                            "opacity",
                            45496,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12122",
                            "opacity",
                            45648,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12123",
                            "opacity",
                            47900,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12124",
                            "opacity",
                            48052,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12125",
                            "opacity",
                            49546,
                            103,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12126",
                            "opacity",
                            51334,
                            90,
                            "linear",
                            "${gin-blink1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12345",
                            "opacity",
                            54485,
                            0,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12366",
                            "opacity",
                            54900,
                            0,
                            "linear",
                            "${gin-blink1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11141",
                            "height",
                            13749,
                            166,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '293px',
                            '420px'
                        ],
                        [
                            "eid11375",
                            "height",
                            19912,
                            145,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '420px',
                            '240px'
                        ],
                        [
                            "eid12281",
                            "display",
                            0,
                            0,
                            "linear",
                            "${end-final}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12280",
                            "display",
                            53400,
                            0,
                            "linear",
                            "${end-final}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13174",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13176",
                            "display",
                            64783,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10259",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-speak-side}",
                            '1069px',
                            '745px'
                        ],
                        [
                            "eid10434",
                            "left",
                            4681,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '745px',
                            '718px'
                        ],
                        [
                            "eid11090",
                            "left",
                            9406,
                            212,
                            "linear",
                            "${nath-speak-side}",
                            '718px',
                            '743px'
                        ],
                        [
                            "eid11352",
                            "left",
                            20435,
                            132,
                            "linear",
                            "${nath-speak-side}",
                            '743px',
                            '725px'
                        ],
                        [
                            "eid12225",
                            "left",
                            43492,
                            214,
                            "linear",
                            "${nath-speak-side}",
                            '725px',
                            '733px'
                        ],
                        [
                            "eid11289",
                            "rotateZ",
                            20116,
                            146,
                            "linear",
                            "${gin-sad1}",
                            '1deg',
                            '26deg'
                        ],
                        [
                            "eid12166",
                            "rotateZ",
                            51733,
                            215,
                            "linear",
                            "${gin-sad1}",
                            '26deg',
                            '3deg'
                        ],
                        [
                            "eid13119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13113",
                            "display",
                            45814,
                            0,
                            "linear",
                            "${t5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13116",
                            "display",
                            45917,
                            0,
                            "linear",
                            "${t5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10339",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-body}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10360",
                            "opacity",
                            3233,
                            114,
                            "linear",
                            "${gin-body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12394",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${gin-body}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11952",
                            "left",
                            48096,
                            55,
                            "linear",
                            "${Text14}",
                            '660px',
                            '711px'
                        ],
                        [
                            "eid11962",
                            "left",
                            48151,
                            999,
                            "linear",
                            "${Text14}",
                            '711px',
                            '708px'
                        ],
                        [
                            "eid11965",
                            "left",
                            49150,
                            55,
                            "linear",
                            "${Text14}",
                            '708px',
                            '667px'
                        ],
                        [
                            "eid10439",
                            "top",
                            4681,
                            187,
                            "linear",
                            "${nath-blink}",
                            '74px',
                            '101px'
                        ],
                        [
                            "eid11092",
                            "top",
                            9406,
                            212,
                            "linear",
                            "${nath-blink}",
                            '101px',
                            '85px'
                        ],
                        [
                            "eid11357",
                            "top",
                            20435,
                            132,
                            "linear",
                            "${nath-blink}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid12202",
                            "top",
                            43492,
                            0,
                            "linear",
                            "${nath-blink}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid12214",
                            "top",
                            43706,
                            0,
                            "linear",
                            "${nath-blink}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid11122",
                            "left",
                            9939,
                            201,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '-365px',
                            '36px'
                        ],
                        [
                            "eid11137",
                            "top",
                            13749,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '31px',
                            '31px'
                        ],
                        [
                            "eid11139",
                            "top",
                            13915,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '31px',
                            '31px'
                        ],
                        [
                            "eid11376",
                            "top",
                            19912,
                            145,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '31px',
                            '35px'
                        ],
                        [
                            "eid10258",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-up-arm-front}",
                            '1254px',
                            '930px'
                        ],
                        [
                            "eid10937",
                            "rotateZ",
                            3782,
                            139,
                            "linear",
                            "${nath-hand-write}",
                            '-66deg',
                            '6deg'
                        ],
                        [
                            "eid11224",
                            "rotateZ",
                            15115,
                            210,
                            "linear",
                            "${nath-hand-write}",
                            '6deg',
                            '-9deg'
                        ],
                        [
                            "eid11404",
                            "rotateZ",
                            21944,
                            139,
                            "linear",
                            "${nath-hand-write}",
                            '-9deg',
                            '6deg'
                        ],
                        [
                            "eid12247",
                            "rotateZ",
                            47777,
                            464,
                            "linear",
                            "${nath-hand-write}",
                            '6deg',
                            '37deg'
                        ],
                        [
                            "eid12255",
                            "rotateZ",
                            51948,
                            166,
                            "linear",
                            "${nath-hand-write}",
                            '37deg',
                            '6deg'
                        ],
                        [
                            "eid10336",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10357",
                            "opacity",
                            3233,
                            114,
                            "linear",
                            "${gin-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12391",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${gin-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11429",
                            "width",
                            22650,
                            214,
                            "linear",
                            "${balloon}",
                            '87px',
                            '290px'
                        ],
                        [
                            "eid11464",
                            "width",
                            27197,
                            214,
                            "linear",
                            "${balloon}",
                            '290px',
                            '87px'
                        ],
                        [
                            "eid11652",
                            "width",
                            30105,
                            214,
                            "linear",
                            "${balloon}",
                            '87px',
                            '274px'
                        ],
                        [
                            "eid11707",
                            "width",
                            35761,
                            214,
                            "linear",
                            "${balloon}",
                            '274px',
                            '87px'
                        ],
                        [
                            "eid11779",
                            "width",
                            36788,
                            214,
                            "linear",
                            "${balloon}",
                            '87px',
                            '274px'
                        ],
                        [
                            "eid11780",
                            "width",
                            42744,
                            214,
                            "linear",
                            "${balloon}",
                            '274px',
                            '87px'
                        ],
                        [
                            "eid11940",
                            "width",
                            47937,
                            214,
                            "linear",
                            "${balloon}",
                            '87px',
                            '274px'
                        ],
                        [
                            "eid11947",
                            "width",
                            49150,
                            214,
                            "linear",
                            "${balloon}",
                            '274px',
                            '87px'
                        ],
                        [
                            "eid10338",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-up-arm-front}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10355",
                            "opacity",
                            3233,
                            114,
                            "linear",
                            "${gin-up-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12390",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${gin-up-arm-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12330",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12321",
                            "opacity",
                            54098,
                            58,
                            "linear",
                            "${spark1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12324",
                            "opacity",
                            54286,
                            31,
                            "linear",
                            "${spark1}",
                            '1',
                            '0'
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
                            3233,
                            114,
                            "linear",
                            "${nath-body}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12401",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${nath-body}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10432",
                            "rotateZ",
                            4681,
                            187,
                            "linear",
                            "${nath-side}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid11099",
                            "rotateZ",
                            9406,
                            212,
                            "linear",
                            "${nath-side}",
                            '-15deg',
                            '1deg'
                        ],
                        [
                            "eid11349",
                            "rotateZ",
                            20435,
                            132,
                            "linear",
                            "${nath-side}",
                            '1deg',
                            '-9deg'
                        ],
                        [
                            "eid12220",
                            "rotateZ",
                            43492,
                            214,
                            "linear",
                            "${nath-side}",
                            '-9deg',
                            '1deg'
                        ],
                        [
                            "eid11958",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11957",
                            "opacity",
                            48096,
                            55,
                            "linear",
                            "${Text14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11969",
                            "opacity",
                            49150,
                            55,
                            "linear",
                            "${Text14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11481",
                            "top",
                            25048,
                            2149,
                            "linear",
                            "${Text5}",
                            '66px',
                            '65px'
                        ],
                        [
                            "eid11488",
                            "top",
                            27197,
                            90,
                            "linear",
                            "${Text5}",
                            '65px',
                            '91px'
                        ],
                        [
                            "eid12275",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Middle-final}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12274",
                            "display",
                            52900,
                            0,
                            "linear",
                            "${Middle-final}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11133",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13147",
                            "opacity",
                            9939,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13148",
                            "opacity",
                            10029,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '1',
                            '1'
                        ],
                        [
                            "eid13153",
                            "opacity",
                            13749,
                            166,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13150",
                            "opacity",
                            22003,
                            0,
                            "linear",
                            "${narrator-text-balloon-square}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12298",
                            "height",
                            53900,
                            278,
                            "linear",
                            "${play-btn}",
                            '26px',
                            '100px'
                        ],
                        [
                            "eid12305",
                            "height",
                            54178,
                            139,
                            "linear",
                            "${play-btn}",
                            '100px',
                            '87px'
                        ],
                        [
                            "eid12316",
                            "width",
                            54098,
                            220,
                            "linear",
                            "${spark1}",
                            '119px',
                            '408px'
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
                            3233,
                            114,
                            "linear",
                            "${nath-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12399",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${nath-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11210",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-sad2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11209",
                            "opacity",
                            14834,
                            360,
                            "linear",
                            "${nath-sad2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11360",
                            "opacity",
                            20567,
                            123,
                            "linear",
                            "${nath-sad2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12338",
                            "opacity",
                            54485,
                            0,
                            "linear",
                            "${nath-sad2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12359",
                            "opacity",
                            54900,
                            0,
                            "linear",
                            "${nath-sad2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11081",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${arrow-drawnCopy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10990",
                            "opacity",
                            6560,
                            58,
                            "linear",
                            "${arrow-drawnCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11051",
                            "opacity",
                            9250,
                            96,
                            "linear",
                            "${arrow-drawnCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10260",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-up-arm-back}",
                            '1083px',
                            '768px'
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
                            "eid11677",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11437",
                            "opacity",
                            22809,
                            55,
                            "linear",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11471",
                            "opacity",
                            24958,
                            90,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11806",
                            "left",
                            40000,
                            2744,
                            "linear",
                            "${Text12}",
                            '620px',
                            '659px'
                        ],
                        [
                            "eid11810",
                            "left",
                            42744,
                            55,
                            "linear",
                            "${Text12}",
                            '659px',
                            '620px'
                        ],
                        [
                            "eid12025",
                            "display",
                            0,
                            0,
                            "linear",
                            "${end-answer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12026",
                            "display",
                            51233,
                            0,
                            "linear",
                            "${end-answer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12284",
                            "display",
                            53400,
                            0,
                            "linear",
                            "${end-answer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10230",
                            "top",
                            2824,
                            409,
                            "linear",
                            "${library-table}",
                            '584px',
                            '234px'
                        ],
                        [
                            "eid11179",
                            "left",
                            14300,
                            292,
                            "linear",
                            "${sweat2}",
                            '536px',
                            '605px'
                        ],
                        [
                            "eid11195",
                            "left",
                            14714,
                            292,
                            "linear",
                            "${sweat2}",
                            '536px',
                            '605px'
                        ],
                        [
                            "eid11201",
                            "left",
                            15114,
                            292,
                            "linear",
                            "${sweat2}",
                            '536px',
                            '605px'
                        ],
                        [
                            "eid11244",
                            "left",
                            19942,
                            292,
                            "linear",
                            "${sweat2}",
                            '536px',
                            '605px'
                        ],
                        [
                            "eid11245",
                            "left",
                            20356,
                            292,
                            "linear",
                            "${sweat2}",
                            '536px',
                            '605px'
                        ],
                        [
                            "eid11246",
                            "left",
                            20756,
                            292,
                            "linear",
                            "${sweat2}",
                            '536px',
                            '605px'
                        ],
                        [
                            "eid10262",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-blink}",
                            '1069px',
                            '745px'
                        ],
                        [
                            "eid10438",
                            "left",
                            4681,
                            187,
                            "linear",
                            "${nath-blink}",
                            '745px',
                            '718px'
                        ],
                        [
                            "eid11095",
                            "left",
                            9406,
                            212,
                            "linear",
                            "${nath-blink}",
                            '718px',
                            '743px'
                        ],
                        [
                            "eid11353",
                            "left",
                            20435,
                            132,
                            "linear",
                            "${nath-blink}",
                            '743px',
                            '725px'
                        ],
                        [
                            "eid12223",
                            "left",
                            43492,
                            214,
                            "linear",
                            "${nath-blink}",
                            '725px',
                            '733px'
                        ],
                        [
                            "eid10396",
                            "rotateZ",
                            4602,
                            188,
                            "linear",
                            "${gin-blink1}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid11107",
                            "rotateZ",
                            9766,
                            263,
                            "linear",
                            "${gin-blink1}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid11287",
                            "rotateZ",
                            20116,
                            146,
                            "linear",
                            "${gin-blink1}",
                            '1deg',
                            '26deg'
                        ],
                        [
                            "eid12164",
                            "rotateZ",
                            51733,
                            215,
                            "linear",
                            "${gin-blink1}",
                            '26deg',
                            '3deg'
                        ],
                        [
                            "eid13188",
                            "left",
                            64783,
                            0,
                            "linear",
                            "${RoundRect3}",
                            '1067px',
                            '1067px'
                        ],
                        [
                            "eid13194",
                            "left",
                            65361,
                            163,
                            "linear",
                            "${RoundRect3}",
                            '1067px',
                            '516px'
                        ],
                        [
                            "eid11078",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${structure-txt}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10975",
                            "opacity",
                            4114,
                            115,
                            "linear",
                            "${structure-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11052",
                            "opacity",
                            9250,
                            96,
                            "linear",
                            "${structure-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12005",
                            "display",
                            0,
                            0,
                            "linear",
                            "${end-choices}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12006",
                            "display",
                            49288,
                            0,
                            "linear",
                            "${end-choices}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13131",
                            "display",
                            51948,
                            0,
                            "linear",
                            "${end-choices}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11347",
                            "rotateZ",
                            20435,
                            132,
                            "linear",
                            "${nath-sad2}",
                            '1deg',
                            '-9deg'
                        ],
                        [
                            "eid12219",
                            "rotateZ",
                            43492,
                            214,
                            "linear",
                            "${nath-sad2}",
                            '-9deg',
                            '1deg'
                        ],
                        [
                            "eid11057",
                            "height",
                            9086,
                            0,
                            "linear",
                            "${notebook-flip}",
                            '528px',
                            '528px'
                        ],
                        [
                            "eid11062",
                            "height",
                            9325,
                            0,
                            "linear",
                            "${notebook-flip}",
                            '528px',
                            '528px'
                        ],
                        [
                            "eid10989",
                            "top",
                            6560,
                            190,
                            "linear",
                            "${arrow-drawnCopy}",
                            '316px',
                            '358px'
                        ],
                        [
                            "eid10918",
                            "rotateZ",
                            3679,
                            152,
                            "linear",
                            "${gin-low-arm-front}",
                            '-15deg',
                            '-101deg'
                        ],
                        [
                            "eid11162",
                            "rotateZ",
                            13915,
                            132,
                            "linear",
                            "${gin-low-arm-front}",
                            '-101deg',
                            '-125deg'
                        ],
                        [
                            "eid11317",
                            "rotateZ",
                            20153,
                            109,
                            "linear",
                            "${gin-low-arm-front}",
                            '-125deg',
                            '-88deg'
                        ],
                        [
                            "eid11180",
                            "top",
                            14300,
                            292,
                            "linear",
                            "${sweat2}",
                            '117px',
                            '8px'
                        ],
                        [
                            "eid11191",
                            "top",
                            14714,
                            292,
                            "linear",
                            "${sweat2}",
                            '117px',
                            '8px'
                        ],
                        [
                            "eid11197",
                            "top",
                            15114,
                            292,
                            "linear",
                            "${sweat2}",
                            '117px',
                            '8px'
                        ],
                        [
                            "eid11232",
                            "top",
                            19942,
                            292,
                            "linear",
                            "${sweat2}",
                            '117px',
                            '8px'
                        ],
                        [
                            "eid11233",
                            "top",
                            20356,
                            292,
                            "linear",
                            "${sweat2}",
                            '117px',
                            '8px'
                        ],
                        [
                            "eid11234",
                            "top",
                            20756,
                            292,
                            "linear",
                            "${sweat2}",
                            '117px',
                            '8px'
                        ],
                        [
                            "eid13183",
                            "rotateZ",
                            663,
                            250,
                            "linear",
                            "${TextCopy}",
                            '0deg',
                            '-9deg'
                        ],
                        [
                            "eid13184",
                            "rotateZ",
                            913,
                            250,
                            "linear",
                            "${TextCopy}",
                            '-9deg',
                            '5deg'
                        ],
                        [
                            "eid13185",
                            "rotateZ",
                            1163,
                            151,
                            "linear",
                            "${TextCopy}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid10986",
                            "top",
                            5642,
                            190,
                            "linear",
                            "${arrow-drawn}",
                            '157px',
                            '199px'
                        ],
                        [
                            "eid11182",
                            "width",
                            14300,
                            292,
                            "linear",
                            "${sweat2}",
                            '55px',
                            '107px'
                        ],
                        [
                            "eid11196",
                            "width",
                            14714,
                            292,
                            "linear",
                            "${sweat2}",
                            '55px',
                            '107px'
                        ],
                        [
                            "eid11202",
                            "width",
                            15114,
                            292,
                            "linear",
                            "${sweat2}",
                            '55px',
                            '107px'
                        ],
                        [
                            "eid11247",
                            "width",
                            19942,
                            292,
                            "linear",
                            "${sweat2}",
                            '55px',
                            '107px'
                        ],
                        [
                            "eid11248",
                            "width",
                            20356,
                            292,
                            "linear",
                            "${sweat2}",
                            '55px',
                            '107px'
                        ],
                        [
                            "eid11249",
                            "width",
                            20756,
                            292,
                            "linear",
                            "${sweat2}",
                            '55px',
                            '107px'
                        ],
                        [
                            "eid11669",
                            "left",
                            30264,
                            55,
                            "linear",
                            "${Text9}",
                            '622px',
                            '665px'
                        ],
                        [
                            "eid11681",
                            "left",
                            30319,
                            2698,
                            "linear",
                            "${Text9}",
                            '665px',
                            '621px'
                        ],
                        [
                            "eid11079",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${end-txt}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10991",
                            "opacity",
                            6819,
                            58,
                            "linear",
                            "${end-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11046",
                            "opacity",
                            9250,
                            96,
                            "linear",
                            "${end-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11918",
                            "opacity",
                            47626,
                            177,
                            "linear",
                            "${end-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12095",
                            "opacity",
                            51836,
                            177,
                            "linear",
                            "${end-txt}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11764",
                            "top",
                            36045,
                            75,
                            "linear",
                            "${circle-drawnCopy}",
                            '250px',
                            '25px'
                        ],
                        [
                            "eid11912",
                            "top",
                            47380,
                            75,
                            "linear",
                            "${circle-drawnCopy}",
                            '25px',
                            '250px'
                        ],
                        [
                            "eid13031",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ec}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10431",
                            "rotateZ",
                            4681,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid11091",
                            "rotateZ",
                            9406,
                            212,
                            "linear",
                            "${nath-speak-side}",
                            '-15deg',
                            '1deg'
                        ],
                        [
                            "eid11348",
                            "rotateZ",
                            20435,
                            132,
                            "linear",
                            "${nath-speak-side}",
                            '1deg',
                            '-9deg'
                        ],
                        [
                            "eid12222",
                            "rotateZ",
                            43492,
                            214,
                            "linear",
                            "${nath-speak-side}",
                            '-9deg',
                            '1deg'
                        ],
                        [
                            "eid11084",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${circle-drawnCopy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10988",
                            "opacity",
                            6272,
                            115,
                            "linear",
                            "${circle-drawnCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11049",
                            "opacity",
                            9250,
                            96,
                            "linear",
                            "${circle-drawnCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11754",
                            "opacity",
                            36120,
                            175,
                            "linear",
                            "${circle-drawnCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11913",
                            "opacity",
                            47205,
                            175,
                            "linear",
                            "${circle-drawnCopy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10435",
                            "top",
                            4681,
                            187,
                            "linear",
                            "${nath-speak-side}",
                            '74px',
                            '101px'
                        ],
                        [
                            "eid11089",
                            "top",
                            9406,
                            212,
                            "linear",
                            "${nath-speak-side}",
                            '101px',
                            '85px'
                        ],
                        [
                            "eid11356",
                            "top",
                            20435,
                            132,
                            "linear",
                            "${nath-speak-side}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid12200",
                            "top",
                            43492,
                            0,
                            "linear",
                            "${nath-speak-side}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid12212",
                            "top",
                            43706,
                            0,
                            "linear",
                            "${nath-speak-side}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid11675",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11674",
                            "opacity",
                            30264,
                            55,
                            "linear",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11685",
                            "opacity",
                            32946,
                            71,
                            "linear",
                            "${Text9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12301",
                            "left",
                            53900,
                            278,
                            "linear",
                            "${play-btn}",
                            '192px',
                            '150px'
                        ],
                        [
                            "eid12302",
                            "left",
                            54178,
                            139,
                            "linear",
                            "${play-btn}",
                            '150px',
                            '155px'
                        ],
                        [
                            "eid13187",
                            "left",
                            64783,
                            0,
                            "linear",
                            "${Text6}",
                            '1083px',
                            '1083px'
                        ],
                        [
                            "eid13193",
                            "left",
                            65361,
                            163,
                            "linear",
                            "${Text6}",
                            '1083px',
                            '531px'
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
                            2824,
                            97,
                            "linear",
                            "${library-table}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12398",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${library-table}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10324",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-body}",
                            '-294px',
                            '416px'
                        ],
                        [
                            "eid11355",
                            "top",
                            20435,
                            132,
                            "linear",
                            "${nath-sad2}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid12201",
                            "top",
                            43492,
                            0,
                            "linear",
                            "${nath-sad2}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid12213",
                            "top",
                            43706,
                            0,
                            "linear",
                            "${nath-sad2}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid11083",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${circle-drawnCopy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10992",
                            "opacity",
                            7132,
                            115,
                            "linear",
                            "${circle-drawnCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11050",
                            "opacity",
                            9250,
                            96,
                            "linear",
                            "${circle-drawnCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11919",
                            "opacity",
                            47626,
                            177,
                            "linear",
                            "${circle-drawnCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12097",
                            "opacity",
                            51836,
                            177,
                            "linear",
                            "${circle-drawnCopy2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11067",
                            "width",
                            9086,
                            239,
                            "linear",
                            "${notebook-flip}",
                            '6px',
                            '382px'
                        ],
                        [
                            "eid11066",
                            "top",
                            9086,
                            85,
                            "linear",
                            "${notebook-flip}",
                            '-14px',
                            '-81px'
                        ],
                        [
                            "eid11068",
                            "top",
                            9171,
                            80,
                            "linear",
                            "${notebook-flip}",
                            '-81px',
                            '-48px'
                        ],
                        [
                            "eid11070",
                            "top",
                            9251,
                            34,
                            "linear",
                            "${notebook-flip}",
                            '-48px',
                            '-25px'
                        ],
                        [
                            "eid11072",
                            "top",
                            9285,
                            40,
                            "linear",
                            "${notebook-flip}",
                            '-25px',
                            '16px'
                        ],
                        [
                            "eid12271",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${story-txt}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12270",
                            "opacity",
                            52356,
                            159,
                            "linear",
                            "${story-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11480",
                            "left",
                            25048,
                            2149,
                            "linear",
                            "${Text5}",
                            '639px',
                            '677px'
                        ],
                        [
                            "eid11487",
                            "left",
                            27197,
                            90,
                            "linear",
                            "${Text5}",
                            '677px',
                            '607px'
                        ],
                        [
                            "eid12509",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bb}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11065",
                            "left",
                            9086,
                            85,
                            "linear",
                            "${notebook-flip}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid11069",
                            "left",
                            9171,
                            80,
                            "linear",
                            "${notebook-flip}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid11071",
                            "left",
                            9251,
                            74,
                            "linear",
                            "${notebook-flip}",
                            '33px',
                            '36px'
                        ],
                        [
                            "eid13118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13112",
                            "display",
                            45814,
                            0,
                            "linear",
                            "${t6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13115",
                            "display",
                            45917,
                            0,
                            "linear",
                            "${t6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12317",
                            "top",
                            54098,
                            220,
                            "linear",
                            "${spark1}",
                            '467px',
                            '319px'
                        ],
                        [
                            "eid11695",
                            "left",
                            33017,
                            66,
                            "linear",
                            "${Text10}",
                            '622px',
                            '621px'
                        ],
                        [
                            "eid11699",
                            "left",
                            33083,
                            2678,
                            "linear",
                            "${Text10}",
                            '621px',
                            '663px'
                        ],
                        [
                            "eid11710",
                            "left",
                            35761,
                            55,
                            "linear",
                            "${Text10}",
                            '663px',
                            '620px'
                        ],
                        [
                            "eid12428",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12427",
                            "opacity",
                            54900,
                            67,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13075",
                            "opacity",
                            64849,
                            67,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13200",
                            "skewX",
                            65524,
                            87,
                            "linear",
                            "${RoundRect3}",
                            '-12.65deg',
                            '0deg'
                        ],
                        [
                            "eid12500",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ba}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12407",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12406",
                            "opacity",
                            54534,
                            366,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10341",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-up-arm-back}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10356",
                            "opacity",
                            3233,
                            114,
                            "linear",
                            "${gin-up-arm-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12395",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${gin-up-arm-back}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10327",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-blink1}",
                            '-317px',
                            '393px'
                        ],
                        [
                            "eid10401",
                            "left",
                            4602,
                            188,
                            "linear",
                            "${gin-blink1}",
                            '393px',
                            '412px'
                        ],
                        [
                            "eid11106",
                            "left",
                            9766,
                            263,
                            "linear",
                            "${gin-blink1}",
                            '412px',
                            '386px'
                        ],
                        [
                            "eid11294",
                            "left",
                            20116,
                            146,
                            "linear",
                            "${gin-blink1}",
                            '386px',
                            '413px'
                        ],
                        [
                            "eid12170",
                            "left",
                            51733,
                            215,
                            "linear",
                            "${gin-blink1}",
                            '413px',
                            '389px'
                        ],
                        [
                            "eid10920",
                            "top",
                            3679,
                            152,
                            "linear",
                            "${gin-hand-pencil}",
                            '639px',
                            '405px'
                        ],
                        [
                            "eid11164",
                            "top",
                            13915,
                            132,
                            "linear",
                            "${gin-hand-pencil}",
                            '405px',
                            '343px'
                        ],
                        [
                            "eid11319",
                            "top",
                            20153,
                            109,
                            "linear",
                            "${gin-hand-pencil}",
                            '343px',
                            '414px'
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
                            2674,
                            198,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12786",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mc}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10964",
                            "top",
                            3679,
                            310,
                            "linear",
                            "${notebook}",
                            '-227px',
                            '14px'
                        ],
                        [
                            "eid11690",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text10}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11689",
                            "opacity",
                            33017,
                            66,
                            "linear",
                            "${Text10}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11714",
                            "opacity",
                            35761,
                            55,
                            "linear",
                            "${Text10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12422",
                            "left",
                            54900,
                            133,
                            "linear",
                            "${RoundRect}",
                            '325px',
                            '394px'
                        ],
                        [
                            "eid13076",
                            "left",
                            64783,
                            133,
                            "linear",
                            "${RoundRect}",
                            '394px',
                            '325px'
                        ],
                        [
                            "eid12299",
                            "top",
                            53900,
                            278,
                            "linear",
                            "${play-btn}",
                            '520px',
                            '476px'
                        ],
                        [
                            "eid12303",
                            "top",
                            54178,
                            139,
                            "linear",
                            "${play-btn}",
                            '476px',
                            '485px'
                        ],
                        [
                            "eid11852",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Main-choices}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11851",
                            "display",
                            44958,
                            0,
                            "linear",
                            "${Main-choices}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13108",
                            "display",
                            47777,
                            0,
                            "linear",
                            "${Main-choices}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10334",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-smile-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10365",
                            "opacity",
                            4433,
                            115,
                            "linear",
                            "${gin-smile-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11109",
                            "opacity",
                            10140,
                            212,
                            "linear",
                            "${gin-smile-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12110",
                            "opacity",
                            37977,
                            114,
                            "linear",
                            "${gin-smile-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12396",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${gin-smile-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13095",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13098",
                            "display",
                            28329,
                            0,
                            "linear",
                            "${t3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13103",
                            "display",
                            28394,
                            0,
                            "linear",
                            "${t3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11077",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${notebook-flip}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11076",
                            "opacity",
                            9086,
                            34,
                            "linear",
                            "${notebook-flip}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11088",
                            "opacity",
                            9325,
                            56,
                            "linear",
                            "${notebook-flip}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13096",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13099",
                            "display",
                            28329,
                            0,
                            "linear",
                            "${t2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13104",
                            "display",
                            28394,
                            0,
                            "linear",
                            "${t2}",
                            'block',
                            'none'
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
                            3679,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10283",
                            "opacity",
                            3831,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10457",
                            "opacity",
                            6387,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10456",
                            "opacity",
                            6539,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11007",
                            "opacity",
                            7884,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11008",
                            "opacity",
                            8036,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11093",
                            "opacity",
                            9787,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11094",
                            "opacity",
                            9939,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11203",
                            "opacity",
                            14592,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11204",
                            "opacity",
                            14744,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11361",
                            "opacity",
                            20690,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11362",
                            "opacity",
                            20842,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11494",
                            "opacity",
                            23342,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11495",
                            "opacity",
                            23494,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11496",
                            "opacity",
                            25439,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11497",
                            "opacity",
                            25591,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11498",
                            "opacity",
                            27371,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11499",
                            "opacity",
                            27523,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12181",
                            "opacity",
                            29527,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12182",
                            "opacity",
                            29679,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12183",
                            "opacity",
                            31650,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12184",
                            "opacity",
                            31802,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12185",
                            "opacity",
                            33963,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12186",
                            "opacity",
                            34115,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12187",
                            "opacity",
                            36045,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12188",
                            "opacity",
                            36197,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12193",
                            "opacity",
                            43250,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12194",
                            "opacity",
                            43402,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12227",
                            "opacity",
                            45814,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12228",
                            "opacity",
                            45966,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12261",
                            "opacity",
                            47541,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12262",
                            "opacity",
                            47693,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12263",
                            "opacity",
                            50228,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12264",
                            "opacity",
                            50380,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12265",
                            "opacity",
                            52114,
                            103,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12266",
                            "opacity",
                            52266,
                            90,
                            "linear",
                            "${nath-blink}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12339",
                            "opacity",
                            54485,
                            0,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12360",
                            "opacity",
                            54900,
                            0,
                            "linear",
                            "${nath-blink}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11123",
                            "left",
                            9939,
                            201,
                            "linear",
                            "${Text2}",
                            '-333px',
                            '68px'
                        ],
                        [
                            "eid10433",
                            "rotateZ",
                            4681,
                            187,
                            "linear",
                            "${nath-blink}",
                            '-4deg',
                            '-15deg'
                        ],
                        [
                            "eid11096",
                            "rotateZ",
                            9406,
                            212,
                            "linear",
                            "${nath-blink}",
                            '-15deg',
                            '1deg'
                        ],
                        [
                            "eid11346",
                            "rotateZ",
                            20435,
                            132,
                            "linear",
                            "${nath-blink}",
                            '1deg',
                            '-9deg'
                        ],
                        [
                            "eid12221",
                            "rotateZ",
                            43492,
                            214,
                            "linear",
                            "${nath-blink}",
                            '-9deg',
                            '1deg'
                        ],
                        [
                            "eid10320",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-up-arm-back}",
                            '-145px',
                            '568px'
                        ],
                        [
                            "eid13180",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13181",
                            "opacity",
                            250,
                            141,
                            "linear",
                            "${TextCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13182",
                            "opacity",
                            2733,
                            139,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11871",
                            "display",
                            0,
                            0,
                            "linear",
                            "${main-answer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11870",
                            "display",
                            46900,
                            0,
                            "linear",
                            "${main-answer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12283",
                            "display",
                            52900,
                            0,
                            "linear",
                            "${main-answer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10965",
                            "width",
                            3679,
                            310,
                            "linear",
                            "${notebook}",
                            '207px',
                            '432px'
                        ],
                        [
                            "eid11427",
                            "top",
                            22650,
                            214,
                            "linear",
                            "${balloon}",
                            '167px',
                            '-59px'
                        ],
                        [
                            "eid11433",
                            "top",
                            22865,
                            1666,
                            "linear",
                            "${balloon}",
                            '-59px',
                            '-51px'
                        ],
                        [
                            "eid11455",
                            "top",
                            24531,
                            2666,
                            "linear",
                            "${balloon}",
                            '-51px',
                            '-59px'
                        ],
                        [
                            "eid11460",
                            "top",
                            27197,
                            214,
                            "linear",
                            "${balloon}",
                            '-59px',
                            '167px'
                        ],
                        [
                            "eid11640",
                            "top",
                            30105,
                            214,
                            "linear",
                            "${balloon}",
                            '167px',
                            '-128px'
                        ],
                        [
                            "eid11662",
                            "top",
                            30319,
                            2698,
                            "linear",
                            "${balloon}",
                            '-128px',
                            '-130px'
                        ],
                        [
                            "eid11664",
                            "top",
                            33017,
                            2744,
                            "linear",
                            "${balloon}",
                            '-130px',
                            '-128px'
                        ],
                        [
                            "eid11702",
                            "top",
                            35761,
                            214,
                            "linear",
                            "${balloon}",
                            '-128px',
                            '167px'
                        ],
                        [
                            "eid11765",
                            "top",
                            36788,
                            214,
                            "linear",
                            "${balloon}",
                            '167px',
                            '-128px'
                        ],
                        [
                            "eid11766",
                            "top",
                            37002,
                            2998,
                            "linear",
                            "${balloon}",
                            '-128px',
                            '-130px'
                        ],
                        [
                            "eid11767",
                            "top",
                            40000,
                            2744,
                            "linear",
                            "${balloon}",
                            '-130px',
                            '-128px'
                        ],
                        [
                            "eid11768",
                            "top",
                            42744,
                            214,
                            "linear",
                            "${balloon}",
                            '-128px',
                            '167px'
                        ],
                        [
                            "eid11926",
                            "top",
                            47937,
                            214,
                            "linear",
                            "${balloon}",
                            '167px',
                            '-128px'
                        ],
                        [
                            "eid11927",
                            "top",
                            48151,
                            999,
                            "linear",
                            "${balloon}",
                            '-128px',
                            '-129px'
                        ],
                        [
                            "eid11942",
                            "top",
                            49150,
                            214,
                            "linear",
                            "${balloon}",
                            '-128px',
                            '167px'
                        ],
                        [
                            "eid12315",
                            "left",
                            54098,
                            220,
                            "linear",
                            "${spark1}",
                            '141px',
                            '-8px'
                        ],
                        [
                            "eid11696",
                            "top",
                            33017,
                            66,
                            "linear",
                            "${Text10}",
                            '65px',
                            '64px'
                        ],
                        [
                            "eid11700",
                            "top",
                            33083,
                            2678,
                            "linear",
                            "${Text10}",
                            '64px',
                            '69px'
                        ],
                        [
                            "eid11711",
                            "top",
                            35761,
                            55,
                            "linear",
                            "${Text10}",
                            '69px',
                            '83px'
                        ],
                        [
                            "eid10410",
                            "top",
                            4602,
                            188,
                            "linear",
                            "${gin-blink2}",
                            '120px',
                            '128px'
                        ],
                        [
                            "eid11112",
                            "top",
                            9766,
                            263,
                            "linear",
                            "${gin-blink2}",
                            '128px',
                            '113px'
                        ],
                        [
                            "eid11293",
                            "top",
                            20116,
                            146,
                            "linear",
                            "${gin-blink2}",
                            '113px',
                            '120px'
                        ],
                        [
                            "eid12175",
                            "top",
                            51733,
                            215,
                            "linear",
                            "${gin-blink2}",
                            '120px',
                            '119px'
                        ],
                        [
                            "eid10406",
                            "top",
                            4602,
                            188,
                            "linear",
                            "${gin-side}",
                            '120px',
                            '128px'
                        ],
                        [
                            "eid11115",
                            "top",
                            9766,
                            263,
                            "linear",
                            "${gin-side}",
                            '128px',
                            '113px'
                        ],
                        [
                            "eid11301",
                            "top",
                            20116,
                            146,
                            "linear",
                            "${gin-side}",
                            '113px',
                            '120px'
                        ],
                        [
                            "eid12179",
                            "top",
                            51733,
                            215,
                            "linear",
                            "${gin-side}",
                            '120px',
                            '119px'
                        ],
                        [
                            "eid10901",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nath-hand-write}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10903",
                            "opacity",
                            3628,
                            51,
                            "linear",
                            "${nath-hand-write}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12393",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${nath-hand-write}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10938",
                            "rotateZ",
                            3782,
                            139,
                            "linear",
                            "${nath-low-arm-front}",
                            '0deg',
                            '92deg'
                        ],
                        [
                            "eid11223",
                            "rotateZ",
                            15115,
                            210,
                            "linear",
                            "${nath-low-arm-front}",
                            '92deg',
                            '77deg'
                        ],
                        [
                            "eid11407",
                            "rotateZ",
                            21944,
                            139,
                            "linear",
                            "${nath-low-arm-front}",
                            '77deg',
                            '92deg'
                        ],
                        [
                            "eid12252",
                            "rotateZ",
                            47777,
                            464,
                            "linear",
                            "${nath-low-arm-front}",
                            '92deg',
                            '136deg'
                        ],
                        [
                            "eid12260",
                            "rotateZ",
                            51948,
                            166,
                            "linear",
                            "${nath-low-arm-front}",
                            '136deg',
                            '92deg'
                        ],
                        [
                            "eid10337",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-low-arm-front}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10358",
                            "opacity",
                            3233,
                            114,
                            "linear",
                            "${gin-low-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12392",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${gin-low-arm-front}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13120",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13114",
                            "display",
                            45814,
                            0,
                            "linear",
                            "${t4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13117",
                            "display",
                            45917,
                            0,
                            "linear",
                            "${t4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10399",
                            "rotateZ",
                            4602,
                            188,
                            "linear",
                            "${gin-speak-side}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid11102",
                            "rotateZ",
                            9766,
                            263,
                            "linear",
                            "${gin-speak-side}",
                            '10deg',
                            '-10deg'
                        ],
                        [
                            "eid11291",
                            "rotateZ",
                            20116,
                            146,
                            "linear",
                            "${gin-speak-side}",
                            '-10deg',
                            '26deg'
                        ],
                        [
                            "eid12168",
                            "rotateZ",
                            51733,
                            215,
                            "linear",
                            "${gin-speak-side}",
                            '26deg',
                            '3deg'
                        ],
                        [
                            "eid11807",
                            "top",
                            40000,
                            2744,
                            "linear",
                            "${Text12}",
                            '73px',
                            '78px'
                        ],
                        [
                            "eid11811",
                            "top",
                            42744,
                            55,
                            "linear",
                            "${Text12}",
                            '78px',
                            '98px'
                        ],
                        [
                            "eid11351",
                            "left",
                            20435,
                            132,
                            "linear",
                            "${nath-sad2}",
                            '743px',
                            '725px'
                        ],
                        [
                            "eid12226",
                            "left",
                            43492,
                            214,
                            "linear",
                            "${nath-sad2}",
                            '725px',
                            '733px'
                        ],
                        [
                            "eid12552",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bc}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10263",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-side}",
                            '1069px',
                            '745px'
                        ],
                        [
                            "eid10436",
                            "left",
                            4681,
                            187,
                            "linear",
                            "${nath-side}",
                            '745px',
                            '718px'
                        ],
                        [
                            "eid11098",
                            "left",
                            9406,
                            212,
                            "linear",
                            "${nath-side}",
                            '718px',
                            '743px'
                        ],
                        [
                            "eid11350",
                            "left",
                            20435,
                            132,
                            "linear",
                            "${nath-side}",
                            '743px',
                            '725px'
                        ],
                        [
                            "eid12224",
                            "left",
                            43492,
                            214,
                            "linear",
                            "${nath-side}",
                            '725px',
                            '733px'
                        ],
                        [
                            "eid10326",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-side}",
                            '-317px',
                            '393px'
                        ],
                        [
                            "eid10405",
                            "left",
                            4602,
                            188,
                            "linear",
                            "${gin-side}",
                            '393px',
                            '412px'
                        ],
                        [
                            "eid11116",
                            "left",
                            9766,
                            263,
                            "linear",
                            "${gin-side}",
                            '412px',
                            '386px'
                        ],
                        [
                            "eid11300",
                            "left",
                            20116,
                            146,
                            "linear",
                            "${gin-side}",
                            '386px',
                            '413px'
                        ],
                        [
                            "eid12173",
                            "left",
                            51733,
                            215,
                            "linear",
                            "${gin-side}",
                            '413px',
                            '389px'
                        ],
                        [
                            "eid11442",
                            "left",
                            22809,
                            55,
                            "linear",
                            "${Text4}",
                            '635px',
                            '677px'
                        ],
                        [
                            "eid11446",
                            "left",
                            22864,
                            1667,
                            "linear",
                            "${Text4}",
                            '677px',
                            '633px'
                        ],
                        [
                            "eid11452",
                            "left",
                            24531,
                            2666,
                            "linear",
                            "${Text4}",
                            '633px',
                            '659px'
                        ],
                        [
                            "eid11467",
                            "left",
                            27197,
                            90,
                            "linear",
                            "${Text4}",
                            '659px',
                            '615px'
                        ],
                        [
                            "eid12420",
                            "top",
                            54900,
                            133,
                            "linear",
                            "${RoundRect}",
                            '443px',
                            '-59px'
                        ],
                        [
                            "eid13072",
                            "top",
                            64783,
                            133,
                            "linear",
                            "${RoundRect}",
                            '-59px',
                            '443px'
                        ],
                        [
                            "eid11417",
                            "top",
                            22276,
                            59,
                            "linear",
                            "${intro-txt}",
                            '124px',
                            '60px'
                        ],
                        [
                            "eid11636",
                            "top",
                            29598,
                            59,
                            "linear",
                            "${intro-txt}",
                            '60px',
                            '124px'
                        ],
                        [
                            "eid10437",
                            "top",
                            4681,
                            187,
                            "linear",
                            "${nath-side}",
                            '74px',
                            '101px'
                        ],
                        [
                            "eid11097",
                            "top",
                            9406,
                            212,
                            "linear",
                            "${nath-side}",
                            '101px',
                            '85px'
                        ],
                        [
                            "eid11354",
                            "top",
                            20435,
                            132,
                            "linear",
                            "${nath-side}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid12199",
                            "top",
                            43492,
                            0,
                            "linear",
                            "${nath-side}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid12211",
                            "top",
                            43706,
                            0,
                            "linear",
                            "${nath-side}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid13177",
                            "top",
                            316,
                            184,
                            "linear",
                            "${TextCopy}",
                            '-175px',
                            '305px'
                        ],
                        [
                            "eid13186",
                            "top",
                            2576,
                            0,
                            "linear",
                            "${TextCopy}",
                            '305px',
                            '305px'
                        ],
                        [
                            "eid13179",
                            "top",
                            2674,
                            198,
                            "linear",
                            "${TextCopy}",
                            '305px',
                            '-161px'
                        ],
                        [
                            "eid10922",
                            "top",
                            3679,
                            152,
                            "linear",
                            "${gin-low-arm-front}",
                            '531px',
                            '446px'
                        ],
                        [
                            "eid11166",
                            "top",
                            13915,
                            132,
                            "linear",
                            "${gin-low-arm-front}",
                            '446px',
                            '409px'
                        ],
                        [
                            "eid11321",
                            "top",
                            20153,
                            109,
                            "linear",
                            "${gin-low-arm-front}",
                            '409px',
                            '436px'
                        ],
                        [
                            "eid10404",
                            "top",
                            4602,
                            188,
                            "linear",
                            "${gin-smile-side}",
                            '120px',
                            '128px'
                        ],
                        [
                            "eid11108",
                            "top",
                            9766,
                            263,
                            "linear",
                            "${gin-smile-side}",
                            '128px',
                            '113px'
                        ],
                        [
                            "eid11297",
                            "top",
                            20116,
                            146,
                            "linear",
                            "${gin-smile-side}",
                            '113px',
                            '120px'
                        ],
                        [
                            "eid12177",
                            "top",
                            51733,
                            215,
                            "linear",
                            "${gin-smile-side}",
                            '120px',
                            '119px'
                        ],
                        [
                            "eid10939",
                            "left",
                            3782,
                            139,
                            "linear",
                            "${nath-hand-write}",
                            '852px',
                            '726px'
                        ],
                        [
                            "eid11227",
                            "left",
                            15115,
                            210,
                            "linear",
                            "${nath-hand-write}",
                            '726px',
                            '709px'
                        ],
                        [
                            "eid11403",
                            "left",
                            21944,
                            139,
                            "linear",
                            "${nath-hand-write}",
                            '709px',
                            '726px'
                        ],
                        [
                            "eid12246",
                            "left",
                            47777,
                            464,
                            "linear",
                            "${nath-hand-write}",
                            '726px',
                            '768px'
                        ],
                        [
                            "eid12254",
                            "left",
                            51948,
                            166,
                            "linear",
                            "${nath-hand-write}",
                            '768px',
                            '726px'
                        ],
                        [
                            "eid11299",
                            "top",
                            20116,
                            146,
                            "linear",
                            "${gin-sad1}",
                            '113px',
                            '120px'
                        ],
                        [
                            "eid12178",
                            "top",
                            51733,
                            215,
                            "linear",
                            "${gin-sad1}",
                            '120px',
                            '119px'
                        ],
                        [
                            "eid10919",
                            "left",
                            3679,
                            152,
                            "linear",
                            "${gin-hand-pencil}",
                            '451px',
                            '501px'
                        ],
                        [
                            "eid11163",
                            "left",
                            13915,
                            132,
                            "linear",
                            "${gin-hand-pencil}",
                            '501px',
                            '513px'
                        ],
                        [
                            "eid11318",
                            "left",
                            20153,
                            109,
                            "linear",
                            "${gin-hand-pencil}",
                            '513px',
                            '535px'
                        ],
                        [
                            "eid10980",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${intro-txt}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10979",
                            "opacity",
                            4942,
                            58,
                            "linear",
                            "${intro-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11045",
                            "opacity",
                            9250,
                            96,
                            "linear",
                            "${intro-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11410",
                            "opacity",
                            22335,
                            65,
                            "linear",
                            "${intro-txt}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11637",
                            "opacity",
                            29533,
                            65,
                            "linear",
                            "${intro-txt}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13123",
                            "display",
                            50228,
                            0,
                            "linear",
                            "${t9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13129",
                            "display",
                            50331,
                            0,
                            "linear",
                            "${t9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11170",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gin-sad1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11169",
                            "opacity",
                            14047,
                            151,
                            "linear",
                            "${gin-sad1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11379",
                            "opacity",
                            21807,
                            93,
                            "linear",
                            "${gin-sad1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12343",
                            "opacity",
                            54485,
                            0,
                            "linear",
                            "${gin-sad1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12364",
                            "opacity",
                            54900,
                            0,
                            "linear",
                            "${gin-sad1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11428",
                            "left",
                            22650,
                            214,
                            "linear",
                            "${balloon}",
                            '557px',
                            '572px'
                        ],
                        [
                            "eid11432",
                            "left",
                            22865,
                            1666,
                            "linear",
                            "${balloon}",
                            '572px',
                            '531px'
                        ],
                        [
                            "eid11454",
                            "left",
                            24531,
                            2666,
                            "linear",
                            "${balloon}",
                            '531px',
                            '575px'
                        ],
                        [
                            "eid11489",
                            "left",
                            27197,
                            215,
                            "linear",
                            "${balloon}",
                            '575px',
                            '557px'
                        ],
                        [
                            "eid11648",
                            "left",
                            30105,
                            214,
                            "linear",
                            "${balloon}",
                            '557px',
                            '599px'
                        ],
                        [
                            "eid11661",
                            "left",
                            30319,
                            2698,
                            "linear",
                            "${balloon}",
                            '599px',
                            '558px'
                        ],
                        [
                            "eid11663",
                            "left",
                            33017,
                            2744,
                            "linear",
                            "${balloon}",
                            '558px',
                            '599px'
                        ],
                        [
                            "eid11706",
                            "left",
                            35761,
                            214,
                            "linear",
                            "${balloon}",
                            '599px',
                            '557px'
                        ],
                        [
                            "eid11775",
                            "left",
                            36788,
                            214,
                            "linear",
                            "${balloon}",
                            '557px',
                            '599px'
                        ],
                        [
                            "eid11776",
                            "left",
                            37002,
                            2998,
                            "linear",
                            "${balloon}",
                            '599px',
                            '558px'
                        ],
                        [
                            "eid11777",
                            "left",
                            40000,
                            2744,
                            "linear",
                            "${balloon}",
                            '558px',
                            '599px'
                        ],
                        [
                            "eid11778",
                            "left",
                            42744,
                            214,
                            "linear",
                            "${balloon}",
                            '599px',
                            '557px'
                        ],
                        [
                            "eid11936",
                            "left",
                            47937,
                            214,
                            "linear",
                            "${balloon}",
                            '557px',
                            '599px'
                        ],
                        [
                            "eid11937",
                            "left",
                            48151,
                            999,
                            "linear",
                            "${balloon}",
                            '599px',
                            '589px'
                        ],
                        [
                            "eid11946",
                            "left",
                            49150,
                            214,
                            "linear",
                            "${balloon}",
                            '599px',
                            '557px'
                        ],
                        [
                            "eid10966",
                            "left",
                            3679,
                            310,
                            "linear",
                            "${notebook}",
                            '-215px',
                            '0px'
                        ],
                        [
                            "eid11064",
                            "skewY",
                            9086,
                            239,
                            "linear",
                            "${notebook-flip}",
                            '-84.36deg',
                            '0deg'
                        ],
                        [
                            "eid11426",
                            "height",
                            22650,
                            214,
                            "linear",
                            "${balloon}",
                            '114px',
                            '379px'
                        ],
                        [
                            "eid11461",
                            "height",
                            27197,
                            214,
                            "linear",
                            "${balloon}",
                            '379px',
                            '114px'
                        ],
                        [
                            "eid11644",
                            "height",
                            30105,
                            214,
                            "linear",
                            "${balloon}",
                            '114px',
                            '474px'
                        ],
                        [
                            "eid11704",
                            "height",
                            35761,
                            214,
                            "linear",
                            "${balloon}",
                            '474px',
                            '114px'
                        ],
                        [
                            "eid11771",
                            "height",
                            36788,
                            214,
                            "linear",
                            "${balloon}",
                            '114px',
                            '474px'
                        ],
                        [
                            "eid11772",
                            "height",
                            42744,
                            214,
                            "linear",
                            "${balloon}",
                            '474px',
                            '114px'
                        ],
                        [
                            "eid11932",
                            "height",
                            47937,
                            214,
                            "linear",
                            "${balloon}",
                            '114px',
                            '474px'
                        ],
                        [
                            "eid11944",
                            "height",
                            49150,
                            214,
                            "linear",
                            "${balloon}",
                            '474px',
                            '114px'
                        ],
                        [
                            "eid10917",
                            "rotateZ",
                            3679,
                            152,
                            "linear",
                            "${gin-hand-pencil}",
                            '78deg',
                            '-19deg'
                        ],
                        [
                            "eid11161",
                            "rotateZ",
                            13915,
                            132,
                            "linear",
                            "${gin-hand-pencil}",
                            '-19deg',
                            '-38deg'
                        ],
                        [
                            "eid11316",
                            "rotateZ",
                            20153,
                            109,
                            "linear",
                            "${gin-hand-pencil}",
                            '-38deg',
                            '-1deg'
                        ],
                        [
                            "eid10261",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${nath-body}",
                            '1112px',
                            '788px'
                        ],
                        [
                            "eid10318",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-up-arm-front}",
                            '-304px',
                            '406px'
                        ],
                        [
                            "eid11676",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11475",
                            "opacity",
                            25048,
                            102,
                            "linear",
                            "${Text5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11484",
                            "opacity",
                            27197,
                            90,
                            "linear",
                            "${Text5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12423",
                            "rotateZ",
                            54900,
                            133,
                            "linear",
                            "${RoundRect}",
                            '-37deg',
                            '0deg'
                        ],
                        [
                            "eid13073",
                            "rotateZ",
                            64783,
                            133,
                            "linear",
                            "${RoundRect}",
                            '0deg',
                            '-37deg'
                        ],
                        [
                            "eid11085",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${circle-drawn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10981",
                            "opacity",
                            5195,
                            115,
                            "linear",
                            "${circle-drawn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11047",
                            "opacity",
                            9250,
                            96,
                            "linear",
                            "${circle-drawn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11411",
                            "opacity",
                            22335,
                            65,
                            "linear",
                            "${circle-drawn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11639",
                            "opacity",
                            29533,
                            65,
                            "linear",
                            "${circle-drawn}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11416",
                            "top",
                            22276,
                            59,
                            "linear",
                            "${circle-drawn}",
                            '90px',
                            '26px'
                        ],
                        [
                            "eid11638",
                            "top",
                            29598,
                            59,
                            "linear",
                            "${circle-drawn}",
                            '26px',
                            '90px'
                        ],
                        [
                            "eid10321",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-blink2}",
                            '-317px',
                            '393px'
                        ],
                        [
                            "eid10409",
                            "left",
                            4602,
                            188,
                            "linear",
                            "${gin-blink2}",
                            '393px',
                            '412px'
                        ],
                        [
                            "eid11113",
                            "left",
                            9766,
                            263,
                            "linear",
                            "${gin-blink2}",
                            '412px',
                            '386px'
                        ],
                        [
                            "eid11292",
                            "left",
                            20116,
                            146,
                            "linear",
                            "${gin-blink2}",
                            '386px',
                            '413px'
                        ],
                        [
                            "eid12169",
                            "left",
                            51733,
                            215,
                            "linear",
                            "${gin-blink2}",
                            '413px',
                            '389px'
                        ],
                        [
                            "eid12273",
                            "display",
                            0,
                            0,
                            "linear",
                            "${beginning-final}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12272",
                            "display",
                            52515,
                            0,
                            "linear",
                            "${beginning-final}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13173",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13175",
                            "display",
                            64783,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12314",
                            "height",
                            54098,
                            220,
                            "linear",
                            "${spark1}",
                            '117px',
                            '401px'
                        ],
                        [
                            "eid10323",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-smile-side}",
                            '-317px',
                            '393px'
                        ],
                        [
                            "eid10403",
                            "left",
                            4602,
                            188,
                            "linear",
                            "${gin-smile-side}",
                            '393px',
                            '412px'
                        ],
                        [
                            "eid11110",
                            "left",
                            9766,
                            263,
                            "linear",
                            "${gin-smile-side}",
                            '412px',
                            '386px'
                        ],
                        [
                            "eid11296",
                            "left",
                            20116,
                            146,
                            "linear",
                            "${gin-smile-side}",
                            '386px',
                            '413px'
                        ],
                        [
                            "eid12171",
                            "left",
                            51733,
                            215,
                            "linear",
                            "${gin-smile-side}",
                            '413px',
                            '389px'
                        ],
                        [
                            "eid11678",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${balloon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11459",
                            "opacity",
                            22650,
                            159,
                            "linear",
                            "${balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11462",
                            "opacity",
                            27253,
                            159,
                            "linear",
                            "${balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11646",
                            "opacity",
                            30105,
                            159,
                            "linear",
                            "${balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11705",
                            "opacity",
                            35816,
                            159,
                            "linear",
                            "${balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11773",
                            "opacity",
                            36788,
                            159,
                            "linear",
                            "${balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11774",
                            "opacity",
                            42799,
                            159,
                            "linear",
                            "${balloon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11934",
                            "opacity",
                            47937,
                            159,
                            "linear",
                            "${balloon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11945",
                            "opacity",
                            49205,
                            159,
                            "linear",
                            "${balloon}",
                            '1',
                            '0'
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
                            "eid10943",
                            "opacity",
                            4114,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10944",
                            "opacity",
                            4296,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10945",
                            "opacity",
                            4537,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10946",
                            "opacity",
                            4729,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10947",
                            "opacity",
                            4888,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10948",
                            "opacity",
                            5130,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10949",
                            "opacity",
                            5281,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10950",
                            "opacity",
                            5463,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10951",
                            "opacity",
                            5704,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10952",
                            "opacity",
                            5896,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10953",
                            "opacity",
                            6055,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10954",
                            "opacity",
                            6297,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11000",
                            "opacity",
                            6618,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11001",
                            "opacity",
                            6769,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11002",
                            "opacity",
                            6951,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11003",
                            "opacity",
                            7192,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11004",
                            "opacity",
                            7384,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11005",
                            "opacity",
                            7543,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11006",
                            "opacity",
                            7785,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11009",
                            "opacity",
                            8126,
                            99,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11010",
                            "opacity",
                            8277,
                            115,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11011",
                            "opacity",
                            8459,
                            102,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11012",
                            "opacity",
                            8700,
                            192,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11013",
                            "opacity",
                            8892,
                            159,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11014",
                            "opacity",
                            9051,
                            103,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11017",
                            "opacity",
                            9154,
                            96,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12191",
                            "opacity",
                            36287,
                            113,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12192",
                            "opacity",
                            43096,
                            113,
                            "linear",
                            "${nath-speak-side}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12337",
                            "opacity",
                            54485,
                            0,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12358",
                            "opacity",
                            54900,
                            0,
                            "linear",
                            "${nath-speak-side}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11656",
                            "rotateZ",
                            30105,
                            214,
                            "linear",
                            "${balloon}",
                            '70deg',
                            '90deg'
                        ],
                        [
                            "eid11703",
                            "rotateZ",
                            35761,
                            214,
                            "linear",
                            "${balloon}",
                            '90deg',
                            '70deg'
                        ],
                        [
                            "eid11769",
                            "rotateZ",
                            36788,
                            214,
                            "linear",
                            "${balloon}",
                            '70deg',
                            '90deg'
                        ],
                        [
                            "eid11770",
                            "rotateZ",
                            42744,
                            214,
                            "linear",
                            "${balloon}",
                            '90deg',
                            '70deg'
                        ],
                        [
                            "eid11930",
                            "rotateZ",
                            47937,
                            214,
                            "linear",
                            "${balloon}",
                            '70deg',
                            '90deg'
                        ],
                        [
                            "eid11943",
                            "rotateZ",
                            49150,
                            214,
                            "linear",
                            "${balloon}",
                            '90deg',
                            '70deg'
                        ],
                        [
                            "eid10397",
                            "rotateZ",
                            4602,
                            188,
                            "linear",
                            "${gin-smile-side}",
                            '11deg',
                            '21deg'
                        ],
                        [
                            "eid11111",
                            "rotateZ",
                            9766,
                            263,
                            "linear",
                            "${gin-smile-side}",
                            '21deg',
                            '1deg'
                        ],
                        [
                            "eid11288",
                            "rotateZ",
                            20116,
                            146,
                            "linear",
                            "${gin-smile-side}",
                            '1deg',
                            '26deg'
                        ],
                        [
                            "eid12165",
                            "rotateZ",
                            51733,
                            215,
                            "linear",
                            "${gin-smile-side}",
                            '26deg',
                            '3deg'
                        ],
                        [
                            "eid13132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${play-btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13133",
                            "display",
                            53900,
                            0,
                            "linear",
                            "${play-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13134",
                            "display",
                            54534,
                            0,
                            "linear",
                            "${play-btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13146",
                            "display",
                            65361,
                            0,
                            "linear",
                            "${play-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13125",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13122",
                            "display",
                            50228,
                            0,
                            "linear",
                            "${t7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13128",
                            "display",
                            50331,
                            0,
                            "linear",
                            "${t7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13199",
                            "skewX",
                            65524,
                            87,
                            "linear",
                            "${Text6}",
                            '-12.65deg',
                            '0deg'
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
                            2733,
                            139,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13144",
                            "display",
                            65361,
                            0,
                            "linear",
                            "${mainmenu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6741",
                            "top",
                            316,
                            184,
                            "linear",
                            "${Text}",
                            '-175px',
                            '226px'
                        ],
                        [
                            "eid6744",
                            "top",
                            2576,
                            98,
                            "linear",
                            "${Text}",
                            '226px',
                            '305px'
                        ],
                        [
                            "eid6746",
                            "top",
                            2674,
                            198,
                            "linear",
                            "${Text}",
                            '305px',
                            '-161px'
                        ],
                        [
                            "eid10963",
                            "height",
                            3679,
                            310,
                            "linear",
                            "${notebook}",
                            '261px',
                            '544px'
                        ],
                        [
                            "eid13097",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13100",
                            "display",
                            28329,
                            0,
                            "linear",
                            "${t1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13105",
                            "display",
                            28394,
                            0,
                            "linear",
                            "${t1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11082",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${arrow-drawn}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid10982",
                            "opacity",
                            5642,
                            58,
                            "linear",
                            "${arrow-drawn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11048",
                            "opacity",
                            9250,
                            96,
                            "linear",
                            "${arrow-drawn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13124",
                            "display",
                            50228,
                            0,
                            "linear",
                            "${t8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13130",
                            "display",
                            50331,
                            0,
                            "linear",
                            "${t8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11181",
                            "height",
                            14300,
                            292,
                            "linear",
                            "${sweat2}",
                            '66px',
                            '128px'
                        ],
                        [
                            "eid11192",
                            "height",
                            14714,
                            292,
                            "linear",
                            "${sweat2}",
                            '66px',
                            '128px'
                        ],
                        [
                            "eid11198",
                            "height",
                            15114,
                            292,
                            "linear",
                            "${sweat2}",
                            '66px',
                            '128px'
                        ],
                        [
                            "eid11235",
                            "height",
                            19942,
                            292,
                            "linear",
                            "${sweat2}",
                            '66px',
                            '128px'
                        ],
                        [
                            "eid11236",
                            "height",
                            20356,
                            292,
                            "linear",
                            "${sweat2}",
                            '66px',
                            '128px'
                        ],
                        [
                            "eid11237",
                            "height",
                            20756,
                            292,
                            "linear",
                            "${sweat2}",
                            '66px',
                            '128px'
                        ],
                        [
                            "eid10402",
                            "top",
                            4602,
                            188,
                            "linear",
                            "${gin-blink1}",
                            '120px',
                            '128px'
                        ],
                        [
                            "eid11103",
                            "top",
                            9766,
                            263,
                            "linear",
                            "${gin-blink1}",
                            '128px',
                            '113px'
                        ],
                        [
                            "eid11295",
                            "top",
                            20116,
                            146,
                            "linear",
                            "${gin-blink1}",
                            '113px',
                            '120px'
                        ],
                        [
                            "eid12176",
                            "top",
                            51733,
                            215,
                            "linear",
                            "${gin-blink1}",
                            '120px',
                            '119px'
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
                            3233,
                            114,
                            "linear",
                            "${nath-low-arm-front}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12402",
                            "opacity",
                            54485,
                            415,
                            "linear",
                            "${nath-low-arm-front}",
                            '1',
                            '0'
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
                            3233,
                            0,
                            "linear",
                            "${chairs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12331",
                            "display",
                            54534,
                            0,
                            "linear",
                            "${chairs}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10319",
                            "left",
                            3233,
                            395,
                            "linear",
                            "${gin-speak-side}",
                            '-317px',
                            '393px'
                        ],
                        [
                            "eid10407",
                            "left",
                            4602,
                            188,
                            "linear",
                            "${gin-speak-side}",
                            '393px',
                            '412px'
                        ],
                        [
                            "eid11101",
                            "left",
                            9766,
                            263,
                            "linear",
                            "${gin-speak-side}",
                            '412px',
                            '386px'
                        ],
                        [
                            "eid11302",
                            "left",
                            20116,
                            146,
                            "linear",
                            "${gin-speak-side}",
                            '386px',
                            '413px'
                        ],
                        [
                            "eid12174",
                            "left",
                            51733,
                            215,
                            "linear",
                            "${gin-speak-side}",
                            '413px',
                            '389px'
                        ],
                        [
                            "eid11443",
                            "top",
                            22809,
                            55,
                            "linear",
                            "${Text4}",
                            '83px',
                            '66px'
                        ],
                        [
                            "eid11447",
                            "top",
                            22864,
                            1667,
                            "linear",
                            "${Text4}",
                            '66px',
                            '77px'
                        ],
                        [
                            "eid11453",
                            "top",
                            24531,
                            2666,
                            "linear",
                            "${Text4}",
                            '77px',
                            '69px'
                        ],
                        [
                            "eid11468",
                            "top",
                            27197,
                            90,
                            "linear",
                            "${Text4}",
                            '69px',
                            '109px'
                        ],
                            [ "eid10238", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${chairs}', [] ] ],
                            [ "eid12625", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${bc}', [] ] ],
                            [ "eid11853", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Main-choices}', [] ] ],
                            [ "eid13028", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${eb}', [] ] ],
                            [ "eid11547", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Intro-choices}', [] ] ],
                            [ "eid12549", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${bb}', [] ] ],
                            [ "eid12787", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${mc}', [] ] ],
                            [ "eid12888", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${ea}', [] ] ],
                            [ "eid12285", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${end-final}', [] ] ],
                            [ "eid12276", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${beginning-final}', [] ] ],
                            [ "eid12747", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${mb}', [] ] ],
                            [ "eid12051", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${end-answer}', [] ] ],
                            [ "eid12703", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${ma}', [] ] ],
                            [ "eid11894", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${main-answer}', [] ] ],
                            [ "eid12277", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Middle-final}', [] ] ],
                            [ "eid13069", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${ec}', [] ] ],
                            [ "eid12007", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${end-choices}', [] ] ],
                            [ "eid11634", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${intro-answer}', [] ] ],
                            [ "eid12506", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${ba}', [] ] ],
                            [ "eid10239", "trigger", 3233, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${chairs}', [] ] ],
                            [ "eid11548", "trigger", 27412, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Intro-choices}', [] ] ],
                            [ "eid13094", "trigger", 28329, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Intro-choices}', [] ] ],
                            [ "eid13102", "trigger", 29500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${intro-answer}', [] ] ],
                            [ "eid11854", "trigger", 44958, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Main-choices}', [] ] ],
                            [ "eid13107", "trigger", 45814, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Main-choices}', [] ] ],
                            [ "eid11895", "trigger", 46900, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${main-answer}', [] ] ],
                            [ "eid12008", "trigger", 49288, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${end-choices}', [] ] ],
                            [ "eid13121", "trigger", 50228, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${end-choices}', [] ] ],
                            [ "eid12052", "trigger", 51233, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${end-answer}', [] ] ],
                            [ "eid12278", "trigger", 52515, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${beginning-final}', [] ] ],
                            [ "eid12286", "trigger", 52515, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${intro-answer}', [] ] ],
                            [ "eid12287", "trigger", 52900, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${main-answer}', [] ] ],
                            [ "eid12279", "trigger", 52900, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Middle-final}', [] ] ],
                            [ "eid12289", "trigger", 53400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${end-answer}', [] ] ],
                            [ "eid12288", "trigger", 53400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${end-final}', [] ] ],
                            [ "eid12408", "trigger", 54534, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${chairs}', [] ] ]
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
                            id: 'chairCopy',
                            rect: ['-44px', '1px', '263px', '258px', 'auto', 'auto'],
                            transform: [[], [], [], ['-1', '1.00696']],
                            fill: ['rgba(0,0,0,0)', 'images/chair.png', '0px', '0px']
                        },
                        {
                            rect: ['1116px', '1px', '263px', '258px', 'auto', 'auto'],
                            id: 'chair',
                            type: 'image',
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
                            '852px'
                        ],
                        [
                            "eid10245",
                            "left",
                            0,
                            395,
                            "linear",
                            "${chairCopy}",
                            '-366px',
                            '366px'
                        ]
                    ]
                }
            },
            "Intro-choices": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['38px', '29px', '201px', '56px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['38px', '138px', '316px', '82px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['231px', '110px', '123px', '57px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['38px', '278px', '249px', '56px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['144px', '250px', '210px', '57px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['196px', '1px', '151px', '57px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Ask a question (Why on earth did I agree to help Tom? Now I’m in trouble.)',
                            id: 'Text6',
                            opacity: '0',
                            align: 'left',
                            rect: ['43px', '1px', '311px', '82px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'A sense of danger (The entire sky had turned black. I knew I needed to get home now or I would be caught in the rain.)',
                            id: 'Text6Copy',
                            opacity: '0',
                            align: 'left',
                            rect: ['43px', '111px', '311px', '115px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'A mystery (I woke up in the middle of my garden and I had no idea how I got there.)',
                            id: 'Text6Copy2',
                            opacity: '0',
                            align: 'left',
                            rect: ['43px', '249px', '311px', '91px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '2px', '29px', '27px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2',
                            stroke: [5, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,0.00)']
                        },
                        {
                            rect: ['0px', '111px', '29px', '27px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy',
                            stroke: [5, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,0.00)']
                        },
                        {
                            rect: ['0px', '245px', '29px', '27px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy2',
                            stroke: [5, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'right-select',
                            opacity: '0',
                            rect: ['0px', '0px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'right-selectCopy',
                            opacity: '0',
                            rect: ['0px', '110px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'right-selectCopy2',
                            opacity: '0',
                            rect: ['0px', '244px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '354px', '358px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "a1": 950,
                        "a2": 1250,
                        "a3": 1552
                    },
                    data: [
                        [
                            "eid11517",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11572",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11533",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11526",
                            "opacity",
                            500,
                            119,
                            "linear",
                            "${Rectangle2Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11573",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11532",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11529",
                            "opacity",
                            697,
                            119,
                            "linear",
                            "${Rectangle2Copy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11578",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11534",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11527",
                            "opacity",
                            500,
                            119,
                            "linear",
                            "${Rectangle2Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11570",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11546",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-select}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11538",
                            "opacity",
                            950,
                            50,
                            "linear",
                            "${right-select}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11539",
                            "opacity",
                            1113,
                            50,
                            "linear",
                            "${right-select}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11530",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11525",
                            "opacity",
                            317,
                            119,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11577",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11535",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11524",
                            "opacity",
                            317,
                            119,
                            "linear",
                            "${Rectangle2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11575",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11544",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-selectCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11542",
                            "opacity",
                            1552,
                            50,
                            "linear",
                            "${right-selectCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11543",
                            "opacity",
                            1715,
                            50,
                            "linear",
                            "${right-selectCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13162",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${Text6Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13163",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Text6Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11545",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-selectCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11540",
                            "opacity",
                            1250,
                            50,
                            "linear",
                            "${right-selectCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11541",
                            "opacity",
                            1413,
                            50,
                            "linear",
                            "${right-selectCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11531",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11528",
                            "opacity",
                            697,
                            119,
                            "linear",
                            "${Rectangle2Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11571",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13160",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${Text6Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13161",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Text6Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11515",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11576",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${RoundRect2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11514",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11574",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11516",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11569",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "intro-answer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-272px', '-279px', '219px', '177px', 'auto', 'auto'],
                            id: 'stickynote',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            opacity: '0',
                            rect: ['-253px', '-242px', '183px', '78px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'class-a1',
                            id: 'a',
                            text: 'Why on earth did I agree to help Tom? Now I’m in trouble.'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            opacity: '0',
                            rect: ['-254px', '-242px', '183px', '125px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'class-a1',
                            id: 'b',
                            text: 'The entire sky had turned black. I knew I needed to get home now or be caught in the rain.'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            opacity: '0',
                            rect: ['-253px', '-242px', '183px', '98px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'class-a1',
                            id: 'c',
                            text: 'I woke up in the middle of my garden and I had no idea how I got there.'
                        },
                        {
                            rect: ['-282px', '-1px', '165px', '29px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text8',
                            text: 'Beginning',
                            opacity: '0',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '219px', '177px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid11623",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${b}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11632",
                            "opacity",
                            71,
                            52,
                            "linear",
                            "${b}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11599",
                            "left",
                            203,
                            297,
                            "linear",
                            "${stickynote}",
                            '-272px',
                            '0px'
                        ],
                        [
                            "eid11598",
                            "top",
                            203,
                            297,
                            "linear",
                            "${a}",
                            '-242px',
                            '37px'
                        ],
                        [
                            "eid11612",
                            "opacity",
                            0,
                            123,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11617",
                            "left",
                            203,
                            297,
                            "linear",
                            "${Text8}",
                            '-282px',
                            '-10px'
                        ],
                        [
                            "eid11600",
                            "top",
                            203,
                            297,
                            "linear",
                            "${stickynote}",
                            '-279px',
                            '0px'
                        ],
                        [
                            "eid11604",
                            "top",
                            203,
                            297,
                            "linear",
                            "${c}",
                            '-242px',
                            '37px'
                        ],
                        [
                            "eid11603",
                            "left",
                            203,
                            297,
                            "linear",
                            "${c}",
                            '-253px',
                            '19px'
                        ],
                        [
                            "eid11624",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${c}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11633",
                            "opacity",
                            71,
                            52,
                            "linear",
                            "${c}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11597",
                            "left",
                            203,
                            297,
                            "linear",
                            "${a}",
                            '-253px',
                            '19px'
                        ],
                        [
                            "eid11618",
                            "top",
                            203,
                            297,
                            "linear",
                            "${Text8}",
                            '-282px',
                            '-1px'
                        ],
                        [
                            "eid11601",
                            "left",
                            203,
                            297,
                            "linear",
                            "${b}",
                            '-254px',
                            '18px'
                        ],
                        [
                            "eid11622",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${a}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11631",
                            "opacity",
                            71,
                            52,
                            "linear",
                            "${a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11602",
                            "top",
                            203,
                            297,
                            "linear",
                            "${b}",
                            '-242px',
                            '37px'
                        ],
                        [
                            "eid11608",
                            "opacity",
                            0,
                            123,
                            "linear",
                            "${stickynote}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Main-choices": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['38px', '29px', '307px', '72px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy11',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['38px', '177px', '307px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy10',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['264px', '154px', '81px', '57px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy9',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['38px', '303px', '249px', '75px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy8',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['196px', '278px', '153px', '57px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy7',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['264px', '1px', '81px', '57px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2Copy6',
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            opacity: '0',
                            id: 'Text6',
                            text: 'Maybe some suspense (I turned around, and nearly leapt out of my skin. What was that big shadow?)<br><br>Or a way to make them feel happy for my character (I looked down and found a gold coin. Maybe I could finally eat.)<br><br>Or to make them feel protective of my character. (I have had enough. I don’t want to be bullied anymore. I want to show <br>them that I am brave.)',
                            align: 'left',
                            rect: ['43px', '2px', '311px', '380px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '2px', '29px', '27px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy5',
                            stroke: [5, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,0.00)']
                        },
                        {
                            rect: ['0px', '130px', '29px', '27px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy4',
                            stroke: [5, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,0.00)']
                        },
                        {
                            rect: ['0px', '255px', '29px', '27px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy3',
                            stroke: [5, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(153,194,255,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'right-selectCopy5',
                            opacity: '0',
                            rect: ['0px', '0px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'right-selectCopy4',
                            opacity: '0',
                            rect: ['0px', '128px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'right-selectCopy3',
                            opacity: '0',
                            rect: ['0px', '254px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '354px', '358px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "a1": 950,
                        "a2": 1250,
                        "a3": 1552
                    },
                    data: [
                        [
                            "eid11822",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-selectCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11823",
                            "opacity",
                            950,
                            50,
                            "linear",
                            "${right-selectCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11824",
                            "opacity",
                            1113,
                            50,
                            "linear",
                            "${right-selectCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11819",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-selectCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11820",
                            "opacity",
                            1250,
                            50,
                            "linear",
                            "${right-selectCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11821",
                            "opacity",
                            1413,
                            50,
                            "linear",
                            "${right-selectCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11833",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11834",
                            "opacity",
                            317,
                            119,
                            "linear",
                            "${Rectangle2Copy6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11835",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11816",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-selectCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11817",
                            "opacity",
                            1552,
                            50,
                            "linear",
                            "${right-selectCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11818",
                            "opacity",
                            1715,
                            50,
                            "linear",
                            "${right-selectCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11827",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect2Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11828",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${RoundRect2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11848",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy11}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11849",
                            "opacity",
                            317,
                            119,
                            "linear",
                            "${Rectangle2Copy11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11850",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11831",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${Text6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11832",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11829",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect2Copy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11830",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${RoundRect2Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11845",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy10}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11846",
                            "opacity",
                            500,
                            119,
                            "linear",
                            "${Rectangle2Copy10}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11847",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11842",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11843",
                            "opacity",
                            500,
                            119,
                            "linear",
                            "${Rectangle2Copy9}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11844",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11825",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect2Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11826",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${RoundRect2Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11839",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11840",
                            "opacity",
                            697,
                            119,
                            "linear",
                            "${Rectangle2Copy8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11841",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11836",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy7}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11837",
                            "opacity",
                            697,
                            119,
                            "linear",
                            "${Rectangle2Copy7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11838",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy7}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "main-answer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['394px', '417px', '219px', '177px', 'auto', 'auto'],
                            id: 'stickynoteCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            opacity: '0',
                            rect: ['413px', '462px', '183px', '98px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'class-a2',
                            id: 'a',
                            text: 'I turned around, and nearly leapt out of my skin. What was that big shadow?'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            opacity: '0',
                            rect: ['422px', '731px', '183px', '98px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'class-a2',
                            id: 'b',
                            text: 'I looked down and found a gold coin. Maybe I could <br>finally eat.'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            opacity: '0',
                            rect: ['423px', '726px', '183px', '121px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'class-a2',
                            id: 'c',
                            text: 'I have had enough. I don’t want to be bullied anymore. I want to show them that I am brave.'
                        },
                        {
                            rect: ['878px', '691px', '96px', '29px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text8',
                            text: 'Middle ',
                            opacity: '0',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1094px', '868px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid11863",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${b}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11864",
                            "opacity",
                            71,
                            52,
                            "linear",
                            "${b}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11877",
                            "top",
                            203,
                            297,
                            "linear",
                            "${stickynoteCopy}",
                            '417px',
                            '691px'
                        ],
                        [
                            "eid11857",
                            "left",
                            203,
                            297,
                            "linear",
                            "${Text8}",
                            '398px',
                            '878px'
                        ],
                        [
                            "eid11856",
                            "opacity",
                            0,
                            123,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12093",
                            "top",
                            203,
                            297,
                            "linear",
                            "${a}",
                            '462px',
                            '731px'
                        ],
                        [
                            "eid11876",
                            "left",
                            203,
                            297,
                            "linear",
                            "${stickynoteCopy}",
                            '394px',
                            '875px'
                        ],
                        [
                            "eid11905",
                            "top",
                            203,
                            297,
                            "linear",
                            "${c}",
                            '456px',
                            '726px'
                        ],
                        [
                            "eid11904",
                            "left",
                            203,
                            297,
                            "linear",
                            "${c}",
                            '412px',
                            '894px'
                        ],
                        [
                            "eid11859",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${c}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11860",
                            "opacity",
                            71,
                            52,
                            "linear",
                            "${c}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11908",
                            "left",
                            203,
                            297,
                            "linear",
                            "${b}",
                            '413px',
                            '893px'
                        ],
                        [
                            "eid12086",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${a}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12089",
                            "opacity",
                            71,
                            52,
                            "linear",
                            "${a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12071",
                            "opacity",
                            0,
                            123,
                            "linear",
                            "${stickynoteCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11855",
                            "top",
                            203,
                            297,
                            "linear",
                            "${Text8}",
                            '416px',
                            '691px'
                        ],
                        [
                            "eid11909",
                            "top",
                            203,
                            297,
                            "linear",
                            "${b}",
                            '456px',
                            '731px'
                        ],
                        [
                            "eid12092",
                            "left",
                            203,
                            297,
                            "linear",
                            "${a}",
                            '413px',
                            '893px'
                        ]
                    ]
                }
            },
            "end-choices": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['168px', '3px', '177px', '72px', 'auto', 'auto'],
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            id: 'Rectangle2Copy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['38px', '26px', '307px', '72px', 'auto', 'auto'],
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            id: 'Rectangle2Copy17',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['38px', '142px', '307px', '140px', 'auto', 'auto'],
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            id: 'Rectangle2Copy16',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['156px', '118px', '189px', '57px', 'auto', 'auto'],
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            id: 'Rectangle2Copy15',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['38px', '327px', '312px', '66px', 'auto', 'auto'],
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            id: 'Rectangle2Copy14',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            rect: ['201px', '299px', '149px', '57px', 'auto', 'auto'],
                            stroke: [0, 'rgb(31, 227, 255)', 'none'],
                            id: 'Rectangle2Copy13',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(153,194,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text6Copy',
                            opacity: '0',
                            text: 'Closed ending (I made my way to the store and tried to buy food, but the shop was closed. I went hungry that night.)',
                            rect: ['43px', '2px', '302px', '96px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text6Copy3',
                            opacity: '0',
                            text: 'Open ending (I stormed into the house and announced that the world was coming to an end. The people in front of me were not my parents. They laughed eerily as they came towards me and everything went black.) ',
                            rect: ['43px', '119px', '302px', '158px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text6Copy4',
                            opacity: '0',
                            text: 'Ending with a twist (I saw Tom in the distance. He walked closer to me and said he was sorry. <br>I never saw this coming.)',
                            rect: ['43px', '301px', '302px', '104px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '2px', '29px', '27px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [5, 'rgba(0,0,0,1.00)', 'solid'],
                            id: 'RoundRect2Copy8',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(153,194,255,0.00)']
                        },
                        {
                            rect: ['0px', '118px', '29px', '27px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [5, 'rgba(0,0,0,1.00)', 'solid'],
                            id: 'RoundRect2Copy7',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(153,194,255,0.00)']
                        },
                        {
                            rect: ['0px', '300px', '29px', '27px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [5, 'rgba(0,0,0,1.00)', 'solid'],
                            id: 'RoundRect2Copy6',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(153,194,255,0.00)']
                        },
                        {
                            rect: ['0px', '0px', '39px', '39px', 'auto', 'auto'],
                            id: 'right-selectCopy8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '118px', '39px', '39px', 'auto', 'auto'],
                            id: 'right-selectCopy7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '299px', '39px', '39px', 'auto', 'auto'],
                            id: 'right-selectCopy6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right-select.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '354px', '382px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "a1": 950,
                        "a2": 1250,
                        "a3": 1552
                    },
                    data: [
                        [
                            "eid11981",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect2Copy7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11982",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${RoundRect2Copy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11999",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy16}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12000",
                            "opacity",
                            500,
                            119,
                            "linear",
                            "${Rectangle2Copy16}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12001",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11996",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy15}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11997",
                            "opacity",
                            500,
                            119,
                            "linear",
                            "${Rectangle2Copy15}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11998",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11976",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-selectCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11977",
                            "opacity",
                            950,
                            50,
                            "linear",
                            "${right-selectCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11978",
                            "opacity",
                            1113,
                            50,
                            "linear",
                            "${right-selectCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13166",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${Text6Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13167",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Text6Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12002",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy17}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12003",
                            "opacity",
                            317,
                            119,
                            "linear",
                            "${Rectangle2Copy17}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12004",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13170",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13171",
                            "opacity",
                            317,
                            119,
                            "linear",
                            "${Rectangle2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13172",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11973",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-selectCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11974",
                            "opacity",
                            1250,
                            50,
                            "linear",
                            "${right-selectCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11975",
                            "opacity",
                            1413,
                            50,
                            "linear",
                            "${right-selectCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11985",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${Text6Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11986",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Text6Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11970",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${right-selectCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11971",
                            "opacity",
                            1552,
                            50,
                            "linear",
                            "${right-selectCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11972",
                            "opacity",
                            1715,
                            50,
                            "linear",
                            "${right-selectCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11983",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect2Copy8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11984",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${RoundRect2Copy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13168",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${Text6Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13169",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Text6Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11993",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy14}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11994",
                            "opacity",
                            697,
                            119,
                            "linear",
                            "${Rectangle2Copy14}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11995",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11979",
                            "opacity",
                            0,
                            79,
                            "linear",
                            "${RoundRect2Copy6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11980",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${RoundRect2Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11990",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy13}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11991",
                            "opacity",
                            697,
                            119,
                            "linear",
                            "${Rectangle2Copy13}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11992",
                            "opacity",
                            1853,
                            147,
                            "linear",
                            "${Rectangle2Copy13}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "end-answer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-284px', '-278px', '219px', '177px', 'auto', 'auto'],
                            id: 'stickynoteCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stickynote.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            opacity: '0',
                            rect: ['426px', '-241px', '183px', '121px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'class-a3',
                            id: 'a',
                            text: 'I made my way to the store and tried to buy food, but the shop was closed. I went hungry that night'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            opacity: '0',
                            rect: ['-267px', '-242px', '184px', '122px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'class-a3',
                            id: 'b',
                            text: 'I stormed into the house and announced that the world was coming to an end. The people in front of me were not my parents. They laughed eerily as they came towards me and everything went black.'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            opacity: '0',
                            rect: ['25px', '36px', '183px', '121px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'class-a3',
                            id: 'c',
                            text: 'I saw Tom in the distance. He walked closer to me and said he was sorry. I never saw this coming.'
                        },
                        {
                            rect: ['412px', '0px', '65px', '29px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text8Copy',
                            text: 'End',
                            opacity: '0',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '627px', '177px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid12017",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${b}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12018",
                            "opacity",
                            71,
                            52,
                            "linear",
                            "${b}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12010",
                            "opacity",
                            0,
                            123,
                            "linear",
                            "${Text8Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12061",
                            "left",
                            203,
                            297,
                            "linear",
                            "${a}",
                            '-266px',
                            '426px'
                        ],
                        [
                            "eid12066",
                            "opacity",
                            0,
                            123,
                            "linear",
                            "${stickynoteCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12011",
                            "left",
                            203,
                            297,
                            "linear",
                            "${Text8Copy}",
                            '-278px',
                            '412px'
                        ],
                        [
                            "eid12032",
                            "top",
                            203,
                            297,
                            "linear",
                            "${stickynoteCopy2}",
                            '-278px',
                            '0px'
                        ],
                        [
                            "eid12050",
                            "top",
                            203,
                            297,
                            "linear",
                            "${c}",
                            '-236px',
                            '36px'
                        ],
                        [
                            "eid12049",
                            "left",
                            203,
                            297,
                            "linear",
                            "${c}",
                            '-266px',
                            '426px'
                        ],
                        [
                            "eid12013",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${c}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12014",
                            "opacity",
                            71,
                            52,
                            "linear",
                            "${c}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12031",
                            "left",
                            203,
                            297,
                            "linear",
                            "${stickynoteCopy2}",
                            '-284px',
                            '408px'
                        ],
                        [
                            "eid12021",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${a}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12022",
                            "opacity",
                            71,
                            52,
                            "linear",
                            "${a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12047",
                            "left",
                            203,
                            297,
                            "linear",
                            "${b}",
                            '-267px',
                            '427px'
                        ],
                        [
                            "eid12062",
                            "top",
                            203,
                            297,
                            "linear",
                            "${a}",
                            '-241px',
                            '38px'
                        ],
                        [
                            "eid12048",
                            "top",
                            203,
                            297,
                            "linear",
                            "${b}",
                            '-242px',
                            '36px'
                        ],
                        [
                            "eid12009",
                            "top",
                            203,
                            297,
                            "linear",
                            "${Text8Copy}",
                            '-277px',
                            '0px'
                        ]
                    ]
                }
            },
            "beginning-final": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'left',
                            text: 'Why on earth did I agree to help Tom? Now I’m in trouble.',
                            rect: ['0px', '0px', '341px', '83px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'finalclass',
                            id: 'a'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: 'The entire sky had turned black. I knew I needed to get home now or be caught in the rain.',
                            rect: ['0px', '0px', '341px', '105px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'finalclass',
                            id: 'b'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: 'I woke up in the middle of my garden and I had no idea how I got there.',
                            rect: ['0px', '0px', '341px', '105px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            userClass: 'finalclass',
                            id: 'c'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '341px', '75px']
                        }
                    }
                },
                timeline: {
                    duration: 54,
                    autoPlay: true,
                    data: [
                        [
                            "eid13135",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13137",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13136",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Middle-final": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '-45px', '331px', '88px', 'auto', 'auto'],
                            align: 'left',
                            id: 'a',
                            text: 'I turned around, and nearly leapt out of my skin. What was that big shadow?',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '-45px', '331px', '64px', 'auto', 'auto'],
                            align: 'left',
                            id: 'b',
                            text: 'I looked down and found a gold coin. Maybe I could finally eat.',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '-45px', '331px', '88px', 'auto', 'auto'],
                            align: 'left',
                            id: 'c',
                            text: 'I have had enough. I don’t want to be bullied anymore. I want to show them that I am brave.',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '331px', '117px']
                        }
                    }
                },
                timeline: {
                    duration: 67,
                    autoPlay: true,
                    data: [
                        [
                            "eid13140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13139",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13138",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "end-final": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '0px', '312px', '157px', 'auto', 'auto'],
                            align: 'left',
                            id: 'a',
                            text: 'I made my way to the store and tried to buy food, but the shop was closed. I went hungry that night.',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '0px', '312px', '157px', 'auto', 'auto'],
                            align: 'left',
                            id: 'c',
                            text: 'I saw Tom in the distance. He walked closer to me and said he was sorry. I never saw this coming.',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '0px', '312px', '193px', 'auto', 'auto'],
                            align: 'left',
                            id: 'b',
                            text: 'I stormed into the house and announced that the world was coming to an end. The people in front of me were not my parents. They laughed eerily as they came towards me and everything went black.',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '312px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 61,
                    autoPlay: true,
                    data: [
                        [
                            "eid13143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${c}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "opening1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '438px', '470px', 'auto', 'auto'],
                            id: 'class-BG-small',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/class-BG-small.png', '0px', '0px']
                        },
                        {
                            rect: ['150px', '99px', '49px', '49px', 'auto', 'auto'],
                            id: 'thought-txt',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/thought-txt.png', '0px', '0px']
                        },
                        {
                            rect: ['7px', '47px', '278px', '423px', 'auto', 'auto'],
                            id: 'girl-worried',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/girl-worried.png', '0px', '0px']
                        },
                        {
                            rect: ['175px', '92px', '24px', '59px', 'auto', 'auto'],
                            id: 'sweat1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sweat1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '438px', '470px']
                        }
                    }
                },
                timeline: {
                    duration: 3247,
                    autoPlay: true,
                    data: [
                        [
                            "eid12437",
                            "top",
                            527,
                            473,
                            "linear",
                            "${sweat1}",
                            '92px',
                            '189px'
                        ],
                        [
                            "eid12446",
                            "top",
                            1106,
                            473,
                            "linear",
                            "${sweat1}",
                            '92px',
                            '189px'
                        ],
                        [
                            "eid12465",
                            "top",
                            1750,
                            473,
                            "linear",
                            "${sweat1}",
                            '92px',
                            '189px'
                        ],
                        [
                            "eid12466",
                            "top",
                            2329,
                            473,
                            "linear",
                            "${sweat1}",
                            '92px',
                            '189px'
                        ],
                        [
                            "eid12460",
                            "left",
                            1305,
                            305,
                            "linear",
                            "${thought-txt}",
                            '150px',
                            '226px'
                        ],
                        [
                            "eid12461",
                            "left",
                            1610,
                            140,
                            "linear",
                            "${thought-txt}",
                            '226px',
                            '249px'
                        ],
                        [
                            "eid12491",
                            "left",
                            2802,
                            140,
                            "linear",
                            "${thought-txt}",
                            '249px',
                            '226px'
                        ],
                        [
                            "eid12490",
                            "left",
                            2942,
                            305,
                            "linear",
                            "${thought-txt}",
                            '226px',
                            '150px'
                        ],
                        [
                            "eid12458",
                            "top",
                            1305,
                            305,
                            "linear",
                            "${thought-txt}",
                            '99px',
                            '0px'
                        ],
                        [
                            "eid12462",
                            "top",
                            1610,
                            140,
                            "linear",
                            "${thought-txt}",
                            '0px',
                            '8px'
                        ],
                        [
                            "eid12486",
                            "top",
                            2802,
                            140,
                            "linear",
                            "${thought-txt}",
                            '8px',
                            '0px'
                        ],
                        [
                            "eid12485",
                            "top",
                            2942,
                            305,
                            "linear",
                            "${thought-txt}",
                            '0px',
                            '99px'
                        ],
                        [
                            "eid12476",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${thought-txt}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12479",
                            "opacity",
                            1305,
                            143,
                            "linear",
                            "${thought-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12489",
                            "opacity",
                            3104,
                            143,
                            "linear",
                            "${thought-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12445",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sweat1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12441",
                            "opacity",
                            527,
                            88,
                            "linear",
                            "${sweat1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12444",
                            "opacity",
                            914,
                            86,
                            "linear",
                            "${sweat1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12447",
                            "opacity",
                            1106,
                            88,
                            "linear",
                            "${sweat1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12448",
                            "opacity",
                            1493,
                            86,
                            "linear",
                            "${sweat1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12467",
                            "opacity",
                            1750,
                            88,
                            "linear",
                            "${sweat1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12468",
                            "opacity",
                            2137,
                            86,
                            "linear",
                            "${sweat1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12469",
                            "opacity",
                            2329,
                            88,
                            "linear",
                            "${sweat1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12470",
                            "opacity",
                            2716,
                            86,
                            "linear",
                            "${sweat1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12459",
                            "width",
                            1305,
                            305,
                            "linear",
                            "${thought-txt}",
                            '49px',
                            '211px'
                        ],
                        [
                            "eid12463",
                            "width",
                            1610,
                            140,
                            "linear",
                            "${thought-txt}",
                            '211px',
                            '181px'
                        ],
                        [
                            "eid12493",
                            "width",
                            2802,
                            140,
                            "linear",
                            "${thought-txt}",
                            '181px',
                            '211px'
                        ],
                        [
                            "eid12492",
                            "width",
                            2942,
                            305,
                            "linear",
                            "${thought-txt}",
                            '211px',
                            '49px'
                        ],
                        [
                            "eid12474",
                            "opacity",
                            0,
                            56,
                            "linear",
                            "${class-BG-small}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12484",
                            "opacity",
                            3191,
                            56,
                            "linear",
                            "${class-BG-small}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid12457",
                            "height",
                            1305,
                            305,
                            "linear",
                            "${thought-txt}",
                            '49px',
                            '214px'
                        ],
                        [
                            "eid12464",
                            "height",
                            1610,
                            140,
                            "linear",
                            "${thought-txt}",
                            '214px',
                            '184px'
                        ],
                        [
                            "eid12488",
                            "height",
                            2802,
                            140,
                            "linear",
                            "${thought-txt}",
                            '184px',
                            '214px'
                        ],
                        [
                            "eid12487",
                            "height",
                            2942,
                            305,
                            "linear",
                            "${thought-txt}",
                            '214px',
                            '49px'
                        ],
                        [
                            "eid12483",
                            "opacity",
                            0,
                            56,
                            "linear",
                            "${girl-worried}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12498",
                            "opacity",
                            3191,
                            56,
                            "linear",
                            "${girl-worried}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid12431",
                            "left",
                            0,
                            527,
                            "linear",
                            "${girl-worried}",
                            '181px',
                            '29px'
                        ],
                        [
                            "eid12496",
                            "left",
                            3046,
                            201,
                            "linear",
                            "${girl-worried}",
                            '29px',
                            '7px'
                        ]
                    ]
                }
            },
            "opening2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '438px', '470px', 'auto', 'auto'],
                            id: 'stormy-bg',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stormy-bg.png', '0px', '0px']
                        },
                        {
                            rect: ['254px', '128px', '59px', '70px', 'auto', 'auto'],
                            id: 'sweat22',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sweat22.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'girl-run',
                            rect: ['151px', '128px', '296px', '339px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/girl-run.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '438px', '470px']
                        }
                    }
                },
                timeline: {
                    duration: 995,
                    autoPlay: true,
                    data: [
                        [
                            "eid12529",
                            "top",
                            181,
                            319,
                            "linear",
                            "${sweat22}",
                            '180px',
                            '97px'
                        ],
                        [
                            "eid12546",
                            "top",
                            564,
                            0,
                            "linear",
                            "${sweat22}",
                            '97px',
                            '97px'
                        ],
                        [
                            "eid12539",
                            "top",
                            617,
                            319,
                            "linear",
                            "${sweat22}",
                            '179px',
                            '128px'
                        ],
                        [
                            "eid12531",
                            "width",
                            181,
                            319,
                            "linear",
                            "${sweat22}",
                            '59px',
                            '107px'
                        ],
                        [
                            "eid12547",
                            "width",
                            564,
                            0,
                            "linear",
                            "${sweat22}",
                            '107px',
                            '107px'
                        ],
                        [
                            "eid12544",
                            "width",
                            617,
                            319,
                            "linear",
                            "${sweat22}",
                            '59px',
                            '107px'
                        ],
                        [
                            "eid12535",
                            "opacity",
                            181,
                            69,
                            "linear",
                            "${sweat22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12538",
                            "opacity",
                            414,
                            86,
                            "linear",
                            "${sweat22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12541",
                            "opacity",
                            617,
                            69,
                            "linear",
                            "${sweat22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12542",
                            "opacity",
                            850,
                            86,
                            "linear",
                            "${sweat22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12528",
                            "left",
                            181,
                            319,
                            "linear",
                            "${sweat22}",
                            '278px',
                            '297px'
                        ],
                        [
                            "eid12545",
                            "left",
                            564,
                            0,
                            "linear",
                            "${sweat22}",
                            '297px',
                            '297px'
                        ],
                        [
                            "eid12543",
                            "left",
                            617,
                            319,
                            "linear",
                            "${sweat22}",
                            '213px',
                            '254px'
                        ],
                        [
                            "eid12530",
                            "height",
                            181,
                            319,
                            "linear",
                            "${sweat22}",
                            '70px',
                            '128px'
                        ],
                        [
                            "eid12548",
                            "height",
                            564,
                            0,
                            "linear",
                            "${sweat22}",
                            '128px',
                            '128px'
                        ],
                        [
                            "eid12540",
                            "height",
                            617,
                            319,
                            "linear",
                            "${sweat22}",
                            '70px',
                            '128px'
                        ],
                        [
                            "eid12517",
                            "left",
                            0,
                            995,
                            "linear",
                            "${girl-run}",
                            '151px',
                            '-6px'
                        ],
                        [
                            "eid12514",
                            "opacity",
                            0,
                            83,
                            "linear",
                            "${girl-run}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12518",
                            "opacity",
                            912,
                            83,
                            "linear",
                            "${girl-run}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid12513",
                            "opacity",
                            0,
                            83,
                            "linear",
                            "${stormy-bg}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12519",
                            "opacity",
                            912,
                            83,
                            "linear",
                            "${stormy-bg}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            },
            "opening3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '438px', '470px', 'auto', 'auto'],
                            id: 'garden-bg',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/garden-bg.png', '0px', '0px']
                        },
                        {
                            rect: ['57px', '69px', '336px', '384px', 'auto', 'auto'],
                            id: 'girl-yawn',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/girl-yawn.png', '0px', '0px']
                        },
                        {
                            rect: ['57px', '75px', '336px', '378px', 'auto', 'auto'],
                            id: 'girl-confuse',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/girl-confuse.png', '0px', '0px']
                        },
                        {
                            rect: ['-12px', '37px', '170px', '130px', 'auto', 'auto'],
                            id: 'yawn-txt',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yawn-txt.png', '0px', '0px']
                        },
                        {
                            rect: ['133px', '14px', '78px', '141px', 'auto', 'auto'],
                            id: 'question-mark',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/question-mark.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '329px', '438px', '141px', 'auto', 'auto'],
                            id: 'flowers-fore',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flowers-fore.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '438px', '470px']
                        }
                    }
                },
                timeline: {
                    duration: 2655,
                    autoPlay: true,
                    data: [
                        [
                            "eid12602",
                            "height",
                            1414,
                            336,
                            "linear",
                            "${question-mark}",
                            '45px',
                            '141px'
                        ],
                        [
                            "eid12610",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${question-mark}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12609",
                            "opacity",
                            1414,
                            143,
                            "linear",
                            "${question-mark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12622",
                            "opacity",
                            2580,
                            75,
                            "linear",
                            "${question-mark}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12577",
                            "left",
                            250,
                            841,
                            "linear",
                            "${yawn-txt}",
                            '80px',
                            '-12px'
                        ],
                        [
                            "eid12578",
                            "width",
                            250,
                            841,
                            "linear",
                            "${yawn-txt}",
                            '106px',
                            '170px'
                        ],
                        [
                            "eid12576",
                            "top",
                            250,
                            841,
                            "linear",
                            "${yawn-txt}",
                            '110px',
                            '37px'
                        ],
                        [
                            "eid12564",
                            "opacity",
                            0,
                            58,
                            "linear",
                            "${flowers-fore}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12623",
                            "opacity",
                            2580,
                            75,
                            "linear",
                            "${flowers-fore}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12605",
                            "width",
                            1414,
                            336,
                            "linear",
                            "${question-mark}",
                            '25px',
                            '78px'
                        ],
                        [
                            "eid12575",
                            "height",
                            250,
                            841,
                            "linear",
                            "${yawn-txt}",
                            '81px',
                            '130px'
                        ],
                        [
                            "eid12586",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${yawn-txt}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12582",
                            "opacity",
                            250,
                            156,
                            "linear",
                            "${yawn-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12585",
                            "opacity",
                            940,
                            151,
                            "linear",
                            "${yawn-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12604",
                            "left",
                            1414,
                            336,
                            "linear",
                            "${question-mark}",
                            '133px',
                            '73px'
                        ],
                        [
                            "eid12563",
                            "opacity",
                            0,
                            58,
                            "linear",
                            "${garden-bg}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12624",
                            "opacity",
                            2580,
                            75,
                            "linear",
                            "${garden-bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12566",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${girl-confuse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12589",
                            "opacity",
                            1091,
                            60,
                            "linear",
                            "${girl-confuse}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12621",
                            "opacity",
                            2580,
                            75,
                            "linear",
                            "${girl-confuse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12562",
                            "opacity",
                            0,
                            58,
                            "linear",
                            "${girl-yawn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12593",
                            "opacity",
                            1151,
                            0,
                            "linear",
                            "${girl-yawn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12603",
                            "top",
                            1414,
                            336,
                            "linear",
                            "${question-mark}",
                            '122px',
                            '14px'
                        ]
                    ]
                }
            },
            "Middle1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '438px', '470px', 'auto', 'auto'],
                            id: 'red-bg',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/red-bg.png', '0px', '0px']
                        },
                        {
                            rect: ['166px', '0px', '270px', '470px', 'auto', 'auto'],
                            id: 'shadow',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shadow.png', '0px', '0px']
                        },
                        {
                            rect: ['88px', '118px', '150px', '170px', 'auto', 'auto'],
                            id: 'shock-effect',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shock-effect.png', '0px', '0px']
                        },
                        {
                            rect: ['41px', '99px', '293px', '371px', 'auto', 'auto'],
                            id: 'girl-shock',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/girl-shock.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '438px', '470px']
                        }
                    }
                },
                timeline: {
                    duration: 1199,
                    autoPlay: true,
                    data: [
                        [
                            "eid12687",
                            "left",
                            68,
                            196,
                            "linear",
                            "${shock-effect}",
                            '88px',
                            '1px'
                        ],
                        [
                            "eid12635",
                            "opacity",
                            0,
                            68,
                            "linear",
                            "${girl-shock}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12702",
                            "opacity",
                            1121,
                            78,
                            "linear",
                            "${girl-shock}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12685",
                            "width",
                            68,
                            196,
                            "linear",
                            "${shock-effect}",
                            '150px',
                            '379px'
                        ],
                        [
                            "eid12649",
                            "top",
                            0,
                            264,
                            "linear",
                            "${shadow}",
                            '274px',
                            '0px'
                        ],
                        [
                            "eid12657",
                            "top",
                            264,
                            222,
                            "linear",
                            "${shadow}",
                            '0px',
                            '24px'
                        ],
                        [
                            "eid12660",
                            "top",
                            486,
                            241,
                            "linear",
                            "${shadow}",
                            '24px',
                            '0px'
                        ],
                        [
                            "eid12664",
                            "top",
                            727,
                            233,
                            "linear",
                            "${shadow}",
                            '0px',
                            '24px'
                        ],
                        [
                            "eid12668",
                            "top",
                            960,
                            160,
                            "linear",
                            "${shadow}",
                            '24px',
                            '0px'
                        ],
                        [
                            "eid12651",
                            "width",
                            0,
                            264,
                            "linear",
                            "${shadow}",
                            '113px',
                            '270px'
                        ],
                        [
                            "eid12659",
                            "width",
                            264,
                            222,
                            "linear",
                            "${shadow}",
                            '270px',
                            '256px'
                        ],
                        [
                            "eid12663",
                            "width",
                            486,
                            241,
                            "linear",
                            "${shadow}",
                            '256px',
                            '270px'
                        ],
                        [
                            "eid12667",
                            "width",
                            727,
                            233,
                            "linear",
                            "${shadow}",
                            '270px',
                            '256px'
                        ],
                        [
                            "eid12671",
                            "width",
                            960,
                            160,
                            "linear",
                            "${shadow}",
                            '256px',
                            '270px'
                        ],
                        [
                            "eid12648",
                            "height",
                            0,
                            264,
                            "linear",
                            "${shadow}",
                            '196px',
                            '470px'
                        ],
                        [
                            "eid12656",
                            "height",
                            264,
                            222,
                            "linear",
                            "${shadow}",
                            '470px',
                            '446px'
                        ],
                        [
                            "eid12661",
                            "height",
                            486,
                            241,
                            "linear",
                            "${shadow}",
                            '446px',
                            '470px'
                        ],
                        [
                            "eid12665",
                            "height",
                            727,
                            233,
                            "linear",
                            "${shadow}",
                            '470px',
                            '446px'
                        ],
                        [
                            "eid12669",
                            "height",
                            960,
                            160,
                            "linear",
                            "${shadow}",
                            '446px',
                            '470px'
                        ],
                        [
                            "eid12686",
                            "top",
                            68,
                            196,
                            "linear",
                            "${shock-effect}",
                            '118px',
                            '0px'
                        ],
                        [
                            "eid12690",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${shock-effect}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12692",
                            "opacity",
                            68,
                            82,
                            "linear",
                            "${shock-effect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12695",
                            "opacity",
                            856,
                            343,
                            "linear",
                            "${shock-effect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12675",
                            "opacity",
                            0,
                            150,
                            "linear",
                            "${shadow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12700",
                            "opacity",
                            1121,
                            78,
                            "linear",
                            "${shadow}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12636",
                            "opacity",
                            0,
                            68,
                            "linear",
                            "${red-bg}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12701",
                            "opacity",
                            1121,
                            78,
                            "linear",
                            "${red-bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12650",
                            "left",
                            0,
                            264,
                            "linear",
                            "${shadow}",
                            '323px',
                            '166px'
                        ],
                        [
                            "eid12658",
                            "left",
                            264,
                            222,
                            "linear",
                            "${shadow}",
                            '166px',
                            '180px'
                        ],
                        [
                            "eid12662",
                            "left",
                            486,
                            241,
                            "linear",
                            "${shadow}",
                            '180px',
                            '166px'
                        ],
                        [
                            "eid12666",
                            "left",
                            727,
                            233,
                            "linear",
                            "${shadow}",
                            '166px',
                            '180px'
                        ],
                        [
                            "eid12670",
                            "left",
                            960,
                            160,
                            "linear",
                            "${shadow}",
                            '180px',
                            '166px'
                        ],
                        [
                            "eid12684",
                            "height",
                            68,
                            196,
                            "linear",
                            "${shock-effect}",
                            '170px',
                            '430px'
                        ],
                        [
                            "eid12639",
                            "left",
                            0,
                            150,
                            "linear",
                            "${girl-shock}",
                            '41px',
                            '0px'
                        ]
                    ]
                }
            },
            "middle2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '1px', '438px', '470px', 'auto', 'auto'],
                            id: 'garden-bg2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/garden-bg.png', '0px', '0px']
                        },
                        {
                            rect: ['155px', '87px', '263px', '384px', 'auto', 'auto'],
                            id: 'girl-happy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/girl-happy.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '176px', '238px', '295px', 'auto', 'auto'],
                            id: 'shine',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shine.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '329px', '438px', '141px', 'auto', 'auto'],
                            id: 'flowers-fore2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flowers-fore.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '438px', '470px', 'auto', 'auto'],
                            id: 'coin-on-grass',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/coin-on-grass.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '14px', '438px', '456px', 'auto', 'auto'],
                            id: 'spark2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spark2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '438px', '471px']
                        }
                    }
                },
                timeline: {
                    duration: 1975,
                    autoPlay: true,
                    data: [
                        [
                            "eid12718",
                            "opacity",
                            0,
                            36,
                            "linear",
                            "${garden-bg2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12783",
                            "opacity",
                            1288,
                            84,
                            "linear",
                            "${garden-bg2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12730",
                            "top",
                            36,
                            838,
                            "linear",
                            "${shine}",
                            '426px',
                            '176px'
                        ],
                        [
                            "eid12759",
                            "width",
                            1072,
                            428,
                            "linear",
                            "${spark2}",
                            '151px',
                            '438px'
                        ],
                        [
                            "eid12774",
                            "width",
                            1547,
                            428,
                            "linear",
                            "${spark2}",
                            '151px',
                            '438px'
                        ],
                        [
                            "eid12757",
                            "height",
                            1072,
                            428,
                            "linear",
                            "${spark2}",
                            '157px',
                            '456px'
                        ],
                        [
                            "eid12770",
                            "height",
                            1547,
                            428,
                            "linear",
                            "${spark2}",
                            '157px',
                            '456px'
                        ],
                        [
                            "eid12760",
                            "top",
                            1072,
                            428,
                            "linear",
                            "${spark2}",
                            '167px',
                            '14px'
                        ],
                        [
                            "eid12769",
                            "top",
                            1547,
                            428,
                            "linear",
                            "${spark2}",
                            '167px',
                            '14px'
                        ],
                        [
                            "eid12719",
                            "opacity",
                            0,
                            36,
                            "linear",
                            "${flowers-fore2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12777",
                            "opacity",
                            1292,
                            84,
                            "linear",
                            "${flowers-fore2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12768",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spark2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12764",
                            "opacity",
                            1072,
                            115,
                            "linear",
                            "${spark2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12767",
                            "opacity",
                            1437,
                            63,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12771",
                            "opacity",
                            1547,
                            115,
                            "linear",
                            "${spark2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12772",
                            "opacity",
                            1912,
                            63,
                            "linear",
                            "${spark2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12729",
                            "height",
                            36,
                            838,
                            "linear",
                            "${shine}",
                            '45px',
                            '295px'
                        ],
                        [
                            "eid12731",
                            "width",
                            36,
                            838,
                            "linear",
                            "${shine}",
                            '115px',
                            '238px'
                        ],
                        [
                            "eid12758",
                            "left",
                            1072,
                            428,
                            "linear",
                            "${spark2}",
                            '139px',
                            '0px'
                        ],
                        [
                            "eid12773",
                            "left",
                            1547,
                            428,
                            "linear",
                            "${spark2}",
                            '139px',
                            '0px'
                        ],
                        [
                            "eid12720",
                            "opacity",
                            0,
                            36,
                            "linear",
                            "${girl-happy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12784",
                            "opacity",
                            1288,
                            84,
                            "linear",
                            "${girl-happy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12743",
                            "left",
                            426,
                            646,
                            "linear",
                            "${girl-happy}",
                            '155px',
                            '119px'
                        ],
                        [
                            "eid12734",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${shine}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12737",
                            "opacity",
                            130,
                            179,
                            "linear",
                            "${shine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12740",
                            "opacity",
                            768,
                            106,
                            "linear",
                            "${shine}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12708",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${coin-on-grass}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12746",
                            "opacity",
                            874,
                            198,
                            "linear",
                            "${coin-on-grass}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12782",
                            "opacity",
                            1912,
                            63,
                            "linear",
                            "${coin-on-grass}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12732",
                            "left",
                            36,
                            838,
                            "linear",
                            "${shine}",
                            '45px',
                            '0px'
                        ]
                    ]
                }
            },
            "middle3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '438px', '470px', 'auto', 'auto'],
                            id: 'puddle-bg',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/puddle-bg.png', '0px', '0px']
                        },
                        {
                            rect: ['141px', '19px', '297px', '378px', 'auto', 'auto'],
                            id: 'girl-determined',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/girl-determined.png', '0px', '0px']
                        },
                        {
                            rect: ['141px', '19px', '281px', '378px', 'auto', 'auto'],
                            id: 'girl-crying',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/girl-crying.png', '0px', '0px']
                        },
                        {
                            rect: ['193px', '123px', '53px', '63px', 'auto', 'auto'],
                            transform: [[], ['-32'], [], ['-1']],
                            id: 'sweat22',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sweat2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '62px', '55px', 'auto', 'auto'],
                            id: 'brave-text',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brave-text.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '438px', '470px']
                        }
                    }
                },
                timeline: {
                    duration: 2850,
                    autoPlay: true,
                    data: [
                        [
                            "eid12828",
                            "top",
                            418,
                            332,
                            "linear",
                            "${sweat22}",
                            '123px',
                            '133px'
                        ],
                        [
                            "eid12839",
                            "top",
                            1125,
                            332,
                            "linear",
                            "${sweat22}",
                            '123px',
                            '133px'
                        ],
                        [
                            "eid12830",
                            "width",
                            418,
                            332,
                            "linear",
                            "${sweat22}",
                            '53px',
                            '107px'
                        ],
                        [
                            "eid12844",
                            "width",
                            1125,
                            332,
                            "linear",
                            "${sweat22}",
                            '53px',
                            '107px'
                        ],
                        [
                            "eid12876",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${brave-text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12875",
                            "opacity",
                            1798,
                            108,
                            "linear",
                            "${brave-text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12883",
                            "opacity",
                            2789,
                            61,
                            "linear",
                            "${brave-text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12862",
                            "width",
                            1798,
                            202,
                            "linear",
                            "${brave-text}",
                            '62px',
                            '228px'
                        ],
                        [
                            "eid12870",
                            "width",
                            2000,
                            102,
                            "linear",
                            "${brave-text}",
                            '228px',
                            '204px'
                        ],
                        [
                            "eid12798",
                            "opacity",
                            0,
                            44,
                            "linear",
                            "${puddle-bg}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12885",
                            "opacity",
                            2789,
                            61,
                            "linear",
                            "${puddle-bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12859",
                            "height",
                            1798,
                            202,
                            "linear",
                            "${brave-text}",
                            '55px',
                            '203px'
                        ],
                        [
                            "eid12867",
                            "height",
                            2000,
                            102,
                            "linear",
                            "${brave-text}",
                            '203px',
                            '182px'
                        ],
                        [
                            "eid12861",
                            "left",
                            1798,
                            202,
                            "linear",
                            "${brave-text}",
                            '176px',
                            '0px'
                        ],
                        [
                            "eid12871",
                            "left",
                            2102,
                            0,
                            "linear",
                            "${brave-text}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid12829",
                            "height",
                            418,
                            332,
                            "linear",
                            "${sweat22}",
                            '63px',
                            '128px'
                        ],
                        [
                            "eid12840",
                            "height",
                            1125,
                            332,
                            "linear",
                            "${sweat22}",
                            '63px',
                            '128px'
                        ],
                        [
                            "eid12860",
                            "top",
                            1798,
                            202,
                            "linear",
                            "${brave-text}",
                            '142px',
                            '8px'
                        ],
                        [
                            "eid12868",
                            "top",
                            2000,
                            102,
                            "linear",
                            "${brave-text}",
                            '8px',
                            '0px'
                        ],
                        [
                            "eid12838",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sweat22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12834",
                            "opacity",
                            418,
                            82,
                            "linear",
                            "${sweat22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12837",
                            "opacity",
                            674,
                            76,
                            "linear",
                            "${sweat22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12841",
                            "opacity",
                            1125,
                            82,
                            "linear",
                            "${sweat22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12842",
                            "opacity",
                            1381,
                            76,
                            "linear",
                            "${sweat22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12827",
                            "left",
                            418,
                            332,
                            "linear",
                            "${sweat22}",
                            '193px',
                            '105px'
                        ],
                        [
                            "eid12843",
                            "left",
                            1125,
                            332,
                            "linear",
                            "${sweat22}",
                            '193px',
                            '105px'
                        ],
                        [
                            "eid12797",
                            "opacity",
                            0,
                            44,
                            "linear",
                            "${girl-crying}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12847",
                            "opacity",
                            1500,
                            144,
                            "linear",
                            "${girl-crying}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12804",
                            "top",
                            44,
                            206,
                            "linear",
                            "${girl-crying}",
                            '19px',
                            '26px'
                        ],
                        [
                            "eid12805",
                            "top",
                            250,
                            168,
                            "linear",
                            "${girl-crying}",
                            '26px',
                            '19px'
                        ],
                        [
                            "eid12807",
                            "top",
                            418,
                            135,
                            "linear",
                            "${girl-crying}",
                            '19px',
                            '26px'
                        ],
                        [
                            "eid12811",
                            "top",
                            750,
                            185,
                            "linear",
                            "${girl-crying}",
                            '26px',
                            '19px'
                        ],
                        [
                            "eid12813",
                            "top",
                            935,
                            125,
                            "linear",
                            "${girl-crying}",
                            '19px',
                            '26px'
                        ],
                        [
                            "eid12817",
                            "top",
                            1060,
                            196,
                            "linear",
                            "${girl-crying}",
                            '26px',
                            '19px'
                        ],
                        [
                            "eid12790",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${girl-determined}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12850",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${girl-determined}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12884",
                            "opacity",
                            2789,
                            61,
                            "linear",
                            "${girl-determined}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12803",
                            "height",
                            44,
                            206,
                            "linear",
                            "${girl-crying}",
                            '378px',
                            '371px'
                        ],
                        [
                            "eid12806",
                            "height",
                            250,
                            168,
                            "linear",
                            "${girl-crying}",
                            '371px',
                            '378px'
                        ],
                        [
                            "eid12808",
                            "height",
                            418,
                            135,
                            "linear",
                            "${girl-crying}",
                            '378px',
                            '371px'
                        ],
                        [
                            "eid12812",
                            "height",
                            750,
                            185,
                            "linear",
                            "${girl-crying}",
                            '371px',
                            '378px'
                        ],
                        [
                            "eid12814",
                            "height",
                            935,
                            125,
                            "linear",
                            "${girl-crying}",
                            '378px',
                            '371px'
                        ],
                        [
                            "eid12818",
                            "height",
                            1060,
                            196,
                            "linear",
                            "${girl-crying}",
                            '371px',
                            '378px'
                        ]
                    ]
                }
            },
            "end1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '1px', '438px', '470px', 'auto', 'auto'],
                            id: 'ending-bg3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ending-bg3.png', '0px', '0px']
                        },
                        {
                            rect: ['161px', '48px', '278px', '423px', 'auto', 'auto'],
                            id: 'girl-hungry',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/girl-hungry.png', '0px', '0px']
                        },
                        {
                            rect: ['16px', '273px', '155px', '80px', 'auto', 'auto'],
                            id: 'tummy-rumble',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tummy-rumble.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '0px', '438px', '470px', 'auto', 'auto'],
                            id: 'store',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/store.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '439px', '471px']
                        }
                    }
                },
                timeline: {
                    duration: 3453,
                    autoPlay: true,
                    data: [
                        [
                            "eid12926",
                            "width",
                            1692,
                            808,
                            "linear",
                            "${tummy-rumble}",
                            '78px',
                            '155px'
                        ],
                        [
                            "eid12942",
                            "width",
                            2568,
                            808,
                            "linear",
                            "${tummy-rumble}",
                            '78px',
                            '155px'
                        ],
                        [
                            "eid12895",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${girl-hungry}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12908",
                            "opacity",
                            1000,
                            58,
                            "linear",
                            "${girl-hungry}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12947",
                            "opacity",
                            3376,
                            77,
                            "linear",
                            "${girl-hungry}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12899",
                            "opacity",
                            0,
                            88,
                            "linear",
                            "${store}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12911",
                            "opacity",
                            1058,
                            307,
                            "linear",
                            "${store}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12923",
                            "height",
                            1692,
                            808,
                            "linear",
                            "${tummy-rumble}",
                            '41px',
                            '80px'
                        ],
                        [
                            "eid12938",
                            "height",
                            2568,
                            808,
                            "linear",
                            "${tummy-rumble}",
                            '41px',
                            '80px'
                        ],
                        [
                            "eid12893",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ending-bg3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12906",
                            "opacity",
                            1000,
                            58,
                            "linear",
                            "${ending-bg3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12948",
                            "opacity",
                            3376,
                            77,
                            "linear",
                            "${ending-bg3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12925",
                            "left",
                            1692,
                            808,
                            "linear",
                            "${tummy-rumble}",
                            '180px',
                            '16px'
                        ],
                        [
                            "eid12941",
                            "left",
                            2568,
                            808,
                            "linear",
                            "${tummy-rumble}",
                            '180px',
                            '16px'
                        ],
                        [
                            "eid12930",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tummy-rumble}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12933",
                            "opacity",
                            1692,
                            185,
                            "linear",
                            "${tummy-rumble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12936",
                            "opacity",
                            2345,
                            155,
                            "linear",
                            "${tummy-rumble}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12939",
                            "opacity",
                            2568,
                            185,
                            "linear",
                            "${tummy-rumble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12940",
                            "opacity",
                            3221,
                            155,
                            "linear",
                            "${tummy-rumble}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12924",
                            "top",
                            1692,
                            808,
                            "linear",
                            "${tummy-rumble}",
                            '307px',
                            '273px'
                        ],
                        [
                            "eid12937",
                            "top",
                            2568,
                            808,
                            "linear",
                            "${tummy-rumble}",
                            '307px',
                            '273px'
                        ],
                        [
                            "eid12914",
                            "left",
                            1058,
                            1192,
                            "linear",
                            "${girl-hungry}",
                            '161px',
                            '120px'
                        ]
                    ]
                }
            },
            "end2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '438px', '470px', 'auto', 'auto'],
                            id: 'ending-bg2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ending-bg2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '438px', '470px', 'auto', 'auto'],
                            id: 'ending-bg32',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ending-bg3.png', '0px', '0px']
                        },
                        {
                            rect: ['29px', '0px', '313px', '380px', 'auto', 'auto'],
                            id: 'parents',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/parents.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '82px', '410px', '387px', 'auto', 'auto'],
                            id: 'girl-rushin',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/girl-rushin.png', '0px', '0px']
                        },
                        {
                            rect: ['342px', '0px', '96px', '470px', 'auto', 'auto'],
                            id: 'door',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/door.png', '0px', '0px']
                        },
                        {
                            rect: ['206px', '127px', '59px', '57px', 'auto', 'auto'],
                            id: 'worldend',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/worldend.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '438px', '470px']
                        }
                    }
                },
                timeline: {
                    duration: 1820,
                    autoPlay: true,
                    data: [
                        [
                            "eid13018",
                            "left",
                            1072,
                            532,
                            "linear",
                            "${parents}",
                            '62px',
                            '29px'
                        ],
                        [
                            "eid12977",
                            "top",
                            142,
                            215,
                            "linear",
                            "${worldend}",
                            '127px',
                            '7px'
                        ],
                        [
                            "eid12963",
                            "opacity",
                            0,
                            81,
                            "linear",
                            "${ending-bg2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13025",
                            "opacity",
                            1500,
                            320,
                            "linear",
                            "${ending-bg2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12985",
                            "rotateZ",
                            357,
                            110,
                            "linear",
                            "${worldend}",
                            '0deg',
                            '-11deg'
                        ],
                        [
                            "eid12987",
                            "rotateZ",
                            467,
                            119,
                            "linear",
                            "${worldend}",
                            '-11deg',
                            '11deg'
                        ],
                        [
                            "eid12989",
                            "rotateZ",
                            586,
                            131,
                            "linear",
                            "${worldend}",
                            '11deg',
                            '0deg'
                        ],
                        [
                            "eid13016",
                            "top",
                            1072,
                            532,
                            "linear",
                            "${parents}",
                            '89px',
                            '0px'
                        ],
                        [
                            "eid12962",
                            "opacity",
                            0,
                            81,
                            "linear",
                            "${door}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12998",
                            "opacity",
                            896,
                            176,
                            "linear",
                            "${door}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12982",
                            "opacity",
                            142,
                            108,
                            "linear",
                            "${worldend}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12999",
                            "opacity",
                            896,
                            176,
                            "linear",
                            "${worldend}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12968",
                            "left",
                            142,
                            0,
                            "linear",
                            "${worldend}",
                            '206px',
                            '206px'
                        ],
                        [
                            "eid12972",
                            "left",
                            357,
                            0,
                            "linear",
                            "${worldend}",
                            '206px',
                            '206px'
                        ],
                        [
                            "eid12978",
                            "width",
                            142,
                            215,
                            "linear",
                            "${worldend}",
                            '59px',
                            '228px'
                        ],
                        [
                            "eid13017",
                            "width",
                            1072,
                            532,
                            "linear",
                            "${parents}",
                            '313px',
                            '387px'
                        ],
                        [
                            "eid12964",
                            "opacity",
                            0,
                            81,
                            "linear",
                            "${girl-rushin}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13000",
                            "opacity",
                            896,
                            176,
                            "linear",
                            "${girl-rushin}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12991",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${parents}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13006",
                            "opacity",
                            896,
                            176,
                            "linear",
                            "${parents}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13027",
                            "opacity",
                            1500,
                            320,
                            "linear",
                            "${parents}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12967",
                            "left",
                            0,
                            750,
                            "linear",
                            "${girl-rushin}",
                            '28px',
                            '1px'
                        ],
                        [
                            "eid12976",
                            "height",
                            142,
                            215,
                            "linear",
                            "${worldend}",
                            '57px',
                            '222px'
                        ],
                        [
                            "eid12952",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ending-bg32}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13003",
                            "opacity",
                            896,
                            176,
                            "linear",
                            "${ending-bg32}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13026",
                            "opacity",
                            1500,
                            320,
                            "linear",
                            "${ending-bg32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13015",
                            "height",
                            1072,
                            532,
                            "linear",
                            "${parents}",
                            '380px',
                            '470px'
                        ]
                    ]
                }
            },
            "end3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '438px', '470px', 'auto', 'auto'],
                            id: 'ending-bg1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ending-bg1.png', '0px', '0px']
                        },
                        {
                            rect: ['132px', '91px', '74px', '33px', 'auto', 'auto'],
                            id: 'sorry-text',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sorry-text.png', '0px', '0px']
                        },
                        {
                            rect: ['89px', '192px', '349px', '278px', 'auto', 'auto'],
                            id: 'girl-back',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/girl-back.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '438px', '470px']
                        }
                    }
                },
                timeline: {
                    duration: 2162,
                    autoPlay: true,
                    data: [
                        [
                            "eid13053",
                            "height",
                            500,
                            423,
                            "linear",
                            "${sorry-text}",
                            '33px',
                            '115px'
                        ],
                        [
                            "eid13038",
                            "opacity",
                            0,
                            94,
                            "linear",
                            "${ending-bg1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13068",
                            "opacity",
                            2049,
                            113,
                            "linear",
                            "${ending-bg1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13051",
                            "left",
                            500,
                            423,
                            "linear",
                            "${sorry-text}",
                            '132px',
                            '139px'
                        ],
                        [
                            "eid13054",
                            "width",
                            500,
                            423,
                            "linear",
                            "${sorry-text}",
                            '74px',
                            '260px'
                        ],
                        [
                            "eid13052",
                            "top",
                            500,
                            423,
                            "linear",
                            "${sorry-text}",
                            '91px',
                            '14px'
                        ],
                        [
                            "eid13039",
                            "opacity",
                            0,
                            94,
                            "linear",
                            "${girl-back}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13066",
                            "opacity",
                            2049,
                            113,
                            "linear",
                            "${girl-back}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13059",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sorry-text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13058",
                            "opacity",
                            500,
                            160,
                            "linear",
                            "${sorry-text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13067",
                            "opacity",
                            2049,
                            113,
                            "linear",
                            "${sorry-text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13042",
                            "left",
                            0,
                            2162,
                            "linear",
                            "${girl-back}",
                            '89px',
                            '53px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("1_edgeActions.js");
})("EDGE-1646797");
