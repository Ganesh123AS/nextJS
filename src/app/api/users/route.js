import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Users from "@/models/User";

export const GET = async (request) => {
    try{
        await connect()
        console.log("connected db")
        const use = await Users.find();

        return new NextResponse(use, { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500, err: err });
    }
    
}