import React from 'react';

function List(props) {
  const toggle = (id) => {
    if (!props.toggle) return;
    props.toggle(id);
  };

  const onRemove = (evt, item) => {
    evt.stopPropagation();
    props.remove(item);
  };

  return (
    <ul>
      {props.items.map(item => {
        const style = item.complete ? 'line-through' : 'none';

        return (
          <li
            key={item.id}
            style={{ textDecoration: style }}
            onClick={() => toggle(item.id)}
          >
            <span>{item.name}</span>
            <button onClick={(evt) => onRemove(evt, item)}>X</button>
          </li>
        )
      })}
    </ul>
  );
}

export default List;