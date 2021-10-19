import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
  const { serviceId } = useParams();

  const [appointment, setAppointment] = useState([]);
  const [singleAppointment, setSingleAppointment] = useState();
  useEffect(() => {
    fetch('/singleService.json')
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);

  useEffect(() => {
    const foundAppointment = appointment.find(
      (service) => service.id === serviceId
    );
    setSingleAppointment(foundAppointment);
  }, [appointment]);

  return (
    <div className="text-primary">
      <h2>This is Appointment: {serviceId}</h2>
      <h2>
        Wellcome to the best dental clinic in the city.{' '}
        {singleAppointment?.name}
      </h2>
      <br />
      <br />
      <br />
      <br />

      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII="
        alt=""
      />
    </div>
  );
};

export default Appointment;
