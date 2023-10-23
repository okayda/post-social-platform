import PostCard from "@/components/cards/PostCard";
import { fetchPosts } from "@/lib/actions/post.actions";

export default async function Home() {
  const result = await fetchPosts(1, 30);

  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No Posts found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <PostCard
                key={post._id}
                id={post._id}
                content={post.text}
                author={post.author}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}
