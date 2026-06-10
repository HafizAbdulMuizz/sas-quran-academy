import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Admission from "@/models/Admission";

export async function POST(request) {

  try {

    await connectDB();

    const body = await request.json();

    const admission =
      await Admission.create(body);

    return NextResponse.json({
      success: true,
      admission,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: error.message,
    });

  }

}

export async function GET() {

  try {

    await connectDB();

  const admissions =
await Admission.find()
.sort({ submittedAt: -1 });
    return NextResponse.json({
      success: true,
      admissions,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: error.message,
    });

  }

}
export async function DELETE(request) {

  try {

    await connectDB();

    const { id } =
      await request.json();

    await Admission.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Admission Deleted",
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: error.message,
    });

  }

}

export async function PUT(request) {

  try {

    await connectDB();

    const { id, status } =
      await request.json();

    const updatedAdmission =
      await Admission.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

    return NextResponse.json({
      success: true,
      admission: updatedAdmission,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: error.message,
    });

  }

}