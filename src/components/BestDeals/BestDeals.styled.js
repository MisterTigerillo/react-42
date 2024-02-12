import styled from 'styled-components';

export const Styled = {
  GalleryButtons: styled.div`
    outline: 1px solid black;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: lightcoral;
    margin-bottom: 50px;
  `,
  Button: styled.button`
    width: 25%;
    height: 50px;
  `,

  Tab: styled.div`
    background-color: lightgray;
    position: absolute;
    width: 25%;
    top: 102%;
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    /* left: 0; */
  `,

  GalleryTabs: styled.div`
    /* margin-top: 20px; */
    background-color: lightblue;
  `,
  Tabs: styled.div`
    display: flex;
    justify-content: center;
    column-gap: 30px;
    background-color: lightseagreen;
  `,
};
