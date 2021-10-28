import React from "react";

const DetailsHeader = (props) => {
  const { teamLogo,strStadiumThumb } = props;

  let header ={
    backgroundImage : `linear-gradient(45deg, #2c3a47ad, #2c3a47ad),url("${strStadiumThumb}")`
  }
  return (
    <div>
      <div className="detailHeader" style={header}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-thumbnail">
                <div className="header-logo">
                  <img className="img-fluid" src={teamLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;