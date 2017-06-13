// A template for the experimental 'data' file for an Ibex experiment
// NOTE: All the curly braces required for Javascript have been doubled -- this is to ensure compatibility
// with Python's string.format() method; and so this code will NOT run as is. It is meant to be used
// within the context of a script that will pass values to replace the pairs of single-brace curly bracket formatting placeholders;
// which are noted wherever they appear with an in-line comment.

// set send results to manual
var manualSendResults = true;

var shuffleSequence = seq(
"intro1", "intro2",
    // The item sequence goes here
    "412",
"1113",
"812",
"911",
"312",
"223",
"612",
"1213",
"522",
"1011",
"723",
"121",
"523",
"413",
"311",
"1112",
"613",
"1012",
"721",
"123",
"222",
"1212",
"912",
"813",
"3_521",
"3_1211",
"3_811",
"3_122",
"3_913",
"3_313",
"3_1111",
"3_221",
"3_411",
"3_611",
"3_1013",
"3_722",
 // this is for formatting with python's .format method
"sr",
"end"
);

var defaults = [
    "Separator", {
        transfer: "keypress",
        normalMessage: "Please look up at the display on the wall and watch the video. When it's finished, press any key to start guessing.",
        errorMessage: "Please wait for the video to finish. Then, press any key to start guessing."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: false
    }
];

var items = [

    //

    ["sr", "__SendResults__", {}],

    //

    ["sep", "Separator", { }],

    //

    ["intro", "Form", {
        html: {include: "intro.html"},
        hideProgressBar: true,
        countsForProgressBar: false

    }],

    //

    ["intro1", "Form", {
        html: {include: "intro1.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
         validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }

    }],

    //

    ["intro2", "Form", {
        html: {include: "intro2.html"},
        hideProgressBar: true,
        countsForProgressBar: false

    }],

    //

    ["intro3", "Form", {
        html: { include: "intro3.html" },
        hideProgressBar: true,
        countsForProgressBar: false
    } ],

    // Here we enter each item as a Form controller pointing to a html file, e.g.:
    //     ["image_1", "Form", { html: {include: "image_1.html"}}],
    //     ["image_2", "Form", { html: {include: "image_2.html"}}],
    //     ...
    ["412", "Form", { html: {include: "412.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["812", "Form", { html: {include: "812.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["312", "Form", { html: {include: "312.html"}}],
["223", "Form", { html: {include: "223.html"}}],
["612", "Form", { html: {include: "612.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["522", "Form", { html: {include: "522.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["723", "Form", { html: {include: "723.html"}}],
["121", "Form", { html: {include: "121.html"}}],
["523", "Form", { html: {include: "523.html"}}],
["413", "Form", { html: {include: "413.html"}}],
["311", "Form", { html: {include: "311.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["613", "Form", { html: {include: "613.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["721", "Form", { html: {include: "721.html"}}],
["123", "Form", { html: {include: "123.html"}}],
["222", "Form", { html: {include: "222.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["813", "Form", { html: {include: "813.html"}}],
["3_521", "Form", { html: {include: "3_521.html"}}],
["3_1211", "Form", { html: {include: "3_1211.html"}}],
["3_811", "Form", { html: {include: "3_811.html"}}],
["3_122", "Form", { html: {include: "3_122.html"}}],
["3_913", "Form", { html: {include: "3_913.html"}}],
["3_313", "Form", { html: {include: "3_313.html"}}],
["3_1111", "Form", { html: {include: "3_1111.html"}}],
["3_221", "Form", { html: {include: "3_221.html"}}],
["3_411", "Form", { html: {include: "3_411.html"}}],
["3_611", "Form", { html: {include: "3_611.html"}}],
["3_1013", "Form", { html: {include: "3_1013.html"}}],
["3_722", "Form", { html: {include: "3_722.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];