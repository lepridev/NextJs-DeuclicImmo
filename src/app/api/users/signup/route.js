import { NextResponse } from "next/server";
import { connect } from "../../../../config/mongodb";
import bycryptjs from "bcrypt";
import Users from "../../../../models/userModel";

export async function POST(req) {
  try {
    connect();
    const reqBody = await req.json();
    const { firstname, lastname, email, username, file, password } =
      await reqBody;

    console.log(reqBody);

    // Check if user are already exists

    const user = await Users.findOne({ email });

    if (user) {
      return NextResponse.json({
        message: "Email already exists",
      });
    }

    // Hash Password

    const salt = await bycryptjs.genSalt(10);
    const hashPassword = await bycryptjs.hash(password, salt);

    // Create a new user

    const createUser = await new Users({
      firstname,
      lastname,
      email,
      username,
      file,
      password: hashPassword,
    });

    const savedUser = await createUser.save();
    return NextResponse.json({
      message: "Votre compte a bien été crée",
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
