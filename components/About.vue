<template>
  <div>
    <a class="anchor" id="about"></a>
    <v-responsive max-width="1300px" class="margined mx-auto">
      <div class="about pb-14">
        <h1 class="about-title px-6 px-sm-10 px-md-16 pt-10">
          About The CreaMind!
        </h1>
        <div class="pt-md-5 px-6 px-sm-10 px-md-16">
          <div class="about-text">
            Hello from The Crea Mind-where children discover the magic of books!
          </div>
          <div class="about-text">
            The CreaMind was born from an innovative "Why Not". Why not let the
            plethora of books at hand have a wider reach?" Dr.Fasila Siddique,
            founder of The Crea Mind, fondly conceived this colorful idea to
            brighten the kids of the society and help them reach their full
            potential. We are an independent reading and activity club for kids
            based in Wayanad, India. It is a little venture to engage the little
            minds out there in the dream world of books. And help parents have
            their kids offscreen in this all-on-screen era. Chosen appositely,
            books never fail to fascinate kids. Lack of books to choose from is
            no more a problem. Come choose a book you think your kid will love.
            <strong style="color: crimson">Rent, Read, Return!</strong>
            Enjoy the reading and go for the next. Instill the Love of Books in
            your kid which surely adds to the person they'll become.
          </div>
        </div>
      </div>
    </v-responsive>
  </div>
</template>

<style scoped lang="scss">
.about-title {
  font-size: 30px;
  font-family: 'Nexa-Bold';
  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 27px;
  }
}
.about {
  color: black;
  font-family: 'Nexa-Regular';
  letter-spacing: 1px;
  line-height: 2;
  text-align: justify;
}
.about-text {
  @media (max-width: 600px) {
    font-size: 14px;
  }
}
a.anchor {
  display: block;
  position: relative;
  top: -150px;
  visibility: hidden;
}
</style>
