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
    "3_1011",
"3_912",
"3_723",
"3_211",
"3_1113",
"3_813",
"3_422",
"3_523",
"3_1212",
"3_311",
"3_123",
"3_613",
"913",
"312",
"1111",
"521",
"1013",
"722",
"1211",
"812",
"213",
"121",
"611",
"421",
"721",
"811",
"612",
"122",
"911",
"522",
"212",
"1112",
"423",
"1213",
"313",
"1012",
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
    ["3_1011", "Form", { html: {include: "3_1011.html"}}],
["3_912", "Form", { html: {include: "3_912.html"}}],
["3_723", "Form", { html: {include: "3_723.html"}}],
["3_211", "Form", { html: {include: "3_211.html"}}],
["3_1113", "Form", { html: {include: "3_1113.html"}}],
["3_813", "Form", { html: {include: "3_813.html"}}],
["3_422", "Form", { html: {include: "3_422.html"}}],
["3_523", "Form", { html: {include: "3_523.html"}}],
["3_1212", "Form", { html: {include: "3_1212.html"}}],
["3_311", "Form", { html: {include: "3_311.html"}}],
["3_123", "Form", { html: {include: "3_123.html"}}],
["3_613", "Form", { html: {include: "3_613.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["312", "Form", { html: {include: "312.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
["521", "Form", { html: {include: "521.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["722", "Form", { html: {include: "722.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["812", "Form", { html: {include: "812.html"}}],
["213", "Form", { html: {include: "213.html"}}],
["121", "Form", { html: {include: "121.html"}}],
["611", "Form", { html: {include: "611.html"}}],
["421", "Form", { html: {include: "421.html"}}],
["721", "Form", { html: {include: "721.html"}}],
["811", "Form", { html: {include: "811.html"}}],
["612", "Form", { html: {include: "612.html"}}],
["122", "Form", { html: {include: "122.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["522", "Form", { html: {include: "522.html"}}],
["212", "Form", { html: {include: "212.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["423", "Form", { html: {include: "423.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["313", "Form", { html: {include: "313.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];