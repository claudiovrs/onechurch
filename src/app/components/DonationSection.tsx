"use client";
/* eslint-disable */
import { useState } from "react";
import { Button, TextField, Snackbar, IconButton } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function DonationSection() {
    const [motivo, setMotivo] = useState("");
    const [open, setOpen] = useState(false);
    const pixKey = "000.111.222-33";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(pixKey);
            setOpen(true);
        } catch {
            // fallback: still notify
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

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                            <div className="flex flex-col items-center sm:items-start gap-4">
                                <div className="w-48 h-48 bg-gray-50 rounded-lg flex items-center justify-center shadow-sm">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/imagens/qrcode-pix.png" alt="QR Code PIX" className="w-40 h-40 object-contain" />
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-slate-100 px-3 py-2 rounded-md text-sm font-medium text-slate-700 select-all">{pixKey}</div>
                                    <IconButton aria-label="copiar chave pix" onClick={handleCopy} className="bg-slate-100 hover:bg-slate-200">
                                        <ContentCopyIcon fontSize="small" />
                                    </IconButton>
                                </div>

                                <p className="text-xs text-slate-400">Escaneie o QR ou copie a chave para pagar via PIX</p>
                            </div>

                            <div className="sm:col-span-2">
                                <div className="bg-gradient-to-r from-slate-50 to-white p-4 rounded-xl shadow-inner border border-gray-50">
                                    <label className="block text-sm font-medium text-slate-600 mb-2">Motivo da Doação</label>
                                    <TextField
                                        placeholder="Ex: Ofertas, Manutenção, Missões..."
                                        variant="outlined"
                                        fullWidth
                                        value={motivo}
                                        onChange={(e) => setMotivo(e.target.value)}
                                    />

                                    <div className="mt-4 flex items-center gap-3">
                                        <Button variant="contained" color="primary" onClick={handleCopy}>
                                            Copiar Chave PIX
                                        </Button>
                                        <Button variant="outlined" color="secondary">
                                            Confirmar Doação
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                message="Chave PIX copiada!"
            />
        </section>
    );
}
