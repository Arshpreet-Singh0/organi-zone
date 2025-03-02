import UserDashboard from "./(user)/page";

export default async function Dashboard() {
  // const session = await getServerSession(authOptions);

  return (
    <div>
      <UserDashboard />
    </div>
  );
}
