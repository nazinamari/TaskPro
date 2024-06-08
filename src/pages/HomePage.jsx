import SideBar from '../components/SideBar/SideBar';

import Layout from '../shared/components/Layout/Layout';
import MainContent from '../components/MainContent/MainContent';

export default function HomePage() {
	return (
		<Layout>
			<SideBar />
			<MainContent />
		</Layout>
	);
}
