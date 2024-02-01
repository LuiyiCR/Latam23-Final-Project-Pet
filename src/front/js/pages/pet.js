import React, { useContext, useEffect } from "react";
import "../../styles/pet.css"
import { Context } from "../store/appContext";


export const Pets = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const petData = await actions.handelPet();
                console.log(petData);
            } catch (error) {
                console.log("Error fetching pet data:", error);
            }
        };
        fetchPet();
    }, [])


    return (
        <div className=" container-fluid div-signup d-flex align-items-center flex-column background-container-forms">
            <div className="imgen">
                <img src={`${store.pet.photo}`} alt="Pet Image" />
            </div>
            <h1 className="mt-4">
                {store.pet.name}
            </h1>
            <div className="info d-flex div-signup  flex-column mt-3">
                <h5 className="mx-2">
                    Fecha de nacimiento: {store.pet.born_date}
                </h5>
                <h5 className="mx-2">
                    Raza: {store.pet.breed}
                </h5>
                <h5 className="mx-2">
                    Genero: {store.pet.gender}
                </h5>
                <div>
                </div>
            </div>
            <div className="info d-flex div-signup  flex-column align-items-center mt-3">
                <div className="accordion" id="accordionPanelsStayOpenExample" style={{ width: "100%" }}>
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
