function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
}

function Profile2() {
  return <img src="https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/hu_tao/image.png?strip=all&quality=100" alt="Hu Tao"/>
}

export default function Gallery() {
  return (
    <section>

      <h1>Amazing scientists</h1>
      <Profile />

      <h1>Hu Tao</h1>
      <Profile2 />

    </section>
  )
}
