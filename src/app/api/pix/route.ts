import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        santander: {
            logo: '/santander.png',
            agency: process.env.NEXT_PUBLIC_AGENCIA_SANTANDER,
            account: process.env.NEXT_PUBLIC_CONTA_SANTANDER,
            pixType: "Pix",
            pixKey: process.env.NEXT_PUBLIC_PIX_SANTANDER_EMAIL
        },
        itau: {
            logo: '/itau.png',
            agency: process.env.NEXT_PUBLIC_AGENCIA_ITAU,
            account: process.env.NEXT_PUBLIC_CONTA_ITAU,
            pixType: "Pix",
            pixKey: process.env.NEXT_PUBLIC_PIX_ITAU_CNPJ
        }
    });
}
