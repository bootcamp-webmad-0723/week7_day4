import { Button, Container, Modal } from 'react-bootstrap'
import CoastersList from '../../components/CoastersList/CoastersList'
import NewCoasterForm from '../../components/NewCoasterForm/NewCoasterForm'
import { useEffect, useState } from 'react'

import coastersService from '../../services/coasters.services'

const CoastersGalleryPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [coasters, setCoasters] = useState()

    useEffect(() => {
        loadCoasters()
    }, [])

    const loadCoasters = () => {
        coastersService
            .getCoasters()
            .then(({ data }) => setCoasters(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="CoastersGalleryPage">
            <Container>
                <h1>Galería de montañas rusas</h1>
                <Button variant='dark' size='sm' onClick={() => setShowModal(true)}>Crear nueva</Button>
                <hr></hr>
                <CoastersList coasters={coasters} />
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewCoasterForm setShowModal={setShowModal} refreshCoasters={loadCoasters} />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default CoastersGalleryPage