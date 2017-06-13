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
    "721",
"823",
"121",
"911",
"311",
"1013",
"213",
"1213",
"511",
"612",
"423",
"1113",
"513",
"122",
"422",
"212",
"1012",
"722",
"912",
"1211",
"613",
"313",
"822",
"1112",
"3_821",
"3_421",
"3_1111",
"3_512",
"3_611",
"3_723",
"3_913",
"3_123",
"3_312",
"3_1212",
"3_211",
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
    ["721", "Form", { html: {include: "721.html"}}],
["823", "Form", { html: {include: "823.html"}}],
["121", "Form", { html: {include: "121.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["311", "Form", { html: {include: "311.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["213", "Form", { html: {include: "213.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["511", "Form", { html: {include: "511.html"}}],
["612", "Form", { html: {include: "612.html"}}],
["423", "Form", { html: {include: "423.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["513", "Form", { html: {include: "513.html"}}],
["122", "Form", { html: {include: "122.html"}}],
["422", "Form", { html: {include: "422.html"}}],
["212", "Form", { html: {include: "212.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["722", "Form", { html: {include: "722.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["613", "Form", { html: {include: "613.html"}}],
["313", "Form", { html: {include: "313.html"}}],
["822", "Form", { html: {include: "822.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["3_821", "Form", { html: {include: "3_821.html"}}],
["3_421", "Form", { html: {include: "3_421.html"}}],
["3_1111", "Form", { html: {include: "3_1111.html"}}],
["3_512", "Form", { html: {include: "3_512.html"}}],
["3_611", "Form", { html: {include: "3_611.html"}}],
["3_723", "Form", { html: {include: "3_723.html"}}],
["3_913", "Form", { html: {include: "3_913.html"}}],
["3_123", "Form", { html: {include: "3_123.html"}}],
["3_312", "Form", { html: {include: "3_312.html"}}],
["3_1212", "Form", { html: {include: "3_1212.html"}}],
["3_211", "Form", { html: {include: "3_211.html"}}],
["3_1011", "Form", { html: {include: "3_1011.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];