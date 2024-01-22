import React from 'react';

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center bg-light">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<h5>Contacto</h5>
					<p>
						<i className="fa fa-envelope"></i> Correo electrónico: info@petplus.com</p>
					<p><i className="fa fa-phone"></i> Teléfono: (123) 456-7890</p>
				</div>
				<div className="col-md-4">
					<h5>Enlaces útiles</h5>
					<ul className="list-unstyled">
						<li><a href="#">Términos de servicio</a></li>
						<li><a href="#">Política de privacidad</a></li>
					</ul>
				</div>
				<div className="col-md-4">
					<h5>Síguenos</h5>
					<div className="d-flex justify-content-center">
						<a href="#" className="me-2"><i className="fab fa-facebook"></i></a>
						<a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
						<a href="#" className="me-2"><i className="fab fa-instagram"></i></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
