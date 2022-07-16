import { css } from "styled-components";

let _detectedFlexGapSupported = false;
let _isFlexGapSupported = false;
//TODO: js-cookie

export const flexGap = (gap) => {
  if (checkFlexGapSupported()) {
    return css`
      gap: ${gap};
    `;
  }
  return flexGapPolyfill(gap);
};

export const flexGapPolyfill = (gap) => {
  return css`
    margin-left: -${gap};
    margin-top: -${gap};
    & > * {
      margin-left: ${gap};
      margin-top: ${gap};
    }
  `;
};

const checkFlexGapSupported = () => {
  if (_detectedFlexGapSupported) {
    return _isFlexGapSupported;
  }

  // create flex container with row-gap set
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  // create two, elements inside it
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  flex?.parentNode?.removeChild(flex);

  _detectedFlexGapSupported = true;
  _isFlexGapSupported = isSupported;

  return isSupported;
};
