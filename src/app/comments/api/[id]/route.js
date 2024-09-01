export async function PATCH(request, {params}) {
    const body = await request.json()
    const index = comments.findIndex(c => c.id === parseInt(params.id))
    comments[index] = {
        content: body.content
    }
    return Response.json({
        message : "comments updated",
        comments})
  }


  export async function DELETE({params}){
    console.log(params.id)
    const newComments = comments.filter(c => c.id !== parseInt(params.id))

    return Response.json({
        message : "comments deleted successfully",
        newComments
    })
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