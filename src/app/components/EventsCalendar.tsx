'use client';
import { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Card, CardContent, Typography } from '@mui/material';


const events = [
    { id: 1, title: 'Culto Dominical', date: '2025-10-05', time: '10:00' },
    { id: 2, title: 'Ensaio do Ministério de Música', date: '2025-10-06', time: '19:00' },
];


export default function EventsCalendar() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return (
        <div id="eventos">
            <h3 className="text-2xl font-semibold mb-4">Próximos eventos</h3>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <Card elevation={4} className="p-4 rounded-lg h-full">
                    <CardContent className="p-2">
                        <div className="flex flex-col gap-4">
                            {events.length === 0 && (
                                <div className="text-gray-500">Nenhum evento agendado.</div>
                            )}

                            {events.map(e => {
                                const parsed = parseISO(e.date);
                                const day = format(parsed, 'dd');
                                const month = format(parsed, 'MMM');
                                const fullDate = format(parsed, 'dd/MM/yyyy');
                                return (
                                    <div key={e.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                                        <div className="w-16 h-16 flex flex-col items-center justify-center bg-[#19ba9b] text-white rounded-md mr-4">
                                            <div className="text-lg font-bold leading-none">{day}</div>
                                            <div className="text-xs uppercase leading-none">{month}</div>
                                        </div>

                                        <div className="flex-1">
                                            <div className="text-sm text-gray-500">{fullDate} • <span className="font-medium">{e.time}</span></div>
                                            <div className="font-semibold text-gray-800">{e.title}</div>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="mt-2 text-right">
                                <a href="#" className="text-sm text-[#19ba9b] hover:underline">Ver todos os eventos</a>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card elevation={4} className="p-6 rounded-lg h-full bg-gray-50">
                    <CardContent className="flex flex-col h-full justify-center items-center">
                        {/* Placeholder para calendário visual. Pode integrar react-calendar ou FullCalendar aqui. */}
                        <div className="w-full max-w-md">
                            <div className="bg-white rounded-lg shadow-inner p-6 text-center">
                                <Typography variant="h6" className="mb-2">Calendário</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Integre um componente de calendário (react-calendar, FullCalendar) aqui para uma visualização interativa.
                                </Typography>
                                <div className="mt-4 text-sm text-gray-500">Data selecionada: {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : 'Nenhuma'}</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}