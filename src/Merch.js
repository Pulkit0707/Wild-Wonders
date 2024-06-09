import React from 'react'
import Product from './Product'
import "./Merch.css"

function Merch() {
  return (
    <div className='merch'>
      <div className='merch_container'>
            <img
            className='merch_image' 
            src='https://www.alveussanctuary.org/_next/static/media/01.4b17e036.jpg'></img>
            <div className='merch_row'>
                <Product title='Cap' price={1000} image='https://files.cdn.printful.com/files/14a/14ace1e77b7722413facdbe5ff9fac27_preview.png' rating={5} type='Buy'/>
                <Product title='Georgie Toy' price={800} image='https://statuecollectibles.com/images_upd/products/8/f3npxurgl56k.jpg' rating={4} type='Buy'/>
                <Product title='Stuff Toy' price={500} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh4c0JjIjuBRaCM1JkyjMkBeSrJ9O5JtHFQ&s' rating={4} type='Buy'/>
                <Product title='Acero Toy' price={1200} image='https://media.entertainmentearth.com/assets/images/1190b5efe6694dcb962ba336f3f283c7xl.jpg' rating={5} type='Buy'/>
            </div>
            <div className='merch_row'>
            <Product title='Hoodie 1' price={3500} image='https://cdn.tzy.li/tzy/previews/images/002/547/268/215/original/alveus-sanctuary-merchandises.jpg?1690022619' rating={5} type='Buy'/>
            <Product title='Hoodie 2' price={3500} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehkdDEGoUvxURRAH9TfR7KX48QuveD8wMKQ&s' rating={5} type='Buy'/>
            <Product title='Hoodie 3' price={3500} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrW01-a1H6AcQRdZtBCoDOuPcXlG1lJo4HQ&s' rating={4} type='Buy'/>
            <Product title='Take Care Hoodie' price={3500} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ao0WylJaHCLZTmRJvs5pQFX-LjLwtkDHvA&s' rating={5} type='Buy'/>
            </div>
            <div className='merch_row'>
            <Product title='Take Care T-Shirt' price={2500} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdKeCoscnsRoIo9zrRZ5w_ChVxRZHB0xlRw&s' rating={5} type='Buy'/>
            <Product title='T-Shirt ' price={2500} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJ9z4iKzGPwYRcZfbFuz5XwU5cCPVnKPQ_Q&s' rating={4} type='Buy'/>
            <Product title='Awa Timber T-Shirt 1' price={2500} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4Keu6Qtz_AaWNwIyp9GI99XHysU8nXISxg&s' rating={5} type='Buy'/>
            <Product title='Awa Timber T-Shirt 2' price={2500} image='https://cdn.tzy.li/tzy/previews/images/002/763/741/713/original/new-alveus-sanctuary-merchandi.jpg?1717040958' rating={5} type='Buy'/>
            </div>
        </div>
    </div>
  )
}

export default Merch
