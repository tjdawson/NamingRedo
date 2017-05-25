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
    "3_411",
"3_122",
"3_521",
"3_623",
"3_313",
"3_1012",
"3_812",
"3_221",
"913",
"1112",
"711",
"1211",
"223",
"1011",
"813",
"413",
"123",
"522",
"1111",
"911",
"312",
"622",
"1212",
"713",
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
    ["3_411", "Form", { html: {include: "3_411.html"}}],
["3_122", "Form", { html: {include: "3_122.html"}}],
["3_521", "Form", { html: {include: "3_521.html"}}],
["3_623", "Form", { html: {include: "3_623.html"}}],
["3_313", "Form", { html: {include: "3_313.html"}}],
["3_1012", "Form", { html: {include: "3_1012.html"}}],
["3_812", "Form", { html: {include: "3_812.html"}}],
["3_221", "Form", { html: {include: "3_221.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["711", "Form", { html: {include: "711.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["223", "Form", { html: {include: "223.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["813", "Form", { html: {include: "813.html"}}],
["413", "Form", { html: {include: "413.html"}}],
["123", "Form", { html: {include: "123.html"}}],
["522", "Form", { html: {include: "522.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["312", "Form", { html: {include: "312.html"}}],
["622", "Form", { html: {include: "622.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["713", "Form", { html: {include: "713.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];