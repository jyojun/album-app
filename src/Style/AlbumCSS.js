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

const AlbumUploadDiv = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 30px;
  background-color: rgba(255, 255, 192, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);

  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    color: black;
    font-weight: lighter;
    font-family: roboto;
  }
  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  position: fixed;
  left: 0;
  right: 0;
  top: 12rem;
  margin-left: 5%;
`;
export { AlbumDiv, AlbumDetailDiv, AlbumUploadDiv };
