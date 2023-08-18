import ShortenBox from './ShortenBox/ShortenBox';
import Content from './Content/Content';

import Main from './Main/Main';

const HomePage = () =>
    <>
        <div className='App1 App3'>
            <Main />
        </div>
        <div className='App2'>
            <ShortenBox />
            <Content />
        </div>
    </>

export default HomePage;