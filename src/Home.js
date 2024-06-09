import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img
            className='home_image' 
            src='https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1712081/Alveus_Sanctuary_Gondola_Valentines_Day_Card_Posters_and_Prints_8dfcec7a-fb64-479f-ab8d-d817e915ddcd(2).jpg'></img>
            <div className='home_row'>
                <Product title='Dog Food' price={1000} image='https://5.imimg.com/data5/SELLER/Default/2021/6/KP/SO/NP/97348387/pet-dry-food.jpg' rating={5} type='Donate'/>
                <Product title='Cow Brush' price={2000000} image='https://images-cdn.ubuy.co.in/635b031d14468050607e0374-easyswing-cow-brush-medium-cow.jpg' rating={4} type='Donate'/>
            </div>
            <div className='home_row'>
            <Product title='Horse Shoe' price={5023} image='https://5.imimg.com/data5/ANDROID/Default/2022/9/JH/TI/XM/2303315/product-jpeg-500x500.jpg' rating={4} type='Donate'/>
            <Product title='Cat Food' price={1000} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuAfgugPPxPXd80smnPO18AVI3X9nfMwZlQ&s' rating={5} type='Donate'/>
            <Product title='Turtle Food' price={1400} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNR1LEb9pZ-YjsxwdKsExpPCG1mlLCS61AQ&s' rating={5} type='Donate'/>
            </div>
            <div className='home_row'>
            <Product title='Fruits And Vegetables' price={5000} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5aKJvS1R-vMpDRqxooPDoObUJFYqouYKkQ&s' rating={5} type='Donate'/>
            </div>
        </div>
    </div>
  )
}

export default Home
