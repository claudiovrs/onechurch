import { Card, CardContent, Typography } from '@mui/material';

export default function AboutPreview() {
    const anoFundacaoo = 2016;
    const anoAtual = new Date().getFullYear();
    const anosAtividade = anoAtual - anoFundacaoo;
    return (
        <div id="sobre" className="grid md:grid-row-2 gap-8 items-stretch px-16">
            <Card elevation={6} className="p-6 rounded-lg shadow-2xl bg-white h-full">
                <CardContent className="flex flex-col h-full justify-between gap-4">
                    <Typography variant="h5" component="h2" className="mb-2 font-semibold">
                        Sobre a OneChurch
                    </Typography>
                    <Typography className="text-[#19ba9b] font-extrabold mb-2">
                        One Church – Uma Família Para Pertencer
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Há {anosAtividade} anos, a One Church tem sido muito mais do que um lugar de encontro — somos uma família apaixonada por Jesus, dedicada a viver e compartilhar o amor de Deus de forma autêntica e transformadora. Somos uma igreja jovem, vibrante e cheia de vida, que busca ser bíblica em cada passo, relevante para o nosso tempo e servidora em coração e atitude.
                    </Typography>
                </CardContent>
            </Card>
            <Card elevation={6} className="bg-gray-50 p-6 rounded-lg shadow-2xl h-full">
                <CardContent className="flex flex-col h-full justify-between">
                    <div>
                        <Typography variant="h6" component="h3" className="mb-2">
                            Missão
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Sermos uma igreja servidora e que movamos pelo Espirito Santo.
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}