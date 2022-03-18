import './CircleSelector.css'

const CircleSelector = (props) => {
  return ( 
    <div className='circle-selector'>
      {props.selections.map((selection, idx) =>
      <button
      key={idx}
      className={selection ? 'selected' : ''}
      onClick={()=>props.handleSelectCircle(idx)}
      >
        Button {idx+1}
      </button>
      )}
    </div>
  );
}

export default CircleSelector ;