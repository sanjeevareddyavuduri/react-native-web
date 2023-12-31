/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

import * as React from 'react';
import StyleSheet from '../StyleSheet';
import View from '../View';
var RootTagContext = /*#__PURE__*/React.createContext(null);
var AppContainer = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  var children = props.children,
    WrapperComponent = props.WrapperComponent;
  var innerView = /*#__PURE__*/React.createElement(View, {
    children: children,
    key: 1,
    style: styles.appContainer
  });
  if (WrapperComponent) {
    innerView = /*#__PURE__*/React.createElement(WrapperComponent, null, innerView);
  }
  return /*#__PURE__*/React.createElement(RootTagContext.Provider, {
    value: props.rootTag
  }, /*#__PURE__*/React.createElement(View, {
    ref: forwardedRef,
    style: styles.appContainer
  }, innerView));
});
AppContainer.displayName = 'AppContainer';
export default AppContainer;
var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    pointerEvents: 'box-none'
  }
});