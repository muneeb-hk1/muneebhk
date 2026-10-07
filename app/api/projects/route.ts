import { NextResponse } from "next/server";
import { projectData } from "../../data/projects";

export async function GET() {
  return NextResponse.json(projectData);
}
