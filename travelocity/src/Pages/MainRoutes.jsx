import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Searchbar from '../Components/Searchbar'
import SearchBox from '../Components/SearchBox'
import Homepage from './Homepage'
import HotelDetail from './HotelDetail'

import HotelList from '../Components/HotelList'


const MainRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<Homepage/>} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/Hoteldetail" element={<HotelDetail />} />

        <Route path="/hotels" element={<HotelList />} />

    </Routes>
  )
}

export default MainRoutes