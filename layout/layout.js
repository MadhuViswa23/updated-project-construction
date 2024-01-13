import React from "react";
import img1 from '../../../src/project/Assets/3d3.jpg';
import img2 from '../../../src/project/Assets/modern-home-floor-plan-side-view.jpg';
import img3 from '../../../src/project/Assets/3d2.jpg';
import img4 from '../../../src/project/Assets/first-floor-plan-2.jpg';
export default function Layout(){
return(
    <>
       <div className="row">
      <div className="col-md-6">
        <div className="image-gallery">
          <div className="gallery-item">
            <img src={img1} alt="Image 1" style={{ width: '100%', marginBottom: '20px' }} />
          </div>
          <div className="gallery-item">
            <img src={img2} alt="Image 2" style={{ width: '100%', marginBottom: '20px' }} />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="image-gallery">
          <div className="gallery-item">
            <img src={img3} alt="Image 3" style={{ width: '100%', marginBottom: '20px' }} />
          </div>
          <div className="gallery-item">
            <img src={img4} alt="Image 4" style={{ width: '100%', marginBottom: '20px' }} />
          </div>
        </div>
      </div>
    </div>

    
    </>
)    
}