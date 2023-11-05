import { NextResponse, NextRequest } from "next/server";
import { connect } from "../../../../config/mongodb";
import Offert from "../../../../models/propertyModel";

export async function POST(req) {
  try {
    await connect();
    const { id } = await req.json();

    console.log("backID", id);
    const getOffertById = await Offert.findById(id);
    return NextResponse.json({
      message: " offert get",
      success: true,
      getOffertById,
    });
  } catch (error) {
    return NextResponse.json({ message: "some thing wents wrong" });
  }
}
