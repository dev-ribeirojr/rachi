import './home.css';
import Planos from '../../components/planos';
import Contato from '../../components/contato';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Home() {

    return (
        <main>
            <section className='container-cadastre-se'>
                <div>
                    <h1 className='titulo'>
                        <span data-aos="fade-up" data-aos-duration="1000">Rachi,</span>
                        <span data-aos="fade-up" data-aos-duration="1300">é tudo que você</span>
                        <span data-aos="fade-up" data-aos-duration="1600">precisa em um só lugar.</span>
                    </h1>
                    <button data-aos="fade-up" data-aos-duration="2000">
                        Cadastrar-se
                    </button>
                </div>
                <div className='area-img'
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    <img src={require('../../assets/hero-dark.png')} />
                </div>
            </section>
            <section className='container-como-funciona'>
                <h1
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                >Como funciona</h1>
                <div className='container-info'>
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    >
                        <img src={require('../../assets/icon1.png')} alt="icone-adicionar-conexões" />
                        <h2>Crie conexões</h2>
                        <p>
                            lorem psum dolor sit amet, consecteteu
                        </p>
                    </div >
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    >
                        <img src={require('../../assets/icon2.png')} alt="icone-verificado" />
                        <h2>100% gratuito</h2>
                        <p>
                            lorem psum dolor sit amet, consecteteu
                        </p>
                    </div>
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    >
                        <img src={require('../../assets/icon3.png')} alt="icone-compartilhamento" />
                        <h2>Compartilhamento</h2>
                        <p>
                            lorem psum dolor sit amet, consecteteu
                        </p>
                    </div>
                </div>
            </section>
            <section className='container-downloads'>
                <div className='area-downloads'>
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >Baixe nosso app para desfrutar mais!</h1>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1300"
                    >
                        Amet in elementum nulla scelerisque
                        dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec.
                        3Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.
                    </p>
                    <div>
                        <a href='#'
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <img src={require('../../assets/playstore.png')} alt="play-store" />
                        </a>
                        <a href='#'
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <img src={require('../../assets/appstore.png')} alt='app-store' />
                        </a>
                    </div>
                </div>
                <div className='area-img-hero'
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    <img src={require('../../assets/hero2.png')} alt='img-notificações' />
                </div>
            </section>
            <Planos />
            <Contato />
            <footer>
                <p>Rachi - Todos os direitos reservados.</p>
            </footer>
        </main>
    )
}

export default Home;