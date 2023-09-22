export type initItems = {
  id: number,
  title: string,
  content: string,
  img: string,
}

export const item: Array<initItems> = [
  {
    id: 1,
    title: 'ไอหน้าหี',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi excepturi, modi, ratione soluta rem quibusdam voluptate natus voluptas maiores numquam laboriosam libero laborum eum perspiciatis quia eos atque qui dolorum.',
    img: require("../../assets/Logo.png"),
  },
  {
    id: 2,
    title: 'ดูแต่มาลี',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi excepturi, modi, ratione soluta rem quibusdam voluptate natus voluptas maiores numquam laboriosam libero laborum eum perspiciatis quia eos atque qui dolorum.',
    img: require("../../assets/Logo.png"),
  },
  {
    id: 3,
    title: 'เปรม',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi excepturi, modi, ratione soluta rem quibusdam voluptate natus voluptas maiores numquam laboriosam libero laborum eum perspiciatis quia eos atque qui dolorum.',
    img: require("../../assets/Logo.png"),
  },
];