import React from 'react';
import CarList from '../components/CarList';
import FilterBar from '../components/FilterBar';
import { Toolbar } from '@mui/material';

const Dashboard = () => {
  return (
    <div>
      <FilterBar />
      <CarList />
    </div>
  );
};

export default Dashboard;
