import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/config/mongodb";
import Offert from "@/models/propertyModel";

export async function GET(res) {
  await connect();
  try {
    const getAllOfferts = await Offert.find();
    return NextResponse.json({
      message: "All offert get",
      success: true,
      getAllOfferts,
    });
  } catch (error) {
    return NextResponse.json({ message: "some thing wents wrong" });
  }
}
