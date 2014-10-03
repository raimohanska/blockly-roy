'use strict';

// Turtle Roy extensions to Blockly block set

Blockly.Blocks['draw_move'] = {
  // Block for moving forward or backwards.
  init: function() {
    var DIRECTIONS =
        [["Move forward", 'fd'],
         ["Move backward", 'bw']];
    this.setColour(160);
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR')
        .appendField(new Blockly.FieldTextInput('100'), 'STEPS')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("tool tip here");
  }
};

Blockly.Blocks['draw_turn'] = {
  init: function() {
    var DIRECTIONS =
        [["Turn right", 'rt'],
         ["Turn left", 'lt']];
    // Append arrows to direction messages.
    DIRECTIONS[0][0] += ' \u21BB';
    DIRECTIONS[1][0] += ' \u21BA';
    this.setColour(160);
    this.appendValueInput('VALUE')
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR')
        .appendField(new Blockly.FieldTextInput('90'), 'DEGREES')
        .setCheck('Number')
        .appendField("Degrees")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("tool tip here");
  }
};

Blockly.TurtleRoy['draw_move'] = function(block) {
  var value = Blockly.TurtleRoy.valueToCode(block, 'VALUE', 0) || '0';
  return block.getFieldValue("DIR") + " " + block.getFieldValue("STEPS")
};


Blockly.TurtleRoy['draw_turn'] = function(block) {
  var value = Blockly.TurtleRoy.valueToCode(block, 'VALUE', 0) || '0';
  return block.getFieldValue("DIR") + " " + block.getFieldValue("DEGREES")
};
