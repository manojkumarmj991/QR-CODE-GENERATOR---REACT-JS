import React, { useState } from "react";
import "./App.css";
import QRCode from "qrcode.react";

function App() {
  const [qrText, setQrText] = useState("");

  const handleInput = (text) => {
    setQrText(text);
  };

  return (
    <div className="App">
      <h1> QR Code Generator </h1>{" "}
      <div className="input-section">
        <InputComponent handleInput={handleInput} />{" "}
      </div>{" "}
      <OutputComponent qrText={qrText} />{" "}
    </div>
  );
}

const InputComponent = ({ handleInput }) => {
  const handleInputChange = (event) => {
    handleInput(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button onClick={handleInput}> Generate QR </button>{" "}
    </div>
  );
};

const OutputComponent = ({ qrText }) => {
  const downloadQR = () => {
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="output-section">
      <QRCode value={qrText} id="qrcode" />
      <button onClick={downloadQR}> Download QR </button>{" "}
    </div>
  );
};

export default App;
