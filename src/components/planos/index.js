import './planos.css';
import { useState } from 'react';

function Planos() {
    const [options, setOptions] = useState([
        {
            id: 1,
            level: 'Bronze',
            valor: 28,
            descricao: "lorem ipsum dolor sit amet, consecteur adisgpins elit. Donec lacinia mi quis eusmoe ultrices.",
            preferido: false
        },
        {
            id: 2,
            level: 'Prata',
            valor: 57,
            descricao: "lorem ipsum dolor sit amet, consecteur adisgpins elit. Donec lacinia mi quis eusmoe ultrices.",
            preferido: true
        },
        {
            id: 3,
            level: 'Ouro',
            valor: 28,
            descricao: "lorem ipsum dolor sit amet, consecteur adisgpins elit. Donec lacinia mi quis eusmoe ultrices.",
            preferido: false
        }
    ])

    return (
        <section className='container-planos'>
            <div>
                <h1
                    data-aos="zoom-in"
                    data-aos-duration="1300"
                >Nossos Planos</h1>
                <p
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                </p>
            </div>
            <div className='planos'>
                {options.map((item) => {
                    if (item.preferido) {
                        return (
                            <article key={item.id} style={{
                                backgroundColor: 'rgb(41,49,69)',
                            }}
                                data-aos="zoom-in"
                                data-aos-duration="1300"

                            >
                                <h2 style={{ color: '#FFF' }}>{item.level}</h2>
                                <p style={{
                                    color: '#FFF',
                                    backgroundColor: 'rgb(15,154,254)',
                                    padding: 2,
                                    borderRadius: 10,
                                    width: 100,
                                }}>preferido</p>
                                <strong style={{ color: '#FFF' }}><sup>R$</sup><span>{item.valor}</span>/mes</strong>
                                <p style={{ color: '#FFF' }}>{item.descricao}</p>

                                <button>Assinar</button>
                            </article>
                        )
                    } else {
                        return (
                            <article key={item.id} style={{
                                gap: 20
                            }}
                                data-aos="zoom-in"
                                data-aos-duration="1300"
                            >
                                <h2>{item.level}</h2>
                                <strong><sup>R$</sup><span>{item.valor}</span>/mes</strong>
                                <p>{item.descricao}</p>

                                <button>Assinar</button>
                            </article>
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default Planos;