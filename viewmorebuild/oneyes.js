import React, { useState, useEffect } from 'react';
import './oneyes.css'; 

const ConstructionEstimation = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [totalSquareFeet, setTotalSquareFeet] = useState(getRandomSquareFeet());

  const [result, setResult] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    setTotalSquareFeet(getRandomSquareFeet());
  }, []);

  function getRandomSquareFeet() {
    return Math.floor(Math.random() * 2000) + 2;
  }

  const estimateCost = () => {
    if (isNaN(totalSquareFeet) || totalSquareFeet <= 0) {
      setResult('Please enter a valid positive number for Total Square Feet.');
      return;
    }

    if (imageUrl) {
      processImage(imageUrl, parseFloat(totalSquareFeet))
        .then((constructionDetails) => {
          displayImageFromUrl(imageUrl);
          const costEstimation = calculateCost(constructionDetails);
          displayCosts(costEstimation);
        })
        .catch((error) => {
          setResult(`Error: ${error.message}`);
        });
    } else {
      setResult('Please provide an image URL.');
    }
  };

  const processImage = (url, squareFeet) => {
    return new Promise((resolve, reject) => {
      const constructionDetails = {
        totalArea: squareFeet,
        cementCostPerSqFt: 380,
        brickCostPerUnit: 409,
        steelCostPerKg: 320,
        sandCostPerCubicFt: 108,
        woodCostPerCubicFt: 478,
        glassCostPerSqFt: 584,
        paintCostPerSqFt: 5356,
      };

      resolve(constructionDetails);
    });
  };

  const displayImageFromUrl = (url) => {
    setUploadedImage(url);
  };

  const calculateCost = (constructionDetails) => {
    const {
      totalArea,
      cementCostPerSqFt,
      brickCostPerUnit,
      steelCostPerKg,
      sandCostPerCubicFt,
      woodCostPerCubicFt,
      glassCostPerSqFt,
      paintCostPerSqFt,
    } = constructionDetails;

    const cementCost = totalArea * cementCostPerSqFt;
    const brickCost = totalArea * brickCostPerUnit;
    const steelCost = totalArea * steelCostPerKg;
    const sandCost = totalArea * sandCostPerCubicFt;
    const woodCost = totalArea * woodCostPerCubicFt;
    const glassCost = totalArea * glassCostPerSqFt;
    const paintCost = totalArea * paintCostPerSqFt;
    const totalCost = cementCost + brickCost + steelCost + sandCost + woodCost + glassCost + paintCost;

    return {
      cementCost,
      brickCost,
      steelCost,
      sandCost,
      woodCost,
      glassCost,
      paintCost,
      totalCost,
    };
  };

  const displayCosts = (costEstimation) => {
    setResult(
      `
        Estimated Cement Cost: Rs${costEstimation.cementCost}<br>
        Estimated Brick Cost: Rs${costEstimation.brickCost}<br>
        Estimated Steel Cost: Rs${costEstimation.steelCost}<br>
        Estimated Sand Cost: Rs${costEstimation.sandCost}<br>
        Estimated Wood Cost: Rs${costEstimation.woodCost}<br>
        Estimated Glass Cost: Rs${costEstimation.glassCost}<br>
        Estimated Paint Cost: Rs${costEstimation.paintCost}<br>
        Total Estimated Cost: Rs${costEstimation.totalCost}
      `
    );
  };

  return (
    <div className="construction-form">
      <label htmlFor="imageUrlInput">Image URL:</label>
      <input
        type="text"
        id="imageUrlInput"
        placeholder="Enter Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <br />

      <label htmlFor="squareFeetInput" className="hidden">
        Total Square Feet:
      </label>
      <input
        type="number"
        id="squareFeetInput"
        placeholder="Enter Total Square Feet"
        className="hidden"
        value={totalSquareFeet}
        readOnly
      />

      <br />

      <button onClick={estimateCost}>Estimate Cost</button>
      <div dangerouslySetInnerHTML={{ __html: result }}></div>
      {uploadedImage && (
        <img
          id="uploadedImage"
          src={uploadedImage}
          alt="Uploaded Construction Image"
          className="uploaded-image"
        />
      )}
    </div>
  );
};

export default ConstructionEstimation;
