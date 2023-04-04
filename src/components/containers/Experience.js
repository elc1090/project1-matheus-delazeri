import React from 'react'
import { Container } from 'react-bootstrap';


import Example from "components/Example"

class Experience extends React.Component {
    static points = [
        {
            label: "Menção Honrosa - Concurso Internacional de Contos Vicente Cardoso",
            date: "10/2019",
            content: <Example />
        },
        {
            label: "Escola Estadual de Educação Básica Santos Dumont",
            date: "11/2019",
            content: <Example />
        },
        {
            label: "UFPel - Letras",
            date: "03/2020",
            content: <Example />
        },
        {
            label: "UFSM - Psicologia",
            date: "03/2022",
            content: <Example />
        },
        {
            label: "NEDEFE - Núcleo de Estudo em contextos de Desenvolvimento Humano",
            date: "03/2023",
            content: <Example />
        },
        {
            label: "Estágio em colégio Santa Mariense",
            date: "04/2023",
            content: <Example />
        },
    ]
    render() {
        let pointOffset = (100 / Experience.points.length)
        let pointPosition = pointOffset / 2

        
        return (
            <Container className="experience shadow-sm" id="experience" fluid>
                <div className="experience__info">
                    <h3 className="container__title">Minha experiência</h3>
                    <div className="experience__bar">
                        {
                            Experience.points.map((point, key) => {
                                let _pointPosition = pointPosition
                                pointPosition += pointOffset
                                return <>
                                    <div onMouseOver={() => this.toggleContent("point_" + key)} onMouseOut={() => this.toggleContent("point_" + key)} className="experience__point" style={{ left: _pointPosition + "%" }}>
                                        <p>{point.date}</p>
                                    </div>
                                    <div id={`point_${key}`} className="experience__pointInfo">
                                        <h4>{point.label}</h4>
                                        <p>{point.content}</p>
                                    </div>
                                </>
                            })

                        }
                    </div>
                </div>
            </Container>
        );
    }
    toggleContent(id) {
        let el = document.getElementById(id)
        if (window.getComputedStyle(el).display === 'none') {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        } 
    }
}

export default Experience