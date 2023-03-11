import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Layout = () => {
  const [display, setDisplay] = useState(false);
  console.log(display);

  return (
    <Main>
      {/* ***********NAVBAR**************** */}
      <NavMainDiv>
        <NavSubDiv>
          <div id='logo-div'>Logo Name</div>
          <CategoryDiv>
            <HeaderDiv>
              <a id='header-link' href=''>
                Category
              </a>
              <Button onClick={() => setDisplay(!display)}>
                <img
                  src='./assets/cateogry-arrow.png'
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
        </NavSubDiv>
        <NavSubDiv>
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
        </NavSubDiv>
      </NavMainDiv>
      {/* ***********NAVBAR**************** */}
      <div>
        <div id='arrow-div'>
          <ArrowDiv>
            <div>
              <img src='./assets/left-arrow.png' alt='' />
            </div>
            <div>
              <img src='./assets/right-arrow.png' alt='' />
            </div>
          </ArrowDiv>
        </div>
        <ImgDiv>
          <Img src='/assets/perfume-img.jpg'></Img>
        </ImgDiv>
      </div>
    </Main>
  );
};

export default Layout;

const Main = styled.div``;

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
  width: 80px;
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

const ImgDiv = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  // <<<<<< To make the background of an image transparent >>>>>>>
  mix-blend-mode: multiply;
`;

const ArrowDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 95%;
  top: 40%;
`;
