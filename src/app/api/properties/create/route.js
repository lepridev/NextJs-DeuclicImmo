import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/config/mongodb";
import Property from "@/models/propertyModel";

export async function POST(req) {
  try {
    await connect();
    const { data } = await req.json();
    const {
      bath,
      bed,
      caution,
      city,
      contenu,
      description,
      location,
      parking,
      price,
      square,
      titre,
    } = await data;
    console.log(bath);
    const createProperty = new Property(data);

    const saveProperty = await createProperty.save();
    return NextResponse.json({
      message: "Property created",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
