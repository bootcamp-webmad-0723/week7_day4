import { Routes, Route } from 'react-router-dom'
import CoastersGalleryPage from '../pages/CoastersGalleryPage/CoastersGalleryPage'
import CoasterDetailsPage from '../pages/CoasterDetailsPage/CoasterDetailsPage'
import NewCoasterPage from '../pages/NewCoasterPage/NewCoasterPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<p>EL INICIO</p>} />
            <Route path={'/galeria'} element={<CoastersGalleryPage />} />
            <Route path={'/detalles/:coaster_id'} element={<CoasterDetailsPage />} />
            <Route path={'/crear'} element={<NewCoasterPage />} />

            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}

export default AppRoutes