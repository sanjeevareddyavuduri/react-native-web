/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isWebColor = color => color === 'currentcolor' || color === 'currentColor' || color === 'inherit' || color.indexOf('var(') === 0;
export default isWebColor;