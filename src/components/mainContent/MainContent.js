import Sidebar from '../sidebar/Sidebar';
import Section from './Section';
import styled from 'styled-components';


const MainContent = () => {
  return (
    
    <FlexWrapper>
      <Section />
      <Sidebar />
    </FlexWrapper>
    
    
  )
}

const FlexWrapper = styled.div`
  
  width: 100%;
  display: flex;
  justify-content: space-between;
  

  @media screen and (max-width: 1115px){
    gap: 3rem;
    
  }
  @media screen and (max-width: 820px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
  }
  @media screen and (max-width: 420px){
    width: 100%;
    gap: 0;
    
  }
`;

export default MainContent
