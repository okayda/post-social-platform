import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import PostCard from "../cards/PostCard";

interface Props {
  accountId: string;
  accountType: string;
}

const PostsTab = async ({ accountId, accountType }: Props) => {
  let result: any = await fetchUserPosts(accountId);

  if (!result) redirect("/");

  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.posts.map((post: any) => (
        <PostCard
          key={post._id}
          id={post._id}
          content={post.text}
          author={
            accountType === "User"
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: post.author.name,
                  image: post.author.image,
                  id: post.author.id,
                }
          }
          comments={post.children}
        />
      ))}
    </section>
  );
};

export default PostsTab;
