import React from "react";
import Nav from "../components/Nav";

function NotFound() {
  return (
    <>
      <Nav />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
          paddingBottom: "50px",
        }}
      >
        <svg
          id="error-404"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <path
            id="Path_18"
            data-name="Path 18"
            d="M45.833,0H4.167A4.172,4.172,0,0,0,0,4.167V45.833A4.172,4.172,0,0,0,4.167,50H45.833A4.172,4.172,0,0,0,50,45.833V4.167A4.172,4.172,0,0,0,45.833,0ZM4.167,1.667H45.833a2.5,2.5,0,0,1,2.5,2.5v2.5H1.667v-2.5A2.5,2.5,0,0,1,4.167,1.667ZM45.833,48.333H4.167a2.5,2.5,0,0,1-2.5-2.5V8.333H48.333v37.5A2.5,2.5,0,0,1,45.833,48.333Zm0,0"
            fill="#ff003b"
          />
          <path
            id="Path_19"
            data-name="Path 19"
            d="M48,32h1.662v1.662H48Zm0,0"
            transform="translate(-43.013 -28.675)"
            fill="#ff003b"
          />
          <path
            id="Path_20"
            data-name="Path 20"
            d="M80,32h1.662v1.662H80Zm0,0"
            transform="translate(-71.666 -28.675)"
            fill="#ff003b"
          />
          <path
            id="Path_21"
            data-name="Path 21"
            d="M112,32h1.662v1.662H112Zm0,0"
            transform="translate(-100.332 -28.675)"
            fill="#ff003b"
          />
          <path
            id="Path_22"
            data-name="Path 22"
            d="M176,32h23.273v1.662H176Zm0,0"
            transform="translate(-157.625 -28.675)"
            fill="#ff003b"
          />
          <path
            id="Path_23"
            data-name="Path 23"
            d="M86.646,217.971v2.494h1.662v-2.494H90.8v-1.662H88.308v-7.481a.831.831,0,0,0-1.48-.52l-6.649,8.312a.831.831,0,0,0,.649,1.351Zm0-6.773v5.111H82.557Zm0,0"
            transform="translate(-71.657 -186.311)"
            fill="#ff003b"
          />
          <path
            id="Path_24"
            data-name="Path 24"
            d="M304.308,208.828a.831.831,0,0,0-1.48-.52l-6.649,8.312a.831.831,0,0,0,.649,1.351h5.818v2.494h1.662v-2.494H306.8v-1.662h-2.494Zm-1.662,2.37v5.111h-4.089Zm0,0"
            transform="translate(-265.141 -186.311)"
            fill="#ff003b"
          />
          <path
            id="Path_25"
            data-name="Path 25"
            d="M202.494,208A2.494,2.494,0,0,0,200,210.494v7.481a2.494,2.494,0,0,0,2.494,2.494h3.325a2.494,2.494,0,0,0,2.494-2.494v-7.481A2.494,2.494,0,0,0,205.818,208Zm4.156,2.494v7.481a.831.831,0,0,1-.831.831h-3.325a.831.831,0,0,1-.831-.831v-7.481a.831.831,0,0,1,.831-.831h3.325A.831.831,0,0,1,206.649,210.494Zm0,0"
            transform="translate(-179.156 -186.315)"
            fill="#ff003b"
          />
          <path
            id="Path_26"
            data-name="Path 26"
            d="M88,160h3.325v1.662H88Zm0,0"
            transform="translate(-78.832 -143.332)"
            fill="#ff003b"
          />
          <path
            id="Path_27"
            data-name="Path 27"
            d="M136,160h21.611v1.662H136Zm0,0"
            transform="translate(-121.805 -143.332)"
            fill="#ff003b"
          />
          <path
            id="Path_28"
            data-name="Path 28"
            d="M360,160h3.325v1.662H360Zm0,0"
            transform="translate(-322.493 -143.332)"
            fill="#ff003b"
          />
          <path
            id="Path_29"
            data-name="Path 29"
            d="M88,360h3.325v1.662H88Zm0,0"
            transform="translate(-78.832 -322.497)"
            fill="#ff003b"
          />
          <path
            id="Path_30"
            data-name="Path 30"
            d="M136,360h21.611v1.662H136Zm0,0"
            transform="translate(-121.805 -322.497)"
            fill="#ff003b"
          />
          <path
            id="Path_31"
            data-name="Path 31"
            d="M360,360h3.325v1.662H360Zm0,0"
            transform="translate(-322.493 -322.497)"
            fill="#ff003b"
          />
        </svg>

        <p
          style={{
            color: "#FF003B",
            fontSize: "30px",
            marginLeft: "20px",
            fontWeight: "lighter",
          }}
        >
          Page not found.
        </p>
      </div>
    </>
  );
}

export default NotFound;
