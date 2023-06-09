import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>Job <span>Tracking</span> app</h1>
                <p>
                    I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
                    bottle single-origin coffee chia, Aesthetic post-ironic venmo,
                    quinoa lo-fi tote bag adaptogen everyday carry meggings +1 branch narwhal.
                </p>
                <button className='btn btn0hero'>Login/register</button>
            </div>
            <img src={main} alt='job-hunt' className='img main-img' />
        </div>
    </Wrapper>
  )
}

export default Landing