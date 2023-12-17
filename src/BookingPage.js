// BookingPage.js
import React, { useState } from 'react';
import BookingForm from './BookingForm';
import { submitAPI } from './substitute-api'; // Import the submitAPI function

const BookingPage = ({ availableTimes, dispatch }) => {
  const [bookingResult, setBookingResult] = useState(null);

  const submitForm = async (formData) => {
    try {
      // Logic to submit the form data and get the result
      const result = await submitAPI(formData);
      setBookingResult(result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section>
      <article>
        <h2>Book a Table</h2>
        {/* Include the BookingForm component and pass necessary props */}
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </article>
      {/* Display the booking result, if available */}
      {bookingResult && (
        <div>
          <h3>Booking Result:</h3>
          <p>{bookingResult}</p>
        </div>
      )}
    </section>
  );
};

export default BookingPage;
