import './waves.css';

export const Waves = () => {
    return (
        <div className='waves'>
            <img src="/img/wave.png" alt="" />
            <div className='wave first-wave'></div>
            <div className='wave second-wave'></div>
            <div className='wave third-wave'></div>
            <div className='wave fourth-wave'></div>
        </div>
    );
}