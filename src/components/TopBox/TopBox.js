import TopLogo from '../../assets/rozetkaGreen.svg';
import './TopBox.css';


const TopBox = () => {

    return <div className='topContainer'>
        <img id='topLogo' src={TopLogo} alt='Logo' />
    </div>
}

export default TopBox;