"use client";
/* eslint-disable */
import { useState } from "react";
import { Snackbar, IconButton } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function DonationSection() {
    const [open, setOpen] = useState(false);
    const [copiedBank, setCopiedBank] = useState<string | null>(null);

    const banks = [
        { id: 'itau', name: 'Itaú', key: '000.111.222-33', logo: '/itau.png' },
        { id: 'santander', name: 'Santander', key: '999.888.777-66', logo: '/santander.png' },
    ];

    const handleCopy = async (key: string, bankName?: string) => {
        try {
            await navigator.clipboard.writeText(key);
            setCopiedBank(bankName ?? null);
            setOpen(true);
        } catch {
            // still show notification
            setCopiedBank(bankName ?? null);
            setOpen(true);
        }
    };

    return (
        <section id="doe" className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                    <div className="p-6 sm:p-8 lg:p-10">
                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-slate-800">Doe com Amor</h2>

                        <p className="mb-6 text-slate-500">"Quem trata bem os pobres empresta ao Senhor, e Ele o recompensará." <span className="italic">Provérbios 19:17</span></p>

                        {/* Two QR codes: one left, one right on larger screens; stacked and centered on small screens */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                            {banks.map((bank, idx) => {
                                // center items on small screens, and align start/end on sm+ screens
                                const alignment = idx === 0 ? 'items-center sm:items-start' : 'items-center sm:items-end';
                                return (
                                    <div key={bank.id} className={`w-full sm:w-1/2 flex flex-col ${alignment} gap-3`}>
                                        <div className="flex items-center gap-2 mb-1">
                                            <img src={bank.logo} alt={`${bank.name} logo`} className="w-10 h-10 object-contain" />
                                            <span className="text-sm font-medium text-slate-700">{bank.name}</span>
                                        </div>

                                        <div className="w-48 h-48 bg-gray-50 rounded-lg flex items-center justify-center shadow-sm">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="/imagens/qrcode-pix.png" alt={`QR Code ${bank.name}`} className="w-40 h-40 object-contain" />
                                        </div>

                                        <div className="flex items-center gap-3 mt-2">
                                            <div className="bg-slate-100 px-3 py-2 rounded-md text-sm font-medium text-slate-700 select-all">{bank.key}</div>
                                            <IconButton aria-label={`copiar chave pix ${bank.name}`} onClick={() => handleCopy(bank.key, bank.name)} className="bg-slate-100 hover:bg-slate-200">
                                                <ContentCopyIcon fontSize="small" />
                                            </IconButton>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="mt-4 text-xs text-slate-400 text-center sm:text-left">Escaneie o QR ou copie a chave para pagar via PIX</p>
                    </div>
                </div>
            </div>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                message={copiedBank ? `Chave PIX do ${copiedBank} copiada!` : 'Chave PIX copiada!'}
            />
        </section>
    );
}
