function SignUp() {
  return (
    <>
      <header>
        <img src="image.jpg" alt="Header Image" />
        <h1>Pet Finder</h1>
      </header>
      <main>
        <div className="container">
          <img src="bigpicture.jpg" />
          <div className="text-content">
            <h1>A wagging tail is the best welcome Home!</h1>
            <p>Sign up with email address</p>
            <input type="text" placeholder="Yourname@gmail.com" />
            <button>Sign up</button>
            <p>or continue with</p>
            <button>google</button>
            <button>facebook</button>
          </div>
        </div>
      </main>
      <footer>
        <p>Find & adopt</p>
      </footer>
    </>
  );
}
export default SignUp;
