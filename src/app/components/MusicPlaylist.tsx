"use client"

import React, { useEffect, useRef, useState } from 'react';

type Track = {
    id: string;
    title: string;
    artist?: string;
    src: string;
    img?: string;
};

export default function MusicPlaylist() {
    return (
        <div className="mx-auto bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700/30 rounded-2xl overflow-hidden shadow-lg">
            <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium mb-3 text-white">Tocou na <strong className='text-[#19ba9b]'>ONE</strong></h3>

                <section className="container mx-auto px-4"><iframe
                    src="https://open.spotify.com/embed/playlist/3eXpss8SXYMhlHUm7Qifnl"
                    width="100%"
                    height="580"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg shadow-lg"
                ></iframe></section>
            </div>
        </div>
    );
}