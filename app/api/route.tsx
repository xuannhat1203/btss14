import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const url = new URL(request.url);
  const endpoint = url.pathname.split("/").pop();
  let apiUrls: string[] = [];
  switch (endpoint) {
    case "Route_Handler":
      apiUrls = ["https://fakestoreapi.com/products"];
      break;
    case "users":
      apiUrls = ["https://fakestoreapi.com/products"];
      break;
    case "todos":
      apiUrls = ["https://fakestoreapi.com/products"];
    default:
      return NextResponse.json("lỗi");
  }
  try {
    const responses = await Promise.all(apiUrls.map((url: any) => fetch(url)));
    const dataPromises = responses.map((response: any) => response.json());
    const data = await Promise.all(dataPromises);
    if (data.length === 1) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({
        users: data[0],
        todos: data[1],
      });
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
