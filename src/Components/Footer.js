import React from 'react';

export const Footer = (props) => {

    let footerStyle={
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '50px',
        color: '#fff',
    }

    return (
        <>
        <footer className="footer mt-auto py-3 bg-dark" style={footerStyle}>
        <p className='text-center' >Copyright &copy; MyTodo App! {props.year}</p>
        
</footer>
        </>
    );
}