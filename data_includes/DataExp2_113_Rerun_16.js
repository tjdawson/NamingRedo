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
    "1211",
"513",
"212",
"911",
"1011",
"721",
"623",
"323",
"813",
"122",
"412",
"1113",
"912",
"211",
"621",
"1112",
"3_511",
"3_322",
"3_1013",
"3_411",
"3_1213",
"3_812",
"3_121",
"3_723",
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
    ["1211", "Form", { html: {include: "1211.html"}}],
["513", "Form", { html: {include: "513.html"}}],
["212", "Form", { html: {include: "212.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["721", "Form", { html: {include: "721.html"}}],
["623", "Form", { html: {include: "623.html"}}],
["323", "Form", { html: {include: "323.html"}}],
["813", "Form", { html: {include: "813.html"}}],
["122", "Form", { html: {include: "122.html"}}],
["412", "Form", { html: {include: "412.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["211", "Form", { html: {include: "211.html"}}],
["621", "Form", { html: {include: "621.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["3_511", "Form", { html: {include: "3_511.html"}}],
["3_322", "Form", { html: {include: "3_322.html"}}],
["3_1013", "Form", { html: {include: "3_1013.html"}}],
["3_411", "Form", { html: {include: "3_411.html"}}],
["3_1213", "Form", { html: {include: "3_1213.html"}}],
["3_812", "Form", { html: {include: "3_812.html"}}],
["3_121", "Form", { html: {include: "3_121.html"}}],
["3_723", "Form", { html: {include: "3_723.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];