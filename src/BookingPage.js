// BookingPage.js
import React, { useState } from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, dispatch }) => {
  const [bookingResult, setBookingResult] = useState(null);

  const submitForm = async (formData) => {
    // Assume you have some logic to submit the form data
    // and handle the booking result
    try {
      // Logic to submit the form data and get the result
      // For example, you can call an API function here
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
