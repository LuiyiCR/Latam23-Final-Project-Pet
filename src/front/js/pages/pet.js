import React from "react";
import "../../styles/pet.css"

export const Pets = () => {
    return (
        <div className="container-fluid div-signup d-flex align-items-center flex-column background-container-forms">
            <div className="imgen">
                <img src="data:image/jpeg;base64,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"></img>
            </div>
            <h1 className="mt-3">
                Nombre{ }
            </h1>
            <div className="info d-flex div-signup  flex-column mt-5">
                <h5 className="mx-2">
                    Fecha de nacimiento: { } 27/01/2024
                </h5>
                <h5 className="mx-2">
                    Raza: { } Labrador
                </h5>
                <h5 className="mx-2">
                    Genero: { } Macho
                </h5>
                <div>
                </div>
            </div>
            <div className="info d-flex div-signup  flex-column align-items-center mt-5">
                <div className="accordion" id="accordionPanelsStayOpenExample" style={{width:"100%"}}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                Historial
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button w-100 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Citas
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button w-100 collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Notas
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
