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
    "3_111",
"3_523",
"3_611",
"3_822",
"3_411",
"3_723",
"3_1012",
"3_211",
"913",
"1113",
"323",
"1212",
"911",
"213",
"1112",
"721",
"1011",
"821",
"412",
"522",
"1213",
"322",
"613",
"113",
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
    ["3_111", "Form", { html: {include: "3_111.html"}}],
["3_523", "Form", { html: {include: "3_523.html"}}],
["3_611", "Form", { html: {include: "3_611.html"}}],
["3_822", "Form", { html: {include: "3_822.html"}}],
["3_411", "Form", { html: {include: "3_411.html"}}],
["3_723", "Form", { html: {include: "3_723.html"}}],
["3_1012", "Form", { html: {include: "3_1012.html"}}],
["3_211", "Form", { html: {include: "3_211.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["323", "Form", { html: {include: "323.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["213", "Form", { html: {include: "213.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["721", "Form", { html: {include: "721.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["821", "Form", { html: {include: "821.html"}}],
["412", "Form", { html: {include: "412.html"}}],
["522", "Form", { html: {include: "522.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["322", "Form", { html: {include: "322.html"}}],
["613", "Form", { html: {include: "613.html"}}],
["113", "Form", { html: {include: "113.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];