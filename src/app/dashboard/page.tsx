import DashboardPage from "@/Pages/Dashboard/DashboardPage";

export default async function Home() {
  // if (!isAuthenticated) {
  //   redirect("/login");
  // }

  return (
    <div>
      <main>
        <DashboardPage />
      </main>
    </div>
  );
}
