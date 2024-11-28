export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //if prop doesn't start with uppercase character
  //const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
