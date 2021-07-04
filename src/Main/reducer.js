 import {
  INIT,
  ADD,
  REMOVE
 } from './actions';

const HOME = (state={ used: [], unused: [] }, action) => {
  switch (action.type){
    case INIT:
      return setCurr(state,action);
    case ADD:
      return newMarket(state,action);
    case REMOVE:
      return removeMarket(state,action);
    default:
      return state;
  }
}

function setCurr(state,action){
  /*  Take first three markets from list for initial state
      Sort into alpha order
  */

  let used = (state.used.length)
                ? state.used
                : action.payload
                  .slice(0,3).map(i=>i)
                  .sort( (a,b) => ( a.symbol > b.symbol ? 1 : -1) );

  /*  List of all items that are not in initial view
      Sort into alpha order
  */
  let unused = action.payload
              .filter( item => ( used.find( item2 => item2.symbol === item.symbol )) ? null : item )
              .sort( (a,b) => ( a.symbol > b.symbol ? 1 : -1) )
  return { used, unused };
}

function newMarket(state,action){
  // Find the item by symbol in the UNUSED (dropdown) list
  let item = [ ...state.unused ].find( item => item.symbol===action.payload.symbol );
  let used = [ ...state.used ];
  // Add the item from UNUSED to USED
  used.push(item);
  // Sort into alpha order
  used.sort( (a,b) => ( a.symbol > b.symbol ? 1 : -1) );
  // remove the item from UNUSED
  let unused = [...state.unused].filter( item => item.symbol !== action.payload.symbol )
  return { used, unused };
}

function removeMarket(state,action){
  // Find the item by symbol in USED
  let item = [ ...state.used ].find( item => item.symbol===action.payload.symbol );
  // Find the index of the item for removal
  let item_index = [ ...state.used ].findIndex( item => item.symbol===action.payload.symbol );
  let used = [...state.used];
  // Remove item from USED
  used.splice(item_index,1);
  let unused = [ ...state.unused ];
  // Add item to UNUSED
  unused.push(item);
  // Sort into alpha order
  unused.sort( (a,b) => ( a.symbol > b.symbol ? 1 : -1) );
  return { used, unused };
}

export default HOME;