import React from "react";

const getDetailsPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
};

const page = async ({ params }) => {
  const details = await getDetailsPost(params.id);
  console.log(details);
  return (
    <div className="h-screen">
      <h1>Title: {details.title}</h1>
      <p>Description: {details.body}</p>
    </div>
  );
};

export default page;
