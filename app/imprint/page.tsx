import React from 'react'
import './imprint.css'

const Page = () => {
	return (
		<div className="p-4">
			<h1>Allgemeine Information</h1>
			<div>
				<p><strong>{process.env.NEXT_PUBLIC_IMRPINT_NAME}</strong></p>
				<p>{process.env.NEXT_PUBLIC_IMPRINT_STREET}</p>
				<p>{process.env.NEXT_PUBLIC_IMRPINT_ZIP} {process.env.NEXT_PUBLIC_IMRPINT_CITY}, {process.env.NEXT_PUBLIC_IMPRINT_COUNTRY}</p>
			</div>

			<h1>Kontakt</h1>
			<div>
				<p>
					<strong>Telefon:</strong>
					<a href={`tel:${process.env.NEXT_PUBLIC_IMPRINT_NUMBER}`}>{process.env.NEXT_PUBLIC_IMPRINT_NUMBER}</a>
				</p>
				<p>
					<strong>E-Mail:</strong>
					<a href={`mailto:${process.env.NEXT_PUBLIC_IMPRINT_EMAIL}`}>{process.env.NEXT_PUBLIC_IMPRINT_EMAIL}</a>
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

			<h1>Haftungsausschluss</h1>
			<div>
				<p>
					<strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt
					erstellt. Für die
					Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
					Als
					Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
					allgemeinen Gesetzen
					verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
					übermittelte oder
					gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
					rechtswidrige
					Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
					den
					allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
					Zeitpunkt der
					Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
					Rechtsverletzungen
					werden wir diese Inhalte umgehend entfernen.
				</p>
				<p>
					<strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf
					deren Inhalte
					wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
					übernehmen. Für die
					Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
					verantwortlich. Die
					verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
					Rechtswidrige
					Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
					der
					verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
					Bekanntwerden
					von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
				</p>
			</div>
		</div>
	)
}

export default Page
