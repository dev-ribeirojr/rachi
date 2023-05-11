import './contato.css';

function Contato() {
    return (
        <section className='container-contato'>
            <h1
                data-aos="fade-up" 
                data-aos-duration="1000"
            >Contato</h1>
            <p
                data-aos="fade-up" 
                data-aos-duration="1000"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices
            </p>
            <form autoComplete='off'
                data-aos="fade-up" 
                data-aos-duration="1000"
            >
                <input type='email' placeholder='Seu melhor e-mail' />
                <button>Enviar</button>
            </form>
        </section>
    )
}

export default Contato;