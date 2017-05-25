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
    "523",
"1112",
"911",
"722",
"311",
"412",
"1213",
"812",
"1012",
"623",
"111",
"221",
"813",
"912",
"223",
"112",
"3_622",
"3_723",
"3_1212",
"3_312",
"3_1013",
"3_413",
"3_522",
"3_1113",
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
    ["523", "Form", { html: {include: "523.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["722", "Form", { html: {include: "722.html"}}],
["311", "Form", { html: {include: "311.html"}}],
["412", "Form", { html: {include: "412.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["812", "Form", { html: {include: "812.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["623", "Form", { html: {include: "623.html"}}],
["111", "Form", { html: {include: "111.html"}}],
["221", "Form", { html: {include: "221.html"}}],
["813", "Form", { html: {include: "813.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["223", "Form", { html: {include: "223.html"}}],
["112", "Form", { html: {include: "112.html"}}],
["3_622", "Form", { html: {include: "3_622.html"}}],
["3_723", "Form", { html: {include: "3_723.html"}}],
["3_1212", "Form", { html: {include: "3_1212.html"}}],
["3_312", "Form", { html: {include: "3_312.html"}}],
["3_1013", "Form", { html: {include: "3_1013.html"}}],
["3_413", "Form", { html: {include: "3_413.html"}}],
["3_522", "Form", { html: {include: "3_522.html"}}],
["3_1113", "Form", { html: {include: "3_1113.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];