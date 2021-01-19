import React from 'react'

const menuStyle = {
    position: "absolute",
    background: "#fff",
    padding: "10px",
    zIndex: "1",
    display: "flex",
    fontFamily: "Open Sans"
  };

const layers = [
    { id: "streets-v11", name: "Streets" },
    { id: "light-v10", name: "Light" },
    { id: "dark-v10", name: "Dark" },
    { id: "satellite-v9", name: "Satellite" },
  ];

const Menu = (props) => {
    return (
        <div style={menuStyle}>
        {layers.map((layer) => (
            <div key={layer.id}>
            <input
                id={layer.id}
                type="radio"
                name="rtoggle"
                value={layer.id}
                onClick={() => props.setLayerId(layer.id)}
                defaultChecked={layer.id === props.layerId}
            />
            <label>{layer.name}</label>
            </div>
        ))}
        </div>
    )
}

export default Menu