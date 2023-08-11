import React from 'react';
import './Logo.css';

function Logo() {
    return (
        <div className='Container__logo'>
            <h1 className='Logo__titulo'>ELETRO<span>MAX</span></h1>
            <div className='Logo__links'>
                <a className='Logo__links__item' href='#quemsomos' title='Quem Somos'>Quem Somos</a>
                <a className='Logo__links__item' href='#produtos' title='Produtos'>Produtos</a>
                <a className='Logo__links__item' href='#fornecedores' title='Fornecedores'>Fornecedores</a>
                <a className='Logo__links__item' href='#atendimento' title='Atendimento'>Atendimento</a>
            </div>
        </div>
    )
}

export default Logo;