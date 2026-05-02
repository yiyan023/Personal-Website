import React from 'react'
import { NavBar } from "../../components/common/NavBar";
import { Banner } from "../../components/sections/Banner";
import { About } from "../../components/sections/About"
import { PokemonChampionsRanking } from "../../components/sections/PokemonChampionsRanking"
import Footer from '../../components/common/Footer';

const Home = () => {
  return (
	<div className='home'>
		<NavBar />
		<Banner />
		<About />
		<PokemonChampionsRanking />
		<Footer />
	</div>
  )
}

export default Home