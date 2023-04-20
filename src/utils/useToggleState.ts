import { useState, Dispatch, SetStateAction } from "react";

export const useToggleState = (
  initialState: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [state, setState] = useState(initialState);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggleState, setState];
};
