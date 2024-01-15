import { connect, useDispatch } from 'react-redux';
import Toast from 'react-bootstrap/Toast';
import { removeSystemToaster } from '../../actions/systemActions';
import { ToastContainer } from 'react-bootstrap';

export const TOASTER_INFO = 'info';
export const TOASTER_WARNING = 'warning';
export const TOASTER_SUCCESS = 'success';
export const TOASTER_CRITICAL = 'danger';

function Toasters({ system }) {
    const dispatch = useDispatch();

    const { toasters } = system;

    return (
        <ToastContainer position="top-end" className="mt-5 p-3" style={{ zIndex: 1 }}>
            {toasters.map((toaster) => (
                <Toast
                    key={toaster.id}
                    bg={toaster.variant}
                    delay={5000}
                    autohide
                    onClose={() => dispatch(removeSystemToaster(toaster.id))}
                >
                    <Toast.Body className='text-white'>{toaster.message}</Toast.Body>
                </Toast >
            ))}
        </ToastContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        system: state.system,
    };
};

export default connect(mapStateToProps)(Toasters);