import PcHeader from "./pcHeader";
import React from 'react'
import PcMainContent from "./pcMainContent";
import PcFotter from "./pcFotter";
export default function pcMain() {
  return (
    <div>
      <PcHeader />
      <PcMainContent />
      <PcFotter />
    </div>
  )
}
