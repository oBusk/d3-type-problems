import { BaseType, Selection, select } from "d3-selection";
import { SelectionOrTransition } from "d3-transition";
import { Transition } from "d3-transition";

const selection = select("body");

// using a selection works
const updatedSelection = selection.attr("foo", "bar").style("color", "red");

const transition = selection.transition();

// using a transition works
const updatedTransition = transition.attr("foo", "bar").style("color", "red");

// In any scenario where they can return either a selection or a transition,
// it will fail.
function usingUnion(
  selectionOrTransition:
    | Selection<BaseType, any, BaseType, any>
    | Transition<BaseType, any, BaseType, any>
) {
  return selectionOrTransition
    .attr("foo", "bar")
    .style("color", "red")
    .selection();
}

function selOrTra(
  selectionOrTransition: SelectionOrTransition<BaseType, any, BaseType, any>
) {
  return selectionOrTransition
    .attr("foo", "bar")
    .style("color", "red")
    .selection();
}
