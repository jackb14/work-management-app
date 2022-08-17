import MainContent from '../components/MainContent';
import SideBar from '../components/SideBar/SideBar';
import Flex from '../components/Styles/Flex';

function PrimaryLayout() {
    return (
        <>
            <Flex>
                <SideBar />
                <MainContent />
            </Flex>
        </>
    )
}

export default PrimaryLayout;