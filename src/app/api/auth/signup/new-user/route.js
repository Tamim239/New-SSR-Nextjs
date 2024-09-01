import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const nextJsCollection = db.collection("nextJsUser");
    const newUser = await request.json();
    const res = await nextJsCollection.insertOne(newUser);
    return Response.json({ message: "new user created successfully" });
  } catch (error) {
    return Response.json({ message: "error creating user" });
  }
};
