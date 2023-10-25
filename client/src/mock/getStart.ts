export type initItems = {
  id: number,
  title: string,
  content: string,
  img: string,
}

export const item: Array<initItems> = [
  {
    id: 1,
    title: 'BloodHub',
    content: 'BloodHub เป็นแอปพลิเคชันสำหรับการบริจาคโลหิต ตั้งแต่การนัดหมายบริจาค การบริจาคโลหิต ข่าวสารการรับบริจาคโลหิตของโรงพยาบาลต่างๆ รวมไปถึงการสอบถามหาผู้ประสงค์บริจาคเลือดตามหมู่เลือด',
    img: require("../../assets/Logo.png"),
  },
  {
    id: 2,
    title: 'วิธีการใช้งาน',
    content: 'การใช้งานแอปพลิเคชันของเรานั้นไม่ยากเลย ทุกอย่างถูกรวบรวมไว้ให้คุณแล้ว หากคุณสนใจบริการด้านใด คุณสามารถกดปุ่มเพื่อเข้าไปดูรายละเอียดต่างๆ เพียงไม่กี่ขั้นตอนได้ในทันที',
    img: require("../../assets/Logo.png"),
  },
  {
    id: 3,
    title: 'มีข้อสงสัย?',
    content: 'หากคุณมีข้อสงสัยหรือพบความผิดพลาดภายในแอปพลิเคชันของเรา สามารถติดต่อสอบถามได้หลายช่องทาง ได้แก่ เพจ Facebook : BloodHub หรือ เบอร์ : 1256',
    img: require("../../assets/Logo.png"),
  },
];