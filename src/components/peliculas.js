import React from "react";

class Pelicula extends React.Component {
    render() {
        return (
            <>
                <main />
                <section class="detalles">
                    <h3>{this.props.titulo}</h3>
                    <article class="cuadros">
                        <img src={this.props.img} alt={this.props.titulo} class="posters" />
                        <div class="sinopsis">
                            <h4>Sinopsis</h4>
                            <p>{this.props.sinopsis}</p>
                            <div class="d-grid gap-2 d-md-block">
                                <button class="btn btn-primary" type="button">{this.props.opcion1}</button>
                                <button class="btn btn-primary" type="button">{this.props.opcion2}</button>
                            </div>

                        </div>

                        <div class="d-grid gap-2 mx-auto">
                            <button class="btn btn-primary" type="button"> Metacritic: 9.4 </button>
                            <button class="btn btn-primary" type="button"> Photoshop: 9.5 </button>
                            <button class="btn btn-primary" type="button"> IMDb: 9.1 </button>
                        </div>





                    </article>
                </section>
                <main />
            </>
        )
    }
}

export default Pelicula;