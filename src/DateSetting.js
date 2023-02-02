import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DateSettings() {
   const [startDate, setStartDate] = useState(new Date());
   const [testData, setTestData] = useState("Testing");

   const handleChange = (date) => {
      setStartDate(date);
   }

   return (
      <div>
         <DatePicker
          selected={startDate}
          onChange={handleChange}
          inline
         />
      </div>
   );
}

export default DateSettings;