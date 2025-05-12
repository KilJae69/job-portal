/* eslint-disable @next/next/no-img-element */

import { truncateWithEllipsis } from "@/lib/utils";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const hasDescription = searchParams.has("description");
    const title = hasTitle
  ? truncateWithEllipsis(searchParams.get("title"), 100)
  : "Talent Link BiH Website"

const description = hasDescription
  ? truncateWithEllipsis(searchParams.get("description"), 140)
  : "Your go-to platform for foreign workforce."

    

   // const hasPill = searchParams.has("pill");
   // const pill = hasPill && searchParams.get("pill");

    const fontData = await fetch(
      new URL("../../../fonts/Poppins-SemiBold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const logoData = await fetch(
      new URL("../../../public/logo.png", import.meta.url)
    ).then((res) => res.arrayBuffer());
    const avatarData = await fetch(
      new URL("../../../public/images/about-cooperation.png", import.meta.url)
    ).then((res) => res.arrayBuffer());

    // Convert ArrayBuffer to base64
    const logoBase64 = Buffer.from(logoData).toString("base64");
    const logoUrl = `data:image/png;base64,${logoBase64}`;

    const avatarBase64 = Buffer.from(avatarData).toString("base64");
    const avatarUrl = `data:image/png;base64,${avatarBase64}`;

    console.log(title,description);

    return new ImageResponse(
      (
        <div tw="flex flex relative w-full h-full items-center justify-center bg-white ">
          
          <div tw="w-full flex flex-col pt-8 items-center justify-between h-full bg-blue-100">
            <img
              src={logoUrl}
              alt="spark logo"
              tw="ml-8"
              width={300}
              height={120}
            />
            <img src={avatarUrl} alt="avatar" className="aspect-square" width={400} height={400} />
          </div>
        </div>
      ),
      {
        emoji: "twemoji",
        fonts: [
          {
            name: "Poppins",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    return new Response(`Failed to generate OG image - ${e}`, { status: 500 });
  }
}
