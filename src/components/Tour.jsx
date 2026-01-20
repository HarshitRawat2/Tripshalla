import React from 'react'
import GallerySection2 from './GallerySection2'
import ExplorationGrid from './ExplorationGrid'
import TourDetails from './TourDetails'
import TripItinerary from './TripItinerary'
import PackageSummary from './PackageSummary'
import PolicyAccordion from './PolicyAccordion'
export default function Tour() {
  return (
    <div>
        <ExplorationGrid/>
        <TourDetails/>
        <TripItinerary/>
        <PackageSummary/>
        <PolicyAccordion/>
    </div>
  )
}
