export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div className="m-auto text-center">
      <h1 className="text-6xl text-muted-foreground">Welcome to the Page!</h1>
      <p className="mt-2 text-muted-foreground">This page loaded after a 2-second delay.</p>
    </div>
  );
}
