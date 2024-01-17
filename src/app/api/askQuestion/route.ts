/**
 * Used to test the payload of the ask question request.
 * @returns The new question payload.
 */
export async function POST(request: Request) {
  try {
    console.log("POST Request received");
    const newData = await request.json()
    console.log(newData);

    return Response.json({ newData })
  } catch (error) {
    return Response.json({ error })
  }
}