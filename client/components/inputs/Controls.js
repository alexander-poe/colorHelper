import React from 'react';

const Controls = (props) => {
  return (
    <div>
      <label>
        Header:
        <input onChange={props.header} type="color" value={props.headerValue} />
        <input onChange={props.header} type="text" value={props.headerValue} />
      </label>
      <br />
      <label>
        Container:
        <input onChange={props.mainContainer} type="color" value={props.mainContainerValue} />
        <input onChange={props.mainContainer} type="text" value={props.mainContainerValue} />
      </label>
      <br />
      <label>
        Footer:
        <input onChange={props.footer} type="color" value={props.footerValue} />
        <input onChange={props.footer} type="text" value={props.footerValue} />
      </label>
      <br />
      <label>
        Txt Color:
        <input onChange={props.textColor} type="color" value={props.textColorValue} />
        <input onChange={props.textColor} type="text" value={props.textColorValue} />
      </label>
      <br />
      <label>
        Icon Color:
        <input onChange={props.iconColor} type="color" value={props.iconColorValue} />
        <input onChange={props.iconColor} type="text" value={props.iconColorValue} />
      </label>
    </div>
  );
};

export default Controls;
