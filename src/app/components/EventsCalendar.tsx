'use client';

import { format, parseISO } from 'date-fns';
import { Card, CardContent } from '@mui/material';

const events = [
    { id: 1, title: 'Avalanche', date: '2025-10-05', time: '10:00', weekName: 'Sábado' },
    { id: 2, title: 'Culto da familia', date: '2025-10-06', time: '19:00', weekName: 'Domingo' },
    { id: 3, title: 'Fundamentos', date: '2025-10-06', time: '19:00', weekName: 'Quinta' },
];

export default function EventsCalendar() {
    return (
        <div id="eventos">
            <h3 className="text-2xl font-semibold mb-4">Próximos eventos</h3>
            <div className="grid md:grid-cols-1 gap-6 items-stretch">
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
                                if (!!e.weekName) {
                                    return (
                                        <div key={e.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                                            <div className="w-24 h-24 flex flex-col items-center justify-center bg-[#19ba9b] text-white rounded-md mr-4">
                                                <div className="text-lg font-bold leading-none">{e.weekName}</div>
                                            </div>

                                            <div className="flex-1">
                                                <div className="font-semibold text-gray-800">{e.title}</div>
                                            </div>
                                        </div>)
                                } else {
                                    return                                 (
                                    <div key={e.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                                        <div className="w-24 h-24 flex flex-col items-center justify-center bg-[#19ba9b] text-white rounded-md mr-4">
                                            <div className="text-lg font-bold leading-none">{day}</div>
                                            <div className="text-xs uppercase leading-none">{month}</div>
                                        </div>

                                        <div className="flex-1">
                                            <div className="text-sm text-gray-500">{fullDate} • <span className="font-medium">{e.time}</span></div>
                                            <div className="font-semibold text-gray-800">{e.title}</div>
                                        </div>
                                    </div>
                                )

                                }
                            })}

                            {/* <div className="mt-2 text-right">
                                <a href="#" className="text-sm text-[#19ba9b] hover:underline">Ver todos os eventos</a>
                            </div> */}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}