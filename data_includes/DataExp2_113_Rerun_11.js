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
    "113",
"223",
"1112",
"713",
"611",
"1012",
"811",
"323",
"913",
"523",
"1213",
"422",
"1111",
"321",
"522",
"1013",
"3_912",
"3_423",
"3_112",
"3_221",
"3_1211",
"3_712",
"3_613",
"3_813",
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
    ["113", "Form", { html: {include: "113.html"}}],
["223", "Form", { html: {include: "223.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["713", "Form", { html: {include: "713.html"}}],
["611", "Form", { html: {include: "611.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["811", "Form", { html: {include: "811.html"}}],
["323", "Form", { html: {include: "323.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["523", "Form", { html: {include: "523.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["422", "Form", { html: {include: "422.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
["321", "Form", { html: {include: "321.html"}}],
["522", "Form", { html: {include: "522.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["3_912", "Form", { html: {include: "3_912.html"}}],
["3_423", "Form", { html: {include: "3_423.html"}}],
["3_112", "Form", { html: {include: "3_112.html"}}],
["3_221", "Form", { html: {include: "3_221.html"}}],
["3_1211", "Form", { html: {include: "3_1211.html"}}],
["3_712", "Form", { html: {include: "3_712.html"}}],
["3_613", "Form", { html: {include: "3_613.html"}}],
["3_813", "Form", { html: {include: "3_813.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];