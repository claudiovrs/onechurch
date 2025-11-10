import { Card, CardContent, Typography } from '@mui/material';

export default function AboutPreview() {
    const anoFundacaoo = 2016;
    const anoAtual = new Date().getFullYear();
    const anosAtividade = anoAtual - anoFundacaoo;

    const accentColor = '#19ba9b';

    return (
        <div id="sobre" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch px-2">

            {/* SOBRE */}
            <Card elevation={6} className="p-6 rounded-lg shadow-2xl bg-white h-full border-t-4" style={{ borderColor: accentColor }}>
                <CardContent className="flex flex-col h-full justify-between gap-4">
                    <Typography variant="h5" component="h2" style={{ color: accentColor }} className="mb-2 font-semibold">
                        Sobre a OneChurch
                    </Typography>

                    <Typography style={{ color: accentColor }} className="font-extrabold mb-2">
                        One Church – Uma Família Para Pertencer
                    </Typography>

                    <Typography variant="body2" color="textSecondary">
                        Há {anosAtividade} anos, a One Church tem sido muito mais do que um lugar de encontro —
                        somos uma família apaixonada por Jesus, dedicada a viver e compartilhar o amor de Deus
                        de forma autêntica e transformadora. Somos uma igreja jovem, vibrante e cheia de vida,
                        que busca ser bíblica em cada passo, relevante para o nosso tempo e servidora em coração
                        e atitude.
                    </Typography>
                </CardContent>
            </Card>

            {/* MISSÃO */}
            <Card elevation={6} className="bg-gray-50 p-6 rounded-lg shadow-2xl h-full border-l-4" style={{ borderColor: accentColor }}>
                <CardContent className="flex flex-col h-full justify-between gap-6">
                    <Typography variant="h6" component="h3" style={{ color: accentColor }} className="mb-2">
                        Missão
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Levar a genuína mensagem do evangelho de forma incansável, colhendo cada fruto e se
                        movendo de forma sobrenatural a cada dia através da fé e do poder de Deus.
                    </Typography>
                </CardContent>
            </Card>

            {/* VISÃO */}
            <Card elevation={6} className="bg-gray-50 p-6 rounded-lg shadow-2xl h-full border-l-4" style={{ borderColor: accentColor }}>
                <CardContent className="flex flex-col h-full justify-between gap-6">
                    <Typography variant="h6" component="h3" style={{ color: accentColor }} className="mb-2">
                        Visão
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Tornar-se um ministério onde não se anseia outra coisa a não ser o resgate dos perdidos,
                        a plenitude da palavra e o livre mover do Espírito.
                    </Typography>
                </CardContent>
            </Card>

            {/* VALORES PRINCIPAIS */}
            <Card elevation={6} className="bg-gray-50 p-6 rounded-lg shadow-2xl h-full border-l-4" style={{ borderColor: accentColor }}>
                <CardContent className="flex flex-col gap-4">
                    <Typography variant="h6" component="h3" style={{ color: accentColor }} className="mb-2">
                        Valores
                    </Typography>

                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1" style={{ color: accentColor }}>
                        <li style={{ color: '#333' }}>O amor incondicional a Deus.</li>
                        <li style={{ color: '#333' }}>A caridade (o amor ao próximo).</li>
                        <li style={{ color: '#333' }}>O zelo pela sã doutrina.</li>
                        <li style={{ color: '#333' }}>Servir através dos dons.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* PROPÓSITO CENTRAL */}
            <Card elevation={6} className="bg-gray-50 p-6 rounded-lg shadow-2xl h-full border-l-4" style={{ borderColor: accentColor }}>
                <CardContent className="flex flex-col gap-4">
                    <Typography variant="body2" color="textSecondary">
                        <strong style={{ color: accentColor }}>Ganhar</strong> todas as pessoas para Jesus, 
                        <strong style={{ color: accentColor }}> incluir</strong> na família, levar a 
                        <strong style={{ color: accentColor }}> crescer</strong> na fé, ajudar a 
                        <strong style={{ color: accentColor }}> descobrir</strong> seus dons e ministérios e 
                        <strong style={{ color: accentColor }}> enviar</strong> ao mundo para a glória global de Deus.
                    </Typography>

                    <Typography variant="body2" color="textSecondary" className="mt-2" style={{ borderLeft: `3px solid ${accentColor}`, paddingLeft: 8 }}>
                        “Pra isso vamos trabalhar dentro destes pontos, e injetar esses princípios na IGREJA.”
                    </Typography>
                </CardContent>
            </Card>

            {/* VALORES PRÁTICOS */}
            <Card elevation={6} className="bg-gray-50 p-6 rounded-lg shadow-2xl h-full border-l-4" style={{ borderColor: accentColor }}>
                <CardContent className="flex flex-col gap-4">
                    <Typography variant="h6" component="h3" style={{ color: accentColor }} className="mb-2">
                        O que buscamos ser
                    </Typography>

                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Uma Igreja Servidora.</li>
                        <li>Uma Igreja Relevante na Sociedade.</li>
                        <li>Uma Igreja Bíblica.</li>
                        <li>Uma Igreja que é extensão das nossas casas.</li>
                    </ul>
                </CardContent>
            </Card>

        </div>
    );
}
