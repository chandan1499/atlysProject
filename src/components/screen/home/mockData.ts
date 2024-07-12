import { PostContainerProps } from "./utils";

const mockPostData: PostContainerProps[] = [
  {
    userName: "Matelda Kinman",
    postTime: "7/1/2024",
    postContent:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    commentsCount: 306,
    proficSrc: "http://dummyimage.com/209x100.png/ff4444/ffffff",
  },
  {
    userName: "Cordy Endersby",
    postTime: "7/7/2024",
    postContent:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    commentsCount: 383,
    proficSrc: "http://dummyimage.com/117x100.png/dddddd/000000",
  },
  {
    userName: "Megan Gilbart",
    postTime: "7/1/2024",
    postContent:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    commentsCount: 554,
    proficSrc: "http://dummyimage.com/126x100.png/cc0000/ffffff",
  },
  {
    userName: "Licha Rilings",
    postTime: "7/3/2024",
    postContent:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    commentsCount: 605,
    proficSrc: "http://dummyimage.com/190x100.png/5fa2dd/ffffff",
  },
  {
    userName: "Wren Hallet",
    postTime: "7/6/2024",
    postContent:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    commentsCount: 450,
    proficSrc: "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
  },
  {
    userName: "Gene Wollers",
    postTime: "7/4/2024",
    postContent:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    commentsCount: 385,
    proficSrc: "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
  },
  {
    userName: "Eugenia Molan",
    postTime: "7/1/2024",
    postContent:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    commentsCount: 988,
    proficSrc: "http://dummyimage.com/131x100.png/dddddd/000000",
  },
  {
    userName: "Elyssa Pead",
    postTime: "7/3/2024",
    postContent:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    commentsCount: 409,
    proficSrc: "http://dummyimage.com/235x100.png/dddddd/000000",
  },
  {
    userName: "Malena MacPhee",
    postTime: "7/9/2024",
    postContent:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    commentsCount: 746,
    proficSrc: "http://dummyimage.com/174x100.png/ff4444/ffffff",
  },
  {
    userName: "Babs Folley",
    postTime: "7/10/2024",
    postContent:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    commentsCount: 366,
    proficSrc: "http://dummyimage.com/196x100.png/ff4444/ffffff",
  },
];

export default mockPostData;
