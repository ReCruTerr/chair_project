import React from "react";
export default function Header() { 
   const first_head = [
      {
         name:'Доставка',
         link:'/dostavka'
      },
      {
         name:'Оплата',
         link:'/dostavka'
      },
      {
         name:'Отзывы',
         link:'/dostavka'
      },
      {
         name:'Вопрос - ответ',
         link:'/dostavka'
      },
      {
         name:'Контакты',
         link:'/dostavka'
      }
   ];
   
  return ( 
   <> 
   <div className=" bg-[#e6e6e6] flex   justify-evenly h-16 w-full items-center text-2xl text-[#333333]  ">
      {
         first_head.map((el,index) =>(
            <>
            <a key={index} href={el.link}>{el.name}</a>
            </>
         ))
      }
   </div> 
   <div className=" flex justify-evenly mt-6 gap-6 w-">
      <div className="flex justify-center gap-10 items-center"> 
         <img src="/public/logo.svg" alt="" />
         <h2 className=" text-lime-500 text-3xl" >B E A U T Y</h2>
      </div>
      <div className=" flex justify-start   gap-10">
         <span className=" mt-3 text-2xl">8 (812) 123-45-67</span> 
         <button className=" w-64 h-14 text-xl border rounded-full border-[#66c05d]    text-center  pl-2 pr-2 ">Обратный звонок</button>
      </div>
   </div> 
   <div className=" flex justify-evenly items-center    h-20 w-full  gap-2 ">
      <a href=""><h4 className=" text-xl">Парикмахерская</h4></a>
      <a href=""><h4 className=" text-xl">Барбершоп</h4></a>
      <a href=""><h4 className=" text-xl">Маникюр</h4></a>
      <a href=""><h4 className=" text-xl">Педикюр</h4></a>
      <a href=""><h4 className=" text-xl">Массаж</h4></a>
      <a href=""><h4 className=" text-xl">Мебель</h4></a>
   </div> 
   </> 
  )
}
