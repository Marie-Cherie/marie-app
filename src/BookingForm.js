// BookingForm.js
import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './substitute-api'; 

const BookingForm = ({ updateTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState([]);
  // ... (rest of the component remains unchanged)

  useEffect(() => {
    initializeTimes();
  }, []);

  const initializeTimes = async () => {
    try {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      const response = await fetchAPI(formattedDate);
      setTimes(response);
      updateTimes(formattedDate); // Update available times based on the initial date
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  const handleDateChange = async (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    try {
      const response = await fetchAPI(selectedDate);
      setTimes(response);
      updateTimes(selectedDate); // Update available times based on the selected date
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
    validateForm();
  };

  // ... (rest of the component remains unchanged)
};

export default BookingForm;
