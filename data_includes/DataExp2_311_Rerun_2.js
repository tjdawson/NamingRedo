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
    "3_1212",
"3_412",
"3_1113",
"3_721",
"3_822",
"3_113",
"3_311",
"3_622",
"3_911",
"3_521",
"3_211",
"3_1011",
"313",
"1013",
"522",
"111",
"623",
"723",
"913",
"413",
"1213",
"823",
"212",
"1112",
"213",
"1111",
"523",
"112",
"621",
"1211",
"312",
"821",
"411",
"722",
"1012",
"912",
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
    ["3_1212", "Form", { html: {include: "3_1212.html"}}],
["3_412", "Form", { html: {include: "3_412.html"}}],
["3_1113", "Form", { html: {include: "3_1113.html"}}],
["3_721", "Form", { html: {include: "3_721.html"}}],
["3_822", "Form", { html: {include: "3_822.html"}}],
["3_113", "Form", { html: {include: "3_113.html"}}],
["3_311", "Form", { html: {include: "3_311.html"}}],
["3_622", "Form", { html: {include: "3_622.html"}}],
["3_911", "Form", { html: {include: "3_911.html"}}],
["3_521", "Form", { html: {include: "3_521.html"}}],
["3_211", "Form", { html: {include: "3_211.html"}}],
["3_1011", "Form", { html: {include: "3_1011.html"}}],
["313", "Form", { html: {include: "313.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["522", "Form", { html: {include: "522.html"}}],
["111", "Form", { html: {include: "111.html"}}],
["623", "Form", { html: {include: "623.html"}}],
["723", "Form", { html: {include: "723.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["413", "Form", { html: {include: "413.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["823", "Form", { html: {include: "823.html"}}],
["212", "Form", { html: {include: "212.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["213", "Form", { html: {include: "213.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
["523", "Form", { html: {include: "523.html"}}],
["112", "Form", { html: {include: "112.html"}}],
["621", "Form", { html: {include: "621.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["312", "Form", { html: {include: "312.html"}}],
["821", "Form", { html: {include: "821.html"}}],
["411", "Form", { html: {include: "411.html"}}],
["722", "Form", { html: {include: "722.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["912", "Form", { html: {include: "912.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];