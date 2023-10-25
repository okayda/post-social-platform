import Post from "@/components/forms/Post";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect("/onboarding");

  const userId = userInfo._id;

  return (
    <>
      <h1 className="head-text mb-2">Create Post</h1>
      <Post userId={String(userId)} />
    </>
  );
}

export default Page;
