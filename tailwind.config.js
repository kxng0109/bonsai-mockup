module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors:{
				"grey-shade" : "#4c4d5f",
				"green-shade" : "#00b289",
				"yellow-shade" : "#f8db62"
			},
			zIndex:{
				"1" : "1",
				"2" : "2",
				"3" : "3",
				"4" : "4"
			},
			screens:{
				'sm' : '480px',
				'lg': '992px'
			},
			backgroundImage:{
				'header-texture1' : "url('./images/background1.svg')",
				'header-texture2' : "url('./images/background2.svg')"
			}
		},
	},
	plugins: [],
}
