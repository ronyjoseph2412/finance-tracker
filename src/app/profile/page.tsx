
import ProfilePage from "@/Pages/ProfilePage/ProfilePage";

export default async function Home() {
  // if (!isAuthenticated) {
  //   redirect("/login");
  // }

  return (
    <div>
      <main>
        <ProfilePage />
      </main>
    </div>
  );
}
