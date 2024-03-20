// META: title=validation tests for WebNN API concat operation
// META: global=window,dedicatedworker
// META: script=../resources/utils_validation.js

'use strict';

multi_builder_test(async (t, builder, otherBuilder) => {
  const operandDescriptor = {dataType: 'float32', dimensions: [2, 2]};

  const inputFromOtherBuilder = otherBuilder.input('input', operandDescriptor);

  const input1 = builder.input('input', operandDescriptor);
  const input2 = builder.input('input', operandDescriptor);
  const input3 = builder.input('input', operandDescriptor);

  assert_throws_js(
      TypeError,
      () => builder.concat([input1, input2, inputFromOtherBuilder, input3]));
}, '[concat] throw if any input is from another builder');
