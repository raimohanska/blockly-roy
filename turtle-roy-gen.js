'use strict';

goog.provide('Blockly.TurtleRoy')

goog.require('Blockly.Generator')

Blockly.TurtleRoy = new Blockly.Generator('TurtleRoy')

Blockly.TurtleRoy.init = function() {
}
Blockly.TurtleRoy.finish = function(code) {
  return code.replace("  ", " ").replace("( ", "(")
}

Blockly.TurtleRoy.scrub_ = function(block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.TurtleRoy.blockToCode(nextBlock);
  if (nextCode)
    return "s([" + code + ", " + nextCode + "])"
  else
    return code
}

Blockly.TurtleRoy['controls_repeat'] = function(block) {
  var repeats = Number(block.getFieldValue('TIMES'));
  var childCode = Blockly.TurtleRoy.statementToCode(block, "DO")
  return 'r ' + repeats + " (" + childCode + ")"
}
