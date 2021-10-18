import React from 'react';
import doctor1 from '../../../images/doctor/doctor1.png';
import doctor2 from '../../../images/doctor/doctor2.png';
import doctor3 from '../../../images/doctor/doctor3.png';
import doctor4 from '../../../images/doctor/doctor4.png';
import doctor5 from '../../../images/doctor/doctor5.png';
import doctor6 from '../../../images/doctor/doctor6.png';
import Doctor from '../Doctor/Doctor';

const doctors = [
  {
    id: 1,
    img: doctor1,
    name: 'Monisha Ahmed',
    expertize: 'Root Exper',
  },
  {
    id: 2,
    img: doctor2,
    name: 'Ifath Tanjin',
    expertize: 'Cannel Expert',
  },
  {
    id: 3,
    img: doctor3,
    name: 'Aquib Hasan',
    expertize: 'General Expert',
  },
  {
    id: 4,
    img: doctor4,
    name: 'Shaznin Ahmed',
    expertize: 'Weird Teeth',
  },
  {
    id: 5,
    img: doctor5,
    name: 'Priyanka Dash',
    expertize: 'Whitening Expert',
  },
  {
    id: 6,
    img: doctor6,
    name: 'Akash Ahmed',
    expertize: 'Scalling Expert',
  },
];

const Doctors = () => {
  return (
    <div className="container">
      <h2 className="text-primary">Our Doctors</h2>
      <div className="row">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
