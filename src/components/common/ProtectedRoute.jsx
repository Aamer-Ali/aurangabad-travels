import React from "react";
import { Routes, Route } from "react-router-dom";
import OurPackages from "../our-packages/OurPackages";

function ProtectedRoute() {
  return <Route path="/our-packages-page" element={<OurPackages />} />;
}

export default ProtectedRoute;
