import './CircleSelector.css'

const CircleSelector = (props) => {
  return ( 
    <div className='circle-selector'>
      {props.selections.map((selection, idx) =>
      <div>hey</div>
      )}
    </div>
  );
}

export default CircleSelector ;