"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_selection_1 = require("d3-selection");
const selection = (0, d3_selection_1.select)("body");
const updatedSelection = selection.attr("foo", "bar").style("color", "red");
const transition = selection.transition();
const updatedTransition = transition.attr("foo", "bar").style("color", "red");
function testType(selectionOrTransition) {
    return selectionOrTransition
        .attr("foo", "bar")
        .style("color", "red")
        .selection();
}
