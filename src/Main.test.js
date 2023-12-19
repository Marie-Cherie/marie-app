// Main.test.js
import { initializeTimes, reducer } from './Main';

test('initializeTimes returns the expected initial state', () => {
  const initialState = initializeTimes();
  const expectedState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  expect(initialState).toEqual(expectedState);
});

test('updateTimes returns the same value provided in the state', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const date = '2023-01-01'; // Provide a sample date
  const updatedState = reducer(initialState, { type: 'UPDATE_TIMES', date });
  expect(updatedState).toEqual(initialState);
});

// Add more tests for edge cases and additional scenarios as needed
