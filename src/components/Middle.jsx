import React from "react";
const chair = [
  {
    img: "/public/Rectangle 4.svg",
    title: "Парикмахерское кресло «Норм» гидравлическое",
    price: 9900 + " ₽",
  },
  {
    img: "/public/Rectangle 4.svg",
    title: "Парикмахерское кресло «Норм» гидравлическое",
    price: 9900 + " ₽",
  },
  {
    img: "/public/Rectangle 4.svg",
    title: "Парикмахерское кресло «Норм» гидравлическое",
    price: 9900 + " ₽",
  },
  {
    img: "/public/Rectangle 4.svg",
    title: "Парикмахерское кресло «Норм» гидравлическое",
    price: 9900 + " ₽",
  },
];
const icons = [
  "/public/youtube.svg",
  "/public/vk.svg",
  "/public/facebook-logo.svg",
  "/public/instagram.svg",
];

export function Middle() {
  return (
    <>
      <div className=" bg-[url('/public/greenFon.svg')]  mt-4  w-full  h-[604px] flex items-center ">
        <div className=" flex flex-col  gap-16 ml-10 ">
          <h1 className=" text-white  text-[55px] ">Супер кресло</h1>
          <span className=" text-xl text-white">
            Текст акции всегда отражает суть, а не просто болтовню, поэтому
            внимательнее
          </span>
          <button className="  max-w-56  h-[60px] rounded-full  border border-white text-white text-xl">
            Подробнее
          </button>
        </div>
      </div>
      <div className=" bg-gray-200  max-w-[1920px] w-full  relative bottom-[48px]">
        <h1 className="text-black text-[40px]    h-full mt-12 font-bold ">
          Специальные предложения
        </h1>
        <div className=" flex   justify-evenly    w-full mt-24  max-h-[1000px] h-full   ">
          {chair.map((el, index) => (
            <div
              key={index}
              className=" flex flex-col gap-5 max-w-[255px] max-h-[463px]  bg-gray-200"
            >
              <img src={el.img} alt="" />
              <span className="text-[18px]  text-center">{el.title}</span>
              <h3 className="text-center text-xl font-bold"> {el.price} </h3>
              <div className="text-center">
                <button className="  max-w-[150px]  w-full h-[45px] rounded-full bg-[#66c05d] text-white ">
                  Купить
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex gap-[350px]  mt-[200px]  justify-center  flex-wrap">
          <div className=" bg-[#66c05d]  max-w-[740px] w-full   h-[340px] flex justify-evenly items-center gap-[70px]">
            <div className=" flex flex-col  gap-[30px]   items-start">
              <h3 className=" text-white text-3xl font-bold ">
                Получайте бонусы и подарки
              </h3>
              <span className=" text-[20px] text-white">
                Каждый месяц разыгрываем <br />
                10 000 рублей для наших клиентов
              </span>
              <input
                type="email"
                className=" rounded-full h-[35px] max-w-[225px]  w-full border-zinc-50  outline-none text-center "
                placeholder="Введите e-mail"
              />
            </div>
            <img src="/public/Group.svg" alt="" />
          </div>
          <div className="bg-[#66c05d]  max-w-[740px] w-full   h-[340px] flex items-center  pl-8">
            <div className="flex flex-col gap-[30px]  text-left">
              <h2 className=" text-3xl text-white  font-bold ">
                Заходите к нам
              </h2>
              <span className="text-[20px] text-white">
                Более 300 магазинов по всей России
              </span>
              <button className=" rounded-full  max-w-[190px] w-full h-[45px] text-white border-zinc-50 border-2 text-[18px]">
                Карта магазинов
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-36 justify-center">
        <div className=" flex gap-8  max-w-[500px] w-full">
          {icons.map((icon, index) => (
            <button
              key={index}
              className=" max-w-[55px] w-full h-[55px] rounded-full border-[#66c05d] border-2 flex justify-center items-center"
            >
              <img
                src={icon}
                alt=""
                className=" max-w-[32px] w-full h-[23px]"
              />
            </button>
          ))}
        </div>
        <div>
          <span className=" text-2xl text-[#333333]">
            198555, Невский пр. 140, офис 140
          </span>
        </div>
        <div className=" flex   gap-[50px] max-w-[525px]   w-full ">
          <span className=" pt-3 text-xl">8 (812) 123-45-67</span>
          <button className=" w-64 h-14 text-xl border rounded-full border-[#66c05d]  text-center  pl-2 pr-2 ">
            Обратный звонок
          </button>
        </div>
      </div>
    </>
  );
}
