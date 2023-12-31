/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

import TextInputState from '../TextInputState';
var dismissKeyboard = () => {
  TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
};
export default dismissKeyboard;