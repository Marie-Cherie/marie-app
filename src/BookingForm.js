import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './substitute-api'; 

const BookingForm = ({ updateTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState([]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    initializeTimes();
  }, []);

  const initializeTimes = async () => {
    try {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      const response = await fetchAPI(formattedDate); // Use fetchAPI instead of fetchData
      setTimes(response);
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  const handleDateChange = async (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    try {
      const response = await fetchAPI(selectedDate); // Use fetchAPI instead of fetchData
      setTimes(response);
      updateTimes(selectedDate);
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
    validateForm();
  };

  const handleGuestsChange = (event) => {
    const numberOfGuests = parseInt(event.target.value, 10);
    setGuests(numberOfGuests);
    validateForm();
  };

  const handleOccasionChange = (event) => {
    const selectedOccasion = event.target.value;
    setOccasion(selectedOccasion);
    validateForm();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      date,
      time: event.target['res-time'].value,
      guests,
      occasion,
    };
    const success = await submitAPI(formData); // Use submitAPI instead of the original submit function
    if (success) {
      submitForm(formData);
    }
  };

  const validateForm = () => {
    const isDateValid = date !== '';
    const isGuestsValid = guests >= 1 && guests <= 10;
    const isOccasionValid = occasion !== '';

    setIsFormValid(isDateValid && isGuestsValid && isOccasionValid);
  };

  return (
    <form
      id="bookingForm"
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" required>
        {times.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid}
      />
    </form>
  );
};

export default BookingForm;
