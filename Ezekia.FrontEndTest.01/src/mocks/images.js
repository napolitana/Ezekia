const images = {
  space: () => {
    return [
      {
        src: '/src/assets/images/space/comet.jpg',
        alt: 'A comet crossing the sky.',
        author:
          'Photo by <a href="https://unsplash.com/@betagamma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniil Silantev</a> ',
      },
      {
        src: '/src/assets/images/space/earth.jpg',
        alt: 'Earth seen from space at night.',
        author:
          'Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniil Silantev</a> ',
      },
      {
        src: '/src/assets/images/space/mountains.jpg',
        alt: 'Mountains, a lake reflecting the mountains and a starry sky.',
        author:
          'Photo by <a href="https://unsplash.com/@eberhardgross?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">eberhard 🖐 grossgasteiger</a>',
      },
      {
        src: '/src/assets/images/space/moon.jpg',
        alt: 'Moon fases.',
        author:
          'Photo by <a href="https://unsplash.com/@tegethoff?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mark Tegethoff</a>',
      },
      {
        src: '/src/assets/images/space/astronaut.jpg',
        alt: 'A small astronaut toy sitting on the moon.',
        author:
          'Photo by <a href="https://unsplash.com/@kobbyfotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kobby Mendez</a>',
      },
    ]
  },
  dinosaurs: () => {
    return [
      {
        src: '/src/assets/images/dinosaurs/dinosaur1.jpg',
        alt: 'A Tyrannosaurus rex fossil.',
        author:
          'Photo by <a href="https://unsplash.com/@jonjons?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jon Butterworth</a>',
      },
      {
        src: '/src/assets/images/dinosaurs/dinosaur2.jpg',
        alt: 'Two dinosaurs in the field.',
        author:
          'Photo by <a href="https://unsplash.com/@kaenes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rafał Danhoffer</a>',
      },
      {
        src: '/src/assets/images/dinosaurs/dinosaur3.jpg',
        alt: 'A scary Tyrannosaurus rex head.',
        author:
          'Photo by <a href="https://unsplash.com/@raymondo600?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ray Harrington</a>',
      },
    ]
  },
  wildlife: () => {
    return [
      {
        src: '/src/assets/images/wildlife/wildlife1.jpg',
        alt: 'A cute raccoon.',
        author:
          'Photo by <a href="https://unsplash.com/@quinten149?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Quinten de Graaf</a>',
      },
      {
        src: '/src/assets/images/wildlife/wildlife2.jpg',
        alt: 'A big tiger lying on a rock.',
        author:
          'Photo by <a href="https://unsplash.com/@smeeet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Smit Patel</a>',
      },
      {
        src: '/src/assets/images/wildlife/wildlife3.jpg',
        alt: 'A medium size white bird in the woods.',
        author:
          'Photo by <a href="https://unsplash.com/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vincent van Zalinge</a>',
      },
      {
        src: '/src/assets/images/wildlife/wildlife4.jpg',
        alt: 'A big sea turtle in the ocean',
        author:
          'Photo by <a href="https://unsplash.com/@wexor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wexor Tmg</a>',
      },
      {
        src: '/src/assets/images/wildlife/wildlife5.jpg',
        alt: 'A cute squirtle.',
        author:
          'Photo by <a href="https://unsplash.com/@gerandeklerk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Geran de Klerk</a>',
      },
    ]
  },
  ocean: () => {
    return [
      {
        src: '/src/assets/images/ocean/ocean1.jpg',
        alt: 'A green fish.',
        author:
          'Photo by <a href="https://unsplash.com/@szutsi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gábor Szűts</a>',
      },
      {
        src: '/src/assets/images/ocean/ocean2.jpg',
        alt: 'A small blue fish with yellow details.',
        author:
          'Photo by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a>',
      },
      {
        src: '/src/assets/images/ocean/ocean3.jpg',
        alt: 'A coral reef in the ocean.',
        author:
          'Photo by <a href="https://unsplash.com/@marekokon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marek Okon</a>',
      },
      {
        src: '/src/assets/images/ocean/ocean4.jpg',
        alt: 'A jellyfish.',
        author:
          'Photo by <a href="https://unsplash.com/@tavis_beck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tavis Beck</a> on <a href="https://unsplash.com/s/photos/fish?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      },
      {
        src: '/src/assets/images/ocean/ocean5.jpg',
        alt: 'A orange fish with white stripes outlined in black.',
        author:
          'Photo by <a href="https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Clode</a>',
      },
    ]
  },
}

export function getRandomImage(param) {
  return images[param]()[
    Math.floor(Math.random() * images[param]().length - 1) + 1
  ]
}
