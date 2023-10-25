import Link from "next/link";
import Image from "next/image";

import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect("/onboarding");

  const activity = await getActivity(userInfo._id);

  return (
    <section>
      <h1 className="head-text mb-10">Activity</h1>

      <section className="mt-10 flex flex-col gap-5 ">
        {activity.length > 0 ? (
          <>
            {activity.map((act) => (
              <Link key={act._id} href={`post/${act.parentId}`}>
                <article className="activity-card mb-3">
                  <Image
                    src={act.author.image}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </article>

                <p className="!text-small-regular text-light-1">
                  <span className="mr-1 text-primary-500">
                    {act.author.name}
                  </span>{" "}
                  replied to your post
                </p>
              </Link>
            ))}
          </>
        ) : (
          <p className="!text-regular-base text-light-3">No activity yet</p>
        )}
      </section>
    </section>
  );
}

export default Page;
