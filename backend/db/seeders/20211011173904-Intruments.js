'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Instruments', [
      {
        userId: 1,
        manufacturerId: 1,
        typeId: 1,
        name: "RGA 32",
        description: "Nam eu nisi vitae ligula tristique eleifend. Suspendisse potenti. Donec ut tellus in enim dictum porttitor. Morbi venenatis, nunc ac convallis lobortis, enim velit varius leo, in mattis magna augue ac mauris. Donec pulvinar, urna ut dapibus pharetra, eros ligula blandit mi, aliquam pulvinar quam neque sit amet ligula. Quisque posuere et nulla sit amet tincidunt. Suspendisse potenti. Duis imperdiet massa eget neque vehicula, in sagittis orci lobortis. Curabitur nec urna mattis, porta sapien id, lacinia risus. Nam in massa et orci hendrerit porttitor non volutpat orci. Aliquam congue nulla suscipit, sollicitudin massa quis, porttitor metus. Phasellus euismod nunc et justo eleifend, sit amet cursus enim pulvinar. Sed nec erat malesuada, sollicitudin justo eu, vestibulum mi. Sed consectetur porta orci sed vehicula. Etiam iaculis convallis tincidunt. Vivamus aliquet, augue ac convallis malesuada, metus erat porta erat, et ullamcorper dui ipsum ac sem.",
        imageSrc: "https://i.imgur.com/XqNtFvc.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        manufacturerId: 3,
        typeId: 2,
        name: "Fender Bass Guitar",
        description: "Maecenas sed metus ex. Sed vitae mauris eget neque congue hendrerit. Nulla vel lacinia arcu, id varius libero. Integer viverra sapien at tortor congue, in tincidunt est elementum. Donec non dapibus sem. Sed a ligula sit amet leo semper blandit sed ac massa. Quisque quam magna, convallis vitae nisl sit amet, lacinia rutrum nunc. Duis pretium vestibulum enim, nec venenatis est pretium et. Praesent tellus mi, pharetra cursus mattis non, faucibus vel ante. Nunc at congue mauris, vulputate pulvinar erat. Vestibulum aliquam auctor orci et auctor. Nam dapibus faucibus scelerisque. Donec posuere vulputate tortor, ac eleifend metus consectetur in. Curabitur venenatis convallis nibh. Suspendisse fermentum posuere nulla at condimentum",
        imageSrc: "https://i.imgur.com/mE1oAQZ.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        manufacturerId: 4,
        typeId: 3,
        name: "Hippie Acoustic Guitar",
        description: "Nulla a varius leo. Vestibulum sed dolor vestibulum, aliquet neque id, cursus quam. Aenean sed ligula in ipsum dictum mattis id pulvinar nisi. Cras ultrices neque et tristique tempor. Aliquam dignissim pharetra sem. Quisque mollis lorem tortor, nec finibus nisi aliquam a. Nullam molestie risus sed quam varius malesuada. Donec tincidunt pulvinar augue sagittis imperdiet. Cras mauris elit, efficitur porta posuere in, dapibus in ligula. Nulla efficitur ullamcorper velit vel tincidunt.",
        imageSrc: "https://i.imgur.com/fBIBgE3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        manufacturerId: 4,
        typeId: 3,
        name: "Generic Acoustic Guitar",
        description: "Sed dignissim quam auctor pretium suscipit. Suspendisse potenti. Morbi vehicula dui in diam imperdiet, in pharetra leo semper. Proin in facilisis dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut hendrerit orci ac nunc tristique dapibus. Ut eget nisi eu metus fermentum vulputate. Aenean vel tempor augue. Aenean mollis ut felis quis aliquet. Aliquam egestas eleifend lacus, a eleifend metus lobortis id. Integer ultrices ipsum vitae sem ornare, quis suscipit lacus dignissim. Maecenas lobortis nec mi nec aliquet. Donec ac est hendrerit, posuere elit ac, cursus ligula. Vestibulum sodales, sem ut venenatis malesuada, lorem odio maximus est, vel suscipit velit diam non nibh. Maecenas quam sapien, vehicula eu nunc tempus, malesuada ultricies felis.",
        imageSrc: "https://i.imgur.com/kKIfjs3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        manufacturerId: 10,
        typeId: 5,
        name: "Keystation 49",
        description: "Pellentesque vel elit nec metus tempus venenatis. Praesent eu ultricies leo. Sed at rutrum turpis. Etiam hendrerit odio elementum elit consequat sollicitudin. Duis sed dictum quam, vel feugiat eros. Donec sit amet lobortis mi, quis efficitur tortor. Pellentesque a ex ornare, gravida odio a, egestas nibh. Curabitur ultricies feugiat lorem, ut mattis ante. Donec non turpis rhoncus, fringilla arcu vel, finibus justo. Vivamus placerat egestas vulputate. Cras lobortis sem massa, at aliquam dolor dapibus eu. Cras et ultrices nulla, eu efficitur nulla. Pellentesque elementum arcu aliquet sem pharetra, sed gravida ex laoreet. Aliquam aliquam volutpat iaculis.",
        imageSrc: "https://i.imgur.com/zjVbqrC.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        manufacturerId: 8,
        typeId: 5,
        name: "Impact GX49",
        description: "Nam sit amet quam bibendum, tincidunt ipsum ac, gravida metus. Morbi ullamcorper leo a magna placerat gravida. Quisque at volutpat lacus. Pellentesque cursus turpis arcu, quis interdum odio laoreet ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id malesuada metus. Nunc commodo fringilla enim, eget consectetur diam lacinia ac. Suspendisse mollis, nunc sit amet volutpat porta, mauris ex scelerisque sapien, eu facilisis nunc sem vel elit. Integer vel dolor in massa commodo efficitur eget et enim.",
        imageSrc: "https://i.imgur.com/curt35N.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        manufacturerId: 6,
        typeId: 4,
        name: "U3t",
        description: "In vestibulum sit amet turpis id sagittis. Integer sit amet dui auctor, facilisis nulla eu, luctus metus. Donec faucibus eu tellus quis hendrerit. Donec vestibulum sem neque, quis tempus sem hendrerit sit amet. Mauris eu erat est. Quisque maximus ex urna, sit amet convallis sem tincidunt ut. Duis id luctus augue. Sed ante quam, lacinia non tortor ultricies, congue euismod elit. Suspendisse id risus varius, consequat ante eget, efficitur diam. Aenean sit amet semper sem. Ut vitae tellus vel justo sollicitudin ullamcorper quis imperdiet lectus.",
        imageSrc: "https://i.imgur.com/pATLADv.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        manufacturerId: 9,
        typeId: 6,
        name: "JX-8P",
        description: "Donec aliquet lorem ut ultricies venenatis. Nunc quis nisi tortor. Nam viverra velit magna, vel ultrices nunc fermentum ac. Mauris elementum, elit nec efficitur venenatis, purus eros luctus magna, sit amet congue justo est et ligula. Suspendisse sit amet faucibus erat, a varius tortor. Morbi dignissim nisi vel gravida finibus. In tristique diam a nunc auctor, sed lobortis augue elementum. Mauris faucibus mattis metus, a ultrices purus bibendum nec. Pellentesque scelerisque commodo tincidunt. Integer volutpat eros nec aliquet dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer semper porttitor interdum.",
        imageSrc: "https://i.imgur.com/UVLAr2Q.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        manufacturerId: 7,
        typeId: 6,
        name: "Poly-61",
        description: "Curabitur vel risus elementum, sollicitudin nibh egestas, varius libero. Duis vel hendrerit neque. Integer eget odio a tellus pellentesque tincidunt. Nunc pellentesque velit eleifend, sodales felis quis, condimentum erat. Nunc gravida varius malesuada. Curabitur eu rutrum mi. Proin interdum tempor pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac quam id nisi interdum blandit. Phasellus volutpat mollis nisi et volutpat. Curabitur vel sapien cursus, convallis dui et, fringilla arcu. Curabitur tincidunt lectus id dolor vulputate fringilla.",
        imageSrc: "https://i.imgur.com/19kDqNC.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        manufacturerId: 3,
        typeId: 1,
        name: "Stratocaster",
        description: "Aenean auctor sollicitudin commodo. Donec dictum mauris ac commodo molestie. Donec tincidunt tincidunt purus, at cursus nibh faucibus vehicula. Nulla non nibh consequat justo sollicitudin cursus eu sit amet eros. Nulla sit amet convallis quam. Curabitur blandit nisl ac enim hendrerit ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam luctus sit amet nisl eleifend auctor. Integer pretium nisl et malesuada vulputate. Sed est arcu, tincidunt nec nisl consectetur, malesuada luctus ipsum. Nam porta suscipit posuere. Duis fermentum nisl ac dui dignissim pharetra in in lacus. Donec vitae libero euismod, lobortis massa nec, eleifend ex. Vivamus euismod vel libero et aliquet. Sed consectetur vestibulum vulputate. Sed ornare tellus at auctor maximus.",
        imageSrc: "https://i.imgur.com/xFlfZBO.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Instruments', null, {});

  }
};
