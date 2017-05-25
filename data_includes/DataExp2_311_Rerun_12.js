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
    "3_112",
"3_221",
"3_413",
"3_1211",
"3_311",
"3_722",
"3_521",
"3_1011",
"913",
"612",
"1112",
"823",
"1113",
"723",
"911",
"113",
"312",
"1012",
"223",
"523",
"822",
"613",
"412",
"1212",
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
    ["3_112", "Form", { html: {include: "3_112.html"}}],
["3_221", "Form", { html: {include: "3_221.html"}}],
["3_413", "Form", { html: {include: "3_413.html"}}],
["3_1211", "Form", { html: {include: "3_1211.html"}}],
["3_311", "Form", { html: {include: "3_311.html"}}],
["3_722", "Form", { html: {include: "3_722.html"}}],
["3_521", "Form", { html: {include: "3_521.html"}}],
["3_1011", "Form", { html: {include: "3_1011.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["612", "Form", { html: {include: "612.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["823", "Form", { html: {include: "823.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["723", "Form", { html: {include: "723.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["113", "Form", { html: {include: "113.html"}}],
["312", "Form", { html: {include: "312.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["223", "Form", { html: {include: "223.html"}}],
["523", "Form", { html: {include: "523.html"}}],
["822", "Form", { html: {include: "822.html"}}],
["613", "Form", { html: {include: "613.html"}}],
["412", "Form", { html: {include: "412.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];