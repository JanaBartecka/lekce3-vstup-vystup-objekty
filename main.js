// 1 - formatovac data
let myDay=Number(prompt('Zadej dnesni den'));
let myMonth=Number(prompt('Zadej dnesni mesic'));
let myYear=Number(prompt('Zadej dnesni rok'));

let denZapis=document.querySelector(".day")
let mesicZapis=document.querySelector(".month")
let rokZapis=document.querySelector(".year")

denZapis.innerHTML=" " + myDay + "."
mesicZapis.innerHTML=myMonth + "."
rokZapis.innerHTML=myYear + "."

let GetDnesniDatum=new Date()
let dnesniDatum=document.querySelector(".dnesniDatum").innerHTML='Dneska je ' + GetDnesniDatum.getDay() + '.' + (GetDnesniDatum.getMonth()) + '.' + GetDnesniDatum.getFullYear()

// 2 - fahrheit vs celsius
let stupneFarInput=Number(prompt('Zadej stuone Fahrenheita'));
let stupneCelsia=document.querySelector('.stupneCelsia');
let stupneFah=document.querySelector('.stupneFah');
stupneCelsia.innerHTML=Math.round((5*(stupneFarInput-32)/9)*100)/100
stupneFah.innerHTML=stupneFarInput

// letenka
const flight = {
	id: '145c01af48dd00002715248e_0',
	dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
	aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
	duration: {
		departure: 8400,
		return: 0,
		total: 8400,
	},
	fly_duration: '2h 20m',
	flyFrom: 'PRG',
	cityFrom: 'Prague',
	cityCodeFrom: 'PRG',
	countryFrom: {
		code: 'CZ',
		name: 'Czechia',
	},
	flyTo: 'BCN',
	cityTo: 'Barcelona',
	cityCodeTo: 'BCN',
	countryTo: {
		code: 'ES',
		name: 'Spain',
	},
	distance: 1359.54,
	airline: 'FR',
	pnr_count: 1,
	technical_stops: 0,
	price: 36,
	bags_price: {
		1: 34.95,
		2: 69.91,
	},
	baglimit: {
		hand_width: 20,
		hand_height: 40,
		hand_length: 55,
		hand_weight: 10,
		hold_width: 81,
		hold_height: 119,
		hold_length: 119,
		hold_dimensions_sum: 319,
		hold_weight: 20,
	},
	availability: {
		seats: 2,
	},
	conversion: {
		EUR: 36,
	},
	quality: 66.66659,
}

// A
document.querySelector('.letFrom').innerHTML=flight.countryFrom.name
document.querySelector('.letTo').innerHTML=flight.countryTo.name

// B
const { hand_width,hand_height,hand_length,hand_weight,hold_width,hold_height,hold_length,hold_dimensions_sum,hold_weight } = flight.baglimit

document.querySelector('.prirucniZavazadlo').innerHTML=hold_width + 'x' + hold_height + 'x' + hold_length
document.querySelector('.odbaveneZavazadlo').innerHTML=hand_width + 'x' + hand_height + 'x' + hand_length

// C
document.querySelector('.maxPrirucniZavazadlo').innerHTML='Maximalni povoleny soucet rozmeru prirucniho zavazadla je:' + hold_dimensions_sum + 'cm. ' + 'Maximalni vaha zavazadla je:' + hold_weight + 'kg'

// D
document.querySelector('.DruheZavazadlo').innerHTML='Za druhe zavazadlo je nutne zaplatit ' + Math.ceil(flight['bags_price'][2]*flight.conversion.EUR) + 'Kč';