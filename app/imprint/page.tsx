import React from 'react'
import './imprint.css'

const Page = () => {
	return (
		<div className="p-4">
			<h1>Allgemeine Information</h1>
			<div>
				<p><strong>Fabian Wilhelm</strong></p>
				<p>Gerüstbauerring 36</p>
				<p>18109 Rostock</p>
			</div>

			<h1>Kontakt</h1>
			<div>
				<p>
					<strong>Telefon:</strong>
					<a href="tel:+4915110220053">+49 1511 0220 053</a>
				</p>
				<p>
					<strong>E-Mail:</strong>
					<a href="mailto:f3dox@proton.me">f3dox@proton.me</a>
				</p>
				<p className="disclaimer">
					* Unter dieser Telefonnummer ist kein technischer Support verfügbar.
				</p>
			</div>

			<h1>Weiteres</h1>
			<p>
				Quelle: <a href="https://www.e-recht24.de/impressum-generator.html" target="_blank"
						   rel="noopener noreferrer" className="source-link">e-recht24.de Impressum-Generator</a>
			</p>
		</div>
	)
}

export default Page
