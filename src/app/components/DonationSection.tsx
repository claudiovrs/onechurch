"use client";
/* eslint-disable */
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { Snackbar, IconButton } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function DonationSection() {
    const [open, setOpen] = useState(false);
    const [copiedBank, setCopiedBank] = useState<string | null>(null);
    const [banks, setBanks] = useState<any>([]);


    useEffect(() => {
    const load = async () => {
        const res = await fetch("/api/pix");
        const data = await res.json();
        setBanks([
            { id: "santander", name: "Santander", ...data.santander },
            { id: "itau", name: "Itaú", ...data.itau }
        ]);
    };
    load();
}, []);


    const handleCopy = async (value: string, bankName?: string) => {
        try {
            await navigator.clipboard.writeText(value);
        } finally {
            setCopiedBank(bankName ?? null);
            setOpen(true);
        }
    };

    return (
        <section id="doe" className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                    <div className="p-6 sm:p-8 lg:p-10">

                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-slate-800">
                            Doe com Amor
                        </h2>

                        <p className="mb-6 text-slate-500">
                            "Quem trata bem os pobres empresta ao Senhor, e Ele o recompensará."{" "}
                            <span className="italic">Provérbios 19:17</span>
                        </p>

                        {/* Dados dos bancos */}
                        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

                            {/* Lista dos dois bancos */}
                            <div className="flex flex-col gap-10 w-full lg:w-1/2">
                                {banks.map((bank: { id: Key | null | undefined; pixKey: string; logo: string | Blob | undefined; name: string; agency: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; account: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; pixType: string; }) => (
                                    <div key={bank.id} className="flex flex-col gap-2">

                                        {/* Título do banco */}
                                        <div className="flex items-center gap-2">
                                            <img src={bank.logo} alt="" className="w-10 h-10 object-contain" />
                                            <span className="text-xl font-bold text-[#b87d2b]">{bank.name}</span>
                                        </div>

                                        <p className="text-[#b87d2b] text-lg font-semibold">
                                            Agência: {bank.agency}
                                        </p>

                                        <p className="text-[#b87d2b] text-lg font-semibold">
                                            C.C: {bank.account}
                                        </p>

                                        <div className="flex items-center gap-2">
                                            <p className="text-[#b87d2b] font-semibold">{bank.pixType}:</p>
                                            <span className="text-[#b87d2b]">{bank.pixKey}</span>

                                            <IconButton
                                                aria-label={`copiar chave pix ${bank.name}`}
                                                onClick={() => handleCopy(bank.pixKey, bank.name)}
                                                className="bg-slate-100 hover:bg-slate-200"
                                            >
                                                <ContentCopyIcon fontSize="small" />
                                            </IconButton>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* QR Code único */}
                            <div className="flex justify-center items-center w-full lg:w-1/2">
                                <div className="w-56 h-56 bg-gray-50 rounded-lg flex items-center justify-center shadow-sm">
                                    <img
                                        src="/imagens/qrcode-pix.png"
                                        alt="QR Code PIX"
                                        className="w-48 h-48 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="mt-6 text-xs text-slate-400 text-center">
                            Escaneie o QR ou copie a chave para pagar via PIX
                        </p>
                    </div>
                </div>
            </div>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                message={copiedBank ? `Chave PIX do ${copiedBank} copiada!` : "Chave PIX copiada!"}
            />
        </section>
    );
}
