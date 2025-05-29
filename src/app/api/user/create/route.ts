import { UserType } from "@/app/@types/user/types";
import { db } from "@/lib/firebase/firebase-admin";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function POST(request: Request) {
  const body = (await request.json()) as UserType;

  try {
    const res = await db.collection("agendaments").add({
      name: body.name,
      email: body.email,
      phone: body.phone,
      periodContact: body.periodContact,
      clinicName: body.clinicName,
      id: uuid(),
      createdAt: new Date().toISOString(),
      contacted: false,
    });
    return NextResponse.json({
      message: "User created successfully",
      id: res.id,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 500,
    });
  }
}
