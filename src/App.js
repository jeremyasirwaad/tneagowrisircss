import logo from "./logo.svg";
import "./App.css";
import Select from "react-select";

function App() {
	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberrychocolate", label: "strawberry chocolate" },
		{ value: "vanilla", label: "Vanilla" }
	];

	const options2 = [
		{ value: 224, label: "Agamudayar including Thozhu or Thuluva Vellala" },
		{ value: 225, label: "Agaram Vellan Chettiar" },
		{
			value: 226,
			label:
				"Alwar, Azhavar and Alavar (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District.)"
		},
		{
			value: 227,
			label:
				"Servai(except Tiruchirapalli, Karur, Perambalur and Pudukottai Districts.)"
		},
		{
			value: 228,
			label:
				"Nulayar(in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{ value: 229, label: "Archakarai Vellala" },
		{
			value: 230,
			label:
				"Aryavathi(in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{ value: 231, label: "Ayira Vaisyar" },
		{ value: 232, label: "Badagar" },
		{ value: 233, label: "Billava" },
		{ value: 234, label: "Bondil" },
		{
			value: 235,
			label:
				"Boyas (except Tiruchirapalli, Karur, Perambalur, Pudukottai, The Nilgiris, Salem , Namakkal Dharmapuri and Krishnagiri Districts). Pedda Boyar (except Tiruchirapalli, Karur ,Perambalur and Pudukottai Districts).Oddars (except Thanjavur, Nagapattinam, Tiruvarur, Tiruchirapalli, Karur, Perambalur, Pudukottai, Madurai,Theni and Dindigul Districts).Kaloddars (except Kancheepuram, Tiruvallur, Ramanathapuram, Sivaganga, Viruthunagar, Madurai, Theni, Dindigul, Purdukkottai, Tiruchirappalli, Karur, Perambalur, Tirunelveli, Thoothukudi, Salam and Namakkal Districts).Nellorepet oddars (except Vellore and Tiruvannamalai Districts) Sooramari oddars( except Salem and Namakkal)"
		},
		{
			value: 236,
			label:
				"Chakkala (except Sivaganga, Virudhunagar, Ramanathapuram, Thanjavur ,Nagapattinam,Tiruvarur, Pudukottai, Tiruchirapalli, Karur, Perambalur, Madurai, Theni, Dindigul and the Nilgiris Districts)"
		},
		{
			value: 237,
			label:
				"Chavalakarar (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{
			value: 238,
			label:
				"Chettu or Chetty (including Kottar Chetty, Elur Chetty, Pathira Chetty, Valayal Chetty,Pudukadai Chetty ) ( in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{ value: 239, label: "Chowdry" },
		{
			value: 240,
			label:
				"Converts to Christianity from Scheduled Castes irrespective of the generation of conversion for the purpose of reservation of seats in Educational Institutions and for seats in Public Services."
		},
		{
			value: 241,
			label:
				"C.S.I formerly S.I.U.C (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{
			value: 242,
			label:
				"Donga Dasaris ( except Kancheepuram, Tiruvallur, Trichirapalli, Karur, Parambalur, Pudukottai, Chennai, Salem and Namakkal Districts."
		},
		{ value: 243, label: "Devangar, Sedar" },
		{
			value: 244,
			label:
				"Dombs (except Pudukottai, Tiruchirapalli ,Karur and Perambalur Districts). Dommars (except Thanjavur, Nagapattinam,Tiruvarur, Pudukottai,Vellore and Thiruvannamalai Districts)"
		},
		{ value: 245, label: "Enadi" },
		{
			value: 246,
			label:
				"Ezhavathy(in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{
			value: 247,
			label:
				"Ezhuthachar (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{
			value: 248,
			label:
				"Ezhuva(in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{ value: 249, label: "Gangavar" },
		{
			value: 250,
			label:
				"Gavara, Gavarai and Vadugar(Vaduvar)(other than Kamma, Kapu, Balija and Reddi)"
		},
		{ value: 251, label: "Gounder" },
		{
			value: 252,
			label: "Gowda (including Gammala, Kalali and Anuppa Gounder)"
		},
		{ value: 253, label: "Hegde" },
		{ value: 254, label: "Idiga" },
		{ value: 255, label: "IllathuPillaimar, Illuvar, Ezhuvar and Illathar" },
		{ value: 256, label: "Jhetty" },
		{
			value: 257,
			label:
				"Jogis (Except Kancheepuram, Tiruvallur, Madurai, Theni, Dindigul, Cuddalore, Villupuram, Vellore and Tiruvannamalai Districts)"
		},
		{ value: 258, label: "Kabbera" },
		{ value: 259, label: "Kaikolar, Sengunthar" },
		{
			value: 260,
			label:
				"Kaladi (except Sivaganga, Virudhunagar, Ramanathapuram, Madurai, Theni, Dindigul,Thanjavur, Nagapattinam,Tiruvarur, Pudukottai, Tiruchirapalli, Karur and Perambalur Districts)"
		},
		{
			value: 261,
			label:
				"Kalari Kurup including Kalari Panicker (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{ value: 262, label: "Kalingi" },
		{
			value: 263,
			label:
				"Kallar , Easanattu Kallar.Gandharva Kottai Kallars(except Thanjavur, Nagapattinam, Tiruvarur and Pudukottai Districts). Kootappal Kallars-(except Pudukottai, Tiruchirapalli,Karur and Perambalur Districts).Piramalai Kallars- (except Sivaganga,Virudhunagar, Ramanathapuram. Madurai. Theni, Dindigul, Pudukottai, Thanjavur, pattinam and Tiruvarur Districts). Periyasooriyur Kallars- (except Tiruchirapalli, Karur, Perambalur and Pudukottai Districts)"
		},
		{ value: 264, label: "Kallar Kula Thondaman" },
		{ value: 265, label: "Kalveli Gounder" },
		{ value: 266, label: "Kambar" },
		{
			value: 267,
			label:
				"Kammalar or Viswakarma , Viswakarmala (including Thattar, Porkollar, Kannar, Karumar, Kollar, Thacher, Kal Thacher, Kamsala and Viswa brahmin.)"
		},
		{ value: 268, label: "Kani, Kanisu, Kaniyar Panicker" },
		{ value: 269, label: "Kaniyala Vellalar" },
		{
			value: 270,
			label:
				"Kannada Saineegar ,Kannadiyar (Throughout the State) and Dasapalanjika (Coimbatore, Erode and the Nilgiris Districts)"
		},
		{ value: 271, label: "Kannadiya Naidu" },
		{ value: 272, label: "Karpoora Chettiar" },
		{
			value: 273,
			label:
				"Karuneegar (Seer Karuneegar, Sri Karuneegar, Sarattu Karuneegar, Kaikatti Karuneegar, Mathuvazhi Kanakkar, Sozhi Kanakkar, and Sunnambu Karuneegar)"
		},
		{ value: 274, label: "Kasukkara Chettiar" },
		{ value: 275, label: "Katesar, Pattamkatti" },
		{ value: 276, label: "Kavuthiyar" },
		{ value: 277, label: "Kerala Mudali" },
		{ value: 278, label: "Kharvi" },
		{ value: 279, label: "Khatri" },
		{ value: 280, label: "Kongu Vaishnava" },
		{
			value: 281,
			label:
				"Kongu Vellalars( including Vellala Gounder, Nattu Gounder, Narambukkatti Gounder, Tirumudi Vellalar, Thondu Vellalar, Pala Gounder, Poosari Gounder, Anuppa Vellala Gounder, Padaithalai Gounder, Chendalai Gounder, Pavalankatti Vellala Gounder,Palavellala Gounder, Sanku Vellala Gounder and Rathinagiri Gounder)."
		},
		{ value: 282, label: "KoppalaVelama" },
		{ value: 283, label: "Koteyar" },
		{
			value: 284,
			label:
				"Krishnanvaka (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{ value: 285, label: "Kudikara Vellalar" },
		{
			value: 286,
			label:
				"Kudumbi ( in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{ value: 287, label: "Kuga Vellalar" },
		{ value: 288, label: "Kunchidigar" },
		{
			value: 289,
			label:
				"Latin Catholics except Latin Catholic Vannar in Kanniyakumari District."
		},
		{
			value: 290,
			label: "Lathin Catholics in Shencottah Taluk of Tirunelveli District"
		},
		{ value: 291, label: "Lambadi" },
		{ value: 292, label: "Lingayat (Jangama)" },
		{ value: 293, label: "Mahratta (Non-Brahmin) (including Namdev Mahratta)" },
		{ value: 294, label: "Malayar" },
		{ value: 295, label: "Male" },
		{ value: 296, label: "Maniagar" },
		{
			value: 297,
			label:
				"Maravars (except Thanjavur, Nagapattinum , Tiruvarur, Pudukottai, Ramanathapuram, Sivaganga, Virudhunagar, Tirunelveli and Toothukudi Districts). Karumaravars. Appanad Kondayam kottai Maravar –(except Sivaganga, Virudhunagar, Ramanathapuram, Madurai, Theni and Dindigul Districts.). Sembanad Maravars- (except Sivaganga, Virudhunagar, and Ramanathapuram Districts)"
		},
		{ value: 298, label: "Moondrumandai Enbathunalu (84) Ur. Sozhia Vellalar" },
		{ value: 299, label: "Mooppan" },
		{ value: 300, label: "Muthuraja, Muthuracha, Muttiriyar, Mutharaiyar" },
		{ value: 301, label: "Nadar, Shanar and Gramani" },
		{ value: 302, label: "Nagaram" },
		{
			value: 303,
			label:
				"Naikkar (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District)"
		},
		{ value: 304, label: "Nangudi Vellalar" },
		{
			value: 305,
			label:
				"Nanjil Mudali (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District )"
		},
		{
			value: 306,
			label:
				"Odar (in Kanniyakumari District and Shencottah Taluk of Tirunelveli District )"
		},
		{ value: 307, label: "Odiya" },
		{ value: 308, label: "Oottruvalanattu Vellalar" },
		{ value: 309, label: "O.P.S. Vellalar" },
		{ value: 310, label: "Ovachar" },
		{ value: 311, label: "Paiyur Kotta Vellalar" },
		{ value: 312, label: "Pamulu" },
		{
			value: 313,
			label:
				"Panar ( except in Kanniyakumari District and Shencottah Taluk of Tirunelveli District where the community is a Scheduled Caste )"
		},
		{ value: 314, label: "Pandiya Vellalar" },
		{ value: 315, label: "Kathikarar in Kanniyakumari District" },
		{ value: 316, label: "Pannirandam Chettiar or Uthama Chettiar" },
		{
			value: 317,
			label:
				"Parkavakulam ( including Surithimar, Nathamar, Malayamar, Moopanar and Nainar )"
		},
		{ value: 318, label: "Perike ( including Perike Balija )" },
		{
			value: 319,
			label:
				"Perumkollar ( in Kanniyakumari District and Shencottah Taluk of Tirunelveli District )"
		},
		{ value: 320, label: "Podikara Vellalar" },
		{ value: 321, label: "Pooluva Gounder" },
		{ value: 322, label: "Poraya" },
		{ value: 323, label: "Pulavar ( in Coimbatore and Erode Districts )" },
		{ value: 324, label: "Pulluvar or Pooluvar" },
		{ value: 325, label: "Pusala" },
		{ value: 326, label: "Reddy ( Ganjam )" },
		{
			value: 327,
			label:
				"Sadhu Chetty ( including Telugu Chetty, Twenty four Manai Telugu Chetty)"
		},
		{
			value: 328,
			label:
				"Sakkaravar or Kavathi ( in Kanniyakumari District and Shencottah Taluk of Tirunelveli District )"
		},
		{ value: 329, label: "Salivagana" },
		{
			value: 330,
			label: "Saliyar, Padmasaliyar, Pattusaliyar, Pattariyar, and Adhaviyar"
		},
		{ value: 331, label: "Savalakkarar" },
		{ value: 332, label: "Senaithalaivar, Senaikudiyar and Illaivaniar" },
		{ value: 333, label: "Serakula Vellalar" },
		{ value: 334, label: "Sourashtra ( Patnulkarar )" },
		{
			value: 335,
			label:
				"Sozhiavellalar ( including Sozha Vellalar, Vetrilaikarar, Kodikalkarar and Keeraikarar )"
		},
		{ value: 336, label: "Srisayar" },
		{ value: 337, label: "Sundaram Chetty" },
		{ value: 338, label: "Thogatta Veerakshatriya" },
		{
			value: 339,
			label:
				"Tholkollar ( in Kanniyakumari District and Shencottah Taluk of Tirunelveli District )"
		},
		{ value: 340, label: "Tholuva Naicker and Vetalakara Naicker" },
		{ value: 341, label: "Thoraiyar" },
		{ value: 342, label: "Thoriyar" },
		{ value: 343, label: "Ukkirakula Kshatriya Naicker" },
		{ value: 344, label: "Uppara, Uppillia and Sagara" },
		{
			value: 345,
			label:
				"Urali Gounder ( except Tiruchirapalli, Karur , Perambalur and Pudukottai District) and Orudaya Gounder or Oorudaya Gounder (in Madurai ,Theni, Dindigul, Coimbatore, Erode, Tiruchirapalli, Karur , Perambalur, Pudukottai, Salem and Namakkal Districts )"
		},
		{ value: 346, label: "Urikkara Nayakkar" },
		{ value: 347, label: "Virakodi Vellala" },
		{ value: 348, label: "Vallambar" },
		{ value: 349, label: "Vallanattu Chettiar" },
		{ value: 350, label: "Valmiki" },
		{
			value: 351,
			label:
				"Vaniyar, Vania Chettiar ( including Gandla, Ganika, Telikula and Chekkalar)"
		},
		{
			value: 352,
			label:
				"Veduvar and Vedar ( except in Kanniyakumari District and Shencottah Taluk of Tirunelveli District where the community is aScheduled Castes)"
		},
		{
			value: 353,
			label:
				"Veerasaiva ( in Kanniyakumari District and Shencottah Taluk of Tirunelveli District )"
		},
		{ value: 354, label: "Velar" },
		{ value: 355, label: "Vellan Chettiar" },
		{
			value: 356,
			label:
				"Veluthodathu Nair ( in Kanniyakumari District and Shencottah Taluk of Tirunelveli District )"
		},
		{
			value: 357,
			label:
				"Vokkaligar ( including Vakkaligar, Okkaligar, Kappiliyar, Kappiliya, Okkaliga Gowda, Okkaliya- Gowda, Okkaliya- Gowder, Okkaliya Gowda )"
		},
		{ value: 358, label: "Wynad Chetty ( The Nilgiris District )" },
		{
			value: 359,
			label:
				"Yadhava ( including Idaiyar, Telugu Speaking Idaiyar known as Vaduga Ayar or Vaduga Idaiyar or Golla and Asthanthra Golla )"
		},
		{ value: 360, label: "Yavana" },
		{ value: 361, label: "Yerukula" },
		{
			value: 362,
			label:
				"Orphans and destitute children who have lost their parents before reaching the age of ten and are destitutes; and who have nobody else to take care of them either by law or custom; and also who are admitted into any of the schools or orphanages run by the Government or recognized by the Government."
		},
		{ value: 370, label: "Thiyya" },
		{
			value: 371,
			label:
				"Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community or Denotified Communities (except the Converts to Christianity from Meenavar, Parvatharajakulam, Pattanavar, Sembadavar, Mukkuvar or Mukayar and Paravar)"
		}
	];

	return (
		<div className="App">
			<div
				style={{
					width: "500px",
					height: "100px",
					margin: "50px"
				}}
			>
				<Select options={options2} isClearable={true} />
			</div>
		</div>
	);
}

export default App;
