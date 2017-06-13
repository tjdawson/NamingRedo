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
    "3_1113",
"3_722",
"3_1212",
"3_523",
"3_913",
"3_321",
"3_213",
"3_121",
"3_611",
"3_413",
"3_1013",
"3_812",
"912",
"123",
"212",
"1213",
"521",
"612",
"811",
"322",
"1011",
"412",
"723",
"1111",
"323",
"911",
"613",
"1112",
"813",
"721",
"211",
"1012",
"411",
"122",
"522",
"1211",
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
    ["3_1113", "Form", { html: {include: "3_1113.html"}}],
["3_722", "Form", { html: {include: "3_722.html"}}],
["3_1212", "Form", { html: {include: "3_1212.html"}}],
["3_523", "Form", { html: {include: "3_523.html"}}],
["3_913", "Form", { html: {include: "3_913.html"}}],
["3_321", "Form", { html: {include: "3_321.html"}}],
["3_213", "Form", { html: {include: "3_213.html"}}],
["3_121", "Form", { html: {include: "3_121.html"}}],
["3_611", "Form", { html: {include: "3_611.html"}}],
["3_413", "Form", { html: {include: "3_413.html"}}],
["3_1013", "Form", { html: {include: "3_1013.html"}}],
["3_812", "Form", { html: {include: "3_812.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["123", "Form", { html: {include: "123.html"}}],
["212", "Form", { html: {include: "212.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["521", "Form", { html: {include: "521.html"}}],
["612", "Form", { html: {include: "612.html"}}],
["811", "Form", { html: {include: "811.html"}}],
["322", "Form", { html: {include: "322.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["412", "Form", { html: {include: "412.html"}}],
["723", "Form", { html: {include: "723.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
["323", "Form", { html: {include: "323.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["613", "Form", { html: {include: "613.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["813", "Form", { html: {include: "813.html"}}],
["721", "Form", { html: {include: "721.html"}}],
["211", "Form", { html: {include: "211.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["411", "Form", { html: {include: "411.html"}}],
["122", "Form", { html: {include: "122.html"}}],
["522", "Form", { html: {include: "522.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];