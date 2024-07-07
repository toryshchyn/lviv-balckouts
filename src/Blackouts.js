import React, { useState, useEffect } from "react";
import logoImg from './logo-img.svg';
import { format } from "date-fns";

const ElectricityStatusApp = () => {
  const [selectedGroup, setSelectedGroup] = useState(
    localStorage.getItem("selectedGroup") || "1.1"
  );

  const [currentTime, setCurrentTime] = useState(new Date());
  const [customTime, setCustomTime] = useState(new Date());
  const [currentElectricityData, setCurrentElectricityData] = useState(null);
  const [nextDayElectricityData, setNextDayElectricityData] = useState(null);
  const [currentDate, setCurrentDate] = useState(getDateString(currentTime));

  function getDateString(date) {
    return format(date, "yyyy-MM-dd");
  }

  useEffect(() => {
    localStorage.setItem("selectedGroup", selectedGroup);
  }, [selectedGroup]);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = new Date();
      setCurrentTime(newTime);
      setCurrentDate(getDateString(newTime));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const getNextDate = () => {
      const nextDate = new Date(currentDate);
      nextDate.setDate(nextDate.getDate() + 1);
      return getDateString(nextDate);
    };

    const nextDate = getNextDate();
    fetch('/electricityDataByDate.json')
      .then(response => response.json())
      .then(data => {
        const dateData = data.find(item => item.date === currentDate);
        setCurrentElectricityData(dateData ? dateData.electricityData : null);
        const nextDateData = data.find(item => item.date === nextDate);
        setNextDayElectricityData(nextDateData ? nextDateData.electricityData : null);
      })
      .catch(error => console.error('Error fetching electricity data:', error));

      console.log('Fetching electricity data for date:', currentDate);
  }, [currentDate]); // Only re-fetch when the date changes

  const getElectricityStatus = (group, time) => {
    const hour = time.getHours();
    const isNextDay = time.getDate() !== currentTime.getDate();
    const electricityData = isNextDay ? nextDayElectricityData : currentElectricityData;
    if (!electricityData) return false;
    const groupData = electricityData.groups.find((g) => g.id === group);
    return groupData.schedule[hour].hasElectricity;
  };

  const getCurrentStatus = () => {
    if (!currentElectricityData) return false;
    return getElectricityStatus(selectedGroup, currentTime);
  };

  const getFutureStatus = (minutes) => {
    if (!currentElectricityData || (minutes > (24 - currentTime.getHours()) * 60 && !nextDayElectricityData)) return false;
    const futureTime = new Date(currentTime.getTime() + minutes * 60000);
    return getElectricityStatus(selectedGroup, futureTime);
  };

  const getCustomTimeStatus = () => {
    if (!currentElectricityData || (customTime.getDate() !== currentTime.getDate() && !nextDayElectricityData)) return false;
    return getElectricityStatus(selectedGroup, customTime);
  };

  const handleCustomTimeChange = (e) => {
    console.log(e.target.value);
    const [hours, minutes] = e.target.value.split(":");
    const newDate = new Date(customTime);
    newDate.setHours(parseInt(hours));
    newDate.setMinutes(parseInt(minutes));
    setCustomTime(newDate);
  };

  const formatDateTimeLocal = (date) => {
    return (
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0")
    );
  };

  const getStatusText = (status) => (status ? "Включено" : "Відключено");
  const getStatusColor = (status) => (status ? "lightgreen" : "lightcoral");

  const StatusDisplay = ({ status }) => (
    <span
      style={{
        backgroundColor: getStatusColor(status),
        padding: "2px 5px",
        borderRadius: "3px",
      }}
    >
      {getStatusText(status) || "Невідомо"}
    </span>
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "320px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "20px",
        }}
      >
        <div>
          <img src={logoImg} alt="Лого" style={{ width: "40px" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          <h1 style={{ fontSize: "24px", margin: "0" }}>Блекаути у Львові</h1>
        </div>
      </div>
      {
        !currentElectricityData
        ? <div style={{ color: 'red'}}>Приносимо вибачення. <br/>Дані на поточний день не завантажені. Вони завантажуються вручну як тільки стають доступні публічно, тому можливі затримки. <br/>Спробуйте пізніше.</div>
        : <div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="group-select"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Оберіть групу:
            </label>
            <select
              id="group-select"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              style={{ width: "100%", padding: "5px" }}
            >
              {currentElectricityData.groups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.id}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                backgroundColor: getCurrentStatus()
                  ? "lightgreen"
                  : "lightcoral",
                borderRadius: "4px",
                padding: "4px",
                paddingLeft: "10px",
              }}
            >
              <p>
                Станом на зараз: <b>{currentTime.toLocaleTimeString()}</b>
                <br />
                {getStatusText(getCurrentStatus())}
              </p>
            </div>

            <p>
              {getCurrentStatus() ? (
                <div>
                  Найближче відключення:{" "}
                  {findClosestPowerOffTime(selectedGroup)?.toLocaleTimeString()}
                  <br />
                  Через: <br />
                  {timeSpanLabelBeforeLightOff()}
                </div>
              ) : (
                <div>
                  Найближче включення:{" "}
                  {findClosestPowerOnTime(selectedGroup)?.toLocaleTimeString()}{" "}
                  <br />
                  Через: {timeSpanLabelBeforeLightOn()}
                </div>
              )}
            </p>

            <div style={{ marginTop: "20px" }}>Наступні 6 годин:</div>
            <div style={{ display: "flex", paddingTop: "20px" }}>
              {Array.from({ length: 6 }, (_, index) => index + 1).map(
                (hours) => (
                  <div
                    key={hours}
                    style={{
                      width: "calc(100% / 6)",
                      backgroundColor: getStatusColor(
                        getFutureStatus((hours - 1) * 60)
                      ),
                      height: "4px",
                      position: "relative",
                    }}
                  >
                    {hours !== 6 && (
                      <>
                        <div
                          style={{
                            position: "absolute",
                            right: 0,
                            top: -2,
                            width: "8px",
                            height: "8px",
                            borderRadius: "4px",
                            backgroundColor: getStatusColor(
                              getFutureStatus(hours * 60)
                            ),
                          }}
                        ></div>
                        <div
                          style={{
                            position: "absolute",
                            right: -16,
                            top: -14,
                            padding: "2px",
                            fontSize: "8px",
                            borderRadius: "4px",
                            backgroundColor: getStatusColor(
                              getFutureStatus(hours * 60)
                            ),
                          }}
                        >
                          {getStarteOfNthHourFromNow(hours).toLocaleTimeString(
                            [],
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          <fieldset
            style={{
              borderRadius: "8px",
              marginBottom: "10px",
              marginTop: "30px",
            }}
          >
            <legend>Перевірити статус у певний час</legend>

            <select
              id="custom-time"
              value={formatDateTimeLocal(customTime)}
              onChange={handleCustomTimeChange}
              style={{ width: "98%", padding: "5px" }}
            >
              {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                <option
                  key={hour}
                  value={hour.toString().padStart(2, "0") + ":00"}
                >
                  {hour.toString().padStart(2, "0")}:00
                </option>
              ))}
            </select>
            <p style={{ marginTop: "10px" }}>
              <StatusDisplay status={getCustomTimeStatus()} />
            </p>
          </fieldset>

          <i style={{ fontSize: "10px", color: `#BFBFBF` }}>
            *Дана версія працює у межах одного дня. Дані можуть бути
            неактуальними. Усі години можливого відключення трактуються як
            години з відключенням електроенергії.
          </i>

          {!nextDayElectricityData && (
            <div>
              <i
                style={{ fontSize: "10px", color: "orange", marginTop: "20px" }}
              >
                Дані на наступний день не завантажені
              </i>
            </div>
          )}
        </div>
      }
    </div>
  );

  function getStarteOfNthHourFromNow(n) {
    const currentTime = new Date();
    const nextHour = new Date(currentTime);
    nextHour.setHours(currentTime.getHours() + n);
    nextHour.setMinutes(0);
    nextHour.setSeconds(0);
    return nextHour;
  }

  function timeSpanLabelBeforeLightOff() {
    const timeBeforePowerOffMinutes = Math.abs(calculateTimeSpan(findClosestPowerOffTime(selectedGroup), currentTime))
    const hours = Math.floor(timeBeforePowerOffMinutes / 60);
    const minutes = timeBeforePowerOffMinutes % 60;
    return `${hours} годин ${minutes} хвилин`;
  }

  function timeSpanLabelBeforeLightOn() {
    const timeBeforePowerOffMinutes = Math.abs(calculateTimeSpan(findClosestPowerOnTime(selectedGroup), currentTime))
    const hours = Math.floor(timeBeforePowerOffMinutes / 60);
    const minutes = timeBeforePowerOffMinutes % 60;
    return `${hours} годин ${minutes} хвилин`;
  }

  function calculateTimeSpan(startTime, endTime) {
    if (startTime == null || endTime == null) {
      return 1000000;
    }

    const timeDiff = endTime.getTime() - startTime.getTime();
    const minutes = Math.floor(timeDiff / (1000 * 60));
    return minutes;
  }

  function findClosestPowerOnTime(group) {
    const currentHour = currentTime.getHours();
    const currentSchedule = currentElectricityData.groups.find((g) => g.id === group).schedule;
    const nextDaySchedule = nextDayElectricityData?.groups.find((g) => g.id === group)?.schedule;

    for (let i = 0; i < 24; i++) {
      const nextHour = (currentHour + i) % 24;
      if (i < (24 - currentHour)) {
        if (currentSchedule[nextHour].hasElectricity) {
          const nextTime = new Date(currentTime);
          nextTime.setHours(nextHour);
          nextTime.setMinutes(0);
          nextTime.setSeconds(0);
          return nextTime;
        }
      } else {
        if (nextDaySchedule && nextDaySchedule[nextHour].hasElectricity) {
          const nextTime = new Date(currentTime);
          nextTime.setDate(currentTime.getDate() + 1);
          nextTime.setHours(nextHour);
          nextTime.setMinutes(0);
          nextTime.setSeconds(0);
          return nextTime;
        }
      }
    }
    return null;
  }

  function findClosestPowerOffTime(group) {
    const currentHour = currentTime.getHours();
    const currentSchedule = currentElectricityData.groups.find((g) => g.id === group).schedule;
    const nextDaySchedule = nextDayElectricityData?.groups.find((g) => g.id === group)?.schedule;

    for (let i = 0; i < 24; i++) {
      const nextHour = (currentHour + i) % 24;
      if (i < (24 - currentHour)) {
        if (!currentSchedule[nextHour].hasElectricity) {
          const nextTime = new Date(currentTime);
          nextTime.setHours(nextHour);
          nextTime.setMinutes(0);
          nextTime.setSeconds(0);
          return nextTime;
        }
      } else {
        if (nextDaySchedule && !nextDaySchedule[nextHour].hasElectricity) {
          const nextTime = new Date(currentTime);
          nextTime.setDate(currentTime.getDate() + 1);
          nextTime.setHours(nextHour);
          nextTime.setMinutes(0);
          nextTime.setSeconds(0);
          return nextTime;
        }
      }
    }
    return null;
  }
};

export default ElectricityStatusApp;
