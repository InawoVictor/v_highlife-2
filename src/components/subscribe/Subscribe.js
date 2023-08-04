import styled from "styled-components"
import './Subscribe.css';

const Subscribe = () => {
  return (
    <SubscribeContainer>
      <div className='subscribe'>
        <h1 className="subscribe-heading-1">Be a Part of the High Life World</h1>
        <h4 className="subscribe-heading-4">Join Our Mailing List</h4>
      </div>
      <form className="subscribe-input">
          <input type='text' placeholder="email@example.com" className="text"/>
          <button className="button">Subscribe</button>
      </form>
    </SubscribeContainer>
  )
}

const SubscribeContainer = styled.div`
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 2rem;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-bottom: 1px solid #ced4da;
`;

export default Subscribe
