import { React } from 'react'
import { NavBar } from "../../components/common/NavBar";
import AwardList from '../../components/sections/AwardList';
import Footer from '../../components/common/Footer';

const Awards = () => {
	return (
		<div className="skill" id="skill">
			<NavBar />
			<AwardList />
			<Footer />
		</div>
	)
}

export default Awards
