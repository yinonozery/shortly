import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ManageLinks from '../ManageLinks/ManageLinks';
import NotFound from '../assets/NotFound/NotFound';

const AllRoutes = () =>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="urls" element={<ManageLinks />} />
        <Route path="*" element={<NotFound />} />
    </Routes>


export default AllRoutes;