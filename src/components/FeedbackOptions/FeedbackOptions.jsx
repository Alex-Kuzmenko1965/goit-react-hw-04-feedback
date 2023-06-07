// import cl from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <>
    {options.map(name => {
    return (<button name = {name}  onClick={onLeaveFeedback}>{name.slice(0,1).toUpperCase() + name.slice(1)}</button>);})}    
    </>
  );
};