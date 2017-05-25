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
    "3_511",
"3_1012",
"3_721",
"3_312",
"3_113",
"3_621",
"3_811",
"3_1211",
"913",
"222",
"422",
"1112",
"911",
"423",
"813",
"221",
"1212",
"622",
"111",
"723",
"313",
"1013",
"512",
"1111",
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
    ["3_511", "Form", { html: {include: "3_511.html"}}],
["3_1012", "Form", { html: {include: "3_1012.html"}}],
["3_721", "Form", { html: {include: "3_721.html"}}],
["3_312", "Form", { html: {include: "3_312.html"}}],
["3_113", "Form", { html: {include: "3_113.html"}}],
["3_621", "Form", { html: {include: "3_621.html"}}],
["3_811", "Form", { html: {include: "3_811.html"}}],
["3_1211", "Form", { html: {include: "3_1211.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["222", "Form", { html: {include: "222.html"}}],
["422", "Form", { html: {include: "422.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["423", "Form", { html: {include: "423.html"}}],
["813", "Form", { html: {include: "813.html"}}],
["221", "Form", { html: {include: "221.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["622", "Form", { html: {include: "622.html"}}],
["111", "Form", { html: {include: "111.html"}}],
["723", "Form", { html: {include: "723.html"}}],
["313", "Form", { html: {include: "313.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["512", "Form", { html: {include: "512.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];