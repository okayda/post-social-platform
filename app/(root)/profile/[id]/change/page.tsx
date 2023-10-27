import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";

export default async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  const userData = {
    id: user?.id,
    objectId: String(userInfo?._id),

    username: userInfo ? userInfo?.username : user?.username,
    name: userInfo ? userInfo?.name : user?.firstName || "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user?.imageUrl,
  };

  return (
    <div className=" bg-dark-2 max-w-2xl mx-auto p-10 rounded-md">
      <AccountProfile user={userData} />
    </div>
  );
}
