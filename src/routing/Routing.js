import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'

export default function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="section1" element={<Section1 />} /> */}
    </Routes>
  )
}
