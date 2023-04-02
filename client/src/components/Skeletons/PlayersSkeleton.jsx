import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={200}
    height={230}
    viewBox="0 0 200 230"
    backgroundColor="#6e6e6e"
    foregroundColor="#b0b0b0"
    {...props}
  >
    <rect x="10" y="10" rx="40" ry="40" width="180" height="200" />
  </ContentLoader>
)

export default Skeleton