function Explore() {
  const muziObject = { name: "Muzi", image: "../image/muziPic.png" };
  const anesuObject = { name: "Anesu", image: "../image/anesuImage.png" };
  const belindaObject = { name: "Belinda", image: "../image/belindaImage.png" };
  const petArray = [muziObject, anesuObject, belindaObject];

  function PetComponent({ name, image }) {
    return (
      <div className="pet-container">
        <img src={image} />
        <p>{name}</p>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="Header">
          <img src="https://th.bing.com/th?id=OIP.lON_KKE1mwC7yYXeSjwvtAHaGy&w=261&h=239&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
          <h1>Pet Finder</h1>
        </div>
        <div className="text-and-button">
          <p>
            Furever home, furever friend. Level up your happiness: Adopt a pet
            today!
          </p>
          <button>Adopt!</button>
        </div>
        <div className="pet-list">
          {petArray.map((pet, i) => (
            <PetComponent key={i} name={pet.name} image={pet.image} />
          ))}
        </div>
        <div className="footer">
          <p>Find & Adopt</p>
        </div>
      </div>
    </>
  );
}

export default Explore;
