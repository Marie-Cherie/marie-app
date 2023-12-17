// Main.js
import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import BookingPage from './BookingPage';
import AboutPage from './AboutPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from './substitute-api'; // Import the API functions

// Reducer function to manage the state of available times
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same available times regardless of the date
      return initializeTimes(action.date);
    default:
      return state;
  }
};

// Function to initialize the initial state for available times
const initializeTimes = (date) => {
  // For now, return the same available times regardless of the date
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

function Main() {
  // State for available times using useReducer
  const [availableTimes, dispatch] = useReducer(reducer, []);
  const navigate = useNavigate();

  // Function to submit the form and navigate to the confirmed booking page
  const submitForm = async (formData) => {
    try {
      // Assuming submitAPI returns a boolean indicating success
      const isBookingSuccessful = await submitAPI(formData);

      if (isBookingSuccessful) {
        // Navigate to the confirmed booking page
        navigate('/confirmed-booking');
      } else {
        // Handle unsuccessful booking
        console.error('Booking submission failed');
      }
    } catch (error) {
      // Handle API call error
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
              fetchAPI={fetchAPI} // Pass the fetchAPI function as a prop
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
