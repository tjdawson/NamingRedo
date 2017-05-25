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
    "812",
"411",
"1211",
"321",
"1013",
"222",
"622",
"723",
"112",
"913",
"513",
"1113",
"912",
"811",
"1212",
"323",
"3_511",
"3_721",
"3_111",
"3_223",
"3_1111",
"3_412",
"3_623",
"3_1011",
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
    ["812", "Form", { html: {include: "812.html"}}],
["411", "Form", { html: {include: "411.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["321", "Form", { html: {include: "321.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["222", "Form", { html: {include: "222.html"}}],
["622", "Form", { html: {include: "622.html"}}],
["723", "Form", { html: {include: "723.html"}}],
["112", "Form", { html: {include: "112.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["513", "Form", { html: {include: "513.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["811", "Form", { html: {include: "811.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["323", "Form", { html: {include: "323.html"}}],
["3_511", "Form", { html: {include: "3_511.html"}}],
["3_721", "Form", { html: {include: "3_721.html"}}],
["3_111", "Form", { html: {include: "3_111.html"}}],
["3_223", "Form", { html: {include: "3_223.html"}}],
["3_1111", "Form", { html: {include: "3_1111.html"}}],
["3_412", "Form", { html: {include: "3_412.html"}}],
["3_623", "Form", { html: {include: "3_623.html"}}],
["3_1011", "Form", { html: {include: "3_1011.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];