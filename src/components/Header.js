import React from 'react'

const styles = {
    height: '60px',
    width: '100vw',
    padding: '5px',
    paddingTop: '30px',
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'Arial',
    backgroundColor: '#faefae'
  };

const Header = () => {
    return (
        <div style={styles}>
            <header>TRENINGSPARKER I TRONDHEIM</header>
        </div>
    )
}

export default Header
