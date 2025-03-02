import { Injectable } from '@angular/core';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  protected productList: Category[] = [{
    id: 1,
    name: 'Magnetic_Cubes',
    productList: [
      {
        id:1,
        photo: "GAN_356M.jpg",
        name: "Кубик Рубика GAN 356M магнитный",
        description: "Магнитный кубик Рубика 5.6x5.6x5.6 см",
        rating: 5,
        link: "https://kaspi.kz/shop/p/kubik-rubika-gan-356m-magnitnyi-109783051/",
        likes:0
      },
      {
        id:2,
        photo: "GAN_356XS.jpg",
        name: "Магнитный Кубик Рубика 3x3 GAN356 XS Magnetic",
        description: "Магнитный кубик 10х15 см, пластик и металл",
        rating: 5,
        link: "https://kaspi.kz/shop/p/gan-magnitnyi-kubik-rubika-3x3-gan356-xs-magnetic-108482609/",
        likes:0
      },
      {
        id:3,
        photo: "GAN_356M_Lite.jpg",
        name: "Кубик Рубика GAN 356M lite",
        description: "Пластиковый кубик 5.6x5.6x5.6 см",
        rating: 5,
        link: "https://kaspi.kz/shop/p/gan-kubik-rubika-3x3-356m-lite-108060916/",
        likes:0
      }
    ]
  },
  {
    id: 2,
    name: 'Classic_Cubes',
    productList: [
      {
        id:4,
        photo: "QiYi5by5.jpg",
        name: "Кубик Рубика QiYi MoFangGe WuShuang 5x5",
        description: "Мультиколор, без магнитов",
        rating: 5,
        link: "https://kaspi.kz/shop/p/kubik-rubika-golovolomka-qiyi-mofangge-wushuang-5x5-47011-2-mul-tikolor-bez-magnitov-112908453/",
        likes:0
      },
      {
        id:5,
        photo: "QiYi_3x3.jpeg",
        name: "Кубик Рубика QiYi Toys головоломка пластик",
        description: "Пластиковый кубик 5.6х5.6х5.6 см",
        rating: 5,
        link: "https://kaspi.kz/shop/p/kubik-rubika-qiyi-toys-golovolomka-plastik-117038999/",
        likes:0
      },
      {
        id:6,
        photo: "QiYi_2x2.jpg",
        name: "Головоломка QiYi Toys Кубик Рубика 2x2 QiDi (S)",
        description: "Пластиковый кубик 5х5х5 см, подходит для всех",
        rating: 5,
        link: "https://kaspi.kz/shop/p/golovolomka-qiyi-toys-kubik-rubika-2h2-qidi-s-plastik-100068556/",
        likes:0
      }
    ]
  },
  {
    id: 3,
    name: 'Special_Editions',
    productList: [
      {
        id:7,
        photo: "GAN_Speedcube.jpg",
        name: "Кубик Рубика GAN Speedcube",
        description: "Пластиковый кубик Рубика размером 5.6x5.6x5.6 см",
        rating: 5,
        link: "https://kaspi.kz/shop/p/kubik-rubika-gan-speedcube-plastik-112153487/",
        likes:0
      },
      {
        id:8,
        photo: "GAN_356M_Multicolor.jpg",
        name: "Кубик Рубика GAN 356 M мультиколор",
        description: "Пластиковый кубик 5.6x5.6x5.6 см",
        rating: 5,
        link: "https://kaspi.kz/shop/p/gan-kubik-rubika-3x3-356-m-mul-tikolor-108060858/",
        likes:0
      },
      {
        id:9,
        photo: "QiYi_White.jpg",
        name: "Кубик Рубика QiYi Toys головоломка пластик",
        description: "Белый-оранжевый кубик 6х3 см",
        rating: 5,
        link: "https://kaspi.kz/shop/p/kubik-rubika-qiyi-toys-golovolomka-plastik-112816782/",
        likes:0
      }
    ]
  }];
  constructor() { }

  getAllproducts() : Category[] {
    return this.productList;
  }

  getCategoryById(id: Number): Category | undefined{
    return this.productList.find(category => category.id === id)
  }
}
