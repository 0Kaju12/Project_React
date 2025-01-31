import { BiArrowBack } from "react-icons/bi";
import DatePickerButton from "../Date";
import topBackground from "../Images/new1.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Win({ onDataFetch }) {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
  };
  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    position:'relative',
    paddingBottom:'',
  };
  const cardStyle = {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
  };
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const token = useSelector(state => state.userDetail.token);

  useEffect(() => {
    fetchData(changedate(selectedDate), changedate(selectedEndDate));
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return; // Prevent duplicate submissions

    setIsSubmitting(true);
    console.log("From Date:", selectedDate);
    console.log("To Date:", selectedEndDate);

    const startdate1 = changedate(selectedDate);
    const enddate1 = changedate(selectedEndDate);

    try {
      await fetchData(startdate1, enddate1);
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchData = async (startdate1, enddate1) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "ci_session=7c38fc1fc455fca9846d688fb8343f5c7ea71bee"
    );

    const raw = JSON.stringify({
      env_type: "Prod",
      app_key: "jAFaRUulipsumXLLSLPFytYvUUsgfh",
      unique_token: token,
      date_from: startdate1,
      date_to: enddate1
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://khatrimatka.online/api-galidisawar-wining-history-data",
      requestOptions
    );
    const result = await response.json();
    if (result?.status === true) onDataFetch(true, result);
    else onDataFetch(false, null);
  };

  const changedate = (selectedDate) => {
    if (selectedDate === null) return;
    const startday = selectedDate.getDate(); // Returns the day of the month (1-31)
    const startmonth = selectedDate.getMonth() + 1; // Returns the month (0-11)
    const startyear = selectedDate.getFullYear();
    const date = startmonth + '/' + startday + '/' + startyear;
    return date;
  }

  const back = () => {
    navigate('/imp');
  };

  return (
    <>
    <div className="border shadow-md z-10 " style={backStyle}>
          <div className="font-bold flex items-center justify-center text-2xl mt-2"><h1>GALI DISAWAR WINS </h1></div>
      <div style={backStyle} className="text-black">
      <div className="flex justify-center item-center p-1">
          <div className="border shadow-md" style={cardStyle}>
            {/* <p className="inline-block rounded p-3 border border-white  bg-blue-950 w-full">Select Dates</p> */}
            <p className="font-bold">From Date</p>
            <DatePickerButton selectedDate={selectedDate} onDateChange={handleDateChange} />
            <p className="mt-1 font-bold">To Date</p>
            <DatePickerButton selectedDate={selectedEndDate} onDateChange={handleEndDateChange} />
            <div className="flex justify-center">
              <button
                className="p-3 border border-black-500 rounded mt-2  bg-yellow-600 hover:bg-yellow-500 w-full font-bold text-white"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Win;
