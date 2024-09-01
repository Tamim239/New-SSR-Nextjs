export async function GET() {
  return Response.json(comments, {
    headers: {
      "Set-Cookie" : "theme=dark"
    }
  });
}

export async function POST(request) {
  const newComment = await request.json();
  comments.push({
    id: comments.length + 1,
    content: newComment.content,
    author: newComment.author,
  });
  return Response.json({
    message: "new comment added",
    comments,
  });
}

const comments = [
  {
    id: 1,
  
    author: "John Doe1",
  },
  {
    id: 2,
    
    author: "John Doe2",
  },
  {
    id: 3,
    author: "John Doe3",
  },
];
