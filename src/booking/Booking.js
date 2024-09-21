

import React, { useState } from 'react';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Footer from '../main-interface/Footer';
import "./booking.css"

const Booking = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleSubmit = () => {
    // Handle the booking logic here
    alert(`Date: ${date}, Time: ${time}`);
  };

  return (
    <>
    <div className='booking'>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Container>
        <Typography className='title' variant="h4" gutterBottom style={{color:"#003366", direction:"rtl", marginBottom:"20px"}}>
          حجز موعد
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <DatePicker
            label="اختيار التاريخ"
            value={date}
            onChange={(newDate) => setDate(newDate)}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="اختيار الوقت"
            value={time}
            onChange={(newTime) => setTime(newTime)}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button variant="contained"  onClick={handleSubmit} style={{color:"white", direction:"rtl", marginBottom:"20px", background:"#003366", fontSize:"20px"}} >
            تأكيد الحجز
          </Button>
        </Box>
      </Container>
    </LocalizationProvider>
    </div>

    <Footer/>
    </>
    
  );
};

export default Booking;
