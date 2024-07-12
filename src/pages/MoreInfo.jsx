function MoreInfo() {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src="https://th.bing.com/th?id=OIP.lON_KKE1mwC7yYXeSjwvtAHaGy&w=261&h=239&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
          <h1>Pet Fider</h1>
        </div>
        <div className="body">
          <div className="images">
            <div className="big image">
              <img src="image.jpg" />
            </div>
            <div className="small images">
              <img src="image.jpg" />
              <img src="image.jpg" />
              <img src="image.jpg" />
            </div>
          </div>
          <div className="list">
            <h2>About pet.name</h2>
            <li>Species:</li>
            <li>Sex:</li>
            <li>Breed:</li>
            <li>Size:</li>
            <li>Age:</li>
            <li>special needs:</li>
            <li>Color:</li>
          </div>
        </div>
        <div className="footer">
          <p>Find & Adopt</p>
        </div>
      </div>
    </>
  );
}

export default MoreInfo;
