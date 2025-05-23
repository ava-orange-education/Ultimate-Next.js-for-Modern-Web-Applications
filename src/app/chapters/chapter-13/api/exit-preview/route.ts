import { clearDraftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  clearDraftMode();
  return NextResponse.redirect("/blog");
}