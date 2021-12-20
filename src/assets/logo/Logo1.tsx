import React from 'react'

const Logo = (props: any) => {
  const {
    size, 
    // height,
  } = props;

  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={size} viewBox="0 0 879 1047" enable-background="new 0 0 879 1047" xmlSpace="preserve">  <image id="image0" width="879" height="1047" x="0" y="0"
      href="data:image/png;base64,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" />
    </svg>
  )
}

export default Logo
