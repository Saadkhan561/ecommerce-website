import React, { useState } from 'react';
import styled from 'styled-components';
import CarouselDiv from './carousel';

const Layout = () => {
  const [display, setDisplay] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [subNavbar, setSubNavbar] = useState(false);

  return (
    <Main>
      {/* ***********NAVBAR**************** */}
      <NavMainDiv>
        <NavSubDiv>
          <div id='logo-div'>Logo Name</div>
        </NavSubDiv>
        <div className='navbar-open'>
          <CategoryDiv>
            <HeaderDiv>
              <a id='header-link' href=''>
                Category
              </a>
              <Button onClick={() => setDisplay(!display)}>
                <img
                  src='./assets/category-arrow.png'
                  alt=''
                  height='13x'
                  width='13px'
                />
              </Button>
            </HeaderDiv>
            <div id='category-div'>
              <Categories hidden={display}>
                <CategoryList>Perfume</CategoryList>
                <CategoryList>Shoes</CategoryList>
              </Categories>
            </div>
          </CategoryDiv>
          <HeaderDiv>
            <a id='header-link' href=''>
              What's new
            </a>
          </HeaderDiv>
          <div id='summer-deals-div'>
            <a id='header-link' href=''>
              Summer Deals
            </a>
          </div>
          <div id='search-div'>
            <div>
              <SearchField type='text' placeholder='Search here...' />
            </div>
            <div>
              <SearchButton>Search</SearchButton>
            </div>
          </div>
          <IconDiv>
            <Button>
              <img
                id='icon'
                src='./assets/account-icon.png'
                alt=''
                height='26px'
                width='26px'
              />
            </Button>
          </IconDiv>
          <IconDiv>
            <Button>
              <img
                id='icon'
                src='./assets/shopping-cart.png'
                alt=''
                height='28px'
                width='28px'
              />
            </Button>
          </IconDiv>
        </div>
        <div className='navbar-closed'>
          <BarButton id='bar-button' onClick={() => setNavbar(!navbar)}>
            <img src='./assets/options-bar.png' alt='' height={30} width={30} />
          </BarButton>
        </div>
      </NavMainDiv>
      <NavBarClosedUlDiv>
        <NavBarClosedUl className='nav-closed-ul'>
          <div className='nav-closed-li'>
            <li>Cateogry</li>
            <button
              id='nav-closed-button'
              onClick={() => setSubNavbar(!subNavbar)}
            >
              <img
                id='nav-closed-image'
                src='/assets/category-arrow.png'
                alt=''
                height='13x'
                width='13px'
              />
            </button>
          </div>
          <div
            className={
              subNavbar ? 'category-list-nav-open' : 'category-list-nav-closed'
            }
          >
            <ul>
              <NavBarClosedLi>Perfume</NavBarClosedLi>
              <NavBarClosedLi>Shoes</NavBarClosedLi>
            </ul>
          </div>
          <div className={subNavbar ? 'sub-navbar-open' : 'sub-navbar-closed'}>
            <NavBarClosedLi>What's new</NavBarClosedLi>
            <NavBarClosedLi>Summer Deals</NavBarClosedLi>
            <NavBarClosedLi>Profile</NavBarClosedLi>
            <NavBarClosedLi>My Cart</NavBarClosedLi>
          </div>
        </NavBarClosedUl>
      </NavBarClosedUlDiv>
      {/* ***********NAVBAR**************** */}
      <CarouselDiv navbar={navbar} subNavbar={subNavbar} />
    </Main>
  );
};

export default Layout;

const Main = styled.div`
  width: 100%;
`;

// ******************NAVBAR*******************

const NavMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-top: 18px;
  width: 100%;
`;

const NavSubDiv = styled.div`
  display: flex;
`;

const CategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderDiv = styled.div`
  display: flex;
  padding: 10px;
  width: 90px;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  margin-left: 5px;
  cursor: pointer;
  align-items: center;
`;

const Categories = styled.ul`
  position: absolute;
  z-index: 9;
  list-style-type: none;
  padding: 0;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 5px;
  background-color: white;
`;

const CategoryList = styled.li`
  padding: 10px;
  width: 80px;
  &:hover {
    background-color: rgb(228, 228, 228);
    cursor: pointer;
    transition: 400ms;
  }
`;

const SearchField = styled.input`
  padding: 10px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-color: grey;
  border: none;
  font-size: 13px;
  &:focus {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    outline: none;
    transition: 800ms;
    border: 1px solid rgb(228, 228, 228);
  }
`;

const SearchButton = styled.button`
  padding: 9px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 1px solid rgb(228, 228, 228);
  cursor: pointer;
  color: white;
  background-color: #1c621a;
`;

const IconDiv = styled.div`
  width: 40px;
  margin-right: 20px;
`;

const BarButton = styled.button`
  cursor: pointer;
  border: white;
`;

const NavBarClosedUlDiv = styled.div`
  position: absolute;
  width: 100%;
`;

const NavBarClosedUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavBarClosedLi = styled.li`
  padding: 10px 45px;
  cursor: pointer;
  :hover {
    background-color: rgb(176, 176, 176);
    cursor: pointer;
    transition-duration: 0.5s;
  }
`;

// ******************NAVBAR*******************
