import { BaseType, Selection, select } from "d3-selection";
import { SelectionOrTransition } from "d3-transition";
import { Transition } from "d3-transition";

const selection = select("body");

const updatedSelection = selection.attr("foo", "bar").style("color", "red");

const transition = selection.transition();

const updatedTransition = transition.attr("foo", "bar").style("color", "red");

function testType(
  selectionOrTransition: SelectionOrTransition<BaseType, any, BaseType, any>
) {
  return selectionOrTransition
    .attr("foo", "bar")
    .style("color", "red")
    .selection();
}
