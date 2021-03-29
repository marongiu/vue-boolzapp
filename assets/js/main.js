var app = new Vue({
	el: '#root',
	data: {
		// Dati username
		user: '',
		// Valore input
		text: '',
		// moment.js
		// ultimo accesso
		lastAccess: moment().locale('it').calendar().toLowerCase(),
		// Ultima chat con utente
		accessUser: moment().locale('it').format('dddd'),
		// Orario messaggi
		messageDate: moment().locale('it').format('LT'),
		// Cerca utenti
		search: '',
		contacts: [
			{
				name: 'Michele',
				avatar: '_1',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Hai portato a spasso il cane?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Ricordati di dargli da mangiare',
						status: 'sent'
					},
					{
						date: '10/01/2020 16:15:22',
						text: 'Tutto fatto!',
						status: 'received'
					}
				],
			},
			{
				name: 'Fabio',
				avatar: '_2',
				visible: true,
				messages: [
					{
						date: '20/03/2020 16:30:00',
						text: 'Ciao come stai?',
						status: 'sent'
					},
					{
						date: '20/03/2020 16:30:55',
						text: 'Bene grazie! Stasera ci vediamo?',
						status: 'received'
					},
					{
						date: '20/03/2020 16:35:00',
						text: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'sent'
					}
				],
			},
			{
				name: 'Samuele',
				avatar: '_3',
				visible: true,
				messages: [
					{
						date: '28/03/2020 10:10:40',
						text: 'La Marianna va in campagna',
						status: 'received'
					},
					{
						date: '28/03/2020 10:20:10',
						text: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
					},
					{
						date: '28/03/2020 16:15:22',
						text: 'Ah scusa!',
						status: 'received'
					}
				],
			},
			{
				name: 'Luisa',
				avatar: '_4',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Si, ma preferirei andare al cinema',
						status: 'received'
					}
				],
			},
			{
				name: 'Valerio',
				avatar: '_5',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Ciao, come stai?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Potrebbe andare meglio te?',
						status: 'received'
					}
				],
			},
			{
				name: 'Daniela',
				avatar: '_6',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Come va con l università?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Bene mi manca un esame!',
						status: 'received'
					}
				],
			},
			{
				name: 'Lorenzo',
				avatar: '_7',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Ti va di uscire domani?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Si, ma vorrei andare al parco',
						status: 'received'
					}
				],
			},
			{
				name: 'Simone',
				avatar: '_8',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Oggi ci sei a lezione?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Mi serve una mano con un compito',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Ci sono ci vediamo in classe',
						status: 'received'
					}
				],
			},
			{
				name: 'Max',
				avatar: '_1',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Tra 10 minuti sono sotto casa tua!',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Ricordati il regalo per Daniela',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Ho preso tutto',
						status: 'received'
					}
				],
			},
		],
	},

	// Document ready contatto Michele
	mounted: function () {
		this.user = this.contacts[0]
	},
	// Funzioni
	methods: {
		// Salvo il contatto
		changeUser: function (i) {
			this.user = this.contacts[i];
		},
		addMessage: function () {
			// Controllo
			if (this.text.length >= 1) {
				// Pusho quando mando
				this.user.messages.push(
					{
						date: this.messageDate,
						text: this.text,
						status: 'sent'
					}
				),
				this.text = ''

				// Funzione timeout con self
				var vueSelf = this;
				// Funzione timeout
				setTimeout(function () {
					let interval =
					{
						date: this.messageDate,
						text: "ok",
						status: 'received'
					}
					vueSelf.user.messages.push(interval)
					// ogni 3 secondi pusha "ok"
				},3000)

				// alternativa on arrowfunction
				// arrow function
				// setTimeout(() => {
				// 	let obj =
				// 	{
				// 			date: this.messageDate,
				// 			text: "ok",
				// 			status: 'received'
				// 	}
				// 	this.user.messages.push(obj)
				// },3000)

			} 			// fine if
		},
	},
	computed: {
		searchUser: function () {
			return this.contacts.filter((contatto) => {
				return contatto.name.toLowerCase().includes(this.search.toLowerCase())
			})
		}
	}
});

//
