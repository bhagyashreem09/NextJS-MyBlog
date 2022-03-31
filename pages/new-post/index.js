import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";
import NewPostForm from "../../components/posts/NewPostForm";

function NewPostPage() {
  const router = useRouter();

  async function addPostHandler(enteredPostData) {
    const response = await fetch("/api/new-post", {
      // this will trigger the api function.
      method: "POST",
      body: JSON.stringify(enteredPostData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      console.log("data post failed");
    }
    if (response.ok) {
      console.log("data post success");
    }

    router.replace("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a new Post</title>
        <meta
          name="description"
          content="Share what you are currently doing or feeling, just a few clicks away!"
        />
      </Head>
      <NewPostForm onAddPost={addPostHandler} />;
    </Fragment>
  );
}

export default NewPostPage;