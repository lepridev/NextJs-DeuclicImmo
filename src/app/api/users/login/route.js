import { NextResponse } from "next/server";
import { connect } from "../../../../config/mongodb";
import Users from "../../../../models/userModel";
import bycryptjs from "bcrypt";

export async function POST(req) {
  try {
    await connect();

    const reqBody = await req.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    // check if user exist

    const user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Vous n'est peut etre pas inscrit" });
    }

    // Check if password is correct

    const validPassword = await bycryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ message: "Verifier votre mot de passe" });
    }

    const response = NextResponse.json(
      {
        message: "Vous êtes connecté",
        user,
        success: true,
      },
      { status: 200 }
    );

    return response;
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
