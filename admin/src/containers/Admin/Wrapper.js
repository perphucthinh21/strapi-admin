import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  p,
  span {
  }

  .adminPageRightWrapper {
    width: ${props => `calc(100% - ${props.theme.main.sizes.leftMenu.width})`};
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      sizes: {
        leftMenu: {},
      },
    },
  },
};

export default Wrapper;
