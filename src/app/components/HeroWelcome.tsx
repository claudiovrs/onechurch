import Image from 'next/image';

export default function HeroWelcome() {
    // To prevent the background image from being upscaled past its natural size,
    // we limit the hero height to the smaller of the viewport height and the
    // image's max height when shown at full viewport width:
    // height = min(100vh, calc(100vw * aspectRatio)).
    //
    // Replace 0.5625 below with (imageHeight / imageWidth) for your actual image.
    // Example for 1920x1080 => 1080/1920 = 0.5625 (16:9)
    return (
        <section
            className="relative flex items-center overflow-hidden"
            style={{ minHeight: '70vh', height: 'min(100vh, calc(100vw * 0.5625))' }}
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src="/imagens/welcome.png"
                    alt="Welcome background"
                    fill
                    // sizes="100vw"
                    // object-fit via Tailwind class, object-position via .hero-bg in globals.css
                    // style={{ objectFit: 'cover', minHeight: '100%' }}
                    className="object-cover hero-bg"
                    priority
                />
            </div>

            <div
                className="absolute inset-0 z-10"
            />

            <div className="flex justify-center mx-auto px-4 z-20">
                <div className="max-w-3xl">
                    <div className="text-white">
                        <h2 className="text-2xl uppercase tracking-widest opacity-90 mb-2">Bem-vindo à</h2>
                        <div className="inline-block mb-4">
                            <h1 className="text-8xl font-extrabold leading-tight font-lulo">ONE CHURCH</h1>
                            {/* Underline with 20px height */}
                            <div className="h-5 bg-[#19BA9B] mt-3 rounded-sm" aria-hidden="true" />
                        </div>

                        <div className="text-[52px] font-semibold leading-snug">
                            <p>UMA FAMÍLIA</p>
                            <p>PARA</p>
                            <p>PERTERNCER</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}