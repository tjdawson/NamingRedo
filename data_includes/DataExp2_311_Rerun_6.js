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
"3_823",
"3_1113",
"3_613",
"3_712",
"3_513",
"3_123",
"3_422",
"223",
"1213",
"311",
"912",
"1112",
"821",
"911",
"313",
"121",
"511",
"1212",
"612",
"711",
"423",
"1012",
"222",
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
["3_823", "Form", { html: {include: "3_823.html"}}],
["3_1113", "Form", { html: {include: "3_1113.html"}}],
["3_613", "Form", { html: {include: "3_613.html"}}],
["3_712", "Form", { html: {include: "3_712.html"}}],
["3_513", "Form", { html: {include: "3_513.html"}}],
["3_123", "Form", { html: {include: "3_123.html"}}],
["3_422", "Form", { html: {include: "3_422.html"}}],
["223", "Form", { html: {include: "223.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["311", "Form", { html: {include: "311.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["821", "Form", { html: {include: "821.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["313", "Form", { html: {include: "313.html"}}],
["121", "Form", { html: {include: "121.html"}}],
["511", "Form", { html: {include: "511.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["612", "Form", { html: {include: "612.html"}}],
["711", "Form", { html: {include: "711.html"}}],
["423", "Form", { html: {include: "423.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["222", "Form", { html: {include: "222.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];