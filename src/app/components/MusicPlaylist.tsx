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
    const tracks: Track[] = [
        { id: 't1', title: 'Louvor 1', artist: 'Ministério', src: '#', img: '/imagens/pontes.png' },
        { id: 't2', title: 'Louvor 2', artist: 'Banda', src: '#', img: '/imagens/tema.png' },
    ];

    const [current, setCurrent] = useState<number>(0);
    const [playing, setPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0.9);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        // update src when track changes
        audio.src = tracks[current]?.src ?? '';
        audio.volume = volume;
        if (playing) {
            audio.play().catch(() => {
                // couldn't play (likely because src is placeholder); keep state consistent
                setPlaying(false);
            });
        } else {
            audio.pause();
        }

        const onLoaded = () => {
            setDuration(audio.duration || 0);
            setCurrentTime(audio.currentTime || 0);
        };
        const onTime = () => setCurrentTime(audio.currentTime || 0);
        audio.addEventListener('loadedmetadata', onLoaded);
        audio.addEventListener('timeupdate', onTime);

        return () => {
            audio.removeEventListener('loadedmetadata', onLoaded);
            audio.removeEventListener('timeupdate', onTime);
        };
    }, [current, playing, volume]);

    const prev = () => {
        setCurrent((i) => (i - 1 + tracks.length) % tracks.length);
        setPlaying(true);
    };
    const next = () => {
        setCurrent((i) => (i + 1) % tracks.length);
        setPlaying(true);
    };
    const togglePlay = () => setPlaying((p) => !p);

    const onEnded = () => {
        // go to next and start playing
        setCurrent((i) => (i + 1) % tracks.length);
        setPlaying(true);
    };

    const seek = (percent: number) => {
        const audio = audioRef.current;
        if (!audio || !duration) return;
        const time = (percent / 100) * duration;
        audio.currentTime = time;
        setCurrentTime(time);
    };

    const handleVolumeChange = (value: number) => {
        const audio = audioRef.current;
        const v = Math.min(1, Math.max(0, value));
        setVolume(v);
        if (audio) audio.volume = v;
    };

    const track = tracks[current];

    const progress = duration ? Math.min(100, (currentTime / duration) * 100) : 0;

    return (
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700/30 rounded-2xl overflow-hidden shadow-lg">
            <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium mb-3 text-white">Tocou na <strong className='text-[#19ba9b]'>ONE</strong></h3>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                    <div className="sm:col-span-3 flex items-center gap-4">
                        <div className="flex-1">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="text-2xl font-semibold text-white leading-tight">{track.title}</h4>
                                    <p className="text-sm text-slate-300 mt-1">{track.artist}</p>
                                </div>
                                <div className="text-xs text-slate-400">Faixa {current + 1} / {tracks.length}</div>
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center gap-3">
                                    <button
                                        aria-label="previous"
                                        onClick={prev}
                                        className="p-2 rounded-md hover:bg-white/5 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V5l-7 7 7 7zM20 19V5" />
                                        </svg>
                                    </button>

                                    <button
                                        aria-label="play-pause"
                                        onClick={togglePlay}
                                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-transform transform hover:scale-105"
                                    >
                                        {playing ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M6 4h2v12H6V4zm6 0h2v12h-2V4z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
                                            </svg>
                                        )}
                                    </button>

                                    <button
                                        aria-label="next"
                                        onClick={next}
                                        className="p-2 rounded-md hover:bg-white/5 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5v14l7-7-7-7zM4 5v14" />
                                        </svg>
                                    </button>

                                    <div className="ml-2 text-sm text-slate-300">{formatTime(currentTime)} / {formatTime(duration)}</div>
                                </div>

                                <div className="mt-3">
                                    <input
                                        aria-label="progress"
                                        type="range"
                                        min={0}
                                        max={100}
                                        value={Number(progress.toFixed(2))}
                                        onChange={(e) => seek(Number(e.target.value))}
                                        className="w-full h-1 bg-white/10 accent-[#19ba9b] rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center sm:justify-end">
                        <div className="w-32 h-32 rounded-lg overflow-hidden shadow-inner border border-white/5 bg-slate-800/60 flex items-center justify-center">
                            {track.img ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={track.img} alt={track.title} className="max-w-full max-h-full object-contain p-2" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-700">Cover</div>
                            )}
                        </div>

                        {/* <div className="ml-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 10v4h4L17 7V3L7 13H3z" />
                            </svg>
                            <input
                                aria-label="volume"
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={volume}
                                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                                className="w-24 h-1 bg-white/10 accent-[#19ba9b] rounded-lg"
                            />
                        </div> */}
                    </div>
                </div>
            </div>

            {/* hidden audio element controlled by the component */}
            <audio ref={audioRef} onEnded={onEnded} />
        </div>
    );
}

function formatTime(sec: number) {
    if (!sec || Number.isNaN(sec)) return '0:00';
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    const m = Math.floor(sec / 60);
    return `${m}:${s}`;
}