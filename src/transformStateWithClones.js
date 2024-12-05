'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const stateHistory = [];
  let curentState = { ...state };

  for (const act of actions) {
    if (act.type === 'addProperties') {
      curentState = {
        ...curentState,
        ...act.extraData,
      };
    } else if (act.type === 'removeProperties') {
      curentState = { ...curentState };

      for (const key of act.keysToRemove) {
        delete curentState[key];
      }
    } else if (act.type === 'clear') {
      curentState = {};
    }
    stateHistory.push(curentState);
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
