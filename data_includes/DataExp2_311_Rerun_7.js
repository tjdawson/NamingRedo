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
    "3_213",
"3_1011",
"3_511",
"3_721",
"3_1112",
"3_913",
"3_421",
"3_1211",
"821",
"111",
"323",
"611",
"823",
"512",
"1013",
"613",
"322",
"112",
"423",
"912",
"211",
"1212",
"723",
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
    ["3_213", "Form", { html: {include: "3_213.html"}}],
["3_1011", "Form", { html: {include: "3_1011.html"}}],
["3_511", "Form", { html: {include: "3_511.html"}}],
["3_721", "Form", { html: {include: "3_721.html"}}],
["3_1112", "Form", { html: {include: "3_1112.html"}}],
["3_913", "Form", { html: {include: "3_913.html"}}],
["3_421", "Form", { html: {include: "3_421.html"}}],
["3_1211", "Form", { html: {include: "3_1211.html"}}],
["821", "Form", { html: {include: "821.html"}}],
["111", "Form", { html: {include: "111.html"}}],
["323", "Form", { html: {include: "323.html"}}],
["611", "Form", { html: {include: "611.html"}}],
["823", "Form", { html: {include: "823.html"}}],
["512", "Form", { html: {include: "512.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["613", "Form", { html: {include: "613.html"}}],
["322", "Form", { html: {include: "322.html"}}],
["112", "Form", { html: {include: "112.html"}}],
["423", "Form", { html: {include: "423.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["211", "Form", { html: {include: "211.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["723", "Form", { html: {include: "723.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];