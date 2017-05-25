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
    "3_411",
"3_1212",
"3_512",
"3_1111",
"3_713",
"3_321",
"3_622",
"3_112",
"222",
"823",
"1012",
"913",
"1011",
"412",
"621",
"221",
"111",
"711",
"822",
"513",
"911",
"1211",
"322",
"1113",
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
    ["3_411", "Form", { html: {include: "3_411.html"}}],
["3_1212", "Form", { html: {include: "3_1212.html"}}],
["3_512", "Form", { html: {include: "3_512.html"}}],
["3_1111", "Form", { html: {include: "3_1111.html"}}],
["3_713", "Form", { html: {include: "3_713.html"}}],
["3_321", "Form", { html: {include: "3_321.html"}}],
["3_622", "Form", { html: {include: "3_622.html"}}],
["3_112", "Form", { html: {include: "3_112.html"}}],
["222", "Form", { html: {include: "222.html"}}],
["823", "Form", { html: {include: "823.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["412", "Form", { html: {include: "412.html"}}],
["621", "Form", { html: {include: "621.html"}}],
["221", "Form", { html: {include: "221.html"}}],
["111", "Form", { html: {include: "111.html"}}],
["711", "Form", { html: {include: "711.html"}}],
["822", "Form", { html: {include: "822.html"}}],
["513", "Form", { html: {include: "513.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["322", "Form", { html: {include: "322.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];