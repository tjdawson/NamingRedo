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
    "3_1012",
"3_722",
"3_1112",
"3_323",
"3_122",
"3_912",
"3_1212",
"3_513",
"811",
"413",
"213",
"623",
"121",
"721",
"1211",
"622",
"1113",
"211",
"321",
"511",
"411",
"1013",
"813",
"913",
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
    ["3_1012", "Form", { html: {include: "3_1012.html"}}],
["3_722", "Form", { html: {include: "3_722.html"}}],
["3_1112", "Form", { html: {include: "3_1112.html"}}],
["3_323", "Form", { html: {include: "3_323.html"}}],
["3_122", "Form", { html: {include: "3_122.html"}}],
["3_912", "Form", { html: {include: "3_912.html"}}],
["3_1212", "Form", { html: {include: "3_1212.html"}}],
["3_513", "Form", { html: {include: "3_513.html"}}],
["811", "Form", { html: {include: "811.html"}}],
["413", "Form", { html: {include: "413.html"}}],
["213", "Form", { html: {include: "213.html"}}],
["623", "Form", { html: {include: "623.html"}}],
["121", "Form", { html: {include: "121.html"}}],
["721", "Form", { html: {include: "721.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["622", "Form", { html: {include: "622.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["211", "Form", { html: {include: "211.html"}}],
["321", "Form", { html: {include: "321.html"}}],
["511", "Form", { html: {include: "511.html"}}],
["411", "Form", { html: {include: "411.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["813", "Form", { html: {include: "813.html"}}],
["913", "Form", { html: {include: "913.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];