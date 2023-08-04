import styled from 'styled-components'
import Hero from '../components/hero/Hero'
import { ImgCarousel3 } from '../components/ImgCarousel/ImgCarousel'
import MainContent from '../components/mainContent/MainContent'
import Subscribe from '../components/subscribe/Subscribe'


const Home = () => {
  return (
    <div style={{width: '100%'}}>
      <Wrapper>
        <Hero /> 
      </Wrapper>

      <Wrapper1>
        <MainContent /> 
        <ImgCarousel3 />
      </Wrapper1>

      <Subscribe />
    </div>
    
  )
}
// 
// max-
const Wrapper = styled.div`
  box-sizing: inherit;
  width: 80vw;
  margin: 3rem auto;

  
  @media screen and (max-width: 960px){
    width: 95vw;
   }
  @media screen and (max-width: 900px){
    width: 75vw;
    
  }
  @media screen and (max-width: 590px){
    width: 80vw;
    margin: 1.5rem auto;
    
  }

  @media screen and (max-width: 420px){
    width: 95%;
    margin: 1.5rem auto;
  }
  
`;
const Wrapper1 = styled.div`
  
  width: 80vw;
  margin: 3rem auto;
  margin-bottom: 10rem;
  
  @media screen and (max-width: 960px){
    width: 95vw;
   }
  @media screen and (max-width: 900px){
    width: 75vw;
    
  }
  @media screen and (max-width: 590px){
    width: 80vw;
    margin: 3rem auto;
  }
   
  @media screen and (max-width: 420px){
    width: 95%;
  }
  @media screen and (max-width: 384px){
    width: 95vw;
  }
`;

export default Home
