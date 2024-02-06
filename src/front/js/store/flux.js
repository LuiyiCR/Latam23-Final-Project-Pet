const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				name: "",
			},
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			pets: [],
			pet: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			setPets: (pets) => {
				const store = getStore();
				console.log(store.pets);
				console.log(pets);
				if (JSON.stringify(store.pets) !== JSON.stringify(pets)) {
					setStore({ ...store, pets: pets });
				}
			},

			addPet: (pet) => {
				const store = getStore();
				const updatedPets = [...store.pets, pet];

				setStore({ pets: updatedPets });
			},
			handelPet: async (petId) => {
				try {
					const respons = await fetch(`${process.env.BACKEND_URL}/api/user/pets/${petId}`, {
						method: "GET",
						headers: {
							"Authorization": "Bearer " + localStorage.getItem("token"),
							"Content-Type": 'application/json'
						}
					});
					const data = await respons.json()
					setStore({ pet: data })
					return data
				}
				catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			cloudinaryUpload: async (fromData) =>{
				try{
					const response = await fetch( `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`, {
										method:'POST',
										body: fromData
									}
										)
					const data = await response.json()
					return data
				}catch(error){
					console.log(error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
