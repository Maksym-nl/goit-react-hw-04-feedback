import { Button } from './feedback.styled';

export function Feedback({ handleClick, options }) {
  
  return (
    <div>
      {options.map(option => (
        <Button key={option} onClick={() => handleClick(option)} type="button">
          {option}
        </Button>
      ))}
    </div>
  );
}


