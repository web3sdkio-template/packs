import React from "react";

export default function Web3sdkioGuideFooter() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          cursor: "pointer",
        }}
        role="button"
        onClick={() =>
          window.open(
            "https://github.com/web3sdkio-example/contract-hub",
            "_blank"
          )
        }
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src={"/github.png"}
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://github.com/web3sdkio-example/contract-hub",
              "_blank"
            )
          }
        />
      </div>
    </>
  );
}
