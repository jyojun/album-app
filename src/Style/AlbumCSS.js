import styled from "@emotion/styled";

const AlbumDiv = styled.div`
  max-width: 756px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 756px) {
    width: 90%;
  }
`;

const AlbumDetailDiv = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export { AlbumDiv, AlbumDetailDiv };
