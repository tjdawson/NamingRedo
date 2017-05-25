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
    "313",
"221",
"1013",
"622",
"122",
"812",
"423",
"1213",
"911",
"711",
"1111",
"512",
"913",
"713",
"422",
"511",
"3_1012",
"3_222",
"3_1212",
"3_312",
"3_623",
"3_1112",
"3_811",
"3_121",
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
    ["313", "Form", { html: {include: "313.html"}}],
["221", "Form", { html: {include: "221.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["622", "Form", { html: {include: "622.html"}}],
["122", "Form", { html: {include: "122.html"}}],
["812", "Form", { html: {include: "812.html"}}],
["423", "Form", { html: {include: "423.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["711", "Form", { html: {include: "711.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
["512", "Form", { html: {include: "512.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["713", "Form", { html: {include: "713.html"}}],
["422", "Form", { html: {include: "422.html"}}],
["511", "Form", { html: {include: "511.html"}}],
["3_1012", "Form", { html: {include: "3_1012.html"}}],
["3_222", "Form", { html: {include: "3_222.html"}}],
["3_1212", "Form", { html: {include: "3_1212.html"}}],
["3_312", "Form", { html: {include: "3_312.html"}}],
["3_623", "Form", { html: {include: "3_623.html"}}],
["3_1112", "Form", { html: {include: "3_1112.html"}}],
["3_811", "Form", { html: {include: "3_811.html"}}],
["3_121", "Form", { html: {include: "3_121.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];