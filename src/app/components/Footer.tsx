import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-10 mt-16" style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
        }}>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-start">
                    <img src="/logo.png" alt="OneChurch logo" className="w-32 md:w-40 mb-2" />
                    <p>onechurchoficial@gmail.com</p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">Redes Sociais</h3>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.facebook.com/OneChurchOficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook - OneChurch"
                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                            <span className="sr-only">Facebook</span>
                            <FacebookIcon fontSize="small" sx={{ color: 'white' }} />
                        </a>

                        <a
                            href="https://www.instagram.com/onechurchoficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram - OneChurch"
                            className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600 hover:opacity-90 flex items-center justify-center transition-all shadow-md"
                        >
                            <span className="sr-only">Instagram</span>
                            <InstagramIcon fontSize="small" sx={{ color: 'white' }} />
                        </a>

                        <a
                            href="https://www.youtube.com/@OneChurchOficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube - OneChurch"
                            className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors shadow-md"
                        >
                            <span className="sr-only">YouTube</span>
                            <YouTubeIcon fontSize="small" sx={{ color: 'white' }} />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">Localização</h3>
                    <div className="w-full">
                        <div className="w-full rounded overflow-hidden shadow-sm">
                            <iframe
                                className="w-full h-48 md:h-64 border-0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.085179574056!2d-46.59951132467296!3d-23.457391778871393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef70037420719%3A0xe7c145e2de49bdb5!2sOne%20Church!5e0!3m2!1spt-BR!2sbr!4v1759450392079!5m2!1spt-BR!2sbr"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="OneChurch location"
                            />
                        </div>
                    </div>
                    <p className="mt-3">R. Maria Amália Lopes Azevedo, 3080 - Vila Albertina, São Paulo - SP, 02350-003</p>
                </div>
            </div>
            <div className="text-center mt-6 text-sm">
                © {new Date().getFullYear()} OneChurch - Todos os direitos reservados
            </div>
        </footer>
    );
}
