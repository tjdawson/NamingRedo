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
    "712",
"123",
"813",
"322",
"1212",
"211",
"1112",
"521",
"413",
"621",
"1013",
"911",
"321",
"622",
"1113",
"913",
"3_121",
"3_523",
"3_1211",
"3_713",
"3_411",
"3_1011",
"3_212",
"3_811",
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
    ["712", "Form", { html: {include: "712.html"}}],
["123", "Form", { html: {include: "123.html"}}],
["813", "Form", { html: {include: "813.html"}}],
["322", "Form", { html: {include: "322.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["211", "Form", { html: {include: "211.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["521", "Form", { html: {include: "521.html"}}],
["413", "Form", { html: {include: "413.html"}}],
["621", "Form", { html: {include: "621.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["321", "Form", { html: {include: "321.html"}}],
["622", "Form", { html: {include: "622.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["3_121", "Form", { html: {include: "3_121.html"}}],
["3_523", "Form", { html: {include: "3_523.html"}}],
["3_1211", "Form", { html: {include: "3_1211.html"}}],
["3_713", "Form", { html: {include: "3_713.html"}}],
["3_411", "Form", { html: {include: "3_411.html"}}],
["3_1011", "Form", { html: {include: "3_1011.html"}}],
["3_212", "Form", { html: {include: "3_212.html"}}],
["3_811", "Form", { html: {include: "3_811.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];