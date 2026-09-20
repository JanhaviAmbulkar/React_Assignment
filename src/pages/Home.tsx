import Card from "../components/cards/Card";

function Home() {
  return (
    <main className="home-page">
      <h1>Welcome to My React App</h1>
      <p>This is the Home page built with React and TypeScript.</p>

      <section className="card-container">
        <Card
          title="Reusable Components"
          description="Build clean and maintainable user interfaces with reusable components."
          buttonText="Learn More"
          onButtonClick={() => alert("Welcome to my React project!")}
        />
      </section>
    </main>
  );
}

export default Home;